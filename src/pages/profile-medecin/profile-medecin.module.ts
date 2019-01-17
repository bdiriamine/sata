import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileMedecinPage } from './profile-medecin';

@NgModule({
  declarations: [
    ProfileMedecinPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileMedecinPage),
  ],
})
export class ProfileMedecinPageModule {}
