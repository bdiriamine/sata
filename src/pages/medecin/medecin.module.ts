import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedecinPage } from './medecin';

@NgModule({
  declarations: [
    MedecinPage,
  ],
  imports: [
    IonicPageModule.forChild(MedecinPage),
  ],
})
export class MedecinPageModule {}
