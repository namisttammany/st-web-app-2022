(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <img alt=\"logo\" slot=\"end\" height=\"40px\" src=\"assets/img/Logo_WhiteStacked_1024x1024.png\">\n      <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    <ion-title>\n      {{pagetitle | translate}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" id=\"home\" (ionScrollEnd)=\"scrollStop($event)\" (ionScroll)=\"scrollHandler($event)\">\n\n  <ion-searchbar style=\"box-shadow: none !important;\" [(ngModel)]=\"searchTerm\" (search)=\"search($event)\"></ion-searchbar>\n  \n  <div class=\"dropdowns\">\n  <ion-list class=\"bshadow\">\n  <ion-item >\n    <ion-label class=\"box-categories\">Categories</ion-label>\n    <ion-select  [(ngModel)]=\"categories\" multiple=\"true\" cancelText=\"Cancel\" okText=\"Select\" (ionChange)=\"search();\">\n      <ion-select-option *ngFor=\"let category of categoryList | async\" value={{category.category}}>{{category.category}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n  </ion-list>\n  <ion-list class=\"bshadow\">\n  <ion-item>\n    <ion-label class=\"box-cities\">Cities</ion-label>\n    <ion-select  [(ngModel)]=\"cities\" multiple=\"true\" cancelText=\"Cancel\" okText=\"Select\" (ionChange)=\"search();\">\n      <ion-select-option *ngFor=\"let city of cityList | async\" value={{city.city}}>{{city.city}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n  </ion-list>\n  </div>\n  <ion-list class=\"ion-padding\">\n  <ion-list *ngFor=\"let resource of searchResults | async\" >\n      <ion-grid>\n<ion-row>\n\n  <ion-col size=\"2\">\n    <div class=\"center\"><ion-checkbox style=\"width: 100%; height: auto;\" checked=\"false\" [(ngModel)]=\"resource.checked\" (ionChange)=\"updateSelected($event, resource)\">\n    </ion-checkbox></div>\n  </ion-col>\n  <ion-col size=\"1\">\n\n  </ion-col>\n  <ion-col size=\"9\">\n    <ion-label style=\"height:auto; display:flex; vertical-align: 50%;\" class=\"ion-text-wrap\" [routerLink]=\"['/details', resource.key]\">\n        <p class=\"ion-text-wrap\"><b>{{resource.ProgramName}}</b><br><br> \n          {{resource.Address}}<br>\n          {{resource.LocationCity}}, {{resource.LocationState}} {{resource.Zip}}\n        </p>\n    </ion-label>\n  </ion-col>\n  \n      <!-- <ion-item lines=\"none\">\n          <ion-checkbox checked=\"false\" [(ngModel)]=\"resource.checked\" (ionChange)=\"updateSelected($event, resource)\">\n          </ion-checkbox>\n        <ion-label style=\"height:auto; display:flex; vertical-align: 50%;\" class=\"ion-text-wrap\" [routerLink]=\"['/details', resource.key]\">\n            <p class=\"ion-text-wrap\"><b>{{resource.ProgramName}}</b><br><br> \n              {{resource.Address}}<br>\n              {{resource.LocationCity}}, {{resource.LocationState}} {{resource.Zip}}\n            </p>\n        </ion-label>\n    </ion-item> -->\n    \n    </ion-row>\n  </ion-grid>\n  </ion-list>\n  </ion-list>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"presentActionSheet()\" [translate] >\n      <ion-icon name=\"share\"></ion-icon>\n      <ion-label>{{selectItems}}</ion-label>\n    </ion-fab-button>\n  </ion-fab>\n  \n    <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\" >\n      <ion-fab-button (click)=\"scrollToTop()\" >\n        <ion-icon name=\"chevron-up\"></ion-icon>\n        <!-- <ion-label>Scroll to Top</ion-label> -->\n      </ion-fab-button>\n  </ion-fab>\n  \n  </ion-content>\n\n\n\n");

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm2015/add/operator/filter.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm2015/add/operator/filter.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _operator_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/filter */ "./node_modules/rxjs-compat/_esm2015/operator/filter.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.filter = _operator_filter__WEBPACK_IMPORTED_MODULE_1__["filter"];
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm2015/operator/filter.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm2015/operator/filter.js ***!
  \**************************************************************/
