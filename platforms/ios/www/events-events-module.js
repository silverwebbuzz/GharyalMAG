(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["events-events-module"],{

/***/ "./src/app/events/events.module.ts":
/*!*****************************************!*\
  !*** ./src/app/events/events.module.ts ***!
  \*****************************************/
/*! exports provided: EventsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPageModule", function() { return EventsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _events_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events.page */ "./src/app/events/events.page.ts");







var routes = [
    {
        path: '',
        component: _events_page__WEBPACK_IMPORTED_MODULE_6__["EventsPage"]
    }
];
var EventsPageModule = /** @class */ (function () {
    function EventsPageModule() {
    }
    EventsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_events_page__WEBPACK_IMPORTED_MODULE_6__["EventsPage"]]
        })
    ], EventsPageModule);
    return EventsPageModule;
}());



/***/ }),

/***/ "./src/app/events/events.page.html":
/*!*****************************************!*\
  !*** ./src/app/events/events.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"clr\" text-center>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <img src=\"../assets/img/logo.png\" class=\"logo\" />\n  </ion-toolbar>\n  <!-- <ion-text class=\"header-text\">{{category_name | uppercase}}</ion-text> -->\n</ion-header>\n\n<ion-content class=\"card-background-page\">\n\n  <div *ngFor=\"let post of posts;let i of index;\">\n    <ion-item-divider class=\"bg\" sticky>\n      <ion-label>\n          {{post[0].publish_time}}\n      </ion-label>\n    </ion-item-divider>\n\n    <ion-card *ngFor=\"let p of post\" (click)=\"openDetails(p.post_id,p.categories[0].title)\">\n\n      <img *ngIf=\"!p.featured_img\" src=\"../../assets/img/noimage2.png\" class=\"card-size\" />\n      <img *ngIf=\"p.featured_img\" [src]=\"p.featured_img\" class=\"card-size\"/>\n\n      <!-- <div class=\"card-btn\">\n              <ion-button class=\"card-text\">\n                {{p.categories[0].title | uppercase}}\n              </ion-button>\n      </div> -->\n\n      <div class=\"card-subtitle\">{{p.title}} </div>\n\n    </ion-card>\n  </div>\n  <!-- <ion-list>\n    <ion-item-divider class=\"bg\" sticky>\n      <ion-label>\n        20 Jan\n      </ion-label>\n    </ion-item-divider>\n    <ion-card>\n      <img src=\"../assets/img/manwatch.jpg\" class=\"card-size\" />\n      <div class=\"card-subtitle\">tried calling SplashScreen.hide, but Cordova is not available. Make sure to include\n        cordova.js</div>\n    </ion-card>\n    <ion-card>\n      <img src=\"../assets/img/manwatch.jpg\" class=\"card-size\" />\n      <div class=\"card-subtitle\">tried calling SplashScreen.hide, but Cordova is not available. Make sure to include\n        cordova.js</div>\n    </ion-card>\n    <ion-card>\n      <img src=\"../assets/img/manwatch.jpg\" class=\"card-size\" />\n      <div class=\"card-subtitle\">tried calling SplashScreen.hide, but Cordova is not available. Make sure to include\n        cordova.js</div>\n    </ion-card>\n    <ion-item-divider class=\"bg\" sticky>\n      <ion-label>\n        21 Jan\n      </ion-label>\n    </ion-item-divider>\n    <ion-card>\n      <img src=\"../assets/img/manwatch.jpg\" class=\"card-size\" />\n      <div class=\"card-subtitle\">tried calling SplashScreen.hide, but Cordova is not available. Make sure to include\n        cordova.js</div>\n    </ion-card>\n    <ion-card>\n      <img src=\"../assets/img/manwatch.jpg\" class=\"card-size\" />\n      <div class=\"card-subtitle\">tried calling SplashScreen.hide, but Cordova is not available. Make sure to include\n        cordova.js</div>\n    </ion-card>\n    <ion-card>\n      <img src=\"../assets/img/manwatch.jpg\" class=\"card-size\" />\n      <div class=\"card-subtitle\">tried calling SplashScreen.hide, but Cordova is not available. Make sure to include\n        cordova.js</div>\n    </ion-card>\n  </ion-list> -->\n\n\n\n</ion-content>\n\n<!-- <ion-content class=\"card-background-page\">\n  \n      <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n          <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\" refreshingText=\"Refreshing...\">\n          </ion-refresher-content>\n      </ion-refresher>\n\n  <ion-card>\n\n    <img src=\"../assets/img/manwatch.jpg\" class=\"card-size\" />\n\n    <div class=\"card-title\">tried calling SplashScreen.hide, but Cordova is not available. Make sure to include\n      cordova.js</div>\n\n    <div class=\"card-star\">\n      <ion-button class=\"btn\">\n        <img src=\"../assets/icon/hand-copy.png\" class=\"fav\" />\n      </ion-button>\n    </div>\n\n    <div class=\"card-add\">\n      <b>Jan 20</b>\n    </div>\n\n    <div class=\"card-time\">\n      <ion-button fill=\"clear\" (click)=\"sharePicker()\">\n          <img src=\"../assets/icon/share.png\" class=\"share\"/>\n      </ion-button>\n      </div>\n\n  </ion-card>\n\n</ion-content> -->"

/***/ }),

