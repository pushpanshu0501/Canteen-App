import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Hall1Page } from '../hall1/hall1';
import { Hall2Page } from '../hall2/hall2';
import { Hall3Page } from '../hall3/hall3';
import { Hall4Page } from '../hall4/hall4';
import { Hall5Page } from '../hall5/hall5';
import { Hall6Page } from '../hall6/hall6';
import { Hall7Page } from '../hall7/hall7';
import { Hall8Page } from '../hall8/hall8';
import { Hall9Page } from '../hall9/hall9';
import { Hall10Page } from '../hall10/hall10';
import { Hall11Page } from '../hall11/hall11';
import { Hall12Page } from '../hall12/hall12';
import { Hall13Page } from '../hall13/hall13';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoggedPage } from '../logged/logged';

@IonicPage()
@Component({
  selector: 'page-halls',
  templateUrl: 'halls.html',
})
export class HallsPage {

  constructor(private alertCtrl: AlertController ,private afAuth: AngularFireAuth ,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HallsPage');
  }



  hall1(){
    this.navCtrl.push(Hall1Page);
  }
  hall2(){
    this.navCtrl.push(Hall2Page);
  }
  hall3(){
    this.navCtrl.push(Hall3Page);
  }
  hall4(){
    this.navCtrl.push(Hall4Page);
  }
  hall5(){
    this.navCtrl.push(Hall5Page);
  }
  hall6(){
    this.navCtrl.push(Hall6Page);
  }
  hall7(){
    this.navCtrl.push(Hall7Page);
  }
  hall8(){
    this.navCtrl.push(Hall8Page);
  }
  hall9(){
    this.navCtrl.push(Hall9Page);
  }
  hall10(){
    this.navCtrl.push(Hall10Page);
  }
  hall11(){
    this.navCtrl.push(Hall11Page);
  }
  hall12(){
    this.navCtrl.push(Hall12Page);
  }
  hall13(){
    this.navCtrl.push(Hall13Page);
  }


  logout(){
    this.afAuth.auth.signOut()
    .then ( data =>{
        this.navCtrl.push('LoggedPage');
    })
  }
}
