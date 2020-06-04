function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4], {
  /***/
  "./node_modules/@ionic/core/dist/esm/cubic-bezier-2812fda3.js":
  /*!********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/cubic-bezier-2812fda3.js ***!
    \********************************************************************/

  /*! exports provided: P, g */

  /***/
  function node_modulesIonicCoreDistEsmCubicBezier2812fda3Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "P", function () {
      return Point;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getTimeGivenProgression;
    });
    /**
     * Based on:
     * https://stackoverflow.com/questions/7348009/y-coordinate-for-a-given-x-cubic-bezier
     * https://math.stackexchange.com/questions/26846/is-there-an-explicit-form-for-cubic-b%C3%A9zier-curves
     * TODO: Reduce rounding error
     */


    var Point = function Point(x, y) {
      _classCallCheck(this, Point);

      this.x = x;
      this.y = y;
    };
    /**
     * Given a cubic-bezier curve, get the x value (time) given
     * the y value (progression).
     * Ex: cubic-bezier(0.32, 0.72, 0, 1);
     * P0: (0, 0)
     * P1: (0.32, 0.72)
     * P2: (0, 1)
     * P3: (1, 1)
     *
     * If you give a cubic bezier curve that never reaches the
     * provided progression, this function will return NaN.
     */


    var getTimeGivenProgression = function getTimeGivenProgression(p0, p1, p2, p3, progression) {
      var tValues = solveCubicBezier(p0.y, p1.y, p2.y, p3.y, progression);
      return solveCubicParametricEquation(p0.x, p1.x, p2.x, p3.x, tValues[0]); // TODO: Add better strategy for dealing with multiple solutions
    };
    /**
     * Solve a cubic equation in one dimension (time)
     */


    var solveCubicParametricEquation = function solveCubicParametricEquation(p0, p1, p2, p3, t) {
      var partA = 3 * p1 * Math.pow(t - 1, 2);
      var partB = -3 * p2 * t + 3 * p2 + p3 * t;
      var partC = p0 * Math.pow(t - 1, 3);
      return t * (partA + t * partB) - partC;
    };
    /**
     * Find the `t` value for a cubic bezier using Cardano's formula
     */


    var solveCubicBezier = function solveCubicBezier(p0, p1, p2, p3, refPoint) {
      p0 -= refPoint;
      p1 -= refPoint;
      p2 -= refPoint;
      p3 -= refPoint;
      var roots = solveCubicEquation(p3 - 3 * p2 + 3 * p1 - p0, 3 * p2 - 6 * p1 + 3 * p0, 3 * p1 - 3 * p0, p0);
      return roots.filter(function (root) {
        return root >= 0 && root <= 1;
      });
    };

    var solveQuadraticEquation = function solveQuadraticEquation(a, b, c) {
      var discriminant = b * b - 4 * a * c;

      if (discriminant < 0) {
        return [];
      } else {
        return [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)];
      }
    };

    var solveCubicEquation = function solveCubicEquation(a, b, c, d) {
      if (a === 0) {
        return solveQuadraticEquation(b, c, d);
      }

      b /= a;
      c /= a;
      d /= a;
      var p = (3 * c - b * b) / 3;
      var q = (2 * b * b * b - 9 * b * c + 27 * d) / 27;

      if (p === 0) {
        return [Math.pow(-q, 1 / 3)];
      } else if (q === 0) {
        return [Math.sqrt(-p), -Math.sqrt(-p)];
      }

      var discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);

      if (discriminant === 0) {
        return [Math.pow(q / 2, 1 / 2) - b / 3];
      } else if (discriminant > 0) {
        return [Math.pow(-(q / 2) + Math.sqrt(discriminant), 1 / 3) - Math.pow(q / 2 + Math.sqrt(discriminant), 1 / 3) - b / 3];
      }

      var r = Math.sqrt(Math.pow(-(p / 3), 3));
      var phi = Math.acos(-(q / (2 * Math.sqrt(Math.pow(-(p / 3), 3)))));
      var s = 2 * Math.pow(r, 1 / 3);
      return [s * Math.cos(phi / 3) - b / 3, s * Math.cos((phi + 2 * Math.PI) / 3) - b / 3, s * Math.cos((phi + 4 * Math.PI) / 3) - b / 3];
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/index-6826f2f6.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/index-6826f2f6.js ***!
    \*************************************************************/

  /*! exports provided: d, g, l, s, t */

  /***/
  function node_modulesIonicCoreDistEsmIndex6826f2f6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return deepReady;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getIonPageElement;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "l", function () {
      return lifecycle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s", function () {
      return setPageHidden;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "t", function () {
      return transition;
    });
    /* harmony import */


    var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./core-ca0488fc.js */
    "./node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
    /* harmony import */


    var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./constants-3c3e1099.js */
    "./node_modules/@ionic/core/dist/esm/constants-3c3e1099.js");

    var iosTransitionAnimation = function iosTransitionAnimation() {
      return Promise.all(
      /*! import() | ios-transition-071bd421-js */
      [__webpack_require__.e(0), __webpack_require__.e("ios-transition-071bd421-js")]).then(__webpack_require__.bind(null,
      /*! ./ios.transition-071bd421.js */
      "./node_modules/@ionic/core/dist/esm/ios.transition-071bd421.js"));
    };

    var mdTransitionAnimation = function mdTransitionAnimation() {
      return Promise.all(
      /*! import() | md-transition-15a81b08-js */
      [__webpack_require__.e(0), __webpack_require__.e("md-transition-15a81b08-js")]).then(__webpack_require__.bind(null,
      /*! ./md.transition-15a81b08.js */
      "./node_modules/@ionic/core/dist/esm/md.transition-15a81b08.js"));
    };

    var transition = function transition(opts) {
      return new Promise(function (resolve, reject) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["w"])(function () {
          beforeTransition(opts);
          runTransition(opts).then(function (result) {
            if (result.animation) {
              result.animation.destroy();
            }

            afterTransition(opts);
            resolve(result);
          }, function (error) {
            afterTransition(opts);
            reject(error);
          });
        });
      });
    };

    var beforeTransition = function beforeTransition(opts) {
      var enteringEl = opts.enteringEl;
      var leavingEl = opts.leavingEl;
      setZIndex(enteringEl, leavingEl, opts.direction);

      if (opts.showGoBack) {
        enteringEl.classList.add('can-go-back');
      } else {
        enteringEl.classList.remove('can-go-back');
      }

      setPageHidden(enteringEl, false);

      if (leavingEl) {
        setPageHidden(leavingEl, false);
      }
    };

    var runTransition = function runTransition(opts) {
      var animationBuilder, ani;
      return regeneratorRuntime.async(function runTransition$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(getAnimationBuilder(opts));

            case 2:
              animationBuilder = _context.sent;
              ani = animationBuilder ? animation(animationBuilder, opts) : noAnimation(opts); // fast path for no animation

              return _context.abrupt("return", ani);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      });
    };

    var afterTransition = function afterTransition(opts) {
      var enteringEl = opts.enteringEl;
      var leavingEl = opts.leavingEl;
      enteringEl.classList.remove('ion-page-invisible');

      if (leavingEl !== undefined) {
        leavingEl.classList.remove('ion-page-invisible');
      }
    };

    var getAnimationBuilder = function getAnimationBuilder(opts) {
      var getAnimation;
      return regeneratorRuntime.async(function getAnimationBuilder$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(!opts.leavingEl || !opts.animated || opts.duration === 0)) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return", undefined);

            case 2:
              if (!opts.animationBuilder) {
                _context2.next = 4;
                break;
              }

              return _context2.abrupt("return", opts.animationBuilder);

            case 4:
              if (!(opts.mode === 'ios')) {
                _context2.next = 10;
                break;
              }

              _context2.next = 7;
              return regeneratorRuntime.awrap(iosTransitionAnimation());

            case 7:
              _context2.t0 = _context2.sent.iosTransitionAnimation;
              _context2.next = 13;
              break;

            case 10:
              _context2.next = 12;
              return regeneratorRuntime.awrap(mdTransitionAnimation());

            case 12:
              _context2.t0 = _context2.sent.mdTransitionAnimation;

            case 13:
              getAnimation = _context2.t0;
              return _context2.abrupt("return", getAnimation);

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      });
    };

    var animation = function animation(animationBuilder, opts) {
      var trans, mod, didComplete;
      return regeneratorRuntime.async(function animation$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return regeneratorRuntime.awrap(waitForReady(opts, true));

            case 2:
              _context3.prev = 2;
              _context3.next = 5;
              return regeneratorRuntime.awrap(__webpack_require__.e(
              /*! import() | index-69c37885-js */
              "index-69c37885-js").then(__webpack_require__.bind(null,
              /*! ./index-69c37885.js */
              "./node_modules/@ionic/core/dist/esm/index-69c37885.js")));

            case 5:
              mod = _context3.sent;
              _context3.next = 8;
              return regeneratorRuntime.awrap(mod.create(animationBuilder, opts.baseEl, opts));

            case 8:
              trans = _context3.sent;
              _context3.next = 14;
              break;

            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](2);
              trans = animationBuilder(opts.baseEl, opts);

            case 14:
              fireWillEvents(opts.enteringEl, opts.leavingEl);
              _context3.next = 17;
              return regeneratorRuntime.awrap(playTransition(trans, opts));

            case 17:
              didComplete = _context3.sent;

              if (opts.progressCallback) {
                opts.progressCallback(undefined);
              }

              if (didComplete) {
                fireDidEvents(opts.enteringEl, opts.leavingEl);
              }

              return _context3.abrupt("return", {
                hasCompleted: didComplete,
                animation: trans
              });

            case 21:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[2, 11]]);
    };

    var noAnimation = function noAnimation(opts) {
      var enteringEl, leavingEl;
      return regeneratorRuntime.async(function noAnimation$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              enteringEl = opts.enteringEl;
              leavingEl = opts.leavingEl;
              _context4.next = 4;
              return regeneratorRuntime.awrap(waitForReady(opts, false));

            case 4:
              fireWillEvents(enteringEl, leavingEl);
              fireDidEvents(enteringEl, leavingEl);
              return _context4.abrupt("return", {
                hasCompleted: true
              });

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      });
    };

    var waitForReady = function waitForReady(opts, defaultDeep) {
      var deep, promises;
      return regeneratorRuntime.async(function waitForReady$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              deep = opts.deepWait !== undefined ? opts.deepWait : defaultDeep;
              promises = deep ? [deepReady(opts.enteringEl), deepReady(opts.leavingEl)] : [shallowReady(opts.enteringEl), shallowReady(opts.leavingEl)];
              _context5.next = 4;
              return regeneratorRuntime.awrap(Promise.all(promises));

            case 4:
              _context5.next = 6;
              return regeneratorRuntime.awrap(notifyViewReady(opts.viewIsReady, opts.enteringEl));

            case 6:
            case "end":
              return _context5.stop();
          }
        }
      });
    };

    var notifyViewReady = function notifyViewReady(viewIsReady, enteringEl) {
      return regeneratorRuntime.async(function notifyViewReady$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (!viewIsReady) {
                _context6.next = 3;
                break;
              }

              _context6.next = 3;
              return regeneratorRuntime.awrap(viewIsReady(enteringEl));

            case 3:
            case "end":
              return _context6.stop();
          }
        }
      });
    };

    var playTransition = function playTransition(trans, opts) {
      var progressCallback = opts.progressCallback; // TODO: Remove AnimationBuilder

      var promise = new Promise(function (resolve) {
        trans.onFinish(function (currentStep) {
          if (typeof currentStep === 'number') {
            resolve(currentStep === 1);
          } else if (trans.hasCompleted !== undefined) {
            resolve(trans.hasCompleted);
          }
        });
      }); // cool, let's do this, start the transition

      if (progressCallback) {
        // this is a swipe to go back, just get the transition progress ready
        // kick off the swipe animation start
        trans.progressStart(true);
        progressCallback(trans);
      } else {
        // only the top level transition should actually start "play"
        // kick it off and let it play through
        // ******** DOM WRITE ****************
        trans.play();
      } // create a callback for when the animation is done


      return promise;
    };

    var fireWillEvents = function fireWillEvents(enteringEl, leavingEl) {
      lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
      lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["L"]);
    };

    var fireDidEvents = function fireDidEvents(enteringEl, leavingEl) {
      lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
      lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["c"]);
    };

    var lifecycle = function lifecycle(el, eventName) {
      if (el) {
        var ev = new CustomEvent(eventName, {
          bubbles: false,
          cancelable: false
        });
        el.dispatchEvent(ev);
      }
    };

    var shallowReady = function shallowReady(el) {
      if (el && el.componentOnReady) {
        return el.componentOnReady();
      }

      return Promise.resolve();
    };

    var deepReady = function deepReady(el) {
      var element, stencilEl;
      return regeneratorRuntime.async(function deepReady$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              element = el;

              if (!element) {
                _context7.next = 10;
                break;
              }

              if (!(element.componentOnReady != null)) {
                _context7.next = 8;
                break;
              }

              _context7.next = 5;
              return regeneratorRuntime.awrap(element.componentOnReady());

            case 5:
              stencilEl = _context7.sent;

              if (!(stencilEl != null)) {
                _context7.next = 8;
                break;
              }

              return _context7.abrupt("return");

            case 8:
              _context7.next = 10;
              return regeneratorRuntime.awrap(Promise.all(Array.from(element.children).map(deepReady)));

            case 10:
            case "end":
              return _context7.stop();
          }
        }
      });
    };

    var setPageHidden = function setPageHidden(el, hidden) {
      if (hidden) {
        el.setAttribute('aria-hidden', 'true');
        el.classList.add('ion-page-hidden');
      } else {
        el.hidden = false;
        el.removeAttribute('aria-hidden');
        el.classList.remove('ion-page-hidden');
      }
    };

    var setZIndex = function setZIndex(enteringEl, leavingEl, direction) {
      if (enteringEl !== undefined) {
        enteringEl.style.zIndex = direction === 'back' ? '99' : '101';
      }

      if (leavingEl !== undefined) {
        leavingEl.style.zIndex = '100';
      }
    };

    var getIonPageElement = function getIonPageElement(element) {
      if (element.classList.contains('ion-page')) {
        return element;
      }

      var ionPage = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');

      if (ionPage) {
        return ionPage;
      } // idk, return the original element so at least something animates and we don't have a null pointer


      return element;
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/ion-nav_5.entry.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-nav_5.entry.js ***!
    \**************************************************************/

  /*! exports provided: ion_nav, ion_nav_link, ion_nav_pop, ion_nav_push, ion_nav_set_root */

  /***/
  function node_modulesIonicCoreDistEsmIonNav_5EntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_nav", function () {
      return Nav;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_nav_link", function () {
      return NavLink;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_nav_pop", function () {
      return NavPop;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_nav_push", function () {
      return NavPush;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_nav_set_root", function () {
      return NavSetRoot;
    });
    /* harmony import */


    var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./core-ca0488fc.js */
    "./node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
    /* harmony import */


    var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./config-3c7f3790.js */
    "./node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
    /* harmony import */


    var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./helpers-46f4a262.js */
    "./node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");
    /* harmony import */


    var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./constants-3c3e1099.js */
    "./node_modules/@ionic/core/dist/esm/constants-3c3e1099.js");
    /* harmony import */


    var _framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./framework-delegate-c2e2e1f4.js */
    "./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js");
    /* harmony import */


    var _index_6826f2f6_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./index-6826f2f6.js */
    "./node_modules/@ionic/core/dist/esm/index-6826f2f6.js");
    /* harmony import */


    var _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./cubic-bezier-2812fda3.js */
    "./node_modules/@ionic/core/dist/esm/cubic-bezier-2812fda3.js");

    var VIEW_STATE_NEW = 1;
    var VIEW_STATE_ATTACHED = 2;
    var VIEW_STATE_DESTROYED = 3;

    var ViewController =
    /*#__PURE__*/
    function () {
      function ViewController(component, params) {
        _classCallCheck(this, ViewController);

        this.component = component;
        this.params = params;
        this.state = VIEW_STATE_NEW;
      }

      _createClass(ViewController, [{
        key: "init",
        value: function init(container) {
          var component;
          return regeneratorRuntime.async(function init$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  this.state = VIEW_STATE_ATTACHED;

                  if (this.element) {
                    _context8.next = 6;
                    break;
                  }

                  component = this.component;
                  _context8.next = 5;
                  return regeneratorRuntime.awrap(Object(_framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_4__["a"])(this.delegate, container, component, ['ion-page', 'ion-page-invisible'], this.params));

                case 5:
                  this.element = _context8.sent;

                case 6:
                case "end":
                  return _context8.stop();
              }
            }
          }, null, this);
        }
        /**
         * DOM WRITE
         */

      }, {
        key: "_destroy",
        value: function _destroy() {
          Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this.state !== VIEW_STATE_DESTROYED, 'view state must be ATTACHED');
          var element = this.element;

          if (element) {
            if (this.delegate) {
              this.delegate.removeViewFromDom(element.parentElement, element);
            } else {
              element.remove();
            }
          }

          this.nav = undefined;
          this.state = VIEW_STATE_DESTROYED;
        }
      }]);

      return ViewController;
    }();

    var matches = function matches(view, id, params) {
      if (!view) {
        return false;
      }

      if (view.component !== id) {
        return false;
      }

      var currentParams = view.params;

      if (currentParams === params) {
        return true;
      }

      if (!currentParams && !params) {
        return true;
      }

      if (!currentParams || !params) {
        return false;
      }

      var keysA = Object.keys(currentParams);
      var keysB = Object.keys(params);

      if (keysA.length !== keysB.length) {
        return false;
      } // Test for A's keys different from B.


      for (var _i = 0, _keysA = keysA; _i < _keysA.length; _i++) {
        var key = _keysA[_i];

        if (currentParams[key] !== params[key]) {
          return false;
        }
      }

      return true;
    };

    var convertToView = function convertToView(page, params) {
      if (!page) {
        return null;
      }

      if (page instanceof ViewController) {
        return page;
      }

      return new ViewController(page, params);
    };

    var convertToViews = function convertToViews(pages) {
      return pages.map(function (page) {
        if (page instanceof ViewController) {
          return page;
        }

        if ('page' in page) {
          return convertToView(page.page, page.params);
        }

        return convertToView(page, undefined);
      }).filter(function (v) {
        return v !== null;
      });
    };

    var Nav =
    /*#__PURE__*/
    function () {
      function Nav(hostRef) {
        _classCallCheck(this, Nav);

        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.transInstr = [];
        this.animationEnabled = true;
        this.useRouter = false;
        this.isTransitioning = false;
        this.destroyed = false;
        this.views = [];
        /**
         * If `true`, the nav should animate the transition of components.
         */

        this.animated = true;
        this.ionNavWillLoad = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionNavWillLoad", 7);
        this.ionNavWillChange = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionNavWillChange", 3);
        this.ionNavDidChange = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionNavDidChange", 3);
      }

      _createClass(Nav, [{
        key: "swipeGestureChanged",
        value: function swipeGestureChanged() {
          if (this.gesture) {
            this.gesture.setDisabled(this.swipeGesture !== true);
          }
        }
      }, {
        key: "rootChanged",
        value: function rootChanged() {
          if (this.root !== undefined) {
            if (!this.useRouter) {
              this.setRoot(this.root, this.rootParams);
            }
          }
        }
      }, {
        key: "componentWillLoad",
        value: function componentWillLoad() {
          this.useRouter = !!document.querySelector('ion-router') && !this.el.closest('[no-router]');

          if (this.swipeGesture === undefined) {
            var mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
            this.swipeGesture = _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].getBoolean('swipeBackEnabled', mode === 'ios');
          }

          this.ionNavWillLoad.emit();
        }
      }, {
        key: "componentDidLoad",
        value: function componentDidLoad() {
          return regeneratorRuntime.async(function componentDidLoad$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  this.rootChanged();
                  _context9.next = 3;
                  return regeneratorRuntime.awrap(Promise.all(
                  /*! import() | swipe-back-35ad8e37-js */
                  [__webpack_require__.e(2), __webpack_require__.e("swipe-back-35ad8e37-js")]).then(__webpack_require__.bind(null,
                  /*! ./swipe-back-35ad8e37.js */
                  "./node_modules/@ionic/core/dist/esm/swipe-back-35ad8e37.js")));

                case 3:
                  _context9.t0 = this.el;
                  _context9.t1 = this.canStart.bind(this);
                  _context9.t2 = this.onStart.bind(this);
                  _context9.t3 = this.onMove.bind(this);
                  _context9.t4 = this.onEnd.bind(this);
                  this.gesture = _context9.sent.createSwipeBackGesture(_context9.t0, _context9.t1, _context9.t2, _context9.t3, _context9.t4);
                  this.swipeGestureChanged();

                case 10:
                case "end":
                  return _context9.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "componentDidUnload",
        value: function componentDidUnload() {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.views[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var view = _step.value;
              Object(_index_6826f2f6_js__WEBPACK_IMPORTED_MODULE_5__["l"])(view.element, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_3__["d"]);

              view._destroy();
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
          } // release swipe back gesture and transition


          this.transInstr.length = this.views.length = 0;
          this.destroyed = true;
        }
        /**
         * Push a new component onto the current navigation stack. Pass any additional
         * information along as an object. This additional information is accessible
         * through NavParams.
         *
         * @param component The component to push onto the navigation stack.
         * @param componentProps Any properties of the component.
         * @param opts The navigation options.
         * @param done The transition complete function.
         */

      }, {
        key: "push",
        value: function push(component, componentProps, opts, done) {
          return this.queueTrns({
            insertStart: -1,
            insertViews: [{
              page: component,
              params: componentProps
            }],
            opts: opts
          }, done);
        }
        /**
         * Inserts a component into the navigation stack at the specified index.
         * This is useful to add a component at any point in the navigation stack.
         *
         * @param insertIndex The index to insert the component at in the stack.
         * @param component The component to insert into the navigation stack.
         * @param componentProps Any properties of the component.
         * @param opts The navigation options.
         * @param done The transition complete function.
         */

      }, {
        key: "insert",
        value: function insert(insertIndex, component, componentProps, opts, done) {
          return this.queueTrns({
            insertStart: insertIndex,
            insertViews: [{
              page: component,
              params: componentProps
            }],
            opts: opts
          }, done);
        }
        /**
         * Inserts an array of components into the navigation stack at the specified index.
         * The last component in the array will become instantiated as a view, and animate
         * in to become the active view.
         *
         * @param insertIndex The index to insert the components at in the stack.
         * @param insertComponents The components to insert into the navigation stack.
         * @param opts The navigation options.
         * @param done The transition complete function.
         */

      }, {
        key: "insertPages",
        value: function insertPages(insertIndex, insertComponents, opts, done) {
          return this.queueTrns({
            insertStart: insertIndex,
            insertViews: insertComponents,
            opts: opts
          }, done);
        }
        /**
         * Pop a component off of the navigation stack. Navigates back from the current
         * component.
         *
         * @param opts The navigation options.
         * @param done The transition complete function.
         */

      }, {
        key: "pop",
        value: function pop(opts, done) {
          return this.queueTrns({
            removeStart: -1,
            removeCount: 1,
            opts: opts
          }, done);
        }
        /**
         * Pop to a specific index in the navigation stack.
         *
         * @param indexOrViewCtrl The index or view controller to pop to.
         * @param opts The navigation options.
         * @param done The transition complete function.
         */

      }, {
        key: "popTo",
        value: function popTo(indexOrViewCtrl, opts, done) {
          var tiConfig = {
            removeStart: -1,
            removeCount: -1,
            opts: opts
          };

          if (typeof indexOrViewCtrl === 'object' && indexOrViewCtrl.component) {
            tiConfig.removeView = indexOrViewCtrl;
            tiConfig.removeStart = 1;
          } else if (typeof indexOrViewCtrl === 'number') {
            tiConfig.removeStart = indexOrViewCtrl + 1;
          }

          return this.queueTrns(tiConfig, done);
        }
        /**
         * Navigate back to the root of the stack, no matter how far back that is.
         *
         * @param opts The navigation options.
         * @param done The transition complete function.
         */

      }, {
        key: "popToRoot",
        value: function popToRoot(opts, done) {
          return this.queueTrns({
            removeStart: 1,
            removeCount: -1,
            opts: opts
          }, done);
        }
        /**
         * Removes a component from the navigation stack at the specified index.
         *
         * @param startIndex The number to begin removal at.
         * @param removeCount The number of components to remove.
         * @param opts The navigation options.
         * @param done The transition complete function.
         */

      }, {
        key: "removeIndex",
        value: function removeIndex(startIndex) {
          var removeCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          var opts = arguments.length > 2 ? arguments[2] : undefined;
          var done = arguments.length > 3 ? arguments[3] : undefined;
          return this.queueTrns({
            removeStart: startIndex,
            removeCount: removeCount,
            opts: opts
          }, done);
        }
        /**
         * Set the root for the current navigation stack to a component.
         *
         * @param component The component to set as the root of the navigation stack.
         * @param componentProps Any properties of the component.
         * @param opts The navigation options.
         * @param done The transition complete function.
         */

      }, {
        key: "setRoot",
        value: function setRoot(component, componentProps, opts, done) {
          return this.setPages([{
            page: component,
            params: componentProps
          }], opts, done);
        }
        /**
         * Set the views of the current navigation stack and navigate to the last view.
         * By default animations are disabled, but they can be enabled by passing options
         * to the navigation controller. Navigation parameters can also be passed to the
         * individual pages in the array.
         *
         * @param views The list of views to set as the navigation stack.
         * @param opts The navigation options.
         * @param done The transition complete function.
         */

      }, {
        key: "setPages",
        value: function setPages(views, opts, done) {
          if (opts == null) {
            opts = {};
          } // if animation wasn't set to true then default it to NOT animate


          if (opts.animated !== true) {
            opts.animated = false;
          }

          return this.queueTrns({
            insertStart: 0,
            insertViews: views,
            removeStart: 0,
            removeCount: -1,
            opts: opts
          }, done);
        }
        /** @internal */

      }, {
        key: "setRouteId",
        value: function setRouteId(id, params, direction) {
          var active = this.getActiveSync();

          if (matches(active, id, params)) {
            return Promise.resolve({
              changed: false,
              element: active.element
            });
          }

          var resolve;
          var promise = new Promise(function (r) {
            return resolve = r;
          });
          var finish;
          var commonOpts = {
            updateURL: false,
            viewIsReady: function viewIsReady(enteringEl) {
              var mark;
              var p = new Promise(function (r) {
                return mark = r;
              });
              resolve({
                changed: true,
                element: enteringEl,
                markVisible: function markVisible() {
                  return regeneratorRuntime.async(function markVisible$(_context10) {
                    while (1) {
                      switch (_context10.prev = _context10.next) {
                        case 0:
                          mark();
                          _context10.next = 3;
                          return regeneratorRuntime.awrap(finish);

                        case 3:
                        case "end":
                          return _context10.stop();
                      }
                    }
                  });
                }
              });
              return p;
            }
          };

          if (direction === 'root') {
            finish = this.setRoot(id, params, commonOpts);
          } else {
            var viewController = this.views.find(function (v) {
              return matches(v, id, params);
            });

            if (viewController) {
              finish = this.popTo(viewController, Object.assign(Object.assign({}, commonOpts), {
                direction: 'back'
              }));
            } else if (direction === 'forward') {
              finish = this.push(id, params, commonOpts);
            } else if (direction === 'back') {
              finish = this.setRoot(id, params, Object.assign(Object.assign({}, commonOpts), {
                direction: 'back',
                animated: true
              }));
            }
          }

          return promise;
        }
        /** @internal */

      }, {
        key: "getRouteId",
        value: function getRouteId() {
          var active;
          return regeneratorRuntime.async(function getRouteId$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  active = this.getActiveSync();
                  return _context11.abrupt("return", active ? {
                    id: active.element.tagName,
                    params: active.params,
                    element: active.element
                  } : undefined);

                case 2:
                case "end":
                  return _context11.stop();
              }
            }
          }, null, this);
        }
        /**
         * Get the active view.
         */

      }, {
        key: "getActive",
        value: function getActive() {
          return Promise.resolve(this.getActiveSync());
        }
        /**
         * Get the view at the specified index.
         *
         * @param index The index of the view.
         */

      }, {
        key: "getByIndex",
        value: function getByIndex(index) {
          return Promise.resolve(this.views[index]);
        }
        /**
         * Returns `true` if the current view can go back.
         *
         * @param view The view to check.
         */

      }, {
        key: "canGoBack",
        value: function canGoBack(view) {
          return Promise.resolve(this.canGoBackSync(view));
        }
        /**
         * Get the previous view.
         *
         * @param view The view to get.
         */

      }, {
        key: "getPrevious",
        value: function getPrevious(view) {
          return Promise.resolve(this.getPreviousSync(view));
        }
      }, {
        key: "getLength",
        value: function getLength() {
          return this.views.length;
        }
      }, {
        key: "getActiveSync",
        value: function getActiveSync() {
          return this.views[this.views.length - 1];
        }
      }, {
        key: "canGoBackSync",
        value: function canGoBackSync() {
          var view = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getActiveSync();
          return !!(view && this.getPreviousSync(view));
        }
      }, {
        key: "getPreviousSync",
        value: function getPreviousSync() {
          var view = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getActiveSync();

          if (!view) {
            return undefined;
          }

          var views = this.views;
          var index = views.indexOf(view);
          return index > 0 ? views[index - 1] : undefined;
        } // _queueTrns() adds a navigation stack change to the queue and schedules it to run:
        // 1. _nextTrns(): consumes the next transition in the queue
        // 2. _viewInit(): initializes enteringView if required
        // 3. _viewTest(): ensures canLeave/canEnter Returns `true`, so the operation can continue
        // 4. _postViewInit(): add/remove the views from the navigation stack
        // 5. _transitionInit(): initializes the visual transition if required and schedules it to run
        // 6. _viewAttachToDOM(): attaches the enteringView to the DOM
        // 7. _transitionStart(): called once the transition actually starts, it initializes the Animation underneath.
        // 8. _transitionFinish(): called once the transition finishes
        // 9. _cleanup(): syncs the navigation internal state with the DOM. For example it removes the pages from the DOM or hides/show them.

      }, {
        key: "queueTrns",
        value: function queueTrns(ti, done) {
          if (this.isTransitioning && ti.opts != null && ti.opts.skipIfBusy) {
            return Promise.resolve(false);
          }

          var promise = new Promise(function (resolve, reject) {
            ti.resolve = resolve;
            ti.reject = reject;
          });
          ti.done = done; // Normalize empty

          if (ti.insertViews && ti.insertViews.length === 0) {
            ti.insertViews = undefined;
          } // Enqueue transition instruction


          this.transInstr.push(ti); // if there isn't a transition already happening
          // then this will kick off this transition

          this.nextTrns();
          return promise;
        }
      }, {
        key: "success",
        value: function success(result, ti) {
          if (this.destroyed) {
            this.fireError('nav controller was destroyed', ti);
            return;
          }

          if (ti.done) {
            ti.done(result.hasCompleted, result.requiresTransition, result.enteringView, result.leavingView, result.direction);
          }

          ti.resolve(result.hasCompleted);

          if (ti.opts.updateURL !== false && this.useRouter) {
            var router = document.querySelector('ion-router');

            if (router) {
              var direction = result.direction === 'back' ? 'back' : 'forward';
              router.navChanged(direction);
            }
          }
        }
      }, {
        key: "failed",
        value: function failed(rejectReason, ti) {
          if (this.destroyed) {
            this.fireError('nav controller was destroyed', ti);
            return;
          }

          this.transInstr.length = 0;
          this.fireError(rejectReason, ti);
        }
      }, {
        key: "fireError",
        value: function fireError(rejectReason, ti) {
          if (ti.done) {
            ti.done(false, false, rejectReason);
          }

          if (ti.reject && !this.destroyed) {
            ti.reject(rejectReason);
          } else {
            ti.resolve(false);
          }
        }
      }, {
        key: "nextTrns",
        value: function nextTrns() {
          // this is the framework's bread 'n butta function
          // only one transition is allowed at any given time
          if (this.isTransitioning) {
            return false;
          } // there is no transition happening right now
          // get the next instruction


          var ti = this.transInstr.shift();

          if (!ti) {
            return false;
          }

          this.runTransition(ti);
          return true;
        }
      }, {
        key: "runTransition",
        value: function runTransition(ti) {
          var leavingView, enteringView, requiresTransition, result;
          return regeneratorRuntime.async(function runTransition$(_context12) {
            while (1) {
              switch (_context12.prev = _context12.next) {
                case 0:
                  _context12.prev = 0;
                  // set that this nav is actively transitioning
                  this.ionNavWillChange.emit();
                  this.isTransitioning = true;
                  this.prepareTI(ti);
                  leavingView = this.getActiveSync();
                  enteringView = this.getEnteringView(ti, leavingView);

                  if (!(!leavingView && !enteringView)) {
                    _context12.next = 8;
                    break;
                  }

                  throw new Error('no views in the stack to be removed');

                case 8:
                  if (!(enteringView && enteringView.state === VIEW_STATE_NEW)) {
                    _context12.next = 11;
                    break;
                  }

                  _context12.next = 11;
                  return regeneratorRuntime.awrap(enteringView.init(this.el));

                case 11:
                  this.postViewInit(enteringView, leavingView, ti); // Needs transition?

                  requiresTransition = (ti.enteringRequiresTransition || ti.leavingRequiresTransition) && enteringView !== leavingView;

                  if (!requiresTransition) {
                    _context12.next = 19;
                    break;
                  }

                  _context12.next = 16;
                  return regeneratorRuntime.awrap(this.transition(enteringView, leavingView, ti));

                case 16:
                  _context12.t0 = _context12.sent;
                  _context12.next = 20;
                  break;

                case 19:
                  _context12.t0 = {
                    // transition is not required, so we are already done!
                    // they're inserting/removing the views somewhere in the middle or
                    // beginning, so visually nothing needs to animate/transition
                    // resolve immediately because there's no animation that's happening
                    hasCompleted: true,
                    requiresTransition: false
                  };

                case 20:
                  result = _context12.t0;
                  this.success(result, ti);
                  this.ionNavDidChange.emit();
                  _context12.next = 28;
                  break;

                case 25:
                  _context12.prev = 25;
                  _context12.t1 = _context12["catch"](0);
                  this.failed(_context12.t1, ti);

                case 28:
                  this.isTransitioning = false;
                  this.nextTrns();

                case 30:
                case "end":
                  return _context12.stop();
              }
            }
          }, null, this, [[0, 25]]);
        }
      }, {
        key: "prepareTI",
        value: function prepareTI(ti) {
          var viewsLength = this.views.length;
          ti.opts = ti.opts || {};

          if (ti.opts.delegate === undefined) {
            ti.opts.delegate = this.delegate;
          }

          if (ti.removeView !== undefined) {
            Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(ti.removeStart !== undefined, 'removeView needs removeStart');
            Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(ti.removeCount !== undefined, 'removeView needs removeCount');
            var index = this.views.indexOf(ti.removeView);

            if (index < 0) {
              throw new Error('removeView was not found');
            }

            ti.removeStart += index;
          }

          if (ti.removeStart !== undefined) {
            if (ti.removeStart < 0) {
              ti.removeStart = viewsLength - 1;
            }

            if (ti.removeCount < 0) {
              ti.removeCount = viewsLength - ti.removeStart;
            }

            ti.leavingRequiresTransition = ti.removeCount > 0 && ti.removeStart + ti.removeCount === viewsLength;
          }

          if (ti.insertViews) {
            // allow -1 to be passed in to auto push it on the end
            // and clean up the index if it's larger then the size of the stack
            if (ti.insertStart < 0 || ti.insertStart > viewsLength) {
              ti.insertStart = viewsLength;
            }

            ti.enteringRequiresTransition = ti.insertStart === viewsLength;
          }

          var insertViews = ti.insertViews;

          if (!insertViews) {
            return;
          }

          Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(insertViews.length > 0, 'length can not be zero');
          var viewControllers = convertToViews(insertViews);

          if (viewControllers.length === 0) {
            throw new Error('invalid views to insert');
          } // Check all the inserted view are correct


          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = viewControllers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var view = _step2.value;
              view.delegate = ti.opts.delegate;
              var nav = view.nav;

              if (nav && nav !== this) {
                throw new Error('inserted view was already inserted');
              }

              if (view.state === VIEW_STATE_DESTROYED) {
                throw new Error('inserted view was already destroyed');
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          ti.insertViews = viewControllers;
        }
      }, {
        key: "getEnteringView",
        value: function getEnteringView(ti, leavingView) {
          var insertViews = ti.insertViews;

          if (insertViews !== undefined) {
            // grab the very last view of the views to be inserted
            // and initialize it as the new entering view
            return insertViews[insertViews.length - 1];
          }

          var removeStart = ti.removeStart;

          if (removeStart !== undefined) {
            var views = this.views;
            var removeEnd = removeStart + ti.removeCount;

            for (var i = views.length - 1; i >= 0; i--) {
              var view = views[i];

              if ((i < removeStart || i >= removeEnd) && view !== leavingView) {
                return view;
              }
            }
          }

          return undefined;
        }
      }, {
        key: "postViewInit",
        value: function postViewInit(enteringView, leavingView, ti) {
          Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(leavingView || enteringView, 'Both leavingView and enteringView are null');
          Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(ti.resolve, 'resolve must be valid');
          Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(ti.reject, 'reject must be valid');
          var opts = ti.opts;
          var insertViews = ti.insertViews;
          var removeStart = ti.removeStart;
          var removeCount = ti.removeCount;
          var destroyQueue; // there are views to remove

          if (removeStart !== undefined && removeCount !== undefined) {
            Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(removeStart >= 0, 'removeStart can not be negative');
            Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(removeCount >= 0, 'removeCount can not be negative');
            destroyQueue = [];

            for (var i = 0; i < removeCount; i++) {
              var view = this.views[i + removeStart];

              if (view && view !== enteringView && view !== leavingView) {
                destroyQueue.push(view);
              }
            } // default the direction to "back"


            opts.direction = opts.direction || 'back';
          }

          var finalBalance = this.views.length + (insertViews !== undefined ? insertViews.length : 0) - (removeCount !== undefined ? removeCount : 0);
          Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(finalBalance >= 0, 'final balance can not be negative');

          if (finalBalance === 0) {
            console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.", this, this.el);
            throw new Error('navigation stack needs at least one root page');
          } // At this point the transition can not be rejected, any throw should be an error
          // there are views to insert


          if (insertViews) {
            // add the views to the
            var insertIndex = ti.insertStart;
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = insertViews[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var _view = _step3.value;
                this.insertViewAt(_view, insertIndex);
                insertIndex++;
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                  _iterator3.return();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }

            if (ti.enteringRequiresTransition) {
              // default to forward if not already set
              opts.direction = opts.direction || 'forward';
            }
          } // if the views to be removed are in the beginning or middle
          // and there is not a view that needs to visually transition out
          // then just destroy them and don't transition anything
          // batch all of lifecycles together
          // let's make sure, callbacks are zoned


          if (destroyQueue && destroyQueue.length > 0) {
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
              for (var _iterator4 = destroyQueue[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var _view2 = _step4.value;
                Object(_index_6826f2f6_js__WEBPACK_IMPORTED_MODULE_5__["l"])(_view2.element, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_3__["b"]);
                Object(_index_6826f2f6_js__WEBPACK_IMPORTED_MODULE_5__["l"])(_view2.element, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_3__["c"]);
                Object(_index_6826f2f6_js__WEBPACK_IMPORTED_MODULE_5__["l"])(_view2.element, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_3__["d"]);
              } // once all lifecycle events has been delivered, we can safely detroy the views

            } catch (err) {
              _didIteratorError4 = true;
              _iteratorError4 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                  _iterator4.return();
                }
              } finally {
                if (_didIteratorError4) {
                  throw _iteratorError4;
                }
              }
            }

            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
              for (var _iterator5 = destroyQueue[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                var _view3 = _step5.value;
                this.destroyView(_view3);
              }
            } catch (err) {
              _didIteratorError5 = true;
              _iteratorError5 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                  _iterator5.return();
                }
              } finally {
                if (_didIteratorError5) {
                  throw _iteratorError5;
                }
              }
            }
          }
        }
      }, {
        key: "transition",
        value: function transition(enteringView, leavingView, ti) {
          var _this = this;

          var opts, progressCallback, mode, enteringEl, leavingEl, animationOpts, _ref, hasCompleted;

          return regeneratorRuntime.async(function transition$(_context13) {
            while (1) {
              switch (_context13.prev = _context13.next) {
                case 0:
                  // we should animate (duration > 0) if the pushed page is not the first one (startup)
                  // or if it is a portal (modal, actionsheet, etc.)
                  opts = ti.opts;
                  progressCallback = opts.progressAnimation ? function (ani) {
                    return _this.sbAni = ani;
                  } : undefined;
                  mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
                  enteringEl = enteringView.element;
                  leavingEl = leavingView && leavingView.element;
                  animationOpts = Object.assign({
                    mode: mode,
                    showGoBack: this.canGoBackSync(enteringView),
                    baseEl: this.el,
                    animationBuilder: this.animation || opts.animationBuilder || _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('navAnimation'),
                    progressCallback: progressCallback,
                    animated: this.animated && _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].getBoolean('animated', true),
                    enteringEl: enteringEl,
                    leavingEl: leavingEl
                  }, opts);
                  _context13.next = 8;
                  return regeneratorRuntime.awrap(Object(_index_6826f2f6_js__WEBPACK_IMPORTED_MODULE_5__["t"])(animationOpts));

                case 8:
                  _ref = _context13.sent;
                  hasCompleted = _ref.hasCompleted;
                  return _context13.abrupt("return", this.transitionFinish(hasCompleted, enteringView, leavingView, opts));

                case 11:
                case "end":
                  return _context13.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "transitionFinish",
        value: function transitionFinish(hasCompleted, enteringView, leavingView, opts) {
          var cleanupView = hasCompleted ? enteringView : leavingView;

          if (cleanupView) {
            this.cleanup(cleanupView);
          }

          return {
            hasCompleted: hasCompleted,
            requiresTransition: true,
            enteringView: enteringView,
            leavingView: leavingView,
            direction: opts.direction
          };
        }
      }, {
        key: "insertViewAt",
        value: function insertViewAt(view, index) {
          var views = this.views;
          var existingIndex = views.indexOf(view);

          if (existingIndex > -1) {
            // this view is already in the stack!!
            // move it to its new location
            Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(view.nav === this, 'view is not part of the nav');
            views.splice(index, 0, views.splice(existingIndex, 1)[0]);
          } else {
            Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(!view.nav, 'nav is used'); // this is a new view to add to the stack
            // create the new entering view

            view.nav = this; // insert the entering view into the correct index in the stack

            views.splice(index, 0, view);
          }
        }
      }, {
        key: "removeView",
        value: function removeView(view) {
          Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(view.state === VIEW_STATE_ATTACHED || view.state === VIEW_STATE_DESTROYED, 'view state should be loaded or destroyed');
          var views = this.views;
          var index = views.indexOf(view);
          Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(index > -1, 'view must be part of the stack');

          if (index >= 0) {
            views.splice(index, 1);
          }
        }
      }, {
        key: "destroyView",
        value: function destroyView(view) {
          view._destroy();

          this.removeView(view);
        }
        /**
         * DOM WRITE
         */

      }, {
        key: "cleanup",
        value: function cleanup(activeView) {
          // ok, cleanup time!! Destroy all of the views that are
          // INACTIVE and come after the active view
          // only do this if the views exist, though
          if (this.destroyed) {
            return;
          }

          var views = this.views;
          var activeViewIndex = views.indexOf(activeView);

          for (var i = views.length - 1; i >= 0; i--) {
            var view = views[i];
            var element = view.element;

            if (i > activeViewIndex) {
              // this view comes after the active view
              // let's unload it
              Object(_index_6826f2f6_js__WEBPACK_IMPORTED_MODULE_5__["l"])(element, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_3__["d"]);
              this.destroyView(view);
            } else if (i < activeViewIndex) {
              // this view comes before the active view
              // and it is not a portal then ensure it is hidden
              Object(_index_6826f2f6_js__WEBPACK_IMPORTED_MODULE_5__["s"])(element, true);
            }
          }
        }
      }, {
        key: "canStart",
        value: function canStart() {
          return !!this.swipeGesture && !this.isTransitioning && this.transInstr.length === 0 && this.animationEnabled && this.canGoBackSync();
        }
      }, {
        key: "onStart",
        value: function onStart() {
          this.queueTrns({
            removeStart: -1,
            removeCount: 1,
            opts: {
              direction: 'back',
              progressAnimation: true
            }
          }, undefined);
        }
      }, {
        key: "onMove",
        value: function onMove(stepValue) {
          if (this.sbAni) {
            this.sbAni.progressStep(stepValue);
          }
        }
      }, {
        key: "onEnd",
        value: function onEnd(shouldComplete, stepValue, dur) {
          var _this2 = this;

          if (this.sbAni) {
            this.animationEnabled = false;
            this.sbAni.onFinish(function () {
              _this2.animationEnabled = true;
            }, {
              oneTimeCallback: true
            }); // Account for rounding errors in JS

            var newStepValue = shouldComplete ? -0.001 : 0.001;
            /**
             * Animation will be reversed here, so need to
             * reverse the easing curve as well
             *
             * Additionally, we need to account for the time relative
             * to the new easing curve, as `stepValue` is going to be given
             * in terms of a linear curve.
             */

            if (!shouldComplete) {
              this.sbAni.easing('cubic-bezier(1, 0, 0.68, 0.28)');
              newStepValue += Object(_cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_6__["g"])(new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_6__["P"](0, 0), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_6__["P"](1, 0), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_6__["P"](0.68, 0.28), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_6__["P"](1, 1), stepValue);
            } else {
              newStepValue += Object(_cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_6__["g"])(new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_6__["P"](0, 0), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_6__["P"](0.32, 0.72), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_6__["P"](0, 1), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_6__["P"](1, 1), stepValue);
            }

            this.sbAni.progressEnd(shouldComplete ? 1 : 0, newStepValue, dur);
          }
        }
      }, {
        key: "render",
        value: function render() {
          return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null);
        }
      }, {
        key: "el",
        get: function get() {
          return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
        }
      }], [{
        key: "watchers",
        get: function get() {
          return {
            "swipeGesture": ["swipeGestureChanged"],
            "root": ["rootChanged"]
          };
        }
      }, {
        key: "style",
        get: function get() {
          return ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";
        }
      }]);

      return Nav;
    }();

    var navLink = function navLink(el, routerDirection, component, componentProps) {
      var nav = el.closest('ion-nav');

      if (nav) {
        if (routerDirection === 'forward') {
          if (component !== undefined) {
            return nav.push(component, componentProps, {
              skipIfBusy: true
            });
          }
        } else if (routerDirection === 'root') {
          if (component !== undefined) {
            return nav.setRoot(component, componentProps, {
              skipIfBusy: true
            });
          }
        } else if (routerDirection === 'back') {
          return nav.pop({
            skipIfBusy: true
          });
        }
      }

      return Promise.resolve(false);
    };

    var NavLink =
    /*#__PURE__*/
    function () {
      function NavLink(hostRef) {
        var _this3 = this;

        _classCallCheck(this, NavLink);

        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * The transition direction when navigating to another page.
         */

        this.routerDirection = 'forward';

        this.onClick = function () {
          return navLink(_this3.el, _this3.routerDirection, _this3.component, _this3.componentProps);
        };
      }

      _createClass(NavLink, [{
        key: "render",
        value: function render() {
          return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            onClick: this.onClick
          });
        }
      }, {
        key: "el",
        get: function get() {
          return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
        }
      }]);

      return NavLink;
    }();

    var NavPop =
    /*#__PURE__*/
    function () {
      function NavPop(hostRef) {
        var _this4 = this;

        _classCallCheck(this, NavPop);

        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);

        this.pop = function () {
          return navLink(_this4.el, 'back');
        };
      }

      _createClass(NavPop, [{
        key: "componentDidLoad",
        value: function componentDidLoad() {
          console.warn('[DEPRECATED][ion-nav-pop] <ion-nav-pop> is deprecated. Use `<ion-nav-link routerDirection="back">` instead.');
        }
      }, {
        key: "render",
        value: function render() {
          return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            onClick: this.pop
          });
        }
      }, {
        key: "el",
        get: function get() {
          return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
        }
      }]);

      return NavPop;
    }();

    var NavPush =
    /*#__PURE__*/
    function () {
      function NavPush(hostRef) {
        var _this5 = this;

        _classCallCheck(this, NavPush);

        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);

        this.push = function () {
          return navLink(_this5.el, 'forward', _this5.component, _this5.componentProps);
        };
      }

      _createClass(NavPush, [{
        key: "componentDidLoad",
        value: function componentDidLoad() {
          console.warn('[DEPRECATED][ion-nav-push] `<ion-nav-push component="MyComponent">` is deprecated. Use `<ion-nav-link component="MyComponent">` instead.');
        }
      }, {
        key: "render",
        value: function render() {
          return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            onClick: this.push
          });
        }
      }, {
        key: "el",
        get: function get() {
          return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
        }
      }]);

      return NavPush;
    }();

    var NavSetRoot =
    /*#__PURE__*/
    function () {
      function NavSetRoot(hostRef) {
        var _this6 = this;

        _classCallCheck(this, NavSetRoot);

        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);

        this.setRoot = function () {
          return navLink(_this6.el, 'root', _this6.component, _this6.componentProps);
        };
      }

      _createClass(NavSetRoot, [{
        key: "componentDidLoad",
        value: function componentDidLoad() {
          console.warn('[DEPRECATED][ion-nav-set-root] `<ion-nav-set-root component="MyComponent">` is deprecated. Use `<ion-nav-link component="MyComponent" routerDirection="root">` instead.');
        }
      }, {
        key: "render",
        value: function render() {
          return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            onClick: this.setRoot
          });
        }
      }, {
        key: "el",
        get: function get() {
          return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
        }
      }]);

      return NavSetRoot;
    }();
    /***/

  }
}]);
//# sourceMappingURL=4-es5.js.map