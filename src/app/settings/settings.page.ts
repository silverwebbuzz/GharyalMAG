import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  fontSize : any = 18;

  constructor(private storage:Storage) { }

  ngOnInit() {
    this.storage.get('font-size').then((val) => {
      if(val){
        this.fontSize = val;
      }
    });
  }

  onChangeText(value){
    this.fontSize = value;
    this.storage.set('font-size', value);
  }

}
