webpackJsonp([6],{

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymethodsPageModule", function() { return PaymethodsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paymethods__ = __webpack_require__(303);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let PaymethodsPageModule = class PaymethodsPageModule {
};
PaymethodsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__paymethods__["a" /* PaymethodsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__paymethods__["a" /* PaymethodsPage */]),
        ],
    })
], PaymethodsPageModule);

//# sourceMappingURL=paymethods.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymethodsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cards_cards__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_Storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__editcard_editcard__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_card_service__ = __webpack_require__(42);
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







let PaymethodsPage = class PaymethodsPage {
    constructor(loadingCtrl, autService, cardService, storage, navCtrl, navParams, cardsfromservice) {
        this.loadingCtrl = loadingCtrl;
        this.autService = autService;
        this.cardService = cardService;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cardsfromservice = cardsfromservice;
        this.cardsonpage = [];
        this.tokens = [];
        this.cardsonpage = [];
    }
    ionViewWillEnter() {
        return __awaiter(this, void 0, void 0, function* () {
            this.cardsonpage = [];
            const loading = this.loadingCtrl.create({
                spinner: 'hide',
                content: `Please Wait..
      
      <div class="custom-spinner-container">
        <div class="custom-spinner-box"></div>
      </div>`
            });
            //this.cardsonpage = await this.storage.get('card1').then((data)=>{
            //  console.log(data);
            //  return data.cards;
            //});
            //await this.cardService.getCards().then((cards)=>{
            //  this.tokens =  cards;
            //});
            loading.present();
            yield this.loadCards();
            console.log(this.tokens);
            if (this.tokens != null && this.tokens != undefined) {
                for (let entry of this.tokens) {
                    let token = {
                        "APIKey": "bDjnJKu7ip7097Vfq46I",
                        "TokenExID": "4323829200543105",
                        "Token": entry
                    };
                    yield this.autService.tokenize(token, "Detokenize").then((response) => {
                        let responses;
                        console.log("test!" + response);
                        responses = response;
                        if (responses.Success === false) {
                            alert("error");
                        }
                        else {
                            //alert(responses.Value);
                            this.splitted = responses.Value.split("-");
                            console.log(this.splitted);
                            this.card = {
                                cardname: this.splitted[0],
                                cardowner: this.splitted[1],
                                cardnumber: this.splitted[2],
                                month: this.splitted[3],
                                year: this.splitted[4],
                                checkdigit: this.splitted[5],
                                icon: this.splitted[6],
                                token: entry
                            };
                            console.log(this.splitted);
                            this.cardsonpage.push(this.card);
                            //this.token = responses.Token;
                        }
                    });
                }
            }
            setTimeout(() => {
                loading.dismiss();
            }, 0);
        });
    }
    loadCards() {
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
                token: "" };
            console.log(databasecreds);
            let certis = yield this.autService.serviceTransaction(databasecreds, "?getCards=" + "99");
            console.log(certis.results);
            this.tokens = certis.results;
        });
    }
    editCard(value) {
        console.log(value);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__editcard_editcard__["a" /* EditcardPage */], { card: value });
    }
    filter(value) {
        let secret = "*******";
        let endcard = value.length;
        return secret + value.substring(endcard - 3, endcard);
    }
    addCard() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cards_cards__["a" /* CardsPage */]);
    }
};
PaymethodsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-paymethods',template:/*ion-inline-start:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/paymethods/paymethods.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons end>\n        <button ion-button icon-only color="royal" (click)="addCard()">\n            <ion-icon name="add"></ion-icon>\n          </button>\n    </ion-buttons>\n      <ion-buttons start>\n          <button ion-button menuToggle>\n              <ion-icon name="menu"></ion-icon>        \n          </button>\n        </ion-buttons>\n    <ion-title>paymethods</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <H2>Your Creditcards</H2>\n    <p>Your Data will be save with us!</p>\n  <div class="spacer" style="width:300px;height:15px;" id="paymethods-spacer6"></div>\n<ion-list>\n\n  <ion-item *ngFor="let option of cardsonpage" (click)="editCard(option)" ion-item>\n    <ion-thumbnail item-start>\n      <img [src]="option.icon" style="height: 30%;">\n    </ion-thumbnail>\n    <ion-label>{{option.cardowner}}, {{filter(option.cardnumber)}}</ion-label>\n    \n  </ion-item>\n  \n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/paymethods/paymethods.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__services_card_service__["a" /* CardService */], __WEBPACK_IMPORTED_MODULE_3__ionic_Storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__services_card_service__["a" /* CardService */]])
], PaymethodsPage);

//# sourceMappingURL=paymethods.js.map

/***/ })

});
//# sourceMappingURL=6.js.map