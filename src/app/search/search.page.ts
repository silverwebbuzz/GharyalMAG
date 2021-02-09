import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController, IonSearchbar } from '@ionic/angular';
import { Router } from '@angular/router';
import { RestService } from '../api/rest.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  posts : any = [];
  @ViewChild('searchbar') searchbar:IonSearchbar;

  constructor(private modal: ModalController,private rest:RestService,public router: Router) { }

  ngOnInit() {
    
    setTimeout(()=>{
      this.searchbar.setFocus();
  }, 150);
  }

  async closeModal(){
    const searchmodal = await this.modal.dismiss({
      component: SearchPage
    });
    //return await searchmodal.present();
  }

  onchangesearch(searchTerm){
    this.rest.get('apis/searchterms/')
   .subscribe(val => {
      let filteredArray = val.filter((x) => {
        return (x.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      });
      console.log('filteredArray', filteredArray);
      this.posts = filteredArray;
      //console.log(oneCateData);
   },err => {

   });
  }

  openDetails(id,name){
    const url = 'details/' + id + '/' + name;
      this.router.navigateByUrl(url);
  }

}
