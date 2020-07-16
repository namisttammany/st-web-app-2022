(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content no-padding>\n  <div class=\"main\">\n    <ion-card no-margin>\n      <ion-card-content>\n        <ion-row class=\"row\">\n          <div class=\"fire-logo\">\n            <img src=\"assets/img/0000000776_white.gif\" class=\"img-logo\">\n            <ion-text>\n              <h2 no-margin margin-vertical text-center></h2>\n            </ion-text>\n          </div>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-input clearInput type=\"email\"  [placeholder]=\"formEmail | translate\" [(ngModel)]=\"email\" class=\"input\" padding-horizontal\n              clear-input=\"true\"></ion-input>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-input clearInput type=\"password\" [placeholder]=\"formPassword | translate\" [(ngModel)]=\"password\" class=\"input\"\n              padding-horizontal clear-input=\"true\"></ion-input>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-button expand=\"block\" (click)=\"signup()\" color=\"undefined\" class=\"transition\">\n              <strong class=\"white\">\n                {{title | translate}}</strong></ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-text class=\"error\" text-center>{{error}}</ion-text>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-text text-center class=\"block\">{{text1 | translate}}\n              <span class=\"bold\" routerLink=\"/login\">{{login | translate}}</span></ion-text>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/register/register-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/register/register-routing.module.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main {\n  height: 100vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n@media screen and (min-width: 767px) {\n  ion-card {\n    width: 600px;\n    margin: auto;\n  }\n}\n\nion-card {\n  --background: transarent;\n  box-shadow: none;\n  -webkit-box-shadow: none;\n  overflow: hidden;\n}\n\n.input {\n  background-color: #f0f0f0;\n  border: 1px solid #d2d2d2;\n  border-radius: 9px;\n  font-size: 0.9em !important;\n}\n\n.white {\n  color: white;\n}\n\n.small {\n  font-size: 13px;\n}\n\n.small a {\n  text-decoration: unset !important;\n}\n\n/* Styles ion-button */\n\n.button {\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(20%, #00cd67), to(#01ff80)) !important;\n  background: linear-gradient(#00cd67 20%, #01ff80 100%) !important;\n  font-size: 18px;\n}\n\n/* Styles text color */\n\n.sc-ion-card-md-h {\n  color: white;\n}\n\nion-input {\n  color: black;\n}\n\n/* Styles bottom buttons */\n\n#login-buttons {\n  width: 100%;\n}\n\n:host .button-solid {\n  --background: linear-gradient(#00cd67 20%, #01ff80 100%) !important;\n  --background-focused: linear-gradient(#00cd67 20%, #01ff80 100%) !important;\n  --background-hover: linear-gradient(#00cd67 20%, #01ff80 100%) !important;\n}\n\n/* Styles bottom icons */\n\nion-icon {\n  height: 100%;\n  width: 100%;\n  padding-top: 11px;\n  padding-bottom: 11px;\n}\n\n/* Styles ion-toolbar */\n\nion-footer {\n  --background: #03216e !important;\n}\n\nion-toolbar {\n  --background: #03216e !important;\n}\n\n.grid {\n  height: 100vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.row {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.img-logo {\n  height: auto;\n  width: 100%;\n}\n\n.fire-logo {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding-bottom: 30px;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.block {\n  display: block;\n}\n\n.error {\n  color: red;\n  text-align: center;\n  display: block;\n  font-weight: bold;\n}\n\n/* Styles top toolbar */\n\nion-toolbar {\n  color: white;\n  --background: #3064ab;\n  box-shadow: none;\n}\n\n/* Styles background color of every item on page content*/\n\nion-content {\n  --ion-background-color: linear-gradient(180deg, #3064ab 0%, #0c499c 50%, #03216e 100%) !important;\n}\n\n/* Styles searcbar*/\n\n.sc-ion-searchbar-md-h {\n  --clear-button-color: initial;\n  --cancel-button-color: var(--ion-color-step-900,#fff);\n  --color: var(--ion-color-step-850,#fff);\n  --icon-color: var(--ion-color-step-600,#fff);\n  --background: transparent !important;\n}\n\n/* Styles dropdowns*/\n\nion-item {\n  --background: transparent !important;\n  --color: #fff !important;\n  --border-color: var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(255,255,255,0.13))));\n}\n\n/* Styles  dropdowns bacground color*/\n\n.list-md {\n  background: transparent !important;\n}\n\n/* Styles each resources background color*/\n\nion-list {\n  --color: var(--ion-color-step-850,#fff);\n  --background: transparent !important;\n}\n\n/* Styles share button*/\n\n/* color is changed via html*/\n\nion-icon {\n  height: 100%;\n  width: 100%;\n  padding-top: 11px;\n  padding-bottom: 11px;\n}\n\nion-text {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWNrcmljaGFyZC9OQU1JL2Jhc2UtZ2xvYmFsL2FwcC1iYXNlLWdsb2JhbC9zcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNDRjs7QURDQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLFlBQUE7RUNFRjtBQUNGOztBREFBO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUNFRjs7QURBQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FDR0Y7O0FEREE7RUFDRSxZQUFBO0FDSUY7O0FEREE7RUFDRSxlQUFBO0FDSUY7O0FESEU7RUFDRSxpQ0FBQTtBQ0tKOztBREZBLHNCQUFBOztBQUNBO0VBQ0UsNkdBQUE7RUFBQSxpRUFBQTtFQUNBLGVBQUE7QUNLRjs7QURIQSxzQkFBQTs7QUFDQTtFQUNFLFlBQUE7QUNNRjs7QURKQTtFQUNFLFlBQUE7QUNPRjs7QURMQSwwQkFBQTs7QUFDQTtFQUNFLFdBQUE7QUNRRjs7QUROQTtFQUNFLG1FQUFBO0VBQ0EsMkVBQUE7RUFDQSx5RUFBQTtBQ1NGOztBRFBBLHdCQUFBOztBQUNBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDVUE7O0FEUkEsdUJBQUE7O0FBQ0E7RUFDRSxnQ0FBQTtBQ1dGOztBRFRBO0VBQ0csZ0NBQUE7QUNZSDs7QURWQTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDYUY7O0FEWEE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDY0Y7O0FEWkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ2VGOztBRGJBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxvQkFBQTtBQ2dCRjs7QURkQTtFQUNFLGlCQUFBO0FDaUJGOztBRGZBO0VBQ0UsY0FBQTtBQ2tCRjs7QURoQkE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNtQkY7O0FEakJBLHVCQUFBOztBQUNBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNvQkE7O0FEbEJBLHlEQUFBOztBQUNBO0VBQ0EsaUdBQUE7QUNxQkE7O0FEbkJBLG1CQUFBOztBQUNBO0VBQ0UsNkJBQUE7RUFDQSxxREFBQTtFQUNBLHVDQUFBO0VBQ0EsNENBQUE7RUFDQSxvQ0FBQTtBQ3NCRjs7QURwQkEsb0JBQUE7O0FBQ0E7RUFDQSxvQ0FBQTtFQUNBLHdCQUFBO0VBQ0EscUhBQUE7QUN1QkE7O0FEckJBLHFDQUFBOztBQUNBO0VBQ0Esa0NBQUE7QUN3QkE7O0FEdEJBLDBDQUFBOztBQUNBO0VBQ0EsdUNBQUE7RUFDQSxvQ0FBQTtBQ3lCQTs7QUR2QkEsdUJBQUE7O0FBQ0EsNkJBQUE7O0FBQ0E7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUMwQkE7O0FEeEJBO0VBQ0UsV0FBQTtBQzJCRiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjdweCkge1xuICBpb24tY2FyZCB7XG4gICAgd2lkdGg6IDYwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufVxuaW9uLWNhcmQge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zYXJlbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5pbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxMCwgMjEwLCAyMTApO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcbn1cbi53aGl0ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNtYWxsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi8qIFN0eWxlcyBpb24tYnV0dG9uICovXG4uYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwMGNkNjcgMjAlLCAjMDFmZjgwIDEwMCUpICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi8qIFN0eWxlcyB0ZXh0IGNvbG9yICovXG4uc2MtaW9uLWNhcmQtbWQtaCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmlvbi1pbnB1dCB7XG4gIGNvbG9yOiBibGFjaztcbn1cbi8qIFN0eWxlcyBib3R0b20gYnV0dG9ucyAqLyBcbiNsb2dpbi1idXR0b25zIHtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCAuYnV0dG9uLXNvbGlkIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzAwY2Q2NyAyMCUsICMwMWZmODAgMTAwJSkgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IGxpbmVhci1ncmFkaWVudCgjMDBjZDY3IDIwJSwgIzAxZmY4MCAxMDAlKSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCgjMDBjZDY3IDIwJSwgIzAxZmY4MCAxMDAlKSAhaW1wb3J0YW50O1xufVxuLyogU3R5bGVzIGJvdHRvbSBpY29ucyAqL1xuaW9uLWljb24ge1xuaGVpZ2h0OiAxMDAlO1xud2lkdGg6IDEwMCU7XG5wYWRkaW5nLXRvcDogMTFweDtcbnBhZGRpbmctYm90dG9tOiAxMXB4O1xufVxuLyogU3R5bGVzIGlvbi10b29sYmFyICovICBcbmlvbi1mb290ZXIge1xuICAtLWJhY2tncm91bmQ6ICMwMzIxNmUgIWltcG9ydGFudDtcbn1cbmlvbi10b29sYmFyIHtcbiAgIC0tYmFja2dyb3VuZDogIzAzMjE2ZSAhaW1wb3J0YW50O1xufVxuLmdyaWQge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5pbWctbG9nbyB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG4uZmlyZS1sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuLmJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmVycm9yIHtcbiAgY29sb3I6IHJlZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4vKiBTdHlsZXMgdG9wIHRvb2xiYXIgKi9cbmlvbi10b29sYmFyIHtcbmNvbG9yOiB3aGl0ZTtcbi0tYmFja2dyb3VuZDogIzMwNjRhYjtcbmJveC1zaGFkb3c6IG5vbmU7XG59XG4vKiBTdHlsZXMgYmFja2dyb3VuZCBjb2xvciBvZiBldmVyeSBpdGVtIG9uIHBhZ2UgY29udGVudCovXG5pb24tY29udGVudHtcbi0taW9uLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMzMDY0YWIgMCUsICMwYzQ5OWMgNTAlLCAjMDMyMTZlIDEwMCUpICFpbXBvcnRhbnQ7XG59XG4vKiBTdHlsZXMgc2VhcmNiYXIqL1xuLnNjLWlvbi1zZWFyY2hiYXItbWQtaCB7XG4gIC0tY2xlYXItYnV0dG9uLWNvbG9yOiBpbml0aWFsO1xuICAtLWNhbmNlbC1idXR0b24tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTkwMCwjZmZmKTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtODUwLCNmZmYpO1xuICAtLWljb24tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwjZmZmKTtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuLyogU3R5bGVzIGRyb3Bkb3ducyovXG5pb24taXRlbSB7XG4tLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4tLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4tLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWl0ZW0tYm9yZGVyLWNvbG9yLHZhcigtLWlvbi1ib3JkZXItY29sb3IsdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLHJnYmEoMjU1LDI1NSwyNTUsMC4xMykpKSk7XG59XG4vKiBTdHlsZXMgIGRyb3Bkb3ducyBiYWNncm91bmQgY29sb3IqL1xuLmxpc3QtbWQge1xuYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbi8qIFN0eWxlcyBlYWNoIHJlc291cmNlcyBiYWNrZ3JvdW5kIGNvbG9yKi9cbmlvbi1saXN0IHtcbi0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTg1MCwjZmZmKTtcbi0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbi8qIFN0eWxlcyBzaGFyZSBidXR0b24qL1xuLyogY29sb3IgaXMgY2hhbmdlZCB2aWEgaHRtbCovXG5pb24taWNvbiB7XG5oZWlnaHQ6IDEwMCU7XG53aWR0aDogMTAwJTtcbnBhZGRpbmctdG9wOiAxMXB4O1xucGFkZGluZy1ib3R0b206IDExcHg7XG59XG5pb24tdGV4dCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4iLCIubWFpbiB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjdweCkge1xuICBpb24tY2FyZCB7XG4gICAgd2lkdGg6IDYwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufVxuaW9uLWNhcmQge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zYXJlbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XG59XG5cbi53aGl0ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNtYWxsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLnNtYWxsIGEge1xuICB0ZXh0LWRlY29yYXRpb246IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbi8qIFN0eWxlcyBpb24tYnV0dG9uICovXG4uYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwMGNkNjcgMjAlLCAjMDFmZjgwIDEwMCUpICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLyogU3R5bGVzIHRleHQgY29sb3IgKi9cbi5zYy1pb24tY2FyZC1tZC1oIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24taW5wdXQge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi8qIFN0eWxlcyBib3R0b20gYnV0dG9ucyAqL1xuI2xvZ2luLWJ1dHRvbnMge1xuICB3aWR0aDogMTAwJTtcbn1cblxuOmhvc3QgLmJ1dHRvbi1zb2xpZCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwMGNkNjcgMjAlLCAjMDFmZjgwIDEwMCUpICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiBsaW5lYXItZ3JhZGllbnQoIzAwY2Q2NyAyMCUsICMwMWZmODAgMTAwJSkgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBsaW5lYXItZ3JhZGllbnQoIzAwY2Q2NyAyMCUsICMwMWZmODAgMTAwJSkgIWltcG9ydGFudDtcbn1cblxuLyogU3R5bGVzIGJvdHRvbSBpY29ucyAqL1xuaW9uLWljb24ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMTFweDtcbiAgcGFkZGluZy1ib3R0b206IDExcHg7XG59XG5cbi8qIFN0eWxlcyBpb24tdG9vbGJhciAqL1xuaW9uLWZvb3RlciB7XG4gIC0tYmFja2dyb3VuZDogIzAzMjE2ZSAhaW1wb3J0YW50O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzAzMjE2ZSAhaW1wb3J0YW50O1xufVxuXG4uZ3JpZCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pbWctbG9nbyB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5maXJlLWxvZ28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG5cbi5ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLyogU3R5bGVzIHRvcCB0b29sYmFyICovXG5pb24tdG9vbGJhciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiAjMzA2NGFiO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4vKiBTdHlsZXMgYmFja2dyb3VuZCBjb2xvciBvZiBldmVyeSBpdGVtIG9uIHBhZ2UgY29udGVudCovXG5pb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMzMDY0YWIgMCUsICMwYzQ5OWMgNTAlLCAjMDMyMTZlIDEwMCUpICFpbXBvcnRhbnQ7XG59XG5cbi8qIFN0eWxlcyBzZWFyY2JhciovXG4uc2MtaW9uLXNlYXJjaGJhci1tZC1oIHtcbiAgLS1jbGVhci1idXR0b24tY29sb3I6IGluaXRpYWw7XG4gIC0tY2FuY2VsLWJ1dHRvbi1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtOTAwLCNmZmYpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC04NTAsI2ZmZik7XG4gIC0taWNvbi1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCNmZmYpO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi8qIFN0eWxlcyBkcm9wZG93bnMqL1xuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1pdGVtLWJvcmRlci1jb2xvcix2YXIoLS1pb24tYm9yZGVyLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCxyZ2JhKDI1NSwyNTUsMjU1LDAuMTMpKSkpO1xufVxuXG4vKiBTdHlsZXMgIGRyb3Bkb3ducyBiYWNncm91bmQgY29sb3IqL1xuLmxpc3QtbWQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4vKiBTdHlsZXMgZWFjaCByZXNvdXJjZXMgYmFja2dyb3VuZCBjb2xvciovXG5pb24tbGlzdCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTg1MCwjZmZmKTtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4vKiBTdHlsZXMgc2hhcmUgYnV0dG9uKi9cbi8qIGNvbG9yIGlzIGNoYW5nZWQgdmlhIGh0bWwqL1xuaW9uLWljb24ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMTFweDtcbiAgcGFkZGluZy1ib3R0b206IDExcHg7XG59XG5cbmlvbi10ZXh0IHtcbiAgY29sb3I6ICNmZmY7XG59Il19 */");

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_globalization_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/globalization/ngx */ "./node_modules/@ionic-native/globalization/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");










