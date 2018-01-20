webpackJsonp([17],{

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketplacetransactionPageModule", function() { return MarketplacetransactionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__marketplacetransaction__ = __webpack_require__(496);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MarketplacetransactionPageModule = (function () {
    function MarketplacetransactionPageModule() {
    }
    return MarketplacetransactionPageModule;
}());
MarketplacetransactionPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__marketplacetransaction__["a" /* MarketplacetransactionPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__marketplacetransaction__["a" /* MarketplacetransactionPage */]),
        ],
    })
], MarketplacetransactionPageModule);

//# sourceMappingURL=marketplacetransaction.module.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketplacetransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__coupons_coupons__ = __webpack_require__(350);
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var MarketplacetransactionPage = (function () {
    function MarketplacetransactionPage(platform, storage, loadingCtrl, navCtrl, navParams, autService) {
        this.platform = platform;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.autService = autService;
        this.transactions = [];
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "Please Wait..\n      \n      <div class=\"custom-spinner-container\">\n        <div class=\"custom-spinner-box\"></div>\n      </div>"
        });
        loading.present();
        this.laodTransactions();
        setTimeout(function () {
            loading.dismiss();
        }, 0);
    }
    MarketplacetransactionPage.prototype.laodTransactions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var databasecreds, trans;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.platform.is('core')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.storage.getItem('user-id').then(function (data) {
                                if (data != null || data != undefined) {
                                    _this.customerid = data;
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        this.customerid = "40";
                        _a.label = 3;
                    case 3:
                        databasecreds = {
                            username: "freedom-pos",
                            password: "150498AV",
                            reference: "",
                            customerid: this.customerid,
                            token: ""
                        };
                        console.log(databasecreds);
                        return [4 /*yield*/, this.autService.marketPlaceService(databasecreds, "fetchOrderDetails.php?customer_id=" + this.customerid)];
                    case 4:
                        trans = _a.sent();
                        console.log(trans.orderDetails);
                        this.transactions = trans.orderDetails;
                        return [2 /*return*/];
                }
            });
        });
    };
    MarketplacetransactionPage.prototype.getMerchantData = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var databasecreds, merch;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        databasecreds = {
                            username: "merchantbackuser",
                            password: "150498AV",
                            reference: "",
                            customerid: this.customerid,
                            token: "",
                            id: id
                        };
                        console.log(databasecreds);
                        return [4 /*yield*/, this.autService.serviceTransaction(databasecreds, "?getMerchant=" + "99")];
                    case 1:
                        merch = _a.sent();
                        console.log(merch);
                        return [2 /*return*/, merch];
                }
            });
        });
    };
    MarketplacetransactionPage.prototype.filter = function (value) {
        if (value === "1") {
            return "yes";
        }
        else {
            return "no";
        }
    };
    MarketplacetransactionPage.prototype.addPoint = function (num) {
        var temp = num.toString();
        if (temp.length === 1) {
            temp = "0.0" + temp;
        }
        else if (temp.length === 2) {
            temp = "0." + temp;
        }
        else {
            var lengthnum = temp.length;
            temp = temp.substring(0, lengthnum - 2) + "." + temp.substring(lengthnum - 2, lengthnum);
        }
        return temp;
    };
    MarketplacetransactionPage.prototype.openCoupon = function (coupons) {
        console.log(coupons);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__coupons_coupons__["a" /* CouponsPage */], { coupon: coupons });
    };
    return MarketplacetransactionPage;
}());
MarketplacetransactionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-marketplacetransaction',template:/*ion-inline-start:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/marketplacetransaction/marketplacetransaction.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-buttons start>\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title>My Marketplace Transactions</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding class="background">\n    <ion-list>\n      <span *ngIf="transactions === undefined"> There are no Orders available</span>\n  \n      <ion-card *ngFor="let option of transactions">\n  \n        <ion-item>\n          <div class="show-list-numbers-and-dots">\n            <p style="margin-top:0px;color:#000000;">\n              Payment Mode = {{option?.payment_mode}}\n            </p>\n            <p style="margin-top:0px;color:#000000;">\n              Order Date = {{option?.order_date}}\n            </p>\n            <p style="margin-top:0px;color:#000000;">\n              Order ID = {{option?.orderId}}\n            </p>\n            <div *ngIf="option.coupons?.length > 0">\n                <span > Coupons are available!</span>\n                <br/>\n                    <button ion-button color="primary" (click)="openCoupon(option)">{{ \'Show Coupons\' }}</button>\n\n            </div>\n\n          </div>\n        </ion-item>\n        <ion-item color="balanced">\n          Value: ${{option?.total_amount}}\n        </ion-item>\n      </ion-card>\n    </ion-list>\n  </ion-content>'/*ion-inline-end:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/marketplacetransaction/marketplacetransaction.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* Api */]])
], MarketplacetransactionPage);

//# sourceMappingURL=marketplacetransaction.js.map

/***/ })

});
//# sourceMappingURL=17.js.map