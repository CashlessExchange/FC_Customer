import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Api } from '../../providers/api/api';

import { } from '@types/googlemaps';


@IonicPage()
@Component({
  selector: 'page-certificate',
  templateUrl: 'certificate.html',
})
export class CertificatePage {
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


  constructor(
    public autService: Api,
    public navCtrl: NavController,
    public navParams: NavParams) {

    this.token = navParams.get("token");
    console.log(this.token);
    this.showDetails();
  }

  async showDetails() {
    let token = {
      "APIKey": "bDjnJKu7ip7097Vfq46I",
      "TokenExID": "4323829200543105",
      "Token": this.token
    };
        //alert(responses.Value);
        this.date = this.token.timestamp;
        this.customerid = this.token.customer_id;
        this.merchantid = this.token.merchant_id;
        this.price = this.token.value;

        console.log(this.splitted);

        //this.token = responses.Token;
      
  
    await this.merchantData();
    this.initMap();
  }
  async merchantData() {
    let merchantdata: any = await this.getMerchantData(this.merchantid);
    let merchantname = merchantdata.name;
    let merchantlogo = this.logo;
    console.log(merchantdata.logo.length);
    if (merchantdata.logo.length != 0) {
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
      customerid: this.customerid,
      token: "",
      id: id
    };
    console.log(databasecreds);

    let merch: any = await this.autService.serviceTransaction(databasecreds, "?getMerchant=" + "99");
    console.log(merch);
    return merch;

  }

  addPoint(num) {
    let temp = num.toString();
    if (temp.length === 1) {
      temp = "0.0" + temp;
    } else if (temp.length === 2) {
      temp = "0." + temp;
    }
    else {
      let lengthnum = temp.length;
      temp = temp.substring(0, lengthnum - 2) + "." + temp.substring(lengthnum - 2, lengthnum);
    }
    return temp;
  }

}
