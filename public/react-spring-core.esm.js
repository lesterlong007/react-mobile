"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  BailSignal: true,
  Controller: true,
  FrameValue: true,
  Interpolation: true,
  Spring: true,
  SpringContext: true,
  SpringRef: true,
  SpringValue: true,
  Trail: true,
  Transition: true,
  config: true,
  inferTo: true,
  interpolate: true,
  to: true,
  update: true,
  useChain: true,
  useSpring: true,
  useSpringRef: true,
  useSprings: true,
  useTrail: true,
  useTransition: true,
  Globals: true,
  createInterpolator: true
};
exports.FrameValue = exports.Controller = exports.BailSignal = void 0;
Object.defineProperty(exports, "Globals", {
  enumerable: true,
  get: function get() {
    return _shared.Globals;
  }
});
exports.Interpolation = void 0;
exports.Spring = Spring;
exports.SpringValue = exports.SpringRef = exports.SpringContext = void 0;
exports.Trail = Trail;
exports.Transition = Transition;
exports.config = void 0;
Object.defineProperty(exports, "createInterpolator", {
  enumerable: true,
  get: function get() {
    return _shared.createInterpolator;
  }
});
exports.inferTo = inferTo;
exports.update = exports.to = exports.interpolate = void 0;
exports.useChain = useChain;
exports.useSpring = useSpring;
exports.useSpringRef = void 0;
exports.useSprings = useSprings;
exports.useTrail = useTrail;
exports.useTransition = useTransition;

var _shared = require("@react-spring/shared");

var React = _interopRequireWildcard(require("react"));

var _animated = require("@react-spring/animated");

var _animated2 = require("@react-spring/types/animated");

Object.keys(_animated2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _animated2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _animated2[key];
    }
  });
});

var _interpolation = require("@react-spring/types/interpolation");

Object.keys(_interpolation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _interpolation[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _interpolation[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function callProp(value) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return _shared.is.fun(value) ? value.apply(void 0, args) : value;
}

var matchProp = function matchProp(value, key) {
  return value === true || !!(key && value && (_shared.is.fun(value) ? value(key) : (0, _shared.toArray)(value).includes(key)));
};

var resolveProp = function resolveProp(prop, key) {
  return _shared.is.obj(prop) ? key && prop[key] : prop;
};

var getDefaultProp = function getDefaultProp(props, key) {
  return props["default"] === true ? props[key] : props["default"] ? props["default"][key] : undefined;
};

var noopTransform = function noopTransform(value) {
  return value;
};

var getDefaultProps = function getDefaultProps(props) {
  var transform = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noopTransform;
  var keys = DEFAULT_PROPS;

  if (props["default"] && props["default"] !== true) {
    props = props["default"];
    keys = Object.keys(props);
  }

  var defaults = {};

  var _iterator = _createForOfIteratorHelper(keys),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var key = _step.value;
      var value = transform(props[key], key);

      if (!_shared.is.und(value)) {
        defaults[key] = value;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return defaults;
};

var DEFAULT_PROPS = ['config', 'onProps', 'onStart', 'onChange', 'onPause', 'onResume', 'onRest'];
var RESERVED_PROPS = {
  config: 1,
  from: 1,
  to: 1,
  ref: 1,
  loop: 1,
  reset: 1,
  pause: 1,
  cancel: 1,
  reverse: 1,
  immediate: 1,
  "default": 1,
  delay: 1,
  onProps: 1,
  onStart: 1,
  onChange: 1,
  onPause: 1,
  onResume: 1,
  onRest: 1,
  onResolve: 1,
  items: 1,
  trail: 1,
  sort: 1,
  expires: 1,
  initial: 1,
  enter: 1,
  update: 1,
  leave: 1,
  children: 1,
  onDestroyed: 1,
  keys: 1,
  callId: 1,
  parentId: 1
};

function getForwardProps(props) {
  var forward = {};
  var count = 0;
  (0, _shared.eachProp)(props, function (value, prop) {
    if (!RESERVED_PROPS[prop]) {
      forward[prop] = value;
      count++;
    }
  });

  if (count) {
    return forward;
  }
}

function inferTo(props) {
  var to = getForwardProps(props);

  if (to) {
    var out = {
      to: to
    };
    (0, _shared.eachProp)(props, function (val, key) {
      return key in to || (out[key] = val);
    });
    return out;
  }

  return _extends({}, props);
}

function computeGoal(value) {
  value = (0, _shared.getFluidValue)(value);
  return _shared.is.arr(value) ? value.map(computeGoal) : (0, _shared.isAnimatedString)(value) ? _shared.Globals.createStringInterpolator({
    range: [0, 1],
    output: [value, value]
  })(1) : value;
}

function hasProps(props) {
  for (var _ in props) {
    return true;
  }

  return false;
}

function isAsyncTo(to) {
  return _shared.is.fun(to) || _shared.is.arr(to) && _shared.is.obj(to[0]);
}

function detachRefs(ctrl, ref) {
  var _ctrl$ref;

  (_ctrl$ref = ctrl.ref) == null ? void 0 : _ctrl$ref["delete"](ctrl);
  ref == null ? void 0 : ref["delete"](ctrl);
}

function replaceRef(ctrl, ref) {
  if (ref && ctrl.ref !== ref) {
    var _ctrl$ref2;

    (_ctrl$ref2 = ctrl.ref) == null ? void 0 : _ctrl$ref2["delete"](ctrl);
    ref.add(ctrl);
    ctrl.ref = ref;
  }
}

function useChain(refs, timeSteps) {
  var timeFrame = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;
  (0, _shared.useLayoutEffect)(function () {
    if (timeSteps) {
      var prevDelay = 0;
      (0, _shared.each)(refs, function (ref, i) {
        var controllers = ref.current;

        if (controllers.length) {
          var delay = timeFrame * timeSteps[i];
          if (isNaN(delay)) delay = prevDelay;else prevDelay = delay;
          (0, _shared.each)(controllers, function (ctrl) {
            (0, _shared.each)(ctrl.queue, function (props) {
              var memoizedDelayProp = props.delay;

              props.delay = function (key) {
                return delay + callProp(memoizedDelayProp || 0, key);
              };
            });
            ctrl.start();
          });
        }
      });
    } else {
      var p = Promise.resolve();
      (0, _shared.each)(refs, function (ref) {
        var controllers = ref.current;

        if (controllers.length) {
          var queues = controllers.map(function (ctrl) {
            var q = ctrl.queue;
            ctrl.queue = [];
            return q;
          });
          p = p.then(function () {
            (0, _shared.each)(controllers, function (ctrl, i) {
              return (0, _shared.each)(queues[i] || [], function (update) {
                return ctrl.queue.push(update);
              });
            });
            return Promise.all(ref.start());
          });
        }
      });
    }
  });
}

var config = {
  "default": {
    tension: 170,
    friction: 26
  },
  gentle: {
    tension: 120,
    friction: 14
  },
  wobbly: {
    tension: 180,
    friction: 12
  },
  stiff: {
    tension: 210,
    friction: 20
  },
  slow: {
    tension: 280,
    friction: 60
  },
  molasses: {
    tension: 280,
    friction: 120
  }
};
exports.config = config;

var linear = function linear(t) {
  return t;
};

var defaults = _extends({}, config["default"], {
  mass: 1,
  damping: 1,
  easing: linear,
  clamp: false
});

var AnimationConfig = function AnimationConfig() {
  _classCallCheck(this, AnimationConfig);

  this.tension = void 0;
  this.friction = void 0;
  this.frequency = void 0;
  this.damping = void 0;
  this.mass = void 0;
  this.velocity = 0;
  this.restVelocity = void 0;
  this.precision = void 0;
  this.progress = void 0;
  this.duration = void 0;
  this.easing = void 0;
  this.clamp = void 0;
  this.bounce = void 0;
  this.decay = void 0;
  this.round = void 0;
  Object.assign(this, defaults);
};

function mergeConfig(config, newConfig, defaultConfig) {
  if (defaultConfig) {
    defaultConfig = _extends({}, defaultConfig);
    sanitizeConfig(defaultConfig, newConfig);
    newConfig = _extends({}, defaultConfig, newConfig);
  }

  sanitizeConfig(config, newConfig);
  Object.assign(config, newConfig);

  for (var key in defaults) {
    if (config[key] == null) {
      config[key] = defaults[key];
    }
  }

  var mass = config.mass,
      frequency = config.frequency,
      damping = config.damping;

  if (!_shared.is.und(frequency)) {
    if (frequency < 0.01) frequency = 0.01;
    if (damping < 0) damping = 0;
    config.tension = Math.pow(2 * Math.PI / frequency, 2) * mass;
    config.friction = 4 * Math.PI * damping * mass / frequency;
  }

  return config;
}

function sanitizeConfig(config, props) {
  if (!_shared.is.und(props.decay)) {
    config.duration = undefined;
  } else {
    var isTensionConfig = !_shared.is.und(props.tension) || !_shared.is.und(props.friction);

    if (isTensionConfig || !_shared.is.und(props.frequency) || !_shared.is.und(props.damping) || !_shared.is.und(props.mass)) {
      config.duration = undefined;
      config.decay = undefined;
    }

    if (isTensionConfig) {
      config.frequency = undefined;
    }
  }
}

var emptyArray = [];

var Animation = function Animation() {
  _classCallCheck(this, Animation);

  this.changed = false;
  this.values = emptyArray;
  this.toValues = null;
  this.fromValues = emptyArray;
  this.to = void 0;
  this.from = void 0;
  this.config = new AnimationConfig();
  this.immediate = false;
};

function scheduleProps(callId, _ref2) {
  var key = _ref2.key,
      props = _ref2.props,
      defaultProps = _ref2.defaultProps,
      state = _ref2.state,
      actions = _ref2.actions;
  return new Promise(function (resolve, reject) {
    var _props$cancel;

    var delay;
    var timeout;
    var cancel = matchProp((_props$cancel = props.cancel) != null ? _props$cancel : defaultProps == null ? void 0 : defaultProps.cancel, key);

    if (cancel) {
      onStart();
    } else {
      if (!_shared.is.und(props.pause)) {
        state.paused = matchProp(props.pause, key);
      }

      var pause = defaultProps == null ? void 0 : defaultProps.pause;

      if (pause !== true) {
        pause = state.paused || matchProp(pause, key);
      }

      delay = callProp(props.delay || 0, key);

      if (pause) {
        state.resumeQueue.add(onResume);
        actions.pause();
      } else {
        actions.resume();
        onResume();
      }
    }

    function onPause() {
      state.resumeQueue.add(onResume);
      state.timeouts["delete"](timeout);
      timeout.cancel();
      delay = timeout.time - _shared.raf.now();
    }

    function onResume() {
      if (delay > 0) {
        timeout = _shared.raf.setTimeout(onStart, delay);
        state.pauseQueue.add(onPause);
        state.timeouts.add(timeout);
      } else {
        onStart();
      }
    }

    function onStart() {
      state.pauseQueue["delete"](onPause);
      state.timeouts["delete"](timeout);

      if (callId <= (state.cancelId || 0)) {
        cancel = true;
      }

      try {
        actions.start(_extends({}, props, {
          callId: callId,
          cancel: cancel
        }), resolve);
      } catch (err) {
        reject(err);
      }
    }
  });
}

var getCombinedResult = function getCombinedResult(target, results) {
  return results.length == 1 ? results[0] : results.some(function (result) {
    return result.cancelled;
  }) ? getCancelledResult(target.get()) : results.every(function (result) {
    return result.noop;
  }) ? getNoopResult(target.get()) : getFinishedResult(target.get(), results.every(function (result) {
    return result.finished;
  }));
};

var getNoopResult = function getNoopResult(value) {
  return {
    value: value,
    noop: true,
    finished: true,
    cancelled: false
  };
};

var getFinishedResult = function getFinishedResult(value, finished) {
  var cancelled = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return {
    value: value,
    finished: finished,
    cancelled: cancelled
  };
};

var getCancelledResult = function getCancelledResult(value) {
  return {
    value: value,
    cancelled: true,
    finished: false
  };
};

function runAsync(to, props, state, target) {
  var callId = props.callId,
      parentId = props.parentId,
      onRest = props.onRest;
  var prevTo = state.asyncTo,
      prevPromise = state.promise;

  if (!parentId && to === prevTo && !props.reset) {
    return prevPromise;
  }

  return state.promise = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var defaultProps, preventBail, bail, bailPromise, bailIfEnded, animate, result, animating;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            state.asyncId = callId;
            state.asyncTo = to;
            defaultProps = getDefaultProps(props, function (value, key) {
              return key === 'onRest' ? undefined : value;
            });
            bailPromise = new Promise(function (resolve, reject) {
              return preventBail = resolve, bail = reject;
            });

            bailIfEnded = function bailIfEnded(bailSignal) {
              var bailResult = callId <= (state.cancelId || 0) && getCancelledResult(target) || callId !== state.asyncId && getFinishedResult(target, false);

              if (bailResult) {
                bailSignal.result = bailResult;
                bail(bailSignal);
                throw bailSignal;
              }
            };

            animate = function animate(arg1, arg2) {
              var bailSignal = new BailSignal();
              var skipAnimationSignal = new SkipAniamtionSignal();
              return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var props, result;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (!_shared.Globals.skipAnimation) {
                          _context.next = 5;
                          break;
                        }

                        stopAsync(state);
                        skipAnimationSignal.result = getFinishedResult(target, false);
                        bail(skipAnimationSignal);
                        throw skipAnimationSignal;

                      case 5:
                        bailIfEnded(bailSignal);
                        props = _shared.is.obj(arg1) ? _extends({}, arg1) : _extends({}, arg2, {
                          to: arg1
                        });
                        props.parentId = callId;
                        (0, _shared.eachProp)(defaultProps, function (value, key) {
                          if (_shared.is.und(props[key])) {
                            props[key] = value;
                          }
                        });
                        _context.next = 11;
                        return target.start(props);

                      case 11:
                        result = _context.sent;
                        bailIfEnded(bailSignal);

                        if (!state.paused) {
                          _context.next = 16;
                          break;
                        }

                        _context.next = 16;
                        return new Promise(function (resume) {
                          state.resumeQueue.add(resume);
                        });

                      case 16:
                        return _context.abrupt("return", result);

                      case 17:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }))();
            };

            if (!_shared.Globals.skipAnimation) {
              _context3.next = 9;
              break;
            }

            stopAsync(state);
            return _context3.abrupt("return", getFinishedResult(target, false));

          case 9:
            _context3.prev = 9;

            if (_shared.is.arr(to)) {
              animating = function () {
                var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(queue) {
                  var _iterator2, _step2, _props;

                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _iterator2 = _createForOfIteratorHelper(queue);
                          _context2.prev = 1;

                          _iterator2.s();

                        case 3:
                          if ((_step2 = _iterator2.n()).done) {
                            _context2.next = 9;
                            break;
                          }

                          _props = _step2.value;
                          _context2.next = 7;
                          return animate(_props);

                        case 7:
                          _context2.next = 3;
                          break;

                        case 9:
                          _context2.next = 14;
                          break;

                        case 11:
                          _context2.prev = 11;
                          _context2.t0 = _context2["catch"](1);

                          _iterator2.e(_context2.t0);

                        case 14:
                          _context2.prev = 14;

                          _iterator2.f();

                          return _context2.finish(14);

                        case 17:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, null, [[1, 11, 14, 17]]);
                }));

                return function (_x) {
                  return _ref5.apply(this, arguments);
                };
              }()(to);
            } else {
              animating = Promise.resolve(to(animate, target.stop.bind(target)));
            }

            _context3.next = 13;
            return Promise.all([animating.then(preventBail), bailPromise]);

          case 13:
            result = getFinishedResult(target.get(), true, false);
            _context3.next = 27;
            break;

          case 16:
            _context3.prev = 16;
            _context3.t0 = _context3["catch"](9);

            if (!(_context3.t0 instanceof BailSignal)) {
              _context3.next = 22;
              break;
            }

            result = _context3.t0.result;
            _context3.next = 27;
            break;

          case 22:
            if (!(_context3.t0 instanceof SkipAniamtionSignal)) {
              _context3.next = 26;
              break;
            }

            result = _context3.t0.result;
            _context3.next = 27;
            break;

          case 26:
            throw _context3.t0;

          case 27:
            _context3.prev = 27;

            if (callId == state.asyncId) {
              state.asyncId = parentId;
              state.asyncTo = parentId ? prevTo : undefined;
              state.promise = parentId ? prevPromise : undefined;
            }

            return _context3.finish(27);

          case 30:
            if (_shared.is.fun(onRest)) {
              _shared.raf.batchedUpdates(function () {
                onRest(result, target, target.item);
              });
            }

            return _context3.abrupt("return", result);

          case 32:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[9, 16, 27, 30]]);
  }))();
}

