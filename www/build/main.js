webpackJsonp([38],{

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(16);
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






var CheckoutPage = (function () {
    function CheckoutPage(loadingCtrl, toatCtrl, platform, geolocation, storage, alertCtrl, autService, navCtrl, navParams) {
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
        this.itemsprice = "0.00";
        this.newMErchantID = navParams.get('merchant');
        this.price = navParams.get('price');
        this.ref = navParams.get('ref');
        this.items.ref = this.ref;
        this.selectedCard = navParams.get('selectedcard');
        this.discount = navParams.get('discount');
        this.feeForMerchant = navParams.get('fees');
        this.vaucherid = navParams.get('vaucherid');
        this.chosenToken = navParams.get('certs');
        this.guthaben = navParams.get('guthaben');
        this.itemsprice = navParams.get('itemsprice');
        console.log(navParams);
        this.items.price = navParams.get('price');
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
        this.prepareItem("nada");
        this.cardsonpage = [];
        //this.getCardsFromToken();
        //this.getCertificatesFromMerchant();
        this.merchantData();
    }
    CheckoutPage.prototype.prepareItem = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var newPrice;
            return __generator(this, function (_a) {
                console.log(this.price);
                if (param != "solo") {
                    newPrice = this.price;
                }
                else {
                    console.log(this.items.price);
                    console.log(this.discount);
                    //let ammountNew:number =Number(this.items.price) - this.discount;
                    //this.price = String(ammountNew.toFixed(2));
                    //this.feeForMerchant=0;
                }
                return [2 /*return*/];
            });
        });
    };
    CheckoutPage.prototype.merchantData = function () {
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
    CheckoutPage.prototype.filter = function (value) {
        var secret = "*******";
        var endcard = value.length;
        return secret + value.substring(endcard - 3, endcard);
    };
    CheckoutPage.prototype.createToken = function (customerid, merchantid, price) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var value, heute, tokendata, tempValue, priceForCerts, token, databasecreds, datas;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        value = price;
                        heute = new Date();
                        console.log(heute);
                        tokendata = { customerid: "3004", merchantid: "19", value: "3", date: "04.10.2017" };
                        tempValue = Number(this.feeForMerchant) * 2;
                        if (this.guthaben != 0) {
                            tempValue = Number(this.guthaben);
                        }
                        priceForCerts = tempValue.toFixed(2);
                        if (!(priceForCerts != "0.00")) return [3 /*break*/, 4];
                        console.log(tokendata);
                        return [4 /*yield*/, this.geolocation.getCurrentPosition().then(function (location) {
                                _this.lat = location.coords.latitude;
                                _this.lng = location.coords.longitude;
                            }).catch(function (err) {
                                alert(err);
                            })];
                    case 1:
                        _a.sent();
                        token = {
                            "APIKey": "bDjnJKu7ip7097Vfq46I",
                            "TokenExID": "4323829200543105",
                            "Data": heute.getFullYear() + "-" +
                                heute.getMonth() + "-" +
                                heute.getDay() + "." +
                                this.customerid + "." +
                                merchantid + "." +
                                //'44'+"."+
                                priceForCerts + "." +
                                this.lat + "." +
                                this.lng,
                            "TokenScheme": 4
                        };
                        return [4 /*yield*/, this.autService.tokenize(token, "Tokenize").then(function (response) {
                                var responses;
                                console.log(response);
                                responses = response;
                                if (responses.Success === false) {
                                    alert("error");
                                }
                                else {
                                    //alert(responses.Token);
                                    _this.token = responses.Token;
                                }
                            })];
                    case 2:
                        _a.sent();
                        databasecreds = {
                            username: "freedom-app",
                            password: "150498AV",
                            merchantid: this.items.merchantid,
                            customerid: this.customerid,
                            token: this.token,
                            reference: this.ref,
                            value: priceForCerts.replace(".", "")
                        };
                        console.log(databasecreds);
                        return [4 /*yield*/, this.autService.certificateService(databasecreds, "?addCerti=" + "99")];
                    case 3:
                        datas = _a.sent();
                        if (datas.addCerti === "success") {
                            console.log("successfully saved in Database");
                        }
                        else {
                            alert("error");
                        }
                        console.log("test" + datas);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CheckoutPage.prototype.makeid = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    CheckoutPage.prototype.buyAction = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading, noPayment, feeForDB, cashFlow, databasecreds1, id, last4, databasecreds_1, discount, _i, _a, entry, value, newPrice_1, messageForCustomer, confirm_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log(this.certificateOption);
                        loading = this.loadingCtrl.create({
                            spinner: 'hide',
                            content: "Please Wait..\n      \n      <div class=\"custom-spinner-container\">\n        <div class=\"custom-spinner-box\"></div>\n      </div>"
                        });
                        console.log(this.price);
                        if (!(this.selectedCard.cardname === "StoreCredit" && this.guthaben === 0 && this.price != "0.00")) return [3 /*break*/, 1];
                        noPayment = this.alertCtrl.create({
                            title: 'Warning',
                            subTitle: 'Please choose your paymethod',
                            buttons: ['OK']
                        });
                        noPayment.present();
                        return [3 /*break*/, 3];
                    case 1:
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
                    case 2:
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
                        discount = 0;
                        if (this.certificateOption != null || this.certificateOption != undefined) {
                            for (_i = 0, _a = this.certificateOption; _i < _a.length; _i++) {
                                entry = _a[_i];
                                console.log(entry);
                                value = void 0;
                                value = entry;
                                this.values = [];
                                this.values.push(value.replace(/\s+/g, ''));
                                discount += Number(value.replace(/\s+/g, ''));
                            }
                            console.log(discount);
                        }
                        newPrice_1 = this.price;
                        messageForCustomer = 'By clicking Agree, you hereby authorize this Merchant to add fees to total price to purchase Certificates totaling double that amount. Total: $'
                            + newPrice_1.toString().replace(/\s+/g, '') + ", fees $" + this.feeForMerchant + ', discount($' + discount.toFixed(2) + ') ';
                        if (this.guthaben != 0) {
                            messageForCustomer += " - new value for certificate: $" + this.guthaben.toFixed(2);
                        }
                        confirm_1 = this.alertCtrl.create({
                            title: 'Approval',
                            message: 'Do you want to buy this item?',
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
                                        var result, type, buyApp, buyApp_1, databasecreds_2, refer, commision, trans, param, _i, _a, value, toast, somwrong;
                                        return __generator(this, function (_b) {
                                            switch (_b.label) {
                                                case 0:
                                                    loading.present();
                                                    console.log("Agree clicked");
                                                    return [4 /*yield*/, this.autService.serviceTransaction(databasecreds_1, "?updateNew=" + this.ref)];
                                                case 1:
                                                    result = _b.sent();
                                                    console.log(result);
                                                    type = "app_payment.php?deal_id=" + this.items.deal +
                                                        "&customer_id=" + this.customerid +
                                                        "&merchant_id=" + this.items.merchantid +
                                                        "&qr_code=" + this.ref +
                                                        "&deal_amount=" + this.items.price +
                                                        "&vaucher_discount_id=" + this.vaucherid +
                                                        "&vaucher_discount_percent=6" +
                                                        "&processing_fee=" + this.feeForMerchant;
                                                    buyApp = this.autService.serviceFreedom("", type);
                                                    console.log(buyApp);
                                                    if (!(result.buy = 'success')) return [3 /*break*/, 12];
                                                    try {
                                                        buyApp_1 = this.autService.serviceFreedom("", type);
                                                        console.log(buyApp_1);
                                                    }
                                                    catch (err) {
                                                        console.log(err);
                                                    }
                                                    console.log("new Price: " + newPrice_1);
                                                    if (this.selectedCard != null) {
                                                        this.callForte();
                                                    }
                                                    databasecreds_2 = {
                                                        username: "merchantbackuser",
                                                        password: "150498AV",
                                                        merchantid: this.newMErchantID
                                                    };
                                                    return [4 /*yield*/, this.autService.merchantService(databasecreds_2, "?affiliateCommission=" + "99")];
                                                case 2:
                                                    refer = _b.sent();
                                                    console.log(refer);
                                                    if (!(refer.affiliateCommission.referer_id != 0)) return [3 /*break*/, 4];
                                                    return [4 /*yield*/, this.autService.commissionService("", "?affiliate_id=" + refer.affiliateCommission.referer_id + "&commission_type=sale_stored_payment ")];
                                                case 3:
                                                    commision = _b.sent();
                                                    console.log(commision);
                                                    _b.label = 4;
                                                case 4:
                                                    if (!(this.selectedCard.cardname != "Cash/Check")) return [3 /*break*/, 6];
                                                    return [4 /*yield*/, this.createToken(this.items.customerid, this.items.merchantid, newPrice_1)];
                                                case 5:
                                                    _b.sent();
                                                    _b.label = 6;
                                                case 6:
                                                    trans = "Card";
                                                    if (this.selectedCard.cardname === "Cash/Check") {
                                                        trans = "Cash";
                                                    }
                                                    param = "merchant_id=" + this.items.merchantid +
                                                        "&ref_no=" + this.items.ref +
                                                        "&trans_type=" + trans +
                                                        "&trans_amount=" + this.itemsprice +
                                                        "&customer_id=" + this.customerid;
                                                    //await this.createToken(this.items.customerid, this.items.merchantid, newPrice);
                                                    return [4 /*yield*/, this.autService.marketPlaceMerchantService(databasecreds_2, "recordFcTransactionFees.php?" + param)];
                                                case 7:
                                                    //await this.createToken(this.items.customerid, this.items.merchantid, newPrice);
                                                    _b.sent();
                                                    console.log(this.values);
                                                    _i = 0, _a = this.chosenToken;
                                                    _b.label = 8;
                                                case 8:
                                                    if (!(_i < _a.length)) return [3 /*break*/, 11];
                                                    value = _a[_i];
                                                    return [4 /*yield*/, this.deleteToken(value)];
                                                case 9:
                                                    _b.sent();
                                                    _b.label = 10;
                                                case 10:
                                                    _i++;
                                                    return [3 /*break*/, 8];
                                                case 11:
                                                    toast = this.toatCtrl.create({
                                                        message: " Success - You bought this new item",
                                                        duration: 3000,
                                                        position: 'top'
                                                    });
                                                    loading.dismiss();
                                                    toast.present();
                                                    return [3 /*break*/, 13];
                                                case 12:
                                                    somwrong = this.alertCtrl.create({
                                                        title: 'ERROR',
                                                        subTitle: 'Something went wrong',
                                                        buttons: ['OK']
                                                    });
                                                    somwrong.present();
                                                    _b.label = 13;
                                                case 13:
                                                    this.navCtrl.popToRoot();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }
                                }
                            ]
                        });
                        confirm_1.present();
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CheckoutPage.prototype.callForte = function () {
        return __awaiter(this, void 0, void 0, function () {
            var databasecreds, refer, token, splittedName, forteTransaction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        databasecreds = {
                            username: "merchantbackuser",
                            password: "150498AV",
                            merchantid: this.newMErchantID
                        };
                        return [4 /*yield*/, this.autService.merchantService(databasecreds, "?location_id=" + "99")];
                    case 1:
                        refer = _a.sent();
                        token = {
                            "APIKey": "bDjnJKu7ip7097Vfq46I",
                            "TokenExID": "4323829200543105",
                            "Data": "4111111111111111",
                            "TokenScheme": 1
                        };
                        splittedName = this.selectedCard.cardowner.split(" ");
                        forteTransaction = {
                            action: "sale",
                            authorization_amount: this.price,
                            subtotal_amount: this.items.price,
                            billing_address: {
                                first_name: this.selectedCard.cardowner.split(" ")[0],
                                last_name: this.selectedCard.cardowner.split(" ")[1]
                            },
                            card: {
                                card_type: this.selectedCard.cardname,
                                name_on_card: this.selectedCard.cardowner,
                                account_number: "{{{" + this.selectedCard.cardnumber + "}}}",
                                expire_month: this.selectedCard.month.replace(/\s+/g, ''),
                                expire_year: this.selectedCard.year.replace(/\s+/g, ''),
                                card_verification_value: this.selectedCard.checkdigit
                            }
                        };
                        return [4 /*yield*/, this.autService.tokenizeTrans(forteTransaction, refer.location_id.forte_loc_id).then(function (response) {
                                var responses;
                                console.log(response);
                                responses = response;
                                if (responses.Success === false) {
                                    alert("error");
                                }
                                else {
                                    //alert(responses.Token);
                                    console.log(responses.Token);
                                }
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CheckoutPage.prototype.deleteToken = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var token, databasecreds, deletion;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(value);
                        token = {
                            "APIKey": "bDjnJKu7ip7097Vfq46I",
                            "TokenExID": "4323829200543105",
                            "Token": value
                        };
                        databasecreds = {
                            username: "freedom-app",
                            password: "150498AV",
                            reference: this.ref,
                            customerid: this.customerid,
                            token: value
                        };
                        console.log(databasecreds);
                        return [4 /*yield*/, this.autService.certificateService(databasecreds, "?deleteCerti=" + "99")];
                    case 1:
                        deletion = _a.sent();
                        console.log(deletion);
                        return [2 /*return*/];
                }
            });
        });
    };
    CheckoutPage.prototype.cancelAction = function () {
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
    return CheckoutPage;
}());
CheckoutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-checkout',template:/*ion-inline-start:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/checkout/checkout.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Checkout\n      <ion-icon name="cart"></ion-icon>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="background">\n\n  <div class="spacer" style="width:300px;height:25px;" id="checkout-spacer4"></div>\n  <ion-list>\n    <h2>Merchant: {{cert.merchantname}}</h2>\n\n    <ion-note item-left> Fee for Merchant:$ {{feeForMerchant}}</ion-note>\n\n    <ion-list>\n      <ion-item color="none">\n        <ion-thumbnail item-left>\n          <ion-avatar item-start>\n            <img [src]="cert.merchantlogo">\n          </ion-avatar>\n        </ion-thumbnail>\n        <h2>\n          Item {{items.name }}\n        </h2>\n        <span>Price:$ {{price}}</span>\n      </ion-item>\n    </ion-list>\n  </ion-list>\n\n    \n  <div class="spacer" style="width:300px;height:47.9861px;" id="checkout-spacer5"></div>\n  <button id="checkout-button4" ion-button color="positive" block style="border-radius:-1px -1px -1px -1px;" (click)="buyAction()">\n    Buy\n  </button>\n  <button id="checkout-button5" ion-button color="danger" block style="border-radius:1px 1px 1px 1px;" (click)="cancelAction()">\n    Cancel\n  </button>\n\n</ion-content>'/*ion-inline-end:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/checkout/checkout.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* Api */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], CheckoutPage);

