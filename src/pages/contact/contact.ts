import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  apiUrl = 'https://contacts-v1-dw2.herokuapp.com';

  constructor(public navCtrl: NavController) {

  }

}
