module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/wiki.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./lib/apolloClient.js":
/*!*****************************!*\
  !*** ./lib/apolloClient.js ***!
  \*****************************/
/*! exports provided: initializeApollo, useApollo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeApollo", function() { return initializeApollo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useApollo", function() { return useApollo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/utilities */ "@apollo/client/utilities");
/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




let apolloClient;

function createApolloClient() {
  return new _apollo_client__WEBPACK_IMPORTED_MODULE_1__["ApolloClient"]({
    ssrMode: true,
    link: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__["HttpLink"]({
      uri: 'https://cdn.westeroscraft.com/api',
      // Server URL (must be absolute)
      credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`

    }),
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__["InMemoryCache"]({
      typePolicies: {
        Query: {
          fields: {
            allPosts: Object(_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_2__["concatPagination"])()
          }
        }
      }
    })
  });
}

function initializeApollo(initialState = null) {
  var _apolloClient2;

  const _apolloClient = (_apolloClient2 = apolloClient) !== null && _apolloClient2 !== void 0 ? _apolloClient2 : createApolloClient(); // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here


  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract(); // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data


    _apolloClient.cache.restore(_objectSpread(_objectSpread({}, existingCache), initialState));
  } // For SSG and SSR always create a new Apollo Client


  if (true) return _apolloClient; // Create the Apollo Client once in the client

  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}
function useApollo(initialState) {
  const store = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => initializeApollo(initialState), [initialState]);
  return store;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, typeof locale !== 'undefined' ? locale : router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND_ERROR = 'SSG Data NOT_FOUND';

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        // TODO: handle reloading in development from fallback returning 200
        // to on-demand-entry-handler causing it to reload periodically
        throw new Error(SSG_DATA_NOT_FOUND_ERROR);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)(addBasePath(addLocale(delBasePath((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname), this.locale)), pages, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname, this.locales);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: (0, _normalizeLocalePath.normalizeLocalePath)(hasBasePath(resolvedAs) ? delBasePath(resolvedAs) : resolvedAs, this.locales).pathname
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages, false);

          if (pages.includes(parsedHref.pathname)) {
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;
      const ssg404 = err.message === SSG_DATA_NOT_FOUND_ERROR;

      if (ssg404) {
        try {
          let mod;
          ({
            page: Component,
            styleSheets,
            mod
          } = await this.fetchComponent('/404')); // TODO: should we tolerate these props missing and still render the
          // page instead of falling back to _error?

          if (mod && mod.__N_SSG) {
            props = await this._getStaticData(this.pageLoader.getDataHref('/404', '/404', true, this.locale));
          }
        } catch (_err) {// non-fatal fallback to _error
        }
      }

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err: ssg404 ? undefined : err,
        error: ssg404 ? undefined : err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.compileNonPath = compileNonPath;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function compileNonPath(value, params) {
  if (!value.includes(':')) {
    return value;
  }

  for (const key of Object.keys(params)) {
    if (value.includes(`:${key}`)) {
      value = value.replace(new RegExp(`:${key}\\*`, 'g'), `:${key}--ESCAPED_PARAM_ASTERISKS`).replace(new RegExp(`:${key}\\?`, 'g'), `:${key}--ESCAPED_PARAM_QUESTION`).replace(new RegExp(`:${key}\\+`, 'g'), `:${key}--ESCAPED_PARAM_PLUS`).replace(new RegExp(`:${key}(?!\\w)`, 'g'), `--ESCAPED_PARAM_COLON${key}`);
    }
  }

  value = value.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, '\\$1').replace(/--ESCAPED_PARAM_PLUS/g, '+').replace(/--ESCAPED_PARAM_COLON/g, ':').replace(/--ESCAPED_PARAM_QUESTION/g, '?').replace(/--ESCAPED_PARAM_ASTERISKS/g, '*'); // the value needs to start with a forward-slash to be compiled
  // correctly

  return pathToRegexp.compile(`/${value}`, {
    validate: false
  })(params).substr(1);
}

function prepareDestination(destination, params, query, appendParamsToQuery) {
  let parsedDestination = {}; // clone query so we don't modify the original

  query = Object.assign({}, query);
  const hadLocale = query.__nextLocale;
  delete query.__nextLocale;
  delete query.__nextDefaultLocale;

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = compileNonPath(value, params);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  let paramKeys = Object.keys(params); // remove internal param for i18n

  if (hadLocale) {
    paramKeys = paramKeys.filter(name => name !== 'nextInternalLocale');
  }

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  try {
    newUrl = destinationCompiler(params);
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _normalizeLocalePath = __webpack_require__(/*! ../../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, rewrites, query, resolveHref, locales) {
  if (!pages.includes((0, _normalizeLocalePath.normalizeLocalePath)(asPath, locales).pathname)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);
        const fsPathname = (0, _normalizeLocalePath.normalizeLocalePath)((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath), locales).pathname;

        if (pages.includes(fsPathname)) {
          asPath = fsPathname; // check if we now match a page as this means we are done
          // resolving the rewrites

          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(fsPathname);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          asPath = fsPathname;
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./src/components/atoms/entryCard/entryCard.jsx":
/*!******************************************************!*\
  !*** ./src/components/atoms/entryCard/entryCard.jsx ***!
  \******************************************************/
/*! exports provided: EntryCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryCard", function() { return EntryCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons_regionIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/regionIcon */ "./src/components/atoms/icons/regionIcon/index.js");
/* harmony import */ var emotion_theming__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! emotion-theming */ "emotion-theming");
/* harmony import */ var emotion_theming__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(emotion_theming__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icons_locationTypeIcon_locationTypeIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/locationTypeIcon/locationTypeIcon */ "./src/components/atoms/icons/locationTypeIcon/locationTypeIcon.jsx");
/* harmony import */ var reactjs_popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactjs-popup */ "reactjs-popup");
/* harmony import */ var reactjs_popup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(reactjs_popup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utility_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utility/helpers */ "./src/utility/helpers.js");
/* harmony import */ var _icons_destinationStatusIcon_destinationStatusIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../icons/destinationStatusIcon/destinationStatusIcon */ "./src/components/atoms/icons/destinationStatusIcon/destinationStatusIcon.jsx");
var _jsxFileName = "/home/geeberry/Working/WesterosCraftSite/web/src/components/atoms/entryCard/entryCard.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const EntryCard = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(({
  data,
  href
}, ref) => {
  const theme = Object(emotion_theming__WEBPACK_IMPORTED_MODULE_3__["useTheme"])();
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "a",
    href: href,
    className: "entry-card",
    ref: ref,
    sx: {
      position: 'relative',
      boxShadow: '0 0 0 1px #191a1b',
      padding: 0,
      background: data.projectDetails ? theme.colors[data.projectDetails[0].region] : '#333333',
      zIndex: 1,
      width: 'auto',
      cursor: 'pointer'
    },
    mt: [5],
    mr: [0, null, 5],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    height: 252,
    width: [1, null, 240],
    sx: {
      cursor: 'pointer',
      boxShadow: ' 0 0 0 2px #333333',
      background: 'white',
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
      '&:hover': {
        boxShadow: ' 0 0 0 2px #333333',
        transform: 'translate(-0.35em, -0.35em)'
      },
      '&:before': {
        content: "''",
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 0,
        paddingTop: '8rem',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        zIndex: 1,
        borderBottom: '2px solid #333333',
        backgroundImage: `url(${data.images && data.images.length && data.images[0].url || data.heroImage && data.heroImage.length && data.heroImage[0].url || 'https://cdn.westeroscraft.com/web/assets/images/crafting-table.svg'})`,
        backgroundSize: data.images && data.images.length && data.images[0].url ? 'cover' : ['auto', null, '30%'],
        boxShadow: `inset 0 0.75rem 0 ${data.projectDetails ? theme.colors[data.projectDetails[0].region] : '#333333'}`
      }
    },
    pt: 140,
    px: 4,
    pb: 5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    flexDirection: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    flexDirection: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, data.typeHandle === 'wikiGuide' && __jsx(reactjs_popup__WEBPACK_IMPORTED_MODULE_5___default.a, {
    on: "hover",
    position: "bottom left",
    contentStyle: {
      width: 'auto',
      borderRadius: '4px'
    },
    trigger: __jsx("span", {
      style: {
        height: '24px'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 19
      }
    }, __jsx(_icons_regionIcon__WEBPACK_IMPORTED_MODULE_2__["RegionIcon"], {
      region: "guide",
      width: "24px",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 21
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "span",
    color: "text",
    px: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, "Guide")), data.typeHandle === 'wikiMiscellaneous' && __jsx(reactjs_popup__WEBPACK_IMPORTED_MODULE_5___default.a, {
    on: "hover",
    position: "bottom left",
    contentStyle: {
      width: 'auto',
      borderRadius: '4px'
    },
    trigger: __jsx("span", {
      style: {
        height: '24px'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 19
      }
    }, __jsx(_icons_regionIcon__WEBPACK_IMPORTED_MODULE_2__["RegionIcon"], {
      region: "guide",
      width: "24px",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 21
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 15
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "span",
    color: "text",
    px: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }, "Guide")), data.projectDetails && data.projectDetails.length && __jsx(reactjs_popup__WEBPACK_IMPORTED_MODULE_5___default.a, {
    on: "hover",
    position: "bottom left",
    contentStyle: {
      width: 'auto',
      borderRadius: '4px'
    },
    trigger: __jsx("span", {
      style: {
        height: '24px'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 19
      }
    }, __jsx(_icons_regionIcon__WEBPACK_IMPORTED_MODULE_2__["RegionIcon"], {
      region: data.projectDetails.length && data.projectDetails[0].region,
      width: "24px",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 21
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 15
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "span",
    color: "text",
    px: 4,
    bg: "white",
    sx: {
      border: '1px solid black'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 17
    }
  }, Object(_utility_helpers__WEBPACK_IMPORTED_MODULE_6__["camelCaseFormatter"])(data.projectDetails[0].region))), data.projectDetails && data.projectDetails.length && __jsx(reactjs_popup__WEBPACK_IMPORTED_MODULE_5___default.a, {
    on: "hover",
    position: "bottom left",
    contentStyle: {
      width: 'auto',
      borderRadius: '4px'
    },
    trigger: __jsx("span", {
      style: {
        height: '24px'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 19
      }
    }, __jsx(_icons_locationTypeIcon_locationTypeIcon__WEBPACK_IMPORTED_MODULE_4__["LocationTypeIcon"], {
      type: data.projectDetails[0].destinationType,
      width: "24px",
      style: {
        marginLeft: '8px'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 21
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 15
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "span",
    color: "text",
    px: 4,
    bg: "white",
    sx: {
      border: '1px solid black'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 17
    }
  }, Object(_utility_helpers__WEBPACK_IMPORTED_MODULE_6__["camelCaseFormatter"])(data.projectDetails[0].destinationType))), data.projectDetails && data.projectDetails.length && __jsx(reactjs_popup__WEBPACK_IMPORTED_MODULE_5___default.a, {
    on: "hover",
    position: "bottom left",
    contentStyle: {
      width: 'auto',
      borderRadius: '4px'
    },
    trigger: __jsx("span", {
      style: {
        height: '24px'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 19
      }
    }, __jsx(_icons_destinationStatusIcon_destinationStatusIcon__WEBPACK_IMPORTED_MODULE_7__["DestinationStatusIcon"], {
      status: data.projectDetails.length && data.projectDetails[0].destinationStatus,
      width: "24px",
      style: {
        marginLeft: '8px'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 21
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 15
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "span",
    color: "text",
    px: 4,
    bg: "white",
    sx: {
      border: '1px solid black'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 17
    }
  }, Object(_utility_helpers__WEBPACK_IMPORTED_MODULE_6__["camelCaseFormatter"])(data.projectDetails[0].destinationStatus)))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    mt: 2,
    variant: "heading6",
    fontSize: "18px",
    fontWeight: "bold",
    as: "h6",
    color: "text",
    fontFamily: "heading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 11
    }
  }, data.title || ''), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    mt: 2,
    variant: "paragraph",
    color: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 11
    }
  }, data.projectDetails && data.projectDetails.length && data.projectDetails[0].house))));
});

/***/ }),

/***/ "./src/components/atoms/entryCard/index.js":
/*!*************************************************!*\
  !*** ./src/components/atoms/entryCard/index.js ***!
  \*************************************************/
/*! exports provided: EntryCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _entryCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entryCard */ "./src/components/atoms/entryCard/entryCard.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntryCard", function() { return _entryCard__WEBPACK_IMPORTED_MODULE_0__["EntryCard"]; });




/***/ }),

/***/ "./src/components/atoms/icons/destinationStatusIcon/destinationStatusIcon.jsx":
/*!************************************************************************************!*\
  !*** ./src/components/atoms/icons/destinationStatusIcon/destinationStatusIcon.jsx ***!
  \************************************************************************************/
/*! exports provided: DestinationStatusIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationStatusIcon", function() { return DestinationStatusIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/geeberry/Working/WesterosCraftSite/web/src/components/atoms/icons/destinationStatusIcon/destinationStatusIcon.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


const DestinationStatusIcon = props => {
  switch (props.status) {
    case 'completed':
      return __jsx(Completed, _extends({}, props, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6,
          columnNumber: 14
        }
      }));

    case 'inProgress':
      return __jsx(InProgress, _extends({}, props, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 14
        }
      }));

    case 'redoInProgress':
      return __jsx(RedoInProgress, _extends({}, props, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 14
        }
      }));

    case 'abandoned':
      return __jsx(Abandoned, _extends({}, props, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 14
        }
      }));

    case 'notStarted':
      return __jsx(NotStarted, _extends({}, props, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 14
        }
      }));

    default:
      return null;
  }
};

const Completed = props => __jsx("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "#000000",
  viewBox: "0 0 26 26"
}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 3
  }
}), __jsx("path", {
  d: "M 13 1 C 6.382813 1 1 6.382813 1 13 C 1 19.617188 6.382813 25 13 25 C 19.617188 25 25 19.617188 25 13 C 25 6.382813 19.617188 1 13 1 Z M 13 3 C 18.535156 3 23 7.464844 23 13 C 23 18.535156 18.535156 23 13 23 C 7.464844 23 3 18.535156 3 13 C 3 7.464844 7.464844 3 13 3 Z M 17.1875 7.0625 C 17.039063 7.085938 16.914063 7.164063 16.8125 7.3125 L 11.90625 14.59375 L 9.59375 12.3125 C 9.394531 12.011719 9.011719 11.988281 8.8125 12.1875 L 7.90625 13.09375 C 7.707031 13.394531 7.707031 13.800781 7.90625 14 L 11.40625 17.5 C 11.605469 17.601563 11.886719 17.8125 12.1875 17.8125 C 12.386719 17.8125 12.707031 17.707031 12.90625 17.40625 L 18.90625 8.59375 C 19.105469 8.292969 18.992188 8.011719 18.59375 7.8125 L 17.59375 7.09375 C 17.492188 7.042969 17.335938 7.039063 17.1875 7.0625 Z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }
}));

const InProgress = props => __jsx("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "#000000"
}, props, {
  viewBox: "0 0 26 26",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 3
  }
}), __jsx("path", {
  d: "M 13 1 C 12.259216 1 11.534503 1.066641 10.830078 1.1953125 L 11.189453 3.1640625 C 11.777028 3.0567345 12.380784 3 13 3 C 18.534534 3 23 7.4654664 23 13 C 23 18.534534 18.534534 23 13 23 C 12.380784 23 11.777028 22.943269 11.189453 22.835938 L 10.830078 24.804688 C 11.534503 24.93336 12.259216 25 13 25 C 19.615466 25 25 19.615466 25 13 C 25 6.3845336 19.615466 1 13 1 z M 7.7890625 2.1953125 L 7.5722656 2.2949219 L 7.5371094 2.3125 L 7.5039062 2.3320312 L 6.7578125 2.75 L 6.7246094 2.7695312 L 6.6933594 2.7910156 L 5.984375 3.2636719 L 5.953125 3.2851562 L 5.921875 3.3085938 L 5.2558594 3.8339844 L 5.2246094 3.8574219 L 5.1972656 3.8847656 L 4.5722656 4.4589844 L 4.5449219 4.484375 L 4.5175781 4.5117188 L 4.3125 4.7324219 L 5.7753906 6.0957031 L 5.9628906 5.8945312 L 6.515625 5.3886719 L 7.1328125 4.9023438 L 7.7871094 4.4648438 L 8.4570312 4.0898438 L 8.6289062 4.0097656 L 7.7890625 2.1953125 z M 17.148438 7.0117188 C 16.984437 7.0440938 16.832922 7.1414219 16.732422 7.2949219 L 11.359375 15.484375 L 9.03125 13.197266 C 8.77825 12.936266 8.3653281 12.936266 8.1113281 13.197266 L 7.1914062 14.152344 C 6.9364063 14.415344 6.9364063 14.844422 7.1914062 15.107422 L 10.919922 18.619141 C 11.128922 18.833141 11.456953 19 11.751953 19 C 12.046953 19 12.343156 18.806578 12.535156 18.517578 L 18.888672 8.8105469 C 19.089672 8.5045469 19.011844 8.0820469 18.714844 7.8730469 L 17.636719 7.1152344 C 17.488219 7.0112344 17.312438 6.9793437 17.148438 7.0117188 z M 2.4433594 7.3007812 L 2.3710938 7.4277344 L 2.3515625 7.4609375 L 2.3339844 7.4980469 L 1.96875 8.2734375 L 1.9511719 8.3085938 L 1.9375 8.3457031 L 1.6308594 9.1542969 L 1.6171875 9.1914062 L 1.6054688 9.2285156 L 1.3632812 10.066406 L 1.3515625 10.103516 L 1.34375 10.144531 L 1.1660156 11.005859 L 1.1582031 11.046875 L 1.1523438 11.085938 L 1.1132812 11.404297 L 3.0996094 11.648438 L 3.1347656 11.359375 L 3.2949219 10.583984 L 3.5136719 9.8261719 L 3.7871094 9.1054688 L 4.125 8.390625 L 4.1796875 8.2929688 L 2.4433594 7.3007812 z M 3.0957031 14.365234 L 1.1074219 14.582031 L 1.1210938 14.710938 L 1.125 14.748047 L 1.1328125 14.783203 L 1.2734375 15.558594 L 1.28125 15.59375 L 1.2890625 15.628906 L 1.484375 16.384766 L 1.4941406 16.419922 L 1.5058594 16.453125 L 1.7519531 17.185547 L 1.7617188 17.220703 L 1.7753906 17.251953 L 2.0722656 17.962891 L 2.0859375 17.994141 L 2.1015625 18.025391 L 2.4140625 18.652344 L 4.203125 17.755859 L 3.9023438 17.158203 L 3.6289062 16.498047 L 3.6230469 16.484375 L 3.4179688 15.867188 L 3.2363281 15.166016 L 3.1054688 14.453125 L 3.0957031 14.365234 z M 5.7792969 19.912109 L 4.3027344 21.261719 L 4.4003906 21.369141 L 4.4238281 21.394531 L 4.4472656 21.417969 L 4.9960938 21.939453 L 5.0195312 21.962891 L 5.046875 21.986328 L 5.6289062 22.46875 L 5.65625 22.492188 L 5.6835938 22.511719 L 6.2988281 22.955078 L 6.3261719 22.976562 L 6.3554688 22.994141 L 7.0019531 23.394531 L 7.03125 23.414062 L 7.0625 23.429688 L 7.7382812 23.787109 L 8.671875 22.019531 L 8.0253906 21.675781 L 7.4316406 21.306641 L 6.8769531 20.904297 L 6.3769531 20.492188 L 6.3671875 20.482422 L 5.8613281 20.001953 L 5.7792969 19.912109 z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }
}));

const RedoInProgress = props => __jsx("svg", _extends({
  fill: "#000000",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 26 26"
}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 3
  }
}), __jsx("path", {
  d: "M 13.3125 2 L 13.1875 4 C 13.789063 4 14.3125 4.085938 14.8125 4.1875 L 15.1875 2.1875 C 14.585938 2.085938 13.914063 2 13.3125 2 Z M 11.09375 2.09375 C 10.394531 2.195313 9.699219 2.386719 9 2.6875 L 9.6875 4.59375 C 10.289063 4.394531 10.90625 4.195313 11.40625 4.09375 Z M 17 3 L 18 8.90625 L 19.8125 7.09375 C 21.179688 8.675781 22 10.75 22 13 C 22 15.515625 20.882813 17.800781 19.1875 19.5 C 18.789063 19.898438 18.3125 20.292969 17.8125 20.59375 L 18.90625 22.3125 C 19.308594 22.082031 19.628906 21.808594 19.9375 21.53125 L 19.96875 21.5625 C 22.367188 19.492188 24 16.421875 24 13 C 24 10.21875 22.953125 7.640625 21.21875 5.6875 L 22.90625 4 Z M 7 3.6875 C 6.398438 4.085938 5.8125 4.59375 5.3125 5.09375 L 5.34375 5.125 C 3.3125 7.140625 2 9.878906 2 13 C 2 15.765625 3.023438 18.355469 4.78125 20.3125 L 3.09375 22 L 9 23 L 8 17.09375 L 6.21875 18.875 C 4.828125 17.296875 4 15.234375 4 13 C 4 10.023438 5.429688 7.519531 7.625 5.78125 C 7.777344 5.660156 7.925781 5.542969 8.09375 5.40625 Z M 16.3125 21.3125 C 15.8125 21.511719 15.195313 21.710938 14.59375 21.8125 L 14.90625 23.8125 C 15.605469 23.710938 16.300781 23.488281 17 23.1875 Z M 11.3125 21.8125 L 10.90625 23.8125 C 11.507813 23.914063 12.085938 24 12.6875 24 L 12.8125 22 C 12.3125 22 11.8125 21.914063 11.3125 21.8125 Z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }
}));

const Abandoned = props => __jsx("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "#000000",
  viewBox: "0 0 26 26"
}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 3
  }
}), __jsx("path", {
  d: "M 11.71875 1.0625 L 10.625 1.25 L 10.53125 1.25 L 9.46875 1.53125 L 9.4375 1.53125 L 9.375 1.5625 L 8.375 1.9375 L 8.34375 1.9375 L 8.28125 1.96875 L 7.3125 2.4375 L 7.28125 2.4375 L 7.25 2.46875 L 7 2.625 L 8.03125 4.34375 L 8.28125 4.1875 L 9.0625 3.8125 L 9.96875 3.46875 L 10 3.46875 L 10.0625 3.4375 L 10.9375 3.21875 L 11.03125 3.1875 L 11.9375 3.0625 L 12.09375 3.0625 L 12 1.0625 Z M 15.0625 1.1875 L 14.75 3.15625 L 14.96875 3.1875 L 15.0625 3.21875 L 15.9375 3.4375 L 16 3.46875 L 16.03125 3.46875 L 16.9375 3.8125 L 17.71875 4.1875 L 17.8125 4.21875 L 18.5625 4.6875 L 18.625 4.71875 L 18.71875 4.78125 L 19.90625 3.1875 L 19.75 3.0625 L 19.71875 3.0625 L 19.65625 3.03125 L 18.75 2.46875 L 18.71875 2.4375 L 18.6875 2.4375 L 17.71875 1.96875 L 17.65625 1.9375 L 17.625 1.9375 L 16.625 1.5625 L 16.5625 1.53125 L 16.53125 1.53125 L 15.46875 1.25 L 15.375 1.25 Z M 4.46875 4.5625 L 3.78125 5.34375 L 3.71875 5.40625 L 3.0625 6.25 L 3.0625 6.28125 L 3.03125 6.34375 L 2.46875 7.25 L 2.4375 7.28125 L 2.4375 7.3125 L 1.96875 8.28125 L 1.9375 8.34375 L 1.9375 8.375 L 1.71875 8.90625 L 3.625 9.59375 L 3.8125 9.0625 L 4.1875 8.28125 L 4.21875 8.1875 L 4.6875 7.4375 L 4.71875 7.375 L 5.25 6.6875 L 5.3125 6.59375 L 5.96875 5.90625 Z M 22.15625 5.25 L 20.6875 6.59375 L 20.75 6.6875 L 21.28125 7.375 L 21.3125 7.4375 L 21.78125 8.1875 L 21.8125 8.28125 L 22.1875 9.0625 L 22.53125 9.96875 L 22.53125 10 L 22.5625 10.0625 L 22.65625 10.40625 L 24.59375 9.90625 L 24.46875 9.46875 L 24.46875 9.4375 L 24.4375 9.375 L 24.0625 8.375 L 24.0625 8.34375 L 24.03125 8.28125 L 23.5625 7.3125 L 23.5625 7.28125 L 23.53125 7.25 L 22.96875 6.34375 L 22.9375 6.28125 L 22.9375 6.25 L 22.28125 5.40625 L 22.21875 5.34375 Z M 1.0625 12 L 1 12.9375 L 1 13.0625 L 1.0625 14.1875 L 1.0625 14.28125 L 1.25 15.375 L 1.25 15.46875 L 1.53125 16.53125 L 1.53125 16.5625 L 1.5625 16.625 L 1.71875 17.09375 L 3.625 16.40625 L 3.46875 16.03125 L 3.46875 16 L 3.4375 15.9375 L 3.21875 15.0625 L 3.1875 14.96875 L 3.0625 14.0625 L 3 13.0625 L 3 12.9375 L 3.0625 12.09375 Z M 23 12.9375 L 23 13.0625 L 22.9375 14.0625 L 22.8125 14.96875 L 22.78125 15.0625 L 22.5625 15.9375 L 22.53125 16 L 22.53125 16.03125 L 22.1875 16.9375 L 22.0625 17.21875 L 23.875 18.09375 L 24.03125 17.71875 L 24.0625 17.65625 L 24.0625 17.625 L 24.4375 16.625 L 24.46875 16.5625 L 24.46875 16.53125 L 24.75 15.46875 L 24.75 15.375 L 24.9375 14.28125 L 24.9375 14.1875 L 25 13.0625 Z M 4.78125 18.71875 L 3.1875 19.90625 L 3.71875 20.59375 L 3.78125 20.65625 L 4.46875 21.4375 L 4.5 21.5 L 4.5625 21.53125 L 5.34375 22.21875 L 5.40625 22.28125 L 6.25 22.9375 L 6.28125 22.9375 L 6.34375 22.96875 L 7 23.375 L 8.03125 21.65625 L 7.4375 21.3125 L 7.375 21.28125 L 6.6875 20.75 L 6.59375 20.6875 L 5.96875 20.09375 L 5.90625 20.03125 L 5.3125 19.40625 L 5.25 19.3125 Z M 20.6875 19.40625 L 20.09375 20.03125 L 20.03125 20.09375 L 19.40625 20.6875 L 19.3125 20.75 L 18.625 21.28125 L 18.5625 21.3125 L 17.8125 21.78125 L 17.71875 21.8125 L 17.21875 22.0625 L 18.09375 23.875 L 18.6875 23.5625 L 18.71875 23.5625 L 18.75 23.53125 L 19.65625 22.96875 L 19.71875 22.9375 L 19.75 22.9375 L 20.59375 22.28125 L 20.65625 22.21875 L 21.4375 21.53125 L 21.5 21.5 L 21.53125 21.4375 L 22.15625 20.75 Z M 10.40625 22.65625 L 9.90625 24.59375 L 10.53125 24.75 L 10.625 24.75 L 11.71875 24.9375 L 11.8125 24.9375 L 12.9375 25 L 13.0625 25 L 14.1875 24.9375 L 14.28125 24.9375 L 15.0625 24.8125 L 14.75 22.84375 L 14.0625 22.9375 L 13.0625 23 L 12.9375 23 L 11.9375 22.9375 L 11.03125 22.8125 L 10.9375 22.78125 Z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }
}));

const NotStarted = props => __jsx("svg", _extends({
  fill: "#000000",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 26 26"
}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 3
  }
}), __jsx("path", {
  d: "M 13 1 C 6.382813 1 1 6.382813 1 13 C 1 19.617188 6.382813 25 13 25 C 19.617188 25 25 19.617188 25 13 C 25 6.382813 19.617188 1 13 1 Z M 13 3 C 18.535156 3 23 7.464844 23 13 C 23 15.40625 22.160156 17.621094 20.75 19.34375 L 6.65625 5.25 C 8.378906 3.839844 10.59375 3 13 3 Z M 5.25 6.65625 L 19.34375 20.75 C 17.621094 22.160156 15.40625 23 13 23 C 7.464844 23 3 18.535156 3 13 C 3 10.59375 3.839844 8.378906 5.25 6.65625 Z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }
}));

/***/ }),

/***/ "./src/components/atoms/icons/locationTypeIcon/locationTypeIcon.jsx":
/*!**************************************************************************!*\
  !*** ./src/components/atoms/icons/locationTypeIcon/locationTypeIcon.jsx ***!
  \**************************************************************************/
/*! exports provided: LocationTypeIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationTypeIcon", function() { return LocationTypeIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/geeberry/Working/WesterosCraftSite/web/src/components/atoms/icons/locationTypeIcon/locationTypeIcon.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


const LocationTypeIcon = props => {
  switch (props.type) {
    case 'castle':
      return __jsx(Castle, _extends({}, props, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6,
          columnNumber: 14
        }
      }));

    case 'town':
      return __jsx(Town, _extends({}, props, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 14
        }
      }));

    case 'village':
      return __jsx(Village, _extends({}, props, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 14
        }
      }));

    case 'city':
      return __jsx(City, _extends({}, props, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 14
        }
      }));

    case 'holdfast':
      return __jsx(Holdfast, _extends({}, props, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 14
        }
      }));

    case 'keep':
      return __jsx(Keep, _extends({}, props, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 14
        }
      }));

    case 'landmark':
      return __jsx(Landmark, _extends({}, props, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 14
        }
      }));

    case 'ruin':
      return __jsx(Ruin, _extends({}, props, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 14
        }
      }));

    case 'tower':
      return __jsx(Tower, _extends({}, props, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 14
        }
      }));

    case 'clan':
      return __jsx(Clan, _extends({}, props, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 14
        }
      }));

    case 'crannog':
      return __jsx(Crannog, _extends({}, props, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 14
        }
      }));

    case 'miscellaneous':
      return __jsx(Miscellaneous, _extends({}, props, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 14
        }
      }));

    default:
      return null;
  }
};

const Castle = props => __jsx("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg"
}, props, {
  fill: "#000000",
  viewBox: "0 0 30 30",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 3
  }
}), __jsx("path", {
  d: "M 15 2 L 11 6 L 19 6 L 15 2 z M 11 8 L 11 13 L 8 13 L 8 11 L 6 11 L 6 12 L 4 12 L 4 11 L 2 11 L 2 17 L 4 18 L 4 26 L 12 26 L 12 23 C 12 21.343 13.343 20 15 20 C 16.657 20 18 21.343 18 23 L 18 26 L 26 26 L 26 18 L 28 17 L 28 11 L 26 11 L 26 12 L 24 12 L 24 11 L 22 11 L 22 13 L 19 13 L 19 8 L 11 8 z M 8 20 C 8.552 20 9 20.448 9 21 L 9 23 L 7 23 L 7 21 C 7 20.448 7.448 20 8 20 z M 22 20 C 22.552 20 23 20.448 23 21 L 23 23 L 21 23 L 21 21 C 21 20.448 21.448 20 22 20 z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }
}));

const Town = props => __jsx("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg"
}, props, {
  viewBox: "0 0 512 512",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 3
  }
}), __jsx("path", {
  d: "M0 0h512v512H0z",
  fill: "#ffffff",
  fillOpacity: "0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }
}), __jsx("g", {
  className: "",
  transform: "translate(0,0)",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }
}, __jsx("path", {
  d: "M109.902 35.87l-71.14 59.284h142.28l-71.14-59.285zm288 32l-71.14 59.284h142.28l-71.14-59.285zM228.73 84.403l-108.9 90.75h217.8l-108.9-90.75zm-173.828 28.75v62h36.81l73.19-60.992v-1.008h-110zm23 14h16v18h-16v-18zm265 18v10.963l23 19.166v-16.13h16v18h-13.756l.104.087 19.098 15.914h-44.446v14h78v-39h18v39h14v-62h-110zm-194.345 48v20.08l24.095-20.08h-24.095zm28.158 0l105.1 87.582 27.087-22.574v-65.008H176.715zm74.683 14h35.735v34h-35.735v-34zm-76.714 7.74L30.37 335.153H319l-144.314-120.26zm198.046 13.51l-76.857 64.047 32.043 26.704H481.63l-108.9-90.75zm-23.214 108.75l.103.086 19.095 15.914h-72.248v77.467h60.435v-63.466h50v63.467h46v-93.466H349.516zm-278.614 16V476.13h126v-76.976h50v76.977h31.565V353.155H70.902zm30 30h50v50h-50v-50z",
  fill: "#000000",
  fillOpacity: "1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 7
  }
})));

const Village = props => __jsx("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg"
}, props, {
  viewBox: "0 0 512 512",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 3
  }
}), __jsx("path", {
  d: "M0 0h512v512H0z",
  fill: "#ffffff",
  fillOpacity: "0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }
}), __jsx("g", {
  className: "",
  transform: "translate(0,0)",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }
}, __jsx("path", {
  d: "M351.7 32.07c-17.3 13.48-28.8 31.24-31.1 48.48 3.2.79 7.1 1.59 11.7 2.09 8.3 1 18.3 1.5 28.3 1.5s20.1-.5 28.3-1.5c4.4-.5 8.2-1.2 11.3-1.89-1.5-6.13-4.5-14.42-9.2-22.61-5.5-9.49-13.1-18.83-21.6-25.96-2 1.57-4.9 3.41-8.8 3.41-4 0-6.9-1.93-8.9-3.52zM64.37 49.06C47.03 62.54 35.62 80.3 33.32 97.54c3.13.8 7.01 1.6 11.63 2.1 8.29.96 18.3 1.46 28.3 1.46s20.07-.5 28.25-1.46c4.4-.5 8.2-1.2 11.3-1.9-1.5-6.13-4.5-14.42-9.2-22.61-5.48-9.49-13.04-18.83-21.57-25.96-1.97 1.57-4.82 3.41-8.75 3.41-4.02 0-6.95-1.93-8.91-3.52zM336.6 101.2V119c.6.5 2 1.3 4.2 2.1 2.1.7 4.9 1.3 7.9 1.8 1.3-8.6 5.3-19.4 11.9-19.4 6.6 0 10.6 10.8 11.9 19.3 3-.4 5.7-1 7.9-1.7 2.2-.8 3.6-1.6 4.2-2.1v-17.8c-7.6.6-15.8.9-24 .9s-16.4-.3-24-.9zm-287.32 17V136c.57.5 1.96 1.3 4.19 2.1 2.15.7 4.89 1.3 7.91 1.8 1.33-8.6 5.32-19.4 11.9-19.4s10.58 10.8 11.9 19.3c3.01-.4 5.72-1 7.85-1.7 2.19-.8 3.59-1.6 4.19-2.1v-17.8c-7.58.6-15.76.9-23.97.9-8.21 0-16.39-.3-23.97-.9zm113.22 18.2c-22.2 16.8-36.8 39.3-39.2 61.3 4 1 9.1 2.2 15.6 2.9 10 1.2 22.1 1.8 34.1 1.8s24-.6 34-1.8c6.4-.7 11.3-1.8 15.3-2.9-1.5-7.6-5.4-18.3-11.5-28.8-6.9-11.9-16.5-23.6-27.4-32.3-.3.2-.5.5-.8.7-2.2 1.8-5.3 3.8-9.6 3.8s-7.4-2-9.6-3.8zm-19.9 82.7v24c0 .1 0 0 .3.2.8.7 2.9 2 5.9 3 2.7.9 6 1.6 9.8 2.2 1.2-10.5 6.1-24.7 14.4-24.7s13.2 14.2 14.4 24.7c3.8-.6 7.1-1.3 9.8-2.2 3-1 5.1-2.3 5.9-3 .3-.2.3-.1.3-.2v-24c-9.5.9-19.9 1.3-30.4 1.3-10.4 0-20.9-.4-30.4-1.3zm249.6.7c-35.4 25.6-58.7 61.2-61.1 96.2 6.1 1.9 15.5 3.9 26.4 5.1 14.6 1.8 32.1 2.6 49.6 2.6s35-.8 49.6-2.6c10.6-1.2 19.8-3.1 26-5-1.6-11.8-7.5-29.1-17.6-46.5-10.7-18.4-25.7-36.7-43-49.8-1.2 1-2.5 2.4-3.6 3.4-2.9 2.3-6.6 4.6-11.4 4.6-4.8 0-8.5-2.3-11.4-4.6-1.1-.9-2.4-2.3-3.5-3.4zM99.22 286.2c-40.72 29.1-67.49 70.2-69.95 110.4 7.08 2.3 18.01 4.6 30.81 6.1 16.52 1.9 36.24 2.9 55.92 2.9 19.7 0 39.4-1 55.9-2.9 12.7-1.5 23.6-3.8 30.7-6.1-1.8-13.5-8.8-33.6-20.4-53.5-12.2-21-29.4-42-49.4-56.9-1.5 1.5-3.2 3.3-4.7 4.4-3.2 2.6-7.1 5-12.1 5s-8.9-2.4-12.1-5c-1.5-1.1-3.2-3-4.68-4.4zm259.98 53.2V379c0 .6 0 1 1.8 2.5 1.7 1.5 5.2 3.5 9.8 5 4.3 1.4 9.5 2.6 15.1 3.4 1-15 8.1-39.4 21.2-39.4s20.2 24.4 21.2 39.4c5.6-.8 10.8-2 15.1-3.4 4.6-1.5 8.1-3.5 9.8-5 1.8-1.5 1.8-1.9 1.8-2.5v-39.6c-14.7 1.6-31.2 2.3-47.9 2.3s-33.2-.7-47.9-2.3zM61.03 420.8v45.8c0 1 .19 1.8 2.36 3.7 2.15 1.8 6.19 4 11.48 5.8 4.88 1.6 10.8 2.9 17.25 3.8.8-16.6 8.68-45.3 23.88-45.3s23.1 28.7 23.9 45.3c6.5-.9 12.4-2.2 17.3-3.8 5.2-1.8 9.3-4 11.4-5.8 2.2-1.9 2.4-2.7 2.4-3.7v-45.8c-16.8 1.9-35.9 2.8-55 2.8-19.08 0-38.21-.9-54.97-2.8z",
  fill: "#000000",
  fillOpacity: "1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 7
  }
})));

const City = props => __jsx("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 3
  }
}), __jsx("path", {
  d: "M0 0h512v512H0z",
  fill: "#ffffff",
  fillOpacity: "0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 5
  }
}), __jsx("g", {
  className: "",
  transform: "translate(0,0)",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 5
  }
}, __jsx("path", {
  d: "M256 22.604c-10.01 0-20.02 2.388-26.836 7.163-2.162 1.514-6.99 10.97-9.213 20.113-.69 2.84-1.016 5.075-1.446 7.516h74.992c-.43-2.44-.757-4.676-1.447-7.516-2.224-9.142-7.052-18.6-9.214-20.113-6.817-4.775-16.826-7.163-26.836-7.163zM80 26.626l-50.707 126.77h95.814l2.8-7zm352 0l-47.906 119.77 2.8 7h95.813zm-199 48.77v14h46v-14zm-19.438 32l-7 14h98.875l-7-14zm-63.468 32l-24.8 62h261.413l-24.8-62zM25 171.396v318h55v-39s4.074-32 16-32 16 32 16 32v39h80v-39c0-32 42.762-80 64-80 23.75 0 64 48 64 80v39h80v-39s4.074-32 16-32 16 32 16 32v39h55v-318h-92.906l19.2 48H393v183h-18v-135h-46v23h-18v-23h-46v23h-18v-23h-46v23h-18v-23h-46v135h-18v-183H98.707l19.2-48zm14 23h18v32H39zm416 0h18v32h-18zm-318 25v30h46v-7h18v7h46v-7h18v7h46v-7h18v7h46v-30zm-50 71h18v32H87zm320 0h18v32h-18zM256 312.91l2.846.946s24.722 8.202 49.69 22.766c12.483 7.282 25.14 16.154 35.077 26.918C353.55 374.304 361 387.396 361 402.396h-18c0-9-4.55-17.91-12.613-26.645-8.064-8.735-19.406-16.863-30.922-23.58-20.776-12.12-39.553-18.78-43.465-20.142-3.912 1.36-22.69 8.022-43.465 20.14-11.516 6.72-22.858 14.847-30.922 23.583C173.55 384.488 169 393.397 169 402.397h-18c0-15 7.45-28.092 17.387-38.856 9.936-10.764 22.594-19.636 35.078-26.918 24.967-14.564 49.69-22.766 49.69-22.766z",
  fill: "#000000",
  fillOpacity: "1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 7
  }
})));

const Keep = props => __jsx("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 3
  }
}), __jsx("path", {
  d: "M0 0h512v512H0z",
  fill: "#ffffff",
  fillOpacity: "0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 5
  }
}), __jsx("g", {
  className: "",
  transform: "translate(0,0)",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 5
  }
}, __jsx("path", {
  d: "M133.842 41.092v41.262h91.138V41.092h-17.318V55.05h-18V41.09h-20.164v13.96h-18V41.09h-17.656zm25.828 59.262v41.261h10.828v18H159.67V260.14h61.31V229.63h18v30.508h100.97V185h-21.657v14.123H201.154V179.37h-12.232v-18h12.232v-61.015H159.67zm169.53 39.412L318.987 167h20.424L329.2 139.766zm-59.563 80.865h19.828v18h-19.828v-18zm-111.594 57.508l-5.887 29.324c19.725-13.368 39.964-23.723 60.276-29.324h-54.389zm122.928 0c25.32 6.411 50.978 19.055 76.066 35.3l-14.174-35.3h-61.892zm-24.653 13.957c-3.82 5.105-10.723 14.754-17.113 26.025-9.407 16.592-15.751 36.437-12.736 44.975 2.876 8.144 8.599 13.288 17.574 17.716 8.975 4.43 20.9 7.524 33.516 10.55 12.616 3.024 25.91 6.002 38.046 11.144s23.464 12.776 30.178 25.137c10.055 18.51 7.03 43.647 3.188 65.037-.08.446-.167.878-.248 1.32H494v-32.738c-14.198-15.921-30.351-33.191-47.953-50.551-57.898-57.103-130.39-112.264-189.729-118.615zm-40.763 4.166c-50.359 15.487-106.827 66.43-151.858 118.12C46.516 434.107 31.08 453.593 18 470.997V494h227.406c6.68-4.756 12.807-9.822 17.518-14.9 7.244-7.81 10.646-15.074 10.185-21.036-.535-6.926-3.903-10.494-11.75-14.556-7.846-4.063-19.606-7.09-32.046-10.051-12.441-2.96-25.562-5.894-37.028-11.207-11.465-5.313-21.989-13.921-25.228-27.326-3.35-13.863.587-28.2 7.101-41.846 6.514-13.646 15.908-26.903 25.531-38.713 5.355-6.571 10.79-12.676 15.866-18.103zm1.195 25.734c-9.738 12.244-20.112 26.008-26.348 38.836-5.547 11.62-7.701 22.2-5.85 29.863 1.63 6.74 6.426 11.11 15.302 15.223 8.875 4.112 21.114 7.052 33.626 10.03 12.513 2.977 25.296 5.952 36.155 11.573 10.858 5.622 20.357 15.42 21.42 29.157 1.024 13.248-5.882 24.903-14.934 34.662a98.14 98.14 0 0 1-2.574 2.66H330.4c.292-1.478.58-2.975.854-4.502 3.586-19.966 4.125-43.301-1.287-53.264-4.167-7.671-11.37-12.912-21.383-17.154-10.012-4.242-22.484-7.16-35.223-10.215-12.738-3.054-25.756-6.222-37.283-11.91-11.527-5.688-21.867-14.513-26.582-27.865-5.428-15.372-.157-31.982 7.254-47.094z",
  fill: "#000000",
  fillOpacity: "1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 7
  }
})));

const Holdfast = props => __jsx("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 3
  }
}), __jsx("path", {
  d: "M0 0h512v512H0z",
  fill: "#ffffff",
  fillOpacity: "0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 5
  }
}), __jsx("g", {
  className: "",
  transform: "translate(0,0)",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 5
  }
}, __jsx("path", {
  d: "M256 123.1c-20.516 15.092-38.26 36.844-53.766 59.9h107.532c-15.505-23.056-33.25-44.808-53.766-59.9zm-176.877 3.42l-7.162 41.718c-.143.016-13.15 77.655-13.15 77.655 30.433-3.215 60.18-5.702 89.395-7.475 13.228-23.585 28.986-53.104 48.95-80.135-33.286 1.448-68.19 4.104-106.41 7.987l6.132-36.79-17.754-2.96zm337.58.427l-17.756 2.96 6.006 36.032c-31.242-3.483-60.796-5.96-89.932-7.415 20.034 27.173 35.822 56.82 49.074 80.422a1554.483 1554.483 0 0 1 73.076 6.817L423.9 168.14c-.227-.027-7.197-41.193-7.197-41.193zM190.69 201c-7.623 12.392-14.61 24.686-21.127 36.24 59.372-2.912 116.642-2.788 173.076.36-6.576-11.657-13.63-24.08-21.33-36.6H190.69zm64.01 51.998c-7.23.006-14.462.06-21.7.158V279h46v-25.81c-8.072-.124-16.17-.188-24.3-.192zm-39.7.504c-36.22.876-72.693 2.9-110 6.05V279h110v-25.498zm82 .082V279h110v-18.523a1538.762 1538.762 0 0 0-110-6.893zm-210 7.568c-9.934.927-19.925 1.922-30 3.004V279h30v-17.848zm338 1.205V279h30v-13.055l-8.117-1.015A1555.665 1555.665 0 0 0 425 262.357zM51.727 297l-30 30h468.546l-30.002-30H51.728zM23 345l-.5 94-.5 18h468l-.5-18-.5-94h-18v94h-26.8v-94h-18v94h-26.8v-94h-18v94h-26.8v-94h-18v94h-26.8v-94h-18v94H265v-94h-18v94h-26.8v-94h-18v94h-26.8v-94h-18v94h-26.8v-94h-18v94H85.8v-94h-18v94H41v-94H23z",
  fill: "#000000",
  fillOpacity: "1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 7
  }
})));

const Ruin = props => __jsx("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 3
  }
}), __jsx("path", {
  d: "M0 0h512v512H0z",
  fill: "#ffffff",
  fillOpacity: "0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 107,
    columnNumber: 5
  }
}), __jsx("g", {
  className: "",
  transform: "translate(0,0)",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 108,
    columnNumber: 5
  }
}, __jsx("path", {
  d: "M91.033 22.14v84.368l46.434 57.56v16.166l98.93 44.13 27.29-34.305 65.9 4.01v-30l46.433-57.562v-84.37h-48.916v39.796H297.33V22.14h-49.45v39.794h-29.24V22.14h-49.45v39.794h-29.243V22.14H91.033zm46.434 178.557v195.17h-29.88l-21.792 94.695h295.463l-21.79-94.695h-29.882V370.02l-38.72-24.07-23.712 29.292 28.432 25.737-12.543 13.854L241.5 377.23l33.37-41.222-91.65-56.973 33.288-43.082-79.04-35.256zm155.013 19.11l19.04 34.994 31.005-5.405-17.287-29.588H292.48zm66.682 10.088l17.293 74.527 55.553 2.068-13.442-57.967-59.404-18.628zm-135.47 27.328l-13.034 16.865 37.393 23.244 18.167-20.61-42.526-19.5zm73.115 13.056l-32.66 37.056 65.44 40.68V298.2l-32.78-27.92zm85.154 51.745l-5.16 29.584 33.49 18.158-.093-31.258-28.236-16.485zm79.91 6.928l-23.073 23.197 8.697 33.106 25.717-18.08-11.34-38.223zm-65.85 68.992l-10.97 36.977 24.88 17.49 8.414-32.025-22.323-22.442z",
  fill: "#000000",
  fillOpacity: "1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 109,
    columnNumber: 7
  }
})));

const Tower = props => __jsx("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 119,
    columnNumber: 3
  }
}), __jsx("path", {
  d: "M0 0h512v512H0z",
  fill: "#ffffff",
  fillOpacity: "0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 120,
    columnNumber: 5
  }
}), __jsx("g", {
  className: "",
  transform: "translate(0,0)",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 121,
    columnNumber: 5
  }
}, __jsx("path", {
  d: "M71 22.406v102.53h202.25v18.69h-73.22v36.968h-18.686v-36.97H79.156l43.375 53.782h180.44v18.688H180.905v36.97H162.22v-36.97h-39.407v163.562h58.53v-44.75H157.47V316.22h74.155V282.56H193.72v-18.687h97.218v18.688h-40.625v33.656h73.28v18.686h-32.437v44.75h26.313v18.688h-63.69l-2.686 74.03-18.688-.687 2.656-73.343H93.032V398h-.22l-28.687 92.844h79.844l9.81-70.688 18.5 2.563-9.468 68.124H453.25L424.562 398h-30.03V197.78l51.812-64.25V22.407h-64.406v52.438h-39.22V22.406h-65.124v52.438h-38.53V22.406h-65.126v52.438h-38.5V22.406H71zm129.03 312.5v44.75h72.44v-44.75h-72.44z",
  fill: "#000000",
  fillOpacity: "1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 122,
    columnNumber: 7
  }
})));

const Miscellaneous = props => __jsx("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 132,
    columnNumber: 3
  }
}), __jsx("path", {
  d: "M0 0h512v512H0z",
  fill: "#ffffff",
  fillOpacity: "0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 133,
    columnNumber: 5
  }
}), __jsx("g", {
  className: "",
  transform: "translate(0,0)",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 134,
    columnNumber: 5
  }
}, __jsx("path", {
  d: "M93.313 19.406c-11.24 0-20.157 8.916-20.157 20.157 0 6.968 3.436 13.022 8.72 16.624L35.218 494.25H54l46.438-435.875c7.637-2.84 13-10.1 13-18.813 0-11.237-8.886-20.156-20.126-20.156zm23.906 52.688l-21.157 198.78 92.624 19.532 64.157-194L117.22 72.094zm137.593 78.28L190.625 344.44l58.28 11.03-3.81-57.874 27.03 29.906 18.594-7.844 11.31 45.875 82.69 15.626-34.033-68.437 29.844-12.658 23.033 32.563 42.5.188 1.875 17.875 39-24.375-35.813-8.532-7.938-29.655-45.78-2.406 3.28-30.845-35.437-19.406 15.03-31.095 28.064-21.344v-.093l-153.53-32.562zm189.875 9.44l2.125 34.53-51.22 23.312 71.782 4.375 16.22-15.718L462.904 172l-18.217-12.188zm-4.47 84.874l35.126 45.625 18.47-25.625-53.595-20zm-98.468 8.25l24.813 1.406 5.218 23.75-50.155 9.062 20.125-34.22zm-4.03 76.687l11.967 19.22-37.062 2.217 5.094-15.906 20-5.53zm79.874 16.5l-17.53 29.188 39.717 32.718 40.876-11.092-40.28-19.875-22.782-30.938z",
  fill: "#000000",
  fillOpacity: "1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 135,
    columnNumber: 7
  }
})));

const Landmark = props => __jsx("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 145,
    columnNumber: 3
  }
}), __jsx("path", {
  d: "M0 0h512v512H0z",
  fill: "#ffffff",
  fillOpacity: "0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 146,
    columnNumber: 5
  }
}), __jsx("g", {
  className: "",
  transform: "translate(0,0)",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 147,
    columnNumber: 5
  }
}, __jsx("path", {
  d: "M151 32v247h18V32h-18zm247 9.574l-13.428 7.59c-31.626 17.876-61.492 12.267-93.138 4.356-31.647-7.912-64.83-18.84-97.946-4.807L188 51.039V166.588l12.512-5.3c25.883-10.968 54.201-2.396 86.554 5.692 32.354 8.089 68.988 14.98 106.362-6.144l4.572-2.584V41.574zM73 297v67.271l32 32V487h302v-90.729l32-32V297h-46v39h-18v-39h-46v39h-18v-39h-46v39h-18v-39h-46v39h-18v-39h-46v39h-18v-39H73z",
  fill: "#000000",
  fillOpacity: "1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 148,
    columnNumber: 7
  }
})));

const Crannog = props => __jsx("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 158,
    columnNumber: 3
  }
}), __jsx("path", {
  d: "M0 0h512v512H0z",
  fill: "#ffffff",
  fillOpacity: "0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 159,
    columnNumber: 5
  }
}), __jsx("g", {
  class: "",
  transform: "translate(0,0)",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 160,
    columnNumber: 5
  }
}, __jsx("path", {
  d: "M219.7 24.43l-17.8 2.06 6.8 59.37-36.1-50.35-14.6 10.5 31.9 44.45h37.4zm34.9.18l-6.3 65.85h18.2l6.1-64.15zm83.6 1.58l-37 64.27h20.7l31.9-55.29zm-50.9 6.33l-10.1 57.94h18.4l9.5-54.86zM195 108.5c-5.6 4-12.5 10.3-20.1 18h162.2c-7.6-7.7-14.5-14-20.1-18zm-36.9 36c-18.1 20.5-38.5 46.4-56.8 72.2-16.85 23.8-32.22 47.6-43.25 67.2-5.51 9.8-9.94 18.6-12.89 25.6-2.83 6.7-4.02 12-4.12 13.6.14 0 .58 1.6 2.29 3.3 2.32 2.4 6.32 5.2 11.79 7.4 10.93 4.4 27.71 6.6 50.08-.4 12.8-4 24.6 1.4 36.3 6.3 11.8 5 24.2 10.4 37.5 11.7 15.7 1.7 37.3-6.3 58.3-13.8 10.5-3.8 20.9-7.3 31-8.9 10.2-1.7 20.6-1.4 29.6 4.1 10.5 6.4 22.4 12.8 33.3 15.8 11 3.1 20.2 2.9 28.2-2.5 26.7-17.8 51.3-16.8 69.6-7.3 19.8 10.3 28.4 7.2 34 2.4 5.7-4.8 8.1-15 8-17.3v-.4c0-1.4-1.2-7-4.2-14s-7.4-15.8-12.9-25.6c-11-19.6-26.4-43.4-43.2-67.2-18.3-25.8-38.7-51.7-56.8-72.2zm121 201.3c-2.3 0-4.9.2-7.9.6-7.9 1.3-17.5 4.5-27.8 8.1-20.6 7.4-43.7 17.2-66.2 14.9-17-1.8-31.2-8.3-42.6-13.1-11.5-4.8-19.7-7.1-24-5.7-1.9.6-3.8 1.1-5.6 1.6v99.3c0 4.2 2.5 8.5 9.8 13.6 7.4 5 19.1 9.9 33.5 13.7 14.7 3.9 32.2 6.9 51 8.8 1.1-21.9 5-45.4 12.2-65.2 4.3-11.7 9.6-22.1 16.8-30.1 7.1-8.1 16.7-13.8 27.7-13.8s20.6 5.7 27.7 13.8c7.2 8 12.5 18.4 16.8 30.1 7.2 19.8 11.1 43.3 12.2 65.2 18.8-1.9 36.3-4.9 51-8.8 14.4-3.8 26.1-8.7 33.5-13.7 7.3-5.1 9.8-9.4 9.8-13.6V350c-10.3-1.6-22.3.9-37.6 11.1-13.4 8.9-29 8.7-43 4.9-13.9-3.8-26.9-11.1-37.9-17.8-2.4-1.5-5.5-2.3-9.4-2.4z",
  fill: "#000000",
  fillOpacity: "1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 161,
    columnNumber: 7
  }
})));

const Clan = props => __jsx("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 100 125"
}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 171,
    columnNumber: 3
  }
}), __jsx("path", {
  d: "M98.7,89.1L58.8,9.4c-0.4-0.8-1.1-1.3-2-1.3c-0.9,0-1.7,0.5-2.1,1.2L40,37.8L36.1,31c-0.4-0.7-1.2-1.2-2.1-1.1  c-0.9,0-1.6,0.6-2,1.3L1.5,89c-0.3,0.7-0.3,1.5,0.2,2.2c0.4,0.7,1.1,1,1.9,1h93c0.8,0,1.5-0.4,1.9-1C98.9,90.6,99,89.8,98.7,89.1z   M28.9,87.7c0-6.8,3.3-12.8,8.5-16.6l1-0.7l1.7,6.3c0.4,0.9,1.7,0.7,1.8-0.2l2.6-13.3c0.2-1,1.5-1.1,1.9-0.2l2,5.5  c0.3,0.9,1.5,0.8,1.8,0l1.4-4.1c0.3-1,1.8-0.8,1.9,0.3l0.7,13.2c0.1,1.2,1.8,1.2,1.9,0.1l1.4-10.4c0.1-1.1,1.7-1.1,1.9-0.1L63,81.6  c0.2,1,1.7,1,1.9,0l1.2-5.6c2.3,3.3,3.7,7.3,3.7,11.7H28.9z M60.7,37.1C60.1,36.5,59,37,59,37.8l-0.5,12c0,0.9-1.1,1.3-1.7,0.6  l-7.6-5c-0.4-0.5-1.2-0.4-1.5,0.1l-6.4,10.4c-0.4,0.5-1.2,0.5-1.6,0l-4.3-5.8c-0.3-0.5-1.1-0.5-1.5-0.1l-11.1,9.4l11.5-22.3l3.8,6.7  c0.4,0.7,1.2,1.2,2,1.1c0.8,0,1.6-0.5,2-1.2l14.5-28.1l14.2,30L60.7,37.1z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 172,
    columnNumber: 5
  }
}));

/***/ }),

/***/ "./src/components/atoms/icons/regionIcon/index.js":
/*!********************************************************!*\
  !*** ./src/components/atoms/icons/regionIcon/index.js ***!
  \********************************************************/
/*! exports provided: RegionIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _regionIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regionIcon */ "./src/components/atoms/icons/regionIcon/regionIcon.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegionIcon", function() { return _regionIcon__WEBPACK_IMPORTED_MODULE_0__["RegionIcon"]; });




/***/ }),

/***/ "./src/components/atoms/icons/regionIcon/regionIcon.jsx":
/*!**************************************************************!*\
  !*** ./src/components/atoms/icons/regionIcon/regionIcon.jsx ***!
  \**************************************************************/
/*! exports provided: RegionIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionIcon", function() { return RegionIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/geeberry/Working/WesterosCraftSite/web/src/components/atoms/icons/regionIcon/regionIcon.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


const RegionIcon = props => {
  switch (props.region) {
    case 'dorne':
      return __jsx(Dorne, _extends({}, props, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6,
          columnNumber: 14
        }
      }));

    case 'riverlands':
      return __jsx(Riverlands, _extends({}, props, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 14
        }
      }));

    case 'thewall':
    case 'wall':
    case 'theWall':
      return __jsx(Wall, _extends({}, props, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 14
        }
      }));

    case 'north':
      return __jsx(North, _extends({}, props, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 14
        }
      }));

    case 'vale':
      return __jsx(Vale, _extends({}, props, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 14
        }
      }));

    case 'ironIslands':
      return __jsx(IronIslands, _extends({}, props, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 14
        }
      }));

    case 'westerlands':
      return __jsx(Westerlands, _extends({}, props, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 14
        }
      }));

    case 'crownlands':
      return __jsx(Crownlands, _extends({}, props, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 14
        }
      }));

    case 'stormlands':
      return __jsx(Stormlands, _extends({}, props, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 14
        }
      }));

    case 'reach':
      return __jsx(Reach, _extends({}, props, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 14
        }
      }));

    case 'beyondTheWall':
      return __jsx(BeyondTheWall, _extends({}, props, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 14
        }
      }));

    case 'guide':
      return __jsx(Guide, _extends({}, props, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 14
        }
      }));

    default:
      return __jsx("div", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 14
        }
      });
  }
};

const BeyondTheWall = props => __jsx("svg", _extends({
  fill: "none"
}, props, {
  viewBox: "0 0 16 16",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 3
  }
}), __jsx("path", {
  d: "M15.984 6.626c-.078-.293-.34-.395-.6-.354-.503.075-1 .143-1.503.218.164-.3.327-.592.49-.892.314-.571-.535-1.088-.849-.517-.287.531-.581 1.055-.869 1.586l-.842.122c.137-.3.268-.599.405-.898.268-.592-.575-1.109-.85-.517-.234.524-.476 1.054-.711 1.578-.111.014-.222.034-.34.048-.3.04-.594.088-.894.13l-.582-.776c.118-.307.242-.613.36-.919l1.998-.47c.614-.142.353-1.129-.261-.986-.431.102-.856.197-1.287.3.13-.334.261-.667.392-.994.496-.204.986-.415 1.483-.619.241-.102.418-.34.34-.626-.066-.245-.354-.462-.602-.354-.235.103-.47.198-.705.3.176-.45.353-.898.529-1.34.098-.259-.111-.558-.34-.626-.28-.082-.503.102-.6.353-.203.51-.399 1.02-.601 1.531-.203-.265-.405-.537-.608-.803-.163-.217-.522-.177-.692 0-.21.218-.163.504 0 .722.294.387.581.775.875 1.163-.104.258-.202.517-.307.775-.17-.238-.346-.476-.516-.72-.157-.218-.424-.334-.673-.184-.209.129-.333.476-.176.7.314.429.62.864.934 1.293l-.235.592c-.105.265-.21.524-.314.79l-.548.08c-.248-.319-.497-.646-.745-.965.144-.545.281-1.096.425-1.64.163-.633-.777-.905-.947-.272-.079.306-.163.619-.242.925-.144-.184-.28-.367-.424-.55.124-.58.248-1.157.372-1.743.137-.64-.81-.911-.947-.272-.072.334-.144.66-.21.994-.32-.429-.652-.858-.985-1.286-.17-.218-.516-.177-.693 0-.209.21-.163.51 0 .72.294.382.595.77.889 1.15-.373-.013-.751-.033-1.13-.047-.634-.027-.627.993 0 1.02.646.028 1.3.055 1.946.089.157.204.313.408.47.606l-1.195.122c-.261.027-.49.218-.49.51 0 .252.222.538.49.51.64-.068 1.287-.129 1.927-.197l.385.504.255.326-.307.796c-.346.048-.692.102-1.039.15-.437-.388-.875-.769-1.312-1.157-.477-.421-1.176.3-.693.721.235.211.47.415.706.626l-1.117.164c-.307-.409-.614-.824-.928-1.232-.163-.217-.522-.177-.692 0-.209.218-.163.504 0 .721.17.225.34.45.503.674-.398.061-.803.116-1.202.177-.261.04-.405.388-.34.626.079.292.34.394.602.354.34-.048.679-.103 1.025-.15-.157.347-.307.687-.464 1.034-.268.592.575 1.109.85.517.254-.572.515-1.143.77-1.714.411-.062.823-.116 1.228-.177-.235.435-.477.87-.712 1.306-.314.571.535 1.088.849.517.36-.667.725-1.333 1.084-2l.438-.061.3-.041.588.789c-.17.435-.34.87-.516 1.306-.607.163-1.208.327-1.816.49-.607.163-.352 1.15.262.986.365-.095.725-.197 1.09-.292l-.313.803c-.562.136-1.117.279-1.679.415-.614.15-.352 1.136.262.986.32-.081.64-.156.96-.238-.19.483-.38.96-.569 1.442-.098.259.111.558.34.626.28.082.503-.102.6-.353.17-.429.34-.858.51-1.293.183.333.373.667.555 1 .314.572 1.163.055.85-.517-.314-.558-.621-1.123-.934-1.68.13-.34.267-.674.398-1.014.222.367.45.735.673 1.095.34.551 1.188.041.849-.517-.353-.578-.712-1.156-1.065-1.742.052-.142.111-.278.163-.421l.177-.45 1.43-.203.653.843c-.176.565-.359 1.123-.535 1.687-.196.626.744.892.947.273.104-.34.215-.674.32-1.014.215.279.43.55.64.83-.21.558-.425 1.116-.634 1.68-.098.259.105.558.34.626.274.082.503-.102.6-.354l.393-1.04c.359.469.725.932 1.084 1.401.17.218.516.177.692 0 .209-.21.163-.51 0-.721-.32-.415-.64-.823-.954-1.238.327-.02.647-.048.974-.068.627-.048.633-1.068 0-1.02-.575.04-1.143.08-1.718.122-.222-.286-.438-.572-.66-.858.268-.027.536-.054.804-.088.26-.027.49-.211.49-.51 0-.252-.223-.538-.49-.51l-1.529.163c-.065-.089-.137-.177-.202-.266l-.568-.734.385-.994.986-.143c.45.45.902.898 1.346 1.347.457.456 1.15-.265.692-.72-.268-.266-.536-.538-.803-.804.26-.04.522-.074.777-.115.444.34.881.687 1.326 1.027.215.163.548.034.672-.184.144-.258.04-.53-.176-.7-.15-.116-.294-.232-.444-.347.477-.068.96-.136 1.437-.211.261-.027.405-.381.34-.62z",
  fill: "#000",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }
}));

const Crownlands = props => __jsx("svg", _extends({}, props, {
  viewBox: "0 0 16 16",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 3
  }
}), __jsx("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M11.08 0c-.388.003-.792.04-1.223.13 1.134.237 1.847.74 2.23 1.327a15.84 15.84 0 00-1.54-.187L9.908.68l-.653.556c-.255.006-.507.018-.755.039L7.503.727l-.505.772c-.275.06-.544.13-.808.21l-.998-.506-.383 1.04a9.55 9.55 0 00-.867.472l-1.107-.18-.016.982a9.93 9.93 0 00-.622.564H1.001l.12 1.24c-.147.2-.29.407-.429.621l-.69-.125v1.336L0 7.156V16h.627c.796-3.145 3.202-4.411 5.722-2.884 1.427.865 3.176 2.108 5.048 1.393-.03.269-.11.528-.234.763l3.23.649c.1-.262.188-.532.258-.797-.12.077-.351.162-.67.112-1.4-.22-1.123-1.828-.018-1.976.37-.05.716.109.933.38l.62-1.314c-2.307.205-4.39-1.043-6.688-.565 1.2.251 1.93.8 2.294 1.433-.248.019-.488.02-.72.005l-.367-.347-.461.218a4.323 4.323 0 01-.587-.195l-.261-.523-.37.202a4.98 4.98 0 01-.688-.51l-.062-.904-.658.17a3.966 3.966 0 00-.775-.62l-.043-.669-.809.318a2.772 2.772 0 00-1.187-.008c1.498-3.058 4.54-3.126 6.123-2.184-.176.192-.385.35-.613.466l2.254 2.399c.235-.155.462-.324.672-.5-.143-.007-.48-.17-.592-.273-1.17-1.074.24-2.16 1.114-1.645.32.19.52.504.54.851l1.176-.807C12.81 7.47 11.926 5.34 9.776 4.4c.782.844 1.074 1.661 1.049 2.36a4.189 4.189 0 00-.977-.548l-.469-.72-.616.432a5.543 5.543 0 00-.534-.05l-.647-.613-.517.666a7.576 7.576 0 00-.807.155l-.533-.44-.33.704a9.088 9.088 0 00-.704.29l-.8-.28-.292.876a9.502 9.502 0 00-1.18.881c1.166-4.658 6.999-5.79 9.993-5.128-.038.23-.113.452-.219.655l3.23.649c.1-.262.188-.532.257-.797-.12.077-.254.18-.405.16-1.568-.214-1.484-1.852-.283-2.024.37-.053.717.108.934.38.034-.345.061-1.206.074-1.553-1.874.167-3.24-.468-4.92-.456z",
  fill: "#000",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }
}));

const Dorne = props => __jsx("svg", _extends({}, props, {
  viewBox: "0 0 16 16",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 3
  }
}), __jsx("path", {
  d: "M8.127 0a20.279 20.279 0 00-1.265 3.104l-.137.428-.356-.274a11.802 11.802 0 01-2.237-2.237c.06 1.17.225 2.266.456 3.321l.096.439-.445-.06a11.802 11.802 0 01-3.056-.818c.637.982 1.328 1.85 2.056 2.648l.302.332-.415.171a11.8 11.8 0 01-3.056.819c1.043.532 2.075.938 3.104 1.265l.428.137-.274.356a11.807 11.807 0 01-2.237 2.237c1.17-.06 2.266-.225 3.321-.456l.439-.097-.06.446a11.802 11.802 0 01-.818 3.056A20.278 20.278 0 006.62 12.76l.332-.302.171.415a11.8 11.8 0 01.819 3.056 20.277 20.277 0 001.266-3.104l.136-.428.356.274a11.802 11.802 0 012.237 2.237 20.289 20.289 0 00-.456-3.321l-.096-.439.445.06c1.019.134 2.04.39 3.056.818a20.28 20.28 0 00-2.056-2.648l-.302-.332.415-.171A11.8 11.8 0 0116 8.057a20.283 20.283 0 00-3.104-1.266l-.428-.136.274-.356a11.804 11.804 0 012.237-2.237 19.4 19.4 0 00-1.838.184L8.707 8.679a1.02 1.02 0 01-.749.318.971.971 0 01-.655-.294c-.336-.34-.411-.97.014-1.406l.001-.002 4.135-4.135c.148-.683.357-1.366.644-2.047A20.277 20.277 0 009.45 3.17l-.332.302-.171-.415A11.8 11.8 0 018.127 0zm7.844.029l-3.015 1.918v1.097h1.097L15.97.029zm-3.645 3.15l-.293.293-4.264 4.264c-.214.22-.148.393-.018.524a.345.345 0 00.229.107c.08.003.168-.019.28-.132l4.561-4.561h-.495v-.495zm-8.225 8.935c-.288.058-.576.11-.866.156L0 15.505.495 16l3.542-3.542c.023-.114.044-.229.064-.344z",
  fill: "#000",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 5
  }
}));

const IronIslands = props => __jsx("svg", _extends({
  fill: "none"
}, props, {
  viewBox: "0 0 16 16",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 3
  }
}), __jsx("path", {
  d: "M7.181 1.256c-.41.88-.845 2.06-1.176 3.202-.332 1.142-.56 2.256-.577 2.964-.012.185-.014.55.116.672.012.001.069 0 .17-.052.61-.308 1.446-.44 2.286-.44.84 0 1.677.132 2.287.44.1.051.157.053.169.052.106-.146.118-.528.116-.672-.016-.708-.245-1.822-.577-2.964-.332-1.141-.765-2.321-1.176-3.202C8.713 1.01 8.336-.005 8 0c-.37.006-.69.981-.819 1.256zm-.65-.035c-.756.599-1.687 1.441-1.987 2.24.13.487.463.805.797 1.12.338-1.14.747-2.36 1.19-3.36zm2.94.003c.486 1.18.887 2.274 1.188 3.356.3-.318.741-.663.797-1.119-.49-1.034-1.2-1.626-1.986-2.237zM1.383 3.723c-.053.576.064 1.36.743 2.212.247-.07.461-.173.633-.3.158.27.395.566.442.885.084.713-.546 1.712-1.107 2.665-.28.477-.538.943-.637 1.417-.1.474.01.996.435 1.35.343.287.799.264 1.203.13.404-.135.805-.38 1.172-.647.238-.172.46-.353.654-.52l.22.063c-.548.673-.966 1.364-1.394 1.923-.508.665-1 1.127-1.743 1.259-.481.085-1.279-.21-2.004-.609v.702c.688.361 1.433.63 2.108.51.94-.167 1.575-.777 2.118-1.488.507-.663.96-1.428 1.556-2.117l.183.05c-.055.272-.13.62-.227 1.002-.216.849-.545 1.844-.895 2.344-.31.442-.921.971-1.559 1.446h.996c.42-.35.796-.72 1.057-1.092.455-.65.764-1.67.987-2.546.096-.381.172-.73.228-1.008.15.035.293.065.43.09-.056.83-.197 2.657-.421 3.62-.062.264-.162.59-.279.936h.64c.092-.285.172-.557.227-.796.245-1.047.381-2.824.435-3.676.146.013.288.02.43.02.065 1.487.092 2.982.173 4.452h.605c-.07-1.494-.124-2.995-.174-4.493.123-.015.25-.034.382-.059.013.188.029.399.05.64.062.666.157 1.454.325 2.008.17.562.465 1.235.795 1.904h.679c-.377-.748-.722-1.511-.896-2.084-.138-.454-.24-1.235-.3-1.885-.021-.237-.04-.475-.055-.712l.345-.087c.103.334.277.861.511 1.434.391.956.918 2.038 1.677 2.566.745.519 1.908.627 2.91.654.35.01.677.005.959-.004v-.612c-.275.009-.598.014-.943.004-.959-.026-2.07-.19-2.583-.546-.526-.366-1.086-1.38-1.46-2.296a16.69 16.69 0 01-.486-1.36l.214-.061c.156.313.393.76.683 1.197.259.389.553.767.89 1.035.337.267.775.436 1.188.248.235-.107.419-.275.526-.48.107-.204.137-.43.126-.654-.021-.449-.193-.916-.38-1.4-.189-.484-.397-.981-.52-1.433-.121-.451-.149-.844-.038-1.132.329-.54.788-.987 1.228-1.317.18.144.412.26.683.337.679-.851.796-1.636.743-2.212-.825.263-1.417.9-1.835 1.42-.541.418-1.147.937-1.383 1.55-.185.481-.119 1.005.019 1.516.138.51.356 1.023.539 1.495.183.471.326.906.34 1.206a.655.655 0 01-.056.338c-.234.356-.58.213-.806.036-.249-.197-.523-.535-.762-.895-.478-.72-.828-1.515-.828-1.515l-.009.004-.293-.592c-.2.296-.536.491-.915.491a1.12 1.12 0 01-.756-1.94 6.418 6.418 0 00-2.024-.037c.24.207.394.514.394.855 0 .616-.5 1.122-1.11 1.122-.484 0-.9-.32-1.05-.762-.276.624-.99 1.13-1.42 1.445-.34.246-.706.462-1.01.564-.305.1-.499.088-.63-.021-.265-.221-.297-.416-.227-.75.07-.335.293-.769.565-1.232.545-.926 1.314-1.968 1.188-3.05-.043-.37-.25-.71-.437-.998-.46-.712-1.236-1.527-1.982-1.727zm5.004 4.899a.503.503 0 00-.505.51c0 .285.223.51.505.51a.503.503 0 00.504-.51.503.503 0 00-.504-.51zm3.495 0a.503.503 0 00-.504.51c0 .285.222.51.504.51a.503.503 0 00.505-.51.503.503 0 00-.505-.51z",
  fill: "#000",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 5
  }
}));

const North = props => __jsx("svg", _extends({
  fill: "none"
}, props, {
  viewBox: "0 0 16 16",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 3
  }
}), __jsx("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M5.422 0c-.777 1.329-1.06 2.83-.664 4.622l.014-.008c.073.244.166.482.284.71l-.545.331a4.969 4.969 0 01-.462-1.347A9.757 9.757 0 00.543 4.23c1.138.369 1.762.862 2.56 1.692C2.208 6.276 1.091 7.018 0 8.466c1.184-.32 2.165-.415 2.986-.228C1.753 9.05.847 10.27.036 12.37c1.2-.625 2.167-.682 3.438-.684-.77 1.186-1.178 2.799-1.213 4.087.82-.942 1.924-2.18 2.912-2.86.1 1.083.501 2.111 1.2 3.086-.008-1.587.342-3.197 1.055-4.829-.348.18-.692.385-1.03.62l-.637.44.164-.8.46-2.231c-.403.011-.813.156-1.268.35l-.753.32.36-.786L6.006 6.28l.56.3-.95 2.077c.383-.113.78-.177 1.202-.103l.327.058-.072.35-.383 1.86a9.42 9.42 0 011.7-.784l.002-.001.022-.007a9.1 9.1 0 01.817-.237c1.44-.394 2.99-.688 5.028-.784.255-.466.46-.877.63-1.258l-.211-.885-.815 1.116-.263-.995-.75 1.057-.252-.945-.796 1.139-.257-1.022-.796 1.14.04-1.491.754-1.544.256 1.022.797-1.138.256 1.02.782-1.086.22.974.815-1.116.262.996.822-1.157c.076-.391.154-.814.247-1.296-1.854-.133-3.55.175-5.145.357-.887-.539-1.958-.796-2.958-.792-.385.002-.76.043-1.109.121L5.422 0zM8.78 3.93c.526.002 1.024.192 1.525.39-.152.518-.437.667-.826.75-.54-.16-.945-.564-1.148-1.094.153-.033.302-.047.449-.047z",
  fill: "#000",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 5
  }
}));

const Reach = props => __jsx("svg", _extends({
  fill: "#000000",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 26 26"
}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 3
  }
}), __jsx("path", {
  d: "M 8.71875 1.65625 C 6.984375 1.816406 5.65625 2.59375 5.65625 2.59375 C 5.65625 2.59375 2.71875 5.222656 3.4375 8.625 C 3.894531 9.257813 4.300781 9.589844 5.1875 9.53125 C 5.585938 9.242188 5.976563 9.140625 6.3125 9.125 C 6.90625 8.453125 7.796875 7.730469 9.0625 7.59375 L 9.09375 7.59375 C 9.667969 6.3125 10.753906 5.640625 11.625 5.3125 C 11.726563 4.960938 11.964844 4.632813 12.40625 4.3125 C 12.734375 3.488281 12.554688 2.976563 12.09375 2.34375 C 10.964844 1.695313 9.757813 1.558594 8.71875 1.65625 Z M 16.1875 1.65625 C 15.445313 1.714844 14.660156 1.910156 13.90625 2.34375 C 13.449219 2.976563 13.265625 3.488281 13.59375 4.3125 C 14.035156 4.632813 14.273438 4.960938 14.375 5.3125 C 15.246094 5.640625 16.332031 6.3125 16.90625 7.59375 L 16.9375 7.59375 C 18.203125 7.730469 19.09375 8.453125 19.6875 9.125 C 20.023438 9.140625 20.414063 9.242188 20.8125 9.53125 C 21.699219 9.589844 22.105469 9.257813 22.5625 8.625 C 23.28125 5.222656 20.34375 2.59375 20.34375 2.59375 C 20.34375 2.59375 18.417969 1.484375 16.1875 1.65625 Z M 13 6 C 13 6 10.796875 6.21875 10 8 C 10 8.4375 10.078125 8.734375 10.5 9 C 11.6875 9 11.703125 10.203125 11.3125 10.53125 C 11.3125 10.53125 11.28125 10.527344 11.28125 10.53125 C 11.246094 10.554688 11.222656 10.597656 11.1875 10.625 C 10.753906 10.894531 9.601563 10.503906 9.96875 9.375 C 9.847656 8.890625 9.601563 8.730469 9.1875 8.59375 C 7.246094 8.800781 6.34375 10.84375 6.34375 10.84375 C 6.34375 10.84375 5.863281 13.003906 7.3125 14.3125 C 7.726563 14.449219 8.054688 14.476563 8.4375 14.15625 C 8.804688 13.027344 9.933594 13.371094 10.125 13.84375 C 10.128906 13.855469 10.148438 13.867188 10.15625 13.875 C 10.167969 13.910156 10.175781 13.9375 10.1875 13.96875 C 10.1875 13.976563 10.152344 13.988281 10.15625 14 C 10.277344 14.496094 9.585938 15.449219 8.625 14.75 C 8.128906 14.71875 7.882813 14.925781 7.625 15.28125 C 7.222656 17.191406 8.875 18.65625 8.875 18.65625 C 8.875 18.65625 10.808594 19.785156 12.5 18.8125 C 12.757813 18.457031 12.871094 18.152344 12.6875 17.6875 C 11.726563 16.988281 12.429688 16.035156 12.9375 16 C 12.960938 16.003906 12.976563 16 13 16 C 13.023438 16 13.039063 16 13.0625 16 C 13.570313 16.035156 14.273438 17.019531 13.3125 17.71875 C 13.128906 18.183594 13.242188 18.457031 13.5 18.8125 C 15.191406 19.785156 17.125 18.65625 17.125 18.65625 C 17.125 18.65625 18.777344 17.191406 18.375 15.28125 C 18.117188 14.925781 17.871094 14.75 17.375 14.78125 C 16.414063 15.480469 15.71875 14.496094 15.84375 14 C 15.847656 13.988281 15.8125 13.976563 15.8125 13.96875 C 15.824219 13.9375 15.832031 13.90625 15.84375 13.875 C 15.851563 13.867188 15.871094 13.855469 15.875 13.84375 C 16.066406 13.371094 17.195313 13.027344 17.5625 14.15625 C 17.945313 14.476563 18.269531 14.449219 18.6875 14.3125 C 20.136719 13.003906 19.65625 10.84375 19.65625 10.84375 C 19.65625 10.84375 18.753906 8.800781 16.8125 8.59375 C 16.398438 8.730469 16.152344 8.890625 16.03125 9.375 C 16.398438 10.503906 15.246094 10.894531 14.8125 10.625 C 14.777344 10.597656 14.753906 10.554688 14.71875 10.53125 C 14.71875 10.53125 14.6875 10.535156 14.6875 10.53125 C 14.296875 10.203125 14.3125 9 15.5 9 C 15.921875 8.734375 16 8.4375 16 8 C 15.203125 6.21875 13 6 13 6 Z M 22.125 10.1875 C 21.808594 10.222656 21.496094 10.371094 21.15625 10.65625 C 21.046875 10.996094 20.894531 11.238281 20.71875 11.4375 C 20.75 12.375 20.582031 13.945313 19.34375 15.0625 C 19.652344 16.527344 19.074219 17.757813 18.53125 18.53125 C 18.515625 18.710938 18.472656 18.914063 18.40625 19.125 C 18.625 19.988281 19.070313 20.289063 19.8125 20.53125 C 23.273438 20.160156 24.875 16.53125 24.875 16.53125 C 24.875 16.53125 25.707031 12.675781 23.125 10.34375 C 22.753906 10.222656 22.441406 10.152344 22.125 10.1875 Z M 3.40625 10.21875 C 3.238281 10.246094 3.058594 10.285156 2.875 10.34375 C 0.292969 12.675781 1.125 16.5625 1.125 16.5625 C 1.125 16.5625 2.726563 20.160156 6.1875 20.53125 C 6.929688 20.289063 7.375 19.988281 7.59375 19.125 C 7.527344 18.914063 7.480469 18.742188 7.46875 18.5625 C 6.925781 17.789063 6.347656 16.527344 6.65625 15.0625 C 5.417969 13.941406 5.246094 12.375 5.28125 11.4375 C 5.105469 11.238281 4.953125 10.996094 4.84375 10.65625 C 4.332031 10.230469 3.90625 10.136719 3.40625 10.21875 Z M 13 12 C 13.550781 12 14 12.449219 14 13 C 14 13.550781 13.550781 14 13 14 C 12.449219 14 12 13.550781 12 13 C 12 12.449219 12.449219 12 13 12 Z M 13 19.6875 C 12.386719 20.039063 11.675781 20.21875 10.9375 20.21875 C 10.085938 20.21875 9.34375 19.976563 8.875 19.78125 C 8.761719 19.796875 8.664063 19.8125 8.53125 19.8125 C 7.777344 20.285156 7.65625 20.8125 7.65625 21.59375 C 9.078125 24.769531 13 25.15625 13 25.15625 C 13 25.15625 16.921875 24.769531 18.34375 21.59375 C 18.34375 20.8125 18.222656 20.285156 17.46875 19.8125 C 17.335938 19.8125 17.242188 19.796875 17.125 19.78125 C 16.65625 19.976563 15.914063 20.21875 15.0625 20.21875 C 14.324219 20.21875 13.613281 20.039063 13 19.6875 Z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 5
  }
}));

const Riverlands = props => __jsx("svg", _extends({
  fill: "none"
}, props, {
  viewBox: "0 0 16 16",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 3
  }
}), __jsx("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M10.121 0c-.024.307-.058.607-.1.898A6.574 6.574 0 0111.141 2.6c-.419-.402-.846-.662-1.287-.813a9.28 9.28 0 01-.18.674c.298.19.59.43.87.725A8.464 8.464 0 009.44 3.11a6.9 6.9 0 01-.252.546c1.25.237 2.5.783 3.733 1.65-.026-1.631-.878-3.606-2.8-5.306zM0 1.01c.297.48.554.974.763 1.48.79.256 1.603.72 2.421 1.502-.73-.285-1.384-.33-2-.196.1.425.165.86.193 1.306l.955.359-.945.485a8.91 8.91 0 01-.225 1.643c.337.1.692.11 1.075.012-.443.439-.884.713-1.319.868A12.3 12.3 0 01.43 9.727c1.878-.497 3.105-1.216 3.815-2.032-.212-.14-.429-.276-.653-.409-.29-.172-.513-.373-.663-.634a1.35 1.35 0 01-.146-.917c.13-.612.582-.999 1.203-1.304.208-.102.416-.195.624-.28-.769-1.464-2.532-2.72-4.61-3.14zm7.772 3.287c-1.67-.004-3.338.56-4.907 1.659.339.19.659.377.963.563l.023.014c1.312.805 2.321 1.608 3.185 2.727l.808-.55.29.733-.787.534c.305.377.665.64 1.066.823-.634.103-1.268.059-1.902-.253l-.754.514c1.075.778 2.395.908 3.27.233l.318.71a2.711 2.711 0 01-.652.375c.249.69.615 1.386 1.101 2.123 1.182 1.794 2.707 2.126 3.331.171-.476.46-1.315.433-1.725.053-.842-.782-.39-2.305.084-3.45.398-.964 1.412-1.53 1.947-1.125.422.32.512 1.1.283 1.878.554-.4 1.136-.427 1.464.035.246.346.276.88.14 1.424 1.56-2.1.198-5.076-1.601-6.581-1.867-1.755-3.908-2.605-5.945-2.61zm4.894 2.815h.045c.11.004.221.043.324.12.327.249.44.799.25 1.229-.188.43-.607.576-.934.328-.328-.248-.44-.798-.252-1.228.122-.277.34-.437.567-.449z",
  fill: "#000",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 5
  }
}));

const Stormlands = props => __jsx("svg", _extends({
  fill: "none"
}, props, {
  viewBox: "0 0 16 16",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 103,
    columnNumber: 3
  }
}), __jsx("path", {
  d: "M1.857 0c-.567.473-.825 1.23-.802 1.966.022.737.294 1.459.725 2.016.043.055.088.108.134.16-.23.496-.578.568-.865.463a.637.637 0 01-.362-.344c-.066-.154-.09-.34.002-.624l-.584-.316c-.155.478-.132.967.029 1.338.16.372.436.621.743.733.527.193 1.183-.053 1.56-.797.29.19.617.313.964.35.023.501.165.97.395 1.39-.206.094-.38.274-.49.508-.291.626-.098 1.546.596 2.168l.362-.671c-.52-.466-.505-.88-.414-1.075a.29.29 0 01.232-.18c.1-.015.239.014.41.148.1.096.205.187.316.273a4.928 4.928 0 001.955.9c-.274.272-.468.625-.615 1.026-1.112-.376-2.192-.007-3.22 1.515 1.07.317 2.109.383 3.065-.15l1.288 4.656c.149.72 1.101.74 1.255 0l1.295-4.685c.97.564 2.025.5 3.115.18-1.035-1.533-2.122-1.896-3.242-1.509-.143-.408-.34-.746-.598-1.004a4.96 4.96 0 002.092-.93 4.09 4.09 0 00.353-.307c.148-.103.271-.126.361-.113a.29.29 0 01.232.18c.09.195.105.61-.414 1.075l.362.671c.694-.622.887-1.542.595-2.168a1.024 1.024 0 00-.48-.503c.232-.42.374-.89.397-1.393.349-.03.676-.148.969-.333.378.73 1.028.969 1.55.778.307-.112.583-.361.743-.733.16-.371.184-.86.03-1.338l-.585.316c.092.285.068.47.002.624a.637.637 0 01-.362.344c-.28.103-.621.035-.851-.433.056-.06.11-.124.161-.19a3.516 3.516 0 00.726-2.016C15.008 1.23 14.75.473 14.184 0l-.345.686c.394.33.528.756.513 1.248a2.629 2.629 0 01-.54 1.47c-.502.649-1.27 1.036-2.176.559.208-.165.385-.428.494-.771l-.586-.31c-.091.286-.21.394-.341.443-.132.048-.295.02-.444-.087-.299-.216-.529-.672-.287-1.38l-.58-.33c-.33.97-.044 1.889.447 2.334l-.002.003c.54.594 1.093.919 1.62 1.037-.197.658-.48 1.027-.778 1.226-.315.21-.664.231-.976.121a1.302 1.302 0 01-.715-.631c-.136-.277-.17-.558-.03-.915l-.564-.371a2.168 2.168 0 00.06 1.726c.239.481.633.823 1.082.98.115.04.235.069.356.083a4.898 4.898 0 01-2.39.602 4.931 4.931 0 01-2.288-.546c.088-.015.175-.038.26-.068.45-.158.844-.5 1.082-.981.238-.482.295-1.13.06-1.726l-.565.372c.141.356.108.637-.03.914a1.302 1.302 0 01-.714.632c-.312.11-.66.087-.975-.122-.309-.205-.598-.59-.796-1.285.53-.108 1.088-.424 1.634-1.013.518-.43.831-1.373.492-2.371l-.58.328c.24.71.01 1.165-.288 1.38-.149.108-.312.136-.444.088-.132-.049-.25-.158-.34-.443l-.587.31c.108.34.283.601.488.766-.91.484-1.68.096-2.184-.554a2.629 2.629 0 01-.54-1.47c-.015-.492.12-.919.513-1.248L1.856 0z",
  fill: "#000",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104,
    columnNumber: 5
  }
}));

const Vale = props => __jsx("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg"
}, props, {
  viewBox: "0 0 512 512",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 112,
    columnNumber: 3
  }
}), __jsx("path", {
  fill: "#000",
  d: "M245.26 35.38a240 240 0 0 0-105.744 24.713A320 320 0 0 1 445.26 379.38a320 320 0 0 1-1.547 30.906A240 240 0 0 0 485.26 275.38a240 240 0 0 0-240-240zM129.277 140.017c-14.264-.07-34.752 4.185-54.246 11.367-18.38 6.772-36.08 15.964-48.29 24.045a456.28 456.28 0 0 1 30.795 12.674c12.88-4.53 26.8-7.557 41.256-9.81-8.62 5.73-17.867 10.836-25.874 17.182a421.206 421.206 0 0 1 21.53 11.658c11.68-6.89 24.65-12.53 38.284-17.526-8.468 8.432-17.93 16.2-24.976 25.58 23.664 14.888 47.283 32.917 71.924 55.196-19.853 24.114-34.97 49.79-62.63 83.342-12.216 14.818-35.192 22.92-56.864 31.802-10.836 4.442-21.304 8.76-29.418 12.965-.422.218-.75.44-1.157.658 2.923.585 5.162.886 8.376 1.654 15.46 3.69 33.263 8.75 44.54 20.03 11.28 11.278 16.338 29.08 20.03 44.538.764 3.205 1.065 5.437 1.647 8.354.214-.397.428-.716.64-1.125 4.21-8.12 8.54-18.597 12.99-29.44 8.904-21.69 17.01-44.663 31.804-56.85 33.62-27.697 59.25-42.79 83.34-62.627 22.277 24.64 40.306 48.258 55.193 71.92 9.38-7.043 17.15-16.507 25.58-24.975-4.997 13.635-10.636 26.606-17.525 38.283a421.156 421.156 0 0 1 11.658 21.534c6.346-8.006 11.452-17.252 17.18-25.875-2.25 14.454-5.277 28.374-9.807 41.25a456.25 456.25 0 0 1 12.676 30.8c8.08-12.21 17.27-29.91 24.043-48.293 9.575-25.99 13.945-53.75 9.806-66.168-4.327-12.987-22.966-32.91-46.425-50.85-13.265-10.145-27.97-19.92-42.24-28.497 22.97-27.682 47.46-61.673 47.46-61.673l.15-.21.162-.202a54.577 54.577 0 0 0 2.974-4.06c11.392-3.6 15.795 2.058 26.286 13.382-.222-24.04-10.287-37.62-23.93-45.166a26.21 26.21 0 0 0-3.462-4.278c-4.285-4.285-10.097-7.222-16.945-7.386-6.85-.164-14.738 2.444-23.18 9.252l-.2.162-.21.15s-33.993 24.492-61.675 47.46c-8.577-14.268-18.35-28.973-28.494-42.24-17.938-23.458-37.865-42.098-50.85-46.427-3.105-1.035-7.168-1.538-11.923-1.56z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 113,
    columnNumber: 5
  }
}));

const Wall = props => __jsx("svg", _extends({
  fill: "none"
}, props, {
  viewBox: "0 0 16 16",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 121,
    columnNumber: 3
  }
}), __jsx("path", {
  d: "M15.573.64c.34.54-1.14 1.22-1.26 1.26.12-.04 1.6-.54 1.66-.42.22.52-.94.9-1.38 1.039.36-.1 1.2-.3 1.22-.18.14.56-1.02.84-1.14.86.06 0 .46-.02.48.12.04.42-.6.68-.6.68s.16.08.12.2c-.04.12-.48.719-.48.719s.08.04.02.18c-.06.14-.46.58-.46.58l-.38.66c-.08.14-.919 1.059-1.099 1.359-.18.3-1.14 1.939-1.08 2.138.08.18.62.6.84.82.22.22 1.46.92 1.72 1.16.46.46-.26 1.199-.5 1.439-.26.24-1 .94-1.46.48-.24-.24-.939-1.5-1.159-1.72-.22-.22-.64-.76-.82-.84-.18-.08-1.839.9-2.138 1.08-.3.18-1.22 1.02-1.36 1.1-.14.08-.66.4-.66.4s-.44.42-.58.46c-.14.06-.18-.02-.18-.02s-.599.44-.719.48c-.12.04-.2-.12-.2-.12s-.26.639-.68.599c-.14-.02-.12-.42-.12-.48-.02.1-.3 1.26-.859 1.14-.1-.02.08-.86.18-1.22-.12.44-.5 1.6-1.04 1.38-.12-.04.38-1.54.42-1.66-.06.12-.74 1.62-1.26 1.26-.099-.06.5-1.22.62-1.46-.14.24-.779 1.3-1.179.9-.12-.12.88-1.64.88-1.64s-.88.74-.94.52c-.02-.1 1.26-1.799 1.26-1.799s-.62.42-.64.32c-.02-.1.5-.7.76-.96s1.839-1.678 2.159-1.958c.32-.28.48-.42 1.039-.84.56-.42 1.58-.94 1.58-.94s-.12-.62-.22-.76-.42-.359-.58-.639c-.16-.28-.16-.76-.16-.76s-.54-.72-.44-.82c.1-.099.82.44.82.44s.48 0 .76.16c.279.16.499.46.639.58.14.1.76.22.76.22s.52-1 .939-1.579c.42-.56.56-.72.84-1.04.28-.32 1.699-1.899 1.959-2.158.26-.26.84-.78.96-.76.1.02-.32.64-.32.64S13.793-.02 13.892 0c.22.06-.52.94-.52.94s1.54-.98 1.64-.88c.4.4-.66 1.04-.9 1.18.26-.12 1.4-.72 1.46-.6z",
  fill: "#000",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 122,
    columnNumber: 5
  }
}));

const Westerlands = props => __jsx("svg", _extends({
  fill: "none"
}, props, {
  viewBox: "0 0 16 16",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 130,
    columnNumber: 3
  }
}), __jsx("path", {
  d: "M3.562.003c-.355.016-.732.11-1.105.187l2.145 2.294-.743.006c-1.008.007-2.598.215-3.555.78l1.09 1.802L0 5.809v1.978l1.598.92L0 10.106v1.128c.969-.044 2.081.022 3.06-.312l1.095-.372-.75.894c-.643.769-1.022 1.927-1.741 3.065 1.095-.083 2.175-.267 3.323-.902l.55-.303L5.202 16c.904-.426 1.789-1.01 2.444-1.714.778-.837 1.225-1.765 1.145-2.541l-.003-.026a3.487 3.487 0 01-1.347-1.894c-.289-.97-.201-2.178.228-3.535-.906-.14-1.597-.511-1.967-1.052a2.222 2.222 0 01-.265-1.992c.222-.621.765-1.124 1.49-1.168.706-.041 1.527.351 2.402 1.262.39.144.746.28 1.07.417.083-.747-.05-1.329-.358-1.848C9.752 1.42 9.244.985 8.631.56l.146 1.5-.564-.385C6.943.811 5.11-.065 3.563.008V0v.003zm3.446 2.725h-.044c-.465.028-.774.319-.925.739-.15.42-.111.956.19 1.395.3.44.862.81 1.837.867l.433.024-.15.413c-.509 1.414-.557 2.583-.294 3.467.263.883.825 1.496 1.624 1.837h.001l3.728 1.344c.194-.415.4-.832.617-1.248-.171.077-.36.12-.56.12-.773 0-1.4-.639-1.4-1.426 0-.787.627-1.425 1.4-1.425.71 0 1.294.538 1.386 1.234.366-.631.751-1.258 1.149-1.876l-3.543-1.83-.163-.2c-.135-.475-.396-.816-.906-1.165-.51-.35-1.271-.684-2.327-1.07L8.99 3.9l-.053-.057c-.799-.857-1.466-1.128-1.929-1.119v.003zm4.086 3.143a.5.5 0 01.503.512c0 .29-.219.514-.503.514a.502.502 0 01-.504-.514c0-.289.22-.512.504-.512z",
  fill: "#000",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 131,
    columnNumber: 5
  }
}));

const Guide = props => __jsx("svg", _extends({
  fill: "#000000",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 50 50"
}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 139,
    columnNumber: 3
  }
}), __jsx("path", {
  d: "M 15 5 C 8.898438 5 4.695313 6.992188 4.59375 7.09375 C 4.195313 7.292969 4 7.601563 4 8 L 4 11 L 3 11 C 1.300781 11 0 12.300781 0 14 L 0 40 C 0 41.699219 1.300781 43 3 43 L 22.78125 43 C 23.324219 43.605469 24.09375 44 25 44 C 25.90625 44 26.675781 43.605469 27.21875 43 L 47 43 C 48.699219 43 50 41.699219 50 40 L 50 14 C 50 12.300781 48.699219 11 47 11 L 46 11 L 46 8 C 46 7.601563 45.804688 7.292969 45.40625 7.09375 C 45.304688 6.992188 41.101563 5 35 5 C 29.898438 5 26.199219 6.40625 25 6.90625 C 23.800781 6.40625 20.101563 5 15 5 Z M 15 7 C 19.398438 7 22.699219 8.085938 24 8.6875 L 24 37.59375 C 22.300781 36.992188 19.101563 36.09375 15 36.09375 C 10.898438 36.09375 7.699219 36.992188 6 37.59375 L 6 8.6875 C 7.300781 8.085938 10.601563 7 15 7 Z M 35 7 C 39.398438 7 42.699219 8.085938 44 8.6875 L 44 37.59375 C 42.300781 36.992188 39.101563 36.09375 35 36.09375 C 30.898438 36.09375 27.699219 36.992188 26 37.59375 L 26 8.6875 C 27.300781 8.085938 30.601563 7 35 7 Z M 35 12 C 33.894531 12 33 12.894531 33 14 C 33 15.105469 33.894531 16 35 16 C 36.105469 16 37 15.105469 37 14 C 37 12.894531 36.105469 12 35 12 Z M 31.8125 19 C 31.261719 19.050781 30.855469 19.542969 30.90625 20.09375 C 30.957031 20.644531 31.449219 21.050781 32 21 L 33 21 L 33 31 L 37 31 L 37 20 C 37 19.398438 36.601563 19 36 19 L 32 19 C 31.96875 19 31.9375 19 31.90625 19 C 31.875 19 31.84375 19 31.8125 19 Z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 140,
    columnNumber: 5
  }
}));

/***/ }),

/***/ "./src/components/atoms/instantsearch/index.js":
/*!*****************************************************!*\
  !*** ./src/components/atoms/instantsearch/index.js ***!
  \*****************************************************/
/*! exports provided: findResultsState, indexName, searchClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexName", function() { return indexName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchClient", function() { return searchClient; });
/* harmony import */ var react_instantsearch_dom_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-instantsearch-dom/server */ "react-instantsearch-dom/server");
/* harmony import */ var react_instantsearch_dom_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_instantsearch_dom_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findResultsState", function() { return react_instantsearch_dom_server__WEBPACK_IMPORTED_MODULE_0__["findResultsState"]; });

/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! algoliasearch/lite */ "algoliasearch/lite");
/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(algoliasearch_lite__WEBPACK_IMPORTED_MODULE_1__);


const indexName = 'Wiki'; // Keys are supplied from Algolio's instant search example
// https://github.com/algolia/react-instantsearch

const searchClient = algoliasearch_lite__WEBPACK_IMPORTED_MODULE_1___default()(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID, process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY);


/***/ }),

/***/ "./src/components/atoms/redactor/index.js":
/*!************************************************!*\
  !*** ./src/components/atoms/redactor/index.js ***!
  \************************************************/
/*! exports provided: Redactor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _redactor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redactor */ "./src/components/atoms/redactor/redactor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Redactor", function() { return _redactor__WEBPACK_IMPORTED_MODULE_0__["Redactor"]; });




/***/ }),

/***/ "./src/components/atoms/redactor/redactor.js":
/*!***************************************************!*\
  !*** ./src/components/atoms/redactor/redactor.js ***!
  \***************************************************/
/*! exports provided: Redactor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Redactor", function() { return Redactor; });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);

const Redactor = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  /* GLOBAL STYLES */

  img {
    max-width: 100%;
    height: auto;
  }

  figcaption {
    font-size: 14px;
  }

  figure {
    margin: 0;
  }

  ul {
    max-width: 760px;
    margin: 32px auto;
  }

  ul li {
    font-size: 16px;
  }

  ul .image-list {
    list-style-image: url('sqpurple.gif');
  }

  li + li {
    margin-top: 16px;
  }

  ol {
    list-style: none;
    padding-left: 26px;
  }

  ol li {
    margin: 0;
    padding: 14px 0 14px 36px;
    list-style: none;
    background-image: url('https://cdn.westeroscraft.com/web/assets/images/checkmark.svg');
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 20px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  li {
    line-height: 1.25;
    font-weight: normal;
    margin-block-start: 0;
    margin-block-end: 0;
  }

  p {
    line-height: 1.5;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Sen', sans-serif;
  }

  h1,
  h2,
  h3 {
    font-weight: bold;
  }

  p,
  a {
    font-family: 'Roboto', sans-serif;
  }

  .caption {
    font-size: 13px;
    background-color: white;
  }

  /* MOBILE STYLES */

  h1 {
    font-size: 36px;
    font-weight: 700;
  }

  h2 {
    font-size: 32px;
    font-weight: 700;
  }

  h3 {
    font-size: 24px;
  }

  h4 {
    font-size: 20px;
    font-weight: 400;
  }

  h5 {
    font-size: 18px;
    font-weight: 400;
  }

  h6 {
    font-size: 18px;
    line-height: 1.5;
  }

  p {
    font-size: 16px;
  }

  a {
    font-size: 16px;
    text-decoration: none;
    font-weight: bold;
    color: #9e1e22;
  }

  a:hover {
    color: #b32227;
  }

  /* TABLET STYLES */

  @media screen and (min-width: 512px) {
    h1 {
      font-size: 48px;
    }

    h2 {
      font-size: 36px;
    }

    h3 {
      font-size: 32px;
    }

    h4 {
      font-size: 24px;
    }

    h5 {
    }

    h6 {
    }

    p {
    }

    a {
    }
  }

  /* LAPTOP STYLES */

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 64px;
    }

    h2 {
      font-size: 48px;
    }

    h3 {
      font-size: 36px;
    }

    h4 {
      font-size: 32px;
    }

    h5 {
      font-size: 24px;
    }

    h6 {
      font-size: 20px;
    }

    p {
      font-size: 16px;
    }

    a {
      font-size: 16px;
    }

    ol {
      list-style: none;
      padding-left: 0px;
    }
  }

  /*================= SPACING ===================== */

  /*eslint-disable */

  h1 + h1 {
  }
  h1 + h2 {
  }
  h1 + h3 {
  }
  h1 + h4 {
  }
  h1 + h5 {
  }
  h1 + h6 {
  }
  h1 + p {
  }

  h2 + h1 {
  }
  h2 + h2 {
  }
  h2 + h3 {
  }
  h2 + h4 {
  }
  h2 + h5 {
  }
  h2 + h6 {
    margin-top: 12px;
  }
  h2 + p {
    margin-top: 16px;
  }

  h3 + h1 {
  }
  h3 + h2 {
  }
  h3 + h3 {
  }
  h3 + h4 {
    margin-top: 24px;
  }
  h3 + h5 {
  }
  h3 + h6 {
    margin-top: 16px;
  }
  h3 + p {
    margin-top: 16px;
  }

  h4 + h1 {
  }
  h4 + h2 {
  }
  h4 + h3 {
  }
  h4 + h4 {
  }
  h4 + h5 {
    margin-top: 16px;
  }
  h4 + h6 {
  }
  h4 + p {
    margin-top: 20px;
  }

  h5 + h1 {
  }
  h5 + h2 {
  }
  h5 + h3 {
  }
  h5 + h4 {
  }
  h5 + h5 {
  }
  h5 + h6 {
    margin-top: 16px;
  }
  h5 + p {
    margin-top: 28px;
  }

  h6 + h1 {
  }
  h6 + h2 {
    margin-top: 12px;
  }
  h6 + h3 {
  }
  h6 + h4 {
  }
  h6 + h5 {
  }
  h6 + h6 {
  }
  h6 + p {
  }

  p + h1 {
    margin-top: 32px;
  }
  p + h2 {
    margin-top: 32px;
  }
  p + h3 {
    margin-top: 32px;
  }
  p + h4 {
    margin-top: 32px;
  }
  p + h5 {
    margin-top: 24px;
  }
  p + h6 {
    margin-top: 24px;
  }
  p + p {
    margin-top: 20px;
  }
  /*eslint-enable */

  figure {
    margin-top: 16px !important;
    margin-bottom: 16px !important;
  }
`;

/***/ }),

/***/ "./src/components/organisms/search/index.js":
/*!**************************************************!*\
  !*** ./src/components/organisms/search/index.js ***!
  \**************************************************/
/*! exports provided: Search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return Search; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _rebass_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rebass/forms */ "@rebass/forms");
/* harmony import */ var _rebass_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rebass_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! algoliasearch/lite */ "algoliasearch/lite");
/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(algoliasearch_lite__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/debounce */ "lodash/debounce");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/bi */ "react-icons/bi");
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/home/geeberry/Working/WesterosCraftSite/web/src/components/organisms/search/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const algolia = algoliasearch_lite__WEBPACK_IMPORTED_MODULE_3___default()(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID, process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY).initIndex('Wiki');

const search = (query, params = {}) => algolia.search(query, _objectSpread({
  attributesToHighlight: null,
  hitsPerPage: 60
}, params));

const DropdownLink = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(({
  children,
  href
}, ref) => {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "a",
    href: href,
    ref: ref,
    px: 4,
    py: 2,
    sx: {
      '&:hover': {
        cursor: 'pointer',
        color: 'red.medium',
        backgroundColor: 'rgba(120, 120, 120, 0.1)'
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, children);
});

const Results = ({
  results
}) => results.map(result => __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
  href: result.url,
  passHref: true,
  key: result.objectID,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }
}, __jsx(DropdownLink, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 7
  }
}, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
  py: 2,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 9
  }
}, result.title))));

const Search = () => {
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: results,
    1: setResults
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: query,
    1: setQuery
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const updateResults = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default()(currentQuery => {
    search(currentQuery).then(({
      hits
    }) => {
      setResults(hits);
      setLoading(false);
    });
  }, 850), []);
  const handleChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setQuery(e.target.value);

    if (e.target.value.length > 0) {
      setLoading(true);
      updateResults(e.target.value);
    } else {
      setLoading(false);
    }
  }, [updateResults]);
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: {
      position: 'relative'
    },
    mb: "44px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  }, __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "Search Wiki",
    type: "search",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }), results.length > 0 ? __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    width: 1,
    bg: "white",
    flexDirection: "column",
    sx: {
      position: 'absolute',
      boxShadow: `0 3.9px 3.5px rgba(0, 0, 0, 0.046),
          0 9.4px 8.4px rgba(0, 0, 0, 0.065),
          0 17.7px 15.9px rgba(0, 0, 0, 0.073),
          0 31.5px 28.4px rgba(0, 0, 0, 0.076)
        `
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx(Results, {
    results: results,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  })) : query.length > 2 && !loading && __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 41
    }
  }, "No results"), __jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_6__["BiSearchAlt"], {
    color: "#666",
    size: 24,
    style: {
      position: 'absolute',
      right: 12,
      top: 16
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }));
};

/***/ }),

/***/ "./src/components/organisms/seo/seo.js":
/*!*********************************************!*\
  !*** ./src/components/organisms/seo/seo.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/geeberry/Working/WesterosCraftSite/web/src/components/organisms/seo/seo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const SEO = ({
  title,
  description,
  image,
  article
}) => {
  const seo = {
    title: title,
    description: description,
    image: `https://www.westeroscraft.com/${image}` // url: `${siteUrl}${pathname}`

  };
  return __jsx(next_seo__WEBPACK_IMPORTED_MODULE_1__["NextSeo"], {
    title: `${seo.title} | WesterosCraft`,
    description: seo.description,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 10
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SEO);

/***/ }),

/***/ "./src/components/organisms/wikiContent/index.js":
/*!*******************************************************!*\
  !*** ./src/components/organisms/wikiContent/index.js ***!
  \*******************************************************/
/*! exports provided: WikiContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wikiContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wikiContent */ "./src/components/organisms/wikiContent/wikiContent.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WikiContent", function() { return _wikiContent__WEBPACK_IMPORTED_MODULE_0__["WikiContent"]; });




/***/ }),

/***/ "./src/components/organisms/wikiContent/wikiContent.jsx":
/*!**************************************************************!*\
  !*** ./src/components/organisms/wikiContent/wikiContent.jsx ***!
  \**************************************************************/
/*! exports provided: WikiContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WikiContent", function() { return WikiContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utility_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utility/helpers */ "./src/utility/helpers.js");
var _jsxFileName = "/home/geeberry/Working/WesterosCraftSite/web/src/components/organisms/wikiContent/wikiContent.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const WikiContent = ({
  children,
  title
}) => __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  as: "article",
  ml: [0, null, 13],
  className: "wiki-content",
  maxWidth: 786,
  width: 1,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }
}, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
  variant: "heading2",
  textAlign: "left",
  pb: 8,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }
}, Object(_utility_helpers__WEBPACK_IMPORTED_MODULE_2__["camelCaseFormatter"])(title)), children);

/***/ }),

/***/ "./src/components/organisms/wikiNav/wikiNav.jsx":
/*!******************************************************!*\
  !*** ./src/components/organisms/wikiNav/wikiNav.jsx ***!
  \******************************************************/
/*! exports provided: WikiNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WikiNav", function() { return WikiNav; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../search */ "./src/components/organisms/search/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! qs */ "qs");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _atoms_instantsearch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../atoms/instantsearch */ "./src/components/atoms/instantsearch/index.js");
var _jsxFileName = "/home/geeberry/Working/WesterosCraftSite/web/src/components/organisms/wikiNav/wikiNav.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const WikiNavGroup = ({
  navItem
}) => {
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  const buildLink = child => {
    switch (child.parent.title) {
      case 'Miscellaneous':
        return `/wiki/miscellaneous/${child.element.slug}`;

      case 'Guides':
        return `/wiki/guides/${child.element.slug}`;

      default:
        return `/wiki/${child.element.slug}`;
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "wiki-nav-group",
    key: navItem.title,
    sx: {
      boxShadow: ['none', null, 'inset -1px 0 0 rgba(48,48,49,0.2)']
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    flexDirection: "row",
    alignItems: "center",
    mb: 2,
    className: "group-title",
    onClick: () => {
      setOpen(!open);
    },
    sx: {
      cursor: 'pointer'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    variant: "heading6",
    fontSize: "18px",
    fontWeight: "bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, navItem.title), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_3__["IoMdArrowDropdown"], {
    size: "24px",
    style: {
      transform: !open ? 'scaleY(-1)' : ''
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  })), open && __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    className: "group-items",
    flexDirection: "column",
    as: "ol",
    pl: [0, null, null, 5],
    pb: 3,
    pr: 5,
    sx: {
      listStyleType: 'none'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, navItem.children.map(child => __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    key: child.title,
    href: buildLink(child),
    passHref: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "li",
    sx: {
      cursor: 'pointer'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    py: 1,
    color: "gray.100",
    sx: {
      '&:hover': {
        color: 'red.medium'
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 19
    }
  }, child.title)))))));
};

const WikiNav = ({
  navData
}) => {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    flexDirection: "column",
    as: "nav",
    className: "wiki-nav",
    maxWidth: ['100%', null, 320],
    sx: {
      position: 'relative',
      flexShrink: 0,
      flexGrow: 1
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, __jsx(_search__WEBPACK_IMPORTED_MODULE_4__["Search"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "wiki-nav-container",
    width: 1,
    display: ['none', null, 'block'],
    maxWidth: 246,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, navData.map((navItem, i) => __jsx(WikiNavGroup, {
    navItem: navItem,
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }))));
};

/***/ }),

/***/ "./src/components/slices/accordion/accordion.jsx":
/*!*******************************************************!*\
  !*** ./src/components/slices/accordion/accordion.jsx ***!
  \*******************************************************/
/*! exports provided: Accordion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return Accordion; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atoms_redactor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../atoms/redactor */ "./src/components/atoms/redactor/index.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utility_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utility/helpers */ "./src/utility/helpers.js");
var _jsxFileName = "/home/geeberry/Working/WesterosCraftSite/web/src/components/slices/accordion/accordion.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const AccordionItem = ({
  data,
  dataLength,
  index
}) => {
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "accordion-item",
    sx: {
      borderTop: '2px solid',
      borderColor: 'black',
      borderBottom: dataLength - 1 === index ? '2px solid' : null,
      borderBottomColor: 'black'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    onClick: () => {
      setOpen(!open);
    },
    py: 7,
    sx: {
      cursor: 'pointer'
    },
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    variant: "heading6",
    as: "h6",
    fontWeight: "500",
    sx: {
      userSelect: 'none'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, data.heading), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_3__["IoMdArrowDropdown"], {
    size: "32px",
    style: {
      transform: open ? 'scaleY(-1)' : ''
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  })), open && __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    mb: 6,
    className: "accordion-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx(_atoms_redactor__WEBPACK_IMPORTED_MODULE_2__["Redactor"], {
    dangerouslySetInnerHTML: {
      __html: data.copy
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  })));
};

const Accordion = ({
  data
}) => {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], _extends({
    className: "accordion"
  }, data.spacings && data.spacings.length && Object(_utility_helpers__WEBPACK_IMPORTED_MODULE_4__["configProps"])(data.spacings[0]), {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }), data.heading && __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    variant: "heading3",
    as: "h3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, data.heading), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    flexDirection: "column",
    mt: 7,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, data.accordionContent.map((item, i) => __jsx(AccordionItem, {
    data: item,
    dataLength: data.accordionContent.length,
    key: i,
    index: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }))));
};

/***/ }),

/***/ "./src/components/slices/accordion/index.js":
/*!**************************************************!*\
  !*** ./src/components/slices/accordion/index.js ***!
  \**************************************************/
/*! exports provided: Accordion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordion */ "./src/components/slices/accordion/accordion.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return _accordion__WEBPACK_IMPORTED_MODULE_0__["Accordion"]; });




/***/ }),

/***/ "./src/components/slices/entryGrid/entryGrid.jsx":
/*!*******************************************************!*\
  !*** ./src/components/slices/entryGrid/entryGrid.jsx ***!
  \*******************************************************/
/*! exports provided: EntryGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryGrid", function() { return EntryGrid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utility_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utility/helpers */ "./src/utility/helpers.js");
/* harmony import */ var _atoms_entryCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atoms/entryCard */ "./src/components/atoms/entryCard/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/geeberry/Working/WesterosCraftSite/web/src/components/slices/entryGrid/entryGrid.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const EntryGrid = ({
  data
}) => __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], _extends({
  className: "entry-grid"
}, data.spacings && data.spacings.length && Object(_utility_helpers__WEBPACK_IMPORTED_MODULE_2__["configProps"])(data.spacings[0]), {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
}), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
  variant: "heading3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }
}, data.heading), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
  className: "entry-card-list",
  flexDirection: ['column', null, 'row'],
  flexWrap: "wrap",
  mt: [0, null, 5],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }
}, data.entryList && data.entryList.map(entry => __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
  href: `/wiki/${entry.parent.slug}/${entry.slug}`,
  key: entry.slug,
  passHref: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 11
  }
}, __jsx(_atoms_entryCard__WEBPACK_IMPORTED_MODULE_3__["EntryCard"], {
  data: entry,
  key: entry.slug,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 13
  }
})))));

/***/ }),

/***/ "./src/components/slices/entryGrid/index.js":
/*!**************************************************!*\
  !*** ./src/components/slices/entryGrid/index.js ***!
  \**************************************************/
/*! exports provided: EntryGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _entryGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entryGrid */ "./src/components/slices/entryGrid/entryGrid.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntryGrid", function() { return _entryGrid__WEBPACK_IMPORTED_MODULE_0__["EntryGrid"]; });




/***/ }),

/***/ "./src/components/slices/imageGrid/imageGrid.jsx":
/*!*******************************************************!*\
  !*** ./src/components/slices/imageGrid/imageGrid.jsx ***!
  \*******************************************************/
/*! exports provided: ImageGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageGrid", function() { return ImageGrid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utility_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utility/helpers */ "./src/utility/helpers.js");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-copy-to-clipboard */ "react-copy-to-clipboard");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_replace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/replace */ "lodash/replace");
/* harmony import */ var lodash_replace__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_replace__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/home/geeberry/Working/WesterosCraftSite/web/src/components/slices/imageGrid/imageGrid.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









const SVGWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_5___default()(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"])`
  &:hover {
    svg {
      fill: red;
      transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
      transform: translate3d(0px, -2px, 0px);
    }
  }
`;
const ImageGrid = ({
  data
}) => {
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], _extends({
    className: "image-grid"
  }, data.spacings && data.spacings.length && Object(_utility_helpers__WEBPACK_IMPORTED_MODULE_3__["configProps"])(data.spacings[0]), {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    flexDirection: "row",
    alignItems: "center",
    mb: 2,
    className: "group-title",
    onClick: () => {
      setOpen(!open);
    },
    sx: {
      cursor: 'pointer'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    variant: "heading3",
    as: "h3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, data.heading || ''), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoMdArrowDropdown"], {
    size: "42px",
    style: {
      transform: !open ? 'scaleY(-1)' : ''
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  })), open && __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    flexDirection: ['column', null, 'row'],
    flexWrap: "wrap",
    className: "image-grid-content-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, data.imageList.map((image, i) => {
    const script = lodash_replace__WEBPACK_IMPORTED_MODULE_6___default()(data.clickToCopyScript, '<ID>', ` ${image.imageTitle}`);

    return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      className: "image-grid-item",
      height: 272,
      width: [1, null, 240],
      mt: [5],
      mr: [0, null, 5],
      sx: {
        cursor: 'pointer',
        position: 'relative',
        boxShadow: ' 0 0 0 2px #333333',
        overflow: 'hidden',
        transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
        '&:hover': {
          boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
        },
        '&:before': {
          content: "''",
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: 0,
          paddingTop: '8rem',
          borderBottom: '2px solid #333333',
          backgroundColor: 'white',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          zIndex: 1,
          backgroundImage: `url(${image.image.length && image.image[0].url || null})`,
          backgroundSize: 'cover'
        }
      },
      pt: 140,
      px: 4,
      pb: 5,
      key: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 15
      }
    }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      flexDirection: "column",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }
    }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      mt: 2,
      variant: "heading6",
      fontSize: "18px",
      fontWeight: "bold",
      as: "h6",
      color: "text",
      fontFamily: "heading",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 19
      }
    }, image.imageTitle || ''), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      mt: 2,
      variant: "paragraph",
      color: "text",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 19
      }
    }, image.imageDescription || ''), data.clickToCopyScript !== '' && __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__["CopyToClipboard"], {
      text: script,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 21
      }
    }, __jsx(SVGWrapper, {
      sx: {
        position: 'absolute',
        bottom: '12px',
        right: '12px'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 23
      }
    }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoIosCopy"], {
      size: "20px",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 25
      }
    })))));
  })));
};

/***/ }),

/***/ "./src/components/slices/text/index.js":
/*!*********************************************!*\
  !*** ./src/components/slices/text/index.js ***!
  \*********************************************/
/*! exports provided: Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text */ "./src/components/slices/text/text.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _text__WEBPACK_IMPORTED_MODULE_0__["Text"]; });




/***/ }),

/***/ "./src/components/slices/text/text.jsx":
/*!*********************************************!*\
  !*** ./src/components/slices/text/text.jsx ***!
  \*********************************************/
/*! exports provided: Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms_redactor_redactor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../atoms/redactor/redactor */ "./src/components/atoms/redactor/redactor.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utility_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utility/helpers */ "./src/utility/helpers.js");
var _jsxFileName = "/home/geeberry/Working/WesterosCraftSite/web/src/components/slices/text/text.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const Text = ({
  data,
  wiki
}) => __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], _extends({
  className: "text",
  px: wiki ? 0 : 5,
  mx: "auto",
  maxWidth: 1020
}, data.spacings && data.spacings.length && Object(_utility_helpers__WEBPACK_IMPORTED_MODULE_3__["configProps"])(data.spacings[0]), {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }
}), __jsx(_atoms_redactor_redactor__WEBPACK_IMPORTED_MODULE_1__["Redactor"], {
  dangerouslySetInnerHTML: {
    __html: data.redactor
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }
}));

/***/ }),

/***/ "./src/components/slices/wikiSliceZone/index.js":
/*!******************************************************!*\
  !*** ./src/components/slices/wikiSliceZone/index.js ***!
  \******************************************************/
/*! exports provided: WikiSliceZone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wikiSliceZone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wikiSliceZone */ "./src/components/slices/wikiSliceZone/wikiSliceZone.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WikiSliceZone", function() { return _wikiSliceZone__WEBPACK_IMPORTED_MODULE_0__["WikiSliceZone"]; });




/***/ }),

/***/ "./src/components/slices/wikiSliceZone/wikiSliceZone.jsx":
/*!***************************************************************!*\
  !*** ./src/components/slices/wikiSliceZone/wikiSliceZone.jsx ***!
  \***************************************************************/
/*! exports provided: WikiSliceZone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WikiSliceZone", function() { return WikiSliceZone; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../text */ "./src/components/slices/text/index.js");
/* harmony import */ var _entryGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entryGrid */ "./src/components/slices/entryGrid/index.js");
/* harmony import */ var _imageGrid_imageGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../imageGrid/imageGrid */ "./src/components/slices/imageGrid/imageGrid.jsx");
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../accordion */ "./src/components/slices/accordion/index.js");
var _jsxFileName = "/home/geeberry/Working/WesterosCraftSite/web/src/components/slices/wikiSliceZone/wikiSliceZone.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const WikiSliceZone = ({
  slices
}) => {
  const module = slices.map((slice, index) => {
    switch (slice.typeHandle) {
      case 'text':
        return __jsx(_text__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          data: slice,
          key: index,
          wiki: true,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 16
          }
        });

      case 'entryGrid':
        return __jsx(_entryGrid__WEBPACK_IMPORTED_MODULE_2__["EntryGrid"], {
          data: slice,
          key: index,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 16
          }
        });

      case 'imageGrid':
        return __jsx(_imageGrid_imageGrid__WEBPACK_IMPORTED_MODULE_3__["ImageGrid"], {
          data: slice,
          key: index,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 16
          }
        });

      case 'accordion':
        return __jsx(_accordion__WEBPACK_IMPORTED_MODULE_4__["Accordion"], {
          data: slice,
          key: index,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 16
          }
        });

      default:
        return null;
    }
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, module);
};

/***/ }),

/***/ "./src/components/templates/wikiLayout.jsx":
/*!*************************************************!*\
  !*** ./src/components/templates/wikiLayout.jsx ***!
  \*************************************************/
/*! exports provided: WikiLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WikiLayout", function() { return WikiLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _organisms_wikiNav_wikiNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../organisms/wikiNav/wikiNav */ "./src/components/organisms/wikiNav/wikiNav.jsx");
/* harmony import */ var _organisms_wikiContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../organisms/wikiContent */ "./src/components/organisms/wikiContent/index.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/geeberry/Working/WesterosCraftSite/web/src/components/templates/wikiLayout.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const BreadcrumbItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef((_ref, ref) => {
  let {
    children,
    index
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "index"]);

  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], _extends({
    ref: ref,
    sx: {
      cursor: 'pointer'
    },
    fontSize: ['14px', null, '16px'],
    color: "white",
    pr: 1,
    pl: index !== 0 && 1
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }), children);
});
const WikiLayout = ({
  children,
  title,
  breadcrumb,
  navData
}) => {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "wiki-layout",
    pb: [15, 20],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "breadcrumb-wrapper",
    bg: "green",
    py: 6,
    px: [4, null, 5],
    width: 1,
    sx: {
      outline: '8px outset #50815e',
      outlineOffset: '-8px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    maxWidth: 1120,
    mx: "auto",
    width: 1,
    px: [0, null, 5],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, breadcrumb && Array.isArray(breadcrumb) && breadcrumb.length > 1 && breadcrumb.map((crumb, i) => __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: `${crumb.link}`,
    passHref: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx(BreadcrumbItem, {
    key: i,
    index: i,
    crumb: crumb,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 19
    }
  }, crumb.text)), breadcrumb.length - 1 !== i ? __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosArrowForward"], {
    color: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 48
    }
  }) : null)))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    className: "wiki-layout-container",
    flexDirection: ['column', null, 'row'],
    justifyContent: "center",
    height: "100%",
    mt: [10, null, 16],
    px: 5,
    maxWidth: 1120,
    mx: "auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, __jsx(_organisms_wikiNav_wikiNav__WEBPACK_IMPORTED_MODULE_2__["WikiNav"], {
    navData: navData,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }), __jsx(_organisms_wikiContent__WEBPACK_IMPORTED_MODULE_3__["WikiContent"], {
    title: title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, children)));
};

/***/ }),

/***/ "./src/pages/wiki.js":
/*!***************************!*\
  !*** ./src/pages/wiki.js ***!
  \***************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_templates_wikiLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/templates/wikiLayout */ "./src/components/templates/wikiLayout.jsx");
/* harmony import */ var _components_slices_wikiSliceZone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/slices/wikiSliceZone */ "./src/components/slices/wikiSliceZone/index.js");
/* harmony import */ var _components_organisms_seo_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/organisms/seo/seo */ "./src/components/organisms/seo/seo.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _queries_wikiQuery_gql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../queries/wikiQuery.gql */ "./src/queries/wikiQuery.gql");
/* harmony import */ var _queries_wikiQuery_gql__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_queries_wikiQuery_gql__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_apolloClient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/apolloClient */ "./lib/apolloClient.js");
/* harmony import */ var _utility_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utility/helpers */ "./src/utility/helpers.js");
var _jsxFileName = "/home/geeberry/Working/WesterosCraftSite/web/src/pages/wiki.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const WikiPage = ({
  initialApolloState
}) => {
  const data = initialApolloState.ROOT_QUERY['entry({"site":"westeroscraft","slug":"wiki"})'];
  const navdata = initialApolloState.ROOT_QUERY['nodes({"level":1,"navHandle":"wikiNav"})'];
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_organisms_seo_seo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Wiki",
    description: data.pageDescription,
    image: data.pageEntry && data.pageImage[0].url,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx(_components_templates_wikiLayout__WEBPACK_IMPORTED_MODULE_1__["WikiLayout"], {
    navData: navdata,
    title: data.title || 'WesterosCraft Wiki',
    breadcrumb: Object(_utility_helpers__WEBPACK_IMPORTED_MODULE_7__["computeBreadcrumbs"])(router.asPath),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx(_components_slices_wikiSliceZone__WEBPACK_IMPORTED_MODULE_2__["WikiSliceZone"], {
    slices: data.wikiSlices,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  })));
};

async function getStaticProps() {
  const apolloClient = Object(_lib_apolloClient__WEBPACK_IMPORTED_MODULE_6__["initializeApollo"])();
  await apolloClient.query({
    query: _queries_wikiQuery_gql__WEBPACK_IMPORTED_MODULE_5__["WIKI_QUERY"]
  });
  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    },
    revalidate: 1
  };
}
/* harmony default export */ __webpack_exports__["default"] = (WikiPage);

/***/ }),

/***/ "./src/queries/fragments/wikiFragments.gql":
/*!*************************************************!*\
  !*** ./src/queries/fragments/wikiFragments.gql ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"spacings"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"spacings_spacing_BlockType"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"marginTop"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mobile"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"tablet"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"desktop"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"wide"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"marginBottom"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mobile"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"tablet"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"desktop"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"wide"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingTop"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mobile"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"tablet"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"desktop"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"wide"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingBottom"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mobile"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"tablet"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"desktop"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"wide"},"arguments":[],"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WIKI_TEXT_FRAGMENT"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"wikiSlices_text_BlockType"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"typeHandle"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"redactor"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ENTRY_GRID_FRAGMENT"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"wikiSlices_entryGrid_BlockType"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"typeHandle"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"heading"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"entryList"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"slug"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"typeHandle"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"parent"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"},"arguments":[],"directives":[]}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"wiki_wikiDestination_Entry"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"projectDetails"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"projectDetails_details_BlockType"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"region"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"house"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"destinationType"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"wiki_wikiGuide_Entry"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heroImage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"wiki_wikiMiscellaneous_Entry"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heroImage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"spacings"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"spacings_spacing_BlockType"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"spacings"},"directives":[]}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IMAGE_GRID_FRAGMENT"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"wikiSlices_imageGrid_BlockType"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"typeHandle"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"heading"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"imageList"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"imageList_listItem_BlockType"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imageTitle"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"imageDescription"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"image"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"spacings"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"spacings_spacing_BlockType"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"spacings"},"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"clickToCopyScript"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ACCORDION_FRAGMENT"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"wikiSlices_accordion_BlockType"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"typeHandle"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"heading"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"accordionContent"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"accordionContent_accordionItem_BlockType"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"copy"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"spacings"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"spacings_spacing_BlockType"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"spacings"},"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":1666}};
    doc.loc.source = {"body":"fragment spacings on spacings_spacing_BlockType {\n  marginTop {\n    mobile\n    tablet\n    desktop\n    wide\n  }\n  marginBottom {\n    mobile\n    tablet\n    desktop\n    wide\n  }\n  paddingTop {\n    mobile\n    tablet\n    desktop\n    wide\n  }\n  paddingBottom {\n    mobile\n    tablet\n    desktop\n    wide\n  }\n}\n\nfragment WIKI_TEXT_FRAGMENT on wikiSlices_text_BlockType {\n  typeHandle\n  redactor\n}\n\nfragment ENTRY_GRID_FRAGMENT on wikiSlices_entryGrid_BlockType {\n  typeHandle\n  heading\n  entryList {\n    title\n    slug\n    typeHandle\n    parent {\n      slug\n    }\n    ... on wiki_wikiDestination_Entry {\n      images {\n        url\n      }\n      projectDetails {\n        ... on projectDetails_details_BlockType {\n          region\n          house\n          destinationType\n        }\n      }\n    }\n    ... on wiki_wikiGuide_Entry {\n      heroImage {\n        url\n      }\n    }\n    ... on wiki_wikiMiscellaneous_Entry {\n      heroImage {\n        url\n      }\n    }\n  }\n  spacings {\n    ... on spacings_spacing_BlockType {\n      ...spacings\n    }\n  }\n}\n\nfragment IMAGE_GRID_FRAGMENT on wikiSlices_imageGrid_BlockType {\n  typeHandle\n  heading\n  imageList {\n    ... on imageList_listItem_BlockType {\n      imageTitle\n      imageDescription\n      image {\n        title\n        url\n      }\n    }\n  }\n  spacings {\n    ... on spacings_spacing_BlockType {\n      ...spacings\n    }\n  }\n  clickToCopyScript\n}\n\nfragment ACCORDION_FRAGMENT on wikiSlices_accordion_BlockType {\n  typeHandle\n  heading\n  accordionContent {\n    ... on accordionContent_accordionItem_BlockType {\n      heading\n      copy\n    }\n  }\n  spacings {\n    ... on spacings_spacing_BlockType {\n      ...spacings\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

      module.exports = doc;
    


/***/ }),

/***/ "./src/queries/wikiQuery.gql":
/*!***********************************!*\
  !*** ./src/queries/wikiQuery.gql ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"WIKI_QUERY"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"wiki"},"name":{"kind":"Name","value":"entry"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"site"},"value":{"kind":"StringValue","value":"westeroscraft","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"StringValue","value":"wiki","block":false}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"wikiHome_wikiHome_Entry"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"pageDescription"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"pageImage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"wikiSlices"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WIKI_TEXT_FRAGMENT"},"directives":[]},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ENTRY_GRID_FRAGMENT"},"directives":[]},{"kind":"FragmentSpread","name":{"kind":"Name","value":"IMAGE_GRID_FRAGMENT"},"directives":[]}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"wikiNav"},"name":{"kind":"Name","value":"nodes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"navHandle"},"value":{"kind":"StringValue","value":"wikiNav","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"level"},"value":{"kind":"IntValue","value":"1"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"element"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"element"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]}]}}]}}]}}]}}],"loc":{"start":0,"end":594}};
    doc.loc.source = {"body":"#import './fragments/wikiFragments.gql'\n\nquery WIKI_QUERY {\n  wiki: entry(site: \"westeroscraft\", slug: \"wiki\") {\n    ... on wikiHome_wikiHome_Entry {\n      title\n      pageDescription\n      pageImage {\n        url\n      }\n      wikiSlices {\n        ...WIKI_TEXT_FRAGMENT\n        ...ENTRY_GRID_FRAGMENT\n        ...IMAGE_GRID_FRAGMENT\n      }\n    }\n  }\n  wikiNav: nodes(navHandle: \"wikiNav\", level: 1) {\n    title\n    url\n    type\n    element {\n      slug\n    }\n    children {\n      title\n      url\n      type\n      element {\n        slug\n      }\n      parent {\n        title\n      }\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  doc.definitions = doc.definitions.concat(unique(__webpack_require__(/*! ./fragments/wikiFragments.gql */ "./src/queries/fragments/wikiFragments.gql").definitions));


    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["WIKI_QUERY"] = oneQuery(doc, "WIKI_QUERY");
        


/***/ }),

/***/ "./src/utility/helpers.js":
/*!********************************!*\
  !*** ./src/utility/helpers.js ***!
  \********************************/
/*! exports provided: configProps, camelCaseFormatter, formatDate, getOS, completionPercentage, flatten, getDestinationLevel, computeBreadcrumbs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configProps", function() { return configProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelCaseFormatter", function() { return camelCaseFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOS", function() { return getOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "completionPercentage", function() { return completionPercentage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDestinationLevel", function() { return getDestinationLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeBreadcrumbs", function() { return computeBreadcrumbs; });
/* harmony import */ var lodash_startCase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/startCase */ "lodash/startCase");
/* harmony import */ var lodash_startCase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_startCase__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/camelCase */ "lodash/camelCase");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "dayjs");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/merge */ "lodash/merge");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_3__);




const configProps = data => {
  return {
    mt: [data.marginTop[0].mobile === 0 ? null : data.marginTop[0].mobile, data.marginTop[0].tablet === 0 ? null : data.marginTop[0].tablet, data.marginTop[0].desktop === 0 ? null : data.marginTop[0].desktop, data.marginTop[0].wide === 0 ? null : data.marginTop[0].wide],
    mb: [data.marginBottom[0].mobile === 0 ? null : data.marginBottom[0].mobile, data.marginBottom[0].tablet === 0 ? null : data.marginBottom[0].tablet, data.marginBottom[0].desktop === 0 ? null : data.marginBottom[0].desktop, data.marginBottom[0].wide === 0 ? null : data.marginBottom[0].wide],
    pt: [data.paddingTop[0].mobile === 0 ? null : data.paddingTop[0].mobile, data.paddingTop[0].tablet === 0 ? null : data.paddingTop[0].tablet, data.paddingTop[0].desktop === 0 ? null : data.paddingTop[0].desktop, data.paddingTop[0].wide === 0 ? null : data.paddingTop[0].wide],
    pb: [data.paddingBottom[0].mobile === 0 ? null : data.paddingBottom[0].mobile, data.paddingBottom[0].tablet === 0 ? null : data.paddingBottom[0].tablet, data.paddingBottom[0].desktop === 0 ? null : data.paddingBottom[0].desktop, data.paddingBottom[0].wide === 0 ? null : data.paddingBottom[0].wide]
  };
};
const camelCaseFormatter = string => {
  return lodash_startCase__WEBPACK_IMPORTED_MODULE_0___default()(lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default()(string));
};
const formatDate = date => {
  if (!date) {
    return;
  }

  const d = dayjs__WEBPACK_IMPORTED_MODULE_2__(date).format('MMMM D, YYYY');
  return d;
};
const getOS = () => {
  const platform = window.navigator.platform;
  const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
  const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE']; // const userAgent = window.navigator.userAgent;
  // const iosPlatforms = ['iPhone', 'iPad', 'iPod'];

  let os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'Mac';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
  } else if (!os && /Linux/.test(platform)) {
    os = 'Linux';
  } else {
    os = null;
  }

  return os;
};
const completionPercentage = (completedLevel, inProgressLevel, notStartedLevel) => {
  return Math.ceil((completedLevel + inProgressLevel / 2) / (completedLevel + inProgressLevel + notStartedLevel) * 100);
};
const flatten = data => data.reduce((arr, elem) => {
  if (elem.projectDetails && elem.projectDetails.length) {
    arr.push(lodash_merge__WEBPACK_IMPORTED_MODULE_3___default()(elem, elem.projectDetails[0]));
  }

  return arr;
}, []);
const getDestinationLevel = num => {
  switch (num) {
    case 'one':
      return 1;

    case 'two':
      return 2;

    case 'three':
      return 3;

    case 'four':
      return 4;

    case 'five':
      return 5;

    case 'six':
      return 6;

    default:
      return 0;
  }
};
const computeBreadcrumbs = breadcrumb => {
  const paths = [{
    text: 'Home',
    link: '/'
  }];
  const crumbs = breadcrumb.split('/');

  for (var i = 0; i < crumbs.length; i++) {
    var part = crumbs[i];
    var text = camelCaseFormatter(part);
    var link = crumbs.slice(0, i + 1).join('/');
    paths.push({
      text: text,
      link: link
    });
  }

  return paths.filter(item => item.text !== '');
};

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ }),

/***/ "@apollo/client/utilities":
/*!*******************************************!*\
  !*** external "@apollo/client/utilities" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/client/utilities");

/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/styled");

/***/ }),

/***/ "@rebass/forms":
/*!********************************!*\
  !*** external "@rebass/forms" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@rebass/forms");

/***/ }),

/***/ "algoliasearch/lite":
/*!*************************************!*\
  !*** external "algoliasearch/lite" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("algoliasearch/lite");

/***/ }),

/***/ "dayjs":
/*!************************!*\
  !*** external "dayjs" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dayjs");

/***/ }),

/***/ "emotion-theming":
/*!**********************************!*\
  !*** external "emotion-theming" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("emotion-theming");

/***/ }),

/***/ "lodash/camelCase":
/*!***********************************!*\
  !*** external "lodash/camelCase" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/camelCase");

/***/ }),

/***/ "lodash/debounce":
/*!**********************************!*\
  !*** external "lodash/debounce" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/debounce");

/***/ }),

/***/ "lodash/merge":
/*!*******************************!*\
  !*** external "lodash/merge" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/merge");

/***/ }),

/***/ "lodash/replace":
/*!*********************************!*\
  !*** external "lodash/replace" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/replace");

/***/ }),

/***/ "lodash/startCase":
/*!***********************************!*\
  !*** external "lodash/startCase" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/startCase");

/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-copy-to-clipboard":
/*!******************************************!*\
  !*** external "react-copy-to-clipboard" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-copy-to-clipboard");

/***/ }),

/***/ "react-icons/bi":
/*!*********************************!*\
  !*** external "react-icons/bi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/bi");

/***/ }),

/***/ "react-icons/io":
/*!*********************************!*\
  !*** external "react-icons/io" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

/***/ }),

/***/ "react-instantsearch-dom/server":
/*!*************************************************!*\
  !*** external "react-instantsearch-dom/server" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-instantsearch-dom/server");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "reactjs-popup":
/*!********************************!*\
  !*** external "reactjs-popup" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactjs-popup");

/***/ }),

/***/ "rebass":
/*!*************************!*\
  !*** external "rebass" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rebass");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9saWIvYXBvbGxvQ2xpZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdG9tcy9lbnRyeUNhcmQvZW50cnlDYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdG9tcy9lbnRyeUNhcmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXRvbXMvaWNvbnMvZGVzdGluYXRpb25TdGF0dXNJY29uL2Rlc3RpbmF0aW9uU3RhdHVzSWNvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXRvbXMvaWNvbnMvbG9jYXRpb25UeXBlSWNvbi9sb2NhdGlvblR5cGVJY29uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdG9tcy9pY29ucy9yZWdpb25JY29uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F0b21zL2ljb25zL3JlZ2lvbkljb24vcmVnaW9uSWNvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXRvbXMvaW5zdGFudHNlYXJjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdG9tcy9yZWRhY3Rvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdG9tcy9yZWRhY3Rvci9yZWRhY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvc2VhcmNoL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9zZW8vc2VvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy93aWtpQ29udGVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvd2lraUNvbnRlbnQvd2lraUNvbnRlbnQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy93aWtpTmF2L3dpa2lOYXYuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NsaWNlcy9hY2NvcmRpb24vYWNjb3JkaW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zbGljZXMvYWNjb3JkaW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NsaWNlcy9lbnRyeUdyaWQvZW50cnlHcmlkLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zbGljZXMvZW50cnlHcmlkL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NsaWNlcy9pbWFnZUdyaWQvaW1hZ2VHcmlkLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zbGljZXMvdGV4dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zbGljZXMvdGV4dC90ZXh0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zbGljZXMvd2lraVNsaWNlWm9uZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zbGljZXMvd2lraVNsaWNlWm9uZS93aWtpU2xpY2Vab25lLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMvd2lraUxheW91dC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3dpa2kuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3F1ZXJpZXMvZnJhZ21lbnRzL3dpa2lGcmFnbWVudHMuZ3FsIiwid2VicGFjazovLy8uL3NyYy9xdWVyaWVzL3dpa2lRdWVyeS5ncWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdHkvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhcG9sbG8vY2xpZW50L3V0aWxpdGllc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBlbW90aW9uL3N0eWxlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByZWJhc3MvZm9ybXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbGdvbGlhc2VhcmNoL2xpdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkYXlqc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImVtb3Rpb24tdGhlbWluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaC9jYW1lbENhc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2gvZGVib3VuY2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2gvbWVyZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2gvcmVwbGFjZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaC9zdGFydENhc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXNlb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWNvcHktdG8tY2xpcGJvYXJkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvYmlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9pb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWluc3RhbnRzZWFyY2gtZG9tL3NlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Rqcy1wb3B1cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYmFzc1wiIl0sIm5hbWVzIjpbImFwb2xsb0NsaWVudCIsImNyZWF0ZUFwb2xsb0NsaWVudCIsIkFwb2xsb0NsaWVudCIsInNzck1vZGUiLCJsaW5rIiwiSHR0cExpbmsiLCJ1cmkiLCJjcmVkZW50aWFscyIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsInR5cGVQb2xpY2llcyIsIlF1ZXJ5IiwiZmllbGRzIiwiYWxsUG9zdHMiLCJjb25jYXRQYWdpbmF0aW9uIiwiaW5pdGlhbGl6ZUFwb2xsbyIsImluaXRpYWxTdGF0ZSIsIl9hcG9sbG9DbGllbnQiLCJleGlzdGluZ0NhY2hlIiwiZXh0cmFjdCIsInJlc3RvcmUiLCJ1c2VBcG9sbG8iLCJzdG9yZSIsInVzZU1lbW8iLCJwcmVmZXRjaGVkIiwicm91dGVyIiwiZXJyIiwiY3VyTG9jYWxlIiwib3B0aW9ucyIsImhyZWYiLCJldmVudCIsInRhcmdldCIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJ3aW5kb3ciLCJkb2N1bWVudCIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsImxvY2FsZSIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJjb25zb2xlIiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRBcyIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUmVmIiwicm9vdE1hcmdpbiIsInNldFJlZiIsImVsIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwic2hvdWxkUHJlZmV0Y2giLCJpc1Zpc2libGUiLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwicmVmIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwic3RhcnQiLCJEYXRlIiwic2V0VGltZW91dCIsImNiIiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwiTVNfTUFYX0lETEVfREVMQVkiLCJlbnRyeSIsIm1hcCIsIlByb21pc2UiLCJwcm9tIiwicmVzb2x2ZSIsInJlc29sdmVyIiwiZnV0dXJlIiwiZ2VuZXJhdG9yIiwidmFsdWUiLCJjYW5QcmVmZXRjaCIsImhhc1ByZWZldGNoIiwicmVzIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsInNjcmlwdCIsInJlamVjdCIsIm1hcmtBc3NldEVycm9yIiwic3JjIiwib25CdWlsZE1hbmlmZXN0IiwiaWRsZVRpbWVvdXQiLCJzY3JpcHRzIiwiYXNzZXRQcmVmaXgiLCJlbmNvZGVVUkkiLCJjc3MiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwibWFuaWZlc3QiLCJyb3V0ZSIsImFsbEZpbGVzIiwidiIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwiYXBwZW5kU2NyaXB0IiwiZmV0Y2giLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwid2l0aEZ1dHVyZSIsIm9uRW50cnlwb2ludCIsImZuIiwiZXhwb3J0cyIsImNvbXBvbmVudCIsImVycm9yIiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJnZXRGaWxlc0ZvclJvdXRlIiwiZW50cnlwb2ludCIsImNuIiwibmF2aWdhdG9yIiwib3V0cHV0IiwicHJlZmV0Y2hWaWFEb20iLCJjcmVhdGVSb3V0ZUxvYWRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwiZGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJvYnNlcnZlIiwic2V0VmlzaWJsZSIsImNyZWF0ZU9ic2VydmVyIiwiZWxlbWVudHMiLCJvYnNlcnZlciIsIm9ic2VydmVycyIsImlkIiwiZW50cmllcyIsImNhbGxiYWNrIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJwYXRobmFtZVBhcnRzIiwibG9jYWxlcyIsImRldGVjdGVkTG9jYWxlIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwicHJlZml4IiwiYWRkUGF0aFByZWZpeCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtcyIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsImVzY2FwZVBhdGhEZWxpbWl0ZXJzIiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsInF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiaXNMb2NhbFVSTCIsInJlc29sdmVBcyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORF9FUlJPUiIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJkZWZhdWx0TG9jYWxlIiwic3RhdGUiLCJpbml0aWFsIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJfX05FWFRfREFUQV9fIiwicmVsb2FkIiwiYmFjayIsInB1c2giLCJwcmVwYXJlVXJsQXMiLCJsb2NhbGVDaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwicm91dGVQcm9wcyIsImFkZExvY2FsZSIsImRlbEJhc2VQYXRoIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwicGFyc2VkIiwicGFnZXMiLCJfX3Jld3JpdGVzIiwibWV0aG9kIiwicG90ZW50aWFsSHJlZiIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJhcHBDb21wIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwic3NnNDA0IiwicGFnZSIsIm1vZCIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsIl9yZXNvbHZlSHJlZiIsImFwcGx5QmFzZVBhdGgiLCJjbGVhblBhdGhuYW1lIiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImRhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzZWdtZW50IiwiY2hhciIsImVuY29kZVVSSUNvbXBvbmVudCIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJnbG9iYWxCYXNlIiwicmVzb2x2ZWRCYXNlIiwib3JpZ2luIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJrZXlzIiwibWF0Y2hlclJlZ2V4IiwicGF0aFRvUmVnZXhwIiwibWF0Y2hlciIsInZhbGlkYXRlIiwicGFyc2VkRGVzdGluYXRpb24iLCJoYWRMb2NhbGUiLCJkZXN0UXVlcnkiLCJkZXN0UGF0aCIsImRlc3RQYXRoUGFyYW1LZXlzIiwiZGVzdFBhdGhQYXJhbXMiLCJkZXN0aW5hdGlvbkNvbXBpbGVyIiwic3RyT3JBcnJheSIsImNvbXBpbGVOb25QYXRoIiwicGFyYW1LZXlzIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsIm5ld1VybCIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwiaXRlbSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmV3cml0ZSIsImRlc3RSZXMiLCJmc1BhdGhuYW1lIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIkVudHJ5Q2FyZCIsImZvcndhcmRSZWYiLCJ0aGVtZSIsInVzZVRoZW1lIiwicG9zaXRpb24iLCJib3hTaGFkb3ciLCJwYWRkaW5nIiwiYmFja2dyb3VuZCIsInByb2plY3REZXRhaWxzIiwiY29sb3JzIiwicmVnaW9uIiwiekluZGV4Iiwid2lkdGgiLCJjdXJzb3IiLCJvdmVyZmxvdyIsInRyYW5zaXRpb24iLCJ0cmFuc2Zvcm0iLCJkaXNwbGF5IiwidG9wIiwibGVmdCIsImhlaWdodCIsInBhZGRpbmdUb3AiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYm9yZGVyQm90dG9tIiwiYmFja2dyb3VuZEltYWdlIiwiaW1hZ2VzIiwibGVuZ3RoIiwiaGVyb0ltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJ0eXBlSGFuZGxlIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwiY2FtZWxDYXNlRm9ybWF0dGVyIiwiZGVzdGluYXRpb25UeXBlIiwibWFyZ2luTGVmdCIsImRlc3RpbmF0aW9uU3RhdHVzIiwidGl0bGUiLCJob3VzZSIsIkRlc3RpbmF0aW9uU3RhdHVzSWNvbiIsInN0YXR1cyIsIkNvbXBsZXRlZCIsIkluUHJvZ3Jlc3MiLCJSZWRvSW5Qcm9ncmVzcyIsIkFiYW5kb25lZCIsIk5vdFN0YXJ0ZWQiLCJMb2NhdGlvblR5cGVJY29uIiwidHlwZSIsIkNhc3RsZSIsIlRvd24iLCJWaWxsYWdlIiwiQ2l0eSIsIktlZXAiLCJIb2xkZmFzdCIsIlJ1aW4iLCJUb3dlciIsIk1pc2NlbGxhbmVvdXMiLCJMYW5kbWFyayIsIkNyYW5ub2ciLCJDbGFuIiwiUmVnaW9uSWNvbiIsIkJleW9uZFRoZVdhbGwiLCJDcm93bmxhbmRzIiwiRG9ybmUiLCJJcm9uSXNsYW5kcyIsIk5vcnRoIiwiUmVhY2giLCJSaXZlcmxhbmRzIiwiU3Rvcm1sYW5kcyIsIlZhbGUiLCJXYWxsIiwiV2VzdGVybGFuZHMiLCJHdWlkZSIsImluZGV4TmFtZSIsInNlYXJjaENsaWVudCIsImFsZ29saWFzZWFyY2giLCJlbnYiLCJORVhUX1BVQkxJQ19BTEdPTElBX0FQUF9JRCIsIk5FWFRfUFVCTElDX0FMR09MSUFfU0VBUkNIX0tFWSIsIlJlZGFjdG9yIiwic3R5bGVkIiwiZGl2IiwiYWxnb2xpYSIsImFsZ29saWFDbGllbnQiLCJpbml0SW5kZXgiLCJhdHRyaWJ1dGVzVG9IaWdobGlnaHQiLCJoaXRzUGVyUGFnZSIsIkRyb3Bkb3duTGluayIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiUmVzdWx0cyIsInJlc3VsdHMiLCJvYmplY3RJRCIsIlNlYXJjaCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlU3RhdGUiLCJzZXRSZXN1bHRzIiwic2V0UXVlcnkiLCJ1cGRhdGVSZXN1bHRzIiwidXNlQ2FsbGJhY2siLCJkZWJvdW5jZSIsImN1cnJlbnRRdWVyeSIsInRoZW4iLCJoaXRzIiwiaGFuZGxlQ2hhbmdlIiwicmlnaHQiLCJTRU8iLCJkZXNjcmlwdGlvbiIsImltYWdlIiwiYXJ0aWNsZSIsInNlbyIsIldpa2lDb250ZW50IiwiV2lraU5hdkdyb3VwIiwibmF2SXRlbSIsIm9wZW4iLCJzZXRPcGVuIiwiYnVpbGRMaW5rIiwicGFyZW50IiwiZWxlbWVudCIsInNsdWciLCJsaXN0U3R5bGVUeXBlIiwiV2lraU5hdiIsIm5hdkRhdGEiLCJmbGV4U2hyaW5rIiwiZmxleEdyb3ciLCJBY2NvcmRpb25JdGVtIiwiZGF0YUxlbmd0aCIsImluZGV4IiwiYm9yZGVyVG9wIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJCb3R0b21Db2xvciIsInVzZXJTZWxlY3QiLCJoZWFkaW5nIiwiX19odG1sIiwiY29weSIsIkFjY29yZGlvbiIsInNwYWNpbmdzIiwiY29uZmlnUHJvcHMiLCJhY2NvcmRpb25Db250ZW50IiwiRW50cnlHcmlkIiwiZW50cnlMaXN0IiwiU1ZHV3JhcHBlciIsIkJveCIsIkltYWdlR3JpZCIsImltYWdlTGlzdCIsIl9yZXBsYWNlIiwiY2xpY2tUb0NvcHlTY3JpcHQiLCJpbWFnZVRpdGxlIiwiaW1hZ2VEZXNjcmlwdGlvbiIsImJvdHRvbSIsIlRleHQiLCJ3aWtpIiwicmVkYWN0b3IiLCJXaWtpU2xpY2Vab25lIiwic2xpY2VzIiwibW9kdWxlIiwic2xpY2UiLCJCcmVhZGNydW1iSXRlbSIsInJlc3QiLCJXaWtpTGF5b3V0IiwiYnJlYWRjcnVtYiIsIm91dGxpbmUiLCJvdXRsaW5lT2Zmc2V0IiwiaXNBcnJheSIsImNydW1iIiwiV2lraVBhZ2UiLCJpbml0aWFsQXBvbGxvU3RhdGUiLCJST09UX1FVRVJZIiwibmF2ZGF0YSIsInVzZVJvdXRlciIsInBhZ2VEZXNjcmlwdGlvbiIsInBhZ2VFbnRyeSIsInBhZ2VJbWFnZSIsImNvbXB1dGVCcmVhZGNydW1icyIsIndpa2lTbGljZXMiLCJnZXRTdGF0aWNQcm9wcyIsIldJS0lfUVVFUlkiLCJyZXZhbGlkYXRlIiwibXQiLCJtYXJnaW5Ub3AiLCJtb2JpbGUiLCJ0YWJsZXQiLCJkZXNrdG9wIiwid2lkZSIsIm1iIiwibWFyZ2luQm90dG9tIiwicHQiLCJwYiIsInBhZGRpbmdCb3R0b20iLCJzdHJpbmciLCJfc3RhcnRDYXNlIiwiX2NhbWVsQ2FzZSIsImZvcm1hdERhdGUiLCJkYXRlIiwiZCIsImRheWpzIiwiZm9ybWF0IiwiZ2V0T1MiLCJwbGF0Zm9ybSIsIm1hY29zUGxhdGZvcm1zIiwid2luZG93c1BsYXRmb3JtcyIsIm9zIiwiaW5kZXhPZiIsInRlc3QiLCJjb21wbGV0aW9uUGVyY2VudGFnZSIsImNvbXBsZXRlZExldmVsIiwiaW5Qcm9ncmVzc0xldmVsIiwibm90U3RhcnRlZExldmVsIiwiY2VpbCIsImZsYXR0ZW4iLCJyZWR1Y2UiLCJhcnIiLCJlbGVtIiwiX21lcmdlIiwiZ2V0RGVzdGluYXRpb25MZXZlbCIsIm51bSIsInBhdGhzIiwiY3J1bWJzIiwic3BsaXQiLCJwYXJ0Iiwiam9pbiIsImZpbHRlciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7OztBQ0FBLGdHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxZQUFKOztBQUVBLFNBQVNDLGtCQUFULEdBQThCO0FBQzVCLFNBQU8sSUFBSUMsMkRBQUosQ0FBaUI7QUFDdEJDLFdBQU8sTUFEZTtBQUV0QkMsUUFBSSxFQUFFLElBQUlDLHVEQUFKLENBQWE7QUFDakJDLFNBQUcsRUFBRSxtQ0FEWTtBQUN5QjtBQUMxQ0MsaUJBQVcsRUFBRSxhQUZJLENBRVU7O0FBRlYsS0FBYixDQUZnQjtBQU10QkMsU0FBSyxFQUFFLElBQUlDLDREQUFKLENBQWtCO0FBQ3ZCQyxrQkFBWSxFQUFFO0FBQ1pDLGFBQUssRUFBRTtBQUNMQyxnQkFBTSxFQUFFO0FBQ05DLG9CQUFRLEVBQUVDLGlGQUFnQjtBQURwQjtBQURIO0FBREs7QUFEUyxLQUFsQjtBQU5lLEdBQWpCLENBQVA7QUFnQkQ7O0FBRU0sU0FBU0MsZ0JBQVQsQ0FBMEJDLFlBQVksR0FBRyxJQUF6QyxFQUErQztBQUFBOztBQUNwRCxRQUFNQyxhQUFhLHFCQUFHakIsWUFBSCwyREFBbUJDLGtCQUFrQixFQUF4RCxDQURvRCxDQUdwRDtBQUNBOzs7QUFDQSxNQUFJZSxZQUFKLEVBQWtCO0FBQ2hCO0FBQ0EsVUFBTUUsYUFBYSxHQUFHRCxhQUFhLENBQUNFLE9BQWQsRUFBdEIsQ0FGZ0IsQ0FHaEI7QUFDQTs7O0FBQ0FGLGlCQUFhLENBQUNULEtBQWQsQ0FBb0JZLE9BQXBCLGlDQUFpQ0YsYUFBakMsR0FBbURGLFlBQW5EO0FBQ0QsR0FYbUQsQ0FZcEQ7OztBQUNBLFlBQW1DLE9BQU9DLGFBQVAsQ0FiaUIsQ0FjcEQ7O0FBQ0EsTUFBSSxDQUFDakIsWUFBTCxFQUFtQkEsWUFBWSxHQUFHaUIsYUFBZjtBQUVuQixTQUFPQSxhQUFQO0FBQ0Q7QUFFTSxTQUFTSSxTQUFULENBQW1CTCxZQUFuQixFQUFpQztBQUN0QyxRQUFNTSxLQUFLLEdBQUdDLHFEQUFPLENBQUMsTUFBTVIsZ0JBQWdCLENBQUNDLFlBQUQsQ0FBdkIsRUFBdUMsQ0FBQ0EsWUFBRCxDQUF2QyxDQUFyQjtBQUNBLFNBQU9NLEtBQVA7QUFDRCxDOzs7Ozs7Ozs7OztBQ2hERDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7OztBQ05BLGNBQWMsbUJBQU8sQ0FBQyxzRkFBK0I7O0FBRXJEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlDOzs7Ozs7Ozs7OztBQ3REQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7O0FBRUE7O0FBUUE7O0FBQ0E7O0FBdUJBLE1BQU1FLFVBQTJDLEdBQWpEOztBQUVBLDZDQUtRO0FBQ04sWUFBbUM7QUFDbkMsTUFBSSxDQUFDLHdCQUFMLElBQUssQ0FBTCxFQUF1QixPQUZqQixDQUdOO0FBQ0E7QUFDQTtBQUNBOztBQUNBQyxRQUFNLENBQU5BLGtDQUEwQ0MsR0FBRCxJQUFTO0FBQ2hELGNBQTJDO0FBQ3pDO0FBQ0E7QUFFSDtBQUxERDtBQU1BLFFBQU1FLFNBQVMsR0FDYkMsT0FBTyxJQUFJLE9BQU9BLE9BQU8sQ0FBZCxXQUFYQSxjQUNJQSxPQUFPLENBRFhBLFNBRUlILE1BQU0sSUFBSUEsTUFBTSxDQUh0QixPQWJNLENBa0JOOztBQUNBRCxZQUFVLENBQUNLLElBQUksR0FBSkEsWUFBbUJGLFNBQVMsR0FBRyxNQUFILFlBQXZDSCxFQUFXSyxDQUFELENBQVZMO0FBR0Y7O0FBQUEsZ0NBQWtEO0FBQ2hELFFBQU07QUFBQTtBQUFBLE1BQWFNLEtBQUssQ0FBeEI7QUFDQSxTQUNHQyxNQUFNLElBQUlBLE1BQU0sS0FBakIsT0FBQ0EsSUFDREQsS0FBSyxDQURMLE9BQUNDLElBRURELEtBQUssQ0FGTCxPQUFDQyxJQUdERCxLQUFLLENBSEwsUUFBQ0MsSUFJREQsS0FBSyxDQUpMLE1BQUNDLElBSWU7QUFDZkQsT0FBSyxDQUFMQSxlQUFxQkEsS0FBSyxDQUFMQSxzQkFOeEI7QUFVRjs7QUFBQSw0RUFTUTtBQUNOLFFBQU07QUFBQTtBQUFBLE1BQWVFLENBQUMsQ0FBdEI7O0FBRUEsTUFBSUMsUUFBUSxLQUFSQSxRQUFxQkMsZUFBZSxDQUFmQSxDQUFlLENBQWZBLElBQXNCLENBQUMsd0JBQWhELElBQWdELENBQTVDRCxDQUFKLEVBQW1FO0FBQ2pFO0FBQ0E7QUFHRkQ7O0FBQUFBLEdBQUMsQ0FBREEsaUJBUk0sQ0FVTjs7QUFDQSxNQUFJRyxNQUFNLElBQVYsTUFBb0I7QUFDbEJBLFVBQU0sR0FBR0MsRUFBRSxDQUFGQSxlQUFURDtBQUdGLEdBZk0sQ0FlTjs7O0FBQ0FWLFFBQU0sQ0FBQ1ksT0FBTyxlQUFkWixNQUFNLENBQU5BLFdBQStDO0FBQUE7QUFBL0NBO0FBQStDLEdBQS9DQSxPQUNHYSxPQUFELElBQXNCO0FBQ3BCLFFBQUksQ0FBSixTQUFjOztBQUNkLGdCQUFZO0FBQ1ZDLFlBQU0sQ0FBTkE7QUFDQUMsY0FBUSxDQUFSQTtBQUVIO0FBUEhmO0FBV0Y7O0FBQUEscUJBQXlEO0FBQ3ZELFlBQTJDO0FBQ3pDLG1DQUlHO0FBQ0QsYUFBTyxVQUNKLGdDQUErQmdCLElBQUksQ0FBQ0MsR0FBSSxnQkFBZUQsSUFBSSxDQUFDRSxRQUFTLDZCQUE0QkYsSUFBSSxDQUFDRyxNQUF2RyxhQUFDLElBQ0Usb0JBRkwsRUFDRyxDQURJLENBQVA7QUFRRixLQWR5QyxDQWN6Qzs7O0FBQ0EsVUFBTUMsa0JBQW1ELEdBQUc7QUFDMURoQixVQUFJLEVBRE47QUFBNEQsS0FBNUQ7QUFHQSxVQUFNaUIsYUFBa0MsR0FBR0MsTUFBTSxDQUFOQSxLQUEzQyxrQkFBMkNBLENBQTNDO0FBR0EsaUJBQWEsQ0FBYixRQUF1QkwsR0FBRCxJQUE0QjtBQUNoRCxVQUFJQSxHQUFHLEtBQVAsUUFBb0I7QUFDbEIsWUFDRU0sS0FBSyxDQUFMQSxHQUFLLENBQUxBLFlBQ0MsT0FBT0EsS0FBSyxDQUFaLEdBQVksQ0FBWixpQkFBa0MsT0FBT0EsS0FBSyxDQUFaLEdBQVksQ0FBWixLQUZyQyxVQUdFO0FBQ0EsZ0JBQU1DLGVBQWUsQ0FBQztBQUFBO0FBRXBCTixvQkFBUSxFQUZZO0FBR3BCQyxrQkFBTSxFQUFFSSxLQUFLLENBQUxBLEdBQUssQ0FBTEEscUJBQStCLE9BQU9BLEtBQUssQ0FIckQsR0FHcUQ7QUFIL0IsV0FBRCxDQUFyQjtBQU1IO0FBWEQsYUFXTztBQUNMO0FBQ0E7QUFDQSxjQUFNRSxDQUFRLEdBQWQ7QUFFSDtBQWpCRCxPQXJCeUMsQ0F3Q3pDOztBQUNBLFVBQU1DLGtCQUFtRCxHQUFHO0FBQzFEZixRQUFFLEVBRHdEO0FBRTFEQyxhQUFPLEVBRm1EO0FBRzFERixZQUFNLEVBSG9EO0FBSTFEaUIsYUFBTyxFQUptRDtBQUsxREMsY0FBUSxFQUxrRDtBQU0xREMsY0FBUSxFQU5rRDtBQU8xREMsWUFBTSxFQVBSO0FBQTRELEtBQTVEO0FBU0EsVUFBTUMsYUFBa0MsR0FBR1QsTUFBTSxDQUFOQSxLQUEzQyxrQkFBMkNBLENBQTNDO0FBR0EsaUJBQWEsQ0FBYixRQUF1QkwsR0FBRCxJQUE0QjtBQUNoRCxZQUFNZSxPQUFPLEdBQUcsT0FBT1QsS0FBSyxDQUE1QixHQUE0QixDQUE1Qjs7QUFFQSxVQUFJTixHQUFHLEtBQVAsTUFBa0I7QUFDaEIsWUFBSU0sS0FBSyxDQUFMQSxHQUFLLENBQUxBLElBQWNTLE9BQU8sS0FBckJULFlBQXNDUyxPQUFPLEtBQWpELFVBQWdFO0FBQzlELGdCQUFNUixlQUFlLENBQUM7QUFBQTtBQUVwQk4sb0JBQVEsRUFGWTtBQUdwQkMsa0JBQU0sRUFIUjtBQUFzQixXQUFELENBQXJCO0FBTUg7QUFSRCxhQVFPLElBQUlGLEdBQUcsS0FBUCxVQUFzQjtBQUMzQixZQUFJTSxLQUFLLENBQUxBLEdBQUssQ0FBTEEsSUFBY1MsT0FBTyxLQUF6QixVQUF3QztBQUN0QyxnQkFBTVIsZUFBZSxDQUFDO0FBQUE7QUFFcEJOLG9CQUFRLEVBRlk7QUFHcEJDLGtCQUFNLEVBSFI7QUFBc0IsV0FBRCxDQUFyQjtBQU1IO0FBUk0sYUFRQSxJQUNMRixHQUFHLEtBQUhBLGFBQ0FBLEdBQUcsS0FESEEsWUFFQUEsR0FBRyxLQUZIQSxhQUdBQSxHQUFHLEtBSEhBLGNBSUFBLEdBQUcsS0FMRSxZQU1MO0FBQ0EsWUFBSU0sS0FBSyxDQUFMQSxHQUFLLENBQUxBLFlBQXNCUyxPQUFPLEtBQWpDLFdBQWlEO0FBQy9DLGdCQUFNUixlQUFlLENBQUM7QUFBQTtBQUVwQk4sb0JBQVEsRUFGWTtBQUdwQkMsa0JBQU0sRUFIUjtBQUFzQixXQUFELENBQXJCO0FBTUg7QUFkTSxhQWNBO0FBQ0w7QUFDQTtBQUNBLGNBQU1NLENBQVEsR0FBZDtBQUVIO0FBdENELE9BckR5QyxDQTZGekM7QUFDQTs7QUFDQSxVQUFNUSxTQUFTLEdBQUdDLHNCQUFsQixLQUFrQkEsQ0FBbEI7O0FBQ0EsUUFBSVgsS0FBSyxDQUFMQSxZQUFrQixDQUFDVSxTQUFTLENBQWhDLFNBQTBDO0FBQ3hDQSxlQUFTLENBQVRBO0FBQ0FFLGFBQU8sQ0FBUEE7QUFJSDtBQUNEOztBQUFBLFFBQU1DLENBQUMsR0FBR2IsS0FBSyxDQUFMQSxhQUFWO0FBRUEsUUFBTXZCLE1BQU0sR0FBRyxhQUFmLFNBQWUsR0FBZjtBQUNBLFFBQU1xQyxRQUFRLEdBQUlyQyxNQUFNLElBQUlBLE1BQU0sQ0FBakIsUUFBQ0EsSUFBbEI7O0FBRUEsUUFBTTtBQUFBO0FBQUE7QUFBQSxNQUFla0MsdUJBQWMsTUFBTTtBQUN2QyxVQUFNLDZCQUE2QixtQ0FBc0JYLEtBQUssQ0FBM0IsTUFBbkMsSUFBbUMsQ0FBbkM7QUFDQSxXQUFPO0FBQ0xuQixVQUFJLEVBREM7QUFFTE8sUUFBRSxFQUFFWSxLQUFLLENBQUxBLEtBQ0EsbUNBQXNCQSxLQUFLLENBRDNCQSxFQUNBLENBREFBLEdBRUFlLFVBQVUsSUFKaEI7QUFBTyxLQUFQO0FBRm1CSixLQVFsQixXQUFXWCxLQUFLLENBQWhCLE1BQXVCQSxLQUFLLENBUi9CLEVBUUcsQ0FSa0JXLENBQXJCOztBQVVBLE1BQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBSixNQXZIdUQsQ0F5SHZEOztBQUNBLE1BQUksb0JBQUosVUFBa0M7QUFDaENLLFlBQVEsZ0JBQUcsd0NBQVhBLFFBQVcsQ0FBWEE7QUFHRixHQTlIdUQsQ0E4SHZEOzs7QUFDQSxRQUFNQyxLQUFVLEdBQUdDLHFCQUFuQixRQUFtQkEsQ0FBbkI7O0FBQ0EsUUFBTUMsUUFBYSxHQUFHRixLQUFLLElBQUksaUJBQVRBLFlBQXNDQSxLQUFLLENBQWpFO0FBRUEsUUFBTSxrQ0FBa0Msc0NBQWdCO0FBQ3RERyxjQUFVLEVBRFo7QUFBd0QsR0FBaEIsQ0FBeEM7O0FBR0EsUUFBTUMsTUFBTSxHQUFHViwyQkFDWlcsRUFBRCxJQUFpQjtBQUNmQyxzQkFBa0IsQ0FBbEJBLEVBQWtCLENBQWxCQTs7QUFDQSxrQkFBYztBQUNaLFVBQUksb0JBQUosWUFBb0NKLFFBQVEsQ0FBNUMsRUFBNEMsQ0FBUkEsQ0FBcEMsS0FDSyxJQUFJLG9CQUFKLFVBQWtDO0FBQ3JDQSxnQkFBUSxDQUFSQTtBQUVIO0FBQ0Y7QUFUWVIsS0FVYixXQVZGLGtCQVVFLENBVmFBLENBQWY7O0FBWUEsd0JBQVUsTUFBTTtBQUNkLFVBQU1hLGNBQWMsR0FBR0MsU0FBUyxJQUFUQSxLQUFrQix3QkFBekMsSUFBeUMsQ0FBekM7QUFDQSxVQUFNOUMsU0FBUyxHQUNiLHlDQUF5Q0YsTUFBTSxJQUFJQSxNQUFNLENBRDNEO0FBRUEsVUFBTWlELFlBQVksR0FDaEJsRCxVQUFVLENBQUNLLElBQUksR0FBSkEsWUFBbUJGLFNBQVMsR0FBRyxNQUFILFlBRHpDLEVBQ2FFLENBQUQsQ0FEWjs7QUFFQSxRQUFJMkMsY0FBYyxJQUFJLENBQXRCLGNBQXFDO0FBQ25DbEIsY0FBUSxtQkFBbUI7QUFDekJDLGNBQU0sRUFEUkQ7QUFBMkIsT0FBbkIsQ0FBUkE7QUFJSDtBQVhELEtBV0csaUNBWEgsTUFXRyxDQVhIO0FBYUEsUUFBTXFCLFVBS0wsR0FBRztBQUNGQyxPQUFHLEVBREQ7QUFFRkMsV0FBTyxFQUFHN0MsQ0FBRCxJQUF5QjtBQUNoQyxVQUFJaUMsS0FBSyxDQUFMQSxTQUFlLE9BQU9BLEtBQUssQ0FBTEEsTUFBUCxZQUFuQixZQUE4RDtBQUM1REEsYUFBSyxDQUFMQTtBQUVGOztBQUFBLFVBQUksQ0FBQ2pDLENBQUMsQ0FBTixrQkFBeUI7QUFDdkI4QyxtQkFBVyxnREFBWEEsTUFBVyxDQUFYQTtBQUVIO0FBZEg7QUFLSSxHQUxKOztBQWlCQUgsWUFBVSxDQUFWQSxlQUEyQjNDLENBQUQsSUFBeUI7QUFDakQsUUFBSSxDQUFDLHdCQUFMLElBQUssQ0FBTCxFQUF1Qjs7QUFDdkIsUUFBSWlDLEtBQUssQ0FBTEEsU0FBZSxPQUFPQSxLQUFLLENBQUxBLE1BQVAsaUJBQW5CLFlBQW1FO0FBQ2pFQSxXQUFLLENBQUxBO0FBRUZYOztBQUFBQSxZQUFRLG1CQUFtQjtBQUFFeUIsY0FBUSxFQUFyQ3pCO0FBQTJCLEtBQW5CLENBQVJBO0FBTEZxQixJQS9LdUQsQ0F1THZEO0FBQ0E7OztBQUNBLE1BQUkzQixLQUFLLENBQUxBLFlBQW1CaUIsS0FBSyxDQUFMQSxnQkFBc0IsRUFBRSxVQUFVQSxLQUFLLENBQTlELEtBQTZDLENBQTdDLEVBQXdFO0FBQ3RFVSxjQUFVLENBQVZBLE9BQWtCLHlCQUNoQiwyQkFFRSx5Q0FBeUNsRCxNQUFNLElBQUlBLE1BQU0sQ0FGM0QsUUFHRUEsTUFBTSxJQUFJQSxNQUFNLENBSnBCa0QsYUFDRSxDQURnQixDQUFsQkE7QUFTRjs7QUFBQSxzQkFBT2hCLG1DQUFQLFVBQU9BLENBQVA7OztlQUdhcUIsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDclRmO0FBQ0E7QUFDQTs7QUFDTyx1Q0FBdUQ7QUFDNUQsU0FBT0MsSUFBSSxDQUFKQSxpQkFBc0JBLElBQUksS0FBMUJBLE1BQXFDQSxJQUFJLENBQUpBLFNBQWMsQ0FBbkRBLENBQXFDQSxDQUFyQ0EsR0FBUDtBQUdGO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLE1BQU1DLDBCQUEwQixHQUFHQyxTQUNyQ0YsU0FEcUNFLEdBQW5DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNPUCxNQUFNQyxtQkFBbUIsR0FDdEIsK0JBQStCQyxJQUFJLENBQXBDLG1CQUFDLElBQ0QsY0FBK0Q7QUFDN0QsTUFBSUMsS0FBSyxHQUFHQyxJQUFJLENBQWhCLEdBQVlBLEVBQVo7QUFDQSxTQUFPQyxVQUFVLENBQUMsWUFBWTtBQUM1QkMsTUFBRSxDQUFDO0FBQ0RDLGdCQUFVLEVBRFQ7QUFFREMsbUJBQWEsRUFBRSxZQUFZO0FBQ3pCLGVBQU9DLElBQUksQ0FBSkEsT0FBWSxNQUFNTCxJQUFJLENBQUpBLFFBQXpCLEtBQW1CLENBQVpLLENBQVA7QUFISkg7QUFBRyxLQUFELENBQUZBO0FBRGUsS0FBakIsQ0FBaUIsQ0FBakI7QUFKSjs7ZUFjZUwsbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJmOztBQUNBLGtLLENBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLE1BQU1TLGlCQUFpQixHQUF2Qjs7QUFtQ0EseUNBSWM7QUFDWixNQUFJQyxLQUFnQyxHQUFHQyxHQUFHLENBQUhBLElBQXZDLEdBQXVDQSxDQUF2Qzs7QUFDQSxhQUFXO0FBQ1QsUUFBSSxZQUFKLE9BQXVCO0FBQ3JCLGFBQU9ELEtBQUssQ0FBWjtBQUVGOztBQUFBLFdBQU9FLE9BQU8sQ0FBUEEsUUFBUCxLQUFPQSxDQUFQO0FBRUY7O0FBQUE7QUFDQSxRQUFNQyxJQUFJLEdBQUcsWUFBZ0JDLE9BQUQsSUFBYTtBQUN2Q0MsWUFBUSxHQUFSQTtBQURGLEdBQWEsQ0FBYjtBQUdBSixLQUFHLENBQUhBLFNBQWNELEtBQUssR0FBRztBQUFFSSxXQUFPLEVBQVQ7QUFBc0JFLFVBQU0sRUFBbERMO0FBQXNCLEdBQXRCQTtBQUNBLFNBQU9NLFNBQVMsR0FDWjtBQUNBQSxXQUFTLEdBQVRBLEtBQWtCQyxLQUFELEtBQVlILFFBQVEsQ0FBUkEsS0FBUSxDQUFSQSxFQUZqQixLQUVLLENBQWpCRSxDQUZZLEdBQWhCO0FBYUY7O0FBQUEsMkJBQXNEO0FBQ3BELE1BQUk7QUFDRmpHLFFBQUksR0FBR29DLFFBQVEsQ0FBUkEsY0FBUHBDLE1BQU9vQyxDQUFQcEM7QUFDQSxXQUNFO0FBQ0E7QUFDQyxPQUFDLENBQUNtQyxNQUFNLENBQVIsd0JBQWlDLENBQUMsQ0FBRUMsUUFBRCxDQUFwQyxZQUFDLElBQ0RwQyxJQUFJLENBQUpBLGlCQUpGLFVBSUVBO0FBSkY7QUFNQSxHQVJGLENBUUUsZ0JBQU07QUFDTjtBQUVIO0FBRUQ7O0FBQUEsTUFBTW1HLFdBQW9CLEdBQUdDLFdBQTdCOztBQUVBLHdDQUlnQjtBQUNkLFNBQU8sWUFBWSxjQUFjO0FBQy9CLFFBQUloRSxRQUFRLENBQVJBLGNBQXdCLCtCQUE4QlgsSUFBMUQsSUFBSVcsQ0FBSixFQUFxRTtBQUNuRSxhQUFPaUUsR0FBUDtBQUdGckc7O0FBQUFBLFFBQUksR0FBR29DLFFBQVEsQ0FBUkEsY0FBUHBDLE1BQU9vQyxDQUFQcEMsQ0FMK0IsQ0FPL0I7O0FBQ0EsWUFBUUEsSUFBSSxDQUFKQTtBQUNSQSxRQUFJLENBQUpBO0FBQ0FBLFFBQUksQ0FBSkEsY0FBb0IrRSxTQUFwQi9FO0FBQ0FBLFFBQUksQ0FBSkE7QUFDQUEsUUFBSSxDQUFKQSxjQVorQixDQWMvQjs7QUFDQUEsUUFBSSxDQUFKQTtBQUVBb0MsWUFBUSxDQUFSQTtBQWpCRixHQUFPLENBQVA7QUFxQkY7O0FBQUEsTUFBTWtFLGdCQUFnQixHQUFHQyxNQUFNLENBQS9CLGtCQUErQixDQUEvQixDLENBQ0E7O0FBQ08sNkJBQTJDO0FBQ2hELFNBQU81RCxNQUFNLENBQU5BLHNDQUFQLEVBQU9BLENBQVA7QUFHSzs7QUFBQSwyQkFBbUM7QUFDeEMsU0FBT3JCLEdBQUcsSUFBSWdGLGdCQUFnQixJQUE5QjtBQUdGOztBQUFBLG1DQUdvQjtBQUNsQixTQUFPLFlBQVkscUJBQXFCO0FBQ3RDRSxVQUFNLEdBQUdwRSxRQUFRLENBQVJBLGNBQVRvRSxRQUFTcEUsQ0FBVG9FLENBRHNDLENBR3RDO0FBQ0E7QUFDQTs7QUFDQUEsVUFBTSxDQUFOQTs7QUFDQUEsVUFBTSxDQUFOQSxVQUFpQixNQUNmQyxNQUFNLENBQUNDLGNBQWMsQ0FBQyxVQUFXLDBCQUF5QkMsR0FENURILEVBQ3dCLENBQUQsQ0FBZixDQURSQSxDQVBzQyxDQVV0QztBQUNBOzs7QUFDQUEsVUFBTSxDQUFOQSxjQUFxQnpCLFNBQXJCeUIsQ0Fac0MsQ0FjdEM7QUFDQTs7QUFDQUEsVUFBTSxDQUFOQTtBQUNBcEUsWUFBUSxDQUFSQTtBQWpCRixHQUFPLENBQVA7QUFxQkY7O0FBQUEsOEJBQTREO0FBQzFELFNBQU8sWUFBWSxzQkFDakIsa0NBQW9CLE1BQU1nRCxVQUFVLENBQUMsTUFBTXFCLE1BQU0sQ0FBYixHQUFhLENBQWIsRUFEdEMsRUFDc0MsQ0FBcEMsQ0FESyxDQUFQO0FBS0YsQyxDQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sa0NBQWdFO0FBQ3JFLE1BQUl4QixJQUFJLENBQVIsa0JBQTJCO0FBQ3pCLFdBQU9XLE9BQU8sQ0FBUEEsUUFBZ0JYLElBQUksQ0FBM0IsZ0JBQU9XLENBQVA7QUFHRjs7QUFBQSxRQUFNZ0IsZUFBZSxHQUFHLFlBQWtDZCxPQUFELElBQWE7QUFDcEU7QUFDQSxVQUFNVCxFQUFFLEdBQUdKLElBQUksQ0FBZjs7QUFDQUEsUUFBSSxDQUFKQSxzQkFBMkIsTUFBTTtBQUMvQmEsYUFBTyxDQUFDYixJQUFJLENBQVphLGdCQUFPLENBQVBBO0FBQ0FULFFBQUUsSUFBSUEsRUFBTkE7QUFGRko7QUFIRixHQUF3QixDQUF4QjtBQVFBLFNBQU9XLE9BQU8sQ0FBUEEsS0FBYSxrQkFFbEJpQixXQUFXLG9CQUVUSCxjQUFjLENBQUMsVUFKbkIsc0NBSW1CLENBQUQsQ0FGTCxDQUZPLENBQWJkLENBQVA7QUFhRjs7QUFBQSw4Q0FHdUI7QUFDckIsWUFBNEM7QUFDMUMsV0FBTyxPQUFPLENBQVAsUUFBZ0I7QUFDckJrQixhQUFPLEVBQUUsQ0FDUEMsV0FBVyxHQUFYQSwrQkFFRUMsU0FBUyxDQUFDLDJDQUpPLEtBSVAsQ0FBRCxDQUhKLENBRFk7QUFNckI7QUFDQUMsU0FBRyxFQVBMO0FBQXVCLEtBQWhCLENBQVA7QUFVRjs7QUFBQSxTQUFPQyxzQkFBc0IsR0FBdEJBLEtBQStCQyxRQUFELElBQWM7QUFDakQsUUFBSSxFQUFFQyxLQUFLLElBQVgsUUFBSSxDQUFKLEVBQTBCO0FBQ3hCLFlBQU1WLGNBQWMsQ0FBQyxVQUFXLDJCQUEwQlUsS0FBMUQsRUFBcUIsQ0FBRCxDQUFwQjtBQUVGOztBQUFBLFVBQU1DLFFBQVEsR0FBR0YsUUFBUSxDQUFSQSxLQUFRLENBQVJBLEtBQ2R6QixLQUFELElBQVdxQixXQUFXLEdBQVhBLFlBQTBCQyxTQUFTLENBRGhELEtBQ2dELENBRC9CRyxDQUFqQjtBQUdBLFdBQU87QUFDTEwsYUFBTyxFQUFFTyxRQUFRLENBQVJBLE9BQWlCQyxDQUFELElBQU9BLENBQUMsQ0FBREEsU0FEM0IsS0FDMkJBLENBQXZCRCxDQURKO0FBRUxKLFNBQUcsRUFBRUksUUFBUSxDQUFSQSxPQUFpQkMsQ0FBRCxJQUFPQSxDQUFDLENBQURBLFNBRjlCLE1BRThCQSxDQUF2QkQ7QUFGQSxLQUFQO0FBUEYsR0FBT0gsQ0FBUDtBQWNGOztBQUFBLHdDQUE2RDtBQUMzRCxRQUFNSyxXQUdMLEdBQUcsSUFISixHQUdJLEVBSEo7QUFJQSxRQUFNQyxhQUE0QyxHQUFHLElBQXJELEdBQXFELEVBQXJEO0FBQ0EsUUFBTUMsV0FBa0QsR0FBRyxJQUEzRCxHQUEyRCxFQUEzRDtBQUNBLFFBQU1DLE1BR0wsR0FBRyxJQUhKLEdBR0ksRUFISjs7QUFLQSxtQ0FBMkQ7QUFDekQsUUFBSTdCLElBQUksR0FBRzJCLGFBQWEsQ0FBYkEsSUFBWCxHQUFXQSxDQUFYOztBQUNBLGNBQVU7QUFDUjtBQUdGLEtBTnlELENBTXpEOzs7QUFDQSxRQUFJcEYsUUFBUSxDQUFSQSxjQUF3QixnQkFBZXVFLEdBQTNDLElBQUl2RSxDQUFKLEVBQXFEO0FBQ25ELGFBQU93RCxPQUFPLENBQWQsT0FBT0EsRUFBUDtBQUdGNEI7O0FBQUFBLGlCQUFhLENBQWJBLFNBQXdCM0IsSUFBSSxHQUFHOEIsWUFBWSxDQUEzQ0gsR0FBMkMsQ0FBM0NBO0FBQ0E7QUFHRjs7QUFBQSxpQ0FBaUU7QUFDL0QsUUFBSTNCLElBQUksR0FBRzRCLFdBQVcsQ0FBWEEsSUFBWCxJQUFXQSxDQUFYOztBQUNBLGNBQVU7QUFDUjtBQUdGQTs7QUFBQUEsZUFBVyxDQUFYQSxVQUVHNUIsSUFBSSxHQUFHK0IsS0FBSyxDQUFMQSxJQUFLLENBQUxBLE1BQ0N2QixHQUFELElBQVM7QUFDYixVQUFJLENBQUNBLEdBQUcsQ0FBUixJQUFhO0FBQ1gsY0FBTSxVQUFXLDhCQUE2QjVFLElBQTlDLEVBQU0sQ0FBTjtBQUVGOztBQUFBLGFBQU80RSxHQUFHLENBQUhBLFlBQWlCd0IsSUFBRCxLQUFXO0FBQUVwRyxZQUFJLEVBQU47QUFBY3FHLGVBQU8sRUFBdkQ7QUFBa0MsT0FBWCxDQUFoQnpCLENBQVA7QUFMSXVCLGFBT0V0RyxHQUFELElBQVM7QUFDZCxZQUFNb0YsY0FBYyxDQUFwQixHQUFvQixDQUFwQjtBQVZOZSxLQUVVRyxDQUZWSDtBQWFBO0FBR0Y7O0FBQUEsU0FBTztBQUNMTSxrQkFBYyxRQUFnQjtBQUM1QixhQUFPQyxVQUFVLFFBQWpCLFdBQWlCLENBQWpCO0FBRkc7O0FBSUxDLGdCQUFZLGlCQUFpQjtBQUMzQnJDLGFBQU8sQ0FBUEEsc0JBQ1NzQyxFQUFELElBQVFBLEVBRGhCdEMsU0FHS3VDLE9BQUQsS0FBbUI7QUFDakJDLGlCQUFTLEVBQUdELE9BQU8sSUFBSUEsT0FBTyxDQUFuQixPQUFDQSxJQURLO0FBRWpCQSxlQUFPLEVBTGJ2QztBQUd1QixPQUFuQixDQUhKQSxFQU9LdEUsR0FBRCxLQUFVO0FBQUUrRyxhQUFLLEVBUHJCekM7QUFPYyxPQUFWLENBUEpBLE9BU1MwQyxLQUFELElBQTRCO0FBQ2hDLGNBQU1DLEdBQUcsR0FBR2hCLFdBQVcsQ0FBWEEsSUFBWixLQUFZQSxDQUFaO0FBQ0FBLG1CQUFXLENBQVhBO0FBQ0EsWUFBSWdCLEdBQUcsSUFBSSxhQUFYLEtBQTZCQSxHQUFHLENBQUhBO0FBWmpDM0M7QUFMRzs7QUFvQkw0QyxhQUFTLFFBQVE7QUFDZixhQUFPUixVQUFVLGdCQUFrQyxZQUFZO0FBQzdELFlBQUk7QUFDRixnQkFBTTtBQUFBO0FBQUE7QUFBQSxjQUFtQixNQUFNUyxnQkFBZ0IsY0FBL0MsS0FBK0MsQ0FBL0M7QUFDQSxnQkFBTSxhQUFhLE1BQU03QyxPQUFPLENBQVBBLElBQVksQ0FDbkMyQixXQUFXLENBQVhBLGtCQUVJM0IsT0FBTyxDQUFQQSxJQUFZa0IsT0FBTyxDQUFQQSxJQUhtQixrQkFHbkJBLENBQVpsQixDQUgrQixFQUluQ0EsT0FBTyxDQUFQQSxJQUFZcUIsR0FBRyxDQUFIQSxJQUpkLGVBSWNBLENBQVpyQixDQUptQyxDQUFaQSxDQUF6QjtBQU9BLGdCQUFNOEMsVUFBVSxHQUFHLE1BQU05QyxPQUFPLENBQVBBLEtBQWEsQ0FDcEMsb0JBRG9DLEtBQ3BDLENBRG9DLEVBRXBDaUIsV0FBVyxvQkFFVEgsY0FBYyxDQUNaLFVBQVcsbUNBQWtDVSxLQUxuRCxFQUtNLENBRFksQ0FGTCxDQUZ5QixDQUFieEIsQ0FBekI7QUFTQSxnQkFBTVMsR0FBcUIsR0FBRzFELE1BQU0sQ0FBTkEsT0FHNUI7QUFINEJBO0FBRzVCLFdBSDRCQSxFQUE5QixVQUE4QkEsQ0FBOUI7QUFJQSxpQkFBTyxxQ0FBUDtBQUNBLFNBdkJGLENBdUJFLFlBQVk7QUFDWixpQkFBTztBQUFFMEYsaUJBQUssRUFBZDtBQUFPLFdBQVA7QUFFSDtBQTNCRCxPQUFpQixDQUFqQjtBQXJCRzs7QUFrRExuRixZQUFRLFFBQVE7QUFDZDtBQUNBO0FBQ0E7O0FBQ0EsVUFBS3lGLEVBQUUsR0FBSUMsU0FBRCxDQUFWLFlBQTBDO0FBQ3hDO0FBQ0EsWUFBSUQsRUFBRSxDQUFGQSxZQUFlLFVBQVVBLEVBQUUsQ0FBL0IsYUFBbUIsQ0FBbkIsRUFBZ0QsT0FBTy9DLE9BQU8sQ0FBZCxPQUFPQSxFQUFQO0FBRWxEOztBQUFBLGFBQU8sZ0JBQWdCLGNBQWhCLEtBQWdCLENBQWhCLE1BQ0VpRCxNQUFELElBQ0pqRCxPQUFPLENBQVBBLElBQ0VPLFdBQVcsR0FDUDBDLE1BQU0sQ0FBTkEsWUFBb0JyQyxNQUFELElBQVlzQyxjQUFjLFNBRHRDLFFBQ3NDLENBQTdDRCxDQURPLEdBSFYsRUFFSGpELENBRkcsT0FRQyxNQUFNO0FBQ1YsMENBQW9CLE1BQU0sZUFBMUIsS0FBMEIsQ0FBMUI7QUFURyxnQkFZSDtBQUNBLFlBQU0sQ0FiVixDQUFPLENBQVA7QUExREo7O0FBQU8sR0FBUDs7O2VBNkVhbUQsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZWZjs7QUFDQTs7Ozs7QUFDQTs7QUFzSEE7OztBQXpIQTs7QUFtQkEsTUFBTUMsZUFBb0MsR0FBRztBQUMzQzNILFFBQU0sRUFEcUM7QUFDN0I7QUFDZDRILGdCQUFjLEVBRjZCOztBQUczQ0MsT0FBSyxLQUFpQjtBQUNwQixRQUFJLEtBQUosUUFBaUIsT0FBTzdELEVBQVA7O0FBQ2pCLGVBQW1DLEVBR3BDO0FBUkg7O0FBQTZDLENBQTdDLEMsQ0FXQTs7QUFDQSxNQUFNOEQsaUJBQWlCLEdBQUcsc0dBQTFCLGVBQTBCLENBQTFCO0FBWUEsTUFBTUMsWUFBWSxHQUFHLDBHQUFyQixvQkFBcUIsQ0FBckI7QUFRQSxNQUFNQyxnQkFBZ0IsR0FBRyxrREFBekIsZ0JBQXlCLENBQXpCLEMsQ0FTQTs7QUFDQTFHLE1BQU0sQ0FBTkEsMENBQWlEO0FBQy9DMkcsS0FBRyxHQUFHO0FBQ0osV0FBT0MsaUJBQVA7QUFGSjVHOztBQUFpRCxDQUFqREE7QUFNQXdHLGlCQUFpQixDQUFqQkEsUUFBMkJLLEtBQUQsSUFBVztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBN0csUUFBTSxDQUFOQSx1Q0FBOEM7QUFDNUMyRyxPQUFHLEdBQUc7QUFDSixZQUFNakksTUFBTSxHQUFHb0ksU0FBZjtBQUNBLGFBQU9wSSxNQUFNLENBQWIsS0FBYSxDQUFiO0FBSEpzQjs7QUFBOEMsR0FBOUNBO0FBTEZ3RztBQWFBLGdCQUFnQixDQUFoQixRQUEwQkssS0FBRCxJQUFXO0FBQ2xDO0FBQ0E7O0FBQUVSLGlCQUFELE9BQUNBLEdBQWlDLENBQUMsR0FBRCxTQUFvQjtBQUNyRCxVQUFNM0gsTUFBTSxHQUFHb0ksU0FBZjtBQUNBLFdBQU9wSSxNQUFNLENBQU5BLEtBQU0sQ0FBTkEsQ0FBYyxHQUFyQixJQUFPQSxDQUFQO0FBRkQsR0FBQzJIO0FBRko7QUFRQUksWUFBWSxDQUFaQSxRQUFzQjFILEtBQUQsSUFBVztBQUM5QnNILGlCQUFlLENBQWZBLE1BQXNCLE1BQU07QUFDMUJPLHNDQUF3QixDQUFDLEdBQUQsU0FBYTtBQUNuQyxZQUFNRyxVQUFVLEdBQUksS0FBSWhJLEtBQUssQ0FBTEEsdUJBQThCLEdBQUVBLEtBQUssQ0FBTEEsWUFBeEQ7QUFHQSxZQUFNaUksZ0JBQWdCLEdBQXRCOztBQUNBLFVBQUlBLGdCQUFnQixDQUFwQixVQUFvQixDQUFwQixFQUFrQztBQUNoQyxZQUFJO0FBQ0ZBLDBCQUFnQixDQUFoQkEsVUFBZ0IsQ0FBaEJBLENBQTZCLEdBQTdCQTtBQUNBLFNBRkYsQ0FFRSxZQUFZO0FBQ1puRyxpQkFBTyxDQUFQQSxNQUFlLHdDQUF1Q2tHLFVBQXREbEc7QUFDQUEsaUJBQU8sQ0FBUEEsTUFBZSxHQUFFbEMsR0FBRyxDQUFDc0ksT0FBUSxLQUFJdEksR0FBRyxDQUFDdUksS0FBckNyRztBQUVIO0FBQ0Y7QUFiRCtGO0FBREZQO0FBREZJOztBQW1CQSxxQkFBNkI7QUFDM0IsTUFBSSxDQUFDSixlQUFlLENBQXBCLFFBQTZCO0FBQzNCLFVBQU1ZLE9BQU8sR0FDWCxnQ0FERjtBQUdBLFVBQU0sVUFBTixPQUFNLENBQU47QUFFRjs7QUFBQSxTQUFPWixlQUFlLENBQXRCO0FBR0YsQyxDQUFBOzs7ZUFDZUEsZSxFQUVmOzs7O0FBR08scUJBQWlDO0FBQ3RDLFNBQU96RiwwQkFBaUJ1RyxlQUF4QixhQUFPdkcsQ0FBUDtBQUdGLEMsQ0FBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUNPLE1BQU13RyxZQUFZLEdBQUcsQ0FBQyxHQUFELFNBQWlDO0FBQzNEZixpQkFBZSxDQUFmQSxTQUF5QixJQUFJTyxTQUFKLFFBQVcsR0FBcENQLElBQXlCLENBQXpCQTtBQUNBQSxpQkFBZSxDQUFmQSx1QkFBd0MzRCxFQUFELElBQVFBLEVBQS9DMkQ7QUFDQUEsaUJBQWUsQ0FBZkE7QUFFQSxTQUFPQSxlQUFlLENBQXRCO0FBTEssRSxDQVFQOzs7OztBQUNPLDBDQUE4RDtBQUNuRSxRQUFNZ0IsT0FBTyxHQUFiO0FBQ0EsUUFBTUMsUUFBUSxHQUFkOztBQUVBLE9BQUssTUFBTCwrQkFBMEM7QUFDeEMsUUFBSSxPQUFPRCxPQUFPLENBQWQsUUFBYyxDQUFkLEtBQUosVUFBMkM7QUFDekNDLGNBQVEsQ0FBUkEsUUFBUSxDQUFSQSxHQUFxQnRILE1BQU0sQ0FBTkEsT0FDbkJ1SCxLQUFLLENBQUxBLFFBQWNGLE9BQU8sQ0FBckJFLFFBQXFCLENBQXJCQSxTQURtQnZILElBRW5CcUgsT0FBTyxDQUZUQyxRQUVTLENBRll0SCxDQUFyQnNILENBRHlDLENBSXZDOztBQUNGO0FBR0ZBOztBQUFBQSxZQUFRLENBQVJBLFFBQVEsQ0FBUkEsR0FBcUJELE9BQU8sQ0FBNUJDLFFBQTRCLENBQTVCQTtBQUdGLEdBaEJtRSxDQWdCbkU7OztBQUNBQSxVQUFRLENBQVJBLFNBQWtCVixpQkFBbEJVO0FBRUFaLGtCQUFnQixDQUFoQkEsUUFBMEJHLEtBQUQsSUFBVztBQUNsQ1MsWUFBUSxDQUFSQSxLQUFRLENBQVJBLEdBQWtCLENBQUMsR0FBRCxTQUFvQjtBQUNwQyxhQUFPRCxPQUFPLENBQVBBLEtBQU8sQ0FBUEEsQ0FBZSxHQUF0QixJQUFPQSxDQUFQO0FBREZDO0FBREZaO0FBTUE7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDektEOztBQUNBOztBQU1BLE1BQU1jLHVCQUF1QixHQUFHLGdDQUFoQzs7QUFFTyx5QkFBNEM7QUFBQTtBQUE1QztBQUE0QyxDQUE1QyxFQUdxRDtBQUMxRCxRQUFNQyxVQUFVLEdBQUdDLFFBQVEsSUFBSSxDQUEvQjtBQUVBLFFBQU1DLFNBQVMsR0FBRyxXQUFsQixNQUFrQixHQUFsQjtBQUNBLFFBQU0sd0JBQXdCLHFCQUE5QixLQUE4QixDQUE5QjtBQUVBLFFBQU1yRyxNQUFNLEdBQUcsd0JBQ1pDLEVBQUQsSUFBa0I7QUFDaEIsUUFBSW9HLFNBQVMsQ0FBYixTQUF1QjtBQUNyQkEsZUFBUyxDQUFUQTtBQUNBQSxlQUFTLENBQVRBO0FBR0Y7O0FBQUEsUUFBSUYsVUFBVSxJQUFkLFNBQTJCOztBQUUzQixRQUFJbEcsRUFBRSxJQUFJQSxFQUFFLENBQVosU0FBc0I7QUFDcEJvRyxlQUFTLENBQVRBLFVBQW9CQyxPQUFPLEtBRXhCbEcsU0FBRCxJQUFlQSxTQUFTLElBQUltRyxVQUFVLENBRmIsU0FFYSxDQUZiLEVBR3pCO0FBSEZGO0FBR0UsT0FIeUIsQ0FBM0JBO0FBTUg7QUFoQlksS0FpQmIseUJBakJGLE9BaUJFLENBakJhLENBQWY7QUFvQkEsd0JBQVUsTUFBTTtBQUNkLFFBQUksQ0FBSix5QkFBOEI7QUFDNUIsVUFBSSxDQUFKLFNBQWMsa0NBQW9CLE1BQU1FLFVBQVUsQ0FBcEMsSUFBb0MsQ0FBcEM7QUFFakI7QUFKRCxLQUlHLENBSkgsT0FJRyxDQUpIO0FBTUEsU0FBTyxTQUFQLE9BQU8sQ0FBUDtBQUdGOztBQUFBLDZDQUlFO0FBQ0EsUUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQTZCQyxjQUFjLENBQWpELE9BQWlELENBQWpEO0FBQ0FDLFVBQVEsQ0FBUkE7QUFFQUMsVUFBUSxDQUFSQTtBQUNBLFNBQU8scUJBQXFCO0FBQzFCQSxZQUFRLENBQVJBLG1CQUQwQixDQUcxQjs7QUFDQSxRQUFJRCxRQUFRLENBQVJBLFNBQUosR0FBeUI7QUFDdkJDLGNBQVEsQ0FBUkE7QUFDQUMsZUFBUyxDQUFUQTtBQUVIO0FBUkQ7QUFXRjs7QUFBQSxNQUFNQSxTQUFTLEdBQUcsSUFBbEIsR0FBa0IsRUFBbEI7O0FBUUEsaUNBQThEO0FBQzVELFFBQU1DLEVBQUUsR0FBR3JKLE9BQU8sQ0FBUEEsY0FBWDtBQUNBLE1BQUl5SSxRQUFRLEdBQUdXLFNBQVMsQ0FBVEEsSUFBZixFQUFlQSxDQUFmOztBQUNBLGdCQUFjO0FBQ1o7QUFHRjs7QUFBQSxRQUFNRixRQUFRLEdBQUcsSUFBakIsR0FBaUIsRUFBakI7QUFDQSxRQUFNQyxRQUFRLEdBQUcseUJBQTBCRyxPQUFELElBQWE7QUFDckRBLFdBQU8sQ0FBUEEsUUFBaUJwRixLQUFELElBQVc7QUFDekIsWUFBTXFGLFFBQVEsR0FBR0wsUUFBUSxDQUFSQSxJQUFhaEYsS0FBSyxDQUFuQyxNQUFpQmdGLENBQWpCO0FBQ0EsWUFBTXJHLFNBQVMsR0FBR3FCLEtBQUssQ0FBTEEsa0JBQXdCQSxLQUFLLENBQUxBLG9CQUExQzs7QUFDQSxVQUFJcUYsUUFBUSxJQUFaLFdBQTJCO0FBQ3pCQSxnQkFBUSxDQUFSQSxTQUFRLENBQVJBO0FBRUg7QUFOREQ7QUFEZSxLQUFqQixPQUFpQixDQUFqQjtBQVVBRixXQUFTLENBQVRBLFFBRUdYLFFBQVEsR0FBRztBQUFBO0FBQUE7QUFGZFc7QUFFYyxHQUZkQTtBQVFBO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RHRDs7QUFFQTs7QUFXZSx1Q0FLK0I7QUFDNUMsb0NBQXVDO0FBQ3JDLHdCQUFPO0FBQW1CLFlBQU0sRUFBRSxZQUEzQixTQUEyQjtBQUEzQixPQUFQLEtBQU8sRUFBUDtBQUdGOztBQUFBLG1CQUFpQixDQUFqQixrQkFBb0NJLGlCQUFpQixDQUFDQyxlQUF0RCxDQUNBO0FBREE7QUFFRUMsbUJBQUQsb0JBQUNBLEdBQWlERixpQkFBRCxDQUFqRCxtQkFBQ0U7O0FBQ0YsWUFBMkM7QUFDekMsVUFBTUMsSUFBSSxHQUNSSCxpQkFBaUIsQ0FBakJBLGVBQWlDQSxpQkFBaUIsQ0FBbERBLFFBREY7QUFFQUUscUJBQWlCLENBQWpCQSxjQUFpQyxjQUFhQyxJQUE5Q0Q7QUFHRjs7QUFBQTtBQUNELEM7Ozs7Ozs7Ozs7OztBQ2pDWTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw4Q0FBOEM7QUFDdkU7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG9EQUFvRDtBQUM3RTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLHlCQUF5QiwwQ0FBMEM7QUFDbkU7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qix5QkFBeUIsMkNBQTJDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsc0NBQXNDO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDRDQUE0QztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQTBDO0FBQy9EO0FBQ0EsaUJBQWlCLG1DQUFtQztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsY0FBYztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsY0FBYztBQUMzQztBQUNBLG9FQUFvRSxVQUFVLEVBQUU7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsdUJBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGtCQUFrQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGNBQWM7QUFDM0Msb0VBQW9FLFVBQVUsRUFBRTtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsY0FBYztBQUNyQztBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxpREFBaUQsRUFBRTtBQUM5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsY0FBYztBQUMzQyx3T0FBd08sVUFBVSxFQUFFO0FBQ3BQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHNCQUFzQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDZEQUE2RDtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyWk8sZ0RBTUw7QUFDQSxxQkFEQSxDQUVBOztBQUNBLFFBQU1FLGFBQWEsR0FBRzFILFFBQVEsQ0FBUkEsTUFBdEIsR0FBc0JBLENBQXRCO0FBRUMsR0FBQzJILE9BQU8sSUFBUixTQUFzQmxJLE1BQUQsSUFBWTtBQUNoQyxRQUFJaUksYUFBYSxDQUFiQSxDQUFhLENBQWJBLG1CQUFtQ2pJLE1BQU0sQ0FBN0MsV0FBdUNBLEVBQXZDLEVBQTZEO0FBQzNEbUksb0JBQWMsR0FBZEE7QUFDQUYsbUJBQWEsQ0FBYkE7QUFDQTFILGNBQVEsR0FBRzBILGFBQWEsQ0FBYkEsYUFBWDFIO0FBQ0E7QUFFRjs7QUFBQTtBQVBEO0FBVUQsU0FBTztBQUFBO0FBQVA7QUFBTyxHQUFQO0FBSUQsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTs7QUFVZSxnQkFBNkI7QUFDMUMsUUFBTTZILEdBQStCLEdBQUc1SSxNQUFNLENBQU5BLE9BQXhDLElBQXdDQSxDQUF4QztBQUVBLFNBQU87QUFDTDZJLE1BQUUsZ0JBQWlDO0FBQ2pDO0FBQUMsT0FBQ0QsR0FBRyxDQUFIQSxJQUFHLENBQUhBLEtBQWNBLEdBQUcsQ0FBSEEsSUFBRyxDQUFIQSxHQUFmLEVBQUNBLENBQUQ7QUFGRTs7QUFLTEUsT0FBRyxnQkFBaUM7QUFDbEMsVUFBSUYsR0FBRyxDQUFQLElBQU8sQ0FBUCxFQUFlO0FBQ2JBLFdBQUcsQ0FBSEEsSUFBRyxDQUFIQSxRQUFpQkEsR0FBRyxDQUFIQSxJQUFHLENBQUhBLHNCQUFqQkE7QUFFSDtBQVRJOztBQVdMRyxRQUFJLE9BQWUsR0FBZixNQUErQjtBQUNqQztBQUNBO0FBQUMsT0FBQ0gsR0FBRyxDQUFIQSxJQUFHLENBQUhBLElBQUQsZ0JBQStCSSxPQUFELElBQXNCO0FBQ25EQSxlQUFPLENBQUMsR0FBUkEsSUFBTyxDQUFQQTtBQUREO0FBYkw7O0FBQU8sR0FBUDtBQWtCRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENEOztBQUtBOztBQUtBOztBQUNBOztBQUNBOztBQUNBOztBQVNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFqQ0E7QUFBQTtBQUNBOzs7QUFtREEsTUFBTUMsUUFBUSxHQUFJN0csVUFBbEI7O0FBRUEsa0NBQWtDO0FBQ2hDLFNBQU9wQyxNQUFNLENBQU5BLE9BQWMsVUFBZEEsaUJBQWMsQ0FBZEEsRUFBNEM7QUFDakRrSixhQUFTLEVBRFg7QUFBbUQsR0FBNUNsSixDQUFQO0FBS0Y7O0FBQUEscUNBQXNEO0FBQ3BELFNBQU9tSixNQUFNLElBQUlqSCxJQUFJLENBQUpBLFdBQVZpSCxHQUFVakgsQ0FBVmlILEdBQ0hqSCxJQUFJLEtBQUpBLE1BQ0Usd0RBREZBLE1BQ0UsQ0FERkEsR0FFRyxHQUFFaUgsTUFBTyxHQUFFakgsSUFIWGlILEtBQVA7QUFPSzs7QUFBQSxnREFJTDtBQUNBLE1BQUkvRyxLQUFKLEVBQXFDLEVBUXJDOztBQUFBO0FBR0s7O0FBQUEsaUNBQWtEO0FBQ3ZELE1BQUlBLEtBQUosRUFBcUMsRUFNckM7O0FBQUE7QUFHSzs7QUFBQSwyQkFBNEM7QUFDakQsU0FBT0YsSUFBSSxLQUFKQSxZQUFxQkEsSUFBSSxDQUFKQSxXQUFnQitHLFFBQVEsR0FBcEQsR0FBNEIvRyxDQUE1QjtBQUdLOztBQUFBLDJCQUEyQztBQUNoRDtBQUNBLFNBQU9rSCxhQUFhLE9BQXBCLFFBQW9CLENBQXBCO0FBR0s7O0FBQUEsMkJBQTJDO0FBQ2hELFNBQU9sSCxJQUFJLENBQUpBLE1BQVcrRyxRQUFRLENBQW5CL0csV0FBUDtBQUdGO0FBQUE7QUFDQTtBQUNBOzs7QUFDTyx5QkFBMEM7QUFDL0MsTUFBSW1ILEdBQUcsQ0FBSEEsV0FBSixHQUFJQSxDQUFKLEVBQXlCOztBQUN6QixNQUFJO0FBQ0Y7QUFDQSxVQUFNQyxjQUFjLEdBQUcsV0FBdkIsaUJBQXVCLEdBQXZCO0FBQ0EsVUFBTUMsUUFBUSxHQUFHLGFBQWpCLGNBQWlCLENBQWpCO0FBQ0EsV0FBT0EsUUFBUSxDQUFSQSw2QkFBc0NDLFdBQVcsQ0FBQ0QsUUFBUSxDQUFqRSxRQUF3RCxDQUF4RDtBQUNBLEdBTEYsQ0FLRSxVQUFVO0FBQ1Y7QUFFSDtBQUlNOztBQUFBLGlEQUlMO0FBQ0EsTUFBSUUsaUJBQWlCLEdBQXJCO0FBRUEsUUFBTUMsWUFBWSxHQUFHLCtCQUFyQixLQUFxQixDQUFyQjtBQUNBLFFBQU1DLGFBQWEsR0FBR0QsWUFBWSxDQUFsQztBQUNBLFFBQU1FLGNBQWMsR0FDbEI7QUFDQSxHQUFDQyxVQUFVLEtBQVZBLFFBQXVCLGlEQUF2QkEsVUFBdUIsQ0FBdkJBLEdBQUQsT0FDQTtBQUNBO0FBSkY7QUFPQUosbUJBQWlCLEdBQWpCQTtBQUNBLFFBQU1LLE1BQU0sR0FBRzlKLE1BQU0sQ0FBTkEsS0FBZixhQUFlQSxDQUFmOztBQUVBLE1BQ0UsQ0FBQzhKLE1BQU0sQ0FBTkEsTUFBY0MsS0FBRCxJQUFXO0FBQ3ZCLFFBQUl4RyxLQUFLLEdBQUdxRyxjQUFjLENBQWRBLEtBQWMsQ0FBZEEsSUFBWjtBQUNBLFVBQU07QUFBQTtBQUFBO0FBQUEsUUFBdUJELGFBQWEsQ0FBMUMsS0FBMEMsQ0FBMUMsQ0FGdUIsQ0FJdkI7QUFDQTs7QUFDQSxRQUFJSyxRQUFRLEdBQUksSUFBR0MsTUFBTSxXQUFXLEVBQUcsR0FBRUYsS0FBekM7O0FBQ0Esa0JBQWM7QUFDWkMsY0FBUSxHQUFJLEdBQUUsZUFBZSxFQUFHLElBQUdBLFFBQW5DQTtBQUVGOztBQUFBLFFBQUlDLE1BQU0sSUFBSSxDQUFDMUMsS0FBSyxDQUFMQSxRQUFmLEtBQWVBLENBQWYsRUFBcUNoRSxLQUFLLEdBQUcsQ0FBUkEsS0FBUSxDQUFSQTtBQUVyQyxXQUNFLENBQUMyRyxRQUFRLElBQUlILEtBQUssSUFBbEIscUJBQ0E7QUFDQ04scUJBQWlCLEdBQ2hCQSxpQkFBaUIsQ0FBakJBLGtCQUVFUSxNQUFNLEdBQ0QxRyxLQUFELElBQUNBLENBQXVCNEcsc0JBQXhCLE9BQUM1RyxFQUFELElBQUNBLENBREMsR0FDREEsQ0FEQyxHQUVGLG1DQUpOa0csS0FJTSxDQUpOQSxLQUpKLEdBQ0UsQ0FERjtBQWJKLEdBQ0dLLENBREgsRUF5QkU7QUFDQUwscUJBQWlCLEdBQWpCQSxHQURBLENBQ3VCO0FBRXZCO0FBQ0E7QUFFRjs7QUFBQSxTQUFPO0FBQUE7QUFFTFcsVUFBTSxFQUZSO0FBQU8sR0FBUDtBQU1GOztBQUFBLDJDQUFxRTtBQUNuRSxRQUFNQyxhQUE2QixHQUFuQztBQUVBckssUUFBTSxDQUFOQSxvQkFBNEJMLEdBQUQsSUFBUztBQUNsQyxRQUFJLENBQUNtSyxNQUFNLENBQU5BLFNBQUwsR0FBS0EsQ0FBTCxFQUEyQjtBQUN6Qk8sbUJBQWEsQ0FBYkEsR0FBYSxDQUFiQSxHQUFxQkMsS0FBSyxDQUExQkQsR0FBMEIsQ0FBMUJBO0FBRUg7QUFKRHJLO0FBS0E7QUFHRjtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxtREFJRztBQUNSO0FBQ0EsUUFBTXVLLElBQUksR0FBRyxxQkFBYixVQUFhLENBQWI7QUFDQSxRQUFNQyxXQUFXLEdBQ2Ysa0NBQWtDLGlDQURwQyxJQUNvQyxDQURwQyxDQUhRLENBS1I7O0FBQ0EsTUFBSSxDQUFDQyxVQUFVLENBQWYsV0FBZSxDQUFmLEVBQThCO0FBQzVCLFdBQVFDLFNBQVMsR0FBRyxDQUFILFdBQUcsQ0FBSCxHQUFqQjtBQUVGOztBQUFBLE1BQUk7QUFDRixVQUFNQyxRQUFRLEdBQUcscUJBQWpCLElBQWlCLENBQWpCO0FBQ0FBLFlBQVEsQ0FBUkEsV0FBb0Isd0RBQTJCQSxRQUFRLENBQXZEQSxRQUFvQixDQUFwQkE7QUFDQSxRQUFJQyxjQUFjLEdBQWxCOztBQUVBLFFBQ0UsK0JBQWVELFFBQVEsQ0FBdkIsYUFDQUEsUUFBUSxDQURSLGdCQURGLFdBSUU7QUFDQSxZQUFNTCxLQUFLLEdBQUcseUNBQXVCSyxRQUFRLENBQTdDLFlBQWMsQ0FBZDtBQUVBLFlBQU07QUFBQTtBQUFBO0FBQUEsVUFBcUJFLGFBQWEsQ0FDdENGLFFBQVEsQ0FEOEIsVUFFdENBLFFBQVEsQ0FGOEIsVUFBeEMsS0FBd0MsQ0FBeEM7O0FBTUEsa0JBQVk7QUFDVkMsc0JBQWMsR0FBRyxpQ0FBcUI7QUFDcEM3SixrQkFBUSxFQUQ0QjtBQUVwQytKLGNBQUksRUFBRUgsUUFBUSxDQUZzQjtBQUdwQ0wsZUFBSyxFQUFFUyxrQkFBa0IsUUFIM0JILE1BRzJCO0FBSFcsU0FBckIsQ0FBakJBO0FBTUg7QUFFRCxLQTNCRSxDQTJCRjs7O0FBQ0EsVUFBTUksWUFBWSxHQUNoQkwsUUFBUSxDQUFSQSxXQUFvQkosSUFBSSxDQUF4QkksU0FDSUEsUUFBUSxDQUFSQSxXQUFvQkEsUUFBUSxDQUFSQSxPQUR4QkEsTUFDSUEsQ0FESkEsR0FFSUEsUUFBUSxDQUhkO0FBS0EsV0FBUUQsU0FBUyxHQUNiLGVBQWVFLGNBQWMsSUFEaEIsWUFDYixDQURhLEdBQWpCO0FBR0EsR0FwQ0YsQ0FvQ0UsVUFBVTtBQUNWLFdBQVFGLFNBQVMsR0FBRyxDQUFILFdBQUcsQ0FBSCxHQUFqQjtBQUVIO0FBRUQ7O0FBQUEsdUNBQTZEO0FBQzNEO0FBQ0E7QUFDQSxTQUFPO0FBQ0xyQixPQUFHLEVBQUU0QixXQUFXLENBQUNDLFdBQVcsQ0FBQ3hNLE1BQU0sQ0FBUCxVQUR2QixHQUN1QixDQUFaLENBRFg7QUFFTFcsTUFBRSxFQUFFQSxFQUFFLEdBQUc0TCxXQUFXLENBQUNDLFdBQVcsQ0FBQ3hNLE1BQU0sQ0FBUCxVQUExQixFQUEwQixDQUFaLENBQWQsR0FGUjtBQUFPLEdBQVA7QUE4REY7O0FBQUEsTUFBTXlNLHVCQUF1QixHQUMzQi9JLFVBRUEsS0FIRjtBQUtBLE1BQU1nSix3QkFBd0IsR0FBOUI7O0FBRUEsbUNBQWlFO0FBQy9ELFNBQU8sS0FBSyxNQUFNO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTVOLGVBQVcsRUFaTjtBQUFXLEdBQU4sQ0FBTCxNQWFFa0csR0FBRCxJQUFTO0FBQ2YsUUFBSSxDQUFDQSxHQUFHLENBQVIsSUFBYTtBQUNYLFVBQUkySCxRQUFRLEdBQVJBLEtBQWdCM0gsR0FBRyxDQUFIQSxVQUFwQixLQUF1QztBQUNyQyxlQUFPNEgsVUFBVSxNQUFNRCxRQUFRLEdBQS9CLENBQWlCLENBQWpCO0FBRUY7O0FBQUEsVUFBSTNILEdBQUcsQ0FBSEEsV0FBSixLQUF3QjtBQUN0QjtBQUNBO0FBQ0EsY0FBTSxVQUFOLHdCQUFNLENBQU47QUFFRjs7QUFBQSxZQUFNLFVBQU4sNkJBQU0sQ0FBTjtBQUVGOztBQUFBLFdBQU9BLEdBQUcsQ0FBVixJQUFPQSxFQUFQO0FBekJGLEdBQU8sQ0FBUDtBQTZCRjs7QUFBQSxpREFBa0U7QUFDaEUsU0FBTyxVQUFVLFdBQVc2SCxjQUFjLE9BQW5DLENBQVUsQ0FBVixPQUFvRDVNLEdBQUQsSUFBZ0I7QUFDeEU7QUFDQTtBQUNBO0FBRUEsUUFBSSxDQUFKLGdCQUFxQjtBQUNuQjtBQUVGOztBQUFBO0FBUkYsR0FBTyxDQUFQO0FBWWE7O0FBQUEsTUFBTWlJLE1BQU4sQ0FBbUM7QUFPaEQ7QUFDRjtBQVJrRDtBQVdoRDtBQWtCQTRFLGFBQVcseUJBSVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpTO0FBSVQsR0FKUyxFQTZCVDtBQUFBLFNBekRGL0csS0F5REU7QUFBQSxTQXhERjFELFFBd0RFO0FBQUEsU0F2REZ1SixLQXVERTtBQUFBLFNBdERGbUIsTUFzREU7QUFBQSxTQXJERnhDLFFBcURFO0FBQUEsU0FoREZ5QyxVQWdERTtBQUFBLFNBOUNGQyxHQThDRSxHQTlDa0MsRUE4Q2xDO0FBQUEsU0E3Q0ZDLEdBNkNFO0FBQUEsU0E1Q0ZDLEdBNENFO0FBQUEsU0EzQ0ZDLFVBMkNFO0FBQUEsU0ExQ0ZDLElBMENFO0FBQUEsU0F6Q0ZDLE1BeUNFO0FBQUEsU0F4Q0ZDLFFBd0NFO0FBQUEsU0F2Q0ZDLEtBdUNFO0FBQUEsU0F0Q0ZDLFVBc0NFO0FBQUEsU0FyQ0ZDLGNBcUNFO0FBQUEsU0FwQ0ZDLFFBb0NFO0FBQUEsU0FuQ0Y3TCxNQW1DRTtBQUFBLFNBbENGa0ksT0FrQ0U7QUFBQSxTQWpDRjRELGFBaUNFOztBQUFBLHNCQXNHWXJOLENBQUQsSUFBNEI7QUFDdkMsWUFBTXNOLEtBQUssR0FBR3ROLENBQUMsQ0FBZjs7QUFFQSxVQUFJLENBQUosT0FBWTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFBQTtBQUFBO0FBQUEsWUFBTjtBQUNBLHlDQUVFLGlDQUFxQjtBQUFFOEIsa0JBQVEsRUFBRWtLLFdBQVcsQ0FBdkIsUUFBdUIsQ0FBdkI7QUFGdkI7QUFFdUIsU0FBckIsQ0FGRixFQUdFLFdBSEYsTUFHRSxHQUhGO0FBS0E7QUFHRjs7QUFBQSxVQUFJLENBQUNzQixLQUFLLENBQVYsS0FBZ0I7QUFDZDtBQUdGOztBQUFBLFlBQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFOO0FBRUEsWUFBTTtBQUFBO0FBQUEsVUFBZSx3Q0FBckIsR0FBcUIsQ0FBckIsQ0E1QnVDLENBOEJ2QztBQUNBOztBQUNBLFVBQUksY0FBY2xOLEVBQUUsS0FBSyxLQUFyQixVQUFvQzBCLFFBQVEsS0FBSyxLQUFyRCxVQUFvRTtBQUNsRTtBQUdGLE9BcEN1QyxDQW9DdkM7QUFDQTs7O0FBQ0EsVUFBSSxhQUFhLENBQUMsVUFBbEIsS0FBa0IsQ0FBbEIsRUFBb0M7QUFDbEM7QUFHRjs7QUFBQSwyQ0FJRWYsTUFBTSxDQUFOQSxvQkFBMkI7QUFDekJLLGVBQU8sRUFBRXhCLE9BQU8sQ0FBUEEsV0FBbUIsS0FESDtBQUV6QjJCLGNBQU0sRUFBRTNCLE9BQU8sQ0FBUEEsVUFBa0IsS0FOOUI7QUFJNkIsT0FBM0JtQixDQUpGO0FBaEpBLE9BQ0E7OztBQUNBLGlCQUFhLHFEQUFiLFNBQWEsQ0FBYixDQUZBLENBSUE7O0FBQ0EseUJBTEEsQ0FNQTtBQUNBO0FBQ0E7O0FBQ0EsUUFBSWUsU0FBUSxLQUFaLFdBQTRCO0FBQzFCLHNCQUFnQixLQUFoQixTQUE4QjtBQUFBO0FBRTVCeUwsZUFBTyxFQUZxQjtBQUc1QnZNLGFBQUssRUFIdUI7QUFBQTtBQUs1QndNLGVBQU8sRUFBRUMsWUFBWSxJQUFJQSxZQUFZLENBTFQ7QUFNNUJDLGVBQU8sRUFBRUQsWUFBWSxJQUFJQSxZQUFZLENBTnZDO0FBQThCLE9BQTlCO0FBVUY7O0FBQUEsK0JBQTJCO0FBQ3pCRSxlQUFTLEVBRGdCO0FBRXpCOUgsaUJBQVcsRUFBRTtBQUZmO0FBRWU7QUFGWSxLQUEzQixDQXBCQSxDQTJCQTtBQUNBOztBQUNBLGtCQUFjOEIsTUFBTSxDQUFwQjtBQUVBO0FBQ0E7QUFDQSx3QkFqQ0EsQ0FrQ0E7QUFDQTs7QUFDQSxrQkFDRTtBQUNBLGlEQUE0QmlHLGFBQWEsQ0FBekMseUJBRkY7QUFHQTtBQUNBO0FBQ0E7QUFDQSw0QkExQ0EsQ0EyQ0E7QUFDQTs7QUFDQTtBQUVBOztBQUVBLFFBQUl6SyxLQUFKLEVBQXFDLEVBTXJDOztBQUFBLGVBQW1DLEVBNkNwQztBQXVERDBLOztBQUFBQSxRQUFNLEdBQVM7QUFDYnROLFVBQU0sQ0FBTkE7QUFHRjtBQUFBO0FBQ0Y7QUFDQTs7O0FBQ0V1TixNQUFJLEdBQUc7QUFDTHZOLFVBQU0sQ0FBTkE7QUFHRjtBQUFBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0V3TixNQUFJLE1BQVczTixFQUFPLEdBQWxCLEtBQTBCUixPQUEwQixHQUFwRCxJQUEyRDtBQUM3RDtBQUFDLEtBQUM7QUFBQTtBQUFBO0FBQUEsUUFBY29PLFlBQVksWUFBM0IsRUFBMkIsQ0FBM0I7QUFDRCxXQUFPLGtDQUFQLE9BQU8sQ0FBUDtBQUdGO0FBQUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDRTNOLFNBQU8sTUFBV0QsRUFBTyxHQUFsQixLQUEwQlIsT0FBMEIsR0FBcEQsSUFBMkQ7QUFDaEU7QUFBQyxLQUFDO0FBQUE7QUFBQTtBQUFBLFFBQWNvTyxZQUFZLFlBQTNCLEVBQTJCLENBQTNCO0FBQ0QsV0FBTyxxQ0FBUCxPQUFPLENBQVA7QUFHRjs7QUFBQSx5Q0FLb0I7QUFDbEIsUUFBSSxDQUFDeEMsVUFBVSxDQUFmLEdBQWUsQ0FBZixFQUFzQjtBQUNwQmpMLFlBQU0sQ0FBTkE7QUFDQTtBQUVGOztBQUFBLFFBQUkwTixZQUFZLEdBQUdyTyxPQUFPLENBQVBBLFdBQW1CLEtBQXRDOztBQUVBLFFBQUl1RCxLQUFKLEVBQXFDLHNCQTRCckM7O0FBQUEsUUFBSSxDQUFFdkQsT0FBRCxDQUFMLElBQTBCO0FBQ3hCO0FBRUYsS0F0Q2tCLENBc0NsQjs7O0FBQ0EsUUFBSXNPLE9BQUosSUFBUTtBQUNOQyxpQkFBVyxDQUFYQTtBQUdGOztBQUFBLFVBQU07QUFBRS9NLGFBQU8sR0FBVDtBQUFBLFFBQU47QUFDQSxVQUFNZ04sVUFBVSxHQUFHO0FBQW5CO0FBQW1CLEtBQW5COztBQUVBLFFBQUksS0FBSixnQkFBeUI7QUFDdkIsOEJBQXdCLEtBQXhCO0FBR0ZoTzs7QUFBQUEsTUFBRSxHQUFHNEwsV0FBVyxDQUNkcUMsU0FBUyxDQUNQOUQsV0FBVyxDQUFYQSxFQUFXLENBQVhBLEdBQWtCK0QsV0FBVyxDQUE3Qi9ELEVBQTZCLENBQTdCQSxHQURPLElBRVAzSyxPQUFPLENBRkEsUUFHUCxLQUpKUSxhQUNXLENBREssQ0FBaEJBO0FBT0EsVUFBTW1PLFNBQVMsR0FBR0MsU0FBUyxDQUN6QmpFLFdBQVcsQ0FBWEEsRUFBVyxDQUFYQSxHQUFrQitELFdBQVcsQ0FBN0IvRCxFQUE2QixDQUE3QkEsR0FEeUIsSUFFekIsS0FGRixNQUEyQixDQUEzQjtBQUlBLDZCQTdEa0IsQ0ErRGxCO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0EsUUFBSSxDQUFFM0ssT0FBRCxDQUFELE1BQXdCLHFCQUE1QixTQUE0QixDQUE1QixFQUE2RDtBQUMzRDtBQUNBK0gsWUFBTSxDQUFOQSwrQ0FGMkQsQ0FHM0Q7O0FBQ0E7QUFDQTtBQUNBLGtCQUFZLGdCQUFnQixLQUE1QixLQUFZLENBQVo7QUFDQUEsWUFBTSxDQUFOQTtBQUNBO0FBR0Y7O0FBQUEsUUFBSThHLE1BQU0sR0FBRyx3Q0FBYixHQUFhLENBQWI7QUFDQSxRQUFJO0FBQUE7QUFBQTtBQUFBLFFBQUosT0FqRmtCLENBbUZsQjtBQUNBO0FBQ0E7O0FBQ0E7O0FBQ0EsUUFBSTtBQUNGQyxXQUFLLEdBQUcsTUFBTSxnQkFBZEEsV0FBYyxFQUFkQTtBQUNDLE9BQUM7QUFBRUMsa0JBQVUsRUFBWjtBQUFBLFVBQTJCLE1BQU0saUJBQWxDLHNCQUFrQyxHQUFsQztBQUNELEtBSEYsQ0FHRSxZQUFZO0FBQ1o7QUFDQTtBQUNBcE8sWUFBTSxDQUFOQTtBQUNBO0FBR0ZrTzs7QUFBQUEsVUFBTSxHQUFHLDBCQUFUQSxLQUFTLENBQVRBOztBQUVBLFFBQUlBLE1BQU0sQ0FBTkEsYUFBSixVQUFrQztBQUNoQzNNLGNBQVEsR0FBRzJNLE1BQU0sQ0FBakIzTTtBQUNBc0ksU0FBRyxHQUFHLGlDQUFOQSxNQUFNLENBQU5BO0FBR0YsS0F4R2tCLENBd0dsQjtBQUNBO0FBQ0E7OztBQUNBdEksWUFBUSxHQUFHQSxRQUFRLEdBQ2YscURBQXdCd00sV0FBVyxDQURwQixRQUNvQixDQUFuQyxDQURlLEdBQW5CeE0sU0EzR2tCLENBK0dsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFFBQUksQ0FBQyxjQUFELFNBQUMsQ0FBRCxJQUE2QixDQUFqQyxjQUFnRDtBQUM5QzhNLFlBQU0sR0FBTkE7QUFHRjs7QUFBQSxRQUFJcEosS0FBSyxHQUFHLHFEQUFaLFFBQVksQ0FBWixDQXhIa0IsQ0EwSGxCO0FBQ0E7O0FBQ0EsUUFBSXpELFVBQVUsR0FBZDs7QUFFQSxRQUFJb0IsSUFBSixFQUFxQztBQUNuQ3BCLGdCQUFVLEdBQUcsOEJBQ1hpSyxXQUFXLENBQ1RxQyxTQUFTLENBQUNDLFdBQVcsQ0FBQyw0Q0FBYixRQUFZLENBQVosRUFBNkMsS0FGN0MsTUFFQSxDQURBLENBREEsMEJBT1Z6TSxDQUFELElBQWUsa0JBQWtCO0FBQUVDLGdCQUFRLEVBQTVCO0FBQWtCLE9BQWxCLFNBUEosVUFRWCxLQVJGQyxPQUFhLENBQWJBOztBQVdBLFVBQUlBLFVBQVUsS0FBZCxJQUF1QjtBQUNyQixjQUFNOE0sYUFBYSxHQUFHLHFEQUNwQixrQkFDRTlOLE1BQU0sQ0FBTkEsbUJBQTBCO0FBQ3hCZSxrQkFBUSxFQUFFLDhDQUNSeUksV0FBVyxDQUFYQSxVQUFXLENBQVhBLEdBQTBCK0QsV0FBVyxDQUFyQy9ELFVBQXFDLENBQXJDQSxHQURRLFlBRVIsS0FGUSxTQUZkO0FBQzRCLFNBQTFCeEosQ0FERixnQkFERixRQUFzQixDQUF0QixDQURxQixDQWNyQjtBQUNBOztBQUNBLFlBQUkyTixLQUFLLENBQUxBLFNBQUosYUFBSUEsQ0FBSixFQUFtQztBQUNqQ2xKLGVBQUssR0FBTEE7QUFDQTFELGtCQUFRLEdBQVJBO0FBQ0EyTSxnQkFBTSxDQUFOQTtBQUNBckUsYUFBRyxHQUFHLGlDQUFOQSxNQUFNLENBQU5BO0FBRUg7QUFDRjtBQUNEckk7O0FBQUFBLGNBQVUsR0FBR3lNLFNBQVMsQ0FBQ0YsV0FBVyxDQUFaLFVBQVksQ0FBWixFQUEwQixLQUFoRHZNLE1BQXNCLENBQXRCQTs7QUFFQSxRQUFJLCtCQUFKLEtBQUksQ0FBSixFQUEyQjtBQUN6QixZQUFNK00sUUFBUSxHQUFHLHdDQUFqQixVQUFpQixDQUFqQjtBQUNBLFlBQU1sRSxVQUFVLEdBQUdrRSxRQUFRLENBQTNCO0FBRUEsWUFBTUMsVUFBVSxHQUFHLCtCQUFuQixLQUFtQixDQUFuQjtBQUNBLFlBQU1DLFVBQVUsR0FBRywrQ0FBbkIsVUFBbUIsQ0FBbkI7QUFDQSxZQUFNQyxpQkFBaUIsR0FBR3pKLEtBQUssS0FBL0I7QUFDQSxZQUFNbUcsY0FBYyxHQUFHc0QsaUJBQWlCLEdBQ3BDckQsYUFBYSxvQkFEdUIsS0FDdkIsQ0FEdUIsR0FBeEM7O0FBSUEsVUFBSSxlQUFnQnFELGlCQUFpQixJQUFJLENBQUN0RCxjQUFjLENBQXhELFFBQWtFO0FBQ2hFLGNBQU11RCxhQUFhLEdBQUduTyxNQUFNLENBQU5BLEtBQVlnTyxVQUFVLENBQXRCaE8sZUFDbkIrSixLQUFELElBQVcsQ0FBQ08sS0FBSyxDQURuQixLQUNtQixDQURHdEssQ0FBdEI7O0FBSUEsWUFBSW1PLGFBQWEsQ0FBYkEsU0FBSixHQUE4QjtBQUM1QixvQkFBMkM7QUFDekN0TixtQkFBTyxDQUFQQSxLQUNHLEdBQ0NxTixpQkFBaUIsMEJBRVosaUNBSFAsOEJBQUMsR0FLRSxlQUFjQyxhQUFhLENBQWJBLFVBTm5CdE47QUFZRjs7QUFBQSxnQkFBTSxVQUNKLENBQUNxTixpQkFBaUIsR0FDYiwwQkFBeUI3RSxHQUFJLG9DQUFtQzhFLGFBQWEsQ0FBYkEsVUFEbkQsb0NBSWIsOEJBQTZCdEUsVUFBVyw4Q0FBNkNwRixLQUoxRixTQUtHLDRDQUNDeUosaUJBQWlCLGlDQUViLHNCQVRWLEVBQU0sQ0FBTjtBQWFIO0FBaENELGFBZ0NPLHVCQUF1QjtBQUM1QjdPLFVBQUUsR0FBRyxpQ0FDSFcsTUFBTSxDQUFOQSxxQkFBNEI7QUFDMUJlLGtCQUFRLEVBQUU2SixjQUFjLENBREU7QUFFMUJOLGVBQUssRUFBRVMsa0JBQWtCLFFBQVFILGNBQWMsQ0FIbkR2TCxNQUc2QjtBQUZDLFNBQTVCVyxDQURHLENBQUxYO0FBREssYUFPQTtBQUNMO0FBQ0FXLGNBQU0sQ0FBTkE7QUFFSDtBQUVENEc7O0FBQUFBLFVBQU0sQ0FBTkE7O0FBRUEsUUFBSTtBQUNGLFlBQU13SCxTQUFTLEdBQUcsTUFBTSw4Q0FBeEIsVUFBd0IsQ0FBeEI7QUFPQSxVQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFKLFVBUkUsQ0FVRjs7QUFDQSxVQUNFLENBQUMzQixPQUFPLElBQVIscUJBRUN4TSxLQUFELENBRkEsYUFHQ0EsS0FBRCxVQUFDQSxDQUpILGNBS0U7QUFDQSxjQUFNb08sV0FBVyxHQUFJcE8sS0FBRCxVQUFDQSxDQUFyQixhQURBLENBR0E7QUFDQTtBQUNBOztBQUNBLFlBQUlvTyxXQUFXLENBQVhBLFdBQUosR0FBSUEsQ0FBSixFQUFpQztBQUMvQixnQkFBTUMsVUFBVSxHQUFHLHdDQUFuQixXQUFtQixDQUFuQjs7QUFDQTs7QUFFQSxjQUFJWCxLQUFLLENBQUxBLFNBQWVXLFVBQVUsQ0FBN0IsUUFBSVgsQ0FBSixFQUF5QztBQUN2QyxrQkFBTTtBQUFFdEUsaUJBQUcsRUFBTDtBQUFlaEssZ0JBQUUsRUFBakI7QUFBQSxnQkFBNkI0TixZQUFZLG9CQUEvQyxXQUErQyxDQUEvQztBQUtBLG1CQUFPLG1DQUFQLE9BQU8sQ0FBUDtBQUVIO0FBRUR6Tjs7QUFBQUEsY0FBTSxDQUFOQTtBQUNBLGVBQU8sWUFBWSxNQUFNLENBQXpCLENBQU8sQ0FBUDtBQUdGb0g7O0FBQUFBLFlBQU0sQ0FBTkE7QUFDQTs7QUFFQSxnQkFBMkM7QUFDekMsY0FBTTJILE9BQVksR0FBRyx5QkFBckI7QUFDRS9PLGNBQUQsS0FBQ0EsQ0FBRCxhQUFDQSxHQUNBK08sT0FBTyxDQUFQQSxvQkFBNEJBLE9BQU8sQ0FBbkNBLHVCQUNBLENBQUVILFNBQVMsQ0FBVixTQUFDQSxDQUZILGVBQUM1TztBQUtKOztBQUFBLFlBQU0sNkRBQ0hQLENBQUQsSUFBTztBQUNMLFlBQUlBLENBQUMsQ0FBTCxXQUFpQnlHLEtBQUssR0FBR0EsS0FBSyxJQUE5QixDQUFpQkEsQ0FBakIsS0FDSztBQUhULE9BQU0sQ0FBTjs7QUFPQSxpQkFBVztBQUNUa0IsY0FBTSxDQUFOQTtBQUNBO0FBR0Y7O0FBQUEsVUFBSXhFLEtBQUosRUFBMkMsRUFNM0M7O0FBQUEsVUFBSUEsS0FBSixFQUFxQyxFQUtyQ3dFOztBQUFBQSxZQUFNLENBQU5BO0FBRUE7QUFDQSxLQTVFRixDQTRFRSxZQUFZO0FBQ1osVUFBSWpJLEdBQUcsQ0FBUCxXQUFtQjtBQUNqQjtBQUVGOztBQUFBO0FBRUg7QUFFRDZQOztBQUFBQSxhQUFXLGtCQUlUM1AsT0FBMEIsR0FKakIsSUFLSDtBQUNOLGNBQTJDO0FBQ3pDLFVBQUksT0FBT1csTUFBTSxDQUFiLFlBQUosYUFBMkM7QUFDekNxQixlQUFPLENBQVBBO0FBQ0E7QUFHRjs7QUFBQSxVQUFJLE9BQU9yQixNQUFNLENBQU5BLFFBQVAsTUFBT0EsQ0FBUCxLQUFKLGFBQW1EO0FBQ2pEcUIsZUFBTyxDQUFQQSxNQUFlLDJCQUEwQmdOLE1BQXpDaE47QUFDQTtBQUVIO0FBRUQ7O0FBQUEsUUFBSWdOLE1BQU0sS0FBTkEsZUFBMEIseUJBQTlCLElBQStDO0FBQzdDLHNCQUFnQmhQLE9BQU8sQ0FBdkI7QUFDQSxZQUFNLENBQU4sZ0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFJRTRQLFdBQUcsRUFMUDtBQUNFLE9BREYsRUFPRTtBQUNBO0FBQ0E7QUFURjtBQWNIO0FBRUQ7O0FBQUEsa0ZBT3FDO0FBQ25DLFFBQUk5UCxHQUFHLENBQVAsV0FBbUI7QUFDakI7QUFDQTtBQUdGOztBQUFBLFFBQUksdUNBQUosZUFBd0M7QUFDdENpSSxZQUFNLENBQU5BLHFEQURzQyxDQUd0QztBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBcEgsWUFBTSxDQUFOQSxtQkFUc0MsQ0FXdEM7QUFDQTs7QUFDQSxZQUFNa1Asc0JBQU47QUFHRjs7QUFBQSxRQUFJO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsWUFBTUMsTUFBTSxHQUFHaFEsR0FBRyxDQUFIQSxZQUFmOztBQUVBLGtCQUFZO0FBQ1YsWUFBSTtBQUNGO0FBQ0MsV0FBQztBQUFFaVEsZ0JBQUksRUFBTjtBQUFBO0FBQUE7QUFBQSxjQUF3QyxNQUFNLG9CQUEvQyxNQUErQyxDQUEvQyxFQUZDLENBTUY7QUFDQTs7QUFDQSxjQUFJQyxHQUFHLElBQUlBLEdBQUcsQ0FBZCxTQUF3QjtBQUN0QjVPLGlCQUFLLEdBQUcsTUFBTSxvQkFDWixrREFBa0QsS0FEcERBLE1BQ0UsQ0FEWSxDQUFkQTtBQUlIO0FBQUMsU0FiRixDQWFFLGFBQWEsQ0FDYjtBQUVIO0FBRUQ7O0FBQUEsVUFDRSxvQ0FDQSx1QkFGRixhQUdFO0FBQ0E7QUFBQyxTQUFDO0FBQUUyTyxjQUFJLEVBQU47QUFBQTtBQUFBLFlBQW1DLE1BQU0sb0JBQTFDLFNBQTBDLENBQTFDO0FBS0g7O0FBQUEsWUFBTVIsU0FBbUMsR0FBRztBQUFBO0FBQUE7QUFBQTtBQUkxQ3pQLFdBQUcsRUFBRWdRLE1BQU0sZUFKK0I7QUFLMUNqSixhQUFLLEVBQUVpSixNQUFNLGVBTGY7QUFBNEMsT0FBNUM7O0FBUUEsVUFBSSxDQUFDUCxTQUFTLENBQWQsT0FBc0I7QUFDcEIsWUFBSTtBQUNGQSxtQkFBUyxDQUFUQSxRQUFrQixNQUFNLGdDQUFnQztBQUFBO0FBQUE7QUFBeERBO0FBQXdELFdBQWhDLENBQXhCQTtBQUtBLFNBTkYsQ0FNRSxlQUFlO0FBQ2Z2TixpQkFBTyxDQUFQQTtBQUNBdU4sbUJBQVMsQ0FBVEE7QUFFSDtBQUVEOztBQUFBO0FBQ0EsS0F4REYsQ0F3REUscUJBQXFCO0FBQ3JCLGFBQU8seUVBQVAsSUFBTyxDQUFQO0FBU0g7QUFFRDs7QUFBQSw2REFNNkI7QUFDM0IsUUFBSTtBQUNGLFlBQU1VLGlCQUErQyxHQUFHLGdCQUF4RCxLQUF3RCxDQUF4RDs7QUFHQSxVQUFJekIsVUFBVSxDQUFWQSxnQ0FBMkMsZUFBL0MsT0FBcUU7QUFDbkU7QUFHRjs7QUFBQSxZQUFNMEIsZUFBcUQsR0FDekRELGlCQUFpQixJQUFJLGFBQXJCQSxnQ0FERjtBQUlBLFlBQU1WLFNBQW1DLEdBQUdXLGVBQWUscUJBRXZELE1BQU0sZ0NBQWlDckwsR0FBRCxLQUFVO0FBQzlDa0osaUJBQVMsRUFBRWxKLEdBQUcsQ0FEZ0M7QUFFOUNvQixtQkFBVyxFQUFFcEIsR0FBRyxDQUY4QjtBQUc5QytJLGVBQU8sRUFBRS9JLEdBQUcsQ0FBSEEsSUFIcUM7QUFJOUNpSixlQUFPLEVBQUVqSixHQUFHLENBQUhBLElBTmY7QUFFb0QsT0FBVixDQUFoQyxDQUZWO0FBU0EsWUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQU47O0FBRUEsZ0JBQTJDO0FBQ3pDLGNBQU07QUFBQTtBQUFBLFlBQXlCc0wsbUJBQU8sQ0FBdEMsMEJBQXNDLENBQXRDOztBQUNBLFlBQUksQ0FBQ0Msa0JBQWtCLENBQXZCLFNBQXVCLENBQXZCLEVBQW9DO0FBQ2xDLGdCQUFNLFVBQ0gseURBQXdEbE8sUUFEM0QsR0FBTSxDQUFOO0FBSUg7QUFFRDs7QUFBQTs7QUFFQSxVQUFJMEwsT0FBTyxJQUFYLFNBQXdCO0FBQ3RCeUMsZ0JBQVEsR0FBRyw0QkFDVCxpQ0FBcUI7QUFBQTtBQURaO0FBQ1ksU0FBckIsQ0FEUyxFQUVUM0IsV0FBVyxDQUZGLEVBRUUsQ0FGRixXQUlULEtBSkYyQixNQUFXLENBQVhBO0FBUUY7O0FBQUEsWUFBTWpQLEtBQUssR0FBRyxNQUFNLGNBQXdDLE1BQzFEd00sT0FBTyxHQUNILG9CQURHLFFBQ0gsQ0FERyxHQUVIRSxPQUFPLEdBQ1Asb0JBRE8sUUFDUCxDQURPLEdBRVAsZ0NBRUU7QUFDQTtBQUFBO0FBQUE7QUFHRWxCLGNBQU0sRUFYaEI7QUFRUSxPQUhGLENBTGMsQ0FBcEI7QUFnQkEyQyxlQUFTLENBQVRBO0FBQ0E7QUFDQTtBQUNBLEtBOURGLENBOERFLFlBQVk7QUFDWixhQUFPLG9EQUFQLFVBQU8sQ0FBUDtBQUVIO0FBRURlOztBQUFBQSxLQUFHLG1DQU1jO0FBQ2Y7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQU8sWUFBUCxJQUFPLENBQVA7QUFHRjtBQUFBO0FBQ0Y7QUFDQTtBQUNBOzs7QUFDRUMsZ0JBQWMsS0FBNkI7QUFDekM7QUFHRkM7O0FBQUFBLGlCQUFlLEtBQXNCO0FBQ25DLFFBQUksQ0FBQyxLQUFMLFFBQWtCO0FBQ2xCLFVBQU0sMEJBQTBCLGtCQUFoQyxHQUFnQyxDQUFoQztBQUNBLFVBQU0sMEJBQTBCaFEsRUFBRSxDQUFGQSxNQUFoQyxHQUFnQ0EsQ0FBaEMsQ0FIbUMsQ0FLbkM7O0FBQ0EsUUFBSWlRLE9BQU8sSUFBSUMsWUFBWSxLQUF2QkQsZ0JBQTRDRSxPQUFPLEtBQXZELFNBQXFFO0FBQ25FO0FBR0YsS0FWbUMsQ0FVbkM7OztBQUNBLFFBQUlELFlBQVksS0FBaEIsY0FBbUM7QUFDakM7QUFHRixLQWZtQyxDQWVuQztBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsV0FBT0MsT0FBTyxLQUFkO0FBR0ZDOztBQUFBQSxjQUFZLEtBQW1CO0FBQzdCLFVBQU0sV0FBV3BRLEVBQUUsQ0FBRkEsTUFBakIsR0FBaUJBLENBQWpCLENBRDZCLENBRTdCOztBQUNBLFFBQUl5TCxJQUFJLEtBQVIsSUFBaUI7QUFDZnRMLFlBQU0sQ0FBTkE7QUFDQTtBQUdGLEtBUjZCLENBUTdCOzs7QUFDQSxVQUFNa1EsSUFBSSxHQUFHalEsUUFBUSxDQUFSQSxlQUFiLElBQWFBLENBQWI7O0FBQ0EsY0FBVTtBQUNSaVEsVUFBSSxDQUFKQTtBQUNBO0FBRUYsS0FkNkIsQ0FjN0I7QUFDQTs7O0FBQ0EsVUFBTUMsTUFBTSxHQUFHbFEsUUFBUSxDQUFSQSx3QkFBZixDQUFlQSxDQUFmOztBQUNBLGdCQUFZO0FBQ1ZrUSxZQUFNLENBQU5BO0FBRUg7QUFFREM7O0FBQUFBLFVBQVEsU0FBMEI7QUFDaEMsV0FBTyxnQkFBUDtBQUdGQzs7QUFBQUEsY0FBWSxvQkFBeUNDLGFBQWEsR0FBdEQsTUFBK0Q7QUFDekUsVUFBTTtBQUFBO0FBQUEsUUFBTjtBQUNBLFVBQU1DLGFBQWEsR0FBRyxxREFDcEIsOENBQW9CRCxhQUFhLEdBQUd2QyxXQUFXLENBQWQsUUFBYyxDQUFkLEdBRG5DLFFBQ0UsQ0FEb0IsQ0FBdEI7O0FBSUEsUUFBSXdDLGFBQWEsS0FBYkEsVUFBNEJBLGFBQWEsS0FBN0MsV0FBNkQ7QUFDM0Q7QUFHRixLQVZ5RSxDQVV6RTs7O0FBQ0EsUUFBSSxDQUFDcEMsS0FBSyxDQUFMQSxTQUFMLGFBQUtBLENBQUwsRUFBcUM7QUFDbkM7QUFDQUEsV0FBSyxDQUFMQSxLQUFZaUIsSUFBRCxJQUFVO0FBQ25CLFlBQ0Usd0NBQ0EsNkNBRkYsYUFFRSxDQUZGLEVBR0U7QUFDQU4sb0JBQVUsQ0FBVkEsV0FBc0J3QixhQUFhLEdBQUc3RSxXQUFXLENBQWQsSUFBYyxDQUFkLEdBQW5DcUQ7QUFDQTtBQUVIO0FBUkRYO0FBVUZXOztBQUFBQSxjQUFVLENBQVZBLFdBQXNCLHFEQUF3QkEsVUFBVSxDQUF4REEsUUFBc0IsQ0FBdEJBO0FBQ0E7QUFHRjtBQUFBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0Usc0JBRUU3QyxNQUFjLEdBRmhCLEtBR0U1TSxPQUF3QixHQUgxQixJQUlpQjtBQUNmLFFBQUk2TyxNQUFNLEdBQUcsd0NBQWIsR0FBYSxDQUFiO0FBRUEsUUFBSTtBQUFBO0FBQUEsUUFBSjs7QUFFQSxRQUFJdEwsS0FBSixFQUFxQyxFQWlCckM7O0FBQUEsVUFBTXVMLEtBQUssR0FBRyxNQUFNLGdCQUFwQixXQUFvQixFQUFwQjtBQUVBRCxVQUFNLEdBQUcsaUNBQVRBLEtBQVMsQ0FBVEE7O0FBRUEsUUFBSUEsTUFBTSxDQUFOQSxhQUFKLFVBQWtDO0FBQ2hDM00sY0FBUSxHQUFHMk0sTUFBTSxDQUFqQjNNO0FBQ0FzSSxTQUFHLEdBQUcsaUNBQU5BLE1BQU0sQ0FBTkE7QUFHRixLQS9CZSxDQStCZjs7O0FBQ0EsY0FBMkM7QUFDekM7QUFHRjs7QUFBQSxVQUFNNUUsS0FBSyxHQUFHLHFEQUFkLFFBQWMsQ0FBZDtBQUNBLFVBQU14QixPQUFPLENBQVBBLElBQVksQ0FDaEIsaUNBQWtDK00sS0FBRCxJQUFvQjtBQUNuRCxhQUFPQSxLQUFLLEdBQ1Isb0JBQ0UsK0NBSUUsT0FBT25SLE9BQU8sQ0FBZCx5QkFDSUEsT0FBTyxDQURYLFNBRUksS0FSQSxNQUVOLENBREYsQ0FEUSxHQUFaO0FBRmMsS0FDaEIsQ0FEZ0IsRUFlaEIsZ0JBQWdCQSxPQUFPLENBQVBBLHdCQUFoQixZQWZGLEtBZUUsQ0FmZ0IsQ0FBWm9FLENBQU47QUFtQkY7O0FBQUEsOEJBQTREO0FBQzFELFFBQUlpRyxTQUFTLEdBQWI7O0FBQ0EsVUFBTStHLE1BQU0sR0FBSSxXQUFXLE1BQU07QUFDL0IvRyxlQUFTLEdBQVRBO0FBREY7O0FBSUEsVUFBTWdILGVBQWUsR0FBRyxNQUFNLHlCQUE5QixLQUE4QixDQUE5Qjs7QUFFQSxtQkFBZTtBQUNiLFlBQU14SyxLQUFVLEdBQUcsVUFDaEIsd0NBQXVDakIsS0FEMUMsR0FBbUIsQ0FBbkI7QUFHQWlCLFdBQUssQ0FBTEE7QUFDQTtBQUdGOztBQUFBLFFBQUl1SyxNQUFNLEtBQUssS0FBZixLQUF5QjtBQUN2QjtBQUdGOztBQUFBO0FBR0ZFOztBQUFBQSxVQUFRLEtBQXNDO0FBQzVDLFFBQUlqSCxTQUFTLEdBQWI7O0FBQ0EsVUFBTStHLE1BQU0sR0FBRyxNQUFNO0FBQ25CL0csZUFBUyxHQUFUQTtBQURGOztBQUdBO0FBQ0EsV0FBTzNELEVBQUUsR0FBRkEsS0FBVzZLLElBQUQsSUFBVTtBQUN6QixVQUFJSCxNQUFNLEtBQUssS0FBZixLQUF5QjtBQUN2QjtBQUdGOztBQUFBLHFCQUFlO0FBQ2IsY0FBTXRSLEdBQVEsR0FBRyxVQUFqQixpQ0FBaUIsQ0FBakI7QUFDQUEsV0FBRyxDQUFIQTtBQUNBO0FBR0Y7O0FBQUE7QUFYRixLQUFPNEcsQ0FBUDtBQWVGOEs7O0FBQUFBLGdCQUFjLFdBQW9DO0FBQ2hELFVBQU07QUFBRXZSLFVBQUksRUFBTjtBQUFBLFFBQXFCLGtCQUFrQlUsTUFBTSxDQUFOQSxTQUE3QyxJQUEyQixDQUEzQjs7QUFDQSxRQUFJNEMsS0FBSixFQUFpRSxFQUdqRTs7QUFBQSxXQUFPa08sYUFBYSxXQUFXLEtBQXhCQSxLQUFhLENBQWJBLE1BQTBDRixJQUFELElBQVU7QUFDeEQ7QUFDQTtBQUZGLEtBQU9FLENBQVA7QUFNRkM7O0FBQUFBLGdCQUFjLFdBQW9DO0FBQ2hELFdBQU9ELGFBQWEsV0FBVyxLQUEvQixLQUFvQixDQUFwQjtBQUdGaEk7O0FBQUFBLGlCQUFlLGlCQUdDO0FBQ2QsVUFBTTtBQUFFc0UsZUFBUyxFQUFYO0FBQUEsUUFBcUIsZ0JBQTNCLE9BQTJCLENBQTNCOztBQUNBLFVBQU00RCxPQUFPLEdBQUcsY0FBaEIsR0FBZ0IsQ0FBaEI7O0FBQ0FDLE9BQUcsQ0FBSEE7QUFDQSxXQUFPLHFDQUFpRDtBQUFBO0FBQUE7QUFHdEQvUixZQUFNLEVBSGdEO0FBQXhEO0FBQXdELEtBQWpELENBQVA7QUFRRmdTOztBQUFBQSxvQkFBa0IsaUJBQWdEO0FBQ2hFLFFBQUksS0FBSixLQUFjO0FBQ1o5SixZQUFNLENBQU5BLGdDQUVFOEgsc0JBRkY5SDtBQU1BO0FBQ0E7QUFFSDtBQUVEK0o7O0FBQUFBLFFBQU0sT0FBd0M7QUFDNUMsV0FBTyxlQUFlLHlCQUF0QixTQUFPLENBQVA7QUF6L0I4Qzs7QUFBQTs7O0FBQTdCL0osTSxDQTJCWm9GLE1BM0JZcEYsR0EyQlUsb0JBM0JWQSxDOzs7Ozs7Ozs7Ozs7Ozs7d0NDNVdyQjs7QUFDZSx1Q0FBdUQ7QUFDcEUsU0FBT2dLLE9BQU8sQ0FBUEEsa0JBQTJCQyxJQUFELElBQWtCQyxrQkFBa0IsQ0FBckUsSUFBcUUsQ0FBOURGLENBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3FCRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXhCQSxDLENBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFNQSxNQUFNRyxnQkFBZ0IsR0FBdEI7O0FBRU8sMkJBQXNDO0FBQzNDLE1BQUk7QUFBQTtBQUFBO0FBQUEsTUFBSjtBQUNBLE1BQUlDLFFBQVEsR0FBR0MsTUFBTSxDQUFOQSxZQUFmO0FBQ0EsTUFBSWxRLFFBQVEsR0FBR2tRLE1BQU0sQ0FBTkEsWUFBZjtBQUNBLE1BQUluRyxJQUFJLEdBQUdtRyxNQUFNLENBQU5BLFFBQVg7QUFDQSxNQUFJM0csS0FBSyxHQUFHMkcsTUFBTSxDQUFOQSxTQUFaO0FBQ0EsTUFBSUMsSUFBb0IsR0FBeEI7QUFFQUMsTUFBSSxHQUFHQSxJQUFJLEdBQUdMLGtCQUFrQixDQUFsQkEsSUFBa0IsQ0FBbEJBLHdCQUFILE1BQVhLOztBQUVBLE1BQUlGLE1BQU0sQ0FBVixNQUFpQjtBQUNmQyxRQUFJLEdBQUdDLElBQUksR0FBR0YsTUFBTSxDQUFwQkM7QUFERixTQUVPLGNBQWM7QUFDbkJBLFFBQUksR0FBR0MsSUFBSSxJQUFJLENBQUNDLFFBQVEsQ0FBUkEsUUFBRCxHQUFDQSxDQUFELEdBQTBCLElBQUdBLFFBQTdCLE1BQWZGLFFBQVcsQ0FBWEE7O0FBQ0EsUUFBSUQsTUFBTSxDQUFWLE1BQWlCO0FBQ2ZDLFVBQUksSUFBSSxNQUFNRCxNQUFNLENBQXBCQztBQUVIO0FBRUQ7O0FBQUEsTUFBSTVHLEtBQUssSUFBSSxpQkFBYixVQUF3QztBQUN0Q0EsU0FBSyxHQUFHK0csTUFBTSxDQUFDQyxXQUFXLENBQVhBLHVCQUFmaEgsS0FBZWdILENBQUQsQ0FBZGhIO0FBR0Y7O0FBQUEsTUFBSWlILE1BQU0sR0FBR04sTUFBTSxDQUFOQSxVQUFrQjNHLEtBQUssSUFBSyxJQUFHQSxLQUEvQjJHLE1BQWI7QUFFQSxNQUFJRCxRQUFRLElBQUlBLFFBQVEsQ0FBUkEsT0FBZ0IsQ0FBaEJBLE9BQWhCLEtBQTZDQSxRQUFRLElBQVJBOztBQUU3QyxNQUNFQyxNQUFNLENBQU5BLFdBQ0MsQ0FBQyxhQUFhRixnQkFBZ0IsQ0FBaEJBLEtBQWQsUUFBY0EsQ0FBZCxLQUFrREcsSUFBSSxLQUZ6RCxPQUdFO0FBQ0FBLFFBQUksR0FBRyxRQUFRQSxJQUFJLElBQW5CQSxFQUFPLENBQVBBO0FBQ0EsUUFBSW5RLFFBQVEsSUFBSUEsUUFBUSxDQUFSQSxDQUFRLENBQVJBLEtBQWhCLEtBQXFDQSxRQUFRLEdBQUcsTUFBWEE7QUFMdkMsU0FNTyxJQUFJLENBQUosTUFBVztBQUNoQm1RLFFBQUksR0FBSkE7QUFHRjs7QUFBQSxNQUFJcEcsSUFBSSxJQUFJQSxJQUFJLENBQUpBLENBQUksQ0FBSkEsS0FBWixLQUE2QkEsSUFBSSxHQUFHLE1BQVBBO0FBQzdCLE1BQUl5RyxNQUFNLElBQUlBLE1BQU0sQ0FBTkEsQ0FBTSxDQUFOQSxLQUFkLEtBQWlDQSxNQUFNLEdBQUcsTUFBVEE7QUFFakN4USxVQUFRLEdBQUdBLFFBQVEsQ0FBUkEsaUJBQVhBLGtCQUFXQSxDQUFYQTtBQUNBd1EsUUFBTSxHQUFHQSxNQUFNLENBQU5BLGFBQVRBLEtBQVNBLENBQVRBO0FBRUEsU0FBUSxHQUFFUCxRQUFTLEdBQUVFLElBQUssR0FBRW5RLFFBQVMsR0FBRXdRLE1BQU8sR0FBRXpHLElBQWhEO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7O3lDQ3hFRDs7QUFDQSxNQUFNMEcsVUFBVSxHQUFoQjs7QUFFTywrQkFBZ0Q7QUFDckQsU0FBT0EsVUFBVSxDQUFWQSxLQUFQLEtBQU9BLENBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0xEOztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxxQ0FBc0Q7QUFDM0QsUUFBTUMsVUFBVSxHQUFHLFFBQ2pCLG9CQUE2QyxTQUQ1QixDQUFuQjtBQUdBLFFBQU1DLFlBQVksR0FBR25ILElBQUksR0FBRyxjQUFILFVBQUcsQ0FBSCxHQUF6QjtBQUNBLFFBQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUF5RCxhQUEvRCxZQUErRCxDQUEvRDs7QUFJQSxNQUFJb0gsTUFBTSxLQUFLRixVQUFVLENBQXpCLFFBQWtDO0FBQ2hDLFVBQU0sVUFBTixpQ0FBTSxDQUFOO0FBRUY7O0FBQUEsU0FBTztBQUFBO0FBRUxuSCxTQUFLLEVBQUUseUNBRkYsWUFFRSxDQUZGO0FBQUE7QUFBQTtBQUtMeEwsUUFBSSxFQUFFQSxJQUFJLENBQUpBLE1BQVcyUyxVQUFVLENBQVZBLE9BTG5CLE1BS1EzUztBQUxELEdBQVA7QUFPRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSU87O0FBQUEsTUFBTThTLGNBQ2MsR0FBRztBQUM1QkMsV0FBUyxFQURtQjtBQUU1QkMsV0FBUyxFQUhKO0FBQ3VCLENBRHZCOzs7QUFNQSxNQUFNQyx5QkFDYyxtQ0FBRyxjQUFIO0FBRXpCQyxRQUFNLEVBSEQ7QUFDb0IsRUFEcEI7Ozs7ZUFNUSxDQUFDQyxXQUFXLEdBQVosVUFBeUI7QUFDdEMsU0FBUS9QLElBQUQsSUFBa0I7QUFDdkIsVUFBTWdRLElBQXdCLEdBQTlCO0FBQ0EsVUFBTUMsWUFBWSxHQUFHQyxZQUFZLENBQVpBLHlCQUduQkgsV0FBVywrQkFIYixjQUFxQkcsQ0FBckI7QUFLQSxVQUFNQyxPQUFPLEdBQUdELFlBQVksQ0FBWkEsK0JBQWhCLElBQWdCQSxDQUFoQjtBQUVBLFdBQU8sc0JBQXVEO0FBQzVELFlBQU0xTyxHQUFHLEdBQUczQyxRQUFRLElBQVJBLGVBQTJCc1IsT0FBTyxDQUE5QyxRQUE4QyxDQUE5Qzs7QUFDQSxVQUFJLENBQUosS0FBVTtBQUNSO0FBR0Y7O0FBQUEsdUJBQWlCO0FBQ2YsYUFBSyxNQUFMLGFBQXdCO0FBQ3RCO0FBQ0E7QUFDQSxjQUFJLE9BQU8xUyxHQUFHLENBQVYsU0FBSixVQUFrQztBQUNoQyxtQkFBUStELEdBQUcsQ0FBSixNQUFDQSxDQUFtQi9ELEdBQUcsQ0FBOUIsSUFBUStELENBQVI7QUFFSDtBQUNGO0FBRUQ7O0FBQUEsNkNBQU8sTUFBUCxHQUF1QkEsR0FBRyxDQUExQjtBQWhCRjtBQVRGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkY7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJTzs7QUFBQSx1Q0FBK0Q7QUFDcEUsTUFBSSxDQUFDSCxLQUFLLENBQUxBLFNBQUwsR0FBS0EsQ0FBTCxFQUEwQjtBQUN4QjtBQUdGOztBQUFBLE9BQUssTUFBTCxPQUFrQnZELE1BQU0sQ0FBTkEsS0FBbEIsTUFBa0JBLENBQWxCLEVBQXVDO0FBQ3JDLFFBQUl1RCxLQUFLLENBQUxBLFNBQWdCLElBQUc1RCxHQUF2QixFQUFJNEQsQ0FBSixFQUErQjtBQUM3QkEsV0FBSyxHQUFHQSxLQUFLLENBQUxBLFFBRUosV0FBWSxJQUFHNUQsR0FBZixPQUZJNEQsR0FFSixDQUZJQSxFQUdILElBQUc1RCxHQUhBNEQscUNBTUosV0FBWSxJQUFHNUQsR0FBZixPQU5JNEQsR0FNSixDQU5JQSxFQU9ILElBQUc1RCxHQVBBNEQsb0NBU0csV0FBWSxJQUFHNUQsR0FBZixPQVRINEQsR0FTRyxDQVRIQSxFQVNtQyxJQUFHNUQsR0FUdEM0RCxnQ0FXSixXQUFZLElBQUc1RCxHQUFmLFdBWEk0RCxHQVdKLENBWElBLEVBWUgsd0JBQXVCNUQsR0FaNUI0RCxFQUFRQSxDQUFSQTtBQWVIO0FBQ0RBOztBQUFBQSxPQUFLLEdBQUdBLEtBQUssQ0FBTEEsME1BQVJBLEdBQVFBLENBQVJBLENBdkJvRSxDQThCcEU7QUFDQTs7QUFDQSxTQUFPNk8sWUFBWSxDQUFaQSxRQUNLLElBQUc3TyxLQURSNk8sSUFDaUI7QUFBRUUsWUFBUSxFQUQzQkY7QUFDaUIsR0FEakJBLGlCQUFQLENBQU9BLENBQVA7QUFLYTs7QUFBQSw2RUFLYjtBQUNBLE1BQUlHLGlCQUttQyxHQUx2QyxHQURBLENBUUE7O0FBQ0FqSSxPQUFLLEdBQUd0SyxNQUFNLENBQU5BLFdBQVJzSyxLQUFRdEssQ0FBUnNLO0FBQ0EsUUFBTWtJLFNBQVMsR0FBR2xJLEtBQUssQ0FBdkI7QUFDQSxTQUFPQSxLQUFLLENBQVo7QUFDQSxTQUFPQSxLQUFLLENBQVo7O0FBRUEsTUFBSStELFdBQVcsQ0FBWEEsV0FBSixHQUFJQSxDQUFKLEVBQWlDO0FBQy9Ca0UscUJBQWlCLEdBQUcsd0NBQXBCQSxXQUFvQixDQUFwQkE7QUFERixTQUVPO0FBQ0wsVUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVNGLFFBVEosV0FTSSxDQVRKO0FBV0FBLHFCQUFpQixHQUFHO0FBQUE7QUFFbEJqSSxXQUFLLEVBQUUseUNBRlcsWUFFWCxDQUZXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFwQmlJO0FBQW9CLEtBQXBCQTtBQVlGOztBQUFBLFFBQU1FLFNBQVMsR0FBR0YsaUJBQWlCLENBQW5DO0FBQ0EsUUFBTUcsUUFBUSxHQUFJLEdBQUVILGlCQUFpQixDQUFDeFIsUUFBVSxHQUM5Q3dSLGlCQUFpQixDQUFqQkEsUUFBMEIsRUFENUI7QUFHQSxRQUFNSSxpQkFBcUMsR0FBM0M7QUFDQVAsY0FBWSxDQUFaQTtBQUVBLFFBQU1RLGNBQWMsR0FBR0QsaUJBQWlCLENBQWpCQSxJQUF1QmhULEdBQUQsSUFBU0EsR0FBRyxDQUF6RCxJQUF1QmdULENBQXZCO0FBRUEsTUFBSUUsbUJBQW1CLEdBQUcsWUFBWSxDQUFaLGtCQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFFUCxZQUFRLEVBUlo7QUFRRSxHQVJ3QixDQUExQjtBQVVBLGFBM0RBLENBNkRBOztBQUNBLE9BQUssTUFBTSxNQUFYLFVBQVcsQ0FBWCxJQUFnQ3RTLE1BQU0sQ0FBTkEsUUFBaEMsU0FBZ0NBLENBQWhDLEVBQTJEO0FBQ3pELFFBQUl1RCxLQUFLLEdBQUdnRSxLQUFLLENBQUxBLHNCQUE0QnVMLFVBQVUsQ0FBdEN2TCxDQUFzQyxDQUF0Q0EsR0FBWjs7QUFDQSxlQUFXO0FBQ1Q7QUFDQTtBQUNBaEUsV0FBSyxHQUFHd1AsY0FBYyxRQUF0QnhQLE1BQXNCLENBQXRCQTtBQUVGa1A7O0FBQUFBLGFBQVMsQ0FBVEEsR0FBUyxDQUFUQTtBQUdGLEdBeEVBLENBd0VBO0FBQ0E7OztBQUNBLE1BQUlPLFNBQVMsR0FBR2hULE1BQU0sQ0FBTkEsS0FBaEIsTUFBZ0JBLENBQWhCLENBMUVBLENBNEVBOztBQUNBLGlCQUFlO0FBQ2JnVCxhQUFTLEdBQUdBLFNBQVMsQ0FBVEEsT0FBa0J4SyxJQUFELElBQVVBLElBQUksS0FBM0N3SyxvQkFBWUEsQ0FBWkE7QUFHRjs7QUFBQSxNQUNFQyxtQkFBbUIsSUFDbkIsQ0FBQ0QsU0FBUyxDQUFUQSxLQUFnQnJULEdBQUQsSUFBU2lULGNBQWMsQ0FBZEEsU0FGM0IsR0FFMkJBLENBQXhCSSxDQUZILEVBR0U7QUFDQSxTQUFLLE1BQUwsa0JBQTZCO0FBQzNCLFVBQUksRUFBRXJULEdBQUcsSUFBVCxTQUFJLENBQUosRUFBeUI7QUFDdkI4UyxpQkFBUyxDQUFUQSxHQUFTLENBQVRBLEdBQWlCM0ksTUFBTSxDQUF2QjJJLEdBQXVCLENBQXZCQTtBQUVIO0FBQ0Y7QUFFRDs7QUFBQSxNQUFJO0FBQ0ZTLFVBQU0sR0FBR0wsbUJBQW1CLENBQTVCSyxNQUE0QixDQUE1QkE7QUFFQSxVQUFNLG1CQUFtQkEsTUFBTSxDQUFOQSxNQUF6QixHQUF5QkEsQ0FBekI7QUFDQVgscUJBQWlCLENBQWpCQTtBQUNBQSxxQkFBaUIsQ0FBakJBLE9BQTBCLEdBQUV6SCxJQUFJLFNBQVMsRUFBRyxHQUFFQSxJQUFJLElBQUksRUFBdER5SDtBQUNBLFdBQVFBLGlCQUFELENBQVA7QUFDQSxHQVBGLENBT0UsWUFBWTtBQUNaLFFBQUk1VCxHQUFHLENBQUhBLGNBQUosOENBQUlBLENBQUosRUFBdUU7QUFDckUsWUFBTSxVQUFOLHdLQUFNLENBQU47QUFJRjs7QUFBQTtBQUdGLEdBNUdBLENBNEdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTRULG1CQUFpQixDQUFqQkEsd0NBQTBCLEtBQTFCQSxHQUVLQSxpQkFBaUIsQ0FGdEJBO0FBS0EsU0FBTztBQUFBO0FBQVA7QUFBTyxHQUFQO0FBSUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hLTSw4Q0FFVztBQUNoQixRQUFNakksS0FBcUIsR0FBM0I7QUFDQTZJLGNBQVksQ0FBWkEsUUFBcUIsZ0JBQWdCO0FBQ25DLFFBQUksT0FBTzdJLEtBQUssQ0FBWixHQUFZLENBQVosS0FBSixhQUF1QztBQUNyQ0EsV0FBSyxDQUFMQSxHQUFLLENBQUxBO0FBREYsV0FFTyxJQUFJL0MsS0FBSyxDQUFMQSxRQUFjK0MsS0FBSyxDQUF2QixHQUF1QixDQUFuQi9DLENBQUosRUFBK0I7QUFDcEM7QUFBRStDLFdBQUssQ0FBTixHQUFNLENBQUxBLENBQUQsSUFBQ0EsQ0FBRCxLQUFDQTtBQURHLFdBRUE7QUFDTEEsV0FBSyxDQUFMQSxHQUFLLENBQUxBLEdBQWEsQ0FBQ0EsS0FBSyxDQUFOLEdBQU0sQ0FBTixFQUFiQSxLQUFhLENBQWJBO0FBRUg7QUFSRDZJO0FBU0E7QUFHRjs7QUFBQSx1Q0FBdUQ7QUFDckQsTUFDRSw2QkFDQyw2QkFBNkIsQ0FBQ0MsS0FBSyxDQURwQyxLQUNvQyxDQURwQyxJQUVBLGlCQUhGLFdBSUU7QUFDQSxXQUFPL0IsTUFBTSxDQUFiLEtBQWEsQ0FBYjtBQUxGLFNBTU87QUFDTDtBQUVIO0FBRU07O0FBQUEsMENBRVk7QUFDakIsUUFBTWpILE1BQU0sR0FBRyxJQUFmLGVBQWUsRUFBZjtBQUNBcEssUUFBTSxDQUFOQSwwQkFBaUMsQ0FBQyxNQUFELEtBQUMsQ0FBRCxLQUFrQjtBQUNqRCxRQUFJdUgsS0FBSyxDQUFMQSxRQUFKLEtBQUlBLENBQUosRUFBMEI7QUFDeEJoRSxXQUFLLENBQUxBLFFBQWU4UCxJQUFELElBQVVqSixNQUFNLENBQU5BLFlBQW1Ca0osc0JBQXNCLENBQWpFL1AsSUFBaUUsQ0FBekM2RyxDQUF4QjdHO0FBREYsV0FFTztBQUNMNkcsWUFBTSxDQUFOQSxTQUFnQmtKLHNCQUFzQixDQUF0Q2xKLEtBQXNDLENBQXRDQTtBQUVIO0FBTkRwSztBQU9BO0FBR0s7O0FBQUEsd0JBRUwsR0FGSyxrQkFHWTtBQUNqQnVULGtCQUFnQixDQUFoQkEsUUFBMEJKLFlBQUQsSUFBa0I7QUFDekM1TCxTQUFLLENBQUxBLEtBQVc0TCxZQUFZLENBQXZCNUwsSUFBVzRMLEVBQVg1TCxVQUF5QzVILEdBQUQsSUFBU1gsTUFBTSxDQUFOQSxPQUFqRHVJLEdBQWlEdkksQ0FBakR1STtBQUNBNEwsZ0JBQVksQ0FBWkEsUUFBcUIsZ0JBQWdCblUsTUFBTSxDQUFOQSxZQUFyQ21VLEtBQXFDblUsQ0FBckNtVTtBQUZGSTtBQUlBO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwREQ7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7OztBQUVBOztBQUFBLE1BQU1DLGtCQUFrQixHQUFHLHdCQUEzQixJQUEyQixDQUEzQjs7QUFFZSwrRUFPYjtBQUNBLE1BQUksQ0FBQzdGLEtBQUssQ0FBTEEsU0FBZSwrREFBcEIsUUFBS0EsQ0FBTCxFQUFvRTtBQUNsRSxTQUFLLE1BQUwscUJBQWdDO0FBQzlCLFlBQU0wRSxPQUFPLEdBQUdtQixrQkFBa0IsQ0FBQ0MsT0FBTyxDQUExQyxNQUFrQyxDQUFsQztBQUNBLFlBQU0zSixNQUFNLEdBQUd1SSxPQUFPLENBQXRCLE1BQXNCLENBQXRCOztBQUVBLGtCQUFZO0FBQ1YsWUFBSSxDQUFDb0IsT0FBTyxDQUFaLGFBQTBCO0FBQ3hCO0FBQ0E7QUFFRjs7QUFBQSxjQUFNQyxPQUFPLEdBQUcsaUNBQ2RELE9BQU8sQ0FETyw0QkFBaEIsSUFBZ0IsQ0FBaEI7QUFNQWhJLGNBQU0sR0FBR2lJLE9BQU8sQ0FBUEEsa0JBQVRqSTtBQUNBekwsY0FBTSxDQUFOQSxjQUFxQjBULE9BQU8sQ0FBUEEsa0JBQXJCMVQ7QUFFQSxjQUFNMlQsVUFBVSxHQUFHLDhDQUNqQixxREFEaUIsTUFDakIsQ0FEaUIsV0FBbkI7O0FBS0EsWUFBSWhHLEtBQUssQ0FBTEEsU0FBSixVQUFJQSxDQUFKLEVBQWdDO0FBQzlCbEMsZ0JBQU0sR0FBTkEsV0FEOEIsQ0FFOUI7QUFDQTs7QUFDQTtBQUdGLFNBMUJVLENBMEJWOzs7QUFDQSxjQUFNVCxZQUFZLEdBQUdFLFdBQVcsQ0FBaEMsVUFBZ0MsQ0FBaEM7O0FBRUEsWUFBSUYsWUFBWSxLQUFaQSxVQUEyQjJDLEtBQUssQ0FBTEEsU0FBL0IsWUFBK0JBLENBQS9CLEVBQTZEO0FBQzNEbEMsZ0JBQU0sR0FBTkE7QUFDQTtBQUVIO0FBQ0Y7QUFDRjtBQUNEOztBQUFBO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RE0scUNBQXVFO0FBQzVFLFFBQU07QUFBQTtBQUFBO0FBQUEsTUFBTjtBQUNBLFNBQVExSyxRQUFELElBQXlDO0FBQzlDLFVBQU1rTixVQUFVLEdBQUcyRixFQUFFLENBQUZBLEtBQW5CLFFBQW1CQSxDQUFuQjs7QUFDQSxRQUFJLENBQUosWUFBaUI7QUFDZjtBQUdGOztBQUFBLFVBQU1DLE1BQU0sR0FBSTlKLEtBQUQsSUFBbUI7QUFDaEMsVUFBSTtBQUNGLGVBQU8rSixrQkFBa0IsQ0FBekIsS0FBeUIsQ0FBekI7QUFDQSxPQUZGLENBRUUsVUFBVTtBQUNWLGNBQU1uVixHQUE4QixHQUFHLFVBQXZDLHdCQUF1QyxDQUF2QztBQUdBQSxXQUFHLENBQUhBO0FBQ0E7QUFFSDtBQVZEOztBQVdBLFVBQU1tTCxNQUFrRCxHQUF4RDtBQUVBOUosVUFBTSxDQUFOQSxxQkFBNkIrVCxRQUFELElBQXNCO0FBQ2hELFlBQU1DLENBQUMsR0FBR0MsTUFBTSxDQUFoQixRQUFnQixDQUFoQjtBQUNBLFlBQU1DLENBQUMsR0FBR2pHLFVBQVUsQ0FBQytGLENBQUMsQ0FBdEIsR0FBb0IsQ0FBcEI7O0FBQ0EsVUFBSUUsQ0FBQyxLQUFMLFdBQXFCO0FBQ25CcEssY0FBTSxDQUFOQSxRQUFNLENBQU5BLEdBQW1CLENBQUNvSyxDQUFDLENBQURBLFFBQUQsR0FBQ0EsQ0FBRCxHQUNmQSxDQUFDLENBQURBLGVBQWtCblIsS0FBRCxJQUFXOFEsTUFBTSxDQURuQixLQUNtQixDQUFsQ0ssQ0FEZSxHQUVmRixDQUFDLENBQURBLFNBQ0EsQ0FBQ0gsTUFBTSxDQURQRyxDQUNPLENBQVAsQ0FEQUEsR0FFQUgsTUFBTSxDQUpWL0osQ0FJVSxDQUpWQTtBQU1IO0FBVkQ5SjtBQVdBO0FBOUJGO0FBZ0NELEM7Ozs7Ozs7Ozs7Ozs7Ozt1Q0M5QkQ7QUFDQTs7QUFDQSwwQkFBa0M7QUFDaEMsU0FBT21VLEdBQUcsQ0FBSEEsZ0NBQVAsTUFBT0EsQ0FBUDtBQUdGOztBQUFBLCtCQUF1QztBQUNyQyxRQUFNakssUUFBUSxHQUFHSCxLQUFLLENBQUxBLG1CQUF5QkEsS0FBSyxDQUFMQSxTQUExQyxHQUEwQ0EsQ0FBMUM7O0FBQ0EsZ0JBQWM7QUFDWkEsU0FBSyxHQUFHQSxLQUFLLENBQUxBLFNBQWUsQ0FBdkJBLENBQVFBLENBQVJBO0FBRUY7O0FBQUEsUUFBTUUsTUFBTSxHQUFHRixLQUFLLENBQUxBLFdBQWYsS0FBZUEsQ0FBZjs7QUFDQSxjQUFZO0FBQ1ZBLFNBQUssR0FBR0EsS0FBSyxDQUFMQSxNQUFSQSxDQUFRQSxDQUFSQTtBQUVGOztBQUFBLFNBQU87QUFBRXBLLE9BQUcsRUFBTDtBQUFBO0FBQVA7QUFBTyxHQUFQO0FBR0s7O0FBQUEsd0NBT0w7QUFDQSxRQUFNeVUsUUFBUSxHQUFHLENBQUNDLGVBQWUsQ0FBZkEsc0JBQUQsb0JBQWpCLEdBQWlCLENBQWpCO0FBSUEsUUFBTUosTUFBc0MsR0FBNUM7QUFDQSxNQUFJSyxVQUFVLEdBQWQ7QUFDQSxRQUFNQyxrQkFBa0IsR0FBR0gsUUFBUSxDQUFSQSxJQUNuQnhELE9BQUQsSUFBYTtBQUNoQixRQUFJQSxPQUFPLENBQVBBLG1CQUEyQkEsT0FBTyxDQUFQQSxTQUEvQixHQUErQkEsQ0FBL0IsRUFBc0Q7QUFDcEQsWUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQTRCNEQsY0FBYyxDQUFDNUQsT0FBTyxDQUFQQSxTQUFpQixDQUFsRSxDQUFpREEsQ0FBRCxDQUFoRDtBQUNBcUQsWUFBTSxDQUFOQSxHQUFNLENBQU5BLEdBQWM7QUFBRVEsV0FBRyxFQUFFSCxVQUFQO0FBQUE7QUFBZEw7QUFBYyxPQUFkQTtBQUNBLGFBQU9oSyxNQUFNLEdBQUlDLFFBQVEsbUJBQVosV0FBYjtBQUhGLFdBSU87QUFDTCxhQUFRLElBQUd3SyxXQUFXLFNBQXRCO0FBRUg7QUFUd0JOLFVBQTNCLEVBQTJCQSxDQUEzQixDQVBBLENBbUJBO0FBQ0E7O0FBQ0EsWUFBbUM7QUFDakMsUUFBSU8sZ0JBQWdCLEdBQXBCO0FBQ0EsUUFBSUMsa0JBQWtCLEdBQXRCLEVBRmlDLENBSWpDOztBQUNBLFVBQU1DLGVBQWUsR0FBRyxNQUFNO0FBQzVCLFVBQUlDLFFBQVEsR0FBWjs7QUFFQSxXQUFLLElBQUlDLENBQUMsR0FBVixHQUFnQkEsQ0FBQyxHQUFqQixvQkFBd0NBLENBQXhDLElBQTZDO0FBQzNDRCxnQkFBUSxJQUFJekQsTUFBTSxDQUFOQSxhQUFaeUQsZ0JBQVl6RCxDQUFaeUQ7QUFDQUgsd0JBQWdCOztBQUVoQixZQUFJQSxnQkFBZ0IsR0FBcEIsS0FBNEI7QUFDMUJDLDRCQUFrQjtBQUNsQkQsMEJBQWdCLEdBQWhCQTtBQUVIO0FBQ0Q7O0FBQUE7QUFaRjs7QUFlQSxVQUFNSyxTQUFzQyxHQUE1QztBQUVBLFFBQUlDLHVCQUF1QixHQUFHYixRQUFRLENBQVJBLElBQ3RCeEQsT0FBRCxJQUFhO0FBQ2hCLFVBQUlBLE9BQU8sQ0FBUEEsbUJBQTJCQSxPQUFPLENBQVBBLFNBQS9CLEdBQStCQSxDQUEvQixFQUFzRDtBQUNwRCxjQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBNEI0RCxjQUFjLENBQUM1RCxPQUFPLENBQVBBLFNBQWlCLENBQWxFLENBQWlEQSxDQUFELENBQWhELENBRG9ELENBRXBEO0FBQ0E7O0FBQ0EsWUFBSXNFLFVBQVUsR0FBR3ZWLEdBQUcsQ0FBSEEsZUFBakIsRUFBaUJBLENBQWpCO0FBQ0EsWUFBSXdWLFVBQVUsR0FBZCxNQUxvRCxDQU9wRDtBQUNBOztBQUNBLFlBQUlELFVBQVUsQ0FBVkEsZ0JBQTJCQSxVQUFVLENBQVZBLFNBQS9CLElBQXVEO0FBQ3JEQyxvQkFBVSxHQUFWQTtBQUVGOztBQUFBLFlBQUksQ0FBQy9CLEtBQUssQ0FBQ2dDLFFBQVEsQ0FBQ0YsVUFBVSxDQUFWQSxVQUFwQixDQUFvQkEsQ0FBRCxDQUFULENBQVYsRUFBK0M7QUFDN0NDLG9CQUFVLEdBQVZBO0FBR0Y7O0FBQUEsd0JBQWdCO0FBQ2RELG9CQUFVLEdBQUdMLGVBQWJLO0FBR0ZGOztBQUFBQSxpQkFBUyxDQUFUQSxVQUFTLENBQVRBO0FBQ0EsZUFBTy9LLE1BQU0sR0FDVEMsUUFBUSxHQUNMLFVBQVNnTCxVQURKLFlBRUwsT0FBTUEsVUFIQSxVQUlSLE9BQU1BLFVBSlg7QUFyQkYsYUEwQk87QUFDTCxlQUFRLElBQUdSLFdBQVcsU0FBdEI7QUFFSDtBQS9CMkJOLFlBQTlCLEVBQThCQSxDQUE5QjtBQWtDQSxXQUFPO0FBQ0xSLFFBQUUsRUFBRSxXQUFZLElBQUdXLGtCQURkLFNBQ0QsQ0FEQztBQUFBO0FBQUE7QUFJTGMsZ0JBQVUsRUFBRyxJQUFHSix1QkFKbEI7QUFBTyxLQUFQO0FBUUY7O0FBQUEsU0FBTztBQUNMckIsTUFBRSxFQUFFLFdBQVksSUFBR1csa0JBRGQsU0FDRCxDQURDO0FBQVA7QUFBTyxHQUFQO0FBSUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEhEO0FBdVFBO0FBQ0E7QUFDQTs7O0FBQ08sc0JBRUY7QUFDSCxNQUFJZSxJQUFJLEdBQVI7QUFDQTtBQUVBLFNBQVEsQ0FBQyxHQUFELFNBQW9CO0FBQzFCLFFBQUksQ0FBSixNQUFXO0FBQ1RBLFVBQUksR0FBSkE7QUFDQWxMLFlBQU0sR0FBRzdFLEVBQUUsQ0FBQyxHQUFaNkUsSUFBVyxDQUFYQTtBQUVGOztBQUFBO0FBTEY7QUFTSzs7QUFBQSw2QkFBNkI7QUFDbEMsUUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQStCNUssTUFBTSxDQUEzQztBQUNBLFNBQVEsR0FBRXdSLFFBQVMsS0FBSUksUUFBUyxHQUFFbUUsSUFBSSxHQUFHLE1BQUgsT0FBZ0IsRUFBdEQ7QUFHSzs7QUFBQSxrQkFBa0I7QUFDdkIsUUFBTTtBQUFBO0FBQUEsTUFBVy9WLE1BQU0sQ0FBdkI7QUFDQSxRQUFNbVMsTUFBTSxHQUFHNkQsaUJBQWY7QUFDQSxTQUFPMVcsSUFBSSxDQUFKQSxVQUFlNlMsTUFBTSxDQUE1QixNQUFPN1MsQ0FBUDtBQUdLOztBQUFBLG1DQUF3RDtBQUM3RCxTQUFPLDRDQUVIOE4sU0FBUyxDQUFUQSxlQUF5QkEsU0FBUyxDQUFsQ0EsUUFGSjtBQUtLOztBQUFBLHdCQUF3QztBQUM3QyxTQUFPbEosR0FBRyxDQUFIQSxZQUFnQkEsR0FBRyxDQUExQjtBQUdLOztBQUFBLDZDQUlrRDtBQUN2RCxZQUEyQztBQUFBOztBQUN6QywwQkFBSStSLEdBQUcsQ0FBUCw4QkFBSUEsZUFBSixpQkFBb0M7QUFDbEMsWUFBTXhPLE9BQU8sR0FBSSxJQUFHeU8sY0FBYyxLQUFsQztBQUdBLFlBQU0sVUFBTixPQUFNLENBQU47QUFFSDtBQUNELEdBVHVELENBU3ZEOzs7QUFDQSxRQUFNaFMsR0FBRyxHQUFHK00sR0FBRyxDQUFIQSxPQUFZQSxHQUFHLENBQUhBLE9BQVdBLEdBQUcsQ0FBSEEsSUFBbkM7O0FBRUEsTUFBSSxDQUFDZ0YsR0FBRyxDQUFSLGlCQUEwQjtBQUN4QixRQUFJaEYsR0FBRyxDQUFIQSxPQUFXQSxHQUFHLENBQWxCLFdBQThCO0FBQzVCO0FBQ0EsYUFBTztBQUNMa0YsaUJBQVMsRUFBRSxNQUFNQyxtQkFBbUIsQ0FBQ25GLEdBQUcsQ0FBSixXQUFnQkEsR0FBRyxDQUR6RCxHQUNzQztBQUQvQixPQUFQO0FBSUY7O0FBQUE7QUFHRjs7QUFBQSxRQUFNeFEsS0FBSyxHQUFHLE1BQU13VixHQUFHLENBQUhBLGdCQUFwQixHQUFvQkEsQ0FBcEI7O0FBRUEsTUFBSS9SLEdBQUcsSUFBSW1TLFNBQVMsQ0FBcEIsR0FBb0IsQ0FBcEIsRUFBMkI7QUFDekI7QUFHRjs7QUFBQSxNQUFJLENBQUosT0FBWTtBQUNWLFVBQU01TyxPQUFPLEdBQUksSUFBR3lPLGNBQWMsS0FFaEMsK0RBQThEelYsS0FGaEU7QUFHQSxVQUFNLFVBQU4sT0FBTSxDQUFOO0FBR0Y7O0FBQUEsWUFBMkM7QUFDekMsUUFBSUQsTUFBTSxDQUFOQSw0QkFBbUMsQ0FBQ3lRLEdBQUcsQ0FBM0MsS0FBaUQ7QUFDL0M1UCxhQUFPLENBQVBBLEtBQ0csR0FBRTZVLGNBQWMsS0FEbkI3VTtBQU1IO0FBRUQ7O0FBQUE7QUFHSzs7QUFBQSxNQUFNaVYsYUFBYSxHQUFHLHdHQUF0QixTQUFzQixDQUF0Qjs7O0FBZUEsbUNBQXNEO0FBQzNELFlBQTRDO0FBQzFDLFFBQUl6TSxHQUFHLEtBQUhBLFFBQWdCLGVBQXBCLFVBQTZDO0FBQzNDckosWUFBTSxDQUFOQSxrQkFBMEJMLEdBQUQsSUFBUztBQUNoQyxZQUFJbVcsYUFBYSxDQUFiQSxpQkFBK0IsQ0FBbkMsR0FBdUM7QUFDckNqVixpQkFBTyxDQUFQQSxLQUNHLHFEQUFvRGxCLEdBRHZEa0I7QUFJSDtBQU5EYjtBQVFIO0FBRUQ7O0FBQUEsU0FBTywwQkFBUCxHQUFPLENBQVA7QUFHSzs7QUFBQSxNQUFNK1YsRUFBRSxHQUFHLHVCQUFYOztBQUNBLE1BQU01SSxFQUFFLEdBQ2I0SSxFQUFFLElBQ0YsT0FBTzNJLFdBQVcsQ0FBbEIsU0FEQTJJLGNBRUEsT0FBTzNJLFdBQVcsQ0FBbEIsWUFISzs7Ozs7Ozs7Ozs7OztBQ3RZTSx3QkFBd0IsMENBQTBDLGdEQUFnRCxnQ0FBZ0MsZ0NBQWdDLG1DQUFtQyw0QkFBNEIsK0JBQStCLG9CQUFvQix5QkFBeUIsVUFBVTtBQUNwVixpRDs7Ozs7Ozs7Ozs7QUNEQSxpQkFBaUIsbUJBQU8sQ0FBQyxtRUFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxNQUFNNEksU0FBUyxnQkFBR3BWLDRDQUFLLENBQUNxVixVQUFOLENBQWlCLENBQUM7QUFBRTdGLE1BQUY7QUFBUXRSO0FBQVIsQ0FBRCxFQUFpQitDLEdBQWpCLEtBQXlCO0FBQ2pFLFFBQU1xVSxLQUFLLEdBQUdDLGdFQUFRLEVBQXRCO0FBQ0EsU0FDRSxNQUFDLDBDQUFEO0FBQ0UsTUFBRSxFQUFDLEdBREw7QUFFRSxRQUFJLEVBQUVyWCxJQUZSO0FBR0UsYUFBUyxFQUFDLFlBSFo7QUFJRSxPQUFHLEVBQUUrQyxHQUpQO0FBS0UsTUFBRSxFQUFFO0FBQ0Z1VSxjQUFRLEVBQUUsVUFEUjtBQUVGQyxlQUFTLEVBQUUsbUJBRlQ7QUFHRkMsYUFBTyxFQUFFLENBSFA7QUFJRkMsZ0JBQVUsRUFBRW5HLElBQUksQ0FBQ29HLGNBQUwsR0FBc0JOLEtBQUssQ0FBQ08sTUFBTixDQUFhckcsSUFBSSxDQUFDb0csY0FBTCxDQUFvQixDQUFwQixFQUF1QkUsTUFBcEMsQ0FBdEIsR0FBb0UsU0FKOUU7QUFLRkMsWUFBTSxFQUFFLENBTE47QUFNRkMsV0FBSyxFQUFFLE1BTkw7QUFPRkMsWUFBTSxFQUFFO0FBUE4sS0FMTjtBQWNFLE1BQUUsRUFBRSxDQUFDLENBQUQsQ0FkTjtBQWVFLE1BQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsQ0FBVixDQWZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FnQkUsTUFBQywwQ0FBRDtBQUNFLFVBQU0sRUFBRSxHQURWO0FBRUUsU0FBSyxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxHQUFWLENBRlQ7QUFHRSxNQUFFLEVBQUU7QUFDRkEsWUFBTSxFQUFFLFNBRE47QUFFRlIsZUFBUyxFQUFFLG9CQUZUO0FBR0ZFLGdCQUFVLEVBQUUsT0FIVjtBQUlGSCxjQUFRLEVBQUUsVUFKUjtBQUtGVSxjQUFRLEVBQUUsUUFMUjtBQU1GQyxnQkFBVSxFQUFFLHFDQU5WO0FBT0YsaUJBQVc7QUFDVFYsaUJBQVMsRUFBRSxvQkFERjtBQUVUVyxpQkFBUyxFQUFFO0FBRkYsT0FQVDtBQVdGLGtCQUFZO0FBQ1Y3UixlQUFPLEVBQUUsSUFEQztBQUVWOFIsZUFBTyxFQUFFLE9BRkM7QUFHVmIsZ0JBQVEsRUFBRSxVQUhBO0FBSVZjLFdBQUcsRUFBRSxDQUpLO0FBS1ZDLFlBQUksRUFBRSxDQUxJO0FBTVZQLGFBQUssRUFBRSxNQU5HO0FBT1ZRLGNBQU0sRUFBRSxDQVBFO0FBUVZDLGtCQUFVLEVBQUUsTUFSRjtBQVNWQyx3QkFBZ0IsRUFBRSxXQVRSO0FBVVZDLDBCQUFrQixFQUFFLFFBVlY7QUFXVlosY0FBTSxFQUFFLENBWEU7QUFZVmEsb0JBQVksRUFBRSxtQkFaSjtBQWFWQyx1QkFBZSxFQUFHLE9BQ2ZySCxJQUFJLENBQUNzSCxNQUFMLElBQWV0SCxJQUFJLENBQUNzSCxNQUFMLENBQVlDLE1BQTNCLElBQXFDdkgsSUFBSSxDQUFDc0gsTUFBTCxDQUFZLENBQVosRUFBZXJPLEdBQXJELElBQ0MrRyxJQUFJLENBQUN3SCxTQUFMLElBQWtCeEgsSUFBSSxDQUFDd0gsU0FBTCxDQUFlRCxNQUFqQyxJQUEyQ3ZILElBQUksQ0FBQ3dILFNBQUwsQ0FBZSxDQUFmLEVBQWtCdk8sR0FEOUQsSUFFQSxvRUFDRCxHQWpCUztBQWtCVndPLHNCQUFjLEVBQ1p6SCxJQUFJLENBQUNzSCxNQUFMLElBQWV0SCxJQUFJLENBQUNzSCxNQUFMLENBQVlDLE1BQTNCLElBQXFDdkgsSUFBSSxDQUFDc0gsTUFBTCxDQUFZLENBQVosRUFBZXJPLEdBQXBELEdBQ0ksT0FESixHQUVJLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxLQUFmLENBckJJO0FBc0JWZ04saUJBQVMsRUFBRyxxQkFDVmpHLElBQUksQ0FBQ29HLGNBQUwsR0FBc0JOLEtBQUssQ0FBQ08sTUFBTixDQUFhckcsSUFBSSxDQUFDb0csY0FBTCxDQUFvQixDQUFwQixFQUF1QkUsTUFBcEMsQ0FBdEIsR0FBb0UsU0FDckU7QUF4QlM7QUFYVixLQUhOO0FBeUNFLE1BQUUsRUFBRSxHQXpDTjtBQTBDRSxNQUFFLEVBQUUsQ0ExQ047QUEyQ0UsTUFBRSxFQUFFLENBM0NOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0E0Q0UsTUFBQywyQ0FBRDtBQUFNLGlCQUFhLEVBQUMsUUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkNBQUQ7QUFBTSxpQkFBYSxFQUFDLEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR3RHLElBQUksQ0FBQzBILFVBQUwsS0FBb0IsV0FBcEIsSUFDQyxNQUFDLG9EQUFEO0FBQ0UsTUFBRSxFQUFDLE9BREw7QUFFRSxZQUFRLEVBQUMsYUFGWDtBQUdFLGdCQUFZLEVBQUU7QUFDWmxCLFdBQUssRUFBRSxNQURLO0FBRVptQixrQkFBWSxFQUFFO0FBRkYsS0FIaEI7QUFPRSxXQUFPLEVBQ0w7QUFBTSxXQUFLLEVBQUU7QUFBRVgsY0FBTSxFQUFFO0FBQVYsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyw0REFBRDtBQUFZLFlBQU0sRUFBQyxPQUFuQjtBQUEyQixXQUFLLEVBQUMsTUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVlFLE1BQUMsMkNBQUQ7QUFBTSxNQUFFLEVBQUMsTUFBVDtBQUFnQixTQUFLLEVBQUMsTUFBdEI7QUFBNkIsTUFBRSxFQUFFLENBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaRixDQUZKLEVBbUJHaEgsSUFBSSxDQUFDMEgsVUFBTCxLQUFvQixtQkFBcEIsSUFDQyxNQUFDLG9EQUFEO0FBQ0UsTUFBRSxFQUFDLE9BREw7QUFFRSxZQUFRLEVBQUMsYUFGWDtBQUdFLGdCQUFZLEVBQUU7QUFDWmxCLFdBQUssRUFBRSxNQURLO0FBRVptQixrQkFBWSxFQUFFO0FBRkYsS0FIaEI7QUFPRSxXQUFPLEVBQ0w7QUFBTSxXQUFLLEVBQUU7QUFBRVgsY0FBTSxFQUFFO0FBQVYsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyw0REFBRDtBQUFZLFlBQU0sRUFBQyxPQUFuQjtBQUEyQixXQUFLLEVBQUMsTUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVlFLE1BQUMsMkNBQUQ7QUFBTSxNQUFFLEVBQUMsTUFBVDtBQUFnQixTQUFLLEVBQUMsTUFBdEI7QUFBNkIsTUFBRSxFQUFFLENBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaRixDQXBCSixFQXFDR2hILElBQUksQ0FBQ29HLGNBQUwsSUFBdUJwRyxJQUFJLENBQUNvRyxjQUFMLENBQW9CbUIsTUFBM0MsSUFDQyxNQUFDLG9EQUFEO0FBQ0UsTUFBRSxFQUFDLE9BREw7QUFFRSxZQUFRLEVBQUMsYUFGWDtBQUdFLGdCQUFZLEVBQUU7QUFDWmYsV0FBSyxFQUFFLE1BREs7QUFFWm1CLGtCQUFZLEVBQUU7QUFGRixLQUhoQjtBQU9FLFdBQU8sRUFDTDtBQUFNLFdBQUssRUFBRTtBQUFFWCxjQUFNLEVBQUU7QUFBVixPQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDREQUFEO0FBQ0UsWUFBTSxFQUFFaEgsSUFBSSxDQUFDb0csY0FBTCxDQUFvQm1CLE1BQXBCLElBQThCdkgsSUFBSSxDQUFDb0csY0FBTCxDQUFvQixDQUFwQixFQUF1QkUsTUFEL0Q7QUFFRSxXQUFLLEVBQUMsTUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBZUUsTUFBQywyQ0FBRDtBQUFNLE1BQUUsRUFBQyxNQUFUO0FBQWdCLFNBQUssRUFBQyxNQUF0QjtBQUE2QixNQUFFLEVBQUUsQ0FBakM7QUFBb0MsTUFBRSxFQUFDLE9BQXZDO0FBQStDLE1BQUUsRUFBRTtBQUFFc0IsWUFBTSxFQUFFO0FBQVYsS0FBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQywyRUFBa0IsQ0FBQzdILElBQUksQ0FBQ29HLGNBQUwsQ0FBb0IsQ0FBcEIsRUFBdUJFLE1BQXhCLENBRHJCLENBZkYsQ0F0Q0osRUEwREd0RyxJQUFJLENBQUNvRyxjQUFMLElBQXVCcEcsSUFBSSxDQUFDb0csY0FBTCxDQUFvQm1CLE1BQTNDLElBQ0MsTUFBQyxvREFBRDtBQUNFLE1BQUUsRUFBQyxPQURMO0FBRUUsWUFBUSxFQUFDLGFBRlg7QUFHRSxnQkFBWSxFQUFFO0FBQ1pmLFdBQUssRUFBRSxNQURLO0FBRVptQixrQkFBWSxFQUFFO0FBRkYsS0FIaEI7QUFPRSxXQUFPLEVBQ0w7QUFBTSxXQUFLLEVBQUU7QUFBRVgsY0FBTSxFQUFFO0FBQVYsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyx5RkFBRDtBQUNFLFVBQUksRUFBRWhILElBQUksQ0FBQ29HLGNBQUwsQ0FBb0IsQ0FBcEIsRUFBdUIwQixlQUQvQjtBQUVFLFdBQUssRUFBQyxNQUZSO0FBR0UsV0FBSyxFQUFFO0FBQUVDLGtCQUFVLEVBQUU7QUFBZCxPQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FnQkUsTUFBQywyQ0FBRDtBQUFNLE1BQUUsRUFBQyxNQUFUO0FBQWdCLFNBQUssRUFBQyxNQUF0QjtBQUE2QixNQUFFLEVBQUUsQ0FBakM7QUFBb0MsTUFBRSxFQUFDLE9BQXZDO0FBQStDLE1BQUUsRUFBRTtBQUFFSCxZQUFNLEVBQUU7QUFBVixLQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLDJFQUFrQixDQUFDN0gsSUFBSSxDQUFDb0csY0FBTCxDQUFvQixDQUFwQixFQUF1QjBCLGVBQXhCLENBRHJCLENBaEJGLENBM0RKLEVBZ0ZHOUgsSUFBSSxDQUFDb0csY0FBTCxJQUF1QnBHLElBQUksQ0FBQ29HLGNBQUwsQ0FBb0JtQixNQUEzQyxJQUNDLE1BQUMsb0RBQUQ7QUFDRSxNQUFFLEVBQUMsT0FETDtBQUVFLFlBQVEsRUFBQyxhQUZYO0FBR0UsZ0JBQVksRUFBRTtBQUNaZixXQUFLLEVBQUUsTUFESztBQUVabUIsa0JBQVksRUFBRTtBQUZGLEtBSGhCO0FBT0UsV0FBTyxFQUNMO0FBQU0sV0FBSyxFQUFFO0FBQUVYLGNBQU0sRUFBRTtBQUFWLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsd0dBQUQ7QUFDRSxZQUFNLEVBQ0poSCxJQUFJLENBQUNvRyxjQUFMLENBQW9CbUIsTUFBcEIsSUFBOEJ2SCxJQUFJLENBQUNvRyxjQUFMLENBQW9CLENBQXBCLEVBQXVCNEIsaUJBRnpEO0FBSUUsV0FBSyxFQUFDLE1BSlI7QUFLRSxXQUFLLEVBQUU7QUFBRUQsa0JBQVUsRUFBRTtBQUFkLE9BTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWtCRSxNQUFDLDJDQUFEO0FBQU0sTUFBRSxFQUFDLE1BQVQ7QUFBZ0IsU0FBSyxFQUFDLE1BQXRCO0FBQTZCLE1BQUUsRUFBRSxDQUFqQztBQUFvQyxNQUFFLEVBQUMsT0FBdkM7QUFBK0MsTUFBRSxFQUFFO0FBQUVILFlBQU0sRUFBRTtBQUFWLEtBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0MsMkVBQWtCLENBQUM3SCxJQUFJLENBQUNvRyxjQUFMLENBQW9CLENBQXBCLEVBQXVCNEIsaUJBQXhCLENBRHJCLENBbEJGLENBakZKLENBREYsRUEwR0UsTUFBQywyQ0FBRDtBQUNFLE1BQUUsRUFBRSxDQUROO0FBRUUsV0FBTyxFQUFDLFVBRlY7QUFHRSxZQUFRLEVBQUMsTUFIWDtBQUlFLGNBQVUsRUFBQyxNQUpiO0FBS0UsTUFBRSxFQUFDLElBTEw7QUFNRSxTQUFLLEVBQUMsTUFOUjtBQU9FLGNBQVUsRUFBQyxTQVBiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRR2hJLElBQUksQ0FBQ2lJLEtBQUwsSUFBYyxFQVJqQixDQTFHRixFQW9IRSxNQUFDLDJDQUFEO0FBQU0sTUFBRSxFQUFFLENBQVY7QUFBYSxXQUFPLEVBQUMsV0FBckI7QUFBaUMsU0FBSyxFQUFDLE1BQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2pJLElBQUksQ0FBQ29HLGNBQUwsSUFBdUJwRyxJQUFJLENBQUNvRyxjQUFMLENBQW9CbUIsTUFBM0MsSUFBcUR2SCxJQUFJLENBQUNvRyxjQUFMLENBQW9CLENBQXBCLEVBQXVCOEIsS0FEL0UsQ0FwSEYsQ0E1Q0YsQ0FoQkYsQ0FERjtBQXdMRCxDQTFMd0IsQ0FBbEIsQzs7Ozs7Ozs7Ozs7O0FDVFA7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBRU8sTUFBTUMscUJBQXFCLEdBQUl0WSxLQUFELElBQVc7QUFDOUMsVUFBUUEsS0FBSyxDQUFDdVksTUFBZDtBQUNFLFNBQUssV0FBTDtBQUNFLGFBQU8sTUFBQyxTQUFELGVBQWV2WSxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBUDs7QUFDRixTQUFLLFlBQUw7QUFDRSxhQUFPLE1BQUMsVUFBRCxlQUFnQkEsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFQOztBQUNGLFNBQUssZ0JBQUw7QUFDRSxhQUFPLE1BQUMsY0FBRCxlQUFvQkEsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFQOztBQUNGLFNBQUssV0FBTDtBQUNFLGFBQU8sTUFBQyxTQUFELGVBQWVBLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFQOztBQUNGLFNBQUssWUFBTDtBQUNFLGFBQU8sTUFBQyxVQUFELGVBQWdCQSxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVA7O0FBQ0Y7QUFDRSxhQUFPLElBQVA7QUFaSjtBQWNELENBZk07O0FBaUJQLE1BQU13WSxTQUFTLEdBQUl4WSxLQUFELElBQ2hCO0FBQUssT0FBSyxFQUFDLDRCQUFYO0FBQXdDLE1BQUksRUFBQyxTQUE3QztBQUF1RCxTQUFPLEVBQUM7QUFBL0QsR0FBK0VBLEtBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFDRTtBQUFNLEdBQUMsRUFBQyxteEJBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURGLENBREY7O0FBTUEsTUFBTXlZLFVBQVUsR0FBSXpZLEtBQUQsSUFDakI7QUFBSyxPQUFLLEVBQUMsNEJBQVg7QUFBd0MsTUFBSSxFQUFDO0FBQTdDLEdBQTJEQSxLQUEzRDtBQUFrRSxTQUFPLEVBQUMsV0FBMUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUNFO0FBQU0sR0FBQyxFQUFDLHdrR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsQ0FERjs7QUFNQSxNQUFNMFksY0FBYyxHQUFJMVksS0FBRCxJQUNyQjtBQUFLLE1BQUksRUFBQyxTQUFWO0FBQW9CLE9BQUssRUFBQyw0QkFBMUI7QUFBdUQsU0FBTyxFQUFDO0FBQS9ELEdBQStFQSxLQUEvRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQ0U7QUFBTSxHQUFDLEVBQUMsb3hDQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFERixDQURGOztBQU1BLE1BQU0yWSxTQUFTLEdBQUkzWSxLQUFELElBQ2hCO0FBQUssT0FBSyxFQUFDLDRCQUFYO0FBQXdDLE1BQUksRUFBQyxTQUE3QztBQUF1RCxTQUFPLEVBQUM7QUFBL0QsR0FBK0VBLEtBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFDRTtBQUFNLEdBQUMsRUFBQyw4OUdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURGLENBREY7O0FBTUEsTUFBTTRZLFVBQVUsR0FBSTVZLEtBQUQsSUFDakI7QUFBSyxNQUFJLEVBQUMsU0FBVjtBQUFvQixPQUFLLEVBQUMsNEJBQTFCO0FBQXVELFNBQU8sRUFBQztBQUEvRCxHQUErRUEsS0FBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUNFO0FBQU0sR0FBQyxFQUFDLDBhQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFERixDQURGLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDQTtBQUVPLE1BQU02WSxnQkFBZ0IsR0FBSTdZLEtBQUQsSUFBVztBQUN6QyxVQUFRQSxLQUFLLENBQUM4WSxJQUFkO0FBQ0UsU0FBSyxRQUFMO0FBQ0UsYUFBTyxNQUFDLE1BQUQsZUFBWTlZLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFQOztBQUNGLFNBQUssTUFBTDtBQUNFLGFBQU8sTUFBQyxJQUFELGVBQVVBLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFQOztBQUNGLFNBQUssU0FBTDtBQUNFLGFBQU8sTUFBQyxPQUFELGVBQWFBLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFQOztBQUNGLFNBQUssTUFBTDtBQUNFLGFBQU8sTUFBQyxJQUFELGVBQVVBLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFQOztBQUNGLFNBQUssVUFBTDtBQUNFLGFBQU8sTUFBQyxRQUFELGVBQWNBLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFQOztBQUNGLFNBQUssTUFBTDtBQUNFLGFBQU8sTUFBQyxJQUFELGVBQVVBLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFQOztBQUNGLFNBQUssVUFBTDtBQUNFLGFBQU8sTUFBQyxRQUFELGVBQWNBLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFQOztBQUNGLFNBQUssTUFBTDtBQUNFLGFBQU8sTUFBQyxJQUFELGVBQVVBLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFQOztBQUNGLFNBQUssT0FBTDtBQUNFLGFBQU8sTUFBQyxLQUFELGVBQVdBLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFQOztBQUNGLFNBQUssTUFBTDtBQUNFLGFBQU8sTUFBQyxJQUFELGVBQVVBLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFQOztBQUNGLFNBQUssU0FBTDtBQUNFLGFBQU8sTUFBQyxPQUFELGVBQWFBLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFQOztBQUNGLFNBQUssZUFBTDtBQUNFLGFBQU8sTUFBQyxhQUFELGVBQW1CQSxLQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVA7O0FBQ0Y7QUFDRSxhQUFPLElBQVA7QUExQko7QUE0QkQsQ0E3Qk07O0FBK0JQLE1BQU0rWSxNQUFNLEdBQUkvWSxLQUFELElBQ2I7QUFBSyxPQUFLLEVBQUM7QUFBWCxHQUE0Q0EsS0FBNUM7QUFBbUQsTUFBSSxFQUFDLFNBQXhEO0FBQWtFLFNBQU8sRUFBQyxXQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQ0U7QUFBTSxHQUFDLEVBQUMsc2RBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURGLENBREY7O0FBTUEsTUFBTWdaLElBQUksR0FBSWhaLEtBQUQsSUFDWDtBQUFLLE9BQUssRUFBQztBQUFYLEdBQTRDQSxLQUE1QztBQUFtRCxTQUFPLEVBQUMsYUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUNFO0FBQU0sR0FBQyxFQUFDLGlCQUFSO0FBQTBCLE1BQUksRUFBQyxTQUEvQjtBQUF5QyxhQUFXLEVBQUMsR0FBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURGLEVBRUU7QUFBRyxXQUFTLEVBQUMsRUFBYjtBQUFnQixXQUFTLEVBQUMsZ0JBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUNFLEdBQUMsRUFBQyxtdUJBREo7QUFFRSxNQUFJLEVBQUMsU0FGUDtBQUdFLGFBQVcsRUFBQyxHQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFERixDQUZGLENBREY7O0FBYUEsTUFBTWlaLE9BQU8sR0FBSWpaLEtBQUQsSUFDZDtBQUFLLE9BQUssRUFBQztBQUFYLEdBQTRDQSxLQUE1QztBQUFtRCxTQUFPLEVBQUMsYUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUNFO0FBQU0sR0FBQyxFQUFDLGlCQUFSO0FBQTBCLE1BQUksRUFBQyxTQUEvQjtBQUF5QyxhQUFXLEVBQUMsR0FBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURGLEVBRUU7QUFBRyxXQUFTLEVBQUMsRUFBYjtBQUFnQixXQUFTLEVBQUMsZ0JBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUNFLEdBQUMsRUFBQyxtN0VBREo7QUFFRSxNQUFJLEVBQUMsU0FGUDtBQUdFLGFBQVcsRUFBQyxHQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFERixDQUZGLENBREY7O0FBYUEsTUFBTWtaLElBQUksR0FBSWxaLEtBQUQsSUFDWDtBQUFLLE9BQUssRUFBQyw0QkFBWDtBQUF3QyxTQUFPLEVBQUM7QUFBaEQsR0FBa0VBLEtBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFDRTtBQUFNLEdBQUMsRUFBQyxpQkFBUjtBQUEwQixNQUFJLEVBQUMsU0FBL0I7QUFBeUMsYUFBVyxFQUFDLEdBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFERixFQUVFO0FBQUcsV0FBUyxFQUFDLEVBQWI7QUFBZ0IsV0FBUyxFQUFDLGdCQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFDRSxHQUFDLEVBQUMsNHRDQURKO0FBRUUsTUFBSSxFQUFDLFNBRlA7QUFHRSxhQUFXLEVBQUMsR0FIZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsQ0FGRixDQURGOztBQWFBLE1BQU1tWixJQUFJLEdBQUluWixLQUFELElBQ1g7QUFBSyxPQUFLLEVBQUMsNEJBQVg7QUFBd0MsU0FBTyxFQUFDO0FBQWhELEdBQWtFQSxLQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQ0U7QUFBTSxHQUFDLEVBQUMsaUJBQVI7QUFBMEIsTUFBSSxFQUFDLFNBQS9CO0FBQXlDLGFBQVcsRUFBQyxHQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsRUFFRTtBQUFHLFdBQVMsRUFBQyxFQUFiO0FBQWdCLFdBQVMsRUFBQyxnQkFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQ0UsR0FBQyxFQUFDLDgzREFESjtBQUVFLE1BQUksRUFBQyxTQUZQO0FBR0UsYUFBVyxFQUFDLEdBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURGLENBRkYsQ0FERjs7QUFhQSxNQUFNb1osUUFBUSxHQUFJcFosS0FBRCxJQUNmO0FBQUssT0FBSyxFQUFDLDRCQUFYO0FBQXdDLFNBQU8sRUFBQztBQUFoRCxHQUFrRUEsS0FBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUNFO0FBQU0sR0FBQyxFQUFDLGlCQUFSO0FBQTBCLE1BQUksRUFBQyxTQUEvQjtBQUF5QyxhQUFXLEVBQUMsR0FBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURGLEVBRUU7QUFBRyxXQUFTLEVBQUMsRUFBYjtBQUFnQixXQUFTLEVBQUMsZ0JBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUNFLEdBQUMsRUFBQyxxdENBREo7QUFFRSxNQUFJLEVBQUMsU0FGUDtBQUdFLGFBQVcsRUFBQyxHQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFERixDQUZGLENBREY7O0FBYUEsTUFBTXFaLElBQUksR0FBSXJaLEtBQUQsSUFDWDtBQUFLLE9BQUssRUFBQyw0QkFBWDtBQUF3QyxTQUFPLEVBQUM7QUFBaEQsR0FBa0VBLEtBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFDRTtBQUFNLEdBQUMsRUFBQyxpQkFBUjtBQUEwQixNQUFJLEVBQUMsU0FBL0I7QUFBeUMsYUFBVyxFQUFDLEdBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFERixFQUVFO0FBQUcsV0FBUyxFQUFDLEVBQWI7QUFBZ0IsV0FBUyxFQUFDLGdCQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFDRSxHQUFDLEVBQUMsNDFCQURKO0FBRUUsTUFBSSxFQUFDLFNBRlA7QUFHRSxhQUFXLEVBQUMsR0FIZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsQ0FGRixDQURGOztBQWFBLE1BQU1zWixLQUFLLEdBQUl0WixLQUFELElBQ1o7QUFBSyxPQUFLLEVBQUMsNEJBQVg7QUFBd0MsU0FBTyxFQUFDO0FBQWhELEdBQWtFQSxLQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQ0U7QUFBTSxHQUFDLEVBQUMsaUJBQVI7QUFBMEIsTUFBSSxFQUFDLFNBQS9CO0FBQXlDLGFBQVcsRUFBQyxHQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsRUFFRTtBQUFHLFdBQVMsRUFBQyxFQUFiO0FBQWdCLFdBQVMsRUFBQyxnQkFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQ0UsR0FBQyxFQUFDLHdqQkFESjtBQUVFLE1BQUksRUFBQyxTQUZQO0FBR0UsYUFBVyxFQUFDLEdBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURGLENBRkYsQ0FERjs7QUFhQSxNQUFNdVosYUFBYSxHQUFJdlosS0FBRCxJQUNwQjtBQUFLLE9BQUssRUFBQyw0QkFBWDtBQUF3QyxTQUFPLEVBQUM7QUFBaEQsR0FBa0VBLEtBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFDRTtBQUFNLEdBQUMsRUFBQyxpQkFBUjtBQUEwQixNQUFJLEVBQUMsU0FBL0I7QUFBeUMsYUFBVyxFQUFDLEdBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFERixFQUVFO0FBQUcsV0FBUyxFQUFDLEVBQWI7QUFBZ0IsV0FBUyxFQUFDLGdCQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFDRSxHQUFDLEVBQUMsKzNCQURKO0FBRUUsTUFBSSxFQUFDLFNBRlA7QUFHRSxhQUFXLEVBQUMsR0FIZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsQ0FGRixDQURGOztBQWFBLE1BQU13WixRQUFRLEdBQUl4WixLQUFELElBQ2Y7QUFBSyxPQUFLLEVBQUMsNEJBQVg7QUFBd0MsU0FBTyxFQUFDO0FBQWhELEdBQWtFQSxLQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQ0U7QUFBTSxHQUFDLEVBQUMsaUJBQVI7QUFBMEIsTUFBSSxFQUFDLFNBQS9CO0FBQXlDLGFBQVcsRUFBQyxHQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsRUFFRTtBQUFHLFdBQVMsRUFBQyxFQUFiO0FBQWdCLFdBQVMsRUFBQyxnQkFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQ0UsR0FBQyxFQUFDLDhYQURKO0FBRUUsTUFBSSxFQUFDLFNBRlA7QUFHRSxhQUFXLEVBQUMsR0FIZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsQ0FGRixDQURGOztBQWFBLE1BQU15WixPQUFPLEdBQUl6WixLQUFELElBQ2Q7QUFBSyxPQUFLLEVBQUMsNEJBQVg7QUFBd0MsU0FBTyxFQUFDO0FBQWhELEdBQWtFQSxLQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQ0U7QUFBTSxHQUFDLEVBQUMsaUJBQVI7QUFBMEIsTUFBSSxFQUFDLFNBQS9CO0FBQXlDLGFBQVcsRUFBQyxHQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsRUFFRTtBQUFHLE9BQUssRUFBQyxFQUFUO0FBQVksV0FBUyxFQUFDLGdCQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFDRSxHQUFDLEVBQUMsMjNDQURKO0FBRUUsTUFBSSxFQUFDLFNBRlA7QUFHRSxhQUFXLEVBQUMsR0FIZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsQ0FGRixDQURGOztBQWFBLE1BQU0wWixJQUFJLEdBQUkxWixLQUFELElBQ1g7QUFBSyxPQUFLLEVBQUMsNEJBQVg7QUFBd0MsU0FBTyxFQUFDO0FBQWhELEdBQWtFQSxLQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQ0U7QUFBTSxHQUFDLEVBQUMsaXlCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFERixDQURGLEM7Ozs7Ozs7Ozs7OztBQ3pLQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFFTyxNQUFNMlosVUFBVSxHQUFJM1osS0FBRCxJQUFXO0FBQ25DLFVBQVFBLEtBQUssQ0FBQ3lXLE1BQWQ7QUFDRSxTQUFLLE9BQUw7QUFDRSxhQUFPLE1BQUMsS0FBRCxlQUFXelcsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVA7O0FBQ0YsU0FBSyxZQUFMO0FBQ0UsYUFBTyxNQUFDLFVBQUQsZUFBZ0JBLEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBUDs7QUFDRixTQUFLLFNBQUw7QUFDQSxTQUFLLE1BQUw7QUFDQSxTQUFLLFNBQUw7QUFDRSxhQUFPLE1BQUMsSUFBRCxlQUFVQSxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBUDs7QUFDRixTQUFLLE9BQUw7QUFDRSxhQUFPLE1BQUMsS0FBRCxlQUFXQSxLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBUDs7QUFDRixTQUFLLE1BQUw7QUFDRSxhQUFPLE1BQUMsSUFBRCxlQUFVQSxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBUDs7QUFDRixTQUFLLGFBQUw7QUFDRSxhQUFPLE1BQUMsV0FBRCxlQUFpQkEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFQOztBQUNGLFNBQUssYUFBTDtBQUNFLGFBQU8sTUFBQyxXQUFELGVBQWlCQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVA7O0FBQ0YsU0FBSyxZQUFMO0FBQ0UsYUFBTyxNQUFDLFVBQUQsZUFBZ0JBLEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBUDs7QUFDRixTQUFLLFlBQUw7QUFDRSxhQUFPLE1BQUMsVUFBRCxlQUFnQkEsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFQOztBQUNGLFNBQUssT0FBTDtBQUNFLGFBQU8sTUFBQyxLQUFELGVBQVdBLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFQOztBQUNGLFNBQUssZUFBTDtBQUNFLGFBQU8sTUFBQyxhQUFELGVBQW1CQSxLQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVA7O0FBQ0YsU0FBSyxPQUFMO0FBQ0UsYUFBTyxNQUFDLEtBQUQsZUFBV0EsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVA7O0FBQ0Y7QUFDRSxhQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBUDtBQTVCSjtBQThCRCxDQS9CTTs7QUFpQ1AsTUFBTTRaLGFBQWEsR0FBSTVaLEtBQUQsSUFDcEI7QUFBSyxNQUFJLEVBQUM7QUFBVixHQUFxQkEsS0FBckI7QUFBNEIsU0FBTyxFQUFDLFdBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFDRTtBQUNFLEdBQUMsRUFBQyxtekdBREo7QUFFRSxNQUFJLEVBQUMsTUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsQ0FERjs7QUFTQSxNQUFNNlosVUFBVSxHQUFJN1osS0FBRCxJQUNqQiwwQkFBU0EsS0FBVDtBQUFnQixTQUFPLEVBQUMsV0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUNFO0FBQ0UsVUFBUSxFQUFDLFNBRFg7QUFFRSxVQUFRLEVBQUMsU0FGWDtBQUdFLEdBQUMsRUFBQyx1L0NBSEo7QUFJRSxNQUFJLEVBQUMsTUFKUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsQ0FERjs7QUFXQSxNQUFNOFosS0FBSyxHQUFJOVosS0FBRCxJQUNaLDBCQUFTQSxLQUFUO0FBQWdCLFNBQU8sRUFBQyxXQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQ0U7QUFDRSxHQUFDLEVBQUMsK3dDQURKO0FBRUUsTUFBSSxFQUFDLE1BRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURGLENBREY7O0FBU0EsTUFBTStaLFdBQVcsR0FBSS9aLEtBQUQsSUFDbEI7QUFBSyxNQUFJLEVBQUM7QUFBVixHQUFxQkEsS0FBckI7QUFBNEIsU0FBTyxFQUFDLFdBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFDRTtBQUNFLEdBQUMsRUFBQyw4NkZBREo7QUFFRSxNQUFJLEVBQUMsTUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsQ0FERjs7QUFTQSxNQUFNZ2EsS0FBSyxHQUFJaGEsS0FBRCxJQUNaO0FBQUssTUFBSSxFQUFDO0FBQVYsR0FBcUJBLEtBQXJCO0FBQTRCLFNBQU8sRUFBQyxXQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQ0U7QUFDRSxVQUFRLEVBQUMsU0FEWDtBQUVFLFVBQVEsRUFBQyxTQUZYO0FBR0UsR0FBQyxFQUFDLDRuQ0FISjtBQUlFLE1BQUksRUFBQyxNQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFERixDQURGOztBQVdBLE1BQU1pYSxLQUFLLEdBQUlqYSxLQUFELElBQ1o7QUFBSyxNQUFJLEVBQUMsU0FBVjtBQUFvQixPQUFLLEVBQUMsNEJBQTFCO0FBQXVELFNBQU8sRUFBQztBQUEvRCxHQUErRUEsS0FBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUNFO0FBQU0sR0FBQyxFQUFDLDQySkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsQ0FERjs7QUFNQSxNQUFNa2EsVUFBVSxHQUFJbGEsS0FBRCxJQUNqQjtBQUFLLE1BQUksRUFBQztBQUFWLEdBQXFCQSxLQUFyQjtBQUE0QixTQUFPLEVBQUMsV0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUNFO0FBQ0UsVUFBUSxFQUFDLFNBRFg7QUFFRSxVQUFRLEVBQUMsU0FGWDtBQUdFLEdBQUMsRUFBQyxpM0NBSEo7QUFJRSxNQUFJLEVBQUMsTUFKUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsQ0FERjs7QUFXQSxNQUFNbWEsVUFBVSxHQUFJbmEsS0FBRCxJQUNqQjtBQUFLLE1BQUksRUFBQztBQUFWLEdBQXFCQSxLQUFyQjtBQUE0QixTQUFPLEVBQUMsV0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUNFO0FBQ0UsR0FBQyxFQUFDLDhxRUFESjtBQUVFLE1BQUksRUFBQyxNQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFERixDQURGOztBQVNBLE1BQU1vYSxJQUFJLEdBQUlwYSxLQUFELElBQ1g7QUFBSyxPQUFLLEVBQUM7QUFBWCxHQUE0Q0EsS0FBNUM7QUFBbUQsU0FBTyxFQUFDLGFBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFDRTtBQUNFLE1BQUksRUFBQyxNQURQO0FBRUUsR0FBQyxFQUFDLG11REFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsQ0FERjs7QUFTQSxNQUFNcWEsSUFBSSxHQUFJcmEsS0FBRCxJQUNYO0FBQUssTUFBSSxFQUFDO0FBQVYsR0FBcUJBLEtBQXJCO0FBQTRCLFNBQU8sRUFBQyxXQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQ0U7QUFDRSxHQUFDLEVBQUMsazBDQURKO0FBRUUsTUFBSSxFQUFDLE1BRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURGLENBREY7O0FBU0EsTUFBTXNhLFdBQVcsR0FBSXRhLEtBQUQsSUFDbEI7QUFBSyxNQUFJLEVBQUM7QUFBVixHQUFxQkEsS0FBckI7QUFBNEIsU0FBTyxFQUFDLFdBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFDRTtBQUNFLEdBQUMsRUFBQyx1dkNBREo7QUFFRSxNQUFJLEVBQUMsTUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsQ0FERjs7QUFTQSxNQUFNdWEsS0FBSyxHQUFJdmEsS0FBRCxJQUNaO0FBQUssTUFBSSxFQUFDLFNBQVY7QUFBb0IsT0FBSyxFQUFDLDRCQUExQjtBQUF1RCxTQUFPLEVBQUM7QUFBL0QsR0FBK0VBLEtBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFDRTtBQUFNLEdBQUMsRUFBQyxxM0NBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURGLENBREYsQzs7Ozs7Ozs7Ozs7O0FDeklBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxNQUFNd2EsU0FBUyxHQUFHLE1BQWxCLEMsQ0FFQTtBQUNBOztBQUNBLE1BQU1DLFlBQVksR0FBR0MseURBQWEsQ0FDaEN2WSxPQUFPLENBQUN3WSxHQUFSLENBQVlDLDBCQURvQixFQUVoQ3pZLE9BQU8sQ0FBQ3dZLEdBQVIsQ0FBWUUsOEJBRm9CLENBQWxDOzs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNQyxRQUFRLEdBQUdDLHNEQUFNLENBQUNDLEdBQUk7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSwrQjs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxtQyIsImZpbGUiOiJwYWdlcy93aWtpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvd2lraS5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBIdHRwTGluaywgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCB7IGNvbmNhdFBhZ2luYXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudC91dGlsaXRpZXMnO1xuXG5sZXQgYXBvbGxvQ2xpZW50O1xuXG5mdW5jdGlvbiBjcmVhdGVBcG9sbG9DbGllbnQoKSB7XG4gIHJldHVybiBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICBzc3JNb2RlOiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyxcbiAgICBsaW5rOiBuZXcgSHR0cExpbmsoe1xuICAgICAgdXJpOiAnaHR0cHM6Ly9jZG4ud2VzdGVyb3NjcmFmdC5jb20vYXBpJywgLy8gU2VydmVyIFVSTCAobXVzdCBiZSBhYnNvbHV0ZSlcbiAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nIC8vIEFkZGl0aW9uYWwgZmV0Y2goKSBvcHRpb25zIGxpa2UgYGNyZWRlbnRpYWxzYCBvciBgaGVhZGVyc2BcbiAgICB9KSxcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoe1xuICAgICAgdHlwZVBvbGljaWVzOiB7XG4gICAgICAgIFF1ZXJ5OiB7XG4gICAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgICBhbGxQb3N0czogY29uY2F0UGFnaW5hdGlvbigpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQXBvbGxvKGluaXRpYWxTdGF0ZSA9IG51bGwpIHtcbiAgY29uc3QgX2Fwb2xsb0NsaWVudCA9IGFwb2xsb0NsaWVudCA/PyBjcmVhdGVBcG9sbG9DbGllbnQoKTtcblxuICAvLyBJZiB5b3VyIHBhZ2UgaGFzIE5leHQuanMgZGF0YSBmZXRjaGluZyBtZXRob2RzIHRoYXQgdXNlIEFwb2xsbyBDbGllbnQsIHRoZSBpbml0aWFsIHN0YXRlXG4gIC8vIGdldHMgaHlkcmF0ZWQgaGVyZVxuICBpZiAoaW5pdGlhbFN0YXRlKSB7XG4gICAgLy8gR2V0IGV4aXN0aW5nIGNhY2hlLCBsb2FkZWQgZHVyaW5nIGNsaWVudCBzaWRlIGRhdGEgZmV0Y2hpbmdcbiAgICBjb25zdCBleGlzdGluZ0NhY2hlID0gX2Fwb2xsb0NsaWVudC5leHRyYWN0KCk7XG4gICAgLy8gUmVzdG9yZSB0aGUgY2FjaGUgdXNpbmcgdGhlIGRhdGEgcGFzc2VkIGZyb20gZ2V0U3RhdGljUHJvcHMvZ2V0U2VydmVyU2lkZVByb3BzXG4gICAgLy8gY29tYmluZWQgd2l0aCB0aGUgZXhpc3RpbmcgY2FjaGVkIGRhdGFcbiAgICBfYXBvbGxvQ2xpZW50LmNhY2hlLnJlc3RvcmUoeyAuLi5leGlzdGluZ0NhY2hlLCAuLi5pbml0aWFsU3RhdGUgfSk7XG4gIH1cbiAgLy8gRm9yIFNTRyBhbmQgU1NSIGFsd2F5cyBjcmVhdGUgYSBuZXcgQXBvbGxvIENsaWVudFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBfYXBvbGxvQ2xpZW50O1xuICAvLyBDcmVhdGUgdGhlIEFwb2xsbyBDbGllbnQgb25jZSBpbiB0aGUgY2xpZW50XG4gIGlmICghYXBvbGxvQ2xpZW50KSBhcG9sbG9DbGllbnQgPSBfYXBvbGxvQ2xpZW50O1xuXG4gIHJldHVybiBfYXBvbGxvQ2xpZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQXBvbGxvKGluaXRpYWxTdGF0ZSkge1xuICBjb25zdCBzdG9yZSA9IHVzZU1lbW8oKCkgPT4gaW5pdGlhbGl6ZUFwb2xsbyhpbml0aWFsU3RhdGUpLCBbaW5pdGlhbFN0YXRlXSk7XG4gIHJldHVybiBzdG9yZTtcbn1cbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICBjb25zdCBjdXJMb2NhbGUgPVxuICAgIG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW4sXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3csIGxvY2FsZSB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcblxuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSB1c2VJbnRlcnNlY3Rpb24oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gIH0pXG4gIGNvbnN0IHNldFJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKVxuICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtjaGlsZFJlZiwgc2V0SW50ZXJzZWN0aW9uUmVmXVxuICApXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiBpc0xvY2FsVVJMKGhyZWYpXG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcbiAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXVxuICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgIGxvY2FsZTogY3VyTG9jYWxlLFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFthcywgaHJlZiwgaXNWaXNpYmxlLCBsb2NhbGUsIHAsIHJvdXRlcl0pXG5cbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiBzZXRSZWYsXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgIH1cbiAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShcbiAgICAgICAgYXMsXG4gICAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGUsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZVxuICAgICAgKVxuICAgIClcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwidHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlID0gYW55XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zID0ge1xuICB0aW1lb3V0OiBudW1iZXJcbn1cbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lID0ge1xuICByZWFkb25seSBkaWRUaW1lb3V0OiBib29sZWFuXG4gIHRpbWVSZW1haW5pbmc6ICgpID0+IG51bWJlclxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2s6IChcbiAgICAgIGNhbGxiYWNrOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZCxcbiAgICAgIG9wdHM/OiBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9uc1xuICAgICkgPT4gUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZVxuICB9XG59XG5cbmNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKGNiOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZCkge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdElkbGVDYWxsYmFja1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBDbGllbnRCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vYnVpbGQvd2VicGFjay9wbHVnaW5zL2J1aWxkLW1hbmlmZXN0LXBsdWdpbidcbmltcG9ydCBnZXRBc3NldFBhdGhGcm9tUm91dGUgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlJ1xuaW1wb3J0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDBcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBfX0JVSUxEX01BTklGRVNUPzogQ2xpZW50QnVpbGRNYW5pZmVzdFxuICAgIF9fQlVJTERfTUFOSUZFU1RfQ0I/OiBGdW5jdGlvblxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgZXhwb3J0czogYW55XG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlRW50cnlwb2ludCA9IExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHwgTG9hZGVkRW50cnlwb2ludEZhaWx1cmVcblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZVN0eWxlU2hlZXQge1xuICBocmVmOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVTdWNjZXNzIGV4dGVuZHMgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdXG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlRmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUxvYWRlckVudHJ5ID0gTG9hZGVkUm91dGVTdWNjZXNzIHwgTG9hZGVkUm91dGVGYWlsdXJlXG5cbmV4cG9ydCB0eXBlIEZ1dHVyZTxWPiA9IHtcbiAgcmVzb2x2ZTogKGVudHJ5cG9pbnQ6IFYpID0+IHZvaWRcbiAgZnV0dXJlOiBQcm9taXNlPFY+XG59XG5mdW5jdGlvbiB3aXRoRnV0dXJlPFQ+KFxuICBrZXk6IHN0cmluZyxcbiAgbWFwOiBNYXA8c3RyaW5nLCBGdXR1cmU8VD4gfCBUPixcbiAgZ2VuZXJhdG9yPzogKCkgPT4gUHJvbWlzZTxUPlxuKTogUHJvbWlzZTxUPiB7XG4gIGxldCBlbnRyeTogRnV0dXJlPFQ+IHwgVCB8IHVuZGVmaW5lZCA9IG1hcC5nZXQoa2V5KVxuICBpZiAoZW50cnkpIHtcbiAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgIHJldHVybiBlbnRyeS5mdXR1cmVcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSlcbiAgfVxuICBsZXQgcmVzb2x2ZXI6IChlbnRyeXBvaW50OiBUKSA9PiB2b2lkXG4gIGNvbnN0IHByb20gPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSkgPT4ge1xuICAgIHJlc29sdmVyID0gcmVzb2x2ZVxuICB9KVxuICBtYXAuc2V0KGtleSwgKGVudHJ5ID0geyByZXNvbHZlOiByZXNvbHZlciEsIGZ1dHVyZTogcHJvbSB9KSlcbiAgcmV0dXJuIGdlbmVyYXRvclxuICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpID0+IChyZXNvbHZlcih2YWx1ZSksIHZhbHVlKSlcbiAgICA6IHByb21cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZUxvYWRlciB7XG4gIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlRW50cnlwb2ludD5cbiAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pOiB2b2lkXG4gIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUxvYWRlckVudHJ5PlxuICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxufVxuXG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rPzogSFRNTExpbmtFbGVtZW50KTogYm9vbGVhbiB7XG4gIHRyeSB7XG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICAgIHJldHVybiAoXG4gICAgICAvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISEoZG9jdW1lbnQgYXMgYW55KS5kb2N1bWVudE1vZGUpIHx8XG4gICAgICBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJylcbiAgICApXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmNvbnN0IGNhblByZWZldGNoOiBib29sZWFuID0gaGFzUHJlZmV0Y2goKVxuXG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBsaW5rPzogSFRNTExpbmtFbGVtZW50XG4pOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgIHJldHVybiByZXMoKVxuICAgIH1cblxuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgaWYgKGFzKSBsaW5rIS5hcyA9IGFzXG4gICAgbGluayEucmVsID0gYHByZWZldGNoYFxuICAgIGxpbmshLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcbiAgICBsaW5rIS5vbmxvYWQgPSByZXNcbiAgICBsaW5rIS5vbmVycm9yID0gcmVqXG5cbiAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgIGxpbmshLmhyZWYgPSBocmVmXG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspXG4gIH0pXG59XG5cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKVxuLy8gVE9ETzogdW5leHBvcnRcbmV4cG9ydCBmdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge30pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyPzogRXJyb3IpIHtcbiAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVyclxufVxuXG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoXG4gIHNyYzogc3RyaW5nLFxuICBzY3JpcHQ/OiBIVE1MU2NyaXB0RWxlbWVudFxuKTogUHJvbWlzZTx1bmtub3duPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PlxuICAgICAgcmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG5cbiAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuXG4gICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICBzY3JpcHQuc3JjID0gc3JjXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGlkbGVUaW1lb3V0PFQ+KG1zOiBudW1iZXIsIGVycjogRXJyb3IpOiBQcm9taXNlPFQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChfcmVzb2x2ZSwgcmVqZWN0KSA9PlxuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VGltZW91dCgoKSA9PiByZWplY3QoZXJyKSwgbXMpKVxuICApXG59XG5cbi8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpOiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+IHtcbiAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKVxuICB9XG5cbiAgY29uc3Qgb25CdWlsZE1hbmlmZXN0ID0gbmV3IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4oKHJlc29sdmUpID0+IHtcbiAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0JcbiAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVClcbiAgICAgIGNiICYmIGNiKClcbiAgICB9XG4gIH0pXG4gIHJldHVybiBQcm9taXNlLnJhY2UoW1xuICAgIG9uQnVpbGRNYW5pZmVzdCxcbiAgICBpZGxlVGltZW91dDxDbGllbnRCdWlsZE1hbmlmZXN0PihcbiAgICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgICAgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSlcbiAgICApLFxuICBdKVxufVxuXG5pbnRlcmZhY2UgUm91dGVGaWxlcyB7XG4gIHNjcmlwdHM6IHN0cmluZ1tdXG4gIGNzczogc3RyaW5nW11cbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoXG4gIGFzc2V0UHJlZml4OiBzdHJpbmcsXG4gIHJvdXRlOiBzdHJpbmdcbik6IFByb21pc2U8Um91dGVGaWxlcz4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAgYXNzZXRQcmVmaXggK1xuICAgICAgICAgICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgK1xuICAgICAgICAgIGVuY29kZVVSSShnZXRBc3NldFBhdGhGcm9tUm91dGUocm91dGUsICcuanMnKSksXG4gICAgICBdLFxuICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgY3NzOiBbXSxcbiAgICB9KVxuICB9XG4gIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpID0+IHtcbiAgICBpZiAoIShyb3V0ZSBpbiBtYW5pZmVzdCkpIHtcbiAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSlcbiAgICB9XG4gICAgY29uc3QgYWxsRmlsZXMgPSBtYW5pZmVzdFtyb3V0ZV0ubWFwKFxuICAgICAgKGVudHJ5KSA9PiBhc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICApXG4gICAgcmV0dXJuIHtcbiAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmpzJykpLFxuICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5jc3MnKSksXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeDogc3RyaW5nKTogUm91dGVMb2FkZXIge1xuICBjb25zdCBlbnRyeXBvaW50czogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVFbnRyeXBvaW50PiB8IFJvdXRlRW50cnlwb2ludFxuICA+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IGxvYWRlZFNjcmlwdHM6IE1hcDxzdHJpbmcsIFByb21pc2U8dW5rbm93bj4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHN0eWxlU2hlZXRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHJvdXRlczogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4gfCBSb3V0ZUxvYWRlckVudHJ5XG4gID4gPSBuZXcgTWFwKClcblxuICBmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjOiBzdHJpbmcpOiBQcm9taXNlPHVua25vd24+IHtcbiAgICBsZXQgcHJvbSA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYylcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgIH1cblxuICAgIGxvYWRlZFNjcmlwdHMuc2V0KHNyYywgKHByb20gPSBhcHBlbmRTY3JpcHQoc3JjKSkpXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIGZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4ge1xuICAgIGxldCBwcm9tID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgc3R5bGVTaGVldHMuc2V0KFxuICAgICAgaHJlZixcbiAgICAgIChwcm9tID0gZmV0Y2goaHJlZilcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KSA9PiAoeyBocmVmOiBocmVmLCBjb250ZW50OiB0ZXh0IH0pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycilcbiAgICAgICAgfSkpXG4gICAgKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cylcbiAgICB9LFxuICAgIG9uRW50cnlwb2ludChyb3V0ZSwgZXhlY3V0ZSkge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpXG4gICAgICAgIC50aGVuKChmbikgPT4gZm4oKSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgKGV4cG9ydHM6IGFueSkgPT4gKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogKGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0KSB8fCBleHBvcnRzLFxuICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0cyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAoZXJyKSA9PiAoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKGlucHV0OiBSb3V0ZUVudHJ5cG9pbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpXG4gICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dClcbiAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgbG9hZFJvdXRlKHJvdXRlKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5Pihyb3V0ZSwgcm91dGVzLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgeyBzY3JpcHRzLCBjc3MgfSA9IGF3YWl0IGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAgIGNvbnN0IFssIHN0eWxlc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpXG4gICAgICAgICAgICAgID8gW11cbiAgICAgICAgICAgICAgOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksXG4gICAgICAgICAgXSBhcyBjb25zdClcblxuICAgICAgICAgIGNvbnN0IGVudHJ5cG9pbnQgPSBhd2FpdCBQcm9taXNlLnJhY2UoW1xuICAgICAgICAgICAgdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSksXG4gICAgICAgICAgICBpZGxlVGltZW91dDxSb3V0ZUxvYWRlckVudHJ5PihcbiAgICAgICAgICAgICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgICAgICAgICAgIG1hcmtBc3NldEVycm9yKFxuICAgICAgICAgICAgICAgIG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSlcbiAgICAgICAgICBjb25zdCByZXM6IFJvdXRlTG9hZGVyRW50cnkgPSBPYmplY3QuYXNzaWduPFxuICAgICAgICAgICAgeyBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdIH0sXG4gICAgICAgICAgICBSb3V0ZUVudHJ5cG9pbnRcbiAgICAgICAgICA+KHsgc3R5bGVzIH0sIGVudHJ5cG9pbnQpXG4gICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXNcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGVyciB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBwcmVmZXRjaChyb3V0ZSkge1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuICAgICAgLy8gTGljZW5zZTogQXBhY2hlIDIuMFxuICAgICAgbGV0IGNuXG4gICAgICBpZiAoKGNuID0gKG5hdmlnYXRvciBhcyBhbnkpLmNvbm5lY3Rpb24pKSB7XG4gICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgIH1cbiAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgLnRoZW4oKG91dHB1dCkgPT5cbiAgICAgICAgICBQcm9taXNlLmFsbChcbiAgICAgICAgICAgIGNhblByZWZldGNoXG4gICAgICAgICAgICAgID8gb3V0cHV0LnNjcmlwdHMubWFwKChzY3JpcHQpID0+IHByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpKVxuICAgICAgICAgICAgICA6IFtdXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHRoaXMubG9hZFJvdXRlKHJvdXRlKSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKFxuICAgICAgICAgIC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4gICAgICAgICAgKCkgPT4ge31cbiAgICAgICAgKVxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUm91dGVMb2FkZXJcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG5cbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uPFQgZXh0ZW5kcyBFbGVtZW50Pih7XG4gIHJvb3RNYXJnaW4sXG4gIGRpc2FibGVkLFxufTogVXNlSW50ZXJzZWN0aW9uKTogWyhlbGVtZW50OiBUIHwgbnVsbCkgPT4gdm9pZCwgYm9vbGVhbl0ge1xuICBjb25zdCBpc0Rpc2FibGVkID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG5cbiAgY29uc3QgdW5vYnNlcnZlID0gdXNlUmVmPEZ1bmN0aW9uPigpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNldFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbDogVCB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpXG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVyblxuXG4gICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSxcbiAgICAgICAgICB7IHJvb3RNYXJnaW4gfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEaXNhYmxlZCwgcm9vdE1hcmdpbiwgdmlzaWJsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgaWYgKCF2aXNpYmxlKSByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHNldFZpc2libGUodHJ1ZSkpXG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHZpc2libGVdXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIGNhbGxiYWNrOiBPYnNlcnZlQ2FsbGJhY2ssXG4gIG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxuKSB7XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucylcbiAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpIHtcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcblxuICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwPFxuICBzdHJpbmcsXG4gIHtcbiAgICBpZDogc3RyaW5nXG4gICAgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG4gICAgZWxlbWVudHM6IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+XG4gIH1cbj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KSB7XG4gIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnXG4gIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpXG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz4oKVxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldClcbiAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMFxuICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgb3B0aW9ucylcblxuICBvYnNlcnZlcnMuc2V0KFxuICAgIGlkLFxuICAgIChpbnN0YW5jZSA9IHtcbiAgICAgIGlkLFxuICAgICAgb2JzZXJ2ZXIsXG4gICAgICBlbGVtZW50cyxcbiAgICB9KVxuICApXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gIHBhdGhuYW1lOiBzdHJpbmcsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuKToge1xuICBkZXRlY3RlZExvY2FsZT86IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG59IHtcbiAgbGV0IGRldGVjdGVkTG9jYWxlOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgLy8gZmlyc3QgaXRlbSB3aWxsIGJlIGVtcHR5IHN0cmluZyBmcm9tIHNwbGl0dGluZyBhdCBmaXJzdCBjaGFyXG4gIGNvbnN0IHBhdGhuYW1lUGFydHMgPSBwYXRobmFtZS5zcGxpdCgnLycpXG5cbiAgOyhsb2NhbGVzIHx8IFtdKS5zb21lKChsb2NhbGUpID0+IHtcbiAgICBpZiAocGF0aG5hbWVQYXJ0c1sxXS50b0xvd2VyQ2FzZSgpID09PSBsb2NhbGUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgZGV0ZWN0ZWRMb2NhbGUgPSBsb2NhbGVcbiAgICAgIHBhdGhuYW1lUGFydHMuc3BsaWNlKDEsIDEpXG4gICAgICBwYXRobmFtZSA9IHBhdGhuYW1lUGFydHMuam9pbignLycpIHx8ICcvJ1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBkZXRlY3RlZExvY2FsZSxcbiAgfVxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7XG4gIGdldENsaWVudEJ1aWxkTWFuaWZlc3QsXG4gIGlzQXNzZXRFcnJvcixcbiAgbWFya0Fzc2V0RXJyb3IsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCB7IG5vcm1hbGl6ZUxvY2FsZVBhdGggfSBmcm9tICcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgZXNjYXBlUGF0aERlbGltaXRlcnMgZnJvbSAnLi91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmludGVyZmFjZSBSb3V0ZVByb3BlcnRpZXMge1xuICBzaGFsbG93OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJlxuICAgICAgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpICYmXG4gICAgICBwYXRoICE9PSAnLycgKyBsb2NhbGVcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgKHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpIHx8IHBhdGggPT09ICcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKS5tYXAoZXNjYXBlUGF0aERlbGltaXRlcnMpLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gIGlmICghaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPVxuICB8IChPbWl0PENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ3N0eWxlU2hlZXRzJz4gJiB7IGluaXRpYWw6IHRydWUgfSlcbiAgfCBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm9cblxuZXhwb3J0IHR5cGUgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORF9FUlJPUiA9ICdTU0cgRGF0YSBOT1RfRk9VTkQnXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgLy8gVE9ETzogaGFuZGxlIHJlbG9hZGluZyBpbiBkZXZlbG9wbWVudCBmcm9tIGZhbGxiYWNrIHJldHVybmluZyAyMDBcbiAgICAgICAgLy8gdG8gb24tZGVtYW5kLWVudHJ5LWhhbmRsZXIgY2F1c2luZyBpdCB0byByZWxvYWQgcGVyaW9kaWNhbGx5XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihTU0dfREFUQV9OT1RfRk9VTkRfRVJST1IpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpLFxuICAgICAgICAgIHsgbG9jYWxlIH1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlLFxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBsZXQgbG9jYWxlQ2hhbmdlID0gb3B0aW9ucy5sb2NhbGUgIT09IHRoaXMubG9jYWxlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2VcbiAgICAgICAgICA/IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGVcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlXG4gICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWUpXG4gICAgICB9XG5cbiAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgIGlmICghdGhpcy5sb2NhbGVzPy5pbmNsdWRlcyh0aGlzLmxvY2FsZSEpKSB7XG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7IHNoYWxsb3cgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShcbiAgICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICAgIG9wdGlvbnMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgIClcbiAgICApXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGxldCBwYWdlczogYW55LCByZXdyaXRlczogYW55XG4gICAgdHJ5IHtcbiAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIGFkZEJhc2VQYXRoKFxuICAgICAgICAgIGFkZExvY2FsZShkZWxCYXNlUGF0aChwYXJzZVJlbGF0aXZlVXJsKGFzKS5wYXRobmFtZSksIHRoaXMubG9jYWxlKVxuICAgICAgICApLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSEsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuXG4gICAgICBpZiAocmVzb2x2ZWRBcyAhPT0gYXMpIHtcbiAgICAgICAgY29uc3QgcG90ZW50aWFsSHJlZiA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkLCB7XG4gICAgICAgICAgICAgIHBhdGhuYW1lOiBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICAgICAgICAgIGhhc0Jhc2VQYXRoKHJlc29sdmVkQXMpID8gZGVsQmFzZVBhdGgocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzLFxuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICAgICAgICApLnBhdGhuYW1lLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgKS5wYXRobmFtZSFcbiAgICAgICAgKVxuXG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBvdGVudGlhbEhyZWYpKSB7XG4gICAgICAgICAgcm91dGUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGF0aG5hbWUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoXG4gICAgICAgIChfX05fU1NHIHx8IF9fTl9TU1ApICYmXG4gICAgICAgIHByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkSHJlZiwgcGFnZXMsIGZhbHNlKVxuXG4gICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsLCBhczogbmV3QXMgfSA9IHByZXBhcmVVcmxBcyhcbiAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uXG4gICAgICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSEsIHF1ZXJ5LCBjbGVhbmVkQXMsIHJvdXRlSW5mbykuY2F0Y2goXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uICYmICdfTl9YJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKChvcHRpb25zIGFzIGFueSkuX05fWCwgKG9wdGlvbnMgYXMgYW55KS5fTl9ZKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKGlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGxldCBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIGxldCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZFxuICAgICAgY29uc3Qgc3NnNDA0ID0gZXJyLm1lc3NhZ2UgPT09IFNTR19EQVRBX05PVF9GT1VORF9FUlJPUlxuXG4gICAgICBpZiAoc3NnNDA0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbGV0IG1vZDogYW55XG4gICAgICAgICAgOyh7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMsIG1vZCB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAgICcvNDA0J1xuICAgICAgICAgICkpXG5cbiAgICAgICAgICAvLyBUT0RPOiBzaG91bGQgd2UgdG9sZXJhdGUgdGhlc2UgcHJvcHMgbWlzc2luZyBhbmQgc3RpbGwgcmVuZGVyIHRoZVxuICAgICAgICAgIC8vIHBhZ2UgaW5zdGVhZCBvZiBmYWxsaW5nIGJhY2sgdG8gX2Vycm9yP1xuICAgICAgICAgIGlmIChtb2QgJiYgbW9kLl9fTl9TU0cpIHtcbiAgICAgICAgICAgIHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0U3RhdGljRGF0YShcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCcvNDA0JywgJy80MDQnLCB0cnVlLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKF9lcnIpIHtcbiAgICAgICAgICAvLyBub24tZmF0YWwgZmFsbGJhY2sgdG8gX2Vycm9yXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgQ29tcG9uZW50ISA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgdHlwZW9mIHN0eWxlU2hlZXRzISA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICkge1xuICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAnL19lcnJvcidcbiAgICAgICAgKSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIHByb3BzLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnI6IHNzZzQwNCA/IHVuZGVmaW5lZCA6IGVycixcbiAgICAgICAgZXJyb3I6IHNzZzQwNCA/IHVuZGVmaW5lZCA6IGVycixcbiAgICAgIH1cblxuICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgfSBhcyBhbnkpXG4gICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgICAgICByb3V0ZUluZm9FcnIsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHMsXG4gICAgICAgIHRydWVcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXNcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID0gdGhpcy5jb21wb25lbnRzW1xuICAgICAgICByb3V0ZVxuICAgICAgXVxuICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPVxuICAgICAgICBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgIDogZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICBfcmVzb2x2ZUhyZWYocGFyc2VkSHJlZjogVXJsT2JqZWN0LCBwYWdlczogc3RyaW5nW10sIGFwcGx5QmFzZVBhdGggPSB0cnVlKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgIGRlbm9ybWFsaXplUGFnZVBhdGgoYXBwbHlCYXNlUGF0aCA/IGRlbEJhc2VQYXRoKHBhdGhuYW1lISkgOiBwYXRobmFtZSEpXG4gICAgKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFwcGx5QmFzZVBhdGggPyBhZGRCYXNlUGF0aChwYWdlKSA6IHBhZ2VcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGFyc2VkSHJlZi5wYXRobmFtZSEpXG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHBhdGhuYW1lID0gbm9ybWFsaXplTG9jYWxlUGF0aCEocGF0aG5hbWUsIHRoaXMubG9jYWxlcykucGF0aG5hbWVcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuXG4gICAgICAgIGxldCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKVxuICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aCEoXG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgYXNQYXRoID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcywgZmFsc2UpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHVybCkudGhlbigoaXNTc2c6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgcmV0dXJuIGlzU3NnXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKFxuICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzUGF0aCxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5sb2NhbGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogZmFsc2VcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZywgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoXG4gICAgICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAgICAgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFByaXZhdGVSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIGVzY2FwZSBkZWxpbWl0ZXJzIHVzZWQgYnkgcGF0aC10by1yZWdleHBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHNlZ21lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzZWdtZW50LnJlcGxhY2UoL1svIz9dL2csIChjaGFyOiBzdHJpbmcpID0+IGVuY29kZVVSSUNvbXBvbmVudChjaGFyKSlcbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IGdsb2JhbEJhc2UgPSBuZXcgVVJMKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbiAgKVxuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBnbG9iYWxCYXNlKSA6IGdsb2JhbEJhc2VcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBzZWFyY2gsIGhhc2gsIGhyZWYsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICB1cmwsXG4gICAgcmVzb2x2ZWRCYXNlXG4gIClcbiAgaWYgKG9yaWdpbiAhPT0gZ2xvYmFsQmFzZS5vcmlnaW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24obWF0Y2hlclJlZ2V4LCBrZXlzKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlTm9uUGF0aCh2YWx1ZTogc3RyaW5nLCBwYXJhbXM6IFBhcmFtcyk6IHN0cmluZyB7XG4gIGlmICghdmFsdWUuaW5jbHVkZXMoJzonKSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMocGFyYW1zKSkge1xuICAgIGlmICh2YWx1ZS5pbmNsdWRlcyhgOiR7a2V5fWApKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlXG4gICAgICAgIC5yZXBsYWNlKFxuICAgICAgICAgIG5ldyBSZWdFeHAoYDoke2tleX1cXFxcKmAsICdnJyksXG4gICAgICAgICAgYDoke2tleX0tLUVTQ0FQRURfUEFSQU1fQVNURVJJU0tTYFxuICAgICAgICApXG4gICAgICAgIC5yZXBsYWNlKFxuICAgICAgICAgIG5ldyBSZWdFeHAoYDoke2tleX1cXFxcP2AsICdnJyksXG4gICAgICAgICAgYDoke2tleX0tLUVTQ0FQRURfUEFSQU1fUVVFU1RJT05gXG4gICAgICAgIClcbiAgICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cChgOiR7a2V5fVxcXFwrYCwgJ2cnKSwgYDoke2tleX0tLUVTQ0FQRURfUEFSQU1fUExVU2ApXG4gICAgICAgIC5yZXBsYWNlKFxuICAgICAgICAgIG5ldyBSZWdFeHAoYDoke2tleX0oPyFcXFxcdylgLCAnZycpLFxuICAgICAgICAgIGAtLUVTQ0FQRURfUEFSQU1fQ09MT04ke2tleX1gXG4gICAgICAgIClcbiAgICB9XG4gIH1cbiAgdmFsdWUgPSB2YWx1ZVxuICAgIC5yZXBsYWNlKC8oOnxcXCp8XFw/fFxcK3xcXCh8XFwpfFxce3xcXH0pL2csICdcXFxcJDEnKVxuICAgIC5yZXBsYWNlKC8tLUVTQ0FQRURfUEFSQU1fUExVUy9nLCAnKycpXG4gICAgLnJlcGxhY2UoLy0tRVNDQVBFRF9QQVJBTV9DT0xPTi9nLCAnOicpXG4gICAgLnJlcGxhY2UoLy0tRVNDQVBFRF9QQVJBTV9RVUVTVElPTi9nLCAnPycpXG4gICAgLnJlcGxhY2UoLy0tRVNDQVBFRF9QQVJBTV9BU1RFUklTS1MvZywgJyonKVxuXG4gIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAvLyBjb3JyZWN0bHlcbiAgcmV0dXJuIHBhdGhUb1JlZ2V4cFxuICAgIC5jb21waWxlKGAvJHt2YWx1ZX1gLCB7IHZhbGlkYXRlOiBmYWxzZSB9KShwYXJhbXMpXG4gICAgLnN1YnN0cigxKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwYXJlRGVzdGluYXRpb24oXG4gIGRlc3RpbmF0aW9uOiBzdHJpbmcsXG4gIHBhcmFtczogUGFyYW1zLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIGFwcGVuZFBhcmFtc1RvUXVlcnk6IGJvb2xlYW5cbikge1xuICBsZXQgcGFyc2VkRGVzdGluYXRpb246IHtcbiAgICBxdWVyeT86IFBhcnNlZFVybFF1ZXJ5XG4gICAgcHJvdG9jb2w/OiBzdHJpbmdcbiAgICBob3N0bmFtZT86IHN0cmluZ1xuICAgIHBvcnQ/OiBzdHJpbmdcbiAgfSAmIFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+ID0ge30gYXMgYW55XG5cbiAgLy8gY2xvbmUgcXVlcnkgc28gd2UgZG9uJ3QgbW9kaWZ5IHRoZSBvcmlnaW5hbFxuICBxdWVyeSA9IE9iamVjdC5hc3NpZ24oe30sIHF1ZXJ5KVxuICBjb25zdCBoYWRMb2NhbGUgPSBxdWVyeS5fX25leHRMb2NhbGVcbiAgZGVsZXRlIHF1ZXJ5Ll9fbmV4dExvY2FsZVxuICBkZWxldGUgcXVlcnkuX19uZXh0RGVmYXVsdExvY2FsZVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gY29tcGlsZU5vblBhdGgodmFsdWUsIHBhcmFtcylcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBsZXQgcGFyYW1LZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKVxuXG4gIC8vIHJlbW92ZSBpbnRlcm5hbCBwYXJhbSBmb3IgaTE4blxuICBpZiAoaGFkTG9jYWxlKSB7XG4gICAgcGFyYW1LZXlzID0gcGFyYW1LZXlzLmZpbHRlcigobmFtZSkgPT4gbmFtZSAhPT0gJ25leHRJbnRlcm5hbExvY2FsZScpXG4gIH1cblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0cnkge1xuICAgIG5ld1VybCA9IGRlc3RpbmF0aW9uQ29tcGlsZXIocGFyYW1zKVxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgKHBhcnNlZERlc3RpbmF0aW9uIGFzIGFueSkuc2VhcmNoXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5pbXBvcnQgeyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBub3JtYWxpemVMb2NhbGVQYXRoIH0gZnJvbSAnLi4vLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZyxcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4pIHtcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhub3JtYWxpemVMb2NhbGVQYXRoKGFzUGF0aCwgbG9jYWxlcykucGF0aG5hbWUpKSB7XG4gICAgZm9yIChjb25zdCByZXdyaXRlIG9mIHJld3JpdGVzKSB7XG4gICAgICBjb25zdCBtYXRjaGVyID0gY3VzdG9tUm91dGVNYXRjaGVyKHJld3JpdGUuc291cmNlKVxuICAgICAgY29uc3QgcGFyYW1zID0gbWF0Y2hlcihhc1BhdGgpXG5cbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFyZXdyaXRlLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBhIHByb3hpZWQgcmV3cml0ZSB3aGljaCBpc24ndCBoYW5kbGVkIG9uIHRoZSBjbGllbnRcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlc3RSZXMgPSBwcmVwYXJlRGVzdGluYXRpb24oXG4gICAgICAgICAgcmV3cml0ZS5kZXN0aW5hdGlvbixcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgdHJ1ZVxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgY29uc3QgZnNQYXRobmFtZSA9IG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgICAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goYXNQYXRoKSxcbiAgICAgICAgICBsb2NhbGVzXG4gICAgICAgICkucGF0aG5hbWVcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMoZnNQYXRobmFtZSkpIHtcbiAgICAgICAgICBhc1BhdGggPSBmc1BhdGhuYW1lXG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihmc1BhdGhuYW1lKVxuXG4gICAgICAgIGlmIChyZXNvbHZlZEhyZWYgIT09IGFzUGF0aCAmJiBwYWdlcy5pbmNsdWRlcyhyZXNvbHZlZEhyZWYpKSB7XG4gICAgICAgICAgYXNQYXRoID0gZnNQYXRobmFtZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIHNjcmlwdExvYWRlcjogeyBkZWZlcj86IHN0cmluZ1tdOyBlYWdlcj86IGFueVtdIH1cbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94LCBGbGV4LCBUZXh0IH0gZnJvbSAncmViYXNzJztcclxuaW1wb3J0IHsgUmVnaW9uSWNvbiB9IGZyb20gJy4uL2ljb25zL3JlZ2lvbkljb24nO1xyXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ2Vtb3Rpb24tdGhlbWluZyc7XHJcbmltcG9ydCB7IExvY2F0aW9uVHlwZUljb24gfSBmcm9tICcuLi9pY29ucy9sb2NhdGlvblR5cGVJY29uL2xvY2F0aW9uVHlwZUljb24nO1xyXG5pbXBvcnQgUG9wdXAgZnJvbSAncmVhY3Rqcy1wb3B1cCc7XHJcbmltcG9ydCB7IGNhbWVsQ2FzZUZvcm1hdHRlciB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdHkvaGVscGVycyc7XHJcbmltcG9ydCB7IERlc3RpbmF0aW9uU3RhdHVzSWNvbiB9IGZyb20gJy4uL2ljb25zL2Rlc3RpbmF0aW9uU3RhdHVzSWNvbi9kZXN0aW5hdGlvblN0YXR1c0ljb24nO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVudHJ5Q2FyZCA9IFJlYWN0LmZvcndhcmRSZWYoKHsgZGF0YSwgaHJlZiB9LCByZWYpID0+IHtcclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3hcclxuICAgICAgYXM9XCJhXCJcclxuICAgICAgaHJlZj17aHJlZn1cclxuICAgICAgY2xhc3NOYW1lPVwiZW50cnktY2FyZFwiXHJcbiAgICAgIHJlZj17cmVmfVxyXG4gICAgICBzeD17e1xyXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgIGJveFNoYWRvdzogJzAgMCAwIDFweCAjMTkxYTFiJyxcclxuICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgIGJhY2tncm91bmQ6IGRhdGEucHJvamVjdERldGFpbHMgPyB0aGVtZS5jb2xvcnNbZGF0YS5wcm9qZWN0RGV0YWlsc1swXS5yZWdpb25dIDogJyMzMzMzMzMnLFxyXG4gICAgICAgIHpJbmRleDogMSxcclxuICAgICAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgIH19XHJcbiAgICAgIG10PXtbNV19XHJcbiAgICAgIG1yPXtbMCwgbnVsbCwgNV19PlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgaGVpZ2h0PXsyNTJ9XHJcbiAgICAgICAgd2lkdGg9e1sxLCBudWxsLCAyNDBdfVxyXG4gICAgICAgIHN4PXt7XHJcbiAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICAgIGJveFNoYWRvdzogJyAwIDAgMCAycHggIzMzMzMzMycsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxyXG4gICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSknLFxyXG4gICAgICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgIGJveFNoYWRvdzogJyAwIDAgMCAycHggIzMzMzMzMycsXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtMC4zNWVtLCAtMC4zNWVtKSdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAnJjpiZWZvcmUnOiB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiJydcIixcclxuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAwLFxyXG4gICAgICAgICAgICBwYWRkaW5nVG9wOiAnOHJlbScsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICB6SW5kZXg6IDEsXHJcbiAgICAgICAgICAgIGJvcmRlckJvdHRvbTogJzJweCBzb2xpZCAjMzMzMzMzJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7XHJcbiAgICAgICAgICAgICAgKGRhdGEuaW1hZ2VzICYmIGRhdGEuaW1hZ2VzLmxlbmd0aCAmJiBkYXRhLmltYWdlc1swXS51cmwpIHx8XHJcbiAgICAgICAgICAgICAgKGRhdGEuaGVyb0ltYWdlICYmIGRhdGEuaGVyb0ltYWdlLmxlbmd0aCAmJiBkYXRhLmhlcm9JbWFnZVswXS51cmwpIHx8XHJcbiAgICAgICAgICAgICAgJ2h0dHBzOi8vY2RuLndlc3Rlcm9zY3JhZnQuY29tL3dlYi9hc3NldHMvaW1hZ2VzL2NyYWZ0aW5nLXRhYmxlLnN2ZydcclxuICAgICAgICAgICAgfSlgLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTpcclxuICAgICAgICAgICAgICBkYXRhLmltYWdlcyAmJiBkYXRhLmltYWdlcy5sZW5ndGggJiYgZGF0YS5pbWFnZXNbMF0udXJsXHJcbiAgICAgICAgICAgICAgICA/ICdjb3ZlcidcclxuICAgICAgICAgICAgICAgIDogWydhdXRvJywgbnVsbCwgJzMwJSddLFxyXG4gICAgICAgICAgICBib3hTaGFkb3c6IGBpbnNldCAwIDAuNzVyZW0gMCAke1xyXG4gICAgICAgICAgICAgIGRhdGEucHJvamVjdERldGFpbHMgPyB0aGVtZS5jb2xvcnNbZGF0YS5wcm9qZWN0RGV0YWlsc1swXS5yZWdpb25dIDogJyMzMzMzMzMnXHJcbiAgICAgICAgICAgIH1gXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfX1cclxuICAgICAgICBwdD17MTQwfVxyXG4gICAgICAgIHB4PXs0fVxyXG4gICAgICAgIHBiPXs1fT5cclxuICAgICAgICA8RmxleCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICA8RmxleCBmbGV4RGlyZWN0aW9uPVwicm93XCI+XHJcbiAgICAgICAgICAgIHtkYXRhLnR5cGVIYW5kbGUgPT09ICd3aWtpR3VpZGUnICYmIChcclxuICAgICAgICAgICAgICA8UG9wdXBcclxuICAgICAgICAgICAgICAgIG9uPVwiaG92ZXJcIlxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb249XCJib3R0b20gbGVmdFwiXHJcbiAgICAgICAgICAgICAgICBjb250ZW50U3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4J1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHRyaWdnZXI9e1xyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBoZWlnaHQ6ICcyNHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8UmVnaW9uSWNvbiByZWdpb249XCJndWlkZVwiIHdpZHRoPVwiMjRweFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIH0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCBhcz1cInNwYW5cIiBjb2xvcj1cInRleHRcIiBweD17NH0+XHJcbiAgICAgICAgICAgICAgICAgIEd1aWRlXHJcbiAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgPC9Qb3B1cD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge2RhdGEudHlwZUhhbmRsZSA9PT0gJ3dpa2lNaXNjZWxsYW5lb3VzJyAmJiAoXHJcbiAgICAgICAgICAgICAgPFBvcHVwXHJcbiAgICAgICAgICAgICAgICBvbj1cImhvdmVyXCJcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwiYm90dG9tIGxlZnRcIlxyXG4gICAgICAgICAgICAgICAgY29udGVudFN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzRweCdcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyPXtcclxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgaGVpZ2h0OiAnMjRweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJlZ2lvbkljb24gcmVnaW9uPVwiZ3VpZGVcIiB3aWR0aD1cIjI0cHhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICB9PlxyXG4gICAgICAgICAgICAgICAgPFRleHQgYXM9XCJzcGFuXCIgY29sb3I9XCJ0ZXh0XCIgcHg9ezR9PlxyXG4gICAgICAgICAgICAgICAgICBHdWlkZVxyXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgIDwvUG9wdXA+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtkYXRhLnByb2plY3REZXRhaWxzICYmIGRhdGEucHJvamVjdERldGFpbHMubGVuZ3RoICYmIChcclxuICAgICAgICAgICAgICA8UG9wdXBcclxuICAgICAgICAgICAgICAgIG9uPVwiaG92ZXJcIlxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb249XCJib3R0b20gbGVmdFwiXHJcbiAgICAgICAgICAgICAgICBjb250ZW50U3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4J1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHRyaWdnZXI9e1xyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBoZWlnaHQ6ICcyNHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8UmVnaW9uSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVnaW9uPXtkYXRhLnByb2plY3REZXRhaWxzLmxlbmd0aCAmJiBkYXRhLnByb2plY3REZXRhaWxzWzBdLnJlZ2lvbn1cclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjRweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgfT5cclxuICAgICAgICAgICAgICAgIDxUZXh0IGFzPVwic3BhblwiIGNvbG9yPVwidGV4dFwiIHB4PXs0fSBiZz1cIndoaXRlXCIgc3g9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT5cclxuICAgICAgICAgICAgICAgICAge2NhbWVsQ2FzZUZvcm1hdHRlcihkYXRhLnByb2plY3REZXRhaWxzWzBdLnJlZ2lvbil9XHJcbiAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgPC9Qb3B1cD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge2RhdGEucHJvamVjdERldGFpbHMgJiYgZGF0YS5wcm9qZWN0RGV0YWlscy5sZW5ndGggJiYgKFxyXG4gICAgICAgICAgICAgIDxQb3B1cFxyXG4gICAgICAgICAgICAgICAgb249XCJob3ZlclwiXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbj1cImJvdHRvbSBsZWZ0XCJcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRTdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc0cHgnXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdHJpZ2dlcj17XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGhlaWdodDogJzI0cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2NhdGlvblR5cGVJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtkYXRhLnByb2plY3REZXRhaWxzWzBdLmRlc3RpbmF0aW9uVHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjRweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnOHB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIH0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCBhcz1cInNwYW5cIiBjb2xvcj1cInRleHRcIiBweD17NH0gYmc9XCJ3aGl0ZVwiIHN4PXt7IGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHtjYW1lbENhc2VGb3JtYXR0ZXIoZGF0YS5wcm9qZWN0RGV0YWlsc1swXS5kZXN0aW5hdGlvblR5cGUpfVxyXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgIDwvUG9wdXA+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtkYXRhLnByb2plY3REZXRhaWxzICYmIGRhdGEucHJvamVjdERldGFpbHMubGVuZ3RoICYmIChcclxuICAgICAgICAgICAgICA8UG9wdXBcclxuICAgICAgICAgICAgICAgIG9uPVwiaG92ZXJcIlxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb249XCJib3R0b20gbGVmdFwiXHJcbiAgICAgICAgICAgICAgICBjb250ZW50U3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4J1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHRyaWdnZXI9e1xyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBoZWlnaHQ6ICcyNHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8RGVzdGluYXRpb25TdGF0dXNJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnByb2plY3REZXRhaWxzLmxlbmd0aCAmJiBkYXRhLnByb2plY3REZXRhaWxzWzBdLmRlc3RpbmF0aW9uU3RhdHVzXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI0cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzhweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICB9PlxyXG4gICAgICAgICAgICAgICAgPFRleHQgYXM9XCJzcGFuXCIgY29sb3I9XCJ0ZXh0XCIgcHg9ezR9IGJnPVwid2hpdGVcIiBzeD17eyBib3JkZXI6ICcxcHggc29saWQgYmxhY2snIH19PlxyXG4gICAgICAgICAgICAgICAgICB7Y2FtZWxDYXNlRm9ybWF0dGVyKGRhdGEucHJvamVjdERldGFpbHNbMF0uZGVzdGluYXRpb25TdGF0dXMpfVxyXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgIDwvUG9wdXA+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICBtdD17Mn1cclxuICAgICAgICAgICAgdmFyaWFudD1cImhlYWRpbmc2XCJcclxuICAgICAgICAgICAgZm9udFNpemU9XCIxOHB4XCJcclxuICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxyXG4gICAgICAgICAgICBhcz1cImg2XCJcclxuICAgICAgICAgICAgY29sb3I9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgZm9udEZhbWlseT1cImhlYWRpbmdcIj5cclxuICAgICAgICAgICAge2RhdGEudGl0bGUgfHwgJyd9XHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dCBtdD17Mn0gdmFyaWFudD1cInBhcmFncmFwaFwiIGNvbG9yPVwidGV4dFwiPlxyXG4gICAgICAgICAgICB7ZGF0YS5wcm9qZWN0RGV0YWlscyAmJiBkYXRhLnByb2plY3REZXRhaWxzLmxlbmd0aCAmJiBkYXRhLnByb2plY3REZXRhaWxzWzBdLmhvdXNlfVxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDwvRmxleD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59KTtcclxuIiwiaW1wb3J0IHsgRW50cnlDYXJkIH0gZnJvbSAnLi9lbnRyeUNhcmQnXHJcblxyXG5leHBvcnQgeyBFbnRyeUNhcmQgfVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBjb25zdCBEZXN0aW5hdGlvblN0YXR1c0ljb24gPSAocHJvcHMpID0+IHtcbiAgc3dpdGNoIChwcm9wcy5zdGF0dXMpIHtcbiAgICBjYXNlICdjb21wbGV0ZWQnOlxuICAgICAgcmV0dXJuIDxDb21wbGV0ZWQgey4uLnByb3BzfSAvPlxuICAgIGNhc2UgJ2luUHJvZ3Jlc3MnOlxuICAgICAgcmV0dXJuIDxJblByb2dyZXNzIHsuLi5wcm9wc30gLz5cbiAgICBjYXNlICdyZWRvSW5Qcm9ncmVzcyc6XG4gICAgICByZXR1cm4gPFJlZG9JblByb2dyZXNzIHsuLi5wcm9wc30gLz5cbiAgICBjYXNlICdhYmFuZG9uZWQnOlxuICAgICAgcmV0dXJuIDxBYmFuZG9uZWQgey4uLnByb3BzfSAvPlxuICAgIGNhc2UgJ25vdFN0YXJ0ZWQnOlxuICAgICAgcmV0dXJuIDxOb3RTdGFydGVkIHsuLi5wcm9wc30gLz5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5jb25zdCBDb21wbGV0ZWQgPSAocHJvcHMpID0+IChcbiAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIiMwMDAwMDBcIiB2aWV3Qm94PVwiMCAwIDI2IDI2XCIgey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTSAxMyAxIEMgNi4zODI4MTMgMSAxIDYuMzgyODEzIDEgMTMgQyAxIDE5LjYxNzE4OCA2LjM4MjgxMyAyNSAxMyAyNSBDIDE5LjYxNzE4OCAyNSAyNSAxOS42MTcxODggMjUgMTMgQyAyNSA2LjM4MjgxMyAxOS42MTcxODggMSAxMyAxIFogTSAxMyAzIEMgMTguNTM1MTU2IDMgMjMgNy40NjQ4NDQgMjMgMTMgQyAyMyAxOC41MzUxNTYgMTguNTM1MTU2IDIzIDEzIDIzIEMgNy40NjQ4NDQgMjMgMyAxOC41MzUxNTYgMyAxMyBDIDMgNy40NjQ4NDQgNy40NjQ4NDQgMyAxMyAzIFogTSAxNy4xODc1IDcuMDYyNSBDIDE3LjAzOTA2MyA3LjA4NTkzOCAxNi45MTQwNjMgNy4xNjQwNjMgMTYuODEyNSA3LjMxMjUgTCAxMS45MDYyNSAxNC41OTM3NSBMIDkuNTkzNzUgMTIuMzEyNSBDIDkuMzk0NTMxIDEyLjAxMTcxOSA5LjAxMTcxOSAxMS45ODgyODEgOC44MTI1IDEyLjE4NzUgTCA3LjkwNjI1IDEzLjA5Mzc1IEMgNy43MDcwMzEgMTMuMzk0NTMxIDcuNzA3MDMxIDEzLjgwMDc4MSA3LjkwNjI1IDE0IEwgMTEuNDA2MjUgMTcuNSBDIDExLjYwNTQ2OSAxNy42MDE1NjMgMTEuODg2NzE5IDE3LjgxMjUgMTIuMTg3NSAxNy44MTI1IEMgMTIuMzg2NzE5IDE3LjgxMjUgMTIuNzA3MDMxIDE3LjcwNzAzMSAxMi45MDYyNSAxNy40MDYyNSBMIDE4LjkwNjI1IDguNTkzNzUgQyAxOS4xMDU0NjkgOC4yOTI5NjkgMTguOTkyMTg4IDguMDExNzE5IDE4LjU5Mzc1IDcuODEyNSBMIDE3LjU5Mzc1IDcuMDkzNzUgQyAxNy40OTIxODggNy4wNDI5NjkgMTcuMzM1OTM4IDcuMDM5MDYzIDE3LjE4NzUgNy4wNjI1IFpcIiAvPlxuICA8L3N2Zz5cbilcblxuY29uc3QgSW5Qcm9ncmVzcyA9IChwcm9wcykgPT4gKFxuICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwiIzAwMDAwMFwiIHsuLi5wcm9wc30gdmlld0JveD1cIjAgMCAyNiAyNlwiPlxuICAgIDxwYXRoIGQ9XCJNIDEzIDEgQyAxMi4yNTkyMTYgMSAxMS41MzQ1MDMgMS4wNjY2NDEgMTAuODMwMDc4IDEuMTk1MzEyNSBMIDExLjE4OTQ1MyAzLjE2NDA2MjUgQyAxMS43NzcwMjggMy4wNTY3MzQ1IDEyLjM4MDc4NCAzIDEzIDMgQyAxOC41MzQ1MzQgMyAyMyA3LjQ2NTQ2NjQgMjMgMTMgQyAyMyAxOC41MzQ1MzQgMTguNTM0NTM0IDIzIDEzIDIzIEMgMTIuMzgwNzg0IDIzIDExLjc3NzAyOCAyMi45NDMyNjkgMTEuMTg5NDUzIDIyLjgzNTkzOCBMIDEwLjgzMDA3OCAyNC44MDQ2ODggQyAxMS41MzQ1MDMgMjQuOTMzMzYgMTIuMjU5MjE2IDI1IDEzIDI1IEMgMTkuNjE1NDY2IDI1IDI1IDE5LjYxNTQ2NiAyNSAxMyBDIDI1IDYuMzg0NTMzNiAxOS42MTU0NjYgMSAxMyAxIHogTSA3Ljc4OTA2MjUgMi4xOTUzMTI1IEwgNy41NzIyNjU2IDIuMjk0OTIxOSBMIDcuNTM3MTA5NCAyLjMxMjUgTCA3LjUwMzkwNjIgMi4zMzIwMzEyIEwgNi43NTc4MTI1IDIuNzUgTCA2LjcyNDYwOTQgMi43Njk1MzEyIEwgNi42OTMzNTk0IDIuNzkxMDE1NiBMIDUuOTg0Mzc1IDMuMjYzNjcxOSBMIDUuOTUzMTI1IDMuMjg1MTU2MiBMIDUuOTIxODc1IDMuMzA4NTkzOCBMIDUuMjU1ODU5NCAzLjgzMzk4NDQgTCA1LjIyNDYwOTQgMy44NTc0MjE5IEwgNS4xOTcyNjU2IDMuODg0NzY1NiBMIDQuNTcyMjY1NiA0LjQ1ODk4NDQgTCA0LjU0NDkyMTkgNC40ODQzNzUgTCA0LjUxNzU3ODEgNC41MTE3MTg4IEwgNC4zMTI1IDQuNzMyNDIxOSBMIDUuNzc1MzkwNiA2LjA5NTcwMzEgTCA1Ljk2Mjg5MDYgNS44OTQ1MzEyIEwgNi41MTU2MjUgNS4zODg2NzE5IEwgNy4xMzI4MTI1IDQuOTAyMzQzOCBMIDcuNzg3MTA5NCA0LjQ2NDg0MzggTCA4LjQ1NzAzMTIgNC4wODk4NDM4IEwgOC42Mjg5MDYyIDQuMDA5NzY1NiBMIDcuNzg5MDYyNSAyLjE5NTMxMjUgeiBNIDE3LjE0ODQzOCA3LjAxMTcxODggQyAxNi45ODQ0MzcgNy4wNDQwOTM4IDE2LjgzMjkyMiA3LjE0MTQyMTkgMTYuNzMyNDIyIDcuMjk0OTIxOSBMIDExLjM1OTM3NSAxNS40ODQzNzUgTCA5LjAzMTI1IDEzLjE5NzI2NiBDIDguNzc4MjUgMTIuOTM2MjY2IDguMzY1MzI4MSAxMi45MzYyNjYgOC4xMTEzMjgxIDEzLjE5NzI2NiBMIDcuMTkxNDA2MiAxNC4xNTIzNDQgQyA2LjkzNjQwNjMgMTQuNDE1MzQ0IDYuOTM2NDA2MyAxNC44NDQ0MjIgNy4xOTE0MDYyIDE1LjEwNzQyMiBMIDEwLjkxOTkyMiAxOC42MTkxNDEgQyAxMS4xMjg5MjIgMTguODMzMTQxIDExLjQ1Njk1MyAxOSAxMS43NTE5NTMgMTkgQyAxMi4wNDY5NTMgMTkgMTIuMzQzMTU2IDE4LjgwNjU3OCAxMi41MzUxNTYgMTguNTE3NTc4IEwgMTguODg4NjcyIDguODEwNTQ2OSBDIDE5LjA4OTY3MiA4LjUwNDU0NjkgMTkuMDExODQ0IDguMDgyMDQ2OSAxOC43MTQ4NDQgNy44NzMwNDY5IEwgMTcuNjM2NzE5IDcuMTE1MjM0NCBDIDE3LjQ4ODIxOSA3LjAxMTIzNDQgMTcuMzEyNDM4IDYuOTc5MzQzNyAxNy4xNDg0MzggNy4wMTE3MTg4IHogTSAyLjQ0MzM1OTQgNy4zMDA3ODEyIEwgMi4zNzEwOTM4IDcuNDI3NzM0NCBMIDIuMzUxNTYyNSA3LjQ2MDkzNzUgTCAyLjMzMzk4NDQgNy40OTgwNDY5IEwgMS45Njg3NSA4LjI3MzQzNzUgTCAxLjk1MTE3MTkgOC4zMDg1OTM4IEwgMS45Mzc1IDguMzQ1NzAzMSBMIDEuNjMwODU5NCA5LjE1NDI5NjkgTCAxLjYxNzE4NzUgOS4xOTE0MDYyIEwgMS42MDU0Njg4IDkuMjI4NTE1NiBMIDEuMzYzMjgxMiAxMC4wNjY0MDYgTCAxLjM1MTU2MjUgMTAuMTAzNTE2IEwgMS4zNDM3NSAxMC4xNDQ1MzEgTCAxLjE2NjAxNTYgMTEuMDA1ODU5IEwgMS4xNTgyMDMxIDExLjA0Njg3NSBMIDEuMTUyMzQzOCAxMS4wODU5MzggTCAxLjExMzI4MTIgMTEuNDA0Mjk3IEwgMy4wOTk2MDk0IDExLjY0ODQzOCBMIDMuMTM0NzY1NiAxMS4zNTkzNzUgTCAzLjI5NDkyMTkgMTAuNTgzOTg0IEwgMy41MTM2NzE5IDkuODI2MTcxOSBMIDMuNzg3MTA5NCA5LjEwNTQ2ODggTCA0LjEyNSA4LjM5MDYyNSBMIDQuMTc5Njg3NSA4LjI5Mjk2ODggTCAyLjQ0MzM1OTQgNy4zMDA3ODEyIHogTSAzLjA5NTcwMzEgMTQuMzY1MjM0IEwgMS4xMDc0MjE5IDE0LjU4MjAzMSBMIDEuMTIxMDkzOCAxNC43MTA5MzggTCAxLjEyNSAxNC43NDgwNDcgTCAxLjEzMjgxMjUgMTQuNzgzMjAzIEwgMS4yNzM0Mzc1IDE1LjU1ODU5NCBMIDEuMjgxMjUgMTUuNTkzNzUgTCAxLjI4OTA2MjUgMTUuNjI4OTA2IEwgMS40ODQzNzUgMTYuMzg0NzY2IEwgMS40OTQxNDA2IDE2LjQxOTkyMiBMIDEuNTA1ODU5NCAxNi40NTMxMjUgTCAxLjc1MTk1MzEgMTcuMTg1NTQ3IEwgMS43NjE3MTg4IDE3LjIyMDcwMyBMIDEuNzc1MzkwNiAxNy4yNTE5NTMgTCAyLjA3MjI2NTYgMTcuOTYyODkxIEwgMi4wODU5Mzc1IDE3Ljk5NDE0MSBMIDIuMTAxNTYyNSAxOC4wMjUzOTEgTCAyLjQxNDA2MjUgMTguNjUyMzQ0IEwgNC4yMDMxMjUgMTcuNzU1ODU5IEwgMy45MDIzNDM4IDE3LjE1ODIwMyBMIDMuNjI4OTA2MiAxNi40OTgwNDcgTCAzLjYyMzA0NjkgMTYuNDg0Mzc1IEwgMy40MTc5Njg4IDE1Ljg2NzE4OCBMIDMuMjM2MzI4MSAxNS4xNjYwMTYgTCAzLjEwNTQ2ODggMTQuNDUzMTI1IEwgMy4wOTU3MDMxIDE0LjM2NTIzNCB6IE0gNS43NzkyOTY5IDE5LjkxMjEwOSBMIDQuMzAyNzM0NCAyMS4yNjE3MTkgTCA0LjQwMDM5MDYgMjEuMzY5MTQxIEwgNC40MjM4MjgxIDIxLjM5NDUzMSBMIDQuNDQ3MjY1NiAyMS40MTc5NjkgTCA0Ljk5NjA5MzggMjEuOTM5NDUzIEwgNS4wMTk1MzEyIDIxLjk2Mjg5MSBMIDUuMDQ2ODc1IDIxLjk4NjMyOCBMIDUuNjI4OTA2MiAyMi40Njg3NSBMIDUuNjU2MjUgMjIuNDkyMTg4IEwgNS42ODM1OTM4IDIyLjUxMTcxOSBMIDYuMjk4ODI4MSAyMi45NTUwNzggTCA2LjMyNjE3MTkgMjIuOTc2NTYyIEwgNi4zNTU0Njg4IDIyLjk5NDE0MSBMIDcuMDAxOTUzMSAyMy4zOTQ1MzEgTCA3LjAzMTI1IDIzLjQxNDA2MiBMIDcuMDYyNSAyMy40Mjk2ODggTCA3LjczODI4MTIgMjMuNzg3MTA5IEwgOC42NzE4NzUgMjIuMDE5NTMxIEwgOC4wMjUzOTA2IDIxLjY3NTc4MSBMIDcuNDMxNjQwNiAyMS4zMDY2NDEgTCA2Ljg3Njk1MzEgMjAuOTA0Mjk3IEwgNi4zNzY5NTMxIDIwLjQ5MjE4OCBMIDYuMzY3MTg3NSAyMC40ODI0MjIgTCA1Ljg2MTMyODEgMjAuMDAxOTUzIEwgNS43NzkyOTY5IDE5LjkxMjEwOSB6XCIgLz5cbiAgPC9zdmc+XG4pXG5cbmNvbnN0IFJlZG9JblByb2dyZXNzID0gKHByb3BzKSA9PiAoXG4gIDxzdmcgZmlsbD1cIiMwMDAwMDBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNiAyNlwiIHsuLi5wcm9wc30+XG4gICAgPHBhdGggZD1cIk0gMTMuMzEyNSAyIEwgMTMuMTg3NSA0IEMgMTMuNzg5MDYzIDQgMTQuMzEyNSA0LjA4NTkzOCAxNC44MTI1IDQuMTg3NSBMIDE1LjE4NzUgMi4xODc1IEMgMTQuNTg1OTM4IDIuMDg1OTM4IDEzLjkxNDA2MyAyIDEzLjMxMjUgMiBaIE0gMTEuMDkzNzUgMi4wOTM3NSBDIDEwLjM5NDUzMSAyLjE5NTMxMyA5LjY5OTIxOSAyLjM4NjcxOSA5IDIuNjg3NSBMIDkuNjg3NSA0LjU5Mzc1IEMgMTAuMjg5MDYzIDQuMzk0NTMxIDEwLjkwNjI1IDQuMTk1MzEzIDExLjQwNjI1IDQuMDkzNzUgWiBNIDE3IDMgTCAxOCA4LjkwNjI1IEwgMTkuODEyNSA3LjA5Mzc1IEMgMjEuMTc5Njg4IDguNjc1NzgxIDIyIDEwLjc1IDIyIDEzIEMgMjIgMTUuNTE1NjI1IDIwLjg4MjgxMyAxNy44MDA3ODEgMTkuMTg3NSAxOS41IEMgMTguNzg5MDYzIDE5Ljg5ODQzOCAxOC4zMTI1IDIwLjI5Mjk2OSAxNy44MTI1IDIwLjU5Mzc1IEwgMTguOTA2MjUgMjIuMzEyNSBDIDE5LjMwODU5NCAyMi4wODIwMzEgMTkuNjI4OTA2IDIxLjgwODU5NCAxOS45Mzc1IDIxLjUzMTI1IEwgMTkuOTY4NzUgMjEuNTYyNSBDIDIyLjM2NzE4OCAxOS40OTIxODggMjQgMTYuNDIxODc1IDI0IDEzIEMgMjQgMTAuMjE4NzUgMjIuOTUzMTI1IDcuNjQwNjI1IDIxLjIxODc1IDUuNjg3NSBMIDIyLjkwNjI1IDQgWiBNIDcgMy42ODc1IEMgNi4zOTg0MzggNC4wODU5MzggNS44MTI1IDQuNTkzNzUgNS4zMTI1IDUuMDkzNzUgTCA1LjM0Mzc1IDUuMTI1IEMgMy4zMTI1IDcuMTQwNjI1IDIgOS44Nzg5MDYgMiAxMyBDIDIgMTUuNzY1NjI1IDMuMDIzNDM4IDE4LjM1NTQ2OSA0Ljc4MTI1IDIwLjMxMjUgTCAzLjA5Mzc1IDIyIEwgOSAyMyBMIDggMTcuMDkzNzUgTCA2LjIxODc1IDE4Ljg3NSBDIDQuODI4MTI1IDE3LjI5Njg3NSA0IDE1LjIzNDM3NSA0IDEzIEMgNCAxMC4wMjM0MzggNS40Mjk2ODggNy41MTk1MzEgNy42MjUgNS43ODEyNSBDIDcuNzc3MzQ0IDUuNjYwMTU2IDcuOTI1NzgxIDUuNTQyOTY5IDguMDkzNzUgNS40MDYyNSBaIE0gMTYuMzEyNSAyMS4zMTI1IEMgMTUuODEyNSAyMS41MTE3MTkgMTUuMTk1MzEzIDIxLjcxMDkzOCAxNC41OTM3NSAyMS44MTI1IEwgMTQuOTA2MjUgMjMuODEyNSBDIDE1LjYwNTQ2OSAyMy43MTA5MzggMTYuMzAwNzgxIDIzLjQ4ODI4MSAxNyAyMy4xODc1IFogTSAxMS4zMTI1IDIxLjgxMjUgTCAxMC45MDYyNSAyMy44MTI1IEMgMTEuNTA3ODEzIDIzLjkxNDA2MyAxMi4wODU5MzggMjQgMTIuNjg3NSAyNCBMIDEyLjgxMjUgMjIgQyAxMi4zMTI1IDIyIDExLjgxMjUgMjEuOTE0MDYzIDExLjMxMjUgMjEuODEyNSBaXCIgLz5cbiAgPC9zdmc+XG4pXG5cbmNvbnN0IEFiYW5kb25lZCA9IChwcm9wcykgPT4gKFxuICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwiIzAwMDAwMFwiIHZpZXdCb3g9XCIwIDAgMjYgMjZcIiB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNIDExLjcxODc1IDEuMDYyNSBMIDEwLjYyNSAxLjI1IEwgMTAuNTMxMjUgMS4yNSBMIDkuNDY4NzUgMS41MzEyNSBMIDkuNDM3NSAxLjUzMTI1IEwgOS4zNzUgMS41NjI1IEwgOC4zNzUgMS45Mzc1IEwgOC4zNDM3NSAxLjkzNzUgTCA4LjI4MTI1IDEuOTY4NzUgTCA3LjMxMjUgMi40Mzc1IEwgNy4yODEyNSAyLjQzNzUgTCA3LjI1IDIuNDY4NzUgTCA3IDIuNjI1IEwgOC4wMzEyNSA0LjM0Mzc1IEwgOC4yODEyNSA0LjE4NzUgTCA5LjA2MjUgMy44MTI1IEwgOS45Njg3NSAzLjQ2ODc1IEwgMTAgMy40Njg3NSBMIDEwLjA2MjUgMy40Mzc1IEwgMTAuOTM3NSAzLjIxODc1IEwgMTEuMDMxMjUgMy4xODc1IEwgMTEuOTM3NSAzLjA2MjUgTCAxMi4wOTM3NSAzLjA2MjUgTCAxMiAxLjA2MjUgWiBNIDE1LjA2MjUgMS4xODc1IEwgMTQuNzUgMy4xNTYyNSBMIDE0Ljk2ODc1IDMuMTg3NSBMIDE1LjA2MjUgMy4yMTg3NSBMIDE1LjkzNzUgMy40Mzc1IEwgMTYgMy40Njg3NSBMIDE2LjAzMTI1IDMuNDY4NzUgTCAxNi45Mzc1IDMuODEyNSBMIDE3LjcxODc1IDQuMTg3NSBMIDE3LjgxMjUgNC4yMTg3NSBMIDE4LjU2MjUgNC42ODc1IEwgMTguNjI1IDQuNzE4NzUgTCAxOC43MTg3NSA0Ljc4MTI1IEwgMTkuOTA2MjUgMy4xODc1IEwgMTkuNzUgMy4wNjI1IEwgMTkuNzE4NzUgMy4wNjI1IEwgMTkuNjU2MjUgMy4wMzEyNSBMIDE4Ljc1IDIuNDY4NzUgTCAxOC43MTg3NSAyLjQzNzUgTCAxOC42ODc1IDIuNDM3NSBMIDE3LjcxODc1IDEuOTY4NzUgTCAxNy42NTYyNSAxLjkzNzUgTCAxNy42MjUgMS45Mzc1IEwgMTYuNjI1IDEuNTYyNSBMIDE2LjU2MjUgMS41MzEyNSBMIDE2LjUzMTI1IDEuNTMxMjUgTCAxNS40Njg3NSAxLjI1IEwgMTUuMzc1IDEuMjUgWiBNIDQuNDY4NzUgNC41NjI1IEwgMy43ODEyNSA1LjM0Mzc1IEwgMy43MTg3NSA1LjQwNjI1IEwgMy4wNjI1IDYuMjUgTCAzLjA2MjUgNi4yODEyNSBMIDMuMDMxMjUgNi4zNDM3NSBMIDIuNDY4NzUgNy4yNSBMIDIuNDM3NSA3LjI4MTI1IEwgMi40Mzc1IDcuMzEyNSBMIDEuOTY4NzUgOC4yODEyNSBMIDEuOTM3NSA4LjM0Mzc1IEwgMS45Mzc1IDguMzc1IEwgMS43MTg3NSA4LjkwNjI1IEwgMy42MjUgOS41OTM3NSBMIDMuODEyNSA5LjA2MjUgTCA0LjE4NzUgOC4yODEyNSBMIDQuMjE4NzUgOC4xODc1IEwgNC42ODc1IDcuNDM3NSBMIDQuNzE4NzUgNy4zNzUgTCA1LjI1IDYuNjg3NSBMIDUuMzEyNSA2LjU5Mzc1IEwgNS45Njg3NSA1LjkwNjI1IFogTSAyMi4xNTYyNSA1LjI1IEwgMjAuNjg3NSA2LjU5Mzc1IEwgMjAuNzUgNi42ODc1IEwgMjEuMjgxMjUgNy4zNzUgTCAyMS4zMTI1IDcuNDM3NSBMIDIxLjc4MTI1IDguMTg3NSBMIDIxLjgxMjUgOC4yODEyNSBMIDIyLjE4NzUgOS4wNjI1IEwgMjIuNTMxMjUgOS45Njg3NSBMIDIyLjUzMTI1IDEwIEwgMjIuNTYyNSAxMC4wNjI1IEwgMjIuNjU2MjUgMTAuNDA2MjUgTCAyNC41OTM3NSA5LjkwNjI1IEwgMjQuNDY4NzUgOS40Njg3NSBMIDI0LjQ2ODc1IDkuNDM3NSBMIDI0LjQzNzUgOS4zNzUgTCAyNC4wNjI1IDguMzc1IEwgMjQuMDYyNSA4LjM0Mzc1IEwgMjQuMDMxMjUgOC4yODEyNSBMIDIzLjU2MjUgNy4zMTI1IEwgMjMuNTYyNSA3LjI4MTI1IEwgMjMuNTMxMjUgNy4yNSBMIDIyLjk2ODc1IDYuMzQzNzUgTCAyMi45Mzc1IDYuMjgxMjUgTCAyMi45Mzc1IDYuMjUgTCAyMi4yODEyNSA1LjQwNjI1IEwgMjIuMjE4NzUgNS4zNDM3NSBaIE0gMS4wNjI1IDEyIEwgMSAxMi45Mzc1IEwgMSAxMy4wNjI1IEwgMS4wNjI1IDE0LjE4NzUgTCAxLjA2MjUgMTQuMjgxMjUgTCAxLjI1IDE1LjM3NSBMIDEuMjUgMTUuNDY4NzUgTCAxLjUzMTI1IDE2LjUzMTI1IEwgMS41MzEyNSAxNi41NjI1IEwgMS41NjI1IDE2LjYyNSBMIDEuNzE4NzUgMTcuMDkzNzUgTCAzLjYyNSAxNi40MDYyNSBMIDMuNDY4NzUgMTYuMDMxMjUgTCAzLjQ2ODc1IDE2IEwgMy40Mzc1IDE1LjkzNzUgTCAzLjIxODc1IDE1LjA2MjUgTCAzLjE4NzUgMTQuOTY4NzUgTCAzLjA2MjUgMTQuMDYyNSBMIDMgMTMuMDYyNSBMIDMgMTIuOTM3NSBMIDMuMDYyNSAxMi4wOTM3NSBaIE0gMjMgMTIuOTM3NSBMIDIzIDEzLjA2MjUgTCAyMi45Mzc1IDE0LjA2MjUgTCAyMi44MTI1IDE0Ljk2ODc1IEwgMjIuNzgxMjUgMTUuMDYyNSBMIDIyLjU2MjUgMTUuOTM3NSBMIDIyLjUzMTI1IDE2IEwgMjIuNTMxMjUgMTYuMDMxMjUgTCAyMi4xODc1IDE2LjkzNzUgTCAyMi4wNjI1IDE3LjIxODc1IEwgMjMuODc1IDE4LjA5Mzc1IEwgMjQuMDMxMjUgMTcuNzE4NzUgTCAyNC4wNjI1IDE3LjY1NjI1IEwgMjQuMDYyNSAxNy42MjUgTCAyNC40Mzc1IDE2LjYyNSBMIDI0LjQ2ODc1IDE2LjU2MjUgTCAyNC40Njg3NSAxNi41MzEyNSBMIDI0Ljc1IDE1LjQ2ODc1IEwgMjQuNzUgMTUuMzc1IEwgMjQuOTM3NSAxNC4yODEyNSBMIDI0LjkzNzUgMTQuMTg3NSBMIDI1IDEzLjA2MjUgWiBNIDQuNzgxMjUgMTguNzE4NzUgTCAzLjE4NzUgMTkuOTA2MjUgTCAzLjcxODc1IDIwLjU5Mzc1IEwgMy43ODEyNSAyMC42NTYyNSBMIDQuNDY4NzUgMjEuNDM3NSBMIDQuNSAyMS41IEwgNC41NjI1IDIxLjUzMTI1IEwgNS4zNDM3NSAyMi4yMTg3NSBMIDUuNDA2MjUgMjIuMjgxMjUgTCA2LjI1IDIyLjkzNzUgTCA2LjI4MTI1IDIyLjkzNzUgTCA2LjM0Mzc1IDIyLjk2ODc1IEwgNyAyMy4zNzUgTCA4LjAzMTI1IDIxLjY1NjI1IEwgNy40Mzc1IDIxLjMxMjUgTCA3LjM3NSAyMS4yODEyNSBMIDYuNjg3NSAyMC43NSBMIDYuNTkzNzUgMjAuNjg3NSBMIDUuOTY4NzUgMjAuMDkzNzUgTCA1LjkwNjI1IDIwLjAzMTI1IEwgNS4zMTI1IDE5LjQwNjI1IEwgNS4yNSAxOS4zMTI1IFogTSAyMC42ODc1IDE5LjQwNjI1IEwgMjAuMDkzNzUgMjAuMDMxMjUgTCAyMC4wMzEyNSAyMC4wOTM3NSBMIDE5LjQwNjI1IDIwLjY4NzUgTCAxOS4zMTI1IDIwLjc1IEwgMTguNjI1IDIxLjI4MTI1IEwgMTguNTYyNSAyMS4zMTI1IEwgMTcuODEyNSAyMS43ODEyNSBMIDE3LjcxODc1IDIxLjgxMjUgTCAxNy4yMTg3NSAyMi4wNjI1IEwgMTguMDkzNzUgMjMuODc1IEwgMTguNjg3NSAyMy41NjI1IEwgMTguNzE4NzUgMjMuNTYyNSBMIDE4Ljc1IDIzLjUzMTI1IEwgMTkuNjU2MjUgMjIuOTY4NzUgTCAxOS43MTg3NSAyMi45Mzc1IEwgMTkuNzUgMjIuOTM3NSBMIDIwLjU5Mzc1IDIyLjI4MTI1IEwgMjAuNjU2MjUgMjIuMjE4NzUgTCAyMS40Mzc1IDIxLjUzMTI1IEwgMjEuNSAyMS41IEwgMjEuNTMxMjUgMjEuNDM3NSBMIDIyLjE1NjI1IDIwLjc1IFogTSAxMC40MDYyNSAyMi42NTYyNSBMIDkuOTA2MjUgMjQuNTkzNzUgTCAxMC41MzEyNSAyNC43NSBMIDEwLjYyNSAyNC43NSBMIDExLjcxODc1IDI0LjkzNzUgTCAxMS44MTI1IDI0LjkzNzUgTCAxMi45Mzc1IDI1IEwgMTMuMDYyNSAyNSBMIDE0LjE4NzUgMjQuOTM3NSBMIDE0LjI4MTI1IDI0LjkzNzUgTCAxNS4wNjI1IDI0LjgxMjUgTCAxNC43NSAyMi44NDM3NSBMIDE0LjA2MjUgMjIuOTM3NSBMIDEzLjA2MjUgMjMgTCAxMi45Mzc1IDIzIEwgMTEuOTM3NSAyMi45Mzc1IEwgMTEuMDMxMjUgMjIuODEyNSBMIDEwLjkzNzUgMjIuNzgxMjUgWlwiIC8+XG4gIDwvc3ZnPlxuKVxuXG5jb25zdCBOb3RTdGFydGVkID0gKHByb3BzKSA9PiAoXG4gIDxzdmcgZmlsbD1cIiMwMDAwMDBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNiAyNlwiIHsuLi5wcm9wc30+XG4gICAgPHBhdGggZD1cIk0gMTMgMSBDIDYuMzgyODEzIDEgMSA2LjM4MjgxMyAxIDEzIEMgMSAxOS42MTcxODggNi4zODI4MTMgMjUgMTMgMjUgQyAxOS42MTcxODggMjUgMjUgMTkuNjE3MTg4IDI1IDEzIEMgMjUgNi4zODI4MTMgMTkuNjE3MTg4IDEgMTMgMSBaIE0gMTMgMyBDIDE4LjUzNTE1NiAzIDIzIDcuNDY0ODQ0IDIzIDEzIEMgMjMgMTUuNDA2MjUgMjIuMTYwMTU2IDE3LjYyMTA5NCAyMC43NSAxOS4zNDM3NSBMIDYuNjU2MjUgNS4yNSBDIDguMzc4OTA2IDMuODM5ODQ0IDEwLjU5Mzc1IDMgMTMgMyBaIE0gNS4yNSA2LjY1NjI1IEwgMTkuMzQzNzUgMjAuNzUgQyAxNy42MjEwOTQgMjIuMTYwMTU2IDE1LjQwNjI1IDIzIDEzIDIzIEMgNy40NjQ4NDQgMjMgMyAxOC41MzUxNTYgMyAxMyBDIDMgMTAuNTkzNzUgMy44Mzk4NDQgOC4zNzg5MDYgNS4yNSA2LjY1NjI1IFpcIiAvPlxuICA8L3N2Zz5cbilcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgTG9jYXRpb25UeXBlSWNvbiA9IChwcm9wcykgPT4ge1xyXG4gIHN3aXRjaCAocHJvcHMudHlwZSkge1xyXG4gICAgY2FzZSAnY2FzdGxlJzpcclxuICAgICAgcmV0dXJuIDxDYXN0bGUgey4uLnByb3BzfSAvPjtcclxuICAgIGNhc2UgJ3Rvd24nOlxyXG4gICAgICByZXR1cm4gPFRvd24gey4uLnByb3BzfSAvPjtcclxuICAgIGNhc2UgJ3ZpbGxhZ2UnOlxyXG4gICAgICByZXR1cm4gPFZpbGxhZ2Ugey4uLnByb3BzfSAvPjtcclxuICAgIGNhc2UgJ2NpdHknOlxyXG4gICAgICByZXR1cm4gPENpdHkgey4uLnByb3BzfSAvPjtcclxuICAgIGNhc2UgJ2hvbGRmYXN0JzpcclxuICAgICAgcmV0dXJuIDxIb2xkZmFzdCB7Li4ucHJvcHN9IC8+O1xyXG4gICAgY2FzZSAna2VlcCc6XHJcbiAgICAgIHJldHVybiA8S2VlcCB7Li4ucHJvcHN9IC8+O1xyXG4gICAgY2FzZSAnbGFuZG1hcmsnOlxyXG4gICAgICByZXR1cm4gPExhbmRtYXJrIHsuLi5wcm9wc30gLz47XHJcbiAgICBjYXNlICdydWluJzpcclxuICAgICAgcmV0dXJuIDxSdWluIHsuLi5wcm9wc30gLz47XHJcbiAgICBjYXNlICd0b3dlcic6XHJcbiAgICAgIHJldHVybiA8VG93ZXIgey4uLnByb3BzfSAvPjtcclxuICAgIGNhc2UgJ2NsYW4nOlxyXG4gICAgICByZXR1cm4gPENsYW4gey4uLnByb3BzfSAvPjtcclxuICAgIGNhc2UgJ2NyYW5ub2cnOlxyXG4gICAgICByZXR1cm4gPENyYW5ub2cgey4uLnByb3BzfSAvPjtcclxuICAgIGNhc2UgJ21pc2NlbGxhbmVvdXMnOlxyXG4gICAgICByZXR1cm4gPE1pc2NlbGxhbmVvdXMgey4uLnByb3BzfSAvPjtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IENhc3RsZSA9IChwcm9wcykgPT4gKFxyXG4gIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHsuLi5wcm9wc30gZmlsbD1cIiMwMDAwMDBcIiB2aWV3Qm94PVwiMCAwIDMwIDMwXCI+XHJcbiAgICA8cGF0aCBkPVwiTSAxNSAyIEwgMTEgNiBMIDE5IDYgTCAxNSAyIHogTSAxMSA4IEwgMTEgMTMgTCA4IDEzIEwgOCAxMSBMIDYgMTEgTCA2IDEyIEwgNCAxMiBMIDQgMTEgTCAyIDExIEwgMiAxNyBMIDQgMTggTCA0IDI2IEwgMTIgMjYgTCAxMiAyMyBDIDEyIDIxLjM0MyAxMy4zNDMgMjAgMTUgMjAgQyAxNi42NTcgMjAgMTggMjEuMzQzIDE4IDIzIEwgMTggMjYgTCAyNiAyNiBMIDI2IDE4IEwgMjggMTcgTCAyOCAxMSBMIDI2IDExIEwgMjYgMTIgTCAyNCAxMiBMIDI0IDExIEwgMjIgMTEgTCAyMiAxMyBMIDE5IDEzIEwgMTkgOCBMIDExIDggeiBNIDggMjAgQyA4LjU1MiAyMCA5IDIwLjQ0OCA5IDIxIEwgOSAyMyBMIDcgMjMgTCA3IDIxIEMgNyAyMC40NDggNy40NDggMjAgOCAyMCB6IE0gMjIgMjAgQyAyMi41NTIgMjAgMjMgMjAuNDQ4IDIzIDIxIEwgMjMgMjMgTCAyMSAyMyBMIDIxIDIxIEMgMjEgMjAuNDQ4IDIxLjQ0OCAyMCAyMiAyMCB6XCIgLz5cclxuICA8L3N2Zz5cclxuKTtcclxuXHJcbmNvbnN0IFRvd24gPSAocHJvcHMpID0+IChcclxuICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB7Li4ucHJvcHN9IHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPlxyXG4gICAgPHBhdGggZD1cIk0wIDBoNTEydjUxMkgwelwiIGZpbGw9XCIjZmZmZmZmXCIgZmlsbE9wYWNpdHk9XCIwXCI+PC9wYXRoPlxyXG4gICAgPGcgY2xhc3NOYW1lPVwiXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAsMClcIj5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTEwOS45MDIgMzUuODdsLTcxLjE0IDU5LjI4NGgxNDIuMjhsLTcxLjE0LTU5LjI4NXptMjg4IDMybC03MS4xNCA1OS4yODRoMTQyLjI4bC03MS4xNC01OS4yODV6TTIyOC43MyA4NC40MDNsLTEwOC45IDkwLjc1aDIxNy44bC0xMDguOS05MC43NXptLTE3My44MjggMjguNzV2NjJoMzYuODFsNzMuMTktNjAuOTkydi0xLjAwOGgtMTEwem0yMyAxNGgxNnYxOGgtMTZ2LTE4em0yNjUgMTh2MTAuOTYzbDIzIDE5LjE2NnYtMTYuMTNoMTZ2MThoLTEzLjc1NmwuMTA0LjA4NyAxOS4wOTggMTUuOTE0aC00NC40NDZ2MTRoNzh2LTM5aDE4djM5aDE0di02MmgtMTEwem0tMTk0LjM0NSA0OHYyMC4wOGwyNC4wOTUtMjAuMDhoLTI0LjA5NXptMjguMTU4IDBsMTA1LjEgODcuNTgyIDI3LjA4Ny0yMi41NzR2LTY1LjAwOEgxNzYuNzE1em03NC42ODMgMTRoMzUuNzM1djM0aC0zNS43MzV2LTM0em0tNzYuNzE0IDcuNzRMMzAuMzcgMzM1LjE1M0gzMTlsLTE0NC4zMTQtMTIwLjI2em0xOTguMDQ2IDEzLjUxbC03Ni44NTcgNjQuMDQ3IDMyLjA0MyAyNi43MDRINDgxLjYzbC0xMDguOS05MC43NXptLTIzLjIxNCAxMDguNzVsLjEwMy4wODYgMTkuMDk1IDE1LjkxNGgtNzIuMjQ4djc3LjQ2N2g2MC40MzV2LTYzLjQ2Nmg1MHY2My40NjdoNDZ2LTkzLjQ2NkgzNDkuNTE2em0tMjc4LjYxNCAxNlY0NzYuMTNoMTI2di03Ni45NzZoNTB2NzYuOTc3aDMxLjU2NVYzNTMuMTU1SDcwLjkwMnptMzAgMzBoNTB2NTBoLTUwdi01MHpcIlxyXG4gICAgICAgIGZpbGw9XCIjMDAwMDAwXCJcclxuICAgICAgICBmaWxsT3BhY2l0eT1cIjFcIlxyXG4gICAgICA+PC9wYXRoPlxyXG4gICAgPC9nPlxyXG4gIDwvc3ZnPlxyXG4pO1xyXG5cclxuY29uc3QgVmlsbGFnZSA9IChwcm9wcykgPT4gKFxyXG4gIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHsuLi5wcm9wc30gdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+XHJcbiAgICA8cGF0aCBkPVwiTTAgMGg1MTJ2NTEySDB6XCIgZmlsbD1cIiNmZmZmZmZcIiBmaWxsT3BhY2l0eT1cIjBcIj48L3BhdGg+XHJcbiAgICA8ZyBjbGFzc05hbWU9XCJcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCwwKVwiPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNMzUxLjcgMzIuMDdjLTE3LjMgMTMuNDgtMjguOCAzMS4yNC0zMS4xIDQ4LjQ4IDMuMi43OSA3LjEgMS41OSAxMS43IDIuMDkgOC4zIDEgMTguMyAxLjUgMjguMyAxLjVzMjAuMS0uNSAyOC4zLTEuNWM0LjQtLjUgOC4yLTEuMiAxMS4zLTEuODktMS41LTYuMTMtNC41LTE0LjQyLTkuMi0yMi42MS01LjUtOS40OS0xMy4xLTE4LjgzLTIxLjYtMjUuOTYtMiAxLjU3LTQuOSAzLjQxLTguOCAzLjQxLTQgMC02LjktMS45My04LjktMy41MnpNNjQuMzcgNDkuMDZDNDcuMDMgNjIuNTQgMzUuNjIgODAuMyAzMy4zMiA5Ny41NGMzLjEzLjggNy4wMSAxLjYgMTEuNjMgMi4xIDguMjkuOTYgMTguMyAxLjQ2IDI4LjMgMS40NnMyMC4wNy0uNSAyOC4yNS0xLjQ2YzQuNC0uNSA4LjItMS4yIDExLjMtMS45LTEuNS02LjEzLTQuNS0xNC40Mi05LjItMjIuNjEtNS40OC05LjQ5LTEzLjA0LTE4LjgzLTIxLjU3LTI1Ljk2LTEuOTcgMS41Ny00LjgyIDMuNDEtOC43NSAzLjQxLTQuMDIgMC02Ljk1LTEuOTMtOC45MS0zLjUyek0zMzYuNiAxMDEuMlYxMTljLjYuNSAyIDEuMyA0LjIgMi4xIDIuMS43IDQuOSAxLjMgNy45IDEuOCAxLjMtOC42IDUuMy0xOS40IDExLjktMTkuNCA2LjYgMCAxMC42IDEwLjggMTEuOSAxOS4zIDMtLjQgNS43LTEgNy45LTEuNyAyLjItLjggMy42LTEuNiA0LjItMi4xdi0xNy44Yy03LjYuNi0xNS44LjktMjQgLjlzLTE2LjQtLjMtMjQtLjl6bS0yODcuMzIgMTdWMTM2Yy41Ny41IDEuOTYgMS4zIDQuMTkgMi4xIDIuMTUuNyA0Ljg5IDEuMyA3LjkxIDEuOCAxLjMzLTguNiA1LjMyLTE5LjQgMTEuOS0xOS40czEwLjU4IDEwLjggMTEuOSAxOS4zYzMuMDEtLjQgNS43Mi0xIDcuODUtMS43IDIuMTktLjggMy41OS0xLjYgNC4xOS0yLjF2LTE3LjhjLTcuNTguNi0xNS43Ni45LTIzLjk3LjktOC4yMSAwLTE2LjM5LS4zLTIzLjk3LS45em0xMTMuMjIgMTguMmMtMjIuMiAxNi44LTM2LjggMzkuMy0zOS4yIDYxLjMgNCAxIDkuMSAyLjIgMTUuNiAyLjkgMTAgMS4yIDIyLjEgMS44IDM0LjEgMS44czI0LS42IDM0LTEuOGM2LjQtLjcgMTEuMy0xLjggMTUuMy0yLjktMS41LTcuNi01LjQtMTguMy0xMS41LTI4LjgtNi45LTExLjktMTYuNS0yMy42LTI3LjQtMzIuMy0uMy4yLS41LjUtLjguNy0yLjIgMS44LTUuMyAzLjgtOS42IDMuOHMtNy40LTItOS42LTMuOHptLTE5LjkgODIuN3YyNGMwIC4xIDAgMCAuMy4yLjguNyAyLjkgMiA1LjkgMyAyLjcuOSA2IDEuNiA5LjggMi4yIDEuMi0xMC41IDYuMS0yNC43IDE0LjQtMjQuN3MxMy4yIDE0LjIgMTQuNCAyNC43YzMuOC0uNiA3LjEtMS4zIDkuOC0yLjIgMy0xIDUuMS0yLjMgNS45LTMgLjMtLjIuMy0uMS4zLS4ydi0yNGMtOS41LjktMTkuOSAxLjMtMzAuNCAxLjMtMTAuNCAwLTIwLjktLjQtMzAuNC0xLjN6bTI0OS42LjdjLTM1LjQgMjUuNi01OC43IDYxLjItNjEuMSA5Ni4yIDYuMSAxLjkgMTUuNSAzLjkgMjYuNCA1LjEgMTQuNiAxLjggMzIuMSAyLjYgNDkuNiAyLjZzMzUtLjggNDkuNi0yLjZjMTAuNi0xLjIgMTkuOC0zLjEgMjYtNS0xLjYtMTEuOC03LjUtMjkuMS0xNy42LTQ2LjUtMTAuNy0xOC40LTI1LjctMzYuNy00My00OS44LTEuMiAxLTIuNSAyLjQtMy42IDMuNC0yLjkgMi4zLTYuNiA0LjYtMTEuNCA0LjYtNC44IDAtOC41LTIuMy0xMS40LTQuNi0xLjEtLjktMi40LTIuMy0zLjUtMy40ek05OS4yMiAyODYuMmMtNDAuNzIgMjkuMS02Ny40OSA3MC4yLTY5Ljk1IDExMC40IDcuMDggMi4zIDE4LjAxIDQuNiAzMC44MSA2LjEgMTYuNTIgMS45IDM2LjI0IDIuOSA1NS45MiAyLjkgMTkuNyAwIDM5LjQtMSA1NS45LTIuOSAxMi43LTEuNSAyMy42LTMuOCAzMC43LTYuMS0xLjgtMTMuNS04LjgtMzMuNi0yMC40LTUzLjUtMTIuMi0yMS0yOS40LTQyLTQ5LjQtNTYuOS0xLjUgMS41LTMuMiAzLjMtNC43IDQuNC0zLjIgMi42LTcuMSA1LTEyLjEgNXMtOC45LTIuNC0xMi4xLTVjLTEuNS0xLjEtMy4yLTMtNC42OC00LjR6bTI1OS45OCA1My4yVjM3OWMwIC42IDAgMSAxLjggMi41IDEuNyAxLjUgNS4yIDMuNSA5LjggNSA0LjMgMS40IDkuNSAyLjYgMTUuMSAzLjQgMS0xNSA4LjEtMzkuNCAyMS4yLTM5LjRzMjAuMiAyNC40IDIxLjIgMzkuNGM1LjYtLjggMTAuOC0yIDE1LjEtMy40IDQuNi0xLjUgOC4xLTMuNSA5LjgtNSAxLjgtMS41IDEuOC0xLjkgMS44LTIuNXYtMzkuNmMtMTQuNyAxLjYtMzEuMiAyLjMtNDcuOSAyLjNzLTMzLjItLjctNDcuOS0yLjN6TTYxLjAzIDQyMC44djQ1LjhjMCAxIC4xOSAxLjggMi4zNiAzLjcgMi4xNSAxLjggNi4xOSA0IDExLjQ4IDUuOCA0Ljg4IDEuNiAxMC44IDIuOSAxNy4yNSAzLjguOC0xNi42IDguNjgtNDUuMyAyMy44OC00NS4zczIzLjEgMjguNyAyMy45IDQ1LjNjNi41LS45IDEyLjQtMi4yIDE3LjMtMy44IDUuMi0xLjggOS4zLTQgMTEuNC01LjggMi4yLTEuOSAyLjQtMi43IDIuNC0zLjd2LTQ1LjhjLTE2LjggMS45LTM1LjkgMi44LTU1IDIuOC0xOS4wOCAwLTM4LjIxLS45LTU0Ljk3LTIuOHpcIlxyXG4gICAgICAgIGZpbGw9XCIjMDAwMDAwXCJcclxuICAgICAgICBmaWxsT3BhY2l0eT1cIjFcIlxyXG4gICAgICA+PC9wYXRoPlxyXG4gICAgPC9nPlxyXG4gIDwvc3ZnPlxyXG4pO1xyXG5cclxuY29uc3QgQ2l0eSA9IChwcm9wcykgPT4gKFxyXG4gIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHsuLi5wcm9wc30+XHJcbiAgICA8cGF0aCBkPVwiTTAgMGg1MTJ2NTEySDB6XCIgZmlsbD1cIiNmZmZmZmZcIiBmaWxsT3BhY2l0eT1cIjBcIj48L3BhdGg+XHJcbiAgICA8ZyBjbGFzc05hbWU9XCJcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCwwKVwiPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNMjU2IDIyLjYwNGMtMTAuMDEgMC0yMC4wMiAyLjM4OC0yNi44MzYgNy4xNjMtMi4xNjIgMS41MTQtNi45OSAxMC45Ny05LjIxMyAyMC4xMTMtLjY5IDIuODQtMS4wMTYgNS4wNzUtMS40NDYgNy41MTZoNzQuOTkyYy0uNDMtMi40NC0uNzU3LTQuNjc2LTEuNDQ3LTcuNTE2LTIuMjI0LTkuMTQyLTcuMDUyLTE4LjYtOS4yMTQtMjAuMTEzLTYuODE3LTQuNzc1LTE2LjgyNi03LjE2My0yNi44MzYtNy4xNjN6TTgwIDI2LjYyNmwtNTAuNzA3IDEyNi43N2g5NS44MTRsMi44LTd6bTM1MiAwbC00Ny45MDYgMTE5Ljc3IDIuOCA3aDk1LjgxM3ptLTE5OSA0OC43N3YxNGg0NnYtMTR6bS0xOS40MzggMzJsLTcgMTRoOTguODc1bC03LTE0em0tNjMuNDY4IDMybC0yNC44IDYyaDI2MS40MTNsLTI0LjgtNjJ6TTI1IDE3MS4zOTZ2MzE4aDU1di0zOXM0LjA3NC0zMiAxNi0zMiAxNiAzMiAxNiAzMnYzOWg4MHYtMzljMC0zMiA0Mi43NjItODAgNjQtODAgMjMuNzUgMCA2NCA0OCA2NCA4MHYzOWg4MHYtMzlzNC4wNzQtMzIgMTYtMzIgMTYgMzIgMTYgMzJ2MzloNTV2LTMxOGgtOTIuOTA2bDE5LjIgNDhIMzkzdjE4M2gtMTh2LTEzNWgtNDZ2MjNoLTE4di0yM2gtNDZ2MjNoLTE4di0yM2gtNDZ2MjNoLTE4di0yM2gtNDZ2MTM1aC0xOHYtMTgzSDk4LjcwN2wxOS4yLTQ4em0xNCAyM2gxOHYzMkgzOXptNDE2IDBoMTh2MzJoLTE4em0tMzE4IDI1djMwaDQ2di03aDE4djdoNDZ2LTdoMTh2N2g0NnYtN2gxOHY3aDQ2di0zMHptLTUwIDcxaDE4djMySDg3em0zMjAgMGgxOHYzMmgtMTh6TTI1NiAzMTIuOTFsMi44NDYuOTQ2czI0LjcyMiA4LjIwMiA0OS42OSAyMi43NjZjMTIuNDgzIDcuMjgyIDI1LjE0IDE2LjE1NCAzNS4wNzcgMjYuOTE4QzM1My41NSAzNzQuMzA0IDM2MSAzODcuMzk2IDM2MSA0MDIuMzk2aC0xOGMwLTktNC41NS0xNy45MS0xMi42MTMtMjYuNjQ1LTguMDY0LTguNzM1LTE5LjQwNi0xNi44NjMtMzAuOTIyLTIzLjU4LTIwLjc3Ni0xMi4xMi0zOS41NTMtMTguNzgtNDMuNDY1LTIwLjE0Mi0zLjkxMiAxLjM2LTIyLjY5IDguMDIyLTQzLjQ2NSAyMC4xNC0xMS41MTYgNi43Mi0yMi44NTggMTQuODQ3LTMwLjkyMiAyMy41ODNDMTczLjU1IDM4NC40ODggMTY5IDM5My4zOTcgMTY5IDQwMi4zOTdoLTE4YzAtMTUgNy40NS0yOC4wOTIgMTcuMzg3LTM4Ljg1NiA5LjkzNi0xMC43NjQgMjIuNTk0LTE5LjYzNiAzNS4wNzgtMjYuOTE4IDI0Ljk2Ny0xNC41NjQgNDkuNjktMjIuNzY2IDQ5LjY5LTIyLjc2NnpcIlxyXG4gICAgICAgIGZpbGw9XCIjMDAwMDAwXCJcclxuICAgICAgICBmaWxsT3BhY2l0eT1cIjFcIlxyXG4gICAgICA+PC9wYXRoPlxyXG4gICAgPC9nPlxyXG4gIDwvc3ZnPlxyXG4pO1xyXG5cclxuY29uc3QgS2VlcCA9IChwcm9wcykgPT4gKFxyXG4gIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHsuLi5wcm9wc30+XHJcbiAgICA8cGF0aCBkPVwiTTAgMGg1MTJ2NTEySDB6XCIgZmlsbD1cIiNmZmZmZmZcIiBmaWxsT3BhY2l0eT1cIjBcIj48L3BhdGg+XHJcbiAgICA8ZyBjbGFzc05hbWU9XCJcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCwwKVwiPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNMTMzLjg0MiA0MS4wOTJ2NDEuMjYyaDkxLjEzOFY0MS4wOTJoLTE3LjMxOFY1NS4wNWgtMThWNDEuMDloLTIwLjE2NHYxMy45NmgtMThWNDEuMDloLTE3LjY1NnptMjUuODI4IDU5LjI2MnY0MS4yNjFoMTAuODI4djE4SDE1OS42N1YyNjAuMTRoNjEuMzFWMjI5LjYzaDE4djMwLjUwOGgxMDAuOTdWMTg1aC0yMS42NTd2MTQuMTIzSDIwMS4xNTRWMTc5LjM3aC0xMi4yMzJ2LTE4aDEyLjIzMnYtNjEuMDE1SDE1OS42N3ptMTY5LjUzIDM5LjQxMkwzMTguOTg3IDE2N2gyMC40MjRMMzI5LjIgMTM5Ljc2NnptLTU5LjU2MyA4MC44NjVoMTkuODI4djE4aC0xOS44Mjh2LTE4em0tMTExLjU5NCA1Ny41MDhsLTUuODg3IDI5LjMyNGMxOS43MjUtMTMuMzY4IDM5Ljk2NC0yMy43MjMgNjAuMjc2LTI5LjMyNGgtNTQuMzg5em0xMjIuOTI4IDBjMjUuMzIgNi40MTEgNTAuOTc4IDE5LjA1NSA3Ni4wNjYgMzUuM2wtMTQuMTc0LTM1LjNoLTYxLjg5MnptLTI0LjY1MyAxMy45NTdjLTMuODIgNS4xMDUtMTAuNzIzIDE0Ljc1NC0xNy4xMTMgMjYuMDI1LTkuNDA3IDE2LjU5Mi0xNS43NTEgMzYuNDM3LTEyLjczNiA0NC45NzUgMi44NzYgOC4xNDQgOC41OTkgMTMuMjg4IDE3LjU3NCAxNy43MTYgOC45NzUgNC40MyAyMC45IDcuNTI0IDMzLjUxNiAxMC41NSAxMi42MTYgMy4wMjQgMjUuOTEgNi4wMDIgMzguMDQ2IDExLjE0NHMyMy40NjQgMTIuNzc2IDMwLjE3OCAyNS4xMzdjMTAuMDU1IDE4LjUxIDcuMDMgNDMuNjQ3IDMuMTg4IDY1LjAzNy0uMDguNDQ2LS4xNjcuODc4LS4yNDggMS4zMkg0OTR2LTMyLjczOGMtMTQuMTk4LTE1LjkyMS0zMC4zNTEtMzMuMTkxLTQ3Ljk1My01MC41NTEtNTcuODk4LTU3LjEwMy0xMzAuMzktMTEyLjI2NC0xODkuNzI5LTExOC42MTV6bS00MC43NjMgNC4xNjZjLTUwLjM1OSAxNS40ODctMTA2LjgyNyA2Ni40My0xNTEuODU4IDExOC4xMkM0Ni41MTYgNDM0LjEwNyAzMS4wOCA0NTMuNTkzIDE4IDQ3MC45OTdWNDk0aDIyNy40MDZjNi42OC00Ljc1NiAxMi44MDctOS44MjIgMTcuNTE4LTE0LjkgNy4yNDQtNy44MSAxMC42NDYtMTUuMDc0IDEwLjE4NS0yMS4wMzYtLjUzNS02LjkyNi0zLjkwMy0xMC40OTQtMTEuNzUtMTQuNTU2LTcuODQ2LTQuMDYzLTE5LjYwNi03LjA5LTMyLjA0Ni0xMC4wNTEtMTIuNDQxLTIuOTYtMjUuNTYyLTUuODk0LTM3LjAyOC0xMS4yMDctMTEuNDY1LTUuMzEzLTIxLjk4OS0xMy45MjEtMjUuMjI4LTI3LjMyNi0zLjM1LTEzLjg2My41ODctMjguMiA3LjEwMS00MS44NDYgNi41MTQtMTMuNjQ2IDE1LjkwOC0yNi45MDMgMjUuNTMxLTM4LjcxMyA1LjM1NS02LjU3MSAxMC43OS0xMi42NzYgMTUuODY2LTE4LjEwM3ptMS4xOTUgMjUuNzM0Yy05LjczOCAxMi4yNDQtMjAuMTEyIDI2LjAwOC0yNi4zNDggMzguODM2LTUuNTQ3IDExLjYyLTcuNzAxIDIyLjItNS44NSAyOS44NjMgMS42MyA2Ljc0IDYuNDI2IDExLjExIDE1LjMwMiAxNS4yMjMgOC44NzUgNC4xMTIgMjEuMTE0IDcuMDUyIDMzLjYyNiAxMC4wMyAxMi41MTMgMi45NzcgMjUuMjk2IDUuOTUyIDM2LjE1NSAxMS41NzMgMTAuODU4IDUuNjIyIDIwLjM1NyAxNS40MiAyMS40MiAyOS4xNTcgMS4wMjQgMTMuMjQ4LTUuODgyIDI0LjkwMy0xNC45MzQgMzQuNjYyYTk4LjE0IDk4LjE0IDAgMCAxLTIuNTc0IDIuNjZIMzMwLjRjLjI5Mi0xLjQ3OC41OC0yLjk3NS44NTQtNC41MDIgMy41ODYtMTkuOTY2IDQuMTI1LTQzLjMwMS0xLjI4Ny01My4yNjQtNC4xNjctNy42NzEtMTEuMzctMTIuOTEyLTIxLjM4My0xNy4xNTQtMTAuMDEyLTQuMjQyLTIyLjQ4NC03LjE2LTM1LjIyMy0xMC4yMTUtMTIuNzM4LTMuMDU0LTI1Ljc1Ni02LjIyMi0zNy4yODMtMTEuOTEtMTEuNTI3LTUuNjg4LTIxLjg2Ny0xNC41MTMtMjYuNTgyLTI3Ljg2NS01LjQyOC0xNS4zNzItLjE1Ny0zMS45ODIgNy4yNTQtNDcuMDk0elwiXHJcbiAgICAgICAgZmlsbD1cIiMwMDAwMDBcIlxyXG4gICAgICAgIGZpbGxPcGFjaXR5PVwiMVwiXHJcbiAgICAgID48L3BhdGg+XHJcbiAgICA8L2c+XHJcbiAgPC9zdmc+XHJcbik7XHJcblxyXG5jb25zdCBIb2xkZmFzdCA9IChwcm9wcykgPT4gKFxyXG4gIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHsuLi5wcm9wc30+XHJcbiAgICA8cGF0aCBkPVwiTTAgMGg1MTJ2NTEySDB6XCIgZmlsbD1cIiNmZmZmZmZcIiBmaWxsT3BhY2l0eT1cIjBcIj48L3BhdGg+XHJcbiAgICA8ZyBjbGFzc05hbWU9XCJcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCwwKVwiPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNMjU2IDEyMy4xYy0yMC41MTYgMTUuMDkyLTM4LjI2IDM2Ljg0NC01My43NjYgNTkuOWgxMDcuNTMyYy0xNS41MDUtMjMuMDU2LTMzLjI1LTQ0LjgwOC01My43NjYtNTkuOXptLTE3Ni44NzcgMy40MmwtNy4xNjIgNDEuNzE4Yy0uMTQzLjAxNi0xMy4xNSA3Ny42NTUtMTMuMTUgNzcuNjU1IDMwLjQzMy0zLjIxNSA2MC4xOC01LjcwMiA4OS4zOTUtNy40NzUgMTMuMjI4LTIzLjU4NSAyOC45ODYtNTMuMTA0IDQ4Ljk1LTgwLjEzNS0zMy4yODYgMS40NDgtNjguMTkgNC4xMDQtMTA2LjQxIDcuOTg3bDYuMTMyLTM2Ljc5LTE3Ljc1NC0yLjk2em0zMzcuNTguNDI3bC0xNy43NTYgMi45NiA2LjAwNiAzNi4wMzJjLTMxLjI0Mi0zLjQ4My02MC43OTYtNS45Ni04OS45MzItNy40MTUgMjAuMDM0IDI3LjE3MyAzNS44MjIgNTYuODIgNDkuMDc0IDgwLjQyMmExNTU0LjQ4MyAxNTU0LjQ4MyAwIDAgMSA3My4wNzYgNi44MTdMNDIzLjkgMTY4LjE0Yy0uMjI3LS4wMjctNy4xOTctNDEuMTkzLTcuMTk3LTQxLjE5M3pNMTkwLjY5IDIwMWMtNy42MjMgMTIuMzkyLTE0LjYxIDI0LjY4Ni0yMS4xMjcgMzYuMjQgNTkuMzcyLTIuOTEyIDExNi42NDItMi43ODggMTczLjA3Ni4zNi02LjU3Ni0xMS42NTctMTMuNjMtMjQuMDgtMjEuMzMtMzYuNkgxOTAuNjl6bTY0LjAxIDUxLjk5OGMtNy4yMy4wMDYtMTQuNDYyLjA2LTIxLjcuMTU4VjI3OWg0NnYtMjUuODFjLTguMDcyLS4xMjQtMTYuMTctLjE4OC0yNC4zLS4xOTJ6bS0zOS43LjUwNGMtMzYuMjIuODc2LTcyLjY5MyAyLjktMTEwIDYuMDVWMjc5aDExMHYtMjUuNDk4em04MiAuMDgyVjI3OWgxMTB2LTE4LjUyM2ExNTM4Ljc2MiAxNTM4Ljc2MiAwIDAgMC0xMTAtNi44OTN6bS0yMTAgNy41NjhjLTkuOTM0LjkyNy0xOS45MjUgMS45MjItMzAgMy4wMDRWMjc5aDMwdi0xNy44NDh6bTMzOCAxLjIwNVYyNzloMzB2LTEzLjA1NWwtOC4xMTctMS4wMTVBMTU1NS42NjUgMTU1NS42NjUgMCAwIDAgNDI1IDI2Mi4zNTd6TTUxLjcyNyAyOTdsLTMwIDMwaDQ2OC41NDZsLTMwLjAwMi0zMEg1MS43Mjh6TTIzIDM0NWwtLjUgOTQtLjUgMThoNDY4bC0uNS0xOC0uNS05NGgtMTh2OTRoLTI2Ljh2LTk0aC0xOHY5NGgtMjYuOHYtOTRoLTE4djk0aC0yNi44di05NGgtMTh2OTRoLTI2Ljh2LTk0aC0xOHY5NEgyNjV2LTk0aC0xOHY5NGgtMjYuOHYtOTRoLTE4djk0aC0yNi44di05NGgtMTh2OTRoLTI2Ljh2LTk0aC0xOHY5NEg4NS44di05NGgtMTh2OTRINDF2LTk0SDIzelwiXHJcbiAgICAgICAgZmlsbD1cIiMwMDAwMDBcIlxyXG4gICAgICAgIGZpbGxPcGFjaXR5PVwiMVwiXHJcbiAgICAgID48L3BhdGg+XHJcbiAgICA8L2c+XHJcbiAgPC9zdmc+XHJcbik7XHJcblxyXG5jb25zdCBSdWluID0gKHByb3BzKSA9PiAoXHJcbiAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgey4uLnByb3BzfT5cclxuICAgIDxwYXRoIGQ9XCJNMCAwaDUxMnY1MTJIMHpcIiBmaWxsPVwiI2ZmZmZmZlwiIGZpbGxPcGFjaXR5PVwiMFwiPjwvcGF0aD5cclxuICAgIDxnIGNsYXNzTmFtZT1cIlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLDApXCI+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk05MS4wMzMgMjIuMTR2ODQuMzY4bDQ2LjQzNCA1Ny41NnYxNi4xNjZsOTguOTMgNDQuMTMgMjcuMjktMzQuMzA1IDY1LjkgNC4wMXYtMzBsNDYuNDMzLTU3LjU2MnYtODQuMzdoLTQ4LjkxNnYzOS43OTZIMjk3LjMzVjIyLjE0aC00OS40NXYzOS43OTRoLTI5LjI0VjIyLjE0aC00OS40NXYzOS43OTRoLTI5LjI0M1YyMi4xNEg5MS4wMzN6bTQ2LjQzNCAxNzguNTU3djE5NS4xN2gtMjkuODhsLTIxLjc5MiA5NC42OTVoMjk1LjQ2M2wtMjEuNzktOTQuNjk1aC0yOS44ODJWMzcwLjAybC0zOC43Mi0yNC4wNy0yMy43MTIgMjkuMjkyIDI4LjQzMiAyNS43MzctMTIuNTQzIDEzLjg1NEwyNDEuNSAzNzcuMjNsMzMuMzctNDEuMjIyLTkxLjY1LTU2Ljk3MyAzMy4yODgtNDMuMDgyLTc5LjA0LTM1LjI1NnptMTU1LjAxMyAxOS4xMWwxOS4wNCAzNC45OTQgMzEuMDA1LTUuNDA1LTE3LjI4Ny0yOS41ODhIMjkyLjQ4em02Ni42ODIgMTAuMDg4bDE3LjI5MyA3NC41MjcgNTUuNTUzIDIuMDY4LTEzLjQ0Mi01Ny45NjctNTkuNDA0LTE4LjYyOHptLTEzNS40NyAyNy4zMjhsLTEzLjAzNCAxNi44NjUgMzcuMzkzIDIzLjI0NCAxOC4xNjctMjAuNjEtNDIuNTI2LTE5LjV6bTczLjExNSAxMy4wNTZsLTMyLjY2IDM3LjA1NiA2NS40NCA0MC42OFYyOTguMmwtMzIuNzgtMjcuOTJ6bTg1LjE1NCA1MS43NDVsLTUuMTYgMjkuNTg0IDMzLjQ5IDE4LjE1OC0uMDkzLTMxLjI1OC0yOC4yMzYtMTYuNDg1em03OS45MSA2LjkyOGwtMjMuMDczIDIzLjE5NyA4LjY5NyAzMy4xMDYgMjUuNzE3LTE4LjA4LTExLjM0LTM4LjIyM3ptLTY1Ljg1IDY4Ljk5MmwtMTAuOTcgMzYuOTc3IDI0Ljg4IDE3LjQ5IDguNDE0LTMyLjAyNS0yMi4zMjMtMjIuNDQyelwiXHJcbiAgICAgICAgZmlsbD1cIiMwMDAwMDBcIlxyXG4gICAgICAgIGZpbGxPcGFjaXR5PVwiMVwiXHJcbiAgICAgID48L3BhdGg+XHJcbiAgICA8L2c+XHJcbiAgPC9zdmc+XHJcbik7XHJcblxyXG5jb25zdCBUb3dlciA9IChwcm9wcykgPT4gKFxyXG4gIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHsuLi5wcm9wc30+XHJcbiAgICA8cGF0aCBkPVwiTTAgMGg1MTJ2NTEySDB6XCIgZmlsbD1cIiNmZmZmZmZcIiBmaWxsT3BhY2l0eT1cIjBcIj48L3BhdGg+XHJcbiAgICA8ZyBjbGFzc05hbWU9XCJcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCwwKVwiPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNNzEgMjIuNDA2djEwMi41M2gyMDIuMjV2MTguNjloLTczLjIydjM2Ljk2OGgtMTguNjg2di0zNi45N0g3OS4xNTZsNDMuMzc1IDUzLjc4MmgxODAuNDR2MTguNjg4SDE4MC45MDV2MzYuOTdIMTYyLjIydi0zNi45N2gtMzkuNDA3djE2My41NjJoNTguNTN2LTQ0Ljc1SDE1Ny40N1YzMTYuMjJoNzQuMTU1VjI4Mi41NkgxOTMuNzJ2LTE4LjY4N2g5Ny4yMTh2MTguNjg4aC00MC42MjV2MzMuNjU2aDczLjI4djE4LjY4NmgtMzIuNDM3djQ0Ljc1aDI2LjMxM3YxOC42ODhoLTYzLjY5bC0yLjY4NiA3NC4wMy0xOC42ODgtLjY4NyAyLjY1Ni03My4zNDNIOTMuMDMyVjM5OGgtLjIybC0yOC42ODcgOTIuODQ0aDc5Ljg0NGw5LjgxLTcwLjY4OCAxOC41IDIuNTYzLTkuNDY4IDY4LjEyNEg0NTMuMjVMNDI0LjU2MiAzOThoLTMwLjAzVjE5Ny43OGw1MS44MTItNjQuMjVWMjIuNDA3aC02NC40MDZ2NTIuNDM4aC0zOS4yMlYyMi40MDZoLTY1LjEyNHY1Mi40MzhoLTM4LjUzVjIyLjQwNmgtNjUuMTI2djUyLjQzOGgtMzguNVYyMi40MDZINzF6bTEyOS4wMyAzMTIuNXY0NC43NWg3Mi40NHYtNDQuNzVoLTcyLjQ0elwiXHJcbiAgICAgICAgZmlsbD1cIiMwMDAwMDBcIlxyXG4gICAgICAgIGZpbGxPcGFjaXR5PVwiMVwiXHJcbiAgICAgID48L3BhdGg+XHJcbiAgICA8L2c+XHJcbiAgPC9zdmc+XHJcbik7XHJcblxyXG5jb25zdCBNaXNjZWxsYW5lb3VzID0gKHByb3BzKSA9PiAoXHJcbiAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgey4uLnByb3BzfT5cclxuICAgIDxwYXRoIGQ9XCJNMCAwaDUxMnY1MTJIMHpcIiBmaWxsPVwiI2ZmZmZmZlwiIGZpbGxPcGFjaXR5PVwiMFwiPjwvcGF0aD5cclxuICAgIDxnIGNsYXNzTmFtZT1cIlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLDApXCI+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk05My4zMTMgMTkuNDA2Yy0xMS4yNCAwLTIwLjE1NyA4LjkxNi0yMC4xNTcgMjAuMTU3IDAgNi45NjggMy40MzYgMTMuMDIyIDguNzIgMTYuNjI0TDM1LjIxOCA0OTQuMjVINTRsNDYuNDM4LTQzNS44NzVjNy42MzctMi44NCAxMy0xMC4xIDEzLTE4LjgxMyAwLTExLjIzNy04Ljg4Ni0yMC4xNTYtMjAuMTI2LTIwLjE1NnptMjMuOTA2IDUyLjY4OGwtMjEuMTU3IDE5OC43OCA5Mi42MjQgMTkuNTMyIDY0LjE1Ny0xOTRMMTE3LjIyIDcyLjA5NHptMTM3LjU5MyA3OC4yOEwxOTAuNjI1IDM0NC40NGw1OC4yOCAxMS4wMy0zLjgxLTU3Ljg3NCAyNy4wMyAyOS45MDYgMTguNTk0LTcuODQ0IDExLjMxIDQ1Ljg3NSA4Mi42OSAxNS42MjYtMzQuMDMzLTY4LjQzNyAyOS44NDQtMTIuNjU4IDIzLjAzMyAzMi41NjMgNDIuNS4xODggMS44NzUgMTcuODc1IDM5LTI0LjM3NS0zNS44MTMtOC41MzItNy45MzgtMjkuNjU1LTQ1Ljc4LTIuNDA2IDMuMjgtMzAuODQ1LTM1LjQzNy0xOS40MDYgMTUuMDMtMzEuMDk1IDI4LjA2NC0yMS4zNDR2LS4wOTNsLTE1My41My0zMi41NjJ6bTE4OS44NzUgOS40NGwyLjEyNSAzNC41My01MS4yMiAyMy4zMTIgNzEuNzgyIDQuMzc1IDE2LjIyLTE1LjcxOEw0NjIuOTA0IDE3MmwtMTguMjE3LTEyLjE4OHptLTQuNDcgODQuODc0bDM1LjEyNiA0NS42MjUgMTguNDctMjUuNjI1LTUzLjU5NS0yMHptLTk4LjQ2OCA4LjI1bDI0LjgxMyAxLjQwNiA1LjIxOCAyMy43NS01MC4xNTUgOS4wNjIgMjAuMTI1LTM0LjIyem0tNC4wMyA3Ni42ODdsMTEuOTY3IDE5LjIyLTM3LjA2MiAyLjIxNyA1LjA5NC0xNS45MDYgMjAtNS41M3ptNzkuODc0IDE2LjVsLTE3LjUzIDI5LjE4OCAzOS43MTcgMzIuNzE4IDQwLjg3Ni0xMS4wOTItNDAuMjgtMTkuODc1LTIyLjc4Mi0zMC45Mzh6XCJcclxuICAgICAgICBmaWxsPVwiIzAwMDAwMFwiXHJcbiAgICAgICAgZmlsbE9wYWNpdHk9XCIxXCJcclxuICAgICAgPjwvcGF0aD5cclxuICAgIDwvZz5cclxuICA8L3N2Zz5cclxuKTtcclxuXHJcbmNvbnN0IExhbmRtYXJrID0gKHByb3BzKSA9PiAoXHJcbiAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgey4uLnByb3BzfT5cclxuICAgIDxwYXRoIGQ9XCJNMCAwaDUxMnY1MTJIMHpcIiBmaWxsPVwiI2ZmZmZmZlwiIGZpbGxPcGFjaXR5PVwiMFwiPjwvcGF0aD5cclxuICAgIDxnIGNsYXNzTmFtZT1cIlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLDApXCI+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk0xNTEgMzJ2MjQ3aDE4VjMyaC0xOHptMjQ3IDkuNTc0bC0xMy40MjggNy41OWMtMzEuNjI2IDE3Ljg3Ni02MS40OTIgMTIuMjY3LTkzLjEzOCA0LjM1Ni0zMS42NDctNy45MTItNjQuODMtMTguODQtOTcuOTQ2LTQuODA3TDE4OCA1MS4wMzlWMTY2LjU4OGwxMi41MTItNS4zYzI1Ljg4My0xMC45NjggNTQuMjAxLTIuMzk2IDg2LjU1NCA1LjY5MiAzMi4zNTQgOC4wODkgNjguOTg4IDE0Ljk4IDEwNi4zNjItNi4xNDRsNC41NzItMi41ODRWNDEuNTc0ek03MyAyOTd2NjcuMjcxbDMyIDMyVjQ4N2gzMDJ2LTkwLjcyOWwzMi0zMlYyOTdoLTQ2djM5aC0xOHYtMzloLTQ2djM5aC0xOHYtMzloLTQ2djM5aC0xOHYtMzloLTQ2djM5aC0xOHYtMzloLTQ2djM5aC0xOHYtMzlINzN6XCJcclxuICAgICAgICBmaWxsPVwiIzAwMDAwMFwiXHJcbiAgICAgICAgZmlsbE9wYWNpdHk9XCIxXCJcclxuICAgICAgPjwvcGF0aD5cclxuICAgIDwvZz5cclxuICA8L3N2Zz5cclxuKTtcclxuXHJcbmNvbnN0IENyYW5ub2cgPSAocHJvcHMpID0+IChcclxuICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiB7Li4ucHJvcHN9PlxyXG4gICAgPHBhdGggZD1cIk0wIDBoNTEydjUxMkgwelwiIGZpbGw9XCIjZmZmZmZmXCIgZmlsbE9wYWNpdHk9XCIwXCI+PC9wYXRoPlxyXG4gICAgPGcgY2xhc3M9XCJcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCwwKVwiPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNMjE5LjcgMjQuNDNsLTE3LjggMi4wNiA2LjggNTkuMzctMzYuMS01MC4zNS0xNC42IDEwLjUgMzEuOSA0NC40NWgzNy40em0zNC45LjE4bC02LjMgNjUuODVoMTguMmw2LjEtNjQuMTV6bTgzLjYgMS41OGwtMzcgNjQuMjdoMjAuN2wzMS45LTU1LjI5em0tNTAuOSA2LjMzbC0xMC4xIDU3Ljk0aDE4LjRsOS41LTU0Ljg2ek0xOTUgMTA4LjVjLTUuNiA0LTEyLjUgMTAuMy0yMC4xIDE4aDE2Mi4yYy03LjYtNy43LTE0LjUtMTQtMjAuMS0xOHptLTM2LjkgMzZjLTE4LjEgMjAuNS0zOC41IDQ2LjQtNTYuOCA3Mi4yLTE2Ljg1IDIzLjgtMzIuMjIgNDcuNi00My4yNSA2Ny4yLTUuNTEgOS44LTkuOTQgMTguNi0xMi44OSAyNS42LTIuODMgNi43LTQuMDIgMTItNC4xMiAxMy42LjE0IDAgLjU4IDEuNiAyLjI5IDMuMyAyLjMyIDIuNCA2LjMyIDUuMiAxMS43OSA3LjQgMTAuOTMgNC40IDI3LjcxIDYuNiA1MC4wOC0uNCAxMi44LTQgMjQuNiAxLjQgMzYuMyA2LjMgMTEuOCA1IDI0LjIgMTAuNCAzNy41IDExLjcgMTUuNyAxLjcgMzcuMy02LjMgNTguMy0xMy44IDEwLjUtMy44IDIwLjktNy4zIDMxLTguOSAxMC4yLTEuNyAyMC42LTEuNCAyOS42IDQuMSAxMC41IDYuNCAyMi40IDEyLjggMzMuMyAxNS44IDExIDMuMSAyMC4yIDIuOSAyOC4yLTIuNSAyNi43LTE3LjggNTEuMy0xNi44IDY5LjYtNy4zIDE5LjggMTAuMyAyOC40IDcuMiAzNCAyLjQgNS43LTQuOCA4LjEtMTUgOC0xNy4zdi0uNGMwLTEuNC0xLjItNy00LjItMTRzLTcuNC0xNS44LTEyLjktMjUuNmMtMTEtMTkuNi0yNi40LTQzLjQtNDMuMi02Ny4yLTE4LjMtMjUuOC0zOC43LTUxLjctNTYuOC03Mi4yem0xMjEgMjAxLjNjLTIuMyAwLTQuOS4yLTcuOS42LTcuOSAxLjMtMTcuNSA0LjUtMjcuOCA4LjEtMjAuNiA3LjQtNDMuNyAxNy4yLTY2LjIgMTQuOS0xNy0xLjgtMzEuMi04LjMtNDIuNi0xMy4xLTExLjUtNC44LTE5LjctNy4xLTI0LTUuNy0xLjkuNi0zLjggMS4xLTUuNiAxLjZ2OTkuM2MwIDQuMiAyLjUgOC41IDkuOCAxMy42IDcuNCA1IDE5LjEgOS45IDMzLjUgMTMuNyAxNC43IDMuOSAzMi4yIDYuOSA1MSA4LjggMS4xLTIxLjkgNS00NS40IDEyLjItNjUuMiA0LjMtMTEuNyA5LjYtMjIuMSAxNi44LTMwLjEgNy4xLTguMSAxNi43LTEzLjggMjcuNy0xMy44czIwLjYgNS43IDI3LjcgMTMuOGM3LjIgOCAxMi41IDE4LjQgMTYuOCAzMC4xIDcuMiAxOS44IDExLjEgNDMuMyAxMi4yIDY1LjIgMTguOC0xLjkgMzYuMy00LjkgNTEtOC44IDE0LjQtMy44IDI2LjEtOC43IDMzLjUtMTMuNyA3LjMtNS4xIDkuOC05LjQgOS44LTEzLjZWMzUwYy0xMC4zLTEuNi0yMi4zLjktMzcuNiAxMS4xLTEzLjQgOC45LTI5IDguNy00MyA0LjktMTMuOS0zLjgtMjYuOS0xMS4xLTM3LjktMTcuOC0yLjQtMS41LTUuNS0yLjMtOS40LTIuNHpcIlxyXG4gICAgICAgIGZpbGw9XCIjMDAwMDAwXCJcclxuICAgICAgICBmaWxsT3BhY2l0eT1cIjFcIlxyXG4gICAgICA+PC9wYXRoPlxyXG4gICAgPC9nPlxyXG4gIDwvc3ZnPlxyXG4pO1xyXG5cclxuY29uc3QgQ2xhbiA9IChwcm9wcykgPT4gKFxyXG4gIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTAwIDEyNVwiIHsuLi5wcm9wc30+XHJcbiAgICA8cGF0aCBkPVwiTTk4LjcsODkuMUw1OC44LDkuNGMtMC40LTAuOC0xLjEtMS4zLTItMS4zYy0wLjksMC0xLjcsMC41LTIuMSwxLjJMNDAsMzcuOEwzNi4xLDMxYy0wLjQtMC43LTEuMi0xLjItMi4xLTEuMSAgYy0wLjksMC0xLjYsMC42LTIsMS4zTDEuNSw4OWMtMC4zLDAuNy0wLjMsMS41LDAuMiwyLjJjMC40LDAuNywxLjEsMSwxLjksMWg5M2MwLjgsMCwxLjUtMC40LDEuOS0xQzk4LjksOTAuNiw5OSw4OS44LDk4LjcsODkuMXogICBNMjguOSw4Ny43YzAtNi44LDMuMy0xMi44LDguNS0xNi42bDEtMC43bDEuNyw2LjNjMC40LDAuOSwxLjcsMC43LDEuOC0wLjJsMi42LTEzLjNjMC4yLTEsMS41LTEuMSwxLjktMC4ybDIsNS41ICBjMC4zLDAuOSwxLjUsMC44LDEuOCwwbDEuNC00LjFjMC4zLTEsMS44LTAuOCwxLjksMC4zbDAuNywxMy4yYzAuMSwxLjIsMS44LDEuMiwxLjksMC4xbDEuNC0xMC40YzAuMS0xLjEsMS43LTEuMSwxLjktMC4xTDYzLDgxLjYgIGMwLjIsMSwxLjcsMSwxLjksMGwxLjItNS42YzIuMywzLjMsMy43LDcuMywzLjcsMTEuN0gyOC45eiBNNjAuNywzNy4xQzYwLjEsMzYuNSw1OSwzNyw1OSwzNy44bC0wLjUsMTJjMCwwLjktMS4xLDEuMy0xLjcsMC42ICBsLTcuNi01Yy0wLjQtMC41LTEuMi0wLjQtMS41LDAuMWwtNi40LDEwLjRjLTAuNCwwLjUtMS4yLDAuNS0xLjYsMGwtNC4zLTUuOGMtMC4zLTAuNS0xLjEtMC41LTEuNS0wLjFsLTExLjEsOS40bDExLjUtMjIuM2wzLjgsNi43ICBjMC40LDAuNywxLjIsMS4yLDIsMS4xYzAuOCwwLDEuNi0wLjUsMi0xLjJsMTQuNS0yOC4xbDE0LjIsMzBMNjAuNywzNy4xelwiIC8+XHJcbiAgPC9zdmc+XHJcbik7XHJcbiIsImltcG9ydCB7IFJlZ2lvbkljb24gfSBmcm9tICcuL3JlZ2lvbkljb24nXHJcblxyXG5leHBvcnQgeyBSZWdpb25JY29uIH1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBSZWdpb25JY29uID0gKHByb3BzKSA9PiB7XHJcbiAgc3dpdGNoIChwcm9wcy5yZWdpb24pIHtcclxuICAgIGNhc2UgJ2Rvcm5lJzpcclxuICAgICAgcmV0dXJuIDxEb3JuZSB7Li4ucHJvcHN9IC8+O1xyXG4gICAgY2FzZSAncml2ZXJsYW5kcyc6XHJcbiAgICAgIHJldHVybiA8Uml2ZXJsYW5kcyB7Li4ucHJvcHN9IC8+O1xyXG4gICAgY2FzZSAndGhld2FsbCc6XHJcbiAgICBjYXNlICd3YWxsJzpcclxuICAgIGNhc2UgJ3RoZVdhbGwnOlxyXG4gICAgICByZXR1cm4gPFdhbGwgey4uLnByb3BzfSAvPjtcclxuICAgIGNhc2UgJ25vcnRoJzpcclxuICAgICAgcmV0dXJuIDxOb3J0aCB7Li4ucHJvcHN9IC8+O1xyXG4gICAgY2FzZSAndmFsZSc6XHJcbiAgICAgIHJldHVybiA8VmFsZSB7Li4ucHJvcHN9IC8+O1xyXG4gICAgY2FzZSAnaXJvbklzbGFuZHMnOlxyXG4gICAgICByZXR1cm4gPElyb25Jc2xhbmRzIHsuLi5wcm9wc30gLz47XHJcbiAgICBjYXNlICd3ZXN0ZXJsYW5kcyc6XHJcbiAgICAgIHJldHVybiA8V2VzdGVybGFuZHMgey4uLnByb3BzfSAvPjtcclxuICAgIGNhc2UgJ2Nyb3dubGFuZHMnOlxyXG4gICAgICByZXR1cm4gPENyb3dubGFuZHMgey4uLnByb3BzfSAvPjtcclxuICAgIGNhc2UgJ3N0b3JtbGFuZHMnOlxyXG4gICAgICByZXR1cm4gPFN0b3JtbGFuZHMgey4uLnByb3BzfSAvPjtcclxuICAgIGNhc2UgJ3JlYWNoJzpcclxuICAgICAgcmV0dXJuIDxSZWFjaCB7Li4ucHJvcHN9IC8+O1xyXG4gICAgY2FzZSAnYmV5b25kVGhlV2FsbCc6XHJcbiAgICAgIHJldHVybiA8QmV5b25kVGhlV2FsbCB7Li4ucHJvcHN9IC8+O1xyXG4gICAgY2FzZSAnZ3VpZGUnOlxyXG4gICAgICByZXR1cm4gPEd1aWRlIHsuLi5wcm9wc30gLz47XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gPGRpdiAvPjtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBCZXlvbmRUaGVXYWxsID0gKHByb3BzKSA9PiAoXHJcbiAgPHN2ZyBmaWxsPVwibm9uZVwiIHsuLi5wcm9wc30gdmlld0JveD1cIjAgMCAxNiAxNlwiPlxyXG4gICAgPHBhdGhcclxuICAgICAgZD1cIk0xNS45ODQgNi42MjZjLS4wNzgtLjI5My0uMzQtLjM5NS0uNi0uMzU0LS41MDMuMDc1LTEgLjE0My0xLjUwMy4yMTguMTY0LS4zLjMyNy0uNTkyLjQ5LS44OTIuMzE0LS41NzEtLjUzNS0xLjA4OC0uODQ5LS41MTctLjI4Ny41MzEtLjU4MSAxLjA1NS0uODY5IDEuNTg2bC0uODQyLjEyMmMuMTM3LS4zLjI2OC0uNTk5LjQwNS0uODk4LjI2OC0uNTkyLS41NzUtMS4xMDktLjg1LS41MTctLjIzNC41MjQtLjQ3NiAxLjA1NC0uNzExIDEuNTc4LS4xMTEuMDE0LS4yMjIuMDM0LS4zNC4wNDgtLjMuMDQtLjU5NC4wODgtLjg5NC4xM2wtLjU4Mi0uNzc2Yy4xMTgtLjMwNy4yNDItLjYxMy4zNi0uOTE5bDEuOTk4LS40N2MuNjE0LS4xNDIuMzUzLTEuMTI5LS4yNjEtLjk4Ni0uNDMxLjEwMi0uODU2LjE5Ny0xLjI4Ny4zLjEzLS4zMzQuMjYxLS42NjcuMzkyLS45OTQuNDk2LS4yMDQuOTg2LS40MTUgMS40ODMtLjYxOS4yNDEtLjEwMi40MTgtLjM0LjM0LS42MjYtLjA2Ni0uMjQ1LS4zNTQtLjQ2Mi0uNjAyLS4zNTQtLjIzNS4xMDMtLjQ3LjE5OC0uNzA1LjMuMTc2LS40NS4zNTMtLjg5OC41MjktMS4zNC4wOTgtLjI1OS0uMTExLS41NTgtLjM0LS42MjYtLjI4LS4wODItLjUwMy4xMDItLjYuMzUzLS4yMDMuNTEtLjM5OSAxLjAyLS42MDEgMS41MzEtLjIwMy0uMjY1LS40MDUtLjUzNy0uNjA4LS44MDMtLjE2My0uMjE3LS41MjItLjE3Ny0uNjkyIDAtLjIxLjIxOC0uMTYzLjUwNCAwIC43MjIuMjk0LjM4Ny41ODEuNzc1Ljg3NSAxLjE2My0uMTA0LjI1OC0uMjAyLjUxNy0uMzA3Ljc3NS0uMTctLjIzOC0uMzQ2LS40NzYtLjUxNi0uNzItLjE1Ny0uMjE4LS40MjQtLjMzNC0uNjczLS4xODQtLjIwOS4xMjktLjMzMy40NzYtLjE3Ni43LjMxNC40MjkuNjIuODY0LjkzNCAxLjI5M2wtLjIzNS41OTJjLS4xMDUuMjY1LS4yMS41MjQtLjMxNC43OWwtLjU0OC4wOGMtLjI0OC0uMzE5LS40OTctLjY0Ni0uNzQ1LS45NjUuMTQ0LS41NDUuMjgxLTEuMDk2LjQyNS0xLjY0LjE2My0uNjMzLS43NzctLjkwNS0uOTQ3LS4yNzItLjA3OS4zMDYtLjE2My42MTktLjI0Mi45MjUtLjE0NC0uMTg0LS4yOC0uMzY3LS40MjQtLjU1LjEyNC0uNTguMjQ4LTEuMTU3LjM3Mi0xLjc0My4xMzctLjY0LS44MS0uOTExLS45NDctLjI3Mi0uMDcyLjMzNC0uMTQ0LjY2LS4yMS45OTQtLjMyLS40MjktLjY1Mi0uODU4LS45ODUtMS4yODYtLjE3LS4yMTgtLjUxNi0uMTc3LS42OTMgMC0uMjA5LjIxLS4xNjMuNTEgMCAuNzIuMjk0LjM4Mi41OTUuNzcuODg5IDEuMTUtLjM3My0uMDEzLS43NTEtLjAzMy0xLjEzLS4wNDctLjYzNC0uMDI3LS42MjcuOTkzIDAgMS4wMi42NDYuMDI4IDEuMy4wNTUgMS45NDYuMDg5LjE1Ny4yMDQuMzEzLjQwOC40Ny42MDZsLTEuMTk1LjEyMmMtLjI2MS4wMjctLjQ5LjIxOC0uNDkuNTEgMCAuMjUyLjIyMi41MzguNDkuNTEuNjQtLjA2OCAxLjI4Ny0uMTI5IDEuOTI3LS4xOTdsLjM4NS41MDQuMjU1LjMyNi0uMzA3Ljc5NmMtLjM0Ni4wNDgtLjY5Mi4xMDItMS4wMzkuMTUtLjQzNy0uMzg4LS44NzUtLjc2OS0xLjMxMi0xLjE1Ny0uNDc3LS40MjEtMS4xNzYuMy0uNjkzLjcyMS4yMzUuMjExLjQ3LjQxNS43MDYuNjI2bC0xLjExNy4xNjRjLS4zMDctLjQwOS0uNjE0LS44MjQtLjkyOC0xLjIzMi0uMTYzLS4yMTctLjUyMi0uMTc3LS42OTIgMC0uMjA5LjIxOC0uMTYzLjUwNCAwIC43MjEuMTcuMjI1LjM0LjQ1LjUwMy42NzQtLjM5OC4wNjEtLjgwMy4xMTYtMS4yMDIuMTc3LS4yNjEuMDQtLjQwNS4zODgtLjM0LjYyNi4wNzkuMjkyLjM0LjM5NC42MDIuMzU0LjM0LS4wNDguNjc5LS4xMDMgMS4wMjUtLjE1LS4xNTcuMzQ3LS4zMDcuNjg3LS40NjQgMS4wMzQtLjI2OC41OTIuNTc1IDEuMTA5Ljg1LjUxNy4yNTQtLjU3Mi41MTUtMS4xNDMuNzctMS43MTQuNDExLS4wNjIuODIzLS4xMTYgMS4yMjgtLjE3Ny0uMjM1LjQzNS0uNDc3Ljg3LS43MTIgMS4zMDYtLjMxNC41NzEuNTM1IDEuMDg4Ljg0OS41MTcuMzYtLjY2Ny43MjUtMS4zMzMgMS4wODQtMmwuNDM4LS4wNjEuMy0uMDQxLjU4OC43ODljLS4xNy40MzUtLjM0Ljg3LS41MTYgMS4zMDYtLjYwNy4xNjMtMS4yMDguMzI3LTEuODE2LjQ5LS42MDcuMTYzLS4zNTIgMS4xNS4yNjIuOTg2LjM2NS0uMDk1LjcyNS0uMTk3IDEuMDktLjI5MmwtLjMxMy44MDNjLS41NjIuMTM2LTEuMTE3LjI3OS0xLjY3OS40MTUtLjYxNC4xNS0uMzUyIDEuMTM2LjI2Mi45ODYuMzItLjA4MS42NC0uMTU2Ljk2LS4yMzgtLjE5LjQ4My0uMzguOTYtLjU2OSAxLjQ0Mi0uMDk4LjI1OS4xMTEuNTU4LjM0LjYyNi4yOC4wODIuNTAzLS4xMDIuNi0uMzUzLjE3LS40MjkuMzQtLjg1OC41MS0xLjI5My4xODMuMzMzLjM3My42NjcuNTU1IDEgLjMxNC41NzIgMS4xNjMuMDU1Ljg1LS41MTctLjMxNC0uNTU4LS42MjEtMS4xMjMtLjkzNC0xLjY4LjEzLS4zNC4yNjctLjY3NC4zOTgtMS4wMTQuMjIyLjM2Ny40NS43MzUuNjczIDEuMDk1LjM0LjU1MSAxLjE4OC4wNDEuODQ5LS41MTctLjM1My0uNTc4LS43MTItMS4xNTYtMS4wNjUtMS43NDIuMDUyLS4xNDIuMTExLS4yNzguMTYzLS40MjFsLjE3Ny0uNDUgMS40My0uMjAzLjY1My44NDNjLS4xNzYuNTY1LS4zNTkgMS4xMjMtLjUzNSAxLjY4Ny0uMTk2LjYyNi43NDQuODkyLjk0Ny4yNzMuMTA0LS4zNC4yMTUtLjY3NC4zMi0xLjAxNC4yMTUuMjc5LjQzLjU1LjY0LjgzLS4yMS41NTgtLjQyNSAxLjExNi0uNjM0IDEuNjgtLjA5OC4yNTkuMTA1LjU1OC4zNC42MjYuMjc0LjA4Mi41MDMtLjEwMi42LS4zNTRsLjM5My0xLjA0Yy4zNTkuNDY5LjcyNS45MzIgMS4wODQgMS40MDEuMTcuMjE4LjUxNi4xNzcuNjkyIDAgLjIwOS0uMjEuMTYzLS41MSAwLS43MjEtLjMyLS40MTUtLjY0LS44MjMtLjk1NC0xLjIzOC4zMjctLjAyLjY0Ny0uMDQ4Ljk3NC0uMDY4LjYyNy0uMDQ4LjYzMy0xLjA2OCAwLTEuMDItLjU3NS4wNC0xLjE0My4wOC0xLjcxOC4xMjItLjIyMi0uMjg2LS40MzgtLjU3Mi0uNjYtLjg1OC4yNjgtLjAyNy41MzYtLjA1NC44MDQtLjA4OC4yNi0uMDI3LjQ5LS4yMTEuNDktLjUxIDAtLjI1Mi0uMjIzLS41MzgtLjQ5LS41MWwtMS41MjkuMTYzYy0uMDY1LS4wODktLjEzNy0uMTc3LS4yMDItLjI2NmwtLjU2OC0uNzM0LjM4NS0uOTk0Ljk4Ni0uMTQzYy40NS40NS45MDIuODk4IDEuMzQ2IDEuMzQ3LjQ1Ny40NTYgMS4xNS0uMjY1LjY5Mi0uNzItLjI2OC0uMjY2LS41MzYtLjUzOC0uODAzLS44MDQuMjYtLjA0LjUyMi0uMDc0Ljc3Ny0uMTE1LjQ0NC4zNC44ODEuNjg3IDEuMzI2IDEuMDI3LjIxNS4xNjMuNTQ4LjAzNC42NzItLjE4NC4xNDQtLjI1OC4wNC0uNTMtLjE3Ni0uNy0uMTUtLjExNi0uMjk0LS4yMzItLjQ0NC0uMzQ3LjQ3Ny0uMDY4Ljk2LS4xMzYgMS40MzctLjIxMS4yNjEtLjAyNy40MDUtLjM4MS4zNC0uNjJ6XCJcclxuICAgICAgZmlsbD1cIiMwMDBcIlxyXG4gICAgLz5cclxuICA8L3N2Zz5cclxuKTtcclxuXHJcbmNvbnN0IENyb3dubGFuZHMgPSAocHJvcHMpID0+IChcclxuICA8c3ZnIHsuLi5wcm9wc30gdmlld0JveD1cIjAgMCAxNiAxNlwiPlxyXG4gICAgPHBhdGhcclxuICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgZD1cIk0xMS4wOCAwYy0uMzg4LjAwMy0uNzkyLjA0LTEuMjIzLjEzIDEuMTM0LjIzNyAxLjg0Ny43NCAyLjIzIDEuMzI3YTE1Ljg0IDE1Ljg0IDAgMDAtMS41NC0uMTg3TDkuOTA4LjY4bC0uNjUzLjU1NmMtLjI1NS4wMDYtLjUwNy4wMTgtLjc1NS4wMzlMNy41MDMuNzI3bC0uNTA1Ljc3MmMtLjI3NS4wNi0uNTQ0LjEzLS44MDguMjFsLS45OTgtLjUwNi0uMzgzIDEuMDRhOS41NSA5LjU1IDAgMDAtLjg2Ny40NzJsLTEuMTA3LS4xOC0uMDE2Ljk4MmE5LjkzIDkuOTMgMCAwMC0uNjIyLjU2NEgxLjAwMWwuMTIgMS4yNGMtLjE0Ny4yLS4yOS40MDctLjQyOS42MjFsLS42OS0uMTI1djEuMzM2TDAgNy4xNTZWMTZoLjYyN2MuNzk2LTMuMTQ1IDMuMjAyLTQuNDExIDUuNzIyLTIuODg0IDEuNDI3Ljg2NSAzLjE3NiAyLjEwOCA1LjA0OCAxLjM5My0uMDMuMjY5LS4xMS41MjgtLjIzNC43NjNsMy4yMy42NDljLjEtLjI2Mi4xODgtLjUzMi4yNTgtLjc5Ny0uMTIuMDc3LS4zNTEuMTYyLS42Ny4xMTItMS40LS4yMi0xLjEyMy0xLjgyOC0uMDE4LTEuOTc2LjM3LS4wNS43MTYuMTA5LjkzMy4zOGwuNjItMS4zMTRjLTIuMzA3LjIwNS00LjM5LTEuMDQzLTYuNjg4LS41NjUgMS4yLjI1MSAxLjkzLjggMi4yOTQgMS40MzMtLjI0OC4wMTktLjQ4OC4wMi0uNzIuMDA1bC0uMzY3LS4zNDctLjQ2MS4yMThhNC4zMjMgNC4zMjMgMCAwMS0uNTg3LS4xOTVsLS4yNjEtLjUyMy0uMzcuMjAyYTQuOTggNC45OCAwIDAxLS42ODgtLjUxbC0uMDYyLS45MDQtLjY1OC4xN2EzLjk2NiAzLjk2NiAwIDAwLS43NzUtLjYybC0uMDQzLS42NjktLjgwOS4zMThhMi43NzIgMi43NzIgMCAwMC0xLjE4Ny0uMDA4YzEuNDk4LTMuMDU4IDQuNTQtMy4xMjYgNi4xMjMtMi4xODQtLjE3Ni4xOTItLjM4NS4zNS0uNjEzLjQ2NmwyLjI1NCAyLjM5OWMuMjM1LS4xNTUuNDYyLS4zMjQuNjcyLS41LS4xNDMtLjAwNy0uNDgtLjE3LS41OTItLjI3My0xLjE3LTEuMDc0LjI0LTIuMTYgMS4xMTQtMS42NDUuMzIuMTkuNTIuNTA0LjU0Ljg1MWwxLjE3Ni0uODA3QzEyLjgxIDcuNDcgMTEuOTI2IDUuMzQgOS43NzYgNC40Yy43ODIuODQ0IDEuMDc0IDEuNjYxIDEuMDQ5IDIuMzZhNC4xODkgNC4xODkgMCAwMC0uOTc3LS41NDhsLS40NjktLjcyLS42MTYuNDMyYTUuNTQzIDUuNTQzIDAgMDAtLjUzNC0uMDVsLS42NDctLjYxMy0uNTE3LjY2NmE3LjU3NiA3LjU3NiAwIDAwLS44MDcuMTU1bC0uNTMzLS40NC0uMzMuNzA0YTkuMDg4IDkuMDg4IDAgMDAtLjcwNC4yOWwtLjgtLjI4LS4yOTIuODc2YTkuNTAyIDkuNTAyIDAgMDAtMS4xOC44ODFjMS4xNjYtNC42NTggNi45OTktNS43OSA5Ljk5My01LjEyOC0uMDM4LjIzLS4xMTMuNDUyLS4yMTkuNjU1bDMuMjMuNjQ5Yy4xLS4yNjIuMTg4LS41MzIuMjU3LS43OTctLjEyLjA3Ny0uMjU0LjE4LS40MDUuMTYtMS41NjgtLjIxNC0xLjQ4NC0xLjg1Mi0uMjgzLTIuMDI0LjM3LS4wNTMuNzE3LjEwOC45MzQuMzguMDM0LS4zNDUuMDYxLTEuMjA2LjA3NC0xLjU1My0xLjg3NC4xNjctMy4yNC0uNDY4LTQuOTItLjQ1NnpcIlxyXG4gICAgICBmaWxsPVwiIzAwMFwiXHJcbiAgICAvPlxyXG4gIDwvc3ZnPlxyXG4pO1xyXG5cclxuY29uc3QgRG9ybmUgPSAocHJvcHMpID0+IChcclxuICA8c3ZnIHsuLi5wcm9wc30gdmlld0JveD1cIjAgMCAxNiAxNlwiPlxyXG4gICAgPHBhdGhcclxuICAgICAgZD1cIk04LjEyNyAwYTIwLjI3OSAyMC4yNzkgMCAwMC0xLjI2NSAzLjEwNGwtLjEzNy40MjgtLjM1Ni0uMjc0YTExLjgwMiAxMS44MDIgMCAwMS0yLjIzNy0yLjIzN2MuMDYgMS4xNy4yMjUgMi4yNjYuNDU2IDMuMzIxbC4wOTYuNDM5LS40NDUtLjA2YTExLjgwMiAxMS44MDIgMCAwMS0zLjA1Ni0uODE4Yy42MzcuOTgyIDEuMzI4IDEuODUgMi4wNTYgMi42NDhsLjMwMi4zMzItLjQxNS4xNzFhMTEuOCAxMS44IDAgMDEtMy4wNTYuODE5YzEuMDQzLjUzMiAyLjA3NS45MzggMy4xMDQgMS4yNjVsLjQyOC4xMzctLjI3NC4zNTZhMTEuODA3IDExLjgwNyAwIDAxLTIuMjM3IDIuMjM3YzEuMTctLjA2IDIuMjY2LS4yMjUgMy4zMjEtLjQ1NmwuNDM5LS4wOTctLjA2LjQ0NmExMS44MDIgMTEuODAyIDAgMDEtLjgxOCAzLjA1NkEyMC4yNzggMjAuMjc4IDAgMDA2LjYyIDEyLjc2bC4zMzItLjMwMi4xNzEuNDE1YTExLjggMTEuOCAwIDAxLjgxOSAzLjA1NiAyMC4yNzcgMjAuMjc3IDAgMDAxLjI2Ni0zLjEwNGwuMTM2LS40MjguMzU2LjI3NGExMS44MDIgMTEuODAyIDAgMDEyLjIzNyAyLjIzNyAyMC4yODkgMjAuMjg5IDAgMDAtLjQ1Ni0zLjMyMWwtLjA5Ni0uNDM5LjQ0NS4wNmMxLjAxOS4xMzQgMi4wNC4zOSAzLjA1Ni44MThhMjAuMjggMjAuMjggMCAwMC0yLjA1Ni0yLjY0OGwtLjMwMi0uMzMyLjQxNS0uMTcxQTExLjggMTEuOCAwIDAxMTYgOC4wNTdhMjAuMjgzIDIwLjI4MyAwIDAwLTMuMTA0LTEuMjY2bC0uNDI4LS4xMzYuMjc0LS4zNTZhMTEuODA0IDExLjgwNCAwIDAxMi4yMzctMi4yMzcgMTkuNCAxOS40IDAgMDAtMS44MzguMTg0TDguNzA3IDguNjc5YTEuMDIgMS4wMiAwIDAxLS43NDkuMzE4Ljk3MS45NzEgMCAwMS0uNjU1LS4yOTRjLS4zMzYtLjM0LS40MTEtLjk3LjAxNC0xLjQwNmwuMDAxLS4wMDIgNC4xMzUtNC4xMzVjLjE0OC0uNjgzLjM1Ny0xLjM2Ni42NDQtMi4wNDdBMjAuMjc3IDIwLjI3NyAwIDAwOS40NSAzLjE3bC0uMzMyLjMwMi0uMTcxLS40MTVBMTEuOCAxMS44IDAgMDE4LjEyNyAwem03Ljg0NC4wMjlsLTMuMDE1IDEuOTE4djEuMDk3aDEuMDk3TDE1Ljk3LjAyOXptLTMuNjQ1IDMuMTVsLS4yOTMuMjkzLTQuMjY0IDQuMjY0Yy0uMjE0LjIyLS4xNDguMzkzLS4wMTguNTI0YS4zNDUuMzQ1IDAgMDAuMjI5LjEwN2MuMDguMDAzLjE2OC0uMDE5LjI4LS4xMzJsNC41NjEtNC41NjFoLS40OTV2LS40OTV6bS04LjIyNSA4LjkzNWMtLjI4OC4wNTgtLjU3Ni4xMS0uODY2LjE1NkwwIDE1LjUwNS40OTUgMTZsMy41NDItMy41NDJjLjAyMy0uMTE0LjA0NC0uMjI5LjA2NC0uMzQ0elwiXHJcbiAgICAgIGZpbGw9XCIjMDAwXCJcclxuICAgIC8+XHJcbiAgPC9zdmc+XHJcbik7XHJcblxyXG5jb25zdCBJcm9uSXNsYW5kcyA9IChwcm9wcykgPT4gKFxyXG4gIDxzdmcgZmlsbD1cIm5vbmVcIiB7Li4ucHJvcHN9IHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cclxuICAgIDxwYXRoXHJcbiAgICAgIGQ9XCJNNy4xODEgMS4yNTZjLS40MS44OC0uODQ1IDIuMDYtMS4xNzYgMy4yMDItLjMzMiAxLjE0Mi0uNTYgMi4yNTYtLjU3NyAyLjk2NC0uMDEyLjE4NS0uMDE0LjU1LjExNi42NzIuMDEyLjAwMS4wNjkgMCAuMTctLjA1Mi42MS0uMzA4IDEuNDQ2LS40NCAyLjI4Ni0uNDQuODQgMCAxLjY3Ny4xMzIgMi4yODcuNDQuMS4wNTEuMTU3LjA1My4xNjkuMDUyLjEwNi0uMTQ2LjExOC0uNTI4LjExNi0uNjcyLS4wMTYtLjcwOC0uMjQ1LTEuODIyLS41NzctMi45NjQtLjMzMi0xLjE0MS0uNzY1LTIuMzIxLTEuMTc2LTMuMjAyQzguNzEzIDEuMDEgOC4zMzYtLjAwNSA4IDBjLS4zNy4wMDYtLjY5Ljk4MS0uODE5IDEuMjU2em0tLjY1LS4wMzVjLS43NTYuNTk5LTEuNjg3IDEuNDQxLTEuOTg3IDIuMjQuMTMuNDg3LjQ2My44MDUuNzk3IDEuMTIuMzM4LTEuMTQuNzQ3LTIuMzYgMS4xOS0zLjM2em0yLjk0LjAwM2MuNDg2IDEuMTguODg3IDIuMjc0IDEuMTg4IDMuMzU2LjMtLjMxOC43NDEtLjY2My43OTctMS4xMTktLjQ5LTEuMDM0LTEuMi0xLjYyNi0xLjk4Ni0yLjIzN3pNMS4zODMgMy43MjNjLS4wNTMuNTc2LjA2NCAxLjM2Ljc0MyAyLjIxMi4yNDctLjA3LjQ2MS0uMTczLjYzMy0uMy4xNTguMjcuMzk1LjU2Ni40NDIuODg1LjA4NC43MTMtLjU0NiAxLjcxMi0xLjEwNyAyLjY2NS0uMjguNDc3LS41MzguOTQzLS42MzcgMS40MTctLjEuNDc0LjAxLjk5Ni40MzUgMS4zNS4zNDMuMjg3Ljc5OS4yNjQgMS4yMDMuMTMuNDA0LS4xMzUuODA1LS4zOCAxLjE3Mi0uNjQ3LjIzOC0uMTcyLjQ2LS4zNTMuNjU0LS41MmwuMjIuMDYzYy0uNTQ4LjY3My0uOTY2IDEuMzY0LTEuMzk0IDEuOTIzLS41MDguNjY1LTEgMS4xMjctMS43NDMgMS4yNTktLjQ4MS4wODUtMS4yNzktLjIxLTIuMDA0LS42MDl2LjcwMmMuNjg4LjM2MSAxLjQzMy42MyAyLjEwOC41MS45NC0uMTY3IDEuNTc1LS43NzcgMi4xMTgtMS40ODguNTA3LS42NjMuOTYtMS40MjggMS41NTYtMi4xMTdsLjE4My4wNWMtLjA1NS4yNzItLjEzLjYyLS4yMjcgMS4wMDItLjIxNi44NDktLjU0NSAxLjg0NC0uODk1IDIuMzQ0LS4zMS40NDItLjkyMS45NzEtMS41NTkgMS40NDZoLjk5NmMuNDItLjM1Ljc5Ni0uNzIgMS4wNTctMS4wOTIuNDU1LS42NS43NjQtMS42Ny45ODctMi41NDYuMDk2LS4zODEuMTcyLS43My4yMjgtMS4wMDguMTUuMDM1LjI5My4wNjUuNDMuMDktLjA1Ni44My0uMTk3IDIuNjU3LS40MjEgMy42Mi0uMDYyLjI2NC0uMTYyLjU5LS4yNzkuOTM2aC42NGMuMDkyLS4yODUuMTcyLS41NTcuMjI3LS43OTYuMjQ1LTEuMDQ3LjM4MS0yLjgyNC40MzUtMy42NzYuMTQ2LjAxMy4yODguMDIuNDMuMDIuMDY1IDEuNDg3LjA5MiAyLjk4Mi4xNzMgNC40NTJoLjYwNWMtLjA3LTEuNDk0LS4xMjQtMi45OTUtLjE3NC00LjQ5My4xMjMtLjAxNS4yNS0uMDM0LjM4Mi0uMDU5LjAxMy4xODguMDI5LjM5OS4wNS42NC4wNjIuNjY2LjE1NyAxLjQ1NC4zMjUgMi4wMDguMTcuNTYyLjQ2NSAxLjIzNS43OTUgMS45MDRoLjY3OWMtLjM3Ny0uNzQ4LS43MjItMS41MTEtLjg5Ni0yLjA4NC0uMTM4LS40NTQtLjI0LTEuMjM1LS4zLTEuODg1LS4wMjEtLjIzNy0uMDQtLjQ3NS0uMDU1LS43MTJsLjM0NS0uMDg3Yy4xMDMuMzM0LjI3Ny44NjEuNTExIDEuNDM0LjM5MS45NTYuOTE4IDIuMDM4IDEuNjc3IDIuNTY2Ljc0NS41MTkgMS45MDguNjI3IDIuOTEuNjU0LjM1LjAxLjY3Ny4wMDUuOTU5LS4wMDR2LS42MTJjLS4yNzUuMDA5LS41OTguMDE0LS45NDMuMDA0LS45NTktLjAyNi0yLjA3LS4xOS0yLjU4My0uNTQ2LS41MjYtLjM2Ni0xLjA4Ni0xLjM4LTEuNDYtMi4yOTZhMTYuNjkgMTYuNjkgMCAwMS0uNDg2LTEuMzZsLjIxNC0uMDYxYy4xNTYuMzEzLjM5My43Ni42ODMgMS4xOTcuMjU5LjM4OS41NTMuNzY3Ljg5IDEuMDM1LjMzNy4yNjcuNzc1LjQzNiAxLjE4OC4yNDguMjM1LS4xMDcuNDE5LS4yNzUuNTI2LS40OC4xMDctLjIwNC4xMzctLjQzLjEyNi0uNjU0LS4wMjEtLjQ0OS0uMTkzLS45MTYtLjM4LTEuNC0uMTg5LS40ODQtLjM5Ny0uOTgxLS41Mi0xLjQzMy0uMTIxLS40NTEtLjE0OS0uODQ0LS4wMzgtMS4xMzIuMzI5LS41NC43ODgtLjk4NyAxLjIyOC0xLjMxNy4xOC4xNDQuNDEyLjI2LjY4My4zMzcuNjc5LS44NTEuNzk2LTEuNjM2Ljc0My0yLjIxMi0uODI1LjI2My0xLjQxNy45LTEuODM1IDEuNDItLjU0MS40MTgtMS4xNDcuOTM3LTEuMzgzIDEuNTUtLjE4NS40ODEtLjExOSAxLjAwNS4wMTkgMS41MTYuMTM4LjUxLjM1NiAxLjAyMy41MzkgMS40OTUuMTgzLjQ3MS4zMjYuOTA2LjM0IDEuMjA2YS42NTUuNjU1IDAgMDEtLjA1Ni4zMzhjLS4yMzQuMzU2LS41OC4yMTMtLjgwNi4wMzYtLjI0OS0uMTk3LS41MjMtLjUzNS0uNzYyLS44OTUtLjQ3OC0uNzItLjgyOC0xLjUxNS0uODI4LTEuNTE1bC0uMDA5LjAwNC0uMjkzLS41OTJjLS4yLjI5Ni0uNTM2LjQ5MS0uOTE1LjQ5MWExLjEyIDEuMTIgMCAwMS0uNzU2LTEuOTQgNi40MTggNi40MTggMCAwMC0yLjAyNC0uMDM3Yy4yNC4yMDcuMzk0LjUxNC4zOTQuODU1IDAgLjYxNi0uNSAxLjEyMi0xLjExIDEuMTIyLS40ODQgMC0uOS0uMzItMS4wNS0uNzYyLS4yNzYuNjI0LS45OSAxLjEzLTEuNDIgMS40NDUtLjM0LjI0Ni0uNzA2LjQ2Mi0xLjAxLjU2NC0uMzA1LjEtLjQ5OS4wODgtLjYzLS4wMjEtLjI2NS0uMjIxLS4yOTctLjQxNi0uMjI3LS43NS4wNy0uMzM1LjI5My0uNzY5LjU2NS0xLjIzMi41NDUtLjkyNiAxLjMxNC0xLjk2OCAxLjE4OC0zLjA1LS4wNDMtLjM3LS4yNS0uNzEtLjQzNy0uOTk4LS40Ni0uNzEyLTEuMjM2LTEuNTI3LTEuOTgyLTEuNzI3em01LjAwNCA0Ljg5OWEuNTAzLjUwMyAwIDAwLS41MDUuNTFjMCAuMjg1LjIyMy41MS41MDUuNTFhLjUwMy41MDMgMCAwMC41MDQtLjUxLjUwMy41MDMgMCAwMC0uNTA0LS41MXptMy40OTUgMGEuNTAzLjUwMyAwIDAwLS41MDQuNTFjMCAuMjg1LjIyMi41MS41MDQuNTFhLjUwMy41MDMgMCAwMC41MDUtLjUxLjUwMy41MDMgMCAwMC0uNTA1LS41MXpcIlxyXG4gICAgICBmaWxsPVwiIzAwMFwiXHJcbiAgICAvPlxyXG4gIDwvc3ZnPlxyXG4pO1xyXG5cclxuY29uc3QgTm9ydGggPSAocHJvcHMpID0+IChcclxuICA8c3ZnIGZpbGw9XCJub25lXCIgey4uLnByb3BzfSB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XHJcbiAgICA8cGF0aFxyXG4gICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICBkPVwiTTUuNDIyIDBjLS43NzcgMS4zMjktMS4wNiAyLjgzLS42NjQgNC42MjJsLjAxNC0uMDA4Yy4wNzMuMjQ0LjE2Ni40ODIuMjg0LjcxbC0uNTQ1LjMzMWE0Ljk2OSA0Ljk2OSAwIDAxLS40NjItMS4zNDdBOS43NTcgOS43NTcgMCAwMC41NDMgNC4yM2MxLjEzOC4zNjkgMS43NjIuODYyIDIuNTYgMS42OTJDMi4yMDggNi4yNzYgMS4wOTEgNy4wMTggMCA4LjQ2NmMxLjE4NC0uMzIgMi4xNjUtLjQxNSAyLjk4Ni0uMjI4QzEuNzUzIDkuMDUuODQ3IDEwLjI3LjAzNiAxMi4zN2MxLjItLjYyNSAyLjE2Ny0uNjgyIDMuNDM4LS42ODQtLjc3IDEuMTg2LTEuMTc4IDIuNzk5LTEuMjEzIDQuMDg3LjgyLS45NDIgMS45MjQtMi4xOCAyLjkxMi0yLjg2LjEgMS4wODMuNTAxIDIuMTExIDEuMiAzLjA4Ni0uMDA4LTEuNTg3LjM0Mi0zLjE5NyAxLjA1NS00LjgyOS0uMzQ4LjE4LS42OTIuMzg1LTEuMDMuNjJsLS42MzcuNDQuMTY0LS44LjQ2LTIuMjMxYy0uNDAzLjAxMS0uODEzLjE1Ni0xLjI2OC4zNWwtLjc1My4zMi4zNi0uNzg2TDYuMDA2IDYuMjhsLjU2LjMtLjk1IDIuMDc3Yy4zODMtLjExMy43OC0uMTc3IDEuMjAyLS4xMDNsLjMyNy4wNTgtLjA3Mi4zNS0uMzgzIDEuODZhOS40MiA5LjQyIDAgMDExLjctLjc4NGwuMDAyLS4wMDEuMDIyLS4wMDdhOS4xIDkuMSAwIDAxLjgxNy0uMjM3YzEuNDQtLjM5NCAyLjk5LS42ODggNS4wMjgtLjc4NC4yNTUtLjQ2Ni40Ni0uODc3LjYzLTEuMjU4bC0uMjExLS44ODUtLjgxNSAxLjExNi0uMjYzLS45OTUtLjc1IDEuMDU3LS4yNTItLjk0NS0uNzk2IDEuMTM5LS4yNTctMS4wMjItLjc5NiAxLjE0LjA0LTEuNDkxLjc1NC0xLjU0NC4yNTYgMS4wMjIuNzk3LTEuMTM4LjI1NiAxLjAyLjc4Mi0xLjA4Ni4yMi45NzQuODE1LTEuMTE2LjI2Mi45OTYuODIyLTEuMTU3Yy4wNzYtLjM5MS4xNTQtLjgxNC4yNDctMS4yOTYtMS44NTQtLjEzMy0zLjU1LjE3NS01LjE0NS4zNTctLjg4Ny0uNTM5LTEuOTU4LS43OTYtMi45NTgtLjc5Mi0uMzg1LjAwMi0uNzYuMDQzLTEuMTA5LjEyMUw1LjQyMiAwek04Ljc4IDMuOTNjLjUyNi4wMDIgMS4wMjQuMTkyIDEuNTI1LjM5LS4xNTIuNTE4LS40MzcuNjY3LS44MjYuNzUtLjU0LS4xNi0uOTQ1LS41NjQtMS4xNDgtMS4wOTQuMTUzLS4wMzMuMzAyLS4wNDcuNDQ5LS4wNDd6XCJcclxuICAgICAgZmlsbD1cIiMwMDBcIlxyXG4gICAgLz5cclxuICA8L3N2Zz5cclxuKTtcclxuXHJcbmNvbnN0IFJlYWNoID0gKHByb3BzKSA9PiAoXHJcbiAgPHN2ZyBmaWxsPVwiIzAwMDAwMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI2IDI2XCIgey4uLnByb3BzfT5cclxuICAgIDxwYXRoIGQ9XCJNIDguNzE4NzUgMS42NTYyNSBDIDYuOTg0Mzc1IDEuODE2NDA2IDUuNjU2MjUgMi41OTM3NSA1LjY1NjI1IDIuNTkzNzUgQyA1LjY1NjI1IDIuNTkzNzUgMi43MTg3NSA1LjIyMjY1NiAzLjQzNzUgOC42MjUgQyAzLjg5NDUzMSA5LjI1NzgxMyA0LjMwMDc4MSA5LjU4OTg0NCA1LjE4NzUgOS41MzEyNSBDIDUuNTg1OTM4IDkuMjQyMTg4IDUuOTc2NTYzIDkuMTQwNjI1IDYuMzEyNSA5LjEyNSBDIDYuOTA2MjUgOC40NTMxMjUgNy43OTY4NzUgNy43MzA0NjkgOS4wNjI1IDcuNTkzNzUgTCA5LjA5Mzc1IDcuNTkzNzUgQyA5LjY2Nzk2OSA2LjMxMjUgMTAuNzUzOTA2IDUuNjQwNjI1IDExLjYyNSA1LjMxMjUgQyAxMS43MjY1NjMgNC45NjA5MzggMTEuOTY0ODQ0IDQuNjMyODEzIDEyLjQwNjI1IDQuMzEyNSBDIDEyLjczNDM3NSAzLjQ4ODI4MSAxMi41NTQ2ODggMi45NzY1NjMgMTIuMDkzNzUgMi4zNDM3NSBDIDEwLjk2NDg0NCAxLjY5NTMxMyA5Ljc1NzgxMyAxLjU1ODU5NCA4LjcxODc1IDEuNjU2MjUgWiBNIDE2LjE4NzUgMS42NTYyNSBDIDE1LjQ0NTMxMyAxLjcxNDg0NCAxNC42NjAxNTYgMS45MTAxNTYgMTMuOTA2MjUgMi4zNDM3NSBDIDEzLjQ0OTIxOSAyLjk3NjU2MyAxMy4yNjU2MjUgMy40ODgyODEgMTMuNTkzNzUgNC4zMTI1IEMgMTQuMDM1MTU2IDQuNjMyODEzIDE0LjI3MzQzOCA0Ljk2MDkzOCAxNC4zNzUgNS4zMTI1IEMgMTUuMjQ2MDk0IDUuNjQwNjI1IDE2LjMzMjAzMSA2LjMxMjUgMTYuOTA2MjUgNy41OTM3NSBMIDE2LjkzNzUgNy41OTM3NSBDIDE4LjIwMzEyNSA3LjczMDQ2OSAxOS4wOTM3NSA4LjQ1MzEyNSAxOS42ODc1IDkuMTI1IEMgMjAuMDIzNDM4IDkuMTQwNjI1IDIwLjQxNDA2MyA5LjI0MjE4OCAyMC44MTI1IDkuNTMxMjUgQyAyMS42OTkyMTkgOS41ODk4NDQgMjIuMTA1NDY5IDkuMjU3ODEzIDIyLjU2MjUgOC42MjUgQyAyMy4yODEyNSA1LjIyMjY1NiAyMC4zNDM3NSAyLjU5Mzc1IDIwLjM0Mzc1IDIuNTkzNzUgQyAyMC4zNDM3NSAyLjU5Mzc1IDE4LjQxNzk2OSAxLjQ4NDM3NSAxNi4xODc1IDEuNjU2MjUgWiBNIDEzIDYgQyAxMyA2IDEwLjc5Njg3NSA2LjIxODc1IDEwIDggQyAxMCA4LjQzNzUgMTAuMDc4MTI1IDguNzM0Mzc1IDEwLjUgOSBDIDExLjY4NzUgOSAxMS43MDMxMjUgMTAuMjAzMTI1IDExLjMxMjUgMTAuNTMxMjUgQyAxMS4zMTI1IDEwLjUzMTI1IDExLjI4MTI1IDEwLjUyNzM0NCAxMS4yODEyNSAxMC41MzEyNSBDIDExLjI0NjA5NCAxMC41NTQ2ODggMTEuMjIyNjU2IDEwLjU5NzY1NiAxMS4xODc1IDEwLjYyNSBDIDEwLjc1MzkwNiAxMC44OTQ1MzEgOS42MDE1NjMgMTAuNTAzOTA2IDkuOTY4NzUgOS4zNzUgQyA5Ljg0NzY1NiA4Ljg5MDYyNSA5LjYwMTU2MyA4LjczMDQ2OSA5LjE4NzUgOC41OTM3NSBDIDcuMjQ2MDk0IDguODAwNzgxIDYuMzQzNzUgMTAuODQzNzUgNi4zNDM3NSAxMC44NDM3NSBDIDYuMzQzNzUgMTAuODQzNzUgNS44NjMyODEgMTMuMDAzOTA2IDcuMzEyNSAxNC4zMTI1IEMgNy43MjY1NjMgMTQuNDQ5MjE5IDguMDU0Njg4IDE0LjQ3NjU2MyA4LjQzNzUgMTQuMTU2MjUgQyA4LjgwNDY4OCAxMy4wMjczNDQgOS45MzM1OTQgMTMuMzcxMDk0IDEwLjEyNSAxMy44NDM3NSBDIDEwLjEyODkwNiAxMy44NTU0NjkgMTAuMTQ4NDM4IDEzLjg2NzE4OCAxMC4xNTYyNSAxMy44NzUgQyAxMC4xNjc5NjkgMTMuOTEwMTU2IDEwLjE3NTc4MSAxMy45Mzc1IDEwLjE4NzUgMTMuOTY4NzUgQyAxMC4xODc1IDEzLjk3NjU2MyAxMC4xNTIzNDQgMTMuOTg4MjgxIDEwLjE1NjI1IDE0IEMgMTAuMjc3MzQ0IDE0LjQ5NjA5NCA5LjU4NTkzOCAxNS40NDkyMTkgOC42MjUgMTQuNzUgQyA4LjEyODkwNiAxNC43MTg3NSA3Ljg4MjgxMyAxNC45MjU3ODEgNy42MjUgMTUuMjgxMjUgQyA3LjIyMjY1NiAxNy4xOTE0MDYgOC44NzUgMTguNjU2MjUgOC44NzUgMTguNjU2MjUgQyA4Ljg3NSAxOC42NTYyNSAxMC44MDg1OTQgMTkuNzg1MTU2IDEyLjUgMTguODEyNSBDIDEyLjc1NzgxMyAxOC40NTcwMzEgMTIuODcxMDk0IDE4LjE1MjM0NCAxMi42ODc1IDE3LjY4NzUgQyAxMS43MjY1NjMgMTYuOTg4MjgxIDEyLjQyOTY4OCAxNi4wMzUxNTYgMTIuOTM3NSAxNiBDIDEyLjk2MDkzOCAxNi4wMDM5MDYgMTIuOTc2NTYzIDE2IDEzIDE2IEMgMTMuMDIzNDM4IDE2IDEzLjAzOTA2MyAxNiAxMy4wNjI1IDE2IEMgMTMuNTcwMzEzIDE2LjAzNTE1NiAxNC4yNzM0MzggMTcuMDE5NTMxIDEzLjMxMjUgMTcuNzE4NzUgQyAxMy4xMjg5MDYgMTguMTgzNTk0IDEzLjI0MjE4OCAxOC40NTcwMzEgMTMuNSAxOC44MTI1IEMgMTUuMTkxNDA2IDE5Ljc4NTE1NiAxNy4xMjUgMTguNjU2MjUgMTcuMTI1IDE4LjY1NjI1IEMgMTcuMTI1IDE4LjY1NjI1IDE4Ljc3NzM0NCAxNy4xOTE0MDYgMTguMzc1IDE1LjI4MTI1IEMgMTguMTE3MTg4IDE0LjkyNTc4MSAxNy44NzEwOTQgMTQuNzUgMTcuMzc1IDE0Ljc4MTI1IEMgMTYuNDE0MDYzIDE1LjQ4MDQ2OSAxNS43MTg3NSAxNC40OTYwOTQgMTUuODQzNzUgMTQgQyAxNS44NDc2NTYgMTMuOTg4MjgxIDE1LjgxMjUgMTMuOTc2NTYzIDE1LjgxMjUgMTMuOTY4NzUgQyAxNS44MjQyMTkgMTMuOTM3NSAxNS44MzIwMzEgMTMuOTA2MjUgMTUuODQzNzUgMTMuODc1IEMgMTUuODUxNTYzIDEzLjg2NzE4OCAxNS44NzEwOTQgMTMuODU1NDY5IDE1Ljg3NSAxMy44NDM3NSBDIDE2LjA2NjQwNiAxMy4zNzEwOTQgMTcuMTk1MzEzIDEzLjAyNzM0NCAxNy41NjI1IDE0LjE1NjI1IEMgMTcuOTQ1MzEzIDE0LjQ3NjU2MyAxOC4yNjk1MzEgMTQuNDQ5MjE5IDE4LjY4NzUgMTQuMzEyNSBDIDIwLjEzNjcxOSAxMy4wMDM5MDYgMTkuNjU2MjUgMTAuODQzNzUgMTkuNjU2MjUgMTAuODQzNzUgQyAxOS42NTYyNSAxMC44NDM3NSAxOC43NTM5MDYgOC44MDA3ODEgMTYuODEyNSA4LjU5Mzc1IEMgMTYuMzk4NDM4IDguNzMwNDY5IDE2LjE1MjM0NCA4Ljg5MDYyNSAxNi4wMzEyNSA5LjM3NSBDIDE2LjM5ODQzOCAxMC41MDM5MDYgMTUuMjQ2MDk0IDEwLjg5NDUzMSAxNC44MTI1IDEwLjYyNSBDIDE0Ljc3NzM0NCAxMC41OTc2NTYgMTQuNzUzOTA2IDEwLjU1NDY4OCAxNC43MTg3NSAxMC41MzEyNSBDIDE0LjcxODc1IDEwLjUzMTI1IDE0LjY4NzUgMTAuNTM1MTU2IDE0LjY4NzUgMTAuNTMxMjUgQyAxNC4yOTY4NzUgMTAuMjAzMTI1IDE0LjMxMjUgOSAxNS41IDkgQyAxNS45MjE4NzUgOC43MzQzNzUgMTYgOC40Mzc1IDE2IDggQyAxNS4yMDMxMjUgNi4yMTg3NSAxMyA2IDEzIDYgWiBNIDIyLjEyNSAxMC4xODc1IEMgMjEuODA4NTk0IDEwLjIyMjY1NiAyMS40OTYwOTQgMTAuMzcxMDk0IDIxLjE1NjI1IDEwLjY1NjI1IEMgMjEuMDQ2ODc1IDEwLjk5NjA5NCAyMC44OTQ1MzEgMTEuMjM4MjgxIDIwLjcxODc1IDExLjQzNzUgQyAyMC43NSAxMi4zNzUgMjAuNTgyMDMxIDEzLjk0NTMxMyAxOS4zNDM3NSAxNS4wNjI1IEMgMTkuNjUyMzQ0IDE2LjUyNzM0NCAxOS4wNzQyMTkgMTcuNzU3ODEzIDE4LjUzMTI1IDE4LjUzMTI1IEMgMTguNTE1NjI1IDE4LjcxMDkzOCAxOC40NzI2NTYgMTguOTE0MDYzIDE4LjQwNjI1IDE5LjEyNSBDIDE4LjYyNSAxOS45ODgyODEgMTkuMDcwMzEzIDIwLjI4OTA2MyAxOS44MTI1IDIwLjUzMTI1IEMgMjMuMjczNDM4IDIwLjE2MDE1NiAyNC44NzUgMTYuNTMxMjUgMjQuODc1IDE2LjUzMTI1IEMgMjQuODc1IDE2LjUzMTI1IDI1LjcwNzAzMSAxMi42NzU3ODEgMjMuMTI1IDEwLjM0Mzc1IEMgMjIuNzUzOTA2IDEwLjIyMjY1NiAyMi40NDE0MDYgMTAuMTUyMzQ0IDIyLjEyNSAxMC4xODc1IFogTSAzLjQwNjI1IDEwLjIxODc1IEMgMy4yMzgyODEgMTAuMjQ2MDk0IDMuMDU4NTk0IDEwLjI4NTE1NiAyLjg3NSAxMC4zNDM3NSBDIDAuMjkyOTY5IDEyLjY3NTc4MSAxLjEyNSAxNi41NjI1IDEuMTI1IDE2LjU2MjUgQyAxLjEyNSAxNi41NjI1IDIuNzI2NTYzIDIwLjE2MDE1NiA2LjE4NzUgMjAuNTMxMjUgQyA2LjkyOTY4OCAyMC4yODkwNjMgNy4zNzUgMTkuOTg4MjgxIDcuNTkzNzUgMTkuMTI1IEMgNy41MjczNDQgMTguOTE0MDYzIDcuNDgwNDY5IDE4Ljc0MjE4OCA3LjQ2ODc1IDE4LjU2MjUgQyA2LjkyNTc4MSAxNy43ODkwNjMgNi4zNDc2NTYgMTYuNTI3MzQ0IDYuNjU2MjUgMTUuMDYyNSBDIDUuNDE3OTY5IDEzLjk0MTQwNiA1LjI0NjA5NCAxMi4zNzUgNS4yODEyNSAxMS40Mzc1IEMgNS4xMDU0NjkgMTEuMjM4MjgxIDQuOTUzMTI1IDEwLjk5NjA5NCA0Ljg0Mzc1IDEwLjY1NjI1IEMgNC4zMzIwMzEgMTAuMjMwNDY5IDMuOTA2MjUgMTAuMTM2NzE5IDMuNDA2MjUgMTAuMjE4NzUgWiBNIDEzIDEyIEMgMTMuNTUwNzgxIDEyIDE0IDEyLjQ0OTIxOSAxNCAxMyBDIDE0IDEzLjU1MDc4MSAxMy41NTA3ODEgMTQgMTMgMTQgQyAxMi40NDkyMTkgMTQgMTIgMTMuNTUwNzgxIDEyIDEzIEMgMTIgMTIuNDQ5MjE5IDEyLjQ0OTIxOSAxMiAxMyAxMiBaIE0gMTMgMTkuNjg3NSBDIDEyLjM4NjcxOSAyMC4wMzkwNjMgMTEuNjc1NzgxIDIwLjIxODc1IDEwLjkzNzUgMjAuMjE4NzUgQyAxMC4wODU5MzggMjAuMjE4NzUgOS4zNDM3NSAxOS45NzY1NjMgOC44NzUgMTkuNzgxMjUgQyA4Ljc2MTcxOSAxOS43OTY4NzUgOC42NjQwNjMgMTkuODEyNSA4LjUzMTI1IDE5LjgxMjUgQyA3Ljc3NzM0NCAyMC4yODUxNTYgNy42NTYyNSAyMC44MTI1IDcuNjU2MjUgMjEuNTkzNzUgQyA5LjA3ODEyNSAyNC43Njk1MzEgMTMgMjUuMTU2MjUgMTMgMjUuMTU2MjUgQyAxMyAyNS4xNTYyNSAxNi45MjE4NzUgMjQuNzY5NTMxIDE4LjM0Mzc1IDIxLjU5Mzc1IEMgMTguMzQzNzUgMjAuODEyNSAxOC4yMjI2NTYgMjAuMjg1MTU2IDE3LjQ2ODc1IDE5LjgxMjUgQyAxNy4zMzU5MzggMTkuODEyNSAxNy4yNDIxODggMTkuNzk2ODc1IDE3LjEyNSAxOS43ODEyNSBDIDE2LjY1NjI1IDE5Ljk3NjU2MyAxNS45MTQwNjMgMjAuMjE4NzUgMTUuMDYyNSAyMC4yMTg3NSBDIDE0LjMyNDIxOSAyMC4yMTg3NSAxMy42MTMyODEgMjAuMDM5MDYzIDEzIDE5LjY4NzUgWlwiIC8+XHJcbiAgPC9zdmc+XHJcbik7XHJcblxyXG5jb25zdCBSaXZlcmxhbmRzID0gKHByb3BzKSA9PiAoXHJcbiAgPHN2ZyBmaWxsPVwibm9uZVwiIHsuLi5wcm9wc30gdmlld0JveD1cIjAgMCAxNiAxNlwiPlxyXG4gICAgPHBhdGhcclxuICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgZD1cIk0xMC4xMjEgMGMtLjAyNC4zMDctLjA1OC42MDctLjEuODk4QTYuNTc0IDYuNTc0IDAgMDExMS4xNDEgMi42Yy0uNDE5LS40MDItLjg0Ni0uNjYyLTEuMjg3LS44MTNhOS4yOCA5LjI4IDAgMDEtLjE4LjY3NGMuMjk4LjE5LjU5LjQzLjg3LjcyNUE4LjQ2NCA4LjQ2NCAwIDAwOS40NCAzLjExYTYuOSA2LjkgMCAwMS0uMjUyLjU0NmMxLjI1LjIzNyAyLjUuNzgzIDMuNzMzIDEuNjUtLjAyNi0xLjYzMS0uODc4LTMuNjA2LTIuOC01LjMwNnpNMCAxLjAxYy4yOTcuNDguNTU0Ljk3NC43NjMgMS40OC43OS4yNTYgMS42MDMuNzIgMi40MjEgMS41MDItLjczLS4yODUtMS4zODQtLjMzLTItLjE5Ni4xLjQyNS4xNjUuODYuMTkzIDEuMzA2bC45NTUuMzU5LS45NDUuNDg1YTguOTEgOC45MSAwIDAxLS4yMjUgMS42NDNjLjMzNy4xLjY5Mi4xMSAxLjA3NS4wMTItLjQ0My40MzktLjg4NC43MTMtMS4zMTkuODY4QTEyLjMgMTIuMyAwIDAxLjQzIDkuNzI3YzEuODc4LS40OTcgMy4xMDUtMS4yMTYgMy44MTUtMi4wMzItLjIxMi0uMTQtLjQyOS0uMjc2LS42NTMtLjQwOS0uMjktLjE3Mi0uNTEzLS4zNzMtLjY2My0uNjM0YTEuMzUgMS4zNSAwIDAxLS4xNDYtLjkxN2MuMTMtLjYxMi41ODItLjk5OSAxLjIwMy0xLjMwNC4yMDgtLjEwMi40MTYtLjE5NS42MjQtLjI4LS43NjktMS40NjQtMi41MzItMi43Mi00LjYxLTMuMTR6bTcuNzcyIDMuMjg3Yy0xLjY3LS4wMDQtMy4zMzguNTYtNC45MDcgMS42NTkuMzM5LjE5LjY1OS4zNzcuOTYzLjU2M2wuMDIzLjAxNGMxLjMxMi44MDUgMi4zMjEgMS42MDggMy4xODUgMi43MjdsLjgwOC0uNTUuMjkuNzMzLS43ODcuNTM0Yy4zMDUuMzc3LjY2NS42NCAxLjA2Ni44MjMtLjYzNC4xMDMtMS4yNjguMDU5LTEuOTAyLS4yNTNsLS43NTQuNTE0YzEuMDc1Ljc3OCAyLjM5NS45MDggMy4yNy4yMzNsLjMxOC43MWEyLjcxMSAyLjcxMSAwIDAxLS42NTIuMzc1Yy4yNDkuNjkuNjE1IDEuMzg2IDEuMTAxIDIuMTIzIDEuMTgyIDEuNzk0IDIuNzA3IDIuMTI2IDMuMzMxLjE3MS0uNDc2LjQ2LTEuMzE1LjQzMy0xLjcyNS4wNTMtLjg0Mi0uNzgyLS4zOS0yLjMwNS4wODQtMy40NS4zOTgtLjk2NCAxLjQxMi0xLjUzIDEuOTQ3LTEuMTI1LjQyMi4zMi41MTIgMS4xLjI4MyAxLjg3OC41NTQtLjQgMS4xMzYtLjQyNyAxLjQ2NC4wMzUuMjQ2LjM0Ni4yNzYuODguMTQgMS40MjQgMS41Ni0yLjEuMTk4LTUuMDc2LTEuNjAxLTYuNTgxLTEuODY3LTEuNzU1LTMuOTA4LTIuNjA1LTUuOTQ1LTIuNjF6bTQuODk0IDIuODE1aC4wNDVjLjExLjAwNC4yMjEuMDQzLjMyNC4xMi4zMjcuMjQ5LjQ0Ljc5OS4yNSAxLjIyOS0uMTg4LjQzLS42MDcuNTc2LS45MzQuMzI4LS4zMjgtLjI0OC0uNDQtLjc5OC0uMjUyLTEuMjI4LjEyMi0uMjc3LjM0LS40MzcuNTY3LS40NDl6XCJcclxuICAgICAgZmlsbD1cIiMwMDBcIlxyXG4gICAgLz5cclxuICA8L3N2Zz5cclxuKTtcclxuXHJcbmNvbnN0IFN0b3JtbGFuZHMgPSAocHJvcHMpID0+IChcclxuICA8c3ZnIGZpbGw9XCJub25lXCIgey4uLnByb3BzfSB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XHJcbiAgICA8cGF0aFxyXG4gICAgICBkPVwiTTEuODU3IDBjLS41NjcuNDczLS44MjUgMS4yMy0uODAyIDEuOTY2LjAyMi43MzcuMjk0IDEuNDU5LjcyNSAyLjAxNi4wNDMuMDU1LjA4OC4xMDguMTM0LjE2LS4yMy40OTYtLjU3OC41NjgtLjg2NS40NjNhLjYzNy42MzcgMCAwMS0uMzYyLS4zNDRjLS4wNjYtLjE1NC0uMDktLjM0LjAwMi0uNjI0bC0uNTg0LS4zMTZjLS4xNTUuNDc4LS4xMzIuOTY3LjAyOSAxLjMzOC4xNi4zNzIuNDM2LjYyMS43NDMuNzMzLjUyNy4xOTMgMS4xODMtLjA1MyAxLjU2LS43OTcuMjkuMTkuNjE3LjMxMy45NjQuMzUuMDIzLjUwMS4xNjUuOTcuMzk1IDEuMzktLjIwNi4wOTQtLjM4LjI3NC0uNDkuNTA4LS4yOTEuNjI2LS4wOTggMS41NDYuNTk2IDIuMTY4bC4zNjItLjY3MWMtLjUyLS40NjYtLjUwNS0uODgtLjQxNC0xLjA3NWEuMjkuMjkgMCAwMS4yMzItLjE4Yy4xLS4wMTUuMjM5LjAxNC40MS4xNDguMS4wOTYuMjA1LjE4Ny4zMTYuMjczYTQuOTI4IDQuOTI4IDAgMDAxLjk1NS45Yy0uMjc0LjI3Mi0uNDY4LjYyNS0uNjE1IDEuMDI2LTEuMTEyLS4zNzYtMi4xOTItLjAwNy0zLjIyIDEuNTE1IDEuMDcuMzE3IDIuMTA5LjM4MyAzLjA2NS0uMTVsMS4yODggNC42NTZjLjE0OS43MiAxLjEwMS43NCAxLjI1NSAwbDEuMjk1LTQuNjg1Yy45Ny41NjQgMi4wMjUuNSAzLjExNS4xOC0xLjAzNS0xLjUzMy0yLjEyMi0xLjg5Ni0zLjI0Mi0xLjUwOS0uMTQzLS40MDgtLjM0LS43NDYtLjU5OC0xLjAwNGE0Ljk2IDQuOTYgMCAwMDIuMDkyLS45MyA0LjA5IDQuMDkgMCAwMC4zNTMtLjMwN2MuMTQ4LS4xMDMuMjcxLS4xMjYuMzYxLS4xMTNhLjI5LjI5IDAgMDEuMjMyLjE4Yy4wOS4xOTUuMTA1LjYxLS40MTQgMS4wNzVsLjM2Mi42NzFjLjY5NC0uNjIyLjg4Ny0xLjU0Mi41OTUtMi4xNjhhMS4wMjQgMS4wMjQgMCAwMC0uNDgtLjUwM2MuMjMyLS40Mi4zNzQtLjg5LjM5Ny0xLjM5My4zNDktLjAzLjY3Ni0uMTQ4Ljk2OS0uMzMzLjM3OC43MyAxLjAyOC45NjkgMS41NS43NzguMzA3LS4xMTIuNTgzLS4zNjEuNzQzLS43MzMuMTYtLjM3MS4xODQtLjg2LjAzLTEuMzM4bC0uNTg1LjMxNmMuMDkyLjI4NS4wNjguNDcuMDAyLjYyNGEuNjM3LjYzNyAwIDAxLS4zNjIuMzQ0Yy0uMjguMTAzLS42MjEuMDM1LS44NTEtLjQzMy4wNTYtLjA2LjExLS4xMjQuMTYxLS4xOWEzLjUxNiAzLjUxNiAwIDAwLjcyNi0yLjAxNkMxNS4wMDggMS4yMyAxNC43NS40NzMgMTQuMTg0IDBsLS4zNDUuNjg2Yy4zOTQuMzMuNTI4Ljc1Ni41MTMgMS4yNDhhMi42MjkgMi42MjkgMCAwMS0uNTQgMS40N2MtLjUwMi42NDktMS4yNyAxLjAzNi0yLjE3Ni41NTkuMjA4LS4xNjUuMzg1LS40MjguNDk0LS43NzFsLS41ODYtLjMxYy0uMDkxLjI4Ni0uMjEuMzk0LS4zNDEuNDQzLS4xMzIuMDQ4LS4yOTUuMDItLjQ0NC0uMDg3LS4yOTktLjIxNi0uNTI5LS42NzItLjI4Ny0xLjM4bC0uNTgtLjMzYy0uMzMuOTctLjA0NCAxLjg4OS40NDcgMi4zMzRsLS4wMDIuMDAzYy41NC41OTQgMS4wOTMuOTE5IDEuNjIgMS4wMzctLjE5Ny42NTgtLjQ4IDEuMDI3LS43NzggMS4yMjYtLjMxNS4yMS0uNjY0LjIzMS0uOTc2LjEyMWExLjMwMiAxLjMwMiAwIDAxLS43MTUtLjYzMWMtLjEzNi0uMjc3LS4xNy0uNTU4LS4wMy0uOTE1bC0uNTY0LS4zNzFhMi4xNjggMi4xNjggMCAwMC4wNiAxLjcyNmMuMjM5LjQ4MS42MzMuODIzIDEuMDgyLjk4LjExNS4wNC4yMzUuMDY5LjM1Ni4wODNhNC44OTggNC44OTggMCAwMS0yLjM5LjYwMiA0LjkzMSA0LjkzMSAwIDAxLTIuMjg4LS41NDZjLjA4OC0uMDE1LjE3NS0uMDM4LjI2LS4wNjguNDUtLjE1OC44NDQtLjUgMS4wODItLjk4MS4yMzgtLjQ4Mi4yOTUtMS4xMy4wNi0xLjcyNmwtLjU2NS4zNzJjLjE0MS4zNTYuMTA4LjYzNy0uMDMuOTE0YTEuMzAyIDEuMzAyIDAgMDEtLjcxNC42MzJjLS4zMTIuMTEtLjY2LjA4Ny0uOTc1LS4xMjItLjMwOS0uMjA1LS41OTgtLjU5LS43OTYtMS4yODUuNTMtLjEwOCAxLjA4OC0uNDI0IDEuNjM0LTEuMDEzLjUxOC0uNDMuODMxLTEuMzczLjQ5Mi0yLjM3MWwtLjU4LjMyOGMuMjQuNzEuMDEgMS4xNjUtLjI4OCAxLjM4LS4xNDkuMTA4LS4zMTIuMTM2LS40NDQuMDg4LS4xMzItLjA0OS0uMjUtLjE1OC0uMzQtLjQ0M2wtLjU4Ny4zMWMuMTA4LjM0LjI4My42MDEuNDg4Ljc2Ni0uOTEuNDg0LTEuNjguMDk2LTIuMTg0LS41NTRhMi42MjkgMi42MjkgMCAwMS0uNTQtMS40N2MtLjAxNS0uNDkyLjEyLS45MTkuNTEzLTEuMjQ4TDEuODU2IDB6XCJcclxuICAgICAgZmlsbD1cIiMwMDBcIlxyXG4gICAgLz5cclxuICA8L3N2Zz5cclxuKTtcclxuXHJcbmNvbnN0IFZhbGUgPSAocHJvcHMpID0+IChcclxuICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB7Li4ucHJvcHN9IHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPlxyXG4gICAgPHBhdGhcclxuICAgICAgZmlsbD1cIiMwMDBcIlxyXG4gICAgICBkPVwiTTI0NS4yNiAzNS4zOGEyNDAgMjQwIDAgMCAwLTEwNS43NDQgMjQuNzEzQTMyMCAzMjAgMCAwIDEgNDQ1LjI2IDM3OS4zOGEzMjAgMzIwIDAgMCAxLTEuNTQ3IDMwLjkwNkEyNDAgMjQwIDAgMCAwIDQ4NS4yNiAyNzUuMzhhMjQwIDI0MCAwIDAgMC0yNDAtMjQwek0xMjkuMjc3IDE0MC4wMTdjLTE0LjI2NC0uMDctMzQuNzUyIDQuMTg1LTU0LjI0NiAxMS4zNjctMTguMzggNi43NzItMzYuMDggMTUuOTY0LTQ4LjI5IDI0LjA0NWE0NTYuMjggNDU2LjI4IDAgMCAxIDMwLjc5NSAxMi42NzRjMTIuODgtNC41MyAyNi44LTcuNTU3IDQxLjI1Ni05LjgxLTguNjIgNS43My0xNy44NjcgMTAuODM2LTI1Ljg3NCAxNy4xODJhNDIxLjIwNiA0MjEuMjA2IDAgMCAxIDIxLjUzIDExLjY1OGMxMS42OC02Ljg5IDI0LjY1LTEyLjUzIDM4LjI4NC0xNy41MjYtOC40NjggOC40MzItMTcuOTMgMTYuMi0yNC45NzYgMjUuNTggMjMuNjY0IDE0Ljg4OCA0Ny4yODMgMzIuOTE3IDcxLjkyNCA1NS4xOTYtMTkuODUzIDI0LjExNC0zNC45NyA0OS43OS02Mi42MyA4My4zNDItMTIuMjE2IDE0LjgxOC0zNS4xOTIgMjIuOTItNTYuODY0IDMxLjgwMi0xMC44MzYgNC40NDItMjEuMzA0IDguNzYtMjkuNDE4IDEyLjk2NS0uNDIyLjIxOC0uNzUuNDQtMS4xNTcuNjU4IDIuOTIzLjU4NSA1LjE2Mi44ODYgOC4zNzYgMS42NTQgMTUuNDYgMy42OSAzMy4yNjMgOC43NSA0NC41NCAyMC4wMyAxMS4yOCAxMS4yNzggMTYuMzM4IDI5LjA4IDIwLjAzIDQ0LjUzOC43NjQgMy4yMDUgMS4wNjUgNS40MzcgMS42NDcgOC4zNTQuMjE0LS4zOTcuNDI4LS43MTYuNjQtMS4xMjUgNC4yMS04LjEyIDguNTQtMTguNTk3IDEyLjk5LTI5LjQ0IDguOTA0LTIxLjY5IDE3LjAxLTQ0LjY2MyAzMS44MDQtNTYuODUgMzMuNjItMjcuNjk3IDU5LjI1LTQyLjc5IDgzLjM0LTYyLjYyNyAyMi4yNzcgMjQuNjQgNDAuMzA2IDQ4LjI1OCA1NS4xOTMgNzEuOTIgOS4zOC03LjA0MyAxNy4xNS0xNi41MDcgMjUuNTgtMjQuOTc1LTQuOTk3IDEzLjYzNS0xMC42MzYgMjYuNjA2LTE3LjUyNSAzOC4yODNhNDIxLjE1NiA0MjEuMTU2IDAgMCAxIDExLjY1OCAyMS41MzRjNi4zNDYtOC4wMDYgMTEuNDUyLTE3LjI1MiAxNy4xOC0yNS44NzUtMi4yNSAxNC40NTQtNS4yNzcgMjguMzc0LTkuODA3IDQxLjI1YTQ1Ni4yNSA0NTYuMjUgMCAwIDEgMTIuNjc2IDMwLjhjOC4wOC0xMi4yMSAxNy4yNy0yOS45MSAyNC4wNDMtNDguMjkzIDkuNTc1LTI1Ljk5IDEzLjk0NS01My43NSA5LjgwNi02Ni4xNjgtNC4zMjctMTIuOTg3LTIyLjk2Ni0zMi45MS00Ni40MjUtNTAuODUtMTMuMjY1LTEwLjE0NS0yNy45Ny0xOS45Mi00Mi4yNC0yOC40OTcgMjIuOTctMjcuNjgyIDQ3LjQ2LTYxLjY3MyA0Ny40Ni02MS42NzNsLjE1LS4yMS4xNjItLjIwMmE1NC41NzcgNTQuNTc3IDAgMCAwIDIuOTc0LTQuMDZjMTEuMzkyLTMuNiAxNS43OTUgMi4wNTggMjYuMjg2IDEzLjM4Mi0uMjIyLTI0LjA0LTEwLjI4Ny0zNy42Mi0yMy45My00NS4xNjZhMjYuMjEgMjYuMjEgMCAwIDAtMy40NjItNC4yNzhjLTQuMjg1LTQuMjg1LTEwLjA5Ny03LjIyMi0xNi45NDUtNy4zODYtNi44NS0uMTY0LTE0LjczOCAyLjQ0NC0yMy4xOCA5LjI1MmwtLjIuMTYyLS4yMS4xNXMtMzMuOTkzIDI0LjQ5Mi02MS42NzUgNDcuNDZjLTguNTc3LTE0LjI2OC0xOC4zNS0yOC45NzMtMjguNDk0LTQyLjI0LTE3LjkzOC0yMy40NTgtMzcuODY1LTQyLjA5OC01MC44NS00Ni40MjctMy4xMDUtMS4wMzUtNy4xNjgtMS41MzgtMTEuOTIzLTEuNTZ6XCJcclxuICAgIC8+XHJcbiAgPC9zdmc+XHJcbik7XHJcblxyXG5jb25zdCBXYWxsID0gKHByb3BzKSA9PiAoXHJcbiAgPHN2ZyBmaWxsPVwibm9uZVwiIHsuLi5wcm9wc30gdmlld0JveD1cIjAgMCAxNiAxNlwiPlxyXG4gICAgPHBhdGhcclxuICAgICAgZD1cIk0xNS41NzMuNjRjLjM0LjU0LTEuMTQgMS4yMi0xLjI2IDEuMjYuMTItLjA0IDEuNi0uNTQgMS42Ni0uNDIuMjIuNTItLjk0LjktMS4zOCAxLjAzOS4zNi0uMSAxLjItLjMgMS4yMi0uMTguMTQuNTYtMS4wMi44NC0xLjE0Ljg2LjA2IDAgLjQ2LS4wMi40OC4xMi4wNC40Mi0uNi42OC0uNi42OHMuMTYuMDguMTIuMmMtLjA0LjEyLS40OC43MTktLjQ4LjcxOXMuMDguMDQuMDIuMThjLS4wNi4xNC0uNDYuNTgtLjQ2LjU4bC0uMzguNjZjLS4wOC4xNC0uOTE5IDEuMDU5LTEuMDk5IDEuMzU5LS4xOC4zLTEuMTQgMS45MzktMS4wOCAyLjEzOC4wOC4xOC42Mi42Ljg0LjgyLjIyLjIyIDEuNDYuOTIgMS43MiAxLjE2LjQ2LjQ2LS4yNiAxLjE5OS0uNSAxLjQzOS0uMjYuMjQtMSAuOTQtMS40Ni40OC0uMjQtLjI0LS45MzktMS41LTEuMTU5LTEuNzItLjIyLS4yMi0uNjQtLjc2LS44Mi0uODQtLjE4LS4wOC0xLjgzOS45LTIuMTM4IDEuMDgtLjMuMTgtMS4yMiAxLjAyLTEuMzYgMS4xLS4xNC4wOC0uNjYuNC0uNjYuNHMtLjQ0LjQyLS41OC40NmMtLjE0LjA2LS4xOC0uMDItLjE4LS4wMnMtLjU5OS40NC0uNzE5LjQ4Yy0uMTIuMDQtLjItLjEyLS4yLS4xMnMtLjI2LjYzOS0uNjguNTk5Yy0uMTQtLjAyLS4xMi0uNDItLjEyLS40OC0uMDIuMS0uMyAxLjI2LS44NTkgMS4xNC0uMS0uMDIuMDgtLjg2LjE4LTEuMjItLjEyLjQ0LS41IDEuNi0xLjA0IDEuMzgtLjEyLS4wNC4zOC0xLjU0LjQyLTEuNjYtLjA2LjEyLS43NCAxLjYyLTEuMjYgMS4yNi0uMDk5LS4wNi41LTEuMjIuNjItMS40Ni0uMTQuMjQtLjc3OSAxLjMtMS4xNzkuOS0uMTItLjEyLjg4LTEuNjQuODgtMS42NHMtLjg4Ljc0LS45NC41MmMtLjAyLS4xIDEuMjYtMS43OTkgMS4yNi0xLjc5OXMtLjYyLjQyLS42NC4zMmMtLjAyLS4xLjUtLjcuNzYtLjk2czEuODM5LTEuNjc4IDIuMTU5LTEuOTU4Yy4zMi0uMjguNDgtLjQyIDEuMDM5LS44NC41Ni0uNDIgMS41OC0uOTQgMS41OC0uOTRzLS4xMi0uNjItLjIyLS43Ni0uNDItLjM1OS0uNTgtLjYzOWMtLjE2LS4yOC0uMTYtLjc2LS4xNi0uNzZzLS41NC0uNzItLjQ0LS44MmMuMS0uMDk5LjgyLjQ0LjgyLjQ0cy40OCAwIC43Ni4xNmMuMjc5LjE2LjQ5OS40Ni42MzkuNTguMTQuMS43Ni4yMi43Ni4yMnMuNTItMSAuOTM5LTEuNTc5Yy40Mi0uNTYuNTYtLjcyLjg0LTEuMDQuMjgtLjMyIDEuNjk5LTEuODk5IDEuOTU5LTIuMTU4LjI2LS4yNi44NC0uNzguOTYtLjc2LjEuMDItLjMyLjY0LS4zMi42NFMxMy43OTMtLjAyIDEzLjg5MiAwYy4yMi4wNi0uNTIuOTQtLjUyLjk0czEuNTQtLjk4IDEuNjQtLjg4Yy40LjQtLjY2IDEuMDQtLjkgMS4xOC4yNi0uMTIgMS40LS43MiAxLjQ2LS42elwiXHJcbiAgICAgIGZpbGw9XCIjMDAwXCJcclxuICAgIC8+XHJcbiAgPC9zdmc+XHJcbik7XHJcblxyXG5jb25zdCBXZXN0ZXJsYW5kcyA9IChwcm9wcykgPT4gKFxyXG4gIDxzdmcgZmlsbD1cIm5vbmVcIiB7Li4ucHJvcHN9IHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cclxuICAgIDxwYXRoXHJcbiAgICAgIGQ9XCJNMy41NjIuMDAzYy0uMzU1LjAxNi0uNzMyLjExLTEuMTA1LjE4N2wyLjE0NSAyLjI5NC0uNzQzLjAwNmMtMS4wMDguMDA3LTIuNTk4LjIxNS0zLjU1NS43OGwxLjA5IDEuODAyTDAgNS44MDl2MS45NzhsMS41OTguOTJMMCAxMC4xMDZ2MS4xMjhjLjk2OS0uMDQ0IDIuMDgxLjAyMiAzLjA2LS4zMTJsMS4wOTUtLjM3Mi0uNzUuODk0Yy0uNjQzLjc2OS0xLjAyMiAxLjkyNy0xLjc0MSAzLjA2NSAxLjA5NS0uMDgzIDIuMTc1LS4yNjcgMy4zMjMtLjkwMmwuNTUtLjMwM0w1LjIwMiAxNmMuOTA0LS40MjYgMS43ODktMS4wMSAyLjQ0NC0xLjcxNC43NzgtLjgzNyAxLjIyNS0xLjc2NSAxLjE0NS0yLjU0MWwtLjAwMy0uMDI2YTMuNDg3IDMuNDg3IDAgMDEtMS4zNDctMS44OTRjLS4yODktLjk3LS4yMDEtMi4xNzguMjI4LTMuNTM1LS45MDYtLjE0LTEuNTk3LS41MTEtMS45NjctMS4wNTJhMi4yMjIgMi4yMjIgMCAwMS0uMjY1LTEuOTkyYy4yMjItLjYyMS43NjUtMS4xMjQgMS40OS0xLjE2OC43MDYtLjA0MSAxLjUyNy4zNTEgMi40MDIgMS4yNjIuMzkuMTQ0Ljc0Ni4yOCAxLjA3LjQxNy4wODMtLjc0Ny0uMDUtMS4zMjktLjM1OC0xLjg0OEM5Ljc1MiAxLjQyIDkuMjQ0Ljk4NSA4LjYzMS41NmwuMTQ2IDEuNS0uNTY0LS4zODVDNi45NDMuODExIDUuMTEtLjA2NSAzLjU2My4wMDhWMHYuMDAzem0zLjQ0NiAyLjcyNWgtLjA0NGMtLjQ2NS4wMjgtLjc3NC4zMTktLjkyNS43MzktLjE1LjQyLS4xMTEuOTU2LjE5IDEuMzk1LjMuNDQuODYyLjgxIDEuODM3Ljg2N2wuNDMzLjAyNC0uMTUuNDEzYy0uNTA5IDEuNDE0LS41NTcgMi41ODMtLjI5NCAzLjQ2Ny4yNjMuODgzLjgyNSAxLjQ5NiAxLjYyNCAxLjgzN2guMDAxbDMuNzI4IDEuMzQ0Yy4xOTQtLjQxNS40LS44MzIuNjE3LTEuMjQ4LS4xNzEuMDc3LS4zNi4xMi0uNTYuMTItLjc3MyAwLTEuNC0uNjM5LTEuNC0xLjQyNiAwLS43ODcuNjI3LTEuNDI1IDEuNC0xLjQyNS43MSAwIDEuMjk0LjUzOCAxLjM4NiAxLjIzNC4zNjYtLjYzMS43NTEtMS4yNTggMS4xNDktMS44NzZsLTMuNTQzLTEuODMtLjE2My0uMmMtLjEzNS0uNDc1LS4zOTYtLjgxNi0uOTA2LTEuMTY1LS41MS0uMzUtMS4yNzEtLjY4NC0yLjMyNy0xLjA3TDguOTkgMy45bC0uMDUzLS4wNTdjLS43OTktLjg1Ny0xLjQ2Ni0xLjEyOC0xLjkyOS0xLjExOXYuMDAzem00LjA4NiAzLjE0M2EuNS41IDAgMDEuNTAzLjUxMmMwIC4yOS0uMjE5LjUxNC0uNTAzLjUxNGEuNTAyLjUwMiAwIDAxLS41MDQtLjUxNGMwLS4yODkuMjItLjUxMi41MDQtLjUxMnpcIlxyXG4gICAgICBmaWxsPVwiIzAwMFwiXHJcbiAgICAvPlxyXG4gIDwvc3ZnPlxyXG4pO1xyXG5cclxuY29uc3QgR3VpZGUgPSAocHJvcHMpID0+IChcclxuICA8c3ZnIGZpbGw9XCIjMDAwMDAwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTAgNTBcIiB7Li4ucHJvcHN9PlxyXG4gICAgPHBhdGggZD1cIk0gMTUgNSBDIDguODk4NDM4IDUgNC42OTUzMTMgNi45OTIxODggNC41OTM3NSA3LjA5Mzc1IEMgNC4xOTUzMTMgNy4yOTI5NjkgNCA3LjYwMTU2MyA0IDggTCA0IDExIEwgMyAxMSBDIDEuMzAwNzgxIDExIDAgMTIuMzAwNzgxIDAgMTQgTCAwIDQwIEMgMCA0MS42OTkyMTkgMS4zMDA3ODEgNDMgMyA0MyBMIDIyLjc4MTI1IDQzIEMgMjMuMzI0MjE5IDQzLjYwNTQ2OSAyNC4wOTM3NSA0NCAyNSA0NCBDIDI1LjkwNjI1IDQ0IDI2LjY3NTc4MSA0My42MDU0NjkgMjcuMjE4NzUgNDMgTCA0NyA0MyBDIDQ4LjY5OTIxOSA0MyA1MCA0MS42OTkyMTkgNTAgNDAgTCA1MCAxNCBDIDUwIDEyLjMwMDc4MSA0OC42OTkyMTkgMTEgNDcgMTEgTCA0NiAxMSBMIDQ2IDggQyA0NiA3LjYwMTU2MyA0NS44MDQ2ODggNy4yOTI5NjkgNDUuNDA2MjUgNy4wOTM3NSBDIDQ1LjMwNDY4OCA2Ljk5MjE4OCA0MS4xMDE1NjMgNSAzNSA1IEMgMjkuODk4NDM4IDUgMjYuMTk5MjE5IDYuNDA2MjUgMjUgNi45MDYyNSBDIDIzLjgwMDc4MSA2LjQwNjI1IDIwLjEwMTU2MyA1IDE1IDUgWiBNIDE1IDcgQyAxOS4zOTg0MzggNyAyMi42OTkyMTkgOC4wODU5MzggMjQgOC42ODc1IEwgMjQgMzcuNTkzNzUgQyAyMi4zMDA3ODEgMzYuOTkyMTg4IDE5LjEwMTU2MyAzNi4wOTM3NSAxNSAzNi4wOTM3NSBDIDEwLjg5ODQzOCAzNi4wOTM3NSA3LjY5OTIxOSAzNi45OTIxODggNiAzNy41OTM3NSBMIDYgOC42ODc1IEMgNy4zMDA3ODEgOC4wODU5MzggMTAuNjAxNTYzIDcgMTUgNyBaIE0gMzUgNyBDIDM5LjM5ODQzOCA3IDQyLjY5OTIxOSA4LjA4NTkzOCA0NCA4LjY4NzUgTCA0NCAzNy41OTM3NSBDIDQyLjMwMDc4MSAzNi45OTIxODggMzkuMTAxNTYzIDM2LjA5Mzc1IDM1IDM2LjA5Mzc1IEMgMzAuODk4NDM4IDM2LjA5Mzc1IDI3LjY5OTIxOSAzNi45OTIxODggMjYgMzcuNTkzNzUgTCAyNiA4LjY4NzUgQyAyNy4zMDA3ODEgOC4wODU5MzggMzAuNjAxNTYzIDcgMzUgNyBaIE0gMzUgMTIgQyAzMy44OTQ1MzEgMTIgMzMgMTIuODk0NTMxIDMzIDE0IEMgMzMgMTUuMTA1NDY5IDMzLjg5NDUzMSAxNiAzNSAxNiBDIDM2LjEwNTQ2OSAxNiAzNyAxNS4xMDU0NjkgMzcgMTQgQyAzNyAxMi44OTQ1MzEgMzYuMTA1NDY5IDEyIDM1IDEyIFogTSAzMS44MTI1IDE5IEMgMzEuMjYxNzE5IDE5LjA1MDc4MSAzMC44NTU0NjkgMTkuNTQyOTY5IDMwLjkwNjI1IDIwLjA5Mzc1IEMgMzAuOTU3MDMxIDIwLjY0NDUzMSAzMS40NDkyMTkgMjEuMDUwNzgxIDMyIDIxIEwgMzMgMjEgTCAzMyAzMSBMIDM3IDMxIEwgMzcgMjAgQyAzNyAxOS4zOTg0MzggMzYuNjAxNTYzIDE5IDM2IDE5IEwgMzIgMTkgQyAzMS45Njg3NSAxOSAzMS45Mzc1IDE5IDMxLjkwNjI1IDE5IEMgMzEuODc1IDE5IDMxLjg0Mzc1IDE5IDMxLjgxMjUgMTkgWlwiIC8+XHJcbiAgPC9zdmc+XHJcbik7XHJcbiIsImltcG9ydCB7IGZpbmRSZXN1bHRzU3RhdGUgfSBmcm9tICdyZWFjdC1pbnN0YW50c2VhcmNoLWRvbS9zZXJ2ZXInO1xuaW1wb3J0IGFsZ29saWFzZWFyY2ggZnJvbSAnYWxnb2xpYXNlYXJjaC9saXRlJztcblxuY29uc3QgaW5kZXhOYW1lID0gJ1dpa2knO1xuXG4vLyBLZXlzIGFyZSBzdXBwbGllZCBmcm9tIEFsZ29saW8ncyBpbnN0YW50IHNlYXJjaCBleGFtcGxlXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYWxnb2xpYS9yZWFjdC1pbnN0YW50c2VhcmNoXG5jb25zdCBzZWFyY2hDbGllbnQgPSBhbGdvbGlhc2VhcmNoKFxuICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BTEdPTElBX0FQUF9JRCxcbiAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQUxHT0xJQV9TRUFSQ0hfS0VZXG4pO1xuXG5leHBvcnQgeyBmaW5kUmVzdWx0c1N0YXRlLCBpbmRleE5hbWUsIHNlYXJjaENsaWVudCB9O1xuIiwiaW1wb3J0IHsgUmVkYWN0b3IgfSBmcm9tICcuL3JlZGFjdG9yJ1xuXG5leHBvcnQgeyBSZWRhY3RvciB9XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XHJcblxyXG5leHBvcnQgY29uc3QgUmVkYWN0b3IgPSBzdHlsZWQuZGl2YFxyXG4gIC8qIEdMT0JBTCBTVFlMRVMgKi9cclxuXHJcbiAgaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIGZpZ2NhcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuXHJcbiAgZmlndXJlIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIHVsIHtcclxuICAgIG1heC13aWR0aDogNzYwcHg7XHJcbiAgICBtYXJnaW46IDMycHggYXV0bztcclxuICB9XHJcblxyXG4gIHVsIGxpIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcblxyXG4gIHVsIC5pbWFnZS1saXN0IHtcclxuICAgIGxpc3Qtc3R5bGUtaW1hZ2U6IHVybCgnc3FwdXJwbGUuZ2lmJyk7XHJcbiAgfVxyXG5cclxuICBsaSArIGxpIHtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgfVxyXG5cclxuICBvbCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNnB4O1xyXG4gIH1cclxuXHJcbiAgb2wgbGkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMTRweCAwIDE0cHggMzZweDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vY2RuLndlc3Rlcm9zY3JhZnQuY29tL3dlYi9hc3NldHMvaW1hZ2VzL2NoZWNrbWFyay5zdmcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMjBweDtcclxuICB9XHJcblxyXG4gIGgxLFxyXG4gIGgyLFxyXG4gIGgzLFxyXG4gIGg0LFxyXG4gIGg1LFxyXG4gIGg2LFxyXG4gIHAsXHJcbiAgYSxcclxuICBsaSB7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDA7XHJcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAwO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gIH1cclxuXHJcbiAgaDEsXHJcbiAgaDIsXHJcbiAgaDMsXHJcbiAgaDQsXHJcbiAgaDUsXHJcbiAgaDYge1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZW4nLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbiAgaDEsXHJcbiAgaDIsXHJcbiAgaDMge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICBwLFxyXG4gIGEge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbiAgLmNhcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAvKiBNT0JJTEUgU1RZTEVTICovXHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuXHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gIH1cclxuXHJcbiAgaDQge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcblxyXG4gIGg1IHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG5cclxuICBoNiB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICM5ZTFlMjI7XHJcbiAgfVxyXG5cclxuICBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjYjMyMjI3O1xyXG4gIH1cclxuXHJcbiAgLyogVEFCTEVUIFNUWUxFUyAqL1xyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MTJweCkge1xyXG4gICAgaDEge1xyXG4gICAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaDIge1xyXG4gICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaDMge1xyXG4gICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICB9XHJcblxyXG4gICAgaDQge1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaDUge1xyXG4gICAgfVxyXG5cclxuICAgIGg2IHtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgIH1cclxuXHJcbiAgICBhIHtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qIExBUFRPUCBTVFlMRVMgKi9cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIGgxIHtcclxuICAgICAgZm9udC1zaXplOiA2NHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGgyIHtcclxuICAgICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGgzIHtcclxuICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIGg0IHtcclxuICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIGg1IHtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGg2IHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuXHJcbiAgICBvbCB7XHJcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyo9PT09PT09PT09PT09PT09PSBTUEFDSU5HID09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuICAvKmVzbGludC1kaXNhYmxlICovXHJcblxyXG4gIGgxICsgaDEge1xyXG4gIH1cclxuICBoMSArIGgyIHtcclxuICB9XHJcbiAgaDEgKyBoMyB7XHJcbiAgfVxyXG4gIGgxICsgaDQge1xyXG4gIH1cclxuICBoMSArIGg1IHtcclxuICB9XHJcbiAgaDEgKyBoNiB7XHJcbiAgfVxyXG4gIGgxICsgcCB7XHJcbiAgfVxyXG5cclxuICBoMiArIGgxIHtcclxuICB9XHJcbiAgaDIgKyBoMiB7XHJcbiAgfVxyXG4gIGgyICsgaDMge1xyXG4gIH1cclxuICBoMiArIGg0IHtcclxuICB9XHJcbiAgaDIgKyBoNSB7XHJcbiAgfVxyXG4gIGgyICsgaDYge1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICB9XHJcbiAgaDIgKyBwIHtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgfVxyXG5cclxuICBoMyArIGgxIHtcclxuICB9XHJcbiAgaDMgKyBoMiB7XHJcbiAgfVxyXG4gIGgzICsgaDMge1xyXG4gIH1cclxuICBoMyArIGg0IHtcclxuICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgfVxyXG4gIGgzICsgaDUge1xyXG4gIH1cclxuICBoMyArIGg2IHtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgfVxyXG4gIGgzICsgcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgaDQgKyBoMSB7XHJcbiAgfVxyXG4gIGg0ICsgaDIge1xyXG4gIH1cclxuICBoNCArIGgzIHtcclxuICB9XHJcbiAgaDQgKyBoNCB7XHJcbiAgfVxyXG4gIGg0ICsgaDUge1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICB9XHJcbiAgaDQgKyBoNiB7XHJcbiAgfVxyXG4gIGg0ICsgcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgaDUgKyBoMSB7XHJcbiAgfVxyXG4gIGg1ICsgaDIge1xyXG4gIH1cclxuICBoNSArIGgzIHtcclxuICB9XHJcbiAgaDUgKyBoNCB7XHJcbiAgfVxyXG4gIGg1ICsgaDUge1xyXG4gIH1cclxuICBoNSArIGg2IHtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgfVxyXG4gIGg1ICsgcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyOHB4O1xyXG4gIH1cclxuXHJcbiAgaDYgKyBoMSB7XHJcbiAgfVxyXG4gIGg2ICsgaDIge1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICB9XHJcbiAgaDYgKyBoMyB7XHJcbiAgfVxyXG4gIGg2ICsgaDQge1xyXG4gIH1cclxuICBoNiArIGg1IHtcclxuICB9XHJcbiAgaDYgKyBoNiB7XHJcbiAgfVxyXG4gIGg2ICsgcCB7XHJcbiAgfVxyXG5cclxuICBwICsgaDEge1xyXG4gICAgbWFyZ2luLXRvcDogMzJweDtcclxuICB9XHJcbiAgcCArIGgyIHtcclxuICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbiAgfVxyXG4gIHAgKyBoMyB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xyXG4gIH1cclxuICBwICsgaDQge1xyXG4gICAgbWFyZ2luLXRvcDogMzJweDtcclxuICB9XHJcbiAgcCArIGg1IHtcclxuICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgfVxyXG4gIHAgKyBoNiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gIH1cclxuICBwICsgcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICAvKmVzbGludC1lbmFibGUgKi9cclxuXHJcbiAgZmlndXJlIHtcclxuICAgIG1hcmdpbi10b3A6IDE2cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHggIWltcG9ydGFudDtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3gsIEZsZXgsIFRleHQgfSBmcm9tICdyZWJhc3MnO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAcmViYXNzL2Zvcm1zJztcbmltcG9ydCBhbGdvbGlhQ2xpZW50IGZyb20gJ2FsZ29saWFzZWFyY2gvbGl0ZSc7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoL2RlYm91bmNlJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBCaVNlYXJjaEFsdCB9IGZyb20gJ3JlYWN0LWljb25zL2JpJztcblxuY29uc3QgYWxnb2xpYSA9IGFsZ29saWFDbGllbnQoXG4gIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FMR09MSUFfQVBQX0lELFxuICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BTEdPTElBX1NFQVJDSF9LRVlcbikuaW5pdEluZGV4KCdXaWtpJyk7XG5cbmNvbnN0IHNlYXJjaCA9IChxdWVyeSwgcGFyYW1zID0ge30pID0+XG4gIGFsZ29saWEuc2VhcmNoKHF1ZXJ5LCB7XG4gICAgYXR0cmlidXRlc1RvSGlnaGxpZ2h0OiBudWxsLFxuICAgIGhpdHNQZXJQYWdlOiA2MCxcbiAgICAuLi5wYXJhbXNcbiAgfSk7XG5cbmNvbnN0IERyb3Bkb3duTGluayA9IFJlYWN0LmZvcndhcmRSZWYoKHsgY2hpbGRyZW4sIGhyZWYgfSwgcmVmKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgYXM9XCJhXCJcbiAgICAgIGhyZWY9e2hyZWZ9XG4gICAgICByZWY9e3JlZn1cbiAgICAgIHB4PXs0fVxuICAgICAgcHk9ezJ9XG4gICAgICBzeD17e1xuICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICBjb2xvcjogJ3JlZC5tZWRpdW0nLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMTIwLCAxMjAsIDEyMCwgMC4xKSdcbiAgICAgICAgfVxuICAgICAgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Cb3g+XG4gICk7XG59KTtcblxuY29uc3QgUmVzdWx0cyA9ICh7IHJlc3VsdHMgfSkgPT5cbiAgcmVzdWx0cy5tYXAoKHJlc3VsdCkgPT4gKFxuICAgIDxMaW5rIGhyZWY9e3Jlc3VsdC51cmx9IHBhc3NIcmVmIGtleT17cmVzdWx0Lm9iamVjdElEfT5cbiAgICAgIDxEcm9wZG93bkxpbms+XG4gICAgICAgIDxUZXh0IHB5PXsyfT57cmVzdWx0LnRpdGxlfTwvVGV4dD5cbiAgICAgIDwvRHJvcGRvd25MaW5rPlxuICAgIDwvTGluaz5cbiAgKSk7XG5cbmV4cG9ydCBjb25zdCBTZWFyY2ggPSAoKSA9PiB7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCB1cGRhdGVSZXN1bHRzID0gdXNlQ2FsbGJhY2soXG4gICAgZGVib3VuY2UoKGN1cnJlbnRRdWVyeSkgPT4ge1xuICAgICAgc2VhcmNoKGN1cnJlbnRRdWVyeSkudGhlbigoeyBoaXRzIH0pID0+IHtcbiAgICAgICAgc2V0UmVzdWx0cyhoaXRzKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9LCA4NTApLFxuICAgIFtdXG4gICk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgKGUpID0+IHtcbiAgICAgIHNldFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKTtcblxuICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgdXBkYXRlUmVzdWx0cyhlLnRhcmdldC52YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFt1cGRhdGVSZXN1bHRzXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBzeD17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fSBtYj1cIjQ0cHhcIj5cbiAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIlNlYXJjaCBXaWtpXCIgdHlwZT1cInNlYXJjaFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XG4gICAgICB7cmVzdWx0cy5sZW5ndGggPiAwID8gKFxuICAgICAgICA8RmxleFxuICAgICAgICAgIHdpZHRoPXsxfVxuICAgICAgICAgIGJnPVwid2hpdGVcIlxuICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIGJveFNoYWRvdzogYDAgMy45cHggMy41cHggcmdiYSgwLCAwLCAwLCAwLjA0NiksXG4gICAgICAgICAgMCA5LjRweCA4LjRweCByZ2JhKDAsIDAsIDAsIDAuMDY1KSxcbiAgICAgICAgICAwIDE3LjdweCAxNS45cHggcmdiYSgwLCAwLCAwLCAwLjA3MyksXG4gICAgICAgICAgMCAzMS41cHggMjguNHB4IHJnYmEoMCwgMCwgMCwgMC4wNzYpXG4gICAgICAgIGBcbiAgICAgICAgICB9fT5cbiAgICAgICAgICA8UmVzdWx0cyByZXN1bHRzPXtyZXN1bHRzfSAvPlxuICAgICAgICA8L0ZsZXg+XG4gICAgICApIDogKFxuICAgICAgICBxdWVyeS5sZW5ndGggPiAyICYmICFsb2FkaW5nICYmIDxkaXY+Tm8gcmVzdWx0czwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxCaVNlYXJjaEFsdCBjb2xvcj1cIiM2NjZcIiBzaXplPXsyNH0gc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHJpZ2h0OiAxMiwgdG9wOiAxNiB9fSAvPlxuICAgIDwvQm94PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE5leHRTZW8gfSBmcm9tICduZXh0LXNlbyc7XHJcblxyXG5jb25zdCBTRU8gPSAoeyB0aXRsZSwgZGVzY3JpcHRpb24sIGltYWdlLCBhcnRpY2xlIH0pID0+IHtcclxuICBjb25zdCBzZW8gPSB7XHJcbiAgICB0aXRsZTogdGl0bGUsXHJcbiAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXHJcbiAgICBpbWFnZTogYGh0dHBzOi8vd3d3Lndlc3Rlcm9zY3JhZnQuY29tLyR7aW1hZ2V9YFxyXG4gICAgLy8gdXJsOiBgJHtzaXRlVXJsfSR7cGF0aG5hbWV9YFxyXG4gIH07XHJcblxyXG4gIHJldHVybiA8TmV4dFNlbyB0aXRsZT17YCR7c2VvLnRpdGxlfSB8IFdlc3Rlcm9zQ3JhZnRgfSBkZXNjcmlwdGlvbj17c2VvLmRlc2NyaXB0aW9ufSAvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNFTztcclxuIiwiaW1wb3J0IHsgV2lraUNvbnRlbnQgfSBmcm9tICcuL3dpa2lDb250ZW50J1xyXG5cclxuZXhwb3J0IHsgV2lraUNvbnRlbnQgfVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3gsIEhlYWRpbmcgfSBmcm9tICdyZWJhc3MnO1xyXG5pbXBvcnQgeyBjYW1lbENhc2VGb3JtYXR0ZXIgfSBmcm9tICcuLi8uLi8uLi91dGlsaXR5L2hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFdpa2lDb250ZW50ID0gKHsgY2hpbGRyZW4sIHRpdGxlIH0pID0+IChcclxuICA8Qm94IGFzPVwiYXJ0aWNsZVwiIG1sPXtbMCwgbnVsbCwgMTNdfSBjbGFzc05hbWU9XCJ3aWtpLWNvbnRlbnRcIiBtYXhXaWR0aD17Nzg2fSB3aWR0aD17MX0+XHJcbiAgICA8SGVhZGluZyB2YXJpYW50PVwiaGVhZGluZzJcIiB0ZXh0QWxpZ249XCJsZWZ0XCIgcGI9ezh9PlxyXG4gICAgICB7Y2FtZWxDYXNlRm9ybWF0dGVyKHRpdGxlKX1cclxuICAgIDwvSGVhZGluZz5cclxuICAgIHtjaGlsZHJlbn1cclxuICA8L0JveD5cclxuKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCwgVGV4dCwgRmxleCB9IGZyb20gJ3JlYmFzcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IElvTWRBcnJvd0Ryb3Bkb3duIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xyXG5pbXBvcnQgeyBTZWFyY2ggfSBmcm9tICcuLi9zZWFyY2gnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHFzIGZyb20gJ3FzJztcclxuaW1wb3J0IHsgZmluZFJlc3VsdHNTdGF0ZSwgaW5kZXhOYW1lLCBzZWFyY2hDbGllbnQgfSBmcm9tICcuLi8uLi9hdG9tcy9pbnN0YW50c2VhcmNoJztcclxuXHJcbmNvbnN0IFdpa2lOYXZHcm91cCA9ICh7IG5hdkl0ZW0gfSkgPT4ge1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IGJ1aWxkTGluayA9IChjaGlsZCkgPT4ge1xyXG4gICAgc3dpdGNoIChjaGlsZC5wYXJlbnQudGl0bGUpIHtcclxuICAgICAgY2FzZSAnTWlzY2VsbGFuZW91cyc6XHJcbiAgICAgICAgcmV0dXJuIGAvd2lraS9taXNjZWxsYW5lb3VzLyR7Y2hpbGQuZWxlbWVudC5zbHVnfWA7XHJcbiAgICAgIGNhc2UgJ0d1aWRlcyc6XHJcbiAgICAgICAgcmV0dXJuIGAvd2lraS9ndWlkZXMvJHtjaGlsZC5lbGVtZW50LnNsdWd9YDtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gYC93aWtpLyR7Y2hpbGQuZWxlbWVudC5zbHVnfWA7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICBjbGFzc05hbWU9XCJ3aWtpLW5hdi1ncm91cFwiXHJcbiAgICAgICAga2V5PXtuYXZJdGVtLnRpdGxlfVxyXG4gICAgICAgIHN4PXt7IGJveFNoYWRvdzogWydub25lJywgbnVsbCwgJ2luc2V0IC0xcHggMCAwIHJnYmEoNDgsNDgsNDksMC4yKSddIH19PlxyXG4gICAgICAgIDxGbGV4XHJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwicm93XCJcclxuICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgbWI9ezJ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJncm91cC10aXRsZVwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldE9wZW4oIW9wZW4pO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICB9fT5cclxuICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJoZWFkaW5nNlwiIGZvbnRTaXplPVwiMThweFwiIGZvbnRXZWlnaHQ9XCJib2xkXCI+XHJcbiAgICAgICAgICAgIHtuYXZJdGVtLnRpdGxlfVxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPElvTWRBcnJvd0Ryb3Bkb3duIHNpemU9XCIyNHB4XCIgc3R5bGU9e3sgdHJhbnNmb3JtOiAhb3BlbiA/ICdzY2FsZVkoLTEpJyA6ICcnIH19IC8+XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgIHtvcGVuICYmIChcclxuICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwLWl0ZW1zXCJcclxuICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXHJcbiAgICAgICAgICAgIGFzPVwib2xcIlxyXG4gICAgICAgICAgICBwbD17WzAsIG51bGwsIG51bGwsIDVdfVxyXG4gICAgICAgICAgICBwYj17M31cclxuICAgICAgICAgICAgcHI9ezV9XHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgbGlzdFN0eWxlVHlwZTogJ25vbmUnXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICB7bmF2SXRlbS5jaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiAoXHJcbiAgICAgICAgICAgICAgPExpbmsga2V5PXtjaGlsZC50aXRsZX0gaHJlZj17YnVpbGRMaW5rKGNoaWxkKX0gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICA8Qm94IGFzPVwibGlcIiBzeD17eyBjdXJzb3I6ICdwb2ludGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICBweT17MX1cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImdyYXkuMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAncmVkLm1lZGl1bSdcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGQudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFdpa2lOYXYgPSAoeyBuYXZEYXRhIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZsZXhcclxuICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXHJcbiAgICAgIGFzPVwibmF2XCJcclxuICAgICAgY2xhc3NOYW1lPVwid2lraS1uYXZcIlxyXG4gICAgICBtYXhXaWR0aD17WycxMDAlJywgbnVsbCwgMzIwXX1cclxuICAgICAgc3g9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsZXhTaHJpbms6IDAsIGZsZXhHcm93OiAxIH19PlxyXG4gICAgICA8U2VhcmNoIC8+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICBjbGFzc05hbWU9XCJ3aWtpLW5hdi1jb250YWluZXJcIlxyXG4gICAgICAgIHdpZHRoPXsxfVxyXG4gICAgICAgIGRpc3BsYXk9e1snbm9uZScsIG51bGwsICdibG9jayddfVxyXG4gICAgICAgIG1heFdpZHRoPXsyNDZ9PlxyXG4gICAgICAgIHtuYXZEYXRhLm1hcCgobmF2SXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgPFdpa2lOYXZHcm91cCBuYXZJdGVtPXtuYXZJdGVtfSBrZXk9e2l9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9GbGV4PlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94LCBGbGV4LCBUZXh0IH0gZnJvbSAncmViYXNzJztcclxuaW1wb3J0IHsgUmVkYWN0b3IgfSBmcm9tICcuLi8uLi9hdG9tcy9yZWRhY3Rvcic7XHJcbmltcG9ydCB7IElvTWRBcnJvd0Ryb3Bkb3duIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xyXG5pbXBvcnQgeyBjb25maWdQcm9wcyB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdHkvaGVscGVycyc7XHJcblxyXG5jb25zdCBBY2NvcmRpb25JdGVtID0gKHsgZGF0YSwgZGF0YUxlbmd0aCwgaW5kZXggfSkgPT4ge1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3hcclxuICAgICAgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWl0ZW1cIlxyXG4gICAgICBzeD17e1xyXG4gICAgICAgIGJvcmRlclRvcDogJzJweCBzb2xpZCcsXHJcbiAgICAgICAgYm9yZGVyQ29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgYm9yZGVyQm90dG9tOiBkYXRhTGVuZ3RoIC0gMSA9PT0gaW5kZXggPyAnMnB4IHNvbGlkJyA6IG51bGwsXHJcbiAgICAgICAgYm9yZGVyQm90dG9tQ29sb3I6ICdibGFjaycsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxGbGV4XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgc2V0T3Blbighb3Blbik7XHJcbiAgICAgICAgfX1cclxuICAgICAgICBweT17N31cclxuICAgICAgICBzeD17eyBjdXJzb3I6ICdwb2ludGVyJyB9fVxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb249XCJyb3dcIlxyXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXHJcbiAgICAgID5cclxuICAgICAgICA8VGV4dCB2YXJpYW50PVwiaGVhZGluZzZcIiBhcz1cImg2XCIgZm9udFdlaWdodD1cIjUwMFwiIHN4PXt7IHVzZXJTZWxlY3Q6ICdub25lJyB9fT5cclxuICAgICAgICAgIHtkYXRhLmhlYWRpbmd9XHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDxJb01kQXJyb3dEcm9wZG93biBzaXplPVwiMzJweFwiIHN0eWxlPXt7IHRyYW5zZm9ybTogb3BlbiA/ICdzY2FsZVkoLTEpJyA6ICcnIH19IC8+XHJcbiAgICAgIDwvRmxleD5cclxuICAgICAge29wZW4gJiYgKFxyXG4gICAgICAgIDxCb3ggbWI9ezZ9IGNsYXNzTmFtZT1cImFjY29yZGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICA8UmVkYWN0b3IgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkYXRhLmNvcHkgfX0gLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgKX1cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQWNjb3JkaW9uID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggY2xhc3NOYW1lPVwiYWNjb3JkaW9uXCIgey4uLihkYXRhLnNwYWNpbmdzICYmIGRhdGEuc3BhY2luZ3MubGVuZ3RoICYmIGNvbmZpZ1Byb3BzKGRhdGEuc3BhY2luZ3NbMF0pKX0+XHJcbiAgICAgIHtkYXRhLmhlYWRpbmcgJiYgKFxyXG4gICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJoZWFkaW5nM1wiIGFzPVwiaDNcIj5cclxuICAgICAgICAgIHtkYXRhLmhlYWRpbmd9XHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPEZsZXggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIG10PXs3fT5cclxuICAgICAgICB7ZGF0YS5hY2NvcmRpb25Db250ZW50Lm1hcCgoaXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgPEFjY29yZGlvbkl0ZW0gZGF0YT17aXRlbX0gZGF0YUxlbmd0aD17ZGF0YS5hY2NvcmRpb25Db250ZW50Lmxlbmd0aH0ga2V5PXtpfSBpbmRleD17aX0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9GbGV4PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgQWNjb3JkaW9uIH0gZnJvbSAnLi9hY2NvcmRpb24nXHJcblxyXG5leHBvcnQgeyBBY2NvcmRpb24gfVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3gsIEZsZXgsIEhlYWRpbmcgfSBmcm9tICdyZWJhc3MnO1xyXG5pbXBvcnQgeyBjb25maWdQcm9wcyB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdHkvaGVscGVycyc7XHJcbmltcG9ydCB7IEVudHJ5Q2FyZCB9IGZyb20gJy4uLy4uL2F0b21zL2VudHJ5Q2FyZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5leHBvcnQgY29uc3QgRW50cnlHcmlkID0gKHsgZGF0YSB9KSA9PiAoXHJcbiAgPEJveFxyXG4gICAgY2xhc3NOYW1lPVwiZW50cnktZ3JpZFwiXHJcbiAgICB7Li4uKGRhdGEuc3BhY2luZ3MgJiYgZGF0YS5zcGFjaW5ncy5sZW5ndGggJiYgY29uZmlnUHJvcHMoZGF0YS5zcGFjaW5nc1swXSkpfT5cclxuICAgIDxIZWFkaW5nIHZhcmlhbnQ9XCJoZWFkaW5nM1wiPntkYXRhLmhlYWRpbmd9PC9IZWFkaW5nPlxyXG4gICAgPEZsZXhcclxuICAgICAgY2xhc3NOYW1lPVwiZW50cnktY2FyZC1saXN0XCJcclxuICAgICAgZmxleERpcmVjdGlvbj17Wydjb2x1bW4nLCBudWxsLCAncm93J119XHJcbiAgICAgIGZsZXhXcmFwPVwid3JhcFwiXHJcbiAgICAgIG10PXtbMCwgbnVsbCwgNV19PlxyXG4gICAgICB7ZGF0YS5lbnRyeUxpc3QgJiZcclxuICAgICAgICBkYXRhLmVudHJ5TGlzdC5tYXAoKGVudHJ5KSA9PiAoXHJcbiAgICAgICAgICA8TGluayBocmVmPXtgL3dpa2kvJHtlbnRyeS5wYXJlbnQuc2x1Z30vJHtlbnRyeS5zbHVnfWB9IGtleT17ZW50cnkuc2x1Z30gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgIDxFbnRyeUNhcmQgZGF0YT17ZW50cnl9IGtleT17ZW50cnkuc2x1Z30gLz5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApKX1cclxuICAgIDwvRmxleD5cclxuICA8L0JveD5cclxuKTtcclxuIiwiaW1wb3J0IHsgRW50cnlHcmlkIH0gZnJvbSAnLi9lbnRyeUdyaWQnXHJcblxyXG5leHBvcnQgeyBFbnRyeUdyaWQgfVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZsZXgsIEJveCwgVGV4dCB9IGZyb20gJ3JlYmFzcyc7XHJcbmltcG9ydCB7IElvTWRBcnJvd0Ryb3Bkb3duIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xyXG5pbXBvcnQgeyBjb25maWdQcm9wcyB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdHkvaGVscGVycyc7XHJcbmltcG9ydCB7IENvcHlUb0NsaXBib2FyZCB9IGZyb20gJ3JlYWN0LWNvcHktdG8tY2xpcGJvYXJkJztcclxuaW1wb3J0IHsgSW9Jb3NDb3B5IH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XHJcbmltcG9ydCBfcmVwbGFjZSBmcm9tICdsb2Rhc2gvcmVwbGFjZSc7XHJcblxyXG5jb25zdCBTVkdXcmFwcGVyID0gc3R5bGVkKEJveClgXHJcbiAgJjpob3ZlciB7XHJcbiAgICBzdmcge1xyXG4gICAgICBmaWxsOiByZWQ7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgLTJweCwgMHB4KTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW1hZ2VHcmlkID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGNsYXNzTmFtZT1cImltYWdlLWdyaWRcIiB7Li4uKGRhdGEuc3BhY2luZ3MgJiYgZGF0YS5zcGFjaW5ncy5sZW5ndGggJiYgY29uZmlnUHJvcHMoZGF0YS5zcGFjaW5nc1swXSkpfT5cclxuICAgICAgPEZsZXhcclxuICAgICAgICBmbGV4RGlyZWN0aW9uPVwicm93XCJcclxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICBtYj17Mn1cclxuICAgICAgICBjbGFzc05hbWU9XCJncm91cC10aXRsZVwiXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgc2V0T3Blbighb3Blbik7XHJcbiAgICAgICAgfX1cclxuICAgICAgICBzeD17e1xyXG4gICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJoZWFkaW5nM1wiIGFzPVwiaDNcIj5cclxuICAgICAgICAgIHtkYXRhLmhlYWRpbmcgfHwgJyd9XHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDxJb01kQXJyb3dEcm9wZG93biBzaXplPVwiNDJweFwiIHN0eWxlPXt7IHRyYW5zZm9ybTogIW9wZW4gPyAnc2NhbGVZKC0xKScgOiAnJyB9fSAvPlxyXG4gICAgICA8L0ZsZXg+XHJcblxyXG4gICAgICB7b3BlbiAmJiAoXHJcbiAgICAgICAgPEZsZXggZmxleERpcmVjdGlvbj17Wydjb2x1bW4nLCBudWxsLCAncm93J119IGZsZXhXcmFwPVwid3JhcFwiIGNsYXNzTmFtZT1cImltYWdlLWdyaWQtY29udGVudC1jb250YWluZXJcIj5cclxuICAgICAgICAgIHtkYXRhLmltYWdlTGlzdC5tYXAoKGltYWdlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjcmlwdCA9IF9yZXBsYWNlKGRhdGEuY2xpY2tUb0NvcHlTY3JpcHQsICc8SUQ+JywgYCAke2ltYWdlLmltYWdlVGl0bGV9YCk7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2UtZ3JpZC1pdGVtXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD17MjcyfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9e1sxLCBudWxsLCAyNDBdfVxyXG4gICAgICAgICAgICAgICAgbXQ9e1s1XX1cclxuICAgICAgICAgICAgICAgIG1yPXtbMCwgbnVsbCwgNV19XHJcbiAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogJyAwIDAgMCAycHggIzMzMzMzMycsXHJcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpJyxcclxuICAgICAgICAgICAgICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiAnMCAxNHB4IDI4cHggcmdiYSgwLDAsMCwwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLDAsMCwwLjIyKScsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICcmOmJlZm9yZSc6IHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIicnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMCxcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiAnOHJlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tOiAnMnB4IHNvbGlkICMzMzMzMzMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogMSxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHsoaW1hZ2UuaW1hZ2UubGVuZ3RoICYmIGltYWdlLmltYWdlWzBdLnVybCkgfHwgbnVsbH0pYCxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBwdD17MTQwfVxyXG4gICAgICAgICAgICAgICAgcHg9ezR9XHJcbiAgICAgICAgICAgICAgICBwYj17NX1cclxuICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8RmxleCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgbXQ9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImhlYWRpbmc2XCJcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cIjE4cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcclxuICAgICAgICAgICAgICAgICAgICBhcz1cImg2XCJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk9XCJoZWFkaW5nXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpbWFnZS5pbWFnZVRpdGxlIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0IG10PXsyfSB2YXJpYW50PVwicGFyYWdyYXBoXCIgY29sb3I9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2ltYWdlLmltYWdlRGVzY3JpcHRpb24gfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAge2RhdGEuY2xpY2tUb0NvcHlTY3JpcHQgIT09ICcnICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkIHRleHQ9e3NjcmlwdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U1ZHV3JhcHBlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJb0lvc0NvcHkgc2l6ZT1cIjIwcHhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9TVkdXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgICApfVxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4vdGV4dCdcclxuXHJcbmV4cG9ydCB7IFRleHQgfVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSZWRhY3RvciB9IGZyb20gJy4uLy4uL2F0b21zL3JlZGFjdG9yL3JlZGFjdG9yJztcclxuaW1wb3J0IHsgQm94IH0gZnJvbSAncmViYXNzJztcclxuaW1wb3J0IHsgY29uZmlnUHJvcHMgfSBmcm9tICcuLi8uLi8uLi91dGlsaXR5L2hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRleHQgPSAoeyBkYXRhLCB3aWtpIH0pID0+IChcclxuICA8Qm94XHJcbiAgICBjbGFzc05hbWU9XCJ0ZXh0XCJcclxuICAgIHB4PXt3aWtpID8gMCA6IDV9XHJcbiAgICBteD1cImF1dG9cIlxyXG4gICAgbWF4V2lkdGg9ezEwMjB9XHJcbiAgICB7Li4uKGRhdGEuc3BhY2luZ3MgJiYgZGF0YS5zcGFjaW5ncy5sZW5ndGggJiYgY29uZmlnUHJvcHMoZGF0YS5zcGFjaW5nc1swXSkpfVxyXG4gID5cclxuICAgIDxSZWRhY3RvciBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGRhdGEucmVkYWN0b3IgfX0gLz5cclxuICA8L0JveD5cclxuKTtcclxuIiwiaW1wb3J0IHsgV2lraVNsaWNlWm9uZSB9IGZyb20gJy4vd2lraVNsaWNlWm9uZSdcclxuXHJcbmV4cG9ydCB7IFdpa2lTbGljZVpvbmUgfVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uL3RleHQnO1xyXG5pbXBvcnQgeyBFbnRyeUdyaWQgfSBmcm9tICcuLi9lbnRyeUdyaWQnO1xyXG5pbXBvcnQgeyBJbWFnZUdyaWQgfSBmcm9tICcuLi9pbWFnZUdyaWQvaW1hZ2VHcmlkJztcclxuaW1wb3J0IHsgQWNjb3JkaW9uIH0gZnJvbSAnLi4vYWNjb3JkaW9uJztcclxuXHJcbmV4cG9ydCBjb25zdCBXaWtpU2xpY2Vab25lID0gKHsgc2xpY2VzIH0pID0+IHtcclxuICBjb25zdCBtb2R1bGUgPSBzbGljZXMubWFwKChzbGljZSwgaW5kZXgpID0+IHtcclxuICAgIHN3aXRjaCAoc2xpY2UudHlwZUhhbmRsZSkge1xyXG4gICAgICBjYXNlICd0ZXh0JzpcclxuICAgICAgICByZXR1cm4gPFRleHQgZGF0YT17c2xpY2V9IGtleT17aW5kZXh9IHdpa2kgLz47XHJcbiAgICAgIGNhc2UgJ2VudHJ5R3JpZCc6XHJcbiAgICAgICAgcmV0dXJuIDxFbnRyeUdyaWQgZGF0YT17c2xpY2V9IGtleT17aW5kZXh9IC8+O1xyXG4gICAgICBjYXNlICdpbWFnZUdyaWQnOlxyXG4gICAgICAgIHJldHVybiA8SW1hZ2VHcmlkIGRhdGE9e3NsaWNlfSBrZXk9e2luZGV4fSAvPjtcclxuICAgICAgY2FzZSAnYWNjb3JkaW9uJzpcclxuICAgICAgICByZXR1cm4gPEFjY29yZGlvbiBkYXRhPXtzbGljZX0ga2V5PXtpbmRleH0gLz47XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiA8Pnttb2R1bGV9PC8+O1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCwgRmxleCwgVGV4dCB9IGZyb20gJ3JlYmFzcyc7XHJcbmltcG9ydCB7IFdpa2lOYXYgfSBmcm9tICcuLi9vcmdhbmlzbXMvd2lraU5hdi93aWtpTmF2JztcclxuaW1wb3J0IHsgV2lraUNvbnRlbnQgfSBmcm9tICcuLi9vcmdhbmlzbXMvd2lraUNvbnRlbnQnO1xyXG5pbXBvcnQgeyBJb0lvc0Fycm93Rm9yd2FyZCB9IGZyb20gJ3JlYWN0LWljb25zL2lvJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IEJyZWFkY3J1bWJJdGVtID0gUmVhY3QuZm9yd2FyZFJlZigoeyBjaGlsZHJlbiwgaW5kZXgsIC4uLnJlc3QgfSwgcmVmKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUZXh0XHJcbiAgICAgIHJlZj17cmVmfVxyXG4gICAgICBzeD17eyBjdXJzb3I6ICdwb2ludGVyJyB9fVxyXG4gICAgICBmb250U2l6ZT17WycxNHB4JywgbnVsbCwgJzE2cHgnXX1cclxuICAgICAgY29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgIHByPXsxfVxyXG4gICAgICBwbD17aW5kZXggIT09IDAgJiYgMX1cclxuICAgICAgey4uLnJlc3R9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1RleHQ+XHJcbiAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgV2lraUxheW91dCA9ICh7IGNoaWxkcmVuLCB0aXRsZSwgYnJlYWRjcnVtYiwgbmF2RGF0YSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggY2xhc3NOYW1lPVwid2lraS1sYXlvdXRcIiBwYj17WzE1LCAyMF19PlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi13cmFwcGVyXCJcclxuICAgICAgICBiZz1cImdyZWVuXCJcclxuICAgICAgICBweT17Nn1cclxuICAgICAgICBweD17WzQsIG51bGwsIDVdfVxyXG4gICAgICAgIHdpZHRoPXsxfVxyXG4gICAgICAgIHN4PXt7XHJcbiAgICAgICAgICBvdXRsaW5lOiAnOHB4IG91dHNldCAjNTA4MTVlJyxcclxuICAgICAgICAgIG91dGxpbmVPZmZzZXQ6ICctOHB4J1xyXG4gICAgICAgIH19PlxyXG4gICAgICAgIDxGbGV4XHJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwicm93XCJcclxuICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJmbGV4LXN0YXJ0XCJcclxuICAgICAgICAgIG1heFdpZHRoPXsxMTIwfVxyXG4gICAgICAgICAgbXg9XCJhdXRvXCJcclxuICAgICAgICAgIHdpZHRoPXsxfVxyXG4gICAgICAgICAgcHg9e1swLCBudWxsLCA1XX0+XHJcbiAgICAgICAgICB7YnJlYWRjcnVtYiAmJlxyXG4gICAgICAgICAgICBBcnJheS5pc0FycmF5KGJyZWFkY3J1bWIpICYmXHJcbiAgICAgICAgICAgIGJyZWFkY3J1bWIubGVuZ3RoID4gMSAmJlxyXG4gICAgICAgICAgICBicmVhZGNydW1iLm1hcCgoY3J1bWIsIGkpID0+IChcclxuICAgICAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Ake2NydW1iLmxpbmt9YH0gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iSXRlbSBrZXk9e2l9IGluZGV4PXtpfSBjcnVtYj17Y3J1bWJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjcnVtYi50ZXh0fVxyXG4gICAgICAgICAgICAgICAgICA8L0JyZWFkY3J1bWJJdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAge2JyZWFkY3J1bWIubGVuZ3RoIC0gMSAhPT0gaSA/IDxJb0lvc0Fycm93Rm9yd2FyZCBjb2xvcj1cIndoaXRlXCIgLz4gOiBudWxsfVxyXG4gICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvRmxleD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxGbGV4XHJcbiAgICAgICAgY2xhc3NOYW1lPVwid2lraS1sYXlvdXQtY29udGFpbmVyXCJcclxuICAgICAgICBmbGV4RGlyZWN0aW9uPXtbJ2NvbHVtbicsIG51bGwsICdyb3cnXX1cclxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXHJcbiAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgbXQ9e1sxMCwgbnVsbCwgMTZdfVxyXG4gICAgICAgIHB4PXs1fVxyXG4gICAgICAgIG1heFdpZHRoPXsxMTIwfVxyXG4gICAgICAgIG14PVwiYXV0b1wiPlxyXG4gICAgICAgIDxXaWtpTmF2IG5hdkRhdGE9e25hdkRhdGF9IC8+XHJcbiAgICAgICAgPFdpa2lDb250ZW50IHRpdGxlPXt0aXRsZX0+e2NoaWxkcmVufTwvV2lraUNvbnRlbnQ+XHJcbiAgICAgIDwvRmxleD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFdpa2lMYXlvdXQgfSBmcm9tICcuLi9jb21wb25lbnRzL3RlbXBsYXRlcy93aWtpTGF5b3V0JztcbmltcG9ydCB7IFdpa2lTbGljZVpvbmUgfSBmcm9tICcuLi9jb21wb25lbnRzL3NsaWNlcy93aWtpU2xpY2Vab25lJztcbmltcG9ydCBTRU8gZnJvbSAnLi4vY29tcG9uZW50cy9vcmdhbmlzbXMvc2VvL3Nlbyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmltcG9ydCB7IFdJS0lfUVVFUlkgfSBmcm9tICcuLi9xdWVyaWVzL3dpa2lRdWVyeS5ncWwnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwb2xsbyB9IGZyb20gJy4uLy4uL2xpYi9hcG9sbG9DbGllbnQnO1xuaW1wb3J0IHsgY29tcHV0ZUJyZWFkY3J1bWJzIH0gZnJvbSAnLi4vdXRpbGl0eS9oZWxwZXJzJztcblxuY29uc3QgV2lraVBhZ2UgPSAoeyBpbml0aWFsQXBvbGxvU3RhdGUgfSkgPT4ge1xuICBjb25zdCBkYXRhID0gaW5pdGlhbEFwb2xsb1N0YXRlLlJPT1RfUVVFUllbJ2VudHJ5KHtcInNpdGVcIjpcIndlc3Rlcm9zY3JhZnRcIixcInNsdWdcIjpcIndpa2lcIn0pJ107XG4gIGNvbnN0IG5hdmRhdGEgPSBpbml0aWFsQXBvbGxvU3RhdGUuUk9PVF9RVUVSWVsnbm9kZXMoe1wibGV2ZWxcIjoxLFwibmF2SGFuZGxlXCI6XCJ3aWtpTmF2XCJ9KSddO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U0VPXG4gICAgICAgIHRpdGxlPVwiV2lraVwiXG4gICAgICAgIGRlc2NyaXB0aW9uPXtkYXRhLnBhZ2VEZXNjcmlwdGlvbn1cbiAgICAgICAgaW1hZ2U9e2RhdGEucGFnZUVudHJ5ICYmIGRhdGEucGFnZUltYWdlWzBdLnVybH1cbiAgICAgIC8+XG4gICAgICA8V2lraUxheW91dFxuICAgICAgICBuYXZEYXRhPXtuYXZkYXRhfVxuICAgICAgICB0aXRsZT17ZGF0YS50aXRsZSB8fCAnV2VzdGVyb3NDcmFmdCBXaWtpJ31cbiAgICAgICAgYnJlYWRjcnVtYj17Y29tcHV0ZUJyZWFkY3J1bWJzKHJvdXRlci5hc1BhdGgpfT5cbiAgICAgICAgPFdpa2lTbGljZVpvbmUgc2xpY2VzPXtkYXRhLndpa2lTbGljZXN9IC8+XG4gICAgICA8L1dpa2lMYXlvdXQ+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IGFwb2xsb0NsaWVudCA9IGluaXRpYWxpemVBcG9sbG8oKTtcblxuICBhd2FpdCBhcG9sbG9DbGllbnQucXVlcnkoe1xuICAgIHF1ZXJ5OiBXSUtJX1FVRVJZXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGluaXRpYWxBcG9sbG9TdGF0ZTogYXBvbGxvQ2xpZW50LmNhY2hlLmV4dHJhY3QoKVxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogMVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBXaWtpUGFnZTtcbiIsIlxuICAgIHZhciBkb2MgPSB7XCJraW5kXCI6XCJEb2N1bWVudFwiLFwiZGVmaW5pdGlvbnNcIjpbe1wia2luZFwiOlwiRnJhZ21lbnREZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInNwYWNpbmdzXCJ9LFwidHlwZUNvbmRpdGlvblwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJzcGFjaW5nc19zcGFjaW5nX0Jsb2NrVHlwZVwifX0sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwibWFyZ2luVG9wXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwibW9iaWxlXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInRhYmxldFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJkZXNrdG9wXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIndpZGVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX1dfX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwibWFyZ2luQm90dG9tXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwibW9iaWxlXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInRhYmxldFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJkZXNrdG9wXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIndpZGVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX1dfX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicGFkZGluZ1RvcFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIm1vYmlsZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ0YWJsZXRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZGVza3RvcFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ3aWRlXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119XX19LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInBhZGRpbmdCb3R0b21cIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJtb2JpbGVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidGFibGV0XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImRlc2t0b3BcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwid2lkZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfV19fV19fSx7XCJraW5kXCI6XCJGcmFnbWVudERlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiV0lLSV9URVhUX0ZSQUdNRU5UXCJ9LFwidHlwZUNvbmRpdGlvblwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ3aWtpU2xpY2VzX3RleHRfQmxvY2tUeXBlXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ0eXBlSGFuZGxlXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInJlZGFjdG9yXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119XX19LHtcImtpbmRcIjpcIkZyYWdtZW50RGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJFTlRSWV9HUklEX0ZSQUdNRU5UXCJ9LFwidHlwZUNvbmRpdGlvblwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ3aWtpU2xpY2VzX2VudHJ5R3JpZF9CbG9ja1R5cGVcIn19LFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInR5cGVIYW5kbGVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaGVhZGluZ1wifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJlbnRyeUxpc3RcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ0aXRsZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJzbHVnXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInR5cGVIYW5kbGVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicGFyZW50XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwic2x1Z1wifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfV19fSx7XCJraW5kXCI6XCJJbmxpbmVGcmFnbWVudFwiLFwidHlwZUNvbmRpdGlvblwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ3aWtpX3dpa2lEZXN0aW5hdGlvbl9FbnRyeVwifX0sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaW1hZ2VzXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidXJsXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119XX19LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInByb2plY3REZXRhaWxzXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiSW5saW5lRnJhZ21lbnRcIixcInR5cGVDb25kaXRpb25cIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicHJvamVjdERldGFpbHNfZGV0YWlsc19CbG9ja1R5cGVcIn19LFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInJlZ2lvblwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJob3VzZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJkZXN0aW5hdGlvblR5cGVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX1dfX1dfX1dfX0se1wia2luZFwiOlwiSW5saW5lRnJhZ21lbnRcIixcInR5cGVDb25kaXRpb25cIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwid2lraV93aWtpR3VpZGVfRW50cnlcIn19LFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImhlcm9JbWFnZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInVybFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfV19fV19fSx7XCJraW5kXCI6XCJJbmxpbmVGcmFnbWVudFwiLFwidHlwZUNvbmRpdGlvblwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ3aWtpX3dpa2lNaXNjZWxsYW5lb3VzX0VudHJ5XCJ9fSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJoZXJvSW1hZ2VcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ1cmxcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX1dfX1dfX1dfX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwic3BhY2luZ3NcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJJbmxpbmVGcmFnbWVudFwiLFwidHlwZUNvbmRpdGlvblwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJzcGFjaW5nc19zcGFjaW5nX0Jsb2NrVHlwZVwifX0sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRnJhZ21lbnRTcHJlYWRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwic3BhY2luZ3NcIn0sXCJkaXJlY3RpdmVzXCI6W119XX19XX19XX19LHtcImtpbmRcIjpcIkZyYWdtZW50RGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJJTUFHRV9HUklEX0ZSQUdNRU5UXCJ9LFwidHlwZUNvbmRpdGlvblwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ3aWtpU2xpY2VzX2ltYWdlR3JpZF9CbG9ja1R5cGVcIn19LFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInR5cGVIYW5kbGVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaGVhZGluZ1wifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpbWFnZUxpc3RcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJJbmxpbmVGcmFnbWVudFwiLFwidHlwZUNvbmRpdGlvblwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpbWFnZUxpc3RfbGlzdEl0ZW1fQmxvY2tUeXBlXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpbWFnZVRpdGxlXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImltYWdlRGVzY3JpcHRpb25cIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaW1hZ2VcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ0aXRsZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ1cmxcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX1dfX1dfX1dfX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwic3BhY2luZ3NcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJJbmxpbmVGcmFnbWVudFwiLFwidHlwZUNvbmRpdGlvblwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJzcGFjaW5nc19zcGFjaW5nX0Jsb2NrVHlwZVwifX0sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRnJhZ21lbnRTcHJlYWRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwic3BhY2luZ3NcIn0sXCJkaXJlY3RpdmVzXCI6W119XX19XX19LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImNsaWNrVG9Db3B5U2NyaXB0XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119XX19LHtcImtpbmRcIjpcIkZyYWdtZW50RGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJBQ0NPUkRJT05fRlJBR01FTlRcIn0sXCJ0eXBlQ29uZGl0aW9uXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIndpa2lTbGljZXNfYWNjb3JkaW9uX0Jsb2NrVHlwZVwifX0sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidHlwZUhhbmRsZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJoZWFkaW5nXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImFjY29yZGlvbkNvbnRlbnRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJJbmxpbmVGcmFnbWVudFwiLFwidHlwZUNvbmRpdGlvblwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJhY2NvcmRpb25Db250ZW50X2FjY29yZGlvbkl0ZW1fQmxvY2tUeXBlXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJoZWFkaW5nXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImNvcHlcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX1dfX1dfX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwic3BhY2luZ3NcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJJbmxpbmVGcmFnbWVudFwiLFwidHlwZUNvbmRpdGlvblwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJzcGFjaW5nc19zcGFjaW5nX0Jsb2NrVHlwZVwifX0sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRnJhZ21lbnRTcHJlYWRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwic3BhY2luZ3NcIn0sXCJkaXJlY3RpdmVzXCI6W119XX19XX19XX19XSxcImxvY1wiOntcInN0YXJ0XCI6MCxcImVuZFwiOjE2NjZ9fTtcbiAgICBkb2MubG9jLnNvdXJjZSA9IHtcImJvZHlcIjpcImZyYWdtZW50IHNwYWNpbmdzIG9uIHNwYWNpbmdzX3NwYWNpbmdfQmxvY2tUeXBlIHtcXG4gIG1hcmdpblRvcCB7XFxuICAgIG1vYmlsZVxcbiAgICB0YWJsZXRcXG4gICAgZGVza3RvcFxcbiAgICB3aWRlXFxuICB9XFxuICBtYXJnaW5Cb3R0b20ge1xcbiAgICBtb2JpbGVcXG4gICAgdGFibGV0XFxuICAgIGRlc2t0b3BcXG4gICAgd2lkZVxcbiAgfVxcbiAgcGFkZGluZ1RvcCB7XFxuICAgIG1vYmlsZVxcbiAgICB0YWJsZXRcXG4gICAgZGVza3RvcFxcbiAgICB3aWRlXFxuICB9XFxuICBwYWRkaW5nQm90dG9tIHtcXG4gICAgbW9iaWxlXFxuICAgIHRhYmxldFxcbiAgICBkZXNrdG9wXFxuICAgIHdpZGVcXG4gIH1cXG59XFxuXFxuZnJhZ21lbnQgV0lLSV9URVhUX0ZSQUdNRU5UIG9uIHdpa2lTbGljZXNfdGV4dF9CbG9ja1R5cGUge1xcbiAgdHlwZUhhbmRsZVxcbiAgcmVkYWN0b3JcXG59XFxuXFxuZnJhZ21lbnQgRU5UUllfR1JJRF9GUkFHTUVOVCBvbiB3aWtpU2xpY2VzX2VudHJ5R3JpZF9CbG9ja1R5cGUge1xcbiAgdHlwZUhhbmRsZVxcbiAgaGVhZGluZ1xcbiAgZW50cnlMaXN0IHtcXG4gICAgdGl0bGVcXG4gICAgc2x1Z1xcbiAgICB0eXBlSGFuZGxlXFxuICAgIHBhcmVudCB7XFxuICAgICAgc2x1Z1xcbiAgICB9XFxuICAgIC4uLiBvbiB3aWtpX3dpa2lEZXN0aW5hdGlvbl9FbnRyeSB7XFxuICAgICAgaW1hZ2VzIHtcXG4gICAgICAgIHVybFxcbiAgICAgIH1cXG4gICAgICBwcm9qZWN0RGV0YWlscyB7XFxuICAgICAgICAuLi4gb24gcHJvamVjdERldGFpbHNfZGV0YWlsc19CbG9ja1R5cGUge1xcbiAgICAgICAgICByZWdpb25cXG4gICAgICAgICAgaG91c2VcXG4gICAgICAgICAgZGVzdGluYXRpb25UeXBlXFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICAgIC4uLiBvbiB3aWtpX3dpa2lHdWlkZV9FbnRyeSB7XFxuICAgICAgaGVyb0ltYWdlIHtcXG4gICAgICAgIHVybFxcbiAgICAgIH1cXG4gICAgfVxcbiAgICAuLi4gb24gd2lraV93aWtpTWlzY2VsbGFuZW91c19FbnRyeSB7XFxuICAgICAgaGVyb0ltYWdlIHtcXG4gICAgICAgIHVybFxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbiAgc3BhY2luZ3Mge1xcbiAgICAuLi4gb24gc3BhY2luZ3Nfc3BhY2luZ19CbG9ja1R5cGUge1xcbiAgICAgIC4uLnNwYWNpbmdzXFxuICAgIH1cXG4gIH1cXG59XFxuXFxuZnJhZ21lbnQgSU1BR0VfR1JJRF9GUkFHTUVOVCBvbiB3aWtpU2xpY2VzX2ltYWdlR3JpZF9CbG9ja1R5cGUge1xcbiAgdHlwZUhhbmRsZVxcbiAgaGVhZGluZ1xcbiAgaW1hZ2VMaXN0IHtcXG4gICAgLi4uIG9uIGltYWdlTGlzdF9saXN0SXRlbV9CbG9ja1R5cGUge1xcbiAgICAgIGltYWdlVGl0bGVcXG4gICAgICBpbWFnZURlc2NyaXB0aW9uXFxuICAgICAgaW1hZ2Uge1xcbiAgICAgICAgdGl0bGVcXG4gICAgICAgIHVybFxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbiAgc3BhY2luZ3Mge1xcbiAgICAuLi4gb24gc3BhY2luZ3Nfc3BhY2luZ19CbG9ja1R5cGUge1xcbiAgICAgIC4uLnNwYWNpbmdzXFxuICAgIH1cXG4gIH1cXG4gIGNsaWNrVG9Db3B5U2NyaXB0XFxufVxcblxcbmZyYWdtZW50IEFDQ09SRElPTl9GUkFHTUVOVCBvbiB3aWtpU2xpY2VzX2FjY29yZGlvbl9CbG9ja1R5cGUge1xcbiAgdHlwZUhhbmRsZVxcbiAgaGVhZGluZ1xcbiAgYWNjb3JkaW9uQ29udGVudCB7XFxuICAgIC4uLiBvbiBhY2NvcmRpb25Db250ZW50X2FjY29yZGlvbkl0ZW1fQmxvY2tUeXBlIHtcXG4gICAgICBoZWFkaW5nXFxuICAgICAgY29weVxcbiAgICB9XFxuICB9XFxuICBzcGFjaW5ncyB7XFxuICAgIC4uLiBvbiBzcGFjaW5nc19zcGFjaW5nX0Jsb2NrVHlwZSB7XFxuICAgICAgLi4uc3BhY2luZ3NcXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIm5hbWVcIjpcIkdyYXBoUUwgcmVxdWVzdFwiLFwibG9jYXRpb25PZmZzZXRcIjp7XCJsaW5lXCI6MSxcImNvbHVtblwiOjF9fTtcbiAgXG5cbiAgICB2YXIgbmFtZXMgPSB7fTtcbiAgICBmdW5jdGlvbiB1bmlxdWUoZGVmcykge1xuICAgICAgcmV0dXJuIGRlZnMuZmlsdGVyKFxuICAgICAgICBmdW5jdGlvbihkZWYpIHtcbiAgICAgICAgICBpZiAoZGVmLmtpbmQgIT09ICdGcmFnbWVudERlZmluaXRpb24nKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB2YXIgbmFtZSA9IGRlZi5uYW1lLnZhbHVlXG4gICAgICAgICAgaWYgKG5hbWVzW25hbWVdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5hbWVzW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cbiAgXG5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gZG9jO1xuICAgIFxuIiwiXG4gICAgdmFyIGRvYyA9IHtcImtpbmRcIjpcIkRvY3VtZW50XCIsXCJkZWZpbml0aW9uc1wiOlt7XCJraW5kXCI6XCJPcGVyYXRpb25EZWZpbml0aW9uXCIsXCJvcGVyYXRpb25cIjpcInF1ZXJ5XCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIldJS0lfUVVFUllcIn0sXCJ2YXJpYWJsZURlZmluaXRpb25zXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcImFsaWFzXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIndpa2lcIn0sXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImVudHJ5XCJ9LFwiYXJndW1lbnRzXCI6W3tcImtpbmRcIjpcIkFyZ3VtZW50XCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInNpdGVcIn0sXCJ2YWx1ZVwiOntcImtpbmRcIjpcIlN0cmluZ1ZhbHVlXCIsXCJ2YWx1ZVwiOlwid2VzdGVyb3NjcmFmdFwiLFwiYmxvY2tcIjpmYWxzZX19LHtcImtpbmRcIjpcIkFyZ3VtZW50XCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInNsdWdcIn0sXCJ2YWx1ZVwiOntcImtpbmRcIjpcIlN0cmluZ1ZhbHVlXCIsXCJ2YWx1ZVwiOlwid2lraVwiLFwiYmxvY2tcIjpmYWxzZX19XSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJJbmxpbmVGcmFnbWVudFwiLFwidHlwZUNvbmRpdGlvblwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ3aWtpSG9tZV93aWtpSG9tZV9FbnRyeVwifX0sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidGl0bGVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicGFnZURlc2NyaXB0aW9uXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInBhZ2VJbWFnZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInVybFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfV19fSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ3aWtpU2xpY2VzXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRnJhZ21lbnRTcHJlYWRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiV0lLSV9URVhUX0ZSQUdNRU5UXCJ9LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGcmFnbWVudFNwcmVhZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJFTlRSWV9HUklEX0ZSQUdNRU5UXCJ9LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGcmFnbWVudFNwcmVhZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJJTUFHRV9HUklEX0ZSQUdNRU5UXCJ9LFwiZGlyZWN0aXZlc1wiOltdfV19fV19fV19fSx7XCJraW5kXCI6XCJGaWVsZFwiLFwiYWxpYXNcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwid2lraU5hdlwifSxcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwibm9kZXNcIn0sXCJhcmd1bWVudHNcIjpbe1wia2luZFwiOlwiQXJndW1lbnRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwibmF2SGFuZGxlXCJ9LFwidmFsdWVcIjp7XCJraW5kXCI6XCJTdHJpbmdWYWx1ZVwiLFwidmFsdWVcIjpcIndpa2lOYXZcIixcImJsb2NrXCI6ZmFsc2V9fSx7XCJraW5kXCI6XCJBcmd1bWVudFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJsZXZlbFwifSxcInZhbHVlXCI6e1wia2luZFwiOlwiSW50VmFsdWVcIixcInZhbHVlXCI6XCIxXCJ9fV0sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidGl0bGVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidXJsXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInR5cGVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZWxlbWVudFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInNsdWdcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX1dfX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiY2hpbGRyZW5cIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ0aXRsZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ1cmxcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidHlwZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJlbGVtZW50XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwic2x1Z1wifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfV19fSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJwYXJlbnRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ0aXRsZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfV19fV19fV19fV19fV0sXCJsb2NcIjp7XCJzdGFydFwiOjAsXCJlbmRcIjo1OTR9fTtcbiAgICBkb2MubG9jLnNvdXJjZSA9IHtcImJvZHlcIjpcIiNpbXBvcnQgJy4vZnJhZ21lbnRzL3dpa2lGcmFnbWVudHMuZ3FsJ1xcblxcbnF1ZXJ5IFdJS0lfUVVFUlkge1xcbiAgd2lraTogZW50cnkoc2l0ZTogXFxcIndlc3Rlcm9zY3JhZnRcXFwiLCBzbHVnOiBcXFwid2lraVxcXCIpIHtcXG4gICAgLi4uIG9uIHdpa2lIb21lX3dpa2lIb21lX0VudHJ5IHtcXG4gICAgICB0aXRsZVxcbiAgICAgIHBhZ2VEZXNjcmlwdGlvblxcbiAgICAgIHBhZ2VJbWFnZSB7XFxuICAgICAgICB1cmxcXG4gICAgICB9XFxuICAgICAgd2lraVNsaWNlcyB7XFxuICAgICAgICAuLi5XSUtJX1RFWFRfRlJBR01FTlRcXG4gICAgICAgIC4uLkVOVFJZX0dSSURfRlJBR01FTlRcXG4gICAgICAgIC4uLklNQUdFX0dSSURfRlJBR01FTlRcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG4gIHdpa2lOYXY6IG5vZGVzKG5hdkhhbmRsZTogXFxcIndpa2lOYXZcXFwiLCBsZXZlbDogMSkge1xcbiAgICB0aXRsZVxcbiAgICB1cmxcXG4gICAgdHlwZVxcbiAgICBlbGVtZW50IHtcXG4gICAgICBzbHVnXFxuICAgIH1cXG4gICAgY2hpbGRyZW4ge1xcbiAgICAgIHRpdGxlXFxuICAgICAgdXJsXFxuICAgICAgdHlwZVxcbiAgICAgIGVsZW1lbnQge1xcbiAgICAgICAgc2x1Z1xcbiAgICAgIH1cXG4gICAgICBwYXJlbnQge1xcbiAgICAgICAgdGl0bGVcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCJuYW1lXCI6XCJHcmFwaFFMIHJlcXVlc3RcIixcImxvY2F0aW9uT2Zmc2V0XCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjoxfX07XG4gIFxuXG4gICAgdmFyIG5hbWVzID0ge307XG4gICAgZnVuY3Rpb24gdW5pcXVlKGRlZnMpIHtcbiAgICAgIHJldHVybiBkZWZzLmZpbHRlcihcbiAgICAgICAgZnVuY3Rpb24oZGVmKSB7XG4gICAgICAgICAgaWYgKGRlZi5raW5kICE9PSAnRnJhZ21lbnREZWZpbml0aW9uJykgcmV0dXJuIHRydWU7XG4gICAgICAgICAgdmFyIG5hbWUgPSBkZWYubmFtZS52YWx1ZVxuICAgICAgICAgIGlmIChuYW1lc1tuYW1lXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuYW1lc1tuYW1lXSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9XG4gIGRvYy5kZWZpbml0aW9ucyA9IGRvYy5kZWZpbml0aW9ucy5jb25jYXQodW5pcXVlKHJlcXVpcmUoJy4vZnJhZ21lbnRzL3dpa2lGcmFnbWVudHMuZ3FsJykuZGVmaW5pdGlvbnMpKTtcblxuXG4gICAgLy8gQ29sbGVjdCBhbnkgZnJhZ21lbnQvdHlwZSByZWZlcmVuY2VzIGZyb20gYSBub2RlLCBhZGRpbmcgdGhlbSB0byB0aGUgcmVmcyBTZXRcbiAgICBmdW5jdGlvbiBjb2xsZWN0RnJhZ21lbnRSZWZlcmVuY2VzKG5vZGUsIHJlZnMpIHtcbiAgICAgIGlmIChub2RlLmtpbmQgPT09IFwiRnJhZ21lbnRTcHJlYWRcIikge1xuICAgICAgICByZWZzLmFkZChub2RlLm5hbWUudmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChub2RlLmtpbmQgPT09IFwiVmFyaWFibGVEZWZpbml0aW9uXCIpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBub2RlLnR5cGU7XG4gICAgICAgIGlmICh0eXBlLmtpbmQgPT09IFwiTmFtZWRUeXBlXCIpIHtcbiAgICAgICAgICByZWZzLmFkZCh0eXBlLm5hbWUudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlLnNlbGVjdGlvblNldCkge1xuICAgICAgICBub2RlLnNlbGVjdGlvblNldC5zZWxlY3Rpb25zLmZvckVhY2goZnVuY3Rpb24oc2VsZWN0aW9uKSB7XG4gICAgICAgICAgY29sbGVjdEZyYWdtZW50UmVmZXJlbmNlcyhzZWxlY3Rpb24sIHJlZnMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGUudmFyaWFibGVEZWZpbml0aW9ucykge1xuICAgICAgICBub2RlLnZhcmlhYmxlRGVmaW5pdGlvbnMuZm9yRWFjaChmdW5jdGlvbihkZWYpIHtcbiAgICAgICAgICBjb2xsZWN0RnJhZ21lbnRSZWZlcmVuY2VzKGRlZiwgcmVmcyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAobm9kZS5kZWZpbml0aW9ucykge1xuICAgICAgICBub2RlLmRlZmluaXRpb25zLmZvckVhY2goZnVuY3Rpb24oZGVmKSB7XG4gICAgICAgICAgY29sbGVjdEZyYWdtZW50UmVmZXJlbmNlcyhkZWYsIHJlZnMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZGVmaW5pdGlvblJlZnMgPSB7fTtcbiAgICAoZnVuY3Rpb24gZXh0cmFjdFJlZmVyZW5jZXMoKSB7XG4gICAgICBkb2MuZGVmaW5pdGlvbnMuZm9yRWFjaChmdW5jdGlvbihkZWYpIHtcbiAgICAgICAgaWYgKGRlZi5uYW1lKSB7XG4gICAgICAgICAgdmFyIHJlZnMgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgY29sbGVjdEZyYWdtZW50UmVmZXJlbmNlcyhkZWYsIHJlZnMpO1xuICAgICAgICAgIGRlZmluaXRpb25SZWZzW2RlZi5uYW1lLnZhbHVlXSA9IHJlZnM7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pKCk7XG5cbiAgICBmdW5jdGlvbiBmaW5kT3BlcmF0aW9uKGRvYywgbmFtZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb2MuZGVmaW5pdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2MuZGVmaW5pdGlvbnNbaV07XG4gICAgICAgIGlmIChlbGVtZW50Lm5hbWUgJiYgZWxlbWVudC5uYW1lLnZhbHVlID09IG5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uZVF1ZXJ5KGRvYywgb3BlcmF0aW9uTmFtZSkge1xuICAgICAgLy8gQ29weSB0aGUgRG9jdW1lbnROb2RlLCBidXQgY2xlYXIgb3V0IHRoZSBkZWZpbml0aW9uc1xuICAgICAgdmFyIG5ld0RvYyA9IHtcbiAgICAgICAga2luZDogZG9jLmtpbmQsXG4gICAgICAgIGRlZmluaXRpb25zOiBbZmluZE9wZXJhdGlvbihkb2MsIG9wZXJhdGlvbk5hbWUpXVxuICAgICAgfTtcbiAgICAgIGlmIChkb2MuaGFzT3duUHJvcGVydHkoXCJsb2NcIikpIHtcbiAgICAgICAgbmV3RG9jLmxvYyA9IGRvYy5sb2M7XG4gICAgICB9XG5cbiAgICAgIC8vIE5vdywgZm9yIHRoZSBvcGVyYXRpb24gd2UncmUgcnVubmluZywgZmluZCBhbnkgZnJhZ21lbnRzIHJlZmVyZW5jZWQgYnlcbiAgICAgIC8vIGl0IG9yIHRoZSBmcmFnbWVudHMgaXQgcmVmZXJlbmNlc1xuICAgICAgdmFyIG9wUmVmcyA9IGRlZmluaXRpb25SZWZzW29wZXJhdGlvbk5hbWVdIHx8IG5ldyBTZXQoKTtcbiAgICAgIHZhciBhbGxSZWZzID0gbmV3IFNldCgpO1xuICAgICAgdmFyIG5ld1JlZnMgPSBuZXcgU2V0KCk7XG5cbiAgICAgIC8vIElFIDExIGRvZXNuJ3Qgc3VwcG9ydCBcIm5ldyBTZXQoaXRlcmFibGUpXCIsIHNvIHdlIGFkZCB0aGUgbWVtYmVycyBvZiBvcFJlZnMgdG8gbmV3UmVmcyBvbmUgYnkgb25lXG4gICAgICBvcFJlZnMuZm9yRWFjaChmdW5jdGlvbihyZWZOYW1lKSB7XG4gICAgICAgIG5ld1JlZnMuYWRkKHJlZk5hbWUpO1xuICAgICAgfSk7XG5cbiAgICAgIHdoaWxlIChuZXdSZWZzLnNpemUgPiAwKSB7XG4gICAgICAgIHZhciBwcmV2UmVmcyA9IG5ld1JlZnM7XG4gICAgICAgIG5ld1JlZnMgPSBuZXcgU2V0KCk7XG5cbiAgICAgICAgcHJldlJlZnMuZm9yRWFjaChmdW5jdGlvbihyZWZOYW1lKSB7XG4gICAgICAgICAgaWYgKCFhbGxSZWZzLmhhcyhyZWZOYW1lKSkge1xuICAgICAgICAgICAgYWxsUmVmcy5hZGQocmVmTmFtZSk7XG4gICAgICAgICAgICB2YXIgY2hpbGRSZWZzID0gZGVmaW5pdGlvblJlZnNbcmVmTmFtZV0gfHwgbmV3IFNldCgpO1xuICAgICAgICAgICAgY2hpbGRSZWZzLmZvckVhY2goZnVuY3Rpb24oY2hpbGRSZWYpIHtcbiAgICAgICAgICAgICAgbmV3UmVmcy5hZGQoY2hpbGRSZWYpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgYWxsUmVmcy5mb3JFYWNoKGZ1bmN0aW9uKHJlZk5hbWUpIHtcbiAgICAgICAgdmFyIG9wID0gZmluZE9wZXJhdGlvbihkb2MsIHJlZk5hbWUpO1xuICAgICAgICBpZiAob3ApIHtcbiAgICAgICAgICBuZXdEb2MuZGVmaW5pdGlvbnMucHVzaChvcCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gbmV3RG9jO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gZG9jO1xuICAgIFxuICAgICAgICBtb2R1bGUuZXhwb3J0c1tcIldJS0lfUVVFUllcIl0gPSBvbmVRdWVyeShkb2MsIFwiV0lLSV9RVUVSWVwiKTtcbiAgICAgICAgXG4iLCJpbXBvcnQgX3N0YXJ0Q2FzZSBmcm9tICdsb2Rhc2gvc3RhcnRDYXNlJztcclxuaW1wb3J0IF9jYW1lbENhc2UgZnJvbSAnbG9kYXNoL2NhbWVsQ2FzZSc7XHJcbmltcG9ydCAqIGFzIGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IF9tZXJnZSBmcm9tICdsb2Rhc2gvbWVyZ2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZ1Byb3BzID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgbXQ6IFtcclxuICAgICAgZGF0YS5tYXJnaW5Ub3BbMF0ubW9iaWxlID09PSAwID8gbnVsbCA6IGRhdGEubWFyZ2luVG9wWzBdLm1vYmlsZSxcclxuICAgICAgZGF0YS5tYXJnaW5Ub3BbMF0udGFibGV0ID09PSAwID8gbnVsbCA6IGRhdGEubWFyZ2luVG9wWzBdLnRhYmxldCxcclxuICAgICAgZGF0YS5tYXJnaW5Ub3BbMF0uZGVza3RvcCA9PT0gMCA/IG51bGwgOiBkYXRhLm1hcmdpblRvcFswXS5kZXNrdG9wLFxyXG4gICAgICBkYXRhLm1hcmdpblRvcFswXS53aWRlID09PSAwID8gbnVsbCA6IGRhdGEubWFyZ2luVG9wWzBdLndpZGVcclxuICAgIF0sXHJcbiAgICBtYjogW1xyXG4gICAgICBkYXRhLm1hcmdpbkJvdHRvbVswXS5tb2JpbGUgPT09IDAgPyBudWxsIDogZGF0YS5tYXJnaW5Cb3R0b21bMF0ubW9iaWxlLFxyXG4gICAgICBkYXRhLm1hcmdpbkJvdHRvbVswXS50YWJsZXQgPT09IDAgPyBudWxsIDogZGF0YS5tYXJnaW5Cb3R0b21bMF0udGFibGV0LFxyXG4gICAgICBkYXRhLm1hcmdpbkJvdHRvbVswXS5kZXNrdG9wID09PSAwID8gbnVsbCA6IGRhdGEubWFyZ2luQm90dG9tWzBdLmRlc2t0b3AsXHJcbiAgICAgIGRhdGEubWFyZ2luQm90dG9tWzBdLndpZGUgPT09IDAgPyBudWxsIDogZGF0YS5tYXJnaW5Cb3R0b21bMF0ud2lkZVxyXG4gICAgXSxcclxuICAgIHB0OiBbXHJcbiAgICAgIGRhdGEucGFkZGluZ1RvcFswXS5tb2JpbGUgPT09IDAgPyBudWxsIDogZGF0YS5wYWRkaW5nVG9wWzBdLm1vYmlsZSxcclxuICAgICAgZGF0YS5wYWRkaW5nVG9wWzBdLnRhYmxldCA9PT0gMCA/IG51bGwgOiBkYXRhLnBhZGRpbmdUb3BbMF0udGFibGV0LFxyXG4gICAgICBkYXRhLnBhZGRpbmdUb3BbMF0uZGVza3RvcCA9PT0gMCA/IG51bGwgOiBkYXRhLnBhZGRpbmdUb3BbMF0uZGVza3RvcCxcclxuICAgICAgZGF0YS5wYWRkaW5nVG9wWzBdLndpZGUgPT09IDAgPyBudWxsIDogZGF0YS5wYWRkaW5nVG9wWzBdLndpZGVcclxuICAgIF0sXHJcbiAgICBwYjogW1xyXG4gICAgICBkYXRhLnBhZGRpbmdCb3R0b21bMF0ubW9iaWxlID09PSAwID8gbnVsbCA6IGRhdGEucGFkZGluZ0JvdHRvbVswXS5tb2JpbGUsXHJcbiAgICAgIGRhdGEucGFkZGluZ0JvdHRvbVswXS50YWJsZXQgPT09IDAgPyBudWxsIDogZGF0YS5wYWRkaW5nQm90dG9tWzBdLnRhYmxldCxcclxuICAgICAgZGF0YS5wYWRkaW5nQm90dG9tWzBdLmRlc2t0b3AgPT09IDAgPyBudWxsIDogZGF0YS5wYWRkaW5nQm90dG9tWzBdLmRlc2t0b3AsXHJcbiAgICAgIGRhdGEucGFkZGluZ0JvdHRvbVswXS53aWRlID09PSAwID8gbnVsbCA6IGRhdGEucGFkZGluZ0JvdHRvbVswXS53aWRlXHJcbiAgICBdXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjYW1lbENhc2VGb3JtYXR0ZXIgPSAoc3RyaW5nKSA9PiB7XHJcbiAgcmV0dXJuIF9zdGFydENhc2UoX2NhbWVsQ2FzZShzdHJpbmcpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtYXREYXRlID0gKGRhdGUpID0+IHtcclxuICBpZiAoIWRhdGUpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgY29uc3QgZCA9IGRheWpzKGRhdGUpLmZvcm1hdCgnTU1NTSBELCBZWVlZJyk7XHJcbiAgcmV0dXJuIGQ7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0T1MgPSAoKSA9PiB7XHJcbiAgY29uc3QgcGxhdGZvcm0gPSB3aW5kb3cubmF2aWdhdG9yLnBsYXRmb3JtO1xyXG4gIGNvbnN0IG1hY29zUGxhdGZvcm1zID0gWydNYWNpbnRvc2gnLCAnTWFjSW50ZWwnLCAnTWFjUFBDJywgJ01hYzY4SyddO1xyXG4gIGNvbnN0IHdpbmRvd3NQbGF0Zm9ybXMgPSBbJ1dpbjMyJywgJ1dpbjY0JywgJ1dpbmRvd3MnLCAnV2luQ0UnXTtcclxuICAvLyBjb25zdCB1c2VyQWdlbnQgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuICAvLyBjb25zdCBpb3NQbGF0Zm9ybXMgPSBbJ2lQaG9uZScsICdpUGFkJywgJ2lQb2QnXTtcclxuICBsZXQgb3MgPSBudWxsO1xyXG5cclxuICBpZiAobWFjb3NQbGF0Zm9ybXMuaW5kZXhPZihwbGF0Zm9ybSkgIT09IC0xKSB7XHJcbiAgICBvcyA9ICdNYWMnO1xyXG4gIH0gZWxzZSBpZiAod2luZG93c1BsYXRmb3Jtcy5pbmRleE9mKHBsYXRmb3JtKSAhPT0gLTEpIHtcclxuICAgIG9zID0gJ1dpbmRvd3MnO1xyXG4gIH0gZWxzZSBpZiAoIW9zICYmIC9MaW51eC8udGVzdChwbGF0Zm9ybSkpIHtcclxuICAgIG9zID0gJ0xpbnV4JztcclxuICB9IGVsc2Uge1xyXG4gICAgb3MgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG9zO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbXBsZXRpb25QZXJjZW50YWdlID0gKGNvbXBsZXRlZExldmVsLCBpblByb2dyZXNzTGV2ZWwsIG5vdFN0YXJ0ZWRMZXZlbCkgPT4ge1xyXG4gIHJldHVybiBNYXRoLmNlaWwoXHJcbiAgICAoKGNvbXBsZXRlZExldmVsICsgaW5Qcm9ncmVzc0xldmVsIC8gMikgL1xyXG4gICAgICAoY29tcGxldGVkTGV2ZWwgKyBpblByb2dyZXNzTGV2ZWwgKyBub3RTdGFydGVkTGV2ZWwpKSAqXHJcbiAgICAgIDEwMFxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmxhdHRlbiA9IChkYXRhKSA9PlxyXG4gIGRhdGEucmVkdWNlKChhcnIsIGVsZW0pID0+IHtcclxuICAgIGlmIChlbGVtLnByb2plY3REZXRhaWxzICYmIGVsZW0ucHJvamVjdERldGFpbHMubGVuZ3RoKSB7XHJcbiAgICAgIGFyci5wdXNoKF9tZXJnZShlbGVtLCBlbGVtLnByb2plY3REZXRhaWxzWzBdKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyO1xyXG4gIH0sIFtdKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXREZXN0aW5hdGlvbkxldmVsID0gKG51bSkgPT4ge1xyXG4gIHN3aXRjaCAobnVtKSB7XHJcbiAgICBjYXNlICdvbmUnOlxyXG4gICAgICByZXR1cm4gMTtcclxuICAgIGNhc2UgJ3R3byc6XHJcbiAgICAgIHJldHVybiAyO1xyXG4gICAgY2FzZSAndGhyZWUnOlxyXG4gICAgICByZXR1cm4gMztcclxuICAgIGNhc2UgJ2ZvdXInOlxyXG4gICAgICByZXR1cm4gNDtcclxuICAgIGNhc2UgJ2ZpdmUnOlxyXG4gICAgICByZXR1cm4gNTtcclxuICAgIGNhc2UgJ3NpeCc6XHJcbiAgICAgIHJldHVybiA2O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbXB1dGVCcmVhZGNydW1icyA9IChicmVhZGNydW1iKSA9PiB7XHJcbiAgY29uc3QgcGF0aHMgPSBbeyB0ZXh0OiAnSG9tZScsIGxpbms6ICcvJyB9XTtcclxuICBjb25zdCBjcnVtYnMgPSBicmVhZGNydW1iLnNwbGl0KCcvJyk7XHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY3J1bWJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgcGFydCA9IGNydW1ic1tpXTtcclxuICAgIHZhciB0ZXh0ID0gY2FtZWxDYXNlRm9ybWF0dGVyKHBhcnQpO1xyXG4gICAgdmFyIGxpbmsgPSBjcnVtYnMuc2xpY2UoMCwgaSArIDEpLmpvaW4oJy8nKTtcclxuICAgIHBhdGhzLnB1c2goeyB0ZXh0OiB0ZXh0LCBsaW5rOiBsaW5rIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHBhdGhzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS50ZXh0ICE9PSAnJyk7XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50L3V0aWxpdGllc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZW1vdGlvbi9zdHlsZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlYmFzcy9mb3Jtc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbGdvbGlhc2VhcmNoL2xpdGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGF5anNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZW1vdGlvbi10aGVtaW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaC9jYW1lbENhc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoL2RlYm91bmNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaC9tZXJnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2gvcmVwbGFjZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2gvc3RhcnRDYXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtc2VvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInFzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvcHktdG8tY2xpcGJvYXJkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2JpXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2lvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWluc3RhbnRzZWFyY2gtZG9tL3NlcnZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdGpzLXBvcHVwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYmFzc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9