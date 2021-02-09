(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-details-module"],{

/***/ "./src/app/details/details.module.ts":
/*!*******************************************!*\
  !*** ./src/app/details/details.module.ts ***!
  \*******************************************/
/*! exports provided: DetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function() { return DetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details.page */ "./src/app/details/details.page.ts");







var routes = [
    {
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"]
    }
];
var DetailsPageModule = /** @class */ (function () {
    function DetailsPageModule() {
    }
    DetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_details_page__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"]]
        })
    ], DetailsPageModule);
    return DetailsPageModule;
}());



/***/ }),

/***/ "./src/app/details/details.page.html":
/*!*******************************************!*\
  !*** ./src/app/details/details.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar class=\"clr\" text-center>\n      <ion-buttons slot=\"start\">\n          <ion-button (click)=\"goBack()\"><ion-icon color=\"light\" name=\"arrow-back\"></ion-icon></ion-button>\n          <!-- <ion-back-button  ></ion-back-button> -->\n      </ion-buttons>\n      <ion-title>\n        {{category_name}}\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content class=\"card-background-page\">\n\n    <ion-item-divider class=\"bg\" sticky>\n        <ion-label>\n            {{post_publish_date}}\n        </ion-label>\n      </ion-item-divider>\n\n      <ion-card (click)=\"openGallery(post_id)\">\n          <img *ngIf=\"!post_featured_img\" src=\"../../assets/img/noimage2.png\" class=\"card-size\" />\n          <img *ngIf=\"post_featured_img\" src=\"{{post_featured_img}}\" class=\"card-size\" />\n      \n        </ion-card>\n\n        <div class=\"detail-title\">\n          <ion-label>\n              {{post_title | uppercase}}\n          </ion-label>\n          <hr>\n        </div>\n\n        <div class=\"details\">\n          <ion-text [innerHTML]=\"post_content\" [ngStyle]=\"{'font-size': fontSize + 'px'}\">\n          </ion-text>\n        </div>\n\n          <ion-footer class=\"detail-footer\">\n              <ion-row>\n                <ion-col class=\"btn-fix\">\n                  <ion-button fill=\"clear\" class=\"btn\" (click)=\"sharePicker()\">\n                  Share\n                  <ion-icon name=\"share\" mode=\"ios\" class=\"share-btn\"></ion-icon>\n                  </ion-button>\n                </ion-col>\n                <ion-col class=\"btn-fix\">\n                    <ion-button *ngIf=\"!isFavorite\" fill=\"clear\" class=\"btn\" (click)=\"addtofav(post_id)\">\n                    Favorite\n                    <ion-icon name=\"star-outline\" class=\"share-btn\"></ion-icon>\n                    </ion-button>\n                    <ion-button *ngIf=\"isFavorite\" fill=\"clear\" class=\"btn\" (click)=\"unFav(post_id)\">\n                      Remove \n                      <ion-icon name=\"star\" class=\"share-btn\"></ion-icon>\n                      </ion-button>\n                  </ion-col>\n              </ion-row>\n            </ion-footer>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/details/details.page.scss":
/*!*******************************************!*\
  !*** ./src/app/details/details.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title-ios {\n  text-align: center;\n  left: -10px; }\n\n.detail-title {\n  text-align: center;\n  margin: 10px;\n  font-size: 24px; }\n\n.detail-title hr {\n    border-bottom: solid 2px;\n    width: 50%; }\n\n.details {\n  font-size: 12px;\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-bottom: 10px;\n  text-align: center; }\n\n.details ion-text {\n    line-height: 1.4;\n    color: #333; }\n\n.detail-footer .btn-fix {\n  border: gray solid 1px;\n  text-align: center;\n  padding: 0px; }\n\n.detail-footer .btn-fix .btn {\n    color: black;\n    margin-top: 0px;\n    margin-bottom: 0px; }\n\n.detail-footer .btn-fix .share-btn {\n    margin-left: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3QvbGF0ZXN0LWdoYXJ5YWwtbWFnL3NyYy9hcHAvZGV0YWlscy9kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWUsRUFBQTs7QUFIbkI7SUFLUSx3QkFBd0I7SUFDeEIsVUFBVSxFQUFBOztBQUlsQjtFQUNJLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFMdEI7SUFPUSxnQkFBZ0I7SUFDaEIsV0FBVyxFQUFBOztBQVFuQjtFQUdRLHNCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQUxwQjtJQU9ZLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCLEVBQUE7O0FBVDlCO0lBWVksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kZXRhaWxzL2RldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlLWlvc3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxlZnQ6IC0xMHB4O1xyXG59XHJcblxyXG4uZGV0YWlsLXRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgaHJ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4O1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5kZXRhaWxze1xyXG4gICAgZm9udC1zaXplOiAxMnB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyBcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDsgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaW9uLXRleHR7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgICAgICBjb2xvcjogIzMzMztcclxuICAgIH1cclxufVxyXG4vLyBpb24tdGV4dHtcclxuLy8gICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgXHJcbi8vIH1cclxuXHJcbi5kZXRhaWwtZm9vdGVye1xyXG5cclxuICAgIC5idG4tZml4e1xyXG4gICAgICAgIGJvcmRlcjpncmF5IHNvbGlkIDFweDsgICAgICAgICBcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIC5idG57XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zaGFyZS1idG57XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/details/details.page.ts":
/*!*****************************************!*\
  !*** ./src/app/details/details.page.ts ***!
  \*****************************************/
