import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tabpage1Root ='Tabpage1Page';
  tabpage2Root ='Tabpage2Page';
  myIndex:number;
  constructor(
    public navCtrl: NavController,
     public navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex ||0;
  }


}
