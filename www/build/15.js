webpackJsonp([15],{

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymethodsPageModule", function() { return PaymethodsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paymethods__ = __webpack_require__(499);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaymethodsPageModule = (function () {
    function PaymethodsPageModule() {
    }
    return PaymethodsPageModule;
}());
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

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymethodsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cards_cards__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editcard_editcard__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__ = __webpack_require__(16);
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






var PaymethodsPage = (function () {
    function PaymethodsPage(loadingCtrl, platform, autService, storage, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.autService = autService;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cardsonpage = [];
        this.tokens = [];
        this.cardsonpage = [];
    }
    PaymethodsPage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, _i, _a, entry, token;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.cardsonpage = [];
                        loading = this.loadingCtrl.create({
                            spinner: 'hide',
                            content: "Please Wait..\n      \n      <div class=\"custom-spinner-container\">\n        <div class=\"custom-spinner-box\"></div>\n      </div>"
                        });
                        loading.present();
                        return [4 /*yield*/, this.loadCards()];
                    case 1:
                        _b.sent();
                        console.log(this.tokens);
                        if (this.tokens != null && this.tokens != undefined) {
                            for (_i = 0, _a = this.tokens; _i < _a.length; _i++) {
                                entry = _a[_i];
                                token = {
                                    "APIKey": "bDjnJKu7ip7097Vfq46I",
                                    "TokenExID": "4323829200543105",
                                    "Token": entry
                                };
                                this.card = {
                                    cardname: entry.card_type,
                                    cardowner: entry.name_on_card,
                                    cardnumber: entry.account_number,
                                    month: entry.expire_month,
                                    year: entry.expire_year,
                                    checkdigit: entry.card_verification_value,
                                    icon: entry.icon
                                };
                                this.cardsonpage.push(this.card);
                            }
                        }
                        setTimeout(function () {
                            loading.dismiss();
                        }, 0);
                        return [2 /*return*/];
                }
            });
        });
    };
    PaymethodsPage.prototype.loadCards = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var databasecreds, certis;
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
                        this.customerid = "73";
                        _a.label = 3;
                    case 3:
                        databasecreds = {
                            username: "freedom-app",
                            password: "150498AV",
                            reference: "",
                            customerid: this.customerid,
                            token: ""
                        };
                        console.log(databasecreds);
                        return [4 /*yield*/, this.autService.cardService(databasecreds, "?getCards=" + "99")];
                    case 4:
                        certis = _a.sent();
                        console.log(certis.results);
                        this.tokens = certis.results;
                        return [2 /*return*/];
                }
            });
        });
    };
    PaymethodsPage.prototype.editCard = function (value) {
        console.log(value);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__editcard_editcard__["a" /* EditcardPage */], { card: value });
    };
    PaymethodsPage.prototype.filter = function (value) {
        var secret = "*******";
        var endcard = value.length;
        return secret + value.substring(endcard - 4, endcard);
    };
    PaymethodsPage.prototype.addCard = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cards_cards__["a" /* CardsPage */]);
    };
    return PaymethodsPage;
}());
PaymethodsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-paymethods',template:/*ion-inline-start:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/paymethods/paymethods.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons end>\n        <button ion-button icon-only color="royal" (click)="addCard()">\n            <ion-icon name="add"></ion-icon>\n          </button>\n    </ion-buttons>\n      <ion-buttons start>\n          <button ion-button menuToggle>\n              <ion-icon name="menu"></ion-icon>        \n          </button>\n        </ion-buttons>\n    <ion-title>My Cards</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="background">\n    <H2>My Credit Cards</H2>\n    <p>Your Data will be save with us!</p>\n  <div class="spacer" style="width:300px;height:15px;" ></div>\n<ion-list>\n\n  <ion-item *ngFor="let option of cardsonpage" (click)="editCard(option)" ion-item>\n    <ion-thumbnail item-start>\n      <img [src]="option.icon" style="height: 30%;">\n    </ion-thumbnail>\n    <ion-label>{{option.cardowner}}, {{filter(option.cardnumber)}}</ion-label>\n    \n  </ion-item>\n  \n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/paymethods/paymethods.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* Api */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__["a" /* NativeStorage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], PaymethodsPage);

//# sourceMappingURL=paymethods.js.map

/***/ })

});
//# sourceMappingURL=15.js.map