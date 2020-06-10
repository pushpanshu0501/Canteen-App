webpackJsonp([21],{

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hall1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Hall1Page = /** @class */ (function () {
    function Hall1Page(alertCtrl, afDatabase, afauth, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.afDatabase = afDatabase;
        this.afauth = afauth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Hall1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Hall1Page');
    };
    Hall1Page.prototype.alert = function (message) {
        this.alertCtrl.create({
            title: 'Info!',
            subTitle: message,
            buttons: ['OK'],
        }).present();
    };
    Hall1Page.prototype.maggie_add = function () {
    };
    Hall1Page.prototype.coffee_add = function () {
    };
    Hall1Page.prototype.random_add = function () {
    };
    Hall1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hall1',template:/*ion-inline-start:"/home/pushpanshu/Desktop/Apps/yo/src/pages/hall1/hall1.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Hall1</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-slides pager>\n\n    <ion-slide style="background-color:turquoise">\n      <ion-header>\n        <ion-navbar>\n          <ion-title>Orders</ion-title>\n        </ion-navbar>\n      </ion-header>\n\n\n\n    </ion-slide>\n  \n    <ion-slide style="background-color:turquoise">\n      <ion-header>\n        <ion-navbar>\n          <ion-title>Menu</ion-title>\n        </ion-navbar>\n      </ion-header>\n\n\n      <ion-list>\n        <ion-item>\n          Maggie\n          <button block ion-button icon-end (click)=maggie_add()>\n            <ion-icon name="add-circle-outline"></ion-icon>\n          </button>\n        </ion-item>\n        <ion-item>\n          Coffee\n          <button block ion-button icon-end (click)=coffee_add()>\n            <ion-icon name="add-circle-outline"></ion-icon>\n          </button>\n        </ion-item>\n        <ion-item>\n          Random\n          <button block ion-button icon-end (click)=random_add()>\n            <ion-icon name="add-circle-outline"></ion-icon>\n          </button>\n        </ion-item>\n      </ion-list> \n\n    </ion-slide>\n  \n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/home/pushpanshu/Desktop/Apps/yo/src/pages/hall1/hall1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], Hall1Page);
    return Hall1Page;
}());

//# sourceMappingURL=hall1.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hall11Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the Hall11Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Hall11Page = /** @class */ (function () {
    function Hall11Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Hall11Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Hall11Page');
    };
    Hall11Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hall11',template:/*ion-inline-start:"/home/pushpanshu/Desktop/Apps/yo/src/pages/hall11/hall11.html"*/'<!--\n  Generated template for the Hall11Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Hall11</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-slides pager>\n\n    <ion-slide style="background-color:turquoise">\n      <ion-header>\n        <ion-navbar>\n          <ion-title>Orders</ion-title>\n        </ion-navbar>\n      </ion-header>\n\n\n\n    </ion-slide>\n  \n    <ion-slide style="background-color:turquoise">\n      <ion-header>\n        <ion-navbar>\n          <ion-title>Menu</ion-title>\n        </ion-navbar>\n      </ion-header>\n\n\n      <ion-list>\n        <ion-item>\n          Maggie\n          <button block ion-button icon-end>\n            <ion-icon name="add-circle-outline"></ion-icon>\n          </button>\n        </ion-item>\n        <ion-item>\n          Coffee\n          <button block ion-button icon-end>\n            <ion-icon name="add-circle-outline"></ion-icon>\n          </button>\n        </ion-item>\n        <ion-item>\n          Random\n          <button block ion-button icon-end>\n            <ion-icon name="add-circle-outline"></ion-icon>\n          </button>\n        </ion-item>\n      </ion-list> \n\n    </ion-slide>\n  \n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/home/pushpanshu/Desktop/Apps/yo/src/pages/hall11/hall11.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], Hall11Page);
    return Hall11Page;
}());

//# sourceMappingURL=hall11.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hall12Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the Hall12Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Hall12Page = /** @class */ (function () {
    function Hall12Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Hall12Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Hall12Page');
    };
    Hall12Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hall12',template:/*ion-inline-start:"/home/pushpanshu/Desktop/Apps/yo/src/pages/hall12/hall12.html"*/'<!--\n  Generated template for the Hall12Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Hall12</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-slides pager>\n\n    <ion-slide style="background-color:turquoise">\n      <ion-header>\n        <ion-navbar>\n          <ion-title>Orders</ion-title>\n        </ion-navbar>\n      </ion-header>\n\n\n\n    </ion-slide>\n  \n    <ion-slide style="background-color:turquoise">\n      <ion-header>\n        <ion-navbar>\n          <ion-title>Menu</ion-title>\n        </ion-navbar>\n      </ion-header>\n\n\n      <ion-list>\n        <ion-item>\n          Maggie\n          <button block ion-button icon-end>\n            <ion-icon name="add-circle-outline"></ion-icon>\n          </button>\n        </ion-item>\n        <ion-item>\n          Coffee\n          <button block ion-button icon-end>\n            <ion-icon name="add-circle-outline"></ion-icon>\n          </button>\n        </ion-item>\n        <ion-item>\n          Random\n          <button block ion-button icon-end>\n            <ion-icon name="add-circle-outline"></ion-icon>\n          </button>\n        </ion-item>\n      </ion-list> \n\n    </ion-slide>\n  \n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/home/pushpanshu/Desktop/Apps/yo/src/pages/hall12/hall12.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], Hall12Page);
    return Hall12Page;
}());

