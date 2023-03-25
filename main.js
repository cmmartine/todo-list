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
    projectDate.textContent = `Due by: ${project.dueDate}`;

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
        const buildProject = projectFactory(savedProject.title, savedProject.description, savedProject.dueDate, savedProject.index, savedProject.priority, savedProject.toDos);
        projectArray.push(buildProject);
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
    const dueValue = new Date(document.getElementById('project-due-date').value);
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
      const dueValue = new Date(document.getElementById('project-todo-due-date'+`${projectIndex}`).value);
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

  function printArray() {
    projectArray.forEach(function (item) {
      console.log(item);
    });
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
        const buildToDo = toDoFactory(savedToDo.title, savedToDo.description, savedToDo.dueDate, savedToDo.index, savedToDo.priority);
        toDoArray.push(buildToDo);
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
    const dueValue = new Date(document.getElementById('todo-due-date').value);
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

  function printArray() {
    toDoArray.forEach(function (item) {
      console.log(item);
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsNkNBQTZDLGdCQUFnQixpQkFBaUIsR0FBRyxVQUFVLGtCQUFrQiwyQkFBMkIsc0JBQXNCLEdBQUcsT0FBTyx1QkFBdUIsR0FBRyx3QkFBd0Isa0JBQWtCLDJCQUEyQixxQkFBcUIsR0FBRyx3QkFBd0Isa0JBQWtCLEdBQUcsVUFBVSxrQkFBa0Isd0JBQXdCLHFCQUFxQixnQkFBZ0IsaUJBQWlCLGlCQUFpQixhQUFhLHNDQUFzQyxpQkFBaUIsR0FBRyxhQUFhLHVCQUF1QixHQUFHLHlCQUF5QixrQkFBa0Isc0JBQXNCLEdBQUcsZUFBZSxrQkFBa0IsMkJBQTJCLHFCQUFxQixHQUFHLGtCQUFrQixxQkFBcUIsR0FBRyxVQUFVLGtCQUFrQiwyQkFBMkIsa0NBQWtDLEdBQUcsa0JBQWtCLGlCQUFpQixpQkFBaUIsaUJBQWlCLHNDQUFzQyxpQkFBaUIsc0JBQXNCLHFCQUFxQixHQUFHLHdCQUF3Qiw4Q0FBOEMsR0FBRyx5QkFBeUIsK0NBQStDLEdBQUcsY0FBYyxrQkFBa0Isb0JBQW9CLDJCQUEyQix1QkFBdUIsaUNBQWlDLGlDQUFpQyxvQ0FBb0Msc0JBQXNCLGlEQUFpRCxHQUFHLFFBQVEsd0JBQXdCLCtCQUErQixrQkFBa0IsMkJBQTJCLG9CQUFvQix1QkFBdUIsd0JBQXdCLGVBQWUscURBQXFELEdBQUcsMEJBQTBCLGtCQUFrQiw2REFBNkQsc0NBQXNDLHlDQUF5Qyw0QkFBNEIsc0JBQXNCLGtCQUFrQixlQUFlLEdBQUcscUNBQXFDLDBCQUEwQixxQkFBcUIsbUJBQW1CLEdBQUcsb0JBQW9CLGdCQUFnQixtQkFBbUIsc0JBQXNCLHNDQUFzQyxpQkFBaUIsc0JBQXNCLGdCQUFnQixpQkFBaUIscUJBQXFCLEdBQUcsMEJBQTBCLHFDQUFxQyxHQUFHLDJCQUEyQiwrQ0FBK0MsR0FBRyxzQkFBc0IsZ0JBQWdCLHFCQUFxQixtQkFBbUIsb0JBQW9CLHFCQUFxQiwwQ0FBMEMsR0FBRyx3QkFBd0Isa0JBQWtCLHdCQUF3QixtQ0FBbUMsb0JBQW9CLGlCQUFpQiwyQ0FBMkMsR0FBRyx3QkFBd0IsZ0JBQWdCLG1CQUFtQixxQkFBcUIsR0FBRyxvQ0FBb0Msa0JBQWtCLDJCQUEyQiwwQkFBMEIsR0FBRyxvQkFBb0Isc0JBQXNCLEdBQUcsdUJBQXVCLGVBQWUsc0JBQXNCLEdBQUcsb0JBQW9CLGtCQUFrQixzQkFBc0IsR0FBRyxzQkFBc0IsMEJBQTBCLHNCQUFzQixHQUFHLG1CQUFtQixnQkFBZ0Isc0JBQXNCLEdBQUcsYUFBYSxrQkFBa0Isd0JBQXdCLGlCQUFpQixzQ0FBc0MsOEJBQThCLEdBQUcsZUFBZSx1QkFBdUIsR0FBRywrQkFBK0IsNEJBQTRCLG9CQUFvQiw2QkFBNkIsS0FBSyw0QkFBNEIsb0JBQW9CLDZCQUE2Qix1QkFBdUIseUJBQXlCLEtBQUssMEJBQTBCLG9CQUFvQiw2QkFBNkIsbUJBQW1CLEtBQUssT0FBTyxPQUFPLGdGQUFnRixVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sNEJBQTRCLGdCQUFnQixpQkFBaUIsR0FBRyxVQUFVLGtCQUFrQiwyQkFBMkIsc0JBQXNCLEdBQUcsT0FBTyx1QkFBdUIsR0FBRyx3QkFBd0Isa0JBQWtCLDJCQUEyQixxQkFBcUIsR0FBRyx3QkFBd0Isa0JBQWtCLEdBQUcsVUFBVSxrQkFBa0Isd0JBQXdCLHFCQUFxQixnQkFBZ0IsaUJBQWlCLGlCQUFpQixhQUFhLHNDQUFzQyxpQkFBaUIsR0FBRyxhQUFhLHVCQUF1QixHQUFHLHlCQUF5QixrQkFBa0Isc0JBQXNCLEdBQUcsZUFBZSxrQkFBa0IsMkJBQTJCLHFCQUFxQixHQUFHLGtCQUFrQixxQkFBcUIsR0FBRyxVQUFVLGtCQUFrQiwyQkFBMkIsa0NBQWtDLEdBQUcsa0JBQWtCLGlCQUFpQixpQkFBaUIsaUJBQWlCLHNDQUFzQyxpQkFBaUIsc0JBQXNCLHFCQUFxQixHQUFHLHdCQUF3Qiw4Q0FBOEMsR0FBRyx5QkFBeUIsK0NBQStDLEdBQUcsY0FBYyxrQkFBa0Isb0JBQW9CLDJCQUEyQix1QkFBdUIsaUNBQWlDLGlDQUFpQyxvQ0FBb0Msc0JBQXNCLGlEQUFpRCxHQUFHLFFBQVEsd0JBQXdCLCtCQUErQixrQkFBa0IsMkJBQTJCLG9CQUFvQix1QkFBdUIsd0JBQXdCLGVBQWUscURBQXFELEdBQUcsMEJBQTBCLGtCQUFrQiw2REFBNkQsc0NBQXNDLHlDQUF5Qyw0QkFBNEIsc0JBQXNCLGtCQUFrQixlQUFlLEdBQUcscUNBQXFDLDBCQUEwQixxQkFBcUIsbUJBQW1CLEdBQUcsb0JBQW9CLGdCQUFnQixtQkFBbUIsc0JBQXNCLHNDQUFzQyxpQkFBaUIsc0JBQXNCLGdCQUFnQixpQkFBaUIscUJBQXFCLEdBQUcsMEJBQTBCLHFDQUFxQyxHQUFHLDJCQUEyQiwrQ0FBK0MsR0FBRyxzQkFBc0IsZ0JBQWdCLHFCQUFxQixtQkFBbUIsb0JBQW9CLHFCQUFxQiwwQ0FBMEMsR0FBRyx3QkFBd0Isa0JBQWtCLHdCQUF3QixtQ0FBbUMsb0JBQW9CLGlCQUFpQiwyQ0FBMkMsR0FBRyx3QkFBd0IsZ0JBQWdCLG1CQUFtQixxQkFBcUIsR0FBRyxvQ0FBb0Msa0JBQWtCLDJCQUEyQiwwQkFBMEIsR0FBRyxvQkFBb0Isc0JBQXNCLEdBQUcsdUJBQXVCLGVBQWUsc0JBQXNCLEdBQUcsb0JBQW9CLGtCQUFrQixzQkFBc0IsR0FBRyxzQkFBc0IsMEJBQTBCLHNCQUFzQixHQUFHLG1CQUFtQixnQkFBZ0Isc0JBQXNCLEdBQUcsYUFBYSxrQkFBa0Isd0JBQXdCLGlCQUFpQixzQ0FBc0MsOEJBQThCLEdBQUcsZUFBZSx1QkFBdUIsR0FBRywrQkFBK0IsNEJBQTRCLG9CQUFvQiw2QkFBNkIsS0FBSyw0QkFBNEIsb0JBQW9CLDZCQUE2Qix1QkFBdUIseUJBQXlCLEtBQUssMEJBQTBCLG9CQUFvQiw2QkFBNkIsbUJBQW1CLEtBQUssT0FBTyxtQkFBbUI7QUFDdHdTO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNic0I7O0FBRXRCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QjRHOztBQUU3RztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQytEO0FBQy9ELENBQXFEO0FBQ0c7QUFDTztBQUNuQjtBQUNNOztBQUVsRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlDQUF5QyxjQUFjO0FBQ3ZEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQyxjQUFjO0FBQzdEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQyxjQUFjO0FBQ2hELDJDQUEyQyxpQkFBaUI7O0FBRTVEO0FBQ0EsaUNBQWlDLG9CQUFvQjs7QUFFckQ7QUFDQSx5Q0FBeUMsZ0JBQWdCOztBQUV6RDtBQUNBO0FBQ0EsK0NBQStDLDJCQUEyQjs7QUFFMUUsNEJBQTRCLHFFQUFpQjtBQUM3QztBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLGtFQUFjO0FBQ25DOztBQUVBO0FBQ0Esd0RBQXdELGNBQWM7QUFDdEU7QUFDQTs7QUFFQTtBQUNBLHdEQUF3RCxjQUFjO0FBQ3RFO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx3REFBd0QsY0FBYztBQUN0RTtBQUNBOztBQUVBO0FBQ0Esd0RBQXdELGNBQWM7QUFDdEU7QUFDQTs7QUFFQSwyREFBMkQsNkRBQW1CO0FBQzlFLDJEQUEyRCxtRUFBaUM7QUFDNUYsMkRBQTJELDZEQUFtQjs7QUFFOUUsMkRBQTJELDZEQUFtQjtBQUM5RSwyREFBMkQsNkRBQW1CO0FBQzlFO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxjQUFjLE9BQU8sV0FBVztBQUMzRTtBQUNBLGlDQUFpQyxjQUFjLEVBQUUsV0FBVzs7QUFFNUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDLFdBQVc7QUFDNUMsMENBQTBDLGNBQWM7O0FBRXhEO0FBQ0EsZ0NBQWdDLGlCQUFpQjs7QUFFakQ7QUFDQSx3Q0FBd0MsYUFBYTs7QUFFckQ7QUFDQTtBQUNBLDhDQUE4QyxvQkFBb0I7O0FBRWxFO0FBQ0Esb0RBQW9ELGNBQWMsT0FBTyxXQUFXO0FBQ3BGO0FBQ0E7O0FBRUEsa0NBQWtDLDRFQUFtQjs7QUFFckQ7QUFDQSwyREFBMkQsY0FBYyxPQUFPLFdBQVc7QUFDM0Y7QUFDQTs7QUFFQTtBQUNBLDJEQUEyRCxjQUFjLE9BQU8sV0FBVztBQUMzRjtBQUNBOztBQUVBLGlFQUFpRSw2REFBbUI7QUFDcEYsaUVBQWlFLHVFQUFxQztBQUN0RyxpRUFBaUUsNkRBQW1COztBQUVwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLDREQUE0RCxhQUFhO0FBQ3pFO0FBQ0E7O0FBRUE7QUFDQSxrRUFBa0UsYUFBYSxPQUFPLFVBQVU7QUFDaEc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZKNkI7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGFBQWE7O0FBRXZEO0FBQ0E7QUFDQSxvQ0FBb0MsYUFBYTtBQUNqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdEQUFnRCxhQUFhO0FBQzdEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUNBQXlDLGFBQWE7QUFDdEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0RBQWdELGFBQWE7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxhQUFhO0FBQ3hEO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN2RCtCOztBQUUvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxhQUFhLE9BQU8saUJBQWlCOztBQUVwRjtBQUNBO0FBQ0EseUNBQXlDLGFBQWEsT0FBTyxpQkFBaUI7QUFDOUU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvREFBb0QsYUFBYSxRQUFRLGlCQUFpQjtBQUMxRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZDQUE2QyxhQUFhLFFBQVEsaUJBQWlCO0FBQ25GO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9EQUFvRCxhQUFhLFFBQVEsaUJBQWlCO0FBQzFGOztBQUVBO0FBQ0E7QUFDQSxvREFBb0QsYUFBYSxRQUFRLGlCQUFpQjtBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELGFBQWEsUUFBUSxpQkFBaUI7QUFDdEY7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3pEMEI7OztBQUcxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxhQUFhOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxNQUFNLE9BQU8sYUFBYTtBQUNwRSxxQkFBcUIsTUFBTTtBQUMzQjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsOENBQThDLGFBQWE7QUFDM0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxhQUFhO0FBQ3hEO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRG1CO0FBQ2tFO0FBQzNDO0FBQ3NDOztBQUVoRjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLHFFQUFxQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNLDBEQUFZO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLE1BQU0scUVBQXFCO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxRUFBcUI7QUFDekI7O0FBRUE7QUFDQSxJQUFJLDhEQUFnQjtBQUNwQjtBQUNBO0FBQ0EsSUFBSSwwREFBWTtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFFQUFxQjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0Esb0VBQW9FLGNBQWM7QUFDbEYseUVBQXlFLGNBQWM7QUFDdkYsOEVBQThFLGNBQWM7QUFDNUYscUVBQXFFLGNBQWM7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBEQUFZO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLElBQUkscUVBQXFCO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLGFBQWE7QUFDeEY7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFLHNCQUFzQjtBQUM1RjtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLHVFQUF1RSxjQUFjO0FBQ3JGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUVBQXlFLGFBQWE7QUFDdEYsOEVBQThFLGFBQWE7QUFDM0YsbUZBQW1GLGFBQWE7QUFDaEc7QUFDQTtBQUNBLHNCQUFzQiw4REFBZ0I7QUFDdEMscURBQXFELGFBQWE7QUFDbEU7QUFDQSxNQUFNLDBEQUFZO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLE1BQU0scUVBQXFCO0FBQzNCOztBQUVBO0FBQ0E7QUFDQSx5RUFBeUUsY0FBYyxRQUFRLFdBQVc7QUFDMUcsOEVBQThFLGNBQWMsUUFBUSxXQUFXO0FBQy9HLG1GQUFtRixjQUFjLFFBQVEsV0FBVztBQUNwSCwwRUFBMEUsY0FBYyxRQUFRLFdBQVc7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBEQUFZO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLElBQUkscUVBQXFCO0FBQ3pCOztBQUVBO0FBQ0EsSUFBSSxrRUFBb0I7QUFDeEI7QUFDQTtBQUNBLElBQUksMERBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxRUFBcUI7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRkFBaUYsY0FBYyxPQUFPLFdBQVc7QUFDakg7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQSw0RUFBNEUsY0FBYyxPQUFPLFdBQVc7QUFDNUc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakx5QztBQUMxQyxDQUEwQztBQUNNO0FBQ0o7O0FBRTVDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFdBQVc7QUFDN0M7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLFdBQVc7QUFDMUMsd0NBQXdDLGNBQWM7O0FBRXREO0FBQ0EsOEJBQThCLGlCQUFpQjs7QUFFL0M7QUFDQSxzQ0FBc0MsYUFBYTs7QUFFbkQ7QUFDQTtBQUNBLDRDQUE0QyxvQkFBb0I7O0FBRWhFLHlCQUF5Qiw2REFBWTs7QUFFckM7QUFDQSxzQ0FBc0MsV0FBVztBQUNqRDtBQUNBOztBQUVBO0FBQ0EsOENBQThDLFdBQVc7QUFDekQ7QUFDQTs7QUFFQTtBQUNBLDhDQUE4QyxXQUFXO0FBQ3pEO0FBQ0E7O0FBRUEsb0RBQW9ELDZEQUFtQjtBQUN2RSxvREFBb0QsMERBQTJCO0FBQy9FLG9EQUFvRCw2REFBbUI7O0FBRXZFO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLDJEQUEyRCxVQUFVO0FBQ3JFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRXdCOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxVQUFVOztBQUVqRDtBQUNBO0FBQ0EsaUNBQWlDLFVBQVU7QUFDM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkNBQTZDLFVBQVU7QUFDdkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0NBQXNDLFVBQVU7QUFDaEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZDQUE2QyxVQUFVO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsVUFBVTtBQUNsRDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRGdCO0FBQzZDO0FBQ2E7O0FBRTFFOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsa0VBQWtCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU0sb0RBQVM7QUFDZjtBQUNBLE1BQU0sa0VBQWtCO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFTO0FBQ2I7QUFDQSxJQUFJLGtFQUFrQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0EsSUFBSSwrREFBb0I7QUFDeEI7QUFDQTtBQUNBLElBQUksb0RBQVM7QUFDYjtBQUNBLElBQUksa0VBQWtCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQSxpRUFBaUUsV0FBVztBQUM1RSxzRUFBc0UsV0FBVztBQUNqRiwyRUFBMkUsV0FBVztBQUN0RixrRUFBa0UsV0FBVztBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQVM7QUFDYjtBQUNBLElBQUksa0VBQWtCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxtQkFBbUI7QUFDdEY7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxvRUFBb0UsV0FBVztBQUMvRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxDQUFDOzs7Ozs7VUNqR0Q7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FpRDtBQUNJO0FBQzZDO0FBQzdFOztBQUVyQjtBQUNBLEVBQUUsMEVBQW9CO0FBQ3RCLEVBQUUsaUZBQTBCO0FBQzVCLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZm9ybS10b2dnbGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvbG9jYWwtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0cy9wcm9qZWN0LWRvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0cy9wcm9qZWN0LWVkaXQtZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0cy9wcm9qZWN0LXRvZG8tZWRpdC1mb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3RzL3Byb2plY3QtdG9kby1mb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3RzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9kby1pdGVtcy90b2RvLWRvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90b2RvLWl0ZW1zL3RvZG8tZWRpdC1mb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RvZG8taXRlbXMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMHB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbnAge1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4uY29udGVudC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXgtd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4udG9nZ2xlLXZpc2liaWxpdHkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGhlaWdodDogNTZweDtcXG4gIHRvcDogMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY5LCA3MCwgNzMpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubmF2LWgzIHtcXG4gIHBhZGRpbmctbGVmdDogMjVweDtcXG59XFxuXFxuLnRvcC1mb3Jtcy1jb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZy10b3A6IDE1cHg7XFxufVxcblxcbi5mb3JtLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbjogMHB4IDIwcHg7XFxufVxcblxcbi5pbnB1dC10aXRsZSB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWF4LXdpZHRoOiBjYWxjKDIwMHB4IC0gMTVweCk7XFxufVxcblxcbi5mb3JtLWJ1dHRvbiB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBwYWRkaW5nOiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjksIDcwLCA3Myk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5mb3JtLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY5LCA3MCwgNzMsIDAuNjY0KTtcXG59XFxuXFxuLmZvcm0tYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgzLCA5NiwgMTM0LCAwLjY2NCk7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgbWluLXdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KTtcXG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gNzJweCk7XFxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTEycHgpO1xcbiAgcGFkZGluZzogMHB4IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5OSwgMTkzLCAxNjIsIDAuMzQ5KTtcXG59XFxuXFxuaDIge1xcbiAgbWFyZ2luOiAxNXB4IDIwcHhcXG59XFxuXFxuLnByb2plY3QtbGlzdCwgLnRvZG8tbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogOTAlO1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEoMTk5LCAxOTMsIDE2MiwgMC42OTIpO1xcbn1cXG5cXG4ucHJvamVjdCwgLnRvZG8taXRlbSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgwLjFmciwgMWZyKSk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAwLjA1ZnI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIG1hcmdpbjogMTVweCAxNXB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbi50b2RvLWNvbnRlbnQsIC5wcm9qZWN0LWNvbnRlbnQge1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgbWluLXdpZHRoOiAxODBweDtcXG4gIG1heC13aWR0aDogODAlO1xcbn1cXG5cXG4ucmVtb3ZlLWJ1dHRvbiB7XFxuICBncmlkLXJvdzogMTtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjksIDcwLCA3Myk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLnJlbW92ZS1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxufVxcblxcbi5yZW1vdmUtYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4MiwgMzYsIDMxLCAwLjgwOCk7XFxufVxcblxcbi5wcm9qZWN0LXRvZG8tZGl2e1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgbWF4LXdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDVweCAwcHg7XFxuICBwYWRkaW5nOiA1cHggMHB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYig2OSwgNzAsIDczKTtcXG59XFxuXFxuLnByb2plY3QtdG9kby1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IGRvdHRlZCByZ2IoNjksIDcwLCA3Myk7XFxufVxcblxcbi5wcm9qZWN0LXRvZG8tZm9ybSB7XFxuICBncmlkLXJvdzogMztcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgbWF4LXdpZHRoOiAyMDBweDtcXG59XFxuXFxuLnByb2plY3QtdG9kby1idXR0b24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucHJpb3JpdHktbm9uZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnByaW9yaXR5LWhpZ2hlc3Qge1xcbiAgY29sb3I6IHJlZDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucHJpb3JpdHktaGlnaCB7XFxuICBjb2xvcjogb3JhbmdlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wcmlvcml0eS1taWRkbGUge1xcbiAgY29sb3I6IHJnYigwLCAxNzMsIDApO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wcmlvcml0eS1sb3cge1xcbiAgY29sb3I6IGJsdWU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2OSwgNzAsIDczKTtcXG4gIGNvbG9yOiByZ2IoMTk2LCAxOTYsIDE5Nik7XFxufVxcblxcbi5mb290ZXItcCB7XFxuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcblxcbiAgLnRvcC1mb3Jtcy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLnByb2plY3QsIC50b2RvLWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDE1cHggMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XFxuICB9XFxuXFxuICAucHJvamVjdC10b2RvLWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICB9XFxuICBcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0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YTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0VBQ2Q7O0FBRUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5wIHtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG59XFxuXFxuLnRvZ2dsZS12aXNpYmlsaXR5IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IGF1dG87XFxuICBoZWlnaHQ6IDU2cHg7XFxuICB0b3A6IDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2OSwgNzAsIDczKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm5hdi1oMyB7XFxuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxufVxcblxcbi50b3AtZm9ybXMtY29udGFpbmVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xcbn1cXG5cXG4uZm9ybS1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDBweCAyMHB4O1xcbn1cXG5cXG4uaW5wdXQtdGl0bGUge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1heC13aWR0aDogY2FsYygyMDBweCAtIDE1cHgpO1xcbn1cXG5cXG4uZm9ybS1idXR0b24ge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgcGFkZGluZzogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY5LCA3MCwgNzMpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uZm9ybS1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2OSwgNzAsIDczLCAwLjY2NCk7XFxufVxcblxcbi5mb3JtLWJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MywgOTYsIDEzNCwgMC42NjQpO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1pbi13aWR0aDogY2FsYygxMDAlIC0gNTBweCk7XFxuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDcycHgpO1xcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDExMnB4KTtcXG4gIHBhZGRpbmc6IDBweCAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTksIDE5MywgMTYyLCAwLjM0OSk7XFxufVxcblxcbmgyIHtcXG4gIG1hcmdpbjogMTVweCAyMHB4XFxufVxcblxcbi5wcm9qZWN0LWxpc3QsIC50b2RvLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKDE5OSwgMTkzLCAxNjIsIDAuNjkyKTtcXG59XFxuXFxuLnByb2plY3QsIC50b2RvLWl0ZW0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMC4xZnIsIDFmcikpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMC4wNWZyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBtYXJnaW46IDE1cHggMTVweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4udG9kby1jb250ZW50LCAucHJvamVjdC1jb250ZW50IHtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIG1pbi13aWR0aDogMTgwcHg7XFxuICBtYXgtd2lkdGg6IDgwJTtcXG59XFxuXFxuLnJlbW92ZS1idXR0b24ge1xcbiAgZ3JpZC1yb3c6IDE7XFxuICBncmlkLWNvbHVtbjogMjtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY5LCA3MCwgNzMpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5yZW1vdmUtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDApO1xcbn1cXG5cXG4ucmVtb3ZlLWJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODIsIDM2LCAzMSwgMC44MDgpO1xcbn1cXG5cXG4ucHJvamVjdC10b2RvLWRpdntcXG4gIGdyaWQtcm93OiAyO1xcbiAgbWluLXdpZHRoOiAyMDBweDtcXG4gIG1heC13aWR0aDogOTAlO1xcbiAgbWFyZ2luOiA1cHggMHB4O1xcbiAgcGFkZGluZzogNXB4IDBweDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoNjksIDcwLCA3Myk7XFxufVxcblxcbi5wcm9qZWN0LXRvZG8taXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgcmdiKDY5LCA3MCwgNzMpO1xcbn1cXG5cXG4ucHJvamVjdC10b2RvLWZvcm0ge1xcbiAgZ3JpZC1yb3c6IDM7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIG1heC13aWR0aDogMjAwcHg7XFxufVxcblxcbi5wcm9qZWN0LXRvZG8tYnV0dG9uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnByaW9yaXR5LW5vbmUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wcmlvcml0eS1oaWdoZXN0IHtcXG4gIGNvbG9yOiByZWQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnByaW9yaXR5LWhpZ2gge1xcbiAgY29sb3I6IG9yYW5nZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucHJpb3JpdHktbWlkZGxlIHtcXG4gIGNvbG9yOiByZ2IoMCwgMTczLCAwKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucHJpb3JpdHktbG93IHtcXG4gIGNvbG9yOiBibHVlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDU2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjksIDcwLCA3Myk7XFxuICBjb2xvcjogcmdiKDE5NiwgMTk2LCAxOTYpO1xcbn1cXG5cXG4uZm9vdGVyLXAge1xcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcXG5cXG4gIC50b3AtZm9ybXMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LCAudG9kby1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luOiAxNXB4IDBweDtcXG4gICAgcGFkZGluZzogMTBweCAxMnB4O1xcbiAgfVxcblxcbiAgLnByb2plY3QtdG9kby1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgfVxcbiAgXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgeyBmb3JtVG9nZ2xlIH07XG5cbmNvbnN0IGZvcm1Ub2dnbGUgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICBjb25zdCBzaG93VG9Eb0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvdy10b2RvJyk7XG4gICAgY29uc3QgaGlkZVRvRG9Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpZGUtdG9kbycpO1xuICAgIGNvbnN0IHRvRG9Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZm9ybScpXG4gICAgY29uc3Qgc2hvd1Byb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3ctcHJvamVjdCcpO1xuICAgIGNvbnN0IGhpZGVQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaWRlLXByb2plY3QnKTtcbiAgICBjb25zdCBQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWZvcm0nKVxuICAgIHNob3dUb0RvRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBzaG93Rm9ybShzaG93VG9Eb0Zvcm0sIGhpZGVUb0RvRm9ybSwgdG9Eb0Zvcm0sIGUpKTtcbiAgICBoaWRlVG9Eb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gaGlkZUZvcm0oc2hvd1RvRG9Gb3JtLCBoaWRlVG9Eb0Zvcm0sIHRvRG9Gb3JtLCBlKSk7XG4gICAgc2hvd1Byb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHNob3dGb3JtKHNob3dQcm9qZWN0Rm9ybSwgaGlkZVByb2plY3RGb3JtLCBQcm9qZWN0Rm9ybSwgZSkpO1xuICAgIGhpZGVQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBoaWRlRm9ybShzaG93UHJvamVjdEZvcm0sIGhpZGVQcm9qZWN0Rm9ybSwgUHJvamVjdEZvcm0sIGUpKTtcbiAgICAvL1RoZSBzaG93IGFuZCBoaWRlIGJ1dHRvbnMgZm9yIHByb2plY3QgdG9kb3MsIGFuZCBlZGl0cyBmb3IgYm90aCBwcm9qZWN0cyBhbmQgdG9kb3MgYXJlIGxvY2F0ZWQgaW4gdGhlaXIgcmVzcGVjdGl2ZSBkb20gZmlsZVxuXG4gICAgZnVuY3Rpb24gc2hvd0Zvcm0oc2hvd0J0biwgaGlkZUJ0biwgZm9ybSkge1xuICAgICAgICBzaG93QnRuLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZS12aXNpYmlsaXR5Jyk7XG4gICAgICAgIGhpZGVCdG4uY2xhc3NMaXN0LnJlbW92ZSgndG9nZ2xlLXZpc2liaWxpdHknKTtcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCd0b2dnbGUtdmlzaWJpbGl0eScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVGb3JtKHNob3dCdG4sIGhpZGVCdG4sIGZvcm0pIHtcbiAgICAgICAgaGlkZUJ0bi5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtdmlzaWJpbGl0eScpO1xuICAgICAgICBzaG93QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3RvZ2dsZS12aXNpYmlsaXR5Jyk7XG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgndG9nZ2xlLXZpc2liaWxpdHknKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzaG93Rm9ybSwgaGlkZUZvcm0gfVxufSkoKTsiLCJleHBvcnQgeyBzYXZlUHJvamVjdHNUb1N0b3JhZ2UsIHNhdmVUb0Rvc1RvU3RvcmFnZSwgcmV0cmlldmVTYXZlZFByb2plY3RzLCByZXRyaWV2ZVNhdmVkVG9Eb3MsIGNsZWFyU3RvcmFnZSB9XG5cbmZ1bmN0aW9uIHNhdmVQcm9qZWN0c1RvU3RvcmFnZShwcm9qZWN0QXJyYXkpIHtcbiAgY29uc3QgcHJvamVjdHNUb1NhdmUgPSBKU09OLnN0cmluZ2lmeShwcm9qZWN0QXJyYXkpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBwcm9qZWN0c1RvU2F2ZSk7XG59XG5cbmZ1bmN0aW9uIHNhdmVUb0Rvc1RvU3RvcmFnZSh0b2RvQXJyYXkpIHtcbiAgY29uc3QgdG9kb3NUb1NhdmUgPSBKU09OLnN0cmluZ2lmeSh0b2RvQXJyYXkpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCB0b2Rvc1RvU2F2ZSk7XG59XG5cbmZ1bmN0aW9uIHJldHJpZXZlU2F2ZWRQcm9qZWN0cygpIHtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnN0IHNhdmVkUHJvamVjdEFycmF5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJyk7XG4gICAgcmV0dXJuIEpTT04ucGFyc2Uoc2F2ZWRQcm9qZWN0QXJyYXkpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJldHJpZXZlU2F2ZWRUb0RvcygpIHtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnN0IHNhdmVkVG9Eb0FycmF5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJyk7XG4gICAgcmV0dXJuIEpTT04ucGFyc2Uoc2F2ZWRUb0RvQXJyYXkpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cblxuZnVuY3Rpb24gY2xlYXJTdG9yYWdlKCkge1xuICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbn1cbiIsImV4cG9ydCB7IHNob3dQcm9qZWN0cywgcmVtb3ZlUHJvamVjdERPTSwgcmVtb3ZlUHJvamVjdFRvRG9ET00gfVxuaW1wb3J0IHsgY3JlYXRlVG9Eb0Zvcm0gfSBmcm9tIFwiLi9wcm9qZWN0LXRvZG8tZm9ybVwiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdEZvcm0gfSBmcm9tIFwiLi9wcm9qZWN0LWVkaXQtZm9ybVwiO1xuaW1wb3J0IHsgZWRpdFByb2plY3RUb0RvRm9ybSB9IGZyb20gXCIuL3Byb2plY3QtdG9kby1lZGl0LWZvcm1cIjtcbmltcG9ydCB7IGZvcm1Ub2dnbGUgfSBmcm9tIFwiLi4vZm9ybS10b2dnbGVcIjtcbmltcG9ydCB7IHByb2plY3QgYXMgcHJvamVjdEZpbGV9IGZyb20gXCIuL3Byb2plY3RcIjtcblxuY29uc3QgYWxsUHJvamVjdHNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1saXN0Jyk7XG5cbmZ1bmN0aW9uIHNob3dQcm9qZWN0cyhhcnJheSkge1xuICByZXNldFByb2plY3RzKCk7XG4gIGFycmF5LmZvckVhY2goZnVuY3Rpb24ocHJvamVjdCkge1xuXG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RDb250YWluZXIuZGF0YXNldC5pbmRleCA9IHByb2plY3QuaW5kZXg7XG4gICAgcHJvamVjdENvbnRhaW5lci5pZCA9ICdwcm9qZWN0JyArIGAke3Byb2plY3QuaW5kZXh9YDtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcblxuICAgIGNvbnN0IHByb2plY3RUb0RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdFRvRG9EaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10b2RvLWRpdicpO1xuICAgIHByb2plY3RUb0RvRGl2LmlubmVyVGV4dCA9IGBUbyBEb3M6XFxuYDtcblxuICAgIGNvbnN0IHByb2plY3RSZW1vdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qZWN0UmVtb3ZlQnRuLmlkID0gJ3Byb2plY3QtcmVtb3ZlJyArYCR7cHJvamVjdC5pbmRleH1gO1xuICAgIHByb2plY3RSZW1vdmVCdG4uaW5uZXJUZXh0ID0gJ1gnO1xuICAgIHByb2plY3RSZW1vdmVCdG4uY2xhc3NMaXN0LmFkZCgncmVtb3ZlLWJ1dHRvbicpO1xuXG4gICAgY29uc3QgcHJvamVjdENvbnRlbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdENvbnRlbnRzLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY29udGVudCcpO1xuXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3QudGl0bGV9YDtcbiAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZChgcHJpb3JpdHktJHtwcm9qZWN0LnByaW9yaXR5fWApO1xuXG4gICAgY29uc3QgcHJvamVjdERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcHJvamVjdERlc2MudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0LmRlc2NyaXB0aW9ufVxcbmA7XG5cbiAgICBjb25zdCBwcm9qZWN0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcm9qZWN0RGF0ZS50ZXh0Q29udGVudCA9IGBEdWUgYnk6ICR7cHJvamVjdC5kdWVEYXRlfWA7XG5cbiAgICBjb25zdCBwcm9qZWN0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcHJvamVjdFByaW9yaXR5Q2FwaXRhbGl6ZWQgPSBwcm9qZWN0LnByaW9yaXR5WzBdLnRvVXBwZXJDYXNlKCkgKyBwcm9qZWN0LnByaW9yaXR5LnNsaWNlKDEpO1xuICAgIHByb2plY3RQcmlvcml0eS50ZXh0Q29udGVudCA9IGBQcmlvcml0eTogJHtwcm9qZWN0UHJpb3JpdHlDYXBpdGFsaXplZH1gO1xuXG4gICAgY29uc3QgcHJvamVjdEVkaXRGb3JtID0gY3JlYXRlUHJvamVjdEZvcm0ocHJvamVjdCwgcHJvamVjdC5pbmRleCk7XG4gICAgICBcbiAgICBwcm9qZWN0Q29udGVudHMuYXBwZW5kKHByb2plY3RUaXRsZSwgcHJvamVjdERlc2MsIHByb2plY3REYXRlLCBwcm9qZWN0UHJpb3JpdHksIHByb2plY3RFZGl0Rm9ybSk7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQocHJvamVjdENvbnRlbnRzLCBwcm9qZWN0UmVtb3ZlQnRuKTtcblxuICAgIGNvbnN0IHRvRG9Gb3JtID0gY3JlYXRlVG9Eb0Zvcm0ocHJvamVjdC5pbmRleCk7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQocHJvamVjdFRvRG9EaXYsIHRvRG9Gb3JtKTtcblxuICAgIGNvbnN0IHNob3dQcm9qZWN0RWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHNob3dQcm9qZWN0RWRpdEJ1dHRvbi5pZCA9ICdwcm9qZWN0LWVkaXQtc2hvdycgKyBgJHtwcm9qZWN0LmluZGV4fWA7XG4gICAgc2hvd1Byb2plY3RFZGl0QnV0dG9uLnRleHRDb250ZW50ID0gJ0VkaXQgUHJvamVjdCc7XG4gICAgc2hvd1Byb2plY3RFZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYnV0dG9uJyk7XG5cbiAgICBjb25zdCBoaWRlUHJvamVjdEVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBoaWRlUHJvamVjdEVkaXRCdXR0b24uaWQgPSAncHJvamVjdC1lZGl0LWhpZGUnICsgYCR7cHJvamVjdC5pbmRleH1gO1xuICAgIGhpZGVQcm9qZWN0RWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdIaWRlIEZvcm0nO1xuICAgIGhpZGVQcm9qZWN0RWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmb3JtLWJ1dHRvbicsICd0b2dnbGUtdmlzaWJpbGl0eScpO1xuXG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQoc2hvd1Byb2plY3RFZGl0QnV0dG9uLCBoaWRlUHJvamVjdEVkaXRCdXR0b24pO1xuXG4gICAgY29uc3Qgc2hvd1Byb2plY3RUb0RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc2hvd1Byb2plY3RUb0RvQnV0dG9uLmlkID0gJ3Byb2plY3QtdG9kby1zaG93JyArIGAke3Byb2plY3QuaW5kZXh9YDtcbiAgICBzaG93UHJvamVjdFRvRG9CdXR0b24uY2xhc3NMaXN0LmFkZCgnZm9ybS1idXR0b24nKTtcbiAgICBzaG93UHJvamVjdFRvRG9CdXR0b24udGV4dENvbnRlbnQgPSAnTmV3IFRvIERvJztcblxuICAgIGNvbnN0IGhpZGVQcm9qZWN0VG9Eb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGhpZGVQcm9qZWN0VG9Eb0J1dHRvbi5pZCA9ICdwcm9qZWN0LXRvZG8taGlkZScgKyBgJHtwcm9qZWN0LmluZGV4fWA7XG4gICAgaGlkZVByb2plY3RUb0RvQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYnV0dG9uJywgJ3RvZ2dsZS12aXNpYmlsaXR5Jyk7XG4gICAgaGlkZVByb2plY3RUb0RvQnV0dG9uLnRleHRDb250ZW50ID0gJ0hpZGUgRm9ybSc7XG5cbiAgICBzaG93UHJvamVjdEVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZm9ybVRvZ2dsZS5zaG93Rm9ybShzaG93UHJvamVjdEVkaXRCdXR0b24sIGhpZGVQcm9qZWN0RWRpdEJ1dHRvbiwgcHJvamVjdEVkaXRGb3JtLCBlKSk7XG4gICAgc2hvd1Byb2plY3RFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHByb2plY3RGaWxlLmFzc2lnblByb2plY3RFZGl0QnRucyhwcm9qZWN0KSk7XG4gICAgaGlkZVByb2plY3RFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGZvcm1Ub2dnbGUuaGlkZUZvcm0oc2hvd1Byb2plY3RFZGl0QnV0dG9uLCBoaWRlUHJvamVjdEVkaXRCdXR0b24sIHByb2plY3RFZGl0Rm9ybSwgZSkpO1xuXG4gICAgc2hvd1Byb2plY3RUb0RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGZvcm1Ub2dnbGUuc2hvd0Zvcm0oc2hvd1Byb2plY3RUb0RvQnV0dG9uLCBoaWRlUHJvamVjdFRvRG9CdXR0b24sIHRvRG9Gb3JtLCBlKSk7XG4gICAgaGlkZVByb2plY3RUb0RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGZvcm1Ub2dnbGUuaGlkZUZvcm0oc2hvd1Byb2plY3RUb0RvQnV0dG9uLCBoaWRlUHJvamVjdFRvRG9CdXR0b24sIHRvRG9Gb3JtLCBlKSk7XG4gICAgICBcbiAgICBwcm9qZWN0LnRvRG9zLmZvckVhY2goZnVuY3Rpb24odG9Ebykge1xuICAgICAgY29uc3QgdG9Eb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdG9Eb0Rpdi5pZCA9ICdwcm9qZWN0LXRvZG8tZGl2JyArIGAke3Byb2plY3QuaW5kZXh9YCArIGAke3RvRG8uaW5kZXh9YDtcbiAgICAgIHRvRG9EaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10b2RvLWl0ZW0nKTtcbiAgICAgIHRvRG9EaXYuZGF0YXNldC5pbmRleCA9IGAke3Byb2plY3QuaW5kZXh9JHt0b0RvLmluZGV4fWA7XG5cbiAgICAgIGNvbnN0IHRvRG9Db250ZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdG9Eb0NvbnRlbnRzLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY29udGVudCcpO1xuXG4gICAgICBjb25zdCBwcm9qZWN0VG9Eb0J0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcHJvamVjdFRvRG9CdG5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10b2RvLWJ1dHRvbi1jb250YWluZXInKTtcblxuICAgICAgY29uc3QgdG9Eb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgdG9Eb1RpdGxlLnRleHRDb250ZW50ID0gYCR7dG9Eby50aXRsZX1gO1xuICAgICAgdG9Eb1RpdGxlLmNsYXNzTGlzdC5hZGQoYHByaW9yaXR5LSR7dG9Eby5wcmlvcml0eX1gKTtcblxuICAgICAgY29uc3QgdG9Eb0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICB0b0RvRGVzYy50ZXh0Q29udGVudCA9IGAke3RvRG8uZGVzY3JpcHRpb259YDtcblxuICAgICAgY29uc3QgdG9Eb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICB0b0RvRGF0ZS50ZXh0Q29udGVudCA9IGBEdWUgYnk6ICR7dG9Eby5kdWVEYXRlfWA7XG5cbiAgICAgIGNvbnN0IHRvRG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIGNvbnN0IHByaW9yaXR5Q2FwaXRhbGl6ZWQgPSB0b0RvLnByaW9yaXR5WzBdLnRvVXBwZXJDYXNlKCkgKyB0b0RvLnByaW9yaXR5LnNsaWNlKDEpO1xuICAgICAgdG9Eb1ByaW9yaXR5LnRleHRDb250ZW50ID0gYFByaW9yaXR5OiAke3ByaW9yaXR5Q2FwaXRhbGl6ZWR9YDtcblxuICAgICAgY29uc3QgdG9Eb1JlbW92ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgdG9Eb1JlbW92ZUJ0bi5pZCA9ICdwcm9qZWN0LXRvZG8tcmVtb3ZlJyArIGAke3Byb2plY3QuaW5kZXh9YCArIGAke3RvRG8uaW5kZXh9YDtcbiAgICAgIHRvRG9SZW1vdmVCdG4uY2xhc3NMaXN0LmFkZCgncmVtb3ZlLWJ1dHRvbicpO1xuICAgICAgdG9Eb1JlbW92ZUJ0bi5pbm5lclRleHQgPSAnWCc7XG5cbiAgICAgIGNvbnN0IHByb2plY3RUb0RvRWRpdEZvcm0gPSBlZGl0UHJvamVjdFRvRG9Gb3JtKHRvRG8uaW5kZXgsIHByb2plY3QpO1xuXG4gICAgICBjb25zdCBzaG93UHJvamVjdFRvRG9FZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBzaG93UHJvamVjdFRvRG9FZGl0QnV0dG9uLmlkID0gJ3RvZG8tZWRpdC1zaG93JyArIGAke3Byb2plY3QuaW5kZXh9YCArIGAke3RvRG8uaW5kZXh9YDtcbiAgICAgIHNob3dQcm9qZWN0VG9Eb0VkaXRCdXR0b24udGV4dENvbnRlbnQgPSAnRWRpdCBUbyBEbyc7XG4gICAgICBzaG93UHJvamVjdFRvRG9FZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYnV0dG9uJyk7XG5cbiAgICAgIGNvbnN0IGhpZGVQcm9qZWN0VG9Eb0VkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGhpZGVQcm9qZWN0VG9Eb0VkaXRCdXR0b24uaWQgPSAndG9kby1lZGl0LWhpZGUnICsgYCR7cHJvamVjdC5pbmRleH1gICsgYCR7dG9Eby5pbmRleH1gO1xuICAgICAgaGlkZVByb2plY3RUb0RvRWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdIaWRlIEZvcm0nO1xuICAgICAgaGlkZVByb2plY3RUb0RvRWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmb3JtLWJ1dHRvbicsICd0b2dnbGUtdmlzaWJpbGl0eScpO1xuXG4gICAgICBzaG93UHJvamVjdFRvRG9FZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGZvcm1Ub2dnbGUuc2hvd0Zvcm0oc2hvd1Byb2plY3RUb0RvRWRpdEJ1dHRvbiwgaGlkZVByb2plY3RUb0RvRWRpdEJ1dHRvbiwgcHJvamVjdFRvRG9FZGl0Rm9ybSwgZSkpO1xuICAgICAgc2hvd1Byb2plY3RUb0RvRWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBwcm9qZWN0RmlsZS5hc3NpZ25Qcm9qZWN0VG9Eb0VkaXRCdG5zKHRvRG8sIHByb2plY3QpKTtcbiAgICAgIGhpZGVQcm9qZWN0VG9Eb0VkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZm9ybVRvZ2dsZS5oaWRlRm9ybShzaG93UHJvamVjdFRvRG9FZGl0QnV0dG9uLCBoaWRlUHJvamVjdFRvRG9FZGl0QnV0dG9uLCBwcm9qZWN0VG9Eb0VkaXRGb3JtLCBlKSk7XG5cbiAgICAgIHRvRG9Db250ZW50cy5hcHBlbmQodG9Eb1RpdGxlLCB0b0RvRGVzYywgdG9Eb0RhdGUsIHRvRG9Qcmlvcml0eSwgcHJvamVjdFRvRG9FZGl0Rm9ybSk7XG4gICAgICBwcm9qZWN0VG9Eb0J0bkNvbnRhaW5lci5hcHBlbmQodG9Eb1JlbW92ZUJ0biwgc2hvd1Byb2plY3RUb0RvRWRpdEJ1dHRvbiwgaGlkZVByb2plY3RUb0RvRWRpdEJ1dHRvbilcbiAgICAgIHRvRG9EaXYuYXBwZW5kKHRvRG9Db250ZW50cywgcHJvamVjdFRvRG9CdG5Db250YWluZXIpO1xuICAgICAgcHJvamVjdFRvRG9EaXYuYXBwZW5kKHRvRG9EaXYpO1xuICAgIH0pXG5cbiAgICBwcm9qZWN0VG9Eb0Rpdi5hcHBlbmQoc2hvd1Byb2plY3RUb0RvQnV0dG9uLCBoaWRlUHJvamVjdFRvRG9CdXR0b24pO1xuICAgIGFsbFByb2plY3RzRGl2LmFwcGVuZChwcm9qZWN0Q29udGFpbmVyKTtcbiAgfSlcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdERPTShwcm9qZWN0SW5kZXgpIHtcbiAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0JyArIGAke3Byb2plY3RJbmRleH1gKTtcbiAgcHJvamVjdERpdi5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdFRvRG9ET00ocHJvamVjdEluZGV4LCB0b0RvSW5kZXgpIHtcbiAgY29uc3QgdG9Eb0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXRvZG8tZGl2JyArIGAke3Byb2plY3RJbmRleH1gICsgYCR7dG9Eb0luZGV4fWApO1xuICB0b0RvRGl2LnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiByZXNldFByb2plY3RzKCkge1xuICBhbGxQcm9qZWN0c0Rpdi5pbm5lclRleHQgPSAnJztcbn1cbiIsImV4cG9ydCB7IGNyZWF0ZVByb2plY3RGb3JtIH07XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdEZvcm0ocHJvamVjdCwgcHJvamVjdEluZGV4KSB7XG4gICAgY29uc3QgbmV3Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBuZXdGb3JtLmNsYXNzTGlzdC5hZGQoXCJ0b2dnbGUtdmlzaWJpbGl0eVwiKTtcbiAgICBuZXdGb3JtLmRhdGFzZXQuaW5kZXggPSBwcm9qZWN0SW5kZXg7XG4gICAgbmV3Rm9ybS5pZCA9ICdwcm9qZWN0LWVkaXQtZm9ybScgKyBgJHtwcm9qZWN0SW5kZXh9YDtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUuaWQgPSAncHJvamVjdC10aXRsZScgKyBgJHtwcm9qZWN0SW5kZXh9YDtcbiAgICB0aXRsZUxhYmVsLmlubmVyVGV4dCA9ICdUaXRsZTogJ1xuICAgIHRpdGxlLnZhbHVlID0gcHJvamVjdC50aXRsZTtcbiAgICBuZXdGb3JtLmFwcGVuZCh0aXRsZUxhYmVsLCB0aXRsZSk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgY29uc3QgZGVzY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY3JpcHRpb24uaWQgPSAncHJvamVjdC1kZXNjcmlwdGlvbicgKyBgJHtwcm9qZWN0SW5kZXh9YDtcbiAgICBkZXNjTGFiZWwuaW5uZXJUZXh0ID0gJ0Rlc2NyaXB0aW9uOiAnO1xuICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gcHJvamVjdC5kZXNjcmlwdGlvbjtcbiAgICBuZXdGb3JtLmFwcGVuZChkZXNjTGFiZWwsIGRlc2NyaXB0aW9uKTtcblxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGR1ZURhdGUuaWQgPSAncHJvamVjdC1kdWUtZGF0ZScgKyBgJHtwcm9qZWN0SW5kZXh9YDtcbiAgICBkYXRlTGFiZWwuaW5uZXJUZXh0ID0gJ0R1ZSBieTogJ1xuICAgIGR1ZURhdGUudHlwZSA9ICdkYXRldGltZS1sb2NhbCc7XG4gICAgbmV3Rm9ybS5hcHBlbmQoZGF0ZUxhYmVsLCBkdWVEYXRlKTtcblxuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByaW9yaXR5TGFiZWwuZm9yID0gJ3Byb2plY3QtcHJpb3JpdHknO1xuICAgIHByaW9yaXR5TGFiZWwuaW5uZXJUZXh0ID0gJ1ByaW9yaXR5JztcblxuICAgIGNvbnN0IHByaW9yaXR5VHlwZXMgPSBbJ25vbmUnLCAnaGlnaGVzdCcsICdoaWdoJywgJ21pZGRsZScsICdsb3cnXTtcbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHByaW9yaXR5U2VsZWN0LmlkID0gJ3Byb2plY3QtcHJpb3JpdHknICsgYCR7cHJvamVjdEluZGV4fWA7XG4gICAgcHJpb3JpdHlTZWxlY3QubmFtZSA9ICdwcmlvcml0aWVzJztcbiAgICBwcmlvcml0eVR5cGVzLmZvckVhY2goZnVuY3Rpb24odHlwZSkge1xuICAgICAgY29uc3QgcHJpb3JpdHlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIHByaW9yaXR5T3B0aW9uLnZhbHVlID0gdHlwZTtcbiAgICAgIHByaW9yaXR5T3B0aW9uLnRleHQgPSB0eXBlWzBdLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpO1xuICAgICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kKHByaW9yaXR5T3B0aW9uKTtcbiAgICB9KVxuICAgIHByaW9yaXR5U2VsZWN0LnZhbHVlID0gcHJvamVjdC5wcmlvcml0eTtcblxuICAgIG5ld0Zvcm0uYXBwZW5kKGR1ZURhdGUsIHByaW9yaXR5TGFiZWwsIHByaW9yaXR5U2VsZWN0KTtcblxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgc3VibWl0LnR5cGUgPSAnc3VibWl0JztcbiAgICBzdWJtaXQubmFtZSA9ICdzdWJtaXQnO1xuICAgIHN1Ym1pdC5pZCA9ICdwcm9qZWN0LXN1Ym1pdC1lZGl0JyArIGAke3Byb2plY3RJbmRleH1gO1xuICAgIHN1Ym1pdC5jbGFzc0xpc3QuYWRkKCdmb3JtLWJ1dHRvbicpO1xuICAgIG5ld0Zvcm0uYXBwZW5kKHN1Ym1pdCk7XG5cbiAgICByZXR1cm4gbmV3Rm9ybTtcbiAgfSIsImV4cG9ydCB7IGVkaXRQcm9qZWN0VG9Eb0Zvcm0gfTtcblxuICBmdW5jdGlvbiBlZGl0UHJvamVjdFRvRG9Gb3JtKHByb2plY3RUb0RvSW5kZXgsIHByb2plY3QpIHtcblxuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3QuaW5kZXg7XG4gICAgY29uc3QgbmV3Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBuZXdGb3JtLmNsYXNzTGlzdC5hZGQoXCJ0b2dnbGUtdmlzaWJpbGl0eVwiKTtcbiAgICBuZXdGb3JtLmRhdGFzZXQuaW5kZXggPSBwcm9qZWN0VG9Eb0luZGV4O1xuICAgIG5ld0Zvcm0uaWQgPSAncHJvamVjdC10b2RvLWVkaXQtZm9ybScgKyBgJHtwcm9qZWN0SW5kZXh9YCArIGAke3Byb2plY3RUb0RvSW5kZXh9YDtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUuaWQgPSAncHJvamVjdC10b2RvLXRpdGxlJyArIGAke3Byb2plY3RJbmRleH1gICsgYCR7cHJvamVjdFRvRG9JbmRleH1gO1xuICAgIHRpdGxlTGFiZWwuaW5uZXJUZXh0ID0gJ1RpdGxlOiAnXG4gICAgdGl0bGUudmFsdWUgPSBwcm9qZWN0LnRvRG9zW3Byb2plY3RUb0RvSW5kZXhdLnRpdGxlO1xuICAgIG5ld0Zvcm0uYXBwZW5kKHRpdGxlTGFiZWwsIHRpdGxlKTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBjb25zdCBkZXNjTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjcmlwdGlvbi5pZCA9ICdwcm9qZWN0LXRvZG8tZGVzY3JpcHRpb24nICtgJHtwcm9qZWN0SW5kZXh9YCArICBgJHtwcm9qZWN0VG9Eb0luZGV4fWA7XG4gICAgZGVzY0xhYmVsLmlubmVyVGV4dCA9ICdUaXRsZTogJztcbiAgICBkZXNjcmlwdGlvbi52YWx1ZSA9IHByb2plY3QudG9Eb3NbcHJvamVjdFRvRG9JbmRleF0uZGVzY3JpcHRpb247XG4gICAgbmV3Rm9ybS5hcHBlbmQoZGVzY0xhYmVsLCBkZXNjcmlwdGlvbik7XG5cbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkdWVEYXRlLmlkID0gJ3Byb2plY3QtdG9kby1kdWUtZGF0ZScgK2Ake3Byb2plY3RJbmRleH1gICsgIGAke3Byb2plY3RUb0RvSW5kZXh9YDtcbiAgICBkYXRlTGFiZWwuaW5uZXJUZXh0ID0gJ0R1ZSBieTogJ1xuICAgIGR1ZURhdGUudHlwZSA9ICdkYXRldGltZS1sb2NhbCc7XG4gICAgbmV3Rm9ybS5hcHBlbmQoZGF0ZUxhYmVsLCBkdWVEYXRlKTtcblxuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByaW9yaXR5TGFiZWwuZm9yID0gJ3Byb2plY3QtdG9kby1wcmlvcml0eScgK2Ake3Byb2plY3RJbmRleH1gICsgIGAke3Byb2plY3RUb0RvSW5kZXh9YDtcbiAgICBwcmlvcml0eUxhYmVsLmlubmVyVGV4dCA9ICdQcmlvcml0eSc7XG5cbiAgICBjb25zdCBwcmlvcml0eVR5cGVzID0gWydub25lJywgJ2hpZ2hlc3QnLCAnaGlnaCcsICdtaWRkbGUnLCAnbG93J107XG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBwcmlvcml0eVNlbGVjdC5pZCA9ICdwcm9qZWN0LXRvZG8tcHJpb3JpdHknICtgJHtwcm9qZWN0SW5kZXh9YCArICBgJHtwcm9qZWN0VG9Eb0luZGV4fWA7XG4gICAgcHJpb3JpdHlTZWxlY3QubmFtZSA9ICdwcmlvcml0aWVzJztcbiAgICBwcmlvcml0eVR5cGVzLmZvckVhY2goZnVuY3Rpb24odHlwZSkge1xuICAgICAgY29uc3QgcHJpb3JpdHlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIHByaW9yaXR5T3B0aW9uLnZhbHVlID0gdHlwZTtcbiAgICAgIHByaW9yaXR5T3B0aW9uLnRleHQgPSB0eXBlWzBdLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpO1xuICAgICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kKHByaW9yaXR5T3B0aW9uKTtcbiAgICB9KVxuICAgIHByaW9yaXR5U2VsZWN0LnZhbHVlID0gcHJvamVjdC50b0Rvc1twcm9qZWN0VG9Eb0luZGV4XS5wcmlvcml0eTtcblxuICAgIG5ld0Zvcm0uYXBwZW5kKGR1ZURhdGUsIHByaW9yaXR5TGFiZWwsIHByaW9yaXR5U2VsZWN0KTtcblxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgc3VibWl0LnR5cGUgPSAnc3VibWl0JztcbiAgICBzdWJtaXQubmFtZSA9ICdzdWJtaXQnO1xuICAgIHN1Ym1pdC5pZCA9ICdwcm9qZWN0LXRvZG8tc3VibWl0LWVkaXQnICsgYCR7cHJvamVjdEluZGV4fWAgKyAgYCR7cHJvamVjdFRvRG9JbmRleH1gO1xuICAgIHN1Ym1pdC5jbGFzc0xpc3QuYWRkKCdmb3JtLWJ1dHRvbicpO1xuICAgIG5ld0Zvcm0uYXBwZW5kKHN1Ym1pdCk7XG5cbiAgICByZXR1cm4gbmV3Rm9ybTtcbiAgfSIsImV4cG9ydCB7IGNyZWF0ZVRvRG9Gb3JtIH07XG5cblxuICBjb25zdCB0ZXh0RmllbGRzQXJyYXkgPSBbJ3RpdGxlJywgJ2Rlc2NyaXB0aW9uJ107XG5cbiAgZnVuY3Rpb24gY3JlYXRlVG9Eb0Zvcm0ocHJvamVjdEluZGV4KSB7XG4gICAgY29uc3QgbmV3Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBuZXdGb3JtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRvZG8tZm9ybVwiLCBcInRvZ2dsZS12aXNpYmlsaXR5XCIpO1xuICAgIG5ld0Zvcm0uZGF0YXNldC5pbmRleCA9IHByb2plY3RJbmRleDtcbiAgICBuZXdGb3JtLmlkID0gJ3Byb2plY3QtdG9kby1mb3JtJyArIGAke3Byb2plY3RJbmRleH1gO1xuXG4gICAgdGV4dEZpZWxkc0FycmF5LmZvckVhY2goZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgIGNvbnN0IGZpZWxkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGZpZWxkTGFiZWwuaW5uZXJUZXh0ID0gZmllbGRbMF0udG9VcHBlckNhc2UoKSArIGZpZWxkLnNsaWNlKDEpO1xuICAgICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICBpbmZvLmlkID0gJ3Byb2plY3QtdG9kbycgKyAnLScgKyBgJHtmaWVsZH1gICsgYCR7cHJvamVjdEluZGV4fWA7XG4gICAgICBpbmZvLm5hbWUgPSBgJHtmaWVsZH1gO1xuICAgICAgbmV3Rm9ybS5hcHBlbmQoZmllbGRMYWJlbCk7XG4gICAgICBuZXdGb3JtLmFwcGVuZChpbmZvKTtcbiAgICB9KVxuXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHVlRGF0ZS5pZCA9ICdwcm9qZWN0LXRvZG8tZHVlLWRhdGUnICsgYCR7cHJvamVjdEluZGV4fWA7XG4gICAgZGF0ZUxhYmVsLmlubmVyVGV4dCA9ICdEdWUgYnk6ICdcbiAgICBkdWVEYXRlLnR5cGUgPSAnZGF0ZXRpbWUtbG9jYWwnO1xuICAgIG5ld0Zvcm0uYXBwZW5kKGRhdGVMYWJlbCwgZHVlRGF0ZSk7XG5cbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwcmlvcml0eUxhYmVsLmZvciA9ICdwcm9qZWN0LXRvZG8tcHJpb3JpdHknO1xuICAgIHByaW9yaXR5TGFiZWwuaW5uZXJUZXh0ID0gJ1ByaW9yaXR5JztcblxuICAgIGNvbnN0IHByaW9yaXR5VHlwZXMgPSBbJ25vbmUnLCAnaGlnaGVzdCcsICdoaWdoJywgJ21pZGRsZScsICdsb3cnXTtcbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHByaW9yaXR5U2VsZWN0LmlkID0gJ3Byb2plY3QtdG9kby1wcmlvcml0eSc7XG4gICAgcHJpb3JpdHlTZWxlY3QubmFtZSA9ICdwcmlvcml0aWVzJztcbiAgICBwcmlvcml0eVR5cGVzLmZvckVhY2goZnVuY3Rpb24odHlwZSkge1xuICAgICAgY29uc3QgcHJpb3JpdHlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIHByaW9yaXR5T3B0aW9uLnZhbHVlID0gdHlwZTtcbiAgICAgIHByaW9yaXR5T3B0aW9uLnRleHQgPSB0eXBlWzBdLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpO1xuICAgICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kKHByaW9yaXR5T3B0aW9uKTtcbiAgICB9KVxuXG4gICAgbmV3Rm9ybS5hcHBlbmQoZHVlRGF0ZSwgcHJpb3JpdHlMYWJlbCwgcHJpb3JpdHlTZWxlY3QpO1xuXG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBzdWJtaXQudHlwZSA9ICdzdWJtaXQnO1xuICAgIHN1Ym1pdC5uYW1lID0gJ3N1Ym1pdCc7XG4gICAgc3VibWl0LmlkID0gJ3Byb2plY3QtdG9kby1zdWJtaXQnICsgYCR7cHJvamVjdEluZGV4fWA7XG4gICAgc3VibWl0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYnV0dG9uJyk7XG4gICAgbmV3Rm9ybS5hcHBlbmQoc3VibWl0KTtcblxuICAgIHJldHVybiBuZXdGb3JtO1xuICB9IiwiZXhwb3J0IHsgcHJvamVjdCB9O1xuaW1wb3J0IHsgc2hvd1Byb2plY3RzLCByZW1vdmVQcm9qZWN0RE9NLCByZW1vdmVQcm9qZWN0VG9Eb0RPTSB9IGZyb20gXCIuL3Byb2plY3QtZG9tXCI7XG5pbXBvcnQgeyB0b0RvIH0gZnJvbSBcIi4uL3RvZG8taXRlbXMvdG9kb1wiO1xuaW1wb3J0IHsgc2F2ZVByb2plY3RzVG9TdG9yYWdlLCByZXRyaWV2ZVNhdmVkUHJvamVjdHMgfSBmcm9tIFwiLi4vbG9jYWwtc3RvcmFnZVwiO1xuXG5jb25zdCBwcm9qZWN0ID0gKGZ1bmN0aW9uKCkge1xuXG4gIGxldCBwcm9qZWN0QXJyYXkgPSBbXTtcblxuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1zdWJtaXQnKTtcbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYnVpbGRBbmRBZGRQcm9qZWN0KTtcblxuICBmdW5jdGlvbiBwcm9qZWN0U3RvcmFnZUxvYWQoKSB7XG4gICAgY29uc3Qgc2F2ZWRQcm9qZWN0T2JqZWN0ID0gcmV0cmlldmVTYXZlZFByb2plY3RzKCk7XG4gICAgaWYoc2F2ZWRQcm9qZWN0T2JqZWN0KSB7XG4gICAgICBzYXZlZFByb2plY3RPYmplY3QuZm9yRWFjaChmdW5jdGlvbihzYXZlZFByb2plY3QpIHtcbiAgICAgICAgY29uc3QgYnVpbGRQcm9qZWN0ID0gcHJvamVjdEZhY3Rvcnkoc2F2ZWRQcm9qZWN0LnRpdGxlLCBzYXZlZFByb2plY3QuZGVzY3JpcHRpb24sIHNhdmVkUHJvamVjdC5kdWVEYXRlLCBzYXZlZFByb2plY3QuaW5kZXgsIHNhdmVkUHJvamVjdC5wcmlvcml0eSwgc2F2ZWRQcm9qZWN0LnRvRG9zKTtcbiAgICAgICAgcHJvamVjdEFycmF5LnB1c2goYnVpbGRQcm9qZWN0KTtcbiAgICAgIH0pO1xuICAgICAgc2hvd1Byb2plY3RzKHByb2plY3RBcnJheSk7XG4gICAgICBhc3NpZ25Qcm9qZWN0VG9Eb1N1Ym1pdHMoKTtcbiAgICAgIGFzc2lnblByb2plY3RSZW1vdmVCdG5zKCk7XG4gICAgICBhc3NpZ25Qcm9qZWN0VG9Eb1JlbW92ZUJ0bnMoKTtcbiAgICAgIHNhdmVQcm9qZWN0c1RvU3RvcmFnZShwcm9qZWN0QXJyYXkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2plY3RGYWN0b3J5ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGluZGV4LCBwcmlvcml0eSwgdG9Eb3MgPSBbXSkge1xuICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgaW5kZXgsIHByaW9yaXR5LCB0b0RvcyB9XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZEFuZEFkZFByb2plY3QoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0aXRsZVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdGl0bGUnKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1kZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgIGNvbnN0IGR1ZVZhbHVlID0gbmV3IERhdGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtZHVlLWRhdGUnKS52YWx1ZSk7XG4gICAgY29uc3QgaW5kZXggPSBwcm9qZWN0QXJyYXkubGVuZ3RoO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtcHJpb3JpdHknKS52YWx1ZTtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkodGl0bGVWYWx1ZSwgZGVzY1ZhbHVlLCBkdWVWYWx1ZSwgaW5kZXgsIHByaW9yaXR5KTtcbiAgICBwcm9qZWN0QXJyYXkucHVzaChuZXdQcm9qZWN0KTtcbiAgICBcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1mb3JtJykucmVzZXQoKTtcbiAgICBzaG93UHJvamVjdHMocHJvamVjdEFycmF5KTtcbiAgICBhc3NpZ25Qcm9qZWN0VG9Eb1N1Ym1pdHMoKTtcbiAgICBhc3NpZ25Qcm9qZWN0UmVtb3ZlQnRucygpO1xuICAgIGFzc2lnblByb2plY3RUb0RvUmVtb3ZlQnRucygpO1xuICAgIHNhdmVQcm9qZWN0c1RvU3RvcmFnZShwcm9qZWN0QXJyYXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChlLCBwcm9qZWN0SW5kZXgpIHtcbiAgICByZW1vdmVQcm9qZWN0RE9NKHByb2plY3RJbmRleCk7XG4gICAgcHJvamVjdEFycmF5LnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xuICAgIHJlZHVjZUluZGV4KHByb2plY3RBcnJheSwgcHJvamVjdEluZGV4KTtcbiAgICBzaG93UHJvamVjdHMocHJvamVjdEFycmF5KTtcbiAgICBhc3NpZ25Qcm9qZWN0VG9Eb1N1Ym1pdHMoKTtcbiAgICBhc3NpZ25Qcm9qZWN0VG9Eb1JlbW92ZUJ0bnMoKTtcbiAgICBhc3NpZ25Qcm9qZWN0UmVtb3ZlQnRucygpO1xuICAgIHNhdmVQcm9qZWN0c1RvU3RvcmFnZShwcm9qZWN0QXJyYXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZWRpdFByb2plY3QoZSwgcHJvamVjdCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0aXRsZVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdGl0bGUnICsgYCR7cHJvamVjdC5pbmRleH1gKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1kZXNjcmlwdGlvbicgKyBgJHtwcm9qZWN0LmluZGV4fWApLnZhbHVlO1xuICAgIGNvbnN0IGR1ZVZhbHVlID0gbmV3IERhdGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtZHVlLWRhdGUnICsgYCR7cHJvamVjdC5pbmRleH1gKS52YWx1ZSk7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1wcmlvcml0eScgKyBgJHtwcm9qZWN0LmluZGV4fWApLnZhbHVlO1xuICAgIHByb2plY3QudGl0bGUgPSB0aXRsZVZhbHVlO1xuICAgIHByb2plY3QuZGVzY3JpcHRpb24gPSBkZXNjVmFsdWU7XG4gICAgcHJvamVjdC5kdWVEYXRlID0gZHVlVmFsdWU7XG4gICAgcHJvamVjdC5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHNob3dQcm9qZWN0cyhwcm9qZWN0QXJyYXkpO1xuICAgIGFzc2lnblByb2plY3RUb0RvU3VibWl0cygpO1xuICAgIGFzc2lnblByb2plY3RUb0RvUmVtb3ZlQnRucygpO1xuICAgIGFzc2lnblByb2plY3RSZW1vdmVCdG5zKCk7XG4gICAgc2F2ZVByb2plY3RzVG9TdG9yYWdlKHByb2plY3RBcnJheSk7XG4gIH1cblxuICBmdW5jdGlvbiBhc3NpZ25Qcm9qZWN0VG9Eb1N1Ym1pdHMoKSB7XG4gICAgY29uc3QgcHJvamVjdFRvRG9Gb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LXRvZG8tZm9ybScpO1xuICAgIHByb2plY3RUb0RvRm9ybXMuZm9yRWFjaChmdW5jdGlvbihmb3JtKSB7XG4gICAgICBsZXQgcHJvamVjdEluZGV4ID0gZm9ybS5kYXRhc2V0LmluZGV4O1xuICAgICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdG9kby1zdWJtaXQnICsgYCR7cHJvamVjdEluZGV4fWApO1xuICAgICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGFkZFByb2plY3RUb0RvKGUsIHByb2plY3RJbmRleCkpO1xuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBhc3NpZ25Qcm9qZWN0UmVtb3ZlQnRucygpIHtcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKTtcbiAgICBwcm9qZWN0RGl2LmZvckVhY2goZnVuY3Rpb24ocHJvamVjdCkge1xuICAgICAgY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtcmVtb3ZlJyArIGAke3Byb2plY3QuZGF0YXNldC5pbmRleH1gKTtcbiAgICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiByZW1vdmVQcm9qZWN0KGUsIHByb2plY3QuZGF0YXNldC5pbmRleCkpO1xuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBhc3NpZ25Qcm9qZWN0RWRpdEJ0bnMocHJvamVjdCkge1xuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1zdWJtaXQtZWRpdCcgKyBgJHtwcm9qZWN0LmluZGV4fWApO1xuICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZWRpdFByb2plY3QoZSwgcHJvamVjdCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkUHJvamVjdFRvRG8oZSwgcHJvamVjdEluZGV4KSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RBcnJheVtwcm9qZWN0SW5kZXhdO1xuICAgICAgY29uc3QgdGl0bGVWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXRvZG8tdGl0bGUnK2Ake3Byb2plY3RJbmRleH1gKS52YWx1ZTtcbiAgICAgIGNvbnN0IGRlc2NWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXRvZG8tZGVzY3JpcHRpb24nK2Ake3Byb2plY3RJbmRleH1gKS52YWx1ZTtcbiAgICAgIGNvbnN0IGR1ZVZhbHVlID0gbmV3IERhdGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdG9kby1kdWUtZGF0ZScrYCR7cHJvamVjdEluZGV4fWApLnZhbHVlKTtcbiAgICAgIGNvbnN0IGluZGV4ID0gY3VycmVudFByb2plY3QudG9Eb3MubGVuZ3RoO1xuICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10b2RvLXByaW9yaXR5JykudmFsdWU7XG4gICAgICBjb25zdCBuZXdUb0RvID0gdG9Eby50b0RvRmFjdG9yeSh0aXRsZVZhbHVlLCBkZXNjVmFsdWUsIGR1ZVZhbHVlLCBpbmRleCwgcHJpb3JpdHkpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdG9kby1mb3JtJytgJHtwcm9qZWN0SW5kZXh9YCkucmVzZXQoKTtcbiAgICAgIGN1cnJlbnRQcm9qZWN0LnRvRG9zLnB1c2gobmV3VG9Ebyk7XG4gICAgICBzaG93UHJvamVjdHMocHJvamVjdEFycmF5KTtcbiAgICAgIGFzc2lnblByb2plY3RUb0RvU3VibWl0cygpO1xuICAgICAgYXNzaWduUHJvamVjdFRvRG9SZW1vdmVCdG5zKCk7XG4gICAgICBhc3NpZ25Qcm9qZWN0UmVtb3ZlQnRucygpO1xuICAgICAgc2F2ZVByb2plY3RzVG9TdG9yYWdlKHByb2plY3RBcnJheSk7XG4gIH1cblxuICBmdW5jdGlvbiBlZGl0UHJvamVjdFRvRG8oZSwgdG9kbywgcHJvamVjdCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0aXRsZVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdG9kby10aXRsZScgKyBgJHtwcm9qZWN0LmluZGV4fWAgKyAgYCR7dG9kby5pbmRleH1gKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10b2RvLWRlc2NyaXB0aW9uJyArIGAke3Byb2plY3QuaW5kZXh9YCArICBgJHt0b2RvLmluZGV4fWApLnZhbHVlO1xuICAgIGNvbnN0IGR1ZVZhbHVlID0gbmV3IERhdGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdG9kby1kdWUtZGF0ZScgKyBgJHtwcm9qZWN0LmluZGV4fWAgKyAgYCR7dG9kby5pbmRleH1gKS52YWx1ZSk7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10b2RvLXByaW9yaXR5JyArIGAke3Byb2plY3QuaW5kZXh9YCArICBgJHt0b2RvLmluZGV4fWApLnZhbHVlO1xuICAgIHRvZG8udGl0bGUgPSB0aXRsZVZhbHVlO1xuICAgIHRvZG8uZGVzY3JpcHRpb24gPSBkZXNjVmFsdWU7XG4gICAgdG9kby5kdWVEYXRlID0gZHVlVmFsdWU7XG4gICAgdG9kby5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHNob3dQcm9qZWN0cyhwcm9qZWN0QXJyYXkpO1xuICAgIGFzc2lnblByb2plY3RUb0RvU3VibWl0cygpO1xuICAgIGFzc2lnblByb2plY3RUb0RvUmVtb3ZlQnRucygpO1xuICAgIGFzc2lnblByb2plY3RSZW1vdmVCdG5zKCk7XG4gICAgc2F2ZVByb2plY3RzVG9TdG9yYWdlKHByb2plY3RBcnJheSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVQcm9qZWN0VG9EbyhlLCBwcm9qZWN0LCB0b0RvKSB7XG4gICAgcmVtb3ZlUHJvamVjdFRvRG9ET00ocHJvamVjdC5pbmRleCwgdG9Eby5pbmRleCk7XG4gICAgcHJvamVjdC50b0Rvcy5zcGxpY2UodG9Eby5pbmRleCwgMSk7XG4gICAgcmVkdWNlSW5kZXgocHJvamVjdC50b0RvcywgdG9Eby5pbmRleCk7XG4gICAgc2hvd1Byb2plY3RzKHByb2plY3RBcnJheSk7XG4gICAgYXNzaWduUHJvamVjdFRvRG9TdWJtaXRzKCk7XG4gICAgYXNzaWduUHJvamVjdFRvRG9SZW1vdmVCdG5zKCk7XG4gICAgYXNzaWduUHJvamVjdFJlbW92ZUJ0bnMoKTtcbiAgICBzYXZlUHJvamVjdHNUb1N0b3JhZ2UocHJvamVjdEFycmF5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFzc2lnblByb2plY3RUb0RvUmVtb3ZlQnRucygpIHtcbiAgICBwcm9qZWN0QXJyYXkuZm9yRWFjaChmdW5jdGlvbihwcm9qZWN0KSB7XG4gICAgICBwcm9qZWN0LnRvRG9zLmZvckVhY2goZnVuY3Rpb24odG9Ebykge1xuICAgICAgICBpZiAodG9EbyAhPSAnJykge1xuICAgICAgICAgIGxldCB0b0RvUmVtb3ZlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdG9kby1yZW1vdmUnICsgYCR7cHJvamVjdC5pbmRleH1gICsgYCR7dG9Eby5pbmRleH1gKTtcbiAgICAgICAgICB0b0RvUmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHJlbW92ZVByb2plY3RUb0RvKGUsIHByb2plY3QsIHRvRG8pKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBhc3NpZ25Qcm9qZWN0VG9Eb0VkaXRCdG5zKHRvRG8sIHByb2plY3QpIHtcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdG9kby1zdWJtaXQtZWRpdCcgKyBgJHtwcm9qZWN0LmluZGV4fWAgKyBgJHt0b0RvLmluZGV4fWApO1xuICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZWRpdFByb2plY3RUb0RvKGUsIHRvRG8sIHByb2plY3QpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZHVjZUluZGV4KGFycmF5LCByZW1vdmVkSXRlbUluZGV4KSB7XG4gICAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICBpZiAoaXRlbS5pbmRleCA+IHJlbW92ZWRJdGVtSW5kZXgpIHtcbiAgICAgICAgaXRlbS5pbmRleCAtPSAxO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBwcmludEFycmF5KCkge1xuICAgIHByb2plY3RBcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICBjb25zb2xlLmxvZyhpdGVtKTtcbiAgICB9KTtcbiAgfVxuICAgIFxuICByZXR1cm4geyBwcm9qZWN0QXJyYXksIGFzc2lnblByb2plY3RFZGl0QnRucywgYXNzaWduUHJvamVjdFRvRG9FZGl0QnRucywgcHJvamVjdFN0b3JhZ2VMb2FkIH1cbiAgICBcbn0pKCk7IiwiZXhwb3J0IHsgc2hvd1RvRG9zLCByZW1vdmVOb25Qcm9qZWN0VG9EbyB9XG5pbXBvcnQgeyB0b0RvIGFzIHRvRG9GaWxlIH0gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IHsgZWRpdFRvRG9Gb3JtIH0gZnJvbSBcIi4vdG9kby1lZGl0LWZvcm1cIjtcbmltcG9ydCB7IGZvcm1Ub2dnbGUgfSBmcm9tIFwiLi4vZm9ybS10b2dnbGVcIjtcblxuY29uc3QgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWxpc3QnKTtcblxuZnVuY3Rpb24gc2hvd1RvRG9zKGFycmF5KSB7XG4gIHJlc2V0VG9Eb3MoKTtcbiAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgY29uc3QgdG9Eb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvRG9EaXYuaWQgPSAndG9kby1pdGVtJyArIGAke2l0ZW0uaW5kZXh9YDtcbiAgICB0b0RvRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8taXRlbScpO1xuICAgIHRvRG9EaXYuZGF0YXNldC5pbmRleCA9IGl0ZW0uaW5kZXg7XG5cbiAgICBjb25zdCB0b0RvQ29udGVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b0RvQ29udGVudHMuY2xhc3NMaXN0LmFkZCgndG9kby1jb250ZW50Jyk7XG5cbiAgICBjb25zdCB0b0RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdG9Eb1RpdGxlLnRleHRDb250ZW50ID0gYCR7aXRlbS50aXRsZX1gO1xuICAgIHRvRG9UaXRsZS5jbGFzc0xpc3QuYWRkKGBwcmlvcml0eS0ke2l0ZW0ucHJpb3JpdHl9YCk7XG5cbiAgICBjb25zdCB0b0RvRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0b0RvRGVzYy50ZXh0Q29udGVudCA9IGAke2l0ZW0uZGVzY3JpcHRpb259YDtcblxuICAgIGNvbnN0IHRvRG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRvRG9EYXRlLnRleHRDb250ZW50ID0gYER1ZSBieTogJHtpdGVtLmR1ZURhdGV9YDtcblxuICAgIGNvbnN0IHRvRG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwcmlvcml0eUNhcGl0YWxpemVkID0gaXRlbS5wcmlvcml0eVswXS50b1VwcGVyQ2FzZSgpICsgaXRlbS5wcmlvcml0eS5zbGljZSgxKTtcbiAgICB0b0RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7cHJpb3JpdHlDYXBpdGFsaXplZH1gO1xuXG4gICAgY29uc3QgdG9Eb0VkaXRGb3JtID0gZWRpdFRvRG9Gb3JtKGl0ZW0sIGl0ZW0uaW5kZXgpO1xuXG4gICAgY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmVtb3ZlQnRuLmlkID0gJ3RvZG8tcmVtb3ZlJyArIGAke2l0ZW0uaW5kZXh9YDtcbiAgICByZW1vdmVCdG4uaW5uZXJUZXh0ID0gXCJYXCI7XG4gICAgcmVtb3ZlQnRuLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZS1idXR0b24nKTtcblxuICAgIGNvbnN0IHNob3dFZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc2hvd0VkaXRCdXR0b24uaWQgPSAndG9kby1lZGl0LXNob3cnICsgYCR7aXRlbS5pbmRleH1gO1xuICAgIHNob3dFZGl0QnV0dG9uLnRleHRDb250ZW50ID0gJ0VkaXQgVG8gRG8nO1xuICAgIHNob3dFZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYnV0dG9uJyk7XG5cbiAgICBjb25zdCBoaWRlRWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGhpZGVFZGl0QnV0dG9uLmlkID0gJ3RvZG8tZWRpdC1oaWRlJyArIGAke2l0ZW0uaW5kZXh9YDtcbiAgICBoaWRlRWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdIaWRlIEZvcm0nO1xuICAgIGhpZGVFZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYnV0dG9uJywgJ3RvZ2dsZS12aXNpYmlsaXR5Jyk7XG5cbiAgICBzaG93RWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBmb3JtVG9nZ2xlLnNob3dGb3JtKHNob3dFZGl0QnV0dG9uLCBoaWRlRWRpdEJ1dHRvbiwgdG9Eb0VkaXRGb3JtLCBlKSk7XG4gICAgc2hvd0VkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gdG9Eb0ZpbGUuYXNzaWduVG9Eb0VkaXRCdG5zKGl0ZW0pKTtcbiAgICBoaWRlRWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBmb3JtVG9nZ2xlLmhpZGVGb3JtKHNob3dFZGl0QnV0dG9uLCBoaWRlRWRpdEJ1dHRvbiwgdG9Eb0VkaXRGb3JtLCBlKSk7XG5cbiAgICB0b0RvQ29udGVudHMuYXBwZW5kKHRvRG9UaXRsZSwgdG9Eb0Rlc2MsIHRvRG9EYXRlLCB0b0RvUHJpb3JpdHksIHRvRG9FZGl0Rm9ybSk7XG4gICAgdG9Eb0Rpdi5hcHBlbmQodG9Eb0NvbnRlbnRzLCByZW1vdmVCdG4sIHNob3dFZGl0QnV0dG9uLCBoaWRlRWRpdEJ1dHRvbik7XG4gICAgdG9Eb0NvbnRhaW5lci5hcHBlbmQodG9Eb0Rpdik7XG4gIH0pXG59XG5cbmZ1bmN0aW9uIHJlbW92ZU5vblByb2plY3RUb0RvKHRvRG9JbmRleCkge1xuICBjb25zdCB0b0RvRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8taXRlbScgKyBgJHt0b0RvSW5kZXh9YCk7XG4gIHRvRG9EaXYucmVtb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0VG9Eb3MoKSB7XG4gIHRvRG9Db250YWluZXIuaW5uZXJUZXh0ID0gJyc7XG59XG4iLCJleHBvcnQgeyBlZGl0VG9Eb0Zvcm0gfTtcblxuICBmdW5jdGlvbiBlZGl0VG9Eb0Zvcm0odG9EbywgdG9kb0luZGV4KSB7XG4gICAgY29uc3QgbmV3Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBuZXdGb3JtLmNsYXNzTGlzdC5hZGQoXCJ0b2dnbGUtdmlzaWJpbGl0eVwiKTtcbiAgICBuZXdGb3JtLmRhdGFzZXQuaW5kZXggPSB0b2RvSW5kZXg7XG4gICAgbmV3Rm9ybS5pZCA9ICd0b2RvLWVkaXQtZm9ybScgKyBgJHt0b2RvSW5kZXh9YDtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUuaWQgPSAndG9kby10aXRsZScgKyBgJHt0b2RvSW5kZXh9YDtcbiAgICB0aXRsZUxhYmVsLmlubmVyVGV4dCA9ICdUaXRsZTogJztcbiAgICB0aXRsZS52YWx1ZSA9IHRvRG8udGl0bGU7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgY29uc3QgZGVzY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY3JpcHRpb24uaWQgPSAndG9kby1kZXNjcmlwdGlvbicgKyBgJHt0b2RvSW5kZXh9YDtcbiAgICBkZXNjTGFiZWwuaW5uZXJUZXh0ID0gJ0Rlc2NyaXB0aW9uOiAnO1xuICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gdG9Eby5kZXNjcmlwdGlvbjtcblxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGR1ZURhdGUuaWQgPSAndG9kby1kdWUtZGF0ZScgKyBgJHt0b2RvSW5kZXh9YDtcbiAgICBkYXRlTGFiZWwuaW5uZXJUZXh0ID0gJ0R1ZSBieTogJztcbiAgICBkdWVEYXRlLnR5cGUgPSAnZGF0ZXRpbWUtbG9jYWwnO1xuXG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJpb3JpdHlMYWJlbC5mb3IgPSAndG9kby1wcmlvcml0eSc7XG4gICAgcHJpb3JpdHlMYWJlbC5pbm5lclRleHQgPSAnUHJpb3JpdHknO1xuXG4gICAgY29uc3QgcHJpb3JpdHlUeXBlcyA9IFsnbm9uZScsICdoaWdoZXN0JywgJ2hpZ2gnLCAnbWlkZGxlJywgJ2xvdyddO1xuICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgcHJpb3JpdHlTZWxlY3QuaWQgPSAndG9kby1wcmlvcml0eScgKyBgJHt0b2RvSW5kZXh9YDtcbiAgICBwcmlvcml0eVNlbGVjdC5uYW1lID0gJ3ByaW9yaXRpZXMnO1xuICAgIHByaW9yaXR5VHlwZXMuZm9yRWFjaChmdW5jdGlvbih0eXBlKSB7XG4gICAgICBjb25zdCBwcmlvcml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgcHJpb3JpdHlPcHRpb24udmFsdWUgPSB0eXBlO1xuICAgICAgcHJpb3JpdHlPcHRpb24udGV4dCA9IHR5cGVbMF0udG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSk7XG4gICAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmQocHJpb3JpdHlPcHRpb24pO1xuICAgIH0pXG4gICAgcHJpb3JpdHlTZWxlY3QudmFsdWUgPSB0b0RvLnByaW9yaXR5O1xuXG4gICAgbmV3Rm9ybS5hcHBlbmQodGl0bGVMYWJlbCwgdGl0bGUsIGRlc2NMYWJlbCwgZGVzY3JpcHRpb24sIGRhdGVMYWJlbCwgZHVlRGF0ZSwgcHJpb3JpdHlMYWJlbCwgcHJpb3JpdHlTZWxlY3QpO1xuXG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBzdWJtaXQudHlwZSA9ICdzdWJtaXQnO1xuICAgIHN1Ym1pdC5uYW1lID0gJ3N1Ym1pdCc7XG4gICAgc3VibWl0LmlkID0gJ3RvZG8tc3VibWl0LWVkaXQnICsgYCR7dG9kb0luZGV4fWA7XG4gICAgc3VibWl0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYnV0dG9uJyk7XG4gICAgbmV3Rm9ybS5hcHBlbmQoc3VibWl0KTtcblxuICAgIHJldHVybiBuZXdGb3JtO1xuICB9IiwiZXhwb3J0IHsgdG9EbyB9O1xuaW1wb3J0IHsgcmVtb3ZlTm9uUHJvamVjdFRvRG8sIHNob3dUb0RvcyB9IGZyb20gXCIuL3RvZG8tZG9tXCI7XG5pbXBvcnQgeyBzYXZlVG9Eb3NUb1N0b3JhZ2UsIHJldHJpZXZlU2F2ZWRUb0RvcyB9IGZyb20gXCIuLi9sb2NhbC1zdG9yYWdlXCI7XG5cbmNvbnN0IHRvRG8gPSAoZnVuY3Rpb24oKSB7XG5cbiAgbGV0IHRvRG9BcnJheSA9IFtdO1xuXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXN1Ym1pdCcpO1xuICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBidWlsZEFuZEFkZFRvRG8pO1xuXG4gIGZ1bmN0aW9uIHRvRG9TdG9yYWdlTG9hZCgpIHtcbiAgICBjb25zdCBzYXZlZFRvRG9PYmplY3QgPSByZXRyaWV2ZVNhdmVkVG9Eb3MoKTtcbiAgICBpZihzYXZlZFRvRG9PYmplY3QpIHtcbiAgICAgIHNhdmVkVG9Eb09iamVjdC5mb3JFYWNoKGZ1bmN0aW9uKHNhdmVkVG9Ebykge1xuICAgICAgICBjb25zdCBidWlsZFRvRG8gPSB0b0RvRmFjdG9yeShzYXZlZFRvRG8udGl0bGUsIHNhdmVkVG9Eby5kZXNjcmlwdGlvbiwgc2F2ZWRUb0RvLmR1ZURhdGUsIHNhdmVkVG9Eby5pbmRleCwgc2F2ZWRUb0RvLnByaW9yaXR5KTtcbiAgICAgICAgdG9Eb0FycmF5LnB1c2goYnVpbGRUb0RvKTtcbiAgICAgIH0pO1xuICAgICAgc2hvd1RvRG9zKHRvRG9BcnJheSk7XG4gICAgICBhc3NpZ25SZW1vdmVCdG5zKCk7XG4gICAgICBzYXZlVG9Eb3NUb1N0b3JhZ2UodG9Eb0FycmF5KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0b0RvRmFjdG9yeSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBpbmRleCwgcHJpb3JpdHkpIHtcbiAgICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGluZGV4LCBwcmlvcml0eSB9XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZEFuZEFkZFRvRG8oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0aXRsZVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tdGl0bGUnKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1kZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgIGNvbnN0IGR1ZVZhbHVlID0gbmV3IERhdGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZHVlLWRhdGUnKS52YWx1ZSk7XG4gICAgY29uc3QgaW5kZXggPSB0b0RvQXJyYXkubGVuZ3RoO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tcHJpb3JpdHknKS52YWx1ZTtcbiAgICBjb25zdCBuZXdUb0RvID0gdG9Eb0ZhY3RvcnkodGl0bGVWYWx1ZSwgZGVzY1ZhbHVlLCBkdWVWYWx1ZSwgaW5kZXgsIHByaW9yaXR5KTtcbiAgICB0b0RvQXJyYXkucHVzaChuZXdUb0RvKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1mb3JtJykucmVzZXQoKTtcbiAgICBzaG93VG9Eb3ModG9Eb0FycmF5KTtcbiAgICBhc3NpZ25SZW1vdmVCdG5zKCk7XG4gICAgc2F2ZVRvRG9zVG9TdG9yYWdlKHRvRG9BcnJheSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVUb0RvKGUsIHRvRG9JbmRleCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICByZW1vdmVOb25Qcm9qZWN0VG9Ebyh0b0RvSW5kZXgpO1xuICAgIHRvRG9BcnJheS5zcGxpY2UodG9Eb0luZGV4LCAxKTtcbiAgICByZWR1Y2VJbmRleCh0b0RvQXJyYXksIHRvRG9JbmRleCk7XG4gICAgc2hvd1RvRG9zKHRvRG9BcnJheSk7XG4gICAgYXNzaWduUmVtb3ZlQnRucygpO1xuICAgIHNhdmVUb0Rvc1RvU3RvcmFnZSh0b0RvQXJyYXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZWRpdFRvRG8oZSwgdG9kbykge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0aXRsZVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tdGl0bGUnICsgYCR7dG9kby5pbmRleH1gKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1kZXNjcmlwdGlvbicgKyBgJHt0b2RvLmluZGV4fWApLnZhbHVlO1xuICAgIGNvbnN0IGR1ZVZhbHVlID0gbmV3IERhdGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZHVlLWRhdGUnICsgYCR7dG9kby5pbmRleH1gKS52YWx1ZSk7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1wcmlvcml0eScgKyBgJHt0b2RvLmluZGV4fWApLnZhbHVlO1xuICAgIHRvZG8udGl0bGUgPSB0aXRsZVZhbHVlO1xuICAgIHRvZG8uZGVzY3JpcHRpb24gPSBkZXNjVmFsdWU7XG4gICAgdG9kby5kdWVEYXRlID0gZHVlVmFsdWU7XG4gICAgdG9kby5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHNob3dUb0Rvcyh0b0RvQXJyYXkpO1xuICAgIGFzc2lnblJlbW92ZUJ0bnMoKTtcbiAgICBzYXZlVG9Eb3NUb1N0b3JhZ2UodG9Eb0FycmF5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFzc2lnblJlbW92ZUJ0bnMoKSB7XG4gICAgY29uc3QgdG9Eb1BhcmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG8taXRlbScpO1xuICAgIHRvRG9QYXJhcy5mb3JFYWNoKGZ1bmN0aW9uKHRvRG8pIHtcbiAgICAgIGNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXJlbW92ZScgKyBgJHt0b0RvLmRhdGFzZXQuaW5kZXh9YCk7XG4gICAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gcmVtb3ZlVG9EbyhlLCB0b0RvLmRhdGFzZXQuaW5kZXgpKTtcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gYXNzaWduVG9Eb0VkaXRCdG5zKHRvZG8pIHtcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tc3VibWl0LWVkaXQnICsgYCR7dG9kby5pbmRleH1gKTtcbiAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGVkaXRUb0RvKGUsIHRvZG8pKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZHVjZUluZGV4KGFycmF5LCByZW1vdmVkSXRlbUluZGV4KSB7XG4gICAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICBpZiAoaXRlbS5pbmRleCA+IHJlbW92ZWRJdGVtSW5kZXgpIHtcbiAgICAgICAgaXRlbS5pbmRleCAtPSAxO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBwcmludEFycmF5KCkge1xuICAgIHRvRG9BcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICBjb25zb2xlLmxvZyhpdGVtKTtcbiAgICB9KTtcbiAgfVxuICAgIFxuICByZXR1cm4geyB0b0RvQXJyYXksIHRvRG9GYWN0b3J5LCBhc3NpZ25Ub0RvRWRpdEJ0bnMsIHRvRG9TdG9yYWdlTG9hZCB9XG4gICAgXG59KSgpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IHRvRG8gfSBmcm9tICcuL21vZHVsZXMvdG9kby1pdGVtcy90b2RvJztcbmltcG9ydCB7IHByb2plY3QgfSBmcm9tICcuL21vZHVsZXMvcHJvamVjdHMvcHJvamVjdCc7XG5pbXBvcnQgeyByZXRyaWV2ZVNhdmVkUHJvamVjdHMsIHJldHJpZXZlU2F2ZWRUb0RvcywgY2xlYXJTdG9yYWdlIH0gZnJvbSAnLi9tb2R1bGVzL2xvY2FsLXN0b3JhZ2UnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgdG9Eby50b0RvU3RvcmFnZUxvYWQoKTtcbiAgcHJvamVjdC5wcm9qZWN0U3RvcmFnZUxvYWQoKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=