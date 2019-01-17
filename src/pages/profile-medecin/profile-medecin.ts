import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import {AddProductPage} from "../add-product/add-product";
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import {AddProductComponent} from '../../components/add-product/add-product';
import { SMS } from '@ionic-native/sms';

import { CallNumber } from '@ionic-native/call-number';

import { EmailComposer } from '@ionic-native/email-composer';
import {ChatprivePage} from "../chatprive/chatprive";
import {EmailPage} from "../email/email";
/**
 * Generated class for the ProfileMedecinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-medecin',
  templateUrl: 'profile-medecin.html',
})
export class ProfileMedecinPage {
  public userDetails:any;
  public responseData: any;
  user = {
    name: 'Paula Bolliger',
    profileImage: 'assets/imgs/avatar/girl-avatar.png',
    coverImage: 'assets/imgs/background/background-7.jpg',
    occupation: 'Médecin',
    location: 'Seattle, WA',
    description: 'A wise man once said: The more you do something, the better you will become at it.',
    followers: 456,
    following: 1052,
    posts: 35
  };

  constructor(private sms:SMS,private callNumber:CallNumber,public navCtrl: NavController, public navParams: NavParams,public authService:AuthServiceProvider,public modalCtrl: ModalController) {
    const data = JSON.parse(localStorage.getItem("userData"));
    this.userDetails=data.userData;
    this.getProfile();
    const data1 = JSON.parse(localStorage.getItem("userData"));
    this.userDetails=data1.userData;
  }
  getProfile(){

      this.authService.postData(this.userDetails,'profile').then((result) => {
        this.responseData = result;
        if(this.responseData.userData){
          this.userDetails=this.responseData.userData;

        }
        else{
        }
      }, (err) => {
        // Error log
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileMedecinPage');
  }
  addProducts(){
    console.log("i will run the modal");
    let modal = this.modalCtrl.create(AddProductComponent);
    modal.present();
  }
  docall(){
    this.callNumber.callNumber("208050220", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err =>{alert(JSON.stringify(err))}  );
  }

  sendSMS(){
    this.sms.send('52234988', 'Bonsoir').then(res => console.log('Launched dialer!', res))
      .catch(err =>{alert(JSON.stringify(err))}  );
  }

  gotopagechatprive(){
    this.navCtrl.push(ChatprivePage);
  }

  gotopageemail(){
    this.navCtrl.push(EmailPage);
  }


}
