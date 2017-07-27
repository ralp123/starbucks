import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ActionSheetController } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

import { SigninPage } from '../signin/signin';

import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'page-login-details',
  templateUrl: 'login-details.html'
})
export class LoginDetailsPage {
  form;

  constructor(public alertCtrl: AlertController, public navCtrl : NavController) {
    this.form = new FormGroup({
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required)
    });
  }

  processForm() {
    let alert = this.alertCtrl.create({
      title: "Account Created",
      message: "Created Account for: " + this.form.value.firstName + " " + this.form.value.lastName,
      buttons: [{
        text: 'Ok',
      }]
    });

    if (this.form.status === 'VALID') {
      alert.present()
    }
  }

  signinpage() {
    this.navCtrl.push(SigninPage);
  }

}
