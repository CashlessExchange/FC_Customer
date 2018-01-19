webpackJsonp([4],{

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialPageModule", function() { return SpecialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__special__ = __webpack_require__(508);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SpecialPageModule = (function () {
    function SpecialPageModule() {
    }
    return SpecialPageModule;
}());
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

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__certificate_certificate__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_api__ = __webpack_require__(15);
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






var SpecialPage = (function () {
    function SpecialPage(platform, loadingCtrl, autService, geolocation, storage, navCtrl, navParams) {
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.autService = autService;
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
    SpecialPage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingCtrl.create({
                            spinner: 'hide',
                            content: "Please Wait..\n      \n      <div class=\"custom-spinner-container\">\n        <div class=\"custom-spinner-box\"></div>\n      </div>"
                        });
                        this.certs = [];
                        loading.present();
                        return [4 /*yield*/, this.loadCertis()];
                    case 1:
                        _a.sent();
                        this.detokenCertificate();
                        //this.getMerchantData();
                        loading.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    SpecialPage.prototype.showCert = function (token) {
        console.log(token);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__certificate_certificate__["a" /* CertificatePage */], { token: token });
    };
    SpecialPage.prototype.detokenCertificate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, entry, token, wsresponse, date, customerid, merchantid, certid, merchantdata, merchantname, merchantlogo, cert;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.certificates;
                        if (!(this.certificates != null || this.certificates != undefined)) return [3 /*break*/, 4];
                        _i = 0, _a = this.certificates;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        entry = _a[_i];
                        token = {
                            "APIKey": "bDjnJKu7ip7097Vfq46I",
                            "TokenExID": "4323829200543105",
                            "Token": entry
                        };
                        wsresponse = void 0;
                        date = entry.timestamp;
                        customerid = entry.customer_id;
                        merchantid = entry.merchant_id;
                        certid = entry.id;
                        return [4 /*yield*/, this.getMerchantData(merchantid)];
                    case 2:
                        merchantdata = _b.sent();
                        merchantname = merchantdata.name;
                        merchantlogo = this.logo;
                        console.log(merchantdata.logo.length);
                        if (merchantdata.logo.length != 0) {
                            console.log(merchantlogo);
                            merchantlogo = merchantdata.logo;
                        }
                        console.log(merchantlogo);
                        cert = {
                            merchantid: merchantid,
                            merchantname: merchantname,
                            merchantlogo: merchantlogo,
                            token: entry
                        };
                        console.log(this.splitted);
                        this.certs.push(cert);
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SpecialPage.prototype.getMerchantData = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var databasecreds, merch;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        databasecreds = { username: "merchantbackuser",
                            password: "150498AV",
                            reference: "",
                            customerid: this.customerid,
                            token: "",
                            id: id };
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
    SpecialPage.prototype.loadCertis = function () {
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
                        databasecreds = { username: "freedom-app",
                            password: "150498AV",
                            reference: "",
                            customerid: this.customerid,
                            token: "" };
                        console.log(databasecreds);
                        return [4 /*yield*/, this.autService.certificateService(databasecreds, "?getCertis=" + "99")];
                    case 4:
                        certis = _a.sent();
                        console.log(certis.results);
                        this.certificates = certis.results;
                        return [2 /*return*/];
                }
            });
        });
    };
    SpecialPage.prototype.locateMe = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.geolocation.getCurrentPosition().then(function (location) {
                            _this.yourlocation = location;
                            _this.lat = _this.yourlocation.coords.latitude;
                            _this.lng = _this.yourlocation.coords.longitude;
                        }).catch(function (err) {
                            alert(err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return SpecialPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('map'),
    __metadata("design:type", Object)
], SpecialPage.prototype, "mapElement", void 0);
SpecialPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-special',template:/*ion-inline-start:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/special/special.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>My Certificates</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="background">\n\n\n  <ion-list>\n    <span *ngIf="certs === undefined"> There are no Certificates available</span>\n\n    <ion-item color="none" *ngFor="let option of certs" (click)="showCert(option.token)" ion-item>\n      <ion-thumbnail item-left>\n        <img [src]="option.merchantlogo" style="height: 30%;">\n      </ion-thumbnail>\n      <h2>\n        Merchant: {{option.merchantname}}\n      </h2>\n      <span>Store Credit ID: {{option.token.id}}</span>\n    </ion-item>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/special/special.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_api_api__["a" /* Api */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], SpecialPage);

//# sourceMappingURL=special.js.map

/***/ })

});
//# sourceMappingURL=4.js.map