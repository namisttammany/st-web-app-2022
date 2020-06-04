(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["favorites-favorites-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/favorites/favorites.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/favorites/favorites.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n      <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    <ion-title>\n      Favorites\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let resource of resourceList\" [routerLink]=\"['/details', resource.key]\">\n      <!-- <a [routerLink]=\"['/details', resource.key]\"> -->\n      <ion-label style=\"height:fit-content; vertical-align: 50%;\" full class=\"ion-text-wrap\">\n        <p class=\"ion-text-wrap\" ><b>{{resource.ProgramName}} </b><br> <b></b> <br>\n        {{resource.Address}} <br> {{resource.LocationCity}}, {{resource.LocationState}} {{resource.Zip}}</p>\n      </ion-label> \n    <!-- </a> -->\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/favorites/favorites-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/favorites/favorites-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: FavoritesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesPageRoutingModule", function() { return FavoritesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _favorites_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./favorites.page */ "./src/app/favorites/favorites.page.ts");




const routes = [
    {
        path: '',
        component: _favorites_page__WEBPACK_IMPORTED_MODULE_3__["FavoritesPage"]
    }
];
let FavoritesPageRoutingModule = class FavoritesPageRoutingModule {
};
FavoritesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FavoritesPageRoutingModule);



/***/ }),

/***/ "./src/app/favorites/favorites.module.ts":
/*!***********************************************!*\
  !*** ./src/app/favorites/favorites.module.ts ***!
  \***********************************************/
/*! exports provided: FavoritesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesPageModule", function() { return FavoritesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _favorites_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./favorites-routing.module */ "./src/app/favorites/favorites-routing.module.ts");
/* harmony import */ var _favorites_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./favorites.page */ "./src/app/favorites/favorites.page.ts");







let FavoritesPageModule = class FavoritesPageModule {
};
FavoritesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _favorites_routing_module__WEBPACK_IMPORTED_MODULE_5__["FavoritesPageRoutingModule"]
        ],
        declarations: [_favorites_page__WEBPACK_IMPORTED_MODULE_6__["FavoritesPage"]]
    })
], FavoritesPageModule);



/***/ }),

/***/ "./src/app/favorites/favorites.page.scss":
/*!***********************************************!*\
  !*** ./src/app/favorites/favorites.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Removes header drop shadow */\nion-header {\n  z-index: 0;\n}\n/* Styles top toolbar */\nion-toolbar {\n  color: white;\n  --background: #3064ab;\n  box-shadow: none;\n}\n/* Styles background color of every item on page content*/\nion-content {\n  --ion-background-color: linear-gradient(180deg, #3064ab 0%, #0c499c 50%, #03216e 100%) !important;\n}\n/* Styles each resources font colors*/\np {\n  text-align: left;\n  color: #fff;\n  width: 100%;\n}\nb {\n  color: #fff;\n  font-size: 12pt;\n}\n/* Styles each favorites background color and border color*/\nion-item {\n  --background: transparent !important;\n  --border-color: rgba(255,255,255,0.13);\n}\n.list-md {\n  background: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWNrcmljaGFyZC9OQU1JL21vYmlsZS9iYXNlR0lUL2Jhc2Uvc3JjL2FwcC9mYXZvcml0ZXMvZmF2b3JpdGVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZmF2b3JpdGVzL2Zhdm9yaXRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUMsK0JBQUE7QUFDQTtFQUNHLFVBQUE7QUNDSjtBRENBLHVCQUFBO0FBQ0E7RUFDSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0VKO0FEQUEseURBQUE7QUFDQTtFQUNBLGlHQUFBO0FDR0E7QURBQSxxQ0FBQTtBQUNBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0dBO0FEREE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0lBO0FEREEsMkRBQUE7QUFFQTtFQUNJLG9DQUFBO0VBQ0Esc0NBQUE7QUNHSjtBRERBO0VBQ0ksa0NBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL2Zhdm9yaXRlcy9mYXZvcml0ZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC8qIFJlbW92ZXMgaGVhZGVyIGRyb3Agc2hhZG93ICovXG4gaW9uLWhlYWRlciB7XG4gICAgei1pbmRleDogMDtcbiAgfVxuLyogU3R5bGVzIHRvcCB0b29sYmFyICovXG5pb24tdG9vbGJhciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIC0tYmFja2dyb3VuZDogIzMwNjRhYjtcbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuLyogU3R5bGVzIGJhY2tncm91bmQgY29sb3Igb2YgZXZlcnkgaXRlbSBvbiBwYWdlIGNvbnRlbnQqL1xuaW9uLWNvbnRlbnR7XG4tLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMzA2NGFiIDAlLCAjMGM0OTljIDUwJSwgIzAzMjE2ZSAxMDAlKSAhaW1wb3J0YW50O1xufVxuICAgXG4vKiBTdHlsZXMgZWFjaCByZXNvdXJjZXMgZm9udCBjb2xvcnMqL1xucCB7XG50ZXh0LWFsaWduOiBsZWZ0O1xuY29sb3I6ICNmZmY7XG53aWR0aDoxMDAlO1xufVxuYiB7XG5jb2xvcjogI2ZmZjtcbmZvbnQtc2l6ZTogMTJwdDtcbn1cbiAgICBcbi8qIFN0eWxlcyBlYWNoIGZhdm9yaXRlcyBiYWNrZ3JvdW5kIGNvbG9yIGFuZCBib3JkZXIgY29sb3IqL1xuXG5pb24taXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMTMpO1xufVxuLmxpc3QtbWQge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG4gIiwiLyogUmVtb3ZlcyBoZWFkZXIgZHJvcCBzaGFkb3cgKi9cbmlvbi1oZWFkZXIge1xuICB6LWluZGV4OiAwO1xufVxuXG4vKiBTdHlsZXMgdG9wIHRvb2xiYXIgKi9cbmlvbi10b29sYmFyIHtcbiAgY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6ICMzMDY0YWI7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi8qIFN0eWxlcyBiYWNrZ3JvdW5kIGNvbG9yIG9mIGV2ZXJ5IGl0ZW0gb24gcGFnZSBjb250ZW50Ki9cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzMwNjRhYiAwJSwgIzBjNDk5YyA1MCUsICMwMzIxNmUgMTAwJSkgIWltcG9ydGFudDtcbn1cblxuLyogU3R5bGVzIGVhY2ggcmVzb3VyY2VzIGZvbnQgY29sb3JzKi9cbnAge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmIge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxMnB0O1xufVxuXG4vKiBTdHlsZXMgZWFjaCBmYXZvcml0ZXMgYmFja2dyb3VuZCBjb2xvciBhbmQgYm9yZGVyIGNvbG9yKi9cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjEzKTtcbn1cblxuLmxpc3QtbWQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/favorites/favorites.page.ts":
/*!*********************************************!*\
  !*** ./src/app/favorites/favorites.page.ts ***!
  \*********************************************/
/*! exports provided: FavoritesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesPage", function() { return FavoritesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");
/* harmony import */ var _services_favorites_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/favorites-list.service */ "./src/app/services/favorites-list.service.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm2015/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");






