import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, App } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { CheckoutPage } from '../checkout/checkout';
import { EntercodePage } from '../entercode/entercode';
import { AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Storage } from '@ionic/Storage';



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

  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    { title: 'Home', pageName: 'HomePage', icon: 'home' },
    { title: 'Certificates', pageName: 'SpecialPage', icon: 'paper' },
    { title: 'Transactions', pageName: 'TransactionsPage', icon: 'pricetags' },
    { title: 'Paymethods', pageName: 'PaymethodsPage', icon: 'card' }
  ]
  constructor(
    private storage: Storage,
    private alertCtrl: AlertController,
    private autService: AuthServiceProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public app: App,
    private barcode: BarcodeScanner) {
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

  async scanBarcode() {

    this.options = {
      prompt: 'Scan a QR-Code to see the result'
    }

    this.results = await this.barcode.scan(this.options);
    if (this.results.cancelled != true) {

      let databasecreds = {
        username: "freedom-pos",
        password: "150498AV",
        reference: this.results.text,
        customerid: 5000
      };

      let datas: any;
      datas = await this.autService.serviceTransaction(databasecreds, "?getid=" + this.results.text);
      console.log("test" + datas.id);
      if (datas.hit == 'failed') {
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'This QR-Code is not valid',
          buttons: ['OK']
        });
        alert.present();
        this.nav.popToRoot();
      } else {

        this.nav.push(CheckoutPage, { ref: this.results.text, data: datas });

      }

    } else {
      this.nav.popToRoot();
    }

  }

  doLogout() {
    this.navCtrl.setRoot('LoginPage');
  }
}
