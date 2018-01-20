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
  selector: 'page-signupsumnocard',
  templateUrl: 'signupsumnocard.html',
})
export class SignupsumnocardPage {


  private customerid: string;

  private token: string;
  account: {
    name: string,
    cardowner: string,
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

    let type: string = "registration.php?email=" + this.account.email
      + "&username=" + this.account.name
      + "&password=" + this.account.password
      + "&phone=" + this.account.phone
      + "&city_id=" + this.account.city
      + "&card_type=" + 'None'
      + "&card_number=" + 'None'
      + "&expiry_month=" + 'None'
      + "&expiry_year=" + 'None'
      + "&cvv=" + 'None'
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

      if (resp.success === 0 && resp.message === "Duplicate email or Duplicate username") {
        toast.setMessage("Email or Username already in use");
        toast.present();
      } else
        if (resp.success === 1 && resp.message === "Registration done successfully") {
          this.navCtrl.popToRoot();
          toast.setMessage("Registration Successfully");
          toast.present();

        } else {
          toast.setMessage("Error in Registration - Please check your data and try it later");
          toast.present();

        }

    }, (err) => {
      console.log(err);
      
      //this.navCtrl.popToRoot();
      toast.present();
    });


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
    let splitter1: string = this.account.cardtype.replace(/\s+/g, '');
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
