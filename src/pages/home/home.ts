import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { BasicPage } from '../basic/basic';

import { ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  itemTapped(event) {
    this.navCtrl.push(BasicPage, {
     
    });
  }
}