//# sourceMappingURL=hall12.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hall10Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the Hall10Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Hall10Page = /** @class */ (function () {
    function Hall10Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Hall10Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Hall10Page');
    };
    Hall10Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hall10',template:/*ion-inline-start:"/home/pushpanshu/Desktop/Apps/yo/src/pages/hall10/hall10.html"*/'<!--\n  Generated template for the Hall10Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Hall10</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-slides pager>\n\n    <ion-slide style="background-color:turquoise">\n      <ion-header>\n        <ion-navbar>\n          <ion-title>Orders</ion-title>\n        </ion-navbar>\n      </ion-header>\n\n\n\n    </ion-slide>\n  \n    <ion-slide style="background-color:turquoise">\n      <ion-header>\n        <ion-navbar>\n          <ion-title>Menu</ion-title>\n        </ion-navbar>\n      </ion-header>\n\n\n      <ion-list>\n        <ion-item>\n          Maggie\n          <button block ion-button icon-end>\n            <ion-icon name="add-circle-outline"></ion-icon>\n          </button>\n        </ion-item>\n        <ion-item>\n          Coffee\n          <button block ion-button icon-end>\n            <ion-icon name="add-circle-outline"></ion-icon>\n          </button>\n        </ion-item>\n        <ion-item>\n          Random\n          <button block ion-button icon-end>\n            <ion-icon name="add-circle-outline"></ion-icon>\n          </button>\n        </ion-item>\n      </ion-list> \n\n    </ion-slide>\n  \n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/home/pushpanshu/Desktop/Apps/yo/src/pages/hall10/hall10.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], Hall10Page);
    return Hall10Page;
}());

//# sourceMappingURL=hall10.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hall2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the Hall2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Hall2Page = /** @class */ (function () {
    function Hall2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Hall2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Hall2Page');
    };
    Hall2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hall2',template:/*ion-inline-start:"/home/pushpanshu/Desktop/Apps/yo/src/pages/hall2/hall2.html"*/'<!--\n  Generated template for the Hall2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Hall2</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-slides pager>\n\n    <ion-slide style="background-color:turquoise">\n      <ion-header>\n        <ion-navbar>\n          <ion-title>Orders</ion-title>\n        </ion-navbar>\n      </ion-header>\n\n\n\n    </ion-slide>\n  \n    <ion-slide style="background-color:turquoise">\n      <ion-header>\n        <ion-navbar>\n          <ion-title>Menu</ion-title>\n        </ion-navbar>\n      </ion-header>\n\n\n      <ion-list>\n        <ion-item>\n          Maggie\n          <button block ion-button icon-end>\n            <ion-icon name="add-circle-outline"></ion-icon>\n          </button>\n        </ion-item>\n        <ion-item>\n          Coffee\n          <button block ion-button icon-end>\n            <ion-icon name="add-circle-outline"></ion-icon>\n          </button>\n        </ion-item>\n        <ion-item>\n          Random\n          <button block ion-button icon-end>\n            <ion-icon name="add-circle-outline"></ion-icon>\n          </button>\n        </ion-item>\n      </ion-list> \n\n    </ion-slide>\n  \n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/home/pushpanshu/Desktop/Apps/yo/src/pages/hall2/hall2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], Hall2Page);
    return Hall2Page;
}());

//# sourceMappingURL=hall2.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hall13Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the Hall13Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Hall13Page = /** @class */ (function () {
    function Hall13Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Hall13Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Hall13Page');
    };
    Hall13Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hall13',template:/*ion-inline-start:"/home/pushpanshu/Desktop/Apps/yo/src/pages/hall13/hall13.html"*/'<!--\n  Generated template for the Hall13Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Hall13</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-slides pager>\n\n    <ion-slide style="background-color:turquoise">\n      <ion-header>\n        <ion-navbar>\n          <ion-title>Orders</ion-title>\n        </ion-navbar>\n      </ion-header>\n\n\n\n    </ion-slide>\n  \n    <ion-slide style="background-color:turquoise">\n      <ion-header>\n        <ion-navbar>\n          <ion-title>Menu</ion-title>\n        </ion-navbar>\n      </ion-header>\n\n\n      <ion-list>\n        <ion-item>\n          Maggie\n          <button block ion-button icon-end>\n            <ion-icon name="add-circle-outline"></ion-icon>\n          </button>\n        </ion-item>\n        <ion-item>\n          Coffee\n          <button block ion-button icon-end>\n            <ion-icon name="add-circle-outline"></ion-icon>\n          </button>\n        </ion-item>\n        <ion-item>\n          Random\n          <button block ion-button icon-end>\n            <ion-icon name="add-circle-outline"></ion-icon>\n          </button>\n        </ion-item>\n      </ion-list> \n\n    </ion-slide>\n  \n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/home/pushpanshu/Desktop/Apps/yo/src/pages/hall13/hall13.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], Hall13Page);
    return Hall13Page;
}());

