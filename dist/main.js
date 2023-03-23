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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0px;\n  padding: 0px;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\n.content-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.toggle-visibility {\n  display: none;\n}\n\n.nav {\n  display: flex;\n  align-items: center;\n  position: sticky;\n  width: 100%;\n  margin: auto;\n  height: 56px;\n  top: 0px;\n  background-color: rgb(69, 70, 73);\n  color: white;\n}\n\n.nav-h3 {\n  padding-left: 25px;\n}\n\n.top-forms-container{\n  display: flex;\n  padding-top: 15px;\n}\n\n.form-div {\n  display: flex;\n  flex-direction: column;\n  margin: 0px 20px;\n}\n\n.input-title {\n  margin-top: 10px;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n}\n\n.form-button {\n  width: 100px;\n  padding: 2px;\n  background-color: rgb(69, 70, 73);\n  color: white;\n  font-weight: bold;\n  margin-top: 10px;\n}\n\n.form-button:hover {\n  background-color: rgba(69, 70, 73, 0.664);\n}\n\n.form-button:active {\n  background-color: rgba(83, 96, 134, 0.664);\n}\n\n.content {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  align-self: center;\n  min-width: calc(100% - 50px);\n  min-height: calc(100vh - 112px);\n  padding: 0px 25px;\n  background-color: rgba(199, 193, 162, 0.349);\n}\n\nh2 {\n  margin: 15px 20px\n}\n\n.project-list, .todo-list {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-self: center;\n  align-items: center;\n  width: 90%;\n  border-top: 2px solid rgba(199, 193, 162, 0.692);\n}\n\n.project, .todo-item {\n  display: grid;\n  grid-template-rows: repeat(auto-fit, minmax(0.2fr, 1fr));\n  grid-template-columns: 1fr 0.05fr;\n  background-color: rgb(255, 255, 255);\n  border: 1px solid black;\n  padding: 20px;\n  margin: 15px 15px;\n  width: 80%;\n}\n\n.todo-content, .project-content {\n  word-wrap: break-word;\n  min-width: 200px;\n  max-width: 90%;\n}\n\n.remove-button {\n  grid-row: 1;\n  grid-column: 2;\n  justify-self: end;\n  background-color: rgb(69, 70, 73);\n  color: white;\n  font-weight: bold;\n  width: 25px;\n  height: 25px;\n}\n\n.remove-button:hover {\n  background-color: rgb(255, 0, 0);\n}\n\n.remove-button:active {\n  background-color: rgba(182, 36, 31, 0.808);\n}\n\n.project-todo-div{\n  grid-row: 2;\n  min-width: 200px;\n  max-width: 90%;\n  margin: 5px 0px;\n  padding: 5px 0px;\n  border-top: 1px solid rgb(69, 70, 73);\n}\n\n.project-todo-item {\n  margin-top: 5px;\n  padding: 5px;\n  border-top: 1px dotted rgb(69, 70, 73);\n}\n\n.project-todo-form {\n  grid-row: 3;\n  grid-column: 1;\n  width: 200px;\n}\n\n.priority-none {\n  font-weight: bold;\n}\n\n.priority-highest {\n  color: red;\n  font-weight: bold;\n}\n\n.priority-high {\n  color: orange;\n  font-weight: bold;\n}\n\n.priority-middle {\n  color: rgb(0, 173, 0);\n  font-weight: bold;\n}\n\n.priority-low {\n  color: blue;\n  font-weight: bold;\n}\n\n.footer {\n  display: flex;\n  align-items: center;\n  height: 56px;\n  background-color: rgb(69, 70, 73);\n  color: rgb(196, 196, 196);\n}\n\n.footer-p {\n  padding-left: 25px;\n}\n\n@media (max-width: 480px) {\n\n  .top-forms-container {\n    display: flex;\n    flex-direction: column;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,QAAQ;EACR,iCAAiC;EACjC,YAAY;AACd;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,iCAAiC;EACjC,YAAY;EACZ,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,aAAa;EACb,eAAe;EACf,sBAAsB;EACtB,kBAAkB;EAClB,4BAA4B;EAC5B,+BAA+B;EAC/B,iBAAiB;EACjB,4CAA4C;AAC9C;;AAEA;EACE;AACF;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,eAAe;EACf,kBAAkB;EAClB,mBAAmB;EACnB,UAAU;EACV,gDAAgD;AAClD;;AAEA;EACE,aAAa;EACb,wDAAwD;EACxD,iCAAiC;EACjC,oCAAoC;EACpC,uBAAuB;EACvB,aAAa;EACb,iBAAiB;EACjB,UAAU;AACZ;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,iBAAiB;EACjB,iCAAiC;EACjC,YAAY;EACZ,iBAAiB;EACjB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,qCAAqC;AACvC;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,sCAAsC;AACxC;;AAEA;EACE,WAAW;EACX,cAAc;EACd,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,iCAAiC;EACjC,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;EAEE;IACE,aAAa;IACb,sBAAsB;EACxB;AACF","sourcesContent":["* {\n  margin: 0px;\n  padding: 0px;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\n.content-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.toggle-visibility {\n  display: none;\n}\n\n.nav {\n  display: flex;\n  align-items: center;\n  position: sticky;\n  width: 100%;\n  margin: auto;\n  height: 56px;\n  top: 0px;\n  background-color: rgb(69, 70, 73);\n  color: white;\n}\n\n.nav-h3 {\n  padding-left: 25px;\n}\n\n.top-forms-container{\n  display: flex;\n  padding-top: 15px;\n}\n\n.form-div {\n  display: flex;\n  flex-direction: column;\n  margin: 0px 20px;\n}\n\n.input-title {\n  margin-top: 10px;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n}\n\n.form-button {\n  width: 100px;\n  padding: 2px;\n  background-color: rgb(69, 70, 73);\n  color: white;\n  font-weight: bold;\n  margin-top: 10px;\n}\n\n.form-button:hover {\n  background-color: rgba(69, 70, 73, 0.664);\n}\n\n.form-button:active {\n  background-color: rgba(83, 96, 134, 0.664);\n}\n\n.content {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  align-self: center;\n  min-width: calc(100% - 50px);\n  min-height: calc(100vh - 112px);\n  padding: 0px 25px;\n  background-color: rgba(199, 193, 162, 0.349);\n}\n\nh2 {\n  margin: 15px 20px\n}\n\n.project-list, .todo-list {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-self: center;\n  align-items: center;\n  width: 90%;\n  border-top: 2px solid rgba(199, 193, 162, 0.692);\n}\n\n.project, .todo-item {\n  display: grid;\n  grid-template-rows: repeat(auto-fit, minmax(0.2fr, 1fr));\n  grid-template-columns: 1fr 0.05fr;\n  background-color: rgb(255, 255, 255);\n  border: 1px solid black;\n  padding: 20px;\n  margin: 15px 15px;\n  width: 80%;\n}\n\n.todo-content, .project-content {\n  word-wrap: break-word;\n  min-width: 200px;\n  max-width: 90%;\n}\n\n.remove-button {\n  grid-row: 1;\n  grid-column: 2;\n  justify-self: end;\n  background-color: rgb(69, 70, 73);\n  color: white;\n  font-weight: bold;\n  width: 25px;\n  height: 25px;\n}\n\n.remove-button:hover {\n  background-color: rgb(255, 0, 0);\n}\n\n.remove-button:active {\n  background-color: rgba(182, 36, 31, 0.808);\n}\n\n.project-todo-div{\n  grid-row: 2;\n  min-width: 200px;\n  max-width: 90%;\n  margin: 5px 0px;\n  padding: 5px 0px;\n  border-top: 1px solid rgb(69, 70, 73);\n}\n\n.project-todo-item {\n  margin-top: 5px;\n  padding: 5px;\n  border-top: 1px dotted rgb(69, 70, 73);\n}\n\n.project-todo-form {\n  grid-row: 3;\n  grid-column: 1;\n  width: 200px;\n}\n\n.priority-none {\n  font-weight: bold;\n}\n\n.priority-highest {\n  color: red;\n  font-weight: bold;\n}\n\n.priority-high {\n  color: orange;\n  font-weight: bold;\n}\n\n.priority-middle {\n  color: rgb(0, 173, 0);\n  font-weight: bold;\n}\n\n.priority-low {\n  color: blue;\n  font-weight: bold;\n}\n\n.footer {\n  display: flex;\n  align-items: center;\n  height: 56px;\n  background-color: rgb(69, 70, 73);\n  color: rgb(196, 196, 196);\n}\n\n.footer-p {\n  padding-left: 25px;\n}\n\n@media (max-width: 480px) {\n\n  .top-forms-container {\n    display: flex;\n    flex-direction: column;\n  }\n}"],"sourceRoot":""}]);
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

  (function formToggle() {

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
  })();
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
    projectTitle.textContent = `Project Title: ${project.title}`;
    projectTitle.classList.add(`priority-${project.priority}`);

    const projectDesc = document.createElement('p');
    projectDesc.textContent = `Description: ${project.description}`;

    const projectDate = document.createElement('p');
    projectDate.textContent = `Due Date: ${project.dueDate}`;

    const projectPriority = document.createElement('p');
    const projectPriorityCapitalized = project.priority[0].toUpperCase() + project.priority.slice(1);
    projectPriority.textContent = `Priority: ${projectPriorityCapitalized}`;
      
    projectContents.append(projectTitle, projectDesc, projectDate, projectPriority);
    projectContainer.append(projectContents, projectRemoveBtn);
    projectContainer.append(projectToDoDiv);
    (0,_todo_items_todo_form__WEBPACK_IMPORTED_MODULE_0__.createToDoForm)(projectContainer, project.index);
      
    project.toDos.forEach(function(toDo) {
      const toDoDiv = document.createElement('div');
      toDoDiv.id = 'project-todo-div' + `${project.index}` + `${toDo.index}`;
      toDoDiv.classList.add('project-todo-item');

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
      toDoRemoveBtn.innerText = 'X';

      toDoContents.append(toDoTitle, toDoDesc, toDoDate, toDoPriority);
      toDoDiv.append(toDoContents);
      projectToDoDiv.append(toDoDiv);
      toDoDiv.append(toDoRemoveBtn);
    })
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
    const dueValue = document.getElementById('project-due-date').value;
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

  function assignProjectToDoSubmits() {
    const projectToDoForms = document.querySelectorAll('.project-todo-form');
    projectToDoForms.forEach(function(form) {
      let projectIndex = form.dataset.index;
      const submitBtn = document.getElementById('project-todo-submit' + `${projectIndex}`);
      submitBtn.addEventListener('click', (e) => addProjectToDo(e, projectIndex));
    })
  }

  function addProjectToDo(e, projectIndex) {
      e.preventDefault();
      const currentProject = projectArray[projectIndex];
      const titleValue = document.getElementById('project-todo-title'+`${projectIndex}`).value;
      const descValue = document.getElementById('project-todo-description'+`${projectIndex}`).value;
      const dueValue = document.getElementById('project-todo-due-date'+`${projectIndex}`).value;
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

  function assignProjectRemoveBtns() {
    const projectDiv = document.querySelectorAll('.project');
    projectDiv.forEach(function(project) {
      const removeBtn = document.getElementById('project-remove' + `${project.dataset.index}`);
      removeBtn.addEventListener('click', (e) => removeProject(e, project.dataset.index));
    })
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

  function removeProject(e, projectIndex) {
    (0,_project_dom__WEBPACK_IMPORTED_MODULE_0__.removeProjectDOM)(projectIndex);
    projectArray.splice(projectIndex, 1);
    reduceIndex(projectArray, projectIndex);
    (0,_project_dom__WEBPACK_IMPORTED_MODULE_0__.showProjects)(projectArray);
    assignProjectToDoSubmits();
    assignProjectToDoRemoveBtns();
    assignProjectRemoveBtns();
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
    
  return { projectArray }
    
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
    toDoDesc.textContent = `Description: ${item.description}`;

    const toDoDate = document.createElement('p');
    toDoDate.textContent = `Due by: ${item.dueDate}`;

    const toDoPriority = document.createElement('p');
    const priorityCapitalized = item.priority[0].toUpperCase() + item.priority.slice(1);
    toDoPriority.textContent = `Priority: ${priorityCapitalized}`;

    const removeBtn = document.createElement('button');
    removeBtn.id = 'todo-remove' + `${item.index}`;
    removeBtn.innerText = "X";
    removeBtn.classList.add('remove-button');

    toDoContents.append(toDoTitle, toDoDesc, toDoDate, toDoPriority);
    toDoDiv.append(toDoContents, removeBtn);
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

/***/ "./src/modules/todo-items/todo-form.js":
/*!*********************************************!*\
  !*** ./src/modules/todo-items/todo-form.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createToDoForm": () => (/* binding */ createToDoForm)
/* harmony export */ });



  const textFieldsArray = ['title', 'description', 'due-date'];

  function createToDoForm(projectContainer, projectIndex) {
    const newForm = document.createElement('form');
    newForm.classList.add('project-todo-form');
    newForm.dataset.index = projectIndex;
    newForm.id = 'project-todo-form' + `${projectIndex}`;
    textFieldsArray.forEach(function(field) {
      const para = document.createElement('p');
      para.innerText = field[0].toUpperCase() + field.slice(1);
      const info = document.createElement('input');
      info.type = 'text';
      info.id = 'project-todo' + '-' + `${field}` + `${projectIndex}`;
      info.name = `${field}`;
      newForm.append(para);
      newForm.append(info);
    })

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

    newForm.append(priorityLabel, prioritySelect);

    const submit = document.createElement('input');
    submit.type = 'submit';
    submit.name = 'submit';
    submit.id = 'project-todo-submit' + `${projectIndex}`;
    submit.classList.add('form-button');
    newForm.append(submit);
    projectContainer.append(newForm);
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
    const dueValue = document.getElementById('todo-due-date').value;
    const index = toDoArray.length;
    const priority = document.getElementById('todo-priority').value;
    const newToDo = toDoFactory(titleValue, descValue, dueValue, index, priority);
    toDoArray.push(newToDo);
    document.getElementById('todo-form').reset();
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

  function removeToDo(e, toDoIndex) {
    e.preventDefault();
    (0,_todo_dom__WEBPACK_IMPORTED_MODULE_0__.removeNonProjectToDo)(toDoIndex);
    toDoArray.splice(toDoIndex, 1);
    reduceIndex(toDoArray, toDoIndex);
    (0,_todo_dom__WEBPACK_IMPORTED_MODULE_0__.showToDos)(toDoArray);
    assignRemoveBtns();
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
    
  return { toDoArray, toDoFactory }
    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQWlEO0FBQ0k7QUFDRjtBQUM5QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9mb3JtLXRvZ2dsZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0cy9wcm9qZWN0LWRvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0cy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RvZG8taXRlbXMvdG9kby1kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9kby1pdGVtcy90b2RvLWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9kby1pdGVtcy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG9nZ2xlLXZpc2liaWxpdHkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGhlaWdodDogNTZweDtcXG4gIHRvcDogMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY5LCA3MCwgNzMpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubmF2LWgzIHtcXG4gIHBhZGRpbmctbGVmdDogMjVweDtcXG59XFxuXFxuLnRvcC1mb3Jtcy1jb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZy10b3A6IDE1cHg7XFxufVxcblxcbi5mb3JtLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbjogMHB4IDIwcHg7XFxufVxcblxcbi5pbnB1dC10aXRsZSB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZm9ybS1idXR0b24ge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgcGFkZGluZzogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY5LCA3MCwgNzMpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uZm9ybS1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2OSwgNzAsIDczLCAwLjY2NCk7XFxufVxcblxcbi5mb3JtLWJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MywgOTYsIDEzNCwgMC42NjQpO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1pbi13aWR0aDogY2FsYygxMDAlIC0gNTBweCk7XFxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTEycHgpO1xcbiAgcGFkZGluZzogMHB4IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5OSwgMTkzLCAxNjIsIDAuMzQ5KTtcXG59XFxuXFxuaDIge1xcbiAgbWFyZ2luOiAxNXB4IDIwcHhcXG59XFxuXFxuLnByb2plY3QtbGlzdCwgLnRvZG8tbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogOTAlO1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEoMTk5LCAxOTMsIDE2MiwgMC42OTIpO1xcbn1cXG5cXG4ucHJvamVjdCwgLnRvZG8taXRlbSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgwLjJmciwgMWZyKSk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAwLjA1ZnI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBtYXJnaW46IDE1cHggMTVweDtcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbi50b2RvLWNvbnRlbnQsIC5wcm9qZWN0LWNvbnRlbnQge1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgbWluLXdpZHRoOiAyMDBweDtcXG4gIG1heC13aWR0aDogOTAlO1xcbn1cXG5cXG4ucmVtb3ZlLWJ1dHRvbiB7XFxuICBncmlkLXJvdzogMTtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjksIDcwLCA3Myk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG4ucmVtb3ZlLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXG59XFxuXFxuLnJlbW92ZS1idXR0b246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgyLCAzNiwgMzEsIDAuODA4KTtcXG59XFxuXFxuLnByb2plY3QtdG9kby1kaXZ7XFxuICBncmlkLXJvdzogMjtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxuICBtYXgtd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogNXB4IDBweDtcXG4gIHBhZGRpbmc6IDVweCAwcHg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDY5LCA3MCwgNzMpO1xcbn1cXG5cXG4ucHJvamVjdC10b2RvLWl0ZW0ge1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IGRvdHRlZCByZ2IoNjksIDcwLCA3Myk7XFxufVxcblxcbi5wcm9qZWN0LXRvZG8tZm9ybSB7XFxuICBncmlkLXJvdzogMztcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4ucHJpb3JpdHktbm9uZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnByaW9yaXR5LWhpZ2hlc3Qge1xcbiAgY29sb3I6IHJlZDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucHJpb3JpdHktaGlnaCB7XFxuICBjb2xvcjogb3JhbmdlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wcmlvcml0eS1taWRkbGUge1xcbiAgY29sb3I6IHJnYigwLCAxNzMsIDApO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wcmlvcml0eS1sb3cge1xcbiAgY29sb3I6IGJsdWU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2OSwgNzAsIDczKTtcXG4gIGNvbG9yOiByZ2IoMTk2LCAxOTYsIDE5Nik7XFxufVxcblxcbi5mb290ZXItcCB7XFxuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcblxcbiAgLnRvcC1mb3Jtcy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLFFBQVE7RUFDUixpQ0FBaUM7RUFDakMsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0IsaUJBQWlCO0VBQ2pCLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isd0RBQXdEO0VBQ3hELGlDQUFpQztFQUNqQyxvQ0FBb0M7RUFDcEMsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsaUNBQWlDO0VBQ2pDLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixpQ0FBaUM7RUFDakMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtFQUN4QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG9nZ2xlLXZpc2liaWxpdHkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGhlaWdodDogNTZweDtcXG4gIHRvcDogMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY5LCA3MCwgNzMpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubmF2LWgzIHtcXG4gIHBhZGRpbmctbGVmdDogMjVweDtcXG59XFxuXFxuLnRvcC1mb3Jtcy1jb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZy10b3A6IDE1cHg7XFxufVxcblxcbi5mb3JtLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbjogMHB4IDIwcHg7XFxufVxcblxcbi5pbnB1dC10aXRsZSB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZm9ybS1idXR0b24ge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgcGFkZGluZzogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY5LCA3MCwgNzMpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uZm9ybS1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2OSwgNzAsIDczLCAwLjY2NCk7XFxufVxcblxcbi5mb3JtLWJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MywgOTYsIDEzNCwgMC42NjQpO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1pbi13aWR0aDogY2FsYygxMDAlIC0gNTBweCk7XFxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTEycHgpO1xcbiAgcGFkZGluZzogMHB4IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5OSwgMTkzLCAxNjIsIDAuMzQ5KTtcXG59XFxuXFxuaDIge1xcbiAgbWFyZ2luOiAxNXB4IDIwcHhcXG59XFxuXFxuLnByb2plY3QtbGlzdCwgLnRvZG8tbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogOTAlO1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEoMTk5LCAxOTMsIDE2MiwgMC42OTIpO1xcbn1cXG5cXG4ucHJvamVjdCwgLnRvZG8taXRlbSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgwLjJmciwgMWZyKSk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAwLjA1ZnI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBtYXJnaW46IDE1cHggMTVweDtcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbi50b2RvLWNvbnRlbnQsIC5wcm9qZWN0LWNvbnRlbnQge1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgbWluLXdpZHRoOiAyMDBweDtcXG4gIG1heC13aWR0aDogOTAlO1xcbn1cXG5cXG4ucmVtb3ZlLWJ1dHRvbiB7XFxuICBncmlkLXJvdzogMTtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjksIDcwLCA3Myk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG4ucmVtb3ZlLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXG59XFxuXFxuLnJlbW92ZS1idXR0b246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgyLCAzNiwgMzEsIDAuODA4KTtcXG59XFxuXFxuLnByb2plY3QtdG9kby1kaXZ7XFxuICBncmlkLXJvdzogMjtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxuICBtYXgtd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogNXB4IDBweDtcXG4gIHBhZGRpbmc6IDVweCAwcHg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDY5LCA3MCwgNzMpO1xcbn1cXG5cXG4ucHJvamVjdC10b2RvLWl0ZW0ge1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IGRvdHRlZCByZ2IoNjksIDcwLCA3Myk7XFxufVxcblxcbi5wcm9qZWN0LXRvZG8tZm9ybSB7XFxuICBncmlkLXJvdzogMztcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4ucHJpb3JpdHktbm9uZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnByaW9yaXR5LWhpZ2hlc3Qge1xcbiAgY29sb3I6IHJlZDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucHJpb3JpdHktaGlnaCB7XFxuICBjb2xvcjogb3JhbmdlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wcmlvcml0eS1taWRkbGUge1xcbiAgY29sb3I6IHJnYigwLCAxNzMsIDApO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wcmlvcml0eS1sb3cge1xcbiAgY29sb3I6IGJsdWU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2OSwgNzAsIDczKTtcXG4gIGNvbG9yOiByZ2IoMTk2LCAxOTYsIDE5Nik7XFxufVxcblxcbi5mb290ZXItcCB7XFxuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcblxcbiAgLnRvcC1mb3Jtcy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IHsgZm9ybVRvZ2dsZSB9O1xuXG5jb25zdCBmb3JtVG9nZ2xlID0gKGZ1bmN0aW9uKCkge1xuXG4gIChmdW5jdGlvbiBmb3JtVG9nZ2xlKCkge1xuXG4gICAgY29uc3Qgc2hvd1RvRG9Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3ctdG9kbycpO1xuICAgIGNvbnN0IGhpZGVUb0RvRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaWRlLXRvZG8nKTtcbiAgICBjb25zdCB0b0RvRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWZvcm0nKVxuICAgIGNvbnN0IHNob3dQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93LXByb2plY3QnKTtcbiAgICBjb25zdCBoaWRlUHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlkZS1wcm9qZWN0Jyk7XG4gICAgY29uc3QgUHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1mb3JtJylcbiAgICBzaG93VG9Eb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gc2hvd0Zvcm0oc2hvd1RvRG9Gb3JtLCBoaWRlVG9Eb0Zvcm0sIHRvRG9Gb3JtLCBlKSk7XG4gICAgaGlkZVRvRG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGhpZGVGb3JtKHNob3dUb0RvRm9ybSwgaGlkZVRvRG9Gb3JtLCB0b0RvRm9ybSwgZSkpO1xuICAgIHNob3dQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBzaG93Rm9ybShzaG93UHJvamVjdEZvcm0sIGhpZGVQcm9qZWN0Rm9ybSwgUHJvamVjdEZvcm0sIGUpKTtcbiAgICBoaWRlUHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gaGlkZUZvcm0oc2hvd1Byb2plY3RGb3JtLCBoaWRlUHJvamVjdEZvcm0sIFByb2plY3RGb3JtLCBlKSk7XG5cbiAgICBmdW5jdGlvbiBzaG93Rm9ybShzaG93QnRuLCBoaWRlQnRuLCBmb3JtKSB7XG4gICAgICAgIHNob3dCdG4uY2xhc3NMaXN0LmFkZCgndG9nZ2xlLXZpc2liaWxpdHknKTtcbiAgICAgICAgaGlkZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCd0b2dnbGUtdmlzaWJpbGl0eScpO1xuICAgICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ3RvZ2dsZS12aXNpYmlsaXR5Jyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUZvcm0oc2hvd0J0biwgaGlkZUJ0biwgZm9ybSkge1xuICAgICAgICBoaWRlQnRuLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZS12aXNpYmlsaXR5Jyk7XG4gICAgICAgIHNob3dCdG4uY2xhc3NMaXN0LnJlbW92ZSgndG9nZ2xlLXZpc2liaWxpdHknKTtcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtdmlzaWJpbGl0eScpO1xuICAgIH1cbiAgfSkoKTtcbn0pKCk7IiwiZXhwb3J0IHsgc2hvd1Byb2plY3RzLCByZW1vdmVQcm9qZWN0RE9NLCByZW1vdmVQcm9qZWN0VG9Eb0RPTSB9XG5pbXBvcnQgeyBjcmVhdGVUb0RvRm9ybSB9IGZyb20gXCIuLi90b2RvLWl0ZW1zL3RvZG8tZm9ybVwiO1xuXG5jb25zdCBhbGxQcm9qZWN0c0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWxpc3QnKTtcblxuZnVuY3Rpb24gc2hvd1Byb2plY3RzKGFycmF5KSB7XG4gIHJlc2V0UHJvamVjdHMoKTtcbiAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbihwcm9qZWN0KSB7XG5cbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdENvbnRhaW5lci5kYXRhc2V0LmluZGV4ID0gcHJvamVjdC5pbmRleDtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmlkID0gJ3Byb2plY3QnICsgYCR7cHJvamVjdC5pbmRleH1gO1xuICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuXG4gICAgY29uc3QgcHJvamVjdFRvRG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0VG9Eb0Rpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRvZG8tZGl2Jyk7XG4gICAgcHJvamVjdFRvRG9EaXYuaW5uZXJUZXh0ID0gYFRvIERvczpcXG5gO1xuXG4gICAgY29uc3QgcHJvamVjdFJlbW92ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3RSZW1vdmVCdG4uaWQgPSAncHJvamVjdC1yZW1vdmUnICtgJHtwcm9qZWN0LmluZGV4fWA7XG4gICAgcHJvamVjdFJlbW92ZUJ0bi5pbm5lclRleHQgPSAnWCc7XG4gICAgcHJvamVjdFJlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKCdyZW1vdmUtYnV0dG9uJyk7XG5cbiAgICBjb25zdCBwcm9qZWN0Q29udGVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0Q29udGVudHMuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250ZW50Jyk7XG5cbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gYFByb2plY3QgVGl0bGU6ICR7cHJvamVjdC50aXRsZX1gO1xuICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKGBwcmlvcml0eS0ke3Byb2plY3QucHJpb3JpdHl9YCk7XG5cbiAgICBjb25zdCBwcm9qZWN0RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcm9qZWN0RGVzYy50ZXh0Q29udGVudCA9IGBEZXNjcmlwdGlvbjogJHtwcm9qZWN0LmRlc2NyaXB0aW9ufWA7XG5cbiAgICBjb25zdCBwcm9qZWN0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcm9qZWN0RGF0ZS50ZXh0Q29udGVudCA9IGBEdWUgRGF0ZTogJHtwcm9qZWN0LmR1ZURhdGV9YDtcblxuICAgIGNvbnN0IHByb2plY3RQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwcm9qZWN0UHJpb3JpdHlDYXBpdGFsaXplZCA9IHByb2plY3QucHJpb3JpdHlbMF0udG9VcHBlckNhc2UoKSArIHByb2plY3QucHJpb3JpdHkuc2xpY2UoMSk7XG4gICAgcHJvamVjdFByaW9yaXR5LnRleHRDb250ZW50ID0gYFByaW9yaXR5OiAke3Byb2plY3RQcmlvcml0eUNhcGl0YWxpemVkfWA7XG4gICAgICBcbiAgICBwcm9qZWN0Q29udGVudHMuYXBwZW5kKHByb2plY3RUaXRsZSwgcHJvamVjdERlc2MsIHByb2plY3REYXRlLCBwcm9qZWN0UHJpb3JpdHkpO1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kKHByb2plY3RDb250ZW50cywgcHJvamVjdFJlbW92ZUJ0bik7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQocHJvamVjdFRvRG9EaXYpO1xuICAgIGNyZWF0ZVRvRG9Gb3JtKHByb2plY3RDb250YWluZXIsIHByb2plY3QuaW5kZXgpO1xuICAgICAgXG4gICAgcHJvamVjdC50b0Rvcy5mb3JFYWNoKGZ1bmN0aW9uKHRvRG8pIHtcbiAgICAgIGNvbnN0IHRvRG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRvRG9EaXYuaWQgPSAncHJvamVjdC10b2RvLWRpdicgKyBgJHtwcm9qZWN0LmluZGV4fWAgKyBgJHt0b0RvLmluZGV4fWA7XG4gICAgICB0b0RvRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdG9kby1pdGVtJyk7XG5cbiAgICAgIGNvbnN0IHRvRG9Db250ZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdG9Eb0NvbnRlbnRzLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY29udGVudCcpO1xuXG4gICAgICBjb25zdCB0b0RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICB0b0RvVGl0bGUudGV4dENvbnRlbnQgPSBgJHt0b0RvLnRpdGxlfWA7XG4gICAgICB0b0RvVGl0bGUuY2xhc3NMaXN0LmFkZChgcHJpb3JpdHktJHt0b0RvLnByaW9yaXR5fWApO1xuXG4gICAgICBjb25zdCB0b0RvRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIHRvRG9EZXNjLnRleHRDb250ZW50ID0gYCR7dG9Eby5kZXNjcmlwdGlvbn1gO1xuXG4gICAgICBjb25zdCB0b0RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIHRvRG9EYXRlLnRleHRDb250ZW50ID0gYER1ZSBieTogJHt0b0RvLmR1ZURhdGV9YDtcblxuICAgICAgY29uc3QgdG9Eb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgY29uc3QgcHJpb3JpdHlDYXBpdGFsaXplZCA9IHRvRG8ucHJpb3JpdHlbMF0udG9VcHBlckNhc2UoKSArIHRvRG8ucHJpb3JpdHkuc2xpY2UoMSk7XG4gICAgICB0b0RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7cHJpb3JpdHlDYXBpdGFsaXplZH1gO1xuXG4gICAgICBjb25zdCB0b0RvUmVtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICB0b0RvUmVtb3ZlQnRuLmlkID0gJ3Byb2plY3QtdG9kby1yZW1vdmUnICsgYCR7cHJvamVjdC5pbmRleH1gICsgYCR7dG9Eby5pbmRleH1gO1xuICAgICAgdG9Eb1JlbW92ZUJ0bi5pbm5lclRleHQgPSAnWCc7XG5cbiAgICAgIHRvRG9Db250ZW50cy5hcHBlbmQodG9Eb1RpdGxlLCB0b0RvRGVzYywgdG9Eb0RhdGUsIHRvRG9Qcmlvcml0eSk7XG4gICAgICB0b0RvRGl2LmFwcGVuZCh0b0RvQ29udGVudHMpO1xuICAgICAgcHJvamVjdFRvRG9EaXYuYXBwZW5kKHRvRG9EaXYpO1xuICAgICAgdG9Eb0Rpdi5hcHBlbmQodG9Eb1JlbW92ZUJ0bik7XG4gICAgfSlcbiAgICBhbGxQcm9qZWN0c0Rpdi5hcHBlbmQocHJvamVjdENvbnRhaW5lcik7XG4gIH0pXG59XG5cbmZ1bmN0aW9uIHJlbW92ZVByb2plY3RET00ocHJvamVjdEluZGV4KSB7XG4gIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdCcgKyBgJHtwcm9qZWN0SW5kZXh9YCk7XG4gIHByb2plY3REaXYucmVtb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVByb2plY3RUb0RvRE9NKHByb2plY3RJbmRleCwgdG9Eb0luZGV4KSB7XG4gIGNvbnN0IHRvRG9EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10b2RvLWRpdicgKyBgJHtwcm9qZWN0SW5kZXh9YCArIGAke3RvRG9JbmRleH1gKTtcbiAgdG9Eb0Rpdi5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gcmVzZXRQcm9qZWN0cygpIHtcbiAgYWxsUHJvamVjdHNEaXYuaW5uZXJUZXh0ID0gJyc7XG59XG4iLCJleHBvcnQgeyBwcm9qZWN0IH07XG5pbXBvcnQgeyBzaG93UHJvamVjdHMsIHJlbW92ZVByb2plY3RET00sIHJlbW92ZVByb2plY3RUb0RvRE9NIH0gZnJvbSBcIi4vcHJvamVjdC1kb21cIjtcbmltcG9ydCB7IHRvRG8gfSBmcm9tIFwiLi4vdG9kby1pdGVtcy90b2RvXCI7XG5cbmNvbnN0IHByb2plY3QgPSAoZnVuY3Rpb24oKSB7XG5cbiAgY29uc3QgcHJvamVjdEFycmF5ID0gW107XG5cbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3Qtc3VibWl0Jyk7XG4gIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJ1aWxkQW5kQWRkUHJvamVjdCk7XG5cbiAgZnVuY3Rpb24gcHJvamVjdEZhY3RvcnkgKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgaW5kZXgsIHByaW9yaXR5LCB0b0RvcyA9IFtdKSB7XG4gICAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBpbmRleCwgcHJpb3JpdHksIHRvRG9zIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkQW5kQWRkUHJvamVjdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRpdGxlVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10aXRsZScpLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWRlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgY29uc3QgZHVlVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1kdWUtZGF0ZScpLnZhbHVlO1xuICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdEFycmF5Lmxlbmd0aDtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXByaW9yaXR5JykudmFsdWU7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3RGYWN0b3J5KHRpdGxlVmFsdWUsIGRlc2NWYWx1ZSwgZHVlVmFsdWUsIGluZGV4LCBwcmlvcml0eSk7XG4gICAgcHJvamVjdEFycmF5LnB1c2gobmV3UHJvamVjdCk7XG4gICAgXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtZm9ybScpLnJlc2V0KCk7XG4gICAgc2hvd1Byb2plY3RzKHByb2plY3RBcnJheSk7XG4gICAgYXNzaWduUHJvamVjdFRvRG9TdWJtaXRzKCk7XG4gICAgYXNzaWduUHJvamVjdFJlbW92ZUJ0bnMoKTtcbiAgICBhc3NpZ25Qcm9qZWN0VG9Eb1JlbW92ZUJ0bnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFzc2lnblByb2plY3RUb0RvU3VibWl0cygpIHtcbiAgICBjb25zdCBwcm9qZWN0VG9Eb0Zvcm1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtdG9kby1mb3JtJyk7XG4gICAgcHJvamVjdFRvRG9Gb3Jtcy5mb3JFYWNoKGZ1bmN0aW9uKGZvcm0pIHtcbiAgICAgIGxldCBwcm9qZWN0SW5kZXggPSBmb3JtLmRhdGFzZXQuaW5kZXg7XG4gICAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10b2RvLXN1Ym1pdCcgKyBgJHtwcm9qZWN0SW5kZXh9YCk7XG4gICAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gYWRkUHJvamVjdFRvRG8oZSwgcHJvamVjdEluZGV4KSk7XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFByb2plY3RUb0RvKGUsIHByb2plY3RJbmRleCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBwcm9qZWN0QXJyYXlbcHJvamVjdEluZGV4XTtcbiAgICAgIGNvbnN0IHRpdGxlVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10b2RvLXRpdGxlJytgJHtwcm9qZWN0SW5kZXh9YCkudmFsdWU7XG4gICAgICBjb25zdCBkZXNjVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10b2RvLWRlc2NyaXB0aW9uJytgJHtwcm9qZWN0SW5kZXh9YCkudmFsdWU7XG4gICAgICBjb25zdCBkdWVWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXRvZG8tZHVlLWRhdGUnK2Ake3Byb2plY3RJbmRleH1gKS52YWx1ZTtcbiAgICAgIGNvbnN0IGluZGV4ID0gY3VycmVudFByb2plY3QudG9Eb3MubGVuZ3RoO1xuICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10b2RvLXByaW9yaXR5JykudmFsdWU7XG4gICAgICBjb25zdCBuZXdUb0RvID0gdG9Eby50b0RvRmFjdG9yeSh0aXRsZVZhbHVlLCBkZXNjVmFsdWUsIGR1ZVZhbHVlLCBpbmRleCwgcHJpb3JpdHkpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdG9kby1mb3JtJytgJHtwcm9qZWN0SW5kZXh9YCkucmVzZXQoKTtcbiAgICAgIGN1cnJlbnRQcm9qZWN0LnRvRG9zLnB1c2gobmV3VG9Ebyk7XG4gICAgICBzaG93UHJvamVjdHMocHJvamVjdEFycmF5KTtcbiAgICAgIGFzc2lnblByb2plY3RUb0RvU3VibWl0cygpO1xuICAgICAgYXNzaWduUHJvamVjdFRvRG9SZW1vdmVCdG5zKCk7XG4gICAgICBhc3NpZ25Qcm9qZWN0UmVtb3ZlQnRucygpO1xuICB9XG5cbiAgZnVuY3Rpb24gYXNzaWduUHJvamVjdFJlbW92ZUJ0bnMoKSB7XG4gICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0Jyk7XG4gICAgcHJvamVjdERpdi5mb3JFYWNoKGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICAgIGNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXJlbW92ZScgKyBgJHtwcm9qZWN0LmRhdGFzZXQuaW5kZXh9YCk7XG4gICAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gcmVtb3ZlUHJvamVjdChlLCBwcm9qZWN0LmRhdGFzZXQuaW5kZXgpKTtcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gYXNzaWduUHJvamVjdFRvRG9SZW1vdmVCdG5zKCkge1xuICAgIHByb2plY3RBcnJheS5mb3JFYWNoKGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICAgIHByb2plY3QudG9Eb3MuZm9yRWFjaChmdW5jdGlvbih0b0RvKSB7XG4gICAgICAgIGlmICh0b0RvICE9ICcnKSB7XG4gICAgICAgICAgbGV0IHRvRG9SZW1vdmVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10b2RvLXJlbW92ZScgKyBgJHtwcm9qZWN0LmluZGV4fWAgKyBgJHt0b0RvLmluZGV4fWApO1xuICAgICAgICAgIHRvRG9SZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gcmVtb3ZlUHJvamVjdFRvRG8oZSwgcHJvamVjdCwgdG9EbykpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVByb2plY3QoZSwgcHJvamVjdEluZGV4KSB7XG4gICAgcmVtb3ZlUHJvamVjdERPTShwcm9qZWN0SW5kZXgpO1xuICAgIHByb2plY3RBcnJheS5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcbiAgICByZWR1Y2VJbmRleChwcm9qZWN0QXJyYXksIHByb2plY3RJbmRleCk7XG4gICAgc2hvd1Byb2plY3RzKHByb2plY3RBcnJheSk7XG4gICAgYXNzaWduUHJvamVjdFRvRG9TdWJtaXRzKCk7XG4gICAgYXNzaWduUHJvamVjdFRvRG9SZW1vdmVCdG5zKCk7XG4gICAgYXNzaWduUHJvamVjdFJlbW92ZUJ0bnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVByb2plY3RUb0RvKGUsIHByb2plY3QsIHRvRG8pIHtcbiAgICByZW1vdmVQcm9qZWN0VG9Eb0RPTShwcm9qZWN0LmluZGV4LCB0b0RvLmluZGV4KTtcbiAgICBwcm9qZWN0LnRvRG9zLnNwbGljZSh0b0RvLmluZGV4LCAxKTtcbiAgICByZWR1Y2VJbmRleChwcm9qZWN0LnRvRG9zLCB0b0RvLmluZGV4KTtcbiAgICBzaG93UHJvamVjdHMocHJvamVjdEFycmF5KTtcbiAgICBhc3NpZ25Qcm9qZWN0VG9Eb1N1Ym1pdHMoKTtcbiAgICBhc3NpZ25Qcm9qZWN0VG9Eb1JlbW92ZUJ0bnMoKTtcbiAgICBhc3NpZ25Qcm9qZWN0UmVtb3ZlQnRucygpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVkdWNlSW5kZXgoYXJyYXksIHJlbW92ZWRJdGVtSW5kZXgpIHtcbiAgICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIGlmIChpdGVtLmluZGV4ID4gcmVtb3ZlZEl0ZW1JbmRleCkge1xuICAgICAgICBpdGVtLmluZGV4IC09IDE7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHByaW50QXJyYXkoKSB7XG4gICAgcHJvamVjdEFycmF5LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xuICAgIH0pO1xuICB9XG4gICAgXG4gIHJldHVybiB7IHByb2plY3RBcnJheSB9XG4gICAgXG59KSgpOyIsImV4cG9ydCB7IHNob3dUb0RvcywgcmVtb3ZlTm9uUHJvamVjdFRvRG8gfVxuXG5jb25zdCB0b0RvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tbGlzdCcpO1xuXG5mdW5jdGlvbiBzaG93VG9Eb3MoYXJyYXkpIHtcbiAgcmVzZXRUb0RvcygpO1xuICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICBjb25zdCB0b0RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9Eb0Rpdi5pZCA9ICd0b2RvLWl0ZW0nICsgYCR7aXRlbS5pbmRleH1gO1xuICAgIHRvRG9EaXYuY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtJyk7XG4gICAgdG9Eb0Rpdi5kYXRhc2V0LmluZGV4ID0gaXRlbS5pbmRleDtcblxuICAgIGNvbnN0IHRvRG9Db250ZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvRG9Db250ZW50cy5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbnRlbnQnKTtcblxuICAgIGNvbnN0IHRvRG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0b0RvVGl0bGUudGV4dENvbnRlbnQgPSBgJHtpdGVtLnRpdGxlfWA7XG4gICAgdG9Eb1RpdGxlLmNsYXNzTGlzdC5hZGQoYHByaW9yaXR5LSR7aXRlbS5wcmlvcml0eX1gKTtcblxuICAgIGNvbnN0IHRvRG9EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRvRG9EZXNjLnRleHRDb250ZW50ID0gYERlc2NyaXB0aW9uOiAke2l0ZW0uZGVzY3JpcHRpb259YDtcblxuICAgIGNvbnN0IHRvRG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRvRG9EYXRlLnRleHRDb250ZW50ID0gYER1ZSBieTogJHtpdGVtLmR1ZURhdGV9YDtcblxuICAgIGNvbnN0IHRvRG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwcmlvcml0eUNhcGl0YWxpemVkID0gaXRlbS5wcmlvcml0eVswXS50b1VwcGVyQ2FzZSgpICsgaXRlbS5wcmlvcml0eS5zbGljZSgxKTtcbiAgICB0b0RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7cHJpb3JpdHlDYXBpdGFsaXplZH1gO1xuXG4gICAgY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmVtb3ZlQnRuLmlkID0gJ3RvZG8tcmVtb3ZlJyArIGAke2l0ZW0uaW5kZXh9YDtcbiAgICByZW1vdmVCdG4uaW5uZXJUZXh0ID0gXCJYXCI7XG4gICAgcmVtb3ZlQnRuLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZS1idXR0b24nKTtcblxuICAgIHRvRG9Db250ZW50cy5hcHBlbmQodG9Eb1RpdGxlLCB0b0RvRGVzYywgdG9Eb0RhdGUsIHRvRG9Qcmlvcml0eSk7XG4gICAgdG9Eb0Rpdi5hcHBlbmQodG9Eb0NvbnRlbnRzLCByZW1vdmVCdG4pO1xuICAgIHRvRG9Db250YWluZXIuYXBwZW5kKHRvRG9EaXYpO1xuICB9KVxufVxuXG5mdW5jdGlvbiByZW1vdmVOb25Qcm9qZWN0VG9Ebyh0b0RvSW5kZXgpIHtcbiAgY29uc3QgdG9Eb0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWl0ZW0nICsgYCR7dG9Eb0luZGV4fWApO1xuICB0b0RvRGl2LnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiByZXNldFRvRG9zKCkge1xuICB0b0RvQ29udGFpbmVyLmlubmVyVGV4dCA9ICcnO1xufVxuIiwiZXhwb3J0IHsgY3JlYXRlVG9Eb0Zvcm0gfTtcblxuXG4gIGNvbnN0IHRleHRGaWVsZHNBcnJheSA9IFsndGl0bGUnLCAnZGVzY3JpcHRpb24nLCAnZHVlLWRhdGUnXTtcblxuICBmdW5jdGlvbiBjcmVhdGVUb0RvRm9ybShwcm9qZWN0Q29udGFpbmVyLCBwcm9qZWN0SW5kZXgpIHtcbiAgICBjb25zdCBuZXdGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIG5ld0Zvcm0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC10b2RvLWZvcm0nKTtcbiAgICBuZXdGb3JtLmRhdGFzZXQuaW5kZXggPSBwcm9qZWN0SW5kZXg7XG4gICAgbmV3Rm9ybS5pZCA9ICdwcm9qZWN0LXRvZG8tZm9ybScgKyBgJHtwcm9qZWN0SW5kZXh9YDtcbiAgICB0ZXh0RmllbGRzQXJyYXkuZm9yRWFjaChmdW5jdGlvbihmaWVsZCkge1xuICAgICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIHBhcmEuaW5uZXJUZXh0ID0gZmllbGRbMF0udG9VcHBlckNhc2UoKSArIGZpZWxkLnNsaWNlKDEpO1xuICAgICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBpbmZvLnR5cGUgPSAndGV4dCc7XG4gICAgICBpbmZvLmlkID0gJ3Byb2plY3QtdG9kbycgKyAnLScgKyBgJHtmaWVsZH1gICsgYCR7cHJvamVjdEluZGV4fWA7XG4gICAgICBpbmZvLm5hbWUgPSBgJHtmaWVsZH1gO1xuICAgICAgbmV3Rm9ybS5hcHBlbmQocGFyYSk7XG4gICAgICBuZXdGb3JtLmFwcGVuZChpbmZvKTtcbiAgICB9KVxuXG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJpb3JpdHlMYWJlbC5mb3IgPSAncHJvamVjdC10b2RvLXByaW9yaXR5JztcbiAgICBwcmlvcml0eUxhYmVsLmlubmVyVGV4dCA9ICdQcmlvcml0eSc7XG5cbiAgICBjb25zdCBwcmlvcml0eVR5cGVzID0gWydub25lJywgJ2hpZ2hlc3QnLCAnaGlnaCcsICdtaWRkbGUnLCAnbG93J107XG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBwcmlvcml0eVNlbGVjdC5pZCA9ICdwcm9qZWN0LXRvZG8tcHJpb3JpdHknO1xuICAgIHByaW9yaXR5U2VsZWN0Lm5hbWUgPSAncHJpb3JpdGllcyc7XG4gICAgcHJpb3JpdHlUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uKHR5cGUpIHtcbiAgICAgIGNvbnN0IHByaW9yaXR5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBwcmlvcml0eU9wdGlvbi52YWx1ZSA9IHR5cGU7XG4gICAgICBwcmlvcml0eU9wdGlvbi50ZXh0ID0gdHlwZVswXS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKTtcbiAgICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZChwcmlvcml0eU9wdGlvbik7XG4gICAgfSlcblxuICAgIG5ld0Zvcm0uYXBwZW5kKHByaW9yaXR5TGFiZWwsIHByaW9yaXR5U2VsZWN0KTtcblxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgc3VibWl0LnR5cGUgPSAnc3VibWl0JztcbiAgICBzdWJtaXQubmFtZSA9ICdzdWJtaXQnO1xuICAgIHN1Ym1pdC5pZCA9ICdwcm9qZWN0LXRvZG8tc3VibWl0JyArIGAke3Byb2plY3RJbmRleH1gO1xuICAgIHN1Ym1pdC5jbGFzc0xpc3QuYWRkKCdmb3JtLWJ1dHRvbicpO1xuICAgIG5ld0Zvcm0uYXBwZW5kKHN1Ym1pdCk7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQobmV3Rm9ybSk7XG4gIH0iLCJleHBvcnQgeyB0b0RvIH07XG5pbXBvcnQgeyByZW1vdmVOb25Qcm9qZWN0VG9Ebywgc2hvd1RvRG9zIH0gZnJvbSBcIi4vdG9kby1kb21cIjtcblxuY29uc3QgdG9EbyA9IChmdW5jdGlvbigpIHtcblxuICBjb25zdCB0b0RvQXJyYXkgPSBbXTtcblxuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1zdWJtaXQnKTtcbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYnVpbGRBbmRBZGRUb0RvKTtcblxuICBmdW5jdGlvbiB0b0RvRmFjdG9yeSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBpbmRleCwgcHJpb3JpdHkpIHtcbiAgICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGluZGV4LCBwcmlvcml0eSB9XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZEFuZEFkZFRvRG8oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0aXRsZVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tdGl0bGUnKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1kZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgIGNvbnN0IGR1ZVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZHVlLWRhdGUnKS52YWx1ZTtcbiAgICBjb25zdCBpbmRleCA9IHRvRG9BcnJheS5sZW5ndGg7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1wcmlvcml0eScpLnZhbHVlO1xuICAgIGNvbnN0IG5ld1RvRG8gPSB0b0RvRmFjdG9yeSh0aXRsZVZhbHVlLCBkZXNjVmFsdWUsIGR1ZVZhbHVlLCBpbmRleCwgcHJpb3JpdHkpO1xuICAgIHRvRG9BcnJheS5wdXNoKG5ld1RvRG8pO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWZvcm0nKS5yZXNldCgpO1xuICAgIHNob3dUb0Rvcyh0b0RvQXJyYXkpO1xuICAgIGFzc2lnblJlbW92ZUJ0bnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFzc2lnblJlbW92ZUJ0bnMoKSB7XG4gICAgY29uc3QgdG9Eb1BhcmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG8taXRlbScpO1xuICAgIHRvRG9QYXJhcy5mb3JFYWNoKGZ1bmN0aW9uKHRvRG8pIHtcbiAgICAgIGNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXJlbW92ZScgKyBgJHt0b0RvLmRhdGFzZXQuaW5kZXh9YCk7XG4gICAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gcmVtb3ZlVG9EbyhlLCB0b0RvLmRhdGFzZXQuaW5kZXgpKTtcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlVG9EbyhlLCB0b0RvSW5kZXgpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmVtb3ZlTm9uUHJvamVjdFRvRG8odG9Eb0luZGV4KTtcbiAgICB0b0RvQXJyYXkuc3BsaWNlKHRvRG9JbmRleCwgMSk7XG4gICAgcmVkdWNlSW5kZXgodG9Eb0FycmF5LCB0b0RvSW5kZXgpO1xuICAgIHNob3dUb0Rvcyh0b0RvQXJyYXkpO1xuICAgIGFzc2lnblJlbW92ZUJ0bnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZHVjZUluZGV4KGFycmF5LCByZW1vdmVkSXRlbUluZGV4KSB7XG4gICAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICBpZiAoaXRlbS5pbmRleCA+IHJlbW92ZWRJdGVtSW5kZXgpIHtcbiAgICAgICAgaXRlbS5pbmRleCAtPSAxO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBwcmludEFycmF5KCkge1xuICAgIHRvRG9BcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICBjb25zb2xlLmxvZyhpdGVtKTtcbiAgICB9KTtcbiAgfVxuICAgIFxuICByZXR1cm4geyB0b0RvQXJyYXksIHRvRG9GYWN0b3J5IH1cbiAgICBcbn0pKCk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgdG9EbyB9IGZyb20gJy4vbW9kdWxlcy90b2RvLWl0ZW1zL3RvZG8nO1xuaW1wb3J0IHsgcHJvamVjdCB9IGZyb20gJy4vbW9kdWxlcy9wcm9qZWN0cy9wcm9qZWN0JztcbmltcG9ydCB7IGZvcm1Ub2dnbGUgfSBmcm9tICcuL21vZHVsZXMvZm9ybS10b2dnbGUnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=