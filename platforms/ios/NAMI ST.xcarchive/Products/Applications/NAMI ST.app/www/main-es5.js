function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-menu side=\"end\" menuId=\"first\" contentId=\"content1\">\n    <ion-header no-border>\n      <ion-toolbar>\n        <ion-title>Navigate</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list *ngFor=\"let pages of navigate\">\n      <ion-menu-toggle auto-hide=\"true\">\n        <ion-item [routerLink]=\"pages.url\" routerDirection=\"forward\">\n            <ion-icon [name]=\"pages.icon\" slot=\"start\"></ion-icon>\n               {{pages.title}} \n        </ion-item>\n      </ion-menu-toggle>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <ion-router-outlet id=\"content1\"></ion-router-outlet>\n</ion-app>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/flag/flag.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/flag/flag.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFlagFlagPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n  <ion-toolbar text-center>\n    <ion-title>Flag/Report Resource</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-label>Report below resource:</ion-label>\n      <h4>{{sendmessage}}</h4><br>\n        <ion-label>Please provide details:</ion-label><br>\n      <ion-item>\n        <ion-input type=\"text\" [(ngModel)]=\"personalMessage\" (keyup.enter)=\"sendFlagResource()\"></ion-input>\n      </ion-item>\n    </ion-list>\n\n\n  <ion-row>\n    <ion-col col-4><ion-button class=\"close\" (click)=\"closeModal()\"><ion-icon large name=\"close\"></ion-icon></ion-button>\n    </ion-col>\n    <ion-col col-4>\n    </ion-col>\n    <ion-col col-4>\n      <ion-button color=\"danger\" (click)=\"sendFlagResource()\" full round><ion-icon large name=\"send\"> Send</ion-icon></ion-button>\n    </ion-col>\n  </ion-row>\n\n\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/phoneselect-modal/phoneselect-modal.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/phoneselect-modal/phoneselect-modal.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPhoneselectModalPhoneselectModalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n  <ion-toolbar text-center>\n    <ion-title>Select Phone #</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n  <ion-content padding>\n\n  <ion-list>\n\n    <ion-item *ngFor=\"let number of phoneNumbers\">\n      <ion-label (click)=\"select(number)\">\n        {{number.type}}:  {{number.value}}\n      </ion-label>\n    </ion-item>\n\n  </ion-list>\n  <ion-row>\n    <ion-col col-4><ion-button class=\"close\" (click)=\"closeModal()\"><ion-icon large name=\"close\"></ion-icon></ion-button>\n    </ion-col>\n      <ion-col col-4>\n      </ion-col>\n      <ion-col col-4>\n      </ion-col>\n  </ion-row>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/share-modal/share-modal.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/share-modal/share-modal.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShareModalShareModalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n    <ion-toolbar text-center>\n      <ion-title>Share</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding>\n  \n    <ion-list>\n      <ion-item style=\"height: 25% !important;\">\n  \n          <ion-label>Enter Phone #</ion-label>\n          <ion-input type=\"tel\" [(ngModel)]=\"phonenumberEntered\" (keyup.enter)=\"sendShare()\"></ion-input>\n  \n        </ion-item>\n        <ion-item style=\"height: 25% !important;\">\n          <ion-label>Enter Email</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"emailEntered\" (keyup.enter)=\"sendShare()\"></ion-input>\n        </ion-item>\n  \n        <ion-item style=\"height: 25% !important;\">\n          <ion-label>Message (optional)</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"personalMessage\" (keyup.enter)=\"sendShare()\"></ion-input>\n        </ion-item>\n  \n      </ion-list>\n\n  <ion-row>\n    <ion-button class=\"close\" (click)=\"closeModal()\"><ion-icon large name=\"close\"></ion-icon>Close</ion-button>\n    \n     \n        <ion-button (click)=\"selectContact()\" full round><ion-icon large name=\"person-circle-outline\"></ion-icon>Contacts</ion-button>\n      \n      \n        <ion-button (click)=\"sendShare()\" full round><ion-icon large name=\"send\"></ion-icon>Send</ion-button>\n      \n  </ion-row>\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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

    var routes = [{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | home-home-module */
        "home-home-module").then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | login-login-module */
        "login-login-module").then(__webpack_require__.bind(null,
        /*! ./login/login.module */
        "./src/app/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'documents',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | documents-documents-module */
        "documents-documents-module").then(__webpack_require__.bind(null,
        /*! ./documents/documents.module */
        "./src/app/documents/documents.module.ts")).then(function (m) {
          return m.DocumentsPageModule;
        });
      }
    }, {
      path: 'about',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | about-about-module */
        "about-about-module").then(__webpack_require__.bind(null,
        /*! ./about/about.module */
        "./src/app/about/about.module.ts")).then(function (m) {
          return m.AboutPageModule;
        });
      }
    }, {
      path: 'details',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | details-details-module */
        [__webpack_require__.e("common"), __webpack_require__.e("details-details-module")]).then(__webpack_require__.bind(null,
        /*! ./details/details.module */
        "./src/app/details/details.module.ts")).then(function (m) {
          return m.DetailsPageModule;
        });
      }
    }, {
      path: 'details/:key',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | details-details-module */
        [__webpack_require__.e("common"), __webpack_require__.e("details-details-module")]).then(__webpack_require__.bind(null,
        /*! ./details/details.module */
        "./src/app/details/details.module.ts")).then(function (m) {
          return m.DetailsPageModule;
        });
      }
    }, {
      path: 'register',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | register-register-module */
        "register-register-module").then(__webpack_require__.bind(null,
        /*! ./register/register.module */
        "./src/app/register/register.module.ts")).then(function (m) {
          return m.RegisterPageModule;
        });
      }
    }, {
      path: 'resetpassword',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | resetpassword-resetpassword-module */
        "resetpassword-resetpassword-module").then(__webpack_require__.bind(null,
        /*! ./resetpassword/resetpassword.module */
        "./src/app/resetpassword/resetpassword.module.ts")).then(function (m) {
          return m.ResetpasswordPageModule;
        });
      }
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | login-login-module */
        "login-login-module").then(__webpack_require__.bind(null,
        /*! ./login/login.module */
        "./src/app/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'favorites',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | favorites-favorites-module */
        [__webpack_require__.e("common"), __webpack_require__.e("favorites-favorites-module")]).then(__webpack_require__.bind(null,
        /*! ./favorites/favorites.module */
        "./src/app/favorites/favorites.module.ts")).then(function (m) {
          return m.FavoritesPageModule;
        });
      }
    }, {
      path: 'share-modal',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./share-modal/share-modal.module */
        "./src/app/share-modal/share-modal.module.ts")).then(function (m) {
          return m.ShareModalPageModule;
        });
      }
    }, {
      path: 'phoneselect-modal',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./phoneselect-modal/phoneselect-modal.module */
        "./src/app/phoneselect-modal/phoneselect-modal.module.ts")).then(function (m) {
          return m.PhoneselectModalPageModule;
        });
      }
    }, {
      path: 'flag',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./flag/flag.module */
        "./src/app/flag/flag.module.ts")).then(function (m) {
          return m.FlagPageModule;
        });
      }
    }, {
      path: 'maps',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | maps-maps-module */
        "maps-maps-module").then(__webpack_require__.bind(null,
        /*! ./maps/maps.module */
        "./src/app/maps/maps.module.ts")).then(function (m) {
          return m.MapsPageModule;
        });
      }
    }, {
      path: 'video',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | video-video-module */
        "video-video-module").then(__webpack_require__.bind(null,
        /*! ./video/video.module */
        "./src/app/video/video.module.ts")).then(function (m) {
          return m.VideoPageModule;
        });
      }
    }, {
      path: 'intro',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | intro-intro-module */
        "intro-intro-module").then(__webpack_require__.bind(null,
        /*! ./intro/intro.module */
        "./src/app/intro/intro.module.ts")).then(function (m) {
          return m.IntroPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"],
        onSameUrlNavigation: "reload"
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Removes header drop shadow */\nion-header {\n  z-index: 0;\n}\n/* Styles top toolbar */\nion-toolbar {\n  color: white;\n  --background: #0c499c;\n  box-shadow: none;\n}\n/* Styles background color of every item on page content*/\nion-content {\n  --ion-background-color: linear-gradient(to bottom,#0c499c 0%, #03216e 100%) !important;\n}\n/* Styles each resources font colors*/\np {\n  text-align: left;\n  color: #fff;\n  width: 100%;\n}\nb {\n  color: #fff;\n  font-size: 12pt;\n}\n/* Styles each menu item, background, border, and font color*/\nion-item {\n  --background: transparent !important;\n  --border-color: #FFF;\n  --color: #fff;\n}\n.list-md {\n  background: transparent !important;\n}\nion-icon {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWNrcmljaGFyZC9OQU1JL21vYmlsZS9iYXNlR0lUL2Jhc2Uvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQywrQkFBQTtBQUNBO0VBQ0csVUFBQTtBQ0NKO0FEQ0EsdUJBQUE7QUFDQTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDRUo7QURBQSx5REFBQTtBQUNBO0VBQ0Esc0ZBQUE7QUNHQTtBREFBLHFDQUFBO0FBQ0E7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDR0E7QUREQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDSUE7QUREQSw2REFBQTtBQUVBO0VBQ0ksb0NBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7QUNHSjtBRERBO0VBQ0ksa0NBQUE7QUNJSjtBREZBO0VBQ0ksV0FBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC8qIFJlbW92ZXMgaGVhZGVyIGRyb3Agc2hhZG93ICovXG4gaW9uLWhlYWRlciB7XG4gICAgei1pbmRleDogMDtcbiAgfVxuLyogU3R5bGVzIHRvcCB0b29sYmFyICovXG5pb24tdG9vbGJhciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIC0tYmFja2dyb3VuZDogIzBjNDk5YztcbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuLyogU3R5bGVzIGJhY2tncm91bmQgY29sb3Igb2YgZXZlcnkgaXRlbSBvbiBwYWdlIGNvbnRlbnQqL1xuaW9uLWNvbnRlbnR7XG4tLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCMwYzQ5OWMgMCUsICMwMzIxNmUgMTAwJSkgIWltcG9ydGFudDtcbn1cbiAgIFxuLyogU3R5bGVzIGVhY2ggcmVzb3VyY2VzIGZvbnQgY29sb3JzKi9cbnAge1xudGV4dC1hbGlnbjogbGVmdDtcbmNvbG9yOiAjZmZmO1xud2lkdGg6MTAwJTtcbn1cbmIge1xuY29sb3I6ICNmZmY7XG5mb250LXNpemU6IDEycHQ7XG59XG4gICAgXG4vKiBTdHlsZXMgZWFjaCBtZW51IGl0ZW0sIGJhY2tncm91bmQsIGJvcmRlciwgYW5kIGZvbnQgY29sb3IqL1xuXG5pb24taXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjRkZGO1xuICAgIC0tY29sb3I6ICNmZmY7XG59XG4ubGlzdC1tZCB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbmlvbi1pY29uIHtcbiAgICBjb2xvcjogI2ZmZjtcbn0gIiwiLyogUmVtb3ZlcyBoZWFkZXIgZHJvcCBzaGFkb3cgKi9cbmlvbi1oZWFkZXIge1xuICB6LWluZGV4OiAwO1xufVxuXG4vKiBTdHlsZXMgdG9wIHRvb2xiYXIgKi9cbmlvbi10b29sYmFyIHtcbiAgY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6ICMwYzQ5OWM7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi8qIFN0eWxlcyBiYWNrZ3JvdW5kIGNvbG9yIG9mIGV2ZXJ5IGl0ZW0gb24gcGFnZSBjb250ZW50Ki9cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwjMGM0OTljIDAlLCAjMDMyMTZlIDEwMCUpICFpbXBvcnRhbnQ7XG59XG5cbi8qIFN0eWxlcyBlYWNoIHJlc291cmNlcyBmb250IGNvbG9ycyovXG5wIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5iIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTJwdDtcbn1cblxuLyogU3R5bGVzIGVhY2ggbWVudSBpdGVtLCBiYWNrZ3JvdW5kLCBib3JkZXIsIGFuZCBmb250IGNvbG9yKi9cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1jb2xvcjogI0ZGRjtcbiAgLS1jb2xvcjogI2ZmZjtcbn1cblxuLmxpc3QtbWQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG5pb24taWNvbiB7XG4gIGNvbG9yOiAjZmZmO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/fcm/ngx */
    "./node_modules/@ionic-native/fcm/ngx/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(platform, splashScreen, statusBar, router, auth, fcm, fireauth) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.router = router;
        this.auth = auth;
        this.fcm = fcm;
        this.fireauth = fireauth;
        this.rootPage = 'LoginPage';
        auth.afAuth.authState.subscribe(function (user) {
          if (user) {
            _this.router.navigate(['/home']);
          } else {
            _this.router.navigate(['/login']);
          }
        }, function () {
          _this.router.navigate(['/login']);
        });
        this.sideMenu();
        this.platform.ready().then(function () {
          _this.statusBar.styleDefault();

          _this.splashScreen.hide();

          _this.fcm.getToken().then(function (token) {
            console.log(token);
          });

          _this.fcm.onTokenRefresh().subscribe(function (token) {
            console.log(token);
          });

          _this.fcm.onNotification().subscribe(function (data) {
            console.log(data);

            if (data.wasTapped) {
              console.log('Received in background');

              _this.router.navigate(['/about']);
            } else {
              console.log('Received in foreground');

              _this.router.navigate(['/about']);
            }
          });
        });
      }

      _createClass(AppComponent, [{
        key: "logout",
        value: function logout() {
          var _this2 = this;

          this.fireauth.auth.signOut().then(function () {
            _this2.router.navigate(['/login']);
          });
        }
      }, {
        key: "sideMenu",
        value: function sideMenu() {
          var _this3 = this;

          this.navigate = [{
            title: "Home",
            url: "/home",
            icon: "home"
          }, {
            title: "About",
            url: "/about",
            icon: "information-circle-outline"
          }, {
            title: "Favorites",
            url: "/favorites",
            icon: "heart"
          }, {
            title: "Documents",
            url: "/documents",
            icon: "document"
          }, {
            title: "Logout",
            url: "/login",
            icon: "log-out",
            handler: function handler() {
              _this3.logout();

              console.log('Logging Out');
            }
          }];
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }, {
        type: _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_7__["FCM"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_7__["FCM"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/es2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/storage/es2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ionic-native/call-number/ngx */
    "./node_modules/@ionic-native/call-number/ngx/index.js");
    /* harmony import */


    var _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic-native/launch-navigator/ngx */
    "./node_modules/@ionic-native/launch-navigator/ngx/index.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
    /* harmony import */


    var _share_modal_share_modal_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./share-modal/share-modal.module */
    "./src/app/share-modal/share-modal.module.ts");
    /* harmony import */


    var _phoneselect_modal_phoneselect_modal_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./phoneselect-modal/phoneselect-modal.module */
    "./src/app/phoneselect-modal/phoneselect-modal.module.ts");
    /* harmony import */


    var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @ionic-native/contacts/ngx */
    "./node_modules/@ionic-native/contacts/ngx/index.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _ionic_native_firebase_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @ionic-native/firebase/ngx */
    "./node_modules/@ionic-native/firebase/ngx/index.js");
    /* harmony import */


    var _flag_flag_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./flag/flag.module */
    "./src/app/flag/flag.module.ts");
    /* harmony import */


    var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @ionic-native/google-plus/ngx */
    "./node_modules/@ionic-native/google-plus/ngx/index.js");
    /* harmony import */


    var _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @ionic-native/firebase-analytics/ngx */
    "./node_modules/@ionic-native/firebase-analytics/ngx/index.js");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/ngx/index.js");
    /* harmony import */


    var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @ionic-native/fcm/ngx */
    "./node_modules/@ionic-native/fcm/ngx/index.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebase), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_11__["AngularFireDatabaseModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_12__["AngularFireStorageModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_15__["IonicStorageModule"].forRoot(), _share_modal_share_modal_module__WEBPACK_IMPORTED_MODULE_19__["ShareModalPageModule"], _phoneselect_modal_phoneselect_modal_module__WEBPACK_IMPORTED_MODULE_20__["PhoneselectModalPageModule"], _flag_flag_module__WEBPACK_IMPORTED_MODULE_24__["FlagPageModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_16__["CallNumber"], _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_17__["LaunchNavigator"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_18__["InAppBrowser"], _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_25__["GooglePlus"], _ionic_native_firebase_ngx__WEBPACK_IMPORTED_MODULE_23__["Firebase"], _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_26__["FirebaseAnalytics"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_27__["Network"], _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_28__["FCM"], _services_auth_service__WEBPACK_IMPORTED_MODULE_22__["AuthService"], _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_21__["Contacts"], // SignInWithApple,
      {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/flag/flag-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/flag/flag-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: FlagPageRoutingModule */

  /***/
  function srcAppFlagFlagRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlagPageRoutingModule", function () {
      return FlagPageRoutingModule;
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


    var _flag_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./flag.page */
    "./src/app/flag/flag.page.ts");

    var routes = [{
      path: '',
      component: _flag_page__WEBPACK_IMPORTED_MODULE_3__["FlagPage"]
    }];

    var FlagPageRoutingModule = function FlagPageRoutingModule() {
      _classCallCheck(this, FlagPageRoutingModule);
    };

    FlagPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FlagPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/flag/flag.module.ts":
  /*!*************************************!*\
    !*** ./src/app/flag/flag.module.ts ***!
    \*************************************/

  /*! exports provided: FlagPageModule */

  /***/
  function srcAppFlagFlagModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlagPageModule", function () {
      return FlagPageModule;
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


    var _flag_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./flag-routing.module */
    "./src/app/flag/flag-routing.module.ts");
    /* harmony import */


    var _flag_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./flag.page */
    "./src/app/flag/flag.page.ts");

    var FlagPageModule = function FlagPageModule() {
      _classCallCheck(this, FlagPageModule);
    };

    FlagPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _flag_routing_module__WEBPACK_IMPORTED_MODULE_5__["FlagPageRoutingModule"]],
      declarations: [_flag_page__WEBPACK_IMPORTED_MODULE_6__["FlagPage"]]
    })], FlagPageModule);
    /***/
  },

  /***/
  "./src/app/flag/flag.page.scss":
  /*!*************************************!*\
    !*** ./src/app/flag/flag.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppFlagFlagPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Styles top header */\nion-header {\n  color: white;\n  --background: #0c499c;\n  box-shadow: none;\n}\n/* Styles top toolbar */\nion-toolbar {\n  color: white;\n  --background: #0c499c;\n  box-shadow: none;\n}\n/* Styles background color of every item on page content*/\nion-content {\n  --ion-background-color: linear-gradient(to bottom,#0c499c 0%, #03216e 100%) !important;\n}\n/* Styles each resources font colors*/\np {\n  text-align: left;\n  color: #fff;\n  width: 100%;\n}\nb {\n  color: #fff;\n  font-size: 12pt;\n}\nion-label, h4 {\n  color: white;\n}\n/* Styles each menu item, background, border, and font color*/\nion-item {\n  --background: transparent !important;\n  --border-color: #FFF;\n  --color: #fff;\n}\n.list-md {\n  background: transparent !important;\n}\nion-row {\n  height: 20% !important;\n}\n/* Styles bottom buttons */\nion-button {\n  --background: linear-gradient(#00cd67 20%, #01ff80 100%) !important;\n  --background-focused: linear-gradient(#00cd67 20%, #01ff80 100%) !important;\n  --background-hover: linear-gradient(#00cd67 20%, #01ff80 100%) !important;\n  width: 100%;\n  height: 100%;\n}\nion-icon {\n  color: #fff;\n  height: 100%;\n  width: 100%;\n}\n/* Styles ion-toolbar */\nion-footer {\n  --background: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWNrcmljaGFyZC9OQU1JL21vYmlsZS9iYXNlR0lUL2Jhc2Uvc3JjL2FwcC9mbGFnL2ZsYWcucGFnZS5zY3NzIiwic3JjL2FwcC9mbGFnL2ZsYWcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFFLHNCQUFBO0FBQ0Y7RUFDSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0EsdUJBQUE7QUFDQTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDRUo7QURBQSx5REFBQTtBQUNBO0VBQ0ksc0ZBQUE7QUNHSjtBREFJLHFDQUFBO0FBQ0E7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDR0o7QURESTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDSUo7QURGSTtFQUNJLFlBQUE7QUNLUjtBREhJLDZEQUFBO0FBRUE7RUFDSSxvQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtBQ0tSO0FESEk7RUFDSSxrQ0FBQTtBQ01SO0FESEk7RUFDSSxzQkFBQTtBQ01SO0FESkssMEJBQUE7QUFDSDtFQUNFLG1FQUFBO0VBQ0EsMkVBQUE7RUFDQSx5RUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDT0o7QURMQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ1FKO0FETkUsdUJBQUE7QUFDQTtFQUNFLG9DQUFBO0FDU0oiLCJmaWxlIjoic3JjL2FwcC9mbGFnL2ZsYWcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAvKiBTdHlsZXMgdG9wIGhlYWRlciAqL1xuaW9uLWhlYWRlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIC0tYmFja2dyb3VuZDogIzBjNDk5YztcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cbi8qIFN0eWxlcyB0b3AgdG9vbGJhciAqL1xuaW9uLXRvb2xiYXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAtLWJhY2tncm91bmQ6ICMwYzQ5OWM7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG4vKiBTdHlsZXMgYmFja2dyb3VuZCBjb2xvciBvZiBldmVyeSBpdGVtIG9uIHBhZ2UgY29udGVudCovXG5pb24tY29udGVudHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCMwYzQ5OWMgMCUsICMwMzIxNmUgMTAwJSkgIWltcG9ydGFudDtcbiAgICB9XG4gICAgICAgXG4gICAgLyogU3R5bGVzIGVhY2ggcmVzb3VyY2VzIGZvbnQgY29sb3JzKi9cbiAgICBwIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgfVxuICAgIGIge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTJwdDtcbiAgICB9XG4gICAgaW9uLWxhYmVsLCBoNCB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9ICAgIFxuICAgIC8qIFN0eWxlcyBlYWNoIG1lbnUgaXRlbSwgYmFja2dyb3VuZCwgYm9yZGVyLCBhbmQgZm9udCBjb2xvciovXG4gICAgXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjRkZGO1xuICAgICAgICAtLWNvbG9yOiAjZmZmO1xuICAgIH1cbiAgICAubGlzdC1tZCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIFxuICAgIGlvbi1yb3cge1xuICAgICAgICBoZWlnaHQ6IDIwJSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAgLyogU3R5bGVzIGJvdHRvbSBidXR0b25zICovIFxuICBpb24tYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDBjZDY3IDIwJSwgIzAxZmY4MCAxMDAlKSAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiBsaW5lYXItZ3JhZGllbnQoIzAwY2Q2NyAyMCUsICMwMWZmODAgMTAwJSkgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCgjMDBjZDY3IDIwJSwgIzAxZmY4MCAxMDAlKSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbmlvbi1pY29uIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7ICBcbn0gXG4gIC8qIFN0eWxlcyBpb24tdG9vbGJhciAqLyAgXG4gIGlvbi1mb290ZXIge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBcbiB9XG4iLCIvKiBTdHlsZXMgdG9wIGhlYWRlciAqL1xuaW9uLWhlYWRlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiAjMGM0OTljO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4vKiBTdHlsZXMgdG9wIHRvb2xiYXIgKi9cbmlvbi10b29sYmFyIHtcbiAgY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6ICMwYzQ5OWM7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi8qIFN0eWxlcyBiYWNrZ3JvdW5kIGNvbG9yIG9mIGV2ZXJ5IGl0ZW0gb24gcGFnZSBjb250ZW50Ki9cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwjMGM0OTljIDAlLCAjMDMyMTZlIDEwMCUpICFpbXBvcnRhbnQ7XG59XG5cbi8qIFN0eWxlcyBlYWNoIHJlc291cmNlcyBmb250IGNvbG9ycyovXG5wIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5iIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTJwdDtcbn1cblxuaW9uLWxhYmVsLCBoNCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogU3R5bGVzIGVhY2ggbWVudSBpdGVtLCBiYWNrZ3JvdW5kLCBib3JkZXIsIGFuZCBmb250IGNvbG9yKi9cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1jb2xvcjogI0ZGRjtcbiAgLS1jb2xvcjogI2ZmZjtcbn1cblxuLmxpc3QtbWQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG5pb24tcm93IHtcbiAgaGVpZ2h0OiAyMCUgIWltcG9ydGFudDtcbn1cblxuLyogU3R5bGVzIGJvdHRvbSBidXR0b25zICovXG5pb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzAwY2Q2NyAyMCUsICMwMWZmODAgMTAwJSkgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IGxpbmVhci1ncmFkaWVudCgjMDBjZDY3IDIwJSwgIzAxZmY4MCAxMDAlKSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCgjMDBjZDY3IDIwJSwgIzAxZmY4MCAxMDAlKSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pb24taWNvbiB7XG4gIGNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKiBTdHlsZXMgaW9uLXRvb2xiYXIgKi9cbmlvbi1mb290ZXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/flag/flag.page.ts":
  /*!***********************************!*\
    !*** ./src/app/flag/flag.page.ts ***!
    \***********************************/

  /*! exports provided: FlagPage */

  /***/
  function srcAppFlagFlagPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlagPage", function () {
      return FlagPage;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/contacts/ngx */
    "./node_modules/@ionic-native/contacts/ngx/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js"); // import { Http } from '@angular/http';


    var FlagPage =
    /*#__PURE__*/
    function () {
      function FlagPage(modalController, navParams, http, contacts, plt, sanitizer, toastController) {
        _classCallCheck(this, FlagPage);

        this.modalController = modalController;
        this.navParams = navParams;
        this.http = http;
        this.contacts = contacts;
        this.plt = plt;
        this.sanitizer = sanitizer;
        this.toastController = toastController;
        this.toggleEmail = false;
        this.phonenumberEntered = '';
        this.emailEntered = '';
        this.personalMessage = '';
      }

      _createClass(FlagPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.table(this.navParams);
          this.sendmessage = this.navParams.data.message.message;
          console.log(this.sendmessage);
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var onClosedData;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    onClosedData = "Resource Flagged!";
                    _context.next = 3;
                    return this.modalController.dismiss(onClosedData);

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "showToast",
        value: function showToast(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.toastController.create({
                      message: msg,
                      duration: 4000
                    });

                  case 2:
                    toast = _context2.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "sendFlagResource",
        value: function sendFlagResource() {
          var message = this.sendmessage;

          if (!this.personalMessage || this.personalMessage == undefined) {} else {
            message = 'This resource was flagged' + '\n' + message + '\n' + '\n' + this.personalMessage;
          }

          var address = 'mobileapp@namisttammany.org';
          this.http.post('https://fathomless-ocean-93452.herokuapp.com/sendEmail', {
            "email": message,
            "to": address
          }).subscribe(function (val) {
            console.log("POST call successful value returned in body", val);
          }, function (response) {
            console.log("POST call in error", response);
          }, function () {
            console.log("The POST observable is now completed.");
          }); //   .pipe(
          //     map(res => res.json())).subscribe(response => {
          //     console.log('POST Response:', response);
          //     response.end(response);
          // });  
          // this.http.post('https://fathomless-ocean-93452.herokuapp.com/sendEmail', {"email":message, "to":address}).pipe(
          //     map(res => res.json())).subscribe(response => {
          //     console.log('POST Response:', response);
          //     response.end(response);
          // });       //add .then to allow only 1 request

          this.closeModal();
        }
      }]);

      return FlagPage;
    }();

    FlagPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_4__["Contacts"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }];
    };

    FlagPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-flag',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./flag.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/flag/flag.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./flag.page.scss */
      "./src/app/flag/flag.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_4__["Contacts"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])], FlagPage);
    /***/
  },

  /***/
  "./src/app/phoneselect-modal/phoneselect-modal-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/phoneselect-modal/phoneselect-modal-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: PhoneselectModalPageRoutingModule */

  /***/
  function srcAppPhoneselectModalPhoneselectModalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhoneselectModalPageRoutingModule", function () {
      return PhoneselectModalPageRoutingModule;
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


    var _phoneselect_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./phoneselect-modal.page */
    "./src/app/phoneselect-modal/phoneselect-modal.page.ts");

    var routes = [{
      path: '',
      component: _phoneselect_modal_page__WEBPACK_IMPORTED_MODULE_3__["PhoneselectModalPage"]
    }];

    var PhoneselectModalPageRoutingModule = function PhoneselectModalPageRoutingModule() {
      _classCallCheck(this, PhoneselectModalPageRoutingModule);
    };

    PhoneselectModalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PhoneselectModalPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/phoneselect-modal/phoneselect-modal.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/phoneselect-modal/phoneselect-modal.module.ts ***!
    \***************************************************************/

  /*! exports provided: PhoneselectModalPageModule */

  /***/
  function srcAppPhoneselectModalPhoneselectModalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhoneselectModalPageModule", function () {
      return PhoneselectModalPageModule;
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


    var _phoneselect_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./phoneselect-modal-routing.module */
    "./src/app/phoneselect-modal/phoneselect-modal-routing.module.ts");
    /* harmony import */


    var _phoneselect_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./phoneselect-modal.page */
    "./src/app/phoneselect-modal/phoneselect-modal.page.ts");

    var PhoneselectModalPageModule = function PhoneselectModalPageModule() {
      _classCallCheck(this, PhoneselectModalPageModule);
    };

    PhoneselectModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _phoneselect_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["PhoneselectModalPageRoutingModule"]],
      declarations: [_phoneselect_modal_page__WEBPACK_IMPORTED_MODULE_6__["PhoneselectModalPage"]]
    })], PhoneselectModalPageModule);
    /***/
  },

  /***/
  "./src/app/phoneselect-modal/phoneselect-modal.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/phoneselect-modal/phoneselect-modal.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPhoneselectModalPhoneselectModalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Styles checkbox*/\nion-checkbox {\n  --background: transparent !important;\n  --background-checked: transparent !important;\n  --border-color: rgba(255,255,255,0.5) !important;\n  --border-color-checked: #01ff80 !important;\n  --checkmark-color: #01ff80 !important;\n  --border-radius: 60px;\n}\n/* Styles top toolbar */\nion-toolbar {\n  color: white;\n  --background: #3064ab;\n  box-shadow: none;\n}\n/* Styles background color of every item on page content*/\nion-content {\n  --ion-background-color: linear-gradient(180deg, #3064ab 0%, #0c499c 50%, #03216e 100%) !important;\n}\n/* Styles searcbar*/\n.sc-ion-searchbar-md-h {\n  --clear-button-color: initial;\n  --cancel-button-color: var(--ion-color-step-900,#fff);\n  --color: var(--ion-color-step-850,#fff);\n  --icon-color: var(--ion-color-step-600,#fff);\n  --background: transparent !important;\n}\n/* Styles 2 dropdowns*/\nion-item {\n  --background: transparent !important;\n  --color: #fff !important;\n  --border-color: var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(255,255,255,0.13))));\n}\n/* Styles 2 dropdowns bacground color*/\n.list-md {\n  background: transparent !important;\n}\n/* Styles each resources font colors*/\np {\n  text-align: left;\n  color: #fff;\n}\nb {\n  color: #fff;\n  font-size: 12pt;\n}\n/* Styles each resources background color*/\nion-list {\n  --color: var(--ion-color-step-850,#fff);\n  --background: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWNrcmljaGFyZC9OQU1JL21vYmlsZS9iYXNlR0lUL2Jhc2Uvc3JjL2FwcC9waG9uZXNlbGVjdC1tb2RhbC9waG9uZXNlbGVjdC1tb2RhbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3Bob25lc2VsZWN0LW1vZGFsL3Bob25lc2VsZWN0LW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBRSxtQkFBQTtBQUNBO0VBQ0Usb0NBQUE7RUFDQSw0Q0FBQTtFQUNBLGdEQUFBO0VBQ0EsMENBQUE7RUFDQSxxQ0FBQTtFQUNBLHFCQUFBO0FDQ0o7QURDQSx1QkFBQTtBQUNBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNFQTtBRENBLHlEQUFBO0FBQ0E7RUFDQSxpR0FBQTtBQ0VBO0FEQUEsbUJBQUE7QUFDQTtFQUNFLDZCQUFBO0VBQ0EscURBQUE7RUFDQSx1Q0FBQTtFQUNBLDRDQUFBO0VBQ0Esb0NBQUE7QUNHRjtBRERBLHNCQUFBO0FBQ0E7RUFDQSxvQ0FBQTtFQUNBLHdCQUFBO0VBQ0EscUhBQUE7QUNJQTtBREZBLHNDQUFBO0FBQ0E7RUFDQSxrQ0FBQTtBQ0tBO0FESEEscUNBQUE7QUFDQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ01BO0FESkE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ09BO0FETEEsMENBQUE7QUFDQTtFQUNBLHVDQUFBO0VBQ0Esb0NBQUE7QUNRQSIsImZpbGUiOiJzcmMvYXBwL3Bob25lc2VsZWN0LW1vZGFsL3Bob25lc2VsZWN0LW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgLyogU3R5bGVzIGNoZWNrYm94Ki9cbiAgaW9uLWNoZWNrYm94IHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KSAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6ICMwMWZmODAgIWltcG9ydGFudDtcdFxuICAgIC0tY2hlY2ttYXJrLWNvbG9yOiAjMDFmZjgwICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA2MHB4O1xufVxuLyogU3R5bGVzIHRvcCB0b29sYmFyICovXG5pb24tdG9vbGJhciB7XG5jb2xvcjogd2hpdGU7XG4tLWJhY2tncm91bmQ6ICMzMDY0YWI7XG5ib3gtc2hhZG93OiBub25lO1xufVxuXG4vKiBTdHlsZXMgYmFja2dyb3VuZCBjb2xvciBvZiBldmVyeSBpdGVtIG9uIHBhZ2UgY29udGVudCovXG5pb24tY29udGVudHtcbi0taW9uLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMzMDY0YWIgMCUsICMwYzQ5OWMgNTAlLCAjMDMyMTZlIDEwMCUpICFpbXBvcnRhbnQ7XG59XG4vKiBTdHlsZXMgc2VhcmNiYXIqL1xuLnNjLWlvbi1zZWFyY2hiYXItbWQtaCB7XG4gIC0tY2xlYXItYnV0dG9uLWNvbG9yOiBpbml0aWFsO1xuICAtLWNhbmNlbC1idXR0b24tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTkwMCwjZmZmKTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtODUwLCNmZmYpO1xuICAtLWljb24tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwjZmZmKTtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuLyogU3R5bGVzIDIgZHJvcGRvd25zKi9cbmlvbi1pdGVtIHtcbi0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbi0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbi0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24taXRlbS1ib3JkZXItY29sb3IsdmFyKC0taW9uLWJvcmRlci1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAscmdiYSgyNTUsMjU1LDI1NSwwLjEzKSkpKTtcbn1cbi8qIFN0eWxlcyAyIGRyb3Bkb3ducyBiYWNncm91bmQgY29sb3IqL1xuLmxpc3QtbWQge1xuYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbi8qIFN0eWxlcyBlYWNoIHJlc291cmNlcyBmb250IGNvbG9ycyovXG5wIHtcbnRleHQtYWxpZ246IGxlZnQ7XG5jb2xvcjogI2ZmZjtcbn1cbmIge1xuY29sb3I6ICNmZmY7XG5mb250LXNpemU6IDEycHQ7XG59XG4vKiBTdHlsZXMgZWFjaCByZXNvdXJjZXMgYmFja2dyb3VuZCBjb2xvciovXG5pb24tbGlzdCB7XG4tLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC04NTAsI2ZmZik7XG4tLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbiIsIi8qIFN0eWxlcyBjaGVja2JveCovXG5pb24tY2hlY2tib3gge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjUpICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6ICMwMWZmODAgIWltcG9ydGFudDtcbiAgLS1jaGVja21hcmstY29sb3I6ICMwMWZmODAgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA2MHB4O1xufVxuXG4vKiBTdHlsZXMgdG9wIHRvb2xiYXIgKi9cbmlvbi10b29sYmFyIHtcbiAgY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6ICMzMDY0YWI7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi8qIFN0eWxlcyBiYWNrZ3JvdW5kIGNvbG9yIG9mIGV2ZXJ5IGl0ZW0gb24gcGFnZSBjb250ZW50Ki9cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzMwNjRhYiAwJSwgIzBjNDk5YyA1MCUsICMwMzIxNmUgMTAwJSkgIWltcG9ydGFudDtcbn1cblxuLyogU3R5bGVzIHNlYXJjYmFyKi9cbi5zYy1pb24tc2VhcmNoYmFyLW1kLWgge1xuICAtLWNsZWFyLWJ1dHRvbi1jb2xvcjogaW5pdGlhbDtcbiAgLS1jYW5jZWwtYnV0dG9uLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC05MDAsI2ZmZik7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTg1MCwjZmZmKTtcbiAgLS1pY29uLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsI2ZmZik7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLyogU3R5bGVzIDIgZHJvcGRvd25zKi9cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24taXRlbS1ib3JkZXItY29sb3IsdmFyKC0taW9uLWJvcmRlci1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAscmdiYSgyNTUsMjU1LDI1NSwwLjEzKSkpKTtcbn1cblxuLyogU3R5bGVzIDIgZHJvcGRvd25zIGJhY2dyb3VuZCBjb2xvciovXG4ubGlzdC1tZCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi8qIFN0eWxlcyBlYWNoIHJlc291cmNlcyBmb250IGNvbG9ycyovXG5wIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbmIge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxMnB0O1xufVxuXG4vKiBTdHlsZXMgZWFjaCByZXNvdXJjZXMgYmFja2dyb3VuZCBjb2xvciovXG5pb24tbGlzdCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTg1MCwjZmZmKTtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/phoneselect-modal/phoneselect-modal.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/phoneselect-modal/phoneselect-modal.page.ts ***!
    \*************************************************************/

  /*! exports provided: PhoneselectModalPage */

  /***/
  function srcAppPhoneselectModalPhoneselectModalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhoneselectModalPage", function () {
      return PhoneselectModalPage;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/contacts/ngx */
    "./node_modules/@ionic-native/contacts/ngx/index.js");

    var PhoneselectModalPage =
    /*#__PURE__*/
    function () {
      function PhoneselectModalPage(modalController, navParams, http, contacts, plt, sanitizer, toastController) {
        _classCallCheck(this, PhoneselectModalPage);

        this.modalController = modalController;
        this.navParams = navParams;
        this.http = http;
        this.contacts = contacts;
        this.plt = plt;
        this.sanitizer = sanitizer;
        this.toastController = toastController;
        this.phoneNumbers = this.navParams.data.message.message;
        console.log("now showing #s");
        console.log(this.phoneNumbers);
      }

      _createClass(PhoneselectModalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.phoneNumbers = this.navParams.data.message;
          // console.log("now showing #s")
          // console.log(this.phoneNumbers)
        }
      }, {
        key: "showToast",
        value: function showToast(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var toast;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.toastController.create({
                      message: msg,
                      duration: 4000
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
      }, {
        key: "closeModal",
        value: function closeModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.modalController.dismiss();

                  case 2:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "select",
        value: function select(number) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    console.log(number.value);
                    _context5.next = 3;
                    return this.modalController.dismiss(number.value);

                  case 3:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return PhoneselectModalPage;
    }();

    PhoneselectModalPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_5__["Contacts"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }];
    };

    PhoneselectModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-phoneselect-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./phoneselect-modal.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/phoneselect-modal/phoneselect-modal.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./phoneselect-modal.page.scss */
      "./src/app/phoneselect-modal/phoneselect-modal.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_5__["Contacts"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])], PhoneselectModalPage);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
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


    var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/google-plus/ngx */
    "./node_modules/@ionic-native/google-plus/ngx/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(afAuth, platform, googlePlus) {
        var _this4 = this;

        _classCallCheck(this, AuthService);

        this.afAuth = afAuth;
        this.platform = platform;
        this.googlePlus = googlePlus;
        afAuth.authState.subscribe(function (user) {
          _this4.user = user;
        });
      }

      _createClass(AuthService, [{
        key: "doRegister",
        value: function doRegister(value) {
          return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().createUserWithEmailAndPassword(value.email, value.password).then(function (res) {
              return resolve(res);
            }, function (err) {
              return reject(err);
            });
          });
        }
      }, {
        key: "doLogin",
        value: function doLogin(value) {
          return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithEmailAndPassword(value.email, value.password).then(function (res) {
              return resolve(res);
            }, function (err) {
              return reject(err);
            });
          });
        }
      }, {
        key: "doGoogleLogin",
        value: function doGoogleLogin() {
          var _this5 = this;

          return new Promise(function (resolve, reject) {
            if (_this5.platform.is('cordova')) {
              console.log("platform is cordova");

              _this5.googlePlus.login({
                // 'scopes': '', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
                'webClientId': _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].googleWebClientId,
                'offline': true
              }).then(function (response) {
                console.log('trying google login');
                var googleCredential = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider.credential(response.idToken);
                firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithCredential(googleCredential).then(function (user) {
                  _this5.user = user.user;
                  console.log(_this5.user);
                  resolve();
                });
              }, function (err) {
                reject(err);
              });
            } else {
              console.log("platform is NOT cordova");
              firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider()).then(function (user) {
                resolve();
              }, function (err) {
                reject(err);
              });
            }
          });
        }
      }, {
        key: "doLogout",
        value: function doLogout() {
          return new Promise(function (resolve, reject) {
            if (firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser) {
              firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().signOut().then(function () {
                //  this.firebaseService.unsubscribeOnLogOut();
                resolve();
              }).catch(function (error) {
                reject();
              });
            }
          });
        }
      }, {
        key: "resetPassword",
        value: function resetPassword(email) {
          return firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().sendPasswordResetEmail(email).then(function () {
            return console.log("email sent");
          }).catch(function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "authenticated",
        get: function get() {
          return this.user !== null;
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_5__["GooglePlus"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_5__["GooglePlus"]])], AuthService);
    /***/
  },

  /***/
  "./src/app/share-modal/share-modal-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/share-modal/share-modal-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: ShareModalPageRoutingModule */

  /***/
  function srcAppShareModalShareModalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShareModalPageRoutingModule", function () {
      return ShareModalPageRoutingModule;
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


    var _share_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./share-modal.page */
    "./src/app/share-modal/share-modal.page.ts");

    var routes = [{
      path: '',
      component: _share_modal_page__WEBPACK_IMPORTED_MODULE_3__["ShareModalPage"]
    }];

    var ShareModalPageRoutingModule = function ShareModalPageRoutingModule() {
      _classCallCheck(this, ShareModalPageRoutingModule);
    };

    ShareModalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ShareModalPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/share-modal/share-modal.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/share-modal/share-modal.module.ts ***!
    \***************************************************/

  /*! exports provided: ShareModalPageModule */

  /***/
  function srcAppShareModalShareModalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShareModalPageModule", function () {
      return ShareModalPageModule;
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


    var _share_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./share-modal-routing.module */
    "./src/app/share-modal/share-modal-routing.module.ts");
    /* harmony import */


    var _share_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./share-modal.page */
    "./src/app/share-modal/share-modal.page.ts");

    var ShareModalPageModule = function ShareModalPageModule() {
      _classCallCheck(this, ShareModalPageModule);
    };

    ShareModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _share_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShareModalPageRoutingModule"]],
      declarations: [_share_modal_page__WEBPACK_IMPORTED_MODULE_6__["ShareModalPage"]]
    })], ShareModalPageModule);
    /***/
  },

  /***/
  "./src/app/share-modal/share-modal.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/share-modal/share-modal.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppShareModalShareModalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Styles top header */\nion-header {\n  color: white;\n  --background: #0c499c;\n  box-shadow: none;\n}\n/* Styles top toolbar */\nion-toolbar {\n  color: white;\n  --background: #0c499c;\n  box-shadow: none;\n}\n/* Styles background color of every item on page content*/\nion-content {\n  --ion-background-color: linear-gradient(to bottom,#0c499c 0%, #03216e 100%) !important;\n}\n/* Styles each resources font colors*/\np {\n  text-align: left;\n  color: #fff;\n  width: 100%;\n}\nb {\n  color: #fff;\n  font-size: 12pt;\n}\n/* Styles each menu item, background, border, and font color*/\nion-item {\n  --background: transparent !important;\n  --border-color: #FFF;\n  --color: #fff;\n}\n.list-md {\n  background: transparent !important;\n}\nion-row {\n  height: 20% !important;\n}\n/* Styles bottom buttons */\nion-button {\n  --background: linear-gradient(#00cd67 20%, #01ff80 100%) !important;\n  --background-focused: linear-gradient(#00cd67 20%, #01ff80 100%) !important;\n  --background-hover: linear-gradient(#00cd67 20%, #01ff80 100%) !important;\n  width: 100%;\n  height: 40%;\n  font-size: 18px;\n}\nion-icon {\n  color: #fff;\n  margin-right: 11px;\n}\n/* Styles ion-toolbar */\nion-footer {\n  --background: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWNrcmljaGFyZC9OQU1JL21vYmlsZS9iYXNlR0lUL2Jhc2Uvc3JjL2FwcC9zaGFyZS1tb2RhbC9zaGFyZS1tb2RhbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3NoYXJlLW1vZGFsL3NoYXJlLW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzQkFBQTtBQUNBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENBLHVCQUFBO0FBQ0E7RUFDSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0VKO0FEQUEseURBQUE7QUFDQTtFQUNJLHNGQUFBO0FDR0o7QURBSSxxQ0FBQTtBQUNBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0dKO0FEREk7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0lKO0FEREksNkRBQUE7QUFFQTtFQUNJLG9DQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0FDR1I7QURESTtFQUNJLGtDQUFBO0FDSVI7QURESTtFQUNJLHNCQUFBO0FDSVI7QURGSywwQkFBQTtBQUNIO0VBQ0UsbUVBQUE7RUFDQSwyRUFBQTtFQUNBLHlFQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDS0o7QURIQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ01KO0FESkUsdUJBQUE7QUFDQTtFQUNFLG9DQUFBO0FDT0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZS1tb2RhbC9zaGFyZS1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTdHlsZXMgdG9wIGhlYWRlciAqL1xuaW9uLWhlYWRlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIC0tYmFja2dyb3VuZDogIzBjNDk5YztcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cbi8qIFN0eWxlcyB0b3AgdG9vbGJhciAqL1xuaW9uLXRvb2xiYXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAtLWJhY2tncm91bmQ6ICMwYzQ5OWM7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG4vKiBTdHlsZXMgYmFja2dyb3VuZCBjb2xvciBvZiBldmVyeSBpdGVtIG9uIHBhZ2UgY29udGVudCovXG5pb24tY29udGVudHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCMwYzQ5OWMgMCUsICMwMzIxNmUgMTAwJSkgIWltcG9ydGFudDtcbiAgICB9XG4gICAgICAgXG4gICAgLyogU3R5bGVzIGVhY2ggcmVzb3VyY2VzIGZvbnQgY29sb3JzKi9cbiAgICBwIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgfVxuICAgIGIge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTJwdDtcbiAgICB9XG4gICAgICAgIFxuICAgIC8qIFN0eWxlcyBlYWNoIG1lbnUgaXRlbSwgYmFja2dyb3VuZCwgYm9yZGVyLCBhbmQgZm9udCBjb2xvciovXG4gICAgXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjRkZGO1xuICAgICAgICAtLWNvbG9yOiAjZmZmO1xuICAgIH1cbiAgICAubGlzdC1tZCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIFxuICAgIGlvbi1yb3cge1xuICAgICAgICBoZWlnaHQ6IDIwJSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAgLyogU3R5bGVzIGJvdHRvbSBidXR0b25zICovIFxuICBpb24tYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDBjZDY3IDIwJSwgIzAxZmY4MCAxMDAlKSAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiBsaW5lYXItZ3JhZGllbnQoIzAwY2Q2NyAyMCUsICMwMWZmODAgMTAwJSkgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCgjMDBjZDY3IDIwJSwgIzAxZmY4MCAxMDAlKSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDAlO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cbmlvbi1pY29uIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tcmlnaHQ6IDExcHg7XG59IFxuICAvKiBTdHlsZXMgaW9uLXRvb2xiYXIgKi8gIFxuICBpb24tZm9vdGVyIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgXG4gfVxuIiwiLyogU3R5bGVzIHRvcCBoZWFkZXIgKi9cbmlvbi1oZWFkZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogIzBjNDk5YztcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLyogU3R5bGVzIHRvcCB0b29sYmFyICovXG5pb24tdG9vbGJhciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiAjMGM0OTljO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4vKiBTdHlsZXMgYmFja2dyb3VuZCBjb2xvciBvZiBldmVyeSBpdGVtIG9uIHBhZ2UgY29udGVudCovXG5pb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIzBjNDk5YyAwJSwgIzAzMjE2ZSAxMDAlKSAhaW1wb3J0YW50O1xufVxuXG4vKiBTdHlsZXMgZWFjaCByZXNvdXJjZXMgZm9udCBjb2xvcnMqL1xucCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcbn1cblxuYiB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEycHQ7XG59XG5cbi8qIFN0eWxlcyBlYWNoIG1lbnUgaXRlbSwgYmFja2dyb3VuZCwgYm9yZGVyLCBhbmQgZm9udCBjb2xvciovXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItY29sb3I6ICNGRkY7XG4gIC0tY29sb3I6ICNmZmY7XG59XG5cbi5saXN0LW1kIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuaW9uLXJvdyB7XG4gIGhlaWdodDogMjAlICFpbXBvcnRhbnQ7XG59XG5cbi8qIFN0eWxlcyBib3R0b20gYnV0dG9ucyAqL1xuaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwMGNkNjcgMjAlLCAjMDFmZjgwIDEwMCUpICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiBsaW5lYXItZ3JhZGllbnQoIzAwY2Q2NyAyMCUsICMwMWZmODAgMTAwJSkgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBsaW5lYXItZ3JhZGllbnQoIzAwY2Q2NyAyMCUsICMwMWZmODAgMTAwJSkgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDAlO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbmlvbi1pY29uIHtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1yaWdodDogMTFweDtcbn1cblxuLyogU3R5bGVzIGlvbi10b29sYmFyICovXG5pb24tZm9vdGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/share-modal/share-modal.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/share-modal/share-modal.page.ts ***!
    \*************************************************/

  /*! exports provided: ShareModalPage */

  /***/
  function srcAppShareModalShareModalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShareModalPage", function () {
      return ShareModalPage;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/contacts/ngx */
    "./node_modules/@ionic-native/contacts/ngx/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _phoneselect_modal_phoneselect_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../phoneselect-modal/phoneselect-modal.page */
    "./src/app/phoneselect-modal/phoneselect-modal.page.ts");
    /* harmony import */


    var _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/firebase-analytics/ngx */
    "./node_modules/@ionic-native/firebase-analytics/ngx/index.js"); // import { Http } from '@angular/http';


    var ShareModalPage =
    /*#__PURE__*/
    function () {
      function ShareModalPage(modalController, navParams, http, contacts, plt, sanitizer, toastController, firebaseAnalytics) {
        _classCallCheck(this, ShareModalPage);

        this.modalController = modalController;
        this.navParams = navParams;
        this.http = http;
        this.contacts = contacts;
        this.plt = plt;
        this.sanitizer = sanitizer;
        this.toastController = toastController;
        this.firebaseAnalytics = firebaseAnalytics;
        this.toggleEmail = false;
        this.phonenumberEntered = '';
        this.emailEntered = '';
        this.personalMessage = ''; // URLs to REST API deployed in Heroku
        // Ensure urls are modified for each app version

        this.herokuSMS = 'https://fathomless-ocean-93452.herokuapp.com/sendsms';
        this.herokuEMAIL = 'https://fathomless-ocean-93452.herokuapp.com/sendEmail';
      }

      _createClass(ShareModalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.table(this.navParams);
          this.sendmessage = this.navParams.data.message.message;
          console.log(this.sendmessage);
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var onClosedData;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    onClosedData = "Shared Successfully!";
                    _context6.next = 3;
                    return this.modalController.dismiss(onClosedData);

                  case 3:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "showToast",
        value: function showToast(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var toast;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.toastController.create({
                      message: msg,
                      duration: 4000
                    });

                  case 2:
                    toast = _context7.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "openModal",
        value: function openModal(data) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            var _this6 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.modalController.create({
                      component: _phoneselect_modal_phoneselect_modal_page__WEBPACK_IMPORTED_MODULE_6__["PhoneselectModalPage"],
                      componentProps: {
                        "message": data
                      }
                    });

                  case 2:
                    modal = _context8.sent;
                    modal.onDidDismiss().then(function (dataReturned) {
                      if (dataReturned !== null) {
                        _this6.dataReturned = dataReturned.data;
                        _this6.phonenumberEntered = _this6.dataReturned;
                        alert('Selected :' + _this6.dataReturned);
                      }
                    });
                    _context8.next = 6;
                    return modal.present();

                  case 6:
                    return _context8.abrupt("return", _context8.sent);

                  case 7:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "selectContact",
        value: function selectContact() {
          var _this7 = this;

          this.phonenumberEntered = '';
          this.emailEntered = '';
          this.recipient = this.contacts.pickContact().then(function (contact) {
            console.log('The following contact has been selected:' + JSON.stringify(contact));

            if (contact.emails == null) {
              if (contact.phoneNumbers.length > 1) {
                // **** Open modal to select phone number **** //
                var data = {
                  message: contact.phoneNumbers
                };

                _this7.openModal(data).then(function () {
                  console.log(_this7.phonenumberEntered);
                });
              } else {
                _this7.phonenumberEntered = contact.phoneNumbers[0].value;
              } // **** Return phone number selected **** //

            }

            if (contact.phoneNumbers == null) {
              _this7.emailEntered = contact.emails[0].value;
            }

            if (contact.emails[0].value !== null && contact.phoneNumbers[0].value !== null) {
              _this7.emailEntered = contact.emails[0].value;

              if (contact.phoneNumbers.length > 1) {
                var data = {
                  message: contact.phoneNumbers
                };

                _this7.openModal(data).then(function () {
                  console.log(_this7.phonenumberEntered);
                });
              } else {
                _this7.phonenumberEntered = contact.phoneNumbers[0].value;
              }
            }

            console.log(_this7.emailEntered);
            console.log(_this7.phonenumberEntered);
          });
        }
      }, {
        key: "sendShare",
        value: function sendShare() {
          var message = this.sendmessage;

          if (!this.personalMessage || this.personalMessage == undefined) {} else {
            message = message + '\n' + this.personalMessage;
          }

          if ((!this.phonenumberEntered || this.phonenumberEntered == undefined || this.phonenumberEntered == '') && (!this.emailEntered || this.emailEntered == undefined || this.emailEntered == '')) {
            alert("Enter recipient phone number or email to share");
            return;
          }

          if (!this.phonenumberEntered || this.phonenumberEntered == undefined || this.phonenumberEntered == '') {
            this.showToast("Phone # not entered, only email will be sent to " + this.emailEntered);
          } else {
            var to = this.phonenumberEntered;
            this.http.post(this.herokuSMS, {
              "sms": message,
              "to": to
            }).subscribe(function (val) {
              console.log("POST call successful value returned in body", val);
            }, function (response) {
              console.log("POST call in error", response);
            }, function () {
              console.log("The POST observable is now completed.");
            });
          }

          if (!this.emailEntered || this.emailEntered == undefined || this.emailEntered == '') {
            this.showToast("Email not entered, only text will be sent to " + this.phonenumberEntered);
          } else {
            var address = this.emailEntered;
            this.http.post(this.herokuEMAIL, {
              "email": message,
              "to": address
            }).subscribe(function (val) {
              console.log("POST call successful value returned in body", val);
            }, function (response) {
              console.log("POST call in error", response);
            }, function () {
              console.log("The POST observable is now completed.");
            });
            ;
          }

          this.closeModal();
        }
      }]);

      return ShareModalPage;
    }();

    ShareModalPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_4__["Contacts"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_7__["FirebaseAnalytics"]
      }];
    };

    ShareModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-share-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./share-modal.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/share-modal/share-modal.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./share-modal.page.scss */
      "./src/app/share-modal/share-modal.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_4__["Contacts"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_7__["FirebaseAnalytics"]])], ShareModalPage);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      googleWebClientId: '286425454623-3leqmjh55paiq73ap5rjfcu41c7ap13g.apps.googleusercontent.com',
      firebase: {
        apiKey: "AIzaSyCjrWJCXYXRo24uPuv9ufvYtsPApMKWhNY",
        authDomain: "nami-sttammany-30439.firebaseapp.com",
        databaseURL: "https://nami-sttammany-30439.firebaseio.com",
        projectId: "nami-sttammany-30439",
        storageBucket: "nami-sttammany-30439.appspot.com",
        messagingSenderId: "286425454623",
        appId: "1:286425454623:web:c9f2a84b21ad3a04",
        measurementId: "G-NKSM711X5Y"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/nickrichard/NAMI/mobile/baseGIT/base/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map