//# sourceMappingURL=hall13.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hall3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the Hall3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Hall3Page = /** @class */ (function () {
    function Hall3Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Hall3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Hall3Page');
    };
    Hall3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hall3',template:/*ion-inline-start:"/home/pushpanshu/Desktop/Apps/yo/src/pages/hall3/hall3.html"*/'<!--\n  Generated template for the Hall3Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Hall3</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-slides pager>\n\n    <ion-slide style="background-color:turquoise">\n      <ion-header>\n        <ion-navbar>\n          <ion-title>Orders</ion-title>\n        </ion-navbar>\n      </ion-header>\n\n\n\n    </ion-slide>\n  \n    <ion-slide style="background-color:turquoise">\n      <ion-header>\n        <ion-navbar>\n          <ion-title>Menu</ion-title>\n        </ion-navbar>\n      </ion-header>\n\n\n      <ion-list>\n        <ion-item>\n          Maggie\n          <button block ion-button icon-end>\n            <ion-icon name="add-circle-outline"></ion-icon>\n          </button>\n        </ion-item>\n        <ion-item>\n          Coffee\n          <button block ion-button icon-end>\n            <ion-icon name="add-circle-outline"></ion-icon>\n          </button>\n        </ion-item>\n        <ion-item>\n          Random\n          <button block ion-button icon-end>\n            <ion-icon name="add-circle-outline"></ion-icon>\n          </button>\n        </ion-item>\n      </ion-list> \n\n    </ion-slide>\n  \n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/home/pushpanshu/Desktop/Apps/yo/src/pages/hall3/hall3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], Hall3Page);
    return Hall3Page;
}());

//# sourceMappingURL=hall3.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hall4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the Hall4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Hall4Page = /** @class */ (function () {
    function Hall4Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Hall4Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Hall4Page');
    };
    Hall4Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hall4',template:/*ion-inline-start:"/home/pushpanshu/Desktop/Apps/yo/src/pages/hall4/hall4.html"*/'<!--\n  Generated template for the Hall4Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Hall4</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-slides pager>\n\n    <ion-slide style="background-color:turquoise">\n      <ion-header>\n        <ion-navbar>\n          <ion-title>Orders</ion-title>\n        </ion-navbar>\n      </ion-header>\n\n\n\n    </ion-slide>\n  \n    <ion-slide style="background-color:turquoise">\n      <ion-header>\n        <ion-navbar>\n          <ion-title>Menu</ion-title>\n        </ion-navbar>\n      </ion-header>\n\n\n      <ion-list>\n        <ion-item>\n          Maggie\n          <button block ion-button icon-end>\n            <ion-icon name="add-circle-outline"></ion-icon>\n          </button>\n        </ion-item>\n        <ion-item>\n          Coffee\n          <button block ion-button icon-end>\n            <ion-icon name="add-circle-outline"></ion-icon>\n          </button>\n        </ion-item>\n        <ion-item>\n          Random\n          <button block ion-button icon-end>\n            <ion-icon name="add-circle-outline"></ion-icon>\n          </button>\n        </ion-item>\n      </ion-list> \n\n    </ion-slide>\n  \n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/home/pushpanshu/Desktop/Apps/yo/src/pages/hall4/hall4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], Hall4Page);
    return Hall4Page;
}());

//# sourceMappingURL=hall4.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hall5Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the Hall5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Hall5Page = /** @class */ (function () {
    function Hall5Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Hall5Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Hall5Page');
    };
    Hall5Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hall5',template:/*ion-inline-start:"/home/pushpanshu/Desktop/Apps/yo/src/pages/hall5/hall5.html"*/'<!--\n  Generated template for the Hall5Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Hall5</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-slides pager>\n\n    <ion-slide style="background-color:turquoise">\n      <ion-header>\n        <ion-navbar>\n          <ion-title>Orders</ion-title>\n        </ion-navbar>\n      </ion-header>\n\n\n\n    </ion-slide>\n  \n    <ion-slide style="background-color:turquoise">\n      <ion-header>\n        <ion-navbar>\n          <ion-title>Menu</ion-title>\n        </ion-navbar>\n      </ion-header>\n\n\n      <ion-list>\n        <ion-item>\n          Maggie\n          <button block ion-button icon-end>\n            <ion-icon name="add-circle-outline"></ion-icon>\n          </button>\n        </ion-item>\n        <ion-item>\n          Coffee\n          <button block ion-button icon-end>\n            <ion-icon name="add-circle-outline"></ion-icon>\n          </button>\n        </ion-item>\n        <ion-item>\n          Random\n          <button block ion-button icon-end>\n            <ion-icon name="add-circle-outline"></ion-icon>\n          </button>\n        </ion-item>\n      </ion-list> \n\n    </ion-slide>\n  \n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/home/pushpanshu/Desktop/Apps/yo/src/pages/hall5/hall5.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], Hall5Page);
    return Hall5Page;
}());

