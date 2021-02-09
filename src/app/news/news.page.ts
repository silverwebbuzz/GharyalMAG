import { Component, OnInit } from '@angular/core';
import { ActionSheetController, Platform } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  message = 'Check out the GharyalTv!';
  url = 'http://gharyal.com/';

  constructor(private platform: Platform,
    private socialSharing: SocialSharing) { }

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

}
