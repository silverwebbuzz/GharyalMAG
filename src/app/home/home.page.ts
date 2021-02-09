import { Component } from '@angular/core';
import { RestService } from '../api/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  posts: any;
  constructor(private rest:RestService, public router: Router){
    this.rest.presentLoading();
    this.rest.get('apis/bloglist/')
        .subscribe(val => {
          this.posts = [];
          if (val) {
            this.posts = val;
          }
        }, err => {
        });
    this.rest.dismissLoading();
  }
 

  openDetails(id,name){
    const url = 'details/' + id + '/' + name;
      this.router.navigateByUrl(url);
  }
}
