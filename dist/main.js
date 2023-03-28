/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0px;\n  padding: 0px;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\np {\n  margin-bottom: 8px;\n}\n\n.content-container {\n  display: flex;\n  flex-direction: column;\n  max-width: 100vw;\n}\n\n.toggle-visibility {\n  display: none;\n}\n\n.nav {\n  display: flex;\n  align-items: center;\n  position: sticky;\n  width: 100%;\n  margin: auto;\n  height: 56px;\n  top: 0px;\n  background-color: rgb(69, 70, 73);\n  color: white;\n}\n\n.nav-h3 {\n  padding-left: 25px;\n}\n\n.top-forms-container{\n  display: flex;\n  padding-top: 15px;\n}\n\n.form-div {\n  display: flex;\n  flex-direction: column;\n  margin: 0px 20px;\n}\n\n.input-title {\n  margin-top: 10px;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  max-width: calc(200px - 15px);\n}\n\n.form-button {\n  width: 100px;\n  height: 25px;\n  padding: 2px;\n  background-color: rgb(69, 70, 73);\n  color: white;\n  font-weight: bold;\n  margin-top: 10px;\n}\n\n.form-button:hover {\n  background-color: rgba(69, 70, 73, 0.664);\n}\n\n.form-button:active {\n  background-color: rgba(83, 96, 134, 0.664);\n}\n\n.content {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  align-self: center;\n  min-width: calc(100% - 50px);\n  max-width: calc(100% - 72px);\n  min-height: calc(100vh - 112px);\n  padding: 0px 25px;\n  background-color: rgba(199, 193, 162, 0.349);\n}\n\nh2 {\n  margin: 15px 20px\n}\n\n.project-list, .todo-list {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-self: center;\n  align-items: center;\n  width: 90%;\n  border-top: 2px solid rgba(199, 193, 162, 0.692);\n}\n\n.project, .todo-item {\n  display: grid;\n  grid-template-rows: repeat(auto-fit, minmax(0.1fr, 1fr));\n  grid-template-columns: 1fr 0.05fr;\n  background-color: rgb(255, 255, 255);\n  border: 1px solid black;\n  margin: 15px 15px;\n  padding: 20px;\n  width: 90%;\n}\n\n.todo-content, .project-content {\n  word-wrap: break-word;\n  min-width: 180px;\n  max-width: 80%;\n}\n\n.remove-button {\n  grid-row: 1;\n  grid-column: 2;\n  justify-self: end;\n  background-color: rgb(69, 70, 73);\n  color: white;\n  font-weight: bold;\n  width: 25px;\n  height: 25px;\n  margin-top: 10px;\n}\n\n.remove-button:hover {\n  background-color: rgb(255, 0, 0);\n}\n\n.remove-button:active {\n  background-color: rgba(182, 36, 31, 0.808);\n}\n\n.project-todo-div{\n  grid-row: 2;\n  min-width: 200px;\n  max-width: 90%;\n  margin: 5px 0px;\n  padding: 5px 0px;\n  border-top: 1px solid rgb(69, 70, 73);\n}\n\n.project-todo-item {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-top: 5px;\n  padding: 5px;\n  border-top: 1px dotted rgb(69, 70, 73);\n}\n\n.project-todo-form {\n  grid-row: 3;\n  grid-column: 1;\n  max-width: 200px;\n}\n\n.project-todo-button-container {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n}\n\n.priority-none {\n  font-weight: bold;\n}\n\n.priority-highest {\n  color: red;\n  font-weight: bold;\n}\n\n.priority-high {\n  color: orange;\n  font-weight: bold;\n}\n\n.priority-middle {\n  color: rgb(0, 173, 0);\n  font-weight: bold;\n}\n\n.priority-low {\n  color: blue;\n  font-weight: bold;\n}\n\n.footer {\n  display: flex;\n  align-items: center;\n  height: 56px;\n  background-color: rgb(69, 70, 73);\n  color: rgb(196, 196, 196);\n}\n\n.footer-p {\n  padding-left: 25px;\n}\n\n@media (max-width: 480px) {\n\n  .top-forms-container {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .project, .todo-item {\n    display: flex;\n    flex-direction: column;\n    margin: 15px 0px;\n    padding: 10px 12px;\n  }\n\n  .project-todo-item {\n    display: flex;\n    flex-direction: column;\n    padding: 0px;\n  }\n  \n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,QAAQ;EACR,iCAAiC;EACjC,YAAY;AACd;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,iCAAiC;EACjC,YAAY;EACZ,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,aAAa;EACb,eAAe;EACf,sBAAsB;EACtB,kBAAkB;EAClB,4BAA4B;EAC5B,4BAA4B;EAC5B,+BAA+B;EAC/B,iBAAiB;EACjB,4CAA4C;AAC9C;;AAEA;EACE;AACF;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,eAAe;EACf,kBAAkB;EAClB,mBAAmB;EACnB,UAAU;EACV,gDAAgD;AAClD;;AAEA;EACE,aAAa;EACb,wDAAwD;EACxD,iCAAiC;EACjC,oCAAoC;EACpC,uBAAuB;EACvB,iBAAiB;EACjB,aAAa;EACb,UAAU;AACZ;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,iBAAiB;EACjB,iCAAiC;EACjC,YAAY;EACZ,iBAAiB;EACjB,WAAW;EACX,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,qCAAqC;AACvC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,eAAe;EACf,YAAY;EACZ,sCAAsC;AACxC;;AAEA;EACE,WAAW;EACX,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,iCAAiC;EACjC,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;EAEE;IACE,aAAa;IACb,sBAAsB;EACxB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,kBAAkB;EACpB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,YAAY;EACd;;AAEF","sourcesContent":["* {\n  margin: 0px;\n  padding: 0px;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\np {\n  margin-bottom: 8px;\n}\n\n.content-container {\n  display: flex;\n  flex-direction: column;\n  max-width: 100vw;\n}\n\n.toggle-visibility {\n  display: none;\n}\n\n.nav {\n  display: flex;\n  align-items: center;\n  position: sticky;\n  width: 100%;\n  margin: auto;\n  height: 56px;\n  top: 0px;\n  background-color: rgb(69, 70, 73);\n  color: white;\n}\n\n.nav-h3 {\n  padding-left: 25px;\n}\n\n.top-forms-container{\n  display: flex;\n  padding-top: 15px;\n}\n\n.form-div {\n  display: flex;\n  flex-direction: column;\n  margin: 0px 20px;\n}\n\n.input-title {\n  margin-top: 10px;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  max-width: calc(200px - 15px);\n}\n\n.form-button {\n  width: 100px;\n  height: 25px;\n  padding: 2px;\n  background-color: rgb(69, 70, 73);\n  color: white;\n  font-weight: bold;\n  margin-top: 10px;\n}\n\n.form-button:hover {\n  background-color: rgba(69, 70, 73, 0.664);\n}\n\n.form-button:active {\n  background-color: rgba(83, 96, 134, 0.664);\n}\n\n.content {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  align-self: center;\n  min-width: calc(100% - 50px);\n  max-width: calc(100% - 72px);\n  min-height: calc(100vh - 112px);\n  padding: 0px 25px;\n  background-color: rgba(199, 193, 162, 0.349);\n}\n\nh2 {\n  margin: 15px 20px\n}\n\n.project-list, .todo-list {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-self: center;\n  align-items: center;\n  width: 90%;\n  border-top: 2px solid rgba(199, 193, 162, 0.692);\n}\n\n.project, .todo-item {\n  display: grid;\n  grid-template-rows: repeat(auto-fit, minmax(0.1fr, 1fr));\n  grid-template-columns: 1fr 0.05fr;\n  background-color: rgb(255, 255, 255);\n  border: 1px solid black;\n  margin: 15px 15px;\n  padding: 20px;\n  width: 90%;\n}\n\n.todo-content, .project-content {\n  word-wrap: break-word;\n  min-width: 180px;\n  max-width: 80%;\n}\n\n.remove-button {\n  grid-row: 1;\n  grid-column: 2;\n  justify-self: end;\n  background-color: rgb(69, 70, 73);\n  color: white;\n  font-weight: bold;\n  width: 25px;\n  height: 25px;\n  margin-top: 10px;\n}\n\n.remove-button:hover {\n  background-color: rgb(255, 0, 0);\n}\n\n.remove-button:active {\n  background-color: rgba(182, 36, 31, 0.808);\n}\n\n.project-todo-div{\n  grid-row: 2;\n  min-width: 200px;\n  max-width: 90%;\n  margin: 5px 0px;\n  padding: 5px 0px;\n  border-top: 1px solid rgb(69, 70, 73);\n}\n\n.project-todo-item {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-top: 5px;\n  padding: 5px;\n  border-top: 1px dotted rgb(69, 70, 73);\n}\n\n.project-todo-form {\n  grid-row: 3;\n  grid-column: 1;\n  max-width: 200px;\n}\n\n.project-todo-button-container {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n}\n\n.priority-none {\n  font-weight: bold;\n}\n\n.priority-highest {\n  color: red;\n  font-weight: bold;\n}\n\n.priority-high {\n  color: orange;\n  font-weight: bold;\n}\n\n.priority-middle {\n  color: rgb(0, 173, 0);\n  font-weight: bold;\n}\n\n.priority-low {\n  color: blue;\n  font-weight: bold;\n}\n\n.footer {\n  display: flex;\n  align-items: center;\n  height: 56px;\n  background-color: rgb(69, 70, 73);\n  color: rgb(196, 196, 196);\n}\n\n.footer-p {\n  padding-left: 25px;\n}\n\n@media (max-width: 480px) {\n\n  .top-forms-container {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .project, .todo-item {\n    display: flex;\n    flex-direction: column;\n    margin: 15px 0px;\n    padding: 10px 12px;\n  }\n\n  .project-todo-item {\n    display: flex;\n    flex-direction: column;\n    padding: 0px;\n  }\n  \n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/form-toggle.js":
/*!************************************!*\
  !*** ./src/modules/form-toggle.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formToggle": () => (/* binding */ formToggle)
/* harmony export */ });


const formToggle = (function() {

    const showToDoForm = document.getElementById('show-todo');
    const hideToDoForm = document.getElementById('hide-todo');
    const toDoForm = document.getElementById('todo-form')
    const showProjectForm = document.getElementById('show-project');
    const hideProjectForm = document.getElementById('hide-project');
    const ProjectForm = document.getElementById('project-form')
    showToDoForm.addEventListener('click', (e) => showForm(showToDoForm, hideToDoForm, toDoForm, e));
    hideToDoForm.addEventListener('click', (e) => hideForm(showToDoForm, hideToDoForm, toDoForm, e));
    showProjectForm.addEventListener('click', (e) => showForm(showProjectForm, hideProjectForm, ProjectForm, e));
    hideProjectForm.addEventListener('click', (e) => hideForm(showProjectForm, hideProjectForm, ProjectForm, e));
    //The show and hide buttons for project todos, and edits for both projects and todos are located in their respective dom file

    function showForm(showBtn, hideBtn, form) {
        showBtn.classList.add('toggle-visibility');
        hideBtn.classList.remove('toggle-visibility');
        form.classList.remove('toggle-visibility');
    }

    function hideForm(showBtn, hideBtn, form) {
        hideBtn.classList.add('toggle-visibility');
        showBtn.classList.remove('toggle-visibility');
        form.classList.add('toggle-visibility');
    }

    return { showForm, hideForm }
})();

/***/ }),

/***/ "./src/modules/local-storage.js":
/*!**************************************!*\
  !*** ./src/modules/local-storage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearStorage": () => (/* binding */ clearStorage),
/* harmony export */   "retrieveSavedProjects": () => (/* binding */ retrieveSavedProjects),
/* harmony export */   "retrieveSavedToDos": () => (/* binding */ retrieveSavedToDos),
/* harmony export */   "saveProjectsToStorage": () => (/* binding */ saveProjectsToStorage),
/* harmony export */   "saveToDosToStorage": () => (/* binding */ saveToDosToStorage)
/* harmony export */ });


function saveProjectsToStorage(projectArray) {
  const projectsToSave = JSON.stringify(projectArray);
  localStorage.setItem('projects', projectsToSave);
}

function saveToDosToStorage(todoArray) {
  const todosToSave = JSON.stringify(todoArray);
  localStorage.setItem('todos', todosToSave);
}

function retrieveSavedProjects() {
  if (localStorage.getItem('projects') !== 'undefined') {
    const savedProjectArray = localStorage.getItem('projects');
    return JSON.parse(savedProjectArray);
  } else {
    return null;
  }
}

function retrieveSavedToDos() {
  if (localStorage.getItem('todos') !== 'undefined') {
    const savedToDoArray = localStorage.getItem('todos');
    return JSON.parse(savedToDoArray);
  } else {
    return null;
  }
}


function clearStorage() {
  localStorage.clear();
}


/***/ }),

/***/ "./src/modules/projects/project-dom.js":
/*!*********************************************!*\
  !*** ./src/modules/projects/project-dom.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeProjectDOM": () => (/* binding */ removeProjectDOM),
/* harmony export */   "removeProjectToDoDOM": () => (/* binding */ removeProjectToDoDOM),
/* harmony export */   "showProjects": () => (/* binding */ showProjects)
/* harmony export */ });
/* harmony import */ var _project_todo_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-todo-form */ "./src/modules/projects/project-todo-form.js");
/* harmony import */ var _project_edit_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-edit-form */ "./src/modules/projects/project-edit-form.js");
/* harmony import */ var _project_todo_edit_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-todo-edit-form */ "./src/modules/projects/project-todo-edit-form.js");
/* harmony import */ var _form_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../form-toggle */ "./src/modules/form-toggle.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project */ "./src/modules/projects/project.js");

;





const allProjectsDiv = document.getElementById('project-list');

