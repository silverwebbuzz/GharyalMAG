import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchPage } from './search/search.page';

@NgModule({
  declarations: [AppComponent, SearchPage],
  entryComponents: [SearchPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      mode : 'ios'
    }),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SocialSharing,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
