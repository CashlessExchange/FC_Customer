webpackJsonp([8],{

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(301);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let LoginPageModule = class LoginPageModule {
};
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
        ],
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_Storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_fingerprint_aio__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(30);
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






let LoginPage = class LoginPage {
    constructor(platform, fingerprint, storage, alertCtrl, navCtrl, navParams, authSrvce) {
        this.platform = platform;
        this.fingerprint = fingerprint;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authSrvce = authSrvce;
        this.creds = { mail: "", password: "" };
        this.setData();
    }
    setData() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.storage.get('loginname').then((data) => {
                if (data != null && data != undefined) {
                    this.creds.mail = data;
                }
            });
            yield this.storage.get('user-id').then((data) => {
                if (data != null && data != undefined) {
                    this.customerid = data;
                    if (!this.platform.is('core')) {
                        this.fingerprintLogin();
                    }
                }
            });
        });
    }
    fingerprintLogin() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fingerprint.isAvailable().then(result => {
                this.fingerprint.show({
                    clientId: "freedom-choice",
                    clientSecret: "password",
                    localizedReason: "please authenticate"
                }).then(result => {
                    this.navCtrl.setRoot('MenuPage');
                }).catch((err) => {
                    console.log(err);
                });
            });
        });
    }
    doLogin(creds) {
        return __awaiter(this, void 0, void 0, function* () {
            let type = "login.php?email=" + creds.mail + "&password=" + creds.password;
            let auth = yield this.authSrvce.serviceFreedom(creds, type);
            if (auth.success === 1 && auth.message === "login success") {
                yield this.storage.ready().then((data) => {
                    data.setItem('loginname', creds.mail);
                });
                yield this.storage.ready().then((data) => {
                    data.setItem('user-id', auth.customerid);
                });
                this.navCtrl.setRoot('MenuPage');
            }
            else {
                let somwrong = this.alertCtrl.create({
                    title: 'Login Failed',
                    subTitle: 'Username or Password are not correct',
                    buttons: ['OK']
                });
                somwrong.present();
            }
        });
    }
    doSignup() {
        this.navCtrl.push('SignupPage');
    }
};
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/login/login.html"*/'<ion-content padding style="background:url(assets/img/Gk12DbJ0TWiNU1PQbjMe_pexels-photo-220444.jpeg) no-repeat center;background-size:cover;" id="page5">\n  <div class="spacer" style="height:20px;" ></div>\n  \n  <form (ngSubmit)="doLogin(f.value)" #f="ngForm">\n    <div style="margin-left:-10px;width:calc(100% + 20px);">\n      <img src="assets/img/screenplay.png" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n    </div>\n    <ion-list >\n      <ion-item class="email">\n        <ion-label>\n          Email\n        </ion-label>\n        <ion-input type="email"  name="mail" autocomplete ngModel="{{creds.mail}}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          Password\n        </ion-label>\n        <ion-input type="password" placeholder="" name="password" ngModel></ion-input>\n      </ion-item>\n    </ion-list>\n    <div class="spacer" style="height:40px;" ></div>\n    <button  ion-button color="assertive" block>\n      Log in\n    </button>\n\n  </form>\n\n  <button ion-button clear color="positive" block (click)="doSignup()">\n      Or Sign Up\n    </button>\n</ion-content>'/*ion-inline-end:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_Storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_Storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]) === "function" && _g || Object])
], LoginPage);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=8.js.map