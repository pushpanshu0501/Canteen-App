import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { LoggedPage } from '../pages/logged/logged';
import { RegisterPage } from '../pages/register/register';
import { HallsPage } from '../pages/halls/halls';
import { Hall1Page } from '../pages/hall1/hall1';
import { Hall2Page } from '../pages/hall2/hall2';
import { Hall3Page } from '../pages/hall3/hall3';
import { Hall4Page } from '../pages/hall4/hall4';
import { Hall5Page } from '../pages/hall5/hall5';
import { Hall6Page } from '../pages/hall6/hall6';
import { Hall7Page } from '../pages/hall7/hall7';
import { Hall8Page } from '../pages/hall8/hall8';
import { Hall9Page } from '../pages/hall9/hall9';
import { Hall10Page } from '../pages/hall10/hall10';
import { Hall11Page } from '../pages/hall11/hall11';
import { Hall12Page } from '../pages/hall12/hall12';
import { Hall13Page } from '../pages/hall13/hall13';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../pages/home/home';
import { ShopkeeperPage } from '../pages/shopkeeper/shopkeeper';
import { ProfilePage }  from '../pages/profile/profile';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { NewStudentPage } from '../pages/newstudent/newstudent';

const firebaseAuth = {
  apiKey: "AIzaSyCytVpXzAgBRjdda1bjxczokalO3YcmGTU",
  authDomain: "new-426aa.firebaseapp.com",
  databaseURL: "https://new-426aa.firebaseio.com",
  projectId: "new-426aa",
  storageBucket: "new-426aa.appspot.com",
  messagingSenderId: "117538529290",
  appId: "1:117538529290:web:1fb18fd5b2fbede1dfbff3",
  measurementId: "G-Z0JSF5R6H0"
};

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    LoggedPage,
    RegisterPage,
    HallsPage,
    Hall1Page,
    Hall2Page,
    Hall3Page,
    Hall4Page,
    Hall5Page,
    Hall6Page,
    Hall7Page,
    Hall8Page,
    Hall9Page,
    Hall10Page,
    Hall11Page,
    Hall12Page,
    Hall13Page,
    HomePage,
    ShopkeeperPage,
    ProfilePage,
    NewStudentPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    AngularFireDatabaseModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    LoggedPage,
    RegisterPage,
    HallsPage,
    Hall1Page,
    Hall2Page,
    Hall3Page,
    Hall4Page,
    Hall5Page,
    Hall6Page,
    Hall7Page,
    Hall8Page,
    Hall9Page,
    Hall10Page,
    Hall11Page,
    Hall12Page,
    Hall13Page,
    HomePage,
    ShopkeeperPage,
    ProfilePage,
    NewStudentPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
