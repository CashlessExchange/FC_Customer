import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { Api } from '../../providers/api/api';
import { CouponsPage } from '../coupons/coupons';


@IonicPage()
@Component({
  selector: 'page-marketplacetransaction',
  templateUrl: 'marketplacetransaction.html',
})
export class MarketplacetransactionPage {


  private transactions: any[] = [];
  private customerid: string;

  constructor(
    private platform:Platform,
    public storage: NativeStorage,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private autService: Api) {

    const loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `Please Wait..
      
      <div class="custom-spinner-container">
        <div class="custom-spinner-box"></div>
      </div>`
    });

    loading.present();
    this.laodTransactions();
    setTimeout(() => {
      loading.dismiss();
    }, 0);
  }

  async laodTransactions() {

    if (!this.platform.is('core')) {
      await this.storage.getItem('user-id').then((data) => {
        if (data != null || data != undefined) {
          this.customerid = data;
        }
      });
    } else {
      this.customerid = "40";
    }

    let databasecreds = {
      username: "freedom-pos",
      password: "150498AV",
      reference: "",
      customerid: this.customerid,
      token: ""
    };
    console.log(databasecreds);

    //let trans: any = await this.autService.serviceTransaction(databasecreds, "?getTransactions=" + "99");
    let trans:any = await this.autService.marketPlaceService(databasecreds,"fetchOrderDetails.php?customer_id="+this.customerid);

    console.log(trans.orderDetails);

    this.transactions = trans.orderDetails;

    //for (let entry of this.transactions) {
    //  entry.device_id = await this.getMerchantData(entry.merchant_id);
    //}

  }

  async getMerchantData(id: string) {

    let databasecreds = {
      username: "merchantbackuser",
      password: "150498AV",
      reference: "",
      customerid: this.customerid,
      token: "",
      id: id
    };
    console.log(databasecreds);

    //let merch: any = await this.autService.serviceTransaction(databasecreds, "?getMerchant=" + "99");
    let merch: any = await this.autService.serviceTransaction(databasecreds, "?getMerchant=" + "99");

    console.log(merch);
    return merch;

  }

  filter(value: string) {
    if (value === "1") {
      return "yes";
    }
    else {
      return "no";
    }
  }

  addPoint(num) {
    let temp = num.toString();
    if (temp.length === 1) {
      temp = "0.0" + temp;
    } else if (temp.length === 2) {
      temp = "0." + temp;
    }
    else {
      let lengthnum = temp.length;
      temp = temp.substring(0, lengthnum - 2) + "." + temp.substring(lengthnum - 2, lengthnum);
    }
    return temp;
  }

  openCoupon(coupons:any){
    console.log(coupons);
    this.navCtrl.push(CouponsPage, {coupon:coupons});
  }

}
