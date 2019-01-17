import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { StandardMapComponent } from './standard';

@NgModule({
  declarations: [
    StandardMapComponent,
  ],
  imports: [
    IonicPageModule.forChild(StandardMapComponent),
    TranslateModule
  ],
  exports: [
    StandardMapComponent,
    TranslateModule
  ]
})
export class StandardMapModule {}
