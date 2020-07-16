function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sponsors-sponsors-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sponsors/sponsors.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sponsors/sponsors.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSponsorsSponsorsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <img alt=\"logo\" slot=\"end\" height=\"40px\" src=\"assets/img/Logo_WhiteStacked_1024x1024.png\" style=\"object-fit: contain !important;\">\n      <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    <ion-title>\n      Sponsors\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n\n  <ion-list *ngFor=\"let sponsor of sponsorsList | async\" class=\"ion-justify-content-center\" >\n\n      <!-- Tier 1 - logo 100% of width, max height -->\n          <ion-row *ngIf=\"sponsor.tier === 1\" style=\"height: 200px; width: fit-content;\">\n            <ion-col size=\"1\">\n              <div></div>\n            </ion-col>\n            <ion-col size=\"10\" class=\"ion-justify-content-center\" >\n              <div style=\"justify-content: center;\">\n                <img id=\"logo\" src=\"{{sponsor.image}}\" (click)=\"viewSponsor(sponsor)\" style=\"object-fit:contain;\">\n              </div>\n            </ion-col>\n            <ion-col size=\"1\">\n              <div></div>\n            </ion-col>\n          </ion-row>\n\n          <!-- Tier 2 - logo 80% of width -->\n          <ion-row *ngIf=\"sponsor.tier === 2\" style=\"height: 200px; width: fit-content;\">\n            <ion-col size=\"2\">\n              <div></div>\n            </ion-col>\n            <ion-col size=\"8\" class=\"ion-justify-content-center\" >\n              <div style=\"justify-content: center;\">\n                <img id=\"logo\" src=\"{{sponsor.image}}\" (click)=\"viewSponsor(sponsor)\" style=\"object-fit:contain;\">\n              </div>\n            </ion-col>\n            <ion-col size=\"2\">\n              <div></div>\n            </ion-col>\n          </ion-row>\n\n          <!-- Tier 3 - logo 50% of width -->\n          <ion-row *ngIf=\"sponsor.tier === 3\" style=\"height: 200px !important; width: fit-content;\">\n            <ion-col size=\"3\">\n              <div></div>\n            </ion-col>\n            <ion-col size=\"6\" class=\"ion-justify-content-center\" >\n              <div style=\"justify-content: center;\">\n                <img id=\"logo\" src=\"{{sponsor.image}}\" (click)=\"viewSponsor(sponsor)\" style=\"object-fit:contain;\">\n              </div>\n            </ion-col>\n            <ion-col size=\"3\">\n              <div></div>\n            </ion-col>\n          </ion-row>\n\n</ion-list>\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/services/sponsors.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/sponsors.service.ts ***!
    \**********************************************/

  /*! exports provided: SponsorsService */

  /***/
  function srcAppServicesSponsorsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SponsorsService", function () {
      return SponsorsService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js"); // import { AngularFireStorage } from '@angular/fire/storage';


    var SponsorsService =
    /*#__PURE__*/
    function () {
      function SponsorsService(http, db) {
        _classCallCheck(this, SponsorsService);

        this.http = http;
        this.db = db;
        this.sponsorsList = this.db.list('sponsors', function (ref) {
          return ref.orderByChild('order');
        });
      }

      _createClass(SponsorsService, [{
        key: "getSponsors",
        value: function getSponsors() {
          return this.db.list('sponsors', function (ref) {
            return ref.orderByChild('order');
          }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (changes) {
            console.log(changes);
            return changes.map(function (c) {
              return Object.assign({
                key: c.payload.key
              }, c.payload.val());
            });
          })); // console.log(this.sponsorsList)
          // return this.sponsorsList;
        }
      }]);

      return SponsorsService;
    }();

    SponsorsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]
      }];
    };

    SponsorsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])], SponsorsService);
    /***/
  },

  /***/
  "./src/app/sponsors/sponsors-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/sponsors/sponsors-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: SponsorsPageRoutingModule */

  /***/
  function srcAppSponsorsSponsorsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SponsorsPageRoutingModule", function () {
      return SponsorsPageRoutingModule;
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


    var _sponsors_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sponsors.page */
    "./src/app/sponsors/sponsors.page.ts");

    var routes = [{
      path: '',
      component: _sponsors_page__WEBPACK_IMPORTED_MODULE_3__["SponsorsPage"]
    }];

    var SponsorsPageRoutingModule = function SponsorsPageRoutingModule() {
      _classCallCheck(this, SponsorsPageRoutingModule);
    };

    SponsorsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SponsorsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/sponsors/sponsors.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/sponsors/sponsors.module.ts ***!
    \*********************************************/

  /*! exports provided: SponsorsPageModule */

  /***/
  function srcAppSponsorsSponsorsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SponsorsPageModule", function () {
      return SponsorsPageModule;
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


    var _sponsors_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sponsors-routing.module */
    "./src/app/sponsors/sponsors-routing.module.ts");
    /* harmony import */


    var _sponsors_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sponsors.page */
    "./src/app/sponsors/sponsors.page.ts");

    var SponsorsPageModule = function SponsorsPageModule() {
      _classCallCheck(this, SponsorsPageModule);
    };

    SponsorsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _sponsors_routing_module__WEBPACK_IMPORTED_MODULE_5__["SponsorsPageRoutingModule"]],
      declarations: [_sponsors_page__WEBPACK_IMPORTED_MODULE_6__["SponsorsPage"]]
    })], SponsorsPageModule);
    /***/
  },

  /***/
  "./src/app/sponsors/sponsors.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/sponsors/sponsors.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSponsorsSponsorsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Styles background color of every item on page content*/\n/* Styles top toolbar */\nion-toolbar {\n  color: white;\n  --background: #3064ab;\n  box-shadow: none;\n}\n/* Styles each resources background color*/\nion-list {\n  --color: var(--ion-color-step-850,#fff);\n}\nion-col {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\nimg {\n  -webkit-box-pack: center;\n          justify-content: center;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\nimg .logo {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 100%;\n  max-width: 100%;\n  max-height: 200px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWNrcmljaGFyZC9OQU1JL2Jhc2UtZ2xvYmFsL2FwcC1iYXNlLWdsb2JhbC9zcmMvYXBwL3Nwb25zb3JzL3Nwb25zb3JzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc3BvbnNvcnMvc3BvbnNvcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BLHlEQUFBO0FBS0EsdUJBQUE7QUFDQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDVkY7QURhQSwwQ0FBQTtBQUNBO0VBQ0UsdUNBQUE7QUNWRjtBRGNBO0VBQ0Usd0JBQUE7VUFBQSx1QkFBQTtBQ1hGO0FEY0E7RUFDSSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtBQ1hKO0FEY0U7RUFDTSxvQkFBQTtFQUFBLGFBQUE7RUFDSix5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FDWEoiLCJmaWxlIjoic3JjL2FwcC9zcG9uc29ycy9zcG9uc29ycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAudmVydGljYWwtY2VudGVye1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgICBoZWlnaHQ6IDEwMCU7XG4vLyAgIH1cblxuLyogU3R5bGVzIGJhY2tncm91bmQgY29sb3Igb2YgZXZlcnkgaXRlbSBvbiBwYWdlIGNvbnRlbnQqL1xuLy8gaW9uLWNvbnRlbnR7XG4vLyAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMzMDY0YWIgMCUsICMwYzQ5OWMgNTAlLCAjMDMyMTZlIDEwMCUpICFpbXBvcnRhbnQ7XG4vLyAgIH1cblxuLyogU3R5bGVzIHRvcCB0b29sYmFyICovXG5pb24tdG9vbGJhciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiAjMzA2NGFiO1xuICBib3gtc2hhZG93OiBub25lO1xuICB9XG5cbi8qIFN0eWxlcyBlYWNoIHJlc291cmNlcyBiYWNrZ3JvdW5kIGNvbG9yKi9cbmlvbi1saXN0IHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtODUwLCNmZmYpO1xuICAvLyAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIH1cblxuaW9uLWNvbCB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5pbWcge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIH1cblxuICBpbWcgLmxvZ28ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTsgXG4gICAgbWF4LWhlaWdodDogMjAwcHg7IFxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIH0iLCIvKiBTdHlsZXMgYmFja2dyb3VuZCBjb2xvciBvZiBldmVyeSBpdGVtIG9uIHBhZ2UgY29udGVudCovXG4vKiBTdHlsZXMgdG9wIHRvb2xiYXIgKi9cbmlvbi10b29sYmFyIHtcbiAgY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6ICMzMDY0YWI7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi8qIFN0eWxlcyBlYWNoIHJlc291cmNlcyBiYWNrZ3JvdW5kIGNvbG9yKi9cbmlvbi1saXN0IHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtODUwLCNmZmYpO1xufVxuXG5pb24tY29sIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmltZyB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG5pbWcgLmxvZ28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBvYmplY3QtZml0OiBjb250YWluO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/sponsors/sponsors.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/sponsors/sponsors.page.ts ***!
    \*******************************************/

  /*! exports provided: SponsorsPage */

  /***/
  function srcAppSponsorsSponsorsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SponsorsPage", function () {
      return SponsorsPage;
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


    var _services_sponsors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/sponsors.service */
    "./src/app/services/sponsors.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
    /* harmony import */


    var _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/firebase-analytics/ngx */
    "./node_modules/@ionic-native/firebase-analytics/ngx/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js"); // import { File } from '@ionic-native/file';
    // import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
    // import { FileTransfer } from '@ionic-native/file-transfer';
    // import { FileOpener } from '@ionic-native/file-opener';


    var SponsorsPage =
    /*#__PURE__*/
    function () {
      function SponsorsPage(inAppBrowser, sponsorsProvider, modalController, platform, // private fileOpener: FileOpener,
      // private document: DocumentViewer,
      zone, toastController, firebaseAnalytics, _translate) {
        _classCallCheck(this, SponsorsPage);

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

      _createClass(SponsorsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "viewSponsor",
        value: function viewSponsor(sponsor) {
          var fixedUrl = sponsor.url;
          var options = {
            zoom: 'no'
          };
          var browser = this.inAppBrowser.create(fixedUrl, '_system', options); // this.firebaseAnalytics.logEvent('document_viewed', { document_viewed: file.title })
        }
      }]);

      return SponsorsPage;
    }();

    SponsorsPage.ctorParameters = function () {
      return [{
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"]
      }, {
        type: _services_sponsors_service__WEBPACK_IMPORTED_MODULE_2__["SponsorsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_5__["FirebaseAnalytics"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])], SponsorsPage.prototype, "content", void 0);
    SponsorsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sponsors',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sponsors.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sponsors/sponsors.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sponsors.page.scss */
      "./src/app/sponsors/sponsors.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"], _services_sponsors_service__WEBPACK_IMPORTED_MODULE_2__["SponsorsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_5__["FirebaseAnalytics"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])], SponsorsPage);
    /***/
  }
}]);
//# sourceMappingURL=sponsors-sponsors-module-es5.js.map