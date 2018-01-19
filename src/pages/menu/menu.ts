import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, App ,Platform, ToastController} from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { CheckoutPage } from '../checkout/checkout';
import { EntercodePage } from '../entercode/entercode';
import { Tutorial2Page } from '../tutorial2/tutorial2';
import { AlertController } from 'ionic-angular';
import { Api } from '../../providers/api/api';
import { NativeStorage } from '@ionic-native/native-storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { PricevaluePage } from '../pricevalue/pricevalue';
import {ChoosepaymethodPage} from '../choosepaymethod/choosepaymethod';
import {MarketplacetransactionPage} from '../marketplacetransaction/marketplacetransaction';
import {PointsPage} from '../points/points';




export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  options: BarcodeScannerOptions;
  rootPage = 'HomePage';
  results: { text: string, format: string, cancelled: boolean };
  private customerid;

  private showReg:boolean=true;
  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    { title: 'Home', pageName: 'HomePage', icon: 'home' },
    { title: 'My Cards', pageName: 'PaymethodsPage', icon: 'card' },
    { title: 'My Certificates', pageName: 'SpecialPage', icon: 'paper' },
    { title: 'Recent Transactions', pageName: 'TransactionsPage', icon: 'pricetags' },
    { title: 'Marketplace', pageName: 'CategoryPage', icon: 'basket' },
    { title: 'Orders', pageName: 'MarketplacetransactionPage', icon: 'paper' },
    { title: 'Your Points', pageName: 'PointsPage', icon: 'podium' }


  ]
  constructor(
    private storage: NativeStorage,
    private platform:Platform,
    private toasCtrl:ToastController,
    private alertCtrl: AlertController,
    private autService: Api,
    public navCtrl: NavController,
    public navParams: NavParams,
    public app: App,
    private iab: InAppBrowser,
    private barcode: BarcodeScanner) {
      //const browser = this.iab.create('https://ionicframework.com/');
  }

  async ionViewWillEnter(){
    if (!this.platform.is('core')) {
    await this.storage.getItem('user-id').then((data) => {
      if (data != null || data != undefined) {
        this.customerid = data;
      }
    });
  } else {
    this.customerid = "73";
  }

  if (!this.platform.is('core')) {
    await this.storage.getItem('registration').then((data) => {
      if (data ===this.customerid) {
        this.showReg=false;
      }
    });
  }

 }



  openPage(page: PageInterface) {
    let params = {};

    if (page.index) {
      params = { tabIndex: page.index };
    }

    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      this.nav.setRoot(page.pageName, params);
    }
  }

  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNav();

    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
  }

  async enterBarcode() {
    this.nav.push(EntercodePage);
  }

  async goToSearch() {
    this.nav.push("SearchPage");
  }

  async goToReferral() {
    this.nav.push("ReferalPage");
  }

  async goToRegistration() {
    this.nav.push("RegisteraffiliatePage");
  }

  async goToTutorial() {
    this.nav.push(Tutorial2Page);    
  }

  openPoints(){
    //this.nav.push(PointsPage);    

    //this.iab.create('http://cashlessexchange-sb.com/marketplace','_blank');
  }

  async scanBarcode() {

    this.options = {
      prompt: 'Scan a QR-Code to see the result'
    }

    this.results = await this.barcode.scan(this.options);
    if (this.results.cancelled != true) {

      if (!this.platform.is('core')) {
        await this.storage.getItem('user-id').then((data) => {
          if (data != null || data != undefined) {
            this.customerid = data;
          }
        });
      } else {
        this.customerid = "73";
      }
  
      console.log(this.results.text);
      let ref = this.results.text;
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
        let alert = this.toasCtrl.create({
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

    } else {
      this.nav.popToRoot();
    }

  }


  async testToke(){

    let token = {
      "APIKey": "bDjnJKu7ip7097Vfq46I",
      "TokenExID": "4323829200543105",
      "Data":  "4111111111111111",
      "TokenScheme": 4
    };

    let tokene:string="";
    await this.autService.tokenize(token, "Tokenize").then((response) => {
      let responses: any;
      console.log(response);
      responses = response;
      if (responses.Success === false) {
        alert("error");
      } else {
        //alert(responses.Token);
        tokene=responses.Token;
        console.log(responses.Token);
      }
    });



    let forteTransaction=
    {
      action:"sale",
      authorization_amount: 15.55,
      subtotal_amount: 13.15,
      billing_address:{
       first_name: "George",
       last_name: "Jenkins"
    },
    card:{
       card_type: "visa", 
       name_on_card: "George Jenkins",
       account_number: "{{{"+tokene+"}}}",
       expire_month: "12",
       expire_year: "2017",
       card_verification_value:"123"
    }
  };

    await this.autService.tokenizeTrans(forteTransaction, "209887").then((response) => {
      let responses: any;
      console.log(response);
      responses = response;
      if (responses.Success === false) {
        alert("error");
      } else {
        //alert(responses.Token);
        console.log(responses.Token);
      }
    });


  }

  doLogout() {

    let toast = this.toasCtrl.create({
      message: 'You have been succesfully logged out',
      duration: 3000,
      position: 'top'
    });
    toast.present();
    this.navCtrl.setRoot('LoginPage');
  }
}
