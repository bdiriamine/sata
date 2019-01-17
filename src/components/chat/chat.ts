import { Component } from '@angular/core';
import { ModalController, IonicPage } from 'ionic-angular';
import { ChatBoxComponent } from '../chat-box/chat-box';
/**
 * Generated class for the ChatComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chat',
  templateUrl: 'chat.html'
})
export class ChatComponent {

  text: string;

  constructor(public modalCtrl: ModalController) {
    console.log('Hello ChatComponent Component');
    this.text = 'Hello World';
  }
  gotoChatBox() {
    let modal = this.modalCtrl.create(ChatBoxComponent);
    modal.present();
  }
}
