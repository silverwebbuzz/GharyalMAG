import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController, Platform } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../api/rest.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  message = 'Check out the Gharyal MAG!';
  url = 'http://gharyal.com/';
  post_id : any;
  current_slider_index : number = 0;
  total_slider_number : number = 6;
  @ViewChild('Slides_banner') slider: IonSlides;
  @ViewChild('Slides_banner_thumb') slider_thumb: IonSlides;

  SliderArray: any = [];
  SlideOptionthumb = {
    loop: false,
    centeredSlides: true,
    slidesPerView: 3,
    speed: 100,
    direction: 'horizontal',
    spaceBetween: 5,
    zoom: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  };

  SlideOption = {
    loop: false,
    centeredSlides: false,
    slidesPerView: 1,
    speed: 100,
    zoom: true,
    effect: 'fade',
    spaceBetween: 0,
    thumbs: {
      swiper: this.slider_thumb
    }
  };

  constructor(private navCtrl: NavController,
    private platform: Platform,
    public route: ActivatedRoute,
    private rest: RestService,
    private socialSharing: SocialSharing) { 
      this.post_id = this.route.snapshot.paramMap.get('id');
      this.rest.presentLoading();
      this.rest.get('apis/imagegallery/' + this.post_id)
    .subscribe(val => {
      this.total_slider_number = val.length;
      if(val.length > 0){
        this.current_slider_index = 1;
        this.SliderArray = val;
      }else{
        this.SliderArray = null;
      }
    },err => {
    });
    this.rest.dismissLoading();
  }

  clickThumbFunction(i) {
    this.slider.slideTo(i);
    this.slider_thumb.slideTo(i);
  }
  SlideDidChange(){
    this.slider.getActiveIndex().then(
      (index)=>{
        this.slider_thumb.slideTo(index);
        this.current_slider_index = (index + 1);
     });
    //this.slider_thumb.slideTo(i + 1);
  }
  SlideThumbDidChange(){
    this.slider_thumb.getActiveIndex().then(
      (index)=>{
        this.slider.slideTo(index);
        this.current_slider_index = (index + 1);
     });
  }

   back(){
    this.navCtrl.back();
   }

  ngOnInit() {
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

  next() {
    this.slider_thumb.slideNext();
  }

  prev() {
    this.slider_thumb.slidePrev();
  }

}
