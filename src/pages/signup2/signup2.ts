import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the Signup2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup2',
  templateUrl: 'signup2.html',
})
export class Signup2Page {
  account: {
    name: string,
    cardowner:string,
    email: string,
    password: string,
    phone: string,
    city: string,
    cardtype:string,
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
    cardtype:'',
    cardnumber: '',
    month: '',
    year: '',
    cvv: ''
  };

  // Our translated text strings
  private signupErrorString: string;

  private passwordConfirm: string;
  
  constructor(public navCtrl: NavController,
    private toastCtrl: ToastController,
    public navParams: NavParams,
    private translateService: TranslateService) {
    this.account = this.navParams.get("paramsReg");
    console.log(this.account);
    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })
  }

  nextPage() {
    // Unable to sign up
    let toast = this.toastCtrl.create({
      message: this.signupErrorString,
      duration: 3000,
      position: 'top'
    });

    if (this.account.email != '' && this.account.password != '' && this.passwordConfirm != '') {

      if (this.account.password != this.passwordConfirm) {

        toast.setMessage("Password does not match");
        toast.present();

      } else {

        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(this.account.email)) {
          this.navCtrl.push('Signup3Page', { paramsReg: this.account });

        } else {
          toast.setMessage("Invalid Email");
          toast.present();
        }

      }

    } else {
      toast.setMessage("Please refill all Fields");
      toast.present();

    }

  }


}
