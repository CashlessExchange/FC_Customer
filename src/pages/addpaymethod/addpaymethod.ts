import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Api } from '../../providers/api/api';

import { NativeStorage } from '@ionic-native/native-storage';


@IonicPage()
@Component({
  selector: 'page-addpaymethod',
  templateUrl: 'addpaymethod.html',
})
export class AddpaymethodPage {

  private cards: { cardname: string, cardowner: string, cardnumber: string, month: string, year: string, checkdigit: string, icon: string }[] = [];
  private tokens: string[] = [];

  private iconsrc: string;
  private cardname: string;
  private customerid: string;
  private months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
  private years = ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028",
    "2029", "2030", "2031", "2032", "2033", "2034", "2035", "2036", "2037", "2038", "2039", "2040"];
  private card: { cardnumber: string, date: string, check: number };
  private token: string;

  constructor(
    private platform: Platform,
    private autService: Api,
    public storage: NativeStorage,
    public navCtrl: NavController,
    public navParams: NavParams) {

    this.cards = [];


    console.log(this.cards);
    let cardnumber = navParams.get('card');

    switch (cardnumber) {
      case 1: {
        this.iconsrc = "assets/img/americanexpress.png";
        this.cardname = "amex";
        break;
      }
      case 2: {
        this.iconsrc = "assets/img/discover.png";
        this.cardname = "disc";
        //statements; 
        break;
      }
      case 3: {
        this.iconsrc = "assets/img/mastercard.png";
        this.cardname = "mast";
        //statements; 
        break;
      }
      case 4: {
        this.iconsrc = "assets/img/visa.png";
        this.cardname = "visa";
        //statements; 
        break;
      }
      default: {
        //statements; 
        break;
      }
    }
  }
  async addCard(card: {
    cardname: string,
    cardowner: string,
    cardnumber: string,
    month: string,
    year: string,
    checkdigit: string,
    icon: string
  }) {

    card.icon = this.iconsrc;
    card.cardname = this.cardname;

    console.log(card.cardnumber);


    let token = {
      "APIKey": "bDjnJKu7ip7097Vfq46I",
      "TokenExID": "4323829200543105",
      "Data": card.cardnumber,
      "TokenScheme": 1
    };

    let failed:string="none";

    await this.autService.tokenize(token, "Tokenize").then((response) => {
      let responses: any;
      console.log(response);
      responses = response;
      if (responses.Success === false) {
        alert("Please enter correct accountnumber");
        failed="failed";
      } else {
        //alert(responses.Token);
        this.token = responses.Token;
      }
    });
    if(failed!="failed"){

    

    let cardo: {
      cardname: string,
      cardowner: string,
      cardnumber: string,
      month: string,
      year: string,
      checkdigit: string,
      icon: string
    } =
      {
        cardname: card.cardname,
        cardowner: card.cardowner,
        cardnumber: this.token,
        month: card.month,
        year: card.year,
        checkdigit: card.checkdigit,
        icon: card.icon
      };

    if (!this.platform.is('core')) {
      await this.storage.getItem('user-id').then((data) => {
        if (data != null || data != undefined) {
          this.customerid = data;
        }
      });
    } else {
      this.customerid = "73";
    }

    let databasecreds = {
      username: "freedom-app",
      password: "150498AV",
      reference: "",
      customerid: this.customerid,
      cardtype: card.cardname,
      nameoncard: card.cardowner,
      accountnumber: this.token,
      expiremonth: card.month,
      expireyear: card.year,
      cvv: card.checkdigit,
      icon: card.icon
    };
    console.log(databasecreds);

    let certis: any = await this.autService.cardService(databasecreds, "?addCard=" + "99");
    console.log(certis.result);
    if (certis.result === "success") {
      this.navCtrl.getPrevious();
      this.navCtrl.popToRoot();
    } else {
      alert("Error");

    }

  }

  }


}
