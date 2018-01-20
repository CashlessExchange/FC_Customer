import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, Platform } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

import { TranslateService } from '@ngx-translate/core';

export interface Slide {
  title: string;
  description: string;
  image: string;
}

@IonicPage()
@Component({
  selector: 'page-tutorial2',
  templateUrl: 'tutorial2.html'
})
export class Tutorial2Page {
  slides: Slide[];
  showSkip = true;
  dir: string = 'ltr';

  constructor(public navCtrl: NavController,
    private nativeStorage: NativeStorage,
    public menu: MenuController,
    translate: TranslateService,
    public platform: Platform) {
    this.dir = platform.dir();
    translate.get(["TUTORIAL_SLIDE1_TITLE",
      "TUTORIAL_SLIDE1_DESCRIPTION",
      "TUTORIAL_SLIDE2_TITLE",
      "TUTORIAL_SLIDE2_DESCRIPTION",
      "TUTORIAL_SLIDE3_TITLE",
      "TUTORIAL_SLIDE3_DESCRIPTION",
    ]).subscribe(
      (values) => {
        console.log('Loaded values', values);
        this.slides = [
          {
            title: "My Cards",
            description: "To add a credit or debit card to your Freedom Choice Customer App, simply click Add A Card, and complete the necessary fields. If you mess up, don’t worry, your card information will not be stored until you select to Save It. /n To delete a credit or debit card, simply select the card you desire to delete, and select Delete. This card and all other card information will be removed. However, the transactions made with the deleted payment type will still remain in your Transaction History. ",
            image: '',
          },
          {
            title: "My Store Credits",
            description: "The Freedom Choice Customer App allows you to earn valuable Store Credit at your favorite locally-owned businesses, and this is where they are stored.  To use this section, simply click on Take Me To My Store Credits, and scroll through. ",
            image: '',
          },
          {
            title: "My Transactions",
            description: "When making payments with your Freedom Choice Customer App, you will find each and every transaction, and the transaction details neatly in this section. To find a transaction, simply scroll through the Recent Transactions or you can use the filters to find just what you are looking for. ",
            image: '',
          },
          {
            title: "Scanning The Merchant ID",
            description: "To make a payment with your Freedom Choice App, simply scan the QR Code or Enter the ID number located underneath the QR Code at each participating location.",
            image: '',
          },
          {
            title: "Visit Marketplace",
            description: "If you are looking for Deals, Better Deals, or Additional Store Credit from your favorite businesses, go to our Marketplace and get up to 60% off on certificates that will add Store Credit to your Wallet. /n To add Store Credit simply login to the Marketplace, search for Deals, Click, Buy, and Add. It’s too easy. ",
            image: '',
          },
          {
            title: "Find Merchant",
            description: "To find a participating business, simply select the Find Merchant tab, enter the city, state, zip code, or select Find Merchants Near Me, and the app will do the rest. /n Are you looking for a specific business type, (retail, restaurant, or service), use the filters to maximize your search results. ",
            image: '',
          }
        ];
      });
  }


  async startApp() {
    this.navCtrl.setRoot('MenuPage', {}, {
      animate: true,
      direction: 'forward'
    });
  }


  skip() {

    this.navCtrl.setRoot('MenuPage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
