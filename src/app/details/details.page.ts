import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { NavController, Platform, ModalController, MenuController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { RestService } from '../api/rest.service';
import { Storage } from '@ionic/storage';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  fontSize : any = 18;
  category_name: any;
  post_id : any;
  post_title :any;
  post_content :any;
  post_featured_img : any;
  post_publish_date : any;
  isFavorite = false;
  message = 'Check out the Gharyal MAG!';
  url = 'http://gharyal.com/';
   post : any;
  constructor(private router: Router,
    private navCtrl: NavController,
    private platform: Platform,
    private socialSharing: SocialSharing,
    public route: ActivatedRoute,
    public rest: RestService,
    private modalCtrl: ModalController,
    private menu:MenuController,
    private storage : Storage) {
      this.category_name = this.route.snapshot.paramMap.get('name');
      this.post_id = this.route.snapshot.paramMap.get('id');
      this.rest.presentLoading();
      this.storage.get('font-size').then((val) => {
        if(val){
          this.fontSize = val;
        }
      });
      this.rest.get('apis/blogdetail/' + this.post_id)
         .subscribe(val => {
            if (val) {
             let details = JSON.parse(val);
            this.post_id = details.post_id;
            this.post_title = details.title;
            this.post_featured_img = details.featured_img;
            this.post_content = details.content;
            this.post_publish_date = details.publish_time;
            this.rest.isFavorite(this.post_id).then(isFav => {
               if(isFav){ this.isFavorite = true;}
            });
            }
         }, err => {
            console.log('error:', err);
         });
      this.closeMenu();
      this.closeModal();
      this.rest.dismissLoading();
     
     }

  ngOnInit() {
   
  }

  openGallery(post_id){
    const url = '/gallery/' + post_id;
    this.router.navigateByUrl(url);
  }
  async closeMenu(){
    try{
      const elementMenu = this.menu.getOpen();
      if(elementMenu !== null){
        this.menu.close();
        return ;
      }
    } catch{

    }
  }
  async closeModal(){
    try{
      const elementModal = await this.modalCtrl.getTop();
      if(elementModal){
        elementModal.dismiss();
        return ;
      }
     } catch {

     }
  
    
  }

  back(){
    this.navCtrl.pop();
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

   addtofav(postId) {
      this.rest.isFavorite(postId).then(isFav => {
        if (isFav) {
          this.rest.presentToast('This Blog Already Exists in Fav List.');
        } else {
          
            this.isFavorite = true;
          this.rest.favoriteFilm(postId).then(() => {
            this.rest.presentToast('Added in Fav List.');
          })
        }
      });
    }

    unFav(postId) {
      this.rest.unfavoriteFilm(postId).then(() => {
        this.rest.getAllFavoriteFilms().then(result => {
          this.isFavorite = false;
        });
      });
    }

    goBack(){
      this.navCtrl.back();
    }

}