//# sourceMappingURL=hall5.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hall6Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the Hall6Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Hall6Page = /** @class */ (function () {
    function Hall6Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Hall6Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Hall6Page');
    };
    Hall6Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hall6',template:/*ion-inline-start:"/home/pushpanshu/Desktop/Apps/yo/src/pages/hall6/hall6.html"*/'<!--\n  Generated template for the Hall6Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Hall6</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-slides pager>\n\n    <ion-slide style="background-color:turquoise">\n      <ion-header>\n        <ion-navbar>\n          <ion-title>Orders</ion-title>\n        </ion-navbar>\n      </ion-header>\n\n\n\n    </ion-slide>\n  \n    <ion-slide style="background-color:turquoise">\n      <ion-header>\n        <ion-navbar>\n          <ion-title>Menu</ion-title>\n        </ion-navbar>\n      </ion-header>\n\n\n      <ion-list>\n        <ion-item>\n          Maggie\n          <button block ion-button icon-end>\n            <ion-icon name="add-circle-outline"></ion-icon>\n          </button>\n        </ion-item>\n        <ion-item>\n          Coffee\n          <button block ion-button icon-end>\n            <ion-icon name="add-circle-outline"></ion-icon>\n          </button>\n        </ion-item>\n        <ion-item>\n          Random\n          <button block ion-button icon-end>\n            <ion-icon name="add-circle-outline"></ion-icon>\n          </button>\n        </ion-item>\n      </ion-list> \n\n    </ion-slide>\n  \n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/home/pushpanshu/Desktop/Apps/yo/src/pages/hall6/hall6.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], Hall6Page);
    return Hall6Page;
}());

//# sourceMappingURL=hall6.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hall8Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the Hall8Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Hall8Page = /** @class */ (function () {
    function Hall8Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Hall8Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Hall8Page');
    };
    Hall8Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hall8',template:/*ion-inline-start:"/home/pushpanshu/Desktop/Apps/yo/src/pages/hall8/hall8.html"*/'<!--\n  Generated template for the Hall8Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Hall8</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-slides pager>\n\n    <ion-slide style="background-color:turquoise">\n      <ion-header>\n        <ion-navbar>\n          <ion-title>Orders</ion-title>\n        </ion-navbar>\n      </ion-header>\n\n\n\n    </ion-slide>\n  \n    <ion-slide style="background-color:turquoise">\n      <ion-header>\n        <ion-navbar>\n          <ion-title>Menu</ion-title>\n        </ion-navbar>\n      </ion-header>\n\n\n      <ion-list>\n        <ion-item>\n          Maggie\n          <button block ion-button icon-end>\n            <ion-icon name="add-circle-outline"></ion-icon>\n          </button>\n        </ion-item>\n        <ion-item>\n          Coffee\n          <button block ion-button icon-end>\n            <ion-icon name="add-circle-outline"></ion-icon>\n          </button>\n        </ion-item>\n        <ion-item>\n          Random\n          <button block ion-button icon-end>\n            <ion-icon name="add-circle-outline"></ion-icon>\n          </button>\n        </ion-item>\n      </ion-list> \n\n    </ion-slide>\n  \n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/home/pushpanshu/Desktop/Apps/yo/src/pages/hall8/hall8.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], Hall8Page);
    return Hall8Page;
}());

//# sourceMappingURL=hall8.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hall9Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the Hall9Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Hall9Page = /** @class */ (function () {
    function Hall9Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Hall9Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Hall9Page');
    };
    Hall9Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hall9',template:/*ion-inline-start:"/home/pushpanshu/Desktop/Apps/yo/src/pages/hall9/hall9.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Hall9</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-slides pager>\n\n    <ion-slide style="background-color:turquoise">\n      <ion-header>\n        <ion-navbar>\n          <ion-title>Orders</ion-title>\n        </ion-navbar>\n      </ion-header>\n\n\n\n    </ion-slide>\n  \n    <ion-slide style="background-color:turquoise">\n      <ion-header>\n        <ion-navbar>\n          <ion-title>Menu</ion-title>\n        </ion-navbar>\n      </ion-header>\n\n\n      <ion-list>\n        <ion-item>\n          Maggie\n          <button block ion-button icon-end>\n            <ion-icon name="add-circle-outline"></ion-icon>\n          </button>\n        </ion-item>\n        <ion-item>\n          Coffee\n          <button block ion-button icon-end>\n            <ion-icon name="add-circle-outline"></ion-icon>\n          </button>\n        </ion-item>\n        <ion-item>\n          Random\n          <button block ion-button icon-end>\n            <ion-icon name="add-circle-outline"></ion-icon>\n          </button>\n        </ion-item>\n      </ion-list> \n\n    </ion-slide>\n  \n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/home/pushpanshu/Desktop/Apps/yo/src/pages/hall9/hall9.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], Hall9Page);
    return Hall9Page;
}());

