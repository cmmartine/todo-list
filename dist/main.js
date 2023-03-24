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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0px;\n  padding: 0px;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\np {\n  margin-bottom: 8px;\n}\n\n.content-container {\n  display: flex;\n  flex-direction: column;\n  max-width: 100vw;\n}\n\n.toggle-visibility {\n  display: none;\n}\n\n.nav {\n  display: flex;\n  align-items: center;\n  position: sticky;\n  width: 100%;\n  margin: auto;\n  height: 56px;\n  top: 0px;\n  background-color: rgb(69, 70, 73);\n  color: white;\n}\n\n.nav-h3 {\n  padding-left: 25px;\n}\n\n.top-forms-container{\n  display: flex;\n  padding-top: 15px;\n}\n\n.form-div {\n  display: flex;\n  flex-direction: column;\n  margin: 0px 20px;\n}\n\n.input-title {\n  margin-top: 10px;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  max-width: calc(200px - 15px);\n}\n\n.form-button {\n  width: 100px;\n  height: 25px;\n  padding: 2px;\n  background-color: rgb(69, 70, 73);\n  color: white;\n  font-weight: bold;\n  margin-top: 10px;\n}\n\n.form-button:hover {\n  background-color: rgba(69, 70, 73, 0.664);\n}\n\n.form-button:active {\n  background-color: rgba(83, 96, 134, 0.664);\n}\n\n.content {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  align-self: center;\n  min-width: calc(100% - 50px);\n  max-width: calc(100% - 72px);\n  min-height: calc(100vh - 112px);\n  padding: 0px 25px;\n  background-color: rgba(199, 193, 162, 0.349);\n}\n\nh2 {\n  margin: 15px 20px\n}\n\n.project-list, .todo-list {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-self: center;\n  align-items: center;\n  width: 90%;\n  border-top: 2px solid rgba(199, 193, 162, 0.692);\n}\n\n.project, .todo-item {\n  display: grid;\n  grid-template-rows: repeat(auto-fit, minmax(0.1fr, 1fr));\n  grid-template-columns: 1fr 0.05fr;\n  background-color: rgb(255, 255, 255);\n  border: 1px solid black;\n  margin: 15px 15px;\n  padding: 20px;\n  width: 90%;\n}\n\n.todo-content, .project-content {\n  word-wrap: break-word;\n  min-width: 180px;\n  max-width: 80%;\n}\n\n.remove-button {\n  grid-row: 1;\n  grid-column: 2;\n  justify-self: end;\n  background-color: rgb(69, 70, 73);\n  color: white;\n  font-weight: bold;\n  width: 25px;\n  height: 25px;\n}\n\n.remove-button:hover {\n  background-color: rgb(255, 0, 0);\n}\n\n.remove-button:active {\n  background-color: rgba(182, 36, 31, 0.808);\n}\n\n.project-todo-div{\n  grid-row: 2;\n  min-width: 200px;\n  max-width: 90%;\n  margin: 5px 0px;\n  padding: 5px 0px;\n  border-top: 1px solid rgb(69, 70, 73);\n}\n\n.project-todo-item {\n  margin-top: 5px;\n  padding: 5px;\n  border-top: 1px dotted rgb(69, 70, 73);\n}\n\n.project-todo-form {\n  grid-row: 3;\n  grid-column: 1;\n  max-width: 200px;\n}\n\n.priority-none {\n  font-weight: bold;\n}\n\n.priority-highest {\n  color: red;\n  font-weight: bold;\n}\n\n.priority-high {\n  color: orange;\n  font-weight: bold;\n}\n\n.priority-middle {\n  color: rgb(0, 173, 0);\n  font-weight: bold;\n}\n\n.priority-low {\n  color: blue;\n  font-weight: bold;\n}\n\n.footer {\n  display: flex;\n  align-items: center;\n  height: 56px;\n  background-color: rgb(69, 70, 73);\n  color: rgb(196, 196, 196);\n}\n\n.footer-p {\n  padding-left: 25px;\n}\n\n@media (max-width: 480px) {\n\n  .top-forms-container {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .project, .todo-item {\n    display: flex;\n    flex-direction: column;\n    margin: 15px 0px;\n    padding: 10px 12px;\n  }\n  \n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,QAAQ;EACR,iCAAiC;EACjC,YAAY;AACd;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,iCAAiC;EACjC,YAAY;EACZ,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,aAAa;EACb,eAAe;EACf,sBAAsB;EACtB,kBAAkB;EAClB,4BAA4B;EAC5B,4BAA4B;EAC5B,+BAA+B;EAC/B,iBAAiB;EACjB,4CAA4C;AAC9C;;AAEA;EACE;AACF;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,eAAe;EACf,kBAAkB;EAClB,mBAAmB;EACnB,UAAU;EACV,gDAAgD;AAClD;;AAEA;EACE,aAAa;EACb,wDAAwD;EACxD,iCAAiC;EACjC,oCAAoC;EACpC,uBAAuB;EACvB,iBAAiB;EACjB,aAAa;EACb,UAAU;AACZ;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,iBAAiB;EACjB,iCAAiC;EACjC,YAAY;EACZ,iBAAiB;EACjB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,qCAAqC;AACvC;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,sCAAsC;AACxC;;AAEA;EACE,WAAW;EACX,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,iCAAiC;EACjC,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;EAEE;IACE,aAAa;IACb,sBAAsB;EACxB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,kBAAkB;EACpB;;AAEF","sourcesContent":["* {\n  margin: 0px;\n  padding: 0px;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\np {\n  margin-bottom: 8px;\n}\n\n.content-container {\n  display: flex;\n  flex-direction: column;\n  max-width: 100vw;\n}\n\n.toggle-visibility {\n  display: none;\n}\n\n.nav {\n  display: flex;\n  align-items: center;\n  position: sticky;\n  width: 100%;\n  margin: auto;\n  height: 56px;\n  top: 0px;\n  background-color: rgb(69, 70, 73);\n  color: white;\n}\n\n.nav-h3 {\n  padding-left: 25px;\n}\n\n.top-forms-container{\n  display: flex;\n  padding-top: 15px;\n}\n\n.form-div {\n  display: flex;\n  flex-direction: column;\n  margin: 0px 20px;\n}\n\n.input-title {\n  margin-top: 10px;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  max-width: calc(200px - 15px);\n}\n\n.form-button {\n  width: 100px;\n  height: 25px;\n  padding: 2px;\n  background-color: rgb(69, 70, 73);\n  color: white;\n  font-weight: bold;\n  margin-top: 10px;\n}\n\n.form-button:hover {\n  background-color: rgba(69, 70, 73, 0.664);\n}\n\n.form-button:active {\n  background-color: rgba(83, 96, 134, 0.664);\n}\n\n.content {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  align-self: center;\n  min-width: calc(100% - 50px);\n  max-width: calc(100% - 72px);\n  min-height: calc(100vh - 112px);\n  padding: 0px 25px;\n  background-color: rgba(199, 193, 162, 0.349);\n}\n\nh2 {\n  margin: 15px 20px\n}\n\n.project-list, .todo-list {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-self: center;\n  align-items: center;\n  width: 90%;\n  border-top: 2px solid rgba(199, 193, 162, 0.692);\n}\n\n.project, .todo-item {\n  display: grid;\n  grid-template-rows: repeat(auto-fit, minmax(0.1fr, 1fr));\n  grid-template-columns: 1fr 0.05fr;\n  background-color: rgb(255, 255, 255);\n  border: 1px solid black;\n  margin: 15px 15px;\n  padding: 20px;\n  width: 90%;\n}\n\n.todo-content, .project-content {\n  word-wrap: break-word;\n  min-width: 180px;\n  max-width: 80%;\n}\n\n.remove-button {\n  grid-row: 1;\n  grid-column: 2;\n  justify-self: end;\n  background-color: rgb(69, 70, 73);\n  color: white;\n  font-weight: bold;\n  width: 25px;\n  height: 25px;\n}\n\n.remove-button:hover {\n  background-color: rgb(255, 0, 0);\n}\n\n.remove-button:active {\n  background-color: rgba(182, 36, 31, 0.808);\n}\n\n.project-todo-div{\n  grid-row: 2;\n  min-width: 200px;\n  max-width: 90%;\n  margin: 5px 0px;\n  padding: 5px 0px;\n  border-top: 1px solid rgb(69, 70, 73);\n}\n\n.project-todo-item {\n  margin-top: 5px;\n  padding: 5px;\n  border-top: 1px dotted rgb(69, 70, 73);\n}\n\n.project-todo-form {\n  grid-row: 3;\n  grid-column: 1;\n  max-width: 200px;\n}\n\n.priority-none {\n  font-weight: bold;\n}\n\n.priority-highest {\n  color: red;\n  font-weight: bold;\n}\n\n.priority-high {\n  color: orange;\n  font-weight: bold;\n}\n\n.priority-middle {\n  color: rgb(0, 173, 0);\n  font-weight: bold;\n}\n\n.priority-low {\n  color: blue;\n  font-weight: bold;\n}\n\n.footer {\n  display: flex;\n  align-items: center;\n  height: 56px;\n  background-color: rgb(69, 70, 73);\n  color: rgb(196, 196, 196);\n}\n\n.footer-p {\n  padding-left: 25px;\n}\n\n@media (max-width: 480px) {\n\n  .top-forms-container {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .project, .todo-item {\n    display: flex;\n    flex-direction: column;\n    margin: 15px 0px;\n    padding: 10px 12px;\n  }\n  \n}"],"sourceRoot":""}]);
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
/* harmony import */ var _todo_items_todo_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../todo-items/todo-form */ "./src/modules/todo-items/todo-form.js");
/* harmony import */ var _project_edit_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-edit-form */ "./src/modules/projects/project-edit-form.js");
/* harmony import */ var _form_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form-toggle */ "./src/modules/form-toggle.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project */ "./src/modules/projects/project.js");

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

    const toDoForm = (0,_todo_items_todo_form__WEBPACK_IMPORTED_MODULE_0__.createToDoForm)(projectContainer, project.index);
    projectContainer.append(projectToDoDiv, toDoForm);

    const showEditButton = document.createElement('button');
    showEditButton.id = 'project-edit-show' + `${project.index}`;
    showEditButton.textContent = 'Edit Project';
    showEditButton.classList.add('form-button');

    const hideEditButton = document.createElement('button');
    hideEditButton.id = 'project-edit-hide' + `${project.index}`;
    hideEditButton.textContent = 'Hide Form';
    hideEditButton.classList.add('form-button', 'toggle-visibility');

    projectContainer.append(showEditButton, hideEditButton);

    const showButton = document.createElement('button');
    showButton.id = 'project-todo-show' + `${project.index}`;
    showButton.classList.add('form-button');
    showButton.textContent = 'New To Do';

    const hideButton = document.createElement('button');
    hideButton.id = 'project-todo-hide' + `${project.index}`;
    hideButton.classList.add('form-button', 'toggle-visibility');
    hideButton.textContent = 'Hide Form';

    showEditButton.addEventListener('click', (e) => _form_toggle__WEBPACK_IMPORTED_MODULE_2__.formToggle.showForm(showEditButton, hideEditButton, projectEditForm, e));
    showEditButton.addEventListener('click', (e) => _project__WEBPACK_IMPORTED_MODULE_3__.project.assignProjectEditBtns(project));
    hideEditButton.addEventListener('click', (e) => _form_toggle__WEBPACK_IMPORTED_MODULE_2__.formToggle.hideForm(showEditButton, hideEditButton, projectEditForm, e));

    showButton.addEventListener('click', (e) => _form_toggle__WEBPACK_IMPORTED_MODULE_2__.formToggle.showForm(showButton, hideButton, toDoForm, e));
    hideButton.addEventListener('click', (e) => _form_toggle__WEBPACK_IMPORTED_MODULE_2__.formToggle.hideForm(showButton, hideButton, toDoForm, e));
      
    project.toDos.forEach(function(toDo) {
      const toDoDiv = document.createElement('div');
      toDoDiv.id = 'project-todo-div' + `${project.index}` + `${toDo.index}`;
      toDoDiv.classList.add('project-todo-item');
      toDoDiv.dataset.index = `${project.index}${toDo.index}`;

      const toDoContents = document.createElement('div');
      toDoContents.classList.add('todo-content');

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

      toDoContents.append(toDoTitle, toDoDesc, toDoDate, toDoPriority);
      toDoDiv.append(toDoContents);
      projectToDoDiv.append(toDoDiv);
      toDoDiv.append(toDoRemoveBtn);
    })
    projectToDoDiv.append(showButton, hideButton);
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
    descLabel.innerText = 'Title: ';
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




const project = (function() {

  const projectArray = [];

  const submitBtn = document.getElementById('project-submit');
  submitBtn.addEventListener('click', buildAndAddProject);

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
  }

  function removeProject(e, projectIndex) {
    (0,_project_dom__WEBPACK_IMPORTED_MODULE_0__.removeProjectDOM)(projectIndex);
    projectArray.splice(projectIndex, 1);
    reduceIndex(projectArray, projectIndex);
    (0,_project_dom__WEBPACK_IMPORTED_MODULE_0__.showProjects)(projectArray);
    assignProjectToDoSubmits();
    assignProjectToDoRemoveBtns();
    assignProjectRemoveBtns();
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

  function removeProjectToDo(e, project, toDo) {
    (0,_project_dom__WEBPACK_IMPORTED_MODULE_0__.removeProjectToDoDOM)(project.index, toDo.index);
    project.toDos.splice(toDo.index, 1);
    reduceIndex(project.toDos, toDo.index);
    (0,_project_dom__WEBPACK_IMPORTED_MODULE_0__.showProjects)(projectArray);
    assignProjectToDoSubmits();
    assignProjectToDoRemoveBtns();
    assignProjectRemoveBtns();
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
    
  return { projectArray, assignProjectEditBtns }
    
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

    toDoContents.append(toDoTitle, toDoDesc, toDoDate, toDoPriority, toDoEditForm);
    toDoDiv.append(toDoContents, removeBtn);
    toDoContainer.append(toDoDiv);

    const showEditButton = document.createElement('button');
    showEditButton.id = 'todo-edit-show' + `${item.index}`;
    showEditButton.textContent = 'Edit To Do';
    showEditButton.classList.add('form-button');

    const hideEditButton = document.createElement('button');
    hideEditButton.id = 'todo-edit-hide' + `${item.index}`;
    hideEditButton.textContent = 'Hide Form';
    hideEditButton.classList.add('form-button', 'toggle-visibility');

    toDoContents.append(showEditButton, hideEditButton);

    showEditButton.addEventListener('click', (e) => _form_toggle__WEBPACK_IMPORTED_MODULE_2__.formToggle.showForm(showEditButton, hideEditButton, toDoEditForm, e));
    showEditButton.addEventListener('click', (e) => _todo__WEBPACK_IMPORTED_MODULE_0__.toDo.assignToDoEditBtns(item));
    hideEditButton.addEventListener('click', (e) => _form_toggle__WEBPACK_IMPORTED_MODULE_2__.formToggle.hideForm(showEditButton, hideEditButton, toDoEditForm, e));
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

/***/ "./src/modules/todo-items/todo-form.js":
/*!*********************************************!*\
  !*** ./src/modules/todo-items/todo-form.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createToDoForm": () => (/* binding */ createToDoForm)
/* harmony export */ });



  const textFieldsArray = ['title', 'description'];

  function createToDoForm(projectContainer, projectIndex) {
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



const toDo = (function() {

  const toDoArray = [];

  const submitBtn = document.getElementById('todo-submit');
  submitBtn.addEventListener('click', buildAndAddToDo);

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
  }

  function removeToDo(e, toDoIndex) {
    e.preventDefault();
    (0,_todo_dom__WEBPACK_IMPORTED_MODULE_0__.removeNonProjectToDo)(toDoIndex);
    toDoArray.splice(toDoIndex, 1);
    reduceIndex(toDoArray, toDoIndex);
    (0,_todo_dom__WEBPACK_IMPORTED_MODULE_0__.showToDos)(toDoArray);
    assignRemoveBtns();
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
    
  return { toDoArray, toDoFactory, assignToDoEditBtns }
    
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
/* harmony import */ var _modules_form_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/form-toggle */ "./src/modules/form-toggle.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQWlEO0FBQ0k7QUFDRjtBQUM5QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9mb3JtLXRvZ2dsZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0cy9wcm9qZWN0LWRvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0cy9wcm9qZWN0LWVkaXQtZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0cy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RvZG8taXRlbXMvdG9kby1kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9kby1pdGVtcy90b2RvLWVkaXQtZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90b2RvLWl0ZW1zL3RvZG8tZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90b2RvLWl0ZW1zL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5wIHtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG59XFxuXFxuLnRvZ2dsZS12aXNpYmlsaXR5IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IGF1dG87XFxuICBoZWlnaHQ6IDU2cHg7XFxuICB0b3A6IDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2OSwgNzAsIDczKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm5hdi1oMyB7XFxuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxufVxcblxcbi50b3AtZm9ybXMtY29udGFpbmVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xcbn1cXG5cXG4uZm9ybS1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDBweCAyMHB4O1xcbn1cXG5cXG4uaW5wdXQtdGl0bGUge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1heC13aWR0aDogY2FsYygyMDBweCAtIDE1cHgpO1xcbn1cXG5cXG4uZm9ybS1idXR0b24ge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgcGFkZGluZzogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY5LCA3MCwgNzMpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uZm9ybS1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2OSwgNzAsIDczLCAwLjY2NCk7XFxufVxcblxcbi5mb3JtLWJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MywgOTYsIDEzNCwgMC42NjQpO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1pbi13aWR0aDogY2FsYygxMDAlIC0gNTBweCk7XFxuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDcycHgpO1xcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDExMnB4KTtcXG4gIHBhZGRpbmc6IDBweCAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTksIDE5MywgMTYyLCAwLjM0OSk7XFxufVxcblxcbmgyIHtcXG4gIG1hcmdpbjogMTVweCAyMHB4XFxufVxcblxcbi5wcm9qZWN0LWxpc3QsIC50b2RvLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKDE5OSwgMTkzLCAxNjIsIDAuNjkyKTtcXG59XFxuXFxuLnByb2plY3QsIC50b2RvLWl0ZW0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMC4xZnIsIDFmcikpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMC4wNWZyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBtYXJnaW46IDE1cHggMTVweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4udG9kby1jb250ZW50LCAucHJvamVjdC1jb250ZW50IHtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIG1pbi13aWR0aDogMTgwcHg7XFxuICBtYXgtd2lkdGg6IDgwJTtcXG59XFxuXFxuLnJlbW92ZS1idXR0b24ge1xcbiAgZ3JpZC1yb3c6IDE7XFxuICBncmlkLWNvbHVtbjogMjtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY5LCA3MCwgNzMpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG59XFxuXFxuLnJlbW92ZS1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxufVxcblxcbi5yZW1vdmUtYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4MiwgMzYsIDMxLCAwLjgwOCk7XFxufVxcblxcbi5wcm9qZWN0LXRvZG8tZGl2e1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgbWF4LXdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDVweCAwcHg7XFxuICBwYWRkaW5nOiA1cHggMHB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYig2OSwgNzAsIDczKTtcXG59XFxuXFxuLnByb2plY3QtdG9kby1pdGVtIHtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgcmdiKDY5LCA3MCwgNzMpO1xcbn1cXG5cXG4ucHJvamVjdC10b2RvLWZvcm0ge1xcbiAgZ3JpZC1yb3c6IDM7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIG1heC13aWR0aDogMjAwcHg7XFxufVxcblxcbi5wcmlvcml0eS1ub25lIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucHJpb3JpdHktaGlnaGVzdCB7XFxuICBjb2xvcjogcmVkO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wcmlvcml0eS1oaWdoIHtcXG4gIGNvbG9yOiBvcmFuZ2U7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnByaW9yaXR5LW1pZGRsZSB7XFxuICBjb2xvcjogcmdiKDAsIDE3MywgMCk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnByaW9yaXR5LWxvdyB7XFxuICBjb2xvcjogYmx1ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA1NnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY5LCA3MCwgNzMpO1xcbiAgY29sb3I6IHJnYigxOTYsIDE5NiwgMTk2KTtcXG59XFxuXFxuLmZvb3Rlci1wIHtcXG4gIHBhZGRpbmctbGVmdDogMjVweDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuXFxuICAudG9wLWZvcm1zLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAucHJvamVjdCwgLnRvZG8taXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbjogMTVweCAwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcXG4gIH1cXG4gIFxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixRQUFRO0VBQ1IsaUNBQWlDO0VBQ2pDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsK0JBQStCO0VBQy9CLGlCQUFpQjtFQUNqQiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsZ0RBQWdEO0FBQ2xEOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHdEQUF3RDtFQUN4RCxpQ0FBaUM7RUFDakMsb0NBQW9DO0VBQ3BDLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGlDQUFpQztFQUNqQyxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7O0FBRUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5wIHtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG59XFxuXFxuLnRvZ2dsZS12aXNpYmlsaXR5IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IGF1dG87XFxuICBoZWlnaHQ6IDU2cHg7XFxuICB0b3A6IDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2OSwgNzAsIDczKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm5hdi1oMyB7XFxuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxufVxcblxcbi50b3AtZm9ybXMtY29udGFpbmVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xcbn1cXG5cXG4uZm9ybS1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDBweCAyMHB4O1xcbn1cXG5cXG4uaW5wdXQtdGl0bGUge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1heC13aWR0aDogY2FsYygyMDBweCAtIDE1cHgpO1xcbn1cXG5cXG4uZm9ybS1idXR0b24ge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgcGFkZGluZzogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY5LCA3MCwgNzMpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uZm9ybS1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2OSwgNzAsIDczLCAwLjY2NCk7XFxufVxcblxcbi5mb3JtLWJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MywgOTYsIDEzNCwgMC42NjQpO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1pbi13aWR0aDogY2FsYygxMDAlIC0gNTBweCk7XFxuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDcycHgpO1xcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDExMnB4KTtcXG4gIHBhZGRpbmc6IDBweCAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTksIDE5MywgMTYyLCAwLjM0OSk7XFxufVxcblxcbmgyIHtcXG4gIG1hcmdpbjogMTVweCAyMHB4XFxufVxcblxcbi5wcm9qZWN0LWxpc3QsIC50b2RvLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKDE5OSwgMTkzLCAxNjIsIDAuNjkyKTtcXG59XFxuXFxuLnByb2plY3QsIC50b2RvLWl0ZW0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMC4xZnIsIDFmcikpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMC4wNWZyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBtYXJnaW46IDE1cHggMTVweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4udG9kby1jb250ZW50LCAucHJvamVjdC1jb250ZW50IHtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIG1pbi13aWR0aDogMTgwcHg7XFxuICBtYXgtd2lkdGg6IDgwJTtcXG59XFxuXFxuLnJlbW92ZS1idXR0b24ge1xcbiAgZ3JpZC1yb3c6IDE7XFxuICBncmlkLWNvbHVtbjogMjtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY5LCA3MCwgNzMpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG59XFxuXFxuLnJlbW92ZS1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxufVxcblxcbi5yZW1vdmUtYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4MiwgMzYsIDMxLCAwLjgwOCk7XFxufVxcblxcbi5wcm9qZWN0LXRvZG8tZGl2e1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgbWF4LXdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDVweCAwcHg7XFxuICBwYWRkaW5nOiA1cHggMHB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYig2OSwgNzAsIDczKTtcXG59XFxuXFxuLnByb2plY3QtdG9kby1pdGVtIHtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgcmdiKDY5LCA3MCwgNzMpO1xcbn1cXG5cXG4ucHJvamVjdC10b2RvLWZvcm0ge1xcbiAgZ3JpZC1yb3c6IDM7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIG1heC13aWR0aDogMjAwcHg7XFxufVxcblxcbi5wcmlvcml0eS1ub25lIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucHJpb3JpdHktaGlnaGVzdCB7XFxuICBjb2xvcjogcmVkO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wcmlvcml0eS1oaWdoIHtcXG4gIGNvbG9yOiBvcmFuZ2U7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnByaW9yaXR5LW1pZGRsZSB7XFxuICBjb2xvcjogcmdiKDAsIDE3MywgMCk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnByaW9yaXR5LWxvdyB7XFxuICBjb2xvcjogYmx1ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA1NnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY5LCA3MCwgNzMpO1xcbiAgY29sb3I6IHJnYigxOTYsIDE5NiwgMTk2KTtcXG59XFxuXFxuLmZvb3Rlci1wIHtcXG4gIHBhZGRpbmctbGVmdDogMjVweDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuXFxuICAudG9wLWZvcm1zLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAucHJvamVjdCwgLnRvZG8taXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbjogMTVweCAwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcXG4gIH1cXG4gIFxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IHsgZm9ybVRvZ2dsZSB9O1xuXG5jb25zdCBmb3JtVG9nZ2xlID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3Qgc2hvd1RvRG9Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3ctdG9kbycpO1xuICAgIGNvbnN0IGhpZGVUb0RvRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaWRlLXRvZG8nKTtcbiAgICBjb25zdCB0b0RvRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWZvcm0nKVxuICAgIGNvbnN0IHNob3dQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93LXByb2plY3QnKTtcbiAgICBjb25zdCBoaWRlUHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlkZS1wcm9qZWN0Jyk7XG4gICAgY29uc3QgUHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1mb3JtJylcbiAgICBzaG93VG9Eb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gc2hvd0Zvcm0oc2hvd1RvRG9Gb3JtLCBoaWRlVG9Eb0Zvcm0sIHRvRG9Gb3JtLCBlKSk7XG4gICAgaGlkZVRvRG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGhpZGVGb3JtKHNob3dUb0RvRm9ybSwgaGlkZVRvRG9Gb3JtLCB0b0RvRm9ybSwgZSkpO1xuICAgIHNob3dQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBzaG93Rm9ybShzaG93UHJvamVjdEZvcm0sIGhpZGVQcm9qZWN0Rm9ybSwgUHJvamVjdEZvcm0sIGUpKTtcbiAgICBoaWRlUHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gaGlkZUZvcm0oc2hvd1Byb2plY3RGb3JtLCBoaWRlUHJvamVjdEZvcm0sIFByb2plY3RGb3JtLCBlKSk7XG4gICAgLy9UaGUgc2hvdyBhbmQgaGlkZSBidXR0b25zIGZvciBwcm9qZWN0IHRvZG9zLCBhbmQgZWRpdHMgZm9yIGJvdGggcHJvamVjdHMgYW5kIHRvZG9zIGFyZSBsb2NhdGVkIGluIHRoZWlyIHJlc3BlY3RpdmUgZG9tIGZpbGVcblxuICAgIGZ1bmN0aW9uIHNob3dGb3JtKHNob3dCdG4sIGhpZGVCdG4sIGZvcm0pIHtcbiAgICAgICAgc2hvd0J0bi5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtdmlzaWJpbGl0eScpO1xuICAgICAgICBoaWRlQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3RvZ2dsZS12aXNpYmlsaXR5Jyk7XG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgndG9nZ2xlLXZpc2liaWxpdHknKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlRm9ybShzaG93QnRuLCBoaWRlQnRuLCBmb3JtKSB7XG4gICAgICAgIGhpZGVCdG4uY2xhc3NMaXN0LmFkZCgndG9nZ2xlLXZpc2liaWxpdHknKTtcbiAgICAgICAgc2hvd0J0bi5jbGFzc0xpc3QucmVtb3ZlKCd0b2dnbGUtdmlzaWJpbGl0eScpO1xuICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZS12aXNpYmlsaXR5Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc2hvd0Zvcm0sIGhpZGVGb3JtIH1cbn0pKCk7IiwiZXhwb3J0IHsgc2hvd1Byb2plY3RzLCByZW1vdmVQcm9qZWN0RE9NLCByZW1vdmVQcm9qZWN0VG9Eb0RPTSB9XG5pbXBvcnQgeyBjcmVhdGVUb0RvRm9ybSB9IGZyb20gXCIuLi90b2RvLWl0ZW1zL3RvZG8tZm9ybVwiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdEZvcm0gfSBmcm9tIFwiLi9wcm9qZWN0LWVkaXQtZm9ybVwiO1xuaW1wb3J0IHsgZm9ybVRvZ2dsZSB9IGZyb20gXCIuLi9mb3JtLXRvZ2dsZVwiO1xuaW1wb3J0IHsgcHJvamVjdCBhcyBwcm9qZWN0RmlsZX0gZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5jb25zdCBhbGxQcm9qZWN0c0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWxpc3QnKTtcblxuZnVuY3Rpb24gc2hvd1Byb2plY3RzKGFycmF5KSB7XG4gIHJlc2V0UHJvamVjdHMoKTtcbiAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbihwcm9qZWN0KSB7XG5cbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdENvbnRhaW5lci5kYXRhc2V0LmluZGV4ID0gcHJvamVjdC5pbmRleDtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmlkID0gJ3Byb2plY3QnICsgYCR7cHJvamVjdC5pbmRleH1gO1xuICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuXG4gICAgY29uc3QgcHJvamVjdFRvRG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0VG9Eb0Rpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRvZG8tZGl2Jyk7XG4gICAgcHJvamVjdFRvRG9EaXYuaW5uZXJUZXh0ID0gYFRvIERvczpcXG5gO1xuXG4gICAgY29uc3QgcHJvamVjdFJlbW92ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3RSZW1vdmVCdG4uaWQgPSAncHJvamVjdC1yZW1vdmUnICtgJHtwcm9qZWN0LmluZGV4fWA7XG4gICAgcHJvamVjdFJlbW92ZUJ0bi5pbm5lclRleHQgPSAnWCc7XG4gICAgcHJvamVjdFJlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKCdyZW1vdmUtYnV0dG9uJyk7XG5cbiAgICBjb25zdCBwcm9qZWN0Q29udGVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0Q29udGVudHMuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250ZW50Jyk7XG5cbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gYCR7cHJvamVjdC50aXRsZX1gO1xuICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKGBwcmlvcml0eS0ke3Byb2plY3QucHJpb3JpdHl9YCk7XG5cbiAgICBjb25zdCBwcm9qZWN0RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcm9qZWN0RGVzYy50ZXh0Q29udGVudCA9IGAke3Byb2plY3QuZGVzY3JpcHRpb259XFxuYDtcblxuICAgIGNvbnN0IHByb2plY3REYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHByb2plY3REYXRlLnRleHRDb250ZW50ID0gYER1ZSBieTogJHtwcm9qZWN0LmR1ZURhdGV9YDtcblxuICAgIGNvbnN0IHByb2plY3RQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwcm9qZWN0UHJpb3JpdHlDYXBpdGFsaXplZCA9IHByb2plY3QucHJpb3JpdHlbMF0udG9VcHBlckNhc2UoKSArIHByb2plY3QucHJpb3JpdHkuc2xpY2UoMSk7XG4gICAgcHJvamVjdFByaW9yaXR5LnRleHRDb250ZW50ID0gYFByaW9yaXR5OiAke3Byb2plY3RQcmlvcml0eUNhcGl0YWxpemVkfWA7XG5cbiAgICBjb25zdCBwcm9qZWN0RWRpdEZvcm0gPSBjcmVhdGVQcm9qZWN0Rm9ybShwcm9qZWN0LCBwcm9qZWN0LmluZGV4KTtcbiAgICAgIFxuICAgIHByb2plY3RDb250ZW50cy5hcHBlbmQocHJvamVjdFRpdGxlLCBwcm9qZWN0RGVzYywgcHJvamVjdERhdGUsIHByb2plY3RQcmlvcml0eSwgcHJvamVjdEVkaXRGb3JtKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0Q29udGVudHMsIHByb2plY3RSZW1vdmVCdG4pO1xuXG4gICAgY29uc3QgdG9Eb0Zvcm0gPSBjcmVhdGVUb0RvRm9ybShwcm9qZWN0Q29udGFpbmVyLCBwcm9qZWN0LmluZGV4KTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0VG9Eb0RpdiwgdG9Eb0Zvcm0pO1xuXG4gICAgY29uc3Qgc2hvd0VkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzaG93RWRpdEJ1dHRvbi5pZCA9ICdwcm9qZWN0LWVkaXQtc2hvdycgKyBgJHtwcm9qZWN0LmluZGV4fWA7XG4gICAgc2hvd0VkaXRCdXR0b24udGV4dENvbnRlbnQgPSAnRWRpdCBQcm9qZWN0JztcbiAgICBzaG93RWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmb3JtLWJ1dHRvbicpO1xuXG4gICAgY29uc3QgaGlkZUVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBoaWRlRWRpdEJ1dHRvbi5pZCA9ICdwcm9qZWN0LWVkaXQtaGlkZScgKyBgJHtwcm9qZWN0LmluZGV4fWA7XG4gICAgaGlkZUVkaXRCdXR0b24udGV4dENvbnRlbnQgPSAnSGlkZSBGb3JtJztcbiAgICBoaWRlRWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmb3JtLWJ1dHRvbicsICd0b2dnbGUtdmlzaWJpbGl0eScpO1xuXG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQoc2hvd0VkaXRCdXR0b24sIGhpZGVFZGl0QnV0dG9uKTtcblxuICAgIGNvbnN0IHNob3dCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzaG93QnV0dG9uLmlkID0gJ3Byb2plY3QtdG9kby1zaG93JyArIGAke3Byb2plY3QuaW5kZXh9YDtcbiAgICBzaG93QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYnV0dG9uJyk7XG4gICAgc2hvd0J1dHRvbi50ZXh0Q29udGVudCA9ICdOZXcgVG8gRG8nO1xuXG4gICAgY29uc3QgaGlkZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGhpZGVCdXR0b24uaWQgPSAncHJvamVjdC10b2RvLWhpZGUnICsgYCR7cHJvamVjdC5pbmRleH1gO1xuICAgIGhpZGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZm9ybS1idXR0b24nLCAndG9nZ2xlLXZpc2liaWxpdHknKTtcbiAgICBoaWRlQnV0dG9uLnRleHRDb250ZW50ID0gJ0hpZGUgRm9ybSc7XG5cbiAgICBzaG93RWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBmb3JtVG9nZ2xlLnNob3dGb3JtKHNob3dFZGl0QnV0dG9uLCBoaWRlRWRpdEJ1dHRvbiwgcHJvamVjdEVkaXRGb3JtLCBlKSk7XG4gICAgc2hvd0VkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gcHJvamVjdEZpbGUuYXNzaWduUHJvamVjdEVkaXRCdG5zKHByb2plY3QpKTtcbiAgICBoaWRlRWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBmb3JtVG9nZ2xlLmhpZGVGb3JtKHNob3dFZGl0QnV0dG9uLCBoaWRlRWRpdEJ1dHRvbiwgcHJvamVjdEVkaXRGb3JtLCBlKSk7XG5cbiAgICBzaG93QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGZvcm1Ub2dnbGUuc2hvd0Zvcm0oc2hvd0J1dHRvbiwgaGlkZUJ1dHRvbiwgdG9Eb0Zvcm0sIGUpKTtcbiAgICBoaWRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGZvcm1Ub2dnbGUuaGlkZUZvcm0oc2hvd0J1dHRvbiwgaGlkZUJ1dHRvbiwgdG9Eb0Zvcm0sIGUpKTtcbiAgICAgIFxuICAgIHByb2plY3QudG9Eb3MuZm9yRWFjaChmdW5jdGlvbih0b0RvKSB7XG4gICAgICBjb25zdCB0b0RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0b0RvRGl2LmlkID0gJ3Byb2plY3QtdG9kby1kaXYnICsgYCR7cHJvamVjdC5pbmRleH1gICsgYCR7dG9Eby5pbmRleH1gO1xuICAgICAgdG9Eb0Rpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRvZG8taXRlbScpO1xuICAgICAgdG9Eb0Rpdi5kYXRhc2V0LmluZGV4ID0gYCR7cHJvamVjdC5pbmRleH0ke3RvRG8uaW5kZXh9YDtcblxuICAgICAgY29uc3QgdG9Eb0NvbnRlbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0b0RvQ29udGVudHMuY2xhc3NMaXN0LmFkZCgndG9kby1jb250ZW50Jyk7XG5cbiAgICAgIGNvbnN0IHRvRG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIHRvRG9UaXRsZS50ZXh0Q29udGVudCA9IGAke3RvRG8udGl0bGV9YDtcbiAgICAgIHRvRG9UaXRsZS5jbGFzc0xpc3QuYWRkKGBwcmlvcml0eS0ke3RvRG8ucHJpb3JpdHl9YCk7XG5cbiAgICAgIGNvbnN0IHRvRG9EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgdG9Eb0Rlc2MudGV4dENvbnRlbnQgPSBgJHt0b0RvLmRlc2NyaXB0aW9ufWA7XG5cbiAgICAgIGNvbnN0IHRvRG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgdG9Eb0RhdGUudGV4dENvbnRlbnQgPSBgRHVlIGJ5OiAke3RvRG8uZHVlRGF0ZX1gO1xuXG4gICAgICBjb25zdCB0b0RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBjb25zdCBwcmlvcml0eUNhcGl0YWxpemVkID0gdG9Eby5wcmlvcml0eVswXS50b1VwcGVyQ2FzZSgpICsgdG9Eby5wcmlvcml0eS5zbGljZSgxKTtcbiAgICAgIHRvRG9Qcmlvcml0eS50ZXh0Q29udGVudCA9IGBQcmlvcml0eTogJHtwcmlvcml0eUNhcGl0YWxpemVkfWA7XG5cbiAgICAgIGNvbnN0IHRvRG9SZW1vdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIHRvRG9SZW1vdmVCdG4uaWQgPSAncHJvamVjdC10b2RvLXJlbW92ZScgKyBgJHtwcm9qZWN0LmluZGV4fWAgKyBgJHt0b0RvLmluZGV4fWA7XG4gICAgICB0b0RvUmVtb3ZlQnRuLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZS1idXR0b24nKTtcbiAgICAgIHRvRG9SZW1vdmVCdG4uaW5uZXJUZXh0ID0gJ1gnO1xuXG4gICAgICB0b0RvQ29udGVudHMuYXBwZW5kKHRvRG9UaXRsZSwgdG9Eb0Rlc2MsIHRvRG9EYXRlLCB0b0RvUHJpb3JpdHkpO1xuICAgICAgdG9Eb0Rpdi5hcHBlbmQodG9Eb0NvbnRlbnRzKTtcbiAgICAgIHByb2plY3RUb0RvRGl2LmFwcGVuZCh0b0RvRGl2KTtcbiAgICAgIHRvRG9EaXYuYXBwZW5kKHRvRG9SZW1vdmVCdG4pO1xuICAgIH0pXG4gICAgcHJvamVjdFRvRG9EaXYuYXBwZW5kKHNob3dCdXR0b24sIGhpZGVCdXR0b24pO1xuICAgIGFsbFByb2plY3RzRGl2LmFwcGVuZChwcm9qZWN0Q29udGFpbmVyKTtcbiAgfSlcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdERPTShwcm9qZWN0SW5kZXgpIHtcbiAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0JyArIGAke3Byb2plY3RJbmRleH1gKTtcbiAgcHJvamVjdERpdi5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdFRvRG9ET00ocHJvamVjdEluZGV4LCB0b0RvSW5kZXgpIHtcbiAgY29uc3QgdG9Eb0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXRvZG8tZGl2JyArIGAke3Byb2plY3RJbmRleH1gICsgYCR7dG9Eb0luZGV4fWApO1xuICB0b0RvRGl2LnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiByZXNldFByb2plY3RzKCkge1xuICBhbGxQcm9qZWN0c0Rpdi5pbm5lclRleHQgPSAnJztcbn1cbiIsImV4cG9ydCB7IGNyZWF0ZVByb2plY3RGb3JtIH07XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdEZvcm0ocHJvamVjdCwgcHJvamVjdEluZGV4KSB7XG4gICAgY29uc3QgbmV3Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBuZXdGb3JtLmNsYXNzTGlzdC5hZGQoXCJ0b2dnbGUtdmlzaWJpbGl0eVwiKTtcbiAgICBuZXdGb3JtLmRhdGFzZXQuaW5kZXggPSBwcm9qZWN0SW5kZXg7XG4gICAgbmV3Rm9ybS5pZCA9ICdwcm9qZWN0LWVkaXQtZm9ybScgKyBgJHtwcm9qZWN0SW5kZXh9YDtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUuaWQgPSAncHJvamVjdC10aXRsZScgKyBgJHtwcm9qZWN0SW5kZXh9YDtcbiAgICB0aXRsZUxhYmVsLmlubmVyVGV4dCA9ICdUaXRsZTogJ1xuICAgIHRpdGxlLnZhbHVlID0gcHJvamVjdC50aXRsZTtcbiAgICBuZXdGb3JtLmFwcGVuZCh0aXRsZUxhYmVsLCB0aXRsZSk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgY29uc3QgZGVzY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY3JpcHRpb24uaWQgPSAncHJvamVjdC1kZXNjcmlwdGlvbicgKyBgJHtwcm9qZWN0SW5kZXh9YDtcbiAgICBkZXNjTGFiZWwuaW5uZXJUZXh0ID0gJ1RpdGxlOiAnO1xuICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gcHJvamVjdC5kZXNjcmlwdGlvbjtcbiAgICBuZXdGb3JtLmFwcGVuZChkZXNjTGFiZWwsIGRlc2NyaXB0aW9uKTtcblxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGR1ZURhdGUuaWQgPSAncHJvamVjdC1kdWUtZGF0ZScgKyBgJHtwcm9qZWN0SW5kZXh9YDtcbiAgICBkYXRlTGFiZWwuaW5uZXJUZXh0ID0gJ0R1ZSBieTogJ1xuICAgIGR1ZURhdGUudHlwZSA9ICdkYXRldGltZS1sb2NhbCc7XG4gICAgbmV3Rm9ybS5hcHBlbmQoZGF0ZUxhYmVsLCBkdWVEYXRlKTtcblxuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByaW9yaXR5TGFiZWwuZm9yID0gJ3Byb2plY3QtcHJpb3JpdHknO1xuICAgIHByaW9yaXR5TGFiZWwuaW5uZXJUZXh0ID0gJ1ByaW9yaXR5JztcblxuICAgIGNvbnN0IHByaW9yaXR5VHlwZXMgPSBbJ25vbmUnLCAnaGlnaGVzdCcsICdoaWdoJywgJ21pZGRsZScsICdsb3cnXTtcbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHByaW9yaXR5U2VsZWN0LmlkID0gJ3Byb2plY3QtcHJpb3JpdHknICsgYCR7cHJvamVjdEluZGV4fWA7XG4gICAgcHJpb3JpdHlTZWxlY3QubmFtZSA9ICdwcmlvcml0aWVzJztcbiAgICBwcmlvcml0eVR5cGVzLmZvckVhY2goZnVuY3Rpb24odHlwZSkge1xuICAgICAgY29uc3QgcHJpb3JpdHlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIHByaW9yaXR5T3B0aW9uLnZhbHVlID0gdHlwZTtcbiAgICAgIHByaW9yaXR5T3B0aW9uLnRleHQgPSB0eXBlWzBdLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpO1xuICAgICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kKHByaW9yaXR5T3B0aW9uKTtcbiAgICB9KVxuICAgIHByaW9yaXR5U2VsZWN0LnZhbHVlID0gcHJvamVjdC5wcmlvcml0eTtcblxuICAgIG5ld0Zvcm0uYXBwZW5kKGR1ZURhdGUsIHByaW9yaXR5TGFiZWwsIHByaW9yaXR5U2VsZWN0KTtcblxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgc3VibWl0LnR5cGUgPSAnc3VibWl0JztcbiAgICBzdWJtaXQubmFtZSA9ICdzdWJtaXQnO1xuICAgIHN1Ym1pdC5pZCA9ICdwcm9qZWN0LXN1Ym1pdC1lZGl0JyArIGAke3Byb2plY3RJbmRleH1gO1xuICAgIHN1Ym1pdC5jbGFzc0xpc3QuYWRkKCdmb3JtLWJ1dHRvbicpO1xuICAgIG5ld0Zvcm0uYXBwZW5kKHN1Ym1pdCk7XG5cbiAgICByZXR1cm4gbmV3Rm9ybTtcbiAgfSIsImV4cG9ydCB7IHByb2plY3QgfTtcbmltcG9ydCB7IHNob3dQcm9qZWN0cywgcmVtb3ZlUHJvamVjdERPTSwgcmVtb3ZlUHJvamVjdFRvRG9ET00gfSBmcm9tIFwiLi9wcm9qZWN0LWRvbVwiO1xuaW1wb3J0IHsgdG9EbyB9IGZyb20gXCIuLi90b2RvLWl0ZW1zL3RvZG9cIjtcblxuY29uc3QgcHJvamVjdCA9IChmdW5jdGlvbigpIHtcblxuICBjb25zdCBwcm9qZWN0QXJyYXkgPSBbXTtcblxuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1zdWJtaXQnKTtcbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYnVpbGRBbmRBZGRQcm9qZWN0KTtcblxuICBmdW5jdGlvbiBwcm9qZWN0RmFjdG9yeSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBpbmRleCwgcHJpb3JpdHksIHRvRG9zID0gW10pIHtcbiAgICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGluZGV4LCBwcmlvcml0eSwgdG9Eb3MgfVxuICB9XG5cbiAgZnVuY3Rpb24gYnVpbGRBbmRBZGRQcm9qZWN0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGl0bGVWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXRpdGxlJykudmFsdWU7XG4gICAgY29uc3QgZGVzY1ZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICBjb25zdCBkdWVWYWx1ZSA9IG5ldyBEYXRlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWR1ZS1kYXRlJykudmFsdWUpO1xuICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdEFycmF5Lmxlbmd0aDtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXByaW9yaXR5JykudmFsdWU7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3RGYWN0b3J5KHRpdGxlVmFsdWUsIGRlc2NWYWx1ZSwgZHVlVmFsdWUsIGluZGV4LCBwcmlvcml0eSk7XG4gICAgcHJvamVjdEFycmF5LnB1c2gobmV3UHJvamVjdCk7XG4gICAgXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtZm9ybScpLnJlc2V0KCk7XG4gICAgc2hvd1Byb2plY3RzKHByb2plY3RBcnJheSk7XG4gICAgYXNzaWduUHJvamVjdFRvRG9TdWJtaXRzKCk7XG4gICAgYXNzaWduUHJvamVjdFJlbW92ZUJ0bnMoKTtcbiAgICBhc3NpZ25Qcm9qZWN0VG9Eb1JlbW92ZUJ0bnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVByb2plY3QoZSwgcHJvamVjdEluZGV4KSB7XG4gICAgcmVtb3ZlUHJvamVjdERPTShwcm9qZWN0SW5kZXgpO1xuICAgIHByb2plY3RBcnJheS5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcbiAgICByZWR1Y2VJbmRleChwcm9qZWN0QXJyYXksIHByb2plY3RJbmRleCk7XG4gICAgc2hvd1Byb2plY3RzKHByb2plY3RBcnJheSk7XG4gICAgYXNzaWduUHJvamVjdFRvRG9TdWJtaXRzKCk7XG4gICAgYXNzaWduUHJvamVjdFRvRG9SZW1vdmVCdG5zKCk7XG4gICAgYXNzaWduUHJvamVjdFJlbW92ZUJ0bnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVkaXRQcm9qZWN0KGUsIHByb2plY3QpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGl0bGVWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXRpdGxlJyArIGAke3Byb2plY3QuaW5kZXh9YCkudmFsdWU7XG4gICAgY29uc3QgZGVzY1ZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtZGVzY3JpcHRpb24nICsgYCR7cHJvamVjdC5pbmRleH1gKS52YWx1ZTtcbiAgICBjb25zdCBkdWVWYWx1ZSA9IG5ldyBEYXRlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWR1ZS1kYXRlJyArIGAke3Byb2plY3QuaW5kZXh9YCkudmFsdWUpO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtcHJpb3JpdHknICsgYCR7cHJvamVjdC5pbmRleH1gKS52YWx1ZTtcbiAgICBwcm9qZWN0LnRpdGxlID0gdGl0bGVWYWx1ZTtcbiAgICBwcm9qZWN0LmRlc2NyaXB0aW9uID0gZGVzY1ZhbHVlO1xuICAgIHByb2plY3QuZHVlRGF0ZSA9IGR1ZVZhbHVlO1xuICAgIHByb2plY3QucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICBzaG93UHJvamVjdHMocHJvamVjdEFycmF5KTtcbiAgICBhc3NpZ25Qcm9qZWN0VG9Eb1N1Ym1pdHMoKTtcbiAgICBhc3NpZ25Qcm9qZWN0VG9Eb1JlbW92ZUJ0bnMoKTtcbiAgICBhc3NpZ25Qcm9qZWN0UmVtb3ZlQnRucygpO1xuICB9XG5cbiAgZnVuY3Rpb24gYXNzaWduUHJvamVjdFRvRG9TdWJtaXRzKCkge1xuICAgIGNvbnN0IHByb2plY3RUb0RvRm9ybXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC10b2RvLWZvcm0nKTtcbiAgICBwcm9qZWN0VG9Eb0Zvcm1zLmZvckVhY2goZnVuY3Rpb24oZm9ybSkge1xuICAgICAgbGV0IHByb2plY3RJbmRleCA9IGZvcm0uZGF0YXNldC5pbmRleDtcbiAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXRvZG8tc3VibWl0JyArIGAke3Byb2plY3RJbmRleH1gKTtcbiAgICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBhZGRQcm9qZWN0VG9EbyhlLCBwcm9qZWN0SW5kZXgpKTtcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gYXNzaWduUHJvamVjdFJlbW92ZUJ0bnMoKSB7XG4gICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0Jyk7XG4gICAgcHJvamVjdERpdi5mb3JFYWNoKGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICAgIGNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXJlbW92ZScgKyBgJHtwcm9qZWN0LmRhdGFzZXQuaW5kZXh9YCk7XG4gICAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gcmVtb3ZlUHJvamVjdChlLCBwcm9qZWN0LmRhdGFzZXQuaW5kZXgpKTtcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gYXNzaWduUHJvamVjdEVkaXRCdG5zKHByb2plY3QpIHtcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3Qtc3VibWl0LWVkaXQnICsgYCR7cHJvamVjdC5pbmRleH1gKTtcbiAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGVkaXRQcm9qZWN0KGUsIHByb2plY3QpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFByb2plY3RUb0RvKGUsIHByb2plY3RJbmRleCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBwcm9qZWN0QXJyYXlbcHJvamVjdEluZGV4XTtcbiAgICAgIGNvbnN0IHRpdGxlVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10b2RvLXRpdGxlJytgJHtwcm9qZWN0SW5kZXh9YCkudmFsdWU7XG4gICAgICBjb25zdCBkZXNjVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10b2RvLWRlc2NyaXB0aW9uJytgJHtwcm9qZWN0SW5kZXh9YCkudmFsdWU7XG4gICAgICBjb25zdCBkdWVWYWx1ZSA9IG5ldyBEYXRlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXRvZG8tZHVlLWRhdGUnK2Ake3Byb2plY3RJbmRleH1gKS52YWx1ZSk7XG4gICAgICBjb25zdCBpbmRleCA9IGN1cnJlbnRQcm9qZWN0LnRvRG9zLmxlbmd0aDtcbiAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdG9kby1wcmlvcml0eScpLnZhbHVlO1xuICAgICAgY29uc3QgbmV3VG9EbyA9IHRvRG8udG9Eb0ZhY3RvcnkodGl0bGVWYWx1ZSwgZGVzY1ZhbHVlLCBkdWVWYWx1ZSwgaW5kZXgsIHByaW9yaXR5KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXRvZG8tZm9ybScrYCR7cHJvamVjdEluZGV4fWApLnJlc2V0KCk7XG4gICAgICBjdXJyZW50UHJvamVjdC50b0Rvcy5wdXNoKG5ld1RvRG8pO1xuICAgICAgc2hvd1Byb2plY3RzKHByb2plY3RBcnJheSk7XG4gICAgICBhc3NpZ25Qcm9qZWN0VG9Eb1N1Ym1pdHMoKTtcbiAgICAgIGFzc2lnblByb2plY3RUb0RvUmVtb3ZlQnRucygpO1xuICAgICAgYXNzaWduUHJvamVjdFJlbW92ZUJ0bnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFzc2lnblByb2plY3RUb0RvUmVtb3ZlQnRucygpIHtcbiAgICBwcm9qZWN0QXJyYXkuZm9yRWFjaChmdW5jdGlvbihwcm9qZWN0KSB7XG4gICAgICBwcm9qZWN0LnRvRG9zLmZvckVhY2goZnVuY3Rpb24odG9Ebykge1xuICAgICAgICBpZiAodG9EbyAhPSAnJykge1xuICAgICAgICAgIGxldCB0b0RvUmVtb3ZlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdG9kby1yZW1vdmUnICsgYCR7cHJvamVjdC5pbmRleH1gICsgYCR7dG9Eby5pbmRleH1gKTtcbiAgICAgICAgICB0b0RvUmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHJlbW92ZVByb2plY3RUb0RvKGUsIHByb2plY3QsIHRvRG8pKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVQcm9qZWN0VG9EbyhlLCBwcm9qZWN0LCB0b0RvKSB7XG4gICAgcmVtb3ZlUHJvamVjdFRvRG9ET00ocHJvamVjdC5pbmRleCwgdG9Eby5pbmRleCk7XG4gICAgcHJvamVjdC50b0Rvcy5zcGxpY2UodG9Eby5pbmRleCwgMSk7XG4gICAgcmVkdWNlSW5kZXgocHJvamVjdC50b0RvcywgdG9Eby5pbmRleCk7XG4gICAgc2hvd1Byb2plY3RzKHByb2plY3RBcnJheSk7XG4gICAgYXNzaWduUHJvamVjdFRvRG9TdWJtaXRzKCk7XG4gICAgYXNzaWduUHJvamVjdFRvRG9SZW1vdmVCdG5zKCk7XG4gICAgYXNzaWduUHJvamVjdFJlbW92ZUJ0bnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZHVjZUluZGV4KGFycmF5LCByZW1vdmVkSXRlbUluZGV4KSB7XG4gICAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICBpZiAoaXRlbS5pbmRleCA+IHJlbW92ZWRJdGVtSW5kZXgpIHtcbiAgICAgICAgaXRlbS5pbmRleCAtPSAxO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBwcmludEFycmF5KCkge1xuICAgIHByb2plY3RBcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICBjb25zb2xlLmxvZyhpdGVtKTtcbiAgICB9KTtcbiAgfVxuICAgIFxuICByZXR1cm4geyBwcm9qZWN0QXJyYXksIGFzc2lnblByb2plY3RFZGl0QnRucyB9XG4gICAgXG59KSgpOyIsImV4cG9ydCB7IHNob3dUb0RvcywgcmVtb3ZlTm9uUHJvamVjdFRvRG8gfVxuaW1wb3J0IHsgdG9EbyBhcyB0b0RvRmlsZSB9IGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCB7IGVkaXRUb0RvRm9ybSB9IGZyb20gXCIuL3RvZG8tZWRpdC1mb3JtXCI7XG5pbXBvcnQgeyBmb3JtVG9nZ2xlIH0gZnJvbSBcIi4uL2Zvcm0tdG9nZ2xlXCI7XG5cbmNvbnN0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1saXN0Jyk7XG5cbmZ1bmN0aW9uIHNob3dUb0RvcyhhcnJheSkge1xuICByZXNldFRvRG9zKCk7XG4gIGFycmF5LmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgIGNvbnN0IHRvRG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b0RvRGl2LmlkID0gJ3RvZG8taXRlbScgKyBgJHtpdGVtLmluZGV4fWA7XG4gICAgdG9Eb0Rpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW0nKTtcbiAgICB0b0RvRGl2LmRhdGFzZXQuaW5kZXggPSBpdGVtLmluZGV4O1xuXG4gICAgY29uc3QgdG9Eb0NvbnRlbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9Eb0NvbnRlbnRzLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY29udGVudCcpO1xuXG4gICAgY29uc3QgdG9Eb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRvRG9UaXRsZS50ZXh0Q29udGVudCA9IGAke2l0ZW0udGl0bGV9YDtcbiAgICB0b0RvVGl0bGUuY2xhc3NMaXN0LmFkZChgcHJpb3JpdHktJHtpdGVtLnByaW9yaXR5fWApO1xuXG4gICAgY29uc3QgdG9Eb0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdG9Eb0Rlc2MudGV4dENvbnRlbnQgPSBgJHtpdGVtLmRlc2NyaXB0aW9ufWA7XG5cbiAgICBjb25zdCB0b0RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0b0RvRGF0ZS50ZXh0Q29udGVudCA9IGBEdWUgYnk6ICR7aXRlbS5kdWVEYXRlfWA7XG5cbiAgICBjb25zdCB0b0RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcHJpb3JpdHlDYXBpdGFsaXplZCA9IGl0ZW0ucHJpb3JpdHlbMF0udG9VcHBlckNhc2UoKSArIGl0ZW0ucHJpb3JpdHkuc2xpY2UoMSk7XG4gICAgdG9Eb1ByaW9yaXR5LnRleHRDb250ZW50ID0gYFByaW9yaXR5OiAke3ByaW9yaXR5Q2FwaXRhbGl6ZWR9YDtcblxuICAgIGNvbnN0IHRvRG9FZGl0Rm9ybSA9IGVkaXRUb0RvRm9ybShpdGVtLCBpdGVtLmluZGV4KTtcblxuICAgIGNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHJlbW92ZUJ0bi5pZCA9ICd0b2RvLXJlbW92ZScgKyBgJHtpdGVtLmluZGV4fWA7XG4gICAgcmVtb3ZlQnRuLmlubmVyVGV4dCA9IFwiWFwiO1xuICAgIHJlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKCdyZW1vdmUtYnV0dG9uJyk7XG5cbiAgICB0b0RvQ29udGVudHMuYXBwZW5kKHRvRG9UaXRsZSwgdG9Eb0Rlc2MsIHRvRG9EYXRlLCB0b0RvUHJpb3JpdHksIHRvRG9FZGl0Rm9ybSk7XG4gICAgdG9Eb0Rpdi5hcHBlbmQodG9Eb0NvbnRlbnRzLCByZW1vdmVCdG4pO1xuICAgIHRvRG9Db250YWluZXIuYXBwZW5kKHRvRG9EaXYpO1xuXG4gICAgY29uc3Qgc2hvd0VkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzaG93RWRpdEJ1dHRvbi5pZCA9ICd0b2RvLWVkaXQtc2hvdycgKyBgJHtpdGVtLmluZGV4fWA7XG4gICAgc2hvd0VkaXRCdXR0b24udGV4dENvbnRlbnQgPSAnRWRpdCBUbyBEbyc7XG4gICAgc2hvd0VkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZm9ybS1idXR0b24nKTtcblxuICAgIGNvbnN0IGhpZGVFZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaGlkZUVkaXRCdXR0b24uaWQgPSAndG9kby1lZGl0LWhpZGUnICsgYCR7aXRlbS5pbmRleH1gO1xuICAgIGhpZGVFZGl0QnV0dG9uLnRleHRDb250ZW50ID0gJ0hpZGUgRm9ybSc7XG4gICAgaGlkZUVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZm9ybS1idXR0b24nLCAndG9nZ2xlLXZpc2liaWxpdHknKTtcblxuICAgIHRvRG9Db250ZW50cy5hcHBlbmQoc2hvd0VkaXRCdXR0b24sIGhpZGVFZGl0QnV0dG9uKTtcblxuICAgIHNob3dFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGZvcm1Ub2dnbGUuc2hvd0Zvcm0oc2hvd0VkaXRCdXR0b24sIGhpZGVFZGl0QnV0dG9uLCB0b0RvRWRpdEZvcm0sIGUpKTtcbiAgICBzaG93RWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB0b0RvRmlsZS5hc3NpZ25Ub0RvRWRpdEJ0bnMoaXRlbSkpO1xuICAgIGhpZGVFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGZvcm1Ub2dnbGUuaGlkZUZvcm0oc2hvd0VkaXRCdXR0b24sIGhpZGVFZGl0QnV0dG9uLCB0b0RvRWRpdEZvcm0sIGUpKTtcbiAgfSlcbn1cblxuZnVuY3Rpb24gcmVtb3ZlTm9uUHJvamVjdFRvRG8odG9Eb0luZGV4KSB7XG4gIGNvbnN0IHRvRG9EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1pdGVtJyArIGAke3RvRG9JbmRleH1gKTtcbiAgdG9Eb0Rpdi5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gcmVzZXRUb0RvcygpIHtcbiAgdG9Eb0NvbnRhaW5lci5pbm5lclRleHQgPSAnJztcbn1cbiIsImV4cG9ydCB7IGVkaXRUb0RvRm9ybSB9O1xuXG4gIGZ1bmN0aW9uIGVkaXRUb0RvRm9ybSh0b0RvLCB0b2RvSW5kZXgpIHtcbiAgICBjb25zdCBuZXdGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIG5ld0Zvcm0uY2xhc3NMaXN0LmFkZChcInRvZ2dsZS12aXNpYmlsaXR5XCIpO1xuICAgIG5ld0Zvcm0uZGF0YXNldC5pbmRleCA9IHRvZG9JbmRleDtcbiAgICBuZXdGb3JtLmlkID0gJ3RvZG8tZWRpdC1mb3JtJyArIGAke3RvZG9JbmRleH1gO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZS5pZCA9ICd0b2RvLXRpdGxlJyArIGAke3RvZG9JbmRleH1gO1xuICAgIHRpdGxlTGFiZWwuaW5uZXJUZXh0ID0gJ1RpdGxlOiAnO1xuICAgIHRpdGxlLnZhbHVlID0gdG9Eby50aXRsZTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBjb25zdCBkZXNjTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjcmlwdGlvbi5pZCA9ICd0b2RvLWRlc2NyaXB0aW9uJyArIGAke3RvZG9JbmRleH1gO1xuICAgIGRlc2NMYWJlbC5pbm5lclRleHQgPSAnRGVzY3JpcHRpb246ICc7XG4gICAgZGVzY3JpcHRpb24udmFsdWUgPSB0b0RvLmRlc2NyaXB0aW9uO1xuXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHVlRGF0ZS5pZCA9ICd0b2RvLWR1ZS1kYXRlJyArIGAke3RvZG9JbmRleH1gO1xuICAgIGRhdGVMYWJlbC5pbm5lclRleHQgPSAnRHVlIGJ5OiAnO1xuICAgIGR1ZURhdGUudHlwZSA9ICdkYXRldGltZS1sb2NhbCc7XG5cbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwcmlvcml0eUxhYmVsLmZvciA9ICd0b2RvLXByaW9yaXR5JztcbiAgICBwcmlvcml0eUxhYmVsLmlubmVyVGV4dCA9ICdQcmlvcml0eSc7XG5cbiAgICBjb25zdCBwcmlvcml0eVR5cGVzID0gWydub25lJywgJ2hpZ2hlc3QnLCAnaGlnaCcsICdtaWRkbGUnLCAnbG93J107XG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBwcmlvcml0eVNlbGVjdC5pZCA9ICd0b2RvLXByaW9yaXR5JyArIGAke3RvZG9JbmRleH1gO1xuICAgIHByaW9yaXR5U2VsZWN0Lm5hbWUgPSAncHJpb3JpdGllcyc7XG4gICAgcHJpb3JpdHlUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uKHR5cGUpIHtcbiAgICAgIGNvbnN0IHByaW9yaXR5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBwcmlvcml0eU9wdGlvbi52YWx1ZSA9IHR5cGU7XG4gICAgICBwcmlvcml0eU9wdGlvbi50ZXh0ID0gdHlwZVswXS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKTtcbiAgICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZChwcmlvcml0eU9wdGlvbik7XG4gICAgfSlcbiAgICBwcmlvcml0eVNlbGVjdC52YWx1ZSA9IHRvRG8ucHJpb3JpdHk7XG5cbiAgICBuZXdGb3JtLmFwcGVuZCh0aXRsZUxhYmVsLCB0aXRsZSwgZGVzY0xhYmVsLCBkZXNjcmlwdGlvbiwgZGF0ZUxhYmVsLCBkdWVEYXRlLCBwcmlvcml0eUxhYmVsLCBwcmlvcml0eVNlbGVjdCk7XG5cbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHN1Ym1pdC50eXBlID0gJ3N1Ym1pdCc7XG4gICAgc3VibWl0Lm5hbWUgPSAnc3VibWl0JztcbiAgICBzdWJtaXQuaWQgPSAndG9kby1zdWJtaXQtZWRpdCcgKyBgJHt0b2RvSW5kZXh9YDtcbiAgICBzdWJtaXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1idXR0b24nKTtcbiAgICBuZXdGb3JtLmFwcGVuZChzdWJtaXQpO1xuXG4gICAgcmV0dXJuIG5ld0Zvcm07XG4gIH0iLCJleHBvcnQgeyBjcmVhdGVUb0RvRm9ybSB9O1xuXG5cbiAgY29uc3QgdGV4dEZpZWxkc0FycmF5ID0gWyd0aXRsZScsICdkZXNjcmlwdGlvbiddO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZVRvRG9Gb3JtKHByb2plY3RDb250YWluZXIsIHByb2plY3RJbmRleCkge1xuICAgIGNvbnN0IG5ld0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgbmV3Rm9ybS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10b2RvLWZvcm1cIiwgXCJ0b2dnbGUtdmlzaWJpbGl0eVwiKTtcbiAgICBuZXdGb3JtLmRhdGFzZXQuaW5kZXggPSBwcm9qZWN0SW5kZXg7XG4gICAgbmV3Rm9ybS5pZCA9ICdwcm9qZWN0LXRvZG8tZm9ybScgKyBgJHtwcm9qZWN0SW5kZXh9YDtcblxuICAgIHRleHRGaWVsZHNBcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgICBjb25zdCBmaWVsZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBmaWVsZExhYmVsLmlubmVyVGV4dCA9IGZpZWxkWzBdLnRvVXBwZXJDYXNlKCkgKyBmaWVsZC5zbGljZSgxKTtcbiAgICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgaW5mby5pZCA9ICdwcm9qZWN0LXRvZG8nICsgJy0nICsgYCR7ZmllbGR9YCArIGAke3Byb2plY3RJbmRleH1gO1xuICAgICAgaW5mby5uYW1lID0gYCR7ZmllbGR9YDtcbiAgICAgIG5ld0Zvcm0uYXBwZW5kKGZpZWxkTGFiZWwpO1xuICAgICAgbmV3Rm9ybS5hcHBlbmQoaW5mbyk7XG4gICAgfSlcblxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGR1ZURhdGUuaWQgPSAncHJvamVjdC10b2RvLWR1ZS1kYXRlJyArIGAke3Byb2plY3RJbmRleH1gO1xuICAgIGRhdGVMYWJlbC5pbm5lclRleHQgPSAnRHVlIGJ5OiAnXG4gICAgZHVlRGF0ZS50eXBlID0gJ2RhdGV0aW1lLWxvY2FsJztcbiAgICBuZXdGb3JtLmFwcGVuZChkYXRlTGFiZWwsIGR1ZURhdGUpO1xuXG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJpb3JpdHlMYWJlbC5mb3IgPSAncHJvamVjdC10b2RvLXByaW9yaXR5JztcbiAgICBwcmlvcml0eUxhYmVsLmlubmVyVGV4dCA9ICdQcmlvcml0eSc7XG5cbiAgICBjb25zdCBwcmlvcml0eVR5cGVzID0gWydub25lJywgJ2hpZ2hlc3QnLCAnaGlnaCcsICdtaWRkbGUnLCAnbG93J107XG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBwcmlvcml0eVNlbGVjdC5pZCA9ICdwcm9qZWN0LXRvZG8tcHJpb3JpdHknO1xuICAgIHByaW9yaXR5U2VsZWN0Lm5hbWUgPSAncHJpb3JpdGllcyc7XG4gICAgcHJpb3JpdHlUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uKHR5cGUpIHtcbiAgICAgIGNvbnN0IHByaW9yaXR5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBwcmlvcml0eU9wdGlvbi52YWx1ZSA9IHR5cGU7XG4gICAgICBwcmlvcml0eU9wdGlvbi50ZXh0ID0gdHlwZVswXS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKTtcbiAgICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZChwcmlvcml0eU9wdGlvbik7XG4gICAgfSlcblxuICAgIG5ld0Zvcm0uYXBwZW5kKGR1ZURhdGUsIHByaW9yaXR5TGFiZWwsIHByaW9yaXR5U2VsZWN0KTtcblxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgc3VibWl0LnR5cGUgPSAnc3VibWl0JztcbiAgICBzdWJtaXQubmFtZSA9ICdzdWJtaXQnO1xuICAgIHN1Ym1pdC5pZCA9ICdwcm9qZWN0LXRvZG8tc3VibWl0JyArIGAke3Byb2plY3RJbmRleH1gO1xuICAgIHN1Ym1pdC5jbGFzc0xpc3QuYWRkKCdmb3JtLWJ1dHRvbicpO1xuICAgIG5ld0Zvcm0uYXBwZW5kKHN1Ym1pdCk7XG5cbiAgICByZXR1cm4gbmV3Rm9ybTtcbiAgfSIsImV4cG9ydCB7IHRvRG8gfTtcbmltcG9ydCB7IHJlbW92ZU5vblByb2plY3RUb0RvLCBzaG93VG9Eb3MgfSBmcm9tIFwiLi90b2RvLWRvbVwiO1xuXG5jb25zdCB0b0RvID0gKGZ1bmN0aW9uKCkge1xuXG4gIGNvbnN0IHRvRG9BcnJheSA9IFtdO1xuXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXN1Ym1pdCcpO1xuICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBidWlsZEFuZEFkZFRvRG8pO1xuXG4gIGZ1bmN0aW9uIHRvRG9GYWN0b3J5ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGluZGV4LCBwcmlvcml0eSkge1xuICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgaW5kZXgsIHByaW9yaXR5IH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkQW5kQWRkVG9EbyhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRpdGxlVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby10aXRsZScpLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWRlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgY29uc3QgZHVlVmFsdWUgPSBuZXcgRGF0ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1kdWUtZGF0ZScpLnZhbHVlKTtcbiAgICBjb25zdCBpbmRleCA9IHRvRG9BcnJheS5sZW5ndGg7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1wcmlvcml0eScpLnZhbHVlO1xuICAgIGNvbnN0IG5ld1RvRG8gPSB0b0RvRmFjdG9yeSh0aXRsZVZhbHVlLCBkZXNjVmFsdWUsIGR1ZVZhbHVlLCBpbmRleCwgcHJpb3JpdHkpO1xuICAgIHRvRG9BcnJheS5wdXNoKG5ld1RvRG8pO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWZvcm0nKS5yZXNldCgpO1xuICAgIHNob3dUb0Rvcyh0b0RvQXJyYXkpO1xuICAgIGFzc2lnblJlbW92ZUJ0bnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVRvRG8oZSwgdG9Eb0luZGV4KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJlbW92ZU5vblByb2plY3RUb0RvKHRvRG9JbmRleCk7XG4gICAgdG9Eb0FycmF5LnNwbGljZSh0b0RvSW5kZXgsIDEpO1xuICAgIHJlZHVjZUluZGV4KHRvRG9BcnJheSwgdG9Eb0luZGV4KTtcbiAgICBzaG93VG9Eb3ModG9Eb0FycmF5KTtcbiAgICBhc3NpZ25SZW1vdmVCdG5zKCk7XG4gIH1cblxuICBmdW5jdGlvbiBlZGl0VG9EbyhlLCB0b2RvKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRpdGxlVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby10aXRsZScgKyBgJHt0b2RvLmluZGV4fWApLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWRlc2NyaXB0aW9uJyArIGAke3RvZG8uaW5kZXh9YCkudmFsdWU7XG4gICAgY29uc3QgZHVlVmFsdWUgPSBuZXcgRGF0ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1kdWUtZGF0ZScgKyBgJHt0b2RvLmluZGV4fWApLnZhbHVlKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXByaW9yaXR5JyArIGAke3RvZG8uaW5kZXh9YCkudmFsdWU7XG4gICAgdG9kby50aXRsZSA9IHRpdGxlVmFsdWU7XG4gICAgdG9kby5kZXNjcmlwdGlvbiA9IGRlc2NWYWx1ZTtcbiAgICB0b2RvLmR1ZURhdGUgPSBkdWVWYWx1ZTtcbiAgICB0b2RvLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgc2hvd1RvRG9zKHRvRG9BcnJheSk7XG4gICAgYXNzaWduUmVtb3ZlQnRucygpO1xuICB9XG5cbiAgZnVuY3Rpb24gYXNzaWduUmVtb3ZlQnRucygpIHtcbiAgICBjb25zdCB0b0RvUGFyYXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kby1pdGVtJyk7XG4gICAgdG9Eb1BhcmFzLmZvckVhY2goZnVuY3Rpb24odG9Ebykge1xuICAgICAgY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tcmVtb3ZlJyArIGAke3RvRG8uZGF0YXNldC5pbmRleH1gKTtcbiAgICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiByZW1vdmVUb0RvKGUsIHRvRG8uZGF0YXNldC5pbmRleCkpO1xuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBhc3NpZ25Ub0RvRWRpdEJ0bnModG9kbykge1xuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1zdWJtaXQtZWRpdCcgKyBgJHt0b2RvLmluZGV4fWApO1xuICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZWRpdFRvRG8oZSwgdG9kbykpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVkdWNlSW5kZXgoYXJyYXksIHJlbW92ZWRJdGVtSW5kZXgpIHtcbiAgICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIGlmIChpdGVtLmluZGV4ID4gcmVtb3ZlZEl0ZW1JbmRleCkge1xuICAgICAgICBpdGVtLmluZGV4IC09IDE7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHByaW50QXJyYXkoKSB7XG4gICAgdG9Eb0FycmF5LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xuICAgIH0pO1xuICB9XG4gICAgXG4gIHJldHVybiB7IHRvRG9BcnJheSwgdG9Eb0ZhY3RvcnksIGFzc2lnblRvRG9FZGl0QnRucyB9XG4gICAgXG59KSgpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IHRvRG8gfSBmcm9tICcuL21vZHVsZXMvdG9kby1pdGVtcy90b2RvJztcbmltcG9ydCB7IHByb2plY3QgfSBmcm9tICcuL21vZHVsZXMvcHJvamVjdHMvcHJvamVjdCc7XG5pbXBvcnQgeyBmb3JtVG9nZ2xlIH0gZnJvbSAnLi9tb2R1bGVzL2Zvcm0tdG9nZ2xlJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9