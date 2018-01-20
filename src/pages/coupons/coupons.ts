import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CouponsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coupons',
  templateUrl: 'coupons.html',
})
export class CouponsPage {

  private coupons:any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams) {
      this.coupons = navParams.get('coupon');
      console.log(this.coupons);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CouponsPage');
  }

}