//# sourceMappingURL=checkout.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddpaymethodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(16);
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




var AddpaymethodPage = (function () {
    function AddpaymethodPage(platform, autService, storage, navCtrl, navParams) {
        this.platform = platform;
        this.autService = autService;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cards = [];
        this.tokens = [];
        this.months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        this.years = ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028",
            "2029", "2030", "2031", "2032", "2033", "2034", "2035", "2036", "2037", "2038", "2039", "2040"];
        this.cards = [];
        console.log(this.cards);
        var cardnumber = navParams.get('card');
        switch (cardnumber) {
            case 1: {
                this.iconsrc = "assets/img/americanexpress.png";
                this.cardname = "amex";
                break;
            }
            case 2: {
                this.iconsrc = "assets/img/discover.png";
                this.cardname = "disc";
                //statements; 
                break;
            }
            case 3: {
                this.iconsrc = "assets/img/mastercard.png";
                this.cardname = "mast";
                //statements; 
                break;
            }
            case 4: {
                this.iconsrc = "assets/img/visa.png";
                this.cardname = "visa";
                //statements; 
                break;
            }
            default: {
                //statements; 
                break;
            }
        }
    }
    AddpaymethodPage.prototype.addCard = function (card) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var token, failed, cardo, databasecreds, certis;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        card.icon = this.iconsrc;
                        card.cardname = this.cardname;
                        console.log(card.cardnumber);
                        token = {
                            "APIKey": "bDjnJKu7ip7097Vfq46I",
                            "TokenExID": "4323829200543105",
                            "Data": card.cardnumber,
                            "TokenScheme": 1
                        };
                        failed = "none";
                        return [4 /*yield*/, this.autService.tokenize(token, "Tokenize").then(function (response) {
                                var responses;
                                console.log(response);
                                responses = response;
                                if (responses.Success === false) {
                                    alert("Please enter correct accountnumber");
                                    failed = "failed";
                                }
                                else {
                                    //alert(responses.Token);
                                    _this.token = responses.Token;
                                }
                            })];
                    case 1:
                        _a.sent();
                        if (!(failed != "failed")) return [3 /*break*/, 6];
                        cardo = {
                            cardname: card.cardname,
                            cardowner: card.cardowner,
                            cardnumber: this.token,
                            month: card.month,
                            year: card.year,
                            checkdigit: card.checkdigit,
                            icon: card.icon
                        };
                        if (!!this.platform.is('core')) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.storage.getItem('user-id').then(function (data) {
                                if (data != null || data != undefined) {
                                    _this.customerid = data;
                                }
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.customerid = "73";
                        _a.label = 4;
                    case 4:
                        databasecreds = {
                            username: "freedom-app",
                            password: "150498AV",
                            reference: "",
                            customerid: this.customerid,
                            cardtype: card.cardname,
                            nameoncard: card.cardowner,
                            accountnumber: this.token,
                            expiremonth: card.month,
                            expireyear: card.year,
                            cvv: card.checkdigit,
                            icon: card.icon
                        };
                        console.log(databasecreds);
                        return [4 /*yield*/, this.autService.cardService(databasecreds, "?addCard=" + "99")];
                    case 5:
                        certis = _a.sent();
                        console.log(certis.result);
                        if (certis.result === "success") {
                            this.navCtrl.getPrevious();
                            this.navCtrl.popToRoot();
                        }
                        else {
                            alert("Error");
                        }
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return AddpaymethodPage;
}());
AddpaymethodPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-addpaymethod',template:/*ion-inline-start:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/addpaymethod/addpaymethod.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add A Card</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="background">\n  <form (ngSubmit)="addCard(f.value)" #f="ngForm">\n    <h1>\n      {{cardname}}\n    </h1>\n    <img [src]="iconsrc" style="width:60%; display: block; margin: 0 auto;">\n    <ion-item>\n      <ion-label color="dark" floating>\n        Card Owner\n      </ion-label>\n      <ion-input type="text" placeholder="" name="cardowner" ngModel required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="dark" floating>\n        Card Number\n      </ion-label>\n      <ion-input type="number" placeholder="" name="cardnumber" ngModel required></ion-input>\n    </ion-item>\n    <div class="spacer" style="width:300px;height:33px;"></div>\n    <div class="show-list-numbers-and-dots">\n      <p>\n        Valide From:\n      </p>\n    </div>\n    <ion-item>\n      <ion-label color="dark" floating>\n        Month\n      </ion-label>\n      <ion-select name="month" ngModel required>\n        <ion-option *ngFor="let month of months">\n          {{month}}\n        </ion-option>\n\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label color="dark" floating>\n        Year\n      </ion-label>\n      <ion-select name="year" ngModel required>\n        <ion-option *ngFor="let year of years">\n          {{year}}\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <div class="spacer" style="width:300px;height:33px;"></div>\n    <ion-item>\n      <ion-label color="dark" floating>\n        CVV/CVV2\n      </ion-label>\n      <ion-input type="number" placeholder="" name="checkdigit" ngModel required></ion-input>\n    </ion-item>\n    <button ion-button color="positive" block type="submit" [disabled]="!f.valid">\n      Add Card\n    </button>\n  </form>\n\n</ion-content>'/*ion-inline-end:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/addpaymethod/addpaymethod.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* Api */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], AddpaymethodPage);

//# sourceMappingURL=addpaymethod.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntercodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__choosepaymethod_choosepaymethod__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(16);
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






var EntercodePage = (function () {
    function EntercodePage(platform, autService, storage, toastCtrl, alertCtrl, nav, navParams) {
        this.platform = platform;
        this.autService = autService;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.nav = nav;
        this.navParams = navParams;
    }
    EntercodePage.prototype.doEnter = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var ref, databasecreds1, transaction, databasecreds, datas, alert_1;
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
                        this.customerid = "75";
                        _a.label = 3;
                    case 3:
                        console.log(value);
                        ref = value.code;
                        databasecreds1 = {
                            username: "freedom-app",
                            password: "150498AV",
                            reference: ref,
                            customerid: this.customerid
                        };
                        return [4 /*yield*/, this.autService.serviceTransaction(databasecreds1, "?getid=" + ref)];
                    case 4:
                        transaction = _a.sent();
                        databasecreds = {
                            username: "merchantbackuser",
                            password: "150498AV",
                            merchantid: transaction.merchant_id
                        };
                        console.log(databasecreds);
                        return [4 /*yield*/, this.autService.merchantService(databasecreds, "?getMerchantEnrolled=" + "99")];
                    case 5:
                        datas = _a.sent();
                        console.log("test" + datas.id);
                        if (datas.hit === 'failed') {
                            alert_1 = this.toastCtrl.create({
                                message: 'This Merchant is not participating in our Freedom Choice Service',
                                duration: 3000,
                                position: 'top'
                            });
                            alert_1.present();
                            //this.nav.popToRoot();
                        }
                        else {
                            this.nav.push(__WEBPACK_IMPORTED_MODULE_2__choosepaymethod_choosepaymethod__["a" /* ChoosepaymethodPage */], { merchant: transaction.merchant_id,
                                price: transaction.value,
                                ref: ref });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return EntercodePage;
}());
EntercodePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-entercode',template:/*ion-inline-start:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/entercode/entercode.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Enter Code</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="background">\n\n  <form (ngSubmit)="doEnter(f.value)" #f="ngForm">\n    <div style="margin-left:-10px;width:calc(100% + 20px);">\n      <img src="assets/img/screenplay.png" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n    </div>\n    <ion-label>\n      Enter Code here\n    </ion-label>\n    <ion-list>\n      <ion-item class="text">\n        <ion-label>\n          Code\n        </ion-label>\n        <ion-input type="text" placeholder="" name="code" ngModel></ion-input>\n      </ion-item>\n    </ion-list>\n    <div class="spacer" style="height:40px;"></div>\n    <button ion-button color="assertive" block>\n      ENTER\n    </button>\n\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/entercode/entercode.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* Api */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], EntercodePage);

//# sourceMappingURL=entercode.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tutorial2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(61);
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




var Tutorial2Page = (function () {
    function Tutorial2Page(navCtrl, nativeStorage, menu, translate, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.nativeStorage = nativeStorage;
        this.menu = menu;
        this.platform = platform;
        this.showSkip = true;
        this.dir = 'ltr';
        this.dir = platform.dir();
        translate.get(["TUTORIAL_SLIDE1_TITLE",
            "TUTORIAL_SLIDE1_DESCRIPTION",
            "TUTORIAL_SLIDE2_TITLE",
            "TUTORIAL_SLIDE2_DESCRIPTION",
            "TUTORIAL_SLIDE3_TITLE",
            "TUTORIAL_SLIDE3_DESCRIPTION",
        ]).subscribe(function (values) {
            console.log('Loaded values', values);
            _this.slides = [
                {
                    title: "My Cards",
                    description: "To add a credit or debit card to your Freedom Choice Customer App, simply click Add A Card, and complete the necessary fields. If you mess up, don’t worry, your card information will not be stored until you select to Save It. /n To delete a credit or debit card, simply select the card you desire to delete, and select Delete. This card and all other card information will be removed. However, the transactions made with the deleted payment type will still remain in your Transaction History. ",
                    image: '',
                },
                {
                    title: "My Store Credits",
                    description: "The Freedom Choice Customer App allows you to earn valuable Store Credit at your favorite locally-owned businesses, and this is where they are stored.  To use this section, simply click on Take Me To My Store Credits, and scroll through. ",
                    image: '',
                },
                {
                    title: "My Transactions",
                    description: "When making payments with your Freedom Choice Customer App, you will find each and every transaction, and the transaction details neatly in this section. To find a transaction, simply scroll through the Recent Transactions or you can use the filters to find just what you are looking for. ",
                    image: '',
                },
                {
                    title: "Scanning The Merchant ID",
                    description: "To make a payment with your Freedom Choice App, simply scan the QR Code or Enter the ID number located underneath the QR Code at each participating location.",
                    image: '',
                },
                {
                    title: "Visit Marketplace",
                    description: "If you are looking for Deals, Better Deals, or Additional Store Credit from your favorite businesses, go to our Marketplace and get up to 60% off on certificates that will add Store Credit to your Wallet. /n To add Store Credit simply login to the Marketplace, search for Deals, Click, Buy, and Add. It’s too easy. ",
                    image: '',
                },
                {
                    title: "Find Merchant",
                    description: "To find a participating business, simply select the Find Merchant tab, enter the city, state, zip code, or select Find Merchants Near Me, and the app will do the rest. /n Are you looking for a specific business type, (retail, restaurant, or service), use the filters to maximize your search results. ",
                    image: '',
                }
            ];
        });
    }
    Tutorial2Page.prototype.startApp = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.navCtrl.setRoot('MenuPage', {}, {
                    animate: true,
                    direction: 'forward'
                });
                return [2 /*return*/];
            });
        });
    };
    Tutorial2Page.prototype.skip = function () {
        this.navCtrl.setRoot('MenuPage', {}, {
            animate: true,
            direction: 'forward'
        });
    };
    Tutorial2Page.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd();
    };
    Tutorial2Page.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menu.enable(false);
    };
    Tutorial2Page.prototype.ionViewWillLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    };
    return Tutorial2Page;
}());
Tutorial2Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tutorial2',template:/*ion-inline-start:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/tutorial2/tutorial2.html"*/'<ion-header>\n  \n    <ion-navbar>\n      <ion-title>Tutorial</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n\n<ion-content padding class="background">\n  <ion-slides pager="true" dir="{{dir}}" (ionSlideWillChange)="onSlideChangeStart($event)">\n    <ion-slide *ngFor="let slide of slides">\n      <img [src]="slide.image" class="slide-image" />\n      <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n      <p [innerHTML]="slide.description"></p>\n    </ion-slide>\n    <ion-slide>\n\n      <h2 class="slide-title">Refer A Friend</h2>\n      <p>If you have elected to be one of our Valued Affiliates, then you can easily refer a friend, family member, or even a business owner to use the Freedom Choice Payment and Rewards Platform. \n        To sign up a friend, family member, or business owner, all you have to do is select the Give Someone The Bird link, enter their email address, and click send. \n        It’s too easy. When your referral Accepts the Bird you have given them, then you will get a notification telling you about their Acceptance.  </p>\n\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/tutorial2/tutorial2.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
], Tutorial2Page);

