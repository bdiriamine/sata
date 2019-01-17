import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AllMapPage } from '../all-map/all-map';
import { DetailMapPage } from '../detail-map/detail-map';


/**
 * Generated class for the SearchMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-map',
  templateUrl: 'search-map.html',
})
export class SearchMapPage {
  museumList = [];
  filteredMuseum = [];
  isfiltered: boolean ;
  constructor(private http:Http, public navCtrl: NavController, public navParams: NavParams) 
    {
      console.log("search page");
      this.isfiltered = false;
      this.http.get('assets/data/museum.json')
      .map(res => res.json())
      .subscribe(data => {
          this.museumList = data.museums;
        },
        err => console.log("error is "+err), // error
        () => console.log('read museum data Complete '+ this.museumList) // complete
      );
    }
  
    searchMaps(event) {
      if(event.target.value.length > 2) {
        var filteredJson = this.museumList.filter(function (row) {
          if(row.state.indexOf(event.target.value) != -1) {
            return true
          } else {
            return false;
          }
        });
        this.isfiltered = true;
        this.filteredMuseum = filteredJson;
      }
    }
  
    itemTapped(event, museum) {
      console.log(museum)
       this.navCtrl.push(DetailMapPage, {
         museum: museum
       });
    }
  
    allMuseumMap(){
      this.navCtrl.push(AllMapPage, {
         museumList: this.museumList
      });
    }
  
  }
  