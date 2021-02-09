import { Component, OnInit } from '@angular/core';
import { RestService } from '../api/rest.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.page.html',
  styleUrls: ['./privacy.page.scss'],
})
export class PrivacyPage implements OnInit {
  page_content : any;
  constructor(private rest:RestService) { }

  ngOnInit() {
    this.rest.presentLoading();
    this.rest.get('apis/legaltermconditonpage/')
    .subscribe(val => {
      if(val){
        let details = JSON.parse(val);
        this.page_content = details.content;
      }
    }, err => {
      console.log('error:', err);
   });
   this.rest.dismissLoading();
  }

}
