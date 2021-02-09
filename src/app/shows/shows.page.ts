import { Component, OnInit } from '@angular/core';
import { ActionSheetController, Platform } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.page.html',
  styleUrls: ['./shows.page.scss'],
})
export class ShowsPage implements OnInit {

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
