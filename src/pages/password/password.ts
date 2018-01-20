import { Component } from '@angular/core';
import { Api } from '../../providers/api/api';
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';

/**
 * Generated class for the PasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-password',
  templateUrl: 'password.html',
})
export class PasswordPage {

  private email:string;

  constructor(public navCtrl: NavController, 
    private toastCtrl:ToastController,
    private autService: Api,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordPage');
  }

  getPassword(){
    // Unable to sign up
    let toast = this.toastCtrl.create({
      message: "Unable to send your password",
      duration: 3000,
      position: 'top'
    });

    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(this.email)) {

      let type = "forgotpassword.php?email=" + this.email;
      this.autService.serviceFreedom("",type).then((resp:any)=>{
        console.log(resp);
        if (resp.success ===1){
          this.navCtrl.popToRoot();
          
          toast.setMessage(resp.message);
          toast.present();
        }
      });

    } else {
      toast.setMessage("Invalid Email");
      toast.present();
    }

  }
}
