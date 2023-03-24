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

    const title = document.createElement('input');
    const titleLabel = document.createElement('div');
    title.id = 'project-title' + `${projectIndex}`;
    titleLabel.innerText = 'Title: '
    title.type = 'text';
    title.value = project.title;
    newForm.append(titleLabel, title);

    const description = document.createElement('input');
    const descLabel = document.createElement('div');
    description.id = 'project-description' + `${projectIndex}`;
    descLabel.innerText = 'Title: ';
    description.type = 'text';
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

    const title = document.createElement('input');
    const titleLabel = document.createElement('div');
    title.id = 'todo-title' + `${todoIndex}`;
    titleLabel.innerText = 'Title: ';
    title.type = 'text';
    title.value = toDo.title;

    const description = document.createElement('input');
    const descLabel = document.createElement('div');
    description.id = 'todo-description' + `${todoIndex}`;
    descLabel.innerText = 'Description: ';
    description.type = 'text';
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
      const info = document.createElement('input');
      info.type = 'text';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FpRDtBQUNJO0FBQ0Y7QUFDOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZm9ybS10b2dnbGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdHMvcHJvamVjdC1kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdHMvcHJvamVjdC1lZGl0LWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdHMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90b2RvLWl0ZW1zL3RvZG8tZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RvZG8taXRlbXMvdG9kby1lZGl0LWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9kby1pdGVtcy90b2RvLWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9kby1pdGVtcy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxucCB7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbi5jb250ZW50LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1heC13aWR0aDogMTAwdnc7XFxufVxcblxcbi50b2dnbGUtdmlzaWJpbGl0eSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgaGVpZ2h0OiA1NnB4O1xcbiAgdG9wOiAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjksIDcwLCA3Myk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5uYXYtaDMge1xcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbn1cXG5cXG4udG9wLWZvcm1zLWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nLXRvcDogMTVweDtcXG59XFxuXFxuLmZvcm0tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiAwcHggMjBweDtcXG59XFxuXFxuLmlucHV0LXRpdGxlIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXgtd2lkdGg6IGNhbGMoMjAwcHggLSAxNXB4KTtcXG59XFxuXFxuLmZvcm0tYnV0dG9uIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2OSwgNzAsIDczKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmZvcm0tYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjksIDcwLCA3MywgMC42NjQpO1xcbn1cXG5cXG4uZm9ybS1idXR0b246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODMsIDk2LCAxMzQsIDAuNjY0KTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtaW4td2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSA3MnB4KTtcXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTJweCk7XFxuICBwYWRkaW5nOiAwcHggMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk5LCAxOTMsIDE2MiwgMC4zNDkpO1xcbn1cXG5cXG5oMiB7XFxuICBtYXJnaW46IDE1cHggMjBweFxcbn1cXG5cXG4ucHJvamVjdC1saXN0LCAudG9kby1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA5MCU7XFxuICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSgxOTksIDE5MywgMTYyLCAwLjY5Mik7XFxufVxcblxcbi5wcm9qZWN0LCAudG9kby1pdGVtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDAuMWZyLCAxZnIpKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDAuMDVmcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgbWFyZ2luOiAxNXB4IDE1cHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLnRvZG8tY29udGVudCwgLnByb2plY3QtY29udGVudCB7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICBtaW4td2lkdGg6IDE4MHB4O1xcbiAgbWF4LXdpZHRoOiA4MCU7XFxufVxcblxcbi5yZW1vdmUtYnV0dG9uIHtcXG4gIGdyaWQtcm93OiAxO1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2OSwgNzAsIDczKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxufVxcblxcbi5yZW1vdmUtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDApO1xcbn1cXG5cXG4ucmVtb3ZlLWJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODIsIDM2LCAzMSwgMC44MDgpO1xcbn1cXG5cXG4ucHJvamVjdC10b2RvLWRpdntcXG4gIGdyaWQtcm93OiAyO1xcbiAgbWluLXdpZHRoOiAyMDBweDtcXG4gIG1heC13aWR0aDogOTAlO1xcbiAgbWFyZ2luOiA1cHggMHB4O1xcbiAgcGFkZGluZzogNXB4IDBweDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoNjksIDcwLCA3Myk7XFxufVxcblxcbi5wcm9qZWN0LXRvZG8taXRlbSB7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItdG9wOiAxcHggZG90dGVkIHJnYig2OSwgNzAsIDczKTtcXG59XFxuXFxuLnByb2plY3QtdG9kby1mb3JtIHtcXG4gIGdyaWQtcm93OiAzO1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxuICBtYXgtd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4ucHJpb3JpdHktbm9uZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnByaW9yaXR5LWhpZ2hlc3Qge1xcbiAgY29sb3I6IHJlZDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucHJpb3JpdHktaGlnaCB7XFxuICBjb2xvcjogb3JhbmdlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wcmlvcml0eS1taWRkbGUge1xcbiAgY29sb3I6IHJnYigwLCAxNzMsIDApO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wcmlvcml0eS1sb3cge1xcbiAgY29sb3I6IGJsdWU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2OSwgNzAsIDczKTtcXG4gIGNvbG9yOiByZ2IoMTk2LCAxOTYsIDE5Nik7XFxufVxcblxcbi5mb290ZXItcCB7XFxuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcblxcbiAgLnRvcC1mb3Jtcy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLnByb2plY3QsIC50b2RvLWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDE1cHggMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XFxuICB9XFxuICBcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osUUFBUTtFQUNSLGlDQUFpQztFQUNqQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQixpQkFBaUI7RUFDakIsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLGFBQWE7RUFDYix3REFBd0Q7RUFDeEQsaUNBQWlDO0VBQ2pDLG9DQUFvQztFQUNwQyx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixpQ0FBaUM7RUFDakMsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUU7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCOztBQUVGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxucCB7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbi5jb250ZW50LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1heC13aWR0aDogMTAwdnc7XFxufVxcblxcbi50b2dnbGUtdmlzaWJpbGl0eSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgaGVpZ2h0OiA1NnB4O1xcbiAgdG9wOiAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjksIDcwLCA3Myk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5uYXYtaDMge1xcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbn1cXG5cXG4udG9wLWZvcm1zLWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nLXRvcDogMTVweDtcXG59XFxuXFxuLmZvcm0tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiAwcHggMjBweDtcXG59XFxuXFxuLmlucHV0LXRpdGxlIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXgtd2lkdGg6IGNhbGMoMjAwcHggLSAxNXB4KTtcXG59XFxuXFxuLmZvcm0tYnV0dG9uIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2OSwgNzAsIDczKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmZvcm0tYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjksIDcwLCA3MywgMC42NjQpO1xcbn1cXG5cXG4uZm9ybS1idXR0b246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODMsIDk2LCAxMzQsIDAuNjY0KTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtaW4td2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSA3MnB4KTtcXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTJweCk7XFxuICBwYWRkaW5nOiAwcHggMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk5LCAxOTMsIDE2MiwgMC4zNDkpO1xcbn1cXG5cXG5oMiB7XFxuICBtYXJnaW46IDE1cHggMjBweFxcbn1cXG5cXG4ucHJvamVjdC1saXN0LCAudG9kby1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA5MCU7XFxuICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSgxOTksIDE5MywgMTYyLCAwLjY5Mik7XFxufVxcblxcbi5wcm9qZWN0LCAudG9kby1pdGVtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDAuMWZyLCAxZnIpKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDAuMDVmcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgbWFyZ2luOiAxNXB4IDE1cHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLnRvZG8tY29udGVudCwgLnByb2plY3QtY29udGVudCB7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICBtaW4td2lkdGg6IDE4MHB4O1xcbiAgbWF4LXdpZHRoOiA4MCU7XFxufVxcblxcbi5yZW1vdmUtYnV0dG9uIHtcXG4gIGdyaWQtcm93OiAxO1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2OSwgNzAsIDczKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxufVxcblxcbi5yZW1vdmUtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDApO1xcbn1cXG5cXG4ucmVtb3ZlLWJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODIsIDM2LCAzMSwgMC44MDgpO1xcbn1cXG5cXG4ucHJvamVjdC10b2RvLWRpdntcXG4gIGdyaWQtcm93OiAyO1xcbiAgbWluLXdpZHRoOiAyMDBweDtcXG4gIG1heC13aWR0aDogOTAlO1xcbiAgbWFyZ2luOiA1cHggMHB4O1xcbiAgcGFkZGluZzogNXB4IDBweDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoNjksIDcwLCA3Myk7XFxufVxcblxcbi5wcm9qZWN0LXRvZG8taXRlbSB7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItdG9wOiAxcHggZG90dGVkIHJnYig2OSwgNzAsIDczKTtcXG59XFxuXFxuLnByb2plY3QtdG9kby1mb3JtIHtcXG4gIGdyaWQtcm93OiAzO1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxuICBtYXgtd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4ucHJpb3JpdHktbm9uZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnByaW9yaXR5LWhpZ2hlc3Qge1xcbiAgY29sb3I6IHJlZDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucHJpb3JpdHktaGlnaCB7XFxuICBjb2xvcjogb3JhbmdlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wcmlvcml0eS1taWRkbGUge1xcbiAgY29sb3I6IHJnYigwLCAxNzMsIDApO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wcmlvcml0eS1sb3cge1xcbiAgY29sb3I6IGJsdWU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2OSwgNzAsIDczKTtcXG4gIGNvbG9yOiByZ2IoMTk2LCAxOTYsIDE5Nik7XFxufVxcblxcbi5mb290ZXItcCB7XFxuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcblxcbiAgLnRvcC1mb3Jtcy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLnByb2plY3QsIC50b2RvLWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDE1cHggMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XFxuICB9XFxuICBcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCB7IGZvcm1Ub2dnbGUgfTtcblxuY29uc3QgZm9ybVRvZ2dsZSA9IChmdW5jdGlvbigpIHtcblxuICAgIGNvbnN0IHNob3dUb0RvRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93LXRvZG8nKTtcbiAgICBjb25zdCBoaWRlVG9Eb0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlkZS10b2RvJyk7XG4gICAgY29uc3QgdG9Eb0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1mb3JtJylcbiAgICBjb25zdCBzaG93UHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvdy1wcm9qZWN0Jyk7XG4gICAgY29uc3QgaGlkZVByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpZGUtcHJvamVjdCcpO1xuICAgIGNvbnN0IFByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtZm9ybScpXG4gICAgc2hvd1RvRG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHNob3dGb3JtKHNob3dUb0RvRm9ybSwgaGlkZVRvRG9Gb3JtLCB0b0RvRm9ybSwgZSkpO1xuICAgIGhpZGVUb0RvRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBoaWRlRm9ybShzaG93VG9Eb0Zvcm0sIGhpZGVUb0RvRm9ybSwgdG9Eb0Zvcm0sIGUpKTtcbiAgICBzaG93UHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gc2hvd0Zvcm0oc2hvd1Byb2plY3RGb3JtLCBoaWRlUHJvamVjdEZvcm0sIFByb2plY3RGb3JtLCBlKSk7XG4gICAgaGlkZVByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGhpZGVGb3JtKHNob3dQcm9qZWN0Rm9ybSwgaGlkZVByb2plY3RGb3JtLCBQcm9qZWN0Rm9ybSwgZSkpO1xuICAgIC8vVGhlIHNob3cgYW5kIGhpZGUgYnV0dG9ucyBmb3IgcHJvamVjdCB0b2RvcywgYW5kIGVkaXRzIGZvciBib3RoIHByb2plY3RzIGFuZCB0b2RvcyBhcmUgbG9jYXRlZCBpbiB0aGVpciByZXNwZWN0aXZlIGRvbSBmaWxlXG5cbiAgICBmdW5jdGlvbiBzaG93Rm9ybShzaG93QnRuLCBoaWRlQnRuLCBmb3JtKSB7XG4gICAgICAgIHNob3dCdG4uY2xhc3NMaXN0LmFkZCgndG9nZ2xlLXZpc2liaWxpdHknKTtcbiAgICAgICAgaGlkZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCd0b2dnbGUtdmlzaWJpbGl0eScpO1xuICAgICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ3RvZ2dsZS12aXNpYmlsaXR5Jyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUZvcm0oc2hvd0J0biwgaGlkZUJ0biwgZm9ybSkge1xuICAgICAgICBoaWRlQnRuLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZS12aXNpYmlsaXR5Jyk7XG4gICAgICAgIHNob3dCdG4uY2xhc3NMaXN0LnJlbW92ZSgndG9nZ2xlLXZpc2liaWxpdHknKTtcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtdmlzaWJpbGl0eScpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHNob3dGb3JtLCBoaWRlRm9ybSB9XG59KSgpOyIsImV4cG9ydCB7IHNob3dQcm9qZWN0cywgcmVtb3ZlUHJvamVjdERPTSwgcmVtb3ZlUHJvamVjdFRvRG9ET00gfVxuaW1wb3J0IHsgY3JlYXRlVG9Eb0Zvcm0gfSBmcm9tIFwiLi4vdG9kby1pdGVtcy90b2RvLWZvcm1cIjtcbmltcG9ydCB7IGNyZWF0ZVByb2plY3RGb3JtIH0gZnJvbSBcIi4vcHJvamVjdC1lZGl0LWZvcm1cIjtcbmltcG9ydCB7IGZvcm1Ub2dnbGUgfSBmcm9tIFwiLi4vZm9ybS10b2dnbGVcIjtcbmltcG9ydCB7IHByb2plY3QgYXMgcHJvamVjdEZpbGV9IGZyb20gXCIuL3Byb2plY3RcIjtcblxuY29uc3QgYWxsUHJvamVjdHNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1saXN0Jyk7XG5cbmZ1bmN0aW9uIHNob3dQcm9qZWN0cyhhcnJheSkge1xuICByZXNldFByb2plY3RzKCk7XG4gIGFycmF5LmZvckVhY2goZnVuY3Rpb24ocHJvamVjdCkge1xuXG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RDb250YWluZXIuZGF0YXNldC5pbmRleCA9IHByb2plY3QuaW5kZXg7XG4gICAgcHJvamVjdENvbnRhaW5lci5pZCA9ICdwcm9qZWN0JyArIGAke3Byb2plY3QuaW5kZXh9YDtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcblxuICAgIGNvbnN0IHByb2plY3RUb0RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdFRvRG9EaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10b2RvLWRpdicpO1xuICAgIHByb2plY3RUb0RvRGl2LmlubmVyVGV4dCA9IGBUbyBEb3M6XFxuYDtcblxuICAgIGNvbnN0IHByb2plY3RSZW1vdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qZWN0UmVtb3ZlQnRuLmlkID0gJ3Byb2plY3QtcmVtb3ZlJyArYCR7cHJvamVjdC5pbmRleH1gO1xuICAgIHByb2plY3RSZW1vdmVCdG4uaW5uZXJUZXh0ID0gJ1gnO1xuICAgIHByb2plY3RSZW1vdmVCdG4uY2xhc3NMaXN0LmFkZCgncmVtb3ZlLWJ1dHRvbicpO1xuXG4gICAgY29uc3QgcHJvamVjdENvbnRlbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdENvbnRlbnRzLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY29udGVudCcpO1xuXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3QudGl0bGV9YDtcbiAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZChgcHJpb3JpdHktJHtwcm9qZWN0LnByaW9yaXR5fWApO1xuXG4gICAgY29uc3QgcHJvamVjdERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcHJvamVjdERlc2MudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0LmRlc2NyaXB0aW9ufVxcbmA7XG5cbiAgICBjb25zdCBwcm9qZWN0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcm9qZWN0RGF0ZS50ZXh0Q29udGVudCA9IGBEdWUgYnk6ICR7cHJvamVjdC5kdWVEYXRlfWA7XG5cbiAgICBjb25zdCBwcm9qZWN0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcHJvamVjdFByaW9yaXR5Q2FwaXRhbGl6ZWQgPSBwcm9qZWN0LnByaW9yaXR5WzBdLnRvVXBwZXJDYXNlKCkgKyBwcm9qZWN0LnByaW9yaXR5LnNsaWNlKDEpO1xuICAgIHByb2plY3RQcmlvcml0eS50ZXh0Q29udGVudCA9IGBQcmlvcml0eTogJHtwcm9qZWN0UHJpb3JpdHlDYXBpdGFsaXplZH1gO1xuXG4gICAgY29uc3QgcHJvamVjdEVkaXRGb3JtID0gY3JlYXRlUHJvamVjdEZvcm0ocHJvamVjdCwgcHJvamVjdC5pbmRleCk7XG4gICAgICBcbiAgICBwcm9qZWN0Q29udGVudHMuYXBwZW5kKHByb2plY3RUaXRsZSwgcHJvamVjdERlc2MsIHByb2plY3REYXRlLCBwcm9qZWN0UHJpb3JpdHksIHByb2plY3RFZGl0Rm9ybSk7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQocHJvamVjdENvbnRlbnRzLCBwcm9qZWN0UmVtb3ZlQnRuKTtcblxuICAgIGNvbnN0IHRvRG9Gb3JtID0gY3JlYXRlVG9Eb0Zvcm0ocHJvamVjdENvbnRhaW5lciwgcHJvamVjdC5pbmRleCk7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQocHJvamVjdFRvRG9EaXYsIHRvRG9Gb3JtKTtcblxuICAgIGNvbnN0IHNob3dFZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc2hvd0VkaXRCdXR0b24uaWQgPSAncHJvamVjdC1lZGl0LXNob3cnICsgYCR7cHJvamVjdC5pbmRleH1gO1xuICAgIHNob3dFZGl0QnV0dG9uLnRleHRDb250ZW50ID0gJ0VkaXQgUHJvamVjdCc7XG4gICAgc2hvd0VkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZm9ybS1idXR0b24nKTtcblxuICAgIGNvbnN0IGhpZGVFZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaGlkZUVkaXRCdXR0b24uaWQgPSAncHJvamVjdC1lZGl0LWhpZGUnICsgYCR7cHJvamVjdC5pbmRleH1gO1xuICAgIGhpZGVFZGl0QnV0dG9uLnRleHRDb250ZW50ID0gJ0hpZGUgRm9ybSc7XG4gICAgaGlkZUVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZm9ybS1idXR0b24nLCAndG9nZ2xlLXZpc2liaWxpdHknKTtcblxuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kKHNob3dFZGl0QnV0dG9uLCBoaWRlRWRpdEJ1dHRvbik7XG5cbiAgICBjb25zdCBzaG93QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc2hvd0J1dHRvbi5pZCA9ICdwcm9qZWN0LXRvZG8tc2hvdycgKyBgJHtwcm9qZWN0LmluZGV4fWA7XG4gICAgc2hvd0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdmb3JtLWJ1dHRvbicpO1xuICAgIHNob3dCdXR0b24udGV4dENvbnRlbnQgPSAnTmV3IFRvIERvJztcblxuICAgIGNvbnN0IGhpZGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBoaWRlQnV0dG9uLmlkID0gJ3Byb2plY3QtdG9kby1oaWRlJyArIGAke3Byb2plY3QuaW5kZXh9YDtcbiAgICBoaWRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYnV0dG9uJywgJ3RvZ2dsZS12aXNpYmlsaXR5Jyk7XG4gICAgaGlkZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdIaWRlIEZvcm0nO1xuXG4gICAgc2hvd0VkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZm9ybVRvZ2dsZS5zaG93Rm9ybShzaG93RWRpdEJ1dHRvbiwgaGlkZUVkaXRCdXR0b24sIHByb2plY3RFZGl0Rm9ybSwgZSkpO1xuICAgIHNob3dFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHByb2plY3RGaWxlLmFzc2lnblByb2plY3RFZGl0QnRucyhwcm9qZWN0KSk7XG4gICAgaGlkZUVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZm9ybVRvZ2dsZS5oaWRlRm9ybShzaG93RWRpdEJ1dHRvbiwgaGlkZUVkaXRCdXR0b24sIHByb2plY3RFZGl0Rm9ybSwgZSkpO1xuXG4gICAgc2hvd0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBmb3JtVG9nZ2xlLnNob3dGb3JtKHNob3dCdXR0b24sIGhpZGVCdXR0b24sIHRvRG9Gb3JtLCBlKSk7XG4gICAgaGlkZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBmb3JtVG9nZ2xlLmhpZGVGb3JtKHNob3dCdXR0b24sIGhpZGVCdXR0b24sIHRvRG9Gb3JtLCBlKSk7XG4gICAgICBcbiAgICBwcm9qZWN0LnRvRG9zLmZvckVhY2goZnVuY3Rpb24odG9Ebykge1xuICAgICAgY29uc3QgdG9Eb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdG9Eb0Rpdi5pZCA9ICdwcm9qZWN0LXRvZG8tZGl2JyArIGAke3Byb2plY3QuaW5kZXh9YCArIGAke3RvRG8uaW5kZXh9YDtcbiAgICAgIHRvRG9EaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10b2RvLWl0ZW0nKTtcbiAgICAgIHRvRG9EaXYuZGF0YXNldC5pbmRleCA9IGAke3Byb2plY3QuaW5kZXh9JHt0b0RvLmluZGV4fWA7XG5cbiAgICAgIGNvbnN0IHRvRG9Db250ZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdG9Eb0NvbnRlbnRzLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY29udGVudCcpO1xuXG4gICAgICBjb25zdCB0b0RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICB0b0RvVGl0bGUudGV4dENvbnRlbnQgPSBgJHt0b0RvLnRpdGxlfWA7XG4gICAgICB0b0RvVGl0bGUuY2xhc3NMaXN0LmFkZChgcHJpb3JpdHktJHt0b0RvLnByaW9yaXR5fWApO1xuXG4gICAgICBjb25zdCB0b0RvRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIHRvRG9EZXNjLnRleHRDb250ZW50ID0gYCR7dG9Eby5kZXNjcmlwdGlvbn1gO1xuXG4gICAgICBjb25zdCB0b0RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIHRvRG9EYXRlLnRleHRDb250ZW50ID0gYER1ZSBieTogJHt0b0RvLmR1ZURhdGV9YDtcblxuICAgICAgY29uc3QgdG9Eb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgY29uc3QgcHJpb3JpdHlDYXBpdGFsaXplZCA9IHRvRG8ucHJpb3JpdHlbMF0udG9VcHBlckNhc2UoKSArIHRvRG8ucHJpb3JpdHkuc2xpY2UoMSk7XG4gICAgICB0b0RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7cHJpb3JpdHlDYXBpdGFsaXplZH1gO1xuXG4gICAgICBjb25zdCB0b0RvUmVtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICB0b0RvUmVtb3ZlQnRuLmlkID0gJ3Byb2plY3QtdG9kby1yZW1vdmUnICsgYCR7cHJvamVjdC5pbmRleH1gICsgYCR7dG9Eby5pbmRleH1gO1xuICAgICAgdG9Eb1JlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKCdyZW1vdmUtYnV0dG9uJyk7XG4gICAgICB0b0RvUmVtb3ZlQnRuLmlubmVyVGV4dCA9ICdYJztcblxuICAgICAgdG9Eb0NvbnRlbnRzLmFwcGVuZCh0b0RvVGl0bGUsIHRvRG9EZXNjLCB0b0RvRGF0ZSwgdG9Eb1ByaW9yaXR5KTtcbiAgICAgIHRvRG9EaXYuYXBwZW5kKHRvRG9Db250ZW50cyk7XG4gICAgICBwcm9qZWN0VG9Eb0Rpdi5hcHBlbmQodG9Eb0Rpdik7XG4gICAgICB0b0RvRGl2LmFwcGVuZCh0b0RvUmVtb3ZlQnRuKTtcbiAgICB9KVxuICAgIHByb2plY3RUb0RvRGl2LmFwcGVuZChzaG93QnV0dG9uLCBoaWRlQnV0dG9uKTtcbiAgICBhbGxQcm9qZWN0c0Rpdi5hcHBlbmQocHJvamVjdENvbnRhaW5lcik7XG4gIH0pXG59XG5cbmZ1bmN0aW9uIHJlbW92ZVByb2plY3RET00ocHJvamVjdEluZGV4KSB7XG4gIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdCcgKyBgJHtwcm9qZWN0SW5kZXh9YCk7XG4gIHByb2plY3REaXYucmVtb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVByb2plY3RUb0RvRE9NKHByb2plY3RJbmRleCwgdG9Eb0luZGV4KSB7XG4gIGNvbnN0IHRvRG9EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10b2RvLWRpdicgKyBgJHtwcm9qZWN0SW5kZXh9YCArIGAke3RvRG9JbmRleH1gKTtcbiAgdG9Eb0Rpdi5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gcmVzZXRQcm9qZWN0cygpIHtcbiAgYWxsUHJvamVjdHNEaXYuaW5uZXJUZXh0ID0gJyc7XG59XG4iLCJleHBvcnQgeyBjcmVhdGVQcm9qZWN0Rm9ybSB9O1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RGb3JtKHByb2plY3QsIHByb2plY3RJbmRleCkge1xuICAgIGNvbnN0IG5ld0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgbmV3Rm9ybS5jbGFzc0xpc3QuYWRkKFwidG9nZ2xlLXZpc2liaWxpdHlcIik7XG4gICAgbmV3Rm9ybS5kYXRhc2V0LmluZGV4ID0gcHJvamVjdEluZGV4O1xuICAgIG5ld0Zvcm0uaWQgPSAncHJvamVjdC1lZGl0LWZvcm0nICsgYCR7cHJvamVjdEluZGV4fWA7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlLmlkID0gJ3Byb2plY3QtdGl0bGUnICsgYCR7cHJvamVjdEluZGV4fWA7XG4gICAgdGl0bGVMYWJlbC5pbm5lclRleHQgPSAnVGl0bGU6ICdcbiAgICB0aXRsZS50eXBlID0gJ3RleHQnO1xuICAgIHRpdGxlLnZhbHVlID0gcHJvamVjdC50aXRsZTtcbiAgICBuZXdGb3JtLmFwcGVuZCh0aXRsZUxhYmVsLCB0aXRsZSk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgZGVzY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY3JpcHRpb24uaWQgPSAncHJvamVjdC1kZXNjcmlwdGlvbicgKyBgJHtwcm9qZWN0SW5kZXh9YDtcbiAgICBkZXNjTGFiZWwuaW5uZXJUZXh0ID0gJ1RpdGxlOiAnO1xuICAgIGRlc2NyaXB0aW9uLnR5cGUgPSAndGV4dCc7XG4gICAgZGVzY3JpcHRpb24udmFsdWUgPSBwcm9qZWN0LmRlc2NyaXB0aW9uO1xuICAgIG5ld0Zvcm0uYXBwZW5kKGRlc2NMYWJlbCwgZGVzY3JpcHRpb24pO1xuXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHVlRGF0ZS5pZCA9ICdwcm9qZWN0LWR1ZS1kYXRlJyArIGAke3Byb2plY3RJbmRleH1gO1xuICAgIGRhdGVMYWJlbC5pbm5lclRleHQgPSAnRHVlIGJ5OiAnXG4gICAgZHVlRGF0ZS50eXBlID0gJ2RhdGV0aW1lLWxvY2FsJztcbiAgICBuZXdGb3JtLmFwcGVuZChkYXRlTGFiZWwsIGR1ZURhdGUpO1xuXG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJpb3JpdHlMYWJlbC5mb3IgPSAncHJvamVjdC1wcmlvcml0eSc7XG4gICAgcHJpb3JpdHlMYWJlbC5pbm5lclRleHQgPSAnUHJpb3JpdHknO1xuXG4gICAgY29uc3QgcHJpb3JpdHlUeXBlcyA9IFsnbm9uZScsICdoaWdoZXN0JywgJ2hpZ2gnLCAnbWlkZGxlJywgJ2xvdyddO1xuICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgcHJpb3JpdHlTZWxlY3QuaWQgPSAncHJvamVjdC1wcmlvcml0eScgKyBgJHtwcm9qZWN0SW5kZXh9YDtcbiAgICBwcmlvcml0eVNlbGVjdC5uYW1lID0gJ3ByaW9yaXRpZXMnO1xuICAgIHByaW9yaXR5VHlwZXMuZm9yRWFjaChmdW5jdGlvbih0eXBlKSB7XG4gICAgICBjb25zdCBwcmlvcml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgcHJpb3JpdHlPcHRpb24udmFsdWUgPSB0eXBlO1xuICAgICAgcHJpb3JpdHlPcHRpb24udGV4dCA9IHR5cGVbMF0udG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSk7XG4gICAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmQocHJpb3JpdHlPcHRpb24pO1xuICAgIH0pXG4gICAgcHJpb3JpdHlTZWxlY3QudmFsdWUgPSBwcm9qZWN0LnByaW9yaXR5O1xuXG4gICAgbmV3Rm9ybS5hcHBlbmQoZHVlRGF0ZSwgcHJpb3JpdHlMYWJlbCwgcHJpb3JpdHlTZWxlY3QpO1xuXG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBzdWJtaXQudHlwZSA9ICdzdWJtaXQnO1xuICAgIHN1Ym1pdC5uYW1lID0gJ3N1Ym1pdCc7XG4gICAgc3VibWl0LmlkID0gJ3Byb2plY3Qtc3VibWl0LWVkaXQnICsgYCR7cHJvamVjdEluZGV4fWA7XG4gICAgc3VibWl0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYnV0dG9uJyk7XG4gICAgbmV3Rm9ybS5hcHBlbmQoc3VibWl0KTtcblxuICAgIHJldHVybiBuZXdGb3JtO1xuICB9IiwiZXhwb3J0IHsgcHJvamVjdCB9O1xuaW1wb3J0IHsgc2hvd1Byb2plY3RzLCByZW1vdmVQcm9qZWN0RE9NLCByZW1vdmVQcm9qZWN0VG9Eb0RPTSB9IGZyb20gXCIuL3Byb2plY3QtZG9tXCI7XG5pbXBvcnQgeyB0b0RvIH0gZnJvbSBcIi4uL3RvZG8taXRlbXMvdG9kb1wiO1xuXG5jb25zdCBwcm9qZWN0ID0gKGZ1bmN0aW9uKCkge1xuXG4gIGNvbnN0IHByb2plY3RBcnJheSA9IFtdO1xuXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXN1Ym1pdCcpO1xuICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBidWlsZEFuZEFkZFByb2plY3QpO1xuXG4gIGZ1bmN0aW9uIHByb2plY3RGYWN0b3J5ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGluZGV4LCBwcmlvcml0eSwgdG9Eb3MgPSBbXSkge1xuICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgaW5kZXgsIHByaW9yaXR5LCB0b0RvcyB9XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZEFuZEFkZFByb2plY3QoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0aXRsZVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdGl0bGUnKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1kZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgIGNvbnN0IGR1ZVZhbHVlID0gbmV3IERhdGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtZHVlLWRhdGUnKS52YWx1ZSk7XG4gICAgY29uc3QgaW5kZXggPSBwcm9qZWN0QXJyYXkubGVuZ3RoO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtcHJpb3JpdHknKS52YWx1ZTtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkodGl0bGVWYWx1ZSwgZGVzY1ZhbHVlLCBkdWVWYWx1ZSwgaW5kZXgsIHByaW9yaXR5KTtcbiAgICBwcm9qZWN0QXJyYXkucHVzaChuZXdQcm9qZWN0KTtcbiAgICBcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1mb3JtJykucmVzZXQoKTtcbiAgICBzaG93UHJvamVjdHMocHJvamVjdEFycmF5KTtcbiAgICBhc3NpZ25Qcm9qZWN0VG9Eb1N1Ym1pdHMoKTtcbiAgICBhc3NpZ25Qcm9qZWN0UmVtb3ZlQnRucygpO1xuICAgIGFzc2lnblByb2plY3RUb0RvUmVtb3ZlQnRucygpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChlLCBwcm9qZWN0SW5kZXgpIHtcbiAgICByZW1vdmVQcm9qZWN0RE9NKHByb2plY3RJbmRleCk7XG4gICAgcHJvamVjdEFycmF5LnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xuICAgIHJlZHVjZUluZGV4KHByb2plY3RBcnJheSwgcHJvamVjdEluZGV4KTtcbiAgICBzaG93UHJvamVjdHMocHJvamVjdEFycmF5KTtcbiAgICBhc3NpZ25Qcm9qZWN0VG9Eb1N1Ym1pdHMoKTtcbiAgICBhc3NpZ25Qcm9qZWN0VG9Eb1JlbW92ZUJ0bnMoKTtcbiAgICBhc3NpZ25Qcm9qZWN0UmVtb3ZlQnRucygpO1xuICB9XG5cbiAgZnVuY3Rpb24gZWRpdFByb2plY3QoZSwgcHJvamVjdCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0aXRsZVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdGl0bGUnICsgYCR7cHJvamVjdC5pbmRleH1gKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1kZXNjcmlwdGlvbicgKyBgJHtwcm9qZWN0LmluZGV4fWApLnZhbHVlO1xuICAgIGNvbnN0IGR1ZVZhbHVlID0gbmV3IERhdGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtZHVlLWRhdGUnICsgYCR7cHJvamVjdC5pbmRleH1gKS52YWx1ZSk7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1wcmlvcml0eScgKyBgJHtwcm9qZWN0LmluZGV4fWApLnZhbHVlO1xuICAgIHByb2plY3QudGl0bGUgPSB0aXRsZVZhbHVlO1xuICAgIHByb2plY3QuZGVzY3JpcHRpb24gPSBkZXNjVmFsdWU7XG4gICAgcHJvamVjdC5kdWVEYXRlID0gZHVlVmFsdWU7XG4gICAgcHJvamVjdC5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHNob3dQcm9qZWN0cyhwcm9qZWN0QXJyYXkpO1xuICAgIGFzc2lnblByb2plY3RUb0RvU3VibWl0cygpO1xuICAgIGFzc2lnblByb2plY3RUb0RvUmVtb3ZlQnRucygpO1xuICAgIGFzc2lnblByb2plY3RSZW1vdmVCdG5zKCk7XG4gIH1cblxuICBmdW5jdGlvbiBhc3NpZ25Qcm9qZWN0VG9Eb1N1Ym1pdHMoKSB7XG4gICAgY29uc3QgcHJvamVjdFRvRG9Gb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LXRvZG8tZm9ybScpO1xuICAgIHByb2plY3RUb0RvRm9ybXMuZm9yRWFjaChmdW5jdGlvbihmb3JtKSB7XG4gICAgICBsZXQgcHJvamVjdEluZGV4ID0gZm9ybS5kYXRhc2V0LmluZGV4O1xuICAgICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdG9kby1zdWJtaXQnICsgYCR7cHJvamVjdEluZGV4fWApO1xuICAgICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGFkZFByb2plY3RUb0RvKGUsIHByb2plY3RJbmRleCkpO1xuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBhc3NpZ25Qcm9qZWN0UmVtb3ZlQnRucygpIHtcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKTtcbiAgICBwcm9qZWN0RGl2LmZvckVhY2goZnVuY3Rpb24ocHJvamVjdCkge1xuICAgICAgY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtcmVtb3ZlJyArIGAke3Byb2plY3QuZGF0YXNldC5pbmRleH1gKTtcbiAgICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiByZW1vdmVQcm9qZWN0KGUsIHByb2plY3QuZGF0YXNldC5pbmRleCkpO1xuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBhc3NpZ25Qcm9qZWN0RWRpdEJ0bnMocHJvamVjdCkge1xuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1zdWJtaXQtZWRpdCcgKyBgJHtwcm9qZWN0LmluZGV4fWApO1xuICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZWRpdFByb2plY3QoZSwgcHJvamVjdCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkUHJvamVjdFRvRG8oZSwgcHJvamVjdEluZGV4KSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RBcnJheVtwcm9qZWN0SW5kZXhdO1xuICAgICAgY29uc3QgdGl0bGVWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXRvZG8tdGl0bGUnK2Ake3Byb2plY3RJbmRleH1gKS52YWx1ZTtcbiAgICAgIGNvbnN0IGRlc2NWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXRvZG8tZGVzY3JpcHRpb24nK2Ake3Byb2plY3RJbmRleH1gKS52YWx1ZTtcbiAgICAgIGNvbnN0IGR1ZVZhbHVlID0gbmV3IERhdGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdG9kby1kdWUtZGF0ZScrYCR7cHJvamVjdEluZGV4fWApLnZhbHVlKTtcbiAgICAgIGNvbnN0IGluZGV4ID0gY3VycmVudFByb2plY3QudG9Eb3MubGVuZ3RoO1xuICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10b2RvLXByaW9yaXR5JykudmFsdWU7XG4gICAgICBjb25zdCBuZXdUb0RvID0gdG9Eby50b0RvRmFjdG9yeSh0aXRsZVZhbHVlLCBkZXNjVmFsdWUsIGR1ZVZhbHVlLCBpbmRleCwgcHJpb3JpdHkpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdG9kby1mb3JtJytgJHtwcm9qZWN0SW5kZXh9YCkucmVzZXQoKTtcbiAgICAgIGN1cnJlbnRQcm9qZWN0LnRvRG9zLnB1c2gobmV3VG9Ebyk7XG4gICAgICBzaG93UHJvamVjdHMocHJvamVjdEFycmF5KTtcbiAgICAgIGFzc2lnblByb2plY3RUb0RvU3VibWl0cygpO1xuICAgICAgYXNzaWduUHJvamVjdFRvRG9SZW1vdmVCdG5zKCk7XG4gICAgICBhc3NpZ25Qcm9qZWN0UmVtb3ZlQnRucygpO1xuICB9XG5cbiAgZnVuY3Rpb24gYXNzaWduUHJvamVjdFRvRG9SZW1vdmVCdG5zKCkge1xuICAgIHByb2plY3RBcnJheS5mb3JFYWNoKGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICAgIHByb2plY3QudG9Eb3MuZm9yRWFjaChmdW5jdGlvbih0b0RvKSB7XG4gICAgICAgIGlmICh0b0RvICE9ICcnKSB7XG4gICAgICAgICAgbGV0IHRvRG9SZW1vdmVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10b2RvLXJlbW92ZScgKyBgJHtwcm9qZWN0LmluZGV4fWAgKyBgJHt0b0RvLmluZGV4fWApO1xuICAgICAgICAgIHRvRG9SZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gcmVtb3ZlUHJvamVjdFRvRG8oZSwgcHJvamVjdCwgdG9EbykpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVByb2plY3RUb0RvKGUsIHByb2plY3QsIHRvRG8pIHtcbiAgICByZW1vdmVQcm9qZWN0VG9Eb0RPTShwcm9qZWN0LmluZGV4LCB0b0RvLmluZGV4KTtcbiAgICBwcm9qZWN0LnRvRG9zLnNwbGljZSh0b0RvLmluZGV4LCAxKTtcbiAgICByZWR1Y2VJbmRleChwcm9qZWN0LnRvRG9zLCB0b0RvLmluZGV4KTtcbiAgICBzaG93UHJvamVjdHMocHJvamVjdEFycmF5KTtcbiAgICBhc3NpZ25Qcm9qZWN0VG9Eb1N1Ym1pdHMoKTtcbiAgICBhc3NpZ25Qcm9qZWN0VG9Eb1JlbW92ZUJ0bnMoKTtcbiAgICBhc3NpZ25Qcm9qZWN0UmVtb3ZlQnRucygpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVkdWNlSW5kZXgoYXJyYXksIHJlbW92ZWRJdGVtSW5kZXgpIHtcbiAgICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIGlmIChpdGVtLmluZGV4ID4gcmVtb3ZlZEl0ZW1JbmRleCkge1xuICAgICAgICBpdGVtLmluZGV4IC09IDE7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHByaW50QXJyYXkoKSB7XG4gICAgcHJvamVjdEFycmF5LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xuICAgIH0pO1xuICB9XG4gICAgXG4gIHJldHVybiB7IHByb2plY3RBcnJheSwgYXNzaWduUHJvamVjdEVkaXRCdG5zIH1cbiAgICBcbn0pKCk7IiwiZXhwb3J0IHsgc2hvd1RvRG9zLCByZW1vdmVOb25Qcm9qZWN0VG9EbyB9XG5pbXBvcnQgeyB0b0RvIGFzIHRvRG9GaWxlIH0gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IHsgZWRpdFRvRG9Gb3JtIH0gZnJvbSBcIi4vdG9kby1lZGl0LWZvcm1cIjtcbmltcG9ydCB7IGZvcm1Ub2dnbGUgfSBmcm9tIFwiLi4vZm9ybS10b2dnbGVcIjtcblxuY29uc3QgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWxpc3QnKTtcblxuZnVuY3Rpb24gc2hvd1RvRG9zKGFycmF5KSB7XG4gIHJlc2V0VG9Eb3MoKTtcbiAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgY29uc3QgdG9Eb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvRG9EaXYuaWQgPSAndG9kby1pdGVtJyArIGAke2l0ZW0uaW5kZXh9YDtcbiAgICB0b0RvRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8taXRlbScpO1xuICAgIHRvRG9EaXYuZGF0YXNldC5pbmRleCA9IGl0ZW0uaW5kZXg7XG5cbiAgICBjb25zdCB0b0RvQ29udGVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b0RvQ29udGVudHMuY2xhc3NMaXN0LmFkZCgndG9kby1jb250ZW50Jyk7XG5cbiAgICBjb25zdCB0b0RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdG9Eb1RpdGxlLnRleHRDb250ZW50ID0gYCR7aXRlbS50aXRsZX1gO1xuICAgIHRvRG9UaXRsZS5jbGFzc0xpc3QuYWRkKGBwcmlvcml0eS0ke2l0ZW0ucHJpb3JpdHl9YCk7XG5cbiAgICBjb25zdCB0b0RvRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0b0RvRGVzYy50ZXh0Q29udGVudCA9IGAke2l0ZW0uZGVzY3JpcHRpb259YDtcblxuICAgIGNvbnN0IHRvRG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRvRG9EYXRlLnRleHRDb250ZW50ID0gYER1ZSBieTogJHtpdGVtLmR1ZURhdGV9YDtcblxuICAgIGNvbnN0IHRvRG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwcmlvcml0eUNhcGl0YWxpemVkID0gaXRlbS5wcmlvcml0eVswXS50b1VwcGVyQ2FzZSgpICsgaXRlbS5wcmlvcml0eS5zbGljZSgxKTtcbiAgICB0b0RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7cHJpb3JpdHlDYXBpdGFsaXplZH1gO1xuXG4gICAgY29uc3QgdG9Eb0VkaXRGb3JtID0gZWRpdFRvRG9Gb3JtKGl0ZW0sIGl0ZW0uaW5kZXgpO1xuXG4gICAgY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmVtb3ZlQnRuLmlkID0gJ3RvZG8tcmVtb3ZlJyArIGAke2l0ZW0uaW5kZXh9YDtcbiAgICByZW1vdmVCdG4uaW5uZXJUZXh0ID0gXCJYXCI7XG4gICAgcmVtb3ZlQnRuLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZS1idXR0b24nKTtcblxuICAgIHRvRG9Db250ZW50cy5hcHBlbmQodG9Eb1RpdGxlLCB0b0RvRGVzYywgdG9Eb0RhdGUsIHRvRG9Qcmlvcml0eSwgdG9Eb0VkaXRGb3JtKTtcbiAgICB0b0RvRGl2LmFwcGVuZCh0b0RvQ29udGVudHMsIHJlbW92ZUJ0bik7XG4gICAgdG9Eb0NvbnRhaW5lci5hcHBlbmQodG9Eb0Rpdik7XG5cbiAgICBjb25zdCBzaG93RWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHNob3dFZGl0QnV0dG9uLmlkID0gJ3RvZG8tZWRpdC1zaG93JyArIGAke2l0ZW0uaW5kZXh9YDtcbiAgICBzaG93RWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdFZGl0IFRvIERvJztcbiAgICBzaG93RWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmb3JtLWJ1dHRvbicpO1xuXG4gICAgY29uc3QgaGlkZUVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBoaWRlRWRpdEJ1dHRvbi5pZCA9ICd0b2RvLWVkaXQtaGlkZScgKyBgJHtpdGVtLmluZGV4fWA7XG4gICAgaGlkZUVkaXRCdXR0b24udGV4dENvbnRlbnQgPSAnSGlkZSBGb3JtJztcbiAgICBoaWRlRWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmb3JtLWJ1dHRvbicsICd0b2dnbGUtdmlzaWJpbGl0eScpO1xuXG4gICAgdG9Eb0NvbnRlbnRzLmFwcGVuZChzaG93RWRpdEJ1dHRvbiwgaGlkZUVkaXRCdXR0b24pO1xuXG4gICAgc2hvd0VkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZm9ybVRvZ2dsZS5zaG93Rm9ybShzaG93RWRpdEJ1dHRvbiwgaGlkZUVkaXRCdXR0b24sIHRvRG9FZGl0Rm9ybSwgZSkpO1xuICAgIHNob3dFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHRvRG9GaWxlLmFzc2lnblRvRG9FZGl0QnRucyhpdGVtKSk7XG4gICAgaGlkZUVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZm9ybVRvZ2dsZS5oaWRlRm9ybShzaG93RWRpdEJ1dHRvbiwgaGlkZUVkaXRCdXR0b24sIHRvRG9FZGl0Rm9ybSwgZSkpO1xuICB9KVxufVxuXG5mdW5jdGlvbiByZW1vdmVOb25Qcm9qZWN0VG9Ebyh0b0RvSW5kZXgpIHtcbiAgY29uc3QgdG9Eb0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWl0ZW0nICsgYCR7dG9Eb0luZGV4fWApO1xuICB0b0RvRGl2LnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiByZXNldFRvRG9zKCkge1xuICB0b0RvQ29udGFpbmVyLmlubmVyVGV4dCA9ICcnO1xufVxuIiwiZXhwb3J0IHsgZWRpdFRvRG9Gb3JtIH07XG5cbiAgZnVuY3Rpb24gZWRpdFRvRG9Gb3JtKHRvRG8sIHRvZG9JbmRleCkge1xuICAgIGNvbnN0IG5ld0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgbmV3Rm9ybS5jbGFzc0xpc3QuYWRkKFwidG9nZ2xlLXZpc2liaWxpdHlcIik7XG4gICAgbmV3Rm9ybS5kYXRhc2V0LmluZGV4ID0gdG9kb0luZGV4O1xuICAgIG5ld0Zvcm0uaWQgPSAndG9kby1lZGl0LWZvcm0nICsgYCR7dG9kb0luZGV4fWA7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlLmlkID0gJ3RvZG8tdGl0bGUnICsgYCR7dG9kb0luZGV4fWA7XG4gICAgdGl0bGVMYWJlbC5pbm5lclRleHQgPSAnVGl0bGU6ICc7XG4gICAgdGl0bGUudHlwZSA9ICd0ZXh0JztcbiAgICB0aXRsZS52YWx1ZSA9IHRvRG8udGl0bGU7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgZGVzY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY3JpcHRpb24uaWQgPSAndG9kby1kZXNjcmlwdGlvbicgKyBgJHt0b2RvSW5kZXh9YDtcbiAgICBkZXNjTGFiZWwuaW5uZXJUZXh0ID0gJ0Rlc2NyaXB0aW9uOiAnO1xuICAgIGRlc2NyaXB0aW9uLnR5cGUgPSAndGV4dCc7XG4gICAgZGVzY3JpcHRpb24udmFsdWUgPSB0b0RvLmRlc2NyaXB0aW9uO1xuXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHVlRGF0ZS5pZCA9ICd0b2RvLWR1ZS1kYXRlJyArIGAke3RvZG9JbmRleH1gO1xuICAgIGRhdGVMYWJlbC5pbm5lclRleHQgPSAnRHVlIGJ5OiAnO1xuICAgIGR1ZURhdGUudHlwZSA9ICdkYXRldGltZS1sb2NhbCc7XG5cbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwcmlvcml0eUxhYmVsLmZvciA9ICd0b2RvLXByaW9yaXR5JztcbiAgICBwcmlvcml0eUxhYmVsLmlubmVyVGV4dCA9ICdQcmlvcml0eSc7XG5cbiAgICBjb25zdCBwcmlvcml0eVR5cGVzID0gWydub25lJywgJ2hpZ2hlc3QnLCAnaGlnaCcsICdtaWRkbGUnLCAnbG93J107XG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBwcmlvcml0eVNlbGVjdC5pZCA9ICd0b2RvLXByaW9yaXR5JyArIGAke3RvZG9JbmRleH1gO1xuICAgIHByaW9yaXR5U2VsZWN0Lm5hbWUgPSAncHJpb3JpdGllcyc7XG4gICAgcHJpb3JpdHlUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uKHR5cGUpIHtcbiAgICAgIGNvbnN0IHByaW9yaXR5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBwcmlvcml0eU9wdGlvbi52YWx1ZSA9IHR5cGU7XG4gICAgICBwcmlvcml0eU9wdGlvbi50ZXh0ID0gdHlwZVswXS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKTtcbiAgICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZChwcmlvcml0eU9wdGlvbik7XG4gICAgfSlcbiAgICBwcmlvcml0eVNlbGVjdC52YWx1ZSA9IHRvRG8ucHJpb3JpdHk7XG5cbiAgICBuZXdGb3JtLmFwcGVuZCh0aXRsZUxhYmVsLCB0aXRsZSwgZGVzY0xhYmVsLCBkZXNjcmlwdGlvbiwgZGF0ZUxhYmVsLCBkdWVEYXRlLCBwcmlvcml0eUxhYmVsLCBwcmlvcml0eVNlbGVjdCk7XG5cbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHN1Ym1pdC50eXBlID0gJ3N1Ym1pdCc7XG4gICAgc3VibWl0Lm5hbWUgPSAnc3VibWl0JztcbiAgICBzdWJtaXQuaWQgPSAndG9kby1zdWJtaXQtZWRpdCcgKyBgJHt0b2RvSW5kZXh9YDtcbiAgICBzdWJtaXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1idXR0b24nKTtcbiAgICBuZXdGb3JtLmFwcGVuZChzdWJtaXQpO1xuXG4gICAgcmV0dXJuIG5ld0Zvcm07XG4gIH0iLCJleHBvcnQgeyBjcmVhdGVUb0RvRm9ybSB9O1xuXG5cbiAgY29uc3QgdGV4dEZpZWxkc0FycmF5ID0gWyd0aXRsZScsICdkZXNjcmlwdGlvbiddO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZVRvRG9Gb3JtKHByb2plY3RDb250YWluZXIsIHByb2plY3RJbmRleCkge1xuICAgIGNvbnN0IG5ld0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgbmV3Rm9ybS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10b2RvLWZvcm1cIiwgXCJ0b2dnbGUtdmlzaWJpbGl0eVwiKTtcbiAgICBuZXdGb3JtLmRhdGFzZXQuaW5kZXggPSBwcm9qZWN0SW5kZXg7XG4gICAgbmV3Rm9ybS5pZCA9ICdwcm9qZWN0LXRvZG8tZm9ybScgKyBgJHtwcm9qZWN0SW5kZXh9YDtcblxuICAgIHRleHRGaWVsZHNBcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgICBjb25zdCBmaWVsZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBmaWVsZExhYmVsLmlubmVyVGV4dCA9IGZpZWxkWzBdLnRvVXBwZXJDYXNlKCkgKyBmaWVsZC5zbGljZSgxKTtcbiAgICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgaW5mby50eXBlID0gJ3RleHQnO1xuICAgICAgaW5mby5pZCA9ICdwcm9qZWN0LXRvZG8nICsgJy0nICsgYCR7ZmllbGR9YCArIGAke3Byb2plY3RJbmRleH1gO1xuICAgICAgaW5mby5uYW1lID0gYCR7ZmllbGR9YDtcbiAgICAgIG5ld0Zvcm0uYXBwZW5kKGZpZWxkTGFiZWwpO1xuICAgICAgbmV3Rm9ybS5hcHBlbmQoaW5mbyk7XG4gICAgfSlcblxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGR1ZURhdGUuaWQgPSAncHJvamVjdC10b2RvLWR1ZS1kYXRlJyArIGAke3Byb2plY3RJbmRleH1gO1xuICAgIGRhdGVMYWJlbC5pbm5lclRleHQgPSAnRHVlIGJ5OiAnXG4gICAgZHVlRGF0ZS50eXBlID0gJ2RhdGV0aW1lLWxvY2FsJztcbiAgICBuZXdGb3JtLmFwcGVuZChkYXRlTGFiZWwsIGR1ZURhdGUpO1xuXG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJpb3JpdHlMYWJlbC5mb3IgPSAncHJvamVjdC10b2RvLXByaW9yaXR5JztcbiAgICBwcmlvcml0eUxhYmVsLmlubmVyVGV4dCA9ICdQcmlvcml0eSc7XG5cbiAgICBjb25zdCBwcmlvcml0eVR5cGVzID0gWydub25lJywgJ2hpZ2hlc3QnLCAnaGlnaCcsICdtaWRkbGUnLCAnbG93J107XG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBwcmlvcml0eVNlbGVjdC5pZCA9ICdwcm9qZWN0LXRvZG8tcHJpb3JpdHknO1xuICAgIHByaW9yaXR5U2VsZWN0Lm5hbWUgPSAncHJpb3JpdGllcyc7XG4gICAgcHJpb3JpdHlUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uKHR5cGUpIHtcbiAgICAgIGNvbnN0IHByaW9yaXR5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBwcmlvcml0eU9wdGlvbi52YWx1ZSA9IHR5cGU7XG4gICAgICBwcmlvcml0eU9wdGlvbi50ZXh0ID0gdHlwZVswXS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKTtcbiAgICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZChwcmlvcml0eU9wdGlvbik7XG4gICAgfSlcblxuICAgIG5ld0Zvcm0uYXBwZW5kKGR1ZURhdGUsIHByaW9yaXR5TGFiZWwsIHByaW9yaXR5U2VsZWN0KTtcblxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgc3VibWl0LnR5cGUgPSAnc3VibWl0JztcbiAgICBzdWJtaXQubmFtZSA9ICdzdWJtaXQnO1xuICAgIHN1Ym1pdC5pZCA9ICdwcm9qZWN0LXRvZG8tc3VibWl0JyArIGAke3Byb2plY3RJbmRleH1gO1xuICAgIHN1Ym1pdC5jbGFzc0xpc3QuYWRkKCdmb3JtLWJ1dHRvbicpO1xuICAgIG5ld0Zvcm0uYXBwZW5kKHN1Ym1pdCk7XG5cbiAgICByZXR1cm4gbmV3Rm9ybTtcbiAgfSIsImV4cG9ydCB7IHRvRG8gfTtcbmltcG9ydCB7IHJlbW92ZU5vblByb2plY3RUb0RvLCBzaG93VG9Eb3MgfSBmcm9tIFwiLi90b2RvLWRvbVwiO1xuXG5jb25zdCB0b0RvID0gKGZ1bmN0aW9uKCkge1xuXG4gIGNvbnN0IHRvRG9BcnJheSA9IFtdO1xuXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXN1Ym1pdCcpO1xuICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBidWlsZEFuZEFkZFRvRG8pO1xuXG4gIGZ1bmN0aW9uIHRvRG9GYWN0b3J5ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGluZGV4LCBwcmlvcml0eSkge1xuICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgaW5kZXgsIHByaW9yaXR5IH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkQW5kQWRkVG9EbyhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRpdGxlVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby10aXRsZScpLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWRlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgY29uc3QgZHVlVmFsdWUgPSBuZXcgRGF0ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1kdWUtZGF0ZScpLnZhbHVlKTtcbiAgICBjb25zdCBpbmRleCA9IHRvRG9BcnJheS5sZW5ndGg7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1wcmlvcml0eScpLnZhbHVlO1xuICAgIGNvbnN0IG5ld1RvRG8gPSB0b0RvRmFjdG9yeSh0aXRsZVZhbHVlLCBkZXNjVmFsdWUsIGR1ZVZhbHVlLCBpbmRleCwgcHJpb3JpdHkpO1xuICAgIHRvRG9BcnJheS5wdXNoKG5ld1RvRG8pO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWZvcm0nKS5yZXNldCgpO1xuICAgIHNob3dUb0Rvcyh0b0RvQXJyYXkpO1xuICAgIGFzc2lnblJlbW92ZUJ0bnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVRvRG8oZSwgdG9Eb0luZGV4KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJlbW92ZU5vblByb2plY3RUb0RvKHRvRG9JbmRleCk7XG4gICAgdG9Eb0FycmF5LnNwbGljZSh0b0RvSW5kZXgsIDEpO1xuICAgIHJlZHVjZUluZGV4KHRvRG9BcnJheSwgdG9Eb0luZGV4KTtcbiAgICBzaG93VG9Eb3ModG9Eb0FycmF5KTtcbiAgICBhc3NpZ25SZW1vdmVCdG5zKCk7XG4gIH1cblxuICBmdW5jdGlvbiBlZGl0VG9EbyhlLCB0b2RvKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRpdGxlVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby10aXRsZScgKyBgJHt0b2RvLmluZGV4fWApLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWRlc2NyaXB0aW9uJyArIGAke3RvZG8uaW5kZXh9YCkudmFsdWU7XG4gICAgY29uc3QgZHVlVmFsdWUgPSBuZXcgRGF0ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1kdWUtZGF0ZScgKyBgJHt0b2RvLmluZGV4fWApLnZhbHVlKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXByaW9yaXR5JyArIGAke3RvZG8uaW5kZXh9YCkudmFsdWU7XG4gICAgdG9kby50aXRsZSA9IHRpdGxlVmFsdWU7XG4gICAgdG9kby5kZXNjcmlwdGlvbiA9IGRlc2NWYWx1ZTtcbiAgICB0b2RvLmR1ZURhdGUgPSBkdWVWYWx1ZTtcbiAgICB0b2RvLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgc2hvd1RvRG9zKHRvRG9BcnJheSk7XG4gICAgYXNzaWduUmVtb3ZlQnRucygpO1xuICB9XG5cbiAgZnVuY3Rpb24gYXNzaWduUmVtb3ZlQnRucygpIHtcbiAgICBjb25zdCB0b0RvUGFyYXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kby1pdGVtJyk7XG4gICAgdG9Eb1BhcmFzLmZvckVhY2goZnVuY3Rpb24odG9Ebykge1xuICAgICAgY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tcmVtb3ZlJyArIGAke3RvRG8uZGF0YXNldC5pbmRleH1gKTtcbiAgICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiByZW1vdmVUb0RvKGUsIHRvRG8uZGF0YXNldC5pbmRleCkpO1xuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBhc3NpZ25Ub0RvRWRpdEJ0bnModG9kbykge1xuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1zdWJtaXQtZWRpdCcgKyBgJHt0b2RvLmluZGV4fWApO1xuICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZWRpdFRvRG8oZSwgdG9kbykpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVkdWNlSW5kZXgoYXJyYXksIHJlbW92ZWRJdGVtSW5kZXgpIHtcbiAgICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIGlmIChpdGVtLmluZGV4ID4gcmVtb3ZlZEl0ZW1JbmRleCkge1xuICAgICAgICBpdGVtLmluZGV4IC09IDE7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHByaW50QXJyYXkoKSB7XG4gICAgdG9Eb0FycmF5LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xuICAgIH0pO1xuICB9XG4gICAgXG4gIHJldHVybiB7IHRvRG9BcnJheSwgdG9Eb0ZhY3RvcnksIGFzc2lnblRvRG9FZGl0QnRucyB9XG4gICAgXG59KSgpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IHRvRG8gfSBmcm9tICcuL21vZHVsZXMvdG9kby1pdGVtcy90b2RvJztcbmltcG9ydCB7IHByb2plY3QgfSBmcm9tICcuL21vZHVsZXMvcHJvamVjdHMvcHJvamVjdCc7XG5pbXBvcnQgeyBmb3JtVG9nZ2xlIH0gZnJvbSAnLi9tb2R1bGVzL2Zvcm0tdG9nZ2xlJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9