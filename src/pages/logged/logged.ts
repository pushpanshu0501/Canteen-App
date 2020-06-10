import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HallsPage } from '../halls/halls';
import { AngularFireAuth } from 'angularfire2/auth';
import { RegisterPage } from '../register/register';
import { ProfilePage } from '../profile/profile';


@IonicPage()
@Component({
  selector: 'page-logged',
  templateUrl: 'logged.html',
})
export class LoggedPage {

  email: string;
  password: string;
  constructor( private alertCtrl: AlertController ,private afAuth: AngularFireAuth ,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoggedPage');
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK'],
    }).present();
  }


  signInUser(){
    const res = this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password)
    .then( data =>{
      //console.log('with', this.email, this.password);
      this.alert('Success! You are logged in');
      this.navCtrl.push(HallsPage);
    })
    .catch( error =>{
      console.log('got an error', error);
      this.alert(error.message);
    });
    //console.log('Would signin with',this.email,this.password);

    /*if( res.user ){
      this.user.setUser({
        username,
        uid: res.user.uid,
      })
    }*/

  }


  here(){
    this.navCtrl.push(RegisterPage);
  }
}
