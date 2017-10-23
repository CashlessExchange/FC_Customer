import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/Storage';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private creds: { mail: string, password: string } = { mail: "", password: "" };
  private customerid: string;

  constructor(
    public platform: Platform,
    private fingerprint: FingerprintAIO, 
    private storage: Storage, 
    private alertCtrl: AlertController, 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private authSrvce: AuthServiceProvider) {
    this.setData();
  }

  async setData() {
    await this.storage.get('loginname').then((data) => {
      if (data != null && data != undefined) {
        this.creds.mail = data;
      }
    });
    await this.storage.get('user-id').then((data) => {
      if (data != null && data != undefined) {
        this.customerid = data;
        if (!this.platform.is('core')) {
          this.fingerprintLogin();
        }
      }
    });

  }

  async fingerprintLogin() {
    await this.fingerprint.isAvailable().then(result => {

      this.fingerprint.show({
        clientId: "freedom-choice",
        clientSecret: "password",
        localizedReason: "please authenticate"
      }).then(result => {
        this.navCtrl.setRoot('MenuPage');
      }).catch((err) => {
        console.log(err);
      });
    });
  }

  async doLogin(creds: { mail: string, password: string }) {

    let type = "login.php?email=" + creds.mail + "&password=" + creds.password;
    let auth: any = await this.authSrvce.serviceFreedom(creds, type);
    if (auth.success === 1 && auth.message === "login success") {

      await this.storage.ready().then((data) => {
        data.setItem('loginname', creds.mail);
      });
      await this.storage.ready().then((data) => {
        data.setItem('user-id', auth.customerid);
      });
      this.navCtrl.setRoot('MenuPage');
    } else {
      let somwrong = this.alertCtrl.create({
        title: 'Login Failed',
        subTitle: 'Username or Password are not correct',
        buttons: ['OK']
      });
      somwrong.present();
    }

  }

  doSignup() {
    this.navCtrl.push('SignupPage');
  }

}
