"use strict";
(self["webpackChunkmy_project"] = self["webpackChunkmy_project"] || []).push([["vanilla.client"],{

/***/ "./src/vanilla.client.js":
/*!*******************************!*\
  !*** ./src/vanilla.client.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
function Counter() {
  let count = 0;
  const div = document.createElement('div');
  const p = document.createElement('p');
  const button = document.createElement('button');
  button.textContent = 'Click me';
  button.addEventListener('click', () => {
    count++;
    render();
  });
  div.appendChild(p);
  div.appendChild(button);
  function render() {
    p.textContent = `You clicked ${count} times`;
  }
  return {
    increment: () => {
      count++;
      render();
    },
    getCount: () => {
      return count;
    },
    render: () => {
      return div;
    }
  };
}
const counter = Counter();
document.body.appendChild(counter.render());

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/vanilla.client.js"));
/******/ }
]);
//# sourceMappingURL=vanilla.client.js.map