function stopAsync(state, cancelId) {
  (0, _shared.flush)(state.timeouts, function (t) {
    return t.cancel();
  });
  state.pauseQueue.clear();
  state.resumeQueue.clear();
  state.asyncId = state.asyncTo = state.promise = undefined;
  if (cancelId) state.cancelId = cancelId;
}

var BailSignal = /*#__PURE__*/function (_Error) {
  _inherits(BailSignal, _Error);

  var _super = _createSuper(BailSignal);

  function BailSignal() {
    var _this;

    _classCallCheck(this, BailSignal);

    _this = _super.call(this, 'An async animation has been interrupted. You see this error because you ' + 'forgot to use `await` or `.catch(...)` on its returned promise.');
    _this.result = void 0;
    return _this;
  }

  return BailSignal;
}( /*#__PURE__*/_wrapNativeSuper(Error));

exports.BailSignal = BailSignal;

var SkipAniamtionSignal = /*#__PURE__*/function (_Error2) {
  _inherits(SkipAniamtionSignal, _Error2);

  var _super2 = _createSuper(SkipAniamtionSignal);

  function SkipAniamtionSignal() {
    var _this2;

    _classCallCheck(this, SkipAniamtionSignal);

    _this2 = _super2.call(this, 'SkipAnimationSignal');
    _this2.result = void 0;
    return _this2;
  }

  return SkipAniamtionSignal;
}( /*#__PURE__*/_wrapNativeSuper(Error));

var isFrameValue = function isFrameValue(value) {
  return value instanceof FrameValue;
};

var nextId$1 = 1;