function showProjects(array) {
  resetProjects();
  array.forEach(function(project) {

    const projectContainer = document.createElement('div');
    projectContainer.dataset.index = project.index;
    projectContainer.id = 'project' + `${project.index}`;
    projectContainer.classList.add('project');

    const projectToDoDiv = document.createElement('div');
    projectToDoDiv.classList.add('project-todo-div');
    projectToDoDiv.innerText = `To Dos:\n`;

    const projectRemoveBtn = document.createElement('button');
    projectRemoveBtn.id = 'project-remove' +`${project.index}`;
    projectRemoveBtn.innerText = 'X';
    projectRemoveBtn.classList.add('remove-button');

    const projectContents = document.createElement('div');
    projectContents.classList.add('project-content');

    const projectTitle = document.createElement('p');
    projectTitle.textContent = `${project.title}`;
    projectTitle.classList.add(`priority-${project.priority}`);

    const projectDesc = document.createElement('p');
    projectDesc.textContent = `${project.description}\n`;

    const projectDate = document.createElement('p');
    const date = project.dueDate;
    projectDate.textContent = `Due by: ${date}`;

    const projectPriority = document.createElement('p');
    const projectPriorityCapitalized = project.priority[0].toUpperCase() + project.priority.slice(1);
    projectPriority.textContent = `Priority: ${projectPriorityCapitalized}`;

    const projectEditForm = (0,_project_edit_form__WEBPACK_IMPORTED_MODULE_1__.createProjectForm)(project, project.index);
      
    projectContents.append(projectTitle, projectDesc, projectDate, projectPriority, projectEditForm);
    projectContainer.append(projectContents, projectRemoveBtn);

    const toDoForm = (0,_project_todo_form__WEBPACK_IMPORTED_MODULE_0__.createToDoForm)(project.index);
    projectContainer.append(projectToDoDiv, toDoForm);

    const showProjectEditButton = document.createElement('button');
    showProjectEditButton.id = 'project-edit-show' + `${project.index}`;
    showProjectEditButton.textContent = 'Edit Project';
    showProjectEditButton.classList.add('form-button');

    const hideProjectEditButton = document.createElement('button');
    hideProjectEditButton.id = 'project-edit-hide' + `${project.index}`;
    hideProjectEditButton.textContent = 'Hide Form';
    hideProjectEditButton.classList.add('form-button', 'toggle-visibility');

    projectContainer.append(showProjectEditButton, hideProjectEditButton);

    const showProjectToDoButton = document.createElement('button');
    showProjectToDoButton.id = 'project-todo-show' + `${project.index}`;
    showProjectToDoButton.classList.add('form-button');
    showProjectToDoButton.textContent = 'New To Do';

    const hideProjectToDoButton = document.createElement('button');
    hideProjectToDoButton.id = 'project-todo-hide' + `${project.index}`;
    hideProjectToDoButton.classList.add('form-button', 'toggle-visibility');
    hideProjectToDoButton.textContent = 'Hide Form';

    showProjectEditButton.addEventListener('click', (e) => _form_toggle__WEBPACK_IMPORTED_MODULE_3__.formToggle.showForm(showProjectEditButton, hideProjectEditButton, projectEditForm, e));
    showProjectEditButton.addEventListener('click', (e) => _project__WEBPACK_IMPORTED_MODULE_4__.project.assignProjectEditBtns(project));
    hideProjectEditButton.addEventListener('click', (e) => _form_toggle__WEBPACK_IMPORTED_MODULE_3__.formToggle.hideForm(showProjectEditButton, hideProjectEditButton, projectEditForm, e));

    showProjectToDoButton.addEventListener('click', (e) => _form_toggle__WEBPACK_IMPORTED_MODULE_3__.formToggle.showForm(showProjectToDoButton, hideProjectToDoButton, toDoForm, e));
    hideProjectToDoButton.addEventListener('click', (e) => _form_toggle__WEBPACK_IMPORTED_MODULE_3__.formToggle.hideForm(showProjectToDoButton, hideProjectToDoButton, toDoForm, e));
      
    project.toDos.forEach(function(toDo) {
      const toDoDiv = document.createElement('div');
      toDoDiv.id = 'project-todo-div' + `${project.index}` + `${toDo.index}`;
      toDoDiv.classList.add('project-todo-item');
      toDoDiv.dataset.index = `${project.index}${toDo.index}`;

      const toDoContents = document.createElement('div');
      toDoContents.classList.add('todo-content');

      const projectToDoBtnContainer = document.createElement('div');
      projectToDoBtnContainer.classList.add('project-todo-button-container');

      const toDoTitle = document.createElement('p');
      toDoTitle.textContent = `${toDo.title}`;
      toDoTitle.classList.add(`priority-${toDo.priority}`);

      const toDoDesc = document.createElement('p');
      toDoDesc.textContent = `${toDo.description}`;

      const toDoDate = document.createElement('p');
      toDoDate.textContent = `Due by: ${toDo.dueDate}`;

      const toDoPriority = document.createElement('p');
      const priorityCapitalized = toDo.priority[0].toUpperCase() + toDo.priority.slice(1);
      toDoPriority.textContent = `Priority: ${priorityCapitalized}`;

      const toDoRemoveBtn = document.createElement('button');
      toDoRemoveBtn.id = 'project-todo-remove' + `${project.index}` + `${toDo.index}`;
      toDoRemoveBtn.classList.add('remove-button');
      toDoRemoveBtn.innerText = 'X';

      const projectToDoEditForm = (0,_project_todo_edit_form__WEBPACK_IMPORTED_MODULE_2__.editProjectToDoForm)(toDo.index, project);

      const showProjectToDoEditButton = document.createElement('button');
      showProjectToDoEditButton.id = 'todo-edit-show' + `${project.index}` + `${toDo.index}`;
      showProjectToDoEditButton.textContent = 'Edit To Do';
      showProjectToDoEditButton.classList.add('form-button');

      const hideProjectToDoEditButton = document.createElement('button');
      hideProjectToDoEditButton.id = 'todo-edit-hide' + `${project.index}` + `${toDo.index}`;
      hideProjectToDoEditButton.textContent = 'Hide Form';
      hideProjectToDoEditButton.classList.add('form-button', 'toggle-visibility');

      showProjectToDoEditButton.addEventListener('click', (e) => _form_toggle__WEBPACK_IMPORTED_MODULE_3__.formToggle.showForm(showProjectToDoEditButton, hideProjectToDoEditButton, projectToDoEditForm, e));
      showProjectToDoEditButton.addEventListener('click', (e) => _project__WEBPACK_IMPORTED_MODULE_4__.project.assignProjectToDoEditBtns(toDo, project));
      hideProjectToDoEditButton.addEventListener('click', (e) => _form_toggle__WEBPACK_IMPORTED_MODULE_3__.formToggle.hideForm(showProjectToDoEditButton, hideProjectToDoEditButton, projectToDoEditForm, e));

      toDoContents.append(toDoTitle, toDoDesc, toDoDate, toDoPriority, projectToDoEditForm);
      projectToDoBtnContainer.append(toDoRemoveBtn, showProjectToDoEditButton, hideProjectToDoEditButton)
      toDoDiv.append(toDoContents, projectToDoBtnContainer);
      projectToDoDiv.append(toDoDiv);
    })

    projectToDoDiv.append(showProjectToDoButton, hideProjectToDoButton);
    allProjectsDiv.append(projectContainer);
  })
}

function removeProjectDOM(projectIndex) {
  const projectDiv = document.getElementById('project' + `${projectIndex}`);
  projectDiv.remove();
}

function removeProjectToDoDOM(projectIndex, toDoIndex) {
  const toDoDiv = document.getElementById('project-todo-div' + `${projectIndex}` + `${toDoIndex}`);
  toDoDiv.remove();
}

function resetProjects() {
  allProjectsDiv.innerText = '';
}


/***/ }),

/***/ "./src/modules/projects/project-edit-form.js":
/*!***************************************************!*\
  !*** ./src/modules/projects/project-edit-form.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProjectForm": () => (/* binding */ createProjectForm)
/* harmony export */ });


  function createProjectForm(project, projectIndex) {
    const newForm = document.createElement('form');
    newForm.classList.add("toggle-visibility");
    newForm.dataset.index = projectIndex;
    newForm.id = 'project-edit-form' + `${projectIndex}`;

    const title = document.createElement('textarea');
    const titleLabel = document.createElement('div');
    title.id = 'project-title' + `${projectIndex}`;
    titleLabel.innerText = 'Title: '
    title.value = project.title;
    newForm.append(titleLabel, title);

    const description = document.createElement('textarea');
    const descLabel = document.createElement('div');
    description.id = 'project-description' + `${projectIndex}`;
    descLabel.innerText = 'Description: ';
    description.value = project.description;
    newForm.append(descLabel, description);

    const dueDate = document.createElement('input');
    const dateLabel = document.createElement('div');
    dueDate.id = 'project-due-date' + `${projectIndex}`;
    dateLabel.innerText = 'Due by: '
    dueDate.type = 'datetime-local';
    newForm.append(dateLabel, dueDate);

    const priorityLabel = document.createElement('label');
    priorityLabel.for = 'project-priority';
    priorityLabel.innerText = 'Priority';

    const priorityTypes = ['none', 'highest', 'high', 'middle', 'low'];
    const prioritySelect = document.createElement('select');
    prioritySelect.id = 'project-priority' + `${projectIndex}`;
    prioritySelect.name = 'priorities';
    priorityTypes.forEach(function(type) {
      const priorityOption = document.createElement('option');
      priorityOption.value = type;
      priorityOption.text = type[0].toUpperCase() + type.slice(1);
      prioritySelect.append(priorityOption);
    })
    prioritySelect.value = project.priority;

    newForm.append(dueDate, priorityLabel, prioritySelect);

    const submit = document.createElement('input');
    submit.type = 'submit';
    submit.name = 'submit';
    submit.id = 'project-submit-edit' + `${projectIndex}`;
    submit.classList.add('form-button');
    newForm.append(submit);

    return newForm;
  }

/***/ }),

/***/ "./src/modules/projects/project-todo-edit-form.js":
/*!********************************************************!*\
  !*** ./src/modules/projects/project-todo-edit-form.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editProjectToDoForm": () => (/* binding */ editProjectToDoForm)
/* harmony export */ });


  function editProjectToDoForm(projectToDoIndex, project) {

    const projectIndex = project.index;
    const newForm = document.createElement('form');
    newForm.classList.add("toggle-visibility");
    newForm.dataset.index = projectToDoIndex;
    newForm.id = 'project-todo-edit-form' + `${projectIndex}` + `${projectToDoIndex}`;

    const title = document.createElement('textarea');
    const titleLabel = document.createElement('div');
    title.id = 'project-todo-title' + `${projectIndex}` + `${projectToDoIndex}`;
    titleLabel.innerText = 'Title: '
    title.value = project.toDos[projectToDoIndex].title;
    newForm.append(titleLabel, title);

    const description = document.createElement('textarea');
    const descLabel = document.createElement('div');
    description.id = 'project-todo-description' +`${projectIndex}` +  `${projectToDoIndex}`;
    descLabel.innerText = 'Title: ';
    description.value = project.toDos[projectToDoIndex].description;
    newForm.append(descLabel, description);

    const dueDate = document.createElement('input');
    const dateLabel = document.createElement('div');
    dueDate.id = 'project-todo-due-date' +`${projectIndex}` +  `${projectToDoIndex}`;
    dateLabel.innerText = 'Due by: '
    dueDate.type = 'datetime-local';
    newForm.append(dateLabel, dueDate);

    const priorityLabel = document.createElement('label');
    priorityLabel.for = 'project-todo-priority' +`${projectIndex}` +  `${projectToDoIndex}`;
    priorityLabel.innerText = 'Priority';

    const priorityTypes = ['none', 'highest', 'high', 'middle', 'low'];
    const prioritySelect = document.createElement('select');
    prioritySelect.id = 'project-todo-priority' +`${projectIndex}` +  `${projectToDoIndex}`;
    prioritySelect.name = 'priorities';
    priorityTypes.forEach(function(type) {
      const priorityOption = document.createElement('option');
      priorityOption.value = type;
      priorityOption.text = type[0].toUpperCase() + type.slice(1);
      prioritySelect.append(priorityOption);
    })
    prioritySelect.value = project.toDos[projectToDoIndex].priority;

    newForm.append(dueDate, priorityLabel, prioritySelect);

    const submit = document.createElement('input');
    submit.type = 'submit';
    submit.name = 'submit';
    submit.id = 'project-todo-submit-edit' + `${projectIndex}` +  `${projectToDoIndex}`;
    submit.classList.add('form-button');
    newForm.append(submit);

    return newForm;
  }

/***/ }),

/***/ "./src/modules/projects/project-todo-form.js":
/*!***************************************************!*\
  !*** ./src/modules/projects/project-todo-form.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createToDoForm": () => (/* binding */ createToDoForm)
/* harmony export */ });



  const textFieldsArray = ['title', 'description'];

  function createToDoForm(projectIndex) {
    const newForm = document.createElement('form');
    newForm.classList.add("project-todo-form", "toggle-visibility");
    newForm.dataset.index = projectIndex;
    newForm.id = 'project-todo-form' + `${projectIndex}`;

    textFieldsArray.forEach(function(field) {
      const fieldLabel = document.createElement('div');
      fieldLabel.innerText = field[0].toUpperCase() + field.slice(1);
      const info = document.createElement('textarea');
      info.id = 'project-todo' + '-' + `${field}` + `${projectIndex}`;
      info.name = `${field}`;
      newForm.append(fieldLabel);
      newForm.append(info);
    })

    const dueDate = document.createElement('input');
    const dateLabel = document.createElement('div');
    dueDate.id = 'project-todo-due-date' + `${projectIndex}`;
    dateLabel.innerText = 'Due by: '
    dueDate.type = 'datetime-local';
    newForm.append(dateLabel, dueDate);

    const priorityLabel = document.createElement('label');
    priorityLabel.for = 'project-todo-priority';
    priorityLabel.innerText = 'Priority';

    const priorityTypes = ['none', 'highest', 'high', 'middle', 'low'];
    const prioritySelect = document.createElement('select');
    prioritySelect.id = 'project-todo-priority';
    prioritySelect.name = 'priorities';
    priorityTypes.forEach(function(type) {
      const priorityOption = document.createElement('option');
      priorityOption.value = type;
      priorityOption.text = type[0].toUpperCase() + type.slice(1);
      prioritySelect.append(priorityOption);
    })

    newForm.append(dueDate, priorityLabel, prioritySelect);

    const submit = document.createElement('input');
    submit.type = 'submit';
    submit.name = 'submit';
    submit.id = 'project-todo-submit' + `${projectIndex}`;
    submit.classList.add('form-button');
    newForm.append(submit);

    return newForm;
  }

/***/ }),

/***/ "./src/modules/projects/project.js":
/*!*****************************************!*\
  !*** ./src/modules/projects/project.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "project": () => (/* binding */ project)
/* harmony export */ });
/* harmony import */ var _project_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-dom */ "./src/modules/projects/project-dom.js");
/* harmony import */ var _todo_items_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todo-items/todo */ "./src/modules/todo-items/todo.js");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../local-storage */ "./src/modules/local-storage.js");





