import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import {Camera} from '@ionic-native/camera';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProfileClientPage } from '../pages/profile-client/profile-client';
import { ListPage } from '../pages/list/list';
import { LoginPage} from "../pages/login/login";
import { ForgotPasswordPage} from "../pages/forgot-password/forgot-password";
import {RegisterPage} from "../pages/register/register";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ProfileEntreprisePage} from '../pages/profile-entreprise/profile-entreprise'
import {HttpClientModule} from "@angular/common/http";
import {EntreprisesListPage} from'../pages/entreprises-list/entreprises-list'
import {ProfileClientV2Page} from'../pages/profile-client-v2/profile-client-v2'
import { Clientv3Page } from '../pages/clientv3/clientv3'
import { ProfileMedecinPage } from '../pages/profile-medecin/profile-medecin'
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { ModalContentPage } from '../pages/home/home';
import { AddProductPage } from '../pages/add-product/add-product';
import {ChatComponent} from '../components/chat/chat';
import {ChatBoxComponent} from '../components/chat-box/chat-box';
import {AddProductComponent} from '../components/add-product/add-product'
import {ChatprivePage} from "../pages/chatprive/chatprive";
import {EmailPage} from "../pages/email/email";
import { SMS } from '@ionic-native/sms';
import { Geolocation } from '@ionic-native/geolocation';
import { CallNumber } from '@ionic-native/call-number';
import {  NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer';
import { TranslateModule} from 'ng2-translate/ng2-translate'
import { GoogleMapComponent } from '../pages/googlemap/googlemap';
import { AllMapPage } from '../pages/all-map/all-map';
import { DetailMapPage } from '../pages/detail-map/detail-map';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ForgotPasswordPage,GoogleMapComponent,
    RegisterPage,DetailMapPage,AllMapPage,
    ProfileClientPage,
    ProfileEntreprisePage,
    EntreprisesListPage,
    ProfileClientV2Page,
    Clientv3Page,
    ProfileMedecinPage
    ,ModalContentPage,ChatComponent,
    ChatBoxComponent,AddProductPage,AddProductComponent,ChatprivePage,EmailPage,

  ],
  imports: [
    BrowserModule,TranslateModule,TranslateModule.forRoot(),
    FormsModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,GoogleMapComponent,
    ListPage,
    LoginPage,DetailMapPage,AllMapPage,
    ForgotPasswordPage,
    RegisterPage,
    ProfileClientPage,
    ProfileEntreprisePage,
    EntreprisesListPage,
    ProfileClientV2Page,
    Clientv3Page,
    ProfileMedecinPage,
    ModalContentPage,
    ChatComponent,
    ChatBoxComponent,AddProductPage,AddProductComponent,ChatprivePage,EmailPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},Camera,SMS,CallNumber,EmailComposer,
    Geolocation,
    AuthServiceProvider,

  ],schemas: [ CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA ]
})
export class AppModule {}
