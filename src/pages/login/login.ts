import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { LoginDetailsPage } from '../login-details/login-details';

import { SigninPage } from '../signin/signin';

import { HomePage } from '../home/home';

import { ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  /* signinPage = SigninPage;  for declaration and navigating */ 

  constructor(public navCtrl: NavController) {

  }

  loginpage() {
    this.navCtrl.push(LoginDetailsPage);
  }
  signinpage() {
    this.navCtrl.push(SigninPage);
  }
  homepage() {
    this.navCtrl.setRoot(HomePage);
  }

}

  