//# sourceMappingURL=hall9.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hall7Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the Hall7Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Hall7Page = /** @class */ (function () {
    function Hall7Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Hall7Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Hall7Page');
    };
    Hall7Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hall7',template:/*ion-inline-start:"/home/pushpanshu/Desktop/Apps/yo/src/pages/hall7/hall7.html"*/'<!--\n  Generated template for the Hall7Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Hall7</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-slides pager>\n\n    <ion-slide style="background-color:turquoise">\n      <ion-header>\n        <ion-navbar>\n          <ion-title>Orders</ion-title>\n        </ion-navbar>\n      </ion-header>\n\n\n\n    </ion-slide>\n  \n    <ion-slide style="background-color:turquoise">\n      <ion-header>\n        <ion-navbar>\n          <ion-title>Menu</ion-title>\n        </ion-navbar>\n      </ion-header>\n\n\n      <ion-list>\n        <ion-item>\n          Maggie\n          <button block ion-button icon-end>\n            <ion-icon name="add-circle-outline"></ion-icon>\n          </button>\n        </ion-item>\n        <ion-item>\n          Coffee\n          <button block ion-button icon-end>\n            <ion-icon name="add-circle-outline"></ion-icon>\n          </button>\n        </ion-item>\n        <ion-item>\n          Random\n          <button block ion-button icon-end>\n            <ion-icon name="add-circle-outline"></ion-icon>\n          </button>\n        </ion-item>\n      </ion-list> \n\n    </ion-slide>\n  \n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/home/pushpanshu/Desktop/Apps/yo/src/pages/hall7/hall7.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], Hall7Page);
    return Hall7Page;
}());

//# sourceMappingURL=hall7.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shopkeeper_shopkeeper__ = __webpack_require__(176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.student = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.shopkeeper = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__shopkeeper_shopkeeper__["a" /* ShopkeeperPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/pushpanshu/Desktop/Apps/yo/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>CanteenBook</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="login">\n\n\n  <p color="light">           Choose your Area :)       </p>\n\n  <button ion-button block color="secondary" (click)=shopkeeper() >Shop-Keeper</button>\n\n  <button ion-button block color="primary" (click)=student()>Student</button>\n\n\n\n  <img src="assets/imgs/bluelog.jpg" alt="iitk-logo" width="500" height="333">\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/pushpanshu/Desktop/Apps/yo/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logged_logged__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.signIn = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__logged_logged__["a" /* LoggedPage */]);
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('username'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "uname", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "password", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/pushpanshu/Desktop/Apps/yo/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>CanteenBook</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <p>\n    Welcome to My CanteenBook App.\n  </p>\n<div padding>\n  <button block ion-button (click)=signIn() >Sign In</button>\n</div>\n\n<div padding>\n  <button color= \'light\' block ion-button (click)=register() >Register</button>\n</div>\n\n<img src="assets/imgs/bluelog.jpg" alt="iitk-logo" width="500" height="333">\n<p> \n  This App is Developed by Pushpanshu Tripathi.\n</p>\n</ion-content>\n'/*ion-inline-end:"/home/pushpanshu/Desktop/Apps/yo/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__halls_halls__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoggedPage = /** @class */ (function () {
    function LoggedPage(alertCtrl, afAuth, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoggedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoggedPage');
    };
    LoggedPage.prototype.alert = function (message) {
        this.alertCtrl.create({
            title: 'Info!',
            subTitle: message,
            buttons: ['OK'],
        }).present();
    };
    LoggedPage.prototype.signInUser = function () {
        var _this = this;
        var res = this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password)
            .then(function (data) {
            //console.log('with', this.email, this.password);
            _this.alert('Success! You are logged in');
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__halls_halls__["a" /* HallsPage */]);
        })
            .catch(function (error) {
            console.log('got an error', error);
            _this.alert(error.message);
        });
        //console.log('Would signin with',this.email,this.password);
        /*if( res.user ){
          this.user.setUser({
            username,
            uid: res.user.uid,
          })
        }*/
    };
    LoggedPage.prototype.here = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */]);
    };
    LoggedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-logged',template:/*ion-inline-start:"/home/pushpanshu/Desktop/Apps/yo/src/pages/logged/logged.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n<ion-list>\n\n  <ion-item>\n    <ion-label floating >Email_Id</ion-label>\n    <ion-input type="text" [(ngModel)]="email"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating >Password</ion-label>\n    <ion-input type="password" [(ngModel)]="password"></ion-input>\n  </ion-item>\n\n</ion-list>\n\n<div padding>\n  <button block ion-button (click)=signInUser() >Sign In</button>\n</div>\n\n<p>Don\'t have an Id?</p>\n<button ion-button clear (click)=here() >Register Here</button>\n</ion-content>\n\n'/*ion-inline-end:"/home/pushpanshu/Desktop/Apps/yo/src/pages/logged/logged.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoggedPage);
    return LoggedPage;
}());

//# sourceMappingURL=logged.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HallsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hall1_hall1__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hall2_hall2__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hall3_hall3__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hall4_hall4__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__hall5_hall5__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__hall6_hall6__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__hall7_hall7__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__hall8_hall8__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__hall9_hall9__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__hall10_hall10__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__hall11_hall11__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__hall12_hall12__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__hall13_hall13__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var HallsPage = /** @class */ (function () {
    function HallsPage(alertCtrl, afAuth, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HallsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HallsPage');
    };
    HallsPage.prototype.hall1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__hall1_hall1__["a" /* Hall1Page */]);
    };
    HallsPage.prototype.hall2 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__hall2_hall2__["a" /* Hall2Page */]);
    };
    HallsPage.prototype.hall3 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__hall3_hall3__["a" /* Hall3Page */]);
    };
    HallsPage.prototype.hall4 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__hall4_hall4__["a" /* Hall4Page */]);
    };
    HallsPage.prototype.hall5 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__hall5_hall5__["a" /* Hall5Page */]);
    };
    HallsPage.prototype.hall6 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__hall6_hall6__["a" /* Hall6Page */]);
    };
    HallsPage.prototype.hall7 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__hall7_hall7__["a" /* Hall7Page */]);
    };
    HallsPage.prototype.hall8 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__hall8_hall8__["a" /* Hall8Page */]);
    };
    HallsPage.prototype.hall9 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__hall9_hall9__["a" /* Hall9Page */]);
    };
    HallsPage.prototype.hall10 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__hall10_hall10__["a" /* Hall10Page */]);
    };
    HallsPage.prototype.hall11 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__hall11_hall11__["a" /* Hall11Page */]);
    };
    HallsPage.prototype.hall12 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__hall12_hall12__["a" /* Hall12Page */]);
    };
    HallsPage.prototype.hall13 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__hall13_hall13__["a" /* Hall13Page */]);
    };
    HallsPage.prototype.logout = function () {
        var _this = this;
        this.afAuth.auth.signOut()
            .then(function (data) {
            _this.navCtrl.push('LoggedPage');
        });
    };
    HallsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-halls',template:/*ion-inline-start:"/home/pushpanshu/Desktop/Apps/yo/src/pages/halls/halls.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Halls</ion-title>\n\n    <div padding right>\n      <button clear ion-button (click)=logout() >Log-Out</button>\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div padding>\n    <button block ion-button (click)=hall1() >Hall-1</button>\n  </div>\n  <div padding>\n    <button block ion-button (click)=hall2() >Hall-2</button>\n  </div>\n  <div padding>\n    <button block ion-button (click)=hall3() >Hall-3</button>\n  </div>\n  <div padding>\n    <button block ion-button (click)=hall4() >Hall-4</button>\n  </div>\n  <div padding>\n    <button block ion-button (click)=hall5() >Hall-5</button>\n  </div>\n  <div padding>\n    <button block ion-button (click)=hall6() >Hall-6</button>\n  </div>\n  <div padding>\n    <button block ion-button (click)=hall7() >Hall-7</button>\n  </div>\n  <div padding>\n    <button block ion-button (click)=hall8() >Hall-8</button>\n  </div>\n  <div padding>\n    <button block ion-button (click)=hall9() >Hall-9</button>\n  </div>\n  <div padding>\n    <button block ion-button (click)=hall10() >Hall-10</button>\n  </div>\n  <div padding>\n    <button block ion-button (click)=hall11() >Hall-11</button>\n  </div>\n  <div padding>\n    <button block ion-button (click)=hall12() >Hall-12</button>\n  </div>\n  <div padding>\n    <button block ion-button (click)=hall13() >Hall-13</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/pushpanshu/Desktop/Apps/yo/src/pages/halls/halls.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HallsPage);
    return HallsPage;
}());

