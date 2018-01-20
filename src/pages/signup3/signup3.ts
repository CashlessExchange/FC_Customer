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
  selector: 'page-signup3',
  templateUrl: 'signup3.html',
})
export class Signup3Page {

  private cardtype = ["American Express", "Discover", "Mastercard", "Visa"];
  private months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
  private years = ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028",
    "2029", "2030", "2031", "2032", "2033", "2034", "2035", "2036", "2037", "2038", "2039", "2040"];
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

  async nextPage() {

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
        //this.account.cardnumber = responses.Token;
        // Unable to sign up
        let toast = this.toastCtrl.create({
          message: this.signupErrorString,
          duration: 3000,
          position: 'top'
        });

        if (this.account.name != '' || this.account.city != '' || this.account.phone != '') {
          this.navCtrl.push('SignupsumPage', { paramsReg: this.account });

        } else {

          toast.setMessage("Please refill all Fields");
          toast.present();
        }
      }
    });

  }

  skip() {
    // Unable to sign up
    let toast = this.toastCtrl.create({
      message: this.signupErrorString,
      duration: 3000,
      position: 'top'
    });

    if (this.account.name != '' || this.account.city != '' || this.account.phone != '') {
      this.navCtrl.push('SignupsumnocardPage', { paramsReg: this.account });

    } else {

      toast.setMessage("Please refill all Fields");
      toast.present();
    }

  }

}
