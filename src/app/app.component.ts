import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage} from "../pages/login/login";
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ProfileClientPage } from '../pages/profile-client/profile-client';
import {ProfileEntreprisePage} from '../pages/profile-entreprise/profile-entreprise';
import {EntreprisesListPage} from'../pages/entreprises-list/entreprises-list'
import {ProfileClientV2Page} from'../pages/profile-client-v2/profile-client-v2'
import { Clientv3Page } from '../pages/clientv3/clientv3'
import { ProfileMedecinPage } from '../pages/profile-medecin/profile-medecin'
import { ProfilePharmaciePage } from '../pages/profile-pharmacie/profile-pharmacie'
import { GoogleMapComponent } from '../pages/googlemap/googlemap';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Client', component: ProfileClientPage },
      { title: 'ClientV2', component: ProfileClientV2Page },
      {title: 'clientV3', component: Clientv3Page},
      {title: 'Medecin', component: ProfileMedecinPage },
      {title: 'Pharmacie', component: ProfilePharmaciePage },
      { title: 'Entreprises', component: ProfileEntreprisePage },
      { title: 'Google Map', component: GoogleMapComponent }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