//# sourceMappingURL=tutorial2.js.map

/***/ }),

/***/ 133:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 133;

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_base64__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Api is a generic REST Api handler. Set your API url first.
 */
var Api = (function () {
    function Api(http, httpclient, base64) {
        this.http = http;
        this.httpclient = httpclient;
        this.base64 = base64;
        this.url = 'https://example.com/api/v1';
        this.tokenex = "https://test-api.tokenex.com/TokenServices.svc/REST/";
        this.marketplacepointsApi = "http://173.212.238.108/api/marketplace.php";
        this.transactioApi = "http://173.212.238.108/api/freedomchoice.php";
        //transactioApi = "https://cashlessexchange-sb.com/cashlessexchangeaffiliate/api/freedomchoiceforte/freedomchoice.php";
        this.cardServiceApi = "http://173.212.238.108/api/card_service.php";
        //cardServiceApi = "https://cashlessexchange-sb.com/cashlessexchangeaffiliate/api/freedomchoiceforte/card_service.php";
        //certServiceApi = "https://cashlessexchange-sb.com/cashlessexchangeaffiliate/api/freedomchoiceforte/cert_service.php";
        this.certServiceApi = "http://173.212.238.108/api/cert_service.php";
        this.merchantServiceApi = "http://173.212.238.108/api/merchant_fees.php";
        //merchantServiceApi = "https://cashlessexchange-sb.com/cashlessexchangeaffiliate/api/freedomchoiceforte/merchant_fees.php";
        //affiliateApi= "https://cashlessexchange-sb.com/cashlessexchangeaffiliate/api/affiliate_freedomchoice_commission.php";
        this.affiliateApi = "http://173.212.238.108/api/affiliate_freedomchoice_commission.php";
        //refermailApi = "https://cashlessexchange-sb.com/cashlessexchangeaffiliate/api/affiliate_freedomchoice_referralmail.php";
        this.refermailApi = "http://173.212.238.108/api/affiliate_freedomchoice_referralmail.php";
        this.registerAffiliateApi = "https://cashlessexchange-sb.com/cashlessexchangeaffiliate/api/affiliate_freedomchoice_registercustomerasaffiliate.php";
        //registerAffiliateApi = "http://173.212.238.108/api/affiliate_freedomchoice_registercustomerasaffiliate.php";
        this.freedomApi = "http://cashlessexchange-sb.com/marketplace/webservices/";
        this.freedomTemp = "http://173.212.238.108/api/";
        this.googleMapsApi = "https://maps.googleapis.com/maps/api/geocode/json?address=";
        this.marketPlaceApi = "http://www.cashlessexchange-sb.com/cashlessmerchant/api/marketplace/";
        this.marketPlaceMerchantApi = "http://www.cashlessexchange-sb.com/cashlessmerchant/api/merchant/";
    }
    Api.prototype.serviceFreedom = function (credentials, type) {
        var _this = this;
        var response;
        return new Promise(function (resolve) {
            _this.http.post(_this.freedomTemp + type, "")
                .map(function (res) { return res; }).subscribe(function (data) {
                data;
                console.log(response);
                resolve(data);
            });
        });
    };
    Api.prototype.marketplacepointservice = function (credentials, type) {
        var _this = this;
        console.log("in service" + type);
        var response;
        return new Promise(function (resolve) {
            _this.http.post(_this.marketplacepointsApi + type, JSON.stringify(credentials))
                .map(function (res) { return res; }).subscribe(function (data) {
                data;
                console.log(response);
                resolve(data);
            });
        });
    };
    Api.prototype.marketPlaceMerchantService = function (credentials, type) {
        var _this = this;
        console.log("in service" + type);
        var response;
        return new Promise(function (resolve) {
            _this.http.post(_this.marketPlaceMerchantApi + type, JSON.stringify(credentials))
                .map(function (res) { return res; }).subscribe(function (data) {
                data;
                console.log(response);
                resolve(data);
            });
        });
    };
    Api.prototype.marketPlaceService = function (credentials, type) {
        var _this = this;
        console.log("in service" + type);
        var response;
        return new Promise(function (resolve) {
            _this.http.post(_this.marketPlaceApi + type, JSON.stringify(credentials))
                .map(function (res) { return res; }).subscribe(function (data) {
                data;
                console.log(response);
                resolve(data);
            });
        });
    };
    Api.prototype.serviceTransaction = function (credentials, type) {
        var _this = this;
        console.log("in service" + type);
        var response;
        return new Promise(function (resolve) {
            _this.http.post(_this.transactioApi + type, JSON.stringify(credentials))
                .map(function (res) { return res; }).subscribe(function (data) {
                data;
                console.log(response);
                resolve(data);
            });
        });
    };
    Api.prototype.cardService = function (credentials, type) {
        var _this = this;
        console.log("in service" + type);
        var response;
        return new Promise(function (resolve) {
            _this.http.post(_this.cardServiceApi + type, JSON.stringify(credentials))
                .map(function (res) { return res; }).subscribe(function (data) {
                data;
                console.log(response);
                resolve(data);
            });
        });
    };
    Api.prototype.certificateService = function (credentials, type) {
        var _this = this;
        console.log("in service" + type);
        var response;
        return new Promise(function (resolve) {
            _this.http.post(_this.certServiceApi + type, JSON.stringify(credentials))
                .map(function (res) { return res; }).subscribe(function (data) {
                data;
                console.log(response);
                resolve(data);
            });
        });
    };
    Api.prototype.commissionService = function (credentials, type) {
        var _this = this;
        console.log("in service" + type);
        var response;
        return new Promise(function (resolve) {
            _this.http.post(_this.affiliateApi + type, "")
                .subscribe(function (data) {
                data;
                console.log(response);
                resolve(data);
            });
        });
    };
    Api.prototype.referralMailAlt = function (credentials, type) {
        var _this = this;
        console.log("in service" + type);
        var response;
        return new Promise(function (resolve) {
            _this.http.post(_this.refermailApi + type, "")
                .map(function (res) { return res; }).subscribe(function (data) {
                data;
                resolve(data);
            });
        });
    };
    Api.prototype.referralMail = function (credentials, type) {
        return this.http.post(this.refermailApi + type, "");
    };
    Api.prototype.registerAffiliate = function (credentials, type) {
        return this.http.post(this.registerAffiliateApi + type, "");
    };
    Api.prototype.registerAffiliateAlt = function (credentials, type) {
        var _this = this;
        console.log("in service" + type);
        var response;
        return new Promise(function (resolve) {
            _this.http.post(_this.registerAffiliateApi + type, "")
                .map(function (res) { return res; }).subscribe(function (data) {
                data;
                resolve(data);
            });
        });
    };
    Api.prototype.registrate = function (credentials, type) {
        return this.http.post(this.freedomTemp + type, "");
    };
    Api.prototype.merchantService = function (credentials, type) {
        var _this = this;
        console.log("in service" + type);
        var response;
        return new Promise(function (resolve) {
            _this.http.post(_this.merchantServiceApi + type, JSON.stringify(credentials))
                .map(function (res) { return res; }).subscribe(function (data) {
                data;
                console.log(response);
                resolve(data);
            });
        });
    };
    Api.prototype.tokenize = function (credentials, type) {
        var _this = this;
        var response;
        //type = Tokenize
        return new Promise(function (resolve) {
            _this.http.post(_this.tokenex + type, credentials)
                .map(function (res) { return res; }).subscribe(function (data) {
                response = data;
                console.log(response);
                resolve(data);
            });
        });
    };
    Api.prototype.tokenizeTrans = function (credentials, type) {
        var _this = this;
        var response;
        //type = Tokenize
        return new Promise(function (resolve) {
            _this.http.post("https://cashlessexchange-sb.com/cashlessexchangeaffiliate/api/freedomchoiceforte/tokenexForte.php?merchantid=" + type, credentials)
                .map(function (res) { return res; }).subscribe(function (data) {
                response = data;
                console.log(response);
                resolve(data);
            });
        });
    };
    Api.prototype.googleAPI = function (credentials) {
        var _this = this;
        var type = "&key=AIzaSyBgHHxQ2g5AWCI6jKqPPMHr_ob8RuLSTbI";
        console.log("in service" + credentials);
        var response;
        return new Promise(function (resolve) {
            _this.http.get(_this.googleMapsApi + credentials + type)
                .map(function (res) { return res; }).subscribe(function (data) {
                data;
                console.log(response);
                resolve(data);
            });
        });
    };
    Api.prototype.get = function (endpoint, params, reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]()
            };
        }
        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]();
            for (var k in params) {
                reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.post = function (endpoint, body, reqOpts) {
        return this.http.post(this.freedomApi + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.put = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.delete = function (endpoint, reqOpts) {
        return this.http.delete(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.patch = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    return Api;
}());
Api = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_base64__["a" /* Base64 */]])
], Api);

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addpaymethod/addpaymethod.module": [
		450,
		37
	],
	"../pages/cards/cards.module": [
		451,
		36
	],
	"../pages/category/category.module": [
		452,
		25
	],
	"../pages/certificate/certificate.module": [
		453,
		35
	],
	"../pages/checkout/checkout.module": [
		454,
		34
	],
	"../pages/choosepaymentcardformarketplace/choosepaymentcardformarketplace.module": [
		455,
		24
	],
	"../pages/choosepaymethod/choosepaymethod.module": [
		456,
		33
	],
	"../pages/content/content.module": [
		458,
		23
	],
	"../pages/coupons/coupons.module": [
		457,
		32
	],
	"../pages/editcard/editcard.module": [
		459,
		31
	],
	"../pages/entercode/entercode.module": [
		460,
		30
	],
	"../pages/home/home.module": [
		461,
		22
	],
	"../pages/item-create/item-create.module": [
		462,
		21
	],
	"../pages/item-detail/item-detail.module": [
		463,
		20
	],
	"../pages/list-master/list-master.module": [
		464,
		19
	],
	"../pages/login/login.module": [
		465,
		18
	],
	"../pages/marketplace/marketplace.module": [
		466,
		29
	],
	"../pages/marketplacetransaction/marketplacetransaction.module": [
		467,
		17
	],
	"../pages/menu/menu.module": [
		468,
		28
	],
	"../pages/password/password.module": [
		469,
		16
	],
	"../pages/paymethods/paymethods.module": [
		471,
		15
	],
	"../pages/points/points.module": [
		470,
		14
	],
	"../pages/pricevalue/pricevalue.module": [
		472,
		27
	],
	"../pages/referal/referal.module": [
		473,
		13
	],
	"../pages/registeraffiliate/registeraffiliate.module": [
		474,
		12
	],
	"../pages/search/search.module": [
		485,
		11
	],
	"../pages/settings/settings.module": [
		475,
		10
	],
	"../pages/signup/signup.module": [
		476,
		9
	],
	"../pages/signup2/signup2.module": [
		477,
		8
	],
	"../pages/signup3/signup3.module": [
		478,
		7
	],
	"../pages/signupsum/signupsum.module": [
		479,
		6
	],
	"../pages/signupsumnocard/signupsumnocard.module": [
		480,
		5
	],
	"../pages/special/special.module": [
		481,
		4
	],
	"../pages/tabs/tabs.module": [
		482,
		3
	],
	"../pages/transactions/transactions.module": [
		483,
		2
	],
	"../pages/tutorial/tutorial.module": [
		484,
		1
	],
	"../pages/tutorial2/tutorial2.module": [
		486,
		26
	],
	"../pages/welcome/welcome.module": [
		487,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 182;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Items; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_item__ = __webpack_require__(427);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Items = (function () {
    function Items() {
        this.items = [];
        this.defaultItem = {
            "name": "Burt Bear",
            "profilePic": "assets/img/speakers/bear.jpg",
            "about": "Burt is a Bear.",
        };
        var items = [
            {
                "name": "Burt Bear",
                "profilePic": "assets/img/speakers/bear.jpg",
                "about": "Burt is a Bear."
            },
            {
                "name": "Charlie Cheetah",
                "profilePic": "assets/img/speakers/cheetah.jpg",
                "about": "Charlie is a Cheetah."
            },
            {
                "name": "Donald Duck",
                "profilePic": "assets/img/speakers/duck.jpg",
                "about": "Donald is a Duck."
            },
            {
                "name": "Eva Eagle",
                "profilePic": "assets/img/speakers/eagle.jpg",
                "about": "Eva is an Eagle."
            },
            {
                "name": "Ellie Elephant",
                "profilePic": "assets/img/speakers/elephant.jpg",
                "about": "Ellie is an Elephant."
            },
            {
                "name": "Molly Mouse",
                "profilePic": "assets/img/speakers/mouse.jpg",
                "about": "Molly is a Mouse."
            },
            {
                "name": "Paul Puppy",
                "profilePic": "assets/img/speakers/puppy.jpg",
                "about": "Paul is a Puppy."
            }
        ];
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            this.items.push(new __WEBPACK_IMPORTED_MODULE_1__models_item__["a" /* Item */](item));
        }
    }
    Items.prototype.query = function (params) {
        if (!params) {
            return this.items;
        }
        return this.items.filter(function (item) {
            for (var key in params) {
                var field = item[key];
                if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
                    return item;
                }
                else if (field == params[key]) {
                    return item;
                }
            }
            return null;
        });
    };
    Items.prototype.add = function (item) {
        this.items.push(item);
    };
    Items.prototype.delete = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    return Items;
}());
Items = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], Items);

