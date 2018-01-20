import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform, ToastController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { Api } from '../../providers/api/api';
/**
 * Generated class for the ReferalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registeraffiliate',
  templateUrl: 'registeraffiliate.html',
})
export class RegisteraffiliatePage {

  private name: string;
  private customer: any;
  private customerid: string;
  private passwordConfirm: string;
  private password: string;


  constructor(public navCtrl: NavController,
    private toastCtrl: ToastController,
    private auth: Api,
    private nativstorage:NativeStorage,
    private storage: NativeStorage,
    private platform: Platform,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReferalPage');
  }
  async register() {

    //await this.storage.ready().then((data) => {
    //  data.setItem('user-id', "44");
    //});

    if (!this.platform.is('core')) {
      await this.storage.getItem('user-id').then((data) => {
        if (data != null || data != undefined) {
          this.customerid = data;
        }
      });
    } else {
      this.customerid = "40";
    }


    let type = "customer_data.php?customerid=" + this.customerid;
    console.log(type);
    this.customer = await this.auth.serviceFreedom("", type);
    console.log(this.customer);

    // Unable to sign up
    let toast = this.toastCtrl.create({
      message: "Unable to register you as affiliate",
      duration: 3000,
      position: 'top'
    });

    if (this.password != '' && this.name != '' && this.passwordConfirm != '') {

      if (this.password != this.passwordConfirm) {

        toast.setMessage("Password does not match");
        toast.present();

      } else {

        let fullname = this.name.replace(" ", "");

        let type = "?fullname=" + fullname + "&email=" + this.customer.data.email + "&password=" + this.password;
        //@TODO
        let registration: any = this.auth.registerAffiliate("", type).subscribe((resp: any) => {
          
          console.log(resp);
          if (resp.status === "Success") {
            this.setData();
            this.navCtrl.popToRoot();
  
            toast.setMessage(resp.message);
            toast.present();
          } else {
            toast.setMessage(resp.message);
            toast.present();
          }
          
                //this.navCtrl.push(MainPage);
              }, (err) => {
                console.log(err);
                //this.navCtrl.push(MainPage);
          
                // Unable to log in
                let toast = this.toastCtrl.create({
                  message: err,
                  duration: 3000,
                  position: 'top'
                });
                toast.present();
              });
  

        //


      }

    } else {
      toast.setMessage("Please refill all Fields");
      toast.present();

    }
  }

  async setData() {
    
        if (!this.platform.is('core')) {
          await this.nativstorage.setItem('registration', this.customerid);
        }
    
      }

}
