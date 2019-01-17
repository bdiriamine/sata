import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams,IonicPage } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Museum } from './musem';

 
declare var google;
@IonicPage()
@Component({
  selector: 'page-detail-map',
  templateUrl: 'detail-map.html',
})
export class DetailMapPage {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  museum = {} as Museum;

  constructor(public navCtrl: NavController, public navParams: NavParams,public geolocation: Geolocation) {
    this.museum = navParams.get('museum');
  }

  ionViewDidLoad(){
    this.displayGoogleMap();
  }


  displayGoogleMap() {
    let latLng = new google.maps.LatLng(this.museum.latitude, this.museum.longitude);
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
  
    this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng
    });
    this.addInfoWindow(marker, this.museum.name + this.museum.state);
  }
  
  addInfoWindow(marker, content){
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }
}