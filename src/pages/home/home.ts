import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ShopkeeperPage } from '../shopkeeper/shopkeeper';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }



  student(){
    this.navCtrl.push(LoginPage);
  }


  shopkeeper(){
    this.navCtrl.push(ShopkeeperPage);
  }
}
