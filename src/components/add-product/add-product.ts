import { Component } from '@angular/core';
import { ViewController,ModalController } from 'ionic-angular';

/**
 * Generated class for the AddProductComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'add-product',
  templateUrl: 'add-product.html'
})
export class AddProductComponent {

  text: string;

  constructor(public modalController:ModalController,public viewCtrl:ViewController) {
    console.log('Hello AddProductComponent Component');
    this.text = 'Hello World';
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
