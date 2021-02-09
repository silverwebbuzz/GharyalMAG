(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");







var routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]
    }
];
var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());



/***/ }),

/***/ "./src/app/settings/settings.page.html":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar class=\"clr\" text-center>\n        <ion-buttons slot=\"start\">\n          <ion-menu-button color=\"light\"></ion-menu-button>\n        </ion-buttons>\n        <img src=\"../assets/img/logo.png\" class=\"logo\"/>\n      </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"page-setting\">\n\n  <ion-label class=\"text-label\">\n    Text Size\n  </ion-label>\n\n  <ion-card class=\"text-card\">\n  <ion-text class=\"text-test\" [ngStyle]=\"{'font-size': fontSize + 'px'}\">\n      Contrary to popular belief, Lorem Ipsum is not simply random text. \n  </ion-text>\n  </ion-card>\n\n  <ion-item lines=\"none\">\n      <ion-range min=\"10\" max=\"24\" pin=\"true\" [value]=\"fontSize\" color=\"tertiary\" (ionChange)=\"onChangeText($event.target.value)\">\n        <ion-icon slot=\"start\" size=\"small\" name=\"logo-angular\"></ion-icon>>\n        <ion-icon slot=\"end\" name=\"logo-angular\"></ion-icon>>\n      </ion-range>\n    </ion-item>  \n\n    <ion-item lines=\"none\" class=\"btn-item\">\n      <ion-button fill=\"clear\" size=\"large\" class=\"btn\" routerLink=\"/privacy\">\n          LEGAL TERMS & CONDITIONS\n          <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n      </ion-button>      \n    </ion-item>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/settings/settings.page.scss":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-setting .text-label {\n  width: 100%;\n  display: inline-block;\n  text-align: center;\n  font-size: 25px;\n  margin-top: 25px; }\n\n.page-setting .text-card {\n  box-shadow: 0px 0px 0px 0px;\n  margin: 0px;\n  height: 100px;\n  margin-top: 40px;\n  padding: 0px 20px 0px 20px; }\n\n.page-setting .text-card .text-test {\n    width: 100%;\n    display: inline-block;\n    text-align: center; }\n\n.page-setting .btn-item {\n  border: 1px solid #ccc;\n  margin-top: 25px; }\n\n.page-setting .btn-item .btn {\n    width: 100%;\n    color: #000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3QvbGF0ZXN0LWdoYXJ5YWwtbWFnL3NyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR1EsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQVB4QjtFQVVRLDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGdCQUFnQjtFQUVoQiwwQkFBMEIsRUFBQTs7QUFmbEM7SUFrQlEsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixrQkFBa0IsRUFBQTs7QUFwQjFCO0VBd0JRLHNCQUFzQjtFQUN0QixnQkFBZ0IsRUFBQTs7QUF6QnhCO0lBNEJZLFdBQVU7SUFDVixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1zZXR0aW5ne1xuXG4gICAgLnRleHQtbGFiZWx7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIH1cbiAgICAudGV4dC1jYXJke1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHg7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgICAgICAvL21hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICAgIHBhZGRpbmc6IDBweCAyMHB4IDBweCAyMHB4O1xuXG4gICAgLnRleHQtdGVzdHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cbiAgICAuYnRuLWl0ZW17XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IFxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuXG4gICAgICAgIC5idG57XG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/settings/settings.page.ts":
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");



var SettingsPage = /** @class */ (function () {
    function SettingsPage(storage) {
        this.storage = storage;
        this.fontSize = 18;
    }
    SettingsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('font-size').then(function (val) {
            if (val) {
                _this.fontSize = val;
            }
        });
    };
    SettingsPage.prototype.onChangeText = function (value) {
        this.fontSize = value;
        this.storage.set('font-size', value);
    };
    SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.page.html */ "./src/app/settings/settings.page.html"),
            styles: [__webpack_require__(/*! ./settings.page.scss */ "./src/app/settings/settings.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
    ], SettingsPage);
    return SettingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=settings-settings-module.js.map