/*! exports provided: DetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPage", function() { return DetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/rest.service */ "./src/app/api/rest.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");







var DetailsPage = /** @class */ (function () {
    function DetailsPage(router, navCtrl, platform, socialSharing, route, rest, modalCtrl, menu, storage) {
        var _this = this;
        this.router = router;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.socialSharing = socialSharing;
        this.route = route;
        this.rest = rest;
        this.modalCtrl = modalCtrl;
        this.menu = menu;
        this.storage = storage;
        this.fontSize = 18;
        this.isFavorite = false;
        this.message = 'Check out the Gharyal MAG!';
        this.url = 'http://gharyal.com/';
        this.category_name = this.route.snapshot.paramMap.get('name');
        this.post_id = this.route.snapshot.paramMap.get('id');
        this.rest.presentLoading();
        this.storage.get('font-size').then(function (val) {
            if (val) {
                _this.fontSize = val;
            }
        });
        this.rest.get('apis/blogdetail/' + this.post_id)
            .subscribe(function (val) {
            if (val) {
                var details = JSON.parse(val);
                _this.post_id = details.post_id;
                _this.post_title = details.title;
                _this.post_featured_img = details.featured_img;
                _this.post_content = details.content;
                _this.post_publish_date = details.publish_time;
                _this.rest.isFavorite(_this.post_id).then(function (isFav) {
                    if (isFav) {
                        _this.isFavorite = true;
                    }
                });
            }
        }, function (err) {
            console.log('error:', err);
        });
        this.closeMenu();
        this.closeModal();
        this.rest.dismissLoading();
    }
    DetailsPage.prototype.ngOnInit = function () {
    };
    DetailsPage.prototype.openGallery = function (post_id) {
        var url = '/gallery/' + post_id;
        this.router.navigateByUrl(url);
    };
    DetailsPage.prototype.closeMenu = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var elementMenu;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                try {
                    elementMenu = this.menu.getOpen();
                    if (elementMenu !== null) {
                        this.menu.close();
                        return [2 /*return*/];
                    }
                }
                catch (_b) {
                }
                return [2 /*return*/];
            });
        });
    };
    DetailsPage.prototype.closeModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var elementModal, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.modalCtrl.getTop()];
                    case 1:
                        elementModal = _b.sent();
                        if (elementModal) {
                            elementModal.dismiss();
                            return [2 /*return*/];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        _a = _b.sent();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DetailsPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    DetailsPage.prototype.sharePicker = function () {
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
    DetailsPage.prototype.addtofav = function (postId) {
        var _this = this;
        this.rest.isFavorite(postId).then(function (isFav) {
            if (isFav) {
                _this.rest.presentToast('This Blog Already Exists in Fav List.');
            }
            else {
                _this.isFavorite = true;
                _this.rest.favoriteFilm(postId).then(function () {
                    _this.rest.presentToast('Added in Fav List.');
                });
            }
        });
    };
    DetailsPage.prototype.unFav = function (postId) {
        var _this = this;
        this.rest.unfavoriteFilm(postId).then(function () {
            _this.rest.getAllFavoriteFilms().then(function (result) {
                _this.isFavorite = false;
            });
        });
    };
    DetailsPage.prototype.goBack = function () {
        this.navCtrl.back();
    };
    DetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.page.html */ "./src/app/details/details.page.html"),
            styles: [__webpack_require__(/*! ./details.page.scss */ "./src/app/details/details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__["SocialSharing"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _api_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]])
    ], DetailsPage);
    return DetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=details-details-module.js.map