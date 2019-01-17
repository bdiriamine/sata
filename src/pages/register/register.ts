import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";
import {LoginPage} from "../login/login";
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage  {
  responseData : any;
  signupform: FormGroup;
  userData = {"first_name": "","last_name": "", "phone_number": "","address": "","email": "","password": "","role": ""};
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService:AuthServiceProvider) {
  }
  ngOnInit() {
    let EMAILPATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.signupform = new FormGroup({
     // username: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(10)]),
      //password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
      //name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(30)]),
      email: new FormControl('', [Validators.required, Validators.pattern(EMAILPATTERN)]),
    });
  }
  signup(){

    this.authService.postData(this.userData,'signup').then((result) => {
      console.log("hello");
      this.responseData = result;
      if(this.responseData.userData){
        console.log(this.responseData);
        localStorage.setItem('userData', JSON.stringify(this.responseData));
        this.navCtrl.push(LoginPage);
      }
      else{ console.log("User already exists"); }
    }, (err) => {
      // Error log
    });

  }

  login(){
    //Login page link
    this.navCtrl.setRoot(LoginPage);
  }
  goLoginPage(){
    this.navCtrl.setRoot(LoginPage);
  }
}
