import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ToastController } from 'ionic-angular';
import { CheckoutPage } from '../checkout/checkout';
import { PricevaluePage } from '../pricevalue/pricevalue';
import {ChoosepaymethodPage} from '../choosepaymethod/choosepaymethod';

import { AlertController } from 'ionic-angular';
import { Api } from '../../providers/api/api';
import { NativeStorage } from '@ionic-native/native-storage';

@IonicPage()
@Component({
  selector: 'page-entercode',
  templateUrl: 'entercode.html',
})
export class EntercodePage {

  private customerid: string;

  constructor(
    private platform: Platform,
    private autService: Api,
    private storage: NativeStorage,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    public nav: NavController,
    public navParams: NavParams) {
  }


  async doEnter(value) {

    if (!this.platform.is('core')) {
      await this.storage.getItem('user-id').then((data) => {
        if (data != null || data != undefined) {
          this.customerid = data;
        }
      });
    } else {
      this.customerid = "75";
    }

    console.log(value);
    let ref = value.code;

    let databasecreds1 =
    {
      username: "freedom-app",
      password: "150498AV",
      reference: ref,
      customerid: this.customerid
    };
    let transaction:any = await this.autService.serviceTransaction(databasecreds1, "?getid=" + ref);

    let databasecreds = {
      username: "merchantbackuser",
      password: "150498AV",
      merchantid: transaction.merchant_id
    };
    console.log(databasecreds);

    let datas: any;
    datas = await this.autService.merchantService(databasecreds, "?getMerchantEnrolled=" + "99");

    console.log("test" + datas.id);
    if (datas.hit === 'failed') {
      let alert = this.toastCtrl.create({
        message: 'This Merchant is not participating in our Freedom Choice Service',
        duration: 3000,
        position: 'top'
      });
      alert.present();
      //this.nav.popToRoot();
    } else {


             this.nav.push(ChoosepaymethodPage, { merchant: transaction.merchant_id, 
                                              price: transaction.value, 
                                              ref: ref});

    }
  }


}
