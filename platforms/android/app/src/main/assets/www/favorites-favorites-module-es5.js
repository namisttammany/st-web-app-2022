function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["favorites-favorites-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/favorites/favorites.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/favorites/favorites.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFavoritesFavoritesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n      <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    <ion-title>\n      {{title | translate}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let resource of resourceList\" [routerLink]=\"['/details', resource.key]\">\n      <!-- <a [routerLink]=\"['/details', resource.key]\"> -->\n      <ion-label style=\"height:fit-content; vertical-align: 50%;\" full class=\"ion-text-wrap\">\n        <p class=\"ion-text-wrap\" ><b>{{resource.ProgramName}} </b><br> <b></b> <br>\n        {{resource.Address}} <br> {{resource.LocationCity}}, {{resource.LocationState}} {{resource.Zip}}</p>\n      </ion-label> \n    <!-- </a> -->\n    </ion-item>\n  </ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/favorites/favorites-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/favorites/favorites-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: FavoritesPageRoutingModule */

  /***/
  function srcAppFavoritesFavoritesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoritesPageRoutingModule", function () {
      return FavoritesPageRoutingModule;
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


    var _favorites_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./favorites.page */
    "./src/app/favorites/favorites.page.ts");

    var routes = [{
      path: '',
      component: _favorites_page__WEBPACK_IMPORTED_MODULE_3__["FavoritesPage"]
    }];

    var FavoritesPageRoutingModule = function FavoritesPageRoutingModule() {
      _classCallCheck(this, FavoritesPageRoutingModule);
    };

    FavoritesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FavoritesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/favorites/favorites.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/favorites/favorites.module.ts ***!
    \***********************************************/

  /*! exports provided: FavoritesPageModule */

  /***/
  function srcAppFavoritesFavoritesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoritesPageModule", function () {
      return FavoritesPageModule;
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


    var _favorites_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./favorites-routing.module */
    "./src/app/favorites/favorites-routing.module.ts");
    /* harmony import */


    var _favorites_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./favorites.page */
    "./src/app/favorites/favorites.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var FavoritesPageModule = function FavoritesPageModule() {
      _classCallCheck(this, FavoritesPageModule);
    };

    FavoritesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _favorites_routing_module__WEBPACK_IMPORTED_MODULE_5__["FavoritesPageRoutingModule"]],
      declarations: [_favorites_page__WEBPACK_IMPORTED_MODULE_6__["FavoritesPage"]]
    })], FavoritesPageModule);
    /***/
  },

  /***/
  "./src/app/favorites/favorites.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/favorites/favorites.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFavoritesFavoritesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Removes header drop shadow */\nion-header {\n  z-index: 0;\n}\n/* Styles top toolbar */\nion-toolbar {\n  color: white;\n  --background: #3064ab;\n  box-shadow: none;\n}\n/* Styles background color of every item on page content*/\nion-content {\n  --ion-background-color: linear-gradient(180deg, #3064ab 0%, #0c499c 50%, #03216e 100%) !important;\n}\n/* Styles each resources font colors*/\np {\n  text-align: left;\n  color: #fff;\n  width: 100%;\n}\nb {\n  color: #fff;\n  font-size: 12pt;\n}\n/* Styles each favorites background color and border color*/\nion-item {\n  --background: transparent !important;\n  --border-color: rgba(255,255,255,0.13);\n}\n.list-md {\n  background: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWNrcmljaGFyZC9OQU1JL2Jhc2UtZ2xvYmFsL2FwcC1iYXNlLWdsb2JhbC9zcmMvYXBwL2Zhdm9yaXRlcy9mYXZvcml0ZXMucGFnZS5zY3NzIiwic3JjL2FwcC9mYXZvcml0ZXMvZmF2b3JpdGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQywrQkFBQTtBQUNBO0VBQ0csVUFBQTtBQ0NKO0FEQ0EsdUJBQUE7QUFDQTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDRUo7QURBQSx5REFBQTtBQUNBO0VBQ0EsaUdBQUE7QUNHQTtBREFBLHFDQUFBO0FBQ0E7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDR0E7QUREQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDSUE7QUREQSwyREFBQTtBQUVBO0VBQ0ksb0NBQUE7RUFDQSxzQ0FBQTtBQ0dKO0FEREE7RUFDSSxrQ0FBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvZmF2b3JpdGVzL2Zhdm9yaXRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLyogUmVtb3ZlcyBoZWFkZXIgZHJvcCBzaGFkb3cgKi9cbiBpb24taGVhZGVyIHtcbiAgICB6LWluZGV4OiAwO1xuICB9XG4vKiBTdHlsZXMgdG9wIHRvb2xiYXIgKi9cbmlvbi10b29sYmFyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMzA2NGFiO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG4vKiBTdHlsZXMgYmFja2dyb3VuZCBjb2xvciBvZiBldmVyeSBpdGVtIG9uIHBhZ2UgY29udGVudCovXG5pb24tY29udGVudHtcbi0taW9uLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMzMDY0YWIgMCUsICMwYzQ5OWMgNTAlLCAjMDMyMTZlIDEwMCUpICFpbXBvcnRhbnQ7XG59XG4gICBcbi8qIFN0eWxlcyBlYWNoIHJlc291cmNlcyBmb250IGNvbG9ycyovXG5wIHtcbnRleHQtYWxpZ246IGxlZnQ7XG5jb2xvcjogI2ZmZjtcbndpZHRoOjEwMCU7XG59XG5iIHtcbmNvbG9yOiAjZmZmO1xuZm9udC1zaXplOiAxMnB0O1xufVxuICAgIFxuLyogU3R5bGVzIGVhY2ggZmF2b3JpdGVzIGJhY2tncm91bmQgY29sb3IgYW5kIGJvcmRlciBjb2xvciovXG5cbmlvbi1pdGVtIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4xMyk7XG59XG4ubGlzdC1tZCB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbiAiLCIvKiBSZW1vdmVzIGhlYWRlciBkcm9wIHNoYWRvdyAqL1xuaW9uLWhlYWRlciB7XG4gIHotaW5kZXg6IDA7XG59XG5cbi8qIFN0eWxlcyB0b3AgdG9vbGJhciAqL1xuaW9uLXRvb2xiYXIge1xuICBjb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogIzMwNjRhYjtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLyogU3R5bGVzIGJhY2tncm91bmQgY29sb3Igb2YgZXZlcnkgaXRlbSBvbiBwYWdlIGNvbnRlbnQqL1xuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMzA2NGFiIDAlLCAjMGM0OTljIDUwJSwgIzAzMjE2ZSAxMDAlKSAhaW1wb3J0YW50O1xufVxuXG4vKiBTdHlsZXMgZWFjaCByZXNvdXJjZXMgZm9udCBjb2xvcnMqL1xucCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcbn1cblxuYiB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEycHQ7XG59XG5cbi8qIFN0eWxlcyBlYWNoIGZhdm9yaXRlcyBiYWNrZ3JvdW5kIGNvbG9yIGFuZCBib3JkZXIgY29sb3IqL1xuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMTMpO1xufVxuXG4ubGlzdC1tZCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/favorites/favorites.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/favorites/favorites.page.ts ***!
    \*********************************************/

  /*! exports provided: FavoritesPage */

  /***/
  function srcAppFavoritesFavoritesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoritesPage", function () {
      return FavoritesPage;
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


    var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase/database */
    "./node_modules/firebase/database/dist/index.esm.js");
    /* harmony import */


    var _services_favorites_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/favorites-list.service */
    "./src/app/services/favorites-list.service.ts");
    /* harmony import */


    var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/add/operator/map */
    "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
    /* harmony import */


    var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/add/operator/toPromise */
    "./node_modules/rxjs-compat/_esm2015/add/operator/toPromise.js");
    /* harmony import */


    var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js"); // import { Content } from '@ionic/angular';


    var FavoritesPage = /*#__PURE__*/function () {
      function FavoritesPage(favoriteProvider, modalCtrl, zone, _translate) {
        var _this = this;

        _classCallCheck(this, FavoritesPage);

        this.favoriteProvider = favoriteProvider;
        this.modalCtrl = modalCtrl;
        this.zone = zone;
        this._translate = _translate;
        this.shareAllString = '';
        this.selectItems = 0;
        this.isChecked = false;
        this.selectedResources = [];
        this.resourceList = [];
        this.shareSelectedString = '';
        this.selectItems = 0;
        this.selectedResources = [];
        this.favoriteProvider.getAllFavoriteResources().then(function (data) {
          _this.resourceList = data;
          console.log(_this.resourceList);
        });
        console.log(this.resourceList.length);
        this.selectItems = 0;
        this.selectedResources = [];
      }

      _createClass(FavoritesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.title = 'page.favorites';
        }
      }, {
        key: "updateSelected",
        value: function updateSelected(event, resource) {
          console.log(event.checked);

          if (event.checked) {
            console.log("not found in selected, adding");
            this.selectItems = this.selectItems + 1;
            this.selectedResources.push(resource);
          }

          if (!event.checked) {
            var index = this.selectedResources.indexOf(resource);
            this.selectItems = this.selectItems - 1;
            this.selectedResources.splice(index, 1);
          }

          console.log(this.selectedResources);
        }
      }, {
        key: "shareAll",
        value: function shareAll() {
          var _this2 = this;

          this.shareAllString = '';
          this.resourceList.forEach(function (value, key, index) {
            var name = value.ProgramName;
            var phone = value.TelephoneNumber1;
            var website = value.Website;
            var email = value.EmailAddress;
            _this2.shareAllString = _this2.shareAllString + '\n' + name + '\n' + phone + '\n' + website + '\n' + email + '\n';
            console.log(_this2.shareAllString);
          });
          this.shareAllString = this.shareAllString + '\n' + "This information is provided by _______" + '\n';
          var data = {
            message: this.shareAllString
          }; // var modalPage = this.modalCtrl.create('ShareModalPage', data, { cssClass: 'test-modal' });
          // modalPage.present();
        }
      }, {
        key: "shareSelected",
        value: function shareSelected() {
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
          this.shareSelectedString = this.shareSelectedString + '\n' + "This information is provided by _______" + '\n';
          var data = {
            message: this.shareSelectedString
          }; // var modalPage = this.modalCtrl.create('ShareModalPage', data, { cssClass: 'test-modal' });
          // modalPage.present();         
        }
      }]);

      return FavoritesPage;
    }();

    FavoritesPage.ctorParameters = function () {
      return [{
        type: _services_favorites_list_service__WEBPACK_IMPORTED_MODULE_3__["FavoritesListService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
      }];
    };

    FavoritesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-favorites',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./favorites.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/favorites/favorites.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./favorites.page.scss */
      "./src/app/favorites/favorites.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_favorites_list_service__WEBPACK_IMPORTED_MODULE_3__["FavoritesListService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])], FavoritesPage);
    /***/
  }
}]);
//# sourceMappingURL=favorites-favorites-module-es5.js.map