// import { Content } from '@ionic/angular';

let FavoritesPage = class FavoritesPage {
    constructor(favoriteProvider, modalCtrl, zone) {
        this.favoriteProvider = favoriteProvider;
        this.modalCtrl = modalCtrl;
        this.zone = zone;
        this.shareAllString = '';
        this.selectItems = 0;
        this.isChecked = false;
        this.selectedResources = [];
        this.resourceList = [];
        this.shareSelectedString = '';
        this.selectItems = 0;
        this.selectedResources = [];
        this.favoriteProvider.getAllFavoriteResources().then((data) => {
            this.resourceList = data;
            console.log(this.resourceList);
        });
        console.log(this.resourceList.length);
        this.selectItems = 0;
        this.selectedResources = [];
    }
    ngOnInit() {
    }
    updateSelected(event, resource) {
        console.log(event.checked);
        if (event.checked) {
            console.log("not found in selected, adding");
            this.selectItems = this.selectItems + 1;
            this.selectedResources.push(resource);
        }
        if (!event.checked) {
            let index = this.selectedResources.indexOf(resource);
            this.selectItems = this.selectItems - 1;
            this.selectedResources.splice(index, 1);
        }
        console.log(this.selectedResources);
    }
    shareAll() {
        this.shareAllString = '';
        this.resourceList.forEach((value, key, index) => {
            let name = value.ProgramName;
            let phone = value.TelephoneNumber1;
            let website = value.Website;
            let email = value.EmailAddress;
            this.shareAllString = this.shareAllString + '\n' + name + '\n' + phone + '\n' + website + '\n' + email + '\n';
            console.log(this.shareAllString);
        });
        this.shareAllString = this.shareAllString + '\n' + "This information is provided by _______" + '\n';
        var data = { message: this.shareAllString };
        // var modalPage = this.modalCtrl.create('ShareModalPage', data, { cssClass: 'test-modal' });
        // modalPage.present();
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
            this.shareSelectedString = this.shareSelectedString + '\n' + name + '\n' + phone + '\n' + website + '\n' + email + '\n';
            console.log(this.shareSelectedString);
        }
        console.log('exited for loop');
        this.shareSelectedString = this.shareSelectedString + '\n' + "This information is provided by _______" + '\n';
        var data = { message: this.shareSelectedString };
        // var modalPage = this.modalCtrl.create('ShareModalPage', data, { cssClass: 'test-modal' });
        // modalPage.present();         
    }
};
FavoritesPage.ctorParameters = () => [
    { type: _services_favorites_list_service__WEBPACK_IMPORTED_MODULE_3__["FavoritesListService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
FavoritesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favorites',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./favorites.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/favorites/favorites.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./favorites.page.scss */ "./src/app/favorites/favorites.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_favorites_list_service__WEBPACK_IMPORTED_MODULE_3__["FavoritesListService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], FavoritesPage);



/***/ })

}]);
//# sourceMappingURL=favorites-favorites-module-es2015.js.map