webpackJsonp([4],{

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialPageModule", function() { return SpecialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__special__ = __webpack_require__(305);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let SpecialPageModule = class SpecialPageModule {
};
SpecialPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__special__["a" /* SpecialPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__special__["a" /* SpecialPage */]),
        ],
    })
], SpecialPageModule);

//# sourceMappingURL=special.module.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_Storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__certificate_certificate__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_certificate_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__ = __webpack_require__(30);
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







let SpecialPage = class SpecialPage {
    constructor(loadingCtrl, autService, certiService, geolocation, storage, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.autService = autService;
        this.certiService = certiService;
        this.geolocation = geolocation;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.splitted = [];
        this.certs = [];
        this.lat = -32.9477132;
        this.lng = -60.630465800000025;
        this.customerid = "";
        this.logo = "assets/img/shop_merchant.png";
    }
    ionViewWillEnter() {
        return __awaiter(this, void 0, void 0, function* () {
            const loading = this.loadingCtrl.create({
                spinner: 'hide',
                content: `Please Wait..
      
      <div class="custom-spinner-container">
        <div class="custom-spinner-box"></div>
      </div>`
            });
            this.certs = [];
            loading.present();
            yield this.loadCertis();
            this.detokenCertificate();
            //this.getMerchantData();
            loading.dismiss();
        });
    }
    showCert(token) {
        console.log(token);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__certificate_certificate__["a" /* CertificatePage */], { token: token });
    }
    detokenCertificate() {
        return __awaiter(this, void 0, void 0, function* () {
            this.certificates;
            if (this.certificates != null || this.certificates != undefined) {
                for (let entry of this.certificates) {
                    let token = {
                        "APIKey": "bDjnJKu7ip7097Vfq46I",
                        "TokenExID": "4323829200543105",
                        "Token": entry
                    };
                    let wsresponse;
                    yield this.autService.tokenize(token, "Detokenize").then((response) => {
                        let responses;
                        console.log("test!" + response);
                        responses = response;
                        if (responses.Success === false) {
                            alert("error");
                        }
                        else {
                            wsresponse = responses;
                        }
                    });
                    //alert(responses.Value);
                    this.splitted = wsresponse.Value.split(".");
                    let date = this.splitted[0];
                    let customerid = this.splitted[1];
                    let merchantid = this.splitted[2];
                    let merchantdata = yield this.getMerchantData(merchantid);
                    let merchantname = merchantdata.name;
                    let merchantlogo = this.logo;
                    console.log(merchantdata.logo.length);
                    if (merchantdata.logo.length != 0) {
                        console.log(merchantlogo);
                        merchantlogo = merchantdata.logo;
                    }
                    console.log(merchantlogo);
                    let cert = {
                        merchantid: merchantid,
                        merchantname: merchantname,
                        merchantlogo: merchantlogo,
                        token: entry
                    };
                    console.log(this.splitted);
                    this.certs.push(cert);
                }
            }
        });
    }
    getMerchantData(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let databasecreds = { username: "merchantbackuser",
                password: "150498AV",
                reference: "",
                customerid: this.customerid,
                token: "",
                id: id };
            console.log(databasecreds);
            let merch = yield this.autService.serviceTransaction(databasecreds, "?getMerchant=" + "99");
            console.log(merch);
            return merch;
        });
    }
    loadCertis() {
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
            let certis = yield this.autService.serviceTransaction(databasecreds, "?getCertis=" + "99");
            console.log(certis.results);
            this.certificates = certis.results;
        });
    }
    locateMe() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.geolocation.getCurrentPosition().then((location) => {
                this.yourlocation = location;
                this.lat = this.yourlocation.coords.latitude;
                this.lng = this.yourlocation.coords.longitude;
            }).catch((err) => {
                alert(err);
            });
        });
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map'),
    __metadata("design:type", Object)
], SpecialPage.prototype, "mapElement", void 0);
SpecialPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-special',template:/*ion-inline-start:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/special/special.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Certificates</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <ion-list>\n    <span *ngIf="certs === undefined"> There are no Certificates available</span>\n\n    <ion-item color="none" *ngFor="let option of certs" (click)="showCert(option.token)" ion-item>\n      <ion-thumbnail item-left>\n        <img [src]="option.merchantlogo" style="height: 30%;">\n      </ion-thumbnail>\n      <h2>\n        Merchant: {{option.merchantname}}\n      </h2>\n      <span>Certificate: {{option.token}}</span>\n    </ion-item>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/special/special.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_5__services_certificate_service__["a" /* CertificateService */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_Storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], SpecialPage);

//# sourceMappingURL=special.js.map

/***/ })

});
//# sourceMappingURL=4.js.map