/*! exports provided: filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");

function filter(predicate, thisArg) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(predicate, thisArg)(this);
}
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Styles checkbox*/\nion-checkbox {\n  --background: transparent !important;\n  --background-checked: transparent !important;\n  --border-color: rgba(255,255,255,0.5) !important;\n  --border-color-checked: #01ff80 !important;\n  --checkmark-color: #01ff80 !important;\n  --border-radius: 150px;\n  width: calc(30px + 4vw);\n  height: auto;\n  margin-right: 50px;\n}\nion-item {\n  --border: transparent !important;\n}\n/* Styles top toolbar */\nion-toolbar {\n  color: white;\n  --background: #3064ab;\n  box-shadow: none;\n}\n/* Removes header drop shadow */\nion-header {\n  z-index: 0;\n}\n/* Styles background color of every item on page content*/\nion-content {\n  --ion-background-color: linear-gradient(180deg, #3064ab 0%, #0c499c 50%, #03216e 100%) !important;\n}\n/* Styles searcbar*/\n.sc-ion-searchbar-md-h {\n  --clear-button-color: initial;\n  --cancel-button-color: var(--ion-color-step-900,#fff);\n  --color: var(--ion-color-step-850,#fff);\n  --icon-color: var(--ion-color-step-600,#fff);\n  --background: transparent !important;\n}\n/* Styles 2 dropdowns*/\nion-item {\n  --background: transparent !important;\n  --color: #fff !important;\n  --border-color: var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(255,255,255,0.13))));\n}\n/* Styles 2 dropdowns bacground color*/\n.list-md {\n  background: transparent !important;\n}\n/* Styles each resources font colors*/\np {\n  text-align: left;\n  color: #fff;\n}\nb {\n  color: #fff;\n  font-size: 12pt;\n}\n/* Styles each resources background color*/\nion-list {\n  --color: var(--ion-color-step-850,#fff);\n  --background: transparent !important;\n}\n/* Styles share button*/\nion-fab-button {\n  --color: var(--ion-color-step-850,#fff);\n  --background: radial-gradient(#00cd67 20%, #01ff80 100%) !important;\n}\nion-label {\n  border: none !important;\n  outline: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWNrcmljaGFyZC9OQU1JL2Jhc2UtZ2xvYmFsL2FwcC1iYXNlLWdsb2JhbC9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0UsbUJBQUE7QUFDQTtFQUNFLG9DQUFBO0VBQ0EsNENBQUE7RUFDQSxnREFBQTtFQUNBLDBDQUFBO0VBQ0EscUNBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQUo7QURFQTtFQUNFLGdDQUFBO0FDQ0Y7QURDQSx1QkFBQTtBQUNBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNFQTtBRENBLCtCQUFBO0FBQ0E7RUFDRSxVQUFBO0FDRUY7QURDQSx5REFBQTtBQUNBO0VBQ0EsaUdBQUE7QUNFQTtBREFBLG1CQUFBO0FBQ0E7RUFDRSw2QkFBQTtFQUNBLHFEQUFBO0VBQ0EsdUNBQUE7RUFDQSw0Q0FBQTtFQUNBLG9DQUFBO0FDR0Y7QUREQSxzQkFBQTtBQUNBO0VBQ0Esb0NBQUE7RUFDQSx3QkFBQTtFQUNBLHFIQUFBO0FDSUE7QURGQSxzQ0FBQTtBQUNBO0VBQ0Esa0NBQUE7QUNLQTtBREhBLHFDQUFBO0FBQ0E7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNNQTtBREpBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNPQTtBRExBLDBDQUFBO0FBQ0E7RUFDQSx1Q0FBQTtFQUNBLG9DQUFBO0FDUUE7QUROQSx1QkFBQTtBQUNBO0VBQ0EsdUNBQUE7RUFDQSxtRUFBQTtBQ1NBO0FETkE7RUFDRSx1QkFBQTtFQUNBLHdCQUFBO0FDU0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIC8qIFN0eWxlcyBjaGVja2JveCovXG4gIGlvbi1jaGVja2JveCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSkgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiAjMDFmZjgwICFpbXBvcnRhbnQ7XHRcbiAgICAtLWNoZWNrbWFyay1jb2xvcjogIzAxZmY4MCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTUwcHg7XG4gICAgd2lkdGg6IGNhbGMoMzBweCArIDR2dyk7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogNTBweDtcbn1cbmlvbi1pdGVtIHtcbiAgLS1ib3JkZXI6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG4vKiBTdHlsZXMgdG9wIHRvb2xiYXIgKi9cbmlvbi10b29sYmFyIHtcbmNvbG9yOiB3aGl0ZTtcbi0tYmFja2dyb3VuZDogIzMwNjRhYjtcbmJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi8qIFJlbW92ZXMgaGVhZGVyIGRyb3Agc2hhZG93ICovXG5pb24taGVhZGVyIHtcbiAgei1pbmRleDogMDtcbn1cblxuLyogU3R5bGVzIGJhY2tncm91bmQgY29sb3Igb2YgZXZlcnkgaXRlbSBvbiBwYWdlIGNvbnRlbnQqL1xuaW9uLWNvbnRlbnR7XG4tLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMzA2NGFiIDAlLCAjMGM0OTljIDUwJSwgIzAzMjE2ZSAxMDAlKSAhaW1wb3J0YW50O1xufVxuLyogU3R5bGVzIHNlYXJjYmFyKi9cbi5zYy1pb24tc2VhcmNoYmFyLW1kLWgge1xuICAtLWNsZWFyLWJ1dHRvbi1jb2xvcjogaW5pdGlhbDtcbiAgLS1jYW5jZWwtYnV0dG9uLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC05MDAsI2ZmZik7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTg1MCwjZmZmKTtcbiAgLS1pY29uLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsI2ZmZik7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbi8qIFN0eWxlcyAyIGRyb3Bkb3ducyovXG5pb24taXRlbSB7XG4tLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4tLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4tLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWl0ZW0tYm9yZGVyLWNvbG9yLHZhcigtLWlvbi1ib3JkZXItY29sb3IsdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLHJnYmEoMjU1LDI1NSwyNTUsMC4xMykpKSk7XG59XG4vKiBTdHlsZXMgMiBkcm9wZG93bnMgYmFjZ3JvdW5kIGNvbG9yKi9cbi5saXN0LW1kIHtcbmJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG4vKiBTdHlsZXMgZWFjaCByZXNvdXJjZXMgZm9udCBjb2xvcnMqL1xucCB7XG50ZXh0LWFsaWduOiBsZWZ0O1xuY29sb3I6ICNmZmY7XG59XG5iIHtcbmNvbG9yOiAjZmZmO1xuZm9udC1zaXplOiAxMnB0O1xufVxuLyogU3R5bGVzIGVhY2ggcmVzb3VyY2VzIGJhY2tncm91bmQgY29sb3IqL1xuaW9uLWxpc3Qge1xuLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtODUwLCNmZmYpO1xuLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuLyogU3R5bGVzIHNoYXJlIGJ1dHRvbiovXG5pb24tZmFiLWJ1dHRvbiB7XG4tLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC04NTAsI2ZmZik7XG4tLWJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgjMDBjZDY3IDIwJSwgIzAxZmY4MCAxMDAlKSAhaW1wb3J0YW50O1xufVxuXG5pb24tbGFiZWwge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4iLCIvKiBTdHlsZXMgY2hlY2tib3gqL1xuaW9uLWNoZWNrYm94IHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KSAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiAjMDFmZjgwICFpbXBvcnRhbnQ7XG4gIC0tY2hlY2ttYXJrLWNvbG9yOiAjMDFmZjgwICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogMTUwcHg7XG4gIHdpZHRoOiBjYWxjKDMwcHggKyA0dncpO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJvcmRlcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLyogU3R5bGVzIHRvcCB0b29sYmFyICovXG5pb24tdG9vbGJhciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiAjMzA2NGFiO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4vKiBSZW1vdmVzIGhlYWRlciBkcm9wIHNoYWRvdyAqL1xuaW9uLWhlYWRlciB7XG4gIHotaW5kZXg6IDA7XG59XG5cbi8qIFN0eWxlcyBiYWNrZ3JvdW5kIGNvbG9yIG9mIGV2ZXJ5IGl0ZW0gb24gcGFnZSBjb250ZW50Ki9cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzMwNjRhYiAwJSwgIzBjNDk5YyA1MCUsICMwMzIxNmUgMTAwJSkgIWltcG9ydGFudDtcbn1cblxuLyogU3R5bGVzIHNlYXJjYmFyKi9cbi5zYy1pb24tc2VhcmNoYmFyLW1kLWgge1xuICAtLWNsZWFyLWJ1dHRvbi1jb2xvcjogaW5pdGlhbDtcbiAgLS1jYW5jZWwtYnV0dG9uLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC05MDAsI2ZmZik7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTg1MCwjZmZmKTtcbiAgLS1pY29uLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsI2ZmZik7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLyogU3R5bGVzIDIgZHJvcGRvd25zKi9cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24taXRlbS1ib3JkZXItY29sb3IsdmFyKC0taW9uLWJvcmRlci1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAscmdiYSgyNTUsMjU1LDI1NSwwLjEzKSkpKTtcbn1cblxuLyogU3R5bGVzIDIgZHJvcGRvd25zIGJhY2dyb3VuZCBjb2xvciovXG4ubGlzdC1tZCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi8qIFN0eWxlcyBlYWNoIHJlc291cmNlcyBmb250IGNvbG9ycyovXG5wIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbmIge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxMnB0O1xufVxuXG4vKiBTdHlsZXMgZWFjaCByZXNvdXJjZXMgYmFja2dyb3VuZCBjb2xvciovXG5pb24tbGlzdCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTg1MCwjZmZmKTtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4vKiBTdHlsZXMgc2hhcmUgYnV0dG9uKi9cbmlvbi1mYWItYnV0dG9uIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtODUwLCNmZmYpO1xuICAtLWJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgjMDBjZDY3IDIwJSwgIzAxZmY4MCAxMDAlKSAhaW1wb3J0YW50O1xufVxuXG5pb24tbGFiZWwge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_resource_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/resource-list.service */ "./src/app/services/resource-list.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm2015/add/operator/filter.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _share_modal_share_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../share-modal/share-modal.page */ "./src/app/share-modal/share-modal.page.ts");
/* harmony import */ var _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/firebase-analytics/ngx */ "./node_modules/@ionic-native/firebase-analytics/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");













