function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAboutAboutPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <img alt=\"logo\" slot=\"end\" height=\"40px\" src=\"assets/img/Logo_WhiteStacked_1024x1024.png\">\n      <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    <ion-title>\n      {{title | translate}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"lfront\"><img class=\"lfront\" src=\"assets/img/LakefrontBLUE.png\"></div>\n    <img class=\"logo\" src=\"assets/img/0000000776_white.gif\">\n    <div class=\"container2\">\n    <p>NAMI St. Tammany is a grass roots organization dedicated to offering education, support, resources, and advocacy for individuals living with mental illness, their families and the community. Our Mission is to Increase awareness and advocate for families and persons with mental illness: envisioning prevention, education and training as the primary pathways to better services and a healthier community. Founded in 1984, NAMI St. Tammany began as a small group of individuals with this common interest. The mental health needs of our community continue to grow as our population increases. NAMI St. Tammany and its dedicated volunteers continue to expand services to meet the community’s ongoing mental health care needs.</p></div>\n    <div class=\"container\">\n        <h1 class=\"prog-header\">Our Mission</h1>\n      <div class=\"container2\">\n        <h2>Increase awareness and advocate for families and persons with mental illness: envisioning prevention, education and training as the primary pathways to better services and a healthier community.</h2>\n      </div>\n    </div>\n    <div class=\"clear\"></div>\n    <div class=\"container\">\n        <h1 class=\"prog-header\">48,000+</h1>\n      <div class=\"rfloat\">\n        <h2>Individuals Living With Mental Illness</h2>\n      </div>\n    </div>  \n    <div class=\"clear\"></div>\n    <div class=\"container\">\n      <h1 class=\"prog-header\">Impact</h1>\n      <div class=\"rfloat\">\n    <h2>136 support group meetings</h2>\n    <h2>16,410 requests for resources</h2>\n    <h2>1,486 trainings & education</h2>\n    <h2>300+ resources on mobile app</h2>\n    <h2>2,500 served at NAMI’s Closet</h2>\n    <h2>700+ NAMIWalks participants</h2>\n      </div>\n    </div>  \n    <div class=\"clear\"></div>\n    <h1 class=\"prog-header\">Progress</h1>\n    <div class=\"prog-div\">\n    <h2>Peer Support Specialists (PSS)</h2>\n    <p>Members of the community in recovery from mental illness who work with those in need of support and guidance. NAMI St. Tammany employs many PSS throughout the area including: 22nd Judicial District specialty courts, outpatient behavioral health clinics, psychiatric hospitals, our residential and day programs.</p>\n    <ul>\n    <li>15 Employed</li>\n    <li>8 Courts Served</li>\n    <li>8 Facilites</li>\n    </ul></div>\n    <div class=\"prog-div\">\n    <h2>First Responders</h2>\n    <p>We equip law enforcement officers and other first responders with a deeper understanding of mental health issues by offering a variety of resources and educational trainings. These programs guide individuals to appropriate mental health services and offer support, instead of sending them straight into the criminal justice system.</p>\n    <ul>\n    <li>60+ Trained</li>\n    <li>14 Agencies</li>\n    </ul></div>\n    <div class=\"prog-div\">\n    <h2>Day Program</h2>\n    <p>Opened in June 2018 as the first phase of Safe Haven, our Peer-Run Day Center provides free non-clinical support resources, recovery-oriented programs, groups and activities in a safe and accepting environment. The program helps individuals find hope and inspiration from others in recovery.</p>\n    <ul>\n    <li> 94 Clients Served</li>\n    <li>800+ Sessions</li>\n    </ul></div>\n    <div class=\"prog-div\">\n    <h2>Residential Program</h2>\n    <p>Provides 24/7 care to adults living with a severe and persistent mental illness. This allows individuals, who otherwise may be subject to further institutionalization or homelessness, to live in a less restrictive environment while preparing them to move in the direction of recovery and independence.</p>\n    <ul>\n    <li>35 Residents Served</li>\n    <li>1,000 nights of shelter</li>\n    </ul></div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/about/about-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/about/about-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: AboutPageRoutingModule */

  /***/
  function srcAppAboutAboutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutPageRoutingModule", function () {
      return AboutPageRoutingModule;
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


    var _about_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./about.page */
    "./src/app/about/about.page.ts");

    var routes = [{
      path: '',
      component: _about_page__WEBPACK_IMPORTED_MODULE_3__["AboutPage"]
    }];

    var AboutPageRoutingModule = function AboutPageRoutingModule() {
      _classCallCheck(this, AboutPageRoutingModule);
    };

    AboutPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AboutPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/about/about.module.ts":
  /*!***************************************!*\
    !*** ./src/app/about/about.module.ts ***!
    \***************************************/

  /*! exports provided: AboutPageModule */

  /***/
  function srcAppAboutAboutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutPageModule", function () {
      return AboutPageModule;
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


    var _about_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./about-routing.module */
    "./src/app/about/about-routing.module.ts");
    /* harmony import */


    var _about_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./about.page */
    "./src/app/about/about.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var AboutPageModule = function AboutPageModule() {
      _classCallCheck(this, AboutPageModule);
    };

    AboutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _about_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutPageRoutingModule"]],
      declarations: [_about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]]
    })], AboutPageModule);
    /***/
  },

  /***/
  "./src/app/about/about.page.scss":
  /*!***************************************!*\
    !*** ./src/app/about/about.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppAboutAboutPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Removes header drop shadow */\nion-header {\n  z-index: 0;\n}\n/* Styles top toolbar */\nion-toolbar {\n  color: white;\n  --background: #3064ab;\n  box-shadow: none;\n}\n/* Styles background color of every item on page content*/\nion-content {\n  --ion-background-color: linear-gradient(180deg,#3064ab 15%, #0c499c 50%, #03216e 100%) !important;\n}\n/* Styles each resources font colors*/\np {\n  text-align: left;\n  color: #fff;\n  width: 100%;\n}\nb {\n  color: #fff;\n  font-size: 12pt;\n}\n.lfront {\n  width: 100%;\n  height: auto;\n}\n.logo {\n  width: 100%;\n  background-repeat: no-repeat;\n  background-position: top left;\n  padding-top: 0px;\n  padding-right: 35px;\n  padding-left: 35px;\n  margin-bottom: 20px;\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n}\n.prog-div {\n  background: transparent;\n  color: #0c499c;\n  padding: 10px 10px 10px 10px;\n  margin: 5px;\n  width: 90%;\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.prog-div > ul {\n  color: #fff;\n}\n.prog-div > p {\n  color: #fff;\n  padding: 0px 10px 0px 10px;\n}\n.prog-header {\n  text-align: center;\n  color: white;\n  background: radial-gradient(#00cd67 20%, #01ff80 100%) !important;\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  border-style: solid;\n  border-width: 1px 1px 1px 1px;\n  border-color: #01ff80;\n  padding: 25px 25px 25px 25px;\n  margin-bottom: -20px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n}\n.clear {\n  clear: both;\n}\n.container {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n.container2 {\n  width: 90%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 20px;\n  margin-bottom: 50px;\n  background: transparent;\n  padding: 5px 25px 5px 25px;\n  color: #0c499c;\n  font-size: 1.4em;\n  font-weight: normal;\n}\n.container2 > p {\n  padding-top: 18px;\n}\n.lfloat {\n  text-align: center;\n  color: white;\n  background: radial-gradient(#00cd67 20%, #01ff80 100%) !important;\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  border-style: solid;\n  border-width: 1px 1px 1px 1px;\n  border-color: #01ff80;\n  padding: 25px 25px 25px 25px;\n  margin-bottom: -20px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n}\n.rfloat {\n  float: right;\n  text-align: center;\n  background: transparent;\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  padding: 25px;\n  color: white;\n  margin-left: 90px;\n  font-weight: 30px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWNrcmljaGFyZC9OQU1JL2Jhc2UtZ2xvYmFsL2FwcC1iYXNlLWdsb2JhbC9zcmMvYXBwL2Fib3V0L2Fib3V0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWJvdXQvYWJvdXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDLCtCQUFBO0FBQ0E7RUFDQyxVQUFBO0FDQ0Y7QURDQSx1QkFBQTtBQUNBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNFSjtBREFBLHlEQUFBO0FBQ0E7RUFDQSxpR0FBQTtBQ0dBO0FEQUEscUNBQUE7QUFDQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNHQTtBRERBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNJQTtBREFHO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNHTDtBRERJO0VBQ0UsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDSU47QURESTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0lKO0FERkk7RUFDRSxXQUFBO0FDS047QURISTtFQUNFLFdBQUE7RUFDQSwwQkFBQTtBQ01OO0FESkk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpRUFBQTtFQUFtRSxxREFBQTtFQUNuRSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNRUjtBRExJO0VBQ0UsV0FBQTtBQ1FOO0FETEk7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNRTjtBRE5JO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSwwQkFBQTtFQUVBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDT047QURMSTtFQUNFLGlCQUFBO0FDUU47QUROSTtFQUNFLGtCQUFBO0VBQ0UsWUFBQTtFQUNBLGlFQUFBO0VBQW1FLHFEQUFBO0VBQ25FLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ1VSO0FEUkk7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUEwQixxREFBQTtFQUkxQixhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDU04iLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLyogUmVtb3ZlcyBoZWFkZXIgZHJvcCBzaGFkb3cgKi9cbiBpb24taGVhZGVyIHtcbiAgei1pbmRleDogMDtcbn1cbi8qIFN0eWxlcyB0b3AgdG9vbGJhciAqL1xuaW9uLXRvb2xiYXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAtLWJhY2tncm91bmQ6ICMzMDY0YWI7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi8qIFN0eWxlcyBiYWNrZ3JvdW5kIGNvbG9yIG9mIGV2ZXJ5IGl0ZW0gb24gcGFnZSBjb250ZW50Ki9cbmlvbi1jb250ZW50e1xuLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KDE4MGRlZywjMzA2NGFiIDE1JSwgIzBjNDk5YyA1MCUsICMwMzIxNmUgMTAwJSkgIWltcG9ydGFudDtcbn1cbiAgIFxuLyogU3R5bGVzIGVhY2ggcmVzb3VyY2VzIGZvbnQgY29sb3JzKi9cbnAge1xudGV4dC1hbGlnbjogbGVmdDtcbmNvbG9yOiAjZmZmO1xud2lkdGg6MTAwJTtcbn1cbmIge1xuY29sb3I6ICNmZmY7XG5mb250LXNpemU6IDEycHQ7XG59XG5cblxuICAgLmxmcm9udCB7XG4gICAgIHdpZHRoOiAxMDAlO1xuICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuICAgIC5sb2dvIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBsZWZ0O1xuICAgICAgcGFkZGluZy10b3A6MHB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMzVweDtcbiAgICAgIHBhZGRpbmctbGVmdDogMzVweDtcbiAgICAgIG1hcmdpbi1ib3R0b206MjBweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgfVxuICAgIFxuICAgIC5wcm9nLWRpdiB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICMwYzQ5OWM7XG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgICBtYXJnaW46NXB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG4gICAgLnByb2ctZGl2PnVsIHtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgICAucHJvZy1kaXY+cCB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIHBhZGRpbmc6IDBweCAxMHB4IDBweCAxMHB4O1xuICAgIH1cbiAgICAucHJvZy1oZWFkZXIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KCMwMGNkNjcgMjAlLCAjMDFmZjgwIDEwMCUpICFpbXBvcnRhbnQ7IC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICBib3JkZXItd2lkdGg6IDFweCAxcHggMXB4IDFweDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDFmZjgwO1xuICAgICAgICBwYWRkaW5nOiAyNXB4IDI1cHggMjVweCAyNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMjBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIFxuICAgIC5jbGVhciB7XG4gICAgICBjbGVhcjogYm90aDtcbiAgICB9XG4gICAgXG4gICAgLmNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgfVxuICAgIC5jb250YWluZXIyIHtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAvL2JvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICBwYWRkaW5nOiA1cHggMjVweCA1cHggMjVweDtcbiAgICAgIC8vYm94LXNoYWRvdzogMXB4IDFweCA4cHggZ3JleTtcbiAgICAgIGNvbG9yOiAjMGM0OTljO1xuICAgICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgfVxuICAgIC5jb250YWluZXIyPnAge1xuICAgICAgcGFkZGluZy10b3A6IDE4cHg7XG4gICAgfVxuICAgIC5sZmxvYXQge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgjMDBjZDY3IDIwJSwgIzAxZmY4MCAxMDAlKSAhaW1wb3J0YW50OyAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHggMXB4IDFweCAxcHg7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzAxZmY4MDtcbiAgICAgICAgcGFkZGluZzogMjVweCAyNXB4IDI1cHggMjVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAucmZsb2F0IHtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQ6IFx0dHJhbnNwYXJlbnQ7IC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xuICAgICAgLy9ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgLy9ib3JkZXItd2lkdGg6IDFweCAxcHggMXB4IDFweDtcbiAgICAgIC8vYm9yZGVyLWNvbG9yOiAjNTU4MGJhO1xuICAgICAgcGFkZGluZzogMjVweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIG1hcmdpbi1sZWZ0OiA5MHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDMwcHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgXG4gICAiLCIvKiBSZW1vdmVzIGhlYWRlciBkcm9wIHNoYWRvdyAqL1xuaW9uLWhlYWRlciB7XG4gIHotaW5kZXg6IDA7XG59XG5cbi8qIFN0eWxlcyB0b3AgdG9vbGJhciAqL1xuaW9uLXRvb2xiYXIge1xuICBjb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogIzMwNjRhYjtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLyogU3R5bGVzIGJhY2tncm91bmQgY29sb3Igb2YgZXZlcnkgaXRlbSBvbiBwYWdlIGNvbnRlbnQqL1xuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCMzMDY0YWIgMTUlLCAjMGM0OTljIDUwJSwgIzAzMjE2ZSAxMDAlKSAhaW1wb3J0YW50O1xufVxuXG4vKiBTdHlsZXMgZWFjaCByZXNvdXJjZXMgZm9udCBjb2xvcnMqL1xucCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcbn1cblxuYiB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEycHQ7XG59XG5cbi5sZnJvbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ubG9nbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgbGVmdDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1yaWdodDogMzVweDtcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnByb2ctZGl2IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjMGM0OTljO1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICBtYXJnaW46IDVweDtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnByb2ctZGl2ID4gdWwge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnByb2ctZGl2ID4gcCB7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwcHggMTBweCAwcHggMTBweDtcbn1cblxuLnByb2ctaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgjMDBjZDY3IDIwJSwgIzAxZmY4MCAxMDAlKSAhaW1wb3J0YW50O1xuICAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHggMXB4IDFweCAxcHg7XG4gIGJvcmRlci1jb2xvcjogIzAxZmY4MDtcbiAgcGFkZGluZzogMjVweCAyNXB4IDI1cHggMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2xlYXIge1xuICBjbGVhcjogYm90aDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4uY29udGFpbmVyMiB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiA1cHggMjVweCA1cHggMjVweDtcbiAgY29sb3I6ICMwYzQ5OWM7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5jb250YWluZXIyID4gcCB7XG4gIHBhZGRpbmctdG9wOiAxOHB4O1xufVxuXG4ubGZsb2F0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgjMDBjZDY3IDIwJSwgIzAxZmY4MCAxMDAlKSAhaW1wb3J0YW50O1xuICAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHggMXB4IDFweCAxcHg7XG4gIGJvcmRlci1jb2xvcjogIzAxZmY4MDtcbiAgcGFkZGluZzogMjVweCAyNXB4IDI1cHggMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucmZsb2F0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cbiAgcGFkZGluZzogMjVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogOTBweDtcbiAgZm9udC13ZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/about/about.page.ts":
  /*!*************************************!*\
    !*** ./src/app/about/about.page.ts ***!
    \*************************************/

  /*! exports provided: AboutPage */

  /***/
  function srcAppAboutAboutPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutPage", function () {
      return AboutPage;
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


    var _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/firebase-analytics/ngx */
    "./node_modules/@ionic-native/firebase-analytics/ngx/index.js");

    var AboutPage =
    /*#__PURE__*/
    function () {
      function AboutPage(firebaseAnalytics) {
        _classCallCheck(this, AboutPage);

        this.firebaseAnalytics = firebaseAnalytics;
      }

      _createClass(AboutPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.firebaseAnalytics.logEvent('about_page', {
            page: "about_page viewed"
          });
          this.title = 'menu.about';
        }
      }]);

      return AboutPage;
    }();

    AboutPage.ctorParameters = function () {
      return [{
        type: _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_2__["FirebaseAnalytics"]
      }];
    };

    AboutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about.page.scss */
      "./src/app/about/about.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_2__["FirebaseAnalytics"]])], AboutPage);
    /***/
  }
}]);
//# sourceMappingURL=about-about-module-es5.js.map