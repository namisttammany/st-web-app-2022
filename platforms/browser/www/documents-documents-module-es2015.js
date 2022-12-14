(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["documents-documents-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/documents/documents.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/documents/documents.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <img alt=\"logo\" slot=\"end\" height=\"40px\" src=\"assets/img/Logo_WhiteStacked_1024x1024.png\">\n      <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    <ion-title>\n      {{title | translate}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar [(ngModel)]=\"searchTerm\" (search)=\"searchCategory($event)\"></ion-searchbar>\n  <div class=\"dropdowns\">\n  <ion-list class=\"bshadow\">\n    <ion-item>\n      <ion-label class=\"box-categories\">Categories</ion-label>\n      <ion-select class=\"selector\" [(ngModel)]=\"categories\" multiple=\"true\" cancelText=\"Cancel\" okText=\"Select\" (ionChange)=\"searchCategory()\">\n        <ion-select-option value=\"De-escalation\">De-escalation</ion-select-option>\n        <ion-select-option value=\"Legal\">Legal</ion-select-option>\n        <ion-select-option value=\"Mental Illness\">Mental Illness</ion-select-option>\n        <ion-select-option value=\"Support\">Support</ion-select-option>\n        <ion-select-option value=\"Other\">Other</ion-select-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  </div>\n\n  <ion-list class=\"ion-padding\">\n  \n  <!-- <ion-list *ngFor=\"let file of documents | async\">\n      <ion-row>\n        <ion-col col-11 >\n          <ion-card style=\"height:auto;\" style=\"display:flex\" color=\"light\" (click)=\"viewFile(file.url)\">\n                <p style=\"width:100%; text-align:left\" class=\"ion-text-wrap\" ><b style=\"color:#0c499c; font-size: 12pt;\">{{file.title}} </b> <br>\n                   {{file.description}}</p>\n          </ion-card>\n        </ion-col>\n  \n        <ion-col col-1>\n            <ion-button clear slot=\"end\" style=\"vertical-align: 50%\" (click)=\"shareFile(file.urlshort, file.title)\">\n                  <ion-icon name=\"share-alt\"></ion-icon>\n            </ion-button>\n          </ion-col>\n      </ion-row>\n  </ion-list> -->\n\n  <ion-list *ngFor=\"let file of documents | async\">\n      <!-- <ion-row>\n        <ion-col col-11 > -->\n      <ion-item>\n          <ion-label style=\"height:auto;\" style=\"display:flex\" color=\"light\" (click)=\"viewFile(file)\">\n                <p class=\"ion-text-wrap\" ><b>{{file.title}} </b> <br>\n                   {{file.description}}</p>\n             \n          </ion-label>\n        <!-- </ion-col> -->\n        <ion-icon style=\"color: #01ff80;\" name=\"share\" clear slot=\"end\"  (click)=\"shareFile(file.urlshort, file.title)\"></ion-icon>\n        <!-- <ion-col col-1> -->\n                 \n          <!-- </ion-col>\n      </ion-row> -->\n    </ion-item>\n  </ion-list>\n\n  </ion-list>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\" >\n    <ion-fab-button (click)=\"scrollToTop()\" >\n      <ion-icon name=\"chevron-up\"></ion-icon>\n      <!-- <ion-label>Scroll to Top</ion-label> -->\n    </ion-fab-button>\n</ion-fab>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/documents/documents-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/documents/documents-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DocumentsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsPageRoutingModule", function() { return DocumentsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _documents_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./documents.page */ "./src/app/documents/documents.page.ts");




const routes = [
    {
        path: '',
        component: _documents_page__WEBPACK_IMPORTED_MODULE_3__["DocumentsPage"],
        pathMatch: 'prefix'
    }
];
let DocumentsPageRoutingModule = class DocumentsPageRoutingModule {
};
DocumentsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DocumentsPageRoutingModule);



/***/ }),