let HomePage = class HomePage {
    constructor(resourceListService, modalCtrl, zone, toastController, router, modalController, actionSheetController, firebaseAnalytics, _translate) {
        // if (this._translate.getBrowserLang() !== undefined) {
        this.resourceListService = resourceListService;
        this.modalCtrl = modalCtrl;
        this.zone = zone;
        this.toastController = toastController;
        this.router = router;
        this.modalController = modalController;
        this.actionSheetController = actionSheetController;
        this.firebaseAnalytics = firebaseAnalytics;
        this._translate = _translate;
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
        //   this._translate.setDefaultLang(this._translate.getBrowserLang());
        //   console.log('browser language is', this._translate.getBrowserLang());
        // }
        // else {
        //   // Set your language here
        //   this._translate.setDefaultLang('en');
        // }
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this.mySubscription = this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"]) {
                // Trick the Router into believing it's last link wasn't previously loaded
                this.router.navigated = false;
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
        this.searchResults.forEach((result) => {
            this.numberOfSearchResults = result.length;
            console.log(result.checked);
            result.checked = false;
        });
        this.pagetitle = 'page.resources';
    }
    ngOnInit() {
        this._translate.get('sharemenu.clear').subscribe((res) => {
            console.log(res);
            this.acClear = res;
        });
        this._translate.get('sharemenu.cancel').subscribe((res) => {
            console.log(res);
            this.acCancel = res;
        });
        this._translate.get('sharemenu.close').subscribe((res) => {
            console.log(res);
            this.acClose = res;
        });
        this._translate.get('sharemenu.shareallresults').subscribe((res) => {
            console.log(res);
            this.acShareAll = res;
        });
        this._translate.get('sharemenu.share').subscribe((res) => {
            console.log(res);
            this.acShare = res;
        });
    }
    ngOnDestroy() {
        if (this.mySubscription) {
            this.mySubscription.unsubscribe();
        }
    }
    scrollToTop() {
        this.content.scrollToTop();
        this.isShown = false;
    }
    scrollStop(event) {
        this.zone.run(() => {
            this.isShown = true;
        });
    }
    scrollHandler(event) {
        console.log(`ScrollEvent: ${event}`);
        this.zone.run(() => {
            this.isShown = true;
        });
    }
    showToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000
            });
            toast.present();
        });
    }
    openModal(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _share_modal_share_modal_page__WEBPACK_IMPORTED_MODULE_7__["ShareModalPage"],
                componentProps: {
                    "message": data
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    this.dataReturned = dataReturned.data;
                }
            });
            return yield modal.present();
        });
    }
    //Action Sheet Controller - when fab button is pressed 
    presentActionSheet() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: this.acShare,
                buttons: [{
                        text: this.acClear,
                        role: 'destructive',
                        icon: 'trash',
                        handler: () => {
                            this.router.navigate(['/home']);
                            this.clearSelected();
                            console.log('Cleared selected resources');
                        }
                    }, {
                        text: this.acShare + ' ' + this.selectItems,
                        icon: 'share',
                        handler: () => {
                            this.shareSelected();
                            console.log('Share clicked');
                        }
                    }, {
                        text: this.acShareAll + ' ' + this.numberOfSearchResults,
                        icon: 'share',
                        handler: () => {
                            this.shareAllResults();
                            console.log('Share All clicked');
                        }
                    }, {
                        text: this.acCancel,
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    goToDetailsPage(resource, event) {
        this.router.navigate(['/details'], resource.key);
    }
    clearSelected() {
        window.location.reload();
        this.selectedResources = [];
        this.selectItems = 0;
    }
    search() {
        // Reset search_term to log to firebase analytics
        this.search_analytics = '';
        console.log(this.categories);
        console.log(this.cities);
        let val = this.searchTerm;
        if (val.trim() == '') {
            if (this.categories.length > 0 && this.cities.length > 0) {
                this.search_analytics = this.categories.toString() + ',' + this.cities.toString() + ',' + this.searchTerm;
                console.log(this.search_analytics);
                // Log to firebase analytics
                this.firebaseAnalytics.logEvent('search', { search_term: this.search_analytics });
                this.searchResults = this.searchThisList.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => data.filter(resource => {
                    for (var j = 0; j < this.cities.length; j++) {
                        return resource.Category.split(", ").filter(function (e) {
                            return this.indexOf(e) > -1;
                        }, this.categories).length == this.categories.length && resource.LocationCity.toString().includes(this.cities[j]);
                    }
                })));
            }
            // Search with mulitple categories
            if (this.categories.length > 0 && this.cities.length == 0) {
                this.search_analytics = this.categories.toString() + ',' + this.cities.toString() + ',' + this.searchTerm;
                console.log(this.search_analytics);
                // Log to firebase analytics
                this.firebaseAnalytics.logEvent('search', { search_term: this.search_analytics });
                this.searchResults = this.searchThisList.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => data.filter(resource => {
                    return resource.Category.split(", ").filter(function (e) {
                        return this.indexOf(e) > -1;
                    }, this.categories).length == this.categories.length;
                })));
            }
            if (this.cities.length > 0 && this.categories.length == 0) {
                this.search_analytics = this.categories.toString() + ',' + this.cities.toString() + ',' + this.searchTerm;
                console.log(this.search_analytics);
                // Log to firebase analytics
                this.firebaseAnalytics.logEvent('search', { search_term: this.search_analytics });
                this.searchResults = this.searchThisList.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => data.filter(resource => {
                    for (var i = 0; i < this.cities.length; i++) {
                        if (resource.LocationCity.toString().includes(this.cities[i])) {
                            console.log(resource.LocationCity.toString().includes(this.cities[i]));
                            this.searchedCity.push(resource);
                            console.log(this.searchedCity);
                            return resource.LocationCity.toString().includes(this.cities[i]);
                        }
                    }
                })));
            }
            if (this.cities.length == 0 && this.categories.length == 0) {
                this.searchResults = this.searchThisList;
            }
        }
        //searchTerm search
        if (val.trim() !== '') {
            this.search_analytics = this.categories.toString() + ',' + this.cities.toString() + ',' + this.searchTerm;
            console.log(this.search_analytics);
            // Log to firebase analytics
            this.firebaseAnalytics.logEvent('search', { search_term: this.search_analytics });
            if (this.categories.length > 0 && this.cities.length > 0) {
                console.log(Array.isArray(this.categories));
                console.log(Array.isArray(this.cities));
                this.searchResults = this.searchThisList.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => data.filter(resource => {
                    for (var j = 0; j < this.cities.length; j++) {
                        return resource.Category.split(", ").filter(function (e) {
                            return this.indexOf(e) > -1;
                        }, this.categories).length == this.categories.length && resource.LocationCity.toString().includes(this.cities[j]) &&
                            (resource.ProgramName.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                                || resource.LocationCity.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                                || resource.LocationState.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                                || resource.TelephoneNumber1.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                                || resource.Zip.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                                || resource.Description.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                                || resource.Category.toString().toLowerCase().indexOf(val.toLowerCase()) > -1);
                    }
                })));
            }
            if (this.categories.length > 0 && this.cities.length == 0) {
                console.log(Array.isArray(this.categories));
                this.searchResults = this.searchThisList.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => data.filter(resource => {
                    return resource.Category.split(", ").filter(function (e) {
                        return this.indexOf(e) > -1;
                    }, this.categories).length == this.categories.length &&
                        (resource.ProgramName.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                            || resource.LocationCity.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                            || resource.LocationState.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                            || resource.TelephoneNumber1.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                            || resource.Zip.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                            || resource.Description.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                            || resource.Category.toString().toLowerCase().indexOf(val.toLowerCase()) > -1);
                })));
            }
            if (this.cities.length > 0 && this.categories.length == 0) {
                this.searchResults = this.searchThisList.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => data.filter(resource => {
                    for (var i = 0; i < this.cities.length; i++) {
                        if (resource.LocationCity.toString().includes(this.cities[i]) &&
                            (resource.ProgramName.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                                || resource.LocationCity.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                                || resource.LocationState.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                                || resource.TelephoneNumber1.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                                || resource.Zip.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                                || resource.Description.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                                || resource.Category.toString().toLowerCase().indexOf(val.toLowerCase()) > -1)) {
                            console.log(resource.LocationCity.toString().includes(this.cities[i]));
                            this.searchedCity.push(resource);
                            console.log(this.searchedCity);
                            return (resource.LocationCity.toString().includes(this.cities[i]) &&
                                (resource.ProgramName.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                                    || resource.LocationCity.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                                    || resource.LocationState.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                                    || resource.TelephoneNumber1.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                                    || resource.Zip.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                                    || resource.Description.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                                    || resource.Category.toString().toLowerCase().indexOf(val.toLowerCase()) > -1));
                        }
                    }
                })));
            }
            if (this.cities.length == 0 && this.categories.length == 0) {
                this.searchResults = this.searchThisList.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(resource => resource.filter((resource) => {
                    return (resource.ProgramName.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                        || resource.LocationCity.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                        || resource.LocationState.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                        || resource.TelephoneNumber1.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                        || resource.Zip.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                        || resource.Description.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                        || resource.Category.toString().toLowerCase().indexOf(val.toLowerCase()) > -1);
                })));
            }
        }
        this.searchResults.forEach((result) => {
            this.numberOfSearchResults = result.length;
        });
    }
    updateSelected(event, resource) {
        console.log(event.detail.checked);
        console.log(resource.checked);
        console.log(this.selectedResources);
        if (event.detail.checked) {
            console.log("not found in selected, adding");
            this.selectItems = this.selectItems + 1;
            this.selectedResources.push(resource);
        }
        if (!event.detail.checked) {
            let index = this.selectedResources.indexOf(resource);
            this.selectItems = this.selectItems - 1;
            this.selectedResources.splice(index, 1);
        }
        console.log(this.selectedResources);
    }
    shareResource(event, resource) {
        let name = resource.ProgramName;
        let phone = resource.TelephoneNumber1;
        let website = resource.Website;
        let email = resource.EmailAddress;
        let sms = name + '\n' + phone + '\n' + website + '\n' + email;
        this.shareOneResourceString = sms + '\n' + "This information is provided by NAMI St. Tammany.  For more behavioral health information call us at 985-626-6528, or www.namisttammany.org or www.facebook.com/namisttammany." + '\n';
        var data = { message: this.shareOneResourceString };
        this.openModal(data).then(() => {
            this.router.navigate(['/home']);
        });
    }
    shareSelected() {
        if (this.selectItems == 0) {
            alert("No resoureces selected - please choose at least 1");
            return;
        }
        this.shareSelectedString = '';
        for (let i = 0; i < this.selectedResources.length; i++) {
            let name = this.selectedResources[i].ProgramName;
            let phone = this.selectedResources[i].TelephoneNumber1;
            let website = this.selectedResources[i].Website;
            let email = this.selectedResources[i].EmailAddress;
            // Log resource individually as shared into Firebase Analytics
            this.firebaseAnalytics.logEvent('share', { resources_shared: name });
            this.shareSelectedString = this.shareSelectedString + '\n' + name + '\n' + phone + '\n' + website + '\n' + email + '\n';
            console.log(this.shareSelectedString);
        }
        console.log('exited for loop');
        this.shareSelectedString = this.shareSelectedString + '\n' + "This information is provided by NAMI St. Tammany.  For more behavioral health information call us at 985-626-6528, or www.namisttammany.org or www.facebook.com/namisttammany." + '\n';
        var data = { message: this.shareSelectedString };
        this.openModal(data).then(() => {
            // this.firebaseAnalytics.logEvent('share', {resources_shared: this.shareSelectedString})
            this.router.navigate(['/home']);
        });
    }
    shareAllResults() {
        // ************************************************************************************************************************************ //
        this.searchResults.forEach((result) => {
            console.log(result.length);
            for (let i = 0; i < result.length; i++) {
                let name = result[i].ProgramName;
                let phone = result[i].TelephoneNumber1;
                let website = result[i].Website;
                let email = result[i].EmailAddress;
                this.shareAllString = this.shareAllString + '\n' + name + '\n' + phone + '\n' + website + '\n' + email + '\n';
                // Log resource individually as shared into Firebase Analytics
                this.firebaseAnalytics.logEvent('share', { resources_shared: name });
            }
            console.log('exited for loop');
            this.shareAllString = this.shareAllString + '\n' + "This information is provided by NAMI St. Tammany.  For more behavioral health information call us at 985-626-6528, or www.namisttammany.org or www.facebook.com/namisttammany" + '\n';
            console.log(this.shareAllString);
            var data = { message: this.shareAllString };
            this.openModal(data).then(() => {
                // this.firebaseAnalytics.logEvent('share', {resources_shared: this.shareAllString})
                this.router.navigate(['/home']);
            });
        });
        // ************************************************************************************************************************************ //
    }
};
HomePage.ctorParameters = () => [
    { type: _services_resource_list_service__WEBPACK_IMPORTED_MODULE_3__["ResourceListService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_8__["FirebaseAnalytics"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
], HomePage.prototype, "content", void 0);
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_resource_list_service__WEBPACK_IMPORTED_MODULE_3__["ResourceListService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_8__["FirebaseAnalytics"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]])
], HomePage);



