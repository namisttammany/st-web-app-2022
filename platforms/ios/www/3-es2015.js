(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/@ionic/core/dist/esm/cubic-bezier-2812fda3.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/cubic-bezier-2812fda3.js ***!
  \********************************************************************/
/*! exports provided: P, g */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getTimeGivenProgression; });
/**
 * Based on:
 * https://stackoverflow.com/questions/7348009/y-coordinate-for-a-given-x-cubic-bezier
 * https://math.stackexchange.com/questions/26846/is-there-an-explicit-form-for-cubic-b%C3%A9zier-curves
 * TODO: Reduce rounding error
 */
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
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
const getTimeGivenProgression = (p0, p1, p2, p3, progression) => {
    const tValues = solveCubicBezier(p0.y, p1.y, p2.y, p3.y, progression);
    return solveCubicParametricEquation(p0.x, p1.x, p2.x, p3.x, tValues[0]); // TODO: Add better strategy for dealing with multiple solutions
};
/**
 * Solve a cubic equation in one dimension (time)
 */
const solveCubicParametricEquation = (p0, p1, p2, p3, t) => {
    const partA = (3 * p1) * Math.pow(t - 1, 2);
    const partB = (-3 * p2 * t) + (3 * p2) + (p3 * t);
    const partC = p0 * Math.pow(t - 1, 3);
    return t * (partA + (t * partB)) - partC;
};
/**
 * Find the `t` value for a cubic bezier using Cardano's formula
 */
const solveCubicBezier = (p0, p1, p2, p3, refPoint) => {
    p0 -= refPoint;
    p1 -= refPoint;
    p2 -= refPoint;
    p3 -= refPoint;
    const roots = solveCubicEquation(p3 - 3 * p2 + 3 * p1 - p0, 3 * p2 - 6 * p1 + 3 * p0, 3 * p1 - 3 * p0, p0);
    return roots.filter(root => root >= 0 && root <= 1);
};
const solveQuadraticEquation = (a, b, c) => {
    const discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
        return [];
    }
    else {
        return [
            (-b + Math.sqrt(discriminant)) / (2 * a),
            (-b - Math.sqrt(discriminant)) / (2 * a)
        ];
    }
};
const solveCubicEquation = (a, b, c, d) => {
    if (a === 0) {
        return solveQuadraticEquation(b, c, d);
    }
    b /= a;
    c /= a;
    d /= a;
    const p = (3 * c - b * b) / 3;
    const q = (2 * b * b * b - 9 * b * c + 27 * d) / 27;
    if (p === 0) {
        return [Math.pow(-q, 1 / 3)];
    }
    else if (q === 0) {
        return [Math.sqrt(-p), -Math.sqrt(-p)];
    }
    const discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);
    if (discriminant === 0) {
        return [Math.pow(q / 2, 1 / 2) - b / 3];
    }
    else if (discriminant > 0) {
        return [Math.pow(-(q / 2) + Math.sqrt(discriminant), 1 / 3) - Math.pow((q / 2) + Math.sqrt(discriminant), 1 / 3) - b / 3];
    }
    const r = Math.sqrt(Math.pow(-(p / 3), 3));
    const phi = Math.acos(-(q / (2 * Math.sqrt(Math.pow(-(p / 3), 3)))));
    const s = 2 * Math.pow(r, 1 / 3);
    return [
        s * Math.cos(phi / 3) - b / 3,
        s * Math.cos((phi + 2 * Math.PI) / 3) - b / 3,
        s * Math.cos((phi + 4 * Math.PI) / 3) - b / 3
    ];
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/index-1e5940d5.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-1e5940d5.js ***!
  \*************************************************************/
/*! exports provided: m */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return menuController; });
/* harmony import */ var _animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation-af478fe9.js */ "./node_modules/@ionic/core/dist/esm/animation-af478fe9.js");


/**
 * baseAnimation
 * Base class which is extended by the various types. Each
 * type will provide their own animations for open and close
 * and registers itself with Menu.
 */
