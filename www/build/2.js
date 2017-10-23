webpackJsonp([2],{

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabpage2PageModule", function() { return Tabpage2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabpage2__ = __webpack_require__(307);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let Tabpage2PageModule = class Tabpage2PageModule {
};
Tabpage2PageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tabpage2__["a" /* Tabpage2Page */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabpage2__["a" /* Tabpage2Page */]),
        ],
    })
], Tabpage2PageModule);

//# sourceMappingURL=tabpage2.module.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tabpage2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_nfc__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let Tabpage2Page = class Tabpage2Page {
    constructor(nfc, ndef, navCtrl, navParams) {
        this.nfc = nfc;
        this.ndef = ndef;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mimtype = "text/json";
    }
    payNFC() {
        let payLoad = "super secret data";
        this.transdata = { customerid: "Dieter Schanz", cardnumber: "2131231231", location: "Germany",
            item: "", name: "", price: 0 };
        let test = this.ndef.textRecord(JSON.stringify(this.transdata));
        let message = this.ndef.mimeMediaRecord(this.mimtype, test);
        this.nfc.write(message), (err) => {
            console.log("error in sending");
        };
    }
};
Tabpage2Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tabpage2',template:/*ion-inline-start:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/tabpage2/tabpage2.html"*/'\n<ion-header>\n\n  <ion-navbar>\n      <ion-buttons start>\n            <button ion-button menuToggle>\n                    <ion-icon name="menu"></ion-icon>        \n                </button>\n        </ion-buttons>\n    <ion-title>Sell with NFC</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-item id="nfc-1">\n        <ion-label>\n          Itemname\n        </ion-label>\n        <ion-input type="text" placeholder="" [(ngModel)]="transdata.item"></ion-input>\n      </ion-item>\n      <ion-item id="nfc-2">\n          <ion-label>\n            Name of Seller\n          </ion-label>\n          <ion-input type="text" placeholder="" [(ngModel)]="transdata.name"></ion-input>\n        </ion-item>\n        <ion-item id="nfc-3">\n            <ion-label>\n              Price\n            </ion-label>\n            <ion-input type="text" placeholder="" [(ngModel)]="transdata.price"></ion-input>\n          </ion-item>\n\n          <button ion-button color="primary" block (click)="payNFC()">\n              Pay\n            </button>\n</ion-content>\n'/*ion-inline-end:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/tabpage2/tabpage2.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_nfc__["a" /* NFC */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_nfc__["b" /* Ndef */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], Tabpage2Page);

//# sourceMappingURL=tabpage2.js.map

/***/ })

});
//# sourceMappingURL=2.js.map