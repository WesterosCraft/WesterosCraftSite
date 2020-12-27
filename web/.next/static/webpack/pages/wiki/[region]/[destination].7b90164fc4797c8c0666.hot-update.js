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
  }), __jsx(_components_templates_wikiLayout__WEBPACK_IMPORTED_MODULE_3__["WikiLayout"] // navData={navData}
  , {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3dpa2kvW3JlZ2lvbl0vW2Rlc3RpbmF0aW9uXS5qcyJdLCJuYW1lcyI6WyJWaWV3IiwiZGF0YSIsInByb3BzIiwidXJsIiwidGl0bGUiLCJjYXJvdXNlbFByb3BzIiwib25DbGljayIsIkRlc3RpbmF0aW9uUGFnZSIsImluaXRpYWxBcG9sbG9TdGF0ZSIsInNsdWciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwiaXNGYWxsYmFjayIsIlJPT1RfUVVFUlkiLCJuYXZEYXRhIiwidXNlU3RhdGUiLCJtb2RhbE9wZW4iLCJzZXRNb2RhbE9wZW4iLCJwYWdlRGVzY3JpcHRpb24iLCJwYWdlRW50cnkiLCJwYWdlSW1hZ2UiLCJjb21wdXRlQnJlYWRjcnVtYnMiLCJhc1BhdGgiLCJpbWFnZXMiLCJsZW5ndGgiLCJwcm9qZWN0RGV0YWlscyIsImFwcGxpY2F0aW9uIiwidGV4dERlY29yYXRpb24iLCJtYXJnaW5MZWZ0IiwiYmFubmVyIiwicGFkZGluZ0lubGluZVN0YXJ0IiwiY2FtZWxDYXNlRm9ybWF0dGVyIiwicmVnaW9uIiwiaG91c2UiLCJkZXN0aW5hdGlvblN0YXR1cyIsImZvcm1hdERhdGUiLCJkYXRlU3RhcnRlZCIsImRlc3RpbmF0aW9uVHlwZSIsIndhcnAiLCJfbG93ZXJDYXNlIiwicHJvamVjdExlYWQiLCJkYXRlQ29tcGxldGVkIiwiY29weSIsIl9faHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLE1BQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLE1BQVlDLEtBQVo7O0FBQUEsU0FDWCxtRUFDRSxNQUFDLDRDQUFEO0FBQU8sT0FBRyxFQUFFRCxJQUFJLENBQUNFLEdB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RDtBQUFNLE1BQUUsRUFBQyxJQUFUO0FBQWMsY0FBVSxFQUFFLEdBQTFCO0FBQStCLFNBQUssRUFBRSxJQUFJLENBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTEYsRUFRRSxNQUFDLDJDQUFEO0FBQU0sTUFBRSxFQUFDLEdBQVQ7QUFBYSxTQUFLLEVBQUUsSUFBSSxDQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dMLG1FQUFVLENBQUNwQyxJQUFJLENBQUMwQixjQUFMLENBQW9CLENBQXBCLEVBQXVCZ0IsYUFBeEIsQ0FEYixDQVJGLENBekNGLENBckVGLENBekNKLEVBc0tHMUMsSUFBSSxJQUFJQSxJQUFJLENBQUMyQyxJQUFiLElBQXFCLE1BQUMsbUVBQUQ7QUFBVSwyQkFBdUIsRUFBRTtBQUFFQyxZQUFNLEVBQUU1QyxJQUFJLENBQUMyQztBQUFmLEtBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF0S3hCLENBUEosQ0FSRixDQURGO0FBNExELENBN01EOztHQUFNckMsZTtVQUNXSSxzRDs7O01BRFhKLGU7O0FBdVBTQSw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy93aWtpL1tyZWdpb25dL1tkZXN0aW5hdGlvbl0uN2I5MDE2NGZjNDc5N2M4YzA2NjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFdpa2lMYXlvdXQgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3RlbXBsYXRlcy93aWtpTGF5b3V0JztcbmltcG9ydCB7IFJlZGFjdG9yIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9hdG9tcy9yZWRhY3Rvcic7XG5pbXBvcnQgeyBGbGV4LCBJbWFnZSwgVGV4dCB9IGZyb20gJ3JlYmFzcyc7XG5pbXBvcnQgX2xvd2VyQ2FzZSBmcm9tICdsb2Rhc2gvbG93ZXJDYXNlJztcbmltcG9ydCB7IGNhbWVsQ2FzZUZvcm1hdHRlciwgZm9ybWF0RGF0ZSwgY29tcHV0ZUJyZWFkY3J1bWJzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0eS9oZWxwZXJzJztcbmltcG9ydCBTRU8gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9vcmdhbmlzbXMvc2VvL3Nlbyc7XG5pbXBvcnQgQ2Fyb3VzZWwsIHsgTW9kYWwsIE1vZGFsR2F0ZXdheSB9IGZyb20gJ3JlYWN0LWltYWdlcyc7XG5pbXBvcnQgeyBGaUV4dGVybmFsTGluayB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IGluaXRpYWxpemVBcG9sbG8gfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvYXBvbGxvQ2xpZW50JztcbmltcG9ydCB7IERFU1RJTkFUSU9OX1FVRVJZIH0gZnJvbSAnLi4vLi4vLi4vcXVlcmllcy9kZXN0aW5hdGlvblF1ZXJ5LmdxbCc7XG5pbXBvcnQgeyBBTExfUkVHSU9OU19RVUVSWSB9IGZyb20gJy4uLy4uLy4uL3F1ZXJpZXMvcmVnaW9uUXVlcnkuZ3FsJztcbmltcG9ydCBmbGF0dGVuIGZyb20gJ2xvZGFzaC9mbGF0dGVuJztcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2F0b21zL3NwaW5uZXInO1xuXG5jb25zdCBWaWV3ID0gKHsgZGF0YSwgLi4ucHJvcHMgfSkgPT4gKFxuICA8PlxuICAgIDxJbWFnZSBzcmM9e2RhdGEudXJsfSBhbHQ9e2RhdGEudGl0bGV9IG9uQ2xpY2s9e3Byb3BzLmNhcm91c2VsUHJvcHMub25DbGlja30gey4uLnByb3BzfSAvPlxuICA8Lz5cbik7XG5cbmNvbnN0IERlc3RpbmF0aW9uUGFnZSA9ICh7IGluaXRpYWxBcG9sbG9TdGF0ZSwgc2x1ZyB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnNvbGUubG9nKGluaXRpYWxBcG9sbG9TdGF0ZSk7XG5cbiAgaWYgKHJvdXRlci5pc0ZhbGxiYWNrKSB7XG4gICAgcmV0dXJuIDxTcGlubmVyIC8+O1xuICB9XG5cbiAgY29uc3QgZGF0YSA9XG4gICAgaW5pdGlhbEFwb2xsb1N0YXRlLlJPT1RfUVVFUllbXG4gICAgICBgZW50cnkoe1wic2l0ZVwiOlwid2VzdGVyb3NjcmFmdFwiLFwic2x1Z1wiOlwiJHtzbHVnfVwiLFwidHlwZVwiOlwid2lraURlc3RpbmF0aW9uXCJ9KWBcbiAgICBdO1xuICBjb25zdCBuYXZEYXRhID0gaW5pdGlhbEFwb2xsb1N0YXRlLlJPT1RfUVVFUllbJ25vZGVzKHtcImxldmVsXCI6MSxcIm5hdkhhbmRsZVwiOlwid2lraU5hdlwifSknXTtcblxuICBjb25zdCBbbW9kYWxPcGVuLCBzZXRNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtkYXRhICYmIChcbiAgICAgICAgPFNFT1xuICAgICAgICAgIHRpdGxlPXtkYXRhLnRpdGxlfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtkYXRhLnBhZ2VEZXNjcmlwdGlvbn1cbiAgICAgICAgICBpbWFnZT17ZGF0YS5wYWdlRW50cnkgJiYgZGF0YS5wYWdlSW1hZ2VbMF0udXJsfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIDxXaWtpTGF5b3V0XG4gICAgICAgIC8vIG5hdkRhdGE9e25hdkRhdGF9XG4gICAgICAgIHRpdGxlPXsoZGF0YSAmJiBkYXRhLnRpdGxlKSB8fCAnV2VzdGVyb3NDcmFmdCBXaWtpJ31cbiAgICAgICAgYnJlYWRjcnVtYj17Y29tcHV0ZUJyZWFkY3J1bWJzKHJvdXRlci5hc1BhdGgpfT5cbiAgICAgICAgeyFkYXRhID8gKFxuICAgICAgICAgIDxTcGlubmVyIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHtkYXRhICYmIGRhdGEuaW1hZ2VzICYmIGRhdGEuaW1hZ2VzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICA8RmxleCBmbGV4RGlyZWN0aW9uPXtbJ2NvbHVtbicsIG51bGwsICdyb3cnXX0ganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBteD1cImF1dG9cIj5cbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1vZGFsT3BlbighbW9kYWxPcGVuKX1cbiAgICAgICAgICAgICAgICAgIHZpZXdzPXtkYXRhLmltYWdlc31cbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHM9e3sgVmlldyB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8TW9kYWxHYXRld2F5PlxuICAgICAgICAgICAgICB7bW9kYWxPcGVuID8gKFxuICAgICAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRNb2RhbE9wZW4oIW1vZGFsT3Blbik7XG4gICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbCB2aWV3cz17ZGF0YS5pbWFnZXN9IGNvbXBvbmVudHM9e3sgVmlldyB9fSAvPlxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9Nb2RhbEdhdGV3YXk+XG4gICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICBmb250RmFtaWx5PVwiaGVhZGluZ1wiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoZWFkaW5nM1wiXG4gICAgICAgICAgICAgIGFzPVwiaDNcIlxuICAgICAgICAgICAgICBtYj17NX1cbiAgICAgICAgICAgICAgbXQ9e2RhdGEgJiYgZGF0YS5pbWFnZXMgJiYgZGF0YS5pbWFnZXMubGVuZ3RoID4gMCA/IDUgOiAwfT5cbiAgICAgICAgICAgICAgUHJvamVjdCBkZXRhaWxzXG4gICAgICAgICAgICAgIHtkYXRhICYmXG4gICAgICAgICAgICAgICAgZGF0YS5wcm9qZWN0RGV0YWlscyAmJlxuICAgICAgICAgICAgICAgIGRhdGEucHJvamVjdERldGFpbHMubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgZGF0YS5wcm9qZWN0RGV0YWlsc1swXS5hcHBsaWNhdGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBocmVmPXtkYXRhLnByb2plY3REZXRhaWxzWzBdLmFwcGxpY2F0aW9ufVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyIG5vb3BlbmVyXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dERlY29yYXRpb246ICdub25lJywgbWFyZ2luTGVmdDogJzhweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxGaUV4dGVybmFsTGluayBzaXplPVwiMThweFwiIGNvbG9yPVwiYmxhY2tcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLnByb2plY3REZXRhaWxzICYmIGRhdGEucHJvamVjdERldGFpbHMubGVuZ3RoICYmIChcbiAgICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICAgICAgICBmbGV4V3JhcD1cIndyYXBcIlxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgICAgICAgd2lkdGg9e1sxLCAyIC8gMywgMV19XG4gICAgICAgICAgICAgICAgbWI9ezEwfVxuICAgICAgICAgICAgICAgIG14PVwiYXV0b1wiPlxuICAgICAgICAgICAgICAgIHtkYXRhICYmXG4gICAgICAgICAgICAgICAgICBkYXRhLnByb2plY3REZXRhaWxzICYmXG4gICAgICAgICAgICAgICAgICBkYXRhLnByb2plY3REZXRhaWxzLmxlbmd0aCAmJlxuICAgICAgICAgICAgICAgICAgZGF0YS5wcm9qZWN0RGV0YWlsc1swXS5iYW5uZXIgJiZcbiAgICAgICAgICAgICAgICAgIGRhdGEucHJvamVjdERldGFpbHNbMF0uYmFubmVyLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtkYXRhLnByb2plY3REZXRhaWxzWzBdLmJhbm5lclswXS51cmx9IG1heEhlaWdodD17MTUwfSAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgICAgYXM9XCJvbFwiXG4gICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXtbMSwgbnVsbCwgbnVsbCwgJzQyJSddfVxuICAgICAgICAgICAgICAgICAgc3g9e3sgcGFkZGluZ0lubGluZVN0YXJ0OiAwIH19PlxuICAgICAgICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICAgICAgYXM9XCJsaVwiXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PXtbJ3NwYWNlLWJldHdlZW4nLCBudWxsLCBudWxsLCAnZmxleC1zdGFydCddfVxuICAgICAgICAgICAgICAgICAgICBweT17Mn1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezF9PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBhcz1cImg0XCIgZm9udFdlaWdodD17NjAwfSB3aWR0aD17MSAvIDJ9PlxuICAgICAgICAgICAgICAgICAgICAgIFJlZ2lvblxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGFzPVwicFwiIHdpZHRoPXsxIC8gMn0+XG4gICAgICAgICAgICAgICAgICAgICAge2NhbWVsQ2FzZUZvcm1hdHRlcihkYXRhLnByb2plY3REZXRhaWxzWzBdLnJlZ2lvbil9XG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgICAgIGFzPVwibGlcIlxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD17WydzcGFjZS1iZXR3ZWVuJywgbnVsbCwgbnVsbCwgJ2ZsZXgtc3RhcnQnXX1cbiAgICAgICAgICAgICAgICAgICAgcHk9ezJ9XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxfT5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgYXM9XCJoNFwiIGZvbnRXZWlnaHQ9ezYwMH0gd2lkdGg9ezEgLyAyfT5cbiAgICAgICAgICAgICAgICAgICAgICBIb3VzZVxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGFzPVwicFwiIHdpZHRoPXsxIC8gMn0+XG4gICAgICAgICAgICAgICAgICAgICAge2RhdGEucHJvamVjdERldGFpbHNbMF0uaG91c2V9XG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgICAgIGFzPVwibGlcIlxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD17WydzcGFjZS1iZXR3ZWVuJywgbnVsbCwgbnVsbCwgJ2ZsZXgtc3RhcnQnXX1cbiAgICAgICAgICAgICAgICAgICAgcHk9ezJ9XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxfT5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgYXM9XCJoNFwiIGZvbnRXZWlnaHQ9ezYwMH0gd2lkdGg9ezEgLyAyfT5cbiAgICAgICAgICAgICAgICAgICAgICBTdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBhcz1cInBcIiB3aWR0aD17MSAvIDJ9PlxuICAgICAgICAgICAgICAgICAgICAgIHtjYW1lbENhc2VGb3JtYXR0ZXIoZGF0YS5wcm9qZWN0RGV0YWlsc1swXS5kZXN0aW5hdGlvblN0YXR1cyl9XG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgICAgIGFzPVwibGlcIlxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD17WydzcGFjZS1iZXR3ZWVuJywgbnVsbCwgbnVsbCwgJ2ZsZXgtc3RhcnQnXX1cbiAgICAgICAgICAgICAgICAgICAgcHk9ezJ9XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxfT5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgYXM9XCJoNFwiIGZvbnRXZWlnaHQ9ezYwMH0gd2lkdGg9ezEgLyAyfT5cbiAgICAgICAgICAgICAgICAgICAgICBEYXRlIHN0YXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBhcz1cInBcIiB3aWR0aD17MSAvIDJ9PlxuICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXREYXRlKGRhdGEucHJvamVjdERldGFpbHNbMF0uZGF0ZVN0YXJ0ZWQpfVxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgICBhcz1cIm9sXCJcbiAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9e1sxLCBudWxsLCBudWxsLCAnNDIlJ119XG4gICAgICAgICAgICAgICAgICBzeD17eyBwYWRkaW5nSW5saW5lU3RhcnQ6IDAgfX0+XG4gICAgICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgICAgICBhcz1cImxpXCJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9e1snc3BhY2UtYmV0d2VlbicsIG51bGwsIG51bGwsICdmbGV4LXN0YXJ0J119XG4gICAgICAgICAgICAgICAgICAgIHB5PXsyfVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MX0+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGFzPVwiaDRcIiBmb250V2VpZ2h0PXs2MDB9IHdpZHRoPXsxIC8gMn0+XG4gICAgICAgICAgICAgICAgICAgICAgVHlwZVxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGFzPVwicFwiIHdpZHRoPXsxIC8gMn0+XG4gICAgICAgICAgICAgICAgICAgICAge2NhbWVsQ2FzZUZvcm1hdHRlcihkYXRhLnByb2plY3REZXRhaWxzWzBdLmRlc3RpbmF0aW9uVHlwZSl9XG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgICAgIGFzPVwibGlcIlxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD17WydzcGFjZS1iZXR3ZWVuJywgbnVsbCwgbnVsbCwgJ2ZsZXgtc3RhcnQnXX1cbiAgICAgICAgICAgICAgICAgICAgcHk9ezJ9XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxfT5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgYXM9XCJoNFwiIGZvbnRXZWlnaHQ9ezYwMH0gd2lkdGg9ezEgLyAyfT5cbiAgICAgICAgICAgICAgICAgICAgICBXYXJwXG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgYXM9XCJwXCIgd2lkdGg9ezEgLyAyfT5cbiAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5wcm9qZWN0RGV0YWlsc1swXS53YXJwICYmIGAvJHtfbG93ZXJDYXNlKGRhdGEucHJvamVjdERldGFpbHNbMF0ud2FycCl9YH1cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICAgICAgYXM9XCJsaVwiXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PXtbJ3NwYWNlLWJldHdlZW4nLCBudWxsLCBudWxsLCAnZmxleC1zdGFydCddfVxuICAgICAgICAgICAgICAgICAgICBweT17Mn1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezF9PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBhcz1cImg0XCIgZm9udFdlaWdodD17NjAwfSB3aWR0aD17MSAvIDJ9PlxuICAgICAgICAgICAgICAgICAgICAgIFByb2plY3QgbGVhZChzKVxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGFzPVwicFwiIHdpZHRoPXsxIC8gMn0+XG4gICAgICAgICAgICAgICAgICAgICAge2RhdGEucHJvamVjdERldGFpbHNbMF0ucHJvamVjdExlYWR9XG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgICAgIGFzPVwibGlcIlxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD17WydzcGFjZS1iZXR3ZWVuJywgbnVsbCwgbnVsbCwgJ2ZsZXgtc3RhcnQnXX1cbiAgICAgICAgICAgICAgICAgICAgcHk9ezJ9XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxfT5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgYXM9XCJoNFwiIGZvbnRXZWlnaHQ9ezYwMH0gd2lkdGg9ezEgLyAyfT5cbiAgICAgICAgICAgICAgICAgICAgICBEYXRlIGNvbXBsZXRlZFxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGFzPVwicFwiIHdpZHRoPXsxIC8gMn0+XG4gICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdERhdGUoZGF0YS5wcm9qZWN0RGV0YWlsc1swXS5kYXRlQ29tcGxldGVkKX1cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtkYXRhICYmIGRhdGEuY29weSAmJiA8UmVkYWN0b3IgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkYXRhLmNvcHkgfX0gLz59XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L1dpa2lMYXlvdXQ+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IGFwb2xsb0NsaWVudCA9IGluaXRpYWxpemVBcG9sbG8oKTtcblxuICBjb25zdCByZWdpb25zID0gYXdhaXQgYXBvbGxvQ2xpZW50LnF1ZXJ5KHtcbiAgICBxdWVyeTogQUxMX1JFR0lPTlNfUVVFUllcbiAgfSk7XG5cbiAgY29uc3QgcGFnZXMgPSByZWdpb25zLmRhdGEuZW50cmllcy5tYXAoKGl0ZW0pID0+IHtcbiAgICByZXR1cm4gaXRlbS5jaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICByZWdpb246IGl0ZW0uc2x1ZyxcbiAgICAgICAgICBkZXN0aW5hdGlvbjogY2hpbGQuc2x1Z1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCBwYXRocyA9IGZsYXR0ZW4ocGFnZXMpO1xuXG4gIHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogdHJ1ZSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICBjb25zdCBhcG9sbG9DbGllbnQgPSBpbml0aWFsaXplQXBvbGxvKCk7XG5cbiAgYXdhaXQgYXBvbGxvQ2xpZW50LnF1ZXJ5KHtcbiAgICBxdWVyeTogREVTVElOQVRJT05fUVVFUlksXG4gICAgdmFyaWFibGVzOiB7IHNsdWc6IHBhcmFtcy5kZXN0aW5hdGlvbiB9XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGluaXRpYWxBcG9sbG9TdGF0ZTogYXBvbGxvQ2xpZW50LmNhY2hlLmV4dHJhY3QoKSxcbiAgICAgIHNsdWc6IHBhcmFtcy5kZXN0aW5hdGlvblxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogMVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBEZXN0aW5hdGlvblBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9