webpackJsonp([16],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_card_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_certificate_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_Storage__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








let CheckoutPage = class CheckoutPage {
    constructor(loadingCtrl, geolocation, storage, alertCtrl, autService, cardsfromservice, navCtrl, navParams, certService) {
        this.loadingCtrl = loadingCtrl;
        this.geolocation = geolocation;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.autService = autService;
        this.cardsfromservice = cardsfromservice;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.certService = certService;
        this.cardsonpage = [];
        this.certsonpage = [];
        this.tokens = [];
        this.tempCerts = [];
        this.values = [];
        this.logo = "assets/img/shop_merchant.png";
        this.cert = {
            merchantlogo: this.logo
        };
        this.guthaben = 0;
        this.discountBox = [];
        this.chosenToken = [];
        this.data = navParams.get('data');
        this.ref = navParams.get('ref');
        this.storage.get('user-id').then((data) => {
            if (data != null && data != undefined) {
                this.customerid = data;
            }
            console.log(this.customerid);
        });
        this.feeForMerchant = Number(this.calcFee(this.addPoint(this.data.value)));
        this.items = {
            id: this.data.id,
            reference: this.ref,
            price: String(Number(this.addPoint(this.data.value)) + this.feeForMerchant),
            merchantid: this.data.merchant_id,
            customerid: this.customerid
        };
        console.log(this.items.price);
        this.price = Number(this.items.price).toFixed(2) + "";
        this.cardsonpage = [];
        this.getCardsFromToken();
        this.getCertificatesFromMerchant();
        this.merchantData();
    }
    merchantData() {
        return __awaiter(this, void 0, void 0, function* () {
            let databasecreds = {
                username: "merchantbackuser",
                password: "150498AV",
                reference: "",
                customerid: this.customerid,
                token: "",
                id: this.items.merchantid
            };
            console.log(databasecreds);
            let merchantdata = yield this.autService.serviceTransaction(databasecreds, "?getMerchant=" + "99");
            let merchantname = merchantdata.name;
            let merchantlogo = this.logo;
            console.log(merchantdata.logo.length);
            if (merchantdata.logo.length != 0) {
                console.log(merchantlogo);
                merchantlogo = merchantdata.logo;
            }
            let merchantmail = merchantdata.mail;
            console.log(merchantlogo);
            let cert = {
                merchantid: this.items.merchantid,
                merchantname: merchantname,
                merchantlogo: merchantlogo,
                merchantmail: merchantmail
            };
            this.cert = cert;
        });
    }
    loadCards() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.storage.get('user-id').then((data) => {
                if (data != null && data != undefined) {
                    this.customerid = data;
                }
            });
            let databasecreds = {
                username: "freedom-pos",
                password: "150498AV",
                reference: "",
                customerid: this.customerid,
                token: ""
            };
            console.log(databasecreds);
            let certis = yield this.autService.serviceTransaction(databasecreds, "?getCards=" + "99");
            console.log(certis.results);
            this.tokens = certis.results;
        });
    }
    getCardsFromToken() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loadCards();
            //console.log(this.tokens);
            if (this.tokens != null && this.tokens != undefined) {
                for (let entry of this.tokens) {
                    let token = {
                        "APIKey": "bDjnJKu7ip7097Vfq46I",
                        "TokenExID": "4323829200543105",
                        "Token": entry
                    };
                    yield this.autService.tokenize(token, "Detokenize").then((response) => {
                        let responses;
                        //console.log("test!"+response);
                        responses = response;
                        if (responses.Success === false) {
                            alert("error");
                        }
                        else {
                            //alert(responses.Value);
                            this.splittedCards = responses.Value.split("-");
                            //console.log(this.splitted);
                            this.card = {
                                cardname: this.splittedCards[0],
                                cardowner: this.splittedCards[1],
                                cardnumber: this.splittedCards[2],
                                month: this.splittedCards[3],
                                year: this.splittedCards[4],
                                checkdigit: this.splittedCards[5],
                                icon: this.splittedCards[6],
                            };
                            //console.log(this.splitted);
                            this.cardsonpage.push(this.card);
                            //this.token = responses.Token;
                        }
                    });
                    //console.log(this.cardsonpage);
                }
            }
        });
    }
    getCertificatesFromMerchant() {
        return __awaiter(this, void 0, void 0, function* () {
            let customer = yield this.storage.get('user-id').then((data) => {
                if (data != null && data != undefined) {
                    return data;
                }
            });
            let databasecreds = {
                username: "freedom-pos",
                password: "150498AV",
                reference: "",
                customerid: this.customerid,
                token: ""
            };
            console.log(databasecreds);
            let certis = yield this.autService.serviceTransaction(databasecreds, "?getCertis=" + "99");
            console.log(certis.results);
            this.tempCerts = certis.results;
            if (this.tempCerts != undefined && this.tempCerts != null) {
                for (let entry of this.tempCerts) {
                    let token = {
                        "APIKey": "bDjnJKu7ip7097Vfq46I",
                        "TokenExID": "4323829200543105",
                        "Token": entry
                    };
                    yield this.autService.tokenize(token, "Detokenize").then((response) => {
                        let responses;
                        console.log(response);
                        responses = response;
                        if (responses.Success === false) {
                            alert(responses);
                        }
                        else {
                            //alert(responses.Value);
                            this.splittedCerts = responses.Value.split(".");
                            let certi = {
                                date: this.splittedCerts[0],
                                customerid: this.splittedCerts[1],
                                merchantid: this.splittedCerts[2],
                                price: this.splittedCerts[3] + "." + this.splittedCerts[4],
                                token: entry
                            };
                            if (certi.merchantid === this.items.merchantid) {
                                this.discountBox.push({
                                    type: 'checkbox',
                                    label: certi.price + ' from Date: ' + certi.date,
                                    value: certi.price + "_" + entry,
                                    checked: true
                                });
                                this.certsonpage.push(certi);
                            }
                            //this.token = responses.Token;
                        }
                    });
                }
            }
            if (this.certsonpage.length > 0) {
                this.showCheckbox();
            }
        });
    }
    showCheckbox() {
        return __awaiter(this, void 0, void 0, function* () {
            let alert = this.alertCtrl.create();
            alert.setTitle('Do you want to use the discount of your certificate?');
            for (let entry of this.discountBox) {
                alert.addInput(entry);
            }
            alert.addButton('no');
            alert.addButton({
                text: 'add discount',
                handler: data => {
                    console.log('Checkbox data:', data);
                    this.testCheckboxOpen = false;
                    let dataList = [];
                    for (let entry of data) {
                        let databox = entry + "";
                        let splitted = databox.split("_");
                        dataList.push(splitted[0]);
                        this.chosenToken.push(splitted[1]);
                    }
                    this.certificateOption = dataList;
                    this.changePrice();
                }
            });
            yield alert.present();
        });
    }
    selected(select) {
        console.log(select);
        this.selectedCard = select;
    }
    addPoint(num) {
        console.log(num);
        let temp = num.toString();
        if (temp.length === 1) {
            console.log("inside Trap_______");
            temp = "0.0" + temp;
        }
        else if (temp.length === 2) {
            console.log("inside Trap_______");
            temp = "0." + temp;
        }
        else {
            let lengthnum = temp.length;
            temp = temp.substring(0, lengthnum - 2) + "." + temp.substring(lengthnum - 2, lengthnum);
        }
        return temp;
    }
    filter(value) {
        let secret = "*******";
        let endcard = value.length;
        return secret + value.substring(endcard - 3, endcard);
    }
    changePrice() {
        console.log("Test");
        let discount = 0;
        if (this.certificateOption != null || this.certificateOption != undefined) {
            for (let entry of this.certificateOption) {
                console.log(entry);
                console.log("-------");
                console.log(entry.replace(/\s+/g, ''));
                let value;
                value = entry;
                this.values = [];
                this.values.push(entry.replace(/\s+/g, ''));
                discount += Number(entry.replace(/\s+/g, ''));
            }
        }
        console.log(discount);
        console.log(this.items.price);
        if (Number(this.items.price) < discount) {
            console.log("inside trap");
            this.guthaben = (discount - Number(this.items.price));
            console.log(this.guthaben);
            this.price = "0.00";
        }
        else {
            this.guthaben = 0;
            console.log(this.guthaben);
            let tempPrice = (Number(this.items.price) - discount);
            this.price = tempPrice.toFixed(2);
        }
        console.log(discount);
    }
    calcFee(ammount) {
        console.log("this is CalcFee: " + ammount);
        let value = ammount * 0.03;
        console.log(value);
        return value.toFixed(2);
    }
    createToken(customerid, merchantid, price) {
        return __awaiter(this, void 0, void 0, function* () {
            let value = price;
            let heute = new Date();
            console.log(heute);
            let tokendata = { customerid: "3004", merchantid: "19", value: "3", date: "04.10.2017" };
            //HERE Comes the Percentage for certificate
            let tempValue = Number(value) * 0.06;
            if (this.guthaben != 0) {
                tempValue = Number(this.guthaben);
            }
            let priceForCerts = tempValue.toFixed(2);
            if (priceForCerts != "0.00") {
                console.log(tokendata);
                yield this.geolocation.getCurrentPosition().then((location) => {
                    this.lat = location.coords.latitude;
                    this.lng = location.coords.longitude;
                }).catch((err) => {
                    alert(err);
                });
                let token = {
                    "APIKey": "bDjnJKu7ip7097Vfq46I",
                    "TokenExID": "4323829200543105",
                    "Data": heute.getFullYear() + "-" +
                        heute.getMonth() + "-" +
                        heute.getDay() + "." +
                        this.customerid + "." +
                        merchantid + "." +
                        //'44'+"."+
                        priceForCerts + "." +
                        this.lat + "." +
                        this.lng,
                    "TokenScheme": 4
                };
                this.certService.getCertis().then((certificate) => {
                    if (certificate != null && certificate != undefined) {
                        this.certificates = certificate;
                        console.log(this.certificates);
                    }
                    else {
                        this.certificates = [];
                    }
                });
                yield this.autService.tokenize(token, "Tokenize").then((response) => {
                    let responses;
                    console.log(response);
                    responses = response;
                    if (responses.Success === false) {
                        alert("error");
                    }
                    else {
                        //alert(responses.Token);
                        this.token = responses.Token;
                    }
                });
                let databasecreds = {
                    username: "freedom-pos",
                    password: "150498AV",
                    reference: "99",
                    customerid: this.customerid,
                    token: this.token
                };
                console.log(databasecreds);
                let datas = yield this.autService.serviceTransaction(databasecreds, "?addCerti=" + "99");
                if (datas.addCerti === "success") {
                    console.log("successfully saved in Database");
                }
                else {
                    alert("error");
                }
                console.log("test" + datas);
            }
        });
    }
    makeid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }
    buyAction() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(this.certificateOption);
            const loading = this.loadingCtrl.create({
                spinner: 'hide',
                content: `Please Wait..
      
      <div class="custom-spinner-container">
        <div class="custom-spinner-box"></div>
      </div>`
            });
            console.log(this.price);
            if ((this.selectedCard === null && this.guthaben === 0 && this.price != "0.00") ||
                (this.guthaben === 0 && this.selectedCard === undefined && this.price != "0.00")) {
                let noPayment = this.alertCtrl.create({
                    title: 'Warning',
                    subTitle: 'Please choose your paymethod',
                    buttons: ['OK']
                });
                noPayment.present();
            }
            else {
                let random = this.customerid + this.items.merchantid + this.makeid();
                console.log(random);
                let databasecreds = {
                    username: "freedom-pos",
                    password: "150498AV",
                    reference: this.ref,
                    id: this.data.id,
                    customerid: this.customerid,
                    transaction: random
                };
                let type = "check_vaucher_discount.php?customer_id=" + this.customerid +
                    "&merchant_id=" + this.items.merchantid +
                    "&deal_id=" + random;
                //@TODO
                //let discountFromAPI:any = this.autService.serviceFreedom("",type);
                //console.log(discountFromAPI);
                let discount = 0;
                if (this.certificateOption != null || this.certificateOption != undefined) {
                    for (let entry of this.certificateOption) {
                        console.log(entry);
                        let value;
                        value = entry;
                        this.values = [];
                        this.values.push(value.replace(/\s+/g, ''));
                        discount += Number(value.replace(/\s+/g, ''));
                    }
                    console.log(discount);
                }
                //let newPrice = Number(this.items.price) - discount;
                let newPrice = this.price;
                //this.items.price=newPrice.toString();
                let messageForCustomer = 'By clicking Agree, you hereby authorize this Merchant to add 3% to total price to purchase Certificates totaling double that amount. Total: '
                    + newPrice.toString().replace(/\s+/g, '') + "$, fees" + this.feeForMerchant + '$, discount(' + discount.toFixed(2) + '$) ';
                if (this.guthaben != 0) {
                    messageForCustomer += " - new value for certificate: " + this.guthaben.toFixed(2) + "$";
                }
                let confirm = this.alertCtrl.create({
                    title: 'Do you want to buy this item?',
                    message: messageForCustomer,
                    buttons: [
                        {
                            text: 'Disagree',
                            handler: () => {
                                console.log('Disagreed clicked');
                            }
                        },
                        {
                            text: 'Agree',
                            handler: () => __awaiter(this, void 0, void 0, function* () {
                                loading.present();
                                console.log("Agree clicked");
                                let result;
                                result = yield this.autService.serviceTransaction(databasecreds, "?update=" + this.ref);
                                console.log(result);
                                let type = "app_payment.php?customer_id=" + this.customerid +
                                    "&merchant_id=" + this.items.merchantid +
                                    "&deal_id=" + random +
                                    "&deal_amount=" + this.items.price +
                                    "&qr_code=" + this.items.reference +
                                    "&vaucher_discount_id=1";
                                //@TODO
                                //let buyApp:any= this.autService.serviceFreedom("",type);
                                //console.log(buyApp);
                                if (result.buy = 'success') {
                                    //let buyApp:any= await this.autService.serviceFreedom("",type);
                                    console.log("new Price: " + newPrice);
                                    yield this.createToken(this.items.customerid, this.items.merchantid, newPrice);
                                    console.log(this.values);
                                    for (let value of this.chosenToken) {
                                        yield this.deleteToken(value);
                                    }
                                    let confirmbuy = this.alertCtrl.create({
                                        title: 'Success',
                                        subTitle: 'You bought this new item',
                                        buttons: ['OK']
                                    });
                                    loading.dismiss();
                                    confirmbuy.present();
                                }
                                else {
                                    let somwrong = this.alertCtrl.create({
                                        title: 'ERROR',
                                        subTitle: 'Something went wrong',
                                        buttons: ['OK']
                                    });
                                    somwrong.present();
                                }
                                this.navCtrl.popToRoot();
                            })
                        }
                    ]
                });
                confirm.present();
            }
        });
    }
    deleteToken(value) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(value);
            let token = {
                "APIKey": "bDjnJKu7ip7097Vfq46I",
                "TokenExID": "4323829200543105",
                "Token": value
            };
            yield this.autService.tokenize(token, "DeleteToken").then((response) => {
                let responses;
                console.log("test!" + response);
                responses = response;
                if (responses.Success === false) {
                    alert("error");
                }
                console.log(responses.Success);
            });
            let databasecreds = {
                username: "freedom-pos",
                password: "150498AV",
                reference: "",
                customerid: this.customerid,
                token: value
            };
            console.log(databasecreds);
            let deletion = yield this.autService.serviceTransaction(databasecreds, "?deleteCerti=" + "99");
            console.log(deletion);
        });
    }
    cancelAction() {
        return __awaiter(this, void 0, void 0, function* () {
            let databasecreds = {
                username: "freedom-pos",
                password: "150498AV",
                reference: this.ref,
                id: this.data.id,
                customerid: 5000
            };
            let confirm = this.alertCtrl.create({
                title: 'Do you want to cancel this deal?',
                message: 'Are you sure?',
                buttons: [
                    {
                        text: 'Disagree',
                        handler: () => {
                            console.log('Disagreed clicked');
                        }
                    },
                    {
                        text: 'Agree',
                        handler: () => __awaiter(this, void 0, void 0, function* () {
                            console.log("Agree clicked");
                            let result;
                            result = yield this.autService.serviceTransaction(databasecreds, "?cancel=" + this.ref);
                            console.log(result);
                            if (result.cancel = 'success') {
                                let confirmbuy = this.alertCtrl.create({
                                    title: 'Success',
                                    subTitle: 'You canceled this deal',
                                    buttons: ['OK']
                                });
                                confirmbuy.present();
                            }
                            this.navCtrl.popToRoot();
                        })
                    }
                ]
            });
            confirm.present();
        });
    }
};
CheckoutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-checkout',template:/*ion-inline-start:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/checkout/checkout.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>checkout\n      <ion-icon name="cart"></ion-icon>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-note item-left> available cards </ion-note>\n\n  <ion-list radio-group [(ngModel)]="selection">\n    <ion-item *ngFor="let option of cardsonpage">\n      <ion-thumbnail item-start>\n        <img [src]="option.icon" style="height: 30%;">\n      </ion-thumbnail>\n      <ion-label>{{option.cardname}}, {{filter(option.cardnumber)}}</ion-label>\n      <ion-radio [value]="option" (click)="selected(option.cardnumber)"></ion-radio>\n    </ion-item>\n  </ion-list>\n\n\n  <div class="spacer" style="width:300px;height:25px;" id="checkout-spacer4"></div>\n  <ion-list>\n    <h2>Merchant: {{cert.merchantname}}</h2>\n    <p>{{cert.merchantmail}}</p>\n    <p>Merchant-ID: {{items.merchantid}}</p>\n    <ion-note item-left> 3% Fee: {{feeForMerchant}}$</ion-note>\n\n    <ion-list>\n      <ion-item color="none">\n        <ion-thumbnail item-left>\n          <ion-avatar item-start>\n            <img [src]="cert.merchantlogo">\n          </ion-avatar>\n        </ion-thumbnail>\n        <h2>\n          Item {{items.reference }}\n        </h2>\n        <span>Price: {{price}}$</span>\n      </ion-item>\n    </ion-list>\n  </ion-list>\n  <div class="spacer" style="width:300px;height:47.9861px;" id="checkout-spacer5"></div>\n  <button id="checkout-button4" ion-button color="positive" block style="border-radius:-1px -1px -1px -1px;" (click)="buyAction()">\n    Buy\n  </button>\n  <button id="checkout-button5" ion-button color="danger" block style="border-radius:1px 1px 1px 1px;" (click)="cancelAction()">\n    Cancel\n  </button>\n\n</ion-content>'/*ion-inline-end:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/checkout/checkout.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_Storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_3__services_card_service__["a" /* CardService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__services_certificate_service__["a" /* CertificateService */]])
], CheckoutPage);

