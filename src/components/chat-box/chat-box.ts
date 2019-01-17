import { Component } from '@angular/core';
import {ViewController, IonicPage} from 'ionic-angular';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
@Component({
  selector: 'chat-box',
  templateUrl: 'chat-box.html'
})
export class ChatBoxComponent {

  text: string;
  public userDetails:any;
  public resposeData: any;
  public dataSet: any;
  messageData = {
    user_id: "",
    token: "",
    user_to: "",
    message_id: "",
    body: ""
  };
  constructor(private viewCtrl: ViewController,public authService: AuthServiceProvider) {
    console.log('Hello ChatBoxComponent Component');
    this.text = 'Hello World';
    const data = JSON.parse(localStorage.getItem("userData"));
    this.userDetails=data.userData;
    this.messageData.user_id = this.userDetails.id;
    this.messageData.user_to = "17";
    this.messageData.token = this.userDetails.token;
    this.getMessage();
  }
  getMessage() {
    this.authService.postData(this.messageData, "getMessage").then(
      result => {
        this.resposeData = result;
        if (this.resposeData.messageData) {
          this.dataSet = this.resposeData.messageData;
          console.log(this.dataSet);
        } else {
          console.log("No access");
        }
      },
      err => {
        //Connection failed message
      }
    );
  }
  sendMessage() {

    if (this.messageData.body) {

      this.authService.postData(this.messageData, "sendMessage").then(
        result => {
          this.resposeData = result;
          this.messageData.body = "";
        },
        err => {
          //Connection failed message
        }
      );

    }
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
