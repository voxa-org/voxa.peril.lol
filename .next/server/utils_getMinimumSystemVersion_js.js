"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "utils_getMinimumSystemVersion_js";
exports.ids = ["utils_getMinimumSystemVersion_js"];
exports.modules = {

/***/ "./utils/getMinimumSystemVersion.js":
/*!******************************************!*\
  !*** ./utils/getMinimumSystemVersion.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// utils/getMinimumSystemVersion.js\nfunction getMinimumSystemVersion(str) {\n    // If `str` is null or undefined, return null (or handle as you prefer).\n    if (!str) {\n        return null;\n    }\n    // Regex looks for something like: minimumSystemVersion=12.3\n    const regex = /minimumSystemVersion=(\\d+\\.\\d+)/;\n    const match = str.match(regex);\n    // If there's no match, return null; otherwise, return the version (e.g., \"12.3\")\n    return match ? match[1] : null;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMinimumSystemVersion);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9nZXRNaW5pbXVtU3lzdGVtVmVyc2lvbi5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsbUNBQW1DO0FBRW5DLFNBQVNBLHdCQUF3QkMsR0FBRztJQUNsQyx3RUFBd0U7SUFDeEUsSUFBSSxDQUFDQSxLQUFLO1FBQ1IsT0FBTztJQUNUO0lBRUEsNERBQTREO0lBQzVELE1BQU1DLFFBQVE7SUFDZCxNQUFNQyxRQUFRRixJQUFJRSxLQUFLLENBQUNEO0lBRXhCLGlGQUFpRjtJQUNqRixPQUFPQyxRQUFRQSxLQUFLLENBQUMsRUFBRSxHQUFHO0FBQzVCO0FBRUEsaUVBQWVILHVCQUF1QkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3V0aWxzL2dldE1pbmltdW1TeXN0ZW1WZXJzaW9uLmpzPzQwNTciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gdXRpbHMvZ2V0TWluaW11bVN5c3RlbVZlcnNpb24uanNcblxuZnVuY3Rpb24gZ2V0TWluaW11bVN5c3RlbVZlcnNpb24oc3RyKSB7XG4gIC8vIElmIGBzdHJgIGlzIG51bGwgb3IgdW5kZWZpbmVkLCByZXR1cm4gbnVsbCAob3IgaGFuZGxlIGFzIHlvdSBwcmVmZXIpLlxuICBpZiAoIXN0cikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gUmVnZXggbG9va3MgZm9yIHNvbWV0aGluZyBsaWtlOiBtaW5pbXVtU3lzdGVtVmVyc2lvbj0xMi4zXG4gIGNvbnN0IHJlZ2V4ID0gL21pbmltdW1TeXN0ZW1WZXJzaW9uPShcXGQrXFwuXFxkKykvO1xuICBjb25zdCBtYXRjaCA9IHN0ci5tYXRjaChyZWdleCk7XG5cbiAgLy8gSWYgdGhlcmUncyBubyBtYXRjaCwgcmV0dXJuIG51bGw7IG90aGVyd2lzZSwgcmV0dXJuIHRoZSB2ZXJzaW9uIChlLmcuLCBcIjEyLjNcIilcbiAgcmV0dXJuIG1hdGNoID8gbWF0Y2hbMV0gOiBudWxsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRNaW5pbXVtU3lzdGVtVmVyc2lvbjsiXSwibmFtZXMiOlsiZ2V0TWluaW11bVN5c3RlbVZlcnNpb24iLCJzdHIiLCJyZWdleCIsIm1hdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/getMinimumSystemVersion.js\n");

/***/ })

};
;