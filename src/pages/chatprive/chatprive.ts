import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Title } from '@angular/platform-browser';
/**
 * Generated class for the ChatprivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chatprive',
  templateUrl: 'chatprive.html',
})
export class ChatprivePage {
  private chatForm : FormGroup;
    private chatMessage;

    text : string;
    user:string;
    user2:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder ) {
    this.chatForm = this.formBuilder.group({
        messageInput:['']
    });

  }
ngOnInit(){
  

   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  sendChatMessage(){
    this.chatMessage = this.chatForm.controls['messageInput'].value;
    this.createChatBubble(this.chatMessage);

  }

  createChatBubble(chatMessage: string){
    alert(this.chatMessage);
  }

}
