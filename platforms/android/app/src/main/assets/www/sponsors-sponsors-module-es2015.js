(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sponsors-sponsors-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sponsors/sponsors.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sponsors/sponsors.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <img alt=\"logo\" slot=\"end\" height=\"40px\" src=\"assets/img/Logo_WhiteStacked_1024x1024.png\" style=\"object-fit: contain !important;\">\n      <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    <ion-title>\n      Sponsors\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n\n  <ion-list *ngFor=\"let sponsor of sponsorsList | async\" class=\"ion-justify-content-center\" >\n\n      <!-- Tier 1 - logo 70% of width, max height -->\n      <ion-row *ngIf=\"sponsor.tier === 1\" >\n        <div class=\"tier1container\">\n          <img id=\"logo\" src=\"{{sponsor.image}}\" (click)=\"viewSponsor(sponsor)\">\n        </div>\n    </ion-row>\n\n    <!-- Tier 2 - logo 60% of width -->\n    <ion-row *ngIf=\"sponsor.tier === 2\">\n        <div class=\"tier2container\">\n          <img id=\"logo\" src=\"{{sponsor.image}}\" (click)=\"viewSponsor(sponsor)\">\n        </div>\n    </ion-row>\n\n    <!-- Tier 3 - logo 50% of width -->\n    <ion-row *ngIf=\"sponsor.tier === 3\">\n        <div class=\"tier3container\">\n          <img id=\"logo\" src=\"{{sponsor.image}}\" (click)=\"viewSponsor(sponsor)\">\n        </div>\n    </ion-row>\n\n</ion-list>\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/services/sponsors.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/sponsors.service.ts ***!
  \**********************************************/
/*! exports provided: SponsorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorsService", function() { return SponsorsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");



// import { AngularFireStorage } from '@angular/fire/storage';


let SponsorsService = class SponsorsService {
    constructor(http, db) {
        this.http = http;
        this.db = db;
        this.sponsorsList = this.db.list('sponsors', ref => ref.orderByChild('order'));
    }
    getSponsors() {
        return this.db.list('sponsors', ref => ref.orderByChild('order')).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(changes => {
            console.log(changes);
            return changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val())));
        }));
        // console.log(this.sponsorsList)
        // return this.sponsorsList;
    }
};
SponsorsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] }
];
SponsorsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])
], SponsorsService);



/***/ }),

/***/ "./src/app/sponsors/sponsors-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/sponsors/sponsors-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SponsorsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorsPageRoutingModule", function() { return SponsorsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sponsors_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sponsors.page */ "./src/app/sponsors/sponsors.page.ts");




const routes = [
    {
        path: '',
        component: _sponsors_page__WEBPACK_IMPORTED_MODULE_3__["SponsorsPage"]
    }
];
let SponsorsPageRoutingModule = class SponsorsPageRoutingModule {
};
SponsorsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SponsorsPageRoutingModule);



/***/ }),

/***/ "./src/app/sponsors/sponsors.module.ts":
/*!*********************************************!*\
  !*** ./src/app/sponsors/sponsors.module.ts ***!
  \*********************************************/
/*! exports provided: SponsorsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorsPageModule", function() { return SponsorsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _sponsors_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sponsors-routing.module */ "./src/app/sponsors/sponsors-routing.module.ts");
/* harmony import */ var _sponsors_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sponsors.page */ "./src/app/sponsors/sponsors.page.ts");







let SponsorsPageModule = class SponsorsPageModule {
};
SponsorsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sponsors_routing_module__WEBPACK_IMPORTED_MODULE_5__["SponsorsPageRoutingModule"]
        ],
        declarations: [_sponsors_page__WEBPACK_IMPORTED_MODULE_6__["SponsorsPage"]]
    })
], SponsorsPageModule);



/***/ }),

