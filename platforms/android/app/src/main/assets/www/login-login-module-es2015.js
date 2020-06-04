(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/@ionic-native/sign-in-with-apple/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ionic-native/sign-in-with-apple/index.js ***!
  \****************************************************************/
/*! exports provided: ASAuthorizationAppleIDRequest, SignInWithApple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASAuthorizationAppleIDRequest", function() { return ASAuthorizationAppleIDRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInWithApple", function() { return SignInWithApple; });
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ASAuthorizationAppleIDRequest = /** @class */ (function () {
    function ASAuthorizationAppleIDRequest() {
    }
    ASAuthorizationAppleIDRequest.ASAuthorizationScopeFullName = 0;
    ASAuthorizationAppleIDRequest.ASAuthorizationScopeEmail = 1;
    return ASAuthorizationAppleIDRequest;
}());

var SignInWithAppleOriginal = /** @class */ (function (_super) {
    __extends(SignInWithAppleOriginal, _super);
    function SignInWithAppleOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SignInWithAppleOriginal.prototype.signin = function (options) {
        if (options === void 0) { options = {}; }
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "signin", {}, arguments);
    };
    SignInWithAppleOriginal.pluginName = "Sign in with Apple";
    SignInWithAppleOriginal.plugin = "cordova-plugin-sign-in-with-apple";
    SignInWithAppleOriginal.pluginRef = "cordova.plugins.SignInWithApple";
    SignInWithAppleOriginal.repo = "https://github.com/twogate/cordova-plugin-sign-in-with-apple";
    SignInWithAppleOriginal.platforms = ["iOS"];
    return SignInWithAppleOriginal;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["IonicNativePlugin"]));
