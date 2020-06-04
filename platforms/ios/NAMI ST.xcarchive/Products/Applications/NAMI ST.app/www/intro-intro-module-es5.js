function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["intro-intro-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/intro/intro.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/intro/intro.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppIntroIntroPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-slides pager=\"true\" [options]=\"slideOpts\">\n  <ion-slide>\n    <h1>Slide 1</h1>\n  </ion-slide>\n  <ion-slide>\n    <h1>Slide 2</h1>\n  </ion-slide>\n  <ion-slide>\n    <h1>Slide 3</h1>\n  </ion-slide>\n</ion-slides>";
    /***/
  },

  /***/
  "./src/app/intro/intro-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/intro/intro-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: IntroPageRoutingModule */

  /***/
  function srcAppIntroIntroRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntroPageRoutingModule", function () {
      return IntroPageRoutingModule;
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


    var _intro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./intro.page */
    "./src/app/intro/intro.page.ts");

    var routes = [{
      path: '',
      component: _intro_page__WEBPACK_IMPORTED_MODULE_3__["IntroPage"]
    }];

    var IntroPageRoutingModule = function IntroPageRoutingModule() {
      _classCallCheck(this, IntroPageRoutingModule);
    };

    IntroPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], IntroPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/intro/intro.module.ts":
  /*!***************************************!*\
    !*** ./src/app/intro/intro.module.ts ***!
    \***************************************/

  /*! exports provided: IntroPageModule */

  /***/
  function srcAppIntroIntroModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntroPageModule", function () {
      return IntroPageModule;
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


    var _intro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./intro-routing.module */
    "./src/app/intro/intro-routing.module.ts");
    /* harmony import */


    var _intro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./intro.page */
    "./src/app/intro/intro.page.ts");

    var IntroPageModule = function IntroPageModule() {
      _classCallCheck(this, IntroPageModule);
    };

    IntroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _intro_routing_module__WEBPACK_IMPORTED_MODULE_5__["IntroPageRoutingModule"]],
      declarations: [_intro_page__WEBPACK_IMPORTED_MODULE_6__["IntroPage"]]
    })], IntroPageModule);
    /***/
  },

  /***/
  "./src/app/intro/intro.page.scss":
  /*!***************************************!*\
    !*** ./src/app/intro/intro.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppIntroIntroPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludHJvL2ludHJvLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/intro/intro.page.ts":
  /*!*************************************!*\
    !*** ./src/app/intro/intro.page.ts ***!
    \*************************************/

  /*! exports provided: IntroPage */

  /***/
  function srcAppIntroIntroPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntroPage", function () {
      return IntroPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var IntroPage =
    /*#__PURE__*/
    function () {
      function IntroPage() {
        _classCallCheck(this, IntroPage);

        this.slideOpts = {
          initialSlide: 1,
          speed: 400
        };
      }

      _createClass(IntroPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return IntroPage;
    }();

    IntroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-intro',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./intro.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/intro/intro.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./intro.page.scss */
      "./src/app/intro/intro.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], IntroPage);
    /***/
  }
}]);
//# sourceMappingURL=intro-intro-module-es5.js.map