/***/ "./src/app/documents/documents.module.ts":
/*!***********************************************!*\
  !*** ./src/app/documents/documents.module.ts ***!
  \***********************************************/
/*! exports provided: DocumentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsPageModule", function() { return DocumentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _documents_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./documents-routing.module */ "./src/app/documents/documents-routing.module.ts");
/* harmony import */ var _documents_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./documents.page */ "./src/app/documents/documents.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








let DocumentsPageModule = class DocumentsPageModule {
};
DocumentsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _documents_routing_module__WEBPACK_IMPORTED_MODULE_5__["DocumentsPageRoutingModule"]
        ],
        declarations: [_documents_page__WEBPACK_IMPORTED_MODULE_6__["DocumentsPage"]]
    })
], DocumentsPageModule);



/***/ }),

/***/ "./src/app/documents/documents.page.scss":
/*!***********************************************!*\
  !*** ./src/app/documents/documents.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Removes header drop shadow */\nion-header {\n  z-index: 0;\n}\n/* Styles top toolbar */\nion-toolbar {\n  color: white;\n  --background: #3064ab;\n  box-shadow: none;\n}\n/* Styles background color of every item on page content*/\nion-content {\n  --ion-background-color: linear-gradient(180deg, #3064ab 0%, #0c499c 50%, #03216e 100%) !important;\n}\n/* Styles searcbar*/\n.sc-ion-searchbar-md-h {\n  --clear-button-color: initial;\n  --cancel-button-color: var(--ion-color-step-900,#fff);\n  --color: var(--ion-color-step-850,#fff);\n  --icon-color: var(--ion-color-step-600,#fff);\n  --background: transparent !important;\n}\n/* Styles dropdowns*/\nion-item {\n  --background: transparent !important;\n  --color: #fff !important;\n  --border-color: var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(255,255,255,0.13))));\n}\n/* Styles  dropdowns bacground color*/\n.list-md {\n  background: transparent !important;\n}\n/* Styles each resources font colors*/\np {\n  text-align: left;\n  color: #fff;\n}\nb {\n  color: #fff;\n  font-size: 12pt;\n}\n/* Styles each resources background color*/\nion-list {\n  --color: var(--ion-color-step-850,#fff);\n  --background: transparent !important;\n}\n/* Styles share button*/\n/* color is changed via html*/\nicon-inner {\n  --color: var(--ion-color-step-850,#01ff80 !important);\n}\nion-fab-button {\n  --color: var(--ion-color-step-850,#fff);\n  --background: radial-gradient(#00cd67 20%, #01ff80 100%) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWNrcmljaGFyZC9Eb2N1bWVudHMvYXBwLWJhc2Utc3Qvc3JjL2FwcC9kb2N1bWVudHMvZG9jdW1lbnRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZG9jdW1lbnRzL2RvY3VtZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUMsK0JBQUE7QUFDQTtFQUNDLFVBQUE7QUNDRjtBRENBLHVCQUFBO0FBQ0E7RUFDSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0VKO0FEQUkseURBQUE7QUFDQTtFQUNBLGlHQUFBO0FDR0o7QURESSxtQkFBQTtBQUNBO0VBQ0UsNkJBQUE7RUFDQSxxREFBQTtFQUNBLHVDQUFBO0VBQ0EsNENBQUE7RUFDQSxvQ0FBQTtBQ0lOO0FERkksb0JBQUE7QUFDQTtFQUNBLG9DQUFBO0VBQ0Esd0JBQUE7RUFDQSxxSEFBQTtBQ0tKO0FESEkscUNBQUE7QUFDQTtFQUNBLGtDQUFBO0FDTUo7QURKSSxxQ0FBQTtBQUNBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDT0o7QURMSTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDUUo7QUROSSwwQ0FBQTtBQUNBO0VBQ0EsdUNBQUE7RUFDQSxvQ0FBQTtBQ1NKO0FEUEksdUJBQUE7QUFDQSw2QkFBQTtBQU1BO0VBQ0kscURBQUE7QUNLUjtBREZJO0VBQ0UsdUNBQUE7RUFDQSxtRUFBQTtBQ0tOIiwiZmlsZSI6InNyYy9hcHAvZG9jdW1lbnRzL2RvY3VtZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLyogUmVtb3ZlcyBoZWFkZXIgZHJvcCBzaGFkb3cgKi9cbiBpb24taGVhZGVyIHtcbiAgei1pbmRleDogMDtcbn1cbi8qIFN0eWxlcyB0b3AgdG9vbGJhciAqL1xuaW9uLXRvb2xiYXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAtLWJhY2tncm91bmQ6ICMzMDY0YWI7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG4gICAgLyogU3R5bGVzIGJhY2tncm91bmQgY29sb3Igb2YgZXZlcnkgaXRlbSBvbiBwYWdlIGNvbnRlbnQqL1xuICAgIGlvbi1jb250ZW50e1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMzMDY0YWIgMCUsICMwYzQ5OWMgNTAlLCAjMDMyMTZlIDEwMCUpICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC8qIFN0eWxlcyBzZWFyY2JhciovXG4gICAgLnNjLWlvbi1zZWFyY2hiYXItbWQtaCB7XG4gICAgICAtLWNsZWFyLWJ1dHRvbi1jb2xvcjogaW5pdGlhbDtcbiAgICAgIC0tY2FuY2VsLWJ1dHRvbi1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtOTAwLCNmZmYpO1xuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtODUwLCNmZmYpO1xuICAgICAgLS1pY29uLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsI2ZmZik7XG4gICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC8qIFN0eWxlcyBkcm9wZG93bnMqL1xuICAgIGlvbi1pdGVtIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24taXRlbS1ib3JkZXItY29sb3IsdmFyKC0taW9uLWJvcmRlci1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAscmdiYSgyNTUsMjU1LDI1NSwwLjEzKSkpKTtcbiAgICB9XG4gICAgLyogU3R5bGVzICBkcm9wZG93bnMgYmFjZ3JvdW5kIGNvbG9yKi9cbiAgICAubGlzdC1tZCB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLyogU3R5bGVzIGVhY2ggcmVzb3VyY2VzIGZvbnQgY29sb3JzKi9cbiAgICBwIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgICBiIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDEycHQ7XG4gICAgfVxuICAgIC8qIFN0eWxlcyBlYWNoIHJlc291cmNlcyBiYWNrZ3JvdW5kIGNvbG9yKi9cbiAgICBpb24tbGlzdCB7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtODUwLCNmZmYpO1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLyogU3R5bGVzIHNoYXJlIGJ1dHRvbiovXG4gICAgLyogY29sb3IgaXMgY2hhbmdlZCB2aWEgaHRtbCovXG4gICAgLy8gaW9uLWljb24ge1xuICAgIC8vIGhlaWdodDogMTAwJTtcbiAgICAvLyB3aWR0aDogNSU7XG4gICAgLy8gcGFkZGluZy1ib3R0b206IDExcHg7XG4gICAgLy8gfVxuICAgIGljb24taW5uZXIge1xuICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC04NTAsIzAxZmY4MCAhaW1wb3J0YW50KTtcbiAgICB9XG4gICAgXG4gICAgaW9uLWZhYi1idXR0b24ge1xuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtODUwLCNmZmYpO1xuICAgICAgLS1iYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoIzAwY2Q2NyAyMCUsICMwMWZmODAgMTAwJSkgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICBcbiAgICAiLCIvKiBSZW1vdmVzIGhlYWRlciBkcm9wIHNoYWRvdyAqL1xuaW9uLWhlYWRlciB7XG4gIHotaW5kZXg6IDA7XG59XG5cbi8qIFN0eWxlcyB0b3AgdG9vbGJhciAqL1xuaW9uLXRvb2xiYXIge1xuICBjb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogIzMwNjRhYjtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLyogU3R5bGVzIGJhY2tncm91bmQgY29sb3Igb2YgZXZlcnkgaXRlbSBvbiBwYWdlIGNvbnRlbnQqL1xuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMzA2NGFiIDAlLCAjMGM0OTljIDUwJSwgIzAzMjE2ZSAxMDAlKSAhaW1wb3J0YW50O1xufVxuXG4vKiBTdHlsZXMgc2VhcmNiYXIqL1xuLnNjLWlvbi1zZWFyY2hiYXItbWQtaCB7XG4gIC0tY2xlYXItYnV0dG9uLWNvbG9yOiBpbml0aWFsO1xuICAtLWNhbmNlbC1idXR0b24tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTkwMCwjZmZmKTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtODUwLCNmZmYpO1xuICAtLWljb24tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwjZmZmKTtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4vKiBTdHlsZXMgZHJvcGRvd25zKi9cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24taXRlbS1ib3JkZXItY29sb3IsdmFyKC0taW9uLWJvcmRlci1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAscmdiYSgyNTUsMjU1LDI1NSwwLjEzKSkpKTtcbn1cblxuLyogU3R5bGVzICBkcm9wZG93bnMgYmFjZ3JvdW5kIGNvbG9yKi9cbi5saXN0LW1kIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLyogU3R5bGVzIGVhY2ggcmVzb3VyY2VzIGZvbnQgY29sb3JzKi9cbnAge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuYiB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEycHQ7XG59XG5cbi8qIFN0eWxlcyBlYWNoIHJlc291cmNlcyBiYWNrZ3JvdW5kIGNvbG9yKi9cbmlvbi1saXN0IHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtODUwLCNmZmYpO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi8qIFN0eWxlcyBzaGFyZSBidXR0b24qL1xuLyogY29sb3IgaXMgY2hhbmdlZCB2aWEgaHRtbCovXG5pY29uLWlubmVyIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtODUwLCMwMWZmODAgIWltcG9ydGFudCk7XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtODUwLCNmZmYpO1xuICAtLWJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgjMDBjZDY3IDIwJSwgIzAxZmY4MCAxMDAlKSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/documents/documents.page.ts":
/*!*********************************************!*\
  !*** ./src/app/documents/documents.page.ts ***!
  \*********************************************/
/*! exports provided: DocumentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsPage", function() { return DocumentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_documents_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/documents.service */ "./src/app/services/documents.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _share_modal_share_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../share-modal/share-modal.page */ "./src/app/share-modal/share-modal.page.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/firebase-analytics/ngx */ "./node_modules/@ionic-native/firebase-analytics/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");



