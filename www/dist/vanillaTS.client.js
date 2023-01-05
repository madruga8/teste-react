(self["webpackChunkmy_project"] = self["webpackChunkmy_project"] || []).push([["vanillaTS.client"],{

/***/ "./src/vanillaTS.client.ts":
/*!*********************************!*\
  !*** ./src/vanillaTS.client.ts ***!
  \*********************************/
/***/ (() => {

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
        // alert("renderizo")
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
        },
    };
}
const counter = Counter();
document.body.appendChild(counter.render());


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/vanillaTS.client.ts"));
/******/ }
]);
//# sourceMappingURL=vanillaTS.client.js.map