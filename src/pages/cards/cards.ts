import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddpaymethodPage } from '../addpaymethod/addpaymethod';


@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html',
})
export class CardsPage {

  constructor(
    public nav: NavController,
    public navParams: NavParams) {
  }

  cardSelected(cardnumber) {
    console.log(cardnumber);
    this.nav.push(AddpaymethodPage, { card: cardnumber });
  }

}