//# sourceMappingURL=checkout.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddpaymethodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_card_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_Storage__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





let AddpaymethodPage = class AddpaymethodPage {
    constructor(autService, storage, navCtrl, navParams, cardService) {
        this.autService = autService;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cardService = cardService;
        this.cards = [];
        this.tokens = [];
        this.months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
        this.years = ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028",
            "2029", "2030", "2031", "2032", "2033", "2034", "2035", "2036", "2037", "2038", "2039", "2040"];
        this.cards = [];
        this.storage.get('card5').then((data) => {
            if (data === null) {
                this.cards = [];
            }
            else {
                this.cards = data;
            }
        });
        console.log(this.cards);
        let cardnumber = navParams.get('card');
        switch (cardnumber) {
            case 1: {
                this.iconsrc = "assets/img/americanexpress.png";
                this.cardname = "American Express";
                break;
            }
            case 2: {
                this.iconsrc = "assets/img/discover.png";
                this.cardname = "Discover";
                //statements; 
                break;
            }
            case 3: {
                this.iconsrc = "assets/img/mastercard.png";
                this.cardname = "Mastercard";
                //statements; 
                break;
            }
            case 4: {
                this.iconsrc = "assets/img/visa.png";
                this.cardname = "Visa";
                //statements; 
                break;
            }
            default: {
                //statements; 
                break;
            }
        }
    }
    addCard(card) {
        return __awaiter(this, void 0, void 0, function* () {
            card.icon = this.iconsrc;
            card.cardname = this.cardname;
            yield this.cardService.getCards().then((cards) => {
                this.tokens = cards;
            });
            let token = {
                "APIKey": "bDjnJKu7ip7097Vfq46I",
                "TokenExID": "4323829200543105",
                "Data": card.cardname + "-" +
                    card.cardowner + "-" +
                    card.cardnumber + "-" +
                    card.month.replace(/\s+/g, '') + "-" +
                    card.year.replace(/\s+/g, '') + "-" +
                    card.checkdigit + "-" +
                    card.icon,
                "TokenScheme": 4
            };
            yield this.autService.tokenize(token, "Tokenize").then((response) => {
                let responses;
                console.log(response);
                responses = response;
                if (responses.Success === false) {
                    alert("error");
                }
                else {
                    //alert(responses.Token);
                    this.token = responses.Token;
                }
            });
            let cardo = { cardname: card.cardname, cardowner: card.cardowner, cardnumber: card.cardnumber, month: card.month, year: card.year, checkdigit: card.checkdigit, icon: card.icon };
            yield this.storage.get('user-id').then((data) => {
                if (data != null && data != undefined) {
                    this.customerid = data;
                }
            });
            let databasecreds = { username: "freedom-pos",
                password: "150498AV",
                reference: "",
                customerid: this.customerid,
                token: this.token };
            console.log(databasecreds);
            let certis = yield this.autService.serviceTransaction(databasecreds, "?addCard=" + "99");
            console.log(certis.result);
            if (certis.result === "success") {
                this.navCtrl.getPrevious();
                this.navCtrl.popToRoot();
            }
            else {
                alert("Error");
            }
        });
    }
};
AddpaymethodPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-addpaymethod',template:/*ion-inline-start:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/addpaymethod/addpaymethod.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add Credit Card</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form (ngSubmit)="addCard(f.value)" #f="ngForm">\n    <h1>\n      {{cardname}}\n    </h1>\n    <img [src]="iconsrc" style="width:60%; display: block; margin: 0 auto;">\n    <ion-item >\n      <ion-label>\n        cardowner\n      </ion-label>\n      <ion-input type="text" placeholder="" name="cardowner" ngModel required></ion-input>\n    </ion-item>\n    <ion-item >\n      <ion-label>\n        cardnumber\n      </ion-label>\n      <ion-input type="number" placeholder="" name="cardnumber" ngModel required></ion-input>\n    </ion-item>\n    <div class="spacer" style="width:300px;height:33px;" ></div>\n    <div class="show-list-numbers-and-dots">\n      <p>\n        Valide from:\n      </p>\n    </div>\n    <ion-item>\n      <ion-label>\n        month\n      </ion-label>\n      <ion-select name="month" ngModel required>\n        <ion-option *ngFor="let month of months">\n          {{month}}\n        </ion-option>\n\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        year\n      </ion-label>\n      <ion-select name="year" ngModel required>\n        <ion-option *ngFor="let year of years">\n          {{year}}\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <div class="spacer" style="width:300px;height:33px;"></div>\n    <ion-item>\n        <ion-label>\n          check digit\n        </ion-label>\n        <ion-input type="password number" placeholder="" name="checkdigit" ngModel required></ion-input>\n      </ion-item>\n      <button ion-button color="positive" block type="submit" [disabled]="!f.valid">\n          Add Card\n        </button>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/addpaymethod/addpaymethod.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_Storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_card_service__["a" /* CardService */]])
], AddpaymethodPage);

