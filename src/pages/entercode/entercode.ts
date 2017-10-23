import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CheckoutPage } from '../checkout/checkout';

import { AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Storage } from '@ionic/Storage';

@IonicPage()
@Component({
  selector: 'page-entercode',
  templateUrl: 'entercode.html',
})
export class EntercodePage {

  constructor(
    private autService: AuthServiceProvider,
    private storage: Storage,
    private alertCtrl: AlertController,
    public nav: NavController,
    public navParams: NavParams) {
  }


  async doEnter(value) {
    console.log(value);
    let ref = value.code;
    let databasecreds = {
      username: "freedom-pos",
      password: "150498AV",
      reference: ref,
      customerid: 5000
    };
    console.log(databasecreds);

    let datas: any;
    datas = await this.autService.serviceTransaction(databasecreds, "?getid=" + ref);

    console.log("test" + datas.id);
    if (datas.hit == 'failed') {
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'This Code is not valid',
        buttons: ['OK']
      });
      alert.present();
      this.nav.popToRoot();
    } else {
      this.nav.push(CheckoutPage, { ref: ref, data: datas });
    }
  }

}
