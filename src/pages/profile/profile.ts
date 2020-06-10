import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Profile } from '../../app/profile';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {


  profile = {} as Profile;

  constructor(private alertCtrl: AlertController ,private  afDatabase: AngularFireDatabase, private afauth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  
  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK'],
    }).present();
  }



  createProfile(){
    this.afauth.authState.take(1).subscribe( auth => {
      this.afDatabase.object(`profile/${auth.uid}`).set(this.profile).then(() => this.alert("Success!! Welcome to My App"))
    })
  }
}
