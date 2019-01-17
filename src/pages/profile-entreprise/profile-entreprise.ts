import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {HomePage} from "../home/home";
import {EntreprisesListPage} from "../entreprises-list/entreprises-list";

/**
 * Generated class for the ProfileEntreprisePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-entreprise',
  templateUrl: 'profile-entreprise.html',
})
export class ProfileEntreprisePage {
  public items:any;
  public loading:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient,public loadingController:LoadingController) {
    this.getData();

  }
  getData(){
    this.loading = this.loadingController.create({ content: "please wait..." });
    this.loading.present();
    let url='https://jsonplaceholder.typicode.com/photos';
    let data: Observable<any>=this.http.get(url);
    data.subscribe(result =>{
      this.items=result;
      this.loading.dismissAll();
      console.log(result);
    });
  }
  showMore(){
    this.navCtrl.setRoot(EntreprisesListPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileEntreprisePage');
  }

/*  getItems(ev) {
    // Reset items back to all of the items
    /!*this.getData();*!/

    // set val to the value of the ev target
    var val = ev.target.value.toLowerCase();
    // if the value is an empty string don't filter the items
    if(val=='')
    { this.getData();
      return;
    }
    // show search results
      this.items = this.items.filter((item) => {
        if(item.title.toLowerCase().indexOf(val.toLowerCase()) > -1)
        {return true;}
        return false;
      })

  }*/
}
