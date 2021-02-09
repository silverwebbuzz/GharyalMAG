import { Component } from '@angular/core';

import { Platform, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { RestService } from './api/rest.service';
import { SearchPage } from './search/search.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  pages: any;
  staticpages = [
    // {
    //   title: 'HOME',
    //   url: '/menu/home',
    //   icon: ''
    // },
    // {
    //   title: 'LATEST NEWS',
    //   url: '/menu/news',
    //   icon: ''
    // },
    // {
    //   title: 'SHOWS',
    //   url: '/menu/shows',
    //   icon: ''
    // },
    // {
    //   title: 'EVENTS',
    //   url: '/menu/events',
    //   icon: ''
    // },
    // {
    //   title: 'VIP',
    //   url: '/menu/vip',
    //   icon: ''
    // },
    {
      title: 'SETTINGS',
      icon: '',
      url: '/settings',
      // children: [
      //   {
      //     title: 'TEXT SIZE',
      //     //url: '/menu/list',
      //     icon: 'arrow-forward',
      //     children: [
      //       {
      //         title: 'Slider',
      //       }
      //     ]
      //   },
      //   {
      //     title: 'LEGAL TERMS & CONDITIONS',
      //     //url: '/menu/flutter',
      //     icon: 'arrow-forward'
      //   },
      // ]
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private rest: RestService,
    private modal: ModalController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.rest.presentLoading();
      this.rest.get('apis/blogcategory/')
        .subscribe(val => {
          this.pages = [];
          if (val) {
            for (let cat of val) {
              let data = { title: cat.title, url: '/events/' + cat.category_id + '/' + cat.title, icon: '' };
              this.pages.push(data);
            }
          }
        }, err => {
          console.log('error:', err);
        });
      this.rest.dismissLoading();
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#7b7c7c');
      this.splashScreen.hide();
    });
  }

  async openModal(){
    const searchmodal = await this.modal.create({
      component: SearchPage
    });
    return await searchmodal.present();
  }
}
