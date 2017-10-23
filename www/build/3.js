webpackJsonp([3],{

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabpage1PageModule", function() { return Tabpage1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabpage1__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let Tabpage1PageModule = class Tabpage1PageModule {
};
Tabpage1PageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tabpage1__["a" /* Tabpage1Page */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabpage1__["a" /* Tabpage1Page */]),
        ],
    })
], Tabpage1PageModule);

//# sourceMappingURL=tabpage1.module.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tabpage1Page; });
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



let Tabpage1Page = class Tabpage1Page {
    constructor(navCtrl, navParams, nfc, ndef) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nfc = nfc;
        this.ndef = ndef;
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
                }
                else {
                    this.dataroar = {
                        message: 'NFC Tag not found',
                        duration: 1000,
                        position: 'bottom'
                    };
                }
            }
        });
    }
};
Tabpage1Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tabpage1',template:/*ion-inline-start:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/tabpage1/tabpage1.html"*/'\n<ion-header>\n\n  <ion-navbar>\n      <ion-buttons start>\n          <button ion-button menuToggle>\n              <ion-icon name="menu"></ion-icon>        \n          </button>\n        </ion-buttons>\n    <ion-title>Buy with NFC</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <ion-item  >\n                <span >{{dataroar.message}}</span>\n                <span >{{dataroar.duration}}}</span>\n                <span >{{dataroar.position}}</span>\n                <span >{{id}}</span>\n                <span >{{tag}}</span>\n                <span >{{payLoad}}</span>\n                <span >{{tagContent}}</span>\n        </ion-item>\n    </ion-list>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/tabpage1/tabpage1.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_nfc__["a" /* NFC */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_nfc__["b" /* Ndef */]])
], Tabpage1Page);

//# sourceMappingURL=tabpage1.js.map

/***/ })

});
//# sourceMappingURL=3.js.map