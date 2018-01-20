import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { IonicPage, NavController, NavParams, ToastController, Platform } from 'ionic-angular';
import { Api } from '../../providers/api/api';
import { NativeStorage } from '@ionic-native/native-storage';

import { User } from '../../providers/providers';

/**
 * Generated class for the Signup3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signupsum',
  templateUrl: 'signupsum.html',
})
export class SignupsumPage {

  private cardtype = ["American Express", "Discover", "Mastercard", "Visa"];
  private months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
  private years = ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028",
    "2029", "2030", "2031", "2032", "2033", "2034", "2035", "2036", "2037", "2038", "2039", "2040"];
  private customerid: string;

  private token: string;
  account: {
    name: string,
    cardowner:string,
    email: string,
    password: string,
    phone: string,
    city: string,
    cardtype: string,
    cardnumber: string,
    month: string,
    year: string,
    cvv: string
  } = {
    name: '',
    cardowner: '',
    email: '',
    password: '',
    phone: '',
    city: '',
    cardtype: 'null',
    cardnumber: 'null',
    month: 'null',
    year: 'null',
    cvv: 'null'
  };

  private responseData: any;


  // Our translated text strings
  private signupErrorString: string;

  constructor(private platform: Platform,
    public navCtrl: NavController,
    private user: User,
    private autService: Api,
    public storage: NativeStorage,
    private toastCtrl: ToastController,
    public navParams: NavParams,
    public translateService: TranslateService) {
    this.account = this.navParams.get("paramsReg");
    console.log(this.account);
    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup3Page');
  }

  async doSignup() {

    // Unable to sign up
    let toast = this.toastCtrl.create({
      message: this.signupErrorString,
      duration: 3000,
      position: 'top'
    });

    let token = {
      "APIKey": "bDjnJKu7ip7097Vfq46I",
      "TokenExID": "4323829200543105",
      "Data": this.account.cardnumber,
      "TokenScheme": 1
    };

    let failed: string = "none";

    await this.autService.tokenize(token, "Tokenize").then((response) => {
      let responses: any;
      console.log(response);
      responses = response;
      if (responses.Success === false) {
        alert("Please enter correct accountnumber");
        failed = "failed";
      } else {
        //alert(responses.Token);
        this.token = responses.Token;
      }
    });
    if (failed != "failed") {

      let type: string = "registration.php?email=" + this.account.email
        + "&username=" + this.account.name
        + "&password=" + this.account.password
        + "&phone=" + this.account.phone
        + "&city_id=" + this.account.city
        + "&card_type=" + this.account.cardtype.replace(/\s+/g, '')
        + "&card_number=" + this.account.cardnumber
        + "&expiry_month=" + this.account.month.replace(/\s+/g, '')
        + "&expiry_year=" + this.account.year.replace(/\s+/g, '')
        + "&cvv=" + this.account.cvv;
      let cardo: {
        cardname: string,
        cardowner: string,
        cardnumber: string,
        month: string,
        year: string,
        checkdigit: string,
        icon: string
      } = {
          cardname: "",
          cardowner: this.account.cardowner,
          cardnumber: this.token,
          month: this.account.month,
          year: this.account.year,
          checkdigit: this.account.cvv,
          icon: ""
        }
      //this.responseData = await this.user.serviceFreedom(JSON.stringify({ message: "Freedom Choice App is calling" }), type);
      console.log('inMEthods');
      this.user.login(this.account, type).subscribe((resp: any) => {
        console.log(resp);
        console.log(resp.success);
        console.log(resp.message);
        
        if (resp.success === 0 && resp.message === "Duplicate email or Duplicate username") {
          toast.setMessage("Email or Username already in use");
          toast.present();
          console.log("Duplicate email or Duplicate username");
        } else
        if (resp.success === 1 && resp.message ==="Registration done successfully") {
          this.addCard(cardo);

          this.navCtrl.popToRoot();
          toast.setMessage("Registration Successfully");
          toast.present();

        }else{
          toast.setMessage("Error in Registration - Please check your data and try it later");
          toast.present();

        }
        
      }, (err) => {

        //this.navCtrl.popToRoot();
        toast.present();
      });

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


    console.log(this.account.cardtype);
    let splitter1:string = this.account.cardtype.replace(/\s+/g, '');
    console.log(splitter1);
    switch (splitter1) {
      case "AmericanExpress": {
        card.icon = "assets/img/americanexpress.png";
        card.cardname = "amex";
        break;
      }
      case "Discover": {
        card.icon = "assets/img/discover.png";
        card.cardname = "disc";
        //statements; 
        break;
      }
      case "Mastercard": {
        card.icon = "assets/img/mastercard.png";
        card.cardname = "mast";
        //statements; 
        break;
      }
      case "Visa": {
        card.icon = "assets/img/visa.png";
        card.cardname = "visa";
        //statements; 
        break;
      }
      default: {
        //statements; 
        break;
      }
    }


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

      
    let type = "login.php?email=" + this.account.email + "&password=" + this.account.password;
    await this.user.login(this.account, type).subscribe((resp: any) => {

      if (resp.success === 1 && resp.message === "login success") {
        this.customerid = resp.customerid;
        let databasecreds = {
          username: "freedom-pos",
          password: "150498AV",
          reference: "",
          customerid: resp.customerid,
          cardtype: card.cardname.replace(/\s+/g, ''),
          nameoncard: card.cardowner,
          accountnumber: this.token,
          expiremonth: card.month.replace(/\s+/g, ''),
          expireyear: card.year.replace(/\s+/g, ''),
          cvv: card.checkdigit,
          icon: card.icon
        };
        console.log(databasecreds);
    
        let certis: any = this.autService.cardService(databasecreds, "?addCard=" + "99");
        console.log(certis.result);
        if (certis.result === "success") {
          this.navCtrl.getPrevious();
          this.navCtrl.popToRoot();
        } 

      } else {
        let toast = this.toastCtrl.create({
          message: "Error in Registration",
          duration: 3000,
          position: 'top'
        });
        toast.present();
      }

    });

  }

}