//# sourceMappingURL=addpaymethod.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CertificateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_Storage__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


let CertificateService = class CertificateService {
    constructor(storage) {
        this.storage = storage;
        this.certificate = [];
    }
    addCert(certificate) {
        return __awaiter(this, void 0, void 0, function* () {
            alert("Im Cardservice");
            console.log("inside Service: " + certificate);
            this.certificate.push(certificate);
            console.log(this.certificate);
            alert("after save");
            return true;
        });
    }
    getCertis() {
        return this.storage.get('certis1').then((certificate) => {
            console.log(certificate);
            this.certificate = certificate;
            console.log(this.certificate);
            return this.certificate;
        });
        //return this.cards;
    }
};
CertificateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_Storage__["b" /* Storage */]])
], CertificateService);

//# sourceMappingURL=certificate.service.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addpaymethod/addpaymethod.module": [
		284,
		15
	],
	"../pages/cards/cards.module": [
		285,
		14
	],
	"../pages/certificate/certificate.module": [
		286,
		13
	],
	"../pages/checkout/checkout.module": [
		287,
		12
	],
	"../pages/editcard/editcard.module": [
		289,
		11
	],
	"../pages/entercode/entercode.module": [
		288,
		10
	],
	"../pages/home/home.module": [
		290,
		9
	],
	"../pages/login/login.module": [
		291,
		8
	],
	"../pages/menu/menu.module": [
		292,
		7
	],
	"../pages/paymethods/paymethods.module": [
		293,
		6
	],
	"../pages/signup/signup.module": [
		294,
		5
	],
	"../pages/special/special.module": [
		295,
		4
	],
	"../pages/tabpage1/tabpage1.module": [
		296,
		3
	],
	"../pages/tabpage2/tabpage2.module": [
		297,
		2
	],
	"../pages/tabs/tabs.module": [
		298,
		1
	],
	"../pages/transactions/transactions.module": [
		299,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addpaymethod_addpaymethod__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let CardsPage = class CardsPage {
    constructor(nav, navParams) {
        this.nav = nav;
        this.navParams = navParams;
    }
    cardSelected(cardnumber) {
        console.log(cardnumber);
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__addpaymethod_addpaymethod__["a" /* AddpaymethodPage */], { card: cardnumber });
    }
};
CardsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cards',template:/*ion-inline-start:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/cards/cards.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>cards</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list unset>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/img/americanexpress.png" style="height: 30%;">\n      </ion-thumbnail>\n      \n      <button ion-item (click)="cardSelected(1)">American Express\n      </button>\n    </ion-item>\n\n    <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/discover.png" style="height: 30%;">\n        </ion-thumbnail>\n        \n        <button ion-item (click)="cardSelected(2)">Discover\n        </button>\n      </ion-item>\n\n\n      <ion-item>\n          <ion-thumbnail item-start>\n            <img src="assets/img/mastercard.png" style="height: 30%;">\n          </ion-thumbnail>\n          \n          <button ion-item (click)="cardSelected(3)">Mastercard\n          </button>\n        </ion-item>\n\n\n        <ion-item>\n            <ion-thumbnail item-start>\n              <img src="assets/img/visa.png" style="height: 30%;">\n            </ion-thumbnail>\n            \n            <button ion-item (click)="cardSelected(4)">Visa\n            </button>\n          </ion-item>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/cards/cards.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], CardsPage);

