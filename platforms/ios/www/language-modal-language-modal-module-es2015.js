(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["language-modal-language-modal-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/language-modal/language-modal.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/language-modal/language-modal.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>Select Language</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label>Select Language</ion-label>\n      <ion-select placeholder=\"Select One\" [(ngModel)]=\"selectedLanguage\" (ionChange)=\"languageChanged()\">\n        <ion-select-option value=\"en\">English</ion-select-option>\n        <ion-select-option value=\"es\">Spanish</ion-select-option>\n        <ion-select-option value=\"fr\">French</ion-select-option>\n        <ion-select-option value=\"vi\">Vietnamese</ion-select-option>\n        <ion-select-option value=\"zh\">Chinese</ion-select-option>\n        <ion-select-option value=\"de\">German</ion-select-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n\n  <ion-button class=\"close\" (click)=\"closeModal()\"><ion-icon large name=\"close\"></ion-icon></ion-button>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/language-modal/language-modal-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/language-modal/language-modal-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: LanguageModalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageModalPageRoutingModule", function() { return LanguageModalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _language_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./language-modal.page */ "./src/app/language-modal/language-modal.page.ts");




const routes = [
    {
        path: '',
        component: _language_modal_page__WEBPACK_IMPORTED_MODULE_3__["LanguageModalPage"]
    }
];
let LanguageModalPageRoutingModule = class LanguageModalPageRoutingModule {
};
LanguageModalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LanguageModalPageRoutingModule);



/***/ }),

/***/ "./src/app/language-modal/language-modal.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/language-modal/language-modal.module.ts ***!
  \*********************************************************/
/*! exports provided: LanguageModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageModalPageModule", function() { return LanguageModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _language_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./language-modal-routing.module */ "./src/app/language-modal/language-modal-routing.module.ts");
/* harmony import */ var _language_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./language-modal.page */ "./src/app/language-modal/language-modal.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








let LanguageModalPageModule = class LanguageModalPageModule {
};
LanguageModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _language_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["LanguageModalPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
        ],
        declarations: [_language_modal_page__WEBPACK_IMPORTED_MODULE_6__["LanguageModalPage"]]
    })
], LanguageModalPageModule);



/***/ }),

/***/ "./src/app/language-modal/language-modal.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/language-modal/language-modal.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Removes header drop shadow */\nion-header {\n  z-index: 0;\n}\nion-content {\n  --ion-background-color: linear-gradient(180deg, #3064ab 0%, #0c499c 50%, #03216e 100%) !important;\n}\n/* Styles 2 dropdowns*/\nion-item {\n  --background: transparent !important;\n  --color: #fff !important;\n  --border-color: var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(255,255,255,0.13))));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWNrcmljaGFyZC9OQU1JL2Jhc2UtZ2xvYmFsL2FwcC1iYXNlLWdsb2JhbC9zcmMvYXBwL2xhbmd1YWdlLW1vZGFsL2xhbmd1YWdlLW1vZGFsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbGFuZ3VhZ2UtbW9kYWwvbGFuZ3VhZ2UtbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLCtCQUFBO0FBQ0U7RUFDRSxVQUFBO0FDQUo7QURHQTtFQUNJLGlHQUFBO0FDQUo7QURHQSxzQkFBQTtBQUNBO0VBQ0ksb0NBQUE7RUFDQSx3QkFBQTtFQUNBLHFIQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9sYW5ndWFnZS1tb2RhbC9sYW5ndWFnZS1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIFJlbW92ZXMgaGVhZGVyIGRyb3Agc2hhZG93ICovXG4gIGlvbi1oZWFkZXIge1xuICAgIHotaW5kZXg6IDA7XG59XG5cbmlvbi1jb250ZW50e1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMzMDY0YWIgMCUsICMwYzQ5OWMgNTAlLCAjMDMyMTZlIDEwMCUpICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4vKiBTdHlsZXMgMiBkcm9wZG93bnMqL1xuaW9uLWl0ZW0ge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1pdGVtLWJvcmRlci1jb2xvcix2YXIoLS1pb24tYm9yZGVyLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCxyZ2JhKDI1NSwyNTUsMjU1LDAuMTMpKSkpO1xuICAgIH0iLCIvKiBSZW1vdmVzIGhlYWRlciBkcm9wIHNoYWRvdyAqL1xuaW9uLWhlYWRlciB7XG4gIHotaW5kZXg6IDA7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzMwNjRhYiAwJSwgIzBjNDk5YyA1MCUsICMwMzIxNmUgMTAwJSkgIWltcG9ydGFudDtcbn1cblxuLyogU3R5bGVzIDIgZHJvcGRvd25zKi9cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24taXRlbS1ib3JkZXItY29sb3IsdmFyKC0taW9uLWJvcmRlci1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAscmdiYSgyNTUsMjU1LDI1NSwwLjEzKSkpKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/language-modal/language-modal.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/language-modal/language-modal.page.ts ***!
  \*******************************************************/
/*! exports provided: LanguageModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageModalPage", function() { return LanguageModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/contacts/ngx */ "./node_modules/@ionic-native/contacts/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/firebase-analytics/ngx */ "./node_modules/@ionic-native/firebase-analytics/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_translate_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/translate-config.service */ "./src/app/services/translate-config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





// import { Http } from '@angular/http';





let LanguageModalPage = class LanguageModalPage {
    constructor(modalController, http, contacts, plt, sanitizer, toastController, firebaseAnalytics, _translate, translateConfigService, router) {
        this.modalController = modalController;
        this.http = http;
        this.contacts = contacts;
        this.plt = plt;
        this.sanitizer = sanitizer;
        this.toastController = toastController;
        this.firebaseAnalytics = firebaseAnalytics;
        this._translate = _translate;
        this.translateConfigService = translateConfigService;
        this.router = router;
        this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    }
    ngOnInit() {
    }
    languageChanged() {
        this.translateConfigService.setLanguage(this.selectedLanguage);
    }
    closeModal() {
        this.router.navigate(['/home']);
    }
};
LanguageModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_4__["Contacts"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_6__["FirebaseAnalytics"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _services_translate_config_service__WEBPACK_IMPORTED_MODULE_8__["TranslateConfigService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
];
LanguageModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-language-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./language-modal.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/language-modal/language-modal.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./language-modal.page.scss */ "./src/app/language-modal/language-modal.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
        _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_4__["Contacts"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_6__["FirebaseAnalytics"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
        _services_translate_config_service__WEBPACK_IMPORTED_MODULE_8__["TranslateConfigService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
], LanguageModalPage);



/***/ })

}]);
//# sourceMappingURL=language-modal-language-modal-module-es2015.js.map