function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resetpassword-resetpassword-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/resetpassword/resetpassword.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resetpassword/resetpassword.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppResetpasswordResetpasswordPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <ion-content no-padding>\n    <div class=\"main\">\n      <ion-card no-margin>\n        <ion-card-content>\n          <ion-row class=\"row\">\n            <div class=\"fire-logo\">\n              <img src=\"assets/img/0000000776_white.gif\" class=\"img-logo\"> \n            </div>\n          </ion-row>\n         \n          <ion-text>\n            <h2 no-margin margin-vertical text-center>{{forgot | translate}}</h2>\n          </ion-text>\n          <ion-row>\n            <ion-col>\n              <ion-text>{{text1 | translate}}</ion-text>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-input clearInput type=\"email\" [placeholder]=\"formEmail | translate\" [(ngModel)]=\"email\" class=\"input\" padding-horizontal\n                clear-input=\"true\"></ion-input>\n            </ion-col>\n          </ion-row>\n  \n          <ion-row>\n            <ion-col>\n              <ion-button expand=\"block\" (click)=\"recover()\" color=\"undefined\" class=\"transition\">\n                <strong class=\"white\">\n                 {{button | translate}}</strong></ion-button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-text class=\"error\" text-center>{{error}}</ion-text>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-text text-center class=\"block\">{{text2 | translate}}\n                <span class=\"bold\" routerLink=\"/login\">{{login | translate}}</span></ion-text>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </ion-content>\n  <ion-footer no-border>\n    <ion-toolbar>\n      <ion-title text-center>\n\n      </ion-title>\n    </ion-toolbar>\n  </ion-footer>";
    /***/
  },

  /***/
  "./src/app/resetpassword/resetpassword-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/resetpassword/resetpassword-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: ResetpasswordPageRoutingModule */

  /***/
  function srcAppResetpasswordResetpasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetpasswordPageRoutingModule", function () {
      return ResetpasswordPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _resetpassword_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./resetpassword.page */
    "./src/app/resetpassword/resetpassword.page.ts");

    var routes = [{
      path: '',
      component: _resetpassword_page__WEBPACK_IMPORTED_MODULE_3__["ResetpasswordPage"]
    }];

    var ResetpasswordPageRoutingModule = function ResetpasswordPageRoutingModule() {
      _classCallCheck(this, ResetpasswordPageRoutingModule);
    };

    ResetpasswordPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ResetpasswordPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/resetpassword/resetpassword.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/resetpassword/resetpassword.module.ts ***!
    \*******************************************************/

  /*! exports provided: ResetpasswordPageModule */

  /***/
  function srcAppResetpasswordResetpasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetpasswordPageModule", function () {
      return ResetpasswordPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _resetpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./resetpassword-routing.module */
    "./src/app/resetpassword/resetpassword-routing.module.ts");
    /* harmony import */


    var _resetpassword_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./resetpassword.page */
    "./src/app/resetpassword/resetpassword.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var ResetpasswordPageModule = function ResetpasswordPageModule() {
      _classCallCheck(this, ResetpasswordPageModule);
    };

    ResetpasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _resetpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResetpasswordPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]],
      declarations: [_resetpassword_page__WEBPACK_IMPORTED_MODULE_6__["ResetpasswordPage"]]
    })], ResetpasswordPageModule);
    /***/
  },

  /***/
  "./src/app/resetpassword/resetpassword.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/resetpassword/resetpassword.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppResetpasswordResetpasswordPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n@media screen and (min-width: 767px) {\n  ion-card {\n    width: 600px;\n    margin: auto;\n  }\n}\n\nion-card {\n  --background: transarent;\n  box-shadow: none;\n  -webkit-box-shadow: none;\n  overflow: hidden;\n}\n\n.input {\n  background-color: #f0f0f0;\n  border: 1px solid #d2d2d2;\n  border-radius: 9px;\n  font-size: 0.9em !important;\n}\n\n.white {\n  color: white;\n}\n\n.small {\n  font-size: 13px;\n}\n\n.small a {\n  text-decoration: unset !important;\n}\n\n/* Styles ion-button */\n\n.button {\n  background: linear-gradient(#00cd67 20%, #01ff80 100%) !important;\n  font-size: 18px;\n}\n\n/* Styles text color */\n\n.sc-ion-card-md-h {\n  color: white;\n}\n\nion-input {\n  color: black;\n}\n\n/* Styles bottom buttons */\n\n#login-buttons {\n  width: 100%;\n}\n\n:host .button-solid {\n  --background: linear-gradient(#00cd67 20%, #01ff80 100%) !important;\n  --background-focused: linear-gradient(#00cd67 20%, #01ff80 100%) !important;\n  --background-hover: linear-gradient(#00cd67 20%, #01ff80 100%) !important;\n}\n\n/* Styles bottom icons */\n\nion-icon {\n  height: 100%;\n  width: 100%;\n  padding-top: 11px;\n  padding-bottom: 11px;\n}\n\n/* Styles ion-toolbar */\n\nion-footer {\n  --background: #03216e !important;\n}\n\nion-toolbar {\n  --background: #03216e !important;\n}\n\n.grid {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.row {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.img-logo {\n  height: auto;\n  width: 100%;\n}\n\n.fire-logo {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 30px;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.block {\n  display: block;\n}\n\n.error {\n  color: red;\n  text-align: center;\n  display: block;\n  font-weight: bold;\n}\n\n/* Styles top toolbar */\n\nion-toolbar {\n  color: white;\n  --background: #3064ab;\n  box-shadow: none;\n}\n\n/* Styles background color of every item on page content*/\n\nion-content {\n  --ion-background-color: linear-gradient(180deg, #3064ab 0%, #0c499c 50%, #03216e 100%) !important;\n}\n\n/* Styles searcbar*/\n\n.sc-ion-searchbar-md-h {\n  --clear-button-color: initial;\n  --cancel-button-color: var(--ion-color-step-900,#fff);\n  --color: var(--ion-color-step-850,#fff);\n  --icon-color: var(--ion-color-step-600,#fff);\n  --background: transparent !important;\n}\n\n/* Styles dropdowns*/\n\nion-item {\n  --background: transparent !important;\n  --color: #fff !important;\n  --border-color: var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(255,255,255,0.13))));\n}\n\n/* Styles  dropdowns bacground color*/\n\n.list-md {\n  background: transparent !important;\n}\n\n/* Styles each resources background color*/\n\nion-list {\n  --color: var(--ion-color-step-850,#fff);\n  --background: transparent !important;\n}\n\n/* Styles share button*/\n\n/* color is changed via html*/\n\nion-icon {\n  height: 100%;\n  width: 100%;\n  padding-top: 11px;\n  padding-bottom: 11px;\n}\n\nion-text {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWNrcmljaGFyZC9Eb2N1bWVudHMvYXBwLWJhc2Utc3Qvc3JjL2FwcC9yZXNldHBhc3N3b3JkL3Jlc2V0cGFzc3dvcmQucGFnZS5zY3NzIiwic3JjL2FwcC9yZXNldHBhc3N3b3JkL3Jlc2V0cGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FEQ0E7RUFDRTtJQUNFLFlBQUE7SUFDQSxZQUFBO0VDRUY7QUFDRjs7QURBQTtFQUNFLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FDRUY7O0FEQUE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQ0dGOztBRERBO0VBQ0UsWUFBQTtBQ0lGOztBRERBO0VBQ0UsZUFBQTtBQ0lGOztBREhFO0VBQ0UsaUNBQUE7QUNLSjs7QURGQSxzQkFBQTs7QUFDQTtFQUNFLGlFQUFBO0VBQ0EsZUFBQTtBQ0tGOztBREhBLHNCQUFBOztBQUNBO0VBQ0UsWUFBQTtBQ01GOztBREpBO0VBQ0UsWUFBQTtBQ09GOztBRExBLDBCQUFBOztBQUNBO0VBQ0UsV0FBQTtBQ1FGOztBRE5BO0VBQ0UsbUVBQUE7RUFDQSwyRUFBQTtFQUNBLHlFQUFBO0FDU0Y7O0FEUEEsd0JBQUE7O0FBQ0E7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNVQTs7QURSQSx1QkFBQTs7QUFDQTtFQUNFLGdDQUFBO0FDV0Y7O0FEVEE7RUFDRyxnQ0FBQTtBQ1lIOztBRFZBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDYUY7O0FEWEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ2NGOztBRFpBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNlRjs7QURiQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQ2dCRjs7QURkQTtFQUNFLGlCQUFBO0FDaUJGOztBRGZBO0VBQ0UsY0FBQTtBQ2tCRjs7QURoQkE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNtQkY7O0FEakJBLHVCQUFBOztBQUNBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNvQkE7O0FEbEJBLHlEQUFBOztBQUNBO0VBQ0EsaUdBQUE7QUNxQkE7O0FEbkJBLG1CQUFBOztBQUNBO0VBQ0UsNkJBQUE7RUFDQSxxREFBQTtFQUNBLHVDQUFBO0VBQ0EsNENBQUE7RUFDQSxvQ0FBQTtBQ3NCRjs7QURwQkEsb0JBQUE7O0FBQ0E7RUFDQSxvQ0FBQTtFQUNBLHdCQUFBO0VBQ0EscUhBQUE7QUN1QkE7O0FEckJBLHFDQUFBOztBQUNBO0VBQ0Esa0NBQUE7QUN3QkE7O0FEdEJBLDBDQUFBOztBQUNBO0VBQ0EsdUNBQUE7RUFDQSxvQ0FBQTtBQ3lCQTs7QUR2QkEsdUJBQUE7O0FBQ0EsNkJBQUE7O0FBQ0E7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUMwQkE7O0FEeEJBO0VBQ0UsV0FBQTtBQzJCRiIsImZpbGUiOiJzcmMvYXBwL3Jlc2V0cGFzc3dvcmQvcmVzZXRwYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY3cHgpIHtcbiAgaW9uLWNhcmQge1xuICAgIHdpZHRoOiA2MDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbn1cbmlvbi1jYXJkIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2FyZW50O1xuICBib3gtc2hhZG93OiBub25lO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTAsIDIxMCwgMjEwKTtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XG59XG4ud2hpdGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bnNldCAhaW1wb3J0YW50O1xuICB9XG59XG4vKiBTdHlsZXMgaW9uLWJ1dHRvbiAqL1xuLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDBjZDY3IDIwJSwgIzAxZmY4MCAxMDAlKSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE4cHg7XG59XG4vKiBTdHlsZXMgdGV4dCBjb2xvciAqL1xuLnNjLWlvbi1jYXJkLW1kLWgge1xuICBjb2xvcjogd2hpdGU7XG59XG5pb24taW5wdXQge1xuICBjb2xvcjogYmxhY2s7XG59XG4vKiBTdHlsZXMgYm90dG9tIGJ1dHRvbnMgKi8gXG4jbG9naW4tYnV0dG9ucyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgLmJ1dHRvbi1zb2xpZCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwMGNkNjcgMjAlLCAjMDFmZjgwIDEwMCUpICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiBsaW5lYXItZ3JhZGllbnQoIzAwY2Q2NyAyMCUsICMwMWZmODAgMTAwJSkgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBsaW5lYXItZ3JhZGllbnQoIzAwY2Q2NyAyMCUsICMwMWZmODAgMTAwJSkgIWltcG9ydGFudDtcbn1cbi8qIFN0eWxlcyBib3R0b20gaWNvbnMgKi9cbmlvbi1pY29uIHtcbmhlaWdodDogMTAwJTtcbndpZHRoOiAxMDAlO1xucGFkZGluZy10b3A6IDExcHg7XG5wYWRkaW5nLWJvdHRvbTogMTFweDtcbn1cbi8qIFN0eWxlcyBpb24tdG9vbGJhciAqLyAgXG5pb24tZm9vdGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDMyMTZlICFpbXBvcnRhbnQ7XG59XG5pb24tdG9vbGJhciB7XG4gICAtLWJhY2tncm91bmQ6ICMwMzIxNmUgIWltcG9ydGFudDtcbn1cbi5ncmlkIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uaW1nLWxvZ28ge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZpcmUtbG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cbi5ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uYmxvY2sge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLyogU3R5bGVzIHRvcCB0b29sYmFyICovXG5pb24tdG9vbGJhciB7XG5jb2xvcjogd2hpdGU7XG4tLWJhY2tncm91bmQ6ICMzMDY0YWI7XG5ib3gtc2hhZG93OiBub25lO1xufVxuLyogU3R5bGVzIGJhY2tncm91bmQgY29sb3Igb2YgZXZlcnkgaXRlbSBvbiBwYWdlIGNvbnRlbnQqL1xuaW9uLWNvbnRlbnR7XG4tLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMzA2NGFiIDAlLCAjMGM0OTljIDUwJSwgIzAzMjE2ZSAxMDAlKSAhaW1wb3J0YW50O1xufVxuLyogU3R5bGVzIHNlYXJjYmFyKi9cbi5zYy1pb24tc2VhcmNoYmFyLW1kLWgge1xuICAtLWNsZWFyLWJ1dHRvbi1jb2xvcjogaW5pdGlhbDtcbiAgLS1jYW5jZWwtYnV0dG9uLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC05MDAsI2ZmZik7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTg1MCwjZmZmKTtcbiAgLS1pY29uLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsI2ZmZik7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbi8qIFN0eWxlcyBkcm9wZG93bnMqL1xuaW9uLWl0ZW0ge1xuLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1pdGVtLWJvcmRlci1jb2xvcix2YXIoLS1pb24tYm9yZGVyLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCxyZ2JhKDI1NSwyNTUsMjU1LDAuMTMpKSkpO1xufVxuLyogU3R5bGVzICBkcm9wZG93bnMgYmFjZ3JvdW5kIGNvbG9yKi9cbi5saXN0LW1kIHtcbmJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG4vKiBTdHlsZXMgZWFjaCByZXNvdXJjZXMgYmFja2dyb3VuZCBjb2xvciovXG5pb24tbGlzdCB7XG4tLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC04NTAsI2ZmZik7XG4tLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG4vKiBTdHlsZXMgc2hhcmUgYnV0dG9uKi9cbi8qIGNvbG9yIGlzIGNoYW5nZWQgdmlhIGh0bWwqL1xuaW9uLWljb24ge1xuaGVpZ2h0OiAxMDAlO1xud2lkdGg6IDEwMCU7XG5wYWRkaW5nLXRvcDogMTFweDtcbnBhZGRpbmctYm90dG9tOiAxMXB4O1xufVxuaW9uLXRleHQge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuIiwiLm1haW4ge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY3cHgpIHtcbiAgaW9uLWNhcmQge1xuICAgIHdpZHRoOiA2MDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbn1cbmlvbi1jYXJkIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2FyZW50O1xuICBib3gtc2hhZG93OiBub25lO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5pbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMmQyZDI7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xufVxuXG4ud2hpdGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5zbWFsbCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG4vKiBTdHlsZXMgaW9uLWJ1dHRvbiAqL1xuLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDBjZDY3IDIwJSwgIzAxZmY4MCAxMDAlKSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi8qIFN0eWxlcyB0ZXh0IGNvbG9yICovXG4uc2MtaW9uLWNhcmQtbWQtaCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWlucHV0IHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4vKiBTdHlsZXMgYm90dG9tIGJ1dHRvbnMgKi9cbiNsb2dpbi1idXR0b25zIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbjpob3N0IC5idXR0b24tc29saWQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDBjZDY3IDIwJSwgIzAxZmY4MCAxMDAlKSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogbGluZWFyLWdyYWRpZW50KCMwMGNkNjcgMjAlLCAjMDFmZjgwIDEwMCUpICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogbGluZWFyLWdyYWRpZW50KCMwMGNkNjcgMjAlLCAjMDFmZjgwIDEwMCUpICFpbXBvcnRhbnQ7XG59XG5cbi8qIFN0eWxlcyBib3R0b20gaWNvbnMgKi9cbmlvbi1pY29uIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDExcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMXB4O1xufVxuXG4vKiBTdHlsZXMgaW9uLXRvb2xiYXIgKi9cbmlvbi1mb290ZXIge1xuICAtLWJhY2tncm91bmQ6ICMwMzIxNmUgIWltcG9ydGFudDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICMwMzIxNmUgIWltcG9ydGFudDtcbn1cblxuLmdyaWQge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaW1nLWxvZ28ge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZmlyZS1sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuXG4uYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYmxvY2sge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmVycm9yIHtcbiAgY29sb3I6IHJlZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8qIFN0eWxlcyB0b3AgdG9vbGJhciAqL1xuaW9uLXRvb2xiYXIge1xuICBjb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogIzMwNjRhYjtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLyogU3R5bGVzIGJhY2tncm91bmQgY29sb3Igb2YgZXZlcnkgaXRlbSBvbiBwYWdlIGNvbnRlbnQqL1xuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMzA2NGFiIDAlLCAjMGM0OTljIDUwJSwgIzAzMjE2ZSAxMDAlKSAhaW1wb3J0YW50O1xufVxuXG4vKiBTdHlsZXMgc2VhcmNiYXIqL1xuLnNjLWlvbi1zZWFyY2hiYXItbWQtaCB7XG4gIC0tY2xlYXItYnV0dG9uLWNvbG9yOiBpbml0aWFsO1xuICAtLWNhbmNlbC1idXR0b24tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTkwMCwjZmZmKTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtODUwLCNmZmYpO1xuICAtLWljb24tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwjZmZmKTtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4vKiBTdHlsZXMgZHJvcGRvd25zKi9cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24taXRlbS1ib3JkZXItY29sb3IsdmFyKC0taW9uLWJvcmRlci1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAscmdiYSgyNTUsMjU1LDI1NSwwLjEzKSkpKTtcbn1cblxuLyogU3R5bGVzICBkcm9wZG93bnMgYmFjZ3JvdW5kIGNvbG9yKi9cbi5saXN0LW1kIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLyogU3R5bGVzIGVhY2ggcmVzb3VyY2VzIGJhY2tncm91bmQgY29sb3IqL1xuaW9uLWxpc3Qge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC04NTAsI2ZmZik7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLyogU3R5bGVzIHNoYXJlIGJ1dHRvbiovXG4vKiBjb2xvciBpcyBjaGFuZ2VkIHZpYSBodG1sKi9cbmlvbi1pY29uIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDExcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMXB4O1xufVxuXG5pb24tdGV4dCB7XG4gIGNvbG9yOiAjZmZmO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/resetpassword/resetpassword.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/resetpassword/resetpassword.page.ts ***!
    \*****************************************************/

  /*! exports provided: ResetpasswordPage */

  /***/
  function srcAppResetpasswordResetpasswordPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetpasswordPage", function () {
      return ResetpasswordPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _ionic_native_globalization_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/globalization/ngx */
    "./node_modules/@ionic-native/globalization/ngx/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var ResetpasswordPage = /*#__PURE__*/function () {
      function ResetpasswordPage(fireauth, router, toastController, loadingController, alertController, globalization, _translate) {
        _classCallCheck(this, ResetpasswordPage);

        this.fireauth = fireauth;
        this.router = router;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.globalization = globalization;
        this._translate = _translate;
        this.email = '';
        this.password = '';
        this.error = '';
        this.username = '';
      }

      _createClass(ResetpasswordPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.text1 = 'reset.text1';
          this.text2 = 'reset.text2';
          this.login = 'reset.login';
          this.forgot = 'reset.forgot';
          this.button = 'reset.button';
          this.formEmail = 'login.email';
        }
      }, {
        key: "openLoader",
        value: function openLoader() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var loading;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingController.create({
                      message: 'Please Wait ...',
                      duration: 2000
                    });

                  case 2:
                    loading = _context.sent;
                    _context.next = 5;
                    return loading.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "closeLoading",
        value: function closeLoading() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loadingController.dismiss();

                  case 2:
                    return _context2.abrupt("return", _context2.sent);

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "recover",
        value: function recover() {
          var _this = this;

          this.fireauth.auth.sendPasswordResetEmail(this.email).then(function (data) {
            console.log(data);

            _this.presentToast('Password reset email sent', false, 'bottom', 2000);

            _this.router.navigate(['/login']);
          })["catch"](function (err) {
            console.log(" failed ".concat(err));
            _this.error = err.message;
          });
        }
      }, {
        key: "presentToast",
        value: function presentToast(message, show_button, position, duration) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var toast;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.toastController.create({
                      message: message,
                      // showCloseButton: show_button,
                      position: position,
                      duration: duration
                    });

                  case 2:
                    toast = _context3.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return ResetpasswordPage;
    }();

    ResetpasswordPage.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_native_globalization_ngx__WEBPACK_IMPORTED_MODULE_5__["Globalization"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
      }];
    };

    ResetpasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-resetpassword',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./resetpassword.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/resetpassword/resetpassword.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./resetpassword.page.scss */
      "./src/app/resetpassword/resetpassword.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_native_globalization_ngx__WEBPACK_IMPORTED_MODULE_5__["Globalization"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])], ResetpasswordPage);
    /***/
  }
}]);
//# sourceMappingURL=resetpassword-resetpassword-module-es5.js.map