import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NFC, Ndef } from '@ionic-native/nfc';



@IonicPage()
@Component({
  selector: 'page-tabpage2',
  templateUrl: 'tabpage2.html',
})
export class Tabpage2Page {

  private payLoad: String;

  private transdata: { customerid: string, cardnumber: string, location: string, item: string, name: string, price: number };
  private mimtype = "text/json";
  private message: any;

  constructor(
    private nfc: NFC,
    private ndef: Ndef,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  payNFC() {
    let payLoad = "super secret data";

    this.transdata = {
      customerid: "Dieter Schanz", cardnumber: "2131231231", location: "Germany",
      item: "", name: "", price: 0
    }

    let test = this.ndef.textRecord(JSON.stringify(this.transdata));
    let message = this.ndef.mimeMediaRecord(this.mimtype, test);

    this.nfc.write(message), (err) => {
      console.log("error in sending");
    };
  }
}