var SignInWithApple = new SignInWithAppleOriginal();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NpZ24taW4td2l0aC1hcHBsZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7OztJQU10RCwwREFBNEIsR0FBRyxDQUFDLENBQUM7SUFDakMsdURBQXlCLEdBQUcsQ0FBQyxDQUFDO3dDQVJoRDs7U0FNYSw2QkFBNkI7O0lBNEpMLG1DQUFpQjs7OztJQVVwRCxnQ0FBTSxhQUFDLE9BQTJDO1FBQTNDLHdCQUFBLEVBQUEsWUFBMkM7Ozs7Ozs7OzBCQTVLcEQ7RUFrS3FDLGlCQUFpQjtTQUF6QyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQHNlZSBodHRwczovL2RldmVsb3Blci5hcHBsZS5jb20vZG9jdW1lbnRhdGlvbi9hdXRoZW50aWNhdGlvbnNlcnZpY2VzL2FzYXV0aG9yaXphdGlvbmFwcGxlaWRyZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBBU0F1dGhvcml6YXRpb25BcHBsZUlEUmVxdWVzdCB7XG4gIHN0YXRpYyByZWFkb25seSBBU0F1dGhvcml6YXRpb25TY29wZUZ1bGxOYW1lID0gMDtcbiAgc3RhdGljIHJlYWRvbmx5IEFTQXV0aG9yaXphdGlvblNjb3BlRW1haWwgPSAxO1xuXG4gIHJlcXVlc3RlZFNjb3Blcz86IG51bWJlcltdO1xufVxuXG4vKipcbiAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuYXBwbGUuY29tL2RvY3VtZW50YXRpb24vZm91bmRhdGlvbi9uc3BlcnNvbm5hbWVjb21wb25lbnRzLzE0MTIxOTMtcGhvbmV0aWNyZXByZXNlbnRhdGlvblxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5TUGVyc29uTmFtZUNvbXBvbmVudHMge1xuICAvKipcbiAgICogVGhlIHBvcnRpb24gb2YgYSBuYW1l4oCZcyBmdWxsIGZvcm0gb2YgYWRkcmVzcyB0aGF0IHByZWNlZGVzIHRoZSBuYW1lIGl0c2VsZiAoZm9yIGV4YW1wbGUsIFwiRHIuLFwiIFwiTXIuLFwiIFwiTXMuXCIpXG4gICAqL1xuICBuYW1lUHJlZml4Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBOYW1lIGJlc3Rvd2VkIHVwb24gYW4gaW5kaXZpZHVhbCB0byBkaWZmZXJlbnRpYXRlIHRoZW0gZnJvbSBvdGhlciBtZW1iZXJzIG9mIGEgZ3JvdXAgdGhhdCBzaGFyZSBhIGZhbWlseSBuYW1lIChmb3IgZXhhbXBsZSwgXCJKb2huYXRoYW5cIilcbiAgICovXG4gIGdpdmVuTmFtZT86IHN0cmluZztcblxuICAvKipcbiAgICogU2Vjb25kYXJ5IG5hbWUgYmVzdG93ZWQgdXBvbiBhbiBpbmRpdmlkdWFsIHRvIGRpZmZlcmVudGlhdGUgdGhlbSBmcm9tIG90aGVycyB0aGF0IGhhdmUgdGhlIHNhbWUgZ2l2ZW4gbmFtZSAoZm9yIGV4YW1wbGUsIFwiTWFwbGVcIilcbiAgICovXG4gIG1pZGRsZU5hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE5hbWUgYmVzdG93ZWQgdXBvbiBhbiBpbmRpdmlkdWFsIHRvIGRlbm90ZSBtZW1iZXJzaGlwIGluIGEgZ3JvdXAgb3IgZmFtaWx5LiAoZm9yIGV4YW1wbGUsIFwiQXBwbGVzZWVkXCIpXG4gICAqL1xuICBmYW1pbHlOYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgcG9ydGlvbiBvZiBhIG5hbWXigJlzIGZ1bGwgZm9ybSBvZiBhZGRyZXNzIHRoYXQgZm9sbG93cyB0aGUgbmFtZSBpdHNlbGYgKGZvciBleGFtcGxlLCBcIkVzcS4sXCIgXCJKci4sXCIgXCJQaC5ELlwiKVxuICAgKi9cbiAgbmFtZVN1ZmZpeD86IHN0cmluZztcblxuICAvKipcbiAgICogTmFtZSBzdWJzdGl0dXRlZCBmb3IgdGhlIHB1cnBvc2VzIG9mIGZhbWlsaWFyaXR5IChmb3IgZXhhbXBsZSwgXCJKb2hubnlcIilcbiAgICovXG4gIG5pY2tuYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgcGhvbmV0aWMgcmVwcmVzZW50YXRpb24gbmFtZSBjb21wb25lbnRzIG9mIHRoZSByZWNlaXZlclxuICAgKi9cbiAgcGhvbmV0aWNSZXByZXNlbnRhdGlvbj86IE5TUGVyc29uTmFtZUNvbXBvbmVudHM7XG59XG5cbi8qKlxuICogQHNlZSBodHRwczovL2RldmVsb3Blci5hcHBsZS5jb20vZG9jdW1lbnRhdGlvbi9hdXRoZW50aWNhdGlvbnNlcnZpY2VzL2FzYXV0aG9yaXphdGlvbmFwcGxlaWRjcmVkZW50aWFsXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbGVTaWduSW5SZXNwb25zZSB7XG4gIC8qKlxuICAgKiBUaGUgdXNlcuKAmXMgZW1haWwgYWRkcmVzcyBpLmUuIGFiY0Bwcml2YXRlcmVsYXkuYXBwbGVpZC5jb21cbiAgICovXG4gIGVtYWlsPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBbiBhcmJpdHJhcnkgc3RyaW5nIHRoYXQgeW91ciBhcHAgcHJvdmlkZWQgdG8gdGhlIHJlcXVlc3QgdGhhdCBnZW5lcmF0ZWQgdGhlIGNyZWRlbnRpYWxcbiAgICovXG4gIHN0YXRlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBIEpTT04gV2ViIFRva2VuIChKV1QpIHRoYXQgc2VjdXJlbHkgY29tbXVuaWNhdGVzIGluZm9ybWF0aW9uIGFib3V0IHRoZSB1c2VyIHRvIHlvdXIgYXBwXG4gICAqL1xuICBpZGVudGl0eVRva2VuOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEEgc2hvcnQtbGl2ZWQgdG9rZW4gdXNlZCBieSB5b3VyIGFwcCBmb3IgcHJvb2Ygb2YgYXV0aG9yaXphdGlvbiB3aGVuIGludGVyYWN0aW5nIHdpdGggdGhlIGFwcCdzIHNlcnZlciBjb3VudGVycGFydFxuICAgKi9cbiAgYXV0aG9yaXphdGlvbkNvZGU6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHVzZXIncyBuYW1lXG4gICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuYXBwbGUuY29tL2RvY3VtZW50YXRpb24vZm91bmRhdGlvbi9uc3BlcnNvbm5hbWVjb21wb25lbnRzP2xhbmd1YWdlPW9iamNcbiAgICovXG4gIGZ1bGxOYW1lPzogTlNQZXJzb25OYW1lQ29tcG9uZW50cztcblxuICAvKipcbiAgICogQW4gaWRlbnRpZmllciBhc3NvY2lhdGVkIHdpdGggdGhlIGF1dGhlbnRpY2F0ZWQgdXNlclxuICAgKi9cbiAgdXNlcj86IHN0cmluZztcbn1cblxuLyoqXG4gKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmFwcGxlLmNvbS9kb2N1bWVudGF0aW9uL2ZvdW5kYXRpb24vbnNlcnJvclxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5TRXJyb3Ige1xuICAvKipcbiAgICogVGhlIGVycm9yIGNvZGVcbiAgICovXG4gIGNvZGU/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEEgc3RyaW5nIGNvbnRhaW5pbmcgdGhlIGxvY2FsaXplZCBkZXNjcmlwdGlvbiBvZiB0aGUgZXJyb3JcbiAgICovXG4gIGxvY2FsaXplZERlc2NyaXB0aW9uPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBIHN0cmluZyBjb250YWluaW5nIHRoZSBsb2NhbGl6ZWQgZXhwbGFuYXRpb24gb2YgdGhlIHJlYXNvbiBmb3IgdGhlIGVycm9yXG4gICAqL1xuICBsb2NhbGl6ZWRGYWlsdXJlUmVhc29uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcGxlU2lnbkluRXJyb3JSZXNwb25zZSBleHRlbmRzIE5TRXJyb3Ige1xuICAvKipcbiAgICogVGhlIGVycm9yIGkuZS4gXCJBU0FVVEhPUklaQVRJT05fRVJST1JcIlxuICAgKi9cbiAgZXJyb3I/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQG5hbWUgU2lnbiBJbiBXaXRoIEFwcGxlXG4gKiBAZGVzY3JpcHRpb25cbiAqIFNpZ24gaW4gd2l0aCBBcHBsZSBtYWtlcyBpdCBlYXN5IGZvciB1c2VycyB0byBzaWduIGluIHRvIHlvdXIgYXBwcyBhbmQgd2Vic2l0ZXMgdXNpbmcgdGhlaXIgQXBwbGUgSUQuXG4gKiBJbnN0ZWFkIG9mIGZpbGxpbmcgb3V0IGZvcm1zLCB2ZXJpZnlpbmcgZW1haWwgYWRkcmVzc2VzLCBhbmQgY2hvb3NpbmcgbmV3IHBhc3N3b3JkcyxcbiAqIHRoZXkgY2FuIHVzZSBTaWduIGluIHdpdGggQXBwbGUgdG8gc2V0IHVwIGFuIGFjY291bnQgYW5kIHN0YXJ0IHVzaW5nIHlvdXIgYXBwIHJpZ2h0IGF3YXkuXG4gKiBBbGwgYWNjb3VudHMgYXJlIHByb3RlY3RlZCB3aXRoIHR3by1mYWN0b3IgYXV0aGVudGljYXRpb24gZm9yIHN1cGVyaW9yIHNlY3VyaXR5LFxuICogYW5kIEFwcGxlIHdpbGwgbm90IHRyYWNrIHVzZXJz4oCZIGFjdGl2aXR5IGluIHlvdXIgYXBwIG9yIHdlYnNpdGUuXG4gKiAqU291cmNlOiogaHR0cHM6Ly9kZXZlbG9wZXIuYXBwbGUuY29tL3NpZ24taW4td2l0aC1hcHBsZS9cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFNpZ25JbldpdGhBcHBsZSwgQXBwbGVTaWduSW5SZXNwb25zZSwgQXBwbGVTaWduSW5FcnJvclJlc3BvbnNlLCBBU0F1dGhvcml6YXRpb25BcHBsZUlEUmVxdWVzdCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc2lnbi1pbi13aXRoLWFwcGxlL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc2lnbkluV2l0aEFwcGxlOiBTaWduSW5XaXRoQXBwbGUpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiAgIHRoaXMuc2lnbkluV2l0aEFwcGxlLnNpZ25pbih7XG4gKiAgICAgcmVxdWVzdGVkU2NvcGVzOiBbXG4gKiAgICAgICBBU0F1dGhvcml6YXRpb25BcHBsZUlEUmVxdWVzdC5BU0F1dGhvcml6YXRpb25TY29wZUZ1bGxOYW1lLFxuICogICAgICAgQVNBdXRob3JpemF0aW9uQXBwbGVJRFJlcXVlc3QuQVNBdXRob3JpemF0aW9uU2NvcGVFbWFpbFxuICogICAgIF1cbiAqICAgfSlcbiAqICAgLnRoZW4oKHJlczogQXBwbGVTaWduSW5SZXNwb25zZSkgPT4ge1xuICogICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLmFwcGxlLmNvbS9kb2N1bWVudGF0aW9uL3NpZ25pbndpdGhhcHBsZXJlc3RhcGkvdmVyaWZ5aW5nX2FfdXNlclxuICogICAgIGFsZXJ0KCdTZW5kIHRva2VuIHRvIGFwcGxlIGZvciB2ZXJpZmljYXRpb246ICcgKyByZXMuaWRlbnRpdHlUb2tlbik7XG4gKiAgICAgY29uc29sZS5sb2cocmVzKTtcbiAqICAgfSlcbiAqICAgLmNhdGNoKChlcnJvcjogQXBwbGVTaWduSW5FcnJvclJlc3BvbnNlKSA9PiB7XG4gKiAgICAgYWxlcnQoZXJyb3IuY29kZSArICcgJyArIGVycm9yLmxvY2FsaXplZERlc2NyaXB0aW9uKTtcbiAqICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAqICAgfSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU2lnbiBpbiB3aXRoIEFwcGxlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tc2lnbi1pbi13aXRoLWFwcGxlJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLlNpZ25JbldpdGhBcHBsZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vdHdvZ2F0ZS9jb3Jkb3ZhLXBsdWdpbi1zaWduLWluLXdpdGgtYXBwbGUnLFxuICBwbGF0Zm9ybXM6IFsnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2lnbkluV2l0aEFwcGxlIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIC8qKlxuICAgKiBTdGFydHMgdGhlIGF1dGhvcml6YXRpb24gZmxvd3MgbmFtZWQgZHVyaW5nIGNvbnRyb2xsZXIgaW5pdGlhbGl6YXRpb25cbiAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5hcHBsZS5jb20vZG9jdW1lbnRhdGlvbi9hdXRoZW50aWNhdGlvbnNlcnZpY2VzL2FzYXV0aG9yaXphdGlvbmNvbnRyb2xsZXIvMzE1MzA0Ny1wZXJmb3JtcmVxdWVzdHNcbiAgICogQHJldHVybiB7UHJvbWlzZTxBcHBsZVNpZ25JblJlc3BvbnNlPn0gUmV0dXJucyBhIHByb21pc2Ugd2hlbiBhdXRob3JpemF0aW9uIHN1Y2NlZWRzXG4gICAqIEBwYXJhbSB7QVNBdXRob3JpemF0aW9uQXBwbGVJRFJlcXVlc3R9IG9wdGlvbnNcbiAgICogQHRocm93cyBBcHBsZVNpZ25JbkVycm9yUmVzcG9uc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2lnbmluKG9wdGlvbnM6IEFTQXV0aG9yaXphdGlvbkFwcGxlSURSZXF1ZXN0ID0ge30pOiBQcm9taXNlPEFwcGxlU2lnbkluUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxufVxuIl19

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-no-padding\">\n  <div class=\"main\">\n    <ion-card class=\"ion-no-margin\">\n      <ion-card-content>\n        <ion-row class=\"row\">\n          <div class=\"fire-logo\">\n            <img src=\"assets/img/0000000776_white.gif\" class=\"img-logo\">\n          </div>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-input class=\"ion-padding-horizontal\" clearInput type=\"email\" placeholder=\"Email\" [(ngModel)]=\"email\" class=\"input\"\n              clear-input=\"true\"></ion-input>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-input class=\"ion-padding-horizontal\" clearInput type=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\" class=\"input\"\n             clear-input=\"true\"></ion-input>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-button id=\"loginbutton\" expand=\"block\" (click)=\"login()\" color=\"undefined\">\n              <strong>Login</strong></ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-text class=\"error\" class=\"ion-text-center\">{{error}}</ion-text>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            \n            <ion-text class=\"ion-text-center\" class=\"block\">Don't have an account yet ?\n              <span class=\"bold\" routerLink=\"/register\">Sign up here</span></ion-text>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-text class=\"ion-text-center\" class=\"block bold\" routerLink=\"/resetpassword\">Forgot Password</ion-text>\n          </ion-col>\n        </ion-row>\n        <ion-row id=\"registering\">\n        <ion-text class=\"ion-text-center\" class=\"block bold\">\n          <div>\n          <p>Registering helps us improve resource offerings in your locale.</p>\n          <p>We never collect or share personal data.</p>\n          <p>Please see our <a href=\"http://namisttammany.org/privacy-policy\">privacy policy</a> for detailed information.</p>\n        </div>\n        </ion-text>\n    </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n<ion-footer lines=\"none\">\n  <ion-toolbar>\n    \n      <ion-grid>\n        <ion-row >\n          <ion-col col-12>\n            <ion-button id=\"login-apple\" (click)=\"nativeAppleAuth()\">\n              <ion-icon name=\"logo-apple\"></ion-icon><strong>Sign In With Apple</strong>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row>  \n          <ion-col col-12>\n            <ion-button id=\"login-google\" (click)=\"tryGoogleLogin()\">\n              <!-- <ion-img name=\"logo-google\"></ion-img><strong>Sign In With Google</strong> -->\n              <ion-img style=\"width: 30px\" slot=\"start\" src=\"assets/img/glogo3.png\"></ion-img><strong>Sign In With Google</strong>\n            </ion-button> \n          </ion-col> \n        </ion-row>\n        <ion-row>  \n          <ion-col col-12>\n            <ion-button id=\"login-guest\" (click)=\"createAnonymousUser()\" class=\"btn-gplus\">\n              <ion-icon name=\"briefcase\"></ion-icon><strong>Sign In Anonymously</strong>\n              </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <!-- <ion-text class=\"ion-text-center\" class=\"block\">Sign In to save favorites and flag resources. Anonymous (guest) login also available.</ion-text> -->\n    \n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"],
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main {\n  height: 100vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n@media screen and (min-width: 767px) {\n  ion-card {\n    width: 600px;\n    margin: auto;\n  }\n}\n\nion-card {\n  --background: transarent;\n  box-shadow: none;\n  -webkit-box-shadow: none;\n  overflow: hidden;\n}\n\n.input {\n  background-color: #f0f0f0;\n  border: 1px solid #d2d2d2;\n  border-radius: 9px;\n  font-size: 0.9em !important;\n}\n\n.white {\n  color: white;\n}\n\n.small {\n  font-size: 13px;\n}\n\n.small a {\n  text-decoration: unset !important;\n}\n\n/* Styles login ion-button */\n\n#loginbutton {\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(20%, #00cd67), to(#01ff80)) !important;\n  background: linear-gradient(#00cd67 20%, #01ff80 100%) !important;\n  font-size: 18px;\n}\n\n/* Styles text color */\n\n.sc-ion-card-md-h {\n  color: white;\n}\n\nion-input {\n  color: black;\n}\n\n/* Styles registration div info */\n\n#registering {\n  color: #fff;\n  margin-top: 75px;\n}\n\n/* Styles bottom buttons */\n\n#login-guest {\n  width: 100%;\n  --background: #fff !important;\n  --color: black !important;\n  text-transform: none !important;\n}\n\n#login-apple {\n  width: 100%;\n  --background: #fff !important;\n  --color: black !important;\n  text-transform: none !important;\n}\n\n#login-google {\n  width: 100%;\n  --background: #fff !important;\n  --color: black !important;\n  text-transform: none !important;\n}\n\n.glogo {\n  height: 75%;\n  margin-right: 11px;\n}\n\n/* Styles bottom icons */\n\nion-icon {\n  margin-right: 11px;\n}\n\n/* Styles ion-toolbar */\n\nion-footer {\n  --background: #03216e !important;\n}\n\nion-toolbar {\n  --background: #03216e !important;\n}\n\n.grid {\n  height: 100vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.row {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.img-logo {\n  height: auto;\n  width: 100%;\n}\n\n.fire-logo {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding-bottom: 30px;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.block {\n  display: block;\n}\n\n.error {\n  color: red;\n  text-align: center;\n  display: block;\n  font-weight: bold;\n}\n\n/* Styles top toolbar */\n\nion-toolbar {\n  color: white;\n  --background: #3064ab;\n  box-shadow: none;\n}\n\n/* Styles background color of every item on page content*/\n\nion-content {\n  --ion-background-color: linear-gradient(180deg, #3064ab 0%, #0c499c 50%, #03216e 100%) !important;\n}\n\n/* Styles searcbar*/\n\n.sc-ion-searchbar-md-h {\n  --clear-button-color: initial;\n  --cancel-button-color: var(--ion-color-step-900,#fff);\n  --color: var(--ion-color-step-850,#fff);\n  --icon-color: var(--ion-color-step-600,#fff);\n  --background: transparent !important;\n}\n\n/* Styles dropdowns*/\n\nion-item {\n  --background: transparent !important;\n  --color: #fff !important;\n  --border-color: transparent;\n}\n\n/* Styles  dropdowns bacground color*/\n\n.list-md {\n  background: transparent !important;\n}\n\n/* Styles each resources background color*/\n\nion-list {\n  --color: var(--ion-color-step-850,#fff);\n  --background: transparent !important;\n}\n\n/* color is changed via html*/\n\nion-text {\n  align-content: center;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWNrcmljaGFyZC9OQU1JL21vYmlsZS9iYXNlR0lUL2Jhc2Uvc3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0Y7O0FEQ0E7RUFDRTtJQUNFLFlBQUE7SUFDQSxZQUFBO0VDRUY7QUFDRjs7QURBQTtFQUNFLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FDRUY7O0FEQUE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQ0dGOztBRERBO0VBQ0UsWUFBQTtBQ0lGOztBRERBO0VBQ0UsZUFBQTtBQ0lGOztBREhFO0VBQ0UsaUNBQUE7QUNLSjs7QURGQSw0QkFBQTs7QUFDQTtFQUNFLDZHQUFBO0VBQUEsaUVBQUE7RUFDQSxlQUFBO0FDS0Y7O0FERkEsc0JBQUE7O0FBQ0E7RUFDRSxZQUFBO0FDS0Y7O0FESEE7RUFDRSxZQUFBO0FDTUY7O0FESEEsaUNBQUE7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNNRjs7QURKQSwwQkFBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7QUNPRjs7QURMQTtFQUNFLFdBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7QUNRRjs7QUROQTtFQUNFLFdBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7QUNTRjs7QURQQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ1VGOztBRFBBLHdCQUFBOztBQUNBO0VBQ0Esa0JBQUE7QUNVQTs7QURSQSx1QkFBQTs7QUFDQTtFQUNFLGdDQUFBO0FDV0Y7O0FEVEE7RUFDRyxnQ0FBQTtBQ1lIOztBRFZBO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNhRjs7QURYQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNjRjs7QURaQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDZUY7O0FEYkE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLG9CQUFBO0FDZ0JGOztBRGRBO0VBQ0UsaUJBQUE7QUNpQkY7O0FEZkE7RUFDRSxjQUFBO0FDa0JGOztBRGhCQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ21CRjs7QURqQkEsdUJBQUE7O0FBQ0E7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ29CQTs7QURsQkEseURBQUE7O0FBQ0E7RUFDQSxpR0FBQTtBQ3FCQTs7QURuQkEsbUJBQUE7O0FBQ0E7RUFDRSw2QkFBQTtFQUNBLHFEQUFBO0VBQ0EsdUNBQUE7RUFDQSw0Q0FBQTtFQUNBLG9DQUFBO0FDc0JGOztBRHBCQSxvQkFBQTs7QUFDQTtFQUNBLG9DQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtBQ3VCQTs7QURyQkEscUNBQUE7O0FBQ0E7RUFDQSxrQ0FBQTtBQ3dCQTs7QUR0QkEsMENBQUE7O0FBQ0E7RUFDQSx1Q0FBQTtFQUNBLG9DQUFBO0FDeUJBOztBRHRCQSw2QkFBQTs7QUFDQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtBQ3lCRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjdweCkge1xuICBpb24tY2FyZCB7XG4gICAgd2lkdGg6IDYwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufVxuaW9uLWNhcmQge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zYXJlbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5pbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxMCwgMjEwLCAyMTApO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcbn1cbi53aGl0ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNtYWxsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi8qIFN0eWxlcyBsb2dpbiBpb24tYnV0dG9uICovXG4jbG9naW5idXR0b24ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzAwY2Q2NyAyMCUsICMwMWZmODAgMTAwJSkgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4vKiBTdHlsZXMgdGV4dCBjb2xvciAqL1xuLnNjLWlvbi1jYXJkLW1kLWgge1xuICBjb2xvcjogd2hpdGU7XG59XG5pb24taW5wdXQge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi8qIFN0eWxlcyByZWdpc3RyYXRpb24gZGl2IGluZm8gKi9cbiNyZWdpc3RlcmluZyB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tdG9wOiA3NXB4O1xufVxuLyogU3R5bGVzIGJvdHRvbSBidXR0b25zICovIFxuI2xvZ2luLWd1ZXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIC0tYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xuICAtLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xufVxuI2xvZ2luLWFwcGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC0tYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xuICAtLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xufVxuI2xvZ2luLWdvb2dsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICAtLWJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbiAgLS1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbn1cbi5nbG9nbyB7XG4gIGhlaWdodDogNzUlO1xuICBtYXJnaW4tcmlnaHQ6IDExcHg7XG59XG5cbi8qIFN0eWxlcyBib3R0b20gaWNvbnMgKi9cbmlvbi1pY29uIHtcbm1hcmdpbi1yaWdodDogMTFweDtcbn1cbi8qIFN0eWxlcyBpb24tdG9vbGJhciAqLyAgXG5pb24tZm9vdGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDMyMTZlICFpbXBvcnRhbnQ7XG59XG5pb24tdG9vbGJhciB7XG4gICAtLWJhY2tncm91bmQ6ICMwMzIxNmUgIWltcG9ydGFudDtcbn1cbi5ncmlkIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uaW1nLWxvZ28ge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZpcmUtbG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cbi5ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uYmxvY2sge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLyogU3R5bGVzIHRvcCB0b29sYmFyICovXG5pb24tdG9vbGJhciB7XG5jb2xvcjogd2hpdGU7XG4tLWJhY2tncm91bmQ6ICMzMDY0YWI7XG5ib3gtc2hhZG93OiBub25lO1xufVxuLyogU3R5bGVzIGJhY2tncm91bmQgY29sb3Igb2YgZXZlcnkgaXRlbSBvbiBwYWdlIGNvbnRlbnQqL1xuaW9uLWNvbnRlbnR7XG4tLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMzA2NGFiIDAlLCAjMGM0OTljIDUwJSwgIzAzMjE2ZSAxMDAlKSAhaW1wb3J0YW50O1xufVxuLyogU3R5bGVzIHNlYXJjYmFyKi9cbi5zYy1pb24tc2VhcmNoYmFyLW1kLWgge1xuICAtLWNsZWFyLWJ1dHRvbi1jb2xvcjogaW5pdGlhbDtcbiAgLS1jYW5jZWwtYnV0dG9uLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC05MDAsI2ZmZik7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTg1MCwjZmZmKTtcbiAgLS1pY29uLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsI2ZmZik7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbi8qIFN0eWxlcyBkcm9wZG93bnMqL1xuaW9uLWl0ZW0ge1xuLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLyogU3R5bGVzICBkcm9wZG93bnMgYmFjZ3JvdW5kIGNvbG9yKi9cbi5saXN0LW1kIHtcbmJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG4vKiBTdHlsZXMgZWFjaCByZXNvdXJjZXMgYmFja2dyb3VuZCBjb2xvciovXG5pb24tbGlzdCB7XG4tLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC04NTAsI2ZmZik7XG4tLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi8qIGNvbG9yIGlzIGNoYW5nZWQgdmlhIGh0bWwqL1xuaW9uLXRleHQge1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xufSIsIi5tYWluIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2N3B4KSB7XG4gIGlvbi1jYXJkIHtcbiAgICB3aWR0aDogNjAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG59XG5pb24tY2FyZCB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNhcmVudDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDJkMmQyO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcbn1cblxuLndoaXRlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc21hbGwge1xuICBmb250LXNpemU6IDEzcHg7XG59XG4uc21hbGwgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5zZXQgIWltcG9ydGFudDtcbn1cblxuLyogU3R5bGVzIGxvZ2luIGlvbi1idXR0b24gKi9cbiNsb2dpbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDBjZDY3IDIwJSwgIzAxZmY4MCAxMDAlKSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi8qIFN0eWxlcyB0ZXh0IGNvbG9yICovXG4uc2MtaW9uLWNhcmQtbWQtaCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWlucHV0IHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4vKiBTdHlsZXMgcmVnaXN0cmF0aW9uIGRpdiBpbmZvICovXG4jcmVnaXN0ZXJpbmcge1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLXRvcDogNzVweDtcbn1cblxuLyogU3R5bGVzIGJvdHRvbSBidXR0b25zICovXG4jbG9naW4tZ3Vlc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0tY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbiNsb2dpbi1hcHBsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICAtLWJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbiAgLS1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbn1cblxuI2xvZ2luLWdvb2dsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICAtLWJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbiAgLS1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmdsb2dvIHtcbiAgaGVpZ2h0OiA3NSU7XG4gIG1hcmdpbi1yaWdodDogMTFweDtcbn1cblxuLyogU3R5bGVzIGJvdHRvbSBpY29ucyAqL1xuaW9uLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDExcHg7XG59XG5cbi8qIFN0eWxlcyBpb24tdG9vbGJhciAqL1xuaW9uLWZvb3RlciB7XG4gIC0tYmFja2dyb3VuZDogIzAzMjE2ZSAhaW1wb3J0YW50O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzAzMjE2ZSAhaW1wb3J0YW50O1xufVxuXG4uZ3JpZCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pbWctbG9nbyB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5maXJlLWxvZ28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG5cbi5ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLyogU3R5bGVzIHRvcCB0b29sYmFyICovXG5pb24tdG9vbGJhciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiAjMzA2NGFiO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4vKiBTdHlsZXMgYmFja2dyb3VuZCBjb2xvciBvZiBldmVyeSBpdGVtIG9uIHBhZ2UgY29udGVudCovXG5pb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMzMDY0YWIgMCUsICMwYzQ5OWMgNTAlLCAjMDMyMTZlIDEwMCUpICFpbXBvcnRhbnQ7XG59XG5cbi8qIFN0eWxlcyBzZWFyY2JhciovXG4uc2MtaW9uLXNlYXJjaGJhci1tZC1oIHtcbiAgLS1jbGVhci1idXR0b24tY29sb3I6IGluaXRpYWw7XG4gIC0tY2FuY2VsLWJ1dHRvbi1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtOTAwLCNmZmYpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC04NTAsI2ZmZik7XG4gIC0taWNvbi1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCNmZmYpO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi8qIFN0eWxlcyBkcm9wZG93bnMqL1xuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4vKiBTdHlsZXMgIGRyb3Bkb3ducyBiYWNncm91bmQgY29sb3IqL1xuLmxpc3QtbWQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4vKiBTdHlsZXMgZWFjaCByZXNvdXJjZXMgYmFja2dyb3VuZCBjb2xvciovXG5pb24tbGlzdCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTg1MCwjZmZmKTtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4vKiBjb2xvciBpcyBjaGFuZ2VkIHZpYSBodG1sKi9cbmlvbi10ZXh0IHtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _ionic_native_sign_in_with_apple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/sign-in-with-apple */ "./node_modules/@ionic-native/sign-in-with-apple/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_7__);









let LoginPage = class LoginPage {
    constructor(authService, fireauth, router, toastController, loadingController, alertController) {
        this.authService = authService;
        this.fireauth = fireauth;
        this.router = router;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.email = '';
        this.password = '';
        this.error = '';
        this.fireauth.auth.signOut().then(() => {
            console.log('logged out');
            // this.router.navigate(['/login']);
        });
    }
    openLoader() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Please Wait ...',
                duration: 2000
            });
            yield loading.present();
        });
    }
    closeLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.loadingController.dismiss();
        });
    }
    tryGoogleLogin() {
        this.authService.doGoogleLogin()
            .then((res) => {
            this.router.navigate(['/home']);
        });
    }
    login() {
        this.fireauth.auth.signInWithEmailAndPassword(this.email, this.password)
            .then(res => {
            if (res.user) {
                console.log(res.user);
                this.router.navigate(['/home']);
            }
        })
            .catch(err => {
            console.log(`login failed ${err}`);
            this.error = err.message;
        });
    }
    presentToast(message, show_button, position, duration) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                // showCloseButton: show_button,
                position: position,
                duration: duration
            });
            toast.present();
        });
    }
    goToHomePage(params) {
        this.router.navigate(['/home']);
    }
    ngOnInit() {
    }
    createAnonymousUser() {
        return this.fireauth.auth.signInAnonymously().then(res => {
            if (res.user) {
                console.log(res.user);
                this.router.navigate(['/home']);
            }
        })
            .catch(err => {
            console.log(`login failed ${err}`);
            this.error = err.message;
        });
        ;
    }
    // Sign in with Apple
    nativeAppleAuth() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const appleCredential = yield _ionic_native_sign_in_with_apple__WEBPACK_IMPORTED_MODULE_6__["SignInWithApple"].signin({
                    requestedScopes: [
                        _ionic_native_sign_in_with_apple__WEBPACK_IMPORTED_MODULE_6__["ASAuthorizationAppleIDRequest"].ASAuthorizationScopeFullName,
                        _ionic_native_sign_in_with_apple__WEBPACK_IMPORTED_MODULE_6__["ASAuthorizationAppleIDRequest"].ASAuthorizationScopeEmail
                    ]
                });
                const credential = new firebase_app__WEBPACK_IMPORTED_MODULE_7__["auth"].OAuthProvider('apple.com').credential(appleCredential.identityToken);
                const response = yield this.fireauth.auth.signInWithCredential(credential);
                console.log('Login successful', response);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map