const project = (function() {

  let projectArray = [];

  const submitBtn = document.getElementById('project-submit');
  submitBtn.addEventListener('click', buildAndAddProject);

  function projectStorageLoad() {
    const savedProjectObject = (0,_local_storage__WEBPACK_IMPORTED_MODULE_2__.retrieveSavedProjects)();
    if(savedProjectObject) {
      savedProjectObject.forEach(function(savedProject) {
        console.log(savedProject);
        projectArray.push(savedProject);
      });
      (0,_project_dom__WEBPACK_IMPORTED_MODULE_0__.showProjects)(projectArray);
      assignProjectToDoSubmits();
      assignProjectRemoveBtns();
      assignProjectToDoRemoveBtns();
      (0,_local_storage__WEBPACK_IMPORTED_MODULE_2__.saveProjectsToStorage)(projectArray);
    }
  }

  function projectFactory (title, description, dueDate, index, priority, toDos = []) {
    return { title, description, dueDate, index, priority, toDos }
  }

  function buildAndAddProject(e) {
    e.preventDefault();
    const titleValue = document.getElementById('project-title').value;
    const descValue = document.getElementById('project-description').value;
    const dateOptions = { dateStyle: "full", timeStyle: "short"};
    const dueValue = new Date(document.getElementById('project-due-date').value).toLocaleString("en-US", dateOptions);
    const index = projectArray.length;
    const priority = document.getElementById('project-priority').value;
    const newProject = projectFactory(titleValue, descValue, dueValue, index, priority);
    projectArray.push(newProject);
    
    document.getElementById('project-form').reset();
    (0,_project_dom__WEBPACK_IMPORTED_MODULE_0__.showProjects)(projectArray);
    assignProjectToDoSubmits();
    assignProjectRemoveBtns();
    assignProjectToDoRemoveBtns();
    (0,_local_storage__WEBPACK_IMPORTED_MODULE_2__.saveProjectsToStorage)(projectArray);
  }

  function removeProject(e, projectIndex) {
    (0,_project_dom__WEBPACK_IMPORTED_MODULE_0__.removeProjectDOM)(projectIndex);
    projectArray.splice(projectIndex, 1);
    reduceIndex(projectArray, projectIndex);
    (0,_project_dom__WEBPACK_IMPORTED_MODULE_0__.showProjects)(projectArray);
    assignProjectToDoSubmits();
    assignProjectToDoRemoveBtns();
    assignProjectRemoveBtns();
    (0,_local_storage__WEBPACK_IMPORTED_MODULE_2__.saveProjectsToStorage)(projectArray);
  }

  function editProject(e, project) {
    e.preventDefault();
    const titleValue = document.getElementById('project-title' + `${project.index}`).value;
    const descValue = document.getElementById('project-description' + `${project.index}`).value;
    const dueValue = new Date(document.getElementById('project-due-date' + `${project.index}`).value);
    const priority = document.getElementById('project-priority' + `${project.index}`).value;
    project.title = titleValue;
    project.description = descValue;
    project.dueDate = dueValue;
    project.priority = priority;
    (0,_project_dom__WEBPACK_IMPORTED_MODULE_0__.showProjects)(projectArray);
    assignProjectToDoSubmits();
    assignProjectToDoRemoveBtns();
    assignProjectRemoveBtns();
    (0,_local_storage__WEBPACK_IMPORTED_MODULE_2__.saveProjectsToStorage)(projectArray);
  }

  function assignProjectToDoSubmits() {
    const projectToDoForms = document.querySelectorAll('.project-todo-form');
    projectToDoForms.forEach(function(form) {
      let projectIndex = form.dataset.index;
      const submitBtn = document.getElementById('project-todo-submit' + `${projectIndex}`);
      submitBtn.addEventListener('click', (e) => addProjectToDo(e, projectIndex));
    })
  }

  function assignProjectRemoveBtns() {
    const projectDiv = document.querySelectorAll('.project');
    projectDiv.forEach(function(project) {
      const removeBtn = document.getElementById('project-remove' + `${project.dataset.index}`);
      removeBtn.addEventListener('click', (e) => removeProject(e, project.dataset.index));
    })
  }

  function assignProjectEditBtns(project) {
    const editBtn = document.getElementById('project-submit-edit' + `${project.index}`);
    editBtn.addEventListener('click', (e) => editProject(e, project));
  }

  function addProjectToDo(e, projectIndex) {
      e.preventDefault();
      const currentProject = projectArray[projectIndex];
      const titleValue = document.getElementById('project-todo-title'+`${projectIndex}`).value;
      const descValue = document.getElementById('project-todo-description'+`${projectIndex}`).value;
      const dateOptions = { dateStyle: "full", timeStyle: "short"};
      const dueValue = new Date(document.getElementById('project-todo-due-date'+`${projectIndex}`).value).toLocaleString("en-US", dateOptions);
      const index = currentProject.toDos.length;
      const priority = document.getElementById('project-todo-priority').value;
      const newToDo = _todo_items_todo__WEBPACK_IMPORTED_MODULE_1__.toDo.toDoFactory(titleValue, descValue, dueValue, index, priority);
      document.getElementById('project-todo-form'+`${projectIndex}`).reset();
      currentProject.toDos.push(newToDo);
      (0,_project_dom__WEBPACK_IMPORTED_MODULE_0__.showProjects)(projectArray);
      assignProjectToDoSubmits();
      assignProjectToDoRemoveBtns();
      assignProjectRemoveBtns();
      (0,_local_storage__WEBPACK_IMPORTED_MODULE_2__.saveProjectsToStorage)(projectArray);
  }

  function editProjectToDo(e, todo, project) {
    e.preventDefault();
    const titleValue = document.getElementById('project-todo-title' + `${project.index}` +  `${todo.index}`).value;
    const descValue = document.getElementById('project-todo-description' + `${project.index}` +  `${todo.index}`).value;
    const dueValue = new Date(document.getElementById('project-todo-due-date' + `${project.index}` +  `${todo.index}`).value);
    const priority = document.getElementById('project-todo-priority' + `${project.index}` +  `${todo.index}`).value;
    todo.title = titleValue;
    todo.description = descValue;
    todo.dueDate = dueValue;
    todo.priority = priority;
    (0,_project_dom__WEBPACK_IMPORTED_MODULE_0__.showProjects)(projectArray);
    assignProjectToDoSubmits();
    assignProjectToDoRemoveBtns();
    assignProjectRemoveBtns();
    (0,_local_storage__WEBPACK_IMPORTED_MODULE_2__.saveProjectsToStorage)(projectArray);
  }

  function removeProjectToDo(e, project, toDo) {
    (0,_project_dom__WEBPACK_IMPORTED_MODULE_0__.removeProjectToDoDOM)(project.index, toDo.index);
    project.toDos.splice(toDo.index, 1);
    reduceIndex(project.toDos, toDo.index);
    (0,_project_dom__WEBPACK_IMPORTED_MODULE_0__.showProjects)(projectArray);
    assignProjectToDoSubmits();
    assignProjectToDoRemoveBtns();
    assignProjectRemoveBtns();
    (0,_local_storage__WEBPACK_IMPORTED_MODULE_2__.saveProjectsToStorage)(projectArray);
  }

  function assignProjectToDoRemoveBtns() {
    projectArray.forEach(function(project) {
      project.toDos.forEach(function(toDo) {
        if (toDo != '') {
          let toDoRemoveBtn = document.getElementById('project-todo-remove' + `${project.index}` + `${toDo.index}`);
          toDoRemoveBtn.addEventListener('click', (e) => removeProjectToDo(e, project, toDo))
        }
      })
    })
  }

  function assignProjectToDoEditBtns(toDo, project) {
    const editBtn = document.getElementById('project-todo-submit-edit' + `${project.index}` + `${toDo.index}`);
    editBtn.addEventListener('click', (e) => editProjectToDo(e, toDo, project));
  }

  function reduceIndex(array, removedItemIndex) {
    array.forEach(function(item) {
      if (item.index > removedItemIndex) {
        item.index -= 1;
      }
    })
  }
    
  return { projectArray, assignProjectEditBtns, assignProjectToDoEditBtns, projectStorageLoad }
    
})();

/***/ }),

/***/ "./src/modules/todo-items/todo-dom.js":
/*!********************************************!*\
  !*** ./src/modules/todo-items/todo-dom.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeNonProjectToDo": () => (/* binding */ removeNonProjectToDo),
/* harmony export */   "showToDos": () => (/* binding */ showToDos)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/modules/todo-items/todo.js");
/* harmony import */ var _todo_edit_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-edit-form */ "./src/modules/todo-items/todo-edit-form.js");
/* harmony import */ var _form_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form-toggle */ "./src/modules/form-toggle.js");

;



const toDoContainer = document.getElementById('todo-list');

function showToDos(array) {
  resetToDos();
  array.forEach(function(item) {
    const toDoDiv = document.createElement('div');
    toDoDiv.id = 'todo-item' + `${item.index}`;
    toDoDiv.classList.add('todo-item');
    toDoDiv.dataset.index = item.index;

    const toDoContents = document.createElement('div');
    toDoContents.classList.add('todo-content');

    const toDoTitle = document.createElement('p');
    toDoTitle.textContent = `${item.title}`;
    toDoTitle.classList.add(`priority-${item.priority}`);

    const toDoDesc = document.createElement('p');
    toDoDesc.textContent = `${item.description}`;

    const toDoDate = document.createElement('p');
    toDoDate.textContent = `Due by: ${item.dueDate}`;

    const toDoPriority = document.createElement('p');
    const priorityCapitalized = item.priority[0].toUpperCase() + item.priority.slice(1);
    toDoPriority.textContent = `Priority: ${priorityCapitalized}`;

    const toDoEditForm = (0,_todo_edit_form__WEBPACK_IMPORTED_MODULE_1__.editToDoForm)(item, item.index);

    const removeBtn = document.createElement('button');
    removeBtn.id = 'todo-remove' + `${item.index}`;
    removeBtn.innerText = "X";
    removeBtn.classList.add('remove-button');

    const showEditButton = document.createElement('button');
    showEditButton.id = 'todo-edit-show' + `${item.index}`;
    showEditButton.textContent = 'Edit To Do';
    showEditButton.classList.add('form-button');

    const hideEditButton = document.createElement('button');
    hideEditButton.id = 'todo-edit-hide' + `${item.index}`;
    hideEditButton.textContent = 'Hide Form';
    hideEditButton.classList.add('form-button', 'toggle-visibility');

    showEditButton.addEventListener('click', (e) => _form_toggle__WEBPACK_IMPORTED_MODULE_2__.formToggle.showForm(showEditButton, hideEditButton, toDoEditForm, e));
    showEditButton.addEventListener('click', (e) => _todo__WEBPACK_IMPORTED_MODULE_0__.toDo.assignToDoEditBtns(item));
    hideEditButton.addEventListener('click', (e) => _form_toggle__WEBPACK_IMPORTED_MODULE_2__.formToggle.hideForm(showEditButton, hideEditButton, toDoEditForm, e));

    toDoContents.append(toDoTitle, toDoDesc, toDoDate, toDoPriority, toDoEditForm);
    toDoDiv.append(toDoContents, removeBtn, showEditButton, hideEditButton);
    toDoContainer.append(toDoDiv);
  })
}

function removeNonProjectToDo(toDoIndex) {
  const toDoDiv = document.getElementById('todo-item' + `${toDoIndex}`);
  toDoDiv.remove();
}

function resetToDos() {
  toDoContainer.innerText = '';
}


/***/ }),

/***/ "./src/modules/todo-items/todo-edit-form.js":
/*!**************************************************!*\
  !*** ./src/modules/todo-items/todo-edit-form.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editToDoForm": () => (/* binding */ editToDoForm)
/* harmony export */ });


  function editToDoForm(toDo, todoIndex) {
    const newForm = document.createElement('form');
    newForm.classList.add("toggle-visibility");
    newForm.dataset.index = todoIndex;
    newForm.id = 'todo-edit-form' + `${todoIndex}`;

    const title = document.createElement('textarea');
    const titleLabel = document.createElement('div');
    title.id = 'todo-title' + `${todoIndex}`;
    titleLabel.innerText = 'Title: ';
    title.value = toDo.title;

    const description = document.createElement('textarea');
    const descLabel = document.createElement('div');
    description.id = 'todo-description' + `${todoIndex}`;
    descLabel.innerText = 'Description: ';
    description.value = toDo.description;

    const dueDate = document.createElement('input');
    const dateLabel = document.createElement('div');
    dueDate.id = 'todo-due-date' + `${todoIndex}`;
    dateLabel.innerText = 'Due by: ';
    dueDate.type = 'datetime-local';

    const priorityLabel = document.createElement('label');
    priorityLabel.for = 'todo-priority';
    priorityLabel.innerText = 'Priority';

    const priorityTypes = ['none', 'highest', 'high', 'middle', 'low'];
    const prioritySelect = document.createElement('select');
    prioritySelect.id = 'todo-priority' + `${todoIndex}`;
    prioritySelect.name = 'priorities';
    priorityTypes.forEach(function(type) {
      const priorityOption = document.createElement('option');
      priorityOption.value = type;
      priorityOption.text = type[0].toUpperCase() + type.slice(1);
      prioritySelect.append(priorityOption);
    })
    prioritySelect.value = toDo.priority;

    newForm.append(titleLabel, title, descLabel, description, dateLabel, dueDate, priorityLabel, prioritySelect);

    const submit = document.createElement('input');
    submit.type = 'submit';
    submit.name = 'submit';
    submit.id = 'todo-submit-edit' + `${todoIndex}`;
    submit.classList.add('form-button');
    newForm.append(submit);

    return newForm;
  }

/***/ }),

/***/ "./src/modules/todo-items/todo.js":
/*!****************************************!*\
  !*** ./src/modules/todo-items/todo.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toDo": () => (/* binding */ toDo)
/* harmony export */ });
/* harmony import */ var _todo_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-dom */ "./src/modules/todo-items/todo-dom.js");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../local-storage */ "./src/modules/local-storage.js");




const toDo = (function() {

  let toDoArray = [];

  const submitBtn = document.getElementById('todo-submit');
  submitBtn.addEventListener('click', buildAndAddToDo);

  function toDoStorageLoad() {
    const savedToDoObject = (0,_local_storage__WEBPACK_IMPORTED_MODULE_1__.retrieveSavedToDos)();
    if(savedToDoObject) {
      savedToDoObject.forEach(function(savedToDo) {
        toDoArray.push(savedToDo);
      });
      (0,_todo_dom__WEBPACK_IMPORTED_MODULE_0__.showToDos)(toDoArray);
      assignRemoveBtns();
      (0,_local_storage__WEBPACK_IMPORTED_MODULE_1__.saveToDosToStorage)(toDoArray);
    }
  }

  function toDoFactory (title, description, dueDate, index, priority) {
    return { title, description, dueDate, index, priority }
  }

  function buildAndAddToDo(e) {
    e.preventDefault();
    const titleValue = document.getElementById('todo-title').value;
    const descValue = document.getElementById('todo-description').value;
    const dateOptions = { dateStyle: "full", timeStyle: "short"};
    const dueValue = new Date(document.getElementById('todo-due-date').value).toLocaleString("en-US", dateOptions);
    const index = toDoArray.length;
    const priority = document.getElementById('todo-priority').value;
    const newToDo = toDoFactory(titleValue, descValue, dueValue, index, priority);
    toDoArray.push(newToDo);
    document.getElementById('todo-form').reset();
    (0,_todo_dom__WEBPACK_IMPORTED_MODULE_0__.showToDos)(toDoArray);
    assignRemoveBtns();
    (0,_local_storage__WEBPACK_IMPORTED_MODULE_1__.saveToDosToStorage)(toDoArray);
  }

  function removeToDo(e, toDoIndex) {
    e.preventDefault();
    (0,_todo_dom__WEBPACK_IMPORTED_MODULE_0__.removeNonProjectToDo)(toDoIndex);
    toDoArray.splice(toDoIndex, 1);
    reduceIndex(toDoArray, toDoIndex);
    (0,_todo_dom__WEBPACK_IMPORTED_MODULE_0__.showToDos)(toDoArray);
    assignRemoveBtns();
    (0,_local_storage__WEBPACK_IMPORTED_MODULE_1__.saveToDosToStorage)(toDoArray);
  }

  function editToDo(e, todo) {
    e.preventDefault();
    const titleValue = document.getElementById('todo-title' + `${todo.index}`).value;
    const descValue = document.getElementById('todo-description' + `${todo.index}`).value;
    const dueValue = new Date(document.getElementById('todo-due-date' + `${todo.index}`).value);
    const priority = document.getElementById('todo-priority' + `${todo.index}`).value;
    todo.title = titleValue;
    todo.description = descValue;
    todo.dueDate = dueValue;
    todo.priority = priority;
    (0,_todo_dom__WEBPACK_IMPORTED_MODULE_0__.showToDos)(toDoArray);
    assignRemoveBtns();
    (0,_local_storage__WEBPACK_IMPORTED_MODULE_1__.saveToDosToStorage)(toDoArray);
  }

  function assignRemoveBtns() {
    const toDoParas = document.querySelectorAll('.todo-item');
    toDoParas.forEach(function(toDo) {
      const removeBtn = document.getElementById('todo-remove' + `${toDo.dataset.index}`);
      removeBtn.addEventListener('click', (e) => removeToDo(e, toDo.dataset.index));
    })
  }

  function assignToDoEditBtns(todo) {
    const editBtn = document.getElementById('todo-submit-edit' + `${todo.index}`);
    editBtn.addEventListener('click', (e) => editToDo(e, todo));
  }

  function reduceIndex(array, removedItemIndex) {
    array.forEach(function(item) {
      if (item.index > removedItemIndex) {
        item.index -= 1;
      }
    })
  }
    
  return { toDoArray, toDoFactory, assignToDoEditBtns, toDoStorageLoad }
    
})();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_todo_items_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/todo-items/todo */ "./src/modules/todo-items/todo.js");
/* harmony import */ var _modules_projects_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/projects/project */ "./src/modules/projects/project.js");
/* harmony import */ var _modules_local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/local-storage */ "./src/modules/local-storage.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





