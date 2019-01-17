/** Represents a Component of Standard Google Map. */

/** Imports Modules */
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { LoaderService } from '../../../common/services/loader.service';
declare var google;

@IonicPage()
@Component({
  selector: 'standard-map',
  templateUrl: 'standard.html',
  providers: [LoaderService]
})
export class StandardMapComponent {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  lat:any;
  long:any;
  constructor(private loaderService: LoaderService, private geolocation: Geolocation) {
    this.loadMap();
  }
  /** Initialize Map */
  loadMap() {
    this.loaderService.presentLoading();
    this.geolocation.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude,
        position.coords.longitude);
        this.lat=position.coords.latitude;
        this.long = position.coords.longitude;
      let mapOptions = {
        center: latLng,
        zoom: 15,
        duration: 5000,
        mapTypeControl: true,
        mapTypeControlOptions: {
          style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        },
        navigationControl: true,
        bearing: 50,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement,
        mapOptions);
      this.loaderService.hideLoading();
      this.addMarker();
      console.log(this.lat);
      console.log(latLng);
    }, (err) => {
      console.log('err')
      console.log(err.message);
    });
  }
  /** Marker Funtion */
  addMarker() {
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
    let content = "long : "+this.long+" Lat :"+this.lat;
    this.addInfoWindow(marker, content);
  }
  /** Info window function */
  addInfoWindow(marker, content) {
    console.log(this.lat);
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }
}