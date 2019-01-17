import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileClientPage } from '../profile-client/profile-client';
/**
 * Generated class for the ProfilePharmaciePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-pharmacie',
  templateUrl: 'profile-pharmacie.html',
})
export class ProfilePharmaciePage {
  user = {
    name: 'Paula Bolliger',
    profileImage: 'assets/imgs/avatar/girl-avatar.png',
    coverImage: 'assets/imgs/background/background-7.jpg',
    occupation: 'Pharmacie',
    location: 'Seattle, WA',
    description: 'A wise man once said: The more you do something, the better you will become at it.',
    followers: 456,
    following: 1052,
    posts: 35
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  settingphar(){
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePharmaciePage');
  }

}