//# sourceMappingURL=items.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstRunPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MainPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Tab1Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Tab2Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Tab3Root; });
// The page the user lands on after opening the app and without a session
// The page the user lands on after opening the app and without a session
var FirstRunPage = 'TutorialPage';
// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
var MainPage = 'LoginPage';
// The initial root pages for our tabs (remove if not using tabs)
var Tab1Root = 'ListMasterPage';
var Tab2Root = 'SearchPage';
var Tab3Root = 'SettingsPage';
//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addpaymethod_addpaymethod__ = __webpack_require__(122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CardsPage = (function () {
    function CardsPage(nav, navParams) {
        this.nav = nav;
        this.navParams = navParams;
    }
    CardsPage.prototype.cardSelected = function (cardnumber) {
        console.log(cardnumber);
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__addpaymethod_addpaymethod__["a" /* AddpaymethodPage */], { card: cardnumber });
    };
    return CardsPage;
}());
CardsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cards',template:/*ion-inline-start:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/cards/cards.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Credit Cards</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="background">\n  <ion-list unset>\n    <ion-item class="item item-trns" (click)="cardSelected(1)">American Express\n      <ion-thumbnail item-start>\n        <img src="assets/img/americanexpress.png" style="height: 30%;">\n      </ion-thumbnail>\n\n    </ion-item>\n\n    <ion-item class="item item-trns" (click)="cardSelected(2)">Discover\n      <ion-thumbnail item-start>\n        <img src="assets/img/discover.png" style="height: 30%;">\n      </ion-thumbnail>\n\n    </ion-item>\n\n\n    <ion-item class="item item-trns" (click)="cardSelected(3)">Mastercard\n      <ion-thumbnail item-start>\n        <img src="assets/img/mastercard.png" style="height: 30%;">\n      </ion-thumbnail>\n\n    </ion-item>\n\n\n    <ion-item class="item item-trns" (click)="cardSelected(4)">Visa\n      <ion-thumbnail item-start>\n        <img src="assets/img/visa.png" style="height: 30%;">\n      </ion-thumbnail>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/cards/cards.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], CardsPage);

//# sourceMappingURL=cards.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketplacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_fingerprint_aio__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment_timezone__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment_timezone__);
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
 * Generated class for the MarketplacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MarketplacePage = (function () {
    function MarketplacePage(navCtrl, navParams, toatCtrl, storage, fingerprint, api, platform, alertcontroller) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toatCtrl = toatCtrl;
        this.storage = storage;
        this.fingerprint = fingerprint;
        this.api = api;
        this.platform = platform;
        this.alertcontroller = alertcontroller;
        this.total = 0;
        //private amounts:number[]=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
        this.amounts = [];
        this.cardsonpage = [];
        this.tokens = [];
        this.marketplaceInfo = false;
        this.logo = "assets/img/shop_merchant.png";
        this.lat = 0;
        this.lng = 0;
        this.merchantloaded = false;
        this.specialDiscount = 0;
        this.normalDiscountPrice = 0;
        this.additionalDiscount = 0;
        this.paidPrice = 0;
        this.showMap = false;
        this.item = this.navParams.get('item');
        console.log(this.item);
        this.total = 0;
        this.getCardsFromToken();
        for (var _i = 0, _a = this.item.available_quantity; _i < _a.length; _i++) {
            var entry = _a[_i];
            console.log(entry); // 1, "string", false
        }
        var i;
        for (i = 1; i <= this.item.available_quantity; i++) {
            this.amounts.push(i);
        }
    }
    MarketplacePage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var databasecreds, currentUnixTime, param, order, item, temp01;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('ionViewDidLoad MarketplacePage');
                        if (!this.platform.is('core')) {
                            this.storage.getItem('user-id').then(function (data) {
                                if (data != null || data != undefined) {
                                    _this.customerid = data;
                                }
                            });
                        }
                        else {
                            this.customerid = "40";
                        }
                        databasecreds = {
                            username: "username",
                            password: "test",
                        };
                        currentUnixTime = __WEBPACK_IMPORTED_MODULE_5_moment_timezone__().tz("America/New_York").unix();
                        param = "&customer_id=" + this.customerid +
                            "&timestamp=" + currentUnixTime;
                        return [4 /*yield*/, this.api.marketPlaceService(databasecreds, "getMonthlyAdditionalDiscountForCustomer.php?" + param)];
                    case 1:
                        order = _a.sent();
                        console.log(order);
                        item = this.navParams.get('item');
                        console.log(item);
                        if (item.topay_merchant === "1") {
                            this.specialDiscount = order.additional_discount;
                            this.marketplaceInfo = true;
                        }
                        else {
                            this.specialDiscount = 0;
                        }
                        temp01 = this.item.selling_price - (this.item.selling_price / 100 * this.specialDiscount);
                        this.paidPrice = Number(temp01.toFixed(2));
                        console.log("special Price: " + temp01);
                        this.merchantData();
                        return [2 /*return*/];
                }
            });
        });
    };
    MarketplacePage.prototype.onChange = function (value) {
        console.log(value);
        var sum = this.item.selling_price * value;
        //let discountSpecial:any = this.checkDiscount();
        console.log(this.specialDiscount);
        var temp = Number(sum.toFixed(2)) / 100 * this.specialDiscount;
        this.normalDiscountPrice = Number(sum.toFixed(2));
        //discountSpecial.additional_discount;
        var sum2 = Number(sum.toFixed(2)) - Number(temp.toFixed(2));
        console.log(this.item.selling_price);
        console.log(this.normalDiscountPrice);
        console.log(sum2.toFixed(2));
        this.total = Number(sum2.toFixed(2));
    };
    MarketplacePage.prototype.showmaps = function () {
        this.showMap = !this.showMap;
    };
    MarketplacePage.prototype.makeid = function () {
        var text = "";
        var possible = "0123456789";
        for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    MarketplacePage.prototype.buyItem = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert1, alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.amount === undefined || this.selectedCard === undefined) {
                            alert1 = this.alertcontroller.create({
                                title: 'Attention',
                                subTitle: 'Please choose your amount or your paymentcard',
                                buttons: ['OK']
                            });
                            alert1.present();
                            return [2 /*return*/];
                        }
                        console.log(this.item);
                        alert = this.alertcontroller.create({
                            title: 'Information',
                            subTitle: 'Do you want to buy this Coupon?',
                            buttons: [
                                {
                                    text: 'Disagree',
                                    handler: function () {
                                        console.log('Disagree clicked');
                                        //this.selected('cash');
                                        //this.loadCards();
                                    }
                                },
                                {
                                    text: 'Agree',
                                    handler: function () {
                                        console.log('Agree clicked');
                                        //this.orderItem();
                                        if (!_this.platform.is('core')) {
                                            _this.fingerprintPayment();
                                        }
                                        else {
                                            _this.payDeal();
                                        }
                                    }
                                }
                            ]
                        });
                        return [4 /*yield*/, alert.present()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MarketplacePage.prototype.initMap = function () {
        return __awaiter(this, void 0, void 0, function () {
            var latLng, googleObj, positionByGoogle, marker, mapOptions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        latLng = new google.maps.LatLng(this.lat, this.lng);
                        return [4 /*yield*/, this.api.googleAPI(this.merchant.address)];
                    case 1:
                        googleObj = _a.sent();
                        if (googleObj != undefined) {
                            console.log(googleObj.results[0].geometry.location);
                            positionByGoogle = googleObj.results[0].geometry.location;
                            latLng = new google.maps.LatLng(positionByGoogle.lat, positionByGoogle.lng);
                        }
                        marker = {
                            position: latLng,
                            title: this.merchantData.name
                        };
                        mapOptions = {
                            center: latLng,
                            zoom: 19,
                            mapTypeId: google.maps.MapTypeId.ROADMAP,
                            marker: marker
                        };
                        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
                        this.map = this.addMarker(latLng, this.map);
                        return [2 /*return*/];
                }
            });
        });
    };
    MarketplacePage.prototype.addMarker = function (position, map) {
        return new google.maps.Marker({
            position: position,
            map: map
        });
    };
    MarketplacePage.prototype.fingerprintPayment = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fingerprint.isAvailable().then(function (result) {
                            _this.fingerprint.show({
                                clientId: "freedom-choice",
                                clientSecret: "password",
                                localizedReason: "please authenticate"
                            }).then(function (result) {
                                _this.payDeal();
                            }).catch(function (err) {
                                console.log(err);
                            });
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MarketplacePage.prototype.merchantData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var databasecreds, merchantdata, logo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        databasecreds = {
                            username: "merchantbackuser",
                            password: "150498AV",
                            reference: "",
                            customerid: this.customerid,
                            token: "",
                            id: this.item.redeeming_merchant
                        };
                        console.log(databasecreds);
                        return [4 /*yield*/, this.api.serviceTransaction(databasecreds, "?getMerchant=" + "99")];
                    case 1:
                        merchantdata = _a.sent();
                        logo = this.logo;
                        if (merchantdata.logo.length != 0) {
                            this.logo = merchantdata.logo;
                        }
                        this.merchantloaded = true;
                        this.merchant = {
                            name: merchantdata.name,
                            logo: logo,
                            address: merchantdata.address,
                            mail: merchantdata.mail
                        };
                        this.initMap();
                        return [2 /*return*/];
                }
            });
        });
    };
    MarketplacePage.prototype.getCardsFromToken = function () {
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
                        return [2 /*return*/];
                }
            });
        });
    };
    MarketplacePage.prototype.loadCards = function () {
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
                            customerid: this.customerid,
                            token: ""
                        };
                        console.log(databasecreds);
                        return [4 /*yield*/, this.api.cardService(databasecreds, "?getCards=" + "99")];
                    case 4:
                        certis = _a.sent();
                        console.log(certis.results);
                        this.tokens = certis.results;
                        return [2 /*return*/];
                }
            });
        });
    };
    MarketplacePage.prototype.filter = function (value) {
        var secret = "*******";
        var endcard = value.length;
        return secret + value.substring(endcard - 3, endcard);
    };
    MarketplacePage.prototype.selected = function (select) {
        console.log(select);
        this.selectedCard = select;
        console.log(this.selectedCard);
    };
    MarketplacePage.prototype.payDeal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var databasecreds, refer, token, splittedName, forteTransaction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        databasecreds = {
                            username: "merchantbackuser",
                            password: "150498AV",
                            merchantid: this.item.redeeming_merchant
                        };
                        return [4 /*yield*/, this.api.merchantService(databasecreds, "?location_id=" + "99")];
                    case 1:
                        refer = _a.sent();
                        token = {
                            "APIKey": "bDjnJKu7ip7097Vfq46I",
                            "TokenExID": "4323829200543105",
                            "Data": "4111111111111111",
                            "TokenScheme": 1
                        };
                        splittedName = this.selectedCard.cardowner.split(" ");
                        forteTransaction = {
                            action: "sale",
                            authorization_amount: this.total,
                            subtotal_amount: this.item.selling_price,
                            billing_address: {
                                first_name: this.selectedCard.cardowner.split(" ")[0],
                                last_name: this.selectedCard.cardowner.split(" ")[1]
                            },
                            card: {
                                card_type: this.selectedCard.cardname,
                                name_on_card: this.selectedCard.cardowner,
                                account_number: "{{{" + this.selectedCard.cardnumber + "}}}",
                                expire_month: this.selectedCard.month.replace(/\s+/g, ''),
                                expire_year: this.selectedCard.year.replace(/\s+/g, ''),
                                card_verification_value: this.selectedCard.checkdigit
                            }
                        };
                        return [4 /*yield*/, this.api.tokenizeTrans(forteTransaction, refer.location_id.forte_loc_id).then(function (response) {
                                var responses;
                                console.log(response);
                                responses = response;
                                if (responses.Success === false) {
                                    //alert("error");
                                    var alert_1 = _this.alertcontroller.create({
                                        title: 'Warning',
                                        //subTitle: responses.response.response_desc,
                                        subTitle: 'Please Check your Credit Card Information.',
                                        buttons: ['OK']
                                    });
                                    alert_1.present();
                                    return;
                                }
                                else {
                                    //alert(responses.Token);
                                    console.log(responses.Token);
                                    var databasecreds_1 = {
                                        username: "username",
                                        password: "test",
                                    };
                                    var orderID = _this.makeid();
                                    var param = "order_id=" + orderID +
                                        "&customer_id=" + _this.customerid +
                                        "&total_amount=" + _this.total +
                                        "&paid_amount=" + _this.paidPrice +
                                        "&status=1" +
                                        "&payment_mode=card" +
                                        "&card_type=" + _this.selectedCard.cardname +
                                        "&card_last_4=4444";
                                    var order = _this.api.marketPlaceService(databasecreds_1, "saveOrderDetails.php?" + param);
                                    console.log(order);
                                    var param1 = "order_id=" + orderID +
                                        "&customer_id=" + _this.customerid +
                                        "&redeeming_merchant=" + _this.item.redeeming_merchant +
                                        "&topay_merchant=" + _this.item.topay_merchant +
                                        "&deal_id=" + _this.item.deal_id +
                                        "&quantity_purchased=" + _this.amount +
                                        "&denomination=" + _this.item.deal_value +
                                        "&discount=" + _this.item.discount_offered +
                                        "&additional_discount=" + _this.specialDiscount +
                                        "&discounted_amount=" + _this.item.discounted_value +
                                        "&paid_price=" + _this.paidPrice;
                                    var coupon = _this.api.marketPlaceService(databasecreds_1, "generateCouponsForOrders.php?" + param1);
                                    _this.amount = 0;
                                    _this.navCtrl.popToRoot();
                                    var toast = _this.toatCtrl.create({
                                        message: " Success - You bought this deal",
                                        duration: 3000,
                                        position: 'top'
                                    });
                                    toast.present();
                                }
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MarketplacePage.prototype.last4 = function (value) {
        var secret;
        var endcard = value.length;
        return secret + value.substring(endcard - 4, endcard);
    };
    return MarketplacePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('map'),
    __metadata("design:type", Object)
], MarketplacePage.prototype, "mapElement", void 0);
MarketplacePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-marketplace',template:/*ion-inline-start:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/marketplace/marketplace.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Deal</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="background">\n\n\n      <ion-card no-lines block>\n        <img [src]="item.deal_image">\n        <ion-card-content>\n          <ion-card-title>\n            {{ item.deal_title }}\n            </ion-card-title>\n            <p>{{item.deal_description}}</p>\n            <p>{{item.deal_terms}}</p>\n\n            <ion-item>\n                <h1 item-end><s>$ {{item.deal_value}}</s></h1>\n              </ion-item>\n              <ion-item >\n                <h2 *ngIf="marketplaceInfo === true" item-end> {{specialDiscount}}%</h2>\n\n              </ion-item>\n              <ion-item>\n                <ion-icon name=\'pricetag\' item-end ></ion-icon>\n                <h1 item-end style="color: #0bdd1d">$ {{paidPrice}}</h1>\n              </ion-item>\n              <br/>\n              <ion-item no-lines>\n                <ion-label color="dark" fixed>Amount</ion-label>        \n            <ion-select  [(ngModel)]="amount" (ionChange)="onChange($event)">\n                <ion-option *ngFor="let f of amounts" value="{{ f }}">{{ f }}</ion-option>\n            </ion-select>\n            </ion-item>\n        \n            <ion-item no-lines>\n                <ion-label color="dark" fixed>Price Total</ion-label>        \n                <ion-input [(ngModel)]="total" ></ion-input>\n            </ion-item>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card *ngIf="merchantloaded === true">\n\n        <ion-item>\n          <ion-avatar item-start>\n            <img [src]="logo">\n          </ion-avatar>\n          <h2>Merchant: {{merchant.name}}</h2>\n          <p>{{merchant.address}}</p>\n        </ion-item>  \n        <a href="#map">View location</a>\n        <br/>\n      </ion-card>\n\n\n\n      <ion-list radio-group [(ngModel)]="selection" >\n      <ion-item *ngFor="let option of cardsonpage">\n          <ion-thumbnail item-start>\n            <img [src]="option.icon" style="height: 30%;">\n          </ion-thumbnail>\n          <ion-label>{{option.cardname}}, {{filter(option.cardnumber)}}</ion-label>\n          <ion-radio [value]="option" (click)="selected(option)"></ion-radio>\n        </ion-item>\n      </ion-list>\n        \n      <button ion-button full (click)="buyItem()">Buy Deal</button>\n      <br/>\n      <div id="map" #map >\n      </div>\n</ion-content>\n'/*ion-inline-end:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/marketplace/marketplace.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */],
        __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* Api */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], MarketplacePage);

