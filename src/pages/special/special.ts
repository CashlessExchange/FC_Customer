import { Component, ViewChild, ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import {Storage}from '@ionic/Storage';
import { Geolocation } from '@ionic-native/geolocation';
import { FormControl } from "@angular/forms";
import {CertificatePage} from '../certificate/certificate';
import {CertificateService} from '../../services/certificate.service';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';


import {} from '@types/googlemaps'; 

@IonicPage()
@Component({
  selector: 'page-special',
  templateUrl: 'special.html',
})
export class SpecialPage {

  @ViewChild('map') mapElement;
  

  private latitude: number;
  private longitude: number;
  private searchControl: FormControl;
  private zoom: number;
  private formatted_address: string;
  private splitted:string[]=[];
  private certs:any=[];
  private certificates:string[];
  private yourlocation:any;
  private lat: number = -32.9477132;
  private lng: number = -60.630465800000025;
  private map : any;
  private customerid:string="";
  private date:string;
  private merchantid:string;
  private price:string;
  private logo:string="assets/img/shop_merchant.png";

  constructor(
    public loadingCtrl: LoadingController, 
    private autService:AuthServiceProvider, 
    private certiService:CertificateService, 
    private geolocation: Geolocation, 
    private storage:Storage, 
    public navCtrl: NavController, 
    public navParams: NavParams) {

  }

  async ionViewWillEnter(){

    const loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `Please Wait..
      
      <div class="custom-spinner-container">
        <div class="custom-spinner-box"></div>
      </div>`
    });

    this.certs = [];
    loading.present();
    await this.loadCertis();
    this.detokenCertificate();
    //this.getMerchantData();
    loading.dismiss();
  }

  showCert(token){
    console.log(token);
    this.navCtrl.push(CertificatePage, {token:token});
  }

  async detokenCertificate(){
    this.certificates;

    if(this.certificates != null || this.certificates != undefined){

    
    for (let entry of this.certificates) {
      
            let token ={
              "APIKey":"bDjnJKu7ip7097Vfq46I",
              "TokenExID":"4323829200543105",
              "Token":entry
            };
      
            let wsresponse:any;
            await this.autService.tokenize(token,"Detokenize").then((response) =>{
              let responses:any;
              console.log("test!"+response);
              responses=response;
              if(responses.Success ===false  ){
                alert("error");
              }else{
                wsresponse = responses;
              }          
            }) ;
              //alert(responses.Value);
              this.splitted = wsresponse.Value.split(".");
              let date=this.splitted[0];
              let customerid = this.splitted[1];
              let merchantid = this.splitted[2];

              let merchantdata:any = await this.getMerchantData(merchantid);
              let merchantname = merchantdata.name;
              let merchantlogo = this.logo;
              console.log(merchantdata.logo.length);
              if(merchantdata.logo.length != 0){
                console.log(merchantlogo);
                
                merchantlogo = merchantdata.logo;
              }

              console.log(merchantlogo);
              let cert:any={
                merchantid:merchantid,
                merchantname:merchantname,
                merchantlogo:merchantlogo,
                token:entry
              }
              console.log(this.splitted);
              this.certs.push(cert);
          }
        }

  }

  async getMerchantData(id:string){
    
        let databasecreds={username:"merchantbackuser",
        password:"150498AV",
        reference:"",
        customerid:this.customerid,
        token:"",
        id:id};
        console.log(databasecreds);
    
        let merch:any = await this.autService.serviceTransaction(databasecreds,"?getMerchant="+"99");
        console.log(merch);
        return merch;
    
      }

  async loadCertis(){
    

    await this.storage.get('user-id').then((data) =>{
      if(data != null && data != undefined){
        this.customerid=data;                    
      }
    });

    let databasecreds={username:"freedom-pos",
    password:"150498AV",
    reference:"",
    customerid:this.customerid,
    token:""};
    console.log(databasecreds);

    let certis:any = await this.autService.serviceTransaction(databasecreds,"?getCertis="+"99");
    console.log(certis.results);
    this.certificates=certis.results;
  }

  async locateMe(){
    await this.geolocation.getCurrentPosition().then((location)=>{
      this.yourlocation=location;
      this.lat=this.yourlocation.coords.latitude;
      this.lng=this.yourlocation.coords.longitude;
    }).catch((err)=>{
      alert(err);
    });
    
  }


}
