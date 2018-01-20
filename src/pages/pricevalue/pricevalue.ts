import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ToastController } from 'ionic-angular';
import { ChoosepaymethodPage } from '../choosepaymethod/choosepaymethod';

import { AlertController } from 'ionic-angular';
import { Api } from '../../providers/api/api';
import { NativeStorage } from '@ionic-native/native-storage';

/**
 * Generated class for the PricevaluePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pricevalue',
  templateUrl: 'pricevalue.html',
})
export class PricevaluePage {

  private customerid: string;
  private merchantid: string;
  private dealid: string;
  private reference: string;
  private discount: string;
  private vaucherid: string;

  constructor(
    private platform: Platform,
    private autService: Api,
    private storage: NativeStorage,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    public nav: NavController,
    public navParams: NavParams) {

    if (!this.platform.is('core')) {
      this.storage.getItem('user-id').then((data) => {
        if (data != null || data != undefined) {
          this.customerid = data;
        }
      });
    } else {
      this.customerid = "75";
    }
    this.merchantid = navParams.get('merchant');
  }
  async ionViewWillEnter() {
    this.dealid = this.customerid + this.merchantid + this.makeid();
    this.reference = String(Math.floor(Math.random() * 90000) + 10000);


  }

  async addPrice(value: any) {
    console.log(value);

    let price: string = value.price;
    price = price.replace(",", ".");
    console.log(price.indexOf('.') !== -1);

    if (price.indexOf('.') === -1) {
      console.log(price);
      price = price + ".00";
    }

    let type = "check_vaucher_discount.php?customer_id=" + this.customerid +
    "&merchant_id=" + this.merchantid +
    "&deal_amount=" + price;
  //@TODO
  let calculated:number =0;
  let discountFromAPI: any = await this.autService.serviceFreedom("", type);
  if(discountFromAPI.message ==="No vaucher discount availabel on deal"){
    console.log(discountFromAPI['Discount available']);
    let alert = this.toastCtrl.create({
      message: discountFromAPI.message,
      duration: 3000,
      position: 'top'
    });
    alert.present();
    this.lastSTep(value,price);
  }else if(discountFromAPI.message ==="vaucher discount availabel on deal"){
    this.discount = discountFromAPI.Deal_Discounted_price;

    let confirm = this.alertCtrl.create({
      title: discountFromAPI.message,
      message: 'Do you want to use discount of $'+discountFromAPI.Deal_Discounted_price +' from marketplace?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
            this.lastSTep(value,price);
            
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
            console.log(Number(price));
            console.log(Number(this.discount));
            calculated =Number(price)-Number(this.discount);
            this.vaucherid = discountFromAPI.vaucher_discount_id;
            console.log(calculated);
            price = calculated.toFixed(2);
            this.lastSTep(value,price);
          }
        }
      ]
    });
    await confirm.present();
  }


  }

  async lastSTep(value: any, price){

    let priceForDb = price.replace(".", "");
    console.log(this.discount);

    let databasecreds =
      {
        username: "freedom-pos",
        password: "150498AV",
        reference: this.reference,
        value: priceForDb,
        customerid: this.customerid,
        merchantid: this.merchantid,
        transaction: this.dealid
      };
    let result = await this.autService.serviceTransaction(databasecreds, "?addTransaction=" + this.reference);
    this.nav.push(ChoosepaymethodPage, { merchant: this.merchantid, price: price, item: value.name, deal: this.dealid, ref: this.reference , vaucherid:this.vaucherid});
  }

  makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

}