//# sourceMappingURL=marketplace.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CertificatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(15);
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



var CertificatePage = (function () {
    function CertificatePage(autService, navCtrl, navParams) {
        this.autService = autService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.token = "";
        this.splitted = [];
        this.lat = 0;
        this.lng = 0;
        this.logo = "assets/img/shop_merchant.png";
        this.cert = {
            merchantlogo: this.logo
        };
        this.token = navParams.get("token");
        console.log(this.token);
        this.showDetails();
    }
    CertificatePage.prototype.showDetails = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        token = {
                            "APIKey": "bDjnJKu7ip7097Vfq46I",
                            "TokenExID": "4323829200543105",
                            "Token": this.token
                        };
                        //alert(responses.Value);
                        this.date = this.token.timestamp;
                        this.customerid = this.token.customer_id;
                        this.merchantid = this.token.merchant_id;
                        this.price = this.token.value;
                        console.log(this.splitted);
                        //this.token = responses.Token;
                        return [4 /*yield*/, this.merchantData()];
                    case 1:
                        //this.token = responses.Token;
                        _a.sent();
                        this.initMap();
                        return [2 /*return*/];
                }
            });
        });
    };
    CertificatePage.prototype.merchantData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var merchantdata, merchantname, merchantlogo, merchantaddress, merchantmail, cert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getMerchantData(this.merchantid)];
                    case 1:
                        merchantdata = _a.sent();
                        merchantname = merchantdata.name;
                        merchantlogo = this.logo;
                        console.log(merchantdata.logo.length);
                        if (merchantdata.logo.length != 0) {
                            console.log(merchantlogo);
                            merchantlogo = merchantdata.logo;
                        }
                        merchantaddress = merchantdata.address;
                        merchantmail = merchantdata.mail;
                        console.log(merchantlogo);
                        cert = {
                            merchantid: this.merchantid,
                            merchantname: merchantname,
                            merchantlogo: merchantlogo,
                            merchantmail: merchantmail,
                            merchantaddress: merchantaddress
                        };
                        console.log(this.splitted);
                        this.cert = cert;
                        return [2 /*return*/];
                }
            });
        });
    };
    CertificatePage.prototype.initMap = function () {
        return __awaiter(this, void 0, void 0, function () {
            var latLng, googleObj, positionByGoogle, marker, mapOptions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        latLng = new google.maps.LatLng(this.lat, this.lng);
                        return [4 /*yield*/, this.autService.googleAPI(this.cert.merchantaddress)];
                    case 1:
                        googleObj = _a.sent();
                        if (googleObj != undefined) {
                            console.log(googleObj.results[0].geometry.location);
                            positionByGoogle = googleObj.results[0].geometry.location;
                            latLng = new google.maps.LatLng(positionByGoogle.lat, positionByGoogle.lng);
                        }
                        marker = {
                            position: latLng,
                            title: this.merchantid
                        };
                        mapOptions = {
                            center: latLng,
                            zoom: 19,
                            mapTypeId: google.maps.MapTypeId.ROADMAP,
                            marker: marker
                        };
                        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
                        this.map = this.addMarker(latLng, this.map);
                        return [2 /*return*/];
                }
            });
        });
    };
    CertificatePage.prototype.addMarker = function (position, map) {
        return new google.maps.Marker({
            position: position,
            map: map
        });
    };
    CertificatePage.prototype.getMerchantData = function (id) {
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
    CertificatePage.prototype.addPoint = function (num) {
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
    return CertificatePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('map'),
    __metadata("design:type", Object)
], CertificatePage.prototype, "mapElement", void 0);
CertificatePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-certificate',template:/*ion-inline-start:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/certificate/certificate.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>My Certificate</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="background">\n  <ion-card>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img [src]="cert.merchantlogo">\n      </ion-avatar>\n      <h2>Merchant: {{cert.merchantname}}</h2>\n      <p>{{cert.merchantmail}}</p>\n    </ion-item>\n\n    <ion-card-content>\n        <p>\n          Date: {{date}}\n        </p>\n        <p>\n          Your ID: {{customerid}}\n        </p>\n        <p>\n          Merchant ID: {{merchantid}}\n        </p>\n        <p>\n           ${{addPoint(price)}}\n        </p>\n    </ion-card-content>\n\n\n  </ion-card>\n  <div id="map" #map></div>\n\n</ion-content>'/*ion-inline-end:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/certificate/certificate.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* Api */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], CertificatePage);

//# sourceMappingURL=certificate.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CouponsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CouponsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CouponsPage = (function () {
    function CouponsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.coupons = navParams.get('coupon');
        console.log(this.coupons);
    }
    CouponsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CouponsPage');
    };
    return CouponsPage;
}());
CouponsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-coupons',template:/*ion-inline-start:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/coupons/coupons.html"*/'<!--\n  Generated template for the CouponsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Your Coupons</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="background">\n    <ion-list>\n  \n      <ion-card *ngFor="let option of coupons.coupons">\n  \n        <ion-item>\n          <div class="show-list-numbers-and-dots">\n            <h1>{{option.deal_title}}</h1>\n            <ion-avatar item-start>\n                <img [src]="option?.deal_image">\n              </ion-avatar>\n            <h1>Coupon Code: </h1>\n\n            <h1>{{option.coupon_code}}</h1>\n            <br/>\n            <p style="margin-top:0px;color:#000000;">\n              Discount = {{option?.offered_discount}}%\n            </p>\n            <p style="margin-top:0px;color:#000000;">\n              Deal Value = {{option?.deal_value}}\n            </p>\n            <p style="margin-top:0px;color:#000000;">\n              Actual Price = {{option?.actual_price}}\n            </p>\n            <p style="margin-top:0px;color:#000000;">\n              Additional Discount = {{option?.additional_discount}}\n            </p>\n            <div *ngIf="option.redemption_status == 1" >\n\n            <p style="margin-top:0px;color:#000000;">\n              Redemption Status - YES\n            </p>\n            </div>\n            <div *ngIf="option.redemption_status == 0" >\n\n              <p style="margin-top:0px;color:#000000;">\n                Redemption Status - No\n              </p>\n              </div>\n\n          </div>\n        </ion-item>\n        <ion-item color="balanced">\n          Paid Price: ${{option?.paid_price}}\n        </ion-item>\n      </ion-card>\n    </ion-list>\n  </ion-content>\n'/*ion-inline-end:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/coupons/coupons.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], CouponsPage);

//# sourceMappingURL=coupons.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditcardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(15);
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





var EditcardPage = (function () {
    function EditcardPage(autService, platform, storage, alertCtrl, navCtrl, navParams) {
        this.autService = autService;
        this.platform = platform;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tokens = [];
        console.log(navParams.get("card"));
        this.card = navParams.get("card");
    }
    EditcardPage.prototype.deleteCard = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var confirm;
            return __generator(this, function (_a) {
                console.log("in delete Funktion");
                confirm = this.alertCtrl.create({
                    title: 'Do you want to delete this card',
                    message: 'Are you sure to delete this card?',
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
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            console.log("Agree clicked");
                                            //DO SOMETHING
                                            return [4 /*yield*/, this.deleteFunct(this.card.token)];
                                        case 1:
                                            //DO SOMETHING
                                            _a.sent();
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
            });
        });
    };
    EditcardPage.prototype.deleteFunct = function (tokens) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(tokens);
                        return [4 /*yield*/, this.deleteCardFromDB(tokens)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditcardPage.prototype.deleteCardFromDB = function (tokens) {
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
                        this.customerid = "44";
                        _a.label = 3;
                    case 3:
                        databasecreds = {
                            username: "freedom-app",
                            password: "150498AV",
                            reference: "",
                            customerid: this.customerid,
                            accountnumber: this.card.cardnumber
                        };
                        console.log(databasecreds);
                        return [4 /*yield*/, this.autService.cardService(databasecreds, "?deleteCard=" + "99")];
                    case 4:
                        certis = _a.sent();
                        console.log(certis.results);
                        this.tokens = certis.results;
                        return [2 /*return*/];
                }
            });
        });
    };
    EditcardPage.prototype.filter = function (value) {
        var secret = "*******";
        var endcard = value.length;
        return secret + value.substring(endcard - 4, endcard);
    };
    return EditcardPage;
}());
EditcardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-editcard',template:/*ion-inline-start:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/editcard/editcard.html"*/'<!--\n  Generated template for the EditcardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>editcard</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="background">\n  <ion-list>\n    <h1>\n      {{card.cardname}}\n    </h1>\n    <img [src]="card.icon" style="width:60%; display: block; margin: 0 auto;">\n    <ion-item>\n      <ion-label color="dark" >\n        Card Owner: {{card.cardowner}}\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label color="dark" >\n        Card Number: {{filter(card.cardnumber)}}\n      </ion-label>\n    </ion-item>\n    <div class="spacer" style="width:300px;height:33px;"></div>\n    <div class="show-list-numbers-and-dots">\n      <p>\n        Valide From:\n      </p>\n    </div>\n    <ion-item>\n      <ion-label color="dark">\n        Month: {{card.month}}\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label color="dark">\n        Year: {{card.year}}\n      </ion-label>\n    </ion-item>\n    <div class="spacer" style="width:300px;height:33px;"></div>\n  </ion-list>\n  <button ion-button color="danger" block (click)="deleteCard()">\n\n    <ion-label >\n      <ion-icon name="trash"></ion-icon>\n      Delete this Card\n    </ion-label>\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/editcard/editcard.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* Api */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], EditcardPage);

