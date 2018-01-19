webpackJsonp([5],{

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupsumnocardPageModule", function() { return SignupsumnocardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signupsumnocard__ = __webpack_require__(507);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupsumnocardPageModule = (function () {
    function SignupsumnocardPageModule() {
    }
    return SignupsumnocardPageModule;
}());
SignupsumnocardPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__signupsumnocard__["a" /* SignupsumnocardPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signupsumnocard__["a" /* SignupsumnocardPage */]),
        ],
    })
], SignupsumnocardPageModule);

//# sourceMappingURL=signupsumnocard.module.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupsumnocardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_providers__ = __webpack_require__(48);
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
 * Generated class for the Signup3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupsumnocardPage = (function () {
    function SignupsumnocardPage(platform, navCtrl, user, autService, storage, toastCtrl, navParams, translateService) {
        var _this = this;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.user = user;
        this.autService = autService;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.translateService = translateService;
        this.account = {
            name: '',
            cardowner: '',
            email: '',
            password: '',
            phone: '',
            city: '',
            cardtype: 'null',
            cardnumber: 'null',
            month: 'null',
            year: 'null',
            cvv: 'null'
        };
        this.account = this.navParams.get("paramsReg");
        console.log(this.account);
        this.translateService.get('SIGNUP_ERROR').subscribe(function (value) {
            _this.signupErrorString = value;
        });
    }
    SignupsumnocardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Signup3Page');
    };
    SignupsumnocardPage.prototype.doSignup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var toast, type, cardo;
            return __generator(this, function (_a) {
                toast = this.toastCtrl.create({
                    message: this.signupErrorString,
                    duration: 3000,
                    position: 'top'
                });
                type = "registration.php?email=" + this.account.email
                    + "&username=" + this.account.name
                    + "&password=" + this.account.password
                    + "&phone=" + this.account.phone
                    + "&city_id=" + this.account.city
                    + "&card_type=" + 'None'
                    + "&card_number=" + 'None'
                    + "&expiry_month=" + 'None'
                    + "&expiry_year=" + 'None'
                    + "&cvv=" + 'None';
                cardo = {
                    cardname: "",
                    cardowner: this.account.cardowner,
                    cardnumber: this.token,
                    month: this.account.month,
                    year: this.account.year,
                    checkdigit: this.account.cvv,
                    icon: ""
                };
                //this.responseData = await this.user.serviceFreedom(JSON.stringify({ message: "Freedom Choice App is calling" }), type);
                console.log('inMEthods');
                this.user.login(this.account, type).subscribe(function (resp) {
                    console.log(resp);
                    if (resp.success === 0 && resp.message === "Duplicate email or Duplicate username") {
                        toast.setMessage("Email or Username already in use");
                        toast.present();
                    }
                    else if (resp.success === 1 && resp.message === "Registration done successfully") {
                        _this.navCtrl.popToRoot();
                        toast.setMessage("Registration Successfully");
                        toast.present();
                    }
                    else {
                        toast.setMessage("Error in Registration - Please check your data and try it later");
                        toast.present();
                    }
                }, function (err) {
                    console.log(err);
                    //this.navCtrl.popToRoot();
                    toast.present();
                });
                return [2 /*return*/];
            });
        });
    };
    SignupsumnocardPage.prototype.addCard = function (card) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var splitter1, cardo, type;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.account.cardtype);
                        splitter1 = this.account.cardtype.replace(/\s+/g, '');
                        console.log(splitter1);
                        switch (splitter1) {
                            case "AmericanExpress": {
                                card.icon = "assets/img/americanexpress.png";
                                card.cardname = "amex";
                                break;
                            }
                            case "Discover": {
                                card.icon = "assets/img/discover.png";
                                card.cardname = "disc";
                                //statements; 
                                break;
                            }
                            case "Mastercard": {
                                card.icon = "assets/img/mastercard.png";
                                card.cardname = "mast";
                                //statements; 
                                break;
                            }
                            case "Visa": {
                                card.icon = "assets/img/visa.png";
                                card.cardname = "visa";
                                //statements; 
                                break;
                            }
                            default: {
                                //statements; 
                                break;
                            }
                        }
                        cardo = {
                            cardname: card.cardname,
                            cardowner: card.cardowner,
                            cardnumber: this.token,
                            month: card.month,
                            year: card.year,
                            checkdigit: card.checkdigit,
                            icon: card.icon
                        };
                        type = "login.php?email=" + this.account.email + "&password=" + this.account.password;
                        return [4 /*yield*/, this.user.login(this.account, type).subscribe(function (resp) {
                                if (resp.success === 1 && resp.message === "login success") {
                                    _this.customerid = resp.customerid;
                                    var databasecreds = {
                                        username: "freedom-pos",
                                        password: "150498AV",
                                        reference: "",
                                        customerid: resp.customerid,
                                        cardtype: card.cardname.replace(/\s+/g, ''),
                                        nameoncard: card.cardowner,
                                        accountnumber: _this.token,
                                        expiremonth: card.month.replace(/\s+/g, ''),
                                        expireyear: card.year.replace(/\s+/g, ''),
                                        cvv: card.checkdigit,
                                        icon: card.icon
                                    };
                                    console.log(databasecreds);
                                    var certis = _this.autService.cardService(databasecreds, "?addCard=" + "99");
                                    console.log(certis.result);
                                    if (certis.result === "success") {
                                        _this.navCtrl.getPrevious();
                                        _this.navCtrl.popToRoot();
                                    }
                                }
                                else {
                                    var toast = _this.toastCtrl.create({
                                        message: "Error in Registration",
                                        duration: 3000,
                                        position: 'top'
                                    });
                                    toast.present();
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return SignupsumnocardPage;
}());
SignupsumnocardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signupsumnocard',template:/*ion-inline-start:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/signupsumnocard/signupsumnocard.html"*/'<ion-header>\n    \n      <ion-navbar>\n        <ion-title>Sign Up</ion-title>\n      </ion-navbar>\n    \n    </ion-header>\n    \n    \n    <ion-content padding class="background">\n      <form (submit)="doSignup()">\n        <ion-list>\n    \n          <ion-item>\n            <ion-label fixed>{{ \'EMAIL\' }}</ion-label>\n            <ion-input type="email" [(ngModel)]="account.email" name="email" [disabled]="true"></ion-input>\n          </ion-item>\n    \n          <ion-item>\n            <ion-label fixed>{{ \'NAME\' }}</ion-label>\n            <ion-input clear type="text" [(ngModel)]="account.name" name="name" [disabled]="true"></ion-input>\n          </ion-item>\n    \n          <ion-item>\n            <ion-label fixed>{{ \'CITY\' }}</ion-label>\n            <ion-input clear type="text" [(ngModel)]="account.city" name="city" [disabled]="true"></ion-input>\n          </ion-item>\n    \n    \n          <ion-item>\n            <ion-label fixed>{{ \'PHONE\' }}</ion-label>\n            <ion-input clear type="number" [(ngModel)]="account.phone" name="phone" [disabled]="true"></ion-input>\n          </ion-item>\n    \n          <div padding>\n            <button ion-button color="primary" block>{{ \'Sign Up\' }}</button>\n          </div>\n    \n    \n        </ion-list>\n      </form>\n    </ion-content>'/*ion-inline-end:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/signupsumnocard/signupsumnocard.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_providers__["d" /* User */],
        __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* Api */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
], SignupsumnocardPage);

//# sourceMappingURL=signupsumnocard.js.map

/***/ })

});
//# sourceMappingURL=5.js.map