//# sourceMappingURL=cards.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CertificatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



let CertificatePage = class CertificatePage {
    constructor(autService, navCtrl, navParams) {
        this.autService = autService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.token = "";
        this.splitted = [];
        this.lat = 0;
        this.lng = 0;
        this.logo = "assets/img/shop_merchant.png";
        this.cert = {
            merchantlogo: this.logo
        };
        this.token = navParams.get("token");
        this.showDetails();
    }
    showDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            let token = {
                "APIKey": "bDjnJKu7ip7097Vfq46I",
                "TokenExID": "4323829200543105",
                "Token": this.token
            };
            yield this.autService.tokenize(token, "Detokenize").then((response) => {
                let responses;
                console.log(response);
                responses = response;
                if (responses.Success === false) {
                    alert("error");
                }
                else {
                    //alert(responses.Value);
                    this.splitted = responses.Value.split(".");
                    this.date = this.splitted[0];
                    this.customerid = this.splitted[1];
                    this.merchantid = this.splitted[2];
                    this.price = this.splitted[3] + "." + this.splitted[4];
                    let temp1 = this.splitted[5] + "." + this.splitted[6];
                    let temp2 = this.splitted[7] + "." + this.splitted[8];
                    this.lat = Number(temp1);
                    this.lng = Number(temp2);
                    console.log(this.splitted);
                    //this.token = responses.Token;
                }
            });
            yield this.merchantData();
            this.initMap();
        });
    }
    merchantData() {
        return __awaiter(this, void 0, void 0, function* () {
            let merchantdata = yield this.getMerchantData(this.merchantid);
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
            let cert = {
                merchantid: this.merchantid,
                merchantname: merchantname,
                merchantlogo: merchantlogo,
                merchantmail: merchantmail,
                merchantaddress: merchantaddress
            };
            console.log(this.splitted);
            this.cert = cert;
        });
    }
    initMap() {
        return __awaiter(this, void 0, void 0, function* () {
            let latLng = new google.maps.LatLng(this.lat, this.lng);
            let googleObj = yield this.autService.googleAPI(this.cert.merchantaddress);
            if (googleObj != undefined) {
                console.log(googleObj.results[0].geometry.location);
                let positionByGoogle = googleObj.results[0].geometry.location;
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
        });
    }
    addMarker(position, map) {
        return new google.maps.Marker({
            position,
            map
        });
    }
    getMerchantData(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let databasecreds = {
                username: "merchantbackuser",
                password: "150498AV",
                reference: "",
                customerid: this.customerid,
                token: "",
                id: id
            };
            console.log(databasecreds);
            let merch = yield this.autService.serviceTransaction(databasecreds, "?getMerchant=" + "99");
            console.log(merch);
            return merch;
        });
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map'),
    __metadata("design:type", Object)
], CertificatePage.prototype, "mapElement", void 0);
CertificatePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-certificate',template:/*ion-inline-start:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/certificate/certificate.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>certificate</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    \n      <ion-item>\n        <ion-avatar item-start>\n          <img [src]="cert.merchantlogo">\n        </ion-avatar>\n        <h2>Merchant: {{cert.merchantname}}</h2>\n        <p>{{cert.merchantmail}}</p>\n      </ion-item>\n    \n      <ion-card-content>\n        <ion-list>\n          <ion-item >\n            Date: {{date}}\n          </ion-item>\n          <ion-item >\n              Your ID: {{customerid}}\n            </ion-item>\n            <ion-item >\n                Merchant ID: {{merchantid}}\n              </ion-item>\n              <ion-item >\n                 Price: {{price}}$\n                </ion-item>\n        </ion-list>\n      </ion-card-content>\n    \n    \n    </ion-card>\n  <div id="map" #map></div>\n\n\n  \n  \n</ion-content>\n'/*ion-inline-end:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/certificate/certificate.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], CertificatePage);

//# sourceMappingURL=certificate.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntercodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkout_checkout__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_Storage__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






let EntercodePage = class EntercodePage {
    constructor(autService, storage, alertCtrl, nav, navParams) {
        this.autService = autService;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.nav = nav;
        this.navParams = navParams;
    }
    doEnter(value) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(value);
            let ref = value.code;
            let databasecreds = { username: "freedom-pos",
                password: "150498AV",
                reference: ref,
                customerid: 5000 };
            console.log(databasecreds);
            let datas;
            datas = yield this.autService.serviceTransaction(databasecreds, "?getid=" + ref);
            console.log("test" + datas.id);
            if (datas.hit == 'failed') {
                let alert = this.alertCtrl.create({
                    title: 'Error',
                    subTitle: 'This Code is not valid',
                    buttons: ['OK']
                });
                alert.present();
                this.nav.popToRoot();
            }
            else {
                this.nav.push(__WEBPACK_IMPORTED_MODULE_2__checkout_checkout__["a" /* CheckoutPage */], { ref: ref, data: datas });
            }
        });
    }
};
EntercodePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-entercode',template:/*ion-inline-start:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/entercode/entercode.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Transactioncode</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <form (ngSubmit)="doEnter(f.value)" #f="ngForm">\n      <div style="margin-left:-10px;width:calc(100% + 20px);">\n        <img src="assets/img/screenplay.png" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n      </div>\n      <ion-label>\n          Enter Code here\n        </ion-label>\n      <ion-list >\n        <ion-item class="text">\n          <ion-label>\n            Code\n          </ion-label>\n          <ion-input type="text" placeholder="" name="code" ngModel></ion-input>\n        </ion-item>\n      </ion-list>\n      <div class="spacer" style="height:40px;" ></div>\n      <button  ion-button color="assertive" block>\n        ENTER\n      </button>\n  \n    </form>\n</ion-content>\n'/*ion-inline-end:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/entercode/entercode.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_Storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], EntercodePage);

//# sourceMappingURL=entercode.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditcardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_Storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_card_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






let EditcardPage = class EditcardPage {
    constructor(autService, cardService, storage, alertCtrl, navCtrl, navParams) {
        this.autService = autService;
        this.cardService = cardService;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tokens = [];
        console.log(navParams.get("card"));
        this.card = navParams.get("card");
    }
    deleteCard() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.cardService.getCards().then((cards) => {
                this.tokens = cards;
            });
            console.log("in delete Funktion");
            let confirm = this.alertCtrl.create({
                title: 'Do you want to delete this card',
                message: 'Are you sure to delete this card?',
                buttons: [
                    {
                        text: 'Disagree',
                        handler: () => {
                            console.log('Disagreed clicked');
                        }
                    },
                    {
                        text: 'Agree',
                        handler: () => __awaiter(this, void 0, void 0, function* () {
                            console.log("Agree clicked");
                            //DO SOMETHING
                            yield this.deleteFunct(this.card.token);
                            this.navCtrl.popToRoot();
                        })
                    }
                ]
            });
            confirm.present();
        });
    }
    deleteFunct(tokens) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(tokens);
            let token = {
                "APIKey": "bDjnJKu7ip7097Vfq46I",
                "TokenExID": "4323829200543105",
                "Token": tokens
            };
            yield this.autService.tokenize(token, "DeleteToken").then((response) => {
                let responses;
                console.log("test!" + response);
                responses = response;
                if (responses.Success === false) {
                    alert("error");
                }
                else {
                    console.log(responses.Success);
                }
            });
            yield this.deleteCardFromDB(tokens);
        });
    }
    deleteCardFromDB(tokens) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.storage.get('user-id').then((data) => {
                if (data != null && data != undefined) {
                    this.customerid = data;
                }
            });
            let databasecreds = { username: "freedom-pos",
                password: "150498AV",
                reference: "",
                customerid: this.customerid,
                token: tokens };
            console.log(databasecreds);
            let certis = yield this.autService.serviceTransaction(databasecreds, "?deleteCard=" + "99");
            console.log(certis.results);
            this.tokens = certis.results;
        });
    }
};
EditcardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-editcard',template:/*ion-inline-start:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/editcard/editcard.html"*/'<!--\n  Generated template for the EditcardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>editcard</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n      <h1>\n          {{card.cardname}}\n        </h1>\n        <img [src]="card.icon" style="width:60%; display: block; margin: 0 auto;">\n        <ion-item >\n          <ion-label>\n            cardowner: {{card.cardowner}}\n          </ion-label>\n        </ion-item>\n        <ion-item >\n          <ion-label>\n            cardnumber: {{card.cardnumber}}\n          </ion-label>\n        </ion-item>\n        <div class="spacer" style="width:300px;height:33px;" ></div>\n        <div class="show-list-numbers-and-dots">\n          <p>\n            Valide from:\n          </p>\n        </div>\n        <ion-item>\n          <ion-label>\n            month:  {{card.month}}\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            year:  {{card.year}}\n          </ion-label>\n        </ion-item>\n        <div class="spacer" style="width:300px;height:33px;"></div>\n  </ion-list>\n  <button ion-button color="danger" block (click)="deleteCard()">\n      \n      <ion-label>\n          <ion-icon name="trash" ></ion-icon>\n        Delete this Card\n      </ion-label>\n    </button>\n</ion-content>\n'/*ion-inline-end:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/editcard/editcard.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__services_card_service__["a" /* CardService */], __WEBPACK_IMPORTED_MODULE_2__ionic_Storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], EditcardPage);