/***/ }),

/***/ "./src/app/services/network.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/network.service.ts ***!
  \*********************************************/
/*! exports provided: ConnectionStatus, NetworkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionStatus", function() { return ConnectionStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkService", function() { return NetworkService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");





var ConnectionStatus;
(function (ConnectionStatus) {
    ConnectionStatus[ConnectionStatus["Online"] = 0] = "Online";
    ConnectionStatus[ConnectionStatus["Offline"] = 1] = "Offline";
})(ConnectionStatus || (ConnectionStatus = {}));
let NetworkService = class NetworkService {
    constructor(network, toastController, plt) {
        this.network = network;
        this.toastController = toastController;
        this.plt = plt;
        this.status = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](ConnectionStatus.Offline);
        this.plt.ready().then(() => {
            this.initializeNetworkEvents();
            let status = this.network.type !== 'none' ? ConnectionStatus.Online : ConnectionStatus.Offline;
            this.status.next(status);
        });
    }
    initializeNetworkEvents() {
        this.network.onDisconnect().subscribe(() => {
            if (this.status.getValue() === ConnectionStatus.Online) {
                console.log('WE ARE OFFLINE');
                this.updateNetworkStatus(ConnectionStatus.Offline);
            }
        });
        this.network.onConnect().subscribe(() => {
            if (this.status.getValue() === ConnectionStatus.Offline) {
                console.log('WE ARE ONLINE');
                this.updateNetworkStatus(ConnectionStatus.Online);
            }
        });
    }
    updateNetworkStatus(status) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.status.next(status);
            let connection = status == ConnectionStatus.Offline ? 'Offline' : 'Online';
            let toast = this.toastController.create({
                message: `You are now ${connection}`,
                duration: 3000,
                position: 'bottom'
            });
            toast.then(toast => toast.present());
        });
    }
    onNetworkChange() {
        return this.status.asObservable();
    }
    getCurrentNetworkStatus() {
        return this.status.getValue();
    }
};
NetworkService.ctorParameters = () => [
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__["Network"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
NetworkService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__["Network"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
], NetworkService);



/***/ }),

