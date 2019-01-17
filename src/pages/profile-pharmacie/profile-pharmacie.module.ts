import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePharmaciePage } from './profile-pharmacie';

@NgModule({
  declarations: [
    ProfilePharmaciePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilePharmaciePage),
  ],
})
export class ProfilePharmaciePageModule {}
