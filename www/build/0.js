webpackJsonp([0],{

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsPageModule", function() { return TransactionsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transactions__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let TransactionsPageModule = class TransactionsPageModule {
};
TransactionsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__transactions__["a" /* TransactionsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__transactions__["a" /* TransactionsPage */]),
        ],
    })
], TransactionsPageModule);

//# sourceMappingURL=transactions.module.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_Storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(30);
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




let TransactionsPage = class TransactionsPage {
    constructor(storage, loadingCtrl, navCtrl, navParams, autService) {
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.autService = autService;
        this.transactions = [];
        const loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: `Please Wait..
      
      <div class="custom-spinner-container">
        <div class="custom-spinner-box"></div>
      </div>`
        });
        loading.present();
        this.laodTransactions();
        setTimeout(() => {
            loading.dismiss();
        }, 0);
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
            let trans = yield this.autService.serviceTransaction(databasecreds, "?getTransactions=" + "99");
            console.log(trans.results);
            this.transactions = trans.results;
            for (let entry of this.transactions) {
                entry.device_id = yield this.getMerchantData(entry.merchant_id);
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
            //let merch: any = await this.autService.serviceTransaction(databasecreds, "?getMerchant=" + "99");
            let merch = yield this.autService.serviceTransaction(databasecreds, "?getMerchant=" + "99");
            console.log(merch);
            return merch;
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
TransactionsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-transactions',template:/*ion-inline-start:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/transactions/transactions.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>transactions</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <span *ngIf="transactions === undefined"> There are no transactions available</span>\n\n    <ion-card *ngFor="let option of transactions">\n\n      <ion-item>\n        <div class="show-list-numbers-and-dots">\n          <p style="margin-top:0px;color:#000000;">\n            Merchant Name = {{option.device_id?.name}}\n          </p>\n          <p style="margin-top:0px;color:#000000;">\n            Merchant Address = {{option.device_id?.address}}\n          </p>\n          <p style="margin-top:0px;color:#000000;">\n            Referencenumber = {{option.ref}}\n          </p>\n        </div>\n      </ion-item>\n      <ion-item color="balanced">\n        Value: {{addPoint(option.value)}}$\n      </ion-item>\n    </ion-card>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/transactions/transactions.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_Storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_Storage__["b" /* Storage */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]) === "function" && _e || Object])
], TransactionsPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=transactions.js.map

/***/ })

});
//# sourceMappingURL=0.js.map