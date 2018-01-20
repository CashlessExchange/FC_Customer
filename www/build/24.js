webpackJsonp([24],{

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoosepaymentcardformarketplacePageModule", function() { return ChoosepaymentcardformarketplacePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__choosepaymentcardformarketplace__ = __webpack_require__(489);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChoosepaymentcardformarketplacePageModule = (function () {
    function ChoosepaymentcardformarketplacePageModule() {
    }
    return ChoosepaymentcardformarketplacePageModule;
}());
ChoosepaymentcardformarketplacePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__choosepaymentcardformarketplace__["a" /* ChoosepaymentcardformarketplacePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__choosepaymentcardformarketplace__["a" /* ChoosepaymentcardformarketplacePage */]),
        ],
    })
], ChoosepaymentcardformarketplacePageModule);

//# sourceMappingURL=choosepaymentcardformarketplace.module.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChoosepaymentcardformarketplacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__checkout_checkout__ = __webpack_require__(121);
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







/**
 * Generated class for the ChoosepaymentcardformarketplacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChoosepaymentcardformarketplacePage = (function () {
    function ChoosepaymentcardformarketplacePage(loadingCtrl, toatCtrl, platform, geolocation, storage, alertCtrl, autService, navCtrl, navParams) {
        var _this = this;
        this.loadingCtrl = loadingCtrl;
        this.toatCtrl = toatCtrl;
        this.platform = platform;
        this.geolocation = geolocation;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.autService = autService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cardsonpage = [];
        this.certsonpage = [];
        this.tokens = [];
        this.tempCerts = [];
        this.showSkip = true;
        this.values = [];
        this.logo = "assets/img/shop_merchant.png";
        this.cert = {
            merchantlogo: this.logo
        };
        this.guthaben = 0;
        this.items = {
            id: "",
            deal: "",
            name: "",
            price: "",
            merchantid: "",
            customerid: "",
            ref: ""
        };
        this.price = "0.00";
        this.discountBox = [];
        this.chosenToken = [];
        this.discount = 0;
        this.newMErchantID = navParams.get('merchant');
        this.priceTemp = this.addPoint2(Number(navParams.get('price')));
        this.ref = navParams.get('ref');
        this.vaucherid = navParams.get('vaucherid');
        this.items.ref = this.ref;
        console.log(navParams);
        this.items.price = this.addPoint2(Number(navParams.get('price')));
        this.items.name = navParams.get('item');
        //this.items.name = "test";
        this.items.deal = navParams.get('deal');
        this.items.merchantid = this.newMErchantID;
        if (!this.platform.is('core')) {
            this.storage.getItem('user-id').then(function (data) {
                if (data != null || data != undefined) {
                    _this.customerid = data;
                }
            });
        }
        else {
            this.customerid = "73";
        }
        this.prepareItem("solo");
        this.cardsonpage = [];
        this.getCardsFromToken();
        this.getCertificatesFromMerchant();
        this.merchantData();
    }
    ChoosepaymentcardformarketplacePage.prototype.addPoint2 = function (num) {
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
    ChoosepaymentcardformarketplacePage.prototype.prepareItem = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var calculated, calculated, newPrice, messageForCustomer, alert_1, ammountNew;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.price);
                        if (!(param != "solo")) return [3 /*break*/, 5];
                        if (!(this.price != "0.00")) return [3 /*break*/, 2];
                        console.log(this.feeForMerchant);
                        console.log(this.items.price);
                        return [4 /*yield*/, this.calcFee(this.price)];
                    case 1:
                        _a.sent();
                        console.log(String(Number(this.price).toFixed(2) + this.feeForMerchant));
                        calculated = Number(this.price) + this.feeForMerchant;
                        console.log(calculated);
                        //calculated = calculated-this.discount;
                        console.log(calculated);
                        this.price = String(calculated.toFixed(2));
                        return [3 /*break*/, 4];
                    case 2:
                        console.log(this.feeForMerchant);
                        console.log(this.items.price);
                        return [4 /*yield*/, this.calcFee(this.priceTemp)];
                    case 3:
                        _a.sent();
                        console.log(String(Number(this.items.price).toFixed(2) + this.feeForMerchant));
                        calculated = Number(this.items.price) + this.feeForMerchant;
                        calculated = calculated - this.discount;
                        this.price = String(calculated.toFixed(2));
                        _a.label = 4;
                    case 4:
                        newPrice = this.price;
                        messageForCustomer = 'By clicking Agree, you hereby authorize this Merchant to add fee to total purchase price of, $'
                            + newPrice.toString().replace(/\s+/g, '') + ', to purchase a future discount of $' + this.discount.toFixed(2);
                        if (this.guthaben != 0) {
                            messageForCustomer += " - new value for certificate: $" + this.guthaben.toFixed(2);
                        }
                        alert_1 = this.alertCtrl.create({
                            title: 'Information',
                            subTitle: messageForCustomer,
                            buttons: [
                                {
                                    text: 'Disagree',
                                    handler: function () {
                                        console.log('Disagree clicked');
                                        _this.selected('cash');
                                        _this.loadCards();
                                    }
                                },
                                {
                                    text: 'Agree',
                                    handler: function () {
                                        console.log('Agree clicked');
                                    }
                                }
                            ]
                        });
                        return [3 /*break*/, 6];
                    case 5:
                        console.log(this.items.price);
                        console.log(this.discount);
                        ammountNew = Number(this.items.price) - this.discount;
                        this.price = String(ammountNew.toFixed(2));
                        this.feeForMerchant = 0;
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ChoosepaymentcardformarketplacePage.prototype.merchantData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var databasecreds, merchantdata, merchantname, merchantlogo, merchantmail, cert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        databasecreds = {
                            username: "merchantbackuser",
                            password: "150498AV",
                            reference: this.ref,
                            customerid: this.customerid,
                            token: "",
                            id: this.items.merchantid
                        };
                        console.log(databasecreds);
                        return [4 /*yield*/, this.autService.serviceTransaction(databasecreds, "?getMerchant=" + "99")];
                    case 1:
                        merchantdata = _a.sent();
                        merchantname = merchantdata.name;
                        merchantlogo = this.logo;
                        console.log(merchantdata.logo.length);
                        if (merchantdata.logo.length != 0) {
                            console.log(merchantlogo);
                            merchantlogo = merchantdata.logo;
                        }
                        merchantmail = merchantdata.mail;
                        console.log(merchantlogo);
                        cert = {
                            merchantid: this.items.merchantid,
                            merchantname: merchantname,
                            merchantlogo: merchantlogo,
                            merchantmail: merchantmail
                        };
                        this.cert = cert;
                        return [2 /*return*/];
                }
            });
        });
    };
    ChoosepaymentcardformarketplacePage.prototype.loadCards = function () {
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
                            reference: this.ref,
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
    ChoosepaymentcardformarketplacePage.prototype.getCardsFromToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, entry;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadCards()];
                    case 1:
                        _b.sent();
                        //console.log(this.tokens);
                        if (this.tokens != null && this.tokens != undefined) {
                            for (_i = 0, _a = this.tokens; _i < _a.length; _i++) {
                                entry = _a[_i];
                                //alert(responses.Value);
                                //console.log(this.splitted);
                                this.card = {
                                    cardname: entry.card_type,
                                    cardowner: entry.name_on_card,
                                    cardnumber: entry.account_number,
                                    month: entry.expire_month,
                                    year: entry.expire_year,
                                    checkdigit: entry.card_verification_value,
                                    icon: entry.icon
                                };
                                //console.log(this.splitted);
                                this.cardsonpage.push(this.card);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ChoosepaymentcardformarketplacePage.prototype.getCertificatesFromMerchant = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var databasecreds, certis, _i, _a, entry, token, date, pric1, certi;
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
                        this.customerid = "73";
                        _b.label = 3;
                    case 3:
                        databasecreds = {
                            username: "freedom-app",
                            password: "150498AV",
                            reference: this.ref,
                            customerid: this.customerid,
                            token: ""
                        };
                        console.log(databasecreds);
                        return [4 /*yield*/, this.autService.certificateService(databasecreds, "?getCertis=" + "99")];
                    case 4:
                        certis = _b.sent();
                        console.log(certis.results);
                        this.tempCerts = certis.results;
                        if (this.tempCerts != undefined && this.tempCerts != null) {
                            for (_i = 0, _a = this.tempCerts; _i < _a.length; _i++) {
                                entry = _a[_i];
                                token = {
                                    "APIKey": "bDjnJKu7ip7097Vfq46I",
                                    "TokenExID": "4323829200543105",
                                    "Token": entry
                                };
                                date = new Date(entry.timestamp * 1000).toDateString();
                                pric1 = this.addPoint(entry.value);
                                console.log(date);
                                certi = {
                                    date: date,
                                    customerid: entry.customer_id,
                                    merchantid: entry.merchant_id,
                                    price: pric1
                                };
                                if (certi.merchantid === this.items.merchantid) {
                                    this.discountBox.push({
                                        type: 'checkbox',
                                        label: certi.price + ' from Date: ' + certi.date,
                                        value: certi.price + "_" + entry.token,
                                        checked: true
                                    });
                                    this.certsonpage.push(certi);
                                }
                                //this.token = responses.Token;
                            }
                        }
                        if (this.certsonpage.length > 0) {
                            this.showCheckbox();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ChoosepaymentcardformarketplacePage.prototype.showCheckbox = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert, _i, _a, entry;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        alert = this.alertCtrl.create();
                        alert.setTitle('Do you want to use any funds from your Certificate?');
                        for (_i = 0, _a = this.discountBox; _i < _a.length; _i++) {
                            entry = _a[_i];
                            alert.addInput(entry);
                        }
                        alert.addButton({
                            text: 'If no, then dont modify total!',
                            handler: function (data) {
                                _this.paymethodRemind();
                            }
                        });
                        alert.addButton({
                            text: 'If yes, then apply funds',
                            handler: function (data) {
                                console.log('Checkbox data:', data);
                                _this.testCheckboxOpen = false;
                                var dataList = [];
                                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                                    var entry = data_1[_i];
                                    var databox = entry + "";
                                    var splitted = databox.split("_");
                                    dataList.push(splitted[0]);
                                    _this.chosenToken.push(splitted[1]);
                                }
                                _this.certificateOption = dataList;
                                _this.changePrice();
                                _this.paymethodRemind();
                            }
                        });
                        return [4 /*yield*/, alert.present()];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ChoosepaymentcardformarketplacePage.prototype.paymethodRemind = function () {
        var toast = this.alertCtrl.create({
            title: "Choose Paymethod",
            message: "Which card would you like to use for this purchase?",
            buttons: ['OK']
        });
        toast.present();
    };
    ChoosepaymentcardformarketplacePage.prototype.selected = function (select) {
        console.log(select);
        if (select === "cash") {
            this.prepareItem("solo");
            var cardFake = {
                cardname: "Cash/Check",
                cardowner: "Anonym",
                cardnumber: "0",
                month: "0",
                year: "0",
                checkdigit: "0",
                icon: "Anonym",
                cash: 1
            };
            select = cardFake;
            console.log(select);
            this.selectedCard = select;
        }
        else {
            this.selectedCard = select;
            console.log(this.selectedCard);
            this.prepareItem("nosolo");
        }
    };
    ChoosepaymentcardformarketplacePage.prototype.addPoint = function (num) {
        console.log(num);
        var temp = num.toString();
        if (temp.length === 1) {
            console.log("inside Trap_______");
            temp = "0.0" + temp;
        }
        else if (temp.length === 2) {
            console.log("inside Trap_______");
            temp = "0." + temp;
        }
        else {
            var lengthnum = temp.length;
            temp = temp.substring(0, lengthnum - 2) + "." + temp.substring(lengthnum - 2, lengthnum);
        }
        var cardFake = {
            cardname: "StoreCredit",
            cardowner: "Anonym",
            cardnumber: "0",
            month: "0",
            year: "0",
            checkdigit: "0",
            icon: "Anonym",
            cash: 0
        };
        this.selectedCard = cardFake;
        return temp;
    };
    ChoosepaymentcardformarketplacePage.prototype.filter = function (value) {
        var secret = "*******";
        var endcard = value.length;
        return secret + value.substring(endcard - 3, endcard);
    };
    ChoosepaymentcardformarketplacePage.prototype.changePrice = function () {
        console.log("Test");
        this.discount = 0;
        if (this.certificateOption != null || this.certificateOption != undefined) {
            for (var _i = 0, _a = this.certificateOption; _i < _a.length; _i++) {
                var entry = _a[_i];
                console.log(entry);
                console.log("-------");
                console.log(entry.replace(/\s+/g, ''));
                var value = void 0;
                value = entry;
                this.values = [];
                this.values.push(entry.replace(/\s+/g, ''));
                this.discount += Number(entry.replace(/\s+/g, ''));
            }
        }
        console.log(this.discount);
        console.log(this.items.price);
        if (Number(this.price) < this.discount) {
            console.log("inside trap");
            this.guthaben = (this.discount - Number(this.price));
            console.log(this.guthaben);
            this.showSkip = false;
            this.price = "0.00";
        }
        else {
            this.guthaben = 0;
            console.log(this.guthaben);
            var tempPrice = (Number(this.price) - this.discount);
            this.price = tempPrice.toFixed(2);
        }
        console.log(this.discount);
    };
    ChoosepaymentcardformarketplacePage.prototype.calcFee = function (ammount) {
        return __awaiter(this, void 0, void 0, function () {
            var databasecreds, datas, value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        databasecreds = {
                            username: "merchantbackuser",
                            password: "150498AV",
                            merchantid: this.newMErchantID
                        };
                        console.log(databasecreds);
                        return [4 /*yield*/, this.autService.merchantService(databasecreds, "?getMerchantFees=" + "99")];
                    case 1:
                        datas = _a.sent();
                        //let feesForMerch = Number(this.priceTemp)*Number(datas.fees.processing_fees);
                        //this.items.price=this.addPoint(this.priceTemp)+feesForMerch;
                        console.log("this is CalcFee: " + ammount);
                        value = Number(ammount) * Number(datas.fees.processing_fees);
                        //this.price = String(Number(this.priceTemp) + Number(value));
                        console.log(value.toFixed(2));
                        this.feeForMerchant = Number(value.toFixed(2));
                        return [2 /*return*/];
                }
            });
        });
    };
    ChoosepaymentcardformarketplacePage.prototype.buyAction = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var databasecreds, datas, alert_2, loading, noPayment, feeForDB, cashFlow, databasecreds1, id, last4, databasecreds_1, discount_1, _i, _a, entry, value, newPrice_1, tempValue, messageForCustomer, confirm_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        databasecreds = {
                            username: "merchantbackuser",
                            password: "150498AV",
                            merchantid: this.items.merchantid
                        };
                        return [4 /*yield*/, this.autService.merchantService(databasecreds, "?getMerchantEnrolled=" + "99")];
                    case 1:
                        datas = _b.sent();
                        console.log("test" + datas.id);
                        if (!(datas.hit === 'failed')) return [3 /*break*/, 2];
                        alert_2 = this.toatCtrl.create({
                            message: 'This Merchant is not participating in our Freedom Choice Service',
                            duration: 3000,
                            position: 'top'
                        });
                        alert_2.present();
                        return [3 /*break*/, 5];
                    case 2:
                        console.log(this.certificateOption);
                        loading = this.loadingCtrl.create({
                            spinner: 'hide',
                            content: "Please Wait..\n      \n      <div class=\"custom-spinner-container\">\n        <div class=\"custom-spinner-box\"></div>\n      </div>"
                        });
                        console.log(this.price);
                        if (!(this.selectedCard.cardname === "StoreCredit" && this.guthaben === 0 && this.price != "0.00")) return [3 /*break*/, 3];
                        noPayment = this.alertCtrl.create({
                            title: 'Warning',
                            subTitle: 'Please choose your paymethod',
                            buttons: ['OK']
                        });
                        noPayment.present();
                        return [3 /*break*/, 5];
                    case 3:
                        feeForDB = "" + this.feeForMerchant;
                        feeForDB = feeForDB.replace(/\./g, "");
                        console.log(feeForDB);
                        console.log(this.selectedCard);
                        cashFlow = 0;
                        if (this.selectedCard != undefined && this.selectedCard.cash === 1) {
                            cashFlow = this.selectedCard.cash;
                            console.log("cashflow: " + cashFlow);
                        }
                        databasecreds1 = {
                            username: "freedom-app",
                            password: "150498AV",
                            reference: this.ref,
                            customerid: this.customerid
                        };
                        return [4 /*yield*/, this.autService.serviceTransaction(databasecreds1, "?getid=" + this.ref)];
                    case 4:
                        id = _b.sent();
                        last4 = 0;
                        if (this.selectedCard != undefined) {
                            last4 = Number(this.selectedCard.cardnumber.slice(-4));
                            if (!Number.isInteger(last4)) {
                                last4 = 4444;
                            }
                        }
                        databasecreds_1 = {
                            username: "freedom-app",
                            password: "150498AV",
                            reference: this.ref,
                            customerid: this.customerid,
                            transaction: this.items.deal,
                            cash: cashFlow,
                            id: id.id,
                            convenience_fee: feeForDB,
                            last4: last4,
                            card_type: this.selectedCard.cardname
                        };
                        discount_1 = 0;
                        if (this.certificateOption != null || this.certificateOption != undefined) {
                            for (_i = 0, _a = this.certificateOption; _i < _a.length; _i++) {
                                entry = _a[_i];
                                console.log(entry);
                                value = void 0;
                                value = entry;
                                this.values = [];
                                this.values.push(value.replace(/\s+/g, ''));
                                discount_1 += Number(value.replace(/\s+/g, ''));
                            }
                            console.log(discount_1);
                        }
                        newPrice_1 = this.price;
                        tempValue = Number(newPrice_1) * 0.06;
                        if (this.selectedCard.cardname === "Cash/Check") {
                            console.log("cash");
                            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__checkout_checkout__["a" /* CheckoutPage */], { merchant: this.items.merchantid, price: newPrice_1, item: this.items.name, deal: this.items.deal, ref: this.items.ref, selectedcard: this.selectedCard, discount: discount_1, fees: this.feeForMerchant, vaucherid: this.vaucherid, certs: this.chosenToken, guthaben: this.guthaben });
                            return [2 /*return*/];
                        }
                        else {
                            messageForCustomer = 'By clicking Agree, you hereby authorize this Merchant to add fee to total purchase price of, $'
                                + newPrice_1.toString().replace(/\s+/g, '') + ', to purchase a future discount of $' + tempValue.toFixed(2);
                            if (this.guthaben != 0) {
                                messageForCustomer += " - new value for certificate: $" + this.guthaben.toFixed(2);
                            }
                            confirm_1 = this.alertCtrl.create({
                                title: 'Do you want to buy this item?',
                                message: messageForCustomer,
                                buttons: [
                                    {
                                        text: 'Disagree',
                                        handler: function () {
                                            console.log('Disagreed clicked');
                                            var alert = _this.alertCtrl.create({
                                                title: 'Information',
                                                subTitle: 'We’re sorry you chose not to use your Freedom Choice Payment Method. Please allow the merchant to complete your transaction. ',
                                                buttons: ['OK']
                                            });
                                            alert.present();
                                        }
                                    },
                                    {
                                        text: 'Agree',
                                        handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                            return __generator(this, function (_a) {
                                                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__checkout_checkout__["a" /* CheckoutPage */], { merchant: this.items.merchantid, price: newPrice_1, item: this.items.name, deal: this.items.deal, ref: this.items.ref, selectedcard: this.selectedCard, discount: discount_1, fees: this.feeForMerchant, vaucherid: this.vaucherid, certs: this.chosenToken, guthaben: this.guthaben });
                                                return [2 /*return*/];
                                            });
                                        }); }
                                    }
                                ]
                            });
                            confirm_1.present();
                        }
                        _b.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ChoosepaymentcardformarketplacePage.prototype.cancelAction = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var databasecreds, id, databasecreds2, confirm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        databasecreds = {
                            username: "freedom-app",
                            password: "150498AV",
                            reference: this.ref,
                            customerid: this.customerid
                        };
                        return [4 /*yield*/, this.autService.serviceTransaction(databasecreds, "?getid=" + this.ref)];
                    case 1:
                        id = _a.sent();
                        databasecreds2 = {
                            username: "freedom-app",
                            password: "150498AV",
                            reference: this.ref,
                            customerid: this.customerid,
                            id: id.id
                        };
                        confirm = this.alertCtrl.create({
                            title: 'Do you want to cancel this deal?',
                            message: 'Are you sure?',
                            buttons: [
                                {
                                    text: 'Disagree',
                                    handler: function () {
                                        console.log('Disagreed clicked');
                                    }
                                },
                                {
                                    text: 'Agree',
                                    handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                        var result, confirmbuy;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    console.log("Agree clicked");
                                                    return [4 /*yield*/, this.autService.serviceTransaction(databasecreds2, "?cancel=" + id.id)];
                                                case 1:
                                                    result = _a.sent();
                                                    console.log(result);
                                                    confirmbuy = this.alertCtrl.create({
                                                        title: 'Success',
                                                        subTitle: 'You canceled this deal',
                                                        buttons: ['OK']
                                                    });
                                                    confirmbuy.present();
                                                    this.navCtrl.popToRoot();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }
                                }
                            ]
                        });
                        confirm.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    return ChoosepaymentcardformarketplacePage;
}());
ChoosepaymentcardformarketplacePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-choosepaymentcardformarketplace',template:/*ion-inline-start:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/choosepaymentcardformarketplace/choosepaymentcardformarketplace.html"*/'<ion-header>\n    \n    <ion-navbar>\n      <ion-buttons start>\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title>Choose Your Paymethod\n        <ion-icon name="cart"></ion-icon>\n      </ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding class="background">\n  \n    <div class="spacer" style="width:300px;height:25px;" id="checkout-spacer4"></div>\n    <ion-list>\n      <h2>Merchant: {{cert.merchantname}}</h2>\n  \n      <ion-note item-left> Fee for Merchant:$ {{feeForMerchant}}</ion-note>\n  \n      <ion-list>\n        <ion-item color="none">\n          <ion-thumbnail item-left>\n            <ion-avatar item-start>\n              <img [src]="cert.merchantlogo">\n            </ion-avatar>\n          </ion-thumbnail>\n          <h2>\n            Item {{items.name }}\n          </h2>\n          <span>Price:$ {{price}}</span>\n        </ion-item>\n      </ion-list>\n    </ion-list>\n  \n    <ion-note item-left> Available Cards </ion-note>\n    \n      <ion-list radio-group [(ngModel)]="selection" *ngIf="showSkip">\n        <ion-item *ngFor="let option of cardsonpage">\n          <ion-thumbnail item-start>\n            <img [src]="option.icon" style="height: 30%;">\n          </ion-thumbnail>\n          <ion-label>{{option.cardname}}, {{filter(option.cardnumber)}}</ion-label>\n          <ion-radio [value]="option" (click)="selected(option)"></ion-radio>\n        </ion-item>\n  \n        <div class="spacer" style="width:300px;height:20px;" id="checkout-spacer5"></div>      \n        <ion-note item-left> Cash/Check Option </ion-note>\n        \n        <ion-item>\n          <ion-thumbnail item-start>\n              <img src="assets/img/cashsymbol.jpg" style="height: 30%;">          \n          </ion-thumbnail>\n          <ion-label>Cash/Check</ion-label>        \n          <ion-radio value="Cash" (click)="selected(\'cash\')"></ion-radio>  \n        </ion-item>\n      </ion-list>\n  \n      \n    <div class="spacer" style="width:300px;height:47.9861px;" id="checkout-spacer5"></div>\n    <button id="checkout-button4" ion-button color="positive" block style="border-radius:-1px -1px -1px -1px;" (click)="buyAction()">\n      Next\n    </button>\n    <button id="checkout-button5" ion-button color="danger" block style="border-radius:1px 1px 1px 1px;" (click)="cancelAction()">\n      Cancel\n    </button>\n  \n  </ion-content>'/*ion-inline-end:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/choosepaymentcardformarketplace/choosepaymentcardformarketplace.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__["a" /* NativeStorage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* Api */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], ChoosepaymentcardformarketplacePage);

//# sourceMappingURL=choosepaymentcardformarketplace.js.map

/***/ })

});
//# sourceMappingURL=24.js.map