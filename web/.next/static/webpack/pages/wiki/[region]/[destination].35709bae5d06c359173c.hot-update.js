webpackHotUpdate_N_E("pages/wiki/[region]/[destination]",{

/***/ "./src/pages/wiki/[region]/[destination].js":
/*!**************************************************!*\
  !*** ./src/pages/wiki/[region]/[destination].js ***!
  \**************************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_templates_wikiLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/templates/wikiLayout */ "./src/components/templates/wikiLayout.jsx");
/* harmony import */ var _components_atoms_redactor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/atoms/redactor */ "./src/components/atoms/redactor/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.esm.js");
/* harmony import */ var lodash_lowerCase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/lowerCase */ "./node_modules/lodash/lowerCase.js");
/* harmony import */ var lodash_lowerCase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_lowerCase__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utility_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utility/helpers */ "./src/utility/helpers.js");
/* harmony import */ var _components_organisms_seo_seo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/organisms/seo/seo */ "./src/components/organisms/seo/seo.js");
/* harmony import */ var react_images__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-images */ "./node_modules/react-images/dist/react-images.es.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_atoms_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/atoms/spinner */ "./src/components/atoms/spinner/index.js");



var _this = undefined,
    _jsxFileName = "/home/geeberry/Working/WesterosCraftSite/web/src/pages/wiki/[region]/[destination].js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;












var View = function View(_ref) {
  var data = _ref.data,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["data"]);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Image"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    src: data.url,
    alt: data.title,
    onClick: props.carouselProps.onClick
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  })));
};

_c = View;

var DestinationPage = function DestinationPage(_ref2) {
  _s();

  var initialApolloState = _ref2.initialApolloState,
      slug = _ref2.slug;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_11__["useRouter"])();
  console.log(initialApolloState);

  if (router.isFallback) {
    return __jsx(_components_atoms_spinner__WEBPACK_IMPORTED_MODULE_12__["Spinner"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 12
      }
    });
  }

  var data = initialApolloState.ROOT_QUERY["entry({\"site\":\"westeroscraft\",\"slug\":\"".concat(slug, "\",\"type\":\"wikiDestination\"})")];
  var navData = initialApolloState.ROOT_QUERY['nodes({"level":1,"navHandle":"wikiNav"})'];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      modalOpen = _useState[0],
      setModalOpen = _useState[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, data && __jsx(_components_organisms_seo_seo__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: data.title,
    description: data.pageDescription,
    image: data.pageEntry && data.pageImage[0].url,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }), "test");
};

_s(DestinationPage, "GkwacXPvGcLjEWl5FA822qpYfgQ=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_11__["useRouter"]];
});

_c2 = DestinationPage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (DestinationPage);

var _c, _c2;

