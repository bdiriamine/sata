import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Clientv3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clientv3',
  templateUrl: 'clientv3.html',
})
export class Clientv3Page {

  user = {
    name: 'Paula Bolliger',
    profileImage: 'assets/imgs/avatar/girl-avatar.png',
    coverImage: 'assets/imgs/background/background-7.jpg',
    occupation: 'Designer',
    location: 'Seattle, WA',
    description: 'A wise man once said: The more you do something, the better you will become at it.',
    followers: 456,
    following: 1052,
    posts: 35
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Clientv3Page');
  }

}
