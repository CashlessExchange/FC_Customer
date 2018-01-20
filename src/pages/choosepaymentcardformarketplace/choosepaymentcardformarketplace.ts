import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform, ToastController } from 'ionic-angular';
import { Api } from '../../providers/api/api';
import { AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { CheckoutPage } from '../checkout/checkout';

import { NativeStorage } from '@ionic-native/native-storage';


/**
 * Generated class for the ChoosepaymentcardformarketplacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choosepaymentcardformarketplace',
  templateUrl: 'choosepaymentcardformarketplace.html',
})
export class ChoosepaymentcardformarketplacePage {


  private data: any;
  private ref: string;
  private customerid: string;
  private cardsonpage: any[] = [];
  private certsonpage: {
    date: any,
    customerid: string,
    merchantid: string,
    price: string
  }[] = [];
  private tokens: any[] = [];
  private splittedCards: string[];
  private splittedCerts: string[];
  private tempCerts: any[] = [];
  private showSkip:boolean =true;
  private card: {
    cardname: string,
    cardowner: string,
    cardnumber: string,
    month: string,
    year: string,
    checkdigit: string,
    icon: string
  };
  private certificates: string[];
  private lat: number;
  private lng: number;
  private token: string;
  private values: string[] = [];
  private certificateOption: any;
  private logo: string = "assets/img/shop_merchant.png";
  private cert: any = {
    merchantlogo: this.logo
  };
  private guthaben: Number = 0;
  private selectedCard: any;
  private items: {
    id: string,
    deal: String,
    name: String,
    price: string,
    merchantid: string,
    customerid: string,
    ref: string
  } = {
    id: "",
    deal: "",
    name: "",
    price: "",
    merchantid: "",
    customerid: "",
    ref: ""
  };
  private price: string="0.00";
  private feeForMerchant: number;
  private testCheckboxOpen;
  private discountBox: {
    type: string,
    label: string,
    value: string,
    checked: boolean
  }[] = [];
  private chosenToken: string[] = [];
  private newMErchantID: string;
  private priceTemp: any;
  private discount:number=0;
  private vaucherid:string;

  constructor(public loadingCtrl: LoadingController,
    private toatCtrl: ToastController,
    private platform: Platform,
    private geolocation: Geolocation,
    private storage: NativeStorage,
    public alertCtrl: AlertController,
    private autService: Api,
    public navCtrl: NavController,
    public navParams: NavParams) {
    this.newMErchantID = navParams.get('merchant');
    this.priceTemp = this.addPoint2(Number(navParams.get('price')));
    this.ref = navParams.get('ref');
    this.vaucherid = navParams.get('vaucherid');
    this.items.ref = this.ref;

    console.log(navParams);
    this.items.price = this.addPoint2(Number(navParams.get('price')));
    this.items.name = navParams.get('item');
    //this.items.name = "test";
    this.items.deal = navParams.get('deal');
    this.items.merchantid = this.newMErchantID;

    if (!this.platform.is('core')) {
      this.storage.getItem('user-id').then((data) => {
        if (data != null || data != undefined) {
          this.customerid = data;
        }
      });
    } else {
      this.customerid = "73";
    }
    this.prepareItem("solo");
    this.cardsonpage = [];
    this.getCardsFromToken();
    this.getCertificatesFromMerchant();
    this.merchantData();
  }

  addPoint2(num) {
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

  async prepareItem(param:string) {
    console.log(this.price);


    if(param!="solo"){
      if(this.price!="0.00"){
        console.log(this.feeForMerchant);
        
            console.log(this.items.price);
            await this.calcFee(this.price);
        
            console.log(String(Number(this.price).toFixed(2) + this.feeForMerchant));
            let calculated = Number(this.price) + this.feeForMerchant;
            console.log(calculated);
            //calculated = calculated-this.discount;
            console.log(calculated);            
            this.price = String(calculated.toFixed(2));

      }else{
        console.log(this.feeForMerchant);
        
            console.log(this.items.price);
            await this.calcFee(this.priceTemp);
        
            console.log(String(Number(this.items.price).toFixed(2) + this.feeForMerchant));
            let calculated = Number(this.items.price) + this.feeForMerchant;
            calculated = calculated-this.discount;            
            this.price = String(calculated.toFixed(2));
      }

      
      let newPrice = this.price;

      let messageForCustomer: string =
      'By clicking Agree, you hereby authorize this Merchant to add fee to total purchase price of, $'
      + newPrice.toString().replace(/\s+/g, '') +', to purchase a future discount of $' + this.discount.toFixed(2) ;
    if (this.guthaben != 0) {
      messageForCustomer += " - new value for certificate: $" + this.guthaben.toFixed(2) ;
    }

    let alert = this.alertCtrl.create({
      title: 'Information',
      subTitle: messageForCustomer,
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
            this.selected('cash');
            this.loadCards();

          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    }else{
      console.log(this.items.price);
      console.log(this.discount);
      let ammountNew:number =Number(this.items.price) - this.discount;
      this.price = String(ammountNew.toFixed(2));
      this.feeForMerchant=0;
    }
  }


  async merchantData() {
    let databasecreds = {
      username: "merchantbackuser",
      password: "150498AV",
      reference: this.ref,
      customerid: this.customerid,
      token: "",
      id: this.items.merchantid
    };
    console.log(databasecreds);

    let merchantdata: any = await this.autService.serviceTransaction(databasecreds, "?getMerchant=" + "99");
    let merchantname = merchantdata.name;
    let merchantlogo = this.logo;
    console.log(merchantdata.logo.length);
    if (merchantdata.logo.length != 0) {
      console.log(merchantlogo);

      merchantlogo = merchantdata.logo;
    }
    let merchantmail = merchantdata.mail;

    console.log(merchantlogo);
    let cert: any = {
      merchantid: this.items.merchantid,
      merchantname: merchantname,
      merchantlogo: merchantlogo,
      merchantmail: merchantmail
    }
    this.cert = cert;

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
      reference: this.ref,
      customerid: this.customerid,
      token: ""
    };
    console.log(databasecreds);

    let certis: any = await this.autService.cardService(databasecreds, "?getCards=" + "99");
    console.log(certis.results);
    this.tokens = certis.results;
  }

  async getCardsFromToken() {


    await this.loadCards();
    //console.log(this.tokens);
    if (this.tokens != null && this.tokens != undefined) {

      for (let entry of this.tokens) {


        //alert(responses.Value);
        //console.log(this.splitted);
        this.card = {
          cardname: entry.card_type,
          cardowner: entry.name_on_card,
          cardnumber: entry.account_number,
          month: entry.expire_month,
          year: entry.expire_year,
          checkdigit: entry.card_verification_value,
          icon: entry.icon
        }

        //console.log(this.splitted);
        this.cardsonpage.push(this.card);

      }
    }

  }

  async getCertificatesFromMerchant() {

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
      reference: this.ref,
      customerid: this.customerid,
      token: ""
    };
    console.log(databasecreds);

    let certis: any = await this.autService.certificateService(databasecreds, "?getCertis=" + "99");
    console.log(certis.results);
    this.tempCerts = certis.results;

    if (this.tempCerts != undefined && this.tempCerts != null) {


      for (let entry of this.tempCerts) {
        let token = {
          "APIKey": "bDjnJKu7ip7097Vfq46I",
          "TokenExID": "4323829200543105",
          "Token": entry
        };


        //alert(responses.Value);

        let date = new Date(entry.timestamp * 1000).toDateString();
        let pric1 = this.addPoint(entry.value);
        console.log(date);
        let certi = {
          date: date,
          customerid: entry.customer_id,
          merchantid: entry.merchant_id,
          price: pric1
        };

        if (certi.merchantid === this.items.merchantid) {
          this.discountBox.push({
            type: 'checkbox',
            label: certi.price + ' from Date: ' + certi.date,
            value: certi.price + "_" + entry.token,
            checked: true
          });
          this.certsonpage.push(certi);

        }
        //this.token = responses.Token;

      }
    }
    if (this.certsonpage.length > 0) {
      this.showCheckbox();

    }
  }

  async showCheckbox() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Do you want to use any funds from your Certificate?');


    for (let entry of this.discountBox) {
      alert.addInput(entry);
    }

    alert.addButton({
      text:'If no, then dont modify total!',
      handler:data =>{
        this.paymethodRemind();
        
      }
    });
    alert.addButton({
      text: 'If yes, then apply funds',
      handler: data => {
        console.log('Checkbox data:', data);
        this.testCheckboxOpen = false;
        let dataList: any = [];
        for (let entry of data) {

          let databox: String = entry + "";
          let splitted: string[] = databox.split("_");
          dataList.push(splitted[0]);
          this.chosenToken.push(splitted[1]);
        }
        this.certificateOption = dataList;
        this.changePrice();
        this.paymethodRemind();
      }
    });
    await alert.present();


  }

  paymethodRemind(){
    let toast = this.alertCtrl.create({
      title: "Choose Paymethod",
      message: "Which card would you like to use for this purchase?",
      buttons: ['OK']
    });
    toast.present();
  }

  selected(select) {
    console.log(select);
    
    if (select === "cash") {
      this.prepareItem("solo");
      let cardFake: {
        cardname: string,
        cardowner: string,
        cardnumber: string,
        month: string,
        year: string,
        checkdigit: string,
        icon: string,
        cash: number
      } = {
          cardname: "Cash/Check",
          cardowner: "Anonym",
          cardnumber: "0",
          month: "0",
          year: "0",
          checkdigit: "0",
          icon: "Anonym",
          cash: 1
        };
      select = cardFake;
      console.log(select);
      this.selectedCard=select;

    }else{
      this.selectedCard = select;
      console.log(this.selectedCard);
      this.prepareItem("nosolo");
    }
  }

  addPoint(num) {
    console.log(num);
    let temp = num.toString();
    if (temp.length === 1) {
      console.log("inside Trap_______");
      temp = "0.0" + temp;
    } else if (temp.length === 2) {
      console.log("inside Trap_______");
      temp = "0." + temp;
    }
    else {
      let lengthnum = temp.length;
      temp = temp.substring(0, lengthnum - 2) + "." + temp.substring(lengthnum - 2, lengthnum);
    }
      let cardFake: {
        cardname: string,
        cardowner: string,
        cardnumber: string,
        month: string,
        year: string,
        checkdigit: string,
        icon: string,
        cash: number
      } = {
          cardname: "StoreCredit",
          cardowner: "Anonym",
          cardnumber: "0",
          month: "0",
          year: "0",
          checkdigit: "0",
          icon: "Anonym",
          cash: 0
        };

    this.selectedCard = cardFake;
    return temp;
  }

  filter(value: string) {
    let secret = "*******";
    let endcard = value.length;
    return secret + value.substring(endcard - 3, endcard);
  }

  changePrice() {
    console.log("Test");
    this.discount = 0;
    if (this.certificateOption != null || this.certificateOption != undefined) {
      for (let entry of this.certificateOption) {

        console.log(entry);
        console.log("-------");
        console.log(entry.replace(/\s+/g, ''));
        let value: string;
        value = entry;
        this.values = [];
        this.values.push(entry.replace(/\s+/g, ''));
        this.discount += Number(entry.replace(/\s+/g, ''));
      }
    }
    console.log(this.discount);
    console.log(this.items.price);
    if (Number(this.price) < this.discount) {
      console.log("inside trap");

      this.guthaben = (this.discount - Number(this.price));
      console.log(this.guthaben);
      this.showSkip=false;
      this.price = "0.00";
    } else {
      this.guthaben = 0;
      
      console.log(this.guthaben);
      let tempPrice: number = (Number(this.price) - this.discount);
      this.price = tempPrice.toFixed(2);
    }

    console.log(this.discount);
  }

  async calcFee(ammount: string) {
    let databasecreds = {
      username: "merchantbackuser",
      password: "150498AV",
      merchantid: this.newMErchantID
    };
    console.log(databasecreds);

    let datas: any;
    datas = await this.autService.merchantService(databasecreds, "?getMerchantFees=" + "99");
    //let feesForMerch = Number(this.priceTemp)*Number(datas.fees.processing_fees);
    //this.items.price=this.addPoint(this.priceTemp)+feesForMerch;
    console.log("this is CalcFee: " + ammount);
    let value = Number(ammount) * Number(datas.fees.processing_fees);
    //this.price = String(Number(this.priceTemp) + Number(value));

    console.log(value.toFixed(2));
    this.feeForMerchant = Number(value.toFixed(2));
  }

  async buyAction() {
    let databasecreds = {
      username: "merchantbackuser",
      password: "150498AV",
      merchantid: this.items.merchantid
    };
    let datas: any;
    datas = await this.autService.merchantService(databasecreds, "?getMerchantEnrolled=" + "99");

    console.log("test" + datas.id);
    if (datas.hit === 'failed') {
      let alert = this.toatCtrl.create({
        message: 'This Merchant is not participating in our Freedom Choice Service',
        duration: 3000,
        position: 'top'
      });
      alert.present();
      //this.nav.popToRoot();
    } else {




    console.log(this.certificateOption);
    const loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `Please Wait..
      
      <div class="custom-spinner-container">
        <div class="custom-spinner-box"></div>
      </div>`
    });

    console.log(this.price);
    if (
        (this.selectedCard.cardname==="StoreCredit" && this.guthaben === 0 && this.price != "0.00")) {
      let noPayment = this.alertCtrl.create({
        title: 'Warning',
        subTitle: 'Please choose your paymethod',
        buttons: ['OK']
      });
      noPayment.present();

    } else {


      //let random: string = this.customerid + this.items.merchantid + this.makeid();
      //console.log(random);

      let feeForDB = "" + this.feeForMerchant;
      feeForDB = feeForDB.replace(/\./g, "");
      console.log(feeForDB);
      console.log(this.selectedCard);
      let cashFlow: number = 0;
      if (this.selectedCard != undefined && this.selectedCard.cash === 1) {
        cashFlow = this.selectedCard.cash;
        console.log("cashflow: " + cashFlow);
      }
      let databasecreds1 =
      {
        username: "freedom-app",
        password: "150498AV",
        reference: this.ref,
        customerid: this.customerid
      };
    let id:any = await this.autService.serviceTransaction(databasecreds1, "?getid=" + this.ref);
    let last4 = 0;
    if(this.selectedCard != undefined){
     last4= Number(this.selectedCard.cardnumber.slice(-4));
     if(!Number.isInteger(last4)){
        last4=4444;
     }
    }
      let databasecreds =
        {
          username: "freedom-app",
          password: "150498AV",
          reference: this.ref,
          customerid: this.customerid,
          transaction: this.items.deal,
          cash: cashFlow,
          id:id.id,
          convenience_fee: feeForDB,
          last4: last4,
          card_type: this.selectedCard.cardname
        };

      let discount = 0;
      if (this.certificateOption != null || this.certificateOption != undefined) {
        for (let entry of this.certificateOption) {

          console.log(entry);
          let value: string;
          value = entry;
          this.values = [];
          this.values.push(value.replace(/\s+/g, ''));
          discount += Number(value.replace(/\s+/g, ''));
        }

        console.log(discount);
      }
      //let newPrice = Number(this.items.price) - discount;
      let newPrice = this.price;

      let tempValue = Number(newPrice) * 0.06

      if(this.selectedCard.cardname === "Cash/Check"){
        console.log("cash");
        this.navCtrl.push(CheckoutPage, { merchant: this.items.merchantid, price: newPrice, item: this.items.name, deal: this.items.deal, ref: this.items.ref, selectedcard:this.selectedCard ,discount:discount, fees:this.feeForMerchant, vaucherid:this.vaucherid, certs:this.chosenToken, guthaben:this.guthaben});
        return;
      }else{

      

    
        let messageForCustomer: string =
        'By clicking Agree, you hereby authorize this Merchant to add fee to total purchase price of, $'
        + newPrice.toString().replace(/\s+/g, '') +', to purchase a future discount of $' + tempValue.toFixed(2) ;
      if (this.guthaben != 0) {
        messageForCustomer += " - new value for certificate: $" + this.guthaben.toFixed(2) ;
      }

      let confirm = this.alertCtrl.create({
        title: 'Do you want to buy this item?',
        message: messageForCustomer,
        buttons: [
          {
            text: 'Disagree',
            handler: () => {
              console.log('Disagreed clicked');
              let alert = this.alertCtrl.create({
                title: 'Information',
                subTitle: 'We’re sorry you chose not to use your Freedom Choice Payment Method. Please allow the merchant to complete your transaction. ',
                buttons: ['OK']
              });
              alert.present();
            }
          },
          {
            text: 'Agree',
            handler: async () => {
              this.navCtrl.push(CheckoutPage, { merchant: this.items.merchantid, price: newPrice, item: this.items.name, deal: this.items.deal, ref: this.items.ref, selectedcard:this.selectedCard ,discount:discount, fees:this.feeForMerchant, vaucherid:this.vaucherid, certs:this.chosenToken, guthaben:this.guthaben});
              
            }
          }

        ]

      });
      confirm.present();}
    }    }
    
  }

  async cancelAction() {

    let databasecreds =
      {
        username: "freedom-app",
        password: "150498AV",
        reference: this.ref,
        customerid: this.customerid
      };
    let id:any = await this.autService.serviceTransaction(databasecreds, "?getid=" + this.ref);

     let databasecreds2 =
    {
      username: "freedom-app",
      password: "150498AV",
      reference: this.ref,
      customerid: this.customerid,
      id:id.id
    };

    let confirm = this.alertCtrl.create({
      title: 'Do you want to cancel this deal?',
      message: 'Are you sure?',
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
            let result: any;
            result = await this.autService.serviceTransaction(databasecreds2, "?cancel=" + id.id);
            console.log(result);
            let confirmbuy = this.alertCtrl.create({
              title: 'Success',
              subTitle: 'You canceled this deal',
              buttons: ['OK']
            });
            confirmbuy.present();

            this.navCtrl.popToRoot();
          }
        }

      ]

    });
    confirm.present();

  }
}
