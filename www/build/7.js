webpackJsonp([7],{

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signup3PageModule", function() { return Signup3PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup3__ = __webpack_require__(505);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Signup3PageModule = (function () {
    function Signup3PageModule() {
    }
    return Signup3PageModule;
}());
Signup3PageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__signup3__["a" /* Signup3Page */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup3__["a" /* Signup3Page */]),
        ],
    })
], Signup3PageModule);

//# sourceMappingURL=signup3.module.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signup3Page; });
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
var Signup3Page = (function () {
    function Signup3Page(platform, navCtrl, user, autService, storage, toastCtrl, navParams, translateService) {
        var _this = this;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.user = user;
        this.autService = autService;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.translateService = translateService;
        this.cardtype = ["American Express", "Discover", "Mastercard", "Visa"];
        this.months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        this.years = ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028",
            "2029", "2030", "2031", "2032", "2033", "2034", "2035", "2036", "2037", "2038", "2039", "2040"];
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
    Signup3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Signup3Page');
    };
    Signup3Page.prototype.nextPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var toast, token, failed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        toast = this.toastCtrl.create({
                            message: this.signupErrorString,
                            duration: 3000,
                            position: 'top'
                        });
                        token = {
                            "APIKey": "bDjnJKu7ip7097Vfq46I",
                            "TokenExID": "4323829200543105",
                            "Data": this.account.cardnumber,
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
                                    //this.account.cardnumber = responses.Token;
                                    // Unable to sign up
                                    var toast_1 = _this.toastCtrl.create({
                                        message: _this.signupErrorString,
                                        duration: 3000,
                                        position: 'top'
                                    });
                                    if (_this.account.name != '' || _this.account.city != '' || _this.account.phone != '') {
                                        _this.navCtrl.push('SignupsumPage', { paramsReg: _this.account });
                                    }
                                    else {
                                        toast_1.setMessage("Please refill all Fields");
                                        toast_1.present();
                                    }
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Signup3Page.prototype.skip = function () {
        // Unable to sign up
        var toast = this.toastCtrl.create({
            message: this.signupErrorString,
            duration: 3000,
            position: 'top'
        });
        if (this.account.name != '' || this.account.city != '' || this.account.phone != '') {
            this.navCtrl.push('SignupsumnocardPage', { paramsReg: this.account });
        }
        else {
            toast.setMessage("Please refill all Fields");
            toast.present();
        }
    };
    return Signup3Page;
}());
Signup3Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup3',template:/*ion-inline-start:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/signup3/signup3.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Page Three</ion-title>\n    <ion-buttons end >\n        <button ion-button (click)="skip()" color="primary">SKIP</button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="background">\n  <form (submit)="nextPage()">\n    <ion-list>\n\n      <ion-item>\n        <ion-label color="dark" floating>\n          Card Type\n        </ion-label>\n        <ion-select name="cardtype" [(ngModel)]="account.cardtype">\n          <ion-option *ngFor="let type of cardtype">\n            {{type}}\n          </ion-option>\n\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label color="dark" floating>Card Owner</ion-label>\n        <ion-input type="text" [(ngModel)]="account.cardowner" name="cardowner"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="dark" floating>Card Number</ion-label>\n        <ion-input type="number" [(ngModel)]="account.cardnumber" name="cardnumber"></ion-input>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label color="dark" floating>\n          month\n        </ion-label>\n        <ion-select name="month" [(ngModel)]="account.month">\n          <ion-option *ngFor="let month of months">\n            {{month}}\n          </ion-option>\n\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label color="dark" floating>\n          year\n        </ion-label>\n        <ion-select name="year" [(ngModel)]="account.year">\n          <ion-option *ngFor="let year of years">\n            {{year}}\n          </ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="dark" floating>CVV/CVV2</ion-label>\n        <ion-input type="password" [(ngModel)]="account.cvv" name="cvv"></ion-input>\n      </ion-item>\n\n\n      <div padding>\n        <button ion-button color="primary" block>NEXT</button>\n      </div>\n\n\n    </ion-list>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/signup3/signup3.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_providers__["d" /* User */],
        __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* Api */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
], Signup3Page);

//# sourceMappingURL=signup3.js.map

/***/ })

});
//# sourceMappingURL=7.js.map