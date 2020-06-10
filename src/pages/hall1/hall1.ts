import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';



@IonicPage()
@Component({
  selector: 'page-hall1',
  templateUrl: 'hall1.html',
})
export class Hall1Page {

  constructor(private alertCtrl: AlertController ,private  afDatabase: AngularFireDatabase, private afauth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Hall1Page');
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK'],
    }).present();
  }


  maggie_add(){

  }



  coffee_add(){

  }
  



  random_add(){

  }
}