window.onload = function() {
  _modules_todo_items_todo__WEBPACK_IMPORTED_MODULE_0__.toDo.toDoStorageLoad();
  _modules_projects_project__WEBPACK_IMPORTED_MODULE_1__.project.projectStorageLoad();
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQWlEO0FBQ0k7QUFDNkM7QUFDN0U7O0FBRXJCO0FBQ0EsRUFBRSwwRUFBb0I7QUFDdEIsRUFBRSxpRkFBMEI7QUFDNUIsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9mb3JtLXRvZ2dsZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9sb2NhbC1zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3RzL3Byb2plY3QtZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3RzL3Byb2plY3QtZWRpdC1mb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3RzL3Byb2plY3QtdG9kby1lZGl0LWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdHMvcHJvamVjdC10b2RvLWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdHMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90b2RvLWl0ZW1zL3RvZG8tZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RvZG8taXRlbXMvdG9kby1lZGl0LWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9kby1pdGVtcy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxucCB7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbi5jb250ZW50LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1heC13aWR0aDogMTAwdnc7XFxufVxcblxcbi50b2dnbGUtdmlzaWJpbGl0eSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgaGVpZ2h0OiA1NnB4O1xcbiAgdG9wOiAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjksIDcwLCA3Myk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5uYXYtaDMge1xcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbn1cXG5cXG4udG9wLWZvcm1zLWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nLXRvcDogMTVweDtcXG59XFxuXFxuLmZvcm0tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiAwcHggMjBweDtcXG59XFxuXFxuLmlucHV0LXRpdGxlIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXgtd2lkdGg6IGNhbGMoMjAwcHggLSAxNXB4KTtcXG59XFxuXFxuLmZvcm0tYnV0dG9uIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2OSwgNzAsIDczKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmZvcm0tYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjksIDcwLCA3MywgMC42NjQpO1xcbn1cXG5cXG4uZm9ybS1idXR0b246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODMsIDk2LCAxMzQsIDAuNjY0KTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtaW4td2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSA3MnB4KTtcXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTJweCk7XFxuICBwYWRkaW5nOiAwcHggMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk5LCAxOTMsIDE2MiwgMC4zNDkpO1xcbn1cXG5cXG5oMiB7XFxuICBtYXJnaW46IDE1cHggMjBweFxcbn1cXG5cXG4ucHJvamVjdC1saXN0LCAudG9kby1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA5MCU7XFxuICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSgxOTksIDE5MywgMTYyLCAwLjY5Mik7XFxufVxcblxcbi5wcm9qZWN0LCAudG9kby1pdGVtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDAuMWZyLCAxZnIpKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDAuMDVmcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgbWFyZ2luOiAxNXB4IDE1cHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLnRvZG8tY29udGVudCwgLnByb2plY3QtY29udGVudCB7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICBtaW4td2lkdGg6IDE4MHB4O1xcbiAgbWF4LXdpZHRoOiA4MCU7XFxufVxcblxcbi5yZW1vdmUtYnV0dG9uIHtcXG4gIGdyaWQtcm93OiAxO1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2OSwgNzAsIDczKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4ucmVtb3ZlLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXG59XFxuXFxuLnJlbW92ZS1idXR0b246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgyLCAzNiwgMzEsIDAuODA4KTtcXG59XFxuXFxuLnByb2plY3QtdG9kby1kaXZ7XFxuICBncmlkLXJvdzogMjtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxuICBtYXgtd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogNXB4IDBweDtcXG4gIHBhZGRpbmc6IDVweCAwcHg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDY5LCA3MCwgNzMpO1xcbn1cXG5cXG4ucHJvamVjdC10b2RvLWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItdG9wOiAxcHggZG90dGVkIHJnYig2OSwgNzAsIDczKTtcXG59XFxuXFxuLnByb2plY3QtdG9kby1mb3JtIHtcXG4gIGdyaWQtcm93OiAzO1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxuICBtYXgtd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4ucHJvamVjdC10b2RvLWJ1dHRvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5wcmlvcml0eS1ub25lIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucHJpb3JpdHktaGlnaGVzdCB7XFxuICBjb2xvcjogcmVkO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wcmlvcml0eS1oaWdoIHtcXG4gIGNvbG9yOiBvcmFuZ2U7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnByaW9yaXR5LW1pZGRsZSB7XFxuICBjb2xvcjogcmdiKDAsIDE3MywgMCk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnByaW9yaXR5LWxvdyB7XFxuICBjb2xvcjogYmx1ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA1NnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY5LCA3MCwgNzMpO1xcbiAgY29sb3I6IHJnYigxOTYsIDE5NiwgMTk2KTtcXG59XFxuXFxuLmZvb3Rlci1wIHtcXG4gIHBhZGRpbmctbGVmdDogMjVweDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuXFxuICAudG9wLWZvcm1zLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAucHJvamVjdCwgLnRvZG8taXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbjogMTVweCAwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LXRvZG8taXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gIH1cXG4gIFxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxc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RUFDZDs7QUFFRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMHB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbnAge1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4uY29udGVudC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXgtd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4udG9nZ2xlLXZpc2liaWxpdHkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGhlaWdodDogNTZweDtcXG4gIHRvcDogMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY5LCA3MCwgNzMpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubmF2LWgzIHtcXG4gIHBhZGRpbmctbGVmdDogMjVweDtcXG59XFxuXFxuLnRvcC1mb3Jtcy1jb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZy10b3A6IDE1cHg7XFxufVxcblxcbi5mb3JtLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbjogMHB4IDIwcHg7XFxufVxcblxcbi5pbnB1dC10aXRsZSB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWF4LXdpZHRoOiBjYWxjKDIwMHB4IC0gMTVweCk7XFxufVxcblxcbi5mb3JtLWJ1dHRvbiB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBwYWRkaW5nOiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjksIDcwLCA3Myk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5mb3JtLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY5LCA3MCwgNzMsIDAuNjY0KTtcXG59XFxuXFxuLmZvcm0tYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgzLCA5NiwgMTM0LCAwLjY2NCk7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgbWluLXdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KTtcXG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gNzJweCk7XFxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTEycHgpO1xcbiAgcGFkZGluZzogMHB4IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5OSwgMTkzLCAxNjIsIDAuMzQ5KTtcXG59XFxuXFxuaDIge1xcbiAgbWFyZ2luOiAxNXB4IDIwcHhcXG59XFxuXFxuLnByb2plY3QtbGlzdCwgLnRvZG8tbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogOTAlO1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEoMTk5LCAxOTMsIDE2MiwgMC42OTIpO1xcbn1cXG5cXG4ucHJvamVjdCwgLnRvZG8taXRlbSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgwLjFmciwgMWZyKSk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAwLjA1ZnI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIG1hcmdpbjogMTVweCAxNXB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbi50b2RvLWNvbnRlbnQsIC5wcm9qZWN0LWNvbnRlbnQge1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgbWluLXdpZHRoOiAxODBweDtcXG4gIG1heC13aWR0aDogODAlO1xcbn1cXG5cXG4ucmVtb3ZlLWJ1dHRvbiB7XFxuICBncmlkLXJvdzogMTtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjksIDcwLCA3Myk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLnJlbW92ZS1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxufVxcblxcbi5yZW1vdmUtYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4MiwgMzYsIDMxLCAwLjgwOCk7XFxufVxcblxcbi5wcm9qZWN0LXRvZG8tZGl2e1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgbWF4LXdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDVweCAwcHg7XFxuICBwYWRkaW5nOiA1cHggMHB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYig2OSwgNzAsIDczKTtcXG59XFxuXFxuLnByb2plY3QtdG9kby1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IGRvdHRlZCByZ2IoNjksIDcwLCA3Myk7XFxufVxcblxcbi5wcm9qZWN0LXRvZG8tZm9ybSB7XFxuICBncmlkLXJvdzogMztcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgbWF4LXdpZHRoOiAyMDBweDtcXG59XFxuXFxuLnByb2plY3QtdG9kby1idXR0b24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucHJpb3JpdHktbm9uZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnByaW9yaXR5LWhpZ2hlc3Qge1xcbiAgY29sb3I6IHJlZDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucHJpb3JpdHktaGlnaCB7XFxuICBjb2xvcjogb3JhbmdlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wcmlvcml0eS1taWRkbGUge1xcbiAgY29sb3I6IHJnYigwLCAxNzMsIDApO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wcmlvcml0eS1sb3cge1xcbiAgY29sb3I6IGJsdWU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2OSwgNzAsIDczKTtcXG4gIGNvbG9yOiByZ2IoMTk2LCAxOTYsIDE5Nik7XFxufVxcblxcbi5mb290ZXItcCB7XFxuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcblxcbiAgLnRvcC1mb3Jtcy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLnByb2plY3QsIC50b2RvLWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDE1cHggMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XFxuICB9XFxuXFxuICAucHJvamVjdC10b2RvLWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICB9XFxuICBcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCB7IGZvcm1Ub2dnbGUgfTtcblxuY29uc3QgZm9ybVRvZ2dsZSA9IChmdW5jdGlvbigpIHtcblxuICAgIGNvbnN0IHNob3dUb0RvRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93LXRvZG8nKTtcbiAgICBjb25zdCBoaWRlVG9Eb0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlkZS10b2RvJyk7XG4gICAgY29uc3QgdG9Eb0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1mb3JtJylcbiAgICBjb25zdCBzaG93UHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvdy1wcm9qZWN0Jyk7XG4gICAgY29uc3QgaGlkZVByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpZGUtcHJvamVjdCcpO1xuICAgIGNvbnN0IFByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtZm9ybScpXG4gICAgc2hvd1RvRG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHNob3dGb3JtKHNob3dUb0RvRm9ybSwgaGlkZVRvRG9Gb3JtLCB0b0RvRm9ybSwgZSkpO1xuICAgIGhpZGVUb0RvRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBoaWRlRm9ybShzaG93VG9Eb0Zvcm0sIGhpZGVUb0RvRm9ybSwgdG9Eb0Zvcm0sIGUpKTtcbiAgICBzaG93UHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gc2hvd0Zvcm0oc2hvd1Byb2plY3RGb3JtLCBoaWRlUHJvamVjdEZvcm0sIFByb2plY3RGb3JtLCBlKSk7XG4gICAgaGlkZVByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGhpZGVGb3JtKHNob3dQcm9qZWN0Rm9ybSwgaGlkZVByb2plY3RGb3JtLCBQcm9qZWN0Rm9ybSwgZSkpO1xuICAgIC8vVGhlIHNob3cgYW5kIGhpZGUgYnV0dG9ucyBmb3IgcHJvamVjdCB0b2RvcywgYW5kIGVkaXRzIGZvciBib3RoIHByb2plY3RzIGFuZCB0b2RvcyBhcmUgbG9jYXRlZCBpbiB0aGVpciByZXNwZWN0aXZlIGRvbSBmaWxlXG5cbiAgICBmdW5jdGlvbiBzaG93Rm9ybShzaG93QnRuLCBoaWRlQnRuLCBmb3JtKSB7XG4gICAgICAgIHNob3dCdG4uY2xhc3NMaXN0LmFkZCgndG9nZ2xlLXZpc2liaWxpdHknKTtcbiAgICAgICAgaGlkZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCd0b2dnbGUtdmlzaWJpbGl0eScpO1xuICAgICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ3RvZ2dsZS12aXNpYmlsaXR5Jyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUZvcm0oc2hvd0J0biwgaGlkZUJ0biwgZm9ybSkge1xuICAgICAgICBoaWRlQnRuLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZS12aXNpYmlsaXR5Jyk7XG4gICAgICAgIHNob3dCdG4uY2xhc3NMaXN0LnJlbW92ZSgndG9nZ2xlLXZpc2liaWxpdHknKTtcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtdmlzaWJpbGl0eScpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHNob3dGb3JtLCBoaWRlRm9ybSB9XG59KSgpOyIsImV4cG9ydCB7IHNhdmVQcm9qZWN0c1RvU3RvcmFnZSwgc2F2ZVRvRG9zVG9TdG9yYWdlLCByZXRyaWV2ZVNhdmVkUHJvamVjdHMsIHJldHJpZXZlU2F2ZWRUb0RvcywgY2xlYXJTdG9yYWdlIH1cblxuZnVuY3Rpb24gc2F2ZVByb2plY3RzVG9TdG9yYWdlKHByb2plY3RBcnJheSkge1xuICBjb25zdCBwcm9qZWN0c1RvU2F2ZSA9IEpTT04uc3RyaW5naWZ5KHByb2plY3RBcnJheSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIHByb2plY3RzVG9TYXZlKTtcbn1cblxuZnVuY3Rpb24gc2F2ZVRvRG9zVG9TdG9yYWdlKHRvZG9BcnJheSkge1xuICBjb25zdCB0b2Rvc1RvU2F2ZSA9IEpTT04uc3RyaW5naWZ5KHRvZG9BcnJheSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIHRvZG9zVG9TYXZlKTtcbn1cblxuZnVuY3Rpb24gcmV0cmlldmVTYXZlZFByb2plY3RzKCkge1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc3Qgc2F2ZWRQcm9qZWN0QXJyYXkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKTtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShzYXZlZFByb2plY3RBcnJheSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmV0cmlldmVTYXZlZFRvRG9zKCkge1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc3Qgc2F2ZWRUb0RvQXJyYXkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKTtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShzYXZlZFRvRG9BcnJheSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBjbGVhclN0b3JhZ2UoKSB7XG4gIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xufVxuIiwiZXhwb3J0IHsgc2hvd1Byb2plY3RzLCByZW1vdmVQcm9qZWN0RE9NLCByZW1vdmVQcm9qZWN0VG9Eb0RPTSB9XG5pbXBvcnQgeyBjcmVhdGVUb0RvRm9ybSB9IGZyb20gXCIuL3Byb2plY3QtdG9kby1mb3JtXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0Rm9ybSB9IGZyb20gXCIuL3Byb2plY3QtZWRpdC1mb3JtXCI7XG5pbXBvcnQgeyBlZGl0UHJvamVjdFRvRG9Gb3JtIH0gZnJvbSBcIi4vcHJvamVjdC10b2RvLWVkaXQtZm9ybVwiO1xuaW1wb3J0IHsgZm9ybVRvZ2dsZSB9IGZyb20gXCIuLi9mb3JtLXRvZ2dsZVwiO1xuaW1wb3J0IHsgcHJvamVjdCBhcyBwcm9qZWN0RmlsZX0gZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5jb25zdCBhbGxQcm9qZWN0c0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWxpc3QnKTtcblxuZnVuY3Rpb24gc2hvd1Byb2plY3RzKGFycmF5KSB7XG4gIHJlc2V0UHJvamVjdHMoKTtcbiAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbihwcm9qZWN0KSB7XG5cbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdENvbnRhaW5lci5kYXRhc2V0LmluZGV4ID0gcHJvamVjdC5pbmRleDtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmlkID0gJ3Byb2plY3QnICsgYCR7cHJvamVjdC5pbmRleH1gO1xuICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuXG4gICAgY29uc3QgcHJvamVjdFRvRG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0VG9Eb0Rpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRvZG8tZGl2Jyk7XG4gICAgcHJvamVjdFRvRG9EaXYuaW5uZXJUZXh0ID0gYFRvIERvczpcXG5gO1xuXG4gICAgY29uc3QgcHJvamVjdFJlbW92ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3RSZW1vdmVCdG4uaWQgPSAncHJvamVjdC1yZW1vdmUnICtgJHtwcm9qZWN0LmluZGV4fWA7XG4gICAgcHJvamVjdFJlbW92ZUJ0bi5pbm5lclRleHQgPSAnWCc7XG4gICAgcHJvamVjdFJlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKCdyZW1vdmUtYnV0dG9uJyk7XG5cbiAgICBjb25zdCBwcm9qZWN0Q29udGVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0Q29udGVudHMuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250ZW50Jyk7XG5cbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gYCR7cHJvamVjdC50aXRsZX1gO1xuICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKGBwcmlvcml0eS0ke3Byb2plY3QucHJpb3JpdHl9YCk7XG5cbiAgICBjb25zdCBwcm9qZWN0RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcm9qZWN0RGVzYy50ZXh0Q29udGVudCA9IGAke3Byb2plY3QuZGVzY3JpcHRpb259XFxuYDtcblxuICAgIGNvbnN0IHByb2plY3REYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGRhdGUgPSBwcm9qZWN0LmR1ZURhdGU7XG4gICAgcHJvamVjdERhdGUudGV4dENvbnRlbnQgPSBgRHVlIGJ5OiAke2RhdGV9YDtcblxuICAgIGNvbnN0IHByb2plY3RQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwcm9qZWN0UHJpb3JpdHlDYXBpdGFsaXplZCA9IHByb2plY3QucHJpb3JpdHlbMF0udG9VcHBlckNhc2UoKSArIHByb2plY3QucHJpb3JpdHkuc2xpY2UoMSk7XG4gICAgcHJvamVjdFByaW9yaXR5LnRleHRDb250ZW50ID0gYFByaW9yaXR5OiAke3Byb2plY3RQcmlvcml0eUNhcGl0YWxpemVkfWA7XG5cbiAgICBjb25zdCBwcm9qZWN0RWRpdEZvcm0gPSBjcmVhdGVQcm9qZWN0Rm9ybShwcm9qZWN0LCBwcm9qZWN0LmluZGV4KTtcbiAgICAgIFxuICAgIHByb2plY3RDb250ZW50cy5hcHBlbmQocHJvamVjdFRpdGxlLCBwcm9qZWN0RGVzYywgcHJvamVjdERhdGUsIHByb2plY3RQcmlvcml0eSwgcHJvamVjdEVkaXRGb3JtKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0Q29udGVudHMsIHByb2plY3RSZW1vdmVCdG4pO1xuXG4gICAgY29uc3QgdG9Eb0Zvcm0gPSBjcmVhdGVUb0RvRm9ybShwcm9qZWN0LmluZGV4KTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0VG9Eb0RpdiwgdG9Eb0Zvcm0pO1xuXG4gICAgY29uc3Qgc2hvd1Byb2plY3RFZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc2hvd1Byb2plY3RFZGl0QnV0dG9uLmlkID0gJ3Byb2plY3QtZWRpdC1zaG93JyArIGAke3Byb2plY3QuaW5kZXh9YDtcbiAgICBzaG93UHJvamVjdEVkaXRCdXR0b24udGV4dENvbnRlbnQgPSAnRWRpdCBQcm9qZWN0JztcbiAgICBzaG93UHJvamVjdEVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZm9ybS1idXR0b24nKTtcblxuICAgIGNvbnN0IGhpZGVQcm9qZWN0RWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGhpZGVQcm9qZWN0RWRpdEJ1dHRvbi5pZCA9ICdwcm9qZWN0LWVkaXQtaGlkZScgKyBgJHtwcm9qZWN0LmluZGV4fWA7XG4gICAgaGlkZVByb2plY3RFZGl0QnV0dG9uLnRleHRDb250ZW50ID0gJ0hpZGUgRm9ybSc7XG4gICAgaGlkZVByb2plY3RFZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYnV0dG9uJywgJ3RvZ2dsZS12aXNpYmlsaXR5Jyk7XG5cbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZChzaG93UHJvamVjdEVkaXRCdXR0b24sIGhpZGVQcm9qZWN0RWRpdEJ1dHRvbik7XG5cbiAgICBjb25zdCBzaG93UHJvamVjdFRvRG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzaG93UHJvamVjdFRvRG9CdXR0b24uaWQgPSAncHJvamVjdC10b2RvLXNob3cnICsgYCR7cHJvamVjdC5pbmRleH1gO1xuICAgIHNob3dQcm9qZWN0VG9Eb0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdmb3JtLWJ1dHRvbicpO1xuICAgIHNob3dQcm9qZWN0VG9Eb0J1dHRvbi50ZXh0Q29udGVudCA9ICdOZXcgVG8gRG8nO1xuXG4gICAgY29uc3QgaGlkZVByb2plY3RUb0RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaGlkZVByb2plY3RUb0RvQnV0dG9uLmlkID0gJ3Byb2plY3QtdG9kby1oaWRlJyArIGAke3Byb2plY3QuaW5kZXh9YDtcbiAgICBoaWRlUHJvamVjdFRvRG9CdXR0b24uY2xhc3NMaXN0LmFkZCgnZm9ybS1idXR0b24nLCAndG9nZ2xlLXZpc2liaWxpdHknKTtcbiAgICBoaWRlUHJvamVjdFRvRG9CdXR0b24udGV4dENvbnRlbnQgPSAnSGlkZSBGb3JtJztcblxuICAgIHNob3dQcm9qZWN0RWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBmb3JtVG9nZ2xlLnNob3dGb3JtKHNob3dQcm9qZWN0RWRpdEJ1dHRvbiwgaGlkZVByb2plY3RFZGl0QnV0dG9uLCBwcm9qZWN0RWRpdEZvcm0sIGUpKTtcbiAgICBzaG93UHJvamVjdEVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gcHJvamVjdEZpbGUuYXNzaWduUHJvamVjdEVkaXRCdG5zKHByb2plY3QpKTtcbiAgICBoaWRlUHJvamVjdEVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZm9ybVRvZ2dsZS5oaWRlRm9ybShzaG93UHJvamVjdEVkaXRCdXR0b24sIGhpZGVQcm9qZWN0RWRpdEJ1dHRvbiwgcHJvamVjdEVkaXRGb3JtLCBlKSk7XG5cbiAgICBzaG93UHJvamVjdFRvRG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZm9ybVRvZ2dsZS5zaG93Rm9ybShzaG93UHJvamVjdFRvRG9CdXR0b24sIGhpZGVQcm9qZWN0VG9Eb0J1dHRvbiwgdG9Eb0Zvcm0sIGUpKTtcbiAgICBoaWRlUHJvamVjdFRvRG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZm9ybVRvZ2dsZS5oaWRlRm9ybShzaG93UHJvamVjdFRvRG9CdXR0b24sIGhpZGVQcm9qZWN0VG9Eb0J1dHRvbiwgdG9Eb0Zvcm0sIGUpKTtcbiAgICAgIFxuICAgIHByb2plY3QudG9Eb3MuZm9yRWFjaChmdW5jdGlvbih0b0RvKSB7XG4gICAgICBjb25zdCB0b0RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0b0RvRGl2LmlkID0gJ3Byb2plY3QtdG9kby1kaXYnICsgYCR7cHJvamVjdC5pbmRleH1gICsgYCR7dG9Eby5pbmRleH1gO1xuICAgICAgdG9Eb0Rpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRvZG8taXRlbScpO1xuICAgICAgdG9Eb0Rpdi5kYXRhc2V0LmluZGV4ID0gYCR7cHJvamVjdC5pbmRleH0ke3RvRG8uaW5kZXh9YDtcblxuICAgICAgY29uc3QgdG9Eb0NvbnRlbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0b0RvQ29udGVudHMuY2xhc3NMaXN0LmFkZCgndG9kby1jb250ZW50Jyk7XG5cbiAgICAgIGNvbnN0IHByb2plY3RUb0RvQnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBwcm9qZWN0VG9Eb0J0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRvZG8tYnV0dG9uLWNvbnRhaW5lcicpO1xuXG4gICAgICBjb25zdCB0b0RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICB0b0RvVGl0bGUudGV4dENvbnRlbnQgPSBgJHt0b0RvLnRpdGxlfWA7XG4gICAgICB0b0RvVGl0bGUuY2xhc3NMaXN0LmFkZChgcHJpb3JpdHktJHt0b0RvLnByaW9yaXR5fWApO1xuXG4gICAgICBjb25zdCB0b0RvRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIHRvRG9EZXNjLnRleHRDb250ZW50ID0gYCR7dG9Eby5kZXNjcmlwdGlvbn1gO1xuXG4gICAgICBjb25zdCB0b0RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIHRvRG9EYXRlLnRleHRDb250ZW50ID0gYER1ZSBieTogJHt0b0RvLmR1ZURhdGV9YDtcblxuICAgICAgY29uc3QgdG9Eb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgY29uc3QgcHJpb3JpdHlDYXBpdGFsaXplZCA9IHRvRG8ucHJpb3JpdHlbMF0udG9VcHBlckNhc2UoKSArIHRvRG8ucHJpb3JpdHkuc2xpY2UoMSk7XG4gICAgICB0b0RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7cHJpb3JpdHlDYXBpdGFsaXplZH1gO1xuXG4gICAgICBjb25zdCB0b0RvUmVtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICB0b0RvUmVtb3ZlQnRuLmlkID0gJ3Byb2plY3QtdG9kby1yZW1vdmUnICsgYCR7cHJvamVjdC5pbmRleH1gICsgYCR7dG9Eby5pbmRleH1gO1xuICAgICAgdG9Eb1JlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKCdyZW1vdmUtYnV0dG9uJyk7XG4gICAgICB0b0RvUmVtb3ZlQnRuLmlubmVyVGV4dCA9ICdYJztcblxuICAgICAgY29uc3QgcHJvamVjdFRvRG9FZGl0Rm9ybSA9IGVkaXRQcm9qZWN0VG9Eb0Zvcm0odG9Eby5pbmRleCwgcHJvamVjdCk7XG5cbiAgICAgIGNvbnN0IHNob3dQcm9qZWN0VG9Eb0VkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIHNob3dQcm9qZWN0VG9Eb0VkaXRCdXR0b24uaWQgPSAndG9kby1lZGl0LXNob3cnICsgYCR7cHJvamVjdC5pbmRleH1gICsgYCR7dG9Eby5pbmRleH1gO1xuICAgICAgc2hvd1Byb2plY3RUb0RvRWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdFZGl0IFRvIERvJztcbiAgICAgIHNob3dQcm9qZWN0VG9Eb0VkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZm9ybS1idXR0b24nKTtcblxuICAgICAgY29uc3QgaGlkZVByb2plY3RUb0RvRWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgaGlkZVByb2plY3RUb0RvRWRpdEJ1dHRvbi5pZCA9ICd0b2RvLWVkaXQtaGlkZScgKyBgJHtwcm9qZWN0LmluZGV4fWAgKyBgJHt0b0RvLmluZGV4fWA7XG4gICAgICBoaWRlUHJvamVjdFRvRG9FZGl0QnV0dG9uLnRleHRDb250ZW50ID0gJ0hpZGUgRm9ybSc7XG4gICAgICBoaWRlUHJvamVjdFRvRG9FZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYnV0dG9uJywgJ3RvZ2dsZS12aXNpYmlsaXR5Jyk7XG5cbiAgICAgIHNob3dQcm9qZWN0VG9Eb0VkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZm9ybVRvZ2dsZS5zaG93Rm9ybShzaG93UHJvamVjdFRvRG9FZGl0QnV0dG9uLCBoaWRlUHJvamVjdFRvRG9FZGl0QnV0dG9uLCBwcm9qZWN0VG9Eb0VkaXRGb3JtLCBlKSk7XG4gICAgICBzaG93UHJvamVjdFRvRG9FZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHByb2plY3RGaWxlLmFzc2lnblByb2plY3RUb0RvRWRpdEJ0bnModG9EbywgcHJvamVjdCkpO1xuICAgICAgaGlkZVByb2plY3RUb0RvRWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBmb3JtVG9nZ2xlLmhpZGVGb3JtKHNob3dQcm9qZWN0VG9Eb0VkaXRCdXR0b24sIGhpZGVQcm9qZWN0VG9Eb0VkaXRCdXR0b24sIHByb2plY3RUb0RvRWRpdEZvcm0sIGUpKTtcblxuICAgICAgdG9Eb0NvbnRlbnRzLmFwcGVuZCh0b0RvVGl0bGUsIHRvRG9EZXNjLCB0b0RvRGF0ZSwgdG9Eb1ByaW9yaXR5LCBwcm9qZWN0VG9Eb0VkaXRGb3JtKTtcbiAgICAgIHByb2plY3RUb0RvQnRuQ29udGFpbmVyLmFwcGVuZCh0b0RvUmVtb3ZlQnRuLCBzaG93UHJvamVjdFRvRG9FZGl0QnV0dG9uLCBoaWRlUHJvamVjdFRvRG9FZGl0QnV0dG9uKVxuICAgICAgdG9Eb0Rpdi5hcHBlbmQodG9Eb0NvbnRlbnRzLCBwcm9qZWN0VG9Eb0J0bkNvbnRhaW5lcik7XG4gICAgICBwcm9qZWN0VG9Eb0Rpdi5hcHBlbmQodG9Eb0Rpdik7XG4gICAgfSlcblxuICAgIHByb2plY3RUb0RvRGl2LmFwcGVuZChzaG93UHJvamVjdFRvRG9CdXR0b24sIGhpZGVQcm9qZWN0VG9Eb0J1dHRvbik7XG4gICAgYWxsUHJvamVjdHNEaXYuYXBwZW5kKHByb2plY3RDb250YWluZXIpO1xuICB9KVxufVxuXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0RE9NKHByb2plY3RJbmRleCkge1xuICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QnICsgYCR7cHJvamVjdEluZGV4fWApO1xuICBwcm9qZWN0RGl2LnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0VG9Eb0RPTShwcm9qZWN0SW5kZXgsIHRvRG9JbmRleCkge1xuICBjb25zdCB0b0RvRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdG9kby1kaXYnICsgYCR7cHJvamVjdEluZGV4fWAgKyBgJHt0b0RvSW5kZXh9YCk7XG4gIHRvRG9EaXYucmVtb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0UHJvamVjdHMoKSB7XG4gIGFsbFByb2plY3RzRGl2LmlubmVyVGV4dCA9ICcnO1xufVxuIiwiZXhwb3J0IHsgY3JlYXRlUHJvamVjdEZvcm0gfTtcblxuICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0Rm9ybShwcm9qZWN0LCBwcm9qZWN0SW5kZXgpIHtcbiAgICBjb25zdCBuZXdGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIG5ld0Zvcm0uY2xhc3NMaXN0LmFkZChcInRvZ2dsZS12aXNpYmlsaXR5XCIpO1xuICAgIG5ld0Zvcm0uZGF0YXNldC5pbmRleCA9IHByb2plY3RJbmRleDtcbiAgICBuZXdGb3JtLmlkID0gJ3Byb2plY3QtZWRpdC1mb3JtJyArIGAke3Byb2plY3RJbmRleH1gO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZS5pZCA9ICdwcm9qZWN0LXRpdGxlJyArIGAke3Byb2plY3RJbmRleH1gO1xuICAgIHRpdGxlTGFiZWwuaW5uZXJUZXh0ID0gJ1RpdGxlOiAnXG4gICAgdGl0bGUudmFsdWUgPSBwcm9qZWN0LnRpdGxlO1xuICAgIG5ld0Zvcm0uYXBwZW5kKHRpdGxlTGFiZWwsIHRpdGxlKTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBjb25zdCBkZXNjTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjcmlwdGlvbi5pZCA9ICdwcm9qZWN0LWRlc2NyaXB0aW9uJyArIGAke3Byb2plY3RJbmRleH1gO1xuICAgIGRlc2NMYWJlbC5pbm5lclRleHQgPSAnRGVzY3JpcHRpb246ICc7XG4gICAgZGVzY3JpcHRpb24udmFsdWUgPSBwcm9qZWN0LmRlc2NyaXB0aW9uO1xuICAgIG5ld0Zvcm0uYXBwZW5kKGRlc2NMYWJlbCwgZGVzY3JpcHRpb24pO1xuXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHVlRGF0ZS5pZCA9ICdwcm9qZWN0LWR1ZS1kYXRlJyArIGAke3Byb2plY3RJbmRleH1gO1xuICAgIGRhdGVMYWJlbC5pbm5lclRleHQgPSAnRHVlIGJ5OiAnXG4gICAgZHVlRGF0ZS50eXBlID0gJ2RhdGV0aW1lLWxvY2FsJztcbiAgICBuZXdGb3JtLmFwcGVuZChkYXRlTGFiZWwsIGR1ZURhdGUpO1xuXG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJpb3JpdHlMYWJlbC5mb3IgPSAncHJvamVjdC1wcmlvcml0eSc7XG4gICAgcHJpb3JpdHlMYWJlbC5pbm5lclRleHQgPSAnUHJpb3JpdHknO1xuXG4gICAgY29uc3QgcHJpb3JpdHlUeXBlcyA9IFsnbm9uZScsICdoaWdoZXN0JywgJ2hpZ2gnLCAnbWlkZGxlJywgJ2xvdyddO1xuICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgcHJpb3JpdHlTZWxlY3QuaWQgPSAncHJvamVjdC1wcmlvcml0eScgKyBgJHtwcm9qZWN0SW5kZXh9YDtcbiAgICBwcmlvcml0eVNlbGVjdC5uYW1lID0gJ3ByaW9yaXRpZXMnO1xuICAgIHByaW9yaXR5VHlwZXMuZm9yRWFjaChmdW5jdGlvbih0eXBlKSB7XG4gICAgICBjb25zdCBwcmlvcml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgcHJpb3JpdHlPcHRpb24udmFsdWUgPSB0eXBlO1xuICAgICAgcHJpb3JpdHlPcHRpb24udGV4dCA9IHR5cGVbMF0udG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSk7XG4gICAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmQocHJpb3JpdHlPcHRpb24pO1xuICAgIH0pXG4gICAgcHJpb3JpdHlTZWxlY3QudmFsdWUgPSBwcm9qZWN0LnByaW9yaXR5O1xuXG4gICAgbmV3Rm9ybS5hcHBlbmQoZHVlRGF0ZSwgcHJpb3JpdHlMYWJlbCwgcHJpb3JpdHlTZWxlY3QpO1xuXG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBzdWJtaXQudHlwZSA9ICdzdWJtaXQnO1xuICAgIHN1Ym1pdC5uYW1lID0gJ3N1Ym1pdCc7XG4gICAgc3VibWl0LmlkID0gJ3Byb2plY3Qtc3VibWl0LWVkaXQnICsgYCR7cHJvamVjdEluZGV4fWA7XG4gICAgc3VibWl0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYnV0dG9uJyk7XG4gICAgbmV3Rm9ybS5hcHBlbmQoc3VibWl0KTtcblxuICAgIHJldHVybiBuZXdGb3JtO1xuICB9IiwiZXhwb3J0IHsgZWRpdFByb2plY3RUb0RvRm9ybSB9O1xuXG4gIGZ1bmN0aW9uIGVkaXRQcm9qZWN0VG9Eb0Zvcm0ocHJvamVjdFRvRG9JbmRleCwgcHJvamVjdCkge1xuXG4gICAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdC5pbmRleDtcbiAgICBjb25zdCBuZXdGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIG5ld0Zvcm0uY2xhc3NMaXN0LmFkZChcInRvZ2dsZS12aXNpYmlsaXR5XCIpO1xuICAgIG5ld0Zvcm0uZGF0YXNldC5pbmRleCA9IHByb2plY3RUb0RvSW5kZXg7XG4gICAgbmV3Rm9ybS5pZCA9ICdwcm9qZWN0LXRvZG8tZWRpdC1mb3JtJyArIGAke3Byb2plY3RJbmRleH1gICsgYCR7cHJvamVjdFRvRG9JbmRleH1gO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZS5pZCA9ICdwcm9qZWN0LXRvZG8tdGl0bGUnICsgYCR7cHJvamVjdEluZGV4fWAgKyBgJHtwcm9qZWN0VG9Eb0luZGV4fWA7XG4gICAgdGl0bGVMYWJlbC5pbm5lclRleHQgPSAnVGl0bGU6ICdcbiAgICB0aXRsZS52YWx1ZSA9IHByb2plY3QudG9Eb3NbcHJvamVjdFRvRG9JbmRleF0udGl0bGU7XG4gICAgbmV3Rm9ybS5hcHBlbmQodGl0bGVMYWJlbCwgdGl0bGUpO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGNvbnN0IGRlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc2NyaXB0aW9uLmlkID0gJ3Byb2plY3QtdG9kby1kZXNjcmlwdGlvbicgK2Ake3Byb2plY3RJbmRleH1gICsgIGAke3Byb2plY3RUb0RvSW5kZXh9YDtcbiAgICBkZXNjTGFiZWwuaW5uZXJUZXh0ID0gJ1RpdGxlOiAnO1xuICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gcHJvamVjdC50b0Rvc1twcm9qZWN0VG9Eb0luZGV4XS5kZXNjcmlwdGlvbjtcbiAgICBuZXdGb3JtLmFwcGVuZChkZXNjTGFiZWwsIGRlc2NyaXB0aW9uKTtcblxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGR1ZURhdGUuaWQgPSAncHJvamVjdC10b2RvLWR1ZS1kYXRlJyArYCR7cHJvamVjdEluZGV4fWAgKyAgYCR7cHJvamVjdFRvRG9JbmRleH1gO1xuICAgIGRhdGVMYWJlbC5pbm5lclRleHQgPSAnRHVlIGJ5OiAnXG4gICAgZHVlRGF0ZS50eXBlID0gJ2RhdGV0aW1lLWxvY2FsJztcbiAgICBuZXdGb3JtLmFwcGVuZChkYXRlTGFiZWwsIGR1ZURhdGUpO1xuXG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJpb3JpdHlMYWJlbC5mb3IgPSAncHJvamVjdC10b2RvLXByaW9yaXR5JyArYCR7cHJvamVjdEluZGV4fWAgKyAgYCR7cHJvamVjdFRvRG9JbmRleH1gO1xuICAgIHByaW9yaXR5TGFiZWwuaW5uZXJUZXh0ID0gJ1ByaW9yaXR5JztcblxuICAgIGNvbnN0IHByaW9yaXR5VHlwZXMgPSBbJ25vbmUnLCAnaGlnaGVzdCcsICdoaWdoJywgJ21pZGRsZScsICdsb3cnXTtcbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHByaW9yaXR5U2VsZWN0LmlkID0gJ3Byb2plY3QtdG9kby1wcmlvcml0eScgK2Ake3Byb2plY3RJbmRleH1gICsgIGAke3Byb2plY3RUb0RvSW5kZXh9YDtcbiAgICBwcmlvcml0eVNlbGVjdC5uYW1lID0gJ3ByaW9yaXRpZXMnO1xuICAgIHByaW9yaXR5VHlwZXMuZm9yRWFjaChmdW5jdGlvbih0eXBlKSB7XG4gICAgICBjb25zdCBwcmlvcml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgcHJpb3JpdHlPcHRpb24udmFsdWUgPSB0eXBlO1xuICAgICAgcHJpb3JpdHlPcHRpb24udGV4dCA9IHR5cGVbMF0udG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSk7XG4gICAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmQocHJpb3JpdHlPcHRpb24pO1xuICAgIH0pXG4gICAgcHJpb3JpdHlTZWxlY3QudmFsdWUgPSBwcm9qZWN0LnRvRG9zW3Byb2plY3RUb0RvSW5kZXhdLnByaW9yaXR5O1xuXG4gICAgbmV3Rm9ybS5hcHBlbmQoZHVlRGF0ZSwgcHJpb3JpdHlMYWJlbCwgcHJpb3JpdHlTZWxlY3QpO1xuXG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBzdWJtaXQudHlwZSA9ICdzdWJtaXQnO1xuICAgIHN1Ym1pdC5uYW1lID0gJ3N1Ym1pdCc7XG4gICAgc3VibWl0LmlkID0gJ3Byb2plY3QtdG9kby1zdWJtaXQtZWRpdCcgKyBgJHtwcm9qZWN0SW5kZXh9YCArICBgJHtwcm9qZWN0VG9Eb0luZGV4fWA7XG4gICAgc3VibWl0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYnV0dG9uJyk7XG4gICAgbmV3Rm9ybS5hcHBlbmQoc3VibWl0KTtcblxuICAgIHJldHVybiBuZXdGb3JtO1xuICB9IiwiZXhwb3J0IHsgY3JlYXRlVG9Eb0Zvcm0gfTtcblxuXG4gIGNvbnN0IHRleHRGaWVsZHNBcnJheSA9IFsndGl0bGUnLCAnZGVzY3JpcHRpb24nXTtcblxuICBmdW5jdGlvbiBjcmVhdGVUb0RvRm9ybShwcm9qZWN0SW5kZXgpIHtcbiAgICBjb25zdCBuZXdGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIG5ld0Zvcm0uY2xhc3NMaXN0LmFkZChcInByb2plY3QtdG9kby1mb3JtXCIsIFwidG9nZ2xlLXZpc2liaWxpdHlcIik7XG4gICAgbmV3Rm9ybS5kYXRhc2V0LmluZGV4ID0gcHJvamVjdEluZGV4O1xuICAgIG5ld0Zvcm0uaWQgPSAncHJvamVjdC10b2RvLWZvcm0nICsgYCR7cHJvamVjdEluZGV4fWA7XG5cbiAgICB0ZXh0RmllbGRzQXJyYXkuZm9yRWFjaChmdW5jdGlvbihmaWVsZCkge1xuICAgICAgY29uc3QgZmllbGRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZmllbGRMYWJlbC5pbm5lclRleHQgPSBmaWVsZFswXS50b1VwcGVyQ2FzZSgpICsgZmllbGQuc2xpY2UoMSk7XG4gICAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgIGluZm8uaWQgPSAncHJvamVjdC10b2RvJyArICctJyArIGAke2ZpZWxkfWAgKyBgJHtwcm9qZWN0SW5kZXh9YDtcbiAgICAgIGluZm8ubmFtZSA9IGAke2ZpZWxkfWA7XG4gICAgICBuZXdGb3JtLmFwcGVuZChmaWVsZExhYmVsKTtcbiAgICAgIG5ld0Zvcm0uYXBwZW5kKGluZm8pO1xuICAgIH0pXG5cbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkdWVEYXRlLmlkID0gJ3Byb2plY3QtdG9kby1kdWUtZGF0ZScgKyBgJHtwcm9qZWN0SW5kZXh9YDtcbiAgICBkYXRlTGFiZWwuaW5uZXJUZXh0ID0gJ0R1ZSBieTogJ1xuICAgIGR1ZURhdGUudHlwZSA9ICdkYXRldGltZS1sb2NhbCc7XG4gICAgbmV3Rm9ybS5hcHBlbmQoZGF0ZUxhYmVsLCBkdWVEYXRlKTtcblxuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByaW9yaXR5TGFiZWwuZm9yID0gJ3Byb2plY3QtdG9kby1wcmlvcml0eSc7XG4gICAgcHJpb3JpdHlMYWJlbC5pbm5lclRleHQgPSAnUHJpb3JpdHknO1xuXG4gICAgY29uc3QgcHJpb3JpdHlUeXBlcyA9IFsnbm9uZScsICdoaWdoZXN0JywgJ2hpZ2gnLCAnbWlkZGxlJywgJ2xvdyddO1xuICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgcHJpb3JpdHlTZWxlY3QuaWQgPSAncHJvamVjdC10b2RvLXByaW9yaXR5JztcbiAgICBwcmlvcml0eVNlbGVjdC5uYW1lID0gJ3ByaW9yaXRpZXMnO1xuICAgIHByaW9yaXR5VHlwZXMuZm9yRWFjaChmdW5jdGlvbih0eXBlKSB7XG4gICAgICBjb25zdCBwcmlvcml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgcHJpb3JpdHlPcHRpb24udmFsdWUgPSB0eXBlO1xuICAgICAgcHJpb3JpdHlPcHRpb24udGV4dCA9IHR5cGVbMF0udG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSk7XG4gICAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmQocHJpb3JpdHlPcHRpb24pO1xuICAgIH0pXG5cbiAgICBuZXdGb3JtLmFwcGVuZChkdWVEYXRlLCBwcmlvcml0eUxhYmVsLCBwcmlvcml0eVNlbGVjdCk7XG5cbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHN1Ym1pdC50eXBlID0gJ3N1Ym1pdCc7XG4gICAgc3VibWl0Lm5hbWUgPSAnc3VibWl0JztcbiAgICBzdWJtaXQuaWQgPSAncHJvamVjdC10b2RvLXN1Ym1pdCcgKyBgJHtwcm9qZWN0SW5kZXh9YDtcbiAgICBzdWJtaXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1idXR0b24nKTtcbiAgICBuZXdGb3JtLmFwcGVuZChzdWJtaXQpO1xuXG4gICAgcmV0dXJuIG5ld0Zvcm07XG4gIH0iLCJleHBvcnQgeyBwcm9qZWN0IH07XG5pbXBvcnQgeyBzaG93UHJvamVjdHMsIHJlbW92ZVByb2plY3RET00sIHJlbW92ZVByb2plY3RUb0RvRE9NIH0gZnJvbSBcIi4vcHJvamVjdC1kb21cIjtcbmltcG9ydCB7IHRvRG8gfSBmcm9tIFwiLi4vdG9kby1pdGVtcy90b2RvXCI7XG5pbXBvcnQgeyBzYXZlUHJvamVjdHNUb1N0b3JhZ2UsIHJldHJpZXZlU2F2ZWRQcm9qZWN0cyB9IGZyb20gXCIuLi9sb2NhbC1zdG9yYWdlXCI7XG5cbmNvbnN0IHByb2plY3QgPSAoZnVuY3Rpb24oKSB7XG5cbiAgbGV0IHByb2plY3RBcnJheSA9IFtdO1xuXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXN1Ym1pdCcpO1xuICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBidWlsZEFuZEFkZFByb2plY3QpO1xuXG4gIGZ1bmN0aW9uIHByb2plY3RTdG9yYWdlTG9hZCgpIHtcbiAgICBjb25zdCBzYXZlZFByb2plY3RPYmplY3QgPSByZXRyaWV2ZVNhdmVkUHJvamVjdHMoKTtcbiAgICBpZihzYXZlZFByb2plY3RPYmplY3QpIHtcbiAgICAgIHNhdmVkUHJvamVjdE9iamVjdC5mb3JFYWNoKGZ1bmN0aW9uKHNhdmVkUHJvamVjdCkge1xuICAgICAgICBjb25zb2xlLmxvZyhzYXZlZFByb2plY3QpO1xuICAgICAgICBwcm9qZWN0QXJyYXkucHVzaChzYXZlZFByb2plY3QpO1xuICAgICAgfSk7XG4gICAgICBzaG93UHJvamVjdHMocHJvamVjdEFycmF5KTtcbiAgICAgIGFzc2lnblByb2plY3RUb0RvU3VibWl0cygpO1xuICAgICAgYXNzaWduUHJvamVjdFJlbW92ZUJ0bnMoKTtcbiAgICAgIGFzc2lnblByb2plY3RUb0RvUmVtb3ZlQnRucygpO1xuICAgICAgc2F2ZVByb2plY3RzVG9TdG9yYWdlKHByb2plY3RBcnJheSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvamVjdEZhY3RvcnkgKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgaW5kZXgsIHByaW9yaXR5LCB0b0RvcyA9IFtdKSB7XG4gICAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBpbmRleCwgcHJpb3JpdHksIHRvRG9zIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkQW5kQWRkUHJvamVjdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRpdGxlVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10aXRsZScpLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWRlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgY29uc3QgZGF0ZU9wdGlvbnMgPSB7IGRhdGVTdHlsZTogXCJmdWxsXCIsIHRpbWVTdHlsZTogXCJzaG9ydFwifTtcbiAgICBjb25zdCBkdWVWYWx1ZSA9IG5ldyBEYXRlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWR1ZS1kYXRlJykudmFsdWUpLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwgZGF0ZU9wdGlvbnMpO1xuICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdEFycmF5Lmxlbmd0aDtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXByaW9yaXR5JykudmFsdWU7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3RGYWN0b3J5KHRpdGxlVmFsdWUsIGRlc2NWYWx1ZSwgZHVlVmFsdWUsIGluZGV4LCBwcmlvcml0eSk7XG4gICAgcHJvamVjdEFycmF5LnB1c2gobmV3UHJvamVjdCk7XG4gICAgXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtZm9ybScpLnJlc2V0KCk7XG4gICAgc2hvd1Byb2plY3RzKHByb2plY3RBcnJheSk7XG4gICAgYXNzaWduUHJvamVjdFRvRG9TdWJtaXRzKCk7XG4gICAgYXNzaWduUHJvamVjdFJlbW92ZUJ0bnMoKTtcbiAgICBhc3NpZ25Qcm9qZWN0VG9Eb1JlbW92ZUJ0bnMoKTtcbiAgICBzYXZlUHJvamVjdHNUb1N0b3JhZ2UocHJvamVjdEFycmF5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVByb2plY3QoZSwgcHJvamVjdEluZGV4KSB7XG4gICAgcmVtb3ZlUHJvamVjdERPTShwcm9qZWN0SW5kZXgpO1xuICAgIHByb2plY3RBcnJheS5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcbiAgICByZWR1Y2VJbmRleChwcm9qZWN0QXJyYXksIHByb2plY3RJbmRleCk7XG4gICAgc2hvd1Byb2plY3RzKHByb2plY3RBcnJheSk7XG4gICAgYXNzaWduUHJvamVjdFRvRG9TdWJtaXRzKCk7XG4gICAgYXNzaWduUHJvamVjdFRvRG9SZW1vdmVCdG5zKCk7XG4gICAgYXNzaWduUHJvamVjdFJlbW92ZUJ0bnMoKTtcbiAgICBzYXZlUHJvamVjdHNUb1N0b3JhZ2UocHJvamVjdEFycmF5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVkaXRQcm9qZWN0KGUsIHByb2plY3QpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGl0bGVWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXRpdGxlJyArIGAke3Byb2plY3QuaW5kZXh9YCkudmFsdWU7XG4gICAgY29uc3QgZGVzY1ZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtZGVzY3JpcHRpb24nICsgYCR7cHJvamVjdC5pbmRleH1gKS52YWx1ZTtcbiAgICBjb25zdCBkdWVWYWx1ZSA9IG5ldyBEYXRlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWR1ZS1kYXRlJyArIGAke3Byb2plY3QuaW5kZXh9YCkudmFsdWUpO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtcHJpb3JpdHknICsgYCR7cHJvamVjdC5pbmRleH1gKS52YWx1ZTtcbiAgICBwcm9qZWN0LnRpdGxlID0gdGl0bGVWYWx1ZTtcbiAgICBwcm9qZWN0LmRlc2NyaXB0aW9uID0gZGVzY1ZhbHVlO1xuICAgIHByb2plY3QuZHVlRGF0ZSA9IGR1ZVZhbHVlO1xuICAgIHByb2plY3QucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICBzaG93UHJvamVjdHMocHJvamVjdEFycmF5KTtcbiAgICBhc3NpZ25Qcm9qZWN0VG9Eb1N1Ym1pdHMoKTtcbiAgICBhc3NpZ25Qcm9qZWN0VG9Eb1JlbW92ZUJ0bnMoKTtcbiAgICBhc3NpZ25Qcm9qZWN0UmVtb3ZlQnRucygpO1xuICAgIHNhdmVQcm9qZWN0c1RvU3RvcmFnZShwcm9qZWN0QXJyYXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gYXNzaWduUHJvamVjdFRvRG9TdWJtaXRzKCkge1xuICAgIGNvbnN0IHByb2plY3RUb0RvRm9ybXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC10b2RvLWZvcm0nKTtcbiAgICBwcm9qZWN0VG9Eb0Zvcm1zLmZvckVhY2goZnVuY3Rpb24oZm9ybSkge1xuICAgICAgbGV0IHByb2plY3RJbmRleCA9IGZvcm0uZGF0YXNldC5pbmRleDtcbiAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXRvZG8tc3VibWl0JyArIGAke3Byb2plY3RJbmRleH1gKTtcbiAgICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBhZGRQcm9qZWN0VG9EbyhlLCBwcm9qZWN0SW5kZXgpKTtcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gYXNzaWduUHJvamVjdFJlbW92ZUJ0bnMoKSB7XG4gICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0Jyk7XG4gICAgcHJvamVjdERpdi5mb3JFYWNoKGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICAgIGNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXJlbW92ZScgKyBgJHtwcm9qZWN0LmRhdGFzZXQuaW5kZXh9YCk7XG4gICAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gcmVtb3ZlUHJvamVjdChlLCBwcm9qZWN0LmRhdGFzZXQuaW5kZXgpKTtcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gYXNzaWduUHJvamVjdEVkaXRCdG5zKHByb2plY3QpIHtcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3Qtc3VibWl0LWVkaXQnICsgYCR7cHJvamVjdC5pbmRleH1gKTtcbiAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGVkaXRQcm9qZWN0KGUsIHByb2plY3QpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFByb2plY3RUb0RvKGUsIHByb2plY3RJbmRleCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBwcm9qZWN0QXJyYXlbcHJvamVjdEluZGV4XTtcbiAgICAgIGNvbnN0IHRpdGxlVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10b2RvLXRpdGxlJytgJHtwcm9qZWN0SW5kZXh9YCkudmFsdWU7XG4gICAgICBjb25zdCBkZXNjVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10b2RvLWRlc2NyaXB0aW9uJytgJHtwcm9qZWN0SW5kZXh9YCkudmFsdWU7XG4gICAgICBjb25zdCBkYXRlT3B0aW9ucyA9IHsgZGF0ZVN0eWxlOiBcImZ1bGxcIiwgdGltZVN0eWxlOiBcInNob3J0XCJ9O1xuICAgICAgY29uc3QgZHVlVmFsdWUgPSBuZXcgRGF0ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10b2RvLWR1ZS1kYXRlJytgJHtwcm9qZWN0SW5kZXh9YCkudmFsdWUpLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwgZGF0ZU9wdGlvbnMpO1xuICAgICAgY29uc3QgaW5kZXggPSBjdXJyZW50UHJvamVjdC50b0Rvcy5sZW5ndGg7XG4gICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXRvZG8tcHJpb3JpdHknKS52YWx1ZTtcbiAgICAgIGNvbnN0IG5ld1RvRG8gPSB0b0RvLnRvRG9GYWN0b3J5KHRpdGxlVmFsdWUsIGRlc2NWYWx1ZSwgZHVlVmFsdWUsIGluZGV4LCBwcmlvcml0eSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10b2RvLWZvcm0nK2Ake3Byb2plY3RJbmRleH1gKS5yZXNldCgpO1xuICAgICAgY3VycmVudFByb2plY3QudG9Eb3MucHVzaChuZXdUb0RvKTtcbiAgICAgIHNob3dQcm9qZWN0cyhwcm9qZWN0QXJyYXkpO1xuICAgICAgYXNzaWduUHJvamVjdFRvRG9TdWJtaXRzKCk7XG4gICAgICBhc3NpZ25Qcm9qZWN0VG9Eb1JlbW92ZUJ0bnMoKTtcbiAgICAgIGFzc2lnblByb2plY3RSZW1vdmVCdG5zKCk7XG4gICAgICBzYXZlUHJvamVjdHNUb1N0b3JhZ2UocHJvamVjdEFycmF5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVkaXRQcm9qZWN0VG9EbyhlLCB0b2RvLCBwcm9qZWN0KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRpdGxlVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10b2RvLXRpdGxlJyArIGAke3Byb2plY3QuaW5kZXh9YCArICBgJHt0b2RvLmluZGV4fWApLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXRvZG8tZGVzY3JpcHRpb24nICsgYCR7cHJvamVjdC5pbmRleH1gICsgIGAke3RvZG8uaW5kZXh9YCkudmFsdWU7XG4gICAgY29uc3QgZHVlVmFsdWUgPSBuZXcgRGF0ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10b2RvLWR1ZS1kYXRlJyArIGAke3Byb2plY3QuaW5kZXh9YCArICBgJHt0b2RvLmluZGV4fWApLnZhbHVlKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXRvZG8tcHJpb3JpdHknICsgYCR7cHJvamVjdC5pbmRleH1gICsgIGAke3RvZG8uaW5kZXh9YCkudmFsdWU7XG4gICAgdG9kby50aXRsZSA9IHRpdGxlVmFsdWU7XG4gICAgdG9kby5kZXNjcmlwdGlvbiA9IGRlc2NWYWx1ZTtcbiAgICB0b2RvLmR1ZURhdGUgPSBkdWVWYWx1ZTtcbiAgICB0b2RvLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgc2hvd1Byb2plY3RzKHByb2plY3RBcnJheSk7XG4gICAgYXNzaWduUHJvamVjdFRvRG9TdWJtaXRzKCk7XG4gICAgYXNzaWduUHJvamVjdFRvRG9SZW1vdmVCdG5zKCk7XG4gICAgYXNzaWduUHJvamVjdFJlbW92ZUJ0bnMoKTtcbiAgICBzYXZlUHJvamVjdHNUb1N0b3JhZ2UocHJvamVjdEFycmF5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVByb2plY3RUb0RvKGUsIHByb2plY3QsIHRvRG8pIHtcbiAgICByZW1vdmVQcm9qZWN0VG9Eb0RPTShwcm9qZWN0LmluZGV4LCB0b0RvLmluZGV4KTtcbiAgICBwcm9qZWN0LnRvRG9zLnNwbGljZSh0b0RvLmluZGV4LCAxKTtcbiAgICByZWR1Y2VJbmRleChwcm9qZWN0LnRvRG9zLCB0b0RvLmluZGV4KTtcbiAgICBzaG93UHJvamVjdHMocHJvamVjdEFycmF5KTtcbiAgICBhc3NpZ25Qcm9qZWN0VG9Eb1N1Ym1pdHMoKTtcbiAgICBhc3NpZ25Qcm9qZWN0VG9Eb1JlbW92ZUJ0bnMoKTtcbiAgICBhc3NpZ25Qcm9qZWN0UmVtb3ZlQnRucygpO1xuICAgIHNhdmVQcm9qZWN0c1RvU3RvcmFnZShwcm9qZWN0QXJyYXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gYXNzaWduUHJvamVjdFRvRG9SZW1vdmVCdG5zKCkge1xuICAgIHByb2plY3RBcnJheS5mb3JFYWNoKGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICAgIHByb2plY3QudG9Eb3MuZm9yRWFjaChmdW5jdGlvbih0b0RvKSB7XG4gICAgICAgIGlmICh0b0RvICE9ICcnKSB7XG4gICAgICAgICAgbGV0IHRvRG9SZW1vdmVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10b2RvLXJlbW92ZScgKyBgJHtwcm9qZWN0LmluZGV4fWAgKyBgJHt0b0RvLmluZGV4fWApO1xuICAgICAgICAgIHRvRG9SZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gcmVtb3ZlUHJvamVjdFRvRG8oZSwgcHJvamVjdCwgdG9EbykpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGFzc2lnblByb2plY3RUb0RvRWRpdEJ0bnModG9EbywgcHJvamVjdCkge1xuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10b2RvLXN1Ym1pdC1lZGl0JyArIGAke3Byb2plY3QuaW5kZXh9YCArIGAke3RvRG8uaW5kZXh9YCk7XG4gICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBlZGl0UHJvamVjdFRvRG8oZSwgdG9EbywgcHJvamVjdCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVkdWNlSW5kZXgoYXJyYXksIHJlbW92ZWRJdGVtSW5kZXgpIHtcbiAgICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIGlmIChpdGVtLmluZGV4ID4gcmVtb3ZlZEl0ZW1JbmRleCkge1xuICAgICAgICBpdGVtLmluZGV4IC09IDE7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuICAgIFxuICByZXR1cm4geyBwcm9qZWN0QXJyYXksIGFzc2lnblByb2plY3RFZGl0QnRucywgYXNzaWduUHJvamVjdFRvRG9FZGl0QnRucywgcHJvamVjdFN0b3JhZ2VMb2FkIH1cbiAgICBcbn0pKCk7IiwiZXhwb3J0IHsgc2hvd1RvRG9zLCByZW1vdmVOb25Qcm9qZWN0VG9EbyB9XG5pbXBvcnQgeyB0b0RvIGFzIHRvRG9GaWxlIH0gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IHsgZWRpdFRvRG9Gb3JtIH0gZnJvbSBcIi4vdG9kby1lZGl0LWZvcm1cIjtcbmltcG9ydCB7IGZvcm1Ub2dnbGUgfSBmcm9tIFwiLi4vZm9ybS10b2dnbGVcIjtcblxuY29uc3QgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWxpc3QnKTtcblxuZnVuY3Rpb24gc2hvd1RvRG9zKGFycmF5KSB7XG4gIHJlc2V0VG9Eb3MoKTtcbiAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgY29uc3QgdG9Eb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvRG9EaXYuaWQgPSAndG9kby1pdGVtJyArIGAke2l0ZW0uaW5kZXh9YDtcbiAgICB0b0RvRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8taXRlbScpO1xuICAgIHRvRG9EaXYuZGF0YXNldC5pbmRleCA9IGl0ZW0uaW5kZXg7XG5cbiAgICBjb25zdCB0b0RvQ29udGVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b0RvQ29udGVudHMuY2xhc3NMaXN0LmFkZCgndG9kby1jb250ZW50Jyk7XG5cbiAgICBjb25zdCB0b0RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdG9Eb1RpdGxlLnRleHRDb250ZW50ID0gYCR7aXRlbS50aXRsZX1gO1xuICAgIHRvRG9UaXRsZS5jbGFzc0xpc3QuYWRkKGBwcmlvcml0eS0ke2l0ZW0ucHJpb3JpdHl9YCk7XG5cbiAgICBjb25zdCB0b0RvRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0b0RvRGVzYy50ZXh0Q29udGVudCA9IGAke2l0ZW0uZGVzY3JpcHRpb259YDtcblxuICAgIGNvbnN0IHRvRG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRvRG9EYXRlLnRleHRDb250ZW50ID0gYER1ZSBieTogJHtpdGVtLmR1ZURhdGV9YDtcblxuICAgIGNvbnN0IHRvRG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwcmlvcml0eUNhcGl0YWxpemVkID0gaXRlbS5wcmlvcml0eVswXS50b1VwcGVyQ2FzZSgpICsgaXRlbS5wcmlvcml0eS5zbGljZSgxKTtcbiAgICB0b0RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7cHJpb3JpdHlDYXBpdGFsaXplZH1gO1xuXG4gICAgY29uc3QgdG9Eb0VkaXRGb3JtID0gZWRpdFRvRG9Gb3JtKGl0ZW0sIGl0ZW0uaW5kZXgpO1xuXG4gICAgY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmVtb3ZlQnRuLmlkID0gJ3RvZG8tcmVtb3ZlJyArIGAke2l0ZW0uaW5kZXh9YDtcbiAgICByZW1vdmVCdG4uaW5uZXJUZXh0ID0gXCJYXCI7XG4gICAgcmVtb3ZlQnRuLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZS1idXR0b24nKTtcblxuICAgIGNvbnN0IHNob3dFZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc2hvd0VkaXRCdXR0b24uaWQgPSAndG9kby1lZGl0LXNob3cnICsgYCR7aXRlbS5pbmRleH1gO1xuICAgIHNob3dFZGl0QnV0dG9uLnRleHRDb250ZW50ID0gJ0VkaXQgVG8gRG8nO1xuICAgIHNob3dFZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYnV0dG9uJyk7XG5cbiAgICBjb25zdCBoaWRlRWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGhpZGVFZGl0QnV0dG9uLmlkID0gJ3RvZG8tZWRpdC1oaWRlJyArIGAke2l0ZW0uaW5kZXh9YDtcbiAgICBoaWRlRWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdIaWRlIEZvcm0nO1xuICAgIGhpZGVFZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYnV0dG9uJywgJ3RvZ2dsZS12aXNpYmlsaXR5Jyk7XG5cbiAgICBzaG93RWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBmb3JtVG9nZ2xlLnNob3dGb3JtKHNob3dFZGl0QnV0dG9uLCBoaWRlRWRpdEJ1dHRvbiwgdG9Eb0VkaXRGb3JtLCBlKSk7XG4gICAgc2hvd0VkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gdG9Eb0ZpbGUuYXNzaWduVG9Eb0VkaXRCdG5zKGl0ZW0pKTtcbiAgICBoaWRlRWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBmb3JtVG9nZ2xlLmhpZGVGb3JtKHNob3dFZGl0QnV0dG9uLCBoaWRlRWRpdEJ1dHRvbiwgdG9Eb0VkaXRGb3JtLCBlKSk7XG5cbiAgICB0b0RvQ29udGVudHMuYXBwZW5kKHRvRG9UaXRsZSwgdG9Eb0Rlc2MsIHRvRG9EYXRlLCB0b0RvUHJpb3JpdHksIHRvRG9FZGl0Rm9ybSk7XG4gICAgdG9Eb0Rpdi5hcHBlbmQodG9Eb0NvbnRlbnRzLCByZW1vdmVCdG4sIHNob3dFZGl0QnV0dG9uLCBoaWRlRWRpdEJ1dHRvbik7XG4gICAgdG9Eb0NvbnRhaW5lci5hcHBlbmQodG9Eb0Rpdik7XG4gIH0pXG59XG5cbmZ1bmN0aW9uIHJlbW92ZU5vblByb2plY3RUb0RvKHRvRG9JbmRleCkge1xuICBjb25zdCB0b0RvRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8taXRlbScgKyBgJHt0b0RvSW5kZXh9YCk7XG4gIHRvRG9EaXYucmVtb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0VG9Eb3MoKSB7XG4gIHRvRG9Db250YWluZXIuaW5uZXJUZXh0ID0gJyc7XG59XG4iLCJleHBvcnQgeyBlZGl0VG9Eb0Zvcm0gfTtcblxuICBmdW5jdGlvbiBlZGl0VG9Eb0Zvcm0odG9EbywgdG9kb0luZGV4KSB7XG4gICAgY29uc3QgbmV3Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBuZXdGb3JtLmNsYXNzTGlzdC5hZGQoXCJ0b2dnbGUtdmlzaWJpbGl0eVwiKTtcbiAgICBuZXdGb3JtLmRhdGFzZXQuaW5kZXggPSB0b2RvSW5kZXg7XG4gICAgbmV3Rm9ybS5pZCA9ICd0b2RvLWVkaXQtZm9ybScgKyBgJHt0b2RvSW5kZXh9YDtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUuaWQgPSAndG9kby10aXRsZScgKyBgJHt0b2RvSW5kZXh9YDtcbiAgICB0aXRsZUxhYmVsLmlubmVyVGV4dCA9ICdUaXRsZTogJztcbiAgICB0aXRsZS52YWx1ZSA9IHRvRG8udGl0bGU7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgY29uc3QgZGVzY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY3JpcHRpb24uaWQgPSAndG9kby1kZXNjcmlwdGlvbicgKyBgJHt0b2RvSW5kZXh9YDtcbiAgICBkZXNjTGFiZWwuaW5uZXJUZXh0ID0gJ0Rlc2NyaXB0aW9uOiAnO1xuICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gdG9Eby5kZXNjcmlwdGlvbjtcblxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGR1ZURhdGUuaWQgPSAndG9kby1kdWUtZGF0ZScgKyBgJHt0b2RvSW5kZXh9YDtcbiAgICBkYXRlTGFiZWwuaW5uZXJUZXh0ID0gJ0R1ZSBieTogJztcbiAgICBkdWVEYXRlLnR5cGUgPSAnZGF0ZXRpbWUtbG9jYWwnO1xuXG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJpb3JpdHlMYWJlbC5mb3IgPSAndG9kby1wcmlvcml0eSc7XG4gICAgcHJpb3JpdHlMYWJlbC5pbm5lclRleHQgPSAnUHJpb3JpdHknO1xuXG4gICAgY29uc3QgcHJpb3JpdHlUeXBlcyA9IFsnbm9uZScsICdoaWdoZXN0JywgJ2hpZ2gnLCAnbWlkZGxlJywgJ2xvdyddO1xuICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgcHJpb3JpdHlTZWxlY3QuaWQgPSAndG9kby1wcmlvcml0eScgKyBgJHt0b2RvSW5kZXh9YDtcbiAgICBwcmlvcml0eVNlbGVjdC5uYW1lID0gJ3ByaW9yaXRpZXMnO1xuICAgIHByaW9yaXR5VHlwZXMuZm9yRWFjaChmdW5jdGlvbih0eXBlKSB7XG4gICAgICBjb25zdCBwcmlvcml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgcHJpb3JpdHlPcHRpb24udmFsdWUgPSB0eXBlO1xuICAgICAgcHJpb3JpdHlPcHRpb24udGV4dCA9IHR5cGVbMF0udG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSk7XG4gICAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmQocHJpb3JpdHlPcHRpb24pO1xuICAgIH0pXG4gICAgcHJpb3JpdHlTZWxlY3QudmFsdWUgPSB0b0RvLnByaW9yaXR5O1xuXG4gICAgbmV3Rm9ybS5hcHBlbmQodGl0bGVMYWJlbCwgdGl0bGUsIGRlc2NMYWJlbCwgZGVzY3JpcHRpb24sIGRhdGVMYWJlbCwgZHVlRGF0ZSwgcHJpb3JpdHlMYWJlbCwgcHJpb3JpdHlTZWxlY3QpO1xuXG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBzdWJtaXQudHlwZSA9ICdzdWJtaXQnO1xuICAgIHN1Ym1pdC5uYW1lID0gJ3N1Ym1pdCc7XG4gICAgc3VibWl0LmlkID0gJ3RvZG8tc3VibWl0LWVkaXQnICsgYCR7dG9kb0luZGV4fWA7XG4gICAgc3VibWl0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYnV0dG9uJyk7XG4gICAgbmV3Rm9ybS5hcHBlbmQoc3VibWl0KTtcblxuICAgIHJldHVybiBuZXdGb3JtO1xuICB9IiwiZXhwb3J0IHsgdG9EbyB9O1xuaW1wb3J0IHsgcmVtb3ZlTm9uUHJvamVjdFRvRG8sIHNob3dUb0RvcyB9IGZyb20gXCIuL3RvZG8tZG9tXCI7XG5pbXBvcnQgeyBzYXZlVG9Eb3NUb1N0b3JhZ2UsIHJldHJpZXZlU2F2ZWRUb0RvcyB9IGZyb20gXCIuLi9sb2NhbC1zdG9yYWdlXCI7XG5cbmNvbnN0IHRvRG8gPSAoZnVuY3Rpb24oKSB7XG5cbiAgbGV0IHRvRG9BcnJheSA9IFtdO1xuXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXN1Ym1pdCcpO1xuICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBidWlsZEFuZEFkZFRvRG8pO1xuXG4gIGZ1bmN0aW9uIHRvRG9TdG9yYWdlTG9hZCgpIHtcbiAgICBjb25zdCBzYXZlZFRvRG9PYmplY3QgPSByZXRyaWV2ZVNhdmVkVG9Eb3MoKTtcbiAgICBpZihzYXZlZFRvRG9PYmplY3QpIHtcbiAgICAgIHNhdmVkVG9Eb09iamVjdC5mb3JFYWNoKGZ1bmN0aW9uKHNhdmVkVG9Ebykge1xuICAgICAgICB0b0RvQXJyYXkucHVzaChzYXZlZFRvRG8pO1xuICAgICAgfSk7XG4gICAgICBzaG93VG9Eb3ModG9Eb0FycmF5KTtcbiAgICAgIGFzc2lnblJlbW92ZUJ0bnMoKTtcbiAgICAgIHNhdmVUb0Rvc1RvU3RvcmFnZSh0b0RvQXJyYXkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRvRG9GYWN0b3J5ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGluZGV4LCBwcmlvcml0eSkge1xuICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgaW5kZXgsIHByaW9yaXR5IH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkQW5kQWRkVG9EbyhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRpdGxlVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby10aXRsZScpLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWRlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgY29uc3QgZGF0ZU9wdGlvbnMgPSB7IGRhdGVTdHlsZTogXCJmdWxsXCIsIHRpbWVTdHlsZTogXCJzaG9ydFwifTtcbiAgICBjb25zdCBkdWVWYWx1ZSA9IG5ldyBEYXRlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWR1ZS1kYXRlJykudmFsdWUpLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwgZGF0ZU9wdGlvbnMpO1xuICAgIGNvbnN0IGluZGV4ID0gdG9Eb0FycmF5Lmxlbmd0aDtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXByaW9yaXR5JykudmFsdWU7XG4gICAgY29uc3QgbmV3VG9EbyA9IHRvRG9GYWN0b3J5KHRpdGxlVmFsdWUsIGRlc2NWYWx1ZSwgZHVlVmFsdWUsIGluZGV4LCBwcmlvcml0eSk7XG4gICAgdG9Eb0FycmF5LnB1c2gobmV3VG9Ebyk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZm9ybScpLnJlc2V0KCk7XG4gICAgc2hvd1RvRG9zKHRvRG9BcnJheSk7XG4gICAgYXNzaWduUmVtb3ZlQnRucygpO1xuICAgIHNhdmVUb0Rvc1RvU3RvcmFnZSh0b0RvQXJyYXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlVG9EbyhlLCB0b0RvSW5kZXgpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmVtb3ZlTm9uUHJvamVjdFRvRG8odG9Eb0luZGV4KTtcbiAgICB0b0RvQXJyYXkuc3BsaWNlKHRvRG9JbmRleCwgMSk7XG4gICAgcmVkdWNlSW5kZXgodG9Eb0FycmF5LCB0b0RvSW5kZXgpO1xuICAgIHNob3dUb0Rvcyh0b0RvQXJyYXkpO1xuICAgIGFzc2lnblJlbW92ZUJ0bnMoKTtcbiAgICBzYXZlVG9Eb3NUb1N0b3JhZ2UodG9Eb0FycmF5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVkaXRUb0RvKGUsIHRvZG8pIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGl0bGVWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXRpdGxlJyArIGAke3RvZG8uaW5kZXh9YCkudmFsdWU7XG4gICAgY29uc3QgZGVzY1ZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZGVzY3JpcHRpb24nICsgYCR7dG9kby5pbmRleH1gKS52YWx1ZTtcbiAgICBjb25zdCBkdWVWYWx1ZSA9IG5ldyBEYXRlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWR1ZS1kYXRlJyArIGAke3RvZG8uaW5kZXh9YCkudmFsdWUpO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tcHJpb3JpdHknICsgYCR7dG9kby5pbmRleH1gKS52YWx1ZTtcbiAgICB0b2RvLnRpdGxlID0gdGl0bGVWYWx1ZTtcbiAgICB0b2RvLmRlc2NyaXB0aW9uID0gZGVzY1ZhbHVlO1xuICAgIHRvZG8uZHVlRGF0ZSA9IGR1ZVZhbHVlO1xuICAgIHRvZG8ucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICBzaG93VG9Eb3ModG9Eb0FycmF5KTtcbiAgICBhc3NpZ25SZW1vdmVCdG5zKCk7XG4gICAgc2F2ZVRvRG9zVG9TdG9yYWdlKHRvRG9BcnJheSk7XG4gIH1cblxuICBmdW5jdGlvbiBhc3NpZ25SZW1vdmVCdG5zKCkge1xuICAgIGNvbnN0IHRvRG9QYXJhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvLWl0ZW0nKTtcbiAgICB0b0RvUGFyYXMuZm9yRWFjaChmdW5jdGlvbih0b0RvKSB7XG4gICAgICBjb25zdCByZW1vdmVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1yZW1vdmUnICsgYCR7dG9Eby5kYXRhc2V0LmluZGV4fWApO1xuICAgICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHJlbW92ZVRvRG8oZSwgdG9Eby5kYXRhc2V0LmluZGV4KSk7XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGFzc2lnblRvRG9FZGl0QnRucyh0b2RvKSB7XG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXN1Ym1pdC1lZGl0JyArIGAke3RvZG8uaW5kZXh9YCk7XG4gICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBlZGl0VG9EbyhlLCB0b2RvKSk7XG4gIH1cblxuICBmdW5jdGlvbiByZWR1Y2VJbmRleChhcnJheSwgcmVtb3ZlZEl0ZW1JbmRleCkge1xuICAgIGFycmF5LmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgaWYgKGl0ZW0uaW5kZXggPiByZW1vdmVkSXRlbUluZGV4KSB7XG4gICAgICAgIGl0ZW0uaW5kZXggLT0gMTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gICAgXG4gIHJldHVybiB7IHRvRG9BcnJheSwgdG9Eb0ZhY3RvcnksIGFzc2lnblRvRG9FZGl0QnRucywgdG9Eb1N0b3JhZ2VMb2FkIH1cbiAgICBcbn0pKCk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgdG9EbyB9IGZyb20gJy4vbW9kdWxlcy90b2RvLWl0ZW1zL3RvZG8nO1xuaW1wb3J0IHsgcHJvamVjdCB9IGZyb20gJy4vbW9kdWxlcy9wcm9qZWN0cy9wcm9qZWN0JztcbmltcG9ydCB7IHJldHJpZXZlU2F2ZWRQcm9qZWN0cywgcmV0cmlldmVTYXZlZFRvRG9zLCBjbGVhclN0b3JhZ2UgfSBmcm9tICcuL21vZHVsZXMvbG9jYWwtc3RvcmFnZSc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICB0b0RvLnRvRG9TdG9yYWdlTG9hZCgpO1xuICBwcm9qZWN0LnByb2plY3RTdG9yYWdlTG9hZCgpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==