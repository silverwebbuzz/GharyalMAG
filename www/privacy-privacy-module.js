(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["privacy-privacy-module"],{

/***/ "./src/app/privacy/privacy.module.ts":
/*!*******************************************!*\
  !*** ./src/app/privacy/privacy.module.ts ***!
  \*******************************************/
/*! exports provided: PrivacyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPageModule", function() { return PrivacyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _privacy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./privacy.page */ "./src/app/privacy/privacy.page.ts");







var routes = [
    {
        path: '',
        component: _privacy_page__WEBPACK_IMPORTED_MODULE_6__["PrivacyPage"]
    }
];
var PrivacyPageModule = /** @class */ (function () {
    function PrivacyPageModule() {
    }
    PrivacyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_privacy_page__WEBPACK_IMPORTED_MODULE_6__["PrivacyPage"]]
        })
    ], PrivacyPageModule);
    return PrivacyPageModule;
}());



/***/ }),

/***/ "./src/app/privacy/privacy.page.html":
/*!*******************************************!*\
  !*** ./src/app/privacy/privacy.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar class=\"clr\" text-center>\n        <ion-buttons slot=\"start\">\n          <ion-back-button color=\"light\"></ion-back-button>\n        </ion-buttons>\n        <img src=\"../assets/img/logo.png\" class=\"logo\"/>\n      </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-text [innerHTML]=\"page_content\">\n      </ion-text>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/privacy/privacy.page.scss":
/*!*******************************************!*\
  !*** ./src/app/privacy/privacy.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-text {\n  padding-left: 10px;\n  position: absolute; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3QvbGF0ZXN0LWdoYXJ5YWwtbWFnL3NyYy9hcHAvcHJpdmFjeS9wcml2YWN5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ByaXZhY3kvcHJpdmFjeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGV4dHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/privacy/privacy.page.ts":
/*!*****************************************!*\
  !*** ./src/app/privacy/privacy.page.ts ***!
  \*****************************************/
/*! exports provided: PrivacyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPage", function() { return PrivacyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/rest.service */ "./src/app/api/rest.service.ts");



var PrivacyPage = /** @class */ (function () {
    function PrivacyPage(rest) {
        this.rest = rest;
    }
    PrivacyPage.prototype.ngOnInit = function () {
        var _this = this;
        this.rest.presentLoading();
        this.rest.get('apis/legaltermconditonpage/')
            .subscribe(function (val) {
            if (val) {
                var details = JSON.parse(val);
                _this.page_content = details.content;
            }
        }, function (err) {
            console.log('error:', err);
        });
        this.rest.dismissLoading();
    };
    PrivacyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-privacy',
            template: __webpack_require__(/*! ./privacy.page.html */ "./src/app/privacy/privacy.page.html"),
            styles: [__webpack_require__(/*! ./privacy.page.scss */ "./src/app/privacy/privacy.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]])
    ], PrivacyPage);
    return PrivacyPage;
}());



/***/ })

}]);
//# sourceMappingURL=privacy-privacy-module.js.map