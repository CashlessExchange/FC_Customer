import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform, ToastController } from 'ionic-angular';
import { Api } from '../../providers/api/api';
import { NativeStorage } from '@ionic-native/native-storage';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
import * as moment from 'moment-timezone';
import { } from '@types/googlemaps';

/**
 * Generated class for the MarketplacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-marketplace',
  templateUrl: 'marketplace.html',
})
export class MarketplacePage {
  @ViewChild('map') mapElement;

  item:any;
  private customerid: string;
  private amount:number;
  private total:number=0;
  //private amounts:number[]=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  private amounts:number[]=[];
  private cardsonpage: any[] = [];
  private tokens: any[] = [];
  private selectedCard: any;
  private marketplaceInfo:boolean=false;
  private logo: string = "assets/img/shop_merchant.png";
  private lat: number = 0;
  private lng: number = 0;
  private map: any;
  private merchant: {
    address: string,
    logo: string,
    mail: string,
    name: string
  };
  private merchantloaded:boolean=false;

  private card: {
    cardname: string,
    cardowner: string,
    cardnumber: string,
    month: string,
    year: string,
    checkdigit: string,
    icon: string
  };
  private specialDiscount:number=0;
  private normalDiscountPrice:Number=0;
  private additionalDiscount = 0;
  private paidPrice=0;
  private showMap:boolean=false;
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private toatCtrl: ToastController,
    private storage: NativeStorage,
    private fingerprint: FingerprintAIO,
    private api:Api,
    private platform:Platform,
    public alertcontroller:AlertController) {
      this.item = this.navParams.get('item');
      console.log(this.item);
      this.total = 0;
      this.getCardsFromToken();
      for (let entry of this.item.available_quantity) {
        console.log(entry); // 1, "string", false
    }
    var i:number; 
    for(i = 1;i<=this.item.available_quantity;i++) {
      this.amounts.push(i);
   }

  }

  async ionViewDidLoad() {
    console.log('ionViewDidLoad MarketplacePage');
    if (!this.platform.is('core')) {
      this.storage.getItem('user-id').then((data) => {
        if (data != null || data != undefined) {
          this.customerid = data;
        }
      });
    } else {
      this.customerid = "40";
    }

    let databasecreds = {
      username: "username",
      password: "test",
    };
    let currentUnixTime = moment().tz("America/New_York").unix();

    let param = "&customer_id="+this.customerid+
                "&timestamp="+currentUnixTime;
    let order:any = await this.api.marketPlaceService(databasecreds,"getMonthlyAdditionalDiscountForCustomer.php?"+param);
    console.log(order);
    //console.log(this.item);
    let item:any=this.navParams.get('item');
    console.log(item);
    if (item.topay_merchant==="1"){
      this.specialDiscount=order.additional_discount;
      this.marketplaceInfo=true;
      

    }else{
      this.specialDiscount=0;
    }

    let temp01 = this.item.selling_price - (this.item.selling_price/100 *this.specialDiscount);
    this.paidPrice = Number(temp01.toFixed(2));
    console.log("special Price: "+temp01);
    this.merchantData();

  }

  onChange(value:any){

    console.log(value);
    let sum = this.item.selling_price * value;
    //let discountSpecial:any = this.checkDiscount();
    console.log(this.specialDiscount);
    let temp= Number(sum.toFixed(2)) / 100 * this.specialDiscount;
    this.normalDiscountPrice=Number(sum.toFixed(2));
    //discountSpecial.additional_discount;
    let sum2 = Number(sum.toFixed(2)) - Number(temp.toFixed(2));
    console.log(this.item.selling_price);
    console.log(this.normalDiscountPrice);
    console.log(sum2.toFixed(2));
    this.total = Number(sum2.toFixed(2));

  }
  showmaps(){
    this.showMap = !this.showMap;
  }

  makeid() {
    var text = "";
    var possible = "0123456789";

    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  async buyItem(){
    if(this.amount === undefined || this.selectedCard===undefined){
      let alert1 = this.alertcontroller.create({
        title: 'Attention',
        subTitle: 'Please choose your amount or your paymentcard',
        buttons: ['OK']
      });
      alert1.present();
      return;
    }
    console.log(this.item);
    let alert = this.alertcontroller.create({
      title: 'Information',
      subTitle: 'Do you want to buy this Coupon?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
            //this.selected('cash');
            //this.loadCards();

          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
            //this.orderItem();
              if (!this.platform.is('core')) {
                this.fingerprintPayment()

                }else{
                  this.payDeal();

                }

          }
        }
      ]
    });
    await alert.present();
    }

    async initMap() {
      let latLng = new google.maps.LatLng(this.lat, this.lng);
      let googleObj: any = await this.api.googleAPI(this.merchant.address);
      if (googleObj != undefined) {
        console.log(googleObj.results[0].geometry.location);
        let positionByGoogle: any = googleObj.results[0].geometry.location;
        latLng = new google.maps.LatLng(positionByGoogle.lat, positionByGoogle.lng);
      }
  
  
      let marker = {
        position: latLng,
        title: this.merchantData.name
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

    async fingerprintPayment() {
      await this.fingerprint.isAvailable().then(result => {
  
        this.fingerprint.show({
          clientId: "freedom-choice",
          clientSecret: "password",
          localizedReason: "please authenticate"
        }).then(result => {
          this.payDeal();
        }).catch((err) => {
          console.log(err);
        });
      });
    }

    async merchantData() {

      let databasecreds = {
        username: "merchantbackuser",
        password: "150498AV",
        reference: "",
        customerid: this.customerid,
        token: "",
        id: this.item.redeeming_merchant
      };
      console.log(databasecreds);
  
      let merchantdata: any = await this.api.serviceTransaction(databasecreds, "?getMerchant=" + "99");
      
      let logo = this.logo;
      if (merchantdata.logo.length != 0) {
  
        this.logo= merchantdata.logo;
      }
      this.merchantloaded = true;
      this.merchant = {
        name: merchantdata.name,
        logo:logo,
        address:merchantdata.address,
        mail:merchantdata.mail
      }

      this.initMap();

  
    }


    async getCardsFromToken() {

      await this.loadCards();
      //console.log(this.tokens);
      if (this.tokens != null && this.tokens != undefined) {
  
        for (let entry of this.tokens) {
  
  
          //alert(responses.Value);
          this.card = {
            cardname: entry.card_type,
            cardowner: entry.name_on_card,
            cardnumber: entry.account_number,
            month: entry.expire_month,
            year: entry.expire_year,
            checkdigit: entry.card_verification_value,
            icon: entry.icon
          }
  
          this.cardsonpage.push(this.card);
  
        }
      }
  
    }

    async loadCards() {

      if (!this.platform.is('core')) {
        await this.storage.getItem('user-id').then((data) => {
          if (data != null || data != undefined) {
            this.customerid = data;
          }
        });
      } else {
        this.customerid = "73";
      }
  
      let databasecreds = {
        username: "freedom-app",
        password: "150498AV",
        customerid: this.customerid,
        token: ""
      };
      console.log(databasecreds);
  
      let certis: any = await this.api.cardService(databasecreds, "?getCards=" + "99");
      console.log(certis.results);
      this.tokens = certis.results;
    }

    filter(value: string) {
      let secret = "*******";
      let endcard = value.length;
      return secret + value.substring(endcard - 3, endcard);
    }

      selected(select) {
    console.log(select);
    
      this.selectedCard = select;
      console.log(this.selectedCard);
    
  }

    async payDeal(){

        let databasecreds = {
          username: "merchantbackuser",
          password: "150498AV",
          merchantid: this.item.redeeming_merchant
        };
        let refer:any = await this.api.merchantService(databasecreds, "?location_id=" + "99");
        
    
        let token = {
          "APIKey": "bDjnJKu7ip7097Vfq46I",
          "TokenExID": "4323829200543105",
          "Data": "4111111111111111",
          "TokenScheme": 1
        };
    
        let splittedName = this.selectedCard.cardowner.split(" ");
    
        let forteTransaction =
          {
            action: "sale",
            authorization_amount: this.total,
            subtotal_amount: this.item.selling_price,
            billing_address: {
              first_name: this.selectedCard.cardowner.split(" ")[0],
              last_name: this.selectedCard.cardowner.split(" ")[1]
            },
            card: {
              card_type: this.selectedCard.cardname,
              name_on_card: this.selectedCard.cardowner,
              account_number: "{{{" + this.selectedCard.cardnumber + "}}}",
              expire_month: this.selectedCard.month.replace(/\s+/g, ''),
              expire_year: this.selectedCard.year.replace(/\s+/g, ''),
              card_verification_value: this.selectedCard.checkdigit
            }
          };
          
        
        await this.api.tokenizeTrans(forteTransaction, refer.location_id.forte_loc_id).then((response) => {
          let responses: any;
          console.log(response);
          responses = response;
          if (responses.Success === false) {
            //alert("error");
            let alert = this.alertcontroller.create({
              title: 'Warning',
              //subTitle: responses.response.response_desc,
              subTitle: 'Please Check your Credit Card Information.',

              buttons: ['OK']
            });
            alert.present();
            return;
          } else {
            //alert(responses.Token);
            console.log(responses.Token);
            let databasecreds = {
              username: "username",
              password: "test",
            };
            
            let orderID = this.makeid();
            let param = "order_id="+orderID+
                        "&customer_id="+this.customerid+
                        "&total_amount="+this.total+
                        "&paid_amount="+this.paidPrice+
                        "&status=1"+
                        "&payment_mode=card"+
                        "&card_type="+this.selectedCard.cardname+
                        "&card_last_4=4444";
            let order:any = this.api.marketPlaceService(databasecreds,"saveOrderDetails.php?"+param);
            console.log(order);

            let param1 = "order_id="+orderID+
            "&customer_id="+this.customerid+
            "&redeeming_merchant="+this.item.redeeming_merchant+
            "&topay_merchant="+this.item.topay_merchant+
            "&deal_id="+this.item.deal_id+
            "&quantity_purchased="+this.amount+
            "&denomination="+this.item.deal_value+
            "&discount="+this.item.discount_offered+
            "&additional_discount="+ this.specialDiscount+
            "&discounted_amount="+this.item.discounted_value+
            "&paid_price="+this.paidPrice;

            let coupon:any = this.api.marketPlaceService(databasecreds,"generateCouponsForOrders.php?"+param1);

            this.amount=0;

            this.navCtrl.popToRoot();
            let toast = this.toatCtrl.create({
              message: " Success - You bought this deal",
              duration: 3000,
              position: 'top'
            });

            toast.present();


          }
        });

      }


      last4(value: string) {
        let secret:string;
        let endcard = value.length;
        return secret + value.substring(endcard - 4, endcard);
      }
}
