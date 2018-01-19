import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform, ToastController } from 'ionic-angular';
import { Api } from '../../providers/api/api';
import { AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { NativeStorage } from '@ionic-native/native-storage';


@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {

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
  private itemsprice:string="0.00";
  

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
    this.price = navParams.get('price');
    this.ref = navParams.get('ref');
    this.items.ref = this.ref;
    this.selectedCard = navParams.get('selectedcard');
    this.discount = navParams.get('discount');
    this.feeForMerchant = navParams.get('fees');
    this.vaucherid = navParams.get('vaucherid');
    this.chosenToken = navParams.get('certs');
    this.guthaben = navParams.get('guthaben');
    this.itemsprice = navParams.get('itemsprice');
    console.log(navParams);
    this.items.price = navParams.get('price');
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
    this.prepareItem("nada");
    this.cardsonpage = [];
    //this.getCardsFromToken();
    //this.getCertificatesFromMerchant();
    this.merchantData();
  }

  

  async prepareItem(param:string) {
    console.log(this.price);

    if(param!="solo"){
      

      
      let newPrice = this.price;


    }else{
      console.log(this.items.price);
      console.log(this.discount);
      //let ammountNew:number =Number(this.items.price) - this.discount;
      //this.price = String(ammountNew.toFixed(2));
      //this.feeForMerchant=0;
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


  filter(value: string) {
    let secret = "*******";
    let endcard = value.length;
    return secret + value.substring(endcard - 3, endcard);
  }





  async createToken(customerid: any, merchantid: any, price: any) {

    let value = price;
    let heute = new Date();
    console.log(heute);

    let tokendata: { customerid: any, merchantid: any, value: any, date: any } =
      { customerid: "3004", merchantid: "19", value: "3", date: "04.10.2017" };

    //HERE Comes the Percentage for certificate
    let tempValue = Number(this.feeForMerchant) * 2;
    if (this.guthaben != 0) {
      tempValue = Number(this.guthaben);
    }

    let priceForCerts = tempValue.toFixed(2);
    if (priceForCerts != "0.00") {
      console.log(tokendata);
      await this.geolocation.getCurrentPosition().then((location) => {
        this.lat = location.coords.latitude;
        this.lng = location.coords.longitude;
      }).catch((err) => {
        alert(err);
      });

      let token = {
        "APIKey": "bDjnJKu7ip7097Vfq46I",
        "TokenExID": "4323829200543105",
        "Data": heute.getFullYear() + "-" +
        heute.getMonth() + "-" +
        heute.getDay() + "." +
        this.customerid + "." +
        merchantid + "." +
        //'44'+"."+

        priceForCerts + "." +
        this.lat + "." +
        this.lng,
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


      let databasecreds = {
        username: "freedom-app",
        password: "150498AV",
        merchantid: this.items.merchantid,
        customerid: this.customerid,
        token: this.token,
        reference:this.ref,
        value: priceForCerts.replace(".", "")

      };
      console.log(databasecreds);

      let datas: any = await this.autService.certificateService(databasecreds, "?addCerti=" + "99");
      if (datas.addCerti === "success") {
        console.log("successfully saved in Database");
      }
      else {
        alert("error");
      }
      console.log("test" + datas);

    }
  }

  makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }


  async buyAction() {
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
      //this.items.price=newPrice.toString();
      let messageForCustomer: string =
        'By clicking Agree, you hereby authorize this Merchant to add fees to total price to purchase Certificates totaling double that amount. Total: $'
        + newPrice.toString().replace(/\s+/g, '') + ", fees $" + this.feeForMerchant + ', discount($' + discount.toFixed(2) + ') ';
      if (this.guthaben != 0) {
        messageForCustomer += " - new value for certificate: $" + this.guthaben.toFixed(2) ;
      }

      let confirm = this.alertCtrl.create({
        title: 'Approval',
        message: 'Do you want to buy this item?',
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
              loading.present();
              console.log("Agree clicked");
              let result: any;
              result = await this.autService.serviceTransaction(databasecreds, "?updateNew=" + this.ref);
              console.log(result);
              let type = "app_payment.php?deal_id=" + this.items.deal +
              "&customer_id=" + this.customerid +
                "&merchant_id=" + this.items.merchantid +
                "&qr_code=" + this.ref +
                "&deal_amount=" + this.items.price +
                "&vaucher_discount_id=" + this.vaucherid +
                "&vaucher_discount_percent=6"+
              "&processing_fee=" + this.feeForMerchant;
              //@TODO
              let buyApp: any = this.autService.serviceFreedom("", type);
              console.log(buyApp);
              if (result.buy = 'success') {
                try {
                  let buyApp: any = this.autService.serviceFreedom("", type);
                  console.log(buyApp);
                } catch (err) {
                  console.log(err);
                }
                console.log("new Price: " + newPrice);
                if (this.selectedCard != null) {

                  this.callForte();

                }
                let databasecreds = {
                  username: "merchantbackuser",
                  password: "150498AV",
                  merchantid: this.newMErchantID
                };
                let refer:any = await this.autService.merchantService(databasecreds, "?affiliateCommission=" + "99");

                console.log(refer);

                if(refer.affiliateCommission.referer_id!=0){
                  let commision = await this.autService.commissionService("", "?affiliate_id="+refer.affiliateCommission.referer_id+"&commission_type=sale_stored_payment ");
                  console.log(commision);
                }
                if(this.selectedCard.cardname != "Cash/Check"){
                  await this.createToken(this.items.customerid, this.items.merchantid, newPrice);
                } 
                let trans:string = "Card";
                if(this.selectedCard.cardname === "Cash/Check"){
                  trans="Cash";
                }
                let param = "merchant_id="+this.items.merchantid +
                "&ref_no="+this.items.ref+
                "&trans_type="+trans+
                "&trans_amount="+this.itemsprice+
                "&customer_id="+this.customerid;
                //await this.createToken(this.items.customerid, this.items.merchantid, newPrice);
                await this.autService.marketPlaceMerchantService(databasecreds,"recordFcTransactionFees.php?"+param);

                console.log(this.values);
                for (let value of this.chosenToken) {
                  await this.deleteToken(value);
                }
                let toast = this.toatCtrl.create({
                  message: " Success - You bought this new item",
                  duration: 3000,
                  position: 'top'
                });

                loading.dismiss();
                toast.present();
              } else {
                let somwrong = this.alertCtrl.create({
                  title: 'ERROR',
                  subTitle: 'Something went wrong',
                  buttons: ['OK']
                });
                somwrong.present();
              }
              this.navCtrl.popToRoot();
            }
          }

        ]

      });
      confirm.present();
    }
  }

  async callForte() {

    let databasecreds = {
      username: "merchantbackuser",
      password: "150498AV",
      merchantid: this.newMErchantID
    };
    let refer:any = await this.autService.merchantService(databasecreds, "?location_id=" + "99");
    

    let token = {
      "APIKey": "bDjnJKu7ip7097Vfq46I",
      "TokenExID": "4323829200543105",
      "Data": "4111111111111111",
      "TokenScheme": 1
    };

    /*
        cardname: "Cash/Check",
        cardowner: "Anonym",
        cardnumber: "0",
        month: "0",
        year: "0",
        checkdigit: "0",
        icon: "Anonym",
        cash: 1
    '*/
    let splittedName = this.selectedCard.cardowner.split(" ");

    let forteTransaction =
      {
        action: "sale",
        authorization_amount: this.price,
        subtotal_amount: this.items.price,
        billing_address: {
          first_name: this.selectedCard.cardowner.split(" ")[0],
          last_name: this.selectedCard.cardowner.split(" ")[1]
        },
        card: {
          card_type: this.selectedCard.cardname,
          name_on_card: this.selectedCard.cardowner,
          account_number: "{{{" + this.selectedCard.cardnumber + "}}}",
          expire_month: this.selectedCard.month.replace(/\s+/g, ''),
          expire_year: this.selectedCard.year.replace(/\s+/g, ''),
          card_verification_value: this.selectedCard.checkdigit
        }
      };

    await this.autService.tokenizeTrans(forteTransaction, refer.location_id.forte_loc_id).then((response) => {
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
  async deleteToken(value: string) {

    console.log(value);


    let token = {
      "APIKey": "bDjnJKu7ip7097Vfq46I",
      "TokenExID": "4323829200543105",
      "Token": value
    };


    let databasecreds = {
      username: "freedom-app",
      password: "150498AV",
      reference: this.ref,
      customerid: this.customerid,
      token: value
    };
    console.log(databasecreds);

    let deletion = await this.autService.certificateService(databasecreds, "?deleteCerti=" + "99");
    console.log(deletion);

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
