/** Represents a Component of Google Map. */

/** Imports Modules */
import { Component, OnInit } from '@angular/core';
import { ToastController, IonicPage } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'google-map',
  templateUrl: 'googlemap.html'
})

export class GoogleMapComponent implements OnInit {
  [x: string]: any;

  /** Define Tabs Variable */
  StandardMap: any;
  SearchDoc:any;
  DetailDoc:any;
  AllDoc:any;
  DisMap:any;
  constructor(public toastCtrl: ToastController,public alertCtrl: AlertController) {
    /**
     * Tab represents component 
    */
    this.toastCtrl = toastCtrl;
    this.StandardMap = 'StandardMapComponent';
    this.SearchDoc='SearchMapPage';
   
    
  }
  ngOnInit() {
    this.presentToast();
  }
  /** Toast - create welcome message when page load */
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Welcome to Google Map.',
      duration: 3000
    });
    toast.present();
  }
  
    showPrompt() {
      const prompt = this.alertCtrl.create({
        title: 'Add Postion',
        message: "Enter your name,state, longitude and your latitude  ",
        inputs: [ {
          name: 'name',
          placeholder: 'name'
        },
          {
            name: 'State',
            placeholder: 'State'
          },
          {
            name: 'longitude',
            placeholder: 'longitude'
         },
         {
           name: 'latitude',
           placeholder: 'latitude'
         }
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Save',
            handler: data => {
              console.log(JSON.stringify(data));
              console.log(data.latitude);
            }
          }
        ]
      });
      prompt.present();
    }
    ionViewDidLoad(){
 
      this.platform.ready().then(() => {

          let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement);
          let locationsLoaded = this.locations.load();

          Promise.all([
              mapLoaded,
              locationsLoaded
          ]).then((result) => {

              let locations = result[1];

              for(let location of locations){
                  this.maps.addMarker(location.latitude, location.longitude);
              }

          });

      });

  }
  
}
