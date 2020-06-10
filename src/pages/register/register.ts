import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { ProfilePage } from '../profile/profile';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  email: string;
  password: string;

  constructor( private alertCtrl: AlertController, private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

    alert(message: string) {
      this.alertCtrl.create({
        title: 'Info!',
        subTitle: message,
        buttons: ['OK'],
      }).present();
    }
    

    registerUser(email: string,password: string){
      this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password)
      .then(data => {
        //console.log('got data',data);
        this.alert('Registered!');
        this.navCtrl.push(ProfilePage);
      })
      .catch(error => {
        console.log('got an error');
        //console.log('data with',this.email);
        this.alert(error.message);
      });
      //console.log('Would register user with', this.email,this.password);
    }
}
