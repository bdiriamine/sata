import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
/**
 * Generated class for the EmailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-email',
  templateUrl: 'email.html',
})
export class EmailPage {
subject='';
body='';
to= '';
  constructor(public navCtrl: NavController, public navParams: NavParams,private emailComposer: EmailComposer,private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmailPage');
  }
  send(){
  let email={
    to:this.to,
    cc:[],
    bcc:[],
    attachment:[],
    subject:this.subject,
    body:this.body,
    isHtml:false,
    app:"Gmail"

  }
  let alert = this.alertCtrl.create({
    title: 'Confirm purchase',
    message: 'Do you want to send  this Mail?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Yes',
        handler: () => {
          this.emailComposer.open(email);
        }
      }
    ]
  });
  alert.present();
  //this.emailComposer.open(email);
}
}
