import { Component } from '@angular/core';
import { NavController, App ,ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import { Camera, CameraOptions } from "@ionic-native/camera";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public userDetails:any;
  public resposeData: any;
  public dataSet: any;
  userPostData = {
    user_id: "",
    token: "",
    feed: "",
    feed_id: "",
    num_posts: ""
  };
  constructor(public navCtrl: NavController,public app:App,public authService: AuthServiceProvider,public modalCtrl: ModalController) {
  const data = JSON.parse(localStorage.getItem("userData"));
  this.userDetails=data.userData;
    this.userPostData.user_id = this.userDetails.id;
    this.userPostData.token = this.userDetails.token;
    this.userPostData.num_posts = this.userDetails.num_posts;
    this.getFeed();

  }
  openModal() {

    let modal = this.modalCtrl.create(ModalContentPage,"", {
      cssClass:"my-modal"
    });
    modal.present();
  }
  getFeed() {
    this.authService.postData(this.userPostData, "feed").then(
      result => {
        this.resposeData = result;
        if (this.resposeData.feedData) {
          this.dataSet = this.resposeData.feedData;
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

  backToWelcome(){
    /*const root = this.app.getRootNav();
    root.popToRoot();*/
    this.navCtrl.setRoot(LoginPage);
    this.navCtrl.popToRoot();

  }
logout(){
    localStorage.clear();
    setTimeout(()=>this.backToWelcome(),1000);
}
}
@Component({
  templateUrl : 'modal-content.html'
})
export class ModalContentPage {
  public imB64:any;
  public userDetails:any;
  public resposeData: any;
  userPostData = {
    user_id: "",
    token: "",
    feed: "",
    feed_id: "",
    num_posts: "",
    imageB64: ""
  };
  public photos : any;
  public base64Image : string;
  constructor(
    public viewCtrl: ViewController,public app:App,public authService: AuthServiceProvider, private camera : Camera
  ) {

    const data = JSON.parse(localStorage.getItem("userData"));
    this.userDetails=data.userData;
    this.userPostData.user_id = this.userDetails.id;
    this.userPostData.token = this.userDetails.token;
    this.userPostData.num_posts = this.userDetails.num_posts;
  }
  ngOnInit() {
    this.photos = [];
  }
  deletePhoto(index){
    this.photos.splice(index, 1);
    this.photos = [];
    this.imB64= "" ;
  }
  takePhoto(sourceType:number) {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 600,
      targetHeight: 600,
      saveToPhotoAlbum: false,
      sourceType:sourceType,
    };

    this.camera.getPicture(options).then(
      imageData => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.photos.push(this.base64Image);
        this.photos.reverse();
        this.imB64=imageData;
      },
      err => {
        console.log(err);
      }
    );
  }

  feedUpdate() {
    if(this.imB64){
    this.userPostData.imageB64 = this.imB64;
    this.photos = [];
    }
    if (this.userPostData.feed) {

      this.authService.postData(this.userPostData, "feedUpdate").then(
        result => {
          this.resposeData = result;
          if (this.resposeData.feedData) {
            //this.dataSet.unshift(this.resposeData.feedData);
            this.userPostData.feed = "";

            //this.updatebox.setFocus();
            setTimeout(() => {
              //  this.updatebox.focus();
            }, 150);
            this.userDetails.num_posts++;
            console.log(this.userDetails.num_posts);
          } else {
            console.log("No access");
          }
        },
        err => {
          //Connection failed message
        }
      );
      this.photos = [];
      this.imB64= "" ;
      this.userPostData.imageB64 = "";
    }
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
