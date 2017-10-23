import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/Storage';
import { CardService } from '../../services/card.service';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';


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
    private autService: AuthServiceProvider,
    private cardService: CardService,
    public storage: Storage,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams) {
    console.log(navParams.get("card"));
    this.card = navParams.get("card");
  }

  async deleteCard() {

    await this.cardService.getCards().then((cards) => {
      this.tokens = cards;
    });

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

    let token = {
      "APIKey": "bDjnJKu7ip7097Vfq46I",
      "TokenExID": "4323829200543105",
      "Token": tokens
    };

    await this.autService.tokenize(token, "DeleteToken").then((response) => {
      let responses: any;
      console.log("test!" + response);
      responses = response;
      if (responses.Success === false) {
        alert("error");
      } else {
        console.log(responses.Success);

      }
    });

    await this.deleteCardFromDB(tokens);
  }

  async deleteCardFromDB(tokens: string) {

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
      token: tokens
    };
    console.log(databasecreds);

    let certis: any = await this.autService.serviceTransaction(databasecreds, "?deleteCard=" + "99");
    console.log(certis.results);
    this.tokens = certis.results;
  }


}
