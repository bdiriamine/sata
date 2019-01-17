import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EntreprisesListPage } from './entreprises-list';

@NgModule({
  declarations: [
    EntreprisesListPage,
  ],
  imports: [
    IonicPageModule.forChild(EntreprisesListPage),
  ],
})
export class EntreprisesListPageModule {}