const baseAnimation = () => {
    // https://material.io/guidelines/motion/movement.html#movement-movement-in-out-of-screen-bounds
    // https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves
    // "Apply the sharp curve to items temporarily leaving the screen that may return
    // from the same exit point. When they return, use the deceleration curve. On mobile,
    // this transition typically occurs over 300ms" -- MD Motion Guide
    return Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_0__["c"])()
        .easing('cubic-bezier(0.0, 0.0, 0.2, 1)') // Deceleration curve (Entering the screen)
        .duration(300);
};

/**
 * Menu Overlay Type
 * The menu slides over the content. The content
 * itself, which is under the menu, does not move.
 */
const menuOverlayAnimation = (menu) => {
    let closedX;
    let openedX;
    const BOX_SHADOW_WIDTH = 8;
    const width = menu.width + BOX_SHADOW_WIDTH;
    const menuAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
    const backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
    if (menu.isEndSide) {
        // right side
        closedX = width + 'px';
        openedX = '0px';
    }
    else {
        // left side
        closedX = -width + 'px';
        openedX = '0px';
    }
    menuAnimation
        .addElement(menu.menuInnerEl)
        .fromTo('transform', `translateX(${closedX})`, `translateX(${openedX})`);
    backdropAnimation
        .addElement(menu.backdropEl)
        .fromTo('opacity', 0.01, 0.32);
    return baseAnimation().addAnimation([menuAnimation, backdropAnimation]);
};

/**
 * Menu Push Type
 * The content slides over to reveal the menu underneath.
 * The menu itself also slides over to reveal its bad self.
 */
const menuPushAnimation = (menu) => {
    let contentOpenedX;
    let menuClosedX;
    const width = menu.width;
    if (menu.isEndSide) {
        contentOpenedX = -width + 'px';
        menuClosedX = width + 'px';
    }
    else {
        contentOpenedX = width + 'px';
        menuClosedX = -width + 'px';
    }
    const menuAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_0__["c"])()
        .addElement(menu.menuInnerEl)
        .fromTo('transform', `translateX(${menuClosedX})`, 'translateX(0px)');
    const contentAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_0__["c"])()
        .addElement(menu.contentEl)
        .fromTo('transform', 'translateX(0px)', `translateX(${contentOpenedX})`);
    const backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_0__["c"])()
        .addElement(menu.backdropEl)
        .fromTo('opacity', 0.01, 0.32);
    return baseAnimation().addAnimation([menuAnimation, backdropAnimation, contentAnimation]);
};

/**
 * Menu Reveal Type
 * The content slides over to reveal the menu underneath.
 * The menu itself, which is under the content, does not move.
 */
const menuRevealAnimation = (menu) => {
    const openedX = (menu.width * (menu.isEndSide ? -1 : 1)) + 'px';
    const contentOpen = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_0__["c"])()
        .addElement(menu.contentEl) // REVIEW
        .fromTo('transform', 'translateX(0px)', `translateX(${openedX})`);
    return baseAnimation().addAnimation(contentOpen);
};

