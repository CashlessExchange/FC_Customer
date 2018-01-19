import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { Api } from '../../providers/api/api';


@IonicPage()
@Component({
  selector: 'page-editcard',
  templateUrl: 'editcard.html',
})
export class EditcardPage {

  private tokens: string[] = [];
  private customerid: string;
  private card: {
    cardname: string,
    cardowner: string,
    cardnumber: string,
    month: string,
    year: string,
    checkdigit: string,
    icon: string,
    token: string
  };

  constructor(
    private autService: Api,
    private platform:Platform,
    public storage: NativeStorage,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams) {
    console.log(navParams.get("card"));
    this.card = navParams.get("card");
  }

  async deleteCard() {



    console.log("in delete Funktion");
    let confirm = this.alertCtrl.create({
      title: 'Do you want to delete this card',
      message: 'Are you sure to delete this card?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagreed clicked');

          }
        },
        {
          text: 'Agree',
          handler: async () => {
            console.log("Agree clicked");
            //DO SOMETHING
            await this.deleteFunct(this.card.token);
            this.navCtrl.popToRoot();
          }
        }

      ]

    });
    confirm.present();

  }

  async deleteFunct(tokens) {
    console.log(tokens);


    await this.deleteCardFromDB(tokens);
  }

  async deleteCardFromDB(tokens: string) {

    if (!this.platform.is('core')) {
      await this.storage.getItem('user-id').then((data) => {
        if (data != null || data != undefined) {
          this.customerid = data;
        }
      });
    } else {
      this.customerid = "44";
    }

    let databasecreds = {
      username: "freedom-app",
      password: "150498AV",
      reference: "",
      customerid: this.customerid,
      accountnumber:this.card.cardnumber
    };
    console.log(databasecreds);

    let certis: any = await this.autService.cardService(databasecreds, "?deleteCard=" + "99");
    console.log(certis.results);
    this.tokens = certis.results;
  }

  filter(value: string) {
    let secret = "*******";
    let endcard = value.length;
    return secret + value.substring(endcard - 4, endcard);
  }

}
