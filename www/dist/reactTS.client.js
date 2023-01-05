"use strict";
(self["webpackChunkmy_project"] = self["webpackChunkmy_project"] || []).push([["reactTS.client"],{

/***/ "./src/reactTS.client.tsx":
/*!********************************!*\
  !*** ./src/reactTS.client.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Counter": () => (/* binding */ Counter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");


function Counter() {
    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null,
            "You clicked ",
            count,
            " times"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { onClick: () => setCount(count + 1) }, "Click me")));
}
// ReactDOM.render(<Counter />, document.body);
const root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById('root'));
root.render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Counter, null));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor.react-dom","vendor.react","vendor.scheduler"], () => (__webpack_exec__("./src/reactTS.client.tsx")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=reactTS.client.js.map