import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { RestService } from '../api/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  message = 'Check out the GharyalTv!';
  url = 'http://gharyal.com/';
  posts : any;

 constructor(private platform: Platform,
  private socialSharing: SocialSharing, private rest:RestService,public router: Router) { }

  ngOnInit() {
    console.log('test1');
   this.rest.presentLoading();
   // this.rest.get('apis/bloglist/')
   // .subscribe(val => {
   //    let filteredArray = val.map((element) =>
   //    element.filter(x => x.post_id === '1'));
   //    console.log('filteredArray', filteredArray);
   //    this.posts = filteredArray;
   //    //console.log(oneCateData);
   // },err => {

   // });
   this.rest.getAllFavoriteFilms().then(result => {
      if(result.length > 0){
        this.rest.get('apis/bloglist/')
        .subscribe(val => {
         let filteredArray = val.map((element) =>
         element.filter(x => result.some((z) => z === x.post_id)));
              this.posts = filteredArray;
        }, err => {
          this.rest.presentToastWithOptions(err.message);
        });
      }else{
        //this.rest.presentToastWithOptions('We Are not Fav list Found.');
      }
    });
   this.rest.dismissLoading();
  }

  async sharePicker()
   {
      this.platform.ready()
      .then(() =>
      {

         this.socialSharing.share(this.message, null, null, this.url)
         .then((data) =>
         {
            console.log('Shared via SharePicker');
         })
         .catch((err) =>
         {
            console.log('Was not shared via SharePicker');
         });

      });
   }

   openDetails(id,name){
      const url = 'details/' + id + '/' + name;
        this.router.navigateByUrl(url);
    }

}
