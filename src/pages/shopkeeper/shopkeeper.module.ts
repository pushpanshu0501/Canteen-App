import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopkeeperPage } from './shopkeeper';

@NgModule({
  declarations: [
    ShopkeeperPage,
  ],
  imports: [
    IonicPageModule.forChild(ShopkeeperPage),
  ],
})
export class ShopkeeperPageModule {}
