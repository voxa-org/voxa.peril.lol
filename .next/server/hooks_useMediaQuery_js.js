"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "hooks_useMediaQuery_js";
exports.ids = ["hooks_useMediaQuery_js"];
exports.modules = {

/***/ "./hooks/useMediaQuery.js":
/*!********************************!*\
  !*** ./hooks/useMediaQuery.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useMediaQuery = (query)=>{\n    const mediaMatch = window.matchMedia(query);\n    const [matches, setMatches] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(mediaMatch.matches);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const handler = (e)=>setMatches(e.matches);\n        mediaMatch.addListener(handler);\n        return ()=>mediaMatch.removeListener(handler);\n    });\n    return matches;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMediaQuery);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VNZWRpYVF1ZXJ5LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QztBQUU1QyxNQUFNRSxnQkFBZ0IsQ0FBQ0M7SUFDckIsTUFBTUMsYUFBYUMsT0FBT0MsVUFBVSxDQUFDSDtJQUNyQyxNQUFNLENBQUNJLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUNHLFdBQVdHLE9BQU87SUFFekRQLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVMsVUFBVSxDQUFDQyxJQUFNRixXQUFXRSxFQUFFSCxPQUFPO1FBQzNDSCxXQUFXTyxXQUFXLENBQUNGO1FBQ3ZCLE9BQU8sSUFBTUwsV0FBV1EsY0FBYyxDQUFDSDtJQUN6QztJQUNBLE9BQU9GO0FBQ1Q7QUFFQSxpRUFBZUwsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2hvb2tzL3VzZU1lZGlhUXVlcnkuanM/YjU2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCB1c2VNZWRpYVF1ZXJ5ID0gKHF1ZXJ5KSA9PiB7XG4gIGNvbnN0IG1lZGlhTWF0Y2ggPSB3aW5kb3cubWF0Y2hNZWRpYShxdWVyeSk7XG4gIGNvbnN0IFttYXRjaGVzLCBzZXRNYXRjaGVzXSA9IHVzZVN0YXRlKG1lZGlhTWF0Y2gubWF0Y2hlcyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVyID0gKGUpID0+IHNldE1hdGNoZXMoZS5tYXRjaGVzKTtcbiAgICBtZWRpYU1hdGNoLmFkZExpc3RlbmVyKGhhbmRsZXIpO1xuICAgIHJldHVybiAoKSA9PiBtZWRpYU1hdGNoLnJlbW92ZUxpc3RlbmVyKGhhbmRsZXIpO1xuICB9KTtcbiAgcmV0dXJuIG1hdGNoZXM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VNZWRpYVF1ZXJ5O1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlTWVkaWFRdWVyeSIsInF1ZXJ5IiwibWVkaWFNYXRjaCIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwic2V0TWF0Y2hlcyIsImhhbmRsZXIiLCJlIiwiYWRkTGlzdGVuZXIiLCJyZW1vdmVMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useMediaQuery.js\n");

/***/ })

};
;