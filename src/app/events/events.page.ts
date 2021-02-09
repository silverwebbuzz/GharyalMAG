import { Component, OnInit } from '@angular/core';
import { ActionSheetController, Platform } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../api/rest.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
   catId : any;
   posts: any;
   category_name: any;
  message = 'Check out the Gharyal MAG App!';
  url = 'http://gharyal.com/';

  constructor(private platform: Platform,
    private socialSharing: SocialSharing,
    private route:ActivatedRoute,
    private rest:RestService,
    public router: Router) { }

  ngOnInit() {
   this.catId = this.route.snapshot.paramMap.get('id');
   this.category_name = this.route.snapshot.paramMap.get('name');
   this.rest.presentLoading();
   this.rest.get('apis/bloglist/')
   .subscribe(val => {
      let filteredArray = val.map((element) =>
      element.filter(x => x.categories.some((z) => z.category_id === this.catId)));
      console.log('filteredArray', filteredArray);
      this.posts = filteredArray;
      //console.log(oneCateData);
   },err => {

   });
   this.rest.dismissLoading();
  }

  doRefresh(event) {
    
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
