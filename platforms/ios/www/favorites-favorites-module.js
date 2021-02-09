(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["favorites-favorites-module"],{

/***/ "./src/app/favorites/favorites.module.ts":
/*!***********************************************!*\
  !*** ./src/app/favorites/favorites.module.ts ***!
  \***********************************************/
/*! exports provided: FavoritesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesPageModule", function() { return FavoritesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _favorites_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./favorites.page */ "./src/app/favorites/favorites.page.ts");







var routes = [
    {
        path: '',
        component: _favorites_page__WEBPACK_IMPORTED_MODULE_6__["FavoritesPage"]
    }
];
var FavoritesPageModule = /** @class */ (function () {
    function FavoritesPageModule() {
    }
    FavoritesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_favorites_page__WEBPACK_IMPORTED_MODULE_6__["FavoritesPage"]]
        })
    ], FavoritesPageModule);
    return FavoritesPageModule;
}());



/***/ }),

/***/ "./src/app/favorites/favorites.page.html":
/*!***********************************************!*\
  !*** ./src/app/favorites/favorites.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"clr\" text-center>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <img src=\"../assets/img/logo.png\" class=\"logo\" />\n  </ion-toolbar>\n  <!-- <ion-toolbar class=\"search\" text-center no-padding>\n    <ion-searchbar placeholder=\"\"></ion-searchbar>\n  </ion-toolbar> -->\n</ion-header>\n\n<ion-content class=\"card-background-page\">\n\n  <div *ngFor=\"let post of posts;let i of index;\">\n    <ng-container *ngIf=\"post.length > 0\">\n      <ion-item class=\"bg\">\n        <ion-label>\n         {{post[0].publish_time}}\n        </ion-label>\n      </ion-item>\n\n      <ion-card *ngFor=\"let p of post\" (click)=\"openDetails(p.post_id,p.categories[0].title)\">\n\n        <img [src]=\"p.featured_img\" class=\"card-size\" />\n\n        <div class=\"card-subtitle\">{{p.title}}</div>\n\n      </ion-card>\n    </ng-container>\n  </div>\n\n  <div *ngIf=\"!posts\" class=\"no_posts_div\">\n      <p>No Blog Found.</p>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/favorites/favorites.page.scss":
/*!***********************************************!*\
  !*** ./src/app/favorites/favorites.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".no_posts_div {\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3QvbGF0ZXN0LWdoYXJ5YWwtbWFnL3NyYy9hcHAvZmF2b3JpdGVzL2Zhdm9yaXRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLDJCQUEyQjtFQUMzQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Zhdm9yaXRlcy9mYXZvcml0ZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5ub19wb3N0c19kaXZ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/favorites/favorites.page.ts":
/*!*********************************************!*\
  !*** ./src/app/favorites/favorites.page.ts ***!
  \*********************************************/
/*! exports provided: FavoritesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesPage", function() { return FavoritesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/rest.service */ "./src/app/api/rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var FavoritesPage = /** @class */ (function () {
    function FavoritesPage(platform, socialSharing, rest, router) {
        this.platform = platform;
        this.socialSharing = socialSharing;
        this.rest = rest;
        this.router = router;
        this.message = 'Check out the GharyalTv!';
        this.url = 'http://gharyal.com/';
    }
    FavoritesPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log('test1');
        this.rest.presentLoading();
        // this.rest.get('apis/bloglist/')
        // .subscribe(val => {
        //    let filteredArray = val.map((element) =>
        //    element.filter(x => x.post_id === '1'));
        //    console.log('filteredArray', filteredArray);
        //    this.posts = filteredArray;
        //    //console.log(oneCateData);
        // },err => {
        // });
        this.rest.getAllFavoriteFilms().then(function (result) {
            if (result.length > 0) {
                _this.rest.get('apis/bloglist/')
                    .subscribe(function (val) {
                    var filteredArray = val.map(function (element) {
                        return element.filter(function (x) { return result.some(function (z) { return z === x.post_id; }); });
                    });
                    _this.posts = filteredArray;
                }, function (err) {
                    _this.rest.presentToastWithOptions(err.message);
                });
            }
            else {
                //this.rest.presentToastWithOptions('We Are not Fav list Found.');
            }
        });
        this.rest.dismissLoading();
    };
    FavoritesPage.prototype.sharePicker = function () {
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
    FavoritesPage.prototype.openDetails = function (id, name) {
        var url = 'details/' + id + '/' + name;
        this.router.navigateByUrl(url);
    };
    FavoritesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-favorites',
            template: __webpack_require__(/*! ./favorites.page.html */ "./src/app/favorites/favorites.page.html"),
            styles: [__webpack_require__(/*! ./favorites.page.scss */ "./src/app/favorites/favorites.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__["SocialSharing"], _api_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], FavoritesPage);
    return FavoritesPage;
}());



/***/ })

}]);
//# sourceMappingURL=favorites-favorites-module.js.map