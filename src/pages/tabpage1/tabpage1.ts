import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NFC, Ndef } from '@ionic-native/nfc';



@IonicPage()
@Component({
    selector: 'page-tabpage1',
    templateUrl: 'tabpage1.html',
})


export class Tabpage1Page {
    private dataroar: { message: String, duration: number, position: String };
    private id: string;
    private tag: String;
    private payLoad: any;
    private tagContent: any;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private nfc: NFC,
        private ndef: Ndef) {

        this.nfc.addMimeTypeListener("text/json").subscribe(data => {
            if (data && data.tag && data.tag.id) {
                this.id = data.tag.id;
                this.tag = data.tag;
                if (data.tag.ndefMessage) {
                    this.dataroar = {
                        message: 'NFC Tag found',
                        duration: 1000,
                        position: 'bottom'
                    };

                    this.payLoad = data.tag.ndefMessage[0].payload;
                    this.tagContent = JSON.parse(this.nfc.bytesToString(this.payLoad).substring(3));

                } else {
                    this.dataroar = {
                        message: 'NFC Tag not found',
                        duration: 1000,
                        position: 'bottom'
                    };

                }
            }
        });

    }


}