$RefreshReg$(_c, "View");
$RefreshReg$(_c2, "DestinationPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3dpa2kvW3JlZ2lvbl0vW2Rlc3RpbmF0aW9uXS5qcyJdLCJuYW1lcyI6WyJWaWV3IiwiZGF0YSIsInByb3BzIiwidXJsIiwidGl0bGUiLCJjYXJvdXNlbFByb3BzIiwib25DbGljayIsIkRlc3RpbmF0aW9uUGFnZSIsImluaXRpYWxBcG9sbG9TdGF0ZSIsInNsdWciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwiaXNGYWxsYmFjayIsIlJPT1RfUVVFUlkiLCJuYXZEYXRhIiwidXNlU3RhdGUiLCJtb2RhbE9wZW4iLCJzZXRNb2RhbE9wZW4iLCJwYWdlRGVzY3JpcHRpb24iLCJwYWdlRW50cnkiLCJwYWdlSW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxNQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxNQUFZQyxLQUFaOztBQUFBLFNBQ1gsbUVBQ0UsTUFBQyw0Q0FBRDtBQUFPLE9BQUcsRUFBRUQsSUFBSSxDQUFDRSxHQUFqQjtBQUFzQixPQUFHLEVBQUVGLElBQUksQ0FBQ0csS0FBaEM7QUFBdUMsV0FBTyxFQUFFRixLQUFLLENBQUNHLGFBQU4sQ0FBb0JDO0FBQXBFLEtBQWlGSixLQUFqRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREYsQ0FEVztBQUFBLENBQWI7O0tBQU1GLEk7O0FBTU4sSUFBTU8sZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixRQUFrQztBQUFBOztBQUFBLE1BQS9CQyxrQkFBK0IsU0FBL0JBLGtCQUErQjtBQUFBLE1BQVhDLElBQVcsU0FBWEEsSUFBVztBQUN4RCxNQUFNQyxNQUFNLEdBQUdDLDhEQUFTLEVBQXhCO0FBRUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTCxrQkFBWjs7QUFFQSxNQUFJRSxNQUFNLENBQUNJLFVBQVgsRUFBdUI7QUFDckIsV0FBTyxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBUDtBQUNEOztBQUVELE1BQU1iLElBQUksR0FDUk8sa0JBQWtCLENBQUNPLFVBQW5CLHdEQUMyQ04sSUFEM0MsdUNBREY7QUFJQSxNQUFNTyxPQUFPLEdBQUdSLGtCQUFrQixDQUFDTyxVQUFuQixDQUE4QiwwQ0FBOUIsQ0FBaEI7O0FBYndELGtCQWV0QkUsc0RBQVEsQ0FBQyxLQUFELENBZmM7QUFBQSxNQWVqREMsU0FmaUQ7QUFBQSxNQWV0Q0MsWUFmc0M7O0FBaUJ4RCxTQUNFLG1FQUNHbEIsSUFBSSxJQUNILE1BQUMscUVBQUQ7QUFDRSxTQUFLLEVBQUVBLElBQUksQ0FBQ0csS0FEZDtBQUVFLGVBQVcsRUFBRUgsSUFBSSxDQUFDbUIsZUFGcEI7QUFHRSxTQUFLLEVBQUVuQixJQUFJLENBQUNvQixTQUFMLElBQWtCcEIsSUFBSSxDQUFDcUIsU0FBTCxDQUFlLENBQWYsRUFBa0JuQixHQUg3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosU0FERjtBQTZMRCxDQTlNRDs7R0FBTUksZTtVQUNXSSxzRDs7O01BRFhKLGU7O0FBd1BTQSw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy93aWtpL1tyZWdpb25dL1tkZXN0aW5hdGlvbl0uMzU3MDliYWU1ZDA2YzM1OTE3M2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFdpa2lMYXlvdXQgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3RlbXBsYXRlcy93aWtpTGF5b3V0JztcbmltcG9ydCB7IFJlZGFjdG9yIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9hdG9tcy9yZWRhY3Rvcic7XG5pbXBvcnQgeyBGbGV4LCBJbWFnZSwgVGV4dCB9IGZyb20gJ3JlYmFzcyc7XG5pbXBvcnQgX2xvd2VyQ2FzZSBmcm9tICdsb2Rhc2gvbG93ZXJDYXNlJztcbmltcG9ydCB7IGNhbWVsQ2FzZUZvcm1hdHRlciwgZm9ybWF0RGF0ZSwgY29tcHV0ZUJyZWFkY3J1bWJzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0eS9oZWxwZXJzJztcbmltcG9ydCBTRU8gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9vcmdhbmlzbXMvc2VvL3Nlbyc7XG5pbXBvcnQgQ2Fyb3VzZWwsIHsgTW9kYWwsIE1vZGFsR2F0ZXdheSB9IGZyb20gJ3JlYWN0LWltYWdlcyc7XG5pbXBvcnQgeyBGaUV4dGVybmFsTGluayB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IGluaXRpYWxpemVBcG9sbG8gfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvYXBvbGxvQ2xpZW50JztcbmltcG9ydCB7IERFU1RJTkFUSU9OX1FVRVJZIH0gZnJvbSAnLi4vLi4vLi4vcXVlcmllcy9kZXN0aW5hdGlvblF1ZXJ5LmdxbCc7XG5pbXBvcnQgeyBBTExfUkVHSU9OU19RVUVSWSB9IGZyb20gJy4uLy4uLy4uL3F1ZXJpZXMvcmVnaW9uUXVlcnkuZ3FsJztcbmltcG9ydCBmbGF0dGVuIGZyb20gJ2xvZGFzaC9mbGF0dGVuJztcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2F0b21zL3NwaW5uZXInO1xuXG5jb25zdCBWaWV3ID0gKHsgZGF0YSwgLi4ucHJvcHMgfSkgPT4gKFxuICA8PlxuICAgIDxJbWFnZSBzcmM9e2RhdGEudXJsfSBhbHQ9e2RhdGEudGl0bGV9IG9uQ2xpY2s9e3Byb3BzLmNhcm91c2VsUHJvcHMub25DbGlja30gey4uLnByb3BzfSAvPlxuICA8Lz5cbik7XG5cbmNvbnN0IERlc3RpbmF0aW9uUGFnZSA9ICh7IGluaXRpYWxBcG9sbG9TdGF0ZSwgc2x1ZyB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnNvbGUubG9nKGluaXRpYWxBcG9sbG9TdGF0ZSk7XG5cbiAgaWYgKHJvdXRlci5pc0ZhbGxiYWNrKSB7XG4gICAgcmV0dXJuIDxTcGlubmVyIC8+O1xuICB9XG5cbiAgY29uc3QgZGF0YSA9XG4gICAgaW5pdGlhbEFwb2xsb1N0YXRlLlJPT1RfUVVFUllbXG4gICAgICBgZW50cnkoe1wic2l0ZVwiOlwid2VzdGVyb3NjcmFmdFwiLFwic2x1Z1wiOlwiJHtzbHVnfVwiLFwidHlwZVwiOlwid2lraURlc3RpbmF0aW9uXCJ9KWBcbiAgICBdO1xuICBjb25zdCBuYXZEYXRhID0gaW5pdGlhbEFwb2xsb1N0YXRlLlJPT1RfUVVFUllbJ25vZGVzKHtcImxldmVsXCI6MSxcIm5hdkhhbmRsZVwiOlwid2lraU5hdlwifSknXTtcblxuICBjb25zdCBbbW9kYWxPcGVuLCBzZXRNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtkYXRhICYmIChcbiAgICAgICAgPFNFT1xuICAgICAgICAgIHRpdGxlPXtkYXRhLnRpdGxlfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtkYXRhLnBhZ2VEZXNjcmlwdGlvbn1cbiAgICAgICAgICBpbWFnZT17ZGF0YS5wYWdlRW50cnkgJiYgZGF0YS5wYWdlSW1hZ2VbMF0udXJsfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHRlc3RcbiAgICAgIHsvKiA8V2lraUxheW91dFxuICAgICAgICBuYXZEYXRhPXtuYXZEYXRhfVxuICAgICAgICB0aXRsZT17KGRhdGEgJiYgZGF0YS50aXRsZSkgfHwgJ1dlc3Rlcm9zQ3JhZnQgV2lraSd9XG4gICAgICAgIGJyZWFkY3J1bWI9e2NvbXB1dGVCcmVhZGNydW1icyhyb3V0ZXIuYXNQYXRoKX0+XG4gICAgICAgIHshZGF0YSA/IChcbiAgICAgICAgICA8U3Bpbm5lciAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmltYWdlcyAmJiBkYXRhLmltYWdlcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgPEZsZXggZmxleERpcmVjdGlvbj17Wydjb2x1bW4nLCBudWxsLCAncm93J119IGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgbXg9XCJhdXRvXCI+XG4gICAgICAgICAgICAgICAgPENhcm91c2VsXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb2RhbE9wZW4oIW1vZGFsT3Blbil9XG4gICAgICAgICAgICAgICAgICB2aWV3cz17ZGF0YS5pbWFnZXN9XG4gICAgICAgICAgICAgICAgICBjb21wb25lbnRzPXt7IFZpZXcgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPE1vZGFsR2F0ZXdheT5cbiAgICAgICAgICAgICAge21vZGFsT3BlbiA/IChcbiAgICAgICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0TW9kYWxPcGVuKCFtb2RhbE9wZW4pO1xuICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgdmlld3M9e2RhdGEuaW1hZ2VzfSBjb21wb25lbnRzPXt7IFZpZXcgfX0gLz5cbiAgICAgICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvTW9kYWxHYXRld2F5PlxuICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgZm9udEZhbWlseT1cImhlYWRpbmdcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiaGVhZGluZzNcIlxuICAgICAgICAgICAgICBhcz1cImgzXCJcbiAgICAgICAgICAgICAgbWI9ezV9XG4gICAgICAgICAgICAgIG10PXtkYXRhICYmIGRhdGEuaW1hZ2VzICYmIGRhdGEuaW1hZ2VzLmxlbmd0aCA+IDAgPyA1IDogMH0+XG4gICAgICAgICAgICAgIFByb2plY3QgZGV0YWlsc1xuICAgICAgICAgICAgICB7ZGF0YSAmJlxuICAgICAgICAgICAgICAgIGRhdGEucHJvamVjdERldGFpbHMgJiZcbiAgICAgICAgICAgICAgICBkYXRhLnByb2plY3REZXRhaWxzLmxlbmd0aCAmJlxuICAgICAgICAgICAgICAgIGRhdGEucHJvamVjdERldGFpbHNbMF0uYXBwbGljYXRpb24gJiYgKFxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17ZGF0YS5wcm9qZWN0RGV0YWlsc1swXS5hcHBsaWNhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiAnbm9uZScsIG1hcmdpbkxlZnQ6ICc4cHgnIH19PlxuICAgICAgICAgICAgICAgICAgICA8RmlFeHRlcm5hbExpbmsgc2l6ZT1cIjE4cHhcIiBjb2xvcj1cImJsYWNrXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5wcm9qZWN0RGV0YWlscyAmJiBkYXRhLnByb2plY3REZXRhaWxzLmxlbmd0aCAmJiAoXG4gICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgICAgICAgZmxleFdyYXA9XCJ3cmFwXCJcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgICAgIHdpZHRoPXtbMSwgMiAvIDMsIDFdfVxuICAgICAgICAgICAgICAgIG1iPXsxMH1cbiAgICAgICAgICAgICAgICBteD1cImF1dG9cIj5cbiAgICAgICAgICAgICAgICB7ZGF0YSAmJlxuICAgICAgICAgICAgICAgICAgZGF0YS5wcm9qZWN0RGV0YWlscyAmJlxuICAgICAgICAgICAgICAgICAgZGF0YS5wcm9qZWN0RGV0YWlscy5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICAgIGRhdGEucHJvamVjdERldGFpbHNbMF0uYmFubmVyICYmXG4gICAgICAgICAgICAgICAgICBkYXRhLnByb2plY3REZXRhaWxzWzBdLmJhbm5lci5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17ZGF0YS5wcm9qZWN0RGV0YWlsc1swXS5iYW5uZXJbMF0udXJsfSBtYXhIZWlnaHQ9ezE1MH0gLz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICAgIGFzPVwib2xcIlxuICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgICB3aWR0aD17WzEsIG51bGwsIG51bGwsICc0MiUnXX1cbiAgICAgICAgICAgICAgICAgIHN4PXt7IHBhZGRpbmdJbmxpbmVTdGFydDogMCB9fT5cbiAgICAgICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgICAgIGFzPVwibGlcIlxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD17WydzcGFjZS1iZXR3ZWVuJywgbnVsbCwgbnVsbCwgJ2ZsZXgtc3RhcnQnXX1cbiAgICAgICAgICAgICAgICAgICAgcHk9ezJ9XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxfT5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgYXM9XCJoNFwiIGZvbnRXZWlnaHQ9ezYwMH0gd2lkdGg9ezEgLyAyfT5cbiAgICAgICAgICAgICAgICAgICAgICBSZWdpb25cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBhcz1cInBcIiB3aWR0aD17MSAvIDJ9PlxuICAgICAgICAgICAgICAgICAgICAgIHtjYW1lbENhc2VGb3JtYXR0ZXIoZGF0YS5wcm9qZWN0RGV0YWlsc1swXS5yZWdpb24pfVxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgICAgICBhcz1cImxpXCJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9e1snc3BhY2UtYmV0d2VlbicsIG51bGwsIG51bGwsICdmbGV4LXN0YXJ0J119XG4gICAgICAgICAgICAgICAgICAgIHB5PXsyfVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MX0+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGFzPVwiaDRcIiBmb250V2VpZ2h0PXs2MDB9IHdpZHRoPXsxIC8gMn0+XG4gICAgICAgICAgICAgICAgICAgICAgSG91c2VcbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBhcz1cInBcIiB3aWR0aD17MSAvIDJ9PlxuICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLnByb2plY3REZXRhaWxzWzBdLmhvdXNlfVxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgICAgICBhcz1cImxpXCJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9e1snc3BhY2UtYmV0d2VlbicsIG51bGwsIG51bGwsICdmbGV4LXN0YXJ0J119XG4gICAgICAgICAgICAgICAgICAgIHB5PXsyfVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MX0+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGFzPVwiaDRcIiBmb250V2VpZ2h0PXs2MDB9IHdpZHRoPXsxIC8gMn0+XG4gICAgICAgICAgICAgICAgICAgICAgU3RhdHVzXG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgYXM9XCJwXCIgd2lkdGg9ezEgLyAyfT5cbiAgICAgICAgICAgICAgICAgICAgICB7Y2FtZWxDYXNlRm9ybWF0dGVyKGRhdGEucHJvamVjdERldGFpbHNbMF0uZGVzdGluYXRpb25TdGF0dXMpfVxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgICAgICBhcz1cImxpXCJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9e1snc3BhY2UtYmV0d2VlbicsIG51bGwsIG51bGwsICdmbGV4LXN0YXJ0J119XG4gICAgICAgICAgICAgICAgICAgIHB5PXsyfVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MX0+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGFzPVwiaDRcIiBmb250V2VpZ2h0PXs2MDB9IHdpZHRoPXsxIC8gMn0+XG4gICAgICAgICAgICAgICAgICAgICAgRGF0ZSBzdGFydGVkXG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgYXM9XCJwXCIgd2lkdGg9ezEgLyAyfT5cbiAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0RGF0ZShkYXRhLnByb2plY3REZXRhaWxzWzBdLmRhdGVTdGFydGVkKX1cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgICAgYXM9XCJvbFwiXG4gICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXtbMSwgbnVsbCwgbnVsbCwgJzQyJSddfVxuICAgICAgICAgICAgICAgICAgc3g9e3sgcGFkZGluZ0lubGluZVN0YXJ0OiAwIH19PlxuICAgICAgICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICAgICAgYXM9XCJsaVwiXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PXtbJ3NwYWNlLWJldHdlZW4nLCBudWxsLCBudWxsLCAnZmxleC1zdGFydCddfVxuICAgICAgICAgICAgICAgICAgICBweT17Mn1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezF9PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBhcz1cImg0XCIgZm9udFdlaWdodD17NjAwfSB3aWR0aD17MSAvIDJ9PlxuICAgICAgICAgICAgICAgICAgICAgIFR5cGVcbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBhcz1cInBcIiB3aWR0aD17MSAvIDJ9PlxuICAgICAgICAgICAgICAgICAgICAgIHtjYW1lbENhc2VGb3JtYXR0ZXIoZGF0YS5wcm9qZWN0RGV0YWlsc1swXS5kZXN0aW5hdGlvblR5cGUpfVxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgICAgICBhcz1cImxpXCJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9e1snc3BhY2UtYmV0d2VlbicsIG51bGwsIG51bGwsICdmbGV4LXN0YXJ0J119XG4gICAgICAgICAgICAgICAgICAgIHB5PXsyfVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MX0+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGFzPVwiaDRcIiBmb250V2VpZ2h0PXs2MDB9IHdpZHRoPXsxIC8gMn0+XG4gICAgICAgICAgICAgICAgICAgICAgV2FycFxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGFzPVwicFwiIHdpZHRoPXsxIC8gMn0+XG4gICAgICAgICAgICAgICAgICAgICAge2RhdGEucHJvamVjdERldGFpbHNbMF0ud2FycCAmJiBgLyR7X2xvd2VyQ2FzZShkYXRhLnByb2plY3REZXRhaWxzWzBdLndhcnApfWB9XG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgICAgIGFzPVwibGlcIlxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD17WydzcGFjZS1iZXR3ZWVuJywgbnVsbCwgbnVsbCwgJ2ZsZXgtc3RhcnQnXX1cbiAgICAgICAgICAgICAgICAgICAgcHk9ezJ9XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxfT5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgYXM9XCJoNFwiIGZvbnRXZWlnaHQ9ezYwMH0gd2lkdGg9ezEgLyAyfT5cbiAgICAgICAgICAgICAgICAgICAgICBQcm9qZWN0IGxlYWQocylcbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBhcz1cInBcIiB3aWR0aD17MSAvIDJ9PlxuICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLnByb2plY3REZXRhaWxzWzBdLnByb2plY3RMZWFkfVxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgICAgICBhcz1cImxpXCJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9e1snc3BhY2UtYmV0d2VlbicsIG51bGwsIG51bGwsICdmbGV4LXN0YXJ0J119XG4gICAgICAgICAgICAgICAgICAgIHB5PXsyfVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MX0+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGFzPVwiaDRcIiBmb250V2VpZ2h0PXs2MDB9IHdpZHRoPXsxIC8gMn0+XG4gICAgICAgICAgICAgICAgICAgICAgRGF0ZSBjb21wbGV0ZWRcbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBhcz1cInBcIiB3aWR0aD17MSAvIDJ9PlxuICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXREYXRlKGRhdGEucHJvamVjdERldGFpbHNbMF0uZGF0ZUNvbXBsZXRlZCl9XG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmNvcHkgJiYgPFJlZGFjdG9yIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGF0YS5jb3B5IH19IC8+fVxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9XaWtpTGF5b3V0PiAqL31cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgYXBvbGxvQ2xpZW50ID0gaW5pdGlhbGl6ZUFwb2xsbygpO1xuXG4gIGNvbnN0IHJlZ2lvbnMgPSBhd2FpdCBhcG9sbG9DbGllbnQucXVlcnkoe1xuICAgIHF1ZXJ5OiBBTExfUkVHSU9OU19RVUVSWVxuICB9KTtcblxuICBjb25zdCBwYWdlcyA9IHJlZ2lvbnMuZGF0YS5lbnRyaWVzLm1hcCgoaXRlbSkgPT4ge1xuICAgIHJldHVybiBpdGVtLmNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHJlZ2lvbjogaXRlbS5zbHVnLFxuICAgICAgICAgIGRlc3RpbmF0aW9uOiBjaGlsZC5zbHVnXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IHBhdGhzID0gZmxhdHRlbihwYWdlcyk7XG5cbiAgcmV0dXJuIHsgcGF0aHMsIGZhbGxiYWNrOiB0cnVlIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IGFwb2xsb0NsaWVudCA9IGluaXRpYWxpemVBcG9sbG8oKTtcblxuICBhd2FpdCBhcG9sbG9DbGllbnQucXVlcnkoe1xuICAgIHF1ZXJ5OiBERVNUSU5BVElPTl9RVUVSWSxcbiAgICB2YXJpYWJsZXM6IHsgc2x1ZzogcGFyYW1zLmRlc3RpbmF0aW9uIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgaW5pdGlhbEFwb2xsb1N0YXRlOiBhcG9sbG9DbGllbnQuY2FjaGUuZXh0cmFjdCgpLFxuICAgICAgc2x1ZzogcGFyYW1zLmRlc3RpbmF0aW9uXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAxXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IERlc3RpbmF0aW9uUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=