// import { File } from '@ionic-native/file';
// import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
// import { FileTransfer } from '@ionic-native/file-transfer';
// import { FileOpener } from '@ionic-native/file-opener';







let DocumentsPage = class DocumentsPage {
    constructor(
    // private file: File,
    // private transfer: FileTransfer,
    inAppBrowser, documentsProvider, modalController, platform, 
    // private fileOpener: FileOpener,
    // private document: DocumentViewer,
    zone, toastController, firebaseAnalytics, _translate) {
        this.inAppBrowser = inAppBrowser;
        this.documentsProvider = documentsProvider;
        this.modalController = modalController;
        this.platform = platform;
        this.zone = zone;
        this.toastController = toastController;
        this.firebaseAnalytics = firebaseAnalytics;
        this._translate = _translate;
        this.isShown = false;
        this.documents = [];
        this.categories = '';
        this.searchTerm = '';
        this.filesList = this.documentsProvider.getFiles().snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(changes => {
            return changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val())));
        }));
        this.documents = this.filesList;
    }
    ngOnInit() {
        this.title = 'page.documents';
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
            this.isShown = false;
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
                component: _share_modal_share_modal_page__WEBPACK_IMPORTED_MODULE_5__["ShareModalPage"],
                componentProps: {
                    "message": data
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    this.dataReturned = dataReturned.data;
                    //alert('Modal Sent Data :'+ dataReturned);
                }
            });
            return yield modal.present();
        });
    }
    searchCategory() {
        let val = this.searchTerm;
        if (val.trim() == '' && this.categories.length > 0) {
            this.documents = this.filesList.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => data.filter(files => {
                for (var i = 0; i < this.categories.length; i++) {
                    console.log(files.category);
                    if (files.category.toString().toLowerCase().includes(this.categories[i].toLowerCase())) {
                        return (files.category.toString().toLowerCase().includes(this.categories[i].toLowerCase()));
                    }
                }
            })));
        }
        if (val.trim() == '' && this.categories.length == 0) {
            this.documents = this.filesList;
        }
        if (val.trim() !== '' && this.categories.length > 0) {
            this.documents = this.filesList.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => data.filter(files => {
                for (var i = 0; i < this.categories.length; i++) {
                    console.log(files.category);
                    if ((files.category.toString().toLowerCase().includes(this.categories[i].toLowerCase())) && (files.description.toString().toLowerCase().indexOf(val.toLowerCase()) > -1)) {
                        return ((files.category.toString().toLowerCase().includes(this.categories[i].toLowerCase())) && (files.description.toString().toLowerCase().indexOf(val.toLowerCase()) > -1));
                    }
                }
            })));
        }
        if (val.trim() !== '' && this.categories.length == 0) {
            this.documents = this.filesList.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => data.filter(files => {
                console.log(files.category);
                if (files.description.toString().toLowerCase().indexOf(val.toLowerCase()) > -1) {
                    return (files.description.toString().toLowerCase().indexOf(val.toLowerCase()) > -1);
                }
            })));
        }
    }
    viewFile(file) {
        let fixedUrl = file.url;
        const options = {
            zoom: 'no'
        };
        const browser = this.inAppBrowser.create(fixedUrl, '_system', options);
        this.firebaseAnalytics.logEvent('document_viewed', { document_viewed: file.title });
    }
    shareFile(urlshort, title) {
        var message = title + '\n' + '\n' + urlshort + '\n' + "This information is provided by NAMI St. Tammany.  For more behavioral health information call us at 985-626-6528, or www.namisttammany.org or www.facebook.com/namisttammany" + '\n';
        var data = { message: message };
        // var modalPage = this.modalCtrl.create('ShareModalPage', data, { cssClass: 'test-modal' });
        // modalPage.present();
        this.openModal(data).then(() => {
            // this.router.navigate(['/home'])
        });
        this.firebaseAnalytics.logEvent('document_shared', { page: title });
    }
};
DocumentsPage.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"] },
    { type: _services_documents_service__WEBPACK_IMPORTED_MODULE_2__["DocumentsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_7__["FirebaseAnalytics"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])
], DocumentsPage.prototype, "content", void 0);
DocumentsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-documents',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./documents.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/documents/documents.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./documents.page.scss */ "./src/app/documents/documents.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"],
        _services_documents_service__WEBPACK_IMPORTED_MODULE_2__["DocumentsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_7__["FirebaseAnalytics"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]])
], DocumentsPage);



/***/ }),

/***/ "./src/app/services/documents.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/documents.service.ts ***!
  \***********************************************/
/*! exports provided: DocumentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsService", function() { return DocumentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");



// import { AngularFireStorage } from '@angular/fire/storage';

let DocumentsService = class DocumentsService {
    constructor(http, db) {
        this.http = http;
        this.db = db;
        this.filesList = this.db.list('files', ref => ref.orderByChild('files'));
    }
    getFiles() {
        return this.filesList;
    }
};
DocumentsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] }
];
DocumentsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])
], DocumentsService);



/***/ })

}]);
//# sourceMappingURL=documents-documents-module-es2015.js.map