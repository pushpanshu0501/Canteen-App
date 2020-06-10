import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewStudentPage } from './newstudent';

@NgModule({
  declarations: [
    NewStudentPage,
  ],
  imports: [
    IonicPageModule.forChild(NewStudentPage),
  ],
})
export class NewStudentPageModule {}
