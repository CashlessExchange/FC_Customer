webpackJsonp([5],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(304);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let SignupPageModule = class SignupPageModule {
};
SignupPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
        ],
    })
], SignupPageModule);

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_submit_services__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(30);
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





let SignupPage = class SignupPage {
    constructor(alertActrl, navCtrl, navParams, autService, subission) {
        this.alertActrl = alertActrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.autService = autService;
        this.subission = subission;
        this.cardtype = ["American Express", "Discover", "Mastercard", "Visa"];
        this.months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
        this.years = ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028",
            "2029", "2030", "2031", "2032", "2033", "2034", "2035", "2036", "2037", "2038", "2039", "2040"];
        this.userData = { lastname: "", firstname: "", companyname: "", email: "", password: "" };
    }
    signUp(regdata) {
        return __awaiter(this, void 0, void 0, function* () {
            let type = "registration.php?email=" + regdata.email
                + "&username=t" + regdata.username
                + "&password=" + regdata.password
                + "&phone=" + regdata.phone
                + "&city=" + regdata.city
                + "&card_type=" + regdata.cardname
                + "&card_number=" + regdata.cardnumber
                + "&expiry_month=" + regdata.month
                + "&expiry_year=" + regdata.year
                + "&cvv=123" + regdata.checkdigit;
            this.responseData = yield this.autService.serviceFreedom(JSON.stringify({ message: "Freedom Choice App is calling" }), type);
            console.log('inMEthods');
            if (this.responseData.success === 0 && this.responseData.message === "Duplicate email") {
                let somwrong = this.alertActrl.create({
                    title: 'Signup Failed',
                    subTitle: 'Email already in use.',
                    buttons: ['OK']
                });
                somwrong.present();
            }
            if (this.responseData.success === 0 && this.responseData.message != "Duplicate email") {
                let somwrong = this.alertActrl.create({
                    title: 'Signup Failed',
                    subTitle: 'Please try again later',
                    buttons: ['OK']
                });
                somwrong.present();
            }
            else {
                let somwrong = this.alertActrl.create({
                    title: 'Registration was succesfully',
                    subTitle: 'Enjoy',
                    buttons: ['OK']
                });
                somwrong.present();
                let type = "login.php?email=" + regdata.email + "&password=" + regdata.password;
                let auth = yield this.autService.serviceFreedom(JSON.stringify({ message: "Freedom Choice App is calling" }), type);
                let userdata = JSON.stringify({ mail: regdata.email, id: auth.customerid });
                this.navCtrl.popToRoot();
            }
        });
    }
};
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/signup/signup.html"*/'\n<ion-header>\n    \n      <ion-navbar>\n        <ion-title>Registration</ion-title>\n      </ion-navbar>\n    \n    </ion-header>\n<ion-content padding style="background:url(assets/img/Gk12DbJ0TWiNU1PQbjMe_pexels-photo-220444.jpeg) no-repeat center;background-size:cover;" id="page6">\n  <div class="spacer" style="height:20px;" ></div>\n  \n    <div style="margin-left:-10px;width:calc(100% + 20px);">\n        <img src="assets/img/screenplay.png" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n      </div>\n      <form (ngSubmit)="signUp(f.value)" #f="ngForm">\n        <ion-item>\n            <ion-label>\n              Email\n            </ion-label>\n            <ion-input type="text" placeholder="" name="email" clearInput ngModel required></ion-input>\n          </ion-item>\n        <ion-item>\n          <ion-label>\n            Username\n          </ion-label>\n          <ion-input type="text" placeholder="" name="username" ngModel required></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>\n              Password\n            </ion-label>\n            <ion-input type="password" placeholder="" name="password" ngModel required></ion-input>\n          </ion-item>\n        <ion-item>\n          <ion-label>\n            Phonenumber\n          </ion-label>\n          <ion-input type="numbers" placeholder="" name="phone" ngModel required></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            City\n          </ion-label>\n          <ion-input type="text" placeholder="" name="city" ngModel required></ion-input>\n        </ion-item>\n        <div class="spacer" style="width:300px;height:33px;"></div>\n        \n          <ion-item>\n              <ion-label>\n                cardtype\n              </ion-label>\n              <ion-select name="cardname" ngModel required>\n                <ion-option *ngFor="let type of cardtype">\n                  {{type}}\n                </ion-option>\n        \n              </ion-select>\n            </ion-item>\n        <ion-item >\n            <ion-label>\n              cardnumber\n            </ion-label>\n            <ion-input type="number" placeholder="" name="cardnumber" ngModel required></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>\n              month\n            </ion-label>\n            <ion-select name="month" ngModel required>\n              <ion-option *ngFor="let month of months">\n                {{month}}\n              </ion-option>\n      \n            </ion-select>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              year\n            </ion-label>\n            <ion-select name="year" ngModel required>\n              <ion-option *ngFor="let year of years">\n                {{year}}\n              </ion-option>\n            </ion-select>\n          </ion-item>\n          <ion-item>\n              <ion-label>\n                check digit\n              </ion-label>\n              <ion-input type="password number" placeholder="" name="checkdigit" ngModel required></ion-input>\n            </ion-item>\n        <button ion-button color="primary" block type="submit" [disabled]="!f.valid">\n            Sign up\n          </button>\n      </form>\n\n  </ion-content>'/*ion-inline-end:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/signup/signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_2__services_submit_services__["a" /* SumbitService */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=5.js.map