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
  selector: 'page-referal',
  templateUrl: 'referal.html',
})
export class ReferalPage {

  private email: string;
  private customer:any;
  private customerid:string;

  constructor(public navCtrl: NavController,
    private toastCtrl: ToastController,
    private auth: Api,
    private storage: NativeStorage,
    private platform:Platform,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReferalPage');
  }
  async sendRefferal() {

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
      this.customerid = "73";
    }


    let type = "customer_data.php?customerid=" + this.customerid;
    console.log(type);
    this.customer = await this.auth.serviceFreedom("", type);
    console.log(this.customer);

    // Unable to sign up
    let toast = this.toastCtrl.create({
      message: "Unable to invite your friend.",
      duration: 3000,
      position: 'top'
    });

    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(this.email)) {


      let type = "?from_email=" +this.customer.data.email+"&to_email="+this.email;
      //@TODO
      let refer:any = this.auth.referralMail("", type).subscribe((resp: any) => {
        
        console.log(refer.__zone_symbol__value);
        if(resp.status==="Success"){
  
          toast.setMessage(resp.message);
          toast.present();
  
          this.navCtrl.popToRoot();
        }else{
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
        

    } else {
      toast.setMessage("Invalid Email");
      toast.present();
    }

  }

}
