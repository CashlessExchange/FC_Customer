webpackJsonp([8],{

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signup2PageModule", function() { return Signup2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup2__ = __webpack_require__(504);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Signup2PageModule = (function () {
    function Signup2PageModule() {
    }
    return Signup2PageModule;
}());
Signup2PageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__signup2__["a" /* Signup2Page */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup2__["a" /* Signup2Page */]),
        ],
    })
], Signup2PageModule);

//# sourceMappingURL=signup2.module.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signup2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
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
 * Generated class for the Signup2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Signup2Page = (function () {
    function Signup2Page(navCtrl, toastCtrl, navParams, translateService) {
        var _this = this;
        this.navCtrl = navCtrl;
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
            cardtype: '',
            cardnumber: '',
            month: '',
            year: '',
            cvv: ''
        };
        this.account = this.navParams.get("paramsReg");
        console.log(this.account);
        this.translateService.get('SIGNUP_ERROR').subscribe(function (value) {
            _this.signupErrorString = value;
        });
    }
    Signup2Page.prototype.nextPage = function () {
        // Unable to sign up
        var toast = this.toastCtrl.create({
            message: this.signupErrorString,
            duration: 3000,
            position: 'top'
        });
        if (this.account.email != '' && this.account.password != '' && this.passwordConfirm != '') {
            if (this.account.password != this.passwordConfirm) {
                toast.setMessage("Password does not match");
                toast.present();
            }
            else {
                var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (re.test(this.account.email)) {
                    this.navCtrl.push('Signup3Page', { paramsReg: this.account });
                }
                else {
                    toast.setMessage("Invalid Email");
                    toast.present();
                }
            }
        }
        else {
            toast.setMessage("Please refill all Fields");
            toast.present();
        }
    };
    return Signup2Page;
}());
Signup2Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup2',template:/*ion-inline-start:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/signup2/signup2.html"*/'<ion-header>\n  \n    <ion-navbar>\n      <ion-title>Page Two</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding class="background">\n    <form (submit)="nextPage()">\n      <ion-list>\n  \n  \n        <ion-item>\n          <ion-label color="dark" floating>EMAIL</ion-label>\n          <ion-input required type="email" [(ngModel)]="account.email" name="email" pattern="[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})"></ion-input>\n        </ion-item>\n  \n  \n        <ion-item>\n          <ion-label color="dark" floating>PASSWORD</ion-label>\n          <ion-input required type="password" [(ngModel)]="account.password" name="password"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label color="dark" floating>PASSWORD</ion-label>\n          <ion-input required type="password" [(ngModel)]="passwordConfirm" name="passwordconfirmation"></ion-input>\n        </ion-item>\n  \n        <div padding>\n          <button ion-button color="primary" block>{{ \'NEXT\' }}</button>\n        </div>\n  \n      </ion-list>\n    </form>\n  \n  </ion-content>'/*ion-inline-end:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/signup2/signup2.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
], Signup2Page);

//# sourceMappingURL=signup2.js.map

/***/ })

});
//# sourceMappingURL=8.js.map