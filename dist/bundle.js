/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\r\n    const dropdownCurrent = document.querySelector(\".dropdown-current\");\r\n    const dropdownList = document.querySelector(\".dropdown-list\");\r\n\r\n    dropdownCurrent.addEventListener(\"click\", function () {\r\n        dropdownList.classList.toggle(\"dropdown-list--hidden\");\r\n    });\r\n});\r\n\r\ndocument.addEventListener('DOMContentLoaded', function() {\r\n    const menuButton = document.querySelector('.menu-button');\r\n    const menu = document.querySelector('.header-range__buttons');\r\n\r\n    menuButton.addEventListener('click', function() {\r\n        menu.classList.toggle('active');\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/script.js"]();
/******/ 	
/******/ })()
;