//# sourceMappingURL=editcard.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entercode_entercode__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tutorial2_tutorial2__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_api__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__choosepaymethod_choosepaymethod__ = __webpack_require__(49);
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










var MenuPage = (function () {
    function MenuPage(storage, platform, toasCtrl, alertCtrl, autService, navCtrl, navParams, app, iab, barcode) {
        this.storage = storage;
        this.platform = platform;
        this.toasCtrl = toasCtrl;
        this.alertCtrl = alertCtrl;
        this.autService = autService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.iab = iab;
        this.barcode = barcode;
        this.rootPage = 'HomePage';
        this.showReg = true;
        this.pages = [
            { title: 'Home', pageName: 'HomePage', icon: 'home' },
            { title: 'My Cards', pageName: 'PaymethodsPage', icon: 'card' },
            { title: 'My Certificates', pageName: 'SpecialPage', icon: 'paper' },
            { title: 'Recent Transactions', pageName: 'TransactionsPage', icon: 'pricetags' },
            { title: 'Marketplace', pageName: 'CategoryPage', icon: 'basket' },
            { title: 'Orders', pageName: 'MarketplacetransactionPage', icon: 'paper' },
            { title: 'Your Points', pageName: 'PointsPage', icon: 'podium' }
        ];
        //const browser = this.iab.create('https://ionicframework.com/');
    }
    MenuPage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
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
                        if (!!this.platform.is('core')) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.storage.getItem('registration').then(function (data) {
                                if (data === _this.customerid) {
                                    _this.showReg = false;
                                }
                            })];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    MenuPage.prototype.openPage = function (page) {
        var params = {};
        if (page.index) {
            params = { tabIndex: page.index };
        }
        if (this.nav.getActiveChildNav() && page.index != undefined) {
            this.nav.getActiveChildNav().select(page.index);
        }
        else {
            this.nav.setRoot(page.pageName, params);
        }
    };
    MenuPage.prototype.isActive = function (page) {
        var childNav = this.nav.getActiveChildNav();
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
            return 'primary';
        }
    };
    MenuPage.prototype.enterBarcode = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.nav.push(__WEBPACK_IMPORTED_MODULE_3__entercode_entercode__["a" /* EntercodePage */]);
                return [2 /*return*/];
            });
        });
    };
    MenuPage.prototype.goToSearch = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.nav.push("SearchPage");
                return [2 /*return*/];
            });
        });
    };
    MenuPage.prototype.goToReferral = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.nav.push("ReferalPage");
                return [2 /*return*/];
            });
        });
    };
    MenuPage.prototype.goToRegistration = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.nav.push("RegisteraffiliatePage");
                return [2 /*return*/];
            });
        });
    };
    MenuPage.prototype.goToTutorial = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.nav.push(__WEBPACK_IMPORTED_MODULE_4__tutorial2_tutorial2__["a" /* Tutorial2Page */]);
                return [2 /*return*/];
            });
        });
    };
    MenuPage.prototype.openPoints = function () {
        //this.nav.push(PointsPage);    
        //this.iab.create('http://cashlessexchange-sb.com/marketplace','_blank');
    };
    MenuPage.prototype.scanBarcode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, ref, databasecreds1, transaction, databasecreds, datas, alert_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.options = {
                            prompt: 'Scan a QR-Code to see the result'
                        };
                        _a = this;
                        return [4 /*yield*/, this.barcode.scan(this.options)];
                    case 1:
                        _a.results = _b.sent();
                        if (!(this.results.cancelled != true)) return [3 /*break*/, 7];
                        if (!!this.platform.is('core')) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.storage.getItem('user-id').then(function (data) {
                                if (data != null || data != undefined) {
                                    _this.customerid = data;
                                }
                            })];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.customerid = "73";
                        _b.label = 4;
                    case 4:
                        console.log(this.results.text);
                        ref = this.results.text;
                        databasecreds1 = {
                            username: "freedom-app",
                            password: "150498AV",
                            reference: ref,
                            customerid: this.customerid
                        };
                        return [4 /*yield*/, this.autService.serviceTransaction(databasecreds1, "?getid=" + ref)];
                    case 5:
                        transaction = _b.sent();
                        databasecreds = {
                            username: "merchantbackuser",
                            password: "150498AV",
                            merchantid: transaction.merchant_id
                        };
                        console.log(databasecreds);
                        datas = void 0;
                        return [4 /*yield*/, this.autService.merchantService(databasecreds, "?getMerchantEnrolled=" + "99")];
                    case 6:
                        datas = _b.sent();
                        console.log("test" + datas.id);
                        if (datas.hit === 'failed') {
                            alert_1 = this.toasCtrl.create({
                                message: 'This Merchant is not participating in our Freedom Choice Service',
                                duration: 3000,
                                position: 'top'
                            });
                            alert_1.present();
                            //this.nav.popToRoot();
                        }
                        else {
                            this.nav.push(__WEBPACK_IMPORTED_MODULE_8__choosepaymethod_choosepaymethod__["a" /* ChoosepaymethodPage */], { merchant: transaction.merchant_id,
                                price: transaction.value,
                                ref: ref });
                        }
                        return [3 /*break*/, 8];
                    case 7:
                        this.nav.popToRoot();
                        _b.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    MenuPage.prototype.testToke = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token, tokene, forteTransaction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        token = {
                            "APIKey": "bDjnJKu7ip7097Vfq46I",
                            "TokenExID": "4323829200543105",
                            "Data": "4111111111111111",
                            "TokenScheme": 4
                        };
                        tokene = "";
                        return [4 /*yield*/, this.autService.tokenize(token, "Tokenize").then(function (response) {
                                var responses;
                                console.log(response);
                                responses = response;
                                if (responses.Success === false) {
                                    alert("error");
                                }
                                else {
                                    //alert(responses.Token);
                                    tokene = responses.Token;
                                    console.log(responses.Token);
                                }
                            })];
                    case 1:
                        _a.sent();
                        forteTransaction = {
                            action: "sale",
                            authorization_amount: 15.55,
                            subtotal_amount: 13.15,
                            billing_address: {
                                first_name: "George",
                                last_name: "Jenkins"
                            },
                            card: {
                                card_type: "visa",
                                name_on_card: "George Jenkins",
                                account_number: "{{{" + tokene + "}}}",
                                expire_month: "12",
                                expire_year: "2017",
                                card_verification_value: "123"
                            }
                        };
                        return [4 /*yield*/, this.autService.tokenizeTrans(forteTransaction, "209887").then(function (response) {
                                var responses;
                                console.log(response);
                                responses = response;
                                if (responses.Success === false) {
                                    alert("error");
                                }
                                else {
                                    //alert(responses.Token);
                                    console.log(responses.Token);
                                }
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MenuPage.prototype.doLogout = function () {
        var toast = this.toasCtrl.create({
            message: 'You have been succesfully logged out',
            duration: 3000,
            position: 'top'
        });
        toast.present();
        this.navCtrl.setRoot('LoginPage');
    };
    return MenuPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
], MenuPage.prototype, "nav", void 0);
MenuPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-menu',template:/*ion-inline-start:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/menu/menu.html"*/'<ion-menu [content]="content">\n  <ion-header>\n\n    <ion-navbar>\n      <ion-title>menu</ion-title>\n    </ion-navbar>\n\n  </ion-header>\n\n\n  <ion-content class="back2">\n    <ion-list no-lines>\n      <button ion-item menuClose *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon item-start [name]="p.icon" [color]="isActive(p)" style="font-size:23px !important;">\n          {{p.title}}\n        </ion-icon>\n      </button>\n\n    </ion-list>\n    <ion-list no-lines>\n      <button ion-item menuClose (click)="scanBarcode()">\n        <ion-icon item-start name="qr-scanner" color="red" style="font-size:23px !important;">\n          Scan Code\n        </ion-icon>\n      </button>\n      <button ion-item menuClose (click)="enterBarcode()">\n        <ion-icon item-start name="document" color="red" style="font-size:23px !important;">\n          Enter Code\n        </ion-icon>\n      </button>\n      <!--<button ion-item menuClose (click)="openMarketPlace()">\n          <ion-icon item-start name="basket" color="red" style="font-size:23px !important;">\n            Marketplace\n          </ion-icon>\n        </button>-->\n      <button ion-item menuClose (click)="goToSearch()">\n        <ion-icon item-start name="search" color="red" style="font-size:23px !important;">\n          Find Merchant\n        </ion-icon>\n      </button>\n      <button ion-item menuClose (click)="goToTutorial()">\n        <ion-icon item-start name="book" color="red" style="font-size:23px !important;">\n          Tutorial\n        </ion-icon>\n      </button>\n\n     <button ion-item menuClose (click)="goToReferral()">\n          <ion-icon item-start name="people" color="red" style="font-size:23px !important;">\n            Refer A Friend\n          </ion-icon>\n        </button>\n        <button ion-item menuClose (click)="goToRegistration()" *ngIf="showReg">\n          <ion-icon item-start name="person-add" color="red" style="font-size:23px !important;">\n            Register Affiliate\n          </ion-icon>\n        </button>\n     <!--    <button ion-item menuClose (click)="testToke()">\n          <ion-icon item-start name="people" color="red" style="font-size:23px !important;">\n            tEST\n          </ion-icon>\n        </button>-->\n    </ion-list>\n\n    <div class="spacer" style="height:20px;"></div>\n\n    <ion-list no-lines>\n      <button ion-item menuClose (click)="doLogout()">\n        <ion-icon item-start name="exit" color="red" style="font-size:23px !important;">\n          Logout\n        </ion-icon>\n      </button>\n    </ion-list>\n\n  </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/menu/menu.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__["a" /* NativeStorage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_api_api__["a" /* Api */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
], MenuPage);

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricevaluePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__choosepaymethod_choosepaymethod__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(16);
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
 * Generated class for the PricevaluePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PricevaluePage = (function () {
    function PricevaluePage(platform, autService, storage, toastCtrl, alertCtrl, nav, navParams) {
        var _this = this;
        this.platform = platform;
        this.autService = autService;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.nav = nav;
        this.navParams = navParams;
        if (!this.platform.is('core')) {
            this.storage.getItem('user-id').then(function (data) {
                if (data != null || data != undefined) {
                    _this.customerid = data;
                }
            });
        }
        else {
            this.customerid = "75";
        }
        this.merchantid = navParams.get('merchant');
    }
    PricevaluePage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.dealid = this.customerid + this.merchantid + this.makeid();
                this.reference = String(Math.floor(Math.random() * 90000) + 10000);
                return [2 /*return*/];
            });
        });
    };
    PricevaluePage.prototype.addPrice = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var price, type, calculated, discountFromAPI, alert_1, confirm_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(value);
                        price = value.price;
                        price = price.replace(",", ".");
                        console.log(price.indexOf('.') !== -1);
                        if (price.indexOf('.') === -1) {
                            console.log(price);
                            price = price + ".00";
                        }
                        type = "check_vaucher_discount.php?customer_id=" + this.customerid +
                            "&merchant_id=" + this.merchantid +
                            "&deal_amount=" + price;
                        calculated = 0;
                        return [4 /*yield*/, this.autService.serviceFreedom("", type)];
                    case 1:
                        discountFromAPI = _a.sent();
                        if (!(discountFromAPI.message === "No vaucher discount availabel on deal")) return [3 /*break*/, 2];
                        console.log(discountFromAPI['Discount available']);
                        alert_1 = this.toastCtrl.create({
                            message: discountFromAPI.message,
                            duration: 3000,
                            position: 'top'
                        });
                        alert_1.present();
                        this.lastSTep(value, price);
                        return [3 /*break*/, 4];
                    case 2:
                        if (!(discountFromAPI.message === "vaucher discount availabel on deal")) return [3 /*break*/, 4];
                        this.discount = discountFromAPI.Deal_Discounted_price;
                        confirm_1 = this.alertCtrl.create({
                            title: discountFromAPI.message,
                            message: 'Do you want to use discount of $' + discountFromAPI.Deal_Discounted_price + ' from marketplace?',
                            buttons: [
                                {
                                    text: 'Disagree',
                                    handler: function () {
                                        console.log('Disagree clicked');
                                        _this.lastSTep(value, price);
                                    }
                                },
                                {
                                    text: 'Agree',
                                    handler: function () {
                                        console.log('Agree clicked');
                                        console.log(Number(price));
                                        console.log(Number(_this.discount));
                                        calculated = Number(price) - Number(_this.discount);
                                        _this.vaucherid = discountFromAPI.vaucher_discount_id;
                                        console.log(calculated);
                                        price = calculated.toFixed(2);
                                        _this.lastSTep(value, price);
                                    }
                                }
                            ]
                        });
                        return [4 /*yield*/, confirm_1.present()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PricevaluePage.prototype.lastSTep = function (value, price) {
        return __awaiter(this, void 0, void 0, function () {
            var priceForDb, databasecreds, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        priceForDb = price.replace(".", "");
                        console.log(this.discount);
                        databasecreds = {
                            username: "freedom-pos",
                            password: "150498AV",
                            reference: this.reference,
                            value: priceForDb,
                            customerid: this.customerid,
                            merchantid: this.merchantid,
                            transaction: this.dealid
                        };
                        return [4 /*yield*/, this.autService.serviceTransaction(databasecreds, "?addTransaction=" + this.reference)];
                    case 1:
                        result = _a.sent();
                        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__choosepaymethod_choosepaymethod__["a" /* ChoosepaymethodPage */], { merchant: this.merchantid, price: price, item: value.name, deal: this.dealid, ref: this.reference, vaucherid: this.vaucherid });
                        return [2 /*return*/];
                }
            });
        });
    };
    PricevaluePage.prototype.makeid = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    return PricevaluePage;
}());
PricevaluePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pricevalue',template:/*ion-inline-start:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/pricevalue/pricevalue.html"*/'<ion-header>\n    \n      <ion-navbar>\n        <ion-title>Enter Price\n        </ion-title>\n      </ion-navbar>\n    \n    </ion-header>\n    \n    \n    <ion-content padding style="background:url(assets/img/Gk12DbJ0TWiNU1PQbjMe_pexels-photo-220444.jpg) no-repeat center;background-size:cover;">\n    \n      <form (ngSubmit)="addPrice(f.value)" #f="ngForm">\n        <div style="margin-left:-10px;width:calc(100% + 20px);">\n          <img src="assets/img/screenplay.png" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n        </div>\n        <ion-label>\n          Enter Price here\n        </ion-label>\n        <ion-list>\n          <ion-item class="text">\n            <ion-label>\n              Price\n            </ion-label>\n            <ion-input type="number" placeholder="" name="price" ngModel required></ion-input>\n          </ion-item>\n          <ion-item class="text">\n              <ion-label>\n                Item Name\n              </ion-label>\n              <ion-input type="text" placeholder="" name="name" ngModel></ion-input>\n            </ion-item>\n        </ion-list>\n        <div class="spacer" style="height:40px;"></div>\n        <button ion-button color="assertive" block>\n          ENTER\n        </button>\n    \n      </form>\n    </ion-content>'/*ion-inline-end:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/pricevalue/pricevalue.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* Api */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], PricevaluePage);

