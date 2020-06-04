function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <img alt=\"logo\" slot=\"end\" height=\"40px\" src=\"assets/img/Logo_WhiteStacked_1024x1024.png\">\n      <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    <ion-title>\n      Resources\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" id=\"home\" (ionScrollEnd)=\"scrollStop($event)\" (ionScroll)=\"scrollHandler($event)\">\n\n  <ion-searchbar style=\"box-shadow: none !important;\" [(ngModel)]=\"searchTerm\" (ionInput)=\"search()\"></ion-searchbar>\n  \n  <div class=\"dropdowns\">\n  <ion-list class=\"bshadow\">\n  <ion-item >\n    <ion-label class=\"box-categories\">Categories</ion-label>\n    <ion-select  [(ngModel)]=\"categories\" multiple=\"true\" cancelText=\"Cancel\" okText=\"Select\" (ionChange)=\"search();\">\n      <ion-select-option *ngFor=\"let category of categoryList | async\" value={{category.category}}>{{category.category}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n  </ion-list>\n  <ion-list class=\"bshadow\">\n  <ion-item>\n    <ion-label class=\"box-cities\">Cities</ion-label>\n    <ion-select  [(ngModel)]=\"cities\" multiple=\"true\" cancelText=\"Cancel\" okText=\"Select\" (ionChange)=\"search();\">\n      <ion-select-option *ngFor=\"let city of cityList | async\" value={{city.city}}>{{city.city}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n  </ion-list>\n  </div>\n  <ion-list class=\"ion-padding\">\n  <ion-list *ngFor=\"let resource of searchResults | async\" >\n      <ion-grid>\n<ion-row>\n\n  <ion-col size=\"2\">\n    <div class=\"center\"><ion-checkbox style=\"width: 100%; height: auto;\" checked=\"false\" [(ngModel)]=\"resource.checked\" (ionChange)=\"updateSelected($event, resource)\">\n    </ion-checkbox></div>\n  </ion-col>\n  <ion-col size=\"1\">\n\n  </ion-col>\n  <ion-col size=\"9\">\n    <ion-label style=\"height:auto; display:flex; vertical-align: 50%;\" class=\"ion-text-wrap\" [routerLink]=\"['/details', resource.key]\">\n        <p class=\"ion-text-wrap\"><b>{{resource.ProgramName}}</b><br><br> \n          {{resource.Address}}<br>\n          {{resource.LocationCity}}, {{resource.LocationState}} {{resource.Zip}}\n        </p>\n    </ion-label>\n  </ion-col>\n  \n      <!-- <ion-item lines=\"none\">\n          <ion-checkbox checked=\"false\" [(ngModel)]=\"resource.checked\" (ionChange)=\"updateSelected($event, resource)\">\n          </ion-checkbox>\n        <ion-label style=\"height:auto; display:flex; vertical-align: 50%;\" class=\"ion-text-wrap\" [routerLink]=\"['/details', resource.key]\">\n            <p class=\"ion-text-wrap\"><b>{{resource.ProgramName}}</b><br><br> \n              {{resource.Address}}<br>\n              {{resource.LocationCity}}, {{resource.LocationState}} {{resource.Zip}}\n            </p>\n        </ion-label>\n    </ion-item> -->\n    \n    </ion-row>\n  </ion-grid>\n  </ion-list>\n  </ion-list>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"presentActionSheet()\">\n      <ion-icon name=\"share\"></ion-icon>\n      <ion-label>{{selectItems}}</ion-label>\n    </ion-fab-button>\n  </ion-fab>\n  \n    <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\" >\n      <ion-fab-button (click)=\"scrollToTop()\" >\n        <ion-icon name=\"chevron-up\"></ion-icon>\n        <!-- <ion-label>Scroll to Top</ion-label> -->\n      </ion-fab-button>\n  </ion-fab>\n  \n  </ion-content>\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/rxjs-compat/_esm2015/add/operator/filter.js":
  /*!******************************************************************!*\
    !*** ./node_modules/rxjs-compat/_esm2015/add/operator/filter.js ***!
    \******************************************************************/

  /*! no exports provided */

  /***/
  function node_modulesRxjsCompat_esm2015AddOperatorFilterJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _operator_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../operator/filter */
    "./node_modules/rxjs-compat/_esm2015/operator/filter.js");

    rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.filter = _operator_filter__WEBPACK_IMPORTED_MODULE_1__["filter"]; //# sourceMappingURL=filter.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs-compat/_esm2015/operator/filter.js":
  /*!**************************************************************!*\
    !*** ./node_modules/rxjs-compat/_esm2015/operator/filter.js ***!
    \**************************************************************/

  /*! exports provided: filter */

  /***/
  function node_modulesRxjsCompat_esm2015OperatorFilterJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "filter", function () {
      return filter;
    });
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    function filter(predicate, thisArg) {
      return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(predicate, thisArg)(this);
    } //# sourceMappingURL=filter.js.map

    /***/

  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
      }])],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Removes header drop shadow */\nion-header {\n  z-index: 0;\n}\n/* Styles checkbox*/\nion-checkbox {\n  --background: transparent !important;\n  --background-checked: transparent !important;\n  --border-color: rgba(255,255,255,0.5) !important;\n  --border-color-checked: #01ff80 !important;\n  --checkmark-color: #01ff80 !important;\n  --border-radius: 150px;\n  width: calc(30px + 4vw);\n  height: auto;\n  margin-right: 50px;\n}\nion-item {\n  --border: transparent !important;\n}\n/* Styles top toolbar */\nion-toolbar {\n  color: white;\n  --background: #3064ab;\n  box-shadow: none;\n}\n/* Styles background color of every item on page content*/\nion-content {\n  --ion-background-color: linear-gradient(180deg, #3064ab 0%, #0c499c 50%, #03216e 100%) !important;\n}\n/* Styles searcbar*/\n.sc-ion-searchbar-md-h {\n  --clear-button-color: initial;\n  --cancel-button-color: var(--ion-color-step-900,#fff);\n  --color: var(--ion-color-step-850,#fff);\n  --icon-color: var(--ion-color-step-600,#fff);\n  --background: transparent !important;\n}\n/* Styles 2 dropdowns*/\nion-item {\n  --background: transparent !important;\n  --color: #fff !important;\n  --border-color: var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(255,255,255,0.13))));\n}\n/* Styles 2 dropdowns bacground color*/\n.list-md {\n  background: transparent !important;\n}\n/* Styles each resources font colors*/\np {\n  text-align: left;\n  color: #fff;\n}\nb {\n  color: #fff;\n  font-size: 12pt;\n}\n/* Styles each resources background color*/\nion-list {\n  --color: var(--ion-color-step-850,#fff);\n  --background: transparent !important;\n}\n/* Styles share button*/\nion-fab-button {\n  --color: var(--ion-color-step-850,#fff);\n  --background: radial-gradient(#00cd67 20%, #01ff80 100%) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWNrcmljaGFyZC9OQU1JL21vYmlsZS9iYXNlR0lUL2Jhc2Uvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFFLCtCQUFBO0FBQ0E7RUFDRSxVQUFBO0FDQ0o7QURDRSxtQkFBQTtBQUNBO0VBQ0Usb0NBQUE7RUFDQSw0Q0FBQTtFQUNBLGdEQUFBO0VBQ0EsMENBQUE7RUFDQSxxQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNFSjtBREFBO0VBQ0UsZ0NBQUE7QUNHRjtBRERBLHVCQUFBO0FBQ0E7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0lBO0FEREEseURBQUE7QUFDQTtFQUNBLGlHQUFBO0FDSUE7QURGQSxtQkFBQTtBQUNBO0VBQ0UsNkJBQUE7RUFDQSxxREFBQTtFQUNBLHVDQUFBO0VBQ0EsNENBQUE7RUFDQSxvQ0FBQTtBQ0tGO0FESEEsc0JBQUE7QUFDQTtFQUNBLG9DQUFBO0VBQ0Esd0JBQUE7RUFDQSxxSEFBQTtBQ01BO0FESkEsc0NBQUE7QUFDQTtFQUNBLGtDQUFBO0FDT0E7QURMQSxxQ0FBQTtBQUNBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDUUE7QUROQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDU0E7QURQQSwwQ0FBQTtBQUNBO0VBQ0EsdUNBQUE7RUFDQSxvQ0FBQTtBQ1VBO0FEUkEsdUJBQUE7QUFDQTtFQUNBLHVDQUFBO0VBQ0EsbUVBQUE7QUNXQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIC8qIFJlbW92ZXMgaGVhZGVyIGRyb3Agc2hhZG93ICovXG4gIGlvbi1oZWFkZXIge1xuICAgIHotaW5kZXg6IDA7XG4gIH1cbiAgLyogU3R5bGVzIGNoZWNrYm94Ki9cbiAgaW9uLWNoZWNrYm94IHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KSAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6ICMwMWZmODAgIWltcG9ydGFudDtcdFxuICAgIC0tY2hlY2ttYXJrLWNvbG9yOiAjMDFmZjgwICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNTBweDtcbiAgICB3aWR0aDogY2FsYygzMHB4ICsgNHZ3KTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xufVxuaW9uLWl0ZW0ge1xuICAtLWJvcmRlcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbi8qIFN0eWxlcyB0b3AgdG9vbGJhciAqL1xuaW9uLXRvb2xiYXIge1xuY29sb3I6IHdoaXRlO1xuLS1iYWNrZ3JvdW5kOiAjMzA2NGFiO1xuYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLyogU3R5bGVzIGJhY2tncm91bmQgY29sb3Igb2YgZXZlcnkgaXRlbSBvbiBwYWdlIGNvbnRlbnQqL1xuaW9uLWNvbnRlbnR7XG4tLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMzA2NGFiIDAlLCAjMGM0OTljIDUwJSwgIzAzMjE2ZSAxMDAlKSAhaW1wb3J0YW50O1xufVxuLyogU3R5bGVzIHNlYXJjYmFyKi9cbi5zYy1pb24tc2VhcmNoYmFyLW1kLWgge1xuICAtLWNsZWFyLWJ1dHRvbi1jb2xvcjogaW5pdGlhbDtcbiAgLS1jYW5jZWwtYnV0dG9uLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC05MDAsI2ZmZik7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTg1MCwjZmZmKTtcbiAgLS1pY29uLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsI2ZmZik7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbi8qIFN0eWxlcyAyIGRyb3Bkb3ducyovXG5pb24taXRlbSB7XG4tLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4tLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4tLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWl0ZW0tYm9yZGVyLWNvbG9yLHZhcigtLWlvbi1ib3JkZXItY29sb3IsdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLHJnYmEoMjU1LDI1NSwyNTUsMC4xMykpKSk7XG59XG4vKiBTdHlsZXMgMiBkcm9wZG93bnMgYmFjZ3JvdW5kIGNvbG9yKi9cbi5saXN0LW1kIHtcbmJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG4vKiBTdHlsZXMgZWFjaCByZXNvdXJjZXMgZm9udCBjb2xvcnMqL1xucCB7XG50ZXh0LWFsaWduOiBsZWZ0O1xuY29sb3I6ICNmZmY7XG59XG5iIHtcbmNvbG9yOiAjZmZmO1xuZm9udC1zaXplOiAxMnB0O1xufVxuLyogU3R5bGVzIGVhY2ggcmVzb3VyY2VzIGJhY2tncm91bmQgY29sb3IqL1xuaW9uLWxpc3Qge1xuLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtODUwLCNmZmYpO1xuLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuLyogU3R5bGVzIHNoYXJlIGJ1dHRvbiovXG5pb24tZmFiLWJ1dHRvbiB7XG4tLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC04NTAsI2ZmZik7XG4tLWJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgjMDBjZDY3IDIwJSwgIzAxZmY4MCAxMDAlKSAhaW1wb3J0YW50O1xufVxuXG4iLCIvKiBSZW1vdmVzIGhlYWRlciBkcm9wIHNoYWRvdyAqL1xuaW9uLWhlYWRlciB7XG4gIHotaW5kZXg6IDA7XG59XG5cbi8qIFN0eWxlcyBjaGVja2JveCovXG5pb24tY2hlY2tib3gge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjUpICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6ICMwMWZmODAgIWltcG9ydGFudDtcbiAgLS1jaGVja21hcmstY29sb3I6ICMwMWZmODAgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxNTBweDtcbiAgd2lkdGg6IGNhbGMoMzBweCArIDR2dyk7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xufVxuXG5pb24taXRlbSB7XG4gIC0tYm9yZGVyOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4vKiBTdHlsZXMgdG9wIHRvb2xiYXIgKi9cbmlvbi10b29sYmFyIHtcbiAgY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6ICMzMDY0YWI7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi8qIFN0eWxlcyBiYWNrZ3JvdW5kIGNvbG9yIG9mIGV2ZXJ5IGl0ZW0gb24gcGFnZSBjb250ZW50Ki9cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzMwNjRhYiAwJSwgIzBjNDk5YyA1MCUsICMwMzIxNmUgMTAwJSkgIWltcG9ydGFudDtcbn1cblxuLyogU3R5bGVzIHNlYXJjYmFyKi9cbi5zYy1pb24tc2VhcmNoYmFyLW1kLWgge1xuICAtLWNsZWFyLWJ1dHRvbi1jb2xvcjogaW5pdGlhbDtcbiAgLS1jYW5jZWwtYnV0dG9uLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC05MDAsI2ZmZik7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTg1MCwjZmZmKTtcbiAgLS1pY29uLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsI2ZmZik7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLyogU3R5bGVzIDIgZHJvcGRvd25zKi9cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24taXRlbS1ib3JkZXItY29sb3IsdmFyKC0taW9uLWJvcmRlci1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAscmdiYSgyNTUsMjU1LDI1NSwwLjEzKSkpKTtcbn1cblxuLyogU3R5bGVzIDIgZHJvcGRvd25zIGJhY2dyb3VuZCBjb2xvciovXG4ubGlzdC1tZCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi8qIFN0eWxlcyBlYWNoIHJlc291cmNlcyBmb250IGNvbG9ycyovXG5wIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbmIge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxMnB0O1xufVxuXG4vKiBTdHlsZXMgZWFjaCByZXNvdXJjZXMgYmFja2dyb3VuZCBjb2xvciovXG5pb24tbGlzdCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTg1MCwjZmZmKTtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4vKiBTdHlsZXMgc2hhcmUgYnV0dG9uKi9cbmlvbi1mYWItYnV0dG9uIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtODUwLCNmZmYpO1xuICAtLWJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgjMDBjZDY3IDIwJSwgIzAxZmY4MCAxMDAlKSAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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


    var _services_resource_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/resource-list.service */
    "./src/app/services/resource-list.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/add/operator/filter */
    "./node_modules/rxjs-compat/_esm2015/add/operator/filter.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _share_modal_share_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../share-modal/share-modal.page */
    "./src/app/share-modal/share-modal.page.ts");
    /* harmony import */


    var _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/firebase-analytics/ngx */
    "./node_modules/@ionic-native/firebase-analytics/ngx/index.js");

    var HomePage =
    /*#__PURE__*/
    function () {
      function HomePage(resourceListService, modalCtrl, zone, toastController, router, modalController, actionSheetController, firebaseAnalytics) {
        var _this = this;

        _classCallCheck(this, HomePage);

        this.resourceListService = resourceListService;
        this.modalCtrl = modalCtrl;
        this.zone = zone;
        this.toastController = toastController;
        this.router = router;
        this.modalController = modalController;
        this.actionSheetController = actionSheetController;
        this.firebaseAnalytics = firebaseAnalytics;
        this.isChecked = false;
        this.searchedCity = [];
        this.searchedCategory = [];
        this.searchTerm = '';
        this.categories = '';
        this.cities = [];
        this.searchResults = [];
        this.selectItems = 0;
        this.shareAllString = '';
        this.shareMulti = '';
        this.shareOneResourceString = '';
        this.modalMessage = '';
        this.isShown = false;
        this.selectedResources = [];
        this.search_analytics = '';

        this.router.routeReuseStrategy.shouldReuseRoute = function () {
          return false;
        };

        this.mySubscription = this.router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"]) {
            // Trick the Router into believing it's last link wasn't previously loaded
            _this.router.navigated = false;
          }
        });
        this.cityList = this.resourceListService.getCityList();
        this.categoryList = this.resourceListService.getCategoryList();
        this.searchThisList = this.resourceListService.getResourceList();
        console.log(this.cityList);
        console.log(this.categoryList);
        console.log(this.searchThisList);
        this.selectItems = 0;
        this.selectedResources = [];
        this.shareSelectedString = '';
        this.searchResults = this.searchThisList;
        this.searchResults.forEach(function (result) {
          _this.numberOfSearchResults = result.length;
          console.log(result.checked);
          result.checked = false;
        });
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.mySubscription) {
            this.mySubscription.unsubscribe();
          }
        }
      }, {
        key: "scrollToTop",
        value: function scrollToTop() {
          this.content.scrollToTop();
          this.isShown = false;
        }
      }, {
        key: "scrollStop",
        value: function scrollStop(event) {
          var _this2 = this;

          this.zone.run(function () {
            _this2.isShown = true;
          });
        }
      }, {
        key: "scrollHandler",
        value: function scrollHandler(event) {
          var _this3 = this;

          console.log("ScrollEvent: ".concat(event));
          this.zone.run(function () {
            _this3.isShown = true;
          });
        }
      }, {
        key: "showToast",
        value: function showToast(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastController.create({
                      message: msg,
                      duration: 2000
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "openModal",
        value: function openModal(data) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this4 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalController.create({
                      component: _share_modal_share_modal_page__WEBPACK_IMPORTED_MODULE_7__["ShareModalPage"],
                      componentProps: {
                        "message": data
                      }
                    });

                  case 2:
                    modal = _context2.sent;
                    modal.onDidDismiss().then(function (dataReturned) {
                      if (dataReturned !== null) {
                        _this4.dataReturned = dataReturned.data;
                      }
                    });
                    _context2.next = 6;
                    return modal.present();

                  case 6:
                    return _context2.abrupt("return", _context2.sent);

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        } //Action Sheet Controller - when fab button is pressed 

      }, {
        key: "presentActionSheet",
        value: function presentActionSheet() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this5 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.actionSheetController.create({
                      header: 'Share',
                      buttons: [{
                        text: 'Clear Selected',
                        role: 'destructive',
                        icon: 'trash',
                        handler: function handler() {
                          _this5.router.navigate(['/home']);

                          _this5.clearSelected();

                          console.log('Cleared selected resources');
                        }
                      }, {
                        text: 'Share ' + this.selectItems + ' Selected',
                        icon: 'share',
                        handler: function handler() {
                          _this5.shareSelected();

                          console.log('Share clicked');
                        }
                      }, {
                        text: 'Share All (' + this.numberOfSearchResults + ') Search Results',
                        icon: 'share',
                        handler: function handler() {
                          _this5.shareAllResults();

                          console.log('Share All clicked');
                        }
                      }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: function handler() {
                          console.log('Cancel clicked');
                        }
                      }]
                    });

                  case 2:
                    actionSheet = _context3.sent;
                    _context3.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "goToDetailsPage",
        value: function goToDetailsPage(resource, event) {
          this.router.navigate(['/details'], resource.key);
        }
      }, {
        key: "clearSelected",
        value: function clearSelected() {
          window.location.reload();
          this.selectedResources = [];
          this.selectItems = 0;
        }
      }, {
        key: "search",
        value: function search() {
          var _this6 = this;

          // Reset search_term to log to firebase analytics
          this.search_analytics = '';
          console.log(this.categories);
          console.log(this.cities);
          var val = this.searchTerm;

          if (val.trim() == '') {
            if (this.categories.length > 0 && this.cities.length > 0) {
              this.search_analytics = this.categories.toString() + ',' + this.cities.toString() + ',' + this.searchTerm;
              console.log(this.search_analytics); // Log to firebase analytics

              this.firebaseAnalytics.logEvent('search', {
                search_term: this.search_analytics
              });
              this.searchResults = this.searchThisList.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
                return data.filter(function (resource) {
                  for (var j = 0; j < _this6.cities.length; j++) {
                    return resource.Category.split(", ").filter(function (e) {
                      return this.indexOf(e) > -1;
                    }, _this6.categories).length == _this6.categories.length && resource.LocationCity.toString().includes(_this6.cities[j]);
                  }
                });
              }));
            } // Search with mulitple categories


            if (this.categories.length > 0 && this.cities.length == 0) {
              this.search_analytics = this.categories.toString() + ',' + this.cities.toString() + ',' + this.searchTerm;
              console.log(this.search_analytics); // Log to firebase analytics

              this.firebaseAnalytics.logEvent('search', {
                search_term: this.search_analytics
              });
              this.searchResults = this.searchThisList.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
                return data.filter(function (resource) {
                  return resource.Category.split(", ").filter(function (e) {
                    return this.indexOf(e) > -1;
                  }, _this6.categories).length == _this6.categories.length;
                });
              }));
            }

            if (this.cities.length > 0 && this.categories.length == 0) {
              this.search_analytics = this.categories.toString() + ',' + this.cities.toString() + ',' + this.searchTerm;
              console.log(this.search_analytics); // Log to firebase analytics

              this.firebaseAnalytics.logEvent('search', {
                search_term: this.search_analytics
              });
              this.searchResults = this.searchThisList.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
                return data.filter(function (resource) {
                  for (var i = 0; i < _this6.cities.length; i++) {
                    if (resource.LocationCity.toString().includes(_this6.cities[i])) {
                      console.log(resource.LocationCity.toString().includes(_this6.cities[i]));

                      _this6.searchedCity.push(resource);

                      console.log(_this6.searchedCity);
                      return resource.LocationCity.toString().includes(_this6.cities[i]);
                    }
                  }
                });
              }));
            }

            if (this.cities.length == 0 && this.categories.length == 0) {
              this.searchResults = this.searchThisList;
            }
          } //searchTerm search


          if (val.trim() !== '') {
            this.search_analytics = this.categories.toString() + ',' + this.cities.toString() + ',' + this.searchTerm;
            console.log(this.search_analytics); // Log to firebase analytics

            this.firebaseAnalytics.logEvent('search', {
              search_term: this.search_analytics
            });

            if (this.categories.length > 0 && this.cities.length > 0) {
              console.log(Array.isArray(this.categories));
              console.log(Array.isArray(this.cities));
              this.searchResults = this.searchThisList.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
                return data.filter(function (resource) {
                  for (var j = 0; j < _this6.cities.length; j++) {
                    return resource.Category.split(", ").filter(function (e) {
                      return this.indexOf(e) > -1;
                    }, _this6.categories).length == _this6.categories.length && resource.LocationCity.toString().includes(_this6.cities[j]) && (resource.ProgramName.toString().toLowerCase().indexOf(val.toLowerCase()) > -1 || resource.LocationCity.toString().toLowerCase().indexOf(val.toLowerCase()) > -1 || resource.LocationState.toString().toLowerCase().indexOf(val.toLowerCase()) > -1 || resource.TelephoneNumber1.toString().toLowerCase().indexOf(val.toLowerCase()) > -1 || resource.Zip.toString().toLowerCase().indexOf(val.toLowerCase()) > -1 || resource.Description.toString().toLowerCase().indexOf(val.toLowerCase()) > -1 || resource.Category.toString().toLowerCase().indexOf(val.toLowerCase()) > -1);
                  }
                });
              }));
            }

            if (this.categories.length > 0 && this.cities.length == 0) {
              console.log(Array.isArray(this.categories));
              this.searchResults = this.searchThisList.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
                return data.filter(function (resource) {
                  return resource.Category.split(", ").filter(function (e) {
                    return this.indexOf(e) > -1;
                  }, _this6.categories).length == _this6.categories.length && (resource.ProgramName.toString().toLowerCase().indexOf(val.toLowerCase()) > -1 || resource.LocationCity.toString().toLowerCase().indexOf(val.toLowerCase()) > -1 || resource.LocationState.toString().toLowerCase().indexOf(val.toLowerCase()) > -1 || resource.TelephoneNumber1.toString().toLowerCase().indexOf(val.toLowerCase()) > -1 || resource.Zip.toString().toLowerCase().indexOf(val.toLowerCase()) > -1 || resource.Description.toString().toLowerCase().indexOf(val.toLowerCase()) > -1 || resource.Category.toString().toLowerCase().indexOf(val.toLowerCase()) > -1);
                });
              }));
            }

            if (this.cities.length > 0 && this.categories.length == 0) {
              this.searchResults = this.searchThisList.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
                return data.filter(function (resource) {
                  for (var i = 0; i < _this6.cities.length; i++) {
                    if (resource.LocationCity.toString().includes(_this6.cities[i]) && (resource.ProgramName.toString().toLowerCase().indexOf(val.toLowerCase()) > -1 || resource.LocationCity.toString().toLowerCase().indexOf(val.toLowerCase()) > -1 || resource.LocationState.toString().toLowerCase().indexOf(val.toLowerCase()) > -1 || resource.TelephoneNumber1.toString().toLowerCase().indexOf(val.toLowerCase()) > -1 || resource.Zip.toString().toLowerCase().indexOf(val.toLowerCase()) > -1 || resource.Description.toString().toLowerCase().indexOf(val.toLowerCase()) > -1 || resource.Category.toString().toLowerCase().indexOf(val.toLowerCase()) > -1)) {
                      console.log(resource.LocationCity.toString().includes(_this6.cities[i]));

                      _this6.searchedCity.push(resource);

                      console.log(_this6.searchedCity);
                      return resource.LocationCity.toString().includes(_this6.cities[i]) && (resource.ProgramName.toString().toLowerCase().indexOf(val.toLowerCase()) > -1 || resource.LocationCity.toString().toLowerCase().indexOf(val.toLowerCase()) > -1 || resource.LocationState.toString().toLowerCase().indexOf(val.toLowerCase()) > -1 || resource.TelephoneNumber1.toString().toLowerCase().indexOf(val.toLowerCase()) > -1 || resource.Zip.toString().toLowerCase().indexOf(val.toLowerCase()) > -1 || resource.Description.toString().toLowerCase().indexOf(val.toLowerCase()) > -1 || resource.Category.toString().toLowerCase().indexOf(val.toLowerCase()) > -1);
                    }
                  }
                });
              }));
            }

            if (this.cities.length == 0 && this.categories.length == 0) {
              this.searchResults = this.searchThisList.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resource) {
                return resource.filter(function (resource) {
                  return resource.ProgramName.toString().toLowerCase().indexOf(val.toLowerCase()) > -1 || resource.LocationCity.toString().toLowerCase().indexOf(val.toLowerCase()) > -1 || resource.LocationState.toString().toLowerCase().indexOf(val.toLowerCase()) > -1 || resource.TelephoneNumber1.toString().toLowerCase().indexOf(val.toLowerCase()) > -1 || resource.Zip.toString().toLowerCase().indexOf(val.toLowerCase()) > -1 || resource.Description.toString().toLowerCase().indexOf(val.toLowerCase()) > -1 || resource.Category.toString().toLowerCase().indexOf(val.toLowerCase()) > -1;
                });
              }));
            }
          }

          this.searchResults.forEach(function (result) {
            _this6.numberOfSearchResults = result.length;
          });
        }
      }, {
        key: "updateSelected",
        value: function updateSelected(event, resource) {
          console.log(event.detail.checked);
          console.log(resource.checked);
          console.log(this.selectedResources);

          if (event.detail.checked) {
            console.log("not found in selected, adding");
            this.selectItems = this.selectItems + 1;
            this.selectedResources.push(resource);
          }

          if (!event.detail.checked) {
            var index = this.selectedResources.indexOf(resource);
            this.selectItems = this.selectItems - 1;
            this.selectedResources.splice(index, 1);
          }

          console.log(this.selectedResources);
        }
      }, {
        key: "shareResource",
        value: function shareResource(event, resource) {
          var _this7 = this;

          var name = resource.ProgramName;
          var phone = resource.TelephoneNumber1;
          var website = resource.Website;
          var email = resource.EmailAddress;
          var sms = name + '\n' + phone + '\n' + website + '\n' + email;
          this.shareOneResourceString = sms + '\n' + "This information is provided by NAMI St. Tammany.  For more behavioral health information call us at 985-626-6528, or www.namisttammany.org or www.facebook.com/namisttammany" + '\n';
          var data = {
            message: this.shareOneResourceString
          };
          this.openModal(data).then(function () {
            _this7.router.navigate(['/home']);
          });
        }
      }, {
        key: "shareSelected",
        value: function shareSelected() {
          var _this8 = this;

          if (this.selectItems == 0) {
            alert("No resoureces selected - please choose at least 1");
            return;
          }

          this.shareSelectedString = '';

          for (var i = 0; i < this.selectedResources.length; i++) {
            var name = this.selectedResources[i].ProgramName;
            var phone = this.selectedResources[i].TelephoneNumber1;
            var website = this.selectedResources[i].Website;
            var email = this.selectedResources[i].EmailAddress;
            this.shareSelectedString = this.shareSelectedString + '\n' + name + '\n' + phone + '\n' + website + '\n' + email + '\n';
            console.log(this.shareSelectedString);
          }

          console.log('exited for loop');
          this.shareSelectedString = this.shareSelectedString + '\n' + "This information is provided by NAMI St. Tammany.  For more behavioral health information call us at 985-626-6528, or www.namisttammany.org or www.facebook.com/namisttammany" + '\n';
          var data = {
            message: this.shareSelectedString
          };
          this.openModal(data).then(function () {
            _this8.firebaseAnalytics.logEvent('share', {
              resources_shared: _this8.shareSelectedString
            });

            _this8.router.navigate(['/home']);
          });
        }
      }, {
        key: "shareAllResults",
        value: function shareAllResults() {
          var _this9 = this;

          // ************************************************************************************************************************************ //
          this.searchResults.forEach(function (result) {
            console.log(result.length);

            for (var i = 0; i < result.length; i++) {
              var name = result[i].ProgramName;
              var phone = result[i].TelephoneNumber1;
              var website = result[i].Website;
              var email = result[i].EmailAddress;
              _this9.shareAllString = _this9.shareAllString + '\n' + name + '\n' + phone + '\n' + website + '\n' + email + '\n';
            }

            console.log('exited for loop');
            _this9.shareAllString = _this9.shareAllString + '\n' + "This information is provided by NAMI St. Tammany.  For more behavioral health information call us at 985-626-6528, or www.namisttammany.org or www.facebook.com/namisttammany" + '\n';
            console.log(_this9.shareAllString);
            var data = {
              message: _this9.shareAllString
            };

            _this9.openModal(data).then(function () {
              _this9.firebaseAnalytics.logEvent('share', {
                resources_shared: _this9.shareAllString
              });

              _this9.router.navigate(['/home']);
            });
          }); // ************************************************************************************************************************************ //
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _services_resource_list_service__WEBPACK_IMPORTED_MODULE_3__["ResourceListService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
      }, {
        type: _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_8__["FirebaseAnalytics"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])], HomePage.prototype, "content", void 0);
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_resource_list_service__WEBPACK_IMPORTED_MODULE_3__["ResourceListService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_8__["FirebaseAnalytics"]])], HomePage);
    /***/
  },

  /***/
  "./src/app/services/network.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/network.service.ts ***!
    \*********************************************/

  /*! exports provided: ConnectionStatus, NetworkService */

  /***/
  function srcAppServicesNetworkServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectionStatus", function () {
      return ConnectionStatus;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NetworkService", function () {
      return NetworkService;
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


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/ngx/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var ConnectionStatus;

    (function (ConnectionStatus) {
      ConnectionStatus[ConnectionStatus["Online"] = 0] = "Online";
      ConnectionStatus[ConnectionStatus["Offline"] = 1] = "Offline";
    })(ConnectionStatus || (ConnectionStatus = {}));

    var NetworkService =
    /*#__PURE__*/
    function () {
      function NetworkService(network, toastController, plt) {
        var _this10 = this;

        _classCallCheck(this, NetworkService);

        this.network = network;
        this.toastController = toastController;
        this.plt = plt;
        this.status = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](ConnectionStatus.Offline);
        this.plt.ready().then(function () {
          _this10.initializeNetworkEvents();

          var status = _this10.network.type !== 'none' ? ConnectionStatus.Online : ConnectionStatus.Offline;

          _this10.status.next(status);
        });
      }

      _createClass(NetworkService, [{
        key: "initializeNetworkEvents",
        value: function initializeNetworkEvents() {
          var _this11 = this;

          this.network.onDisconnect().subscribe(function () {
            if (_this11.status.getValue() === ConnectionStatus.Online) {
              console.log('WE ARE OFFLINE');

              _this11.updateNetworkStatus(ConnectionStatus.Offline);
            }
          });
          this.network.onConnect().subscribe(function () {
            if (_this11.status.getValue() === ConnectionStatus.Offline) {
              console.log('WE ARE ONLINE');

              _this11.updateNetworkStatus(ConnectionStatus.Online);
            }
          });
        }
      }, {
        key: "updateNetworkStatus",
        value: function updateNetworkStatus(status) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var connection, toast;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.status.next(status);
                    connection = status == ConnectionStatus.Offline ? 'Offline' : 'Online';
                    toast = this.toastController.create({
                      message: "You are now ".concat(connection),
                      duration: 3000,
                      position: 'bottom'
                    });
                    toast.then(function (toast) {
                      return toast.present();
                    });

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "onNetworkChange",
        value: function onNetworkChange() {
          return this.status.asObservable();
        }
      }, {
        key: "getCurrentNetworkStatus",
        value: function getCurrentNetworkStatus() {
          return this.status.getValue();
        }
      }]);

      return NetworkService;
    }();

    NetworkService.ctorParameters = function () {
      return [{
        type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__["Network"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }];
    };

    NetworkService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__["Network"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])], NetworkService);
    /***/
  },

  /***/
  "./src/app/services/resource-list.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/resource-list.service.ts ***!
    \***************************************************/

  /*! exports provided: ResourceListService */

  /***/
  function srcAppServicesResourceListServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourceListService", function () {
      return ResourceListService;
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


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _network_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./network.service */
    "./src/app/services/network.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var API_STORAGE_KEY = 'specialkey';

    var ResourceListService =
    /*#__PURE__*/
    function () {
      function ResourceListService(db, sdb, networkService) {
        _classCallCheck(this, ResourceListService);

        this.db = db;
        this.sdb = sdb;
        this.networkService = networkService;
      }

      _createClass(ResourceListService, [{
        key: "getResourceList",
        value: function getResourceList() {
          return this.db.list('resource', function (ref) {
            return ref.orderByChild('ProgramName');
          }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (changes) {
            console.log(changes);
            return changes.map(function (c) {
              return Object.assign({
                key: c.payload.key
              }, c.payload.val());
            });
          }));
        }
      }, {
        key: "getCityList",
        value: function getCityList() {
          return this.db.list('cities', function (ref) {
            return ref.orderByChild('city');
          }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (changes) {
            console.log(changes);
            return changes.map(function (c) {
              return Object.assign({
                key: c.payload.key
              }, c.payload.val());
            });
          }));
        }
      }, {
        key: "getCategoryList",
        value: function getCategoryList() {
          return this.db.list('categories', function (ref) {
            return ref.orderByChild('category');
          }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (changes) {
            console.log(changes);
            return changes.map(function (c) {
              return Object.assign({
                key: c.payload.key
              }, c.payload.val());
            });
          }));
        } // Save result of API requests

      }, {
        key: "setLocalData",
        value: function setLocalData(key, data) {
          this.sdb.set("".concat(API_STORAGE_KEY, "-").concat(key), data);
        } // Get cached API result

      }, {
        key: "getLocalData",
        value: function getLocalData(key) {
          return this.sdb.get("".concat(API_STORAGE_KEY, "-").concat(key));
        }
      }]);

      return ResourceListService;
    }();

    ResourceListService.ctorParameters = function () {
      return [{
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }, {
        type: _network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"]
      }];
    };

    ResourceListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"]])], ResourceListService);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map