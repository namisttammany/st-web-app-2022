(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <img alt=\"logo\" slot=\"end\" height=\"40px\" src=\"assets/img/Logo_WhiteStacked_1024x1024.png\">\n      <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    <ion-title>\n      {{title | translate}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"lfront\"><img class=\"lfront\" src=\"assets/img/LakefrontBLUE.png\"></div>\n    <img class=\"logo\" src=\"assets/img/0000000776_white.gif\">\n    <div class=\"container2\">\n    <p>NAMI St. Tammany is a grass roots organization dedicated to offering education, support, resources, and advocacy for individuals living with mental illness, their families and the community. Our Mission is to Increase awareness and advocate for families and persons with mental illness: envisioning prevention, education and training as the primary pathways to better services and a healthier community. Founded in 1984, NAMI St. Tammany began as a small group of individuals with this common interest. The mental health needs of our community continue to grow as our population increases. NAMI St. Tammany and its dedicated volunteers continue to expand services to meet the community’s ongoing mental health care needs.</p></div>\n    <div class=\"container\">\n        <h1 class=\"prog-header\">Our Mission</h1>\n      <div class=\"container2\">\n        <h2>Increase awareness and advocate for families and persons with mental illness: envisioning prevention, education and training as the primary pathways to better services and a healthier community.</h2>\n      </div>\n    </div>\n    <div class=\"clear\"></div>\n    <div class=\"container\">\n        <h1 class=\"prog-header\">48,000+</h1>\n      <div class=\"rfloat\">\n        <h2>Individuals Living With Mental Illness</h2>\n      </div>\n    </div>  \n    <div class=\"clear\"></div>\n    <div class=\"container\">\n      <h1 class=\"prog-header\">Impact</h1>\n      <div class=\"rfloat\">\n    <h2>136 support group meetings</h2>\n    <h2>16,410 requests for resources</h2>\n    <h2>1,486 trainings & education</h2>\n    <h2>300+ resources on mobile app</h2>\n    <h2>2,500 served at NAMI’s Closet</h2>\n    <h2>700+ NAMIWalks participants</h2>\n      </div>\n    </div>  \n    <div class=\"clear\"></div>\n    <h1 class=\"prog-header\">Progress</h1>\n    <div class=\"prog-div\">\n    <h2>Peer Support Specialists (PSS)</h2>\n    <p>Members of the community in recovery from mental illness who work with those in need of support and guidance. NAMI St. Tammany employs many PSS throughout the area including: 22nd Judicial District specialty courts, outpatient behavioral health clinics, psychiatric hospitals, our residential and day programs.</p>\n    <ul>\n    <li>15 Employed</li>\n    <li>8 Courts Served</li>\n    <li>8 Facilites</li>\n    </ul></div>\n    <div class=\"prog-div\">\n    <h2>First Responders</h2>\n    <p>We equip law enforcement officers and other first responders with a deeper understanding of mental health issues by offering a variety of resources and educational trainings. These programs guide individuals to appropriate mental health services and offer support, instead of sending them straight into the criminal justice system.</p>\n    <ul>\n    <li>60+ Trained</li>\n    <li>14 Agencies</li>\n    </ul></div>\n    <div class=\"prog-div\">\n    <h2>Day Program</h2>\n    <p>Opened in June 2018 as the first phase of Safe Haven, our Peer-Run Day Center provides free non-clinical support resources, recovery-oriented programs, groups and activities in a safe and accepting environment. The program helps individuals find hope and inspiration from others in recovery.</p>\n    <ul>\n    <li> 94 Clients Served</li>\n    <li>800+ Sessions</li>\n    </ul></div>\n    <div class=\"prog-div\">\n    <h2>Residential Program</h2>\n    <p>Provides 24/7 care to adults living with a severe and persistent mental illness. This allows individuals, who otherwise may be subject to further institutionalization or homelessness, to live in a less restrictive environment while preparing them to move in the direction of recovery and independence.</p>\n    <ul>\n    <li>35 Residents Served</li>\n    <li>1,000 nights of shelter</li>\n    </ul></div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/about/about-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/about/about-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AboutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageRoutingModule", function() { return AboutPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.page */ "./src/app/about/about.page.ts");




const routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_3__["AboutPage"]
    }
];
let AboutPageRoutingModule = class AboutPageRoutingModule {
};
AboutPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AboutPageRoutingModule);