//# sourceMappingURL=pricevalue.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(372);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* unused harmony export provideSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_native_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__mocks_providers_items__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_fingerprint_aio__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_android_permissions__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_providers__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_base64__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_http__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_component__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_barcode_scanner__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_geolocation__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_in_app_browser__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_menu_menu__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_editcard_editcard__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_cards_cards__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_certificate_certificate__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_entercode_entercode__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_checkout_checkout__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_addpaymethod_addpaymethod__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_pricevalue_pricevalue__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_tutorial2_tutorial2__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_choosepaymethod_choosepaymethod__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_marketplace_marketplace__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_coupons_coupons__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























//Pages












// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
function provideSettings(storage) {
    /**
     * The Settings provider takes a set of default settings for your app.
     *
     * You can add new settings options at any time. Once the settings are saved,
     * these values will not overwrite the saved values (this can be done manually if desired).
     */
    return new __WEBPACK_IMPORTED_MODULE_14__providers_providers__["c" /* Settings */](storage, {
        option1: true,
        option2: 'Ionitron J. Framework',
        option3: '3',
        option4: 'Hello'
    });
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_21__pages_menu_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_editcard_editcard__["a" /* EditcardPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_cards_cards__["a" /* CardsPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_certificate_certificate__["a" /* CertificatePage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_entercode_entercode__["a" /* EntercodePage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_checkout_checkout__["a" /* CheckoutPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_addpaymethod_addpaymethod__["a" /* AddpaymethodPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_pricevalue_pricevalue__["a" /* PricevaluePage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_tutorial2_tutorial2__["a" /* Tutorial2Page */],
            __WEBPACK_IMPORTED_MODULE_30__pages_choosepaymethod_choosepaymethod__["a" /* ChoosepaymethodPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_marketplace_marketplace__["a" /* MarketplacePage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_coupons_coupons__["a" /* CouponsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_16__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: (createTranslateLoader),
                    deps: [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]]
                }
            }),
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/addpaymethod/addpaymethod.module#AddpaymethodPageModule', name: 'AddpaymethodPage', segment: 'addpaymethod', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cards/cards.module#CardsPageModule', name: 'CardsPage', segment: 'cards', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/category/category.module#CategoryPageModule', name: 'CategoryPage', segment: 'category', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/certificate/certificate.module#CertificatePageModule', name: 'CertificatePage', segment: 'certificate', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/checkout/checkout.module#CheckoutPageModule', name: 'CheckoutPage', segment: 'checkout', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/choosepaymentcardformarketplace/choosepaymentcardformarketplace.module#ChoosepaymentcardformarketplacePageModule', name: 'ChoosepaymentcardformarketplacePage', segment: 'choosepaymentcardformarketplace', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/choosepaymethod/choosepaymethod.module#ChoosepaymethodPageModule', name: 'ChoosepaymethodPage', segment: 'choosepaymethod', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/coupons/coupons.module#CouponsPageModule', name: 'CouponsPage', segment: 'coupons', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/content/content.module#ContentPageModule', name: 'ContentPage', segment: 'content', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/editcard/editcard.module#EditcardPageModule', name: 'EditcardPage', segment: 'editcard', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/entercode/entercode.module#EntercodePageModule', name: 'EntercodePage', segment: 'entercode', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/item-create/item-create.module#ItemCreatePageModule', name: 'ItemCreatePage', segment: 'item-create', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/item-detail/item-detail.module#ItemDetailPageModule', name: 'ItemDetailPage', segment: 'item-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/list-master/list-master.module#ListMasterPageModule', name: 'ListMasterPage', segment: 'list-master', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/marketplace/marketplace.module#MarketplacePageModule', name: 'MarketplacePage', segment: 'marketplace', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/marketplacetransaction/marketplacetransaction.module#MarketplacetransactionPageModule', name: 'MarketplacetransactionPage', segment: 'marketplacetransaction', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/password/password.module#PasswordPageModule', name: 'PasswordPage', segment: 'password', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/points/points.module#PointsPageModule', name: 'PointsPage', segment: 'points', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/paymethods/paymethods.module#PaymethodsPageModule', name: 'PaymethodsPage', segment: 'paymethods', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/pricevalue/pricevalue.module#PricevaluePageModule', name: 'PricevaluePage', segment: 'pricevalue', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/referal/referal.module#ReferalPageModule', name: 'ReferalPage', segment: 'referal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/registeraffiliate/registeraffiliate.module#RegisteraffiliatePageModule', name: 'RegisteraffiliatePage', segment: 'registeraffiliate', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup2/signup2.module#Signup2PageModule', name: 'Signup2Page', segment: 'signup2', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup3/signup3.module#Signup3PageModule', name: 'Signup3Page', segment: 'signup3', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signupsum/signupsum.module#SignupsumPageModule', name: 'SignupsumPage', segment: 'signupsum', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signupsumnocard/signupsumnocard.module#SignupsumnocardPageModule', name: 'SignupsumnocardPage', segment: 'signupsumnocard', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/special/special.module#SpecialPageModule', name: 'SpecialPage', segment: 'special', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/transactions/transactions.module#TransactionsPageModule', name: 'TransactionsPage', segment: 'transactions', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tutorial2/tutorial2.module#Tutorial2PageModule', name: 'Tutorial2Page', segment: 'tutorial2', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_21__pages_menu_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_editcard_editcard__["a" /* EditcardPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_cards_cards__["a" /* CardsPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_certificate_certificate__["a" /* CertificatePage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_entercode_entercode__["a" /* EntercodePage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_checkout_checkout__["a" /* CheckoutPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_addpaymethod_addpaymethod__["a" /* AddpaymethodPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_pricevalue_pricevalue__["a" /* PricevaluePage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_tutorial2_tutorial2__["a" /* Tutorial2Page */],
            __WEBPACK_IMPORTED_MODULE_30__pages_choosepaymethod_choosepaymethod__["a" /* ChoosepaymethodPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_marketplace_marketplace__["a" /* MarketplacePage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_coupons_coupons__["a" /* CouponsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__providers_providers__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_11__mocks_providers_items__["a" /* Items */],
            __WEBPACK_IMPORTED_MODULE_14__providers_providers__["d" /* User */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_android_permissions__["a" /* AndroidPermissions */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_base64__["a" /* Base64 */],
            { provide: __WEBPACK_IMPORTED_MODULE_14__providers_providers__["c" /* Settings */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]] },
            // Keep this to enable Ionic's runtime error handling during development
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["e" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 185,
	"./af.js": 185,
	"./ar": 186,
	"./ar-dz": 187,
	"./ar-dz.js": 187,
	"./ar-kw": 188,
	"./ar-kw.js": 188,
	"./ar-ly": 189,
	"./ar-ly.js": 189,
	"./ar-ma": 190,
	"./ar-ma.js": 190,
	"./ar-sa": 191,
	"./ar-sa.js": 191,
	"./ar-tn": 192,
	"./ar-tn.js": 192,
	"./ar.js": 186,
	"./az": 193,
	"./az.js": 193,
	"./be": 194,
	"./be.js": 194,
	"./bg": 195,
	"./bg.js": 195,
	"./bm": 196,
	"./bm.js": 196,
	"./bn": 197,
	"./bn.js": 197,
	"./bo": 198,
	"./bo.js": 198,
	"./br": 199,
	"./br.js": 199,
	"./bs": 200,
	"./bs.js": 200,
	"./ca": 201,
	"./ca.js": 201,
	"./cs": 202,
	"./cs.js": 202,
	"./cv": 203,
	"./cv.js": 203,
	"./cy": 204,
	"./cy.js": 204,
	"./da": 205,
	"./da.js": 205,
	"./de": 206,
	"./de-at": 207,
	"./de-at.js": 207,
	"./de-ch": 208,
	"./de-ch.js": 208,
	"./de.js": 206,
	"./dv": 209,
	"./dv.js": 209,
	"./el": 210,
	"./el.js": 210,
	"./en-au": 211,
	"./en-au.js": 211,
	"./en-ca": 212,
	"./en-ca.js": 212,
	"./en-gb": 213,
	"./en-gb.js": 213,
	"./en-ie": 214,
	"./en-ie.js": 214,
	"./en-nz": 215,
	"./en-nz.js": 215,
	"./eo": 216,
	"./eo.js": 216,
	"./es": 217,
	"./es-do": 218,
	"./es-do.js": 218,
	"./es-us": 219,
	"./es-us.js": 219,
	"./es.js": 217,
	"./et": 220,
	"./et.js": 220,
	"./eu": 221,
	"./eu.js": 221,
	"./fa": 222,
	"./fa.js": 222,
	"./fi": 223,
	"./fi.js": 223,
	"./fo": 224,
	"./fo.js": 224,
	"./fr": 225,
	"./fr-ca": 226,
	"./fr-ca.js": 226,
	"./fr-ch": 227,
	"./fr-ch.js": 227,
	"./fr.js": 225,
	"./fy": 228,
	"./fy.js": 228,
	"./gd": 229,
	"./gd.js": 229,
	"./gl": 230,
	"./gl.js": 230,
	"./gom-latn": 231,
	"./gom-latn.js": 231,
	"./gu": 232,
	"./gu.js": 232,
	"./he": 233,
	"./he.js": 233,
	"./hi": 234,
	"./hi.js": 234,
	"./hr": 235,
	"./hr.js": 235,
	"./hu": 236,
	"./hu.js": 236,
	"./hy-am": 237,
	"./hy-am.js": 237,
	"./id": 238,
	"./id.js": 238,
	"./is": 239,
	"./is.js": 239,
	"./it": 240,
	"./it.js": 240,
	"./ja": 241,
	"./ja.js": 241,
	"./jv": 242,
	"./jv.js": 242,
	"./ka": 243,
	"./ka.js": 243,
	"./kk": 244,
	"./kk.js": 244,
	"./km": 245,
	"./km.js": 245,
	"./kn": 246,
	"./kn.js": 246,
	"./ko": 247,
	"./ko.js": 247,
	"./ky": 248,
	"./ky.js": 248,
	"./lb": 249,
	"./lb.js": 249,
	"./lo": 250,
	"./lo.js": 250,
	"./lt": 251,
	"./lt.js": 251,
	"./lv": 252,
	"./lv.js": 252,
	"./me": 253,
	"./me.js": 253,
	"./mi": 254,
	"./mi.js": 254,
	"./mk": 255,
	"./mk.js": 255,
	"./ml": 256,
	"./ml.js": 256,
	"./mr": 257,
	"./mr.js": 257,
	"./ms": 258,
	"./ms-my": 259,
	"./ms-my.js": 259,
	"./ms.js": 258,
	"./mt": 260,
	"./mt.js": 260,
	"./my": 261,
	"./my.js": 261,
	"./nb": 262,
	"./nb.js": 262,
	"./ne": 263,
	"./ne.js": 263,
	"./nl": 264,
	"./nl-be": 265,
	"./nl-be.js": 265,
	"./nl.js": 264,
	"./nn": 266,
	"./nn.js": 266,
	"./pa-in": 267,
	"./pa-in.js": 267,
	"./pl": 268,
	"./pl.js": 268,
	"./pt": 269,
	"./pt-br": 270,
	"./pt-br.js": 270,
	"./pt.js": 269,
	"./ro": 271,
	"./ro.js": 271,
	"./ru": 272,
	"./ru.js": 272,
	"./sd": 273,
	"./sd.js": 273,
	"./se": 274,
	"./se.js": 274,
	"./si": 275,
	"./si.js": 275,
	"./sk": 276,
	"./sk.js": 276,
	"./sl": 277,
	"./sl.js": 277,
	"./sq": 278,
	"./sq.js": 278,
	"./sr": 279,
	"./sr-cyrl": 280,
	"./sr-cyrl.js": 280,
	"./sr.js": 279,
	"./ss": 281,
	"./ss.js": 281,
	"./sv": 282,
	"./sv.js": 282,
	"./sw": 283,
	"./sw.js": 283,
	"./ta": 284,
	"./ta.js": 284,
	"./te": 285,
	"./te.js": 285,
	"./tet": 286,
	"./tet.js": 286,
	"./th": 287,
	"./th.js": 287,
	"./tl-ph": 288,
	"./tl-ph.js": 288,
	"./tlh": 289,
	"./tlh.js": 289,
	"./tr": 290,
	"./tr.js": 290,
	"./tzl": 291,
	"./tzl.js": 291,
	"./tzm": 292,
	"./tzm-latn": 293,
	"./tzm-latn.js": 293,
	"./tzm.js": 292,
	"./uk": 294,
	"./uk.js": 294,
	"./ur": 295,
	"./ur.js": 295,
	"./uz": 296,
	"./uz-latn": 297,
	"./uz-latn.js": 297,
	"./uz.js": 296,
	"./vi": 298,
	"./vi.js": 298,
	"./x-pseudo": 299,
	"./x-pseudo.js": 299,
	"./yo": 300,
	"./yo.js": 300,
	"./zh-cn": 301,
	"./zh-cn.js": 301,
	"./zh-hk": 302,
	"./zh-hk.js": 302,
	"./zh-tw": 303,
	"./zh-tw.js": 303
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 425;

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or a "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
var Item = (function () {
    function Item(fields) {
        // Quick and dirty extend/assign fields to this model
        for (var f in fields) {
            this[f] = fields[f];
        }
    }
    return Item;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * A simple settings/config class for storing key/value pairs with persistence.
 */
var Settings = (function () {
    function Settings(storage, defaults) {
        this.storage = storage;
        this.SETTINGS_KEY = '_settings';
        this._defaults = defaults;
    }
    Settings.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY).then(function (value) {
            if (value) {
                _this.settings = value;
                return _this._mergeDefaults(_this._defaults);
            }
            else {
                return _this.setAll(_this._defaults).then(function (val) {
                    _this.settings = val;
                });
            }
        });
    };
    Settings.prototype._mergeDefaults = function (defaults) {
        for (var k in defaults) {
            if (!(k in this.settings)) {
                this.settings[k] = defaults[k];
            }
        }
        return this.setAll(this.settings);
    };
    Settings.prototype.merge = function (settings) {
        for (var k in settings) {
            this.settings[k] = settings[k];
        }
        return this.save();
    };
    Settings.prototype.setValue = function (key, value) {
        this.settings[key] = value;
        return this.storage.set(this.SETTINGS_KEY, this.settings);
    };
    Settings.prototype.setAll = function (value) {
        return this.storage.set(this.SETTINGS_KEY, value);
    };
    Settings.prototype.getValue = function (key) {
        return this.storage.get(this.SETTINGS_KEY)
            .then(function (settings) {
            return settings[key];
        });
    };
    Settings.prototype.save = function () {
        return this.setAll(this.settings);
    };
    Object.defineProperty(Settings.prototype, "allSettings", {
        get: function () {
            return this.settings;
        },
        enumerable: true,
        configurable: true
    });
    return Settings;
}());
Settings = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], Object])
], Settings);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_api__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
var User = (function () {
    function User(api, http) {
        this.api = api;
        this.http = http;
        this.freedomApi = "http://cashlessexchange-sb.com/marketplace/webservices/";
        this.loginApi = "http://173.212.238.108/api/";
    }
    /**
     * Send a POST request to our login endpoint with the data
     * the user entered on the form.
     */
    User.prototype.login = function (credentials, type) {
        return this.http.post(this.freedomApi + type, "");
    };
    /**
     * Send a POST request to our signup endpoint with the data
     * the user entered on the form.
     */
    User.prototype.signup = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('signup', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Log the user out, which forgets the session
     */
    User.prototype.logout = function () {
        this._user = null;
    };
    /**
     * Process a login/signup response to store user data
     */
    User.prototype._loggedIn = function (resp) {
        this._user = resp.customerid;
    };
    return User;
}());
User = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__api_api__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
], User);

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_pages__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_providers__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(translate, platform, settings, nativeStorage, config, statusBar, toastCtrl, splashScreen) {
        var _this = this;
        this.translate = translate;
        this.nativeStorage = nativeStorage;
        this.config = config;
        this.statusBar = statusBar;
        this.toastCtrl = toastCtrl;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_pages__["a" /* FirstRunPage */];
        platform.ready().then(function () {
            _this.nativeStorage.getItem('tutorialDone1').then(function (data) {
                if (data != null && data != undefined) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_pages__["b" /* MainPage */];
                }
            });
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.d
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
        this.initTranslate();
    }
    MyApp.prototype.initTranslate = function () {
        var _this = this;
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang('en');
        if (this.translate.getBrowserLang() !== undefined) {
            this.translate.use(this.translate.getBrowserLang());
        }
        else {
            this.translate.use('en'); // Set your language here
        }
        this.translate.get(['BACK_BUTTON_TEXT']).subscribe(function (values) {
            _this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
        });
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: '  <ion-nav #content [root]="rootPage"></ion-nav>'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_7__providers_providers__["c" /* Settings */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__["a" /* NativeStorage */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* Config */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user__ = __webpack_require__(429);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__user_user__["a"]; });





//# sourceMappingURL=providers.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChoosepaymethodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__checkout_checkout__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_fingerprint_aio__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__ = __webpack_require__(16);
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








var ChoosepaymethodPage = (function () {
    function ChoosepaymethodPage(loadingCtrl, toatCtrl, fingerprint, platform, geolocation, storage, alertCtrl, autService, navCtrl, navParams) {
        var _this = this;
        this.loadingCtrl = loadingCtrl;
        this.toatCtrl = toatCtrl;
        this.fingerprint = fingerprint;
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
    ChoosepaymethodPage.prototype.addPoint2 = function (num) {
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
    ChoosepaymethodPage.prototype.prepareItem = function (param) {
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
                        return [4 /*yield*/, this.calcFee(this.items.price)];
                    case 1:
                        _a.sent();
                        console.log(String(Number(this.items.price).toFixed(2) + this.feeForMerchant));
                        calculated = Number(Number(this.items.price).toFixed(2)) + this.feeForMerchant;
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
    ChoosepaymethodPage.prototype.merchantData = function () {
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
    ChoosepaymethodPage.prototype.loadCards = function () {
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
    ChoosepaymethodPage.prototype.getCardsFromToken = function () {
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
    ChoosepaymethodPage.prototype.getCertificatesFromMerchant = function () {
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
    ChoosepaymethodPage.prototype.showCheckbox = function () {
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
    ChoosepaymethodPage.prototype.paymethodRemind = function () {
        var toast = this.alertCtrl.create({
            title: "Choose Paymethod",
            message: "Which card would you like to use for this purchase?",
            buttons: ['OK']
        });
        toast.present();
    };
    ChoosepaymethodPage.prototype.selected = function (select) {
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
    ChoosepaymethodPage.prototype.addPoint = function (num) {
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
    ChoosepaymethodPage.prototype.filter = function (value) {
        var secret = "*******";
        var endcard = value.length;
        return secret + value.substring(endcard - 3, endcard);
    };
    ChoosepaymethodPage.prototype.changePrice = function () {
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
    ChoosepaymethodPage.prototype.calcFee = function (ammount) {
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
                        value = Number(ammount) * (Number(datas.fees.processing_fees) / 100);
                        //this.price = String(Number(this.priceTemp) + Number(value));
                        console.log(value.toFixed(2));
                        this.feeForMerchant = Number(value.toFixed(2));
                        return [2 /*return*/];
                }
            });
        });
    };
    ChoosepaymethodPage.prototype.buyAction = function () {
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
                        tempValue = Number(this.feeForMerchant) * 2;
                        if (this.selectedCard.cardname === "Cash/Check") {
                            console.log("cash");
                            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__checkout_checkout__["a" /* CheckoutPage */], { merchant: this.items.merchantid, price: newPrice_1, item: this.items.name, deal: this.items.deal, ref: this.items.ref, selectedcard: this.selectedCard, discount: discount_1, fees: this.feeForMerchant, vaucherid: this.vaucherid, certs: this.chosenToken, guthaben: this.guthaben, itemsprice: this.items.price });
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
                                            var _this = this;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        if (!!this.platform.is('core')) return [3 /*break*/, 2];
                                                        return [4 /*yield*/, this.fingerprint.isAvailable().then(function (result) {
                                                                _this.fingerprint.show({
                                                                    clientId: "freedom-choice",
                                                                    clientSecret: "password",
                                                                    localizedReason: "please authenticate"
                                                                }).then(function (result) {
                                                                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__checkout_checkout__["a" /* CheckoutPage */], { merchant: _this.items.merchantid, price: newPrice_1, item: _this.items.name, deal: _this.items.deal, ref: _this.items.ref, selectedcard: _this.selectedCard, discount: discount_1, fees: _this.feeForMerchant, vaucherid: _this.vaucherid, certs: _this.chosenToken, guthaben: _this.guthaben, itemsprice: _this.items.price });
                                                                }).catch(function (err) {
                                                                    console.log(err);
                                                                });
                                                            })];
                                                    case 1:
                                                        _a.sent();
                                                        return [3 /*break*/, 3];
                                                    case 2:
                                                        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__checkout_checkout__["a" /* CheckoutPage */], { merchant: this.items.merchantid, price: newPrice_1, item: this.items.name, deal: this.items.deal, ref: this.items.ref, selectedcard: this.selectedCard, discount: discount_1, fees: this.feeForMerchant, vaucherid: this.vaucherid, certs: this.chosenToken, guthaben: this.guthaben, itemsprice: this.items.price });
                                                        _a.label = 3;
                                                    case 3: return [2 /*return*/];
                                                }
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
    ChoosepaymethodPage.prototype.cancelAction = function () {
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
    return ChoosepaymethodPage;
}());
ChoosepaymethodPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-choosepaymethod',template:/*ion-inline-start:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/choosepaymethod/choosepaymethod.html"*/'<ion-header>\n    \n      <ion-navbar>\n        <ion-buttons start>\n          <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-buttons>\n        <ion-title>Choose Your Paymethod\n          <ion-icon name="cart"></ion-icon>\n        </ion-title>\n      </ion-navbar>\n    \n    </ion-header>\n    \n    \n    <ion-content padding class="background">\n    \n      <div class="spacer" style="width:300px;height:25px;" id="checkout-spacer4"></div>\n      <ion-list>\n        <h2>Merchant: {{cert.merchantname}}</h2>\n    \n        <ion-note item-left> Fee for Merchant:$ {{feeForMerchant}}</ion-note>\n    \n        <ion-list>\n          <ion-item color="none">\n            <ion-thumbnail item-left>\n              <ion-avatar item-start>\n                <img [src]="cert.merchantlogo">\n              </ion-avatar>\n            </ion-thumbnail>\n            <h2>\n              Item {{items.name }}\n            </h2>\n            <span>Price:$ {{price}}</span>\n          </ion-item>\n        </ion-list>\n      </ion-list>\n    \n      <ion-note item-left> Available Cards </ion-note>\n      \n        <ion-list radio-group [(ngModel)]="selection" *ngIf="showSkip">\n          <ion-item *ngFor="let option of cardsonpage">\n            <ion-thumbnail item-start>\n              <img [src]="option.icon" style="height: 30%;">\n            </ion-thumbnail>\n            <ion-label>{{option.cardname}}, {{filter(option.cardnumber)}}</ion-label>\n            <ion-radio [value]="option" (click)="selected(option)"></ion-radio>\n          </ion-item>\n    \n          <div class="spacer" style="width:300px;height:20px;" id="checkout-spacer5"></div>      \n          <ion-note item-left> Cash/Check Option </ion-note>\n          \n          <ion-item>\n            <ion-thumbnail item-start>\n                <img src="assets/img/cashsymbol.jpg" style="height: 30%;">          \n            </ion-thumbnail>\n            <ion-label>Cash/Check</ion-label>        \n            <ion-radio value="Cash" (click)="selected(\'cash\')"></ion-radio>  \n          </ion-item>\n        </ion-list>\n    \n        \n      <div class="spacer" style="width:300px;height:47.9861px;" id="checkout-spacer5"></div>\n      <button id="checkout-button4" ion-button color="positive" block style="border-radius:-1px -1px -1px -1px;" (click)="buyAction()">\n        Next\n      </button>\n      <button id="checkout-button5" ion-button color="danger" block style="border-radius:1px 1px 1px 1px;" (click)="cancelAction()">\n        Cancel\n      </button>\n    \n    </ion-content>'/*ion-inline-end:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/choosepaymethod/choosepaymethod.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__["a" /* NativeStorage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* Api */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], ChoosepaymethodPage);

//# sourceMappingURL=choosepaymethod.js.map

/***/ })

},[357]);
//# sourceMappingURL=main.js.map