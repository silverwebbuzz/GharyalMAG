import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

const STORAGE_KEY = 'favoritePosts';
const httpOptions = {
  headers: new HttpHeaders()
};

const API_URL = "http://gharyal.com/index.php/rest/V1";
@Injectable({
  providedIn: 'root'
})
export class RestService {
  isLoading = false;
  constructor(private http: HttpClient,public toastCtrl: ToastController, public loadingController: LoadingController,public storage: Storage) { }

  private handleError(error: HttpErrorResponse) {
    //console.log('log : ',error);
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      //console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      // console.error(
      //   `Backend returned code ${error.status}, ` +
      //   `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(error.error);
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  get(URL: string): Observable<any>{
    let url = `${API_URL}/${URL}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  async presentToastWithOptions(message?, cssClass?, position?) {
    const toast = await this.toastCtrl.create({
      message: message ? message : null,
      duration: 5000,
      position: position ? position : 'bottom',
      cssClass: cssClass ? cssClass : 'dark-trans login-toster',
      closeButtonText: 'OK',
      showCloseButton: true
    });
    toast.present();
  }

  async presentToast(message?) {
    const toast = await this.toastCtrl.create({
      message: message ? message : null,
      cssClass: 'my-custom-class',
      animated: true,
      duration: 1000,
      showCloseButton: false
    });
    toast.present();
  }

  async presentLoading() {
    this.isLoading = true;
    return await this.loadingController.create({
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    }).then(a => {
      a.present().then(() => {
        if (!this.isLoading) {
          a.dismiss();
        }
      });
    });
  }

  async dismissLoading(){
    this.isLoading = false;
    return await this.loadingController.dismiss();
  }

  isFavorite(postId) {
    return this.getAllFavoriteFilms().then(result => {
      return result && result.indexOf(postId) !== -1;
    });
  }

  favoriteFilm(postId) {
    return this.getAllFavoriteFilms().then(result => {
      if (result) {
        result.push(postId);
        return this.storage.set(STORAGE_KEY, result);
      } else {
        return this.storage.set(STORAGE_KEY, [postId]);
      }
    });
  }

  unfavoriteFilm(postId) {
    return this.getAllFavoriteFilms().then(result => {
      if (result) {
        var index = result.indexOf(postId);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY, result);
      }
    });
  }
  getAllFavoriteFilms() {
    return this.storage.get(STORAGE_KEY);
  }
}
