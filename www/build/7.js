webpackJsonp([7],{

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu__ = __webpack_require__(302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let MenuPageModule = class MenuPageModule {
};
MenuPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */]),
        ],
    })
], MenuPageModule);

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkout_checkout__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entercode_entercode__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(30);
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








let MenuPage = class MenuPage {
    constructor(storage, alertCtrl, autService, navCtrl, navParams, app, barcode) {
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.autService = autService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.barcode = barcode;
        this.rootPage = 'HomePage';
        this.pages = [
            { title: 'Home', pageName: 'HomePage', icon: 'home' },
            { title: 'Certificates', pageName: 'SpecialPage', icon: 'paper' },
            { title: 'Transactions', pageName: 'TransactionsPage', icon: 'pricetags' },
            { title: 'Paymethods', pageName: 'PaymethodsPage', icon: 'card' }
        ];
    }
    openPage(page) {
        let params = {};
        if (page.index) {
            params = { tabIndex: page.index };
        }
        if (this.nav.getActiveChildNav() && page.index != undefined) {
            this.nav.getActiveChildNav().select(page.index);
        }
        else {
            this.nav.setRoot(page.pageName, params);
        }
    }
    isActive(page) {
        let childNav = this.nav.getActiveChildNav();
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
            return 'primary';
        }
    }
    enterBarcode() {
        return __awaiter(this, void 0, void 0, function* () {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_4__entercode_entercode__["a" /* EntercodePage */]);
        });
    }
    scanBarcode() {
        return __awaiter(this, void 0, void 0, function* () {
            this.options = {
                prompt: 'Scan a QR-Code to see the result'
            };
            this.results = yield this.barcode.scan(this.options);
            if (this.results.cancelled != true) {
                let databasecreds = {
                    username: "freedom-pos",
                    password: "150498AV",
                    reference: this.results.text,
                    customerid: 5000
                };
                let datas;
                datas = yield this.autService.serviceTransaction(databasecreds, "?getid=" + this.results.text);
                console.log("test" + datas.id);
                if (datas.hit == 'failed') {
                    let alert = this.alertCtrl.create({
                        title: 'Error',
                        subTitle: 'This QR-Code is not valid',
                        buttons: ['OK']
                    });
                    alert.present();
                    this.nav.popToRoot();
                }
                else {
                    this.nav.push(__WEBPACK_IMPORTED_MODULE_3__checkout_checkout__["a" /* CheckoutPage */], { ref: this.results.text, data: datas });
                }
            }
            else {
                this.nav.popToRoot();
            }
        });
    }
    doLogout() {
        this.navCtrl.setRoot('LoginPage');
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
], MenuPage.prototype, "nav", void 0);
MenuPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-menu',template:/*ion-inline-start:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/menu/menu.html"*/'<ion-menu [content]="content">\n  <ion-header>\n\n    <ion-navbar>\n      <ion-title>menu</ion-title>\n    </ion-navbar>\n\n  </ion-header>\n\n\n  <ion-content>\n    <ion-list no-lines>\n      <button ion-item menuClose *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon item-start [name]="p.icon" [color]="isActive(p)" style="font-size:23px !important;">\n          {{p.title}}\n        </ion-icon>\n      </button>\n\n    </ion-list>\n    <ion-list>\n      <button ion-item menuClose (click)="scanBarcode()">\n        <ion-icon item-start name="qr-scanner" color="red" style="font-size:23px !important;">\n          Scan Code\n        </ion-icon>\n      </button>\n      <button ion-item menuClose (click)="enterBarcode()">\n        <ion-icon item-start name="document" color="red" style="font-size:23px !important;">\n          Enter Code\n        </ion-icon>\n      </button>\n    </ion-list>\n\n    <div class="spacer" style="height:40px;" ></div>\n    \n    <ion-list>\n      <button ion-item menuClose (click)="doLogout()">\n        <ion-icon item-start name="exit" color="red" style="font-size:23px !important;">\n          Logout\n        </ion-icon>\n      </button>\n    </ion-list>\n\n  </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/menu/menu.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_Storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
], MenuPage);

//# sourceMappingURL=menu.js.map

/***/ })

});
//# sourceMappingURL=7.js.map