const createMenuController = () => {
    const menuAnimations = new Map();
    const menus = [];
    const open = async (menu) => {
        const menuEl = await get(menu);
        if (menuEl) {
            return menuEl.open();
        }
        return false;
    };
    const close = async (menu) => {
        const menuEl = await (menu !== undefined ? get(menu) : getOpen());
        if (menuEl !== undefined) {
            return menuEl.close();
        }
        return false;
    };
    const toggle = async (menu) => {
        const menuEl = await get(menu);
        if (menuEl) {
            return menuEl.toggle();
        }
        return false;
    };
    const enable = async (shouldEnable, menu) => {
        const menuEl = await get(menu);
        if (menuEl) {
            menuEl.disabled = !shouldEnable;
        }
        return menuEl;
    };
    const swipeGesture = async (shouldEnable, menu) => {
        const menuEl = await get(menu);
        if (menuEl) {
            menuEl.swipeGesture = shouldEnable;
        }
        return menuEl;
    };
    const isOpen = async (menu) => {
        if (menu != null) {
            const menuEl = await get(menu);
            return (menuEl !== undefined && menuEl.isOpen());
        }
        else {
            const menuEl = await getOpen();
            return menuEl !== undefined;
        }
    };
    const isEnabled = async (menu) => {
        const menuEl = await get(menu);
        if (menuEl) {
            return !menuEl.disabled;
        }
        return false;
    };
    const get = async (menu) => {
        await waitUntilReady();
        if (menu === 'start' || menu === 'end') {
            // there could be more than one menu on the same side
            // so first try to get the enabled one
            const menuRef = find(m => m.side === menu && !m.disabled);
            if (menuRef) {
                return menuRef;
            }
            // didn't find a menu side that is enabled
            // so try to get the first menu side found
            return find(m => m.side === menu);
        }
        else if (menu != null) {
            // the menuId was not left or right
            // so try to get the menu by its "id"
            return find(m => m.menuId === menu);
        }
        // return the first enabled menu
        const menuEl = find(m => !m.disabled);
        if (menuEl) {
            return menuEl;
        }
        // get the first menu in the array, if one exists
        return menus.length > 0 ? menus[0].el : undefined;
    };
    /**
     * Get the instance of the opened menu. Returns `null` if a menu is not found.
     */
    const getOpen = async () => {
        await waitUntilReady();
        return _getOpenSync();
    };
    /**
     * Get all menu instances.
     */
    const getMenus = async () => {
        await waitUntilReady();
        return getMenusSync();
    };
    /**
     * Get whether or not a menu is animating. Returns `true` if any
     * menu is currently animating.
     */
    const isAnimating = async () => {
        await waitUntilReady();
        return isAnimatingSync();
    };
    const registerAnimation = (name, animation) => {
        menuAnimations.set(name, animation);
    };
    const _register = (menu) => {
        if (menus.indexOf(menu) < 0) {
            if (!menu.disabled) {
                _setActiveMenu(menu);
            }
            menus.push(menu);
        }
    };
    const _unregister = (menu) => {
        const index = menus.indexOf(menu);
        if (index > -1) {
            menus.splice(index, 1);
        }
    };
    const _setActiveMenu = (menu) => {
        // if this menu should be enabled
        // then find all the other menus on this same side
        // and automatically disable other same side menus
        const side = menu.side;
        menus
            .filter(m => m.side === side && m !== menu)
            .forEach(m => m.disabled = true);
    };
    const _setOpen = async (menu, shouldOpen, animated) => {
        if (isAnimatingSync()) {
            return false;
        }
        if (shouldOpen) {
            const openedMenu = await getOpen();
            if (openedMenu && menu.el !== openedMenu) {
                await openedMenu.setOpen(false, false);
            }
        }
        return menu._setOpen(shouldOpen, animated);
    };
    const _createAnimation = (type, menuCmp) => {
        const animationBuilder = menuAnimations.get(type);
        if (!animationBuilder) {
            throw new Error('animation not registered');
        }
        const animation = animationBuilder(menuCmp);
        return animation;
    };
    const _getOpenSync = () => {
        return find(m => m._isOpen);
    };
    const getMenusSync = () => {
        return menus.map(menu => menu.el);
    };
    const isAnimatingSync = () => {
        return menus.some(menu => menu.isAnimating);
    };
    const find = (predicate) => {
        const instance = menus.find(predicate);
        if (instance !== undefined) {
            return instance.el;
        }
        return undefined;
    };
    const waitUntilReady = () => {
        return Promise.all(Array.from(document.querySelectorAll('ion-menu'))
            .map(menu => menu.componentOnReady()));
    };
    registerAnimation('reveal', menuRevealAnimation);
    registerAnimation('push', menuPushAnimation);
    registerAnimation('overlay', menuOverlayAnimation);
    return {
        registerAnimation,
        get,
        getMenus,
        getOpen,
        isEnabled,
        swipeGesture,
        isAnimating,
        isOpen,
        enable,
        toggle,
        close,
        open,
        _getOpenSync,
        _createAnimation,
        _register,
        _unregister,
        _setOpen,
        _setActiveMenu,
    };
};
const menuController = /*@__PURE__*/ createMenuController();




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color) => {
    return (typeof color === 'string' && color.length > 0) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : undefined;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction);
        }
    }
    return false;
};




/***/ })

}]);
//# sourceMappingURL=3-es2015.js.map