/***/ "./src/app/events/events.page.scss":
/*!*****************************************!*\
  !*** ./src/app/events/events.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-text {\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n  background-color: #5d5e5e;\n  color: #fff;\n  font-size: 25px;\n  font-weight: 600; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3QvbGF0ZXN0LWdoYXJ5YWwtbWFnL3NyYy9hcHAvZXZlbnRzL2V2ZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBcUI7RUFDdEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2V2ZW50cy9ldmVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci10ZXh0e1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgIHdpZHRoOiAxMDAlO1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgYmFja2dyb3VuZC1jb2xvcjogIzVkNWU1ZTtcbiAgIGNvbG9yOiAjZmZmO1xuICAgZm9udC1zaXplOiAyNXB4O1xuICAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/events/events.page.ts":
/*!***************************************!*\
  !*** ./src/app/events/events.page.ts ***!
  \***************************************/
/*! exports provided: EventsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPage", function() { return EventsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/rest.service */ "./src/app/api/rest.service.ts");






var EventsPage = /** @class */ (function () {
    function EventsPage(platform, socialSharing, route, rest, router) {
        this.platform = platform;
        this.socialSharing = socialSharing;
        this.route = route;
        this.rest = rest;
        this.router = router;
        this.message = 'Check out the Gharyal MAG App!';
        this.url = 'http://gharyal.com/';
    }
    EventsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.catId = this.route.snapshot.paramMap.get('id');
        this.category_name = this.route.snapshot.paramMap.get('name');
        this.rest.presentLoading();
        this.rest.get('apis/bloglist/')
            .subscribe(function (val) {
            var filteredArray = val.map(function (element) {
                return element.filter(function (x) { return x.categories.some(function (z) { return z.category_id === _this.catId; }); });
            });
            console.log('filteredArray', filteredArray);
            _this.posts = filteredArray;
            //console.log(oneCateData);
        }, function (err) {
        });
        this.rest.dismissLoading();
    };
    EventsPage.prototype.doRefresh = function (event) {
    };
    EventsPage.prototype.sharePicker = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.platform.ready()
                    .then(function () {
                    _this.socialSharing.share(_this.message, null, null, _this.url)
                        .then(function (data) {
                        console.log('Shared via SharePicker');
                    })
                        .catch(function (err) {
                        console.log('Was not shared via SharePicker');
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    EventsPage.prototype.openDetails = function (id, name) {
        var url = 'details/' + id + '/' + name;
        this.router.navigateByUrl(url);
    };
    EventsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-events',
            template: __webpack_require__(/*! ./events.page.html */ "./src/app/events/events.page.html"),
            styles: [__webpack_require__(/*! ./events.page.scss */ "./src/app/events/events.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__["SocialSharing"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _api_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], EventsPage);
    return EventsPage;
}());



/***/ })

}]);
//# sourceMappingURL=events-events-module.js.map