import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  private cities:string[] = ["Chattanooga", "Birmingham", "Knoxville", "Atlanta", "Nashville", "Denver"];
  private city:String = "";
  
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

  private passwordConfirm: string;

  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })
  }

  nextPage(data:{name:string,city:string,phone:string}) {
    // Unable to sign up
    let toast = this.toastCtrl.create({
      message: this.signupErrorString,
      duration: 3000,
      position: 'top'
    });
    console.log(data);
    let city = data.city.replace(/\s+/g, '');
    this.account.city=this.getCityId(city).toString();

    if (this.account.name != '' || this.account.city != '' || this.account.phone != '') {
      this.navCtrl.push('Signup2Page', { paramsReg: this.account });

    } else {

      toast.setMessage("Please refill all Fields");
      toast.present();
    }

  }

  getCityId(name:string):number{
    console.log(name);
    switch (name) {
      case "Chattanooga": {
        return 13;
      }
      case "Birmingham": {
        return 14
      }
      case "Knoxville": {
        return 15;
      }
      case "Atlanta": {
        return 16;
      }
      case "Nashville": {
        return 17;
      }
      case "Denver": {
        return 18;
      }
      default: {
        return 0;
      }
    }

  }


}