//# sourceMappingURL=editcard.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class SumbitService {
    addSubmit(data) {
        console.log(data.firstname);
        console.log(data.lastname);
        console.log(data.companyname);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SumbitService;

//# sourceMappingURL=submit.services.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(229);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_submit_services__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_barcode_scanner__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_auth_service_auth_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_base64__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_addpaymethod_addpaymethod__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_cards_cards__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_certificate_certificate__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_entercode_entercode__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_editcard_editcard__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_Storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_checkout_checkout__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_card_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_certificate_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_android_permissions__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_nfc__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_sqlite__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pipes_cardnumber_cardnumber__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_geolocation__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_fingerprint_aio__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























//AIzaSyBSvLiaLr6tX6VIoJt-wcD4EceovawHf8Q
let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_11__pages_addpaymethod_addpaymethod__["a" /* AddpaymethodPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_checkout_checkout__["a" /* CheckoutPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_cards_cards__["a" /* CardsPage */],
            __WEBPACK_IMPORTED_MODULE_23__pipes_cardnumber_cardnumber__["a" /* CardnumberPipe */],
            __WEBPACK_IMPORTED_MODULE_13__pages_certificate_certificate__["a" /* CertificatePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_entercode_entercode__["a" /* EntercodePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_editcard_editcard__["a" /* EditcardPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/addpaymethod/addpaymethod.module#AddpaymethodPageModule', name: 'AddpaymethodPage', segment: 'addpaymethod', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cards/cards.module#CardsPageModule', name: 'CardsPage', segment: 'cards', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/certificate/certificate.module#CertificatePageModule', name: 'CertificatePage', segment: 'certificate', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/checkout/checkout.module#CheckoutPageModule', name: 'CheckoutPage', segment: 'checkout', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/entercode/entercode.module#EntercodePageModule', name: 'EntercodePage', segment: 'entercode', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/editcard/editcard.module#EditcardPageModule', name: 'EditcardPage', segment: 'editcard', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/paymethods/paymethods.module#PaymethodsPageModule', name: 'PaymethodsPage', segment: 'paymethods', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/special/special.module#SpecialPageModule', name: 'SpecialPage', segment: 'special', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabpage1/tabpage1.module#Tabpage1PageModule', name: 'Tabpage1Page', segment: 'tabpage1', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabpage2/tabpage2.module#Tabpage2PageModule', name: 'Tabpage2Page', segment: 'tabpage2', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/transactions/transactions.module#TransactionsPageModule', name: 'TransactionsPage', segment: 'transactions', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_16__ionic_Storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_11__pages_addpaymethod_addpaymethod__["a" /* AddpaymethodPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_checkout_checkout__["a" /* CheckoutPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_cards_cards__["a" /* CardsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_certificate_certificate__["a" /* CertificatePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_entercode_entercode__["a" /* EntercodePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_editcard_editcard__["a" /* EditcardPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_7__services_submit_services__["a" /* SumbitService */],
            __WEBPACK_IMPORTED_MODULE_9__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_base64__["a" /* Base64 */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_nfc__["a" /* NFC */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_nfc__["b" /* Ndef */],
            __WEBPACK_IMPORTED_MODULE_18__services_card_service__["a" /* CardService */],
            __WEBPACK_IMPORTED_MODULE_19__services_certificate_service__["a" /* CertificateService */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_24__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_25__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_android_permissions__["a" /* AndroidPermissions */]
        ],
        schemas: [
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NO_ERRORS_SCHEMA */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let MyApp = class MyApp {
    constructor(platform, statusBar, splashScreen) {
        this.rootPage = 'LoginPage';
        this.lat = 51.678418;
        this.lng = 7.809007;
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
};
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardnumberPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the CardnumberPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
let CardnumberPipe = class CardnumberPipe {
    /**
     * Takes a value and makes it lowercase.
     */
    transform(value, ...args) {
        let secret = "*******";
        let endcard = value.length;
        return secret + value.substring(endcard - 4, endcard);
    }
};
CardnumberPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'cardSecret',
    })
], CardnumberPipe);

//# sourceMappingURL=cardnumber.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_base64__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let forteCustomers = "https://sandbox.forte.net/api/v3/organizations/org_334316/locations/loc_192642/customers/?filter=last_name+eq+Test_last_name";
let forteTransactions = "https://sandbox.forte.net/api/v3/organizations/org_334316/locations/loc_192642/transactions/?filter=bill_to_last_name+eq+Test_last_name";
let apiUrltrans = "https://sandbox.forte.net/api/v3/organization/org_334316/transactions";
let tokenex = "https://test-api.tokenex.com/TokenServices.svc/REST/";
let transactioApi = "http://173.212.238.108/api/freedomchoice.php";
let freedomApi = "http://cashlessexchange-sb.com/marketplace/webservices/";
let googleMapsApi = "https://maps.googleapis.com/maps/api/geocode/json?address=";
let AuthServiceProvider = class AuthServiceProvider {
    constructor(http, base64) {
        this.http = http;
        this.base64 = base64;
        console.log('Hello AuthServiceProvider Provider');
    }
    postData(credentials, type) {
        return new Promise((resolve, reject) => {
            let headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('X-Forte-Auth-Organization-Id', 'org_334316');
            headers.append('Authorization', 'Basic ' + this.base64.encodeFile("4fefaf5f77d944ce10bdd3d88f7a2da9:51302217c0fbb534f81457adb369930c"));
            let options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
            this.http.post(forteCustomers, JSON.stringify(credentials), options).subscribe(res => {
                resolve(res.json());
            }), (err) => {
                reject(err);
            };
        });
    }
    getCustomerInformation(credentials, type) {
        console.log("in service" + type);
        let response;
        return new Promise(resolve => {
            let headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('X-Forte-Auth-Organization-Id', 'org_334316');
            headers.append('Authorization', 'Basic NGZlZmFmNWY3N2Q5NDRjZTEwYmRkM2Q4OGY3YTJkYTk6NTEzMDIyMTdjMGZiYjUzNGY4MTQ1N2FkYjM2OTkzMGM=');
            let options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
            this.http.get(forteCustomers, options)
                .map(res => res.json()).subscribe(data => {
                data;
                console.log(response);
                resolve(data);
            });
        });
    }
    getTransactionInformation(credentials, type) {
        console.log("in service" + type);
        let response;
        return new Promise(resolve => {
            let headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('X-Forte-Auth-Organization-Id', 'org_334316');
            headers.append('Authorization', 'Basic NGZlZmFmNWY3N2Q5NDRjZTEwYmRkM2Q4OGY3YTJkYTk6NTEzMDIyMTdjMGZiYjUzNGY4MTQ1N2FkYjM2OTkzMGM=');
            let options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
            this.http.get(forteTransactions, options)
                .map(res => res.json()).subscribe(data => {
                data;
                console.log(response);
                resolve(data);
            });
        });
    }
    googleAPI(credentials) {
        let type = "&key=AIzaSyBgHHxQ2g5AWCI6jKqPPMHr_ob8RuLSTbI";
        console.log("in service" + credentials);
        let response;
        return new Promise(resolve => {
            this.http.get(googleMapsApi + credentials + type)
                .map(res => res.json()).subscribe(data => {
                data;
                console.log(response);
                resolve(data);
            });
        });
    }
    serviceTransaction(credentials, type) {
        console.log("in service" + type);
        let response;
        return new Promise(resolve => {
            this.http.post(transactioApi + type, JSON.stringify(credentials))
                .map(res => res.json()).subscribe(data => {
                data;
                console.log(response);
                resolve(data);
            });
        });
    }
    tokenize(credentials, type) {
        let response;
        //type = Tokenize
        return new Promise(resolve => {
            this.http.post(tokenex + type, credentials)
                .map(res => res.json()).subscribe(data => {
                response = data;
                console.log(response);
                resolve(data);
            });
        });
    }
    serviceFreedom(credentials, type) {
        let response;
        return new Promise(resolve => {
            this.http.post(freedomApi + type, "")
                .map(res => res.json()).subscribe(data => {
                data;
                console.log(response);
                resolve(data);
            });
        });
    }
    getTransactions(credentials, type) {
        return new Promise((resolve, reject) => {
            let headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('X-Forte-Auth-Organization-Id', 'org_334316');
            headers.append('Authorization', 'Basic ' + this.base64.encodeFile("4fefaf5f77d944ce10bdd3d88f7a2da9:51302217c0fbb534f81457adb369930c"));
            let options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
            this.http.get(apiUrltrans, options).subscribe(res => {
                resolve(res.json());
            }), (err) => {
                reject(err);
            };
        });
    }
};
AuthServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_base64__["a" /* Base64 */]])
], AuthServiceProvider);

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_Storage__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


let CardService = class CardService {
    constructor(storage) {
        this.storage = storage;
        //private cards:{cardname:string,cardowner:string,cardnumber:string,month:string,year:string,checkdigit:string,icon:string}[] =[];
        this.cards = [];
    }
    addCard(card) {
        return __awaiter(this, void 0, void 0, function* () {
            alert("Im Cardservice");
            console.log(card.cardname);
            console.log(card.cardowner);
            console.log(card.cardnumber);
            console.log(card.month);
            console.log(card.year);
            console.log(card.checkdigit);
            console.log(card.icon);
            console.log("inside Service: " + card);
            //this.cards.push(card);
            console.log(this.cards);
            alert("after save");
            return true;
        });
    }
    getCards() {
        return this.storage.get('card7').then((cards) => {
            console.log(cards);
            this.cards = cards;
            console.log(this.cards);
            return this.cards;
        });
        //return this.cards;
    }
};
CardService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_Storage__["b" /* Storage */]])
], CardService);

//# sourceMappingURL=card.service.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.js.map