function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3], {
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
  "./node_modules/@ionic/core/dist/esm/index-1e5940d5.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/index-1e5940d5.js ***!
    \*************************************************************/

  /*! exports provided: m */

  /***/
  function node_modulesIonicCoreDistEsmIndex1e5940d5Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "m", function () {
      return menuController;
    });
    /* harmony import */


    var _animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./animation-af478fe9.js */
    "./node_modules/@ionic/core/dist/esm/animation-af478fe9.js");
    /**
     * baseAnimation
     * Base class which is extended by the various types. Each
     * type will provide their own animations for open and close
     * and registers itself with Menu.
     */


    var baseAnimation = function baseAnimation() {
      // https://material.io/guidelines/motion/movement.html#movement-movement-in-out-of-screen-bounds
      // https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves
      // "Apply the sharp curve to items temporarily leaving the screen that may return
      // from the same exit point. When they return, use the deceleration curve. On mobile,
      // this transition typically occurs over 300ms" -- MD Motion Guide
      return Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_0__["c"])().easing('cubic-bezier(0.0, 0.0, 0.2, 1)') // Deceleration curve (Entering the screen)
      .duration(300);
    };
    /**
     * Menu Overlay Type
     * The menu slides over the content. The content
     * itself, which is under the menu, does not move.
     */


    var menuOverlayAnimation = function menuOverlayAnimation(menu) {
      var closedX;
      var openedX;
      var BOX_SHADOW_WIDTH = 8;
      var width = menu.width + BOX_SHADOW_WIDTH;
      var menuAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
      var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_0__["c"])();

      if (menu.isEndSide) {
        // right side
        closedX = width + 'px';
        openedX = '0px';
      } else {
        // left side
        closedX = -width + 'px';
        openedX = '0px';
      }

      menuAnimation.addElement(menu.menuInnerEl).fromTo('transform', "translateX(".concat(closedX, ")"), "translateX(".concat(openedX, ")"));
      backdropAnimation.addElement(menu.backdropEl).fromTo('opacity', 0.01, 0.32);
      return baseAnimation().addAnimation([menuAnimation, backdropAnimation]);
    };
    /**
     * Menu Push Type
     * The content slides over to reveal the menu underneath.
     * The menu itself also slides over to reveal its bad self.
     */


    var menuPushAnimation = function menuPushAnimation(menu) {
      var contentOpenedX;
      var menuClosedX;
      var width = menu.width;

      if (menu.isEndSide) {
        contentOpenedX = -width + 'px';
        menuClosedX = width + 'px';
      } else {
        contentOpenedX = width + 'px';
        menuClosedX = -width + 'px';
      }

      var menuAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_0__["c"])().addElement(menu.menuInnerEl).fromTo('transform', "translateX(".concat(menuClosedX, ")"), 'translateX(0px)');
      var contentAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_0__["c"])().addElement(menu.contentEl).fromTo('transform', 'translateX(0px)', "translateX(".concat(contentOpenedX, ")"));
      var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_0__["c"])().addElement(menu.backdropEl).fromTo('opacity', 0.01, 0.32);
      return baseAnimation().addAnimation([menuAnimation, backdropAnimation, contentAnimation]);
    };
    /**
     * Menu Reveal Type
     * The content slides over to reveal the menu underneath.
     * The menu itself, which is under the content, does not move.
     */


    var menuRevealAnimation = function menuRevealAnimation(menu) {
      var openedX = menu.width * (menu.isEndSide ? -1 : 1) + 'px';
      var contentOpen = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_0__["c"])().addElement(menu.contentEl) // REVIEW
      .fromTo('transform', 'translateX(0px)', "translateX(".concat(openedX, ")"));
      return baseAnimation().addAnimation(contentOpen);
    };

    var createMenuController = function createMenuController() {
      var menuAnimations = new Map();
      var menus = [];

      var open = function open(menu) {
        var menuEl;
        return regeneratorRuntime.async(function open$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return regeneratorRuntime.awrap(get(menu));

              case 2:
                menuEl = _context.sent;

                if (!menuEl) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", menuEl.open());

              case 5:
                return _context.abrupt("return", false);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        });
      };

      var close = function close(menu) {
        var menuEl;
        return regeneratorRuntime.async(function close$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return regeneratorRuntime.awrap(menu !== undefined ? get(menu) : getOpen());

              case 2:
                menuEl = _context2.sent;

                if (!(menuEl !== undefined)) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return", menuEl.close());

              case 5:
                return _context2.abrupt("return", false);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        });
      };

      var toggle = function toggle(menu) {
        var menuEl;
        return regeneratorRuntime.async(function toggle$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return regeneratorRuntime.awrap(get(menu));

              case 2:
                menuEl = _context3.sent;

                if (!menuEl) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt("return", menuEl.toggle());

              case 5:
                return _context3.abrupt("return", false);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        });
      };

      var enable = function enable(shouldEnable, menu) {
        var menuEl;
        return regeneratorRuntime.async(function enable$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return regeneratorRuntime.awrap(get(menu));

              case 2:
                menuEl = _context4.sent;

                if (menuEl) {
                  menuEl.disabled = !shouldEnable;
                }

                return _context4.abrupt("return", menuEl);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        });
      };

      var swipeGesture = function swipeGesture(shouldEnable, menu) {
        var menuEl;
        return regeneratorRuntime.async(function swipeGesture$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return regeneratorRuntime.awrap(get(menu));

              case 2:
                menuEl = _context5.sent;

                if (menuEl) {
                  menuEl.swipeGesture = shouldEnable;
                }

                return _context5.abrupt("return", menuEl);

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        });
      };

      var isOpen = function isOpen(menu) {
        var menuEl, _menuEl;

        return regeneratorRuntime.async(function isOpen$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!(menu != null)) {
                  _context6.next = 7;
                  break;
                }

                _context6.next = 3;
                return regeneratorRuntime.awrap(get(menu));

              case 3:
                menuEl = _context6.sent;
                return _context6.abrupt("return", menuEl !== undefined && menuEl.isOpen());

              case 7:
                _context6.next = 9;
                return regeneratorRuntime.awrap(getOpen());

              case 9:
                _menuEl = _context6.sent;
                return _context6.abrupt("return", _menuEl !== undefined);

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        });
      };

      var isEnabled = function isEnabled(menu) {
        var menuEl;
        return regeneratorRuntime.async(function isEnabled$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return regeneratorRuntime.awrap(get(menu));

              case 2:
                menuEl = _context7.sent;

                if (!menuEl) {
                  _context7.next = 5;
                  break;
                }

                return _context7.abrupt("return", !menuEl.disabled);

              case 5:
                return _context7.abrupt("return", false);

              case 6:
              case "end":
                return _context7.stop();
            }
          }
        });
      };

      var get = function get(menu) {
        var menuRef, menuEl;
        return regeneratorRuntime.async(function get$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return regeneratorRuntime.awrap(waitUntilReady());

              case 2:
                if (!(menu === 'start' || menu === 'end')) {
                  _context8.next = 9;
                  break;
                }

                // there could be more than one menu on the same side
                // so first try to get the enabled one
                menuRef = find(function (m) {
                  return m.side === menu && !m.disabled;
                });

                if (!menuRef) {
                  _context8.next = 6;
                  break;
                }

                return _context8.abrupt("return", menuRef);

              case 6:
                return _context8.abrupt("return", find(function (m) {
                  return m.side === menu;
                }));

              case 9:
                if (!(menu != null)) {
                  _context8.next = 11;
                  break;
                }

                return _context8.abrupt("return", find(function (m) {
                  return m.menuId === menu;
                }));

              case 11:
                // return the first enabled menu
                menuEl = find(function (m) {
                  return !m.disabled;
                });

                if (!menuEl) {
                  _context8.next = 14;
                  break;
                }

                return _context8.abrupt("return", menuEl);

              case 14:
                return _context8.abrupt("return", menus.length > 0 ? menus[0].el : undefined);

              case 15:
              case "end":
                return _context8.stop();
            }
          }
        });
      };
      /**
       * Get the instance of the opened menu. Returns `null` if a menu is not found.
       */


      var getOpen = function getOpen() {
        return regeneratorRuntime.async(function getOpen$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return regeneratorRuntime.awrap(waitUntilReady());

              case 2:
                return _context9.abrupt("return", _getOpenSync());

              case 3:
              case "end":
                return _context9.stop();
            }
          }
        });
      };
      /**
       * Get all menu instances.
       */


      var getMenus = function getMenus() {
        return regeneratorRuntime.async(function getMenus$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return regeneratorRuntime.awrap(waitUntilReady());

              case 2:
                return _context10.abrupt("return", getMenusSync());

              case 3:
              case "end":
                return _context10.stop();
            }
          }
        });
      };
      /**
       * Get whether or not a menu is animating. Returns `true` if any
       * menu is currently animating.
       */


      var isAnimating = function isAnimating() {
        return regeneratorRuntime.async(function isAnimating$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return regeneratorRuntime.awrap(waitUntilReady());

              case 2:
                return _context11.abrupt("return", isAnimatingSync());

              case 3:
              case "end":
                return _context11.stop();
            }
          }
        });
      };

      var registerAnimation = function registerAnimation(name, animation) {
        menuAnimations.set(name, animation);
      };

      var _register = function _register(menu) {
        if (menus.indexOf(menu) < 0) {
          if (!menu.disabled) {
            _setActiveMenu(menu);
          }

          menus.push(menu);
        }
      };

      var _unregister = function _unregister(menu) {
        var index = menus.indexOf(menu);

        if (index > -1) {
          menus.splice(index, 1);
        }
      };

      var _setActiveMenu = function _setActiveMenu(menu) {
        // if this menu should be enabled
        // then find all the other menus on this same side
        // and automatically disable other same side menus
        var side = menu.side;
        menus.filter(function (m) {
          return m.side === side && m !== menu;
        }).forEach(function (m) {
          return m.disabled = true;
        });
      };

      var _setOpen = function _setOpen(menu, shouldOpen, animated) {
        var openedMenu;
        return regeneratorRuntime.async(function _setOpen$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                if (!isAnimatingSync()) {
                  _context12.next = 2;
                  break;
                }

                return _context12.abrupt("return", false);

              case 2:
                if (!shouldOpen) {
                  _context12.next = 9;
                  break;
                }

                _context12.next = 5;
                return regeneratorRuntime.awrap(getOpen());

              case 5:
                openedMenu = _context12.sent;

                if (!(openedMenu && menu.el !== openedMenu)) {
                  _context12.next = 9;
                  break;
                }

                _context12.next = 9;
                return regeneratorRuntime.awrap(openedMenu.setOpen(false, false));

              case 9:
                return _context12.abrupt("return", menu._setOpen(shouldOpen, animated));

              case 10:
              case "end":
                return _context12.stop();
            }
          }
        });
      };

      var _createAnimation = function _createAnimation(type, menuCmp) {
        var animationBuilder = menuAnimations.get(type);

        if (!animationBuilder) {
          throw new Error('animation not registered');
        }

        var animation = animationBuilder(menuCmp);
        return animation;
      };

      var _getOpenSync = function _getOpenSync() {
        return find(function (m) {
          return m._isOpen;
        });
      };

      var getMenusSync = function getMenusSync() {
        return menus.map(function (menu) {
          return menu.el;
        });
      };

      var isAnimatingSync = function isAnimatingSync() {
        return menus.some(function (menu) {
          return menu.isAnimating;
        });
      };

      var find = function find(predicate) {
        var instance = menus.find(predicate);

        if (instance !== undefined) {
          return instance.el;
        }

        return undefined;
      };

      var waitUntilReady = function waitUntilReady() {
        return Promise.all(Array.from(document.querySelectorAll('ion-menu')).map(function (menu) {
          return menu.componentOnReady();
        }));
      };

      registerAnimation('reveal', menuRevealAnimation);
      registerAnimation('push', menuPushAnimation);
      registerAnimation('overlay', menuOverlayAnimation);
      return {
        registerAnimation: registerAnimation,
        get: get,
        getMenus: getMenus,
        getOpen: getOpen,
        isEnabled: isEnabled,
        swipeGesture: swipeGesture,
        isAnimating: isAnimating,
        isOpen: isOpen,
        enable: enable,
        toggle: toggle,
        close: close,
        open: open,
        _getOpenSync: _getOpenSync,
        _createAnimation: _createAnimation,
        _register: _register,
        _unregister: _unregister,
        _setOpen: _setOpen,
        _setActiveMenu: _setActiveMenu
      };
    };

    var menuController =
    /*@__PURE__*/
    createMenuController();
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js ***!
    \*************************************************************/

  /*! exports provided: c, g, h, o */

  /***/
  function node_modulesIonicCoreDistEsmTheme18cbe2ccJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createColorClasses;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getClassMap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hostContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "o", function () {
      return openURL;
    });

    var hostContext = function hostContext(selector, el) {
      return el.closest(selector) !== null;
    };
    /**
     * Create the mode and color classes for the component based on the classes passed in
     */


    var createColorClasses = function createColorClasses(color) {
      return typeof color === 'string' && color.length > 0 ? _defineProperty({
        'ion-color': true
      }, "ion-color-".concat(color), true) : undefined;
    };

    var getClassList = function getClassList(classes) {
      if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array.filter(function (c) {
          return c != null;
        }).map(function (c) {
          return c.trim();
        }).filter(function (c) {
          return c !== '';
        });
      }

      return [];
    };

    var getClassMap = function getClassMap(classes) {
      var map = {};
      getClassList(classes).forEach(function (c) {
        return map[c] = true;
      });
      return map;
    };

    var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

    var openURL = function openURL(url, ev, direction) {
      var router;
      return regeneratorRuntime.async(function openURL$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                _context13.next = 5;
                break;
              }

              router = document.querySelector('ion-router');

              if (!router) {
                _context13.next = 5;
                break;
              }

              if (ev != null) {
                ev.preventDefault();
              }

              return _context13.abrupt("return", router.push(url, direction));

            case 5:
              return _context13.abrupt("return", false);

            case 6:
            case "end":
              return _context13.stop();
          }
        }
      });
    };
    /***/

  }
}]);
//# sourceMappingURL=3-es5.js.map