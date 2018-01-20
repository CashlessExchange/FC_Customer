webpackJsonp([22],{

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(491);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
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

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_android_permissions__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment_timezone__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment_timezone__);
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







var HomePage = (function () {
    function HomePage(platform, androidPermissions, geolocation, auth, storage, navCtrl, navParams, loadingCtrl) {
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
        this.marketplaceInfo = false;
        this.marketplacediscount = 0;
        this.marketpoints = 0;
    }
    HomePage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingCtrl.create({
                            spinner: 'hide',
                            content: "Please Wait..\n          \n          <div class=\"custom-spinner-container\">\n            <div class=\"custom-spinner-box\"></div>\n          </div>"
                        });
                        this.certs = [];
                        //loading.present();
                        return [4 /*yield*/, this.locateMe()];
                    case 1:
                        //loading.present();
                        _a.sent();
                        this.readCustomerData();
                        return [4 /*yield*/, this.loadCertis()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.detokenCertificate()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.laodTransactions()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.specialDeals = function () {
        return __awaiter(this, void 0, void 0, function () {
            var databasecreds1, points, lengthnum, databasecreds, currentUnixTime, param, order;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        databasecreds1 = {
                            username: "freedom-app",
                            password: "150498AV",
                            customerid: this.customerid,
                        };
                        return [4 /*yield*/, this.auth.marketplacepointservice(databasecreds1, "?getPoints=" + "99")];
                    case 1:
                        points = _a.sent();
                        console.log(points.results);
                        lengthnum = points.results.length;
                        this.marketpoints = points.results.substring(0, lengthnum - 2);
                        databasecreds = {
                            username: "username",
                            password: "test",
                        };
                        currentUnixTime = __WEBPACK_IMPORTED_MODULE_6_moment_timezone__().tz("America/New_York").unix();
                        param = "&customer_id=" + this.customerid +
                            "&timestamp=" + currentUnixTime;
                        return [4 /*yield*/, this.auth.marketPlaceService(databasecreds, "getMonthlyAdditionalDiscountForCustomer.php?" + param)];
                    case 2:
                        order = _a.sent();
                        console.log(order);
                        if (order.additional_discount != "0") {
                            console.log(order.additional_discount);
                            this.marketplacediscount = order.additional_discount;
                            this.marketplaceInfo = true;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.readCustomerData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var type, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!this.platform.is('core')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.storage.getItem('user-id').then(function (data) {
                                if (data != null || data != undefined) {
                                    _this.customerid = data;
                                }
                            })];
                    case 1:
                        _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        this.customerid = "40";
                        _b.label = 3;
                    case 3: return [4 /*yield*/, this.specialDeals()];
                    case 4:
                        _b.sent();
                        type = "customer_data.php?customerid=" + this.customerid;
                        console.log(type);
                        _a = this;
                        return [4 /*yield*/, this.auth.serviceFreedom("", type)];
                    case 5:
                        _a.customer = _b.sent();
                        console.log(this.customer);
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.locateMe = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.platform.is('android')) {
                            this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(function (success) { return console.log('Permission granted'); }, function (err) { return _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION); });
                        }
                        return [4 /*yield*/, this.geolocation.getCurrentPosition().then(function (location) {
                                _this.lat = location.coords.latitude;
                                _this.lng = location.coords.longitude;
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
    HomePage.prototype.detokenCertificate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var date, customerid, merchantid, price, merchantdata, merchantname, merchantlogo, cert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.certificates);
                        if (!(this.certificates != null || this.certificates != undefined)) return [3 /*break*/, 2];
                        date = this.certificates.timestamp;
                        customerid = this.certificates.customer_id;
                        merchantid = this.certificates.merchant_id;
                        price = this.certificates.value;
                        return [4 /*yield*/, this.getMerchantData(merchantid)];
                    case 1:
                        merchantdata = _a.sent();
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
                            token: this.certificates,
                            value: price
                        };
                        console.log(this.splitted);
                        this.certs.push(cert);
                        return [3 /*break*/, 3];
                    case 2:
                        this.certs = this.certificates;
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.getMerchantData = function (id) {
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
                        return [4 /*yield*/, this.auth.serviceTransaction(databasecreds, "?getMerchant=" + "99")];
                    case 1:
                        merch = _a.sent();
                        console.log(merch);
                        return [2 /*return*/, merch];
                }
            });
        });
    };
    HomePage.prototype.loadCertis = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var databasecreds, certis, length_1;
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
                            username: "freedom-app",
                            password: "150498AV",
                            reference: "",
                            customerid: this.customerid,
                            token: ""
                        };
                        console.log(databasecreds);
                        return [4 /*yield*/, this.auth.certificateService(databasecreds, "?getCertis=" + "99")];
                    case 4:
                        certis = _a.sent();
                        console.log(certis.results);
                        if (certis.results != undefined) {
                            length_1 = certis.results.length;
                            this.certificates = certis.results[length_1 - 1];
                        }
                        else {
                            this.certificates = certis.results;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.laodTransactions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var databasecreds, trans, length_2, _i, _a, entry, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!!this.platform.is('core')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.storage.getItem('user-id').then(function (data) {
                                if (data != null || data != undefined) {
                                    _this.customerid = data;
                                }
                            })];
                    case 1:
                        _c.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        this.customerid = "40";
                        _c.label = 3;
                    case 3:
                        databasecreds = {
                            username: "freedom-app",
                            password: "150498AV",
                            reference: "",
                            customerid: this.customerid,
                            token: ""
                        };
                        console.log(databasecreds);
                        return [4 /*yield*/, this.auth.serviceTransaction(databasecreds, "?getTransactions=" + "99")];
                    case 4:
                        trans = _c.sent();
                        console.log(trans.results);
                        this.transactions = trans.results;
                        if (this.transactions != undefined) {
                            length_2 = this.transactions.length;
                            if (length_2 > 5) {
                                console.log(this.transactions.slice(length_2 - 4, length_2));
                                this.transactions = this.transactions.slice(length_2 - 4, length_2);
                            }
                        }
                        _i = 0, _a = this.transactions;
                        _c.label = 5;
                    case 5:
                        if (!(_i < _a.length)) return [3 /*break*/, 8];
                        entry = _a[_i];
                        _b = entry;
                        return [4 /*yield*/, this.getMerchantData(entry.merchant_id)];
                    case 6:
                        _b.device_id = _c.sent();
                        _c.label = 7;
                    case 7:
                        _i++;
                        return [3 /*break*/, 5];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.filter = function (value) {
        if (value === "1") {
            return "yes";
        }
        else {
            return "no";
        }
    };
    HomePage.prototype.addPoint = function (num) {
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
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/home/home.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Home Page</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="background">\n\n  <div>\n    <img src="assets/img/screenplay.png" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  </div>\n\n  <ion-item color="none">\n      <h2>Your Information</h2>\n\n\n    <h2>\n      {{customer?.data.username}}\n    </h2>\n    <h3>\n      Your Customer ID: {{customerid}}\n    </h3>\n    <h3>\n      Your Email: {{customer?.data.email}}\n    </h3>\n  </ion-item>\n  \n  <ion-item>\n\n      <h2>Marketplace Information</h2>\n\n      <br/>\n      <span> Your Marketplace Points: {{marketpoints}}</span>       \n      \n      <br/>\n        <span *ngIf="marketplaceInfo === false"> There are no Special Discount available</span>\n        <span *ngIf="marketplaceInfo === true"> Special Discount available for {{marketplacediscount}}</span>\n\n    </ion-item>\n    <br/>\n\n  <ion-item color="none">\n      Most Recent Certificates:\n  </ion-item>\n\n\n  <ion-list>\n    <span *ngIf="certs === undefined"> There are no Certificates available</span>\n\n    <ion-spinner *ngIf="certs != undefined && certs.length == 0"> </ion-spinner>\n\n    <ion-card color="none" *ngFor="let option of certs">\n      <ion-item>\n        <ion-thumbnail item-left>\n          <img [src]="option.merchantlogo" style="height: 20%;">\n        </ion-thumbnail>\n      </ion-item>\n      <h2>\n        Merchant: {{option.merchantname}}\n      </h2>\n      <p>Value: ${{addPoint(option.value)}}</p>\n    </ion-card>\n  </ion-list>\n\n  <ion-item color="none" id="home-list-item20">\n    Most Recent Transactions:\n  </ion-item>\n  <ion-list>\n    <span *ngIf="transactions === undefined"> There are no transactions available</span>\n\n    <ion-spinner *ngIf="transactions != undefined && transactions.length == 0"> </ion-spinner>\n    <ion-card *ngFor="let option of transactions">\n\n      <ion-item>\n        <div class="show-list-numbers-and-dots">\n          <p style="margin-top:0px;color:#000000;">\n            Merchant Name = {{option.device_id?.name}}\n          </p>\n          <p style="margin-top:0px;color:#000000;">\n            Merchant Address = {{option.device_id?.address}}\n          </p>\n          <p style="margin-top:0px;color:#000000;">\n            Referencenumber = {{option.ref}}\n          </p>\n        </div>\n      </ion-item>\n      <ion-item color="balanced">\n        ${{addPoint(option.value)}}\n      </ion-item>\n    </ion-card>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/home/home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_android_permissions__["a" /* AndroidPermissions */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* Api */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=22.js.map