var FrameValue = /*#__PURE__*/function (_FluidValue) {
  _inherits(FrameValue, _FluidValue);

  var _super3 = _createSuper(FrameValue);

  function FrameValue() {
    var _this3;

    _classCallCheck(this, FrameValue);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this3 = _super3.call.apply(_super3, [this].concat(args));
    _this3.id = nextId$1++;
    _this3.key = void 0;
    _this3._priority = 0;
    return _this3;
  }

  _createClass(FrameValue, [{
    key: "priority",
    get: function get() {
      return this._priority;
    },
    set: function set(priority) {
      if (this._priority != priority) {
        this._priority = priority;

        this._onPriorityChange(priority);
      }
    }
  }, {
    key: "get",
    value: function get() {
      var node = (0, _animated.getAnimated)(this);
      return node && node.getValue();
    }
  }, {
    key: "to",
    value: function to() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _shared.Globals.to(this, args);
    }
  }, {
    key: "interpolate",
    value: function interpolate() {
      (0, _shared.deprecateInterpolate)();

      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _shared.Globals.to(this, args);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.get();
    }
  }, {
    key: "observerAdded",
    value: function observerAdded(count) {
      if (count == 1) this._attach();
    }
  }, {
    key: "observerRemoved",
    value: function observerRemoved(count) {
      if (count == 0) this._detach();
    }
  }, {
    key: "_attach",
    value: function _attach() {}
  }, {
    key: "_detach",
    value: function _detach() {}
  }, {
    key: "_onChange",
    value: function _onChange(value) {
      var idle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      (0, _shared.callFluidObservers)(this, {
        type: 'change',
        parent: this,
        value: value,
        idle: idle
      });
    }
  }, {
    key: "_onPriorityChange",
    value: function _onPriorityChange(priority) {
      if (!this.idle) {
        _shared.frameLoop.sort(this);
      }

      (0, _shared.callFluidObservers)(this, {
        type: 'priority',
        parent: this,
        priority: priority
      });
    }
  }]);

  return FrameValue;
}(_shared.FluidValue);

exports.FrameValue = FrameValue;
var $P = Symbol["for"]('SpringPhase');
var HAS_ANIMATED = 1;
var IS_ANIMATING = 2;
var IS_PAUSED = 4;

var hasAnimated = function hasAnimated(target) {
  return (target[$P] & HAS_ANIMATED) > 0;
};

var isAnimating = function isAnimating(target) {
  return (target[$P] & IS_ANIMATING) > 0;
};

var isPaused = function isPaused(target) {
  return (target[$P] & IS_PAUSED) > 0;
};

var setActiveBit = function setActiveBit(target, active) {
  return active ? target[$P] |= IS_ANIMATING | HAS_ANIMATED : target[$P] &= ~IS_ANIMATING;
};

var setPausedBit = function setPausedBit(target, paused) {
  return paused ? target[$P] |= IS_PAUSED : target[$P] &= ~IS_PAUSED;
};

