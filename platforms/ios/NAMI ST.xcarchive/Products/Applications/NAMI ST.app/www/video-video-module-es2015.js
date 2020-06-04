(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["video-video-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/video/video.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/video/video.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <img alt=\"logo\" slot=\"end\" height=\"40px\" src=\"assets/img/Logo_WhiteStacked_1024x1024.png\">\n      <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    <ion-title>\n      NAMI Intro\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <video autoplay loop src=\"assets/video/NAMI_intro.mp4\"></video>\n\n  <ion-slides autoplay=\"4000\" pager loop>\n    <ion-slide>\n        <h4>136 support group meetings</h4>\n\n    </ion-slide>\n    <ion-slide>\n        <h4>16,410 requests for resources</h4>\n\n    </ion-slide>\n    <ion-slide>\n        <h4>1,486 trainings & education</h4>\n \n    </ion-slide>\n    <ion-slide>\n      <h4>2,500 served at NAMI’s Closet</h4>\n\n  </ion-slide>\n  <ion-slide>\n    <h4>700+ NAMIWalks participants</h4>\n\n</ion-slide>\n</ion-slides>\n\n</ion-content>\n<ion-footer>\n  <ion-grid>\n      <ion-row>\n          <ion-col col-6><ion-button full routerLink=\"/home\"><ion-icon name=\"search\"></ion-icon>Resources</ion-button>\n          </ion-col>\n          <ion-col col-6><ion-button full routerLink=\"/documents\"><ion-icon name=\"document\"></ion-icon>References</ion-button>\n          </ion-col>\n      </ion-row>\n  </ion-grid>\n</ion-footer>");

/***/ }),

/***/ "./src/app/video/video-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/video/video-routing.module.ts ***!
  \***********************************************/
/*! exports provided: VideoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPageRoutingModule", function() { return VideoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _video_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./video.page */ "./src/app/video/video.page.ts");




const routes = [
    {
        path: '',
        component: _video_page__WEBPACK_IMPORTED_MODULE_3__["VideoPage"]
    }
];
let VideoPageRoutingModule = class VideoPageRoutingModule {
};
VideoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VideoPageRoutingModule);



/***/ }),

/***/ "./src/app/video/video.module.ts":
/*!***************************************!*\
  !*** ./src/app/video/video.module.ts ***!
  \***************************************/
/*! exports provided: VideoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPageModule", function() { return VideoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _video_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./video-routing.module */ "./src/app/video/video-routing.module.ts");
/* harmony import */ var _video_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./video.page */ "./src/app/video/video.page.ts");







let VideoPageModule = class VideoPageModule {
};
VideoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _video_routing_module__WEBPACK_IMPORTED_MODULE_5__["VideoPageRoutingModule"]
        ],
        declarations: [_video_page__WEBPACK_IMPORTED_MODULE_6__["VideoPage"]]
    })
], VideoPageModule);



/***/ }),

/***/ "./src/app/video/video.page.scss":
/*!***************************************!*\
  !*** ./src/app/video/video.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("page-video video {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  min-width: 100%;\n  min-height: 100%;\n  width: auto;\n  height: auto;\n  z-index: -100;\n  -webkit-transform: translateX(-50%) translateY(-50%);\n          transform: translateX(-50%) translateY(-50%);\n}\npage-video ion-header img {\n  opacity: 1;\n  padding: 20px;\n}\npage-video ion-slides {\n  height: 200px;\n  position: absolute;\n  bottom: 0;\n}\npage-video ion-slides ion-slide {\n  color: #fff;\n}\npage-video ion-slides h4 {\n  font-weight: bold;\n}\npage-video ion-slides .swiper-pagination-bullet {\n  background: transparent;\n}\npage-video button {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWNrcmljaGFyZC9OQU1JL21vYmlsZS9iYXNlR0lUL2Jhc2Uvc3JjL2FwcC92aWRlby92aWRlby5wYWdlLnNjc3MiLCJzcmMvYXBwL3ZpZGVvL3ZpZGVvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9EQUFBO1VBQUEsNENBQUE7QUNEUjtBREdJO0VBQ0ksVUFBQTtFQUNBLGFBQUE7QUNEUjtBRElJO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ0ZSO0FESVE7RUFDSSxXQUFBO0FDRlo7QURLUTtFQUNJLGlCQUFBO0FDSFo7QURNUTtFQUNJLHVCQUFBO0FDSlo7QURRSTtFQUNJLGlCQUFBO0FDTlIiLCJmaWxlIjoic3JjL2FwcC92aWRlby92aWRlby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwYWdlLXZpZGVvIHtcblxuICAgIHZpZGVvIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHotaW5kZXg6IC0xMDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICAgIH1cbiAgICBpb24taGVhZGVyIGltZyB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxuXG4gICAgaW9uLXNsaWRlcyB7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAwO1xuXG4gICAgICAgIGlvbi1zbGlkZSB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuXG4gICAgICAgIGg0IHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudFxuICAgICAgICB9XG5cbiAgICB9XG4gICAgYnV0dG9uIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG59IiwicGFnZS12aWRlbyB2aWRlbyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICB6LWluZGV4OiAtMTAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbn1cbnBhZ2UtdmlkZW8gaW9uLWhlYWRlciBpbWcge1xuICBvcGFjaXR5OiAxO1xuICBwYWRkaW5nOiAyMHB4O1xufVxucGFnZS12aWRlbyBpb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG59XG5wYWdlLXZpZGVvIGlvbi1zbGlkZXMgaW9uLXNsaWRlIHtcbiAgY29sb3I6ICNmZmY7XG59XG5wYWdlLXZpZGVvIGlvbi1zbGlkZXMgaDQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbnBhZ2UtdmlkZW8gaW9uLXNsaWRlcyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5wYWdlLXZpZGVvIGJ1dHRvbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/video/video.page.ts":
/*!*************************************!*\
  !*** ./src/app/video/video.page.ts ***!
  \*************************************/
/*! exports provided: VideoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPage", function() { return VideoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let VideoPage = class VideoPage {
    constructor() { }
    ngOnInit() {
    }
};
VideoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-video',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./video.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/video/video.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./video.page.scss */ "./src/app/video/video.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], VideoPage);



/***/ })

}]);
//# sourceMappingURL=video-video-module-es2015.js.map