/***/ "./src/app/services/resource-list.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/resource-list.service.ts ***!
  \***************************************************/
/*! exports provided: ResourceListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceListService", function() { return ResourceListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _network_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./network.service */ "./src/app/services/network.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _translate_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./translate-config.service */ "./src/app/services/translate-config.service.ts");







const API_STORAGE_KEY = 'specialkey';
let ResourceListService = class ResourceListService {
    constructor(db, sdb, networkService, translateConfigService) {
        this.db = db;
        this.sdb = sdb;
        this.networkService = networkService;
        this.translateConfigService = translateConfigService;
        this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    }
    getResourceList() {
        if (this.selectedLanguage = 'en') {
            return this.db.list('resource', ref => ref.orderByChild('ProgramName')).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(changes => {
                console.log(changes);
                return changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val())));
            }));
        }
        if (this.selectedLanguage = 'es') {
            return this.db.list('resource', ref => ref.orderByChild('ProgramName')).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(changes => {
                console.log(changes);
                return changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val())));
            }));
        }
    }
    getCityList() {
        return this.db.list('cities', ref => ref.orderByChild('city')).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(changes => {
            console.log(changes);
            return changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val())));
        }));
    }
    getCategoryList() {
        return this.db.list('categories', ref => ref.orderByChild('category')).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(changes => {
            console.log(changes);
            return changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val())));
        }));
    }
};
ResourceListService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"] },
    { type: _translate_config_service__WEBPACK_IMPORTED_MODULE_6__["TranslateConfigService"] }
];
ResourceListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
        _network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"],
        _translate_config_service__WEBPACK_IMPORTED_MODULE_6__["TranslateConfigService"]])
], ResourceListService);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map