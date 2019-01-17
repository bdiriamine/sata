import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileClientPage } from './profile-client';

@NgModule({
  declarations: [
    ProfileClientPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileClientPage),
  ],
})
export class ProfileClientPageModule {}
