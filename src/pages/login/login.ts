import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, Platform } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { User } from '../../providers/providers';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
import { MenuPage } from '../menu/menu';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, password: string } = {
    email: '',
    password: ''
  };

  // Our translated text strings
  private loginErrorString: string;
  private customerid: string;

  constructor(public navCtrl: NavController,
    private fingerprint: FingerprintAIO,
    private nativeStorage: NativeStorage,
    public user: User,
    public platform: Platform,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
    this.checkData();
  }

  async setData() {

    if (!this.platform.is('core')) {
      await this.nativeStorage.setItem('loginname', this.account.email);
      await this.nativeStorage.setItem('user-id', this.customerid);
    }

  }

  async checkData() {
    if (!this.platform.is('core')) {
      await this.nativeStorage.getItem('loginname').then((data) => {
        if (data != null && data != undefined) {
          this.account.email = data;
        }
      });
      await this.nativeStorage.getItem('user-id').then((data) => {
        if (data != null && data != undefined) {
          this.customerid = data;

          this.fingerprintLogin();
        }

      });
    }
  }

  async fingerprintLogin() {
    await this.fingerprint.isAvailable().then(result => {

      this.fingerprint.show({
        clientId: "freedom-choice",
        clientSecret: "password",
        localizedReason: "please authenticate"
      }).then(result => {
        this.navCtrl.setRoot(MenuPage);
      }).catch((err) => {
        console.log(err);
      });
    });
  }

  // Attempt to login in through our User service
  doLogin() {

    let type = "login.php?email=" + this.account.email + "&password=" + this.account.password;

    this.user.login(this.account, type).subscribe((resp: any) => {

      if (resp.success === 1 && resp.message === "login success") {
        this.customerid = resp.customerid;
        this.setData();

        this.navCtrl.setRoot(MenuPage);
      } else {
        let toast = this.toastCtrl.create({
          message: "Username or Password wrong",
          duration: 3000,
          position: 'top'
        });
        toast.present();
      }

      //this.navCtrl.push(MainPage);
    }, (err) => {
      console.log(err);
      //this.navCtrl.push(MainPage);

      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }

  doSignup() {
    this.navCtrl.push('SignupPage');
  }

  getPassword() {
    this.navCtrl.push('PasswordPage');
  }
}
