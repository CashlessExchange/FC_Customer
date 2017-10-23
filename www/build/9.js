webpackJsonp([9],{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(300);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let HomePageModule = class HomePageModule {
};
HomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
        ],
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_Storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_android_permissions__ = __webpack_require__(206);
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






let HomePage = class HomePage {
    constructor(platform, androidPermissions, geolocation, auth, storage, navCtrl, navParams, loadingCtrl) {
        this.platform = platform;
        this.androidPermissions = androidPermissions;
        this.geolocation = geolocation;
        this.auth = auth;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.customerid = "";
        this.locationid = "";
        this.logo = "assets/img/shop_merchant.png";
        this.splitted = [];
        this.certs = [];
        this.transactions = [];
        this.lat = -32.9477132;
        this.lng = -60.630465800000025;
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
            //loading.present();
            yield this.locateMe();
            this.readCustomerData();
            yield this.loadCertis();
            yield this.detokenCertificate();
            yield this.laodTransactions();
            //this.getMerchantData();
            //loading.dismiss();
        });
    }
    readCustomerData() {
        return __awaiter(this, void 0, void 0, function* () {
            //await this.storage.ready().then((data) => {
            //  data.setItem('user-id', "44");
            //});
            yield this.storage.get('user-id').then((data) => {
                if (data != null || data != undefined) {
                    this.customerid = data;
                }
            });
            let type = "customer_data.php?customerid=" + this.customerid;
            console.log(type);
            this.customer = yield this.auth.serviceFreedom("", type);
            console.log(this.customer);
        });
    }
    locateMe() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.platform.is('android')) {
                var permissions = this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION);
                alert(permissions);
                var requestPerm = this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION);
            }
            yield this.geolocation.getCurrentPosition().then((location) => {
                this.lat = location.coords.latitude;
                this.lng = location.coords.longitude;
            }).catch((err) => {
                alert(err);
            });
        });
    }
    detokenCertificate() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(this.certificates);
            if (this.certificates != null || this.certificates != undefined) {
                let token = {
                    "APIKey": "bDjnJKu7ip7097Vfq46I",
                    "TokenExID": "4323829200543105",
                    "Token": this.certificates
                };
                let wsresponse;
                yield this.auth.tokenize(token, "Detokenize").then((response) => {
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
                let price = this.splitted[3] + "." + this.splitted[4];
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
                    token: this.certificates,
                    value: price
                };
                console.log(this.splitted);
                this.certs.push(cert);
            }
            else {
                this.certs = this.certificates;
            }
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
            let merch = yield this.auth.serviceTransaction(databasecreds, "?getMerchant=" + "99");
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
            let databasecreds = {
                username: "freedom-pos",
                password: "150498AV",
                reference: "",
                customerid: this.customerid,
                token: ""
            };
            console.log(databasecreds);
            let certis = yield this.auth.serviceTransaction(databasecreds, "?getCertis=" + "99");
            console.log(certis.results);
            if (certis.results != undefined) {
                let length = certis.results.length;
                this.certificates = certis.results[length - 1];
            }
            else {
                this.certificates = certis.results;
            }
        });
    }
    laodTransactions() {
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
            let trans = yield this.auth.serviceTransaction(databasecreds, "?getTransactions=" + "99");
            console.log(trans.results);
            this.transactions = trans.results;
            if (this.transactions != undefined) {
                let length = this.transactions.length;
                if (length > 5) {
                    console.log(this.transactions.slice(length - 4, length));
                    this.transactions = this.transactions.slice(length - 4, length);
                }
            }
            for (let entry of this.transactions) {
                entry.device_id = yield this.getMerchantData(entry.merchant_id);
            }
        });
    }
    filter(value) {
        if (value === "1") {
            return "yes";
        }
        else {
            return "no";
        }
    }
    addPoint(num) {
        let temp = num.toString();
        if (temp.length === 1) {
            temp = "0.0" + temp;
        }
        else if (temp.length === 2) {
            temp = "0." + temp;
        }
        else {
            let lengthnum = temp.length;
            temp = temp.substring(0, lengthnum - 2) + "." + temp.substring(lengthnum - 2, lengthnum);
        }
        return temp;
    }
};
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/home/home.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Main Page</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div>\n    <img src="assets/img/screenplay.png" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  </div>\n\n  <ion-item color="none">\n\n    <ion-avatar item-left>\n      <img src="assets/img/Hl6uXcJ3RiCg0vQy2nP5_person-flat.png" />\n    </ion-avatar>\n    <h2>\n      {{customer?.data.username}}\n    </h2>\n    <h3>\n      Your Customer ID: {{customerid}}\n    </h3>\n    <h3>\n      Your Email: {{customer?.data.email}}\n    </h3>\n  </ion-item>\n  <ion-item color="none">\n    Last Certificate:\n  </ion-item>\n  <ion-list>\n    <span *ngIf="certs === undefined"> There are no Certificates available</span>\n\n    <ion-spinner *ngIf="certs != undefined && certs.length == 0"> </ion-spinner>\n\n    <ion-card color="none" *ngFor="let option of certs">\n      <ion-item>\n        <ion-thumbnail item-left>\n          <img [src]="option.merchantlogo" style="height: 20%;">\n        </ion-thumbnail>\n      </ion-item>\n      <h2>\n        Merchant: {{option.merchantname}}\n      </h2>\n      <p>Value: {{option.value}}$</p>\n    </ion-card>\n  </ion-list>\n\n  <ion-item color="none" id="home-list-item20">\n    Latest Transactions:\n  </ion-item>\n  <ion-list>\n    <span *ngIf="transactions === undefined"> There are no transactions available</span>\n\n    <ion-spinner *ngIf="transactions != undefined && transactions.length == 0"> </ion-spinner>\n    <ion-card *ngFor="let option of transactions">\n\n      <ion-item>\n        <div class="show-list-numbers-and-dots">\n          <p style="margin-top:0px;color:#000000;">\n            Merchant Name = {{option.device_id?.name}}\n          </p>\n          <p style="margin-top:0px;color:#000000;">\n            Merchant Address = {{option.device_id?.address}}\n          </p>\n          <p style="margin-top:0px;color:#000000;">\n            Referencenumber = {{option.ref}}\n          </p>\n        </div>\n      </ion-item>\n      <ion-item color="balanced">\n        Value: {{addPoint(option.value)}}$\n      </ion-item>\n    </ion-card>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/home/home.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_android_permissions__["a" /* AndroidPermissions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_android_permissions__["a" /* AndroidPermissions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_Storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_Storage__["b" /* Storage */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _h || Object])
], HomePage);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=9.js.map