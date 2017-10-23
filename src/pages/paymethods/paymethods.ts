import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { CardsPage } from '../cards/cards';
import { Storage } from '@ionic/Storage';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { EditcardPage } from '../editcard/editcard';

import { CardService } from '../../services/card.service';


@IonicPage()
@Component({
  selector: 'page-paymethods',
  templateUrl: 'paymethods.html',
})
export class PaymethodsPage {
  private cardsonpage: any[] = [];
  private tokens: string[] = [];
  private splitted: string[];
  private customerid: string;
  //private cardsonpage:{cardname:string,cardowner:string,cardnumber:string,month:string,year:string,checkdigit:string,icon:string}[] =[];
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
    public loadingCtrl: LoadingController,
    private autService: AuthServiceProvider,
    private cardService: CardService,
    public storage: Storage,
    public navCtrl: NavController,
    public navParams: NavParams,
    private cardsfromservice: CardService) {
    this.cardsonpage = [];
  }

  async ionViewWillEnter() {
    this.cardsonpage = [];
    const loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `Please Wait..
      
      <div class="custom-spinner-container">
        <div class="custom-spinner-box"></div>
      </div>`
    });

    //this.cardsonpage = await this.storage.get('card1').then((data)=>{
    //  console.log(data);
    //  return data.cards;
    //});
    //await this.cardService.getCards().then((cards)=>{
    //  this.tokens =  cards;
    //});
    loading.present();
    await this.loadCards()

    console.log(this.tokens);
    if (this.tokens != null && this.tokens != undefined) {


      for (let entry of this.tokens) {

        let token = {
          "APIKey": "bDjnJKu7ip7097Vfq46I",
          "TokenExID": "4323829200543105",
          "Token": entry
        };

        await this.autService.tokenize(token, "Detokenize").then((response) => {
          let responses: any;
          console.log("test!" + response);
          responses = response;
          if (responses.Success === false) {
            alert("error");
          } else {

            //alert(responses.Value);
            this.splitted = responses.Value.split("-");
            console.log(this.splitted);
            this.card = {
              cardname: this.splitted[0],
              cardowner: this.splitted[1],
              cardnumber: this.splitted[2],
              month: this.splitted[3],
              year: this.splitted[4],
              checkdigit: this.splitted[5],
              icon: this.splitted[6],
              token: entry

            }

            console.log(this.splitted);
            this.cardsonpage.push(this.card);
            //this.token = responses.Token;
          }
        });

      }
    }
    setTimeout(() => {
      loading.dismiss();
    }, 0);


  }

  async loadCards() {

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
      token: ""
    };
    console.log(databasecreds);

    let certis: any = await this.autService.serviceTransaction(databasecreds, "?getCards=" + "99");
    console.log(certis.results);
    this.tokens = certis.results;
  }

  editCard(value) {

    console.log(value);
    this.navCtrl.push(EditcardPage, { card: value });
  }

  filter(value: string) {
    let secret = "*******";
    let endcard = value.length;
    return secret + value.substring(endcard - 3, endcard);
  }

  addCard() {
    this.navCtrl.push(CardsPage);
  }

}