var SpringValue = /*#__PURE__*/function (_FrameValue) {
  _inherits(SpringValue, _FrameValue);

  var _super4 = _createSuper(SpringValue);

  function SpringValue(arg1, arg2) {
    var _this4;

    _classCallCheck(this, SpringValue);

    _this4 = _super4.call(this);
    _this4.key = void 0;
    _this4.animation = new Animation();
    _this4.queue = void 0;
    _this4.defaultProps = {};
    _this4._state = {
      paused: false,
      pauseQueue: new Set(),
      resumeQueue: new Set(),
      timeouts: new Set()
    };
    _this4._pendingCalls = new Set();
    _this4._lastCallId = 0;
    _this4._lastToId = 0;
    _this4._memoizedDuration = 0;

    if (!_shared.is.und(arg1) || !_shared.is.und(arg2)) {
      var props = _shared.is.obj(arg1) ? _extends({}, arg1) : _extends({}, arg2, {
        from: arg1
      });

      if (_shared.is.und(props["default"])) {
        props["default"] = true;
      }

      _this4.start(props);
    }

    return _this4;
  }

  _createClass(SpringValue, [{
    key: "idle",
    get: function get() {
      return !(isAnimating(this) || this._state.asyncTo) || isPaused(this);
    }
  }, {
    key: "goal",
    get: function get() {
      return (0, _shared.getFluidValue)(this.animation.to);
    }
  }, {
    key: "velocity",
    get: function get() {
      var node = (0, _animated.getAnimated)(this);
      return node instanceof _animated.AnimatedValue ? node.lastVelocity || 0 : node.getPayload().map(function (node) {
        return node.lastVelocity || 0;
      });
    }
  }, {
    key: "hasAnimated",
    get: function get() {
      return hasAnimated(this);
    }
  }, {
    key: "isAnimating",
    get: function get() {
      return isAnimating(this);
    }
  }, {
    key: "isPaused",
    get: function get() {
      return isPaused(this);
    }
  }, {
    key: "advance",
    value: function advance(dt) {
      var _this5 = this;

      var idle = true;
      var changed = false;
      var anim = this.animation;
      var config = anim.config,
          toValues = anim.toValues;
      var payload = (0, _animated.getPayload)(anim.to);

      if (!payload && (0, _shared.hasFluidValue)(anim.to)) {
        toValues = (0, _shared.toArray)((0, _shared.getFluidValue)(anim.to));
      }

      anim.values.forEach(function (node, i) {
        if (node.done) return;
        var to = node.constructor == _animated.AnimatedString ? 1 : payload ? payload[i].lastPosition : toValues[i];
        var finished = anim.immediate;
        var position = to;

        if (!finished) {
          position = node.lastPosition;

          if (config.tension <= 0) {
            node.done = true;
            return;
          }

          var elapsed = node.elapsedTime += dt;
          var from = anim.fromValues[i];
          var v0 = node.v0 != null ? node.v0 : node.v0 = _shared.is.arr(config.velocity) ? config.velocity[i] : config.velocity;
          var velocity;

          if (!_shared.is.und(config.duration)) {
            var p = 1;

            if (config.duration > 0) {
              if (_this5._memoizedDuration !== config.duration) {
                _this5._memoizedDuration = config.duration;

                if (node.durationProgress > 0) {
                  node.elapsedTime = config.duration * node.durationProgress;
                  elapsed = node.elapsedTime += dt;
                }
              }

              p = (config.progress || 0) + elapsed / _this5._memoizedDuration;
              p = p > 1 ? 1 : p < 0 ? 0 : p;
              node.durationProgress = p;
            }

            position = from + config.easing(p) * (to - from);
            velocity = (position - node.lastPosition) / dt;
            finished = p == 1;
          } else if (config.decay) {
            var decay = config.decay === true ? 0.998 : config.decay;
            var e = Math.exp(-(1 - decay) * elapsed);
            position = from + v0 / (1 - decay) * (1 - e);
            finished = Math.abs(node.lastPosition - position) < 0.1;
            velocity = v0 * e;
          } else {
            velocity = node.lastVelocity == null ? v0 : node.lastVelocity;
            var precision = config.precision || (from == to ? 0.005 : Math.min(1, Math.abs(to - from) * 0.001));
            var restVelocity = config.restVelocity || precision / 10;
            var bounceFactor = config.clamp ? 0 : config.bounce;
            var canBounce = !_shared.is.und(bounceFactor);
            var isGrowing = from == to ? node.v0 > 0 : from < to;
            var isMoving;
            var isBouncing = false;
            var step = 1;
            var numSteps = Math.ceil(dt / step);

            for (var n = 0; n < numSteps; ++n) {
              isMoving = Math.abs(velocity) > restVelocity;

              if (!isMoving) {
                finished = Math.abs(to - position) <= precision;

                if (finished) {
                  break;
                }
              }

              if (canBounce) {
                isBouncing = position == to || position > to == isGrowing;

                if (isBouncing) {
                  velocity = -velocity * bounceFactor;
                  position = to;
                }
              }

              var springForce = -config.tension * 0.000001 * (position - to);
              var dampingForce = -config.friction * 0.001 * velocity;
              var acceleration = (springForce + dampingForce) / config.mass;
              velocity = velocity + acceleration * step;
              position = position + velocity * step;
            }
          }

          node.lastVelocity = velocity;

          if (Number.isNaN(position)) {
            console.warn("Got NaN while animating:", _this5);
            finished = true;
          }
        }

        if (payload && !payload[i].done) {
          finished = false;
        }

        if (finished) {
          node.done = true;
        } else {
          idle = false;
        }

        if (node.setValue(position, config.round)) {
          changed = true;
        }
      });
      var node = (0, _animated.getAnimated)(this);
      var currVal = node.getValue();

      if (idle) {
        var finalVal = (0, _shared.getFluidValue)(anim.to);

        if ((currVal !== finalVal || changed) && !config.decay) {
          node.setValue(finalVal);

          this._onChange(finalVal);
        } else if (changed && config.decay) {
          this._onChange(currVal);
        }

        this._stop();
      } else if (changed) {
        this._onChange(currVal);
      }
    }
  }, {
    key: "set",
    value: function set(value) {
      var _this6 = this;

      _shared.raf.batchedUpdates(function () {
        _this6._stop();

        _this6._focus(value);

        _this6._set(value);
      });

      return this;
    }
  }, {
    key: "pause",
    value: function pause() {
      this._update({
        pause: true
      });
    }
  }, {
    key: "resume",
    value: function resume() {
      this._update({
        pause: false
      });
    }
  }, {
    key: "finish",
    value: function finish() {
      var _this7 = this;

      if (isAnimating(this)) {
        var _this$animation = this.animation,
            _to = _this$animation.to,
            _config = _this$animation.config;

        _shared.raf.batchedUpdates(function () {
          _this7._onStart();

          if (!_config.decay) {
            _this7._set(_to, false);
          }

          _this7._stop();
        });
      }

      return this;
    }
  }, {
    key: "update",
    value: function update(props) {
      var queue = this.queue || (this.queue = []);
      queue.push(props);
      return this;
    }
  }, {
    key: "start",
    value: function start(to, arg2) {
      var _this8 = this;

      var queue;

      if (!_shared.is.und(to)) {
        queue = [_shared.is.obj(to) ? to : _extends({}, arg2, {
          to: to
        })];
      } else {
        queue = this.queue || [];
        this.queue = [];
      }

      return Promise.all(queue.map(function (props) {
        return _this8._update(props);
      })).then(function (results) {
        return getCombinedResult(_this8, results);
      });
    }
  }, {
    key: "stop",
    value: function stop(cancel) {
      var _this9 = this;

      var to = this.animation.to;

      this._focus(this.get());

      stopAsync(this._state, cancel && this._lastCallId);

      _shared.raf.batchedUpdates(function () {
        return _this9._stop(to, cancel);
      });

      return this;
    }
  }, {
    key: "reset",
    value: function reset() {
      this._update({
        reset: true
      });
    }
  }, {
    key: "eventObserved",
    value: function eventObserved(event) {
      if (event.type == 'change') {
        this._start();
      } else if (event.type == 'priority') {
        this.priority = event.priority + 1;
      }
    }
  }, {
    key: "_prepareNode",
    value: function _prepareNode(props) {
      var key = this.key || '';
      var to = props.to,
          from = props.from;
      to = _shared.is.obj(to) ? to[key] : to;

      if (to == null || isAsyncTo(to)) {
        to = undefined;
      }

      from = _shared.is.obj(from) ? from[key] : from;

      if (from == null) {
        from = undefined;
      }

      var range = {
        to: to,
        from: from
      };

      if (!hasAnimated(this)) {
        if (props.reverse) {
          var _ref6 = [from, to];
          to = _ref6[0];
          from = _ref6[1];
        }

        from = (0, _shared.getFluidValue)(from);

        if (!_shared.is.und(from)) {
          this._set(from);
        } else if (!(0, _animated.getAnimated)(this)) {
          this._set(to);
        }
      }

      return range;
    }
  }, {
    key: "_update",
    value: function _update(_ref, isLoop) {
      var _this10 = this;

      var props = _extends({}, _ref);

      var key = this.key,
          defaultProps = this.defaultProps;
      if (props["default"]) Object.assign(defaultProps, getDefaultProps(props, function (value, prop) {
        return /^on/.test(prop) ? resolveProp(value, key) : value;
      }));
      mergeActiveFn(this, props, 'onProps');
      sendEvent(this, 'onProps', props, this);

      var range = this._prepareNode(props);

      if (Object.isFrozen(this)) {
        throw Error('Cannot animate a `SpringValue` object that is frozen. ' + 'Did you forget to pass your component to `animated(...)` before animating its props?');
      }

      var state = this._state;
      return scheduleProps(++this._lastCallId, {
        key: key,
        props: props,
        defaultProps: defaultProps,
        state: state,
        actions: {
          pause: function pause() {
            if (!isPaused(_this10)) {
              setPausedBit(_this10, true);
              (0, _shared.flushCalls)(state.pauseQueue);
              sendEvent(_this10, 'onPause', getFinishedResult(_this10, checkFinished(_this10, _this10.animation.to)), _this10);
            }
          },
          resume: function resume() {
            if (isPaused(_this10)) {
              setPausedBit(_this10, false);

              if (isAnimating(_this10)) {
                _this10._resume();
              }

              (0, _shared.flushCalls)(state.resumeQueue);
              sendEvent(_this10, 'onResume', getFinishedResult(_this10, checkFinished(_this10, _this10.animation.to)), _this10);
            }
          },
          start: this._merge.bind(this, range)
        }
      }).then(function (result) {
        if (props.loop && result.finished && !(isLoop && result.noop)) {
          var nextProps = createLoopUpdate(props);

          if (nextProps) {
            return _this10._update(nextProps, true);
          }
        }

        return result;
      });
    }
  }, {
    key: "_merge",
    value: function _merge(range, props, resolve) {
      var _this11 = this;

      if (props.cancel) {
        this.stop(true);
        return resolve(getCancelledResult(this));
      }

      var hasToProp = !_shared.is.und(range.to);
      var hasFromProp = !_shared.is.und(range.from);

      if (hasToProp || hasFromProp) {
        if (props.callId > this._lastToId) {
          this._lastToId = props.callId;
        } else {
          return resolve(getCancelledResult(this));
        }
      }

      var key = this.key,
          defaultProps = this.defaultProps,
          anim = this.animation;
      var prevTo = anim.to,
          prevFrom = anim.from;
      var _range$to = range.to,
          to = _range$to === void 0 ? prevTo : _range$to,
          _range$from = range.from,
          from = _range$from === void 0 ? prevFrom : _range$from;

      if (hasFromProp && !hasToProp && (!props["default"] || _shared.is.und(to))) {
        to = from;
      }

      if (props.reverse) {
        var _ref7 = [from, to];
        to = _ref7[0];
        from = _ref7[1];
      }

      var hasFromChanged = !(0, _shared.isEqual)(from, prevFrom);

      if (hasFromChanged) {
        anim.from = from;
      }

      from = (0, _shared.getFluidValue)(from);
      var hasToChanged = !(0, _shared.isEqual)(to, prevTo);

      if (hasToChanged) {
        this._focus(to);
      }

      var hasAsyncTo = isAsyncTo(props.to);
      var config = anim.config;
      var decay = config.decay,
          velocity = config.velocity;

      if (hasToProp || hasFromProp) {
        config.velocity = 0;
      }

      if (props.config && !hasAsyncTo) {
        mergeConfig(config, callProp(props.config, key), props.config !== defaultProps.config ? callProp(defaultProps.config, key) : void 0);
      }

      var node = (0, _animated.getAnimated)(this);

      if (!node || _shared.is.und(to)) {
        return resolve(getFinishedResult(this, true));
      }

      var reset = _shared.is.und(props.reset) ? hasFromProp && !props["default"] : !_shared.is.und(from) && matchProp(props.reset, key);
      var value = reset ? from : this.get();
      var goal = computeGoal(to);
      var isAnimatable = _shared.is.num(goal) || _shared.is.arr(goal) || (0, _shared.isAnimatedString)(goal);
      var immediate = !hasAsyncTo && (!isAnimatable || matchProp(defaultProps.immediate || props.immediate, key));

      if (hasToChanged) {
        var nodeType = (0, _animated.getAnimatedType)(to);

        if (nodeType !== node.constructor) {
          if (immediate) {
            node = this._set(goal);
          } else throw Error("Cannot animate between ".concat(node.constructor.name, " and ").concat(nodeType.name, ", as the \"to\" prop suggests"));
        }
      }

      var goalType = node.constructor;
      var started = (0, _shared.hasFluidValue)(to);
      var finished = false;

      if (!started) {
        var hasValueChanged = reset || !hasAnimated(this) && hasFromChanged;

        if (hasToChanged || hasValueChanged) {
          finished = (0, _shared.isEqual)(computeGoal(value), goal);
          started = !finished;
        }

        if (!(0, _shared.isEqual)(anim.immediate, immediate) && !immediate || !(0, _shared.isEqual)(config.decay, decay) || !(0, _shared.isEqual)(config.velocity, velocity)) {
          started = true;
        }
      }

      if (finished && isAnimating(this)) {
        if (anim.changed && !reset) {
          started = true;
        } else if (!started) {
          this._stop(prevTo);
        }
      }

      if (!hasAsyncTo) {
        if (started || (0, _shared.hasFluidValue)(prevTo)) {
          anim.values = node.getPayload();
          anim.toValues = (0, _shared.hasFluidValue)(to) ? null : goalType == _animated.AnimatedString ? [1] : (0, _shared.toArray)(goal);
        }

        if (anim.immediate != immediate) {
          anim.immediate = immediate;

          if (!immediate && !reset) {
            this._set(prevTo);
          }
        }

        if (started) {
          var onRest = anim.onRest;
          (0, _shared.each)(ACTIVE_EVENTS, function (type) {
            return mergeActiveFn(_this11, props, type);
          });
          var result = getFinishedResult(this, checkFinished(this, prevTo));
          (0, _shared.flushCalls)(this._pendingCalls, result);

          this._pendingCalls.add(resolve);

          if (anim.changed) _shared.raf.batchedUpdates(function () {
            anim.changed = !reset;
            onRest == null ? void 0 : onRest(result, _this11);

            if (reset) {
              callProp(defaultProps.onRest, result);
            } else {
              anim.onStart == null ? void 0 : anim.onStart(result, _this11);
            }
          });
        }
      }

      if (reset) {
        this._set(value);
      }

      if (hasAsyncTo) {
        resolve(runAsync(props.to, props, this._state, this));
      } else if (started) {
        this._start();
      } else if (isAnimating(this) && !hasToChanged) {
        this._pendingCalls.add(resolve);
      } else {
        resolve(getNoopResult(value));
      }
    }
  }, {
    key: "_focus",
    value: function _focus(value) {
      var anim = this.animation;

      if (value !== anim.to) {
        if ((0, _shared.getFluidObservers)(this)) {
          this._detach();
        }

        anim.to = value;

        if ((0, _shared.getFluidObservers)(this)) {
          this._attach();
        }
      }
    }
  }, {
    key: "_attach",
    value: function _attach() {
      var priority = 0;
      var to = this.animation.to;

      if ((0, _shared.hasFluidValue)(to)) {
        (0, _shared.addFluidObserver)(to, this);

        if (isFrameValue(to)) {
          priority = to.priority + 1;
        }
      }

      this.priority = priority;
    }
  }, {
    key: "_detach",
    value: function _detach() {
      var to = this.animation.to;

      if ((0, _shared.hasFluidValue)(to)) {
        (0, _shared.removeFluidObserver)(to, this);
      }
    }
  }, {
    key: "_set",
    value: function _set(arg) {
      var _this12 = this;

      var idle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var value = (0, _shared.getFluidValue)(arg);

      if (!_shared.is.und(value)) {
        var oldNode = (0, _animated.getAnimated)(this);

        if (!oldNode || !(0, _shared.isEqual)(value, oldNode.getValue())) {
          var nodeType = (0, _animated.getAnimatedType)(value);

          if (!oldNode || oldNode.constructor != nodeType) {
            (0, _animated.setAnimated)(this, nodeType.create(value));
          } else {
            oldNode.setValue(value);
          }

          if (oldNode) {
            _shared.raf.batchedUpdates(function () {
              _this12._onChange(value, idle);
            });
          }
        }
      }

      return (0, _animated.getAnimated)(this);
    }
  }, {
    key: "_onStart",
    value: function _onStart() {
      var anim = this.animation;

      if (!anim.changed) {
        anim.changed = true;
        sendEvent(this, 'onStart', getFinishedResult(this, checkFinished(this, anim.to)), this);
      }
    }
  }, {
    key: "_onChange",
    value: function _onChange(value, idle) {
      if (!idle) {
        this._onStart();

        callProp(this.animation.onChange, value, this);
      }

      callProp(this.defaultProps.onChange, value, this);

      _get(_getPrototypeOf(SpringValue.prototype), "_onChange", this).call(this, value, idle);
    }
  }, {
    key: "_start",
    value: function _start() {
      var anim = this.animation;
      (0, _animated.getAnimated)(this).reset((0, _shared.getFluidValue)(anim.to));

      if (!anim.immediate) {
        anim.fromValues = anim.values.map(function (node) {
          return node.lastPosition;
        });
      }

      if (!isAnimating(this)) {
        setActiveBit(this, true);

        if (!isPaused(this)) {
          this._resume();
        }
      }
    }
  }, {
    key: "_resume",
    value: function _resume() {
      if (_shared.Globals.skipAnimation) {
        this.finish();
      } else {
        _shared.frameLoop.start(this);
      }
    }
  }, {
    key: "_stop",
    value: function _stop(goal, cancel) {
      if (isAnimating(this)) {
        setActiveBit(this, false);
        var anim = this.animation;
        (0, _shared.each)(anim.values, function (node) {
          node.done = true;
        });

        if (anim.toValues) {
          anim.onChange = anim.onPause = anim.onResume = undefined;
        }

        (0, _shared.callFluidObservers)(this, {
          type: 'idle',
          parent: this
        });
        var result = cancel ? getCancelledResult(this.get()) : getFinishedResult(this.get(), checkFinished(this, goal != null ? goal : anim.to));
        (0, _shared.flushCalls)(this._pendingCalls, result);

        if (anim.changed) {
          anim.changed = false;
          sendEvent(this, 'onRest', result, this);
        }
      }
    }
  }]);

  return SpringValue;
}(FrameValue);