//# sourceMappingURL=halls.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
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
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(alertCtrl, afDatabase, afauth, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.afDatabase = afDatabase;
        this.afauth = afauth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.profile = {};
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.alert = function (message) {
        this.alertCtrl.create({
            title: 'Info!',
            subTitle: message,
            buttons: ['OK'],
        }).present();
    };
    ProfilePage.prototype.createProfile = function () {
        var _this = this;
        this.afauth.authState.take(1).subscribe(function (auth) {
            _this.afDatabase.object("profile/" + auth.uid).set(_this.profile).then(function () { return _this.alert("Success!! Welcome to My App"); });
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/home/pushpanshu/Desktop/Apps/yo/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>profile</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-label floating> Username </ion-label>\n    <ion-input [(ngModel)]="profile.username"> </ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating> First Name </ion-label>\n    <ion-input [(ngModel)]="profile.firstName"> </ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating> Last Name</ion-label>\n    <ion-input [(ngModel)]="profile.lastName"> </ion-input>\n  </ion-item>\n\n  <button ion-button clear block (click)=createProfile()>Create Profile</button>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/pushpanshu/Desktop/Apps/yo/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopkeeperPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the ShopkeeperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShopkeeperPage = /** @class */ (function () {
    function ShopkeeperPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ShopkeeperPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShopkeeperPage');
    };
    ShopkeeperPage.prototype.see = function () {
    };
    ShopkeeperPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-shopkeeper',template:/*ion-inline-start:"/home/pushpanshu/Desktop/Apps/yo/src/pages/shopkeeper/shopkeeper.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>shopkeeper</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-label floating> Username </ion-label>\n    <ion-input [(ngModel)]="student"> </ion-input>\n  </ion-item>\n  <button ion-button clear block (click)=see()>Look At History</button>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/pushpanshu/Desktop/Apps/yo/src/pages/shopkeeper/shopkeeper.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ShopkeeperPage);
    return ShopkeeperPage;
}());

//# sourceMappingURL=shopkeeper.js.map

/***/ }),

/***/ 215:
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
webpackEmptyAsyncContext.id = 215;

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/hall1/hall1.module": [
		517,
		20
	],
	"../pages/hall10/hall10.module": [
		520,
		19
	],
	"../pages/hall11/hall11.module": [
		518,
		18
	],
	"../pages/hall12/hall12.module": [
		519,
		17
	],
	"../pages/hall13/hall13.module": [
		522,
		16
	],
	"../pages/hall2/hall2.module": [
		521,
		15
	],
	"../pages/hall3/hall3.module": [
		523,
		14
	],
	"../pages/hall4/hall4.module": [
		524,
		13
	],
	"../pages/hall5/hall5.module": [
		525,
		12
	],
	"../pages/hall6/hall6.module": [
		526,
		11
	],
	"../pages/hall7/hall7.module": [
		529,
		10
	],
	"../pages/hall8/hall8.module": [
		527,
		9
	],
	"../pages/hall9/hall9.module": [
		528,
		8
	],
	"../pages/halls/halls.module": [
		531,
		7
	],
	"../pages/home/home.module": [
		530,
		6
	],
	"../pages/logged/logged.module": [
		532,
		5
	],
	"../pages/login/login.module": [
		533,
		4
	],
	"../pages/newstudent/newstudent.module": [
		535,
		3
	],
	"../pages/profile/profile.module": [
		534,
		2
	],
	"../pages/register/register.module": [
		537,
		1
	],
	"../pages/shopkeeper/shopkeeper.module": [
		536,
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
webpackAsyncContext.id = 256;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewStudentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the NewStudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewStudentPage = /** @class */ (function () {
    function NewStudentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NewStudentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewStudentPage');
    };
    NewStudentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newstudent',template:/*ion-inline-start:"/home/pushpanshu/Desktop/Apps/yo/src/pages/newstudent/newstudent.html"*/'<!--\n  Generated template for the NewStudentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>newStudent</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/pushpanshu/Desktop/Apps/yo/src/pages/newstudent/newstudent.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], NewStudentPage);
    return NewStudentPage;
}());

