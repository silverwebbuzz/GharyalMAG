(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gallery-gallery-module"],{

/***/ "./src/app/gallery/gallery.module.ts":
/*!*******************************************!*\
  !*** ./src/app/gallery/gallery.module.ts ***!
  \*******************************************/
/*! exports provided: GalleryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPageModule", function() { return GalleryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _gallery_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gallery.page */ "./src/app/gallery/gallery.page.ts");







var routes = [
    {
        path: '',
        component: _gallery_page__WEBPACK_IMPORTED_MODULE_6__["GalleryPage"]
    }
];
var GalleryPageModule = /** @class */ (function () {
    function GalleryPageModule() {
    }
    GalleryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_gallery_page__WEBPACK_IMPORTED_MODULE_6__["GalleryPage"]]
        })
    ], GalleryPageModule);
    return GalleryPageModule;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.page.html":
/*!*******************************************!*\
  !*** ./src/app/gallery/gallery.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon name=\"close\" color=\"dark\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title text-center>{{current_slider_index}}/{{total_slider_number}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"sharePicker()\">\n        <ion-icon name=\"share\" mode=\"ios\" color=\"dark\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"gallery-page\">\n\n    <ion-card class=\"card-center\">\n        \n          <ion-slides *ngIf=\"SliderArray\" [options]=\"SlideOption\" #Slides_banner class=\"slide-preview\" (ionSlideDidChange)=\"SlideDidChange()\">\n            <ion-slide *ngFor=\"let img of SliderArray;let i = index;\">\n              <img src=\"{{img.img}}\" class=\"preview-pic\"/>\n            </ion-slide>\n          </ion-slides>\n          <ion-text *ngIf=\"!SliderArray\" class=\"no_posts_div\">No Data Found.</ion-text>\n      </ion-card>\n      \n</ion-content>\n\n<ion-footer class=\"gallery-footer\">\n  <ion-row *ngIf=\"SliderArray\">\n    <ion-col size=\"2\">\n        <ion-button fill=\"clear\" (click)=\"prev()\">\n            <ion-icon name=\"arrow-back\" mode=\"ios\" color=\"dark\"></ion-icon>\n        </ion-button>\n    </ion-col>\n    <ion-col size=\"8\">\n        <ion-card class=\"card-2\">\n            <ion-slides [options]=\"SlideOptionthumb\" #Slides_banner_thumb class=\"slide-thumb\" (ionSlideDidChange)=\"SlideThumbDidChange()\">\n                <ion-slide *ngFor=\"let img of SliderArray; let i = index;\" (click)=\"clickThumbFunction(i)\">\n                  <img src=\"{{img.img}}\" class=\"thumb-pic\"/>\n                </ion-slide>\n              </ion-slides>\n        </ion-card>\n    </ion-col>\n    <ion-col size=\"2\">\n        <ion-button fill=\"clear\" (click)=\"next()\">\n            <ion-icon name=\"arrow-forward\" mode=\"ios\" color=\"dark\"></ion-icon>\n        </ion-button>\n    </ion-col>\n    </ion-row>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/gallery/gallery.page.scss":
/*!*******************************************!*\
  !*** ./src/app/gallery/gallery.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gallery-page .card-center {\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n  text-align: center;\n  box-shadow: 0px 0px 0px 0px;\n  margin: 0px;\n  color: #000; }\n  .gallery-page .card-center .slide-preview {\n    border: solid 2px #eee; }\n  .gallery-page .card-center .slide-preview .preview-pic {\n      width: 100%;\n      margin: auto; }\n  .swiper-slide:before {\n  content: '';\n  background-color: rgba(255, 255, 255, 0.5);\n  position: absolute;\n  top: 0;\n  width: 100%;\n  left: 0;\n  right: 0;\n  height: 100%; }\n  .swiper-slide-active::before {\n  background-color: unset !important; }\n  .gallery-footer {\n  padding: 5px; }\n  .gallery-footer .slide-thumb .thumb-pic {\n    width: auto;\n    margin: auto; }\n  .card-2 {\n  border-radius: 0; }\n  .no_posts_div {\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3QvbGF0ZXN0LWdoYXJ5YWwtbWFnL3NyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUtRLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLFdBQVcsRUFBQTtFQVhuQjtJQWNRLHNCQUFzQixFQUFBO0VBZDlCO01Ba0JZLFdBQVU7TUFDVixZQUFZLEVBQUE7RUFPeEI7RUFFUSxXQUFXO0VBQ1QsMENBQXVDO0VBQ3ZDLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sV0FBVztFQUNYLE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWSxFQUFBO0VBR3RCO0VBRVEsa0NBQWtDLEVBQUE7RUFJMUM7RUFHSyxZQUFZLEVBQUE7RUFIakI7SUFXWSxXQUFVO0lBQ1YsWUFBWSxFQUFBO0VBS3hCO0VBQ0ksZ0JBQWdCLEVBQUE7RUFJcEI7RUFDSSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLDJCQUEyQjtFQUMzQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FsbGVyeS1wYWdle1xyXG4gICAgXHJcblxyXG4gICAgLmNhcmQtY2VudGVye1xyXG5cclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHg7IFxyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG5cclxuICAgIC5zbGlkZS1wcmV2aWV3e1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgMnB4ICNlZWU7XHJcblxyXG4gICAgICAgIC5wcmV2aWV3LXBpY3tcclxuICAgICAgICAgICAgLy9oZWlnaHQ6IDIwMHB4OyBcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTsgXHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcbi5zd2lwZXItc2xpZGV7XHJcbiAgICAmOmJlZm9yZXtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG59XHJcbi5zd2lwZXItc2xpZGUtYWN0aXZle1xyXG4gICAgJjo6YmVmb3Jle1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5nYWxsZXJ5LWZvb3RlcntcclxuXHJcbiAgICAvLyBtYXJnaW46IDBweDtcclxuICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAvL2JvcmRlcjogc29saWQgMXB4IGdyZXk7XHJcbiAgICBcclxuICAgIC5zbGlkZS10aHVtYntcclxuICAgICAgICAvL2JvcmRlcjogc29saWQgMnB4ICNlZWU7IFxyXG4gICAgICAgIC8vaGVpZ2h0OiAyMDBweDtcclxuXHJcbiAgICAgICAgLnRodW1iLXBpY3tcclxuICAgICAgICAgICAgd2lkdGg6YXV0bzsgXHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXJkLTJ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcblxyXG5cclxuLm5vX3Bvc3RzX2RpdntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/gallery/gallery.page.ts":
/*!*****************************************!*\
  !*** ./src/app/gallery/gallery.page.ts ***!
  \*****************************************/
