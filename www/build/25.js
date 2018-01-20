webpackJsonp([25],{

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPageModule", function() { return CategoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category__ = __webpack_require__(488);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CategoryPageModule = (function () {
    function CategoryPageModule() {
    }
    return CategoryPageModule;
}());
CategoryPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__category__["a" /* CategoryPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__category__["a" /* CategoryPage */]),
        ],
    })
], CategoryPageModule);

//# sourceMappingURL=category.module.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__marketplace_marketplace__ = __webpack_require__(348);
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





var CategoryPage = (function () {
    function CategoryPage(navCtrl, api, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    CategoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CategoryPage');
    };
    CategoryPage.prototype.ionViewWillEnter = function () {
        console.log("ionviewdidEnter");
        this.getList();
        this.filterList();
    };
    CategoryPage.prototype.getList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var databasecreds, items;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        databasecreds = {
                            username: "username",
                            password: "test",
                        };
                        return [4 /*yield*/, this.api.marketPlaceService(databasecreds, "fetchAllDeals.php")];
                    case 1:
                        items = _a.sent();
                        console.log(items.deals);
                        this.items = items.deals;
                        return [2 /*return*/];
                }
            });
        });
    };
    CategoryPage.prototype.filterList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var databasecreds, filter;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        databasecreds = {
                            username: "username",
                            password: "test",
                        };
                        return [4 /*yield*/, this.api.marketPlaceService(databasecreds, "fetchCityAndCategory.php")];
                    case 1:
                        filter = _a.sent();
                        this.categories = filter.categories;
                        this.cities = filter.cities;
                        console.log(this.cities);
                        return [2 /*return*/];
                }
            });
        });
    };
    CategoryPage.prototype.itemSelected = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var databasecreds;
            return __generator(this, function (_a) {
                databasecreds = {
                    username: "username",
                    password: "test",
                };
                console.log(id);
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__marketplace_marketplace__["a" /* MarketplacePage */], { item: id });
                return [2 /*return*/];
            });
        });
    };
    CategoryPage.prototype.listCity = function () {
        this.items = this.cities;
        this.selector = "city_id";
    };
    CategoryPage.prototype.listCategory = function () {
        this.items = this.categories;
        this.selector = "category_id";
    };
    CategoryPage.prototype.doFilter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var databasecreds, items, databasecreds, items, databasecreds, items;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.city != undefined && this.category != undefined)) return [3 /*break*/, 2];
                        databasecreds = {
                            username: "username",
                            password: "test",
                        };
                        return [4 /*yield*/, this.api.marketPlaceService(databasecreds, "fetchAllDeals.php?category_id=" + this.category + "&city_id=" + this.city)];
                    case 1:
                        items = _a.sent();
                        this.items = items.deals;
                        _a.label = 2;
                    case 2:
                        if (!(this.city === undefined && this.category != undefined)) return [3 /*break*/, 4];
                        console.log(this.category);
                        databasecreds = {
                            username: "username",
                            password: "test",
                        };
                        return [4 /*yield*/, this.api.marketPlaceService(databasecreds, "fetchAllDeals.php?category_id=" + this.category)];
                    case 3:
                        items = _a.sent();
                        this.items = items.deals;
                        _a.label = 4;
                    case 4:
                        if (!(this.city != undefined && this.category === undefined)) return [3 /*break*/, 6];
                        console.log(this.city);
                        databasecreds = {
                            username: "username",
                            password: "test",
                        };
                        return [4 /*yield*/, this.api.marketPlaceService(databasecreds, "fetchAllDeals.php?city_id=" + this.city)];
                    case 5:
                        items = _a.sent();
                        this.items = items.deals;
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    CategoryPage.prototype.reset = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.city = '';
                this.category = '';
                this.getList();
                return [2 /*return*/];
            });
        });
    };
    return CategoryPage;
}());
CategoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-category',template:/*ion-inline-start:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/category/category.html"*/'<ion-header>\n\n    <ion-navbar>\n      \n      <ion-buttons start>\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n\n      </ion-buttons>\n      <ion-title>Marketplace</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n\n\n<ion-content padding class="background">\n    <ion-item no-lines>\n        <ion-label fixed>City</ion-label>        \n    <ion-select  [(ngModel)]="city" >\n        <ion-option *ngFor="let f of cities" value="{{ f.id }}">{{ f.name }}</ion-option>\n    </ion-select>\n    \n    </ion-item>\n    <ion-item no-line>\n        <ion-label fixed>Category</ion-label>\n        <ion-select  [(ngModel)]="category" >\n            <ion-option *ngFor="let f of categories" value="{{ f.id }}">{{ f.name }}</ion-option>\n        </ion-select>\n    </ion-item>\n    <ion-grid>\n        <ion-row>\n          <ion-col>\n              <button ion-button color="light" (click)="doFilter()">Filter</button>\n          </ion-col>\n          <ion-col col-6>\n            \n          </ion-col>\n          <ion-col>\n              <button ion-button color="danger" (click)="reset()">Reset</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    <ion-list>\n          <ion-card *ngFor="let item of items" (click)="itemSelected(item)" no-lines block>\n            <img [src]="item.deal_image">\n            <ion-card-content>\n              <ion-card-title>\n                {{ item.deal_title }}\n                </ion-card-title>\n                <p>{{item.deal_description}}</p>\n                <ion-item>\n                    <h1 item-end><s>$ {{item.deal_value}}</s></h1>\n                  </ion-item>\n                  <ion-item>\n                    <ion-icon name=\'pricetag\' item-end ></ion-icon>\n                    <h1 item-end style="color: #0bdd1d">$ {{item.discounted_value}}</h1>\n                  </ion-item>\n            </ion-card-content>\n          </ion-card>\n      </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mariaschanz/Desktop/ionic-test/freedomchoice/src/pages/category/category.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* Api */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], CategoryPage);

//# sourceMappingURL=category.js.map

/***/ })

});
//# sourceMappingURL=25.js.map