//# sourceMappingURL=newstudent.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_logged_logged__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_register_register__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_halls_halls__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_hall1_hall1__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_hall2_hall2__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_hall3_hall3__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_hall4_hall4__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_hall5_hall5__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_hall6_hall6__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_hall7_hall7__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_hall8_hall8__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_hall9_hall9__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_hall10_hall10__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_hall11_hall11__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_hall12_hall12__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_hall13_hall13__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angularfire2__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2_auth__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_home_home__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_shopkeeper_shopkeeper__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_profile_profile__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angularfire2_database__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_newstudent_newstudent__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var firebaseAuth = {
    apiKey: "AIzaSyCytVpXzAgBRjdda1bjxczokalO3YcmGTU",
    authDomain: "new-426aa.firebaseapp.com",
    databaseURL: "https://new-426aa.firebaseio.com",
    projectId: "new-426aa",
    storageBucket: "new-426aa.appspot.com",
    messagingSenderId: "117538529290",
    appId: "1:117538529290:web:1fb18fd5b2fbede1dfbff3",
    measurementId: "G-Z0JSF5R6H0"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_logged_logged__["a" /* LoggedPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_halls_halls__["a" /* HallsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_hall1_hall1__["a" /* Hall1Page */],
                __WEBPACK_IMPORTED_MODULE_11__pages_hall2_hall2__["a" /* Hall2Page */],
                __WEBPACK_IMPORTED_MODULE_12__pages_hall3_hall3__["a" /* Hall3Page */],
                __WEBPACK_IMPORTED_MODULE_13__pages_hall4_hall4__["a" /* Hall4Page */],
                __WEBPACK_IMPORTED_MODULE_14__pages_hall5_hall5__["a" /* Hall5Page */],
                __WEBPACK_IMPORTED_MODULE_15__pages_hall6_hall6__["a" /* Hall6Page */],
                __WEBPACK_IMPORTED_MODULE_16__pages_hall7_hall7__["a" /* Hall7Page */],
                __WEBPACK_IMPORTED_MODULE_17__pages_hall8_hall8__["a" /* Hall8Page */],
                __WEBPACK_IMPORTED_MODULE_18__pages_hall9_hall9__["a" /* Hall9Page */],
                __WEBPACK_IMPORTED_MODULE_19__pages_hall10_hall10__["a" /* Hall10Page */],
                __WEBPACK_IMPORTED_MODULE_20__pages_hall11_hall11__["a" /* Hall11Page */],
                __WEBPACK_IMPORTED_MODULE_21__pages_hall12_hall12__["a" /* Hall12Page */],
                __WEBPACK_IMPORTED_MODULE_22__pages_hall13_hall13__["a" /* Hall13Page */],
                __WEBPACK_IMPORTED_MODULE_25__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_shopkeeper_shopkeeper__["a" /* ShopkeeperPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_newstudent_newstudent__["a" /* NewStudentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/hall1/hall1.module#Hall1PageModule', name: 'Hall1Page', segment: 'hall1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hall11/hall11.module#Hall11PageModule', name: 'Hall11Page', segment: 'hall11', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hall12/hall12.module#Hall12PageModule', name: 'Hall12Page', segment: 'hall12', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hall10/hall10.module#Hall10PageModule', name: 'Hall10Page', segment: 'hall10', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hall2/hall2.module#Hall2PageModule', name: 'Hall2Page', segment: 'hall2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hall13/hall13.module#Hall13PageModule', name: 'Hall13Page', segment: 'hall13', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hall3/hall3.module#Hall3PageModule', name: 'Hall3Page', segment: 'hall3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hall4/hall4.module#Hall4PageModule', name: 'Hall4Page', segment: 'hall4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hall5/hall5.module#Hall5PageModule', name: 'Hall5Page', segment: 'hall5', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hall6/hall6.module#Hall6PageModule', name: 'Hall6Page', segment: 'hall6', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hall8/hall8.module#Hall8PageModule', name: 'Hall8Page', segment: 'hall8', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hall9/hall9.module#Hall9PageModule', name: 'Hall9Page', segment: 'hall9', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hall7/hall7.module#Hall7PageModule', name: 'Hall7Page', segment: 'hall7', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/halls/halls.module#HallsPageModule', name: 'HallsPage', segment: 'halls', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/logged/logged.module#LoggedPageModule', name: 'LoggedPage', segment: 'logged', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/newstudent/newstudent.module#NewStudentPageModule', name: 'NewStudentPage', segment: 'newstudent', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shopkeeper/shopkeeper.module#ShopkeeperPageModule', name: 'ShopkeeperPage', segment: 'shopkeeper', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_23_angularfire2__["AngularFireModule"].initializeApp(firebaseAuth),
                __WEBPACK_IMPORTED_MODULE_24_angularfire2_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_28_angularfire2_database__["AngularFireDatabaseModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_logged_logged__["a" /* LoggedPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_halls_halls__["a" /* HallsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_hall1_hall1__["a" /* Hall1Page */],
                __WEBPACK_IMPORTED_MODULE_11__pages_hall2_hall2__["a" /* Hall2Page */],
                __WEBPACK_IMPORTED_MODULE_12__pages_hall3_hall3__["a" /* Hall3Page */],
                __WEBPACK_IMPORTED_MODULE_13__pages_hall4_hall4__["a" /* Hall4Page */],
                __WEBPACK_IMPORTED_MODULE_14__pages_hall5_hall5__["a" /* Hall5Page */],
                __WEBPACK_IMPORTED_MODULE_15__pages_hall6_hall6__["a" /* Hall6Page */],
                __WEBPACK_IMPORTED_MODULE_16__pages_hall7_hall7__["a" /* Hall7Page */],
                __WEBPACK_IMPORTED_MODULE_17__pages_hall8_hall8__["a" /* Hall8Page */],
                __WEBPACK_IMPORTED_MODULE_18__pages_hall9_hall9__["a" /* Hall9Page */],
                __WEBPACK_IMPORTED_MODULE_19__pages_hall10_hall10__["a" /* Hall10Page */],
                __WEBPACK_IMPORTED_MODULE_20__pages_hall11_hall11__["a" /* Hall11Page */],
                __WEBPACK_IMPORTED_MODULE_21__pages_hall12_hall12__["a" /* Hall12Page */],
                __WEBPACK_IMPORTED_MODULE_22__pages_hall13_hall13__["a" /* Hall13Page */],
                __WEBPACK_IMPORTED_MODULE_25__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_shopkeeper_shopkeeper__["a" /* ShopkeeperPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_newstudent_newstudent__["a" /* NewStudentPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/pushpanshu/Desktop/Apps/yo/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/pushpanshu/Desktop/Apps/yo/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterPage = /** @class */ (function () {
    function RegisterPage(alertCtrl, afAuth, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.alert = function (message) {
        this.alertCtrl.create({
            title: 'Info!',
            subTitle: message,
            buttons: ['OK'],
        }).present();
    };
    RegisterPage.prototype.registerUser = function (email, password) {
        var _this = this;
        this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password)
            .then(function (data) {
            //console.log('got data',data);
            _this.alert('Registered!');
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */]);
        })
            .catch(function (error) {
            console.log('got an error');
            //console.log('data with',this.email);
            _this.alert(error.message);
        });
        //console.log('Would register user with', this.email,this.password);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/home/pushpanshu/Desktop/Apps/yo/src/pages/register/register.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Create Account</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n<ion-list>\n\n  <ion-item>\n    <ion-label floating >Email_Id</ion-label>\n    <ion-input type="email" [(ngModel)]="email" ></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating >Password</ion-label>\n    <ion-input type="password" [(ngModel)]="password"></ion-input>\n  </ion-item>\n\n</ion-list>\n\n<div padding>\n  <button block ion-button (click)=registerUser() item-left >Register</button>\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/pushpanshu/Desktop/Apps/yo/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ })

},[310]);
//# sourceMappingURL=main.js.map