/*! exports provided: GalleryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPage", function() { return GalleryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/rest.service */ "./src/app/api/rest.service.ts");






var GalleryPage = /** @class */ (function () {
    function GalleryPage(navCtrl, platform, route, rest, socialSharing) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.route = route;
        this.rest = rest;
        this.socialSharing = socialSharing;
        this.message = 'Check out the Gharyal MAG!';
        this.url = 'http://gharyal.com/';
        this.current_slider_index = 0;
        this.total_slider_number = 6;
        this.SliderArray = [];
        this.SlideOptionthumb = {
            loop: false,
            centeredSlides: true,
            slidesPerView: 3,
            speed: 100,
            direction: 'horizontal',
            spaceBetween: 5,
            zoom: false,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        };
        this.SlideOption = {
            loop: false,
            centeredSlides: false,
            slidesPerView: 1,
            speed: 100,
            zoom: true,
            effect: 'fade',
            spaceBetween: 0,
            thumbs: {
                swiper: this.slider_thumb
            }
        };
        this.post_id = this.route.snapshot.paramMap.get('id');
        this.rest.presentLoading();
        this.rest.get('apis/imagegallery/' + this.post_id)
            .subscribe(function (val) {
            _this.total_slider_number = val.length;
            if (val.length > 0) {
                _this.current_slider_index = 1;
                _this.SliderArray = val;
            }
            else {
                _this.SliderArray = null;
            }
        }, function (err) {
        });
        this.rest.dismissLoading();
    }
    GalleryPage.prototype.clickThumbFunction = function (i) {
        this.slider.slideTo(i);
        this.slider_thumb.slideTo(i);
    };
    GalleryPage.prototype.SlideDidChange = function () {
        var _this = this;
        this.slider.getActiveIndex().then(function (index) {
            _this.slider_thumb.slideTo(index);
            _this.current_slider_index = (index + 1);
        });
        //this.slider_thumb.slideTo(i + 1);
    };
    GalleryPage.prototype.SlideThumbDidChange = function () {
        var _this = this;
        this.slider_thumb.getActiveIndex().then(function (index) {
            _this.slider.slideTo(index);
            _this.current_slider_index = (index + 1);
        });
    };
    GalleryPage.prototype.back = function () {
        this.navCtrl.back();
    };
    GalleryPage.prototype.ngOnInit = function () {
    };
    GalleryPage.prototype.sharePicker = function () {
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
    GalleryPage.prototype.next = function () {
        this.slider_thumb.slideNext();
    };
    GalleryPage.prototype.prev = function () {
        this.slider_thumb.slidePrev();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('Slides_banner'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], GalleryPage.prototype, "slider", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('Slides_banner_thumb'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], GalleryPage.prototype, "slider_thumb", void 0);
    GalleryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.page.html */ "./src/app/gallery/gallery.page.html"),
            styles: [__webpack_require__(/*! ./gallery.page.scss */ "./src/app/gallery/gallery.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _api_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__["SocialSharing"]])
    ], GalleryPage);
    return GalleryPage;
}());



/***/ })

}]);
//# sourceMappingURL=gallery-gallery-module.js.map