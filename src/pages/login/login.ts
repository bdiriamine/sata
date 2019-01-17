import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RegisterPage} from "../register/register";
import {ForgotPasswordPage} from "../forgot-password/forgot-password";
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  responseData : any;
  userData = {"email": "","password": ""};
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService:AuthServiceProvider,public alertCtrl: AlertController) {
  if(localStorage.getItem("userData")){
    this.navCtrl.setRoot(HomePage);
  }
  }

  goRegitrePage(){
    this.navCtrl.setRoot(RegisterPage);
  }
  goForgetPasswordPage(){
    this.navCtrl.setRoot(ForgotPasswordPage);
  }
  goDashBORDPage(){
    this.navCtrl.setRoot(HomePage);
  }
  login(){
    if (this.userData.email)
    this.authService.postData(this.userData,'login').then((result) => {
      this.responseData = result;
      if(this.responseData.userData){
        console.log(this.responseData);
        localStorage.setItem('userData', JSON.stringify(this.responseData));
        this.navCtrl.setRoot(HomePage);
      }
      else{ this.showAlert();
        }
    }, (err) => {
      // Error log
    });

  }
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Failed to login!',
      subTitle: 'email or password are invalid',
      buttons: ['OK']
    });
    alert.present();
  }
}
