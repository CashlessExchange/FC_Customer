webpackJsonp([13],{

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferalPageModule", function() { return ReferalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__referal__ = __webpack_require__(500);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReferalPageModule = (function () {
    function ReferalPageModule() {
    }
    return ReferalPageModule;
}());
ReferalPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__referal__["a" /* ReferalPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__referal__["a" /* ReferalPage */]),
        ],
    })
], ReferalPageModule);

//# sourceMappingURL=referal.module.js.map

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReferalPage; });
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




/**
 * Generated class for the ReferalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReferalPage = (function () {
    function ReferalPage(navCtrl, toastCtrl, auth, storage, platform, navParams) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.auth = auth;
        this.storage = storage;
        this.platform = platform;
        this.navParams = navParams;
    }
    ReferalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReferalPage');
    };
    ReferalPage.prototype.sendRefferal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var type, _a, toast, re, type_1, refer_1;
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
                        type = "customer_data.php?customerid=" + this.customerid;
                        console.log(type);
                        _a = this;
                        return [4 /*yield*/, this.auth.serviceFreedom("", type)];
                    case 4:
                        _a.customer = _b.sent();
                        console.log(this.customer);
                        toast = this.toastCtrl.create({
                            message: "Unable to invite your friend.",
                            duration: 3000,
                            position: 'top'
                        });
                        re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        if (re.test(this.email)) {
                            type_1 = "?from_email=" + this.customer.data.email + "&to_email=" + this.email;
                            refer_1 = this.auth.referralMail("", type_1).subscribe(function (resp) {
                                console.log(refer_1.__zone_symbol__value);
                                if (resp.status === "Success") {
                                    toast.setMessage(resp.message);
                                    toast.present();
                                    _this.navCtrl.popToRoot();
                                }
                                else {
                                    toast.setMessage(resp.message);
                                    toast.present();
                                }
                                //this.navCtrl.push(MainPage);
                            }, function (err) {
                                console.log(err);
                                //this.navCtrl.push(MainPage);
                                // Unable to log in
                                var toast = _this.toastCtrl.create({
                                    message: err,
                                    duration: 3000,
                                    position: 'top'
                                });
                                toast.present();
                            });
                            //
                        }
                        else {
                            toast.setMessage("Invalid Email");
                            toast.present();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return ReferalPage;
}());
ReferalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-referal',template:/*ion-inline-start:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/referal/referal.html"*/'<ion-header>\n    \n      <ion-navbar>\n        <ion-title>Referral to a Friend</ion-title>\n      </ion-navbar>\n    \n    </ion-header>\n    \n    \n    \n    <ion-content padding class="background">\n      <div style="margin-left:-10px;width:calc(100% + 20px);">\n          <img src="assets/img/screenplay.png" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n        </div>\n      <form (submit)="sendRefferal()">\n        <ion-list>\n    \n          <span>Please fill in the Email of your Friend.</span>\n          <ion-item>\n            <ion-label color="dark" floating>{{ \'EMAIL\' }}</ion-label>\n            <ion-input required type="email" [(ngModel)]="email" name="email" pattern="[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})"></ion-input>\n          </ion-item>\n    \n    \n          <div padding>\n            <button ion-button color="primary" block>{{ \'SUBMIT\' }}</button>\n          </div>\n    \n        </ion-list>\n      </form>\n    </ion-content>\n    '/*ion-inline-end:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/referal/referal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* Api */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], ReferalPage);

//# sourceMappingURL=referal.js.map

/***/ })

});
//# sourceMappingURL=13.js.map