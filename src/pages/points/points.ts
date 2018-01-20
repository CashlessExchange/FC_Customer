import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { Api } from '../../providers/api/api';


@IonicPage()
@Component({
  selector: 'page-points',
  templateUrl: 'points.html',
})
export class PointsPage {

  private customerid:string;
  private marketpoints;

  constructor(
    public platform: Platform,
    private auth: Api,
    private storage: NativeStorage,
    public navCtrl: NavController,
    public navParams: NavParams,
    private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PointsPage');
    
    this.specialDeals();
  }


  async specialDeals(){
    if (!this.platform.is('core')) {
      await this.storage.getItem('user-id').then((data) => {
        if (data != null || data != undefined) {
          this.customerid = data;
        }
      });
    } else {
      this.customerid = "73";
    }

    let databasecreds1 = {
      username: "freedom-app",
      password: "150498AV",
      customerid: this.customerid,
    };

    let points: any = await this.auth.marketplacepointservice(databasecreds1, "?getPoints=" + "99");
    console.log(points.results);
    let lengthnum = points.results.length;
    this.marketpoints = points.results.substring(0, lengthnum - 2);


  }

}