let RegisterPage = class RegisterPage {
    constructor(router, authService, formBuilder, fireauth, toastController, platform, loadingController, alertController, globalization, _translate) {
        this.router = router;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.fireauth = fireauth;
        this.toastController = toastController;
        this.platform = platform;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.globalization = globalization;
        this._translate = _translate;
        this.email = '';
        this.password = '';
        this.error = '';
        this.username = '';
    }
    ngOnInit() {
        this.title = 'register.title';
        this.text1 = 'register.text1';
        this.login = 'register.login';
        this.formEmail = 'login.email';
        this.formPassword = 'login.password';
    }
    openLoader() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Please Wait ...',
                duration: 2000
            });
            yield loading.present();
        });
    }
    closeLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.loadingController.dismiss();
        });
    }
    signup() {
        this.fireauth.auth.createUserWithEmailAndPassword(this.email, this.password)
            .then(res => {
            if (res.user) {
                console.log(res.user);
                // this.updateProfile();
                this.router.navigate(['home']);
            }
        })
            .catch(err => {
            console.log(`login failed ${err}`);
            this.error = err.message;
        });
    }
    presentToast(message, show_button, position, duration) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                // showCloseButton: show_button,
                position: position,
                duration: duration
            });
            toast.present();
        });
    }
    tryRegister(value) {
    }
    goLoginPage() {
        this.router.navigate(['login']);
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_native_globalization_ngx__WEBPACK_IMPORTED_MODULE_7__["Globalization"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] }
];
RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
        _ionic_native_globalization_ngx__WEBPACK_IMPORTED_MODULE_7__["Globalization"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]])
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=register-register-module-es2015.js.map