/***/ }),

/***/ "./src/app/about/about.module.ts":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-routing.module */ "./src/app/about/about-routing.module.ts");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about.page */ "./src/app/about/about.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








let AboutPageModule = class AboutPageModule {
};
AboutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _about_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutPageRoutingModule"]
        ],
        declarations: [_about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]]
    })
], AboutPageModule);



/***/ }),

/***/ "./src/app/about/about.page.scss":
/*!***************************************!*\
  !*** ./src/app/about/about.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Removes header drop shadow */\nion-header {\n  z-index: 0;\n}\n/* Styles top toolbar */\nion-toolbar {\n  color: white;\n  --background: #3064ab;\n  box-shadow: none;\n}\n/* Styles background color of every item on page content*/\nion-content {\n  --ion-background-color: linear-gradient(180deg,#3064ab 15%, #0c499c 50%, #03216e 100%) !important;\n}\n/* Styles each resources font colors*/\np {\n  text-align: left;\n  color: #fff;\n  width: 100%;\n}\nb {\n  color: #fff;\n  font-size: 12pt;\n}\n.lfront {\n  width: 100%;\n  height: auto;\n}\n.logo {\n  width: 100%;\n  background-repeat: no-repeat;\n  background-position: top left;\n  padding-top: 0px;\n  padding-right: 35px;\n  padding-left: 35px;\n  margin-bottom: 20px;\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n}\n.prog-div {\n  background: transparent;\n  color: #0c499c;\n  padding: 10px 10px 10px 10px;\n  margin: 5px;\n  width: 90%;\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.prog-div > ul {\n  color: #fff;\n}\n.prog-div > p {\n  color: #fff;\n  padding: 0px 10px 0px 10px;\n}\n.prog-header {\n  text-align: center;\n  color: white;\n  background: radial-gradient(#00cd67 20%, #01ff80 100%) !important;\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  border-style: solid;\n  border-width: 1px 1px 1px 1px;\n  border-color: #01ff80;\n  padding: 25px 25px 25px 25px;\n  margin-bottom: -20px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n}\n.clear {\n  clear: both;\n}\n.container {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n.container2 {\n  width: 90%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 20px;\n  margin-bottom: 50px;\n  background: transparent;\n  padding: 5px 25px 5px 25px;\n  color: #0c499c;\n  font-size: 1.4em;\n  font-weight: normal;\n}\n.container2 > p {\n  padding-top: 18px;\n}\n.lfloat {\n  text-align: center;\n  color: white;\n  background: radial-gradient(#00cd67 20%, #01ff80 100%) !important;\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  border-style: solid;\n  border-width: 1px 1px 1px 1px;\n  border-color: #01ff80;\n  padding: 25px 25px 25px 25px;\n  margin-bottom: -20px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n}\n.rfloat {\n  float: right;\n  text-align: center;\n  background: transparent;\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  padding: 25px;\n  color: white;\n  margin-left: 90px;\n  font-weight: 30px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWNrcmljaGFyZC9Eb2N1bWVudHMvYXBwLWJhc2Utc3Qvc3JjL2FwcC9hYm91dC9hYm91dC5wYWdlLnNjc3MiLCJzcmMvYXBwL2Fib3V0L2Fib3V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQywrQkFBQTtBQUNBO0VBQ0MsVUFBQTtBQ0NGO0FEQ0EsdUJBQUE7QUFDQTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDRUo7QURBQSx5REFBQTtBQUNBO0VBQ0EsaUdBQUE7QUNHQTtBREFBLHFDQUFBO0FBQ0E7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDR0E7QUREQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDSUE7QURBRztFQUNFLFdBQUE7RUFDQSxZQUFBO0FDR0w7QURESTtFQUNFLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0lOO0FEREk7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNJSjtBREZJO0VBQ0UsV0FBQTtBQ0tOO0FESEk7RUFDRSxXQUFBO0VBQ0EsMEJBQUE7QUNNTjtBREpJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUVBQUE7RUFBbUUscURBQUE7RUFDbkUsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDUVI7QURMSTtFQUNFLFdBQUE7QUNRTjtBRExJO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDUU47QUROSTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsMEJBQUE7RUFFQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ09OO0FETEk7RUFDRSxpQkFBQTtBQ1FOO0FETkk7RUFDRSxrQkFBQTtFQUNFLFlBQUE7RUFDQSxpRUFBQTtFQUFtRSxxREFBQTtFQUNuRSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNVUjtBRFJJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFBMEIscURBQUE7RUFJMUIsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ1NOIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC8qIFJlbW92ZXMgaGVhZGVyIGRyb3Agc2hhZG93ICovXG4gaW9uLWhlYWRlciB7XG4gIHotaW5kZXg6IDA7XG59XG4vKiBTdHlsZXMgdG9wIHRvb2xiYXIgKi9cbmlvbi10b29sYmFyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMzA2NGFiO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG4vKiBTdHlsZXMgYmFja2dyb3VuZCBjb2xvciBvZiBldmVyeSBpdGVtIG9uIHBhZ2UgY29udGVudCovXG5pb24tY29udGVudHtcbi0taW9uLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIzMwNjRhYiAxNSUsICMwYzQ5OWMgNTAlLCAjMDMyMTZlIDEwMCUpICFpbXBvcnRhbnQ7XG59XG4gICBcbi8qIFN0eWxlcyBlYWNoIHJlc291cmNlcyBmb250IGNvbG9ycyovXG5wIHtcbnRleHQtYWxpZ246IGxlZnQ7XG5jb2xvcjogI2ZmZjtcbndpZHRoOjEwMCU7XG59XG5iIHtcbmNvbG9yOiAjZmZmO1xuZm9udC1zaXplOiAxMnB0O1xufVxuXG5cbiAgIC5sZnJvbnQge1xuICAgICB3aWR0aDogMTAwJTtcbiAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgICAubG9nbyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgbGVmdDtcbiAgICAgIHBhZGRpbmctdG9wOjBweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDM1cHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOjIwcHg7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIH1cbiAgICBcbiAgICAucHJvZy1kaXYge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjMGM0OTljO1xuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XG4gICAgbWFyZ2luOjVweDtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICAgIC5wcm9nLWRpdj51bCB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgLnByb2ctZGl2PnAge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBwYWRkaW5nOiAwcHggMTBweCAwcHggMTBweDtcbiAgICB9XG4gICAgLnByb2ctaGVhZGVyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgjMDBjZDY3IDIwJSwgIzAxZmY4MCAxMDAlKSAhaW1wb3J0YW50OyAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHggMXB4IDFweCAxcHg7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzAxZmY4MDtcbiAgICAgICAgcGFkZGluZzogMjVweCAyNXB4IDI1cHggMjVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICBcbiAgICAuY2xlYXIge1xuICAgICAgY2xlYXI6IGJvdGg7XG4gICAgfVxuICAgIFxuICAgIC5jb250YWluZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIH1cbiAgICAuY29udGFpbmVyMiB7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgLy9ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgcGFkZGluZzogNXB4IDI1cHggNXB4IDI1cHg7XG4gICAgICAvL2JveC1zaGFkb3c6IDFweCAxcHggOHB4IGdyZXk7XG4gICAgICBjb2xvcjogIzBjNDk5YztcbiAgICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIH1cbiAgICAuY29udGFpbmVyMj5wIHtcbiAgICAgIHBhZGRpbmctdG9wOiAxOHB4O1xuICAgIH1cbiAgICAubGZsb2F0IHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoIzAwY2Q2NyAyMCUsICMwMWZmODAgMTAwJSkgIWltcG9ydGFudDsgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgIGJvcmRlci13aWR0aDogMXB4IDFweCAxcHggMXB4O1xuICAgICAgICBib3JkZXItY29sb3I6ICMwMWZmODA7XG4gICAgICAgIHBhZGRpbmc6IDI1cHggMjVweCAyNXB4IDI1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0yMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLnJmbG9hdCB7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kOiBcdHRyYW5zcGFyZW50OyAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cbiAgICAgIC8vYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgIC8vYm9yZGVyLXdpZHRoOiAxcHggMXB4IDFweCAxcHg7XG4gICAgICAvL2JvcmRlci1jb2xvcjogIzU1ODBiYTtcbiAgICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBtYXJnaW4tbGVmdDogOTBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIFxuICAgIiwiLyogUmVtb3ZlcyBoZWFkZXIgZHJvcCBzaGFkb3cgKi9cbmlvbi1oZWFkZXIge1xuICB6LWluZGV4OiAwO1xufVxuXG4vKiBTdHlsZXMgdG9wIHRvb2xiYXIgKi9cbmlvbi10b29sYmFyIHtcbiAgY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6ICMzMDY0YWI7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi8qIFN0eWxlcyBiYWNrZ3JvdW5kIGNvbG9yIG9mIGV2ZXJ5IGl0ZW0gb24gcGFnZSBjb250ZW50Ki9cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KDE4MGRlZywjMzA2NGFiIDE1JSwgIzBjNDk5YyA1MCUsICMwMzIxNmUgMTAwJSkgIWltcG9ydGFudDtcbn1cblxuLyogU3R5bGVzIGVhY2ggcmVzb3VyY2VzIGZvbnQgY29sb3JzKi9cbnAge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmIge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxMnB0O1xufVxuXG4ubGZyb250IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmxvZ28ge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGxlZnQ7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM1cHg7XG4gIHBhZGRpbmctbGVmdDogMzVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5wcm9nLWRpdiB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzBjNDk5YztcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5wcm9nLWRpdiA+IHVsIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5wcm9nLWRpdiA+IHAge1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMHB4IDEwcHggMHB4IDEwcHg7XG59XG5cbi5wcm9nLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoIzAwY2Q2NyAyMCUsICMwMWZmODAgMTAwJSkgIWltcG9ydGFudDtcbiAgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMXB4IDFweCAxcHggMXB4O1xuICBib3JkZXItY29sb3I6ICMwMWZmODA7XG4gIHBhZGRpbmc6IDI1cHggMjVweCAyNXB4IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IC0yMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNsZWFyIHtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLmNvbnRhaW5lcjIge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogNXB4IDI1cHggNXB4IDI1cHg7XG4gIGNvbG9yOiAjMGM0OTljO1xuICBmb250LXNpemU6IDEuNGVtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uY29udGFpbmVyMiA+IHAge1xuICBwYWRkaW5nLXRvcDogMThweDtcbn1cblxuLmxmbG9hdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoIzAwY2Q2NyAyMCUsICMwMWZmODAgMTAwJSkgIWltcG9ydGFudDtcbiAgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMXB4IDFweCAxcHggMXB4O1xuICBib3JkZXItY29sb3I6ICMwMWZmODA7XG4gIHBhZGRpbmc6IDI1cHggMjVweCAyNXB4IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IC0yMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnJmbG9hdCB7XG4gIGZsb2F0OiByaWdodDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovXG4gIHBhZGRpbmc6IDI1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDkwcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMHB4O1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/about/about.page.ts":
/*!*************************************!*\
  !*** ./src/app/about/about.page.ts ***!
  \*************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/firebase-analytics/ngx */ "./node_modules/@ionic-native/firebase-analytics/ngx/index.js");



let AboutPage = class AboutPage {
    constructor(firebaseAnalytics) {
        this.firebaseAnalytics = firebaseAnalytics;
    }
    ngOnInit() {
        this.firebaseAnalytics.logEvent('about_page', { page: "about_page viewed" });
        this.title = 'menu.about';
    }
};
AboutPage.ctorParameters = () => [
    { type: _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_2__["FirebaseAnalytics"] }
];
AboutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.page.scss */ "./src/app/about/about.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_2__["FirebaseAnalytics"]])
], AboutPage);



/***/ })

}]);
//# sourceMappingURL=about-about-module-es2015.js.map