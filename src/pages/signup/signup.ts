import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SumbitService } from '../../services/submit.services';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  private iconsrc: string;
  private cardname: string;
  private cardtype = ["American Express", "Discover", "Mastercard", "Visa"];
  private months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
  private years = ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028",
    "2029", "2030", "2031", "2032", "2033", "2034", "2035", "2036", "2037", "2038", "2039", "2040"];
  userData = { lastname: "", firstname: "", companyname: "", email: "", password: "" };
  responseData: any;

  constructor(
    public alertActrl: AlertController, 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private autService: AuthServiceProvider,
    private subission: SumbitService) {
  }

  async signUp(regdata: {
    email: string, username: string, password: string, phone: string, city: string, cardname: string, cardnumber: string, month: string,
    year: string, checkdigit: string
  }) {

    let type: string = "registration.php?email=" + regdata.email
      + "&username=t" + regdata.username
      + "&password=" + regdata.password
      + "&phone=" + regdata.phone
      + "&city=" + regdata.city
      + "&card_type=" + regdata.cardname
      + "&card_number=" + regdata.cardnumber
      + "&expiry_month=" + regdata.month
      + "&expiry_year=" + regdata.year
      + "&cvv=123" + regdata.checkdigit;
    this.responseData = await this.autService.serviceFreedom(JSON.stringify({ message: "Freedom Choice App is calling" }), type);
    console.log('inMEthods');

    if (this.responseData.success === 0 && this.responseData.message === "Duplicate email") {
      let somwrong = this.alertActrl.create({
        title: 'Signup Failed',
        subTitle: 'Email already in use.',
        buttons: ['OK']
      });
      somwrong.present();

    }

    if (this.responseData.success === 0 && this.responseData.message != "Duplicate email") {
      let somwrong = this.alertActrl.create({
        title: 'Signup Failed',
        subTitle: 'Please try again later',
        buttons: ['OK']
      });
      somwrong.present();
    }
    else {
      let somwrong = this.alertActrl.create({
        title: 'Registration was succesfully',
        subTitle: 'Enjoy',
        buttons: ['OK']
      });
      somwrong.present();
      let type = "login.php?email=" + regdata.email + "&password=" + regdata.password;
      let auth: any = await this.autService.serviceFreedom(JSON.stringify({ message: "Freedom Choice App is calling" }), type);
      let userdata = JSON.stringify({ mail: regdata.email, id: auth.customerid });
      this.navCtrl.popToRoot();
    }


  }


}
