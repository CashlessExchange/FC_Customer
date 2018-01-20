import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Api } from '../../providers/api/api';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';
import { listenToElementOutputs } from '@angular/core/src/view/element';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  currentItems: any = [];
  private logo:string="assets/img/shop_merchant.png";
  
  constructor(public navCtrl: NavController, 
    private autService:Api,
    public navParams: NavParams, 
    public items: Items) { }

  /**
   * Perform a service for the proper items.
   */
  async getItems(ev) {
    let val = ev.target.value;
    console.log(ev);
    let ref = val;
    let databasecreds = {
      username: "merchantbackuser",
      password: "150498AV",
      zipcode: ref
    };
    console.log(databasecreds);

    let datas: any;
    datas = await this.autService.merchantService(databasecreds, "?getlocation=" + "99");
    console.log(datas.merchlist);
    
    let listOfMerchants:any[]=[];
    console.log(listOfMerchants);
    
    for (let entry of datas.merchlist){

      let searchParam:any=entry.merchant_id;
      console.log(searchParam);
      let merchantdata:any = await this.getMerchantData(entry.merchant_id);
      merchantdata.id=searchParam;

      if(merchantdata.logo.length === 0){
        //console.log(merchantlogo);
        
        merchantdata.logo = this.logo;
      }
      listOfMerchants.push(merchantdata);

    }
    if (!val || !val.trim()) {
      this.currentItems = [];
      return;
    }
    this.currentItems=listOfMerchants;
  }

  async getMerchantData(id:string){
    
        let databasecreds={username:"merchantbackuser",
        password:"150498AV",
        reference:"",
        token:"",
        id:id};
        console.log(databasecreds);
    
        let merch:any = await this.autService.serviceTransaction(databasecreds,"?getMerchant="+"99");
        console.log(merch);
        return merch;
    
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: any) {
    console.log(item);
    this.navCtrl.push('ItemDetailPage', {
      item: item.id
    });
  }

}
