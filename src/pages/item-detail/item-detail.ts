import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Api } from '../../providers/api/api';

import { } from '@types/googlemaps';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  @ViewChild('map') mapElement;
  
    private token: any = "";
    private splitted: string[] = [];
    private date: string;
    private customerid: string;
    private merchantid: string;
    private price: string;
    private lat: number = 0;
    private lng: number = 0;
    private map: any;
    private logo: string = "assets/img/shop_merchant.png";
    private cert: any = {
      merchantlogo: this.logo
    };
  
  item: any;

  constructor(
    public autService: Api,
    public navCtrl: NavController, 
    navParams: NavParams
  ) {
    this.item = navParams.get('item');
    this.showDetails();
  }


  async showDetails() {
  
    await this.merchantData();
    this.initMap();
  }
  async merchantData() {
    let merchantdata: any = await this.getMerchantData(this.item);
    let merchantname = merchantdata.name;
    let merchantlogo = this.logo;
    if (merchantdata.logo != undefined && merchantdata.logo.length != 0) {
      console.log(merchantlogo);

      merchantlogo = merchantdata.logo;
    }
    let merchantaddress = merchantdata.address;
    let merchantmail = merchantdata.mail;

    console.log(merchantlogo);
    let cert: any = {
      merchantid: this.merchantid,
      merchantname: merchantname,
      merchantlogo: merchantlogo,
      merchantmail: merchantmail,
      merchantaddress: merchantaddress
    }
    console.log(this.splitted);
    this.cert = cert;

  }

  async initMap() {
    let latLng = new google.maps.LatLng(this.lat, this.lng);
    let googleObj: any = await this.autService.googleAPI(this.cert.merchantaddress);
    if (googleObj != undefined) {
      console.log(googleObj.results[0].geometry.location);
      let positionByGoogle: any = googleObj.results[0].geometry.location;
      latLng = new google.maps.LatLng(positionByGoogle.lat, positionByGoogle.lng);
    }


    let marker = {
      position: latLng,
      title: this.merchantid
    };

    let mapOptions = {

      center: latLng,
      zoom: 19,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      marker: marker

    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    this.map = this.addMarker(latLng, this.map);
  }

  addMarker(position, map) {
    return new google.maps.Marker({
      position,
      map
    });
  }

  async getMerchantData(id: string) {

    let databasecreds = {
      username: "merchantbackuser",
      password: "150498AV",
      reference: "",
      token: "",
      id: id
    };
    console.log(databasecreds);

    let merch: any = await this.autService.serviceTransaction(databasecreds, "?getMerchant=" + "99");
    console.log(merch);
    return merch;

  }


}
