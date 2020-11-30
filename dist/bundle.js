/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/script.js */ "./src/js/script.js");


/***/ }),

/***/ "./src/js/Checker.js":
/*!***************************!*\
  !*** ./src/js/Checker.js ***!
  \***************************/
/*! namespace exports */
/*! export Checkers [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Checkers": () => /* binding */ Checkers
/* harmony export */ });
class Checkers {
    constructor(color, field) {
        this.color = color;
        this.field = field;
        this.pos = field.dataset.pos;
        this.active = false;
        this.queen = false;
    }

    move() {}

    makeActive() {
        this.active = true;
        this.field.firstChild.style.border = "2px solid blue";
    }

    makePassive() {
        this.active = false;
        this.field.firstChild.style.border = "none";
    }

    static makePassiveAll(arr) {
        arr.forEach(item => {
            item.makePassive();
        });
    }

    static getField(arr, eventTarget) {
        return arr.find(item => {
            return (item.field == eventTarget || item.field == eventTarget.parentNode);
        });
    }
}

/***/ }),

/***/ "./src/js/board.js":
/*!*************************!*\
  !*** ./src/js/board.js ***!
  \*************************/
/*! namespace exports */
/*! export board [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "board": () => /* binding */ board
/* harmony export */ });
const board = {
    fields: document.querySelectorAll('.board_black'),

    gameBoard: document.querySelector('.board'),

    startPosWhite: [
        'a1', 'c1', 'e1', 'g1',
        'b2', 'd2', 'f2', 'h2',
        'a3', 'c3', 'e3', 'g3',
    ],
    startPosBlack: [
        'b8', 'd8', 'f8', 'h8',
        'a7', 'c7', 'e7', 'g7',
        'b6', 'd6', 'f6', 'h6'
    ],

    init() {
        for (let field of this.fields) {
            if (this.startPosWhite.includes(field.dataset.pos)) {
                field.addChecker('white');
            } else
            if (this.startPosBlack.includes(field.dataset.pos)) {
                field.addChecker('black');
            } else {
                field.removeChecker('none');
            }
        }
    },
}

for (let field of board.fields) {
    field.removeChecker = function () {
        field.innerHTML = `<div class="checker checker_none" data-color="none"></div>`;
    }

    field.addChecker = function (color) {
        field.innerHTML = `<div class="checker checker_${color}" data-color="${color}"></div>`;
    }
}

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board.js */ "./src/js/board.js");
/* harmony import */ var _Checker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checker.js */ "./src/js/Checker.js");
const fieldArr = [];



_board_js__WEBPACK_IMPORTED_MODULE_0__.board.init();

fillArr(fieldArr, _board_js__WEBPACK_IMPORTED_MODULE_0__.board.fields);

_board_js__WEBPACK_IMPORTED_MODULE_0__.board.gameBoard.addEventListener('click', function Handler(event) {
    let checkerObj = _Checker_js__WEBPACK_IMPORTED_MODULE_1__.Checkers.getField(fieldArr, event.target);
    if (checkerObj && checkerObj.color != "none") {
        if (!checkerObj.active) {
            _Checker_js__WEBPACK_IMPORTED_MODULE_1__.Checkers.makePassiveAll(fieldArr);
            checkerObj.makeActive();
        } else {
            checkerObj.makePassive();
        }
    }
});

function fillArr(arr, fields) {
    for (let field of fields) {
        if (field.firstChild) {
            let color = field.firstChild.dataset.color;
            arr.push(new _Checker_js__WEBPACK_IMPORTED_MODULE_1__.Checkers(color, field));
        }
    }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/app.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map