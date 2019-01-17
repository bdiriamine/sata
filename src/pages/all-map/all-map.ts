import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Http } from '@angular/http';
 
declare var google;

/**
 * Generated class for the AllMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-all-map',
  templateUrl: 'all-map.html',
})
export class AllMapPage {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  museumList = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation, public http: Http) {
    this.museumList = navParams.get('museumList');
    console.log(this.museumList);
  }

  ionViewDidLoad() {
    this.displayGoogleMap();
    this.getMarkers();
  }

  displayGoogleMap() {
    let latLng = new google.maps.LatLng(28.6117993, 77.2194934);

    let mapOptions = {
      center: latLng,
      disableDefaultUI: true,
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
  }

  getMarkers() {
    for (let _i = 0; _i < this.museumList.length; _i++) {
      if(_i > 0 )
       this.addMarkersToMap(this.museumList[_i]);
    }
  }

  addMarkersToMap(museum) {
      var position = new google.maps.LatLng(museum.latitude, museum.longitude);
      var museumMarker = new google.maps.Marker({position: position, title: museum.name});
      museumMarker.setMap(this.map);
  }

}