import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatprivePage } from './chatprive';

@NgModule({
  declarations: [
    ChatprivePage,
  ],
  imports: [
    IonicPageModule.forChild(ChatprivePage),
  ],
})
export class ChatprivePageModule {}
