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
  }), __jsx(_components_templates_wikiLayout__WEBPACK_IMPORTED_MODULE_3__["WikiLayout"], {
    navData: navData,
    title: data && data.title || 'WesterosCraft Wiki',
    breadcrumb: Object(_utility_helpers__WEBPACK_IMPORTED_MODULE_7__["computeBreadcrumbs"])(router.asPath),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, !data ? __jsx(_components_atoms_spinner__WEBPACK_IMPORTED_MODULE_12__["Spinner"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, data && data.images && data.images.length > 0 && __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Flex"], {
    flexDirection: ['column', null, 'row'],
    justifyContent: "center",
    mx: "auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, __jsx(react_images__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: function onClick() {
      return setModalOpen(!modalOpen);
    },
    views: data.images,
    components: {
      View: View
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  })), __jsx(react_images__WEBPACK_IMPORTED_MODULE_9__["ModalGateway"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, modalOpen ? __jsx(react_images__WEBPACK_IMPORTED_MODULE_9__["Modal"], {
    onClose: function onClose() {
      setModalOpen(!modalOpen);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, __jsx(react_images__WEBPACK_IMPORTED_MODULE_9__["default"], {
    views: data.images,
    components: {
      View: View
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 19
    }
  })) : null), __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    fontFamily: "heading",
    variant: "heading3",
    as: "h3",
    mb: 5,
    mt: data && data.images && data.images.length > 0 ? 5 : 0,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, "Project details", data && data.projectDetails && data.projectDetails.length && data.projectDetails[0].application && __jsx("a", {
    href: data.projectDetails[0].application,
    target: "_blank",
    rel: "noreferrer noopener",
    style: {
      textDecoration: 'none',
      marginLeft: '8px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 19
    }
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_10__["FiExternalLink"], {
    size: "18px",
    color: "black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }
  }))), data && data.projectDetails && data.projectDetails.length && __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Flex"], {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    width: [1, 2 / 3, 1],
    mb: 10,
    mx: "auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 15
    }
  }, data && data.projectDetails && data.projectDetails.length && data.projectDetails[0].banner && data.projectDetails[0].banner.length > 0 && __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    src: data.projectDetails[0].banner[0].url,
    maxHeight: 150,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 21
    }
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Flex"], {
    as: "ol",
    flexDirection: "column",
    width: [1, null, null, '42%'],
    sx: {
      paddingInlineStart: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Flex"], {
    as: "li",
    justifyContent: ['space-between', null, null, 'flex-start'],
    py: 2,
    width: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 19
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    as: "h4",
    fontWeight: 600,
    width: 1 / 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 21
    }
  }, "Region"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    as: "p",
    width: 1 / 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 21
    }
  }, Object(_utility_helpers__WEBPACK_IMPORTED_MODULE_7__["camelCaseFormatter"])(data.projectDetails[0].region))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Flex"], {
    as: "li",
    justifyContent: ['space-between', null, null, 'flex-start'],
    py: 2,
    width: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 19
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    as: "h4",
    fontWeight: 600,
    width: 1 / 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 21
    }
  }, "House"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    as: "p",
    width: 1 / 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 21
    }
  }, data.projectDetails[0].house)), __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Flex"], {
    as: "li",
    justifyContent: ['space-between', null, null, 'flex-start'],
    py: 2,
    width: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 19
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    as: "h4",
    fontWeight: 600,
    width: 1 / 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 21
    }
  }, "Status"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    as: "p",
    width: 1 / 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 21
    }
  }, Object(_utility_helpers__WEBPACK_IMPORTED_MODULE_7__["camelCaseFormatter"])(data.projectDetails[0].destinationStatus))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Flex"], {
    as: "li",
    justifyContent: ['space-between', null, null, 'flex-start'],
    py: 2,
    width: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 19
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    as: "h4",
    fontWeight: 600,
    width: 1 / 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 21
    }
  }, "Date started"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    as: "p",
    width: 1 / 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 21
    }
  }, Object(_utility_helpers__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(data.projectDetails[0].dateStarted)))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Flex"], {
    as: "ol",
    flexDirection: "column",
    width: [1, null, null, '42%'],
    sx: {
      paddingInlineStart: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 17
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Flex"], {
    as: "li",
    justifyContent: ['space-between', null, null, 'flex-start'],
    py: 2,
    width: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 19
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    as: "h4",
    fontWeight: 600,
    width: 1 / 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 21
    }
  }, "Type"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    as: "p",
    width: 1 / 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 21
    }
  }, Object(_utility_helpers__WEBPACK_IMPORTED_MODULE_7__["camelCaseFormatter"])(data.projectDetails[0].destinationType))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Flex"], {
    as: "li",
    justifyContent: ['space-between', null, null, 'flex-start'],
    py: 2,
    width: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 19
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    as: "h4",
    fontWeight: 600,
    width: 1 / 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 21
    }
  }, "Warp"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    as: "p",
    width: 1 / 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 21
    }
  }, data.projectDetails[0].warp && "/".concat(lodash_lowerCase__WEBPACK_IMPORTED_MODULE_6___default()(data.projectDetails[0].warp)))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Flex"], {
    as: "li",
    justifyContent: ['space-between', null, null, 'flex-start'],
    py: 2,
    width: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 19
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    as: "h4",
    fontWeight: 600,
    width: 1 / 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 21
    }
  }, "Project lead(s)"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    as: "p",
    width: 1 / 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 21
    }
  }, data.projectDetails[0].projectLead)), __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Flex"], {
    as: "li",
    justifyContent: ['space-between', null, null, 'flex-start'],
    py: 2,
    width: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 19
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    as: "h4",
    fontWeight: 600,
    width: 1 / 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 21
    }
  }, "Date completed"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    as: "p",
    width: 1 / 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 21
    }
  }, Object(_utility_helpers__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(data.projectDetails[0].dateCompleted))))), data && data.copy && __jsx(_components_atoms_redactor__WEBPACK_IMPORTED_MODULE_4__["Redactor"], {
    dangerouslySetInnerHTML: {
      __html: data.copy
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 35
    }
  }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3dpa2kvW3JlZ2lvbl0vW2Rlc3RpbmF0aW9uXS5qcyJdLCJuYW1lcyI6WyJWaWV3IiwiZGF0YSIsInByb3BzIiwidXJsIiwidGl0bGUiLCJjYXJvdXNlbFByb3BzIiwib25DbGljayIsIkRlc3RpbmF0aW9uUGFnZSIsImluaXRpYWxBcG9sbG9TdGF0ZSIsInNsdWciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwiaXNGYWxsYmFjayIsIlJPT1RfUVVFUlkiLCJuYXZEYXRhIiwidXNlU3RhdGUiLCJtb2RhbE9wZW4iLCJzZXRNb2RhbE9wZW4iLCJwYWdlRGVzY3JpcHRpb24iLCJwYWdlRW50cnkiLCJwYWdlSW1hZ2UiLCJjb21wdXRlQnJlYWRjcnVtYnMiLCJhc1BhdGgiLCJpbWFnZXMiLCJsZW5ndGgiLCJwcm9qZWN0RGV0YWlscyIsImFwcGxpY2F0aW9uIiwidGV4dERlY29yYXRpb24iLCJtYXJnaW5MZWZ0IiwiYmFubmVyIiwicGFkZGluZ0lubGluZVN0YXJ0IiwiY2FtZWxDYXNlRm9ybWF0dGVyIiwicmVnaW9uIiwiaG91c2UiLCJkZXN0aW5hdGlvblN0YXR1cyIsImZvcm1hdERhdGUiLCJkYXRlU3RhcnRlZCIsImRlc3RpbmF0aW9uVHlwZSIsIndhcnAiLCJfbG93ZXJDYXNlIiwicHJvamVjdExlYWQiLCJkYXRlQ29tcGxldGVkIiwiY29weSIsIl9faHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLE1BQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLE1BQVlDLEtBQVo7O0FBQUEsU0FDWCxtRUFDRSxNQUFDLDRDQUFEO0FBQU8sT0FBRyxFQUFFRCxJQUFJLENBQUNFLEdB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RSxNQUFDLDJDQUFEO0FBQU0sTUFBRSxFQUFDLElBQVQ7QUFBYyxjQUFVLEVBQUUsR0FBMUI7QUFBK0IsU0FBSyxFQUFFLElBQUksQ0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFMRixFQVFFLE1BQUMsMkNBQUQ7QUFBTSxNQUFFLEVBQUMsR0FBVDtBQUFhLFNBQUssRUFBRSxJQUFJLENBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0wsbUVBQVUsQ0FBQ3BDLElBQUksQ0FBQzBCLGNBQUwsQ0FBb0IsQ0FBcEIsRUFBdUJnQixhQUF4QixDQURiLENBUkYsQ0F6Q0YsQ0FyRUYsQ0F6Q0osRUFzS0cxQyxJQUFJLElBQUlBLElBQUksQ0FBQzJDLElBQWIsSUFBcUIsTUFBQyxtRUFBRDtBQUFVLDJCQUF1QixFQUFFO0FBQUVDLFlBQU0sRUFBRTVDLElBQUksQ0FBQzJDO0FBQWYsS0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXRLeEIsQ0FQSixDQVJGLENBREY7QUE0TEQsQ0E3TUQ7O0dBQU1yQyxlO1VBQ1dJLHNEOzs7TUFEWEosZTs7QUF1UFNBLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3dpa2kvW3JlZ2lvbl0vW2Rlc3RpbmF0aW9uXS4zMTFmNzZjZTU0MzI1ODgwZGRhZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgV2lraUxheW91dCB9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvdGVtcGxhdGVzL3dpa2lMYXlvdXQnO1xuaW1wb3J0IHsgUmVkYWN0b3IgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2F0b21zL3JlZGFjdG9yJztcbmltcG9ydCB7IEZsZXgsIEltYWdlLCBUZXh0IH0gZnJvbSAncmViYXNzJztcbmltcG9ydCBfbG93ZXJDYXNlIGZyb20gJ2xvZGFzaC9sb3dlckNhc2UnO1xuaW1wb3J0IHsgY2FtZWxDYXNlRm9ybWF0dGVyLCBmb3JtYXREYXRlLCBjb21wdXRlQnJlYWRjcnVtYnMgfSBmcm9tICcuLi8uLi8uLi91dGlsaXR5L2hlbHBlcnMnO1xuaW1wb3J0IFNFTyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL29yZ2FuaXNtcy9zZW8vc2VvJztcbmltcG9ydCBDYXJvdXNlbCwgeyBNb2RhbCwgTW9kYWxHYXRld2F5IH0gZnJvbSAncmVhY3QtaW1hZ2VzJztcbmltcG9ydCB7IEZpRXh0ZXJuYWxMaW5rIH0gZnJvbSAncmVhY3QtaWNvbnMvZmknO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwb2xsbyB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9hcG9sbG9DbGllbnQnO1xuaW1wb3J0IHsgREVTVElOQVRJT05fUVVFUlkgfSBmcm9tICcuLi8uLi8uLi9xdWVyaWVzL2Rlc3RpbmF0aW9uUXVlcnkuZ3FsJztcbmltcG9ydCB7IEFMTF9SRUdJT05TX1FVRVJZIH0gZnJvbSAnLi4vLi4vLi4vcXVlcmllcy9yZWdpb25RdWVyeS5ncWwnO1xuaW1wb3J0IGZsYXR0ZW4gZnJvbSAnbG9kYXNoL2ZsYXR0ZW4nO1xuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvYXRvbXMvc3Bpbm5lcic7XG5cbmNvbnN0IFZpZXcgPSAoeyBkYXRhLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDw+XG4gICAgPEltYWdlIHNyYz17ZGF0YS51cmx9IGFsdD17ZGF0YS50aXRsZX0gb25DbGljaz17cHJvcHMuY2Fyb3VzZWxQcm9wcy5vbkNsaWNrfSB7Li4ucHJvcHN9IC8+XG4gIDwvPlxuKTtcblxuY29uc3QgRGVzdGluYXRpb25QYWdlID0gKHsgaW5pdGlhbEFwb2xsb1N0YXRlLCBzbHVnIH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc29sZS5sb2coaW5pdGlhbEFwb2xsb1N0YXRlKTtcblxuICBpZiAocm91dGVyLmlzRmFsbGJhY2spIHtcbiAgICByZXR1cm4gPFNwaW5uZXIgLz47XG4gIH1cblxuICBjb25zdCBkYXRhID1cbiAgICBpbml0aWFsQXBvbGxvU3RhdGUuUk9PVF9RVUVSWVtcbiAgICAgIGBlbnRyeSh7XCJzaXRlXCI6XCJ3ZXN0ZXJvc2NyYWZ0XCIsXCJzbHVnXCI6XCIke3NsdWd9XCIsXCJ0eXBlXCI6XCJ3aWtpRGVzdGluYXRpb25cIn0pYFxuICAgIF07XG4gIGNvbnN0IG5hdkRhdGEgPSBpbml0aWFsQXBvbGxvU3RhdGUuUk9PVF9RVUVSWVsnbm9kZXMoe1wibGV2ZWxcIjoxLFwibmF2SGFuZGxlXCI6XCJ3aWtpTmF2XCJ9KSddO1xuXG4gIGNvbnN0IFttb2RhbE9wZW4sIHNldE1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2RhdGEgJiYgKFxuICAgICAgICA8U0VPXG4gICAgICAgICAgdGl0bGU9e2RhdGEudGl0bGV9XG4gICAgICAgICAgZGVzY3JpcHRpb249e2RhdGEucGFnZURlc2NyaXB0aW9ufVxuICAgICAgICAgIGltYWdlPXtkYXRhLnBhZ2VFbnRyeSAmJiBkYXRhLnBhZ2VJbWFnZVswXS51cmx9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgPFdpa2lMYXlvdXRcbiAgICAgICAgbmF2RGF0YT17bmF2RGF0YX1cbiAgICAgICAgdGl0bGU9eyhkYXRhICYmIGRhdGEudGl0bGUpIHx8ICdXZXN0ZXJvc0NyYWZ0IFdpa2knfVxuICAgICAgICBicmVhZGNydW1iPXtjb21wdXRlQnJlYWRjcnVtYnMocm91dGVyLmFzUGF0aCl9PlxuICAgICAgICB7IWRhdGEgPyAoXG4gICAgICAgICAgPFNwaW5uZXIgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5pbWFnZXMgJiYgZGF0YS5pbWFnZXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgIDxGbGV4IGZsZXhEaXJlY3Rpb249e1snY29sdW1uJywgbnVsbCwgJ3JvdyddfSBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIG14PVwiYXV0b1wiPlxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbFxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9kYWxPcGVuKCFtb2RhbE9wZW4pfVxuICAgICAgICAgICAgICAgICAgdmlld3M9e2RhdGEuaW1hZ2VzfVxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50cz17eyBWaWV3IH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxNb2RhbEdhdGV3YXk+XG4gICAgICAgICAgICAgIHttb2RhbE9wZW4gPyAoXG4gICAgICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldE1vZGFsT3BlbighbW9kYWxPcGVuKTtcbiAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgPENhcm91c2VsIHZpZXdzPXtkYXRhLmltYWdlc30gY29tcG9uZW50cz17eyBWaWV3IH19IC8+XG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L01vZGFsR2F0ZXdheT5cbiAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk9XCJoZWFkaW5nXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImhlYWRpbmczXCJcbiAgICAgICAgICAgICAgYXM9XCJoM1wiXG4gICAgICAgICAgICAgIG1iPXs1fVxuICAgICAgICAgICAgICBtdD17ZGF0YSAmJiBkYXRhLmltYWdlcyAmJiBkYXRhLmltYWdlcy5sZW5ndGggPiAwID8gNSA6IDB9PlxuICAgICAgICAgICAgICBQcm9qZWN0IGRldGFpbHNcbiAgICAgICAgICAgICAge2RhdGEgJiZcbiAgICAgICAgICAgICAgICBkYXRhLnByb2plY3REZXRhaWxzICYmXG4gICAgICAgICAgICAgICAgZGF0YS5wcm9qZWN0RGV0YWlscy5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICBkYXRhLnByb2plY3REZXRhaWxzWzBdLmFwcGxpY2F0aW9uICYmIChcbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2RhdGEucHJvamVjdERldGFpbHNbMF0uYXBwbGljYXRpb259XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLCBtYXJnaW5MZWZ0OiAnOHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPEZpRXh0ZXJuYWxMaW5rIHNpemU9XCIxOHB4XCIgY29sb3I9XCJibGFja1wiIC8+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIHtkYXRhICYmIGRhdGEucHJvamVjdERldGFpbHMgJiYgZGF0YS5wcm9qZWN0RGV0YWlscy5sZW5ndGggJiYgKFxuICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgICAgICAgIGZsZXhXcmFwPVwid3JhcFwiXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICB3aWR0aD17WzEsIDIgLyAzLCAxXX1cbiAgICAgICAgICAgICAgICBtYj17MTB9XG4gICAgICAgICAgICAgICAgbXg9XCJhdXRvXCI+XG4gICAgICAgICAgICAgICAge2RhdGEgJiZcbiAgICAgICAgICAgICAgICAgIGRhdGEucHJvamVjdERldGFpbHMgJiZcbiAgICAgICAgICAgICAgICAgIGRhdGEucHJvamVjdERldGFpbHMubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgICBkYXRhLnByb2plY3REZXRhaWxzWzBdLmJhbm5lciAmJlxuICAgICAgICAgICAgICAgICAgZGF0YS5wcm9qZWN0RGV0YWlsc1swXS5iYW5uZXIubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2RhdGEucHJvamVjdERldGFpbHNbMF0uYmFubmVyWzBdLnVybH0gbWF4SGVpZ2h0PXsxNTB9IC8+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgICBhcz1cIm9sXCJcbiAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9e1sxLCBudWxsLCBudWxsLCAnNDIlJ119XG4gICAgICAgICAgICAgICAgICBzeD17eyBwYWRkaW5nSW5saW5lU3RhcnQ6IDAgfX0+XG4gICAgICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgICAgICBhcz1cImxpXCJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9e1snc3BhY2UtYmV0d2VlbicsIG51bGwsIG51bGwsICdmbGV4LXN0YXJ0J119XG4gICAgICAgICAgICAgICAgICAgIHB5PXsyfVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MX0+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGFzPVwiaDRcIiBmb250V2VpZ2h0PXs2MDB9IHdpZHRoPXsxIC8gMn0+XG4gICAgICAgICAgICAgICAgICAgICAgUmVnaW9uXG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgYXM9XCJwXCIgd2lkdGg9ezEgLyAyfT5cbiAgICAgICAgICAgICAgICAgICAgICB7Y2FtZWxDYXNlRm9ybWF0dGVyKGRhdGEucHJvamVjdERldGFpbHNbMF0ucmVnaW9uKX1cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICAgICAgYXM9XCJsaVwiXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PXtbJ3NwYWNlLWJldHdlZW4nLCBudWxsLCBudWxsLCAnZmxleC1zdGFydCddfVxuICAgICAgICAgICAgICAgICAgICBweT17Mn1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezF9PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBhcz1cImg0XCIgZm9udFdlaWdodD17NjAwfSB3aWR0aD17MSAvIDJ9PlxuICAgICAgICAgICAgICAgICAgICAgIEhvdXNlXG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgYXM9XCJwXCIgd2lkdGg9ezEgLyAyfT5cbiAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5wcm9qZWN0RGV0YWlsc1swXS5ob3VzZX1cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICAgICAgYXM9XCJsaVwiXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PXtbJ3NwYWNlLWJldHdlZW4nLCBudWxsLCBudWxsLCAnZmxleC1zdGFydCddfVxuICAgICAgICAgICAgICAgICAgICBweT17Mn1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezF9PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBhcz1cImg0XCIgZm9udFdlaWdodD17NjAwfSB3aWR0aD17MSAvIDJ9PlxuICAgICAgICAgICAgICAgICAgICAgIFN0YXR1c1xuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGFzPVwicFwiIHdpZHRoPXsxIC8gMn0+XG4gICAgICAgICAgICAgICAgICAgICAge2NhbWVsQ2FzZUZvcm1hdHRlcihkYXRhLnByb2plY3REZXRhaWxzWzBdLmRlc3RpbmF0aW9uU3RhdHVzKX1cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICAgICAgYXM9XCJsaVwiXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PXtbJ3NwYWNlLWJldHdlZW4nLCBudWxsLCBudWxsLCAnZmxleC1zdGFydCddfVxuICAgICAgICAgICAgICAgICAgICBweT17Mn1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezF9PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBhcz1cImg0XCIgZm9udFdlaWdodD17NjAwfSB3aWR0aD17MSAvIDJ9PlxuICAgICAgICAgICAgICAgICAgICAgIERhdGUgc3RhcnRlZFxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGFzPVwicFwiIHdpZHRoPXsxIC8gMn0+XG4gICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdERhdGUoZGF0YS5wcm9qZWN0RGV0YWlsc1swXS5kYXRlU3RhcnRlZCl9XG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICAgIGFzPVwib2xcIlxuICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgICB3aWR0aD17WzEsIG51bGwsIG51bGwsICc0MiUnXX1cbiAgICAgICAgICAgICAgICAgIHN4PXt7IHBhZGRpbmdJbmxpbmVTdGFydDogMCB9fT5cbiAgICAgICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgICAgIGFzPVwibGlcIlxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD17WydzcGFjZS1iZXR3ZWVuJywgbnVsbCwgbnVsbCwgJ2ZsZXgtc3RhcnQnXX1cbiAgICAgICAgICAgICAgICAgICAgcHk9ezJ9XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxfT5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgYXM9XCJoNFwiIGZvbnRXZWlnaHQ9ezYwMH0gd2lkdGg9ezEgLyAyfT5cbiAgICAgICAgICAgICAgICAgICAgICBUeXBlXG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgYXM9XCJwXCIgd2lkdGg9ezEgLyAyfT5cbiAgICAgICAgICAgICAgICAgICAgICB7Y2FtZWxDYXNlRm9ybWF0dGVyKGRhdGEucHJvamVjdERldGFpbHNbMF0uZGVzdGluYXRpb25UeXBlKX1cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICAgICAgYXM9XCJsaVwiXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PXtbJ3NwYWNlLWJldHdlZW4nLCBudWxsLCBudWxsLCAnZmxleC1zdGFydCddfVxuICAgICAgICAgICAgICAgICAgICBweT17Mn1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezF9PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBhcz1cImg0XCIgZm9udFdlaWdodD17NjAwfSB3aWR0aD17MSAvIDJ9PlxuICAgICAgICAgICAgICAgICAgICAgIFdhcnBcbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBhcz1cInBcIiB3aWR0aD17MSAvIDJ9PlxuICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLnByb2plY3REZXRhaWxzWzBdLndhcnAgJiYgYC8ke19sb3dlckNhc2UoZGF0YS5wcm9qZWN0RGV0YWlsc1swXS53YXJwKX1gfVxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgICAgICBhcz1cImxpXCJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9e1snc3BhY2UtYmV0d2VlbicsIG51bGwsIG51bGwsICdmbGV4LXN0YXJ0J119XG4gICAgICAgICAgICAgICAgICAgIHB5PXsyfVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MX0+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGFzPVwiaDRcIiBmb250V2VpZ2h0PXs2MDB9IHdpZHRoPXsxIC8gMn0+XG4gICAgICAgICAgICAgICAgICAgICAgUHJvamVjdCBsZWFkKHMpXG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgYXM9XCJwXCIgd2lkdGg9ezEgLyAyfT5cbiAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5wcm9qZWN0RGV0YWlsc1swXS5wcm9qZWN0TGVhZH1cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICAgICAgYXM9XCJsaVwiXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PXtbJ3NwYWNlLWJldHdlZW4nLCBudWxsLCBudWxsLCAnZmxleC1zdGFydCddfVxuICAgICAgICAgICAgICAgICAgICBweT17Mn1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezF9PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBhcz1cImg0XCIgZm9udFdlaWdodD17NjAwfSB3aWR0aD17MSAvIDJ9PlxuICAgICAgICAgICAgICAgICAgICAgIERhdGUgY29tcGxldGVkXG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgYXM9XCJwXCIgd2lkdGg9ezEgLyAyfT5cbiAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0RGF0ZShkYXRhLnByb2plY3REZXRhaWxzWzBdLmRhdGVDb21wbGV0ZWQpfVxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5jb3B5ICYmIDxSZWRhY3RvciBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGRhdGEuY29weSB9fSAvPn1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvV2lraUxheW91dD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgYXBvbGxvQ2xpZW50ID0gaW5pdGlhbGl6ZUFwb2xsbygpO1xuXG4gIGNvbnN0IHJlZ2lvbnMgPSBhd2FpdCBhcG9sbG9DbGllbnQucXVlcnkoe1xuICAgIHF1ZXJ5OiBBTExfUkVHSU9OU19RVUVSWVxuICB9KTtcblxuICBjb25zdCBwYWdlcyA9IHJlZ2lvbnMuZGF0YS5lbnRyaWVzLm1hcCgoaXRlbSkgPT4ge1xuICAgIHJldHVybiBpdGVtLmNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHJlZ2lvbjogaXRlbS5zbHVnLFxuICAgICAgICAgIGRlc3RpbmF0aW9uOiBjaGlsZC5zbHVnXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IHBhdGhzID0gZmxhdHRlbihwYWdlcyk7XG5cbiAgcmV0dXJuIHsgcGF0aHMsIGZhbGxiYWNrOiB0cnVlIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IGFwb2xsb0NsaWVudCA9IGluaXRpYWxpemVBcG9sbG8oKTtcblxuICBhd2FpdCBhcG9sbG9DbGllbnQucXVlcnkoe1xuICAgIHF1ZXJ5OiBERVNUSU5BVElPTl9RVUVSWSxcbiAgICB2YXJpYWJsZXM6IHsgc2x1ZzogcGFyYW1zLmRlc3RpbmF0aW9uIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgaW5pdGlhbEFwb2xsb1N0YXRlOiBhcG9sbG9DbGllbnQuY2FjaGUuZXh0cmFjdCgpLFxuICAgICAgc2x1ZzogcGFyYW1zLmRlc3RpbmF0aW9uXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAxXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IERlc3RpbmF0aW9uUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=