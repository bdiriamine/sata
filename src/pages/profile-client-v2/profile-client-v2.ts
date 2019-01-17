import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfileClientV2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-client-v2',
  templateUrl: 'profile-client-v2.html',
})
export class ProfileClientV2Page {
  user = {
    name: 'Foulen Fouleni',
    profileImage: 'assets/imgs/avatar/girl-avatar.png',
    coverImage: 'assets/imgs/background/nin-live.png',
    followers: 456,
    posts: 35
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileClientV2Page');
  }

}
