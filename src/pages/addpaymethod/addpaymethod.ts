import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CardService } from '../../services/card.service';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

import { Storage } from '@ionic/Storage';


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
  private months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
  private years = ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028",
    "2029", "2030", "2031", "2032", "2033", "2034", "2035", "2036", "2037", "2038", "2039", "2040"];
  private card: { cardnumber: string, date: string, check: number };
  private token: string;

  constructor(
    private autService: AuthServiceProvider,
    public storage: Storage,
    public navCtrl: NavController,
    public navParams: NavParams,
    private cardService: CardService) {

    this.cards = [];

    this.storage.get('card5').then((data) => {
      if (data === null) {
        this.cards = [];
      } else {
        this.cards = data;
      }
    });
    console.log(this.cards);
    let cardnumber = navParams.get('card');

    switch (cardnumber) {
      case 1: {
        this.iconsrc = "assets/img/americanexpress.png";
        this.cardname = "American Express";
        break;
      }
      case 2: {
        this.iconsrc = "assets/img/discover.png";
        this.cardname = "Discover";
        //statements; 
        break;
      }
      case 3: {
        this.iconsrc = "assets/img/mastercard.png";
        this.cardname = "Mastercard";
        //statements; 
        break;
      }
      case 4: {
        this.iconsrc = "assets/img/visa.png";
        this.cardname = "Visa";
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

    await this.cardService.getCards().then((cards) => {
      this.tokens = cards;
    });

    let token = {
      "APIKey": "bDjnJKu7ip7097Vfq46I",
      "TokenExID": "4323829200543105",
      "Data": card.cardname + "-" +
      card.cardowner + "-" +
      card.cardnumber + "-" +
      card.month.replace(/\s+/g, '') + "-" +
      card.year.replace(/\s+/g, '') + "-" +
      card.checkdigit + "-" +
      card.icon,
      "TokenScheme": 4
    };

    await this.autService.tokenize(token, "Tokenize").then((response) => {
      let responses: any;
      console.log(response);
      responses = response;
      if (responses.Success === false) {
        alert("error");
      } else {
        //alert(responses.Token);
        this.token = responses.Token;
      }
    });

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
        cardnumber: card.cardnumber,
        month: card.month,
        year: card.year,
        checkdigit: card.checkdigit,
        icon: card.icon
      };

    await this.storage.get('user-id').then((data) => {
      if (data != null && data != undefined) {
        this.customerid = data;
      }
    });

    let databasecreds = {
      username: "freedom-pos",
      password: "150498AV",
      reference: "",
      customerid: this.customerid,
      token: this.token
    };
    console.log(databasecreds);

    let certis: any = await this.autService.serviceTransaction(databasecreds, "?addCard=" + "99");
    console.log(certis.result);
    if (certis.result === "success") {
      this.navCtrl.getPrevious();
      this.navCtrl.popToRoot();
    } else {
      alert("Error");

    }


  }


}
