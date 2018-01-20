webpackJsonp([20],{

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailPageModule", function() { return ItemDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_detail__ = __webpack_require__(493);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ItemDetailPageModule = (function () {
    function ItemDetailPageModule() {
    }
    return ItemDetailPageModule;
}());
ItemDetailPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__item_detail__["a" /* ItemDetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__item_detail__["a" /* ItemDetailPage */]),
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__item_detail__["a" /* ItemDetailPage */]
        ]
    })
], ItemDetailPageModule);

//# sourceMappingURL=item-detail.module.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailPage; });
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



var ItemDetailPage = (function () {
    function ItemDetailPage(autService, navCtrl, navParams) {
        this.autService = autService;
        this.navCtrl = navCtrl;
        this.token = "";
        this.splitted = [];
        this.lat = 0;
        this.lng = 0;
        this.logo = "assets/img/shop_merchant.png";
        this.cert = {
            merchantlogo: this.logo
        };
        this.item = navParams.get('item');
        this.showDetails();
    }
    ItemDetailPage.prototype.showDetails = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.merchantData()];
                    case 1:
                        _a.sent();
                        this.initMap();
                        return [2 /*return*/];
                }
            });
        });
    };
    ItemDetailPage.prototype.merchantData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var merchantdata, merchantname, merchantlogo, merchantaddress, merchantmail, cert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getMerchantData(this.item)];
                    case 1:
                        merchantdata = _a.sent();
                        merchantname = merchantdata.name;
                        merchantlogo = this.logo;
                        if (merchantdata.logo != undefined && merchantdata.logo.length != 0) {
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
    ItemDetailPage.prototype.initMap = function () {
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
    ItemDetailPage.prototype.addMarker = function (position, map) {
        return new google.maps.Marker({
            position: position,
            map: map
        });
    };
    ItemDetailPage.prototype.getMerchantData = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var databasecreds, merch;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        databasecreds = {
                            username: "merchantbackuser",
                            password: "150498AV",
                            reference: "",
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
    return ItemDetailPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('map'),
    __metadata("design:type", Object)
], ItemDetailPage.prototype, "mapElement", void 0);
ItemDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-item-detail',template:/*ion-inline-start:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/item-detail/item-detail.html"*/'<ion-header>\n  \n    <ion-navbar>\n      <ion-title>Merchant Information</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding style="background:url(assets/img/Gk12DbJ0TWiNU1PQbjMe_pexels-photo-220444.jpg) no-repeat center;background-size:cover;">\n    <ion-card>\n  \n      <ion-item>\n        <ion-avatar item-start>\n          <img [src]="cert.merchantlogo">\n        </ion-avatar>\n        <h2>Merchant: {{cert.merchantname}}</h2>\n        <p>{{cert.merchantmail}}</p>\n      </ion-item>\n  \n\n  \n    </ion-card>\n    <div id="map" #map></div>\n  \n  </ion-content>'/*ion-inline-end:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/item-detail/item-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* Api */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], ItemDetailPage);

//# sourceMappingURL=item-detail.js.map

/***/ })

});
//# sourceMappingURL=20.js.map