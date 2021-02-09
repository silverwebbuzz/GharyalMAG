(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"clr\" text-center>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n   <img src=\"../assets/img/logo.png\" class=\"logo\"/>\n  </ion-toolbar>\n  <!-- <ion-toolbar class=\"search\" text-center no-padding>\n    <ion-searchbar placeholder=\"\"></ion-searchbar>\n  </ion-toolbar> -->\n</ion-header>\n\n<ion-content class=\"card-background-page\">\n  <div *ngFor=\"let post of posts;let i of index;\">\n    <ion-item-divider class=\"bg\" sticky>\n      <ion-label>\n        {{post[0].publish_time}}\n      </ion-label>\n    </ion-item-divider>\n\n    <ion-card *ngFor=\"let p of post\" (click)=\"openDetails(p.post_id,p.categories[0].title)\">\n\n      <img *ngIf=\"!p.featured_img\" src=\"../../assets/img/noimage2.png\" class=\"card-size\" />\n      <img *ngIf=\"p.featured_img\" [src]=\"p.featured_img\" class=\"card-size\"/>\n\n      <!-- <div class=\"card-btn\">\n          {{p.categories[0].title | uppercase}}\n              \n      </div> -->\n      <!-- <ion-button class=\"card-text\">\n                {{p.categories[0].title | uppercase}}\n              </ion-button> -->\n\n      <div class=\"card-subtitle\">{{p.title}} </div>\n\n    </ion-card>\n  </div>\n</ion-content>\n<!-- <ion-content class=\"card-background-page\">\n\n  <ion-card *ngFor=\"let c of categories\">\n    <img src=\"../assets/img/manwatch.jpg\" class=\"card-size\"/>\n    <div class=\"card-btn\">\n      <ion-button class=\"card-text\" [routerLink]=\"[c.url]\" shape=\"round\">\n        {{c.title | uppercase}}\n      </ion-button>\n    </div>\n  </ion-card>\n\n</ion-content> -->"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home_main_or {\n  margin-left: 40px;\n  margin-right: 40px;\n  overflow: hidden; }\n\n.home_or {\n  position: relative;\n  display: inline-block;\n  margin-right: 15px;\n  margin-left: 15px; }\n\n.home_or span:after, .home_or span:before {\n  content: \"\";\n  position: absolute;\n  height: 5px;\n  border-bottom: 1px solid white;\n  top: 12px;\n  width: 600px; }\n\n.home_or span:before {\n  right: 100%; }\n\n.home_or span:after {\n  left: 100%; }\n\n.home_or span {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  border: 1px solid #fff;\n  color: #fff;\n  display: inline-block;\n  z-index: 9;\n  vertical-align: middle;\n  line-height: 36px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3QvbGF0ZXN0LWdoYXJ5YWwtbWFnL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBR2hCO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLFNBQVM7RUFDVCxZQUFZLEVBQUE7O0FBRWQ7RUFDRSxXQUFXLEVBQUE7O0FBRWY7RUFDRSxVQUFVLEVBQUE7O0FBRVo7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lX21haW5fb3J7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLy9tYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gICAgLmhvbWVfb3J7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICB9XG4gICAgLmhvbWVfb3Igc3BhbjphZnRlciwuaG9tZV9vciBzcGFuOmJlZm9yZXtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBoZWlnaHQ6IDVweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAgIHRvcDogMTJweDtcbiAgICAgIHdpZHRoOiA2MDBweDtcbiAgICB9XG4gICAgLmhvbWVfb3Igc3BhbjpiZWZvcmUge1xuICAgICAgcmlnaHQ6IDEwMCU7XG4gIH1cbiAgLmhvbWVfb3Igc3BhbjphZnRlciB7XG4gICAgbGVmdDogMTAwJTtcbiAgfVxuICAuaG9tZV9vciBzcGFue1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgei1pbmRleDogOTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/rest.service */ "./src/app/api/rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomePage = /** @class */ (function () {
    function HomePage(rest, router) {
        var _this = this;
        this.rest = rest;
        this.router = router;
        this.rest.presentLoading();
        this.rest.get('apis/bloglist/')
            .subscribe(function (val) {
            _this.posts = [];
            if (val) {
                _this.posts = val;
            }
        }, function (err) {
        });
        this.rest.dismissLoading();
    }
    HomePage.prototype.openDetails = function (id, name) {
        var url = 'details/' + id + '/' + name;
        this.router.navigateByUrl(url);
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map