exports.SpringValue = SpringValue;

function checkFinished(target, to) {
  var goal = computeGoal(to);
  var value = computeGoal(target.get());
  return (0, _shared.isEqual)(value, goal);
}

function createLoopUpdate(props) {
  var loop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : props.loop;
  var to = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : props.to;
  var loopRet = callProp(loop);

  if (loopRet) {
    var overrides = loopRet !== true && inferTo(loopRet);
    var reverse = (overrides || props).reverse;
    var reset = !overrides || overrides.reset;
    return createUpdate(_extends({}, props, {
      loop: loop,
      "default": false,
      pause: undefined,
      to: !reverse || isAsyncTo(to) ? to : undefined,
      from: reset ? props.from : undefined,
      reset: reset
    }, overrides));
  }
}

function createUpdate(props) {
  var _props2 = props = inferTo(props),
      to = _props2.to,
      from = _props2.from;

  var keys = new Set();
  if (_shared.is.obj(to)) findDefined(to, keys);
  if (_shared.is.obj(from)) findDefined(from, keys);
  props.keys = keys.size ? Array.from(keys) : null;
  return props;
}

function declareUpdate(props) {
  var update = createUpdate(props);

  if (_shared.is.und(update["default"])) {
    update["default"] = getDefaultProps(update);
  }

  return update;
}

function findDefined(values, keys) {
  (0, _shared.eachProp)(values, function (value, key) {
    return value != null && keys.add(key);
  });
}

var ACTIVE_EVENTS = ['onStart', 'onRest', 'onChange', 'onPause', 'onResume'];

function mergeActiveFn(target, props, type) {
  target.animation[type] = props[type] !== getDefaultProp(props, type) ? resolveProp(props[type], target.key) : undefined;
}

function sendEvent(target, type) {
  var _target$animation$typ2, _target$defaultProps$2;

  var _target$animation$typ, _target$animation, _target$defaultProps$, _target$defaultProps;

  for (var _len5 = arguments.length, args = new Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
    args[_key5 - 2] = arguments[_key5];
  }

  (_target$animation$typ = (_target$animation = target.animation)[type]) == null ? void 0 : (_target$animation$typ2 = _target$animation$typ).call.apply(_target$animation$typ2, [_target$animation].concat(args));
  (_target$defaultProps$ = (_target$defaultProps = target.defaultProps)[type]) == null ? void 0 : (_target$defaultProps$2 = _target$defaultProps$).call.apply(_target$defaultProps$2, [_target$defaultProps].concat(args));
}

var BATCHED_EVENTS = ['onStart', 'onChange', 'onRest'];
var nextId = 1;

var Controller = /*#__PURE__*/function () {
  function Controller(props, flush) {
    _classCallCheck(this, Controller);

    this.id = nextId++;
    this.springs = {};
    this.queue = [];
    this.ref = void 0;
    this._flush = void 0;
    this._initialProps = void 0;
    this._lastAsyncId = 0;
    this._active = new Set();
    this._changed = new Set();
    this._started = false;
    this._item = void 0;
    this._state = {
      paused: false,
      pauseQueue: new Set(),
      resumeQueue: new Set(),
      timeouts: new Set()
    };
    this._events = {
      onStart: new Map(),
      onChange: new Map(),
      onRest: new Map()
    };
    this._onFrame = this._onFrame.bind(this);

    if (flush) {
      this._flush = flush;
    }

    if (props) {
      this.start(_extends({
        "default": true
      }, props));
    }
  }

  _createClass(Controller, [{
    key: "idle",
    get: function get() {
      return !this._state.asyncTo && Object.values(this.springs).every(function (spring) {
        return spring.idle;
      });
    }
  }, {
    key: "item",
    get: function get() {
      return this._item;
    },
    set: function set(item) {
      this._item = item;
    }
  }, {
    key: "get",
    value: function get() {
      var values = {};
      this.each(function (spring, key) {
        return values[key] = spring.get();
      });
      return values;
    }
  }, {
    key: "set",
    value: function set(values) {
      for (var key in values) {
        var value = values[key];

        if (!_shared.is.und(value)) {
          this.springs[key].set(value);
        }
      }
    }
  }, {
    key: "update",
    value: function update(props) {
      if (props) {
        this.queue.push(createUpdate(props));
      }

      return this;
    }
  }, {
    key: "start",
    value: function start(props) {
      var queue = this.queue;

      if (props) {
        queue = (0, _shared.toArray)(props).map(createUpdate);
      } else {
        this.queue = [];
      }

      if (this._flush) {
        return this._flush(this, queue);
      }

      prepareKeys(this, queue);
      return flushUpdateQueue(this, queue);
    }
  }, {
    key: "stop",
    value: function stop(arg, keys) {
      if (arg !== !!arg) {
        keys = arg;
      }

      if (keys) {
        var springs = this.springs;
        (0, _shared.each)((0, _shared.toArray)(keys), function (key) {
          return springs[key].stop(!!arg);
        });
      } else {
        stopAsync(this._state, this._lastAsyncId);
        this.each(function (spring) {
          return spring.stop(!!arg);
        });
      }

      return this;
    }
  }, {
    key: "pause",
    value: function pause(keys) {
      if (_shared.is.und(keys)) {
        this.start({
          pause: true
        });
      } else {
        var springs = this.springs;
        (0, _shared.each)((0, _shared.toArray)(keys), function (key) {
          return springs[key].pause();
        });
      }

      return this;
    }
  }, {
    key: "resume",
    value: function resume(keys) {
      if (_shared.is.und(keys)) {
        this.start({
          pause: false
        });
      } else {
        var springs = this.springs;
        (0, _shared.each)((0, _shared.toArray)(keys), function (key) {
          return springs[key].resume();
        });
      }

      return this;
    }
  }, {
    key: "each",
    value: function each(iterator) {
      (0, _shared.eachProp)(this.springs, iterator);
    }
  }, {
    key: "_onFrame",
    value: function _onFrame() {
      var _this13 = this;

      var _this$_events = this._events,
          onStart = _this$_events.onStart,
          onChange = _this$_events.onChange,
          onRest = _this$_events.onRest;
      var active = this._active.size > 0;
      var changed = this._changed.size > 0;

      if (active && !this._started || changed && !this._started) {
        this._started = true;
        (0, _shared.flush)(onStart, function (_ref8) {
          var _ref9 = _slicedToArray(_ref8, 2),
              onStart = _ref9[0],
              result = _ref9[1];

          result.value = _this13.get();
          onStart(result, _this13, _this13._item);
        });
      }

      var idle = !active && this._started;
      var values = changed || idle && onRest.size ? this.get() : null;

      if (changed && onChange.size) {
        (0, _shared.flush)(onChange, function (_ref10) {
          var _ref11 = _slicedToArray(_ref10, 2),
              onChange = _ref11[0],
              result = _ref11[1];

          result.value = values;
          onChange(result, _this13, _this13._item);
        });
      }

      if (idle) {
        this._started = false;
        (0, _shared.flush)(onRest, function (_ref12) {
          var _ref13 = _slicedToArray(_ref12, 2),
              onRest = _ref13[0],
              result = _ref13[1];

          result.value = values;
          onRest(result, _this13, _this13._item);
        });
      }
    }
  }, {
    key: "eventObserved",
    value: function eventObserved(event) {
      if (event.type == 'change') {
        this._changed.add(event.parent);

        if (!event.idle) {
          this._active.add(event.parent);
        }
      } else if (event.type == 'idle') {
        this._active["delete"](event.parent);
      } else return;

      _shared.raf.onFrame(this._onFrame);
    }
  }]);

  return Controller;
}();

exports.Controller = Controller;

function flushUpdateQueue(ctrl, queue) {
  return Promise.all(queue.map(function (props) {
    return flushUpdate(ctrl, props);
  })).then(function (results) {
    return getCombinedResult(ctrl, results);
  });
}

function flushUpdate(_x2, _x3, _x4) {
  return _flushUpdate.apply(this, arguments);
}

function _flushUpdate() {
  _flushUpdate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(ctrl, props, isLoop) {
    var keys, to, from, loop, onRest, onResolve, defaults, asyncTo, state, promises, cancel, result, nextProps;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            keys = props.keys, to = props.to, from = props.from, loop = props.loop, onRest = props.onRest, onResolve = props.onResolve;
            defaults = _shared.is.obj(props["default"]) && props["default"];

            if (loop) {
              props.loop = false;
            }

            if (to === false) props.to = null;
            if (from === false) props.from = null;
            asyncTo = _shared.is.arr(to) || _shared.is.fun(to) ? to : undefined;

            if (asyncTo) {
              props.to = undefined;
              props.onRest = undefined;

              if (defaults) {
                defaults.onRest = undefined;
              }
            } else {
              (0, _shared.each)(BATCHED_EVENTS, function (key) {
                var handler = props[key];

                if (_shared.is.fun(handler)) {
                  var queue = ctrl['_events'][key];

                  props[key] = function (_ref20) {
                    var finished = _ref20.finished,
                        cancelled = _ref20.cancelled;
                    var result = queue.get(handler);

                    if (result) {
                      if (!finished) result.finished = false;
                      if (cancelled) result.cancelled = true;
                    } else {
                      queue.set(handler, {
                        value: null,
                        finished: finished || false,
                        cancelled: cancelled || false
                      });
                    }
                  };

                  if (defaults) {
                    defaults[key] = props[key];
                  }
                }
              });
            }

            state = ctrl['_state'];

            if (props.pause === !state.paused) {
              state.paused = props.pause;
              (0, _shared.flushCalls)(props.pause ? state.pauseQueue : state.resumeQueue);
            } else if (state.paused) {
              props.pause = true;
            }

            promises = (keys || Object.keys(ctrl.springs)).map(function (key) {
              return ctrl.springs[key].start(props);
            });
            cancel = props.cancel === true || getDefaultProp(props, 'cancel') === true;

            if (asyncTo || cancel && state.asyncId) {
              promises.push(scheduleProps(++ctrl['_lastAsyncId'], {
                props: props,
                state: state,
                actions: {
                  pause: _shared.noop,
                  resume: _shared.noop,
                  start: function start(props, resolve) {
                    if (cancel) {
                      stopAsync(state, ctrl['_lastAsyncId']);
                      resolve(getCancelledResult(ctrl));
                    } else {
                      props.onRest = onRest;
                      resolve(runAsync(asyncTo, props, state, ctrl));
                    }
                  }
                }
              }));
            }

            if (!state.paused) {
              _context4.next = 15;
              break;
            }

            _context4.next = 15;
            return new Promise(function (resume) {
              state.resumeQueue.add(resume);
            });

          case 15:
            _context4.t0 = getCombinedResult;
            _context4.t1 = ctrl;
            _context4.next = 19;
            return Promise.all(promises);

          case 19:
            _context4.t2 = _context4.sent;
            result = (0, _context4.t0)(_context4.t1, _context4.t2);

            if (!(loop && result.finished && !(isLoop && result.noop))) {
              _context4.next = 26;
              break;
            }

            nextProps = createLoopUpdate(props, loop, to);

            if (!nextProps) {
              _context4.next = 26;
              break;
            }

            prepareKeys(ctrl, [nextProps]);
            return _context4.abrupt("return", flushUpdate(ctrl, nextProps, true));

          case 26:
            if (onResolve) {
              _shared.raf.batchedUpdates(function () {
                return onResolve(result, ctrl, ctrl.item);
              });
            }

            return _context4.abrupt("return", result);

          case 28:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _flushUpdate.apply(this, arguments);
}

function getSprings(ctrl, props) {
  var springs = _extends({}, ctrl.springs);

  if (props) {
    (0, _shared.each)((0, _shared.toArray)(props), function (props) {
      if (_shared.is.und(props.keys)) {
        props = createUpdate(props);
      }

      if (!_shared.is.obj(props.to)) {
        props = _extends({}, props, {
          to: undefined
        });
      }

      prepareSprings(springs, props, function (key) {
        return createSpring(key);
      });
    });
  }

  setSprings(ctrl, springs);
  return springs;
}

function setSprings(ctrl, springs) {
  (0, _shared.eachProp)(springs, function (spring, key) {
    if (!ctrl.springs[key]) {
      ctrl.springs[key] = spring;
      (0, _shared.addFluidObserver)(spring, ctrl);
    }
  });
}

function createSpring(key, observer) {
  var spring = new SpringValue();
  spring.key = key;

  if (observer) {
    (0, _shared.addFluidObserver)(spring, observer);
  }

  return spring;
}

function prepareSprings(springs, props, create) {
  if (props.keys) {
    (0, _shared.each)(props.keys, function (key) {
      var spring = springs[key] || (springs[key] = create(key));
      spring['_prepareNode'](props);
    });
  }
}

function prepareKeys(ctrl, queue) {
  (0, _shared.each)(queue, function (props) {
    prepareSprings(ctrl.springs, props, function (key) {
      return createSpring(key, ctrl);
    });
  });
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _excluded$3 = ["children"];

var SpringContext = function SpringContext(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$3);

  var inherited = (0, React.useContext)(ctx);
  var pause = props.pause || !!inherited.pause,
      immediate = props.immediate || !!inherited.immediate;
  props = (0, _shared.useMemoOne)(function () {
    return {
      pause: pause,
      immediate: immediate
    };
  }, [pause, immediate]);
  var Provider = ctx.Provider;
  return /*#__PURE__*/React.createElement(Provider, {
    value: props
  }, children);
};

exports.SpringContext = SpringContext;
var ctx = makeContext(SpringContext, {});
SpringContext.Provider = ctx.Provider;
SpringContext.Consumer = ctx.Consumer;

function makeContext(target, init) {
  Object.assign(target, /*#__PURE__*/React.createContext(init));
  target.Provider._context = target;
  target.Consumer._context = target;
  return target;
}

var SpringRef = function SpringRef() {
  var current = [];

  var SpringRef = function SpringRef(props) {
    (0, _shared.deprecateDirectCall)();
    var results = [];
    (0, _shared.each)(current, function (ctrl, i) {
      if (_shared.is.und(props)) {
        results.push(ctrl.start());
      } else {
        var _update2 = _getProps(props, ctrl, i);

        if (_update2) {
          results.push(ctrl.start(_update2));
        }
      }
    });
    return results;
  };

  SpringRef.current = current;

  SpringRef.add = function (ctrl) {
    if (!current.includes(ctrl)) {
      current.push(ctrl);
    }
  };

  SpringRef["delete"] = function (ctrl) {
    var i = current.indexOf(ctrl);
    if (~i) current.splice(i, 1);
  };

  SpringRef.pause = function () {
    var _arguments = arguments;
    (0, _shared.each)(current, function (ctrl) {
      return ctrl.pause.apply(ctrl, _toConsumableArray(_arguments));
    });
    return this;
  };

  SpringRef.resume = function () {
    var _arguments2 = arguments;
    (0, _shared.each)(current, function (ctrl) {
      return ctrl.resume.apply(ctrl, _toConsumableArray(_arguments2));
    });
    return this;
  };

  SpringRef.set = function (values) {
    (0, _shared.each)(current, function (ctrl) {
      return ctrl.set(values);
    });
  };

  SpringRef.start = function (props) {
    var _this14 = this;

    var results = [];
    (0, _shared.each)(current, function (ctrl, i) {
      if (_shared.is.und(props)) {
        results.push(ctrl.start());
      } else {
        var _update3 = _this14._getProps(props, ctrl, i);

        if (_update3) {
          results.push(ctrl.start(_update3));
        }
      }
    });
    return results;
  };

  SpringRef.stop = function () {
    var _arguments3 = arguments;
    (0, _shared.each)(current, function (ctrl) {
      return ctrl.stop.apply(ctrl, _toConsumableArray(_arguments3));
    });
    return this;
  };

  SpringRef.update = function (props) {
    var _this15 = this;

    (0, _shared.each)(current, function (ctrl, i) {
      return ctrl.update(_this15._getProps(props, ctrl, i));
    });
    return this;
  };

  var _getProps = function _getProps(arg, ctrl, index) {
    return _shared.is.fun(arg) ? arg(index, ctrl) : arg;
  };

  SpringRef._getProps = _getProps;
  return SpringRef;
};

exports.SpringRef = SpringRef;

function useSprings(length, props, deps) {
  var _arguments4 = arguments;
  var propsFn = _shared.is.fun(props) && props;
  if (propsFn && !deps) deps = [];
  var ref = (0, React.useMemo)(function () {
    return propsFn || _arguments4.length == 3 ? SpringRef() : void 0;
  }, []);
  var layoutId = (0, React.useRef)(0);
  var forceUpdate = (0, _shared.useForceUpdate)();
  var state = (0, React.useMemo)(function () {
    return {
      ctrls: [],
      queue: [],
      flush: function flush(ctrl, updates) {
        var springs = getSprings(ctrl, updates);
        var canFlushSync = layoutId.current > 0 && !state.queue.length && !Object.keys(springs).some(function (key) {
          return !ctrl.springs[key];
        });
        return canFlushSync ? flushUpdateQueue(ctrl, updates) : new Promise(function (resolve) {
          setSprings(ctrl, springs);
          state.queue.push(function () {
            resolve(flushUpdateQueue(ctrl, updates));
          });
          forceUpdate();
        });
      }
    };
  }, []);
  var ctrls = (0, React.useRef)(_toConsumableArray(state.ctrls));
  var updates = [];
  var prevLength = (0, _shared.usePrev)(length) || 0;
  (0, React.useMemo)(function () {
    (0, _shared.each)(ctrls.current.slice(length, prevLength), function (ctrl) {
      detachRefs(ctrl, ref);
      ctrl.stop(true);
    });
    ctrls.current.length = length;
    declareUpdates(prevLength, length);
  }, [length]);
  (0, React.useMemo)(function () {
    declareUpdates(0, Math.min(prevLength, length));
  }, deps);

  function declareUpdates(startIndex, endIndex) {
    for (var i = startIndex; i < endIndex; i++) {
      var ctrl = ctrls.current[i] || (ctrls.current[i] = new Controller(null, state.flush));

      var _update4 = propsFn ? propsFn(i, ctrl) : props[i];

      if (_update4) {
        updates[i] = declareUpdate(_update4);
      }
    }
  }

  var springs = ctrls.current.map(function (ctrl, i) {
    return getSprings(ctrl, updates[i]);
  });
  var context = (0, React.useContext)(SpringContext);
  var prevContext = (0, _shared.usePrev)(context);
  var hasContext = context !== prevContext && hasProps(context);
  (0, _shared.useLayoutEffect)(function () {
    layoutId.current++;
    state.ctrls = ctrls.current;
    var queue = state.queue;

    if (queue.length) {
      state.queue = [];
      (0, _shared.each)(queue, function (cb) {
        return cb();
      });
    }

    (0, _shared.each)(ctrls.current, function (ctrl, i) {
      ref == null ? void 0 : ref.add(ctrl);

      if (hasContext) {
        ctrl.start({
          "default": context
        });
      }

      var update = updates[i];

      if (update) {
        replaceRef(ctrl, update.ref);

        if (ctrl.ref) {
          ctrl.queue.push(update);
        } else {
          ctrl.start(update);
        }
      }
    });
  });
  (0, _shared.useOnce)(function () {
    return function () {
      (0, _shared.each)(state.ctrls, function (ctrl) {
        return ctrl.stop(true);
      });
    };
  });
  var values = springs.map(function (x) {
    return _extends({}, x);
  });
  return ref ? [values, ref] : values;
}

function useSpring(props, deps) {
  var isFn = _shared.is.fun(props);

  var _useSprings = useSprings(1, isFn ? props : [props], isFn ? deps || [] : deps),
      _useSprings2 = _slicedToArray(_useSprings, 2),
      _useSprings2$ = _slicedToArray(_useSprings2[0], 1),
      values = _useSprings2$[0],
      ref = _useSprings2[1];

  return isFn || arguments.length == 2 ? [values, ref] : values;
}

var initSpringRef = function initSpringRef() {
  return SpringRef();
};

var useSpringRef = function useSpringRef() {
  return (0, React.useState)(initSpringRef)[0];
};

exports.useSpringRef = useSpringRef;

function useTrail(length, propsArg, deps) {
  var propsFn = _shared.is.fun(propsArg) && propsArg;
  if (propsFn && !deps) deps = [];
  var reverse = true;
  var result = useSprings(length, function (i, ctrl) {
    var props = propsFn ? propsFn(i, ctrl) : propsArg;
    reverse = reverse && props.reverse;
    return props;
  }, deps || [{}]);
  var ref = result[1];
  (0, _shared.useLayoutEffect)(function () {
    (0, _shared.each)(ref.current, function (ctrl, i) {
      var parent = ref.current[i + (reverse ? 1 : -1)];
      if (parent) ctrl.start({
        to: parent.springs
      });
    });
  }, deps);

  if (propsFn || arguments.length == 3) {
    ref['_getProps'] = function (propsArg, ctrl, i) {
      var props = _shared.is.fun(propsArg) ? propsArg(i, ctrl) : propsArg;

      if (props) {
        var parent = ref.current[i + (props.reverse ? 1 : -1)];
        if (parent) props.to = parent.springs;
        return props;
      }
    };

    return result;
  }

  return result[0];
}

var TransitionPhase;

(function (TransitionPhase) {
  TransitionPhase["MOUNT"] = "mount";
  TransitionPhase["ENTER"] = "enter";
  TransitionPhase["UPDATE"] = "update";
  TransitionPhase["LEAVE"] = "leave";
})(TransitionPhase || (TransitionPhase = {}));

function useTransition(data, props, deps) {
  var _arguments5 = arguments;
  var propsFn = _shared.is.fun(props) && props;

  var _ref14 = propsFn ? propsFn() : props,
      reset = _ref14.reset,
      sort = _ref14.sort,
      _ref14$trail = _ref14.trail,
      trail = _ref14$trail === void 0 ? 0 : _ref14$trail,
      _ref14$expires = _ref14.expires,
      expires = _ref14$expires === void 0 ? true : _ref14$expires,
      onDestroyed = _ref14.onDestroyed,
      propsRef = _ref14.ref,
      propsConfig = _ref14.config;

  var ref = (0, React.useMemo)(function () {
    return propsFn || _arguments5.length == 3 ? SpringRef() : void 0;
  }, []);
  var items = (0, _shared.toArray)(data);
  var transitions = [];
  var usedTransitions = (0, React.useRef)(null);
  var prevTransitions = reset ? null : usedTransitions.current;
  (0, _shared.useLayoutEffect)(function () {
    usedTransitions.current = transitions;
  });
  (0, _shared.useOnce)(function () {
    return function () {
      return (0, _shared.each)(usedTransitions.current, function (t) {
        if (t.expired) {
          clearTimeout(t.expirationId);
        }

        detachRefs(t.ctrl, ref);
        t.ctrl.stop(true);
      });
    };
  });
  var keys = getKeys(items, propsFn ? propsFn() : props, prevTransitions);
  var expired = reset && usedTransitions.current || [];
  (0, _shared.useLayoutEffect)(function () {
    return (0, _shared.each)(expired, function (_ref15) {
      var ctrl = _ref15.ctrl,
          item = _ref15.item,
          key = _ref15.key;
      detachRefs(ctrl, ref);
      callProp(onDestroyed, item, key);
    });
  });
  var reused = [];
  if (prevTransitions) (0, _shared.each)(prevTransitions, function (t, i) {
    if (t.expired) {
      clearTimeout(t.expirationId);
      expired.push(t);
    } else {
      i = reused[i] = keys.indexOf(t.key);
      if (~i) transitions[i] = t;
    }
  });
  (0, _shared.each)(items, function (item, i) {
    if (!transitions[i]) {
      transitions[i] = {
        key: keys[i],
        item: item,
        phase: TransitionPhase.MOUNT,
        ctrl: new Controller()
      };
      transitions[i].ctrl.item = item;
    }
  });

  if (reused.length) {
    var i = -1;

    var _ref16 = propsFn ? propsFn() : props,
        leave = _ref16.leave;

    (0, _shared.each)(reused, function (keyIndex, prevIndex) {
      var t = prevTransitions[prevIndex];

      if (~keyIndex) {
        i = transitions.indexOf(t);
        transitions[i] = _extends({}, t, {
          item: items[keyIndex]
        });
      } else if (leave) {
        transitions.splice(++i, 0, t);
      }
    });
  }

  if (_shared.is.fun(sort)) {
    transitions.sort(function (a, b) {
      return sort(a.item, b.item);
    });
  }

  var delay = -trail;
  var forceUpdate = (0, _shared.useForceUpdate)();
  var defaultProps = getDefaultProps(props);
  var changes = new Map();
  (0, _shared.each)(transitions, function (t, i) {
    var key = t.key;
    var prevPhase = t.phase;
    var p = propsFn ? propsFn() : props;
    var to;
    var phase;
    var propsDelay = callProp(p.delay || 0, key);

    if (prevPhase == TransitionPhase.MOUNT) {
      to = p.enter;
      phase = TransitionPhase.ENTER;
    } else {
      var isLeave = keys.indexOf(key) < 0;

      if (prevPhase != TransitionPhase.LEAVE) {
        if (isLeave) {
          to = p.leave;
          phase = TransitionPhase.LEAVE;
        } else if (to = p.update) {
          phase = TransitionPhase.UPDATE;
        } else return;
      } else if (!isLeave) {
        to = p.enter;
        phase = TransitionPhase.ENTER;
      } else return;
    }

    to = callProp(to, t.item, i);
    to = _shared.is.obj(to) ? inferTo(to) : {
      to: to
    };

    if (!to.config) {
      var _config2 = propsConfig || defaultProps.config;

      to.config = callProp(_config2, t.item, i, phase);
    }

    delay += trail;

    var payload = _extends({}, defaultProps, {
      delay: propsDelay + delay,
      ref: propsRef,
      immediate: p.immediate,
      reset: false
    }, to);

    if (phase == TransitionPhase.ENTER && _shared.is.und(payload.from)) {
      var _p = propsFn ? propsFn() : props;

      var from = _shared.is.und(_p.initial) || prevTransitions ? _p.from : _p.initial;
      payload.from = callProp(from, t.item, i);
    }

    var onResolve = payload.onResolve;

    payload.onResolve = function (result) {
      callProp(onResolve, result);
      var transitions = usedTransitions.current;
      var t = transitions.find(function (t) {
        return t.key === key;
      });
      if (!t) return;

      if (result.cancelled && t.phase != TransitionPhase.UPDATE) {
        return;
      }

      if (t.ctrl.idle) {
        var idle = transitions.every(function (t) {
          return t.ctrl.idle;
        });

        if (t.phase == TransitionPhase.LEAVE) {
          var expiry = callProp(expires, t.item);

          if (expiry !== false) {
            var expiryMs = expiry === true ? 0 : expiry;
            t.expired = true;

            if (!idle && expiryMs > 0) {
              if (expiryMs <= 0x7fffffff) t.expirationId = setTimeout(forceUpdate, expiryMs);
              return;
            }
          }
        }

        if (idle && transitions.some(function (t) {
          return t.expired;
        })) {
          forceUpdate();
        }
      }
    };

    var springs = getSprings(t.ctrl, payload);
    changes.set(t, {
      phase: phase,
      springs: springs,
      payload: payload
    });
  });
  var context = (0, React.useContext)(SpringContext);
  var prevContext = (0, _shared.usePrev)(context);
  var hasContext = context !== prevContext && hasProps(context);
  (0, _shared.useLayoutEffect)(function () {
    if (hasContext) (0, _shared.each)(transitions, function (t) {
      t.ctrl.start({
        "default": context
      });
    });
  }, [context]);
  (0, _shared.useLayoutEffect)(function () {
    (0, _shared.each)(changes, function (_ref17, t) {
      var phase = _ref17.phase,
          payload = _ref17.payload;
      var ctrl = t.ctrl;
      t.phase = phase;
      ref == null ? void 0 : ref.add(ctrl);

      if (hasContext && phase == TransitionPhase.ENTER) {
        ctrl.start({
          "default": context
        });
      }

      if (payload) {
        replaceRef(ctrl, payload.ref);

        if (ctrl.ref) {
          ctrl.update(payload);
        } else {
          ctrl.start(payload);
        }
      }
    });
  }, reset ? void 0 : deps);

  var renderTransitions = function renderTransitions(render) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, transitions.map(function (t, i) {
      var _ref18 = changes.get(t) || t.ctrl,
          springs = _ref18.springs;

      var elem = render(_extends({}, springs), t.item, t, i);
      return elem && elem.type ? /*#__PURE__*/React.createElement(elem.type, _extends({}, elem.props, {
        key: _shared.is.str(t.key) || _shared.is.num(t.key) ? t.key : t.ctrl.id,
        ref: elem.ref
      })) : elem;
    }));
  };

  return ref ? [renderTransitions, ref] : renderTransitions;
}

var nextKey = 1;

function getKeys(items, _ref19, prevTransitions) {
  var key = _ref19.key,
      _ref19$keys = _ref19.keys,
      keys = _ref19$keys === void 0 ? key : _ref19$keys;

  if (keys === null) {
    var reused = new Set();
    return items.map(function (item) {
      var t = prevTransitions && prevTransitions.find(function (t) {
        return t.item === item && t.phase !== TransitionPhase.LEAVE && !reused.has(t);
      });

      if (t) {
        reused.add(t);
        return t.key;
      }

      return nextKey++;
    });
  }

  return _shared.is.und(keys) ? items : _shared.is.fun(keys) ? items.map(keys) : (0, _shared.toArray)(keys);
}

var _excluded$2 = ["children"];

function Spring(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$2);

  return children(useSpring(props));
}

var _excluded$1 = ["items", "children"];

function Trail(_ref) {
  var items = _ref.items,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$1);

  var trails = useTrail(items.length, props);
  return items.map(function (item, index) {
    var result = children(item, index);
    return _shared.is.fun(result) ? result(trails[index]) : result;
  });
}

var _excluded = ["items", "children"];

function Transition(_ref) {
  var items = _ref.items,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return useTransition(items, props)(children);
}

var Interpolation = /*#__PURE__*/function (_FrameValue2) {
  _inherits(Interpolation, _FrameValue2);

  var _super5 = _createSuper(Interpolation);

  function Interpolation(source, args) {
    var _this16;

    _classCallCheck(this, Interpolation);

    _this16 = _super5.call(this);
    _this16.key = void 0;
    _this16.idle = true;
    _this16.calc = void 0;
    _this16._active = new Set();
    _this16.source = source;
    _this16.calc = _shared.createInterpolator.apply(void 0, _toConsumableArray(args));

    var value = _this16._get();

    var nodeType = (0, _animated.getAnimatedType)(value);
    (0, _animated.setAnimated)(_assertThisInitialized(_this16), nodeType.create(value));
    return _this16;
  }

  _createClass(Interpolation, [{
    key: "advance",
    value: function advance(_dt) {
      var value = this._get();

      var oldValue = this.get();

      if (!(0, _shared.isEqual)(value, oldValue)) {
        (0, _animated.getAnimated)(this).setValue(value);

        this._onChange(value, this.idle);
      }

      if (!this.idle && checkIdle(this._active)) {
        becomeIdle(this);
      }
    }
  }, {
    key: "_get",
    value: function _get() {
      var inputs = _shared.is.arr(this.source) ? this.source.map(_shared.getFluidValue) : (0, _shared.toArray)((0, _shared.getFluidValue)(this.source));
      return this.calc.apply(this, _toConsumableArray(inputs));
    }
  }, {
    key: "_start",
    value: function _start() {
      var _this17 = this;

      if (this.idle && !checkIdle(this._active)) {
        this.idle = false;
        (0, _shared.each)((0, _animated.getPayload)(this), function (node) {
          node.done = false;
        });

        if (_shared.Globals.skipAnimation) {
          _shared.raf.batchedUpdates(function () {
            return _this17.advance();
          });

          becomeIdle(this);
        } else {
          _shared.frameLoop.start(this);
        }
      }
    }
  }, {
    key: "_attach",
    value: function _attach() {
      var _this18 = this;

      var priority = 1;
      (0, _shared.each)((0, _shared.toArray)(this.source), function (source) {
        if ((0, _shared.hasFluidValue)(source)) {
          (0, _shared.addFluidObserver)(source, _this18);
        }

        if (isFrameValue(source)) {
          if (!source.idle) {
            _this18._active.add(source);
          }

          priority = Math.max(priority, source.priority + 1);
        }
      });
      this.priority = priority;

      this._start();
    }
  }, {
    key: "_detach",
    value: function _detach() {
      var _this19 = this;

      (0, _shared.each)((0, _shared.toArray)(this.source), function (source) {
        if ((0, _shared.hasFluidValue)(source)) {
          (0, _shared.removeFluidObserver)(source, _this19);
        }
      });

      this._active.clear();

      becomeIdle(this);
    }
  }, {
    key: "eventObserved",
    value: function eventObserved(event) {
      if (event.type == 'change') {
        if (event.idle) {
          this.advance();
        } else {
          this._active.add(event.parent);

          this._start();
        }
      } else if (event.type == 'idle') {
        this._active["delete"](event.parent);
      } else if (event.type == 'priority') {
        this.priority = (0, _shared.toArray)(this.source).reduce(function (highest, parent) {
          return Math.max(highest, (isFrameValue(parent) ? parent.priority : 0) + 1);
        }, 0);
      }
    }
  }]);

  return Interpolation;
}(FrameValue);

exports.Interpolation = Interpolation;

function isIdle(source) {
  return source.idle !== false;
}

function checkIdle(active) {
  return !active.size || Array.from(active).every(isIdle);
}

function becomeIdle(self) {
  if (!self.idle) {
    self.idle = true;
    (0, _shared.each)((0, _animated.getPayload)(self), function (node) {
      node.done = true;
    });
    (0, _shared.callFluidObservers)(self, {
      type: 'idle',
      parent: self
    });
  }
}

var to = function to(source) {
  for (var _len6 = arguments.length, args = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
    args[_key6 - 1] = arguments[_key6];
  }

  return new Interpolation(source, args);
};

exports.to = to;

var interpolate = function interpolate(source) {
  for (var _len7 = arguments.length, args = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
    args[_key7 - 1] = arguments[_key7];
  }

  return (0, _shared.deprecateInterpolate)(), new Interpolation(source, args);
};

exports.interpolate = interpolate;

_shared.Globals.assign({
  createStringInterpolator: _shared.createStringInterpolator,
  to: function to(source, args) {
    return new Interpolation(source, args);
  }
});

var update = _shared.frameLoop.advance;
exports.update = update;