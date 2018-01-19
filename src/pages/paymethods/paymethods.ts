import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform } from 'ionic-angular';
import { CardsPage } from '../cards/cards';
import { Api } from '../../providers/api/api';
import { EditcardPage } from '../editcard/editcard';
import { NativeStorage } from '@ionic-native/native-storage';



@IonicPage()
@Component({
  selector: 'page-paymethods',
  templateUrl: 'paymethods.html',
})
export class PaymethodsPage {
  private cardsonpage: any[] = [];
  private tokens: any[] = [];
  private splitted: string[];
  private customerid: string;
  //private cardsonpage:{cardname:string,cardowner:string,cardnumber:string,month:string,year:string,checkdigit:string,icon:string}[] =[];
  private card:any;

  constructor(
    public loadingCtrl: LoadingController,
    private platform:Platform,
    private autService: Api,
    public storage: NativeStorage,
    public navCtrl: NavController,
    public navParams: NavParams) {
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

        this.card = {
          cardname: entry.card_type,
          cardowner: entry.name_on_card,
          cardnumber: entry.account_number,
          month: entry.expire_month,
          year: entry.expire_year,
          checkdigit: entry.card_verification_value,
          icon: entry.icon
        }

        this.cardsonpage.push(this.card);


      }
    }
    setTimeout(() => {
      loading.dismiss();
    }, 0);


  }

  async loadCards() {

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
      token: ""
    };
    console.log(databasecreds);

    let certis: any = await this.autService.cardService(databasecreds, "?getCards=" + "99");
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
    return secret + value.substring(endcard - 4, endcard);
  }

  addCard() {
    this.navCtrl.push(CardsPage);
  }

}
