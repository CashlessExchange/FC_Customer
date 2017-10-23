import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { AlertController } from 'ionic-angular';
import { CardService } from '../../services/card.service';
import { CertificateService } from '../../services/certificate.service';
import { Geolocation } from '@ionic-native/geolocation';

import { Storage } from '@ionic/Storage';


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
    date: string,
    customerid: string,
    merchantid: string,
    price: string,
    token: string
  }[] = [];
  private tokens: string[] = [];
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
  private selectedCard: string;
  private items: {
    id: string,
    reference: String,
    price: string,
    merchantid: string,
    customerid: string
  };
  private price: string;
  private feeForMerchant: number;
  private testCheckboxOpen;
  private discountBox: {
    type: string,
    label: string,
    value: string,
    checked: boolean
  }[] = [];
  private chosenToken: string[] = [];

  constructor(public loadingCtrl: LoadingController,
    private geolocation: Geolocation,
    private storage: Storage,
    public alertCtrl: AlertController,
    private autService: AuthServiceProvider,
    private cardsfromservice: CardService,
    public navCtrl: NavController,
    public navParams: NavParams,
    public certService: CertificateService) {
    this.data = navParams.get('data');
    this.ref = navParams.get('ref');
    this.storage.get('user-id').then((data) => {
      if (data != null && data != undefined) {
        this.customerid = data;
      }
      console.log(this.customerid);
    });
    this.feeForMerchant = Number(this.calcFee(this.addPoint(this.data.value)));
    this.items = {
      id: this.data.id,
      reference: this.ref,
      price:
      String(Number(this.addPoint(this.data.value)) + this.feeForMerchant),
      merchantid: this.data.merchant_id,
      customerid: this.customerid
    };
    console.log(this.items.price);
    this.price = Number(this.items.price).toFixed(2)+"";
    this.cardsonpage = [];
    this.getCardsFromToken();
    this.getCertificatesFromMerchant();
    this.merchantData();
  }

  async merchantData() {
    let databasecreds = {
      username: "merchantbackuser",
      password: "150498AV",
      reference: "",
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

  async getCardsFromToken() {

    await this.loadCards();
    //console.log(this.tokens);
    if (this.tokens != null && this.tokens != undefined) {

      for (let entry of this.tokens) {

        let token = {
          "APIKey": "bDjnJKu7ip7097Vfq46I",
          "TokenExID": "4323829200543105",
          "Token": entry
        };

        await this.autService.tokenize(token, "Detokenize").then((response) => {
          let responses: any;
          //console.log("test!"+response);
          responses = response;
          if (responses.Success === false) {
            alert("error");
          } else {

            //alert(responses.Value);
            this.splittedCards = responses.Value.split("-");
            //console.log(this.splitted);
            this.card = {
              cardname: this.splittedCards[0],
              cardowner: this.splittedCards[1],
              cardnumber: this.splittedCards[2],
              month: this.splittedCards[3],
              year: this.splittedCards[4],
              checkdigit: this.splittedCards[5],
              icon: this.splittedCards[6],

            }

            //console.log(this.splitted);
            this.cardsonpage.push(this.card);
            //this.token = responses.Token;
          }
        });

        //console.log(this.cardsonpage);
      }
    }

  }

  async getCertificatesFromMerchant() {
    let customer = await this.storage.get('user-id').then((data) => {
      if (data != null && data != undefined) {
        return data;
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

    let certis: any = await this.autService.serviceTransaction(databasecreds, "?getCertis=" + "99");
    console.log(certis.results);
    this.tempCerts = certis.results;

    if (this.tempCerts != undefined && this.tempCerts != null) {


      for (let entry of this.tempCerts) {
        let token = {
          "APIKey": "bDjnJKu7ip7097Vfq46I",
          "TokenExID": "4323829200543105",
          "Token": entry
        };

        await this.autService.tokenize(token, "Detokenize").then((response) => {
          let responses: any;
          console.log(response);
          responses = response;
          if (responses.Success === false) {
            alert(responses);
          } else {

            //alert(responses.Value);
            this.splittedCerts = responses.Value.split(".");
            let certi = {
              date: this.splittedCerts[0],
              customerid: this.splittedCerts[1],
              merchantid: this.splittedCerts[2],
              price: this.splittedCerts[3] + "." + this.splittedCerts[4],
              token: entry
            };

            if (certi.merchantid === this.items.merchantid) {
              this.discountBox.push({
                type: 'checkbox',
                label: certi.price + ' from Date: ' + certi.date,
                value: certi.price + "_" + entry,
                checked: true
              });
              this.certsonpage.push(certi);

            }
            //this.token = responses.Token;
          }
        });
      }
    }
    if (this.certsonpage.length > 0) {
      this.showCheckbox();

    }
  }

  async showCheckbox() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Do you want to use the discount of your certificate?');


    for (let entry of this.discountBox) {
      alert.addInput(entry);
    }

    alert.addButton('no');
    alert.addButton({
      text: 'add discount',
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
      }
    });
    await alert.present();

  }

  selected(select) {
    console.log(select);
    this.selectedCard = select;
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
    return temp;
  }

  filter(value: string) {
    let secret = "*******";
    let endcard = value.length;
    return secret + value.substring(endcard - 3, endcard);
  }

  changePrice() {
    console.log("Test");
    let discount: number = 0;
    if (this.certificateOption != null || this.certificateOption != undefined) {
      for (let entry of this.certificateOption) {

        console.log(entry);
        console.log("-------");
        console.log(entry.replace(/\s+/g, ''));
        let value: string;
        value = entry;
        this.values = [];
        this.values.push(entry.replace(/\s+/g, ''));
        discount += Number(entry.replace(/\s+/g, ''));
      }
    }
    console.log(discount);
    console.log(this.items.price);
    if (Number(this.items.price) < discount) {
      console.log("inside trap");

      this.guthaben = (discount - Number(this.items.price));
      console.log(this.guthaben);
      this.price = "0.00";
    } else {
      this.guthaben = 0;
      console.log(this.guthaben);
      let tempPrice: number = (Number(this.items.price) - discount);
      this.price = tempPrice.toFixed(2);
    }

    console.log(discount);
  }

  calcFee(ammount: number) {
    console.log("this is CalcFee: " + ammount);
    let value = ammount * 0.03;
    console.log(value);
    return value.toFixed(2);
  }

  async createToken(customerid: any, merchantid: any, price: any) {

    let value = price;
    let heute = new Date();
    console.log(heute);

    let tokendata: { customerid: any, merchantid: any, value: any, date: any } =
      { customerid: "3004", merchantid: "19", value: "3", date: "04.10.2017" };

    //HERE Comes the Percentage for certificate
    let tempValue = Number(value) * 0.06;
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

      this.certService.getCertis().then((certificate) => {
        if (certificate != null && certificate != undefined) {
          this.certificates = certificate;
          console.log(this.certificates);
        } else {
          this.certificates = [];
        }

      });
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
        username: "freedom-pos",
        password: "150498AV",
        reference: "99",
        customerid: this.customerid,
        token: this.token
      };
      console.log(databasecreds);

      let datas: any = await this.autService.serviceTransaction(databasecreds, "?addCerti=" + "99");
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
    if ((this.selectedCard === null && this.guthaben === 0 && this.price != "0.00") || 
    (this.guthaben === 0 && this.selectedCard === undefined && this.price != "0.00")) {
      let noPayment = this.alertCtrl.create({
        title: 'Warning',
        subTitle: 'Please choose your paymethod',
        buttons: ['OK']
      });
      noPayment.present();

    } else {


      let random:string = this.customerid + this.items.merchantid+ this.makeid();
      console.log(random);

      let databasecreds =
        {
          username: "freedom-pos",
          password: "150498AV",
          reference: this.ref,
          id: this.data.id,
          customerid: this.customerid,
          transaction:random
        };

      let type = "check_vaucher_discount.php?customer_id=" + this.customerid +
        "&merchant_id=" + this.items.merchantid +
        "&deal_id="+random;
      //@TODO
      //let discountFromAPI:any = this.autService.serviceFreedom("",type);
      //console.log(discountFromAPI);
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
        'By clicking Agree, you hereby authorize this Merchant to add 3% to total price to purchase Certificates totaling double that amount. Total: '
        + newPrice.toString().replace(/\s+/g, '') + "$, fees" + this.feeForMerchant + '$, discount(' + discount.toFixed(2) + '$) ';
      if (this.guthaben != 0) {
        messageForCustomer += " - new value for certificate: " + this.guthaben.toFixed(2) + "$";
      }

      let confirm = this.alertCtrl.create({
        title: 'Do you want to buy this item?',
        message: messageForCustomer,
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
              result = await this.autService.serviceTransaction(databasecreds, "?update=" + this.ref);
              console.log(result);
              let type = "app_payment.php?customer_id=" + this.customerid +
                "&merchant_id=" + this.items.merchantid +
                "&deal_id=" + random+
                "&deal_amount=" + this.items.price +
                "&qr_code=" + this.items.reference +
                "&vaucher_discount_id=1";
              //@TODO
              //let buyApp:any= this.autService.serviceFreedom("",type);
              //console.log(buyApp);
              if (result.buy = 'success') {
                //let buyApp:any= await this.autService.serviceFreedom("",type);
                console.log("new Price: "+newPrice);
                await this.createToken(this.items.customerid, this.items.merchantid, newPrice);
                console.log(this.values);
                for (let value of this.chosenToken) {
                  await this.deleteToken(value);
                }

                let confirmbuy = this.alertCtrl.create({
                  title: 'Success',
                  subTitle: 'You bought this new item',
                  buttons: ['OK']
                });

                loading.dismiss();
                confirmbuy.present();
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

  async deleteToken(value: string) {

    console.log(value);


    let token = {
      "APIKey": "bDjnJKu7ip7097Vfq46I",
      "TokenExID": "4323829200543105",
      "Token": value
    };

    await this.autService.tokenize(token, "DeleteToken").then((response) => {
      let responses: any;
      console.log("test!" + response);
      responses = response;
      if (responses.Success === false) {
        alert("error");
      }
      console.log(responses.Success);

    });

    let databasecreds = {
      username: "freedom-pos",
      password: "150498AV",
      reference: "",
      customerid: this.customerid,
      token: value
    };
    console.log(databasecreds);

    let deletion = await this.autService.serviceTransaction(databasecreds, "?deleteCerti=" + "99");
    console.log(deletion);

  }

  async cancelAction() {

    let databasecreds =
      {
        username: "freedom-pos",
        password: "150498AV",
        reference: this.ref,
        id: this.data.id,
        customerid: 5000
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
            result = await this.autService.serviceTransaction(databasecreds, "?cancel=" + this.ref);
            console.log(result);
            if (result.cancel = 'success') {
              let confirmbuy = this.alertCtrl.create({
                title: 'Success',
                subTitle: 'You canceled this deal',
                buttons: ['OK']
              });
              confirmbuy.present();
            }
            this.navCtrl.popToRoot();
          }
        }

      ]

    });
    confirm.present();

  }

}