/***/ "./src/app/sponsors/sponsors.page.scss":
/*!*********************************************!*\
  !*** ./src/app/sponsors/sponsors.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Styles background color of every item on page content*/\n/* Styles top toolbar */\nion-toolbar {\n  color: white;\n  --background: #3064ab;\n  box-shadow: none;\n}\n/* Styles each resources background color*/\nion-list {\n  --color: var(--ion-color-step-850,#fff);\n}\n.tier1container {\n  margin: auto;\n  width: 70%;\n  height: auto;\n  padding-top: 25px;\n  padding-bottom: 25px;\n}\n.tier2container {\n  margin: auto;\n  width: 60%;\n  height: auto;\n  padding-top: 25px;\n  padding-bottom: 25px;\n}\n.tier3container {\n  margin: auto;\n  width: 50%;\n  height: auto;\n  padding-top: 25px;\n  padding-bottom: 25px;\n}\n#logo {\n  width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWNrcmljaGFyZC9OQU1JL2Jhc2UtZ2xvYmFsL2FwcC1iYXNlLWdsb2JhbC9zcmMvYXBwL3Nwb25zb3JzL3Nwb25zb3JzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc3BvbnNvcnMvc3BvbnNvcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BLHlEQUFBO0FBS0EsdUJBQUE7QUFDQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDVkY7QURhQSwwQ0FBQTtBQUNBO0VBQ0UsdUNBQUE7QUNWRjtBRGVBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ1pGO0FEY0E7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDWEY7QURhQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNWRjtBRGNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNYSiIsImZpbGUiOiJzcmMvYXBwL3Nwb25zb3JzL3Nwb25zb3JzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC52ZXJ0aWNhbC1jZW50ZXJ7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gICAgIGhlaWdodDogMTAwJTtcbi8vICAgfVxuXG4vKiBTdHlsZXMgYmFja2dyb3VuZCBjb2xvciBvZiBldmVyeSBpdGVtIG9uIHBhZ2UgY29udGVudCovXG4vLyBpb24tY29udGVudHtcbi8vICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzMwNjRhYiAwJSwgIzBjNDk5YyA1MCUsICMwMzIxNmUgMTAwJSkgIWltcG9ydGFudDtcbi8vICAgfVxuXG4vKiBTdHlsZXMgdG9wIHRvb2xiYXIgKi9cbmlvbi10b29sYmFyIHtcbiAgY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6ICMzMDY0YWI7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cblxuLyogU3R5bGVzIGVhY2ggcmVzb3VyY2VzIGJhY2tncm91bmQgY29sb3IqL1xuaW9uLWxpc3Qge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC04NTAsI2ZmZik7XG4gIC8vIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgfVxuXG5cbi50aWVyMWNvbnRhaW5lciB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLXRvcDogMjVweDtcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XG59XG4udGllcjJjb250YWluZXIge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZy10b3A6IDI1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xufVxuLnRpZXIzY29udGFpbmVyIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbn1cblxuXG4gICNsb2dvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87ICAgIFxuICB9IiwiLyogU3R5bGVzIGJhY2tncm91bmQgY29sb3Igb2YgZXZlcnkgaXRlbSBvbiBwYWdlIGNvbnRlbnQqL1xuLyogU3R5bGVzIHRvcCB0b29sYmFyICovXG5pb24tdG9vbGJhciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiAjMzA2NGFiO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4vKiBTdHlsZXMgZWFjaCByZXNvdXJjZXMgYmFja2dyb3VuZCBjb2xvciovXG5pb24tbGlzdCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTg1MCwjZmZmKTtcbn1cblxuLnRpZXIxY29udGFpbmVyIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbn1cblxuLnRpZXIyY29udGFpbmVyIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbn1cblxuLnRpZXIzY29udGFpbmVyIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbn1cblxuI2xvZ28ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/sponsors/sponsors.page.ts":
/*!*******************************************!*\
  !*** ./src/app/sponsors/sponsors.page.ts ***!
  \*******************************************/
/*! exports provided: SponsorsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorsPage", function() { return SponsorsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_sponsors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/sponsors.service */ "./src/app/services/sponsors.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/firebase-analytics/ngx */ "./node_modules/@ionic-native/firebase-analytics/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");



// import { File } from '@ionic-native/file';
// import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
// import { FileTransfer } from '@ionic-native/file-transfer';
// import { FileOpener } from '@ionic-native/file-opener';





let SponsorsPage = class SponsorsPage {
    constructor(inAppBrowser, sponsorsProvider, modalController, platform, 
    // private fileOpener: FileOpener,
    // private document: DocumentViewer,
    zone, toastController, firebaseAnalytics, _translate) {
        this.inAppBrowser = inAppBrowser;
        this.sponsorsProvider = sponsorsProvider;
        this.modalController = modalController;
        this.platform = platform;
        this.zone = zone;
        this.toastController = toastController;
        this.firebaseAnalytics = firebaseAnalytics;
        this._translate = _translate;
        this.isShown = false;
        this.sponsors = [];
        this.categories = '';
        this.searchTerm = '';
        this.sponsorsList = this.sponsorsProvider.getSponsors();
    }
    ngOnInit() {
    }
    viewSponsor(sponsor) {
        let fixedUrl = sponsor.url;
        const options = {
            zoom: 'no'
        };
        const browser = this.inAppBrowser.create(fixedUrl, '_system', options);
        // this.firebaseAnalytics.logEvent('document_viewed', { document_viewed: file.title })
    }
};
SponsorsPage.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"] },
    { type: _services_sponsors_service__WEBPACK_IMPORTED_MODULE_2__["SponsorsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_5__["FirebaseAnalytics"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])
], SponsorsPage.prototype, "content", void 0);
SponsorsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sponsors',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sponsors.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sponsors/sponsors.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sponsors.page.scss */ "./src/app/sponsors/sponsors.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"],
        _services_sponsors_service__WEBPACK_IMPORTED_MODULE_2__["SponsorsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_5__["FirebaseAnalytics"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])
], SponsorsPage);



/***/ })

}]);
//# sourceMappingURL=sponsors-sponsors-module-es2015.js.map