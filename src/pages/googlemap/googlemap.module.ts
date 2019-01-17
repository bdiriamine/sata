import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { GoogleMapComponent } from './googlemap';

@NgModule({
  declarations: [
    GoogleMapComponent,
  ],
  imports: [
    IonicPageModule.forChild(GoogleMapComponent),
    TranslateModule
  ],
  exports: [
    GoogleMapComponent,
    TranslateModule
  ]
})
export class GoogleMapModule {}
