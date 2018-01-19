import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { Api } from '../../providers/api/api';
import { Geolocation } from '@ionic-native/geolocation';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import * as moment from 'moment-timezone';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  private customerid: string = "";
  private locationid: string = "";
  private customer: any;
  private certificates: any;
  private logo: string = "assets/img/shop_merchant.png";
  private splitted: string[] = [];
  private certs: any = [];
  private transactions: any[] = [];
  private lat: number = -32.9477132;
  private lng: number = -60.630465800000025;
  private marketplaceInfo:boolean=false;
  private marketplacediscount =0;
  private marketpoints = 0;

  constructor(
    public platform: Platform,
    private androidPermissions: AndroidPermissions,
    private geolocation: Geolocation,
    private auth: Api,
    private storage: NativeStorage,
    public navCtrl: NavController,
    public navParams: NavParams,
    private loadingCtrl: LoadingController) {

  }
  async ionViewWillEnter() {

    const loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `Please Wait..
          
          <div class="custom-spinner-container">
            <div class="custom-spinner-box"></div>
          </div>`
    });

    this.certs = [];
    //loading.present();
    await this.locateMe();
    this.readCustomerData();
    await this.loadCertis();
    await this.detokenCertificate();
    await this.laodTransactions();
    //this.getMerchantData();
    //loading.dismiss();
  }

  async specialDeals(){


    let databasecreds1 = {
      username: "freedom-app",
      password: "150498AV",
      customerid: this.customerid,
    };

    let points: any = await this.auth.marketplacepointservice(databasecreds1, "?getPoints=" + "99");
    console.log(points.results);
    let lengthnum = points.results.length;
    this.marketpoints = points.results.substring(0, lengthnum - 2);

    let databasecreds = {
      username: "username",
      password: "test",
    };


    let currentUnixTime = moment().tz("America/New_York").unix();
    let param = "&customer_id="+this.customerid+
                "&timestamp="+currentUnixTime;
    let order:any = await this.auth.marketPlaceService(databasecreds,"getMonthlyAdditionalDiscountForCustomer.php?"+param);
    console.log(order);
    if ( order.additional_discount != "0"){
      console.log(order.additional_discount);
      this.marketplacediscount = order.additional_discount;
      this.marketplaceInfo =true;
    }
  }

  async readCustomerData() {

    //await this.storage.ready().then((data) => {
    //  data.setItem('user-id', "44");
    //});

    if (!this.platform.is('core')) {
      await this.storage.getItem('user-id').then((data) => {
        if (data != null || data != undefined) {
          this.customerid = data;
        }
      });
    } else {
      this.customerid = "40";
    }

    await this.specialDeals();

    let type = "customer_data.php?customerid=" + this.customerid;
    console.log(type);
    this.customer = await this.auth.serviceFreedom("", type);
    console.log(this.customer);

  }

  async locateMe() {

    if (this.platform.is('android')) {
      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
        success => console.log('Permission granted'),
        err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
      );
    }

    await this.geolocation.getCurrentPosition().then((location) => {
      this.lat = location.coords.latitude;
      this.lng = location.coords.longitude;
    }).catch((err) => {
      alert(err);
    });

  }

  async detokenCertificate() {
    console.log(this.certificates);

    if (this.certificates != null || this.certificates != undefined) {



      //alert(responses.Value);
      let date = this.certificates.timestamp;
      let customerid = this.certificates.customer_id;
      let merchantid = this.certificates.merchant_id;
      let price = this.certificates.value;

      let merchantdata: any = await this.getMerchantData(merchantid);
      let merchantname = merchantdata.name;
      let merchantlogo = this.logo;
      console.log(merchantdata.logo.length);
      if (merchantdata.logo.length != 0) {
        console.log(merchantlogo);

        merchantlogo = merchantdata.logo;
      }

      console.log(merchantlogo);
      let cert: any = {
        merchantid: merchantid,
        merchantname: merchantname,
        merchantlogo: merchantlogo,
        token: this.certificates,
        value: price
      }
      console.log(this.splitted);
      this.certs.push(cert);
    } else {
      this.certs = this.certificates;
    }

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

    let merch: any = await this.auth.serviceTransaction(databasecreds, "?getMerchant=" + "99");
    console.log(merch);
    return merch;

  }

  async loadCertis() {


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
      username: "freedom-app",
      password: "150498AV",
      reference: "",
      customerid: this.customerid,
      token: ""
    };
    console.log(databasecreds);

    let certis: any = await this.auth.certificateService(databasecreds, "?getCertis=" + "99");
    console.log(certis.results);
    if (certis.results != undefined) {

      let length = certis.results.length;
      this.certificates = certis.results[length - 1];
    } else {
      this.certificates = certis.results;
    }

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
      username: "freedom-app",
      password: "150498AV",
      reference: "",
      customerid: this.customerid,
      token: ""
    };
    console.log(databasecreds);

    let trans: any = await this.auth.serviceTransaction(databasecreds, "?getTransactions=" + "99");
    console.log(trans.results);

    this.transactions = trans.results;
    if (this.transactions != undefined) {

      let length = this.transactions.length;
      if (length > 5) {
        console.log(this.transactions.slice(length - 4, length));
        this.transactions = this.transactions.slice(length - 4, length);
      }
    }
    for (let entry of this.transactions) {
      entry.device_id = await this.getMerchantData(entry.merchant_id);
    }

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

}
