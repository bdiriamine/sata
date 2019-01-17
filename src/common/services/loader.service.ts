/** This service define loader for full application */
import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';
@Injectable()
export class LoaderService {
  loading: any;
  constructor(public Loading: LoadingController) {}
  // Present loading option
  presentLoading() {
    this.loading = this.Loading.create({
      content: 'Please wait..',
      spinner: 'crescent'
    })
    return this.loading.present();
  }
  // Hide loading option
  hideLoading() {
    return this.loading.dismiss();
  }
}