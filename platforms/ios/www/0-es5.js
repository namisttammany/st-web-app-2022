function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0], {
  /***/
  "./node_modules/@ionic/core/dist/esm/animation-af478fe9.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/animation-af478fe9.js ***!
    \*****************************************************************/

  /*! exports provided: c */

  /***/
  function node_modulesIonicCoreDistEsmAnimationAf478fe9Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createAnimation;
    });
    /* harmony import */


    var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./helpers-46f4a262.js */
    "./node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");

    var setStyleProperty = function setStyleProperty(element, propertyName, value) {
      element.style.setProperty(propertyName, value);
    };

    var removeStyleProperty = function removeStyleProperty(element, propertyName) {
      element.style.removeProperty(propertyName);
    };

    var animationEnd = function animationEnd(el, callback) {
      var unRegTrans;
      var opts = {
        passive: true
      };

      var unregister = function unregister() {
        if (unRegTrans) {
          unRegTrans();
        }
      };

      var onTransitionEnd = function onTransitionEnd(ev) {
        if (el === ev.target) {
          unregister();
          callback(ev);
        }
      };

      if (el) {
        el.addEventListener('webkitAnimationEnd', onTransitionEnd, opts);
        el.addEventListener('animationend', onTransitionEnd, opts);

        unRegTrans = function unRegTrans() {
          el.removeEventListener('webkitAnimationEnd', onTransitionEnd, opts);
          el.removeEventListener('animationend', onTransitionEnd, opts);
        };
      }

      return unregister;
    };

    var generateKeyframeRules = function generateKeyframeRules() {
      var keyframes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return keyframes.map(function (keyframe) {
        var offset = keyframe.offset;
        var frameString = [];

        for (var property in keyframe) {
          if (keyframe.hasOwnProperty(property) && property !== 'offset') {
            frameString.push("".concat(property, ": ").concat(keyframe[property], ";"));
          }
        }

        return "".concat(offset * 100, "% { ").concat(frameString.join(' '), " }");
      }).join(' ');
    };

    var keyframeIds = [];

    var generateKeyframeName = function generateKeyframeName(keyframeRules) {
      var index = keyframeIds.indexOf(keyframeRules);

      if (index < 0) {
        index = keyframeIds.push(keyframeRules) - 1;
      }

      return "ion-animation-".concat(index);
    };

    var getStyleContainer = function getStyleContainer(element) {
      var rootNode = element.getRootNode();
      return rootNode.head || rootNode;
    };

    var createKeyframeStylesheet = function createKeyframeStylesheet(keyframeName, keyframeRules, element) {
      var styleContainer = getStyleContainer(element);
      var existingStylesheet = styleContainer.querySelector('#' + keyframeName);

      if (existingStylesheet) {
        return existingStylesheet;
      }

      var stylesheet = (element.ownerDocument || document).createElement('style');
      stylesheet.id = keyframeName;
      stylesheet.textContent = "@keyframes ".concat(keyframeName, " { ").concat(keyframeRules, " } @keyframes ").concat(keyframeName, "-alt { ").concat(keyframeRules, " }");
      styleContainer.appendChild(stylesheet);
      return stylesheet;
    };

    var addClassToArray = function addClassToArray() {
      var classes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var className = arguments.length > 1 ? arguments[1] : undefined;

      if (className !== undefined) {
        var classNameToAppend = Array.isArray(className) ? className : [className];
        return [].concat(_toConsumableArray(classes), _toConsumableArray(classNameToAppend));
      }

      return classes;
    }; // TODO: Add more tests. until then, be sure to manually test menu and swipe to go back/routing transitions


    var createAnimation = function createAnimation() {
      var _delay;

      var _duration;

      var _easing;

      var _iterations;

      var _fill;

      var _direction;

      var _keyframes = [];
      var beforeAddClasses = [];
      var beforeRemoveClasses = [];
      var initialized = false;
      var parentAnimation;
      var beforeStylesValue = {};
      var afterAddClasses = [];
      var afterRemoveClasses = [];
      var afterStylesValue = {};
      var numAnimationsRunning = 0;
      var shouldForceLinearEasing = false;
      var shouldForceSyncPlayback = false;
      var cssAnimationsTimerFallback;
      var forceDirectionValue;
      var forceDurationValue;
      var forceDelayValue;
      var willComplete = true;
      var finished = false;
      var shouldCalculateNumAnimations = true;
      var keyframeName;
      var ani;
      var onFinishCallbacks = [];
      var onFinishOneTimeCallbacks = [];
      var elements = [];
      var childAnimations = [];
      var stylesheets = [];
      var _beforeAddReadFunctions = [];
      var _beforeAddWriteFunctions = [];
      var _afterAddReadFunctions = [];
      var _afterAddWriteFunctions = [];
      var webAnimations = [];
      var supportsAnimationEffect = typeof AnimationEffect === 'function' || typeof window.AnimationEffect === 'function';
      var supportsWebAnimations = typeof Element === 'function' && typeof Element.prototype.animate === 'function' && supportsAnimationEffect;
      var ANIMATION_END_FALLBACK_PADDING_MS = 100;

      var getWebAnimations = function getWebAnimations() {
        return webAnimations;
      };

      var destroy = function destroy() {
        childAnimations.forEach(function (childAnimation) {
          childAnimation.destroy();
        });
        cleanUp();
        elements.length = 0;
        childAnimations.length = 0;
        _keyframes.length = 0;
        clearOnFinish();
        initialized = false;
        shouldCalculateNumAnimations = true;
        return ani;
      };
      /**
       * Cancels any Web Animations, removes
       * any animation properties from the
       * animation's elements, and removes the
       * animation's stylesheets from the DOM.
       */


      var cleanUp = function cleanUp() {
        cleanUpElements();
        cleanUpStyleSheets();
      };

      var onFinish = function onFinish(callback, opts) {
        var callbacks = opts && opts.oneTimeCallback ? onFinishOneTimeCallbacks : onFinishCallbacks;
        callbacks.push({
          c: callback,
          o: opts
        });
        return ani;
      };

      var clearOnFinish = function clearOnFinish() {
        onFinishCallbacks.length = 0;
        onFinishOneTimeCallbacks.length = 0;
        return ani;
      };
      /**
       * Cancels any Web Animations and removes
       * any animation properties from the
       * the animation's elements.
       */


      var cleanUpElements = function cleanUpElements() {
        if (supportsWebAnimations) {
          webAnimations.forEach(function (animation) {
            animation.cancel();
          });
          webAnimations.length = 0;
        } else {
          var elementsArray = elements.slice();
          Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__["r"])(function () {
            elementsArray.forEach(function (element) {
              removeStyleProperty(element, 'animation-name');
              removeStyleProperty(element, 'animation-duration');
              removeStyleProperty(element, 'animation-timing-function');
              removeStyleProperty(element, 'animation-iteration-count');
              removeStyleProperty(element, 'animation-delay');
              removeStyleProperty(element, 'animation-play-state');
              removeStyleProperty(element, 'animation-fill-mode');
              removeStyleProperty(element, 'animation-direction');
            });
          });
        }
      };
      /**
       * Removes the animation's stylesheets
       * from the DOM.
       */


      var cleanUpStyleSheets = function cleanUpStyleSheets() {
        stylesheets.forEach(function (stylesheet) {
          /**
           * When sharing stylesheets, it's possible
           * for another animation to have already
           * cleaned up a particular stylesheet
           */
          if (stylesheet && stylesheet.parentNode) {
            stylesheet.parentNode.removeChild(stylesheet);
          }
        });
        stylesheets.length = 0;
      };

      var beforeAddRead = function beforeAddRead(readFn) {
        _beforeAddReadFunctions.push(readFn);

        return ani;
      };

      var beforeAddWrite = function beforeAddWrite(writeFn) {
        _beforeAddWriteFunctions.push(writeFn);

        return ani;
      };

      var afterAddRead = function afterAddRead(readFn) {
        _afterAddReadFunctions.push(readFn);

        return ani;
      };

      var afterAddWrite = function afterAddWrite(writeFn) {
        _afterAddWriteFunctions.push(writeFn);

        return ani;
      };

      var beforeAddClass = function beforeAddClass(className) {
        beforeAddClasses = addClassToArray(beforeAddClasses, className);
        return ani;
      };

      var beforeRemoveClass = function beforeRemoveClass(className) {
        beforeRemoveClasses = addClassToArray(beforeRemoveClasses, className);
        return ani;
      };
      /**
       * Set CSS inline styles to the animation's
       * elements before the animation begins.
       */


      var beforeStyles = function beforeStyles() {
        var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        beforeStylesValue = styles;
        return ani;
      };
      /**
       * Clear CSS inline styles from the animation's
       * elements before the animation begins.
       */


      var beforeClearStyles = function beforeClearStyles() {
        var propertyNames = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = propertyNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var property = _step.value;
            beforeStylesValue[property] = '';
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

        return ani;
      };

      var afterAddClass = function afterAddClass(className) {
        afterAddClasses = addClassToArray(afterAddClasses, className);
        return ani;
      };

      var afterRemoveClass = function afterRemoveClass(className) {
        afterRemoveClasses = addClassToArray(afterRemoveClasses, className);
        return ani;
      };

      var afterStyles = function afterStyles() {
        var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        afterStylesValue = styles;
        return ani;
      };

      var afterClearStyles = function afterClearStyles() {
        var propertyNames = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = propertyNames[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var property = _step2.value;
            afterStylesValue[property] = '';
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

        return ani;
      };

      var getFill = function getFill() {
        if (_fill !== undefined) {
          return _fill;
        }

        if (parentAnimation) {
          return parentAnimation.getFill();
        }

        return 'both';
      };

      var getDirection = function getDirection() {
        if (forceDirectionValue !== undefined) {
          return forceDirectionValue;
        }

        if (_direction !== undefined) {
          return _direction;
        }

        if (parentAnimation) {
          return parentAnimation.getDirection();
        }

        return 'normal';
      };

      var getEasing = function getEasing() {
        if (shouldForceLinearEasing) {
          return 'linear';
        }

        if (_easing !== undefined) {
          return _easing;
        }

        if (parentAnimation) {
          return parentAnimation.getEasing();
        }

        return 'linear';
      };

      var getDuration = function getDuration() {
        if (shouldForceSyncPlayback) {
          return 0;
        }

        if (forceDurationValue !== undefined) {
          return forceDurationValue;
        }

        if (_duration !== undefined) {
          return _duration;
        }

        if (parentAnimation) {
          return parentAnimation.getDuration();
        }

        return 0;
      };

      var getIterations = function getIterations() {
        if (_iterations !== undefined) {
          return _iterations;
        }

        if (parentAnimation) {
          return parentAnimation.getIterations();
        }

        return 1;
      };

      var getDelay = function getDelay() {
        if (forceDelayValue !== undefined) {
          return forceDelayValue;
        }

        if (_delay !== undefined) {
          return _delay;
        }

        if (parentAnimation) {
          return parentAnimation.getDelay();
        }

        return 0;
      };

      var getKeyframes = function getKeyframes() {
        return _keyframes;
      };

      var direction = function direction(animationDirection) {
        _direction = animationDirection;
        update(true);
        return ani;
      };

      var fill = function fill(animationFill) {
        _fill = animationFill;
        update(true);
        return ani;
      };

      var delay = function delay(animationDelay) {
        _delay = animationDelay;
        update(true);
        return ani;
      };

      var easing = function easing(animationEasing) {
        _easing = animationEasing;
        update(true);
        return ani;
      };

      var duration = function duration(animationDuration) {
        /**
         * CSS Animation Durations of 0ms work fine on Chrome
         * but do not run on Safari, so force it to 1ms to
         * get it to run on both platforms.
         */
        if (!supportsWebAnimations && animationDuration === 0) {
          animationDuration = 1;
        }

        _duration = animationDuration;
        update(true);
        return ani;
      };

      var iterations = function iterations(animationIterations) {
        _iterations = animationIterations;
        update(true);
        return ani;
      };

      var parent = function parent(animation) {
        parentAnimation = animation;
        return ani;
      };

      var addElement = function addElement(el) {
        if (el != null) {
          if (el.nodeType === 1) {
            elements.push(el);
          } else if (el.length >= 0) {
            for (var i = 0; i < el.length; i++) {
              elements.push(el[i]);
            }
          } else {
            console.error('Invalid addElement value');
          }
        }

        return ani;
      };

      var addAnimation = function addAnimation(animationToAdd) {
        if (animationToAdd != null) {
          if (Array.isArray(animationToAdd)) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = animationToAdd[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var animation = _step3.value;
                animation.parent(ani);
                childAnimations.push(animation);
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
          } else {
            animationToAdd.parent(ani);
            childAnimations.push(animationToAdd);
          }
        }

        return ani;
      };

      var keyframes = function keyframes(keyframeValues) {
        _keyframes = keyframeValues;
        return ani;
      };
      /**
       * Runs all before read callbacks
       */


      var runBeforeRead = function runBeforeRead() {
        _beforeAddReadFunctions.forEach(function (callback) {
          callback();
        });
      };
      /**
       * Runs all before write callbacks
       */


      var runBeforeWrite = function runBeforeWrite() {
        _beforeAddWriteFunctions.forEach(function (callback) {
          callback();
        });
      };
      /**
       * Updates styles and classes before animation runs
       */


      var runBeforeStyles = function runBeforeStyles() {
        var addClasses = beforeAddClasses;
        var removeClasses = beforeRemoveClasses;
        var styles = beforeStylesValue;
        elements.forEach(function (el) {
          var elementClassList = el.classList;
          addClasses.forEach(function (c) {
            return elementClassList.add(c);
          });
          removeClasses.forEach(function (c) {
            return elementClassList.remove(c);
          });

          for (var property in styles) {
            if (styles.hasOwnProperty(property)) {
              setStyleProperty(el, property, styles[property]);
            }
          }
        });
      };
      /**
       * Run all "before" animation hooks.
       */


      var beforeAnimation = function beforeAnimation() {
        runBeforeRead();
        runBeforeWrite();
        runBeforeStyles();
      };
      /**
       * Runs all after read callbacks
       */


      var runAfterRead = function runAfterRead() {
        _afterAddReadFunctions.forEach(function (callback) {
          callback();
        });
      };
      /**
       * Runs all after write callbacks
       */


      var runAfterWrite = function runAfterWrite() {
        _afterAddWriteFunctions.forEach(function (callback) {
          callback();
        });
      };
      /**
       * Updates styles and classes before animation ends
       */


      var runAfterStyles = function runAfterStyles() {
        var addClasses = afterAddClasses;
        var removeClasses = afterRemoveClasses;
        var styles = afterStylesValue;
        elements.forEach(function (el) {
          var elementClassList = el.classList;
          addClasses.forEach(function (c) {
            return elementClassList.add(c);
          });
          removeClasses.forEach(function (c) {
            return elementClassList.remove(c);
          });

          for (var property in styles) {
            if (styles.hasOwnProperty(property)) {
              setStyleProperty(el, property, styles[property]);
            }
          }
        });
      };
      /**
       * Run all "after" animation hooks.
       */


      var afterAnimation = function afterAnimation() {
        clearCSSAnimationsTimeout();
        runAfterRead();
        runAfterWrite();
        runAfterStyles();
        var currentStep = willComplete ? 1 : 0;
        onFinishCallbacks.forEach(function (onFinishCallback) {
          return onFinishCallback.c(currentStep, ani);
        });
        onFinishOneTimeCallbacks.forEach(function (onFinishCallback) {
          return onFinishCallback.c(currentStep, ani);
        });
        onFinishOneTimeCallbacks.length = 0;
        shouldCalculateNumAnimations = true;
        finished = true;
      };

      var animationFinish = function animationFinish() {
        if (numAnimationsRunning === 0) {
          return;
        }

        numAnimationsRunning--;

        if (numAnimationsRunning === 0) {
          afterAnimation();

          if (parentAnimation) {
            parentAnimation.animationFinish();
          }
        }
      };

      var initializeCSSAnimation = function initializeCSSAnimation() {
        var toggleAnimationName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        cleanUpStyleSheets();
        elements.forEach(function (element) {
          if (_keyframes.length > 0) {
            var keyframeRules = generateKeyframeRules(_keyframes);
            keyframeName = generateKeyframeName(keyframeRules);
            var stylesheet = createKeyframeStylesheet(keyframeName, keyframeRules, element);
            stylesheets.push(stylesheet);
            setStyleProperty(element, 'animation-duration', "".concat(getDuration(), "ms"));
            setStyleProperty(element, 'animation-timing-function', getEasing());
            setStyleProperty(element, 'animation-delay', "".concat(getDelay(), "ms"));
            setStyleProperty(element, 'animation-fill-mode', getFill());
            setStyleProperty(element, 'animation-direction', getDirection());
            var iterationsCount = getIterations() === Infinity ? 'infinite' : getIterations().toString();
            setStyleProperty(element, 'animation-iteration-count', iterationsCount);
            setStyleProperty(element, 'animation-play-state', 'paused');

            if (toggleAnimationName) {
              setStyleProperty(element, 'animation-name', "".concat(stylesheet.id, "-alt"));
            }

            Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__["r"])(function () {
              setStyleProperty(element, 'animation-name', stylesheet.id || null);
            });
          }
        });
      };

      var initializeWebAnimation = function initializeWebAnimation() {
        elements.forEach(function (element) {
          var animation = element.animate(_keyframes, {
            delay: getDelay(),
            duration: getDuration(),
            easing: getEasing(),
            iterations: getIterations(),
            fill: getFill(),
            direction: getDirection()
          });
          animation.pause();
          webAnimations.push(animation);
        });

        if (webAnimations.length > 0) {
          webAnimations[0].onfinish = function () {
            animationFinish();
          };
        }
      };

      var initializeAnimation = function initializeAnimation() {
        var toggleAnimationName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        beforeAnimation();

        if (_keyframes.length > 0) {
          if (supportsWebAnimations) {
            initializeWebAnimation();
          } else {
            initializeCSSAnimation(toggleAnimationName);
          }
        }

        initialized = true;
      };

      var setAnimationStep = function setAnimationStep(step) {
        step = Math.min(Math.max(step, 0), 0.999);

        if (supportsWebAnimations) {
          webAnimations.forEach(function (animation) {
            animation.currentTime = animation.effect.getComputedTiming().delay + getDuration() * step;
            animation.pause();
          });
        } else {
          var animationDelay = getDelay() || 0;
          var animationDuration = "-".concat(animationDelay + getDuration() * step, "ms");
          elements.forEach(function (element) {
            if (_keyframes.length > 0) {
              setStyleProperty(element, 'animation-delay', animationDuration);
              setStyleProperty(element, 'animation-play-state', 'paused');
            }
          });
        }
      };

      var updateWebAnimation = function updateWebAnimation() {
        webAnimations.forEach(function (animation) {
          animation.effect.updateTiming({
            delay: getDelay(),
            duration: getDuration(),
            easing: getEasing(),
            iterations: getIterations(),
            fill: getFill(),
            direction: getDirection()
          });
        });
      };

      var updateCSSAnimation = function updateCSSAnimation() {
        var toggleAnimationName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        elements.forEach(function (element) {
          Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__["r"])(function () {
            setStyleProperty(element, 'animation-name', keyframeName || null);
            setStyleProperty(element, 'animation-duration', "".concat(getDuration(), "ms"));
            setStyleProperty(element, 'animation-timing-function', getEasing());
            setStyleProperty(element, 'animation-delay', "".concat(getDelay(), "ms"));
            setStyleProperty(element, 'animation-fill-mode', getFill() || null);
            setStyleProperty(element, 'animation-direction', getDirection() || null);
            var iterationsCount = getIterations() === Infinity ? 'infinite' : getIterations().toString();
            setStyleProperty(element, 'animation-iteration-count', iterationsCount);

            if (toggleAnimationName) {
              setStyleProperty(element, 'animation-name', "".concat(keyframeName, "-alt"));
            }

            Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__["r"])(function () {
              setStyleProperty(element, 'animation-name', keyframeName || null);
            });
          });
        });
      };

      var update = function update() {
        var deep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var toggleAnimationName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        if (deep) {
          childAnimations.forEach(function (animation) {
            animation.update(deep);
          });
        }

        if (supportsWebAnimations) {
          updateWebAnimation();
        } else {
          updateCSSAnimation(toggleAnimationName);
        }

        return ani;
      };

      var progressStart = function progressStart() {
        var forceLinearEasing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        childAnimations.forEach(function (animation) {
          animation.progressStart(forceLinearEasing);
        });
        pauseAnimation();
        shouldForceLinearEasing = forceLinearEasing;

        if (!initialized) {
          initializeAnimation();
        } else {
          update();
          setAnimationStep(0);
        }

        return ani;
      };

      var progressStep = function progressStep(step) {
        childAnimations.forEach(function (animation) {
          animation.progressStep(step);
        });
        setAnimationStep(step);
        return ani;
      };

      var progressEnd = function progressEnd(playTo, step, dur) {
        shouldForceLinearEasing = false;
        childAnimations.forEach(function (animation) {
          animation.progressEnd(playTo, step, dur);
        });

        if (dur !== undefined) {
          forceDurationValue = dur;
        }

        finished = false;
        willComplete = playTo === 1;

        if (!willComplete) {
          forceDirectionValue = getDirection() === 'reverse' ? 'normal' : 'reverse';

          if (supportsWebAnimations) {
            update();
            setAnimationStep(1 - step);
          } else {
            forceDelayValue = (1 - step) * getDuration() * -1;
            update(false, false);
          }
        } else {
          if (!supportsWebAnimations) {
            forceDelayValue = step * getDuration() * -1;
            update(false, false);
          }
        }

        onFinish(function () {
          willComplete = true;
          forceDurationValue = undefined;
          forceDirectionValue = undefined;
          forceDelayValue = undefined;
        }, {
          oneTimeCallback: true
        });

        if (!parentAnimation) {
          play();
        }

        return ani;
      };

      var pauseAnimation = function pauseAnimation() {
        if (initialized) {
          if (supportsWebAnimations) {
            webAnimations.forEach(function (animation) {
              animation.pause();
            });
          } else {
            elements.forEach(function (element) {
              setStyleProperty(element, 'animation-play-state', 'paused');
            });
          }
        }
      };

      var pause = function pause() {
        childAnimations.forEach(function (animation) {
          animation.pause();
        });
        pauseAnimation();
        return ani;
      };

      var playAsync = function playAsync() {
        return play();
      };

      var playSync = function playSync() {
        play({
          sync: true
        });
        return ani;
      };

      var onAnimationEndFallback = function onAnimationEndFallback() {
        cssAnimationsTimerFallback = undefined;
        animationFinish();
      };

      var clearCSSAnimationsTimeout = function clearCSSAnimationsTimeout() {
        if (cssAnimationsTimerFallback) {
          clearTimeout(cssAnimationsTimerFallback);
        }
      };

      var playCSSAnimations = function playCSSAnimations() {
        clearCSSAnimationsTimeout();
        elements.forEach(function (element) {
          if (_keyframes.length > 0) {
            Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__["r"])(function () {
              setStyleProperty(element, 'animation-play-state', 'running');
            });
          }
        });

        if (_keyframes.length === 0 || elements.length === 0) {
          animationFinish();
        } else {
          /**
           * This is a catchall in the event that a CSS Animation did not finish.
           * The Web Animations API has mechanisms in place for preventing this.
           * CSS Animations will not fire an `animationend` event
           * for elements with `display: none`. The Web Animations API
           * accounts for this, but using raw CSS Animations requires
           * this workaround.
           */
          var animationDelay = getDelay() || 0;
          var animationDuration = getDuration() || 0;
          var animationIterations = getIterations() || 1;
          cssAnimationsTimerFallback = setTimeout(onAnimationEndFallback, animationDelay + animationDuration * animationIterations + ANIMATION_END_FALLBACK_PADDING_MS);
          animationEnd(elements[0], function () {
            clearCSSAnimationsTimeout();
            /**
             * Ensure that clean up
             * is always done a frame
             * before the onFinish handlers
             * are fired. Otherwise, there
             * may be flickering if a new
             * animation is started on the same
             * element too quickly
             *
             * TODO: Is there a cleaner way to do this?
             */

            Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__["r"])(function () {
              clearCSSAnimationPlayState();
              Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__["r"])(animationFinish);
            });
          });
        }
      };

      var clearCSSAnimationPlayState = function clearCSSAnimationPlayState() {
        elements.forEach(function (element) {
          removeStyleProperty(element, 'animation-duration');
          removeStyleProperty(element, 'animation-delay');
          removeStyleProperty(element, 'animation-play-state');
        });
      };

      var playWebAnimations = function playWebAnimations() {
        webAnimations.forEach(function (animation) {
          animation.play();
        });

        if (_keyframes.length === 0 || elements.length === 0) {
          animationFinish();
        }
      };

      var resetAnimation = function resetAnimation() {
        if (supportsWebAnimations) {
          setAnimationStep(0);
        } else {
          updateCSSAnimation();
        }
      };

      var play = function play(opts) {
        return new Promise(function (resolve) {
          if (opts && opts.sync) {
            shouldForceSyncPlayback = true;
            onFinish(function () {
              return shouldForceSyncPlayback = false;
            }, {
              oneTimeCallback: true
            });
          }

          if (!initialized) {
            initializeAnimation();
          }

          if (finished) {
            resetAnimation();
            finished = false;
          }

          if (shouldCalculateNumAnimations) {
            numAnimationsRunning = childAnimations.length + 1;
            shouldCalculateNumAnimations = false;
          }

          onFinish(function () {
            return resolve();
          }, {
            oneTimeCallback: true
          });
          childAnimations.forEach(function (animation) {
            animation.play();
          });

          if (supportsWebAnimations) {
            playWebAnimations();
          } else {
            playCSSAnimations();
          }
        });
      };

      var stop = function stop() {
        childAnimations.forEach(function (animation) {
          animation.stop();
        });

        if (initialized) {
          cleanUpElements();
          initialized = false;
        }
      };

      var from = function from(property, value) {
        var firstFrame = _keyframes[0];

        if (firstFrame !== undefined && firstFrame.offset === 0) {
          firstFrame[property] = value;
        } else {
          _keyframes = [_defineProperty({
            offset: 0
          }, property, value)].concat(_toConsumableArray(_keyframes));
        }

        return ani;
      };

      var to = function to(property, value) {
        var lastFrame = _keyframes[_keyframes.length - 1];

        if (lastFrame !== undefined && lastFrame.offset === 1) {
          lastFrame[property] = value;
        } else {
          _keyframes = [].concat(_toConsumableArray(_keyframes), [_defineProperty({
            offset: 1
          }, property, value)]);
        }

        return ani;
      };

      var fromTo = function fromTo(property, fromValue, toValue) {
        return from(property, fromValue).to(property, toValue);
      };

      return ani = {
        parentAnimation: parentAnimation,
        elements: elements,
        childAnimations: childAnimations,
        animationFinish: animationFinish,
        from: from,
        to: to,
        fromTo: fromTo,
        parent: parent,
        play: play,
        playAsync: playAsync,
        playSync: playSync,
        pause: pause,
        stop: stop,
        destroy: destroy,
        keyframes: keyframes,
        addAnimation: addAnimation,
        addElement: addElement,
        update: update,
        fill: fill,
        direction: direction,
        iterations: iterations,
        duration: duration,
        easing: easing,
        delay: delay,
        getWebAnimations: getWebAnimations,
        getKeyframes: getKeyframes,
        getFill: getFill,
        getDirection: getDirection,
        getDelay: getDelay,
        getIterations: getIterations,
        getEasing: getEasing,
        getDuration: getDuration,
        afterAddRead: afterAddRead,
        afterAddWrite: afterAddWrite,
        afterClearStyles: afterClearStyles,
        afterStyles: afterStyles,
        afterRemoveClass: afterRemoveClass,
        afterAddClass: afterAddClass,
        beforeAddRead: beforeAddRead,
        beforeAddWrite: beforeAddWrite,
        beforeClearStyles: beforeClearStyles,
        beforeStyles: beforeStyles,
        beforeRemoveClass: beforeRemoveClass,
        beforeAddClass: beforeAddClass,
        onFinish: onFinish,
        progressStart: progressStart,
        progressStep: progressStep,
        progressEnd: progressEnd
      };
    };
    /***/

  }
}]);
//# sourceMappingURL=0-es5.js.map