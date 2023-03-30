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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0px;\n  padding: 0px;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\np {\n  margin-bottom: 8px;\n  line-height: 1.3;\n}\n\n.content-container {\n  display: flex;\n  flex-direction: column;\n  max-width: 100vw;\n}\n\n.toggle-visibility {\n  display: none;\n}\n\n.nav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: sticky;\n  width: 100%;\n  margin: auto;\n  height: 56px;\n  top: 0px;\n  background-color: rgb(69, 70, 73);\n  color: white;\n}\n\n.nav-h3 {\n  padding-left: 25px;\n}\n\n.nav-link {\n  color: white;\n  text-decoration: none;\n  padding-right: 25px;\n}\n\n.nav-link:visited {\n  color: white;\n}\n\n.nav-link:hover {\n  color: rgba(102, 232, 255, 0.356);\n}\n\n.top-forms-container{\n  display: flex;\n  padding-top: 15px;\n}\n\n.form-div {\n  display: flex;\n  flex-direction: column;\n  margin: 0px 20px;\n}\n\n.input-title {\n  margin-top: 10px;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  max-width: calc(200px - 15px);\n}\n\n.form-button {\n  align-self: flex-end;\n  justify-self: flex-end;\n  width: 100px;\n  height: 25px;\n  padding: 2px;\n  background-color: rgb(255, 255, 255);\n  border: 1px solid rgb(3, 25, 92);\n  color: rgb(0, 0, 0);\n  font-weight: bold;\n  margin-top: 10px;\n}\n\n.form-button:hover {\n  background-color: rgba(73, 109, 219, 0.541);\n}\n\n.form-button:active {\n  background-color: rgba(0, 62, 250, 0.575);\n}\n\n.content {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  align-self: center;\n  min-width: calc(100% - 50px);\n  max-width: calc(100% - 72px);\n  min-height: calc(100vh - 112px);\n  padding: 0px 25px;\n  background-color: rgba(102, 232, 255, 0.356);\n}\n\nh2 {\n  margin: 15px 20px\n}\n\n.project-list, .todo-list {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-self: center;\n  align-items: center;\n  width: 100%;\n  border-top: 2px solid rgba(0, 217, 255, 0.767);\n}\n\n.project, .todo-item {\n  display: grid;\n  grid-template-rows: repeat(auto-fit, minmax(0.1fr, 1fr));\n  grid-template-columns: 1fr 0.05fr;\n  background-color: rgb(255, 255, 255);\n  border: 1px solid black;\n  margin: 15px 15px;\n  padding: 20px;\n  width: 90%;\n}\n\n.todo-content, .project-content {\n  word-wrap: break-word;\n  min-width: 180px;\n  max-width: 80%;\n}\n\n.remove-button {\n  grid-row: 1;\n  grid-column: 2;\n  justify-self: end;\n  background-color: rgb(255, 255, 255);\n  border: 1px solid rgb(3, 25, 92);\n  color: rgb(0, 0, 0);\n  font-weight: bold;\n  width: 20px;\n  height: 20px;\n  margin-top: 10px;\n}\n\n.remove-button:hover {\n  background-color: rgb(255, 0, 0);\n}\n\n.remove-button:active {\n  background-color: rgba(182, 36, 31, 0.808);\n}\n\n.project-todo-div{\n  display: flex;\n  flex-direction: column;\n  grid-row: 2;\n  min-width: 200px;\n  max-width: 90%;\n  margin: 5px 0px;\n  padding: 5px 0px;\n  border-top: 1px solid rgb(69, 70, 73);\n}\n\n.project-todo-item {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-top: 5px;\n  padding: 5px;\n  border-top: 1px dotted rgb(69, 70, 73);\n}\n\n.project-todo-form {\n  grid-row: 3;\n  grid-column: 1;\n  max-width: 200px;\n}\n\n.project-todo-button-container {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n}\n\n.strike-through {\n  text-decoration: line-through;\n}\n\n.priority-none {\n  font-weight: bold;\n}\n\n.priority-highest {\n  color: red;\n  font-weight: bold;\n}\n\n.priority-high {\n  color: orange;\n  font-weight: bold;\n}\n\n.priority-middle {\n  color: rgb(0, 173, 0);\n  font-weight: bold;\n}\n\n.priority-low {\n  color: blue;\n  font-weight: bold;\n}\n\n.footer {\n  display: flex;\n  align-items: center;\n  height: 56px;\n  background-color: rgb(69, 70, 73);\n  color: rgb(196, 196, 196);\n}\n\n.footer-p {\n  padding-left: 25px;\n}\n\n@media (max-width: 480px) {\n\n  .top-forms-container {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .project, .todo-item {\n    display: flex;\n    flex-direction: column;\n    margin: 15px 0px;\n    padding: 10px 12px;\n  }\n\n  .project-todo-item {\n    display: flex;\n    flex-direction: column;\n    padding: 0px;\n  }\n\n  .remove-button {\n    align-self: flex-end;\n  }\n\n  .form-button {\n    align-self: flex-end;\n  }\n  \n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0px;\n  padding: 0px;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\np {\n  margin-bottom: 8px;\n  line-height: 1.3;\n}\n\n.content-container {\n  display: flex;\n  flex-direction: column;\n  max-width: 100vw;\n}\n\n.toggle-visibility {\n  display: none;\n}\n\n.nav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: sticky;\n  width: 100%;\n  margin: auto;\n  height: 56px;\n  top: 0px;\n  background-color: rgb(69, 70, 73);\n  color: white;\n}\n\n.nav-h3 {\n  padding-left: 25px;\n}\n\n.nav-link {\n  color: white;\n  text-decoration: none;\n  padding-right: 25px;\n}\n\n.nav-link:visited {\n  color: white;\n}\n\n.nav-link:hover {\n  color: rgba(102, 232, 255, 0.356);\n}\n\n.top-forms-container{\n  display: flex;\n  padding-top: 15px;\n}\n\n.form-div {\n  display: flex;\n  flex-direction: column;\n  margin: 0px 20px;\n}\n\n.input-title {\n  margin-top: 10px;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  max-width: calc(200px - 15px);\n}\n\n.form-button {\n  align-self: flex-end;\n  justify-self: flex-end;\n  width: 100px;\n  height: 25px;\n  padding: 2px;\n  background-color: rgb(255, 255, 255);\n  border: 1px solid rgb(3, 25, 92);\n  color: rgb(0, 0, 0);\n  font-weight: bold;\n  margin-top: 10px;\n}\n\n.form-button:hover {\n  background-color: rgba(73, 109, 219, 0.541);\n}\n\n.form-button:active {\n  background-color: rgba(0, 62, 250, 0.575);\n}\n\n.content {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  align-self: center;\n  min-width: calc(100% - 50px);\n  max-width: calc(100% - 72px);\n  min-height: calc(100vh - 112px);\n  padding: 0px 25px;\n  background-color: rgba(102, 232, 255, 0.356);\n}\n\nh2 {\n  margin: 15px 20px\n}\n\n.project-list, .todo-list {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-self: center;\n  align-items: center;\n  width: 100%;\n  border-top: 2px solid rgba(0, 217, 255, 0.767);\n}\n\n.project, .todo-item {\n  display: grid;\n  grid-template-rows: repeat(auto-fit, minmax(0.1fr, 1fr));\n  grid-template-columns: 1fr 0.05fr;\n  background-color: rgb(255, 255, 255);\n  border: 1px solid black;\n  margin: 15px 15px;\n  padding: 20px;\n  width: 90%;\n}\n\n.todo-content, .project-content {\n  word-wrap: break-word;\n  min-width: 180px;\n  max-width: 80%;\n}\n\n.remove-button {\n  grid-row: 1;\n  grid-column: 2;\n  justify-self: end;\n  background-color: rgb(255, 255, 255);\n  border: 1px solid rgb(3, 25, 92);\n  color: rgb(0, 0, 0);\n  font-weight: bold;\n  width: 20px;\n  height: 20px;\n  margin-top: 10px;\n}\n\n.remove-button:hover {\n  background-color: rgb(255, 0, 0);\n}\n\n.remove-button:active {\n  background-color: rgba(182, 36, 31, 0.808);\n}\n\n.project-todo-div{\n  display: flex;\n  flex-direction: column;\n  grid-row: 2;\n  min-width: 200px;\n  max-width: 90%;\n  margin: 5px 0px;\n  padding: 5px 0px;\n  border-top: 1px solid rgb(69, 70, 73);\n}\n\n.project-todo-item {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-top: 5px;\n  padding: 5px;\n  border-top: 1px dotted rgb(69, 70, 73);\n}\n\n.project-todo-form {\n  grid-row: 3;\n  grid-column: 1;\n  max-width: 200px;\n}\n\n.project-todo-button-container {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n}\n\n.strike-through {\n  text-decoration: line-through;\n}\n\n.priority-none {\n  font-weight: bold;\n}\n\n.priority-highest {\n  color: red;\n  font-weight: bold;\n}\n\n.priority-high {\n  color: orange;\n  font-weight: bold;\n}\n\n.priority-middle {\n  color: rgb(0, 173, 0);\n  font-weight: bold;\n}\n\n.priority-low {\n  color: blue;\n  font-weight: bold;\n}\n\n.footer {\n  display: flex;\n  align-items: center;\n  height: 56px;\n  background-color: rgb(69, 70, 73);\n  color: rgb(196, 196, 196);\n}\n\n.footer-p {\n  padding-left: 25px;\n}\n\n@media (max-width: 480px) {\n\n  .top-forms-container {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .project, .todo-item {\n    display: flex;\n    flex-direction: column;\n    margin: 15px 0px;\n    padding: 10px 12px;\n  }\n\n  .project-todo-item {\n    display: flex;\n    flex-direction: column;\n    padding: 0px;\n  }\n\n  .remove-button {\n    align-self: flex-end;\n  }\n\n  .form-button {\n    align-self: flex-end;\n  }\n  \n}"],"sourceRoot":""}]);
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
/* harmony import */ var _strike_through__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../strike-through */ "./src/modules/strike-through.js");

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

    const projectCheckBox = document.createElement('input');
    projectCheckBox.classList.add('check-mark');
    projectCheckBox.setAttribute('type', 'checkbox');

    projectCheckBox.addEventListener('click', (e) => (0,_strike_through__WEBPACK_IMPORTED_MODULE_5__.strikeThrough)([projectTitle, projectDesc, projectDate, projectPriority]))

    const projectEditForm = (0,_project_edit_form__WEBPACK_IMPORTED_MODULE_1__.createProjectForm)(project, project.index);

    const showProjectEditButton = document.createElement('button');
    showProjectEditButton.id = 'project-edit-show' + `${project.index}`;
    showProjectEditButton.textContent = 'Edit Project';
    showProjectEditButton.classList.add('form-button');

    const hideProjectEditButton = document.createElement('button');
    hideProjectEditButton.id = 'project-edit-hide' + `${project.index}`;
    hideProjectEditButton.textContent = 'Hide Form';
    hideProjectEditButton.classList.add('form-button', 'toggle-visibility');
      
    projectContents.append(projectTitle, projectDesc, projectDate, projectPriority, projectCheckBox, projectEditForm);
    projectContainer.append(projectContents, projectRemoveBtn, showProjectEditButton, hideProjectEditButton);

    const toDoForm = (0,_project_todo_form__WEBPACK_IMPORTED_MODULE_0__.createToDoForm)(project.index);
    projectContainer.append(projectToDoDiv, toDoForm);

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

      const projectToDoCheckBox = document.createElement('input');
      projectToDoCheckBox.classList.add('check-mark');
      projectToDoCheckBox.setAttribute('type', 'checkbox');

      projectToDoCheckBox.addEventListener('click', (e) => (0,_strike_through__WEBPACK_IMPORTED_MODULE_5__.strikeThrough)([toDoTitle, toDoDesc, toDoDate, toDoPriority]))

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

      toDoContents.append(toDoTitle, toDoDesc, toDoDate, toDoPriority, projectToDoCheckBox, projectToDoEditForm);
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

/***/ "./src/modules/strike-through.js":
/*!***************************************!*\
  !*** ./src/modules/strike-through.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "strikeThrough": () => (/* binding */ strikeThrough)
/* harmony export */ });


const strikeThrough = function(containers = []) {
  containers.forEach(function(container) {
    if (container.classList.contains('strike-through')) {
      container.classList.remove('strike-through');
    } else {
      container.classList.add('strike-through');
    }
  });
} 

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
/* harmony import */ var _strike_through__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../strike-through */ "./src/modules/strike-through.js");

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

    const toDoCheckBox = document.createElement('input');
    toDoCheckBox.classList.add('check-mark');
    toDoCheckBox.setAttribute('type', 'checkbox');

    toDoCheckBox.addEventListener('click', (e) => (0,_strike_through__WEBPACK_IMPORTED_MODULE_3__.strikeThrough)([toDoTitle, toDoDesc, toDoDate, toDoPriority]))

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

    toDoContents.append(toDoTitle, toDoDesc, toDoDate, toDoPriority, toDoCheckBox, toDoEditForm);
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




window.onload = function() {
  _modules_todo_items_todo__WEBPACK_IMPORTED_MODULE_0__.toDo.toDoStorageLoad();
  _modules_projects_project__WEBPACK_IMPORTED_MODULE_1__.project.projectStorageLoad();
}

$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZm9ybS10b2dnbGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvbG9jYWwtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0cy9wcm9qZWN0LWRvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0cy9wcm9qZWN0LWVkaXQtZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0cy9wcm9qZWN0LXRvZG8tZWRpdC1mb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3RzL3Byb2plY3QtdG9kby1mb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3RzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvc3RyaWtlLXRocm91Z2guanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9kby1pdGVtcy90b2RvLWRvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90b2RvLWl0ZW1zL3RvZG8tZWRpdC1mb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RvZG8taXRlbXMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMHB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbnAge1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuMztcXG59XFxuXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG59XFxuXFxuLnRvZ2dsZS12aXNpYmlsaXR5IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IGF1dG87XFxuICBoZWlnaHQ6IDU2cHg7XFxuICB0b3A6IDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2OSwgNzAsIDczKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm5hdi1oMyB7XFxuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxufVxcblxcbi5uYXYtbGluayB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xcbn1cXG5cXG4ubmF2LWxpbms6dmlzaXRlZCB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5uYXYtbGluazpob3ZlciB7XFxuICBjb2xvcjogcmdiYSgxMDIsIDIzMiwgMjU1LCAwLjM1Nik7XFxufVxcblxcbi50b3AtZm9ybXMtY29udGFpbmVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xcbn1cXG5cXG4uZm9ybS1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDBweCAyMHB4O1xcbn1cXG5cXG4uaW5wdXQtdGl0bGUge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1heC13aWR0aDogY2FsYygyMDBweCAtIDE1cHgpO1xcbn1cXG5cXG4uZm9ybS1idXR0b24ge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgcGFkZGluZzogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDMsIDI1LCA5Mik7XFxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uZm9ybS1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3MywgMTA5LCAyMTksIDAuNTQxKTtcXG59XFxuXFxuLmZvcm0tYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDYyLCAyNTAsIDAuNTc1KTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtaW4td2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSA3MnB4KTtcXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTJweCk7XFxuICBwYWRkaW5nOiAwcHggMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAyLCAyMzIsIDI1NSwgMC4zNTYpO1xcbn1cXG5cXG5oMiB7XFxuICBtYXJnaW46IDE1cHggMjBweFxcbn1cXG5cXG4ucHJvamVjdC1saXN0LCAudG9kby1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEoMCwgMjE3LCAyNTUsIDAuNzY3KTtcXG59XFxuXFxuLnByb2plY3QsIC50b2RvLWl0ZW0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMC4xZnIsIDFmcikpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMC4wNWZyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBtYXJnaW46IDE1cHggMTVweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4udG9kby1jb250ZW50LCAucHJvamVjdC1jb250ZW50IHtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIG1pbi13aWR0aDogMTgwcHg7XFxuICBtYXgtd2lkdGg6IDgwJTtcXG59XFxuXFxuLnJlbW92ZS1idXR0b24ge1xcbiAgZ3JpZC1yb3c6IDE7XFxuICBncmlkLWNvbHVtbjogMjtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDMsIDI1LCA5Mik7XFxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5yZW1vdmUtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDApO1xcbn1cXG5cXG4ucmVtb3ZlLWJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODIsIDM2LCAzMSwgMC44MDgpO1xcbn1cXG5cXG4ucHJvamVjdC10b2RvLWRpdntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgbWF4LXdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDVweCAwcHg7XFxuICBwYWRkaW5nOiA1cHggMHB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYig2OSwgNzAsIDczKTtcXG59XFxuXFxuLnByb2plY3QtdG9kby1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IGRvdHRlZCByZ2IoNjksIDcwLCA3Myk7XFxufVxcblxcbi5wcm9qZWN0LXRvZG8tZm9ybSB7XFxuICBncmlkLXJvdzogMztcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgbWF4LXdpZHRoOiAyMDBweDtcXG59XFxuXFxuLnByb2plY3QtdG9kby1idXR0b24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc3RyaWtlLXRocm91Z2gge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5wcmlvcml0eS1ub25lIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucHJpb3JpdHktaGlnaGVzdCB7XFxuICBjb2xvcjogcmVkO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wcmlvcml0eS1oaWdoIHtcXG4gIGNvbG9yOiBvcmFuZ2U7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnByaW9yaXR5LW1pZGRsZSB7XFxuICBjb2xvcjogcmdiKDAsIDE3MywgMCk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnByaW9yaXR5LWxvdyB7XFxuICBjb2xvcjogYmx1ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA1NnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY5LCA3MCwgNzMpO1xcbiAgY29sb3I6IHJnYigxOTYsIDE5NiwgMTk2KTtcXG59XFxuXFxuLmZvb3Rlci1wIHtcXG4gIHBhZGRpbmctbGVmdDogMjVweDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuXFxuICAudG9wLWZvcm1zLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAucHJvamVjdCwgLnRvZG8taXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbjogMTVweCAwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LXRvZG8taXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gIH1cXG5cXG4gIC5yZW1vdmUtYnV0dG9uIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICB9XFxuXFxuICAuZm9ybS1idXR0b24ge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIH1cXG4gIFxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLFFBQVE7RUFDUixpQ0FBaUM7RUFDakMsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQixpQkFBaUI7RUFDakIsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLGFBQWE7RUFDYix3REFBd0Q7RUFDeEQsaUNBQWlDO0VBQ2pDLG9DQUFvQztFQUNwQyx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixvQ0FBb0M7RUFDcEMsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLFlBQVk7RUFDWixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUU7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxvQkFBb0I7RUFDdEI7O0FBRUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5wIHtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XFxufVxcblxcbi5jb250ZW50LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1heC13aWR0aDogMTAwdnc7XFxufVxcblxcbi50b2dnbGUtdmlzaWJpbGl0eSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgaGVpZ2h0OiA1NnB4O1xcbiAgdG9wOiAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjksIDcwLCA3Myk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5uYXYtaDMge1xcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbn1cXG5cXG4ubmF2LWxpbmsge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgcGFkZGluZy1yaWdodDogMjVweDtcXG59XFxuXFxuLm5hdi1saW5rOnZpc2l0ZWQge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubmF2LWxpbms6aG92ZXIge1xcbiAgY29sb3I6IHJnYmEoMTAyLCAyMzIsIDI1NSwgMC4zNTYpO1xcbn1cXG5cXG4udG9wLWZvcm1zLWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nLXRvcDogMTVweDtcXG59XFxuXFxuLmZvcm0tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiAwcHggMjBweDtcXG59XFxuXFxuLmlucHV0LXRpdGxlIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXgtd2lkdGg6IGNhbGMoMjAwcHggLSAxNXB4KTtcXG59XFxuXFxuLmZvcm0tYnV0dG9uIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigzLCAyNSwgOTIpO1xcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmZvcm0tYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzMsIDEwOSwgMjE5LCAwLjU0MSk7XFxufVxcblxcbi5mb3JtLWJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCA2MiwgMjUwLCAwLjU3NSk7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgbWluLXdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KTtcXG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gNzJweCk7XFxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTEycHgpO1xcbiAgcGFkZGluZzogMHB4IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwMiwgMjMyLCAyNTUsIDAuMzU2KTtcXG59XFxuXFxuaDIge1xcbiAgbWFyZ2luOiAxNXB4IDIwcHhcXG59XFxuXFxuLnByb2plY3QtbGlzdCwgLnRvZG8tbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKDAsIDIxNywgMjU1LCAwLjc2Nyk7XFxufVxcblxcbi5wcm9qZWN0LCAudG9kby1pdGVtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDAuMWZyLCAxZnIpKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDAuMDVmcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgbWFyZ2luOiAxNXB4IDE1cHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLnRvZG8tY29udGVudCwgLnByb2plY3QtY29udGVudCB7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICBtaW4td2lkdGg6IDE4MHB4O1xcbiAgbWF4LXdpZHRoOiA4MCU7XFxufVxcblxcbi5yZW1vdmUtYnV0dG9uIHtcXG4gIGdyaWQtcm93OiAxO1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigzLCAyNSwgOTIpO1xcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4ucmVtb3ZlLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXG59XFxuXFxuLnJlbW92ZS1idXR0b246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgyLCAzNiwgMzEsIDAuODA4KTtcXG59XFxuXFxuLnByb2plY3QtdG9kby1kaXZ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdyaWQtcm93OiAyO1xcbiAgbWluLXdpZHRoOiAyMDBweDtcXG4gIG1heC13aWR0aDogOTAlO1xcbiAgbWFyZ2luOiA1cHggMHB4O1xcbiAgcGFkZGluZzogNXB4IDBweDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoNjksIDcwLCA3Myk7XFxufVxcblxcbi5wcm9qZWN0LXRvZG8taXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgcmdiKDY5LCA3MCwgNzMpO1xcbn1cXG5cXG4ucHJvamVjdC10b2RvLWZvcm0ge1xcbiAgZ3JpZC1yb3c6IDM7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIG1heC13aWR0aDogMjAwcHg7XFxufVxcblxcbi5wcm9qZWN0LXRvZG8tYnV0dG9uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnN0cmlrZS10aHJvdWdoIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4ucHJpb3JpdHktbm9uZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnByaW9yaXR5LWhpZ2hlc3Qge1xcbiAgY29sb3I6IHJlZDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucHJpb3JpdHktaGlnaCB7XFxuICBjb2xvcjogb3JhbmdlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wcmlvcml0eS1taWRkbGUge1xcbiAgY29sb3I6IHJnYigwLCAxNzMsIDApO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wcmlvcml0eS1sb3cge1xcbiAgY29sb3I6IGJsdWU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2OSwgNzAsIDczKTtcXG4gIGNvbG9yOiByZ2IoMTk2LCAxOTYsIDE5Nik7XFxufVxcblxcbi5mb290ZXItcCB7XFxuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcblxcbiAgLnRvcC1mb3Jtcy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLnByb2plY3QsIC50b2RvLWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDE1cHggMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XFxuICB9XFxuXFxuICAucHJvamVjdC10b2RvLWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICB9XFxuXFxuICAucmVtb3ZlLWJ1dHRvbiB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgfVxcblxcbiAgLmZvcm0tYnV0dG9uIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICB9XFxuICBcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCB7IGZvcm1Ub2dnbGUgfTtcblxuY29uc3QgZm9ybVRvZ2dsZSA9IChmdW5jdGlvbigpIHtcblxuICAgIGNvbnN0IHNob3dUb0RvRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93LXRvZG8nKTtcbiAgICBjb25zdCBoaWRlVG9Eb0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlkZS10b2RvJyk7XG4gICAgY29uc3QgdG9Eb0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1mb3JtJylcbiAgICBjb25zdCBzaG93UHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvdy1wcm9qZWN0Jyk7XG4gICAgY29uc3QgaGlkZVByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpZGUtcHJvamVjdCcpO1xuICAgIGNvbnN0IFByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtZm9ybScpXG4gICAgc2hvd1RvRG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHNob3dGb3JtKHNob3dUb0RvRm9ybSwgaGlkZVRvRG9Gb3JtLCB0b0RvRm9ybSwgZSkpO1xuICAgIGhpZGVUb0RvRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBoaWRlRm9ybShzaG93VG9Eb0Zvcm0sIGhpZGVUb0RvRm9ybSwgdG9Eb0Zvcm0sIGUpKTtcbiAgICBzaG93UHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gc2hvd0Zvcm0oc2hvd1Byb2plY3RGb3JtLCBoaWRlUHJvamVjdEZvcm0sIFByb2plY3RGb3JtLCBlKSk7XG4gICAgaGlkZVByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGhpZGVGb3JtKHNob3dQcm9qZWN0Rm9ybSwgaGlkZVByb2plY3RGb3JtLCBQcm9qZWN0Rm9ybSwgZSkpO1xuICAgIC8vVGhlIHNob3cgYW5kIGhpZGUgYnV0dG9ucyBmb3IgcHJvamVjdCB0b2RvcywgYW5kIGVkaXRzIGZvciBib3RoIHByb2plY3RzIGFuZCB0b2RvcyBhcmUgbG9jYXRlZCBpbiB0aGVpciByZXNwZWN0aXZlIGRvbSBmaWxlXG5cbiAgICBmdW5jdGlvbiBzaG93Rm9ybShzaG93QnRuLCBoaWRlQnRuLCBmb3JtKSB7XG4gICAgICAgIHNob3dCdG4uY2xhc3NMaXN0LmFkZCgndG9nZ2xlLXZpc2liaWxpdHknKTtcbiAgICAgICAgaGlkZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCd0b2dnbGUtdmlzaWJpbGl0eScpO1xuICAgICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ3RvZ2dsZS12aXNpYmlsaXR5Jyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUZvcm0oc2hvd0J0biwgaGlkZUJ0biwgZm9ybSkge1xuICAgICAgICBoaWRlQnRuLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZS12aXNpYmlsaXR5Jyk7XG4gICAgICAgIHNob3dCdG4uY2xhc3NMaXN0LnJlbW92ZSgndG9nZ2xlLXZpc2liaWxpdHknKTtcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtdmlzaWJpbGl0eScpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHNob3dGb3JtLCBoaWRlRm9ybSB9XG59KSgpOyIsImV4cG9ydCB7IHNhdmVQcm9qZWN0c1RvU3RvcmFnZSwgc2F2ZVRvRG9zVG9TdG9yYWdlLCByZXRyaWV2ZVNhdmVkUHJvamVjdHMsIHJldHJpZXZlU2F2ZWRUb0RvcywgY2xlYXJTdG9yYWdlIH1cblxuZnVuY3Rpb24gc2F2ZVByb2plY3RzVG9TdG9yYWdlKHByb2plY3RBcnJheSkge1xuICBjb25zdCBwcm9qZWN0c1RvU2F2ZSA9IEpTT04uc3RyaW5naWZ5KHByb2plY3RBcnJheSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIHByb2plY3RzVG9TYXZlKTtcbn1cblxuZnVuY3Rpb24gc2F2ZVRvRG9zVG9TdG9yYWdlKHRvZG9BcnJheSkge1xuICBjb25zdCB0b2Rvc1RvU2F2ZSA9IEpTT04uc3RyaW5naWZ5KHRvZG9BcnJheSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIHRvZG9zVG9TYXZlKTtcbn1cblxuZnVuY3Rpb24gcmV0cmlldmVTYXZlZFByb2plY3RzKCkge1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc3Qgc2F2ZWRQcm9qZWN0QXJyYXkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKTtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShzYXZlZFByb2plY3RBcnJheSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmV0cmlldmVTYXZlZFRvRG9zKCkge1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc3Qgc2F2ZWRUb0RvQXJyYXkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKTtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShzYXZlZFRvRG9BcnJheSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBjbGVhclN0b3JhZ2UoKSB7XG4gIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xufVxuIiwiZXhwb3J0IHsgc2hvd1Byb2plY3RzLCByZW1vdmVQcm9qZWN0RE9NLCByZW1vdmVQcm9qZWN0VG9Eb0RPTSB9XG5pbXBvcnQgeyBjcmVhdGVUb0RvRm9ybSB9IGZyb20gXCIuL3Byb2plY3QtdG9kby1mb3JtXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0Rm9ybSB9IGZyb20gXCIuL3Byb2plY3QtZWRpdC1mb3JtXCI7XG5pbXBvcnQgeyBlZGl0UHJvamVjdFRvRG9Gb3JtIH0gZnJvbSBcIi4vcHJvamVjdC10b2RvLWVkaXQtZm9ybVwiO1xuaW1wb3J0IHsgZm9ybVRvZ2dsZSB9IGZyb20gXCIuLi9mb3JtLXRvZ2dsZVwiO1xuaW1wb3J0IHsgcHJvamVjdCBhcyBwcm9qZWN0RmlsZX0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgc3RyaWtlVGhyb3VnaCB9IGZyb20gXCIuLi9zdHJpa2UtdGhyb3VnaFwiO1xuXG5jb25zdCBhbGxQcm9qZWN0c0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWxpc3QnKTtcblxuZnVuY3Rpb24gc2hvd1Byb2plY3RzKGFycmF5KSB7XG4gIHJlc2V0UHJvamVjdHMoKTtcbiAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbihwcm9qZWN0KSB7XG5cbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdENvbnRhaW5lci5kYXRhc2V0LmluZGV4ID0gcHJvamVjdC5pbmRleDtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmlkID0gJ3Byb2plY3QnICsgYCR7cHJvamVjdC5pbmRleH1gO1xuICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuXG4gICAgY29uc3QgcHJvamVjdFRvRG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0VG9Eb0Rpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRvZG8tZGl2Jyk7XG4gICAgcHJvamVjdFRvRG9EaXYuaW5uZXJUZXh0ID0gYFRvIERvczpcXG5gO1xuXG4gICAgY29uc3QgcHJvamVjdFJlbW92ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3RSZW1vdmVCdG4uaWQgPSAncHJvamVjdC1yZW1vdmUnICtgJHtwcm9qZWN0LmluZGV4fWA7XG4gICAgcHJvamVjdFJlbW92ZUJ0bi5pbm5lclRleHQgPSAnWCc7XG4gICAgcHJvamVjdFJlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKCdyZW1vdmUtYnV0dG9uJyk7XG5cbiAgICBjb25zdCBwcm9qZWN0Q29udGVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0Q29udGVudHMuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250ZW50Jyk7XG5cbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gYCR7cHJvamVjdC50aXRsZX1gO1xuICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKGBwcmlvcml0eS0ke3Byb2plY3QucHJpb3JpdHl9YCk7XG5cbiAgICBjb25zdCBwcm9qZWN0RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcm9qZWN0RGVzYy50ZXh0Q29udGVudCA9IGAke3Byb2plY3QuZGVzY3JpcHRpb259XFxuYDtcblxuICAgIGNvbnN0IHByb2plY3REYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGRhdGUgPSBwcm9qZWN0LmR1ZURhdGU7XG4gICAgcHJvamVjdERhdGUudGV4dENvbnRlbnQgPSBgRHVlIGJ5OiAke2RhdGV9YDtcblxuICAgIGNvbnN0IHByb2plY3RQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwcm9qZWN0UHJpb3JpdHlDYXBpdGFsaXplZCA9IHByb2plY3QucHJpb3JpdHlbMF0udG9VcHBlckNhc2UoKSArIHByb2plY3QucHJpb3JpdHkuc2xpY2UoMSk7XG4gICAgcHJvamVjdFByaW9yaXR5LnRleHRDb250ZW50ID0gYFByaW9yaXR5OiAke3Byb2plY3RQcmlvcml0eUNhcGl0YWxpemVkfWA7XG5cbiAgICBjb25zdCBwcm9qZWN0Q2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByb2plY3RDaGVja0JveC5jbGFzc0xpc3QuYWRkKCdjaGVjay1tYXJrJyk7XG4gICAgcHJvamVjdENoZWNrQm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuXG4gICAgcHJvamVjdENoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHN0cmlrZVRocm91Z2goW3Byb2plY3RUaXRsZSwgcHJvamVjdERlc2MsIHByb2plY3REYXRlLCBwcm9qZWN0UHJpb3JpdHldKSlcblxuICAgIGNvbnN0IHByb2plY3RFZGl0Rm9ybSA9IGNyZWF0ZVByb2plY3RGb3JtKHByb2plY3QsIHByb2plY3QuaW5kZXgpO1xuXG4gICAgY29uc3Qgc2hvd1Byb2plY3RFZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc2hvd1Byb2plY3RFZGl0QnV0dG9uLmlkID0gJ3Byb2plY3QtZWRpdC1zaG93JyArIGAke3Byb2plY3QuaW5kZXh9YDtcbiAgICBzaG93UHJvamVjdEVkaXRCdXR0b24udGV4dENvbnRlbnQgPSAnRWRpdCBQcm9qZWN0JztcbiAgICBzaG93UHJvamVjdEVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZm9ybS1idXR0b24nKTtcblxuICAgIGNvbnN0IGhpZGVQcm9qZWN0RWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGhpZGVQcm9qZWN0RWRpdEJ1dHRvbi5pZCA9ICdwcm9qZWN0LWVkaXQtaGlkZScgKyBgJHtwcm9qZWN0LmluZGV4fWA7XG4gICAgaGlkZVByb2plY3RFZGl0QnV0dG9uLnRleHRDb250ZW50ID0gJ0hpZGUgRm9ybSc7XG4gICAgaGlkZVByb2plY3RFZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYnV0dG9uJywgJ3RvZ2dsZS12aXNpYmlsaXR5Jyk7XG4gICAgICBcbiAgICBwcm9qZWN0Q29udGVudHMuYXBwZW5kKHByb2plY3RUaXRsZSwgcHJvamVjdERlc2MsIHByb2plY3REYXRlLCBwcm9qZWN0UHJpb3JpdHksIHByb2plY3RDaGVja0JveCwgcHJvamVjdEVkaXRGb3JtKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0Q29udGVudHMsIHByb2plY3RSZW1vdmVCdG4sIHNob3dQcm9qZWN0RWRpdEJ1dHRvbiwgaGlkZVByb2plY3RFZGl0QnV0dG9uKTtcblxuICAgIGNvbnN0IHRvRG9Gb3JtID0gY3JlYXRlVG9Eb0Zvcm0ocHJvamVjdC5pbmRleCk7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQocHJvamVjdFRvRG9EaXYsIHRvRG9Gb3JtKTtcblxuICAgIGNvbnN0IHNob3dQcm9qZWN0VG9Eb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHNob3dQcm9qZWN0VG9Eb0J1dHRvbi5pZCA9ICdwcm9qZWN0LXRvZG8tc2hvdycgKyBgJHtwcm9qZWN0LmluZGV4fWA7XG4gICAgc2hvd1Byb2plY3RUb0RvQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYnV0dG9uJyk7XG4gICAgc2hvd1Byb2plY3RUb0RvQnV0dG9uLnRleHRDb250ZW50ID0gJ05ldyBUbyBEbyc7XG5cbiAgICBjb25zdCBoaWRlUHJvamVjdFRvRG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBoaWRlUHJvamVjdFRvRG9CdXR0b24uaWQgPSAncHJvamVjdC10b2RvLWhpZGUnICsgYCR7cHJvamVjdC5pbmRleH1gO1xuICAgIGhpZGVQcm9qZWN0VG9Eb0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdmb3JtLWJ1dHRvbicsICd0b2dnbGUtdmlzaWJpbGl0eScpO1xuICAgIGhpZGVQcm9qZWN0VG9Eb0J1dHRvbi50ZXh0Q29udGVudCA9ICdIaWRlIEZvcm0nO1xuXG4gICAgc2hvd1Byb2plY3RFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGZvcm1Ub2dnbGUuc2hvd0Zvcm0oc2hvd1Byb2plY3RFZGl0QnV0dG9uLCBoaWRlUHJvamVjdEVkaXRCdXR0b24sIHByb2plY3RFZGl0Rm9ybSwgZSkpO1xuICAgIHNob3dQcm9qZWN0RWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBwcm9qZWN0RmlsZS5hc3NpZ25Qcm9qZWN0RWRpdEJ0bnMocHJvamVjdCkpO1xuICAgIGhpZGVQcm9qZWN0RWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBmb3JtVG9nZ2xlLmhpZGVGb3JtKHNob3dQcm9qZWN0RWRpdEJ1dHRvbiwgaGlkZVByb2plY3RFZGl0QnV0dG9uLCBwcm9qZWN0RWRpdEZvcm0sIGUpKTtcblxuICAgIHNob3dQcm9qZWN0VG9Eb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBmb3JtVG9nZ2xlLnNob3dGb3JtKHNob3dQcm9qZWN0VG9Eb0J1dHRvbiwgaGlkZVByb2plY3RUb0RvQnV0dG9uLCB0b0RvRm9ybSwgZSkpO1xuICAgIGhpZGVQcm9qZWN0VG9Eb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBmb3JtVG9nZ2xlLmhpZGVGb3JtKHNob3dQcm9qZWN0VG9Eb0J1dHRvbiwgaGlkZVByb2plY3RUb0RvQnV0dG9uLCB0b0RvRm9ybSwgZSkpO1xuICAgICAgXG4gICAgcHJvamVjdC50b0Rvcy5mb3JFYWNoKGZ1bmN0aW9uKHRvRG8pIHtcbiAgICAgIGNvbnN0IHRvRG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRvRG9EaXYuaWQgPSAncHJvamVjdC10b2RvLWRpdicgKyBgJHtwcm9qZWN0LmluZGV4fWAgKyBgJHt0b0RvLmluZGV4fWA7XG4gICAgICB0b0RvRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdG9kby1pdGVtJyk7XG4gICAgICB0b0RvRGl2LmRhdGFzZXQuaW5kZXggPSBgJHtwcm9qZWN0LmluZGV4fSR7dG9Eby5pbmRleH1gO1xuXG4gICAgICBjb25zdCB0b0RvQ29udGVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRvRG9Db250ZW50cy5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbnRlbnQnKTtcblxuICAgICAgY29uc3QgcHJvamVjdFRvRG9CdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHByb2plY3RUb0RvQnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdG9kby1idXR0b24tY29udGFpbmVyJyk7XG5cbiAgICAgIGNvbnN0IHRvRG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIHRvRG9UaXRsZS50ZXh0Q29udGVudCA9IGAke3RvRG8udGl0bGV9YDtcbiAgICAgIHRvRG9UaXRsZS5jbGFzc0xpc3QuYWRkKGBwcmlvcml0eS0ke3RvRG8ucHJpb3JpdHl9YCk7XG5cbiAgICAgIGNvbnN0IHRvRG9EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgdG9Eb0Rlc2MudGV4dENvbnRlbnQgPSBgJHt0b0RvLmRlc2NyaXB0aW9ufWA7XG5cbiAgICAgIGNvbnN0IHRvRG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgdG9Eb0RhdGUudGV4dENvbnRlbnQgPSBgRHVlIGJ5OiAke3RvRG8uZHVlRGF0ZX1gO1xuXG4gICAgICBjb25zdCB0b0RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBjb25zdCBwcmlvcml0eUNhcGl0YWxpemVkID0gdG9Eby5wcmlvcml0eVswXS50b1VwcGVyQ2FzZSgpICsgdG9Eby5wcmlvcml0eS5zbGljZSgxKTtcbiAgICAgIHRvRG9Qcmlvcml0eS50ZXh0Q29udGVudCA9IGBQcmlvcml0eTogJHtwcmlvcml0eUNhcGl0YWxpemVkfWA7XG5cbiAgICAgIGNvbnN0IHByb2plY3RUb0RvQ2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgcHJvamVjdFRvRG9DaGVja0JveC5jbGFzc0xpc3QuYWRkKCdjaGVjay1tYXJrJyk7XG4gICAgICBwcm9qZWN0VG9Eb0NoZWNrQm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuXG4gICAgICBwcm9qZWN0VG9Eb0NoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHN0cmlrZVRocm91Z2goW3RvRG9UaXRsZSwgdG9Eb0Rlc2MsIHRvRG9EYXRlLCB0b0RvUHJpb3JpdHldKSlcblxuICAgICAgY29uc3QgdG9Eb1JlbW92ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgdG9Eb1JlbW92ZUJ0bi5pZCA9ICdwcm9qZWN0LXRvZG8tcmVtb3ZlJyArIGAke3Byb2plY3QuaW5kZXh9YCArIGAke3RvRG8uaW5kZXh9YDtcbiAgICAgIHRvRG9SZW1vdmVCdG4uY2xhc3NMaXN0LmFkZCgncmVtb3ZlLWJ1dHRvbicpO1xuICAgICAgdG9Eb1JlbW92ZUJ0bi5pbm5lclRleHQgPSAnWCc7XG5cbiAgICAgIGNvbnN0IHByb2plY3RUb0RvRWRpdEZvcm0gPSBlZGl0UHJvamVjdFRvRG9Gb3JtKHRvRG8uaW5kZXgsIHByb2plY3QpO1xuXG4gICAgICBjb25zdCBzaG93UHJvamVjdFRvRG9FZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBzaG93UHJvamVjdFRvRG9FZGl0QnV0dG9uLmlkID0gJ3RvZG8tZWRpdC1zaG93JyArIGAke3Byb2plY3QuaW5kZXh9YCArIGAke3RvRG8uaW5kZXh9YDtcbiAgICAgIHNob3dQcm9qZWN0VG9Eb0VkaXRCdXR0b24udGV4dENvbnRlbnQgPSAnRWRpdCBUbyBEbyc7XG4gICAgICBzaG93UHJvamVjdFRvRG9FZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYnV0dG9uJyk7XG5cbiAgICAgIGNvbnN0IGhpZGVQcm9qZWN0VG9Eb0VkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGhpZGVQcm9qZWN0VG9Eb0VkaXRCdXR0b24uaWQgPSAndG9kby1lZGl0LWhpZGUnICsgYCR7cHJvamVjdC5pbmRleH1gICsgYCR7dG9Eby5pbmRleH1gO1xuICAgICAgaGlkZVByb2plY3RUb0RvRWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdIaWRlIEZvcm0nO1xuICAgICAgaGlkZVByb2plY3RUb0RvRWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmb3JtLWJ1dHRvbicsICd0b2dnbGUtdmlzaWJpbGl0eScpO1xuXG4gICAgICBzaG93UHJvamVjdFRvRG9FZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGZvcm1Ub2dnbGUuc2hvd0Zvcm0oc2hvd1Byb2plY3RUb0RvRWRpdEJ1dHRvbiwgaGlkZVByb2plY3RUb0RvRWRpdEJ1dHRvbiwgcHJvamVjdFRvRG9FZGl0Rm9ybSwgZSkpO1xuICAgICAgc2hvd1Byb2plY3RUb0RvRWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBwcm9qZWN0RmlsZS5hc3NpZ25Qcm9qZWN0VG9Eb0VkaXRCdG5zKHRvRG8sIHByb2plY3QpKTtcbiAgICAgIGhpZGVQcm9qZWN0VG9Eb0VkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZm9ybVRvZ2dsZS5oaWRlRm9ybShzaG93UHJvamVjdFRvRG9FZGl0QnV0dG9uLCBoaWRlUHJvamVjdFRvRG9FZGl0QnV0dG9uLCBwcm9qZWN0VG9Eb0VkaXRGb3JtLCBlKSk7XG5cbiAgICAgIHRvRG9Db250ZW50cy5hcHBlbmQodG9Eb1RpdGxlLCB0b0RvRGVzYywgdG9Eb0RhdGUsIHRvRG9Qcmlvcml0eSwgcHJvamVjdFRvRG9DaGVja0JveCwgcHJvamVjdFRvRG9FZGl0Rm9ybSk7XG4gICAgICBwcm9qZWN0VG9Eb0J0bkNvbnRhaW5lci5hcHBlbmQodG9Eb1JlbW92ZUJ0biwgc2hvd1Byb2plY3RUb0RvRWRpdEJ1dHRvbiwgaGlkZVByb2plY3RUb0RvRWRpdEJ1dHRvbilcbiAgICAgIHRvRG9EaXYuYXBwZW5kKHRvRG9Db250ZW50cywgcHJvamVjdFRvRG9CdG5Db250YWluZXIpO1xuICAgICAgcHJvamVjdFRvRG9EaXYuYXBwZW5kKHRvRG9EaXYpO1xuICAgIH0pXG5cbiAgICBwcm9qZWN0VG9Eb0Rpdi5hcHBlbmQoc2hvd1Byb2plY3RUb0RvQnV0dG9uLCBoaWRlUHJvamVjdFRvRG9CdXR0b24pO1xuICAgIGFsbFByb2plY3RzRGl2LmFwcGVuZChwcm9qZWN0Q29udGFpbmVyKTtcbiAgfSlcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdERPTShwcm9qZWN0SW5kZXgpIHtcbiAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0JyArIGAke3Byb2plY3RJbmRleH1gKTtcbiAgcHJvamVjdERpdi5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdFRvRG9ET00ocHJvamVjdEluZGV4LCB0b0RvSW5kZXgpIHtcbiAgY29uc3QgdG9Eb0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXRvZG8tZGl2JyArIGAke3Byb2plY3RJbmRleH1gICsgYCR7dG9Eb0luZGV4fWApO1xuICB0b0RvRGl2LnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiByZXNldFByb2plY3RzKCkge1xuICBhbGxQcm9qZWN0c0Rpdi5pbm5lclRleHQgPSAnJztcbn1cbiIsImV4cG9ydCB7IGNyZWF0ZVByb2plY3RGb3JtIH07XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdEZvcm0ocHJvamVjdCwgcHJvamVjdEluZGV4KSB7XG4gICAgY29uc3QgbmV3Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBuZXdGb3JtLmNsYXNzTGlzdC5hZGQoXCJ0b2dnbGUtdmlzaWJpbGl0eVwiKTtcbiAgICBuZXdGb3JtLmRhdGFzZXQuaW5kZXggPSBwcm9qZWN0SW5kZXg7XG4gICAgbmV3Rm9ybS5pZCA9ICdwcm9qZWN0LWVkaXQtZm9ybScgKyBgJHtwcm9qZWN0SW5kZXh9YDtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUuaWQgPSAncHJvamVjdC10aXRsZScgKyBgJHtwcm9qZWN0SW5kZXh9YDtcbiAgICB0aXRsZUxhYmVsLmlubmVyVGV4dCA9ICdUaXRsZTogJ1xuICAgIHRpdGxlLnZhbHVlID0gcHJvamVjdC50aXRsZTtcbiAgICBuZXdGb3JtLmFwcGVuZCh0aXRsZUxhYmVsLCB0aXRsZSk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgY29uc3QgZGVzY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY3JpcHRpb24uaWQgPSAncHJvamVjdC1kZXNjcmlwdGlvbicgKyBgJHtwcm9qZWN0SW5kZXh9YDtcbiAgICBkZXNjTGFiZWwuaW5uZXJUZXh0ID0gJ0Rlc2NyaXB0aW9uOiAnO1xuICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gcHJvamVjdC5kZXNjcmlwdGlvbjtcbiAgICBuZXdGb3JtLmFwcGVuZChkZXNjTGFiZWwsIGRlc2NyaXB0aW9uKTtcblxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGR1ZURhdGUuaWQgPSAncHJvamVjdC1kdWUtZGF0ZScgKyBgJHtwcm9qZWN0SW5kZXh9YDtcbiAgICBkYXRlTGFiZWwuaW5uZXJUZXh0ID0gJ0R1ZSBieTogJ1xuICAgIGR1ZURhdGUudHlwZSA9ICdkYXRldGltZS1sb2NhbCc7XG4gICAgbmV3Rm9ybS5hcHBlbmQoZGF0ZUxhYmVsLCBkdWVEYXRlKTtcblxuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByaW9yaXR5TGFiZWwuZm9yID0gJ3Byb2plY3QtcHJpb3JpdHknO1xuICAgIHByaW9yaXR5TGFiZWwuaW5uZXJUZXh0ID0gJ1ByaW9yaXR5JztcblxuICAgIGNvbnN0IHByaW9yaXR5VHlwZXMgPSBbJ25vbmUnLCAnaGlnaGVzdCcsICdoaWdoJywgJ21pZGRsZScsICdsb3cnXTtcbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHByaW9yaXR5U2VsZWN0LmlkID0gJ3Byb2plY3QtcHJpb3JpdHknICsgYCR7cHJvamVjdEluZGV4fWA7XG4gICAgcHJpb3JpdHlTZWxlY3QubmFtZSA9ICdwcmlvcml0aWVzJztcbiAgICBwcmlvcml0eVR5cGVzLmZvckVhY2goZnVuY3Rpb24odHlwZSkge1xuICAgICAgY29uc3QgcHJpb3JpdHlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIHByaW9yaXR5T3B0aW9uLnZhbHVlID0gdHlwZTtcbiAgICAgIHByaW9yaXR5T3B0aW9uLnRleHQgPSB0eXBlWzBdLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpO1xuICAgICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kKHByaW9yaXR5T3B0aW9uKTtcbiAgICB9KVxuICAgIHByaW9yaXR5U2VsZWN0LnZhbHVlID0gcHJvamVjdC5wcmlvcml0eTtcblxuICAgIG5ld0Zvcm0uYXBwZW5kKGR1ZURhdGUsIHByaW9yaXR5TGFiZWwsIHByaW9yaXR5U2VsZWN0KTtcblxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgc3VibWl0LnR5cGUgPSAnc3VibWl0JztcbiAgICBzdWJtaXQubmFtZSA9ICdzdWJtaXQnO1xuICAgIHN1Ym1pdC5pZCA9ICdwcm9qZWN0LXN1Ym1pdC1lZGl0JyArIGAke3Byb2plY3RJbmRleH1gO1xuICAgIHN1Ym1pdC5jbGFzc0xpc3QuYWRkKCdmb3JtLWJ1dHRvbicpO1xuICAgIG5ld0Zvcm0uYXBwZW5kKHN1Ym1pdCk7XG5cbiAgICByZXR1cm4gbmV3Rm9ybTtcbiAgfSIsImV4cG9ydCB7IGVkaXRQcm9qZWN0VG9Eb0Zvcm0gfTtcblxuICBmdW5jdGlvbiBlZGl0UHJvamVjdFRvRG9Gb3JtKHByb2plY3RUb0RvSW5kZXgsIHByb2plY3QpIHtcblxuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3QuaW5kZXg7XG4gICAgY29uc3QgbmV3Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBuZXdGb3JtLmNsYXNzTGlzdC5hZGQoXCJ0b2dnbGUtdmlzaWJpbGl0eVwiKTtcbiAgICBuZXdGb3JtLmRhdGFzZXQuaW5kZXggPSBwcm9qZWN0VG9Eb0luZGV4O1xuICAgIG5ld0Zvcm0uaWQgPSAncHJvamVjdC10b2RvLWVkaXQtZm9ybScgKyBgJHtwcm9qZWN0SW5kZXh9YCArIGAke3Byb2plY3RUb0RvSW5kZXh9YDtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUuaWQgPSAncHJvamVjdC10b2RvLXRpdGxlJyArIGAke3Byb2plY3RJbmRleH1gICsgYCR7cHJvamVjdFRvRG9JbmRleH1gO1xuICAgIHRpdGxlTGFiZWwuaW5uZXJUZXh0ID0gJ1RpdGxlOiAnXG4gICAgdGl0bGUudmFsdWUgPSBwcm9qZWN0LnRvRG9zW3Byb2plY3RUb0RvSW5kZXhdLnRpdGxlO1xuICAgIG5ld0Zvcm0uYXBwZW5kKHRpdGxlTGFiZWwsIHRpdGxlKTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBjb25zdCBkZXNjTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjcmlwdGlvbi5pZCA9ICdwcm9qZWN0LXRvZG8tZGVzY3JpcHRpb24nICtgJHtwcm9qZWN0SW5kZXh9YCArICBgJHtwcm9qZWN0VG9Eb0luZGV4fWA7XG4gICAgZGVzY0xhYmVsLmlubmVyVGV4dCA9ICdUaXRsZTogJztcbiAgICBkZXNjcmlwdGlvbi52YWx1ZSA9IHByb2plY3QudG9Eb3NbcHJvamVjdFRvRG9JbmRleF0uZGVzY3JpcHRpb247XG4gICAgbmV3Rm9ybS5hcHBlbmQoZGVzY0xhYmVsLCBkZXNjcmlwdGlvbik7XG5cbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkdWVEYXRlLmlkID0gJ3Byb2plY3QtdG9kby1kdWUtZGF0ZScgK2Ake3Byb2plY3RJbmRleH1gICsgIGAke3Byb2plY3RUb0RvSW5kZXh9YDtcbiAgICBkYXRlTGFiZWwuaW5uZXJUZXh0ID0gJ0R1ZSBieTogJ1xuICAgIGR1ZURhdGUudHlwZSA9ICdkYXRldGltZS1sb2NhbCc7XG4gICAgbmV3Rm9ybS5hcHBlbmQoZGF0ZUxhYmVsLCBkdWVEYXRlKTtcblxuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByaW9yaXR5TGFiZWwuZm9yID0gJ3Byb2plY3QtdG9kby1wcmlvcml0eScgK2Ake3Byb2plY3RJbmRleH1gICsgIGAke3Byb2plY3RUb0RvSW5kZXh9YDtcbiAgICBwcmlvcml0eUxhYmVsLmlubmVyVGV4dCA9ICdQcmlvcml0eSc7XG5cbiAgICBjb25zdCBwcmlvcml0eVR5cGVzID0gWydub25lJywgJ2hpZ2hlc3QnLCAnaGlnaCcsICdtaWRkbGUnLCAnbG93J107XG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBwcmlvcml0eVNlbGVjdC5pZCA9ICdwcm9qZWN0LXRvZG8tcHJpb3JpdHknICtgJHtwcm9qZWN0SW5kZXh9YCArICBgJHtwcm9qZWN0VG9Eb0luZGV4fWA7XG4gICAgcHJpb3JpdHlTZWxlY3QubmFtZSA9ICdwcmlvcml0aWVzJztcbiAgICBwcmlvcml0eVR5cGVzLmZvckVhY2goZnVuY3Rpb24odHlwZSkge1xuICAgICAgY29uc3QgcHJpb3JpdHlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIHByaW9yaXR5T3B0aW9uLnZhbHVlID0gdHlwZTtcbiAgICAgIHByaW9yaXR5T3B0aW9uLnRleHQgPSB0eXBlWzBdLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpO1xuICAgICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kKHByaW9yaXR5T3B0aW9uKTtcbiAgICB9KVxuICAgIHByaW9yaXR5U2VsZWN0LnZhbHVlID0gcHJvamVjdC50b0Rvc1twcm9qZWN0VG9Eb0luZGV4XS5wcmlvcml0eTtcblxuICAgIG5ld0Zvcm0uYXBwZW5kKGR1ZURhdGUsIHByaW9yaXR5TGFiZWwsIHByaW9yaXR5U2VsZWN0KTtcblxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgc3VibWl0LnR5cGUgPSAnc3VibWl0JztcbiAgICBzdWJtaXQubmFtZSA9ICdzdWJtaXQnO1xuICAgIHN1Ym1pdC5pZCA9ICdwcm9qZWN0LXRvZG8tc3VibWl0LWVkaXQnICsgYCR7cHJvamVjdEluZGV4fWAgKyAgYCR7cHJvamVjdFRvRG9JbmRleH1gO1xuICAgIHN1Ym1pdC5jbGFzc0xpc3QuYWRkKCdmb3JtLWJ1dHRvbicpO1xuICAgIG5ld0Zvcm0uYXBwZW5kKHN1Ym1pdCk7XG5cbiAgICByZXR1cm4gbmV3Rm9ybTtcbiAgfSIsImV4cG9ydCB7IGNyZWF0ZVRvRG9Gb3JtIH07XG5cblxuICBjb25zdCB0ZXh0RmllbGRzQXJyYXkgPSBbJ3RpdGxlJywgJ2Rlc2NyaXB0aW9uJ107XG5cbiAgZnVuY3Rpb24gY3JlYXRlVG9Eb0Zvcm0ocHJvamVjdEluZGV4KSB7XG4gICAgY29uc3QgbmV3Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBuZXdGb3JtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRvZG8tZm9ybVwiLCBcInRvZ2dsZS12aXNpYmlsaXR5XCIpO1xuICAgIG5ld0Zvcm0uZGF0YXNldC5pbmRleCA9IHByb2plY3RJbmRleDtcbiAgICBuZXdGb3JtLmlkID0gJ3Byb2plY3QtdG9kby1mb3JtJyArIGAke3Byb2plY3RJbmRleH1gO1xuXG4gICAgdGV4dEZpZWxkc0FycmF5LmZvckVhY2goZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgIGNvbnN0IGZpZWxkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGZpZWxkTGFiZWwuaW5uZXJUZXh0ID0gZmllbGRbMF0udG9VcHBlckNhc2UoKSArIGZpZWxkLnNsaWNlKDEpO1xuICAgICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICBpbmZvLmlkID0gJ3Byb2plY3QtdG9kbycgKyAnLScgKyBgJHtmaWVsZH1gICsgYCR7cHJvamVjdEluZGV4fWA7XG4gICAgICBpbmZvLm5hbWUgPSBgJHtmaWVsZH1gO1xuICAgICAgbmV3Rm9ybS5hcHBlbmQoZmllbGRMYWJlbCk7XG4gICAgICBuZXdGb3JtLmFwcGVuZChpbmZvKTtcbiAgICB9KVxuXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHVlRGF0ZS5pZCA9ICdwcm9qZWN0LXRvZG8tZHVlLWRhdGUnICsgYCR7cHJvamVjdEluZGV4fWA7XG4gICAgZGF0ZUxhYmVsLmlubmVyVGV4dCA9ICdEdWUgYnk6ICdcbiAgICBkdWVEYXRlLnR5cGUgPSAnZGF0ZXRpbWUtbG9jYWwnO1xuICAgIG5ld0Zvcm0uYXBwZW5kKGRhdGVMYWJlbCwgZHVlRGF0ZSk7XG5cbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwcmlvcml0eUxhYmVsLmZvciA9ICdwcm9qZWN0LXRvZG8tcHJpb3JpdHknO1xuICAgIHByaW9yaXR5TGFiZWwuaW5uZXJUZXh0ID0gJ1ByaW9yaXR5JztcblxuICAgIGNvbnN0IHByaW9yaXR5VHlwZXMgPSBbJ25vbmUnLCAnaGlnaGVzdCcsICdoaWdoJywgJ21pZGRsZScsICdsb3cnXTtcbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHByaW9yaXR5U2VsZWN0LmlkID0gJ3Byb2plY3QtdG9kby1wcmlvcml0eSc7XG4gICAgcHJpb3JpdHlTZWxlY3QubmFtZSA9ICdwcmlvcml0aWVzJztcbiAgICBwcmlvcml0eVR5cGVzLmZvckVhY2goZnVuY3Rpb24odHlwZSkge1xuICAgICAgY29uc3QgcHJpb3JpdHlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIHByaW9yaXR5T3B0aW9uLnZhbHVlID0gdHlwZTtcbiAgICAgIHByaW9yaXR5T3B0aW9uLnRleHQgPSB0eXBlWzBdLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpO1xuICAgICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kKHByaW9yaXR5T3B0aW9uKTtcbiAgICB9KVxuXG4gICAgbmV3Rm9ybS5hcHBlbmQoZHVlRGF0ZSwgcHJpb3JpdHlMYWJlbCwgcHJpb3JpdHlTZWxlY3QpO1xuXG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBzdWJtaXQudHlwZSA9ICdzdWJtaXQnO1xuICAgIHN1Ym1pdC5uYW1lID0gJ3N1Ym1pdCc7XG4gICAgc3VibWl0LmlkID0gJ3Byb2plY3QtdG9kby1zdWJtaXQnICsgYCR7cHJvamVjdEluZGV4fWA7XG4gICAgc3VibWl0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYnV0dG9uJyk7XG4gICAgbmV3Rm9ybS5hcHBlbmQoc3VibWl0KTtcblxuICAgIHJldHVybiBuZXdGb3JtO1xuICB9IiwiZXhwb3J0IHsgcHJvamVjdCB9O1xuaW1wb3J0IHsgc2hvd1Byb2plY3RzLCByZW1vdmVQcm9qZWN0RE9NLCByZW1vdmVQcm9qZWN0VG9Eb0RPTSB9IGZyb20gXCIuL3Byb2plY3QtZG9tXCI7XG5pbXBvcnQgeyB0b0RvIH0gZnJvbSBcIi4uL3RvZG8taXRlbXMvdG9kb1wiO1xuaW1wb3J0IHsgc2F2ZVByb2plY3RzVG9TdG9yYWdlLCByZXRyaWV2ZVNhdmVkUHJvamVjdHMgfSBmcm9tIFwiLi4vbG9jYWwtc3RvcmFnZVwiO1xuXG5jb25zdCBwcm9qZWN0ID0gKGZ1bmN0aW9uKCkge1xuXG4gIGxldCBwcm9qZWN0QXJyYXkgPSBbXTtcblxuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1zdWJtaXQnKTtcbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYnVpbGRBbmRBZGRQcm9qZWN0KTtcblxuICBmdW5jdGlvbiBwcm9qZWN0U3RvcmFnZUxvYWQoKSB7XG4gICAgY29uc3Qgc2F2ZWRQcm9qZWN0T2JqZWN0ID0gcmV0cmlldmVTYXZlZFByb2plY3RzKCk7XG4gICAgaWYoc2F2ZWRQcm9qZWN0T2JqZWN0KSB7XG4gICAgICBzYXZlZFByb2plY3RPYmplY3QuZm9yRWFjaChmdW5jdGlvbihzYXZlZFByb2plY3QpIHtcbiAgICAgICAgY29uc29sZS5sb2coc2F2ZWRQcm9qZWN0KTtcbiAgICAgICAgcHJvamVjdEFycmF5LnB1c2goc2F2ZWRQcm9qZWN0KTtcbiAgICAgIH0pO1xuICAgICAgc2hvd1Byb2plY3RzKHByb2plY3RBcnJheSk7XG4gICAgICBhc3NpZ25Qcm9qZWN0VG9Eb1N1Ym1pdHMoKTtcbiAgICAgIGFzc2lnblByb2plY3RSZW1vdmVCdG5zKCk7XG4gICAgICBhc3NpZ25Qcm9qZWN0VG9Eb1JlbW92ZUJ0bnMoKTtcbiAgICAgIHNhdmVQcm9qZWN0c1RvU3RvcmFnZShwcm9qZWN0QXJyYXkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2plY3RGYWN0b3J5ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGluZGV4LCBwcmlvcml0eSwgdG9Eb3MgPSBbXSkge1xuICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgaW5kZXgsIHByaW9yaXR5LCB0b0RvcyB9XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZEFuZEFkZFByb2plY3QoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0aXRsZVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdGl0bGUnKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1kZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgIGNvbnN0IGRhdGVPcHRpb25zID0geyBkYXRlU3R5bGU6IFwiZnVsbFwiLCB0aW1lU3R5bGU6IFwic2hvcnRcIn07XG4gICAgY29uc3QgZHVlVmFsdWUgPSBuZXcgRGF0ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1kdWUtZGF0ZScpLnZhbHVlKS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIGRhdGVPcHRpb25zKTtcbiAgICBjb25zdCBpbmRleCA9IHByb2plY3RBcnJheS5sZW5ndGg7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1wcmlvcml0eScpLnZhbHVlO1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0RmFjdG9yeSh0aXRsZVZhbHVlLCBkZXNjVmFsdWUsIGR1ZVZhbHVlLCBpbmRleCwgcHJpb3JpdHkpO1xuICAgIHByb2plY3RBcnJheS5wdXNoKG5ld1Byb2plY3QpO1xuICAgIFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWZvcm0nKS5yZXNldCgpO1xuICAgIHNob3dQcm9qZWN0cyhwcm9qZWN0QXJyYXkpO1xuICAgIGFzc2lnblByb2plY3RUb0RvU3VibWl0cygpO1xuICAgIGFzc2lnblByb2plY3RSZW1vdmVCdG5zKCk7XG4gICAgYXNzaWduUHJvamVjdFRvRG9SZW1vdmVCdG5zKCk7XG4gICAgc2F2ZVByb2plY3RzVG9TdG9yYWdlKHByb2plY3RBcnJheSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KGUsIHByb2plY3RJbmRleCkge1xuICAgIHJlbW92ZVByb2plY3RET00ocHJvamVjdEluZGV4KTtcbiAgICBwcm9qZWN0QXJyYXkuc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XG4gICAgcmVkdWNlSW5kZXgocHJvamVjdEFycmF5LCBwcm9qZWN0SW5kZXgpO1xuICAgIHNob3dQcm9qZWN0cyhwcm9qZWN0QXJyYXkpO1xuICAgIGFzc2lnblByb2plY3RUb0RvU3VibWl0cygpO1xuICAgIGFzc2lnblByb2plY3RUb0RvUmVtb3ZlQnRucygpO1xuICAgIGFzc2lnblByb2plY3RSZW1vdmVCdG5zKCk7XG4gICAgc2F2ZVByb2plY3RzVG9TdG9yYWdlKHByb2plY3RBcnJheSk7XG4gIH1cblxuICBmdW5jdGlvbiBlZGl0UHJvamVjdChlLCBwcm9qZWN0KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRpdGxlVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10aXRsZScgKyBgJHtwcm9qZWN0LmluZGV4fWApLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWRlc2NyaXB0aW9uJyArIGAke3Byb2plY3QuaW5kZXh9YCkudmFsdWU7XG4gICAgY29uc3QgZHVlVmFsdWUgPSBuZXcgRGF0ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1kdWUtZGF0ZScgKyBgJHtwcm9qZWN0LmluZGV4fWApLnZhbHVlKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXByaW9yaXR5JyArIGAke3Byb2plY3QuaW5kZXh9YCkudmFsdWU7XG4gICAgcHJvamVjdC50aXRsZSA9IHRpdGxlVmFsdWU7XG4gICAgcHJvamVjdC5kZXNjcmlwdGlvbiA9IGRlc2NWYWx1ZTtcbiAgICBwcm9qZWN0LmR1ZURhdGUgPSBkdWVWYWx1ZTtcbiAgICBwcm9qZWN0LnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgc2hvd1Byb2plY3RzKHByb2plY3RBcnJheSk7XG4gICAgYXNzaWduUHJvamVjdFRvRG9TdWJtaXRzKCk7XG4gICAgYXNzaWduUHJvamVjdFRvRG9SZW1vdmVCdG5zKCk7XG4gICAgYXNzaWduUHJvamVjdFJlbW92ZUJ0bnMoKTtcbiAgICBzYXZlUHJvamVjdHNUb1N0b3JhZ2UocHJvamVjdEFycmF5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFzc2lnblByb2plY3RUb0RvU3VibWl0cygpIHtcbiAgICBjb25zdCBwcm9qZWN0VG9Eb0Zvcm1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtdG9kby1mb3JtJyk7XG4gICAgcHJvamVjdFRvRG9Gb3Jtcy5mb3JFYWNoKGZ1bmN0aW9uKGZvcm0pIHtcbiAgICAgIGxldCBwcm9qZWN0SW5kZXggPSBmb3JtLmRhdGFzZXQuaW5kZXg7XG4gICAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10b2RvLXN1Ym1pdCcgKyBgJHtwcm9qZWN0SW5kZXh9YCk7XG4gICAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gYWRkUHJvamVjdFRvRG8oZSwgcHJvamVjdEluZGV4KSk7XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGFzc2lnblByb2plY3RSZW1vdmVCdG5zKCkge1xuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpO1xuICAgIHByb2plY3REaXYuZm9yRWFjaChmdW5jdGlvbihwcm9qZWN0KSB7XG4gICAgICBjb25zdCByZW1vdmVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1yZW1vdmUnICsgYCR7cHJvamVjdC5kYXRhc2V0LmluZGV4fWApO1xuICAgICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHJlbW92ZVByb2plY3QoZSwgcHJvamVjdC5kYXRhc2V0LmluZGV4KSk7XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGFzc2lnblByb2plY3RFZGl0QnRucyhwcm9qZWN0KSB7XG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXN1Ym1pdC1lZGl0JyArIGAke3Byb2plY3QuaW5kZXh9YCk7XG4gICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBlZGl0UHJvamVjdChlLCBwcm9qZWN0KSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRQcm9qZWN0VG9EbyhlLCBwcm9qZWN0SW5kZXgpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdEFycmF5W3Byb2plY3RJbmRleF07XG4gICAgICBjb25zdCB0aXRsZVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdG9kby10aXRsZScrYCR7cHJvamVjdEluZGV4fWApLnZhbHVlO1xuICAgICAgY29uc3QgZGVzY1ZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdG9kby1kZXNjcmlwdGlvbicrYCR7cHJvamVjdEluZGV4fWApLnZhbHVlO1xuICAgICAgY29uc3QgZGF0ZU9wdGlvbnMgPSB7IGRhdGVTdHlsZTogXCJmdWxsXCIsIHRpbWVTdHlsZTogXCJzaG9ydFwifTtcbiAgICAgIGNvbnN0IGR1ZVZhbHVlID0gbmV3IERhdGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdG9kby1kdWUtZGF0ZScrYCR7cHJvamVjdEluZGV4fWApLnZhbHVlKS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIGRhdGVPcHRpb25zKTtcbiAgICAgIGNvbnN0IGluZGV4ID0gY3VycmVudFByb2plY3QudG9Eb3MubGVuZ3RoO1xuICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10b2RvLXByaW9yaXR5JykudmFsdWU7XG4gICAgICBjb25zdCBuZXdUb0RvID0gdG9Eby50b0RvRmFjdG9yeSh0aXRsZVZhbHVlLCBkZXNjVmFsdWUsIGR1ZVZhbHVlLCBpbmRleCwgcHJpb3JpdHkpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdG9kby1mb3JtJytgJHtwcm9qZWN0SW5kZXh9YCkucmVzZXQoKTtcbiAgICAgIGN1cnJlbnRQcm9qZWN0LnRvRG9zLnB1c2gobmV3VG9Ebyk7XG4gICAgICBzaG93UHJvamVjdHMocHJvamVjdEFycmF5KTtcbiAgICAgIGFzc2lnblByb2plY3RUb0RvU3VibWl0cygpO1xuICAgICAgYXNzaWduUHJvamVjdFRvRG9SZW1vdmVCdG5zKCk7XG4gICAgICBhc3NpZ25Qcm9qZWN0UmVtb3ZlQnRucygpO1xuICAgICAgc2F2ZVByb2plY3RzVG9TdG9yYWdlKHByb2plY3RBcnJheSk7XG4gIH1cblxuICBmdW5jdGlvbiBlZGl0UHJvamVjdFRvRG8oZSwgdG9kbywgcHJvamVjdCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0aXRsZVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdG9kby10aXRsZScgKyBgJHtwcm9qZWN0LmluZGV4fWAgKyAgYCR7dG9kby5pbmRleH1gKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10b2RvLWRlc2NyaXB0aW9uJyArIGAke3Byb2plY3QuaW5kZXh9YCArICBgJHt0b2RvLmluZGV4fWApLnZhbHVlO1xuICAgIGNvbnN0IGR1ZVZhbHVlID0gbmV3IERhdGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdG9kby1kdWUtZGF0ZScgKyBgJHtwcm9qZWN0LmluZGV4fWAgKyAgYCR7dG9kby5pbmRleH1gKS52YWx1ZSk7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10b2RvLXByaW9yaXR5JyArIGAke3Byb2plY3QuaW5kZXh9YCArICBgJHt0b2RvLmluZGV4fWApLnZhbHVlO1xuICAgIHRvZG8udGl0bGUgPSB0aXRsZVZhbHVlO1xuICAgIHRvZG8uZGVzY3JpcHRpb24gPSBkZXNjVmFsdWU7XG4gICAgdG9kby5kdWVEYXRlID0gZHVlVmFsdWU7XG4gICAgdG9kby5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHNob3dQcm9qZWN0cyhwcm9qZWN0QXJyYXkpO1xuICAgIGFzc2lnblByb2plY3RUb0RvU3VibWl0cygpO1xuICAgIGFzc2lnblByb2plY3RUb0RvUmVtb3ZlQnRucygpO1xuICAgIGFzc2lnblByb2plY3RSZW1vdmVCdG5zKCk7XG4gICAgc2F2ZVByb2plY3RzVG9TdG9yYWdlKHByb2plY3RBcnJheSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVQcm9qZWN0VG9EbyhlLCBwcm9qZWN0LCB0b0RvKSB7XG4gICAgcmVtb3ZlUHJvamVjdFRvRG9ET00ocHJvamVjdC5pbmRleCwgdG9Eby5pbmRleCk7XG4gICAgcHJvamVjdC50b0Rvcy5zcGxpY2UodG9Eby5pbmRleCwgMSk7XG4gICAgcmVkdWNlSW5kZXgocHJvamVjdC50b0RvcywgdG9Eby5pbmRleCk7XG4gICAgc2hvd1Byb2plY3RzKHByb2plY3RBcnJheSk7XG4gICAgYXNzaWduUHJvamVjdFRvRG9TdWJtaXRzKCk7XG4gICAgYXNzaWduUHJvamVjdFRvRG9SZW1vdmVCdG5zKCk7XG4gICAgYXNzaWduUHJvamVjdFJlbW92ZUJ0bnMoKTtcbiAgICBzYXZlUHJvamVjdHNUb1N0b3JhZ2UocHJvamVjdEFycmF5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFzc2lnblByb2plY3RUb0RvUmVtb3ZlQnRucygpIHtcbiAgICBwcm9qZWN0QXJyYXkuZm9yRWFjaChmdW5jdGlvbihwcm9qZWN0KSB7XG4gICAgICBwcm9qZWN0LnRvRG9zLmZvckVhY2goZnVuY3Rpb24odG9Ebykge1xuICAgICAgICBpZiAodG9EbyAhPSAnJykge1xuICAgICAgICAgIGxldCB0b0RvUmVtb3ZlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdG9kby1yZW1vdmUnICsgYCR7cHJvamVjdC5pbmRleH1gICsgYCR7dG9Eby5pbmRleH1gKTtcbiAgICAgICAgICB0b0RvUmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHJlbW92ZVByb2plY3RUb0RvKGUsIHByb2plY3QsIHRvRG8pKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBhc3NpZ25Qcm9qZWN0VG9Eb0VkaXRCdG5zKHRvRG8sIHByb2plY3QpIHtcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdG9kby1zdWJtaXQtZWRpdCcgKyBgJHtwcm9qZWN0LmluZGV4fWAgKyBgJHt0b0RvLmluZGV4fWApO1xuICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZWRpdFByb2plY3RUb0RvKGUsIHRvRG8sIHByb2plY3QpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZHVjZUluZGV4KGFycmF5LCByZW1vdmVkSXRlbUluZGV4KSB7XG4gICAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICBpZiAoaXRlbS5pbmRleCA+IHJlbW92ZWRJdGVtSW5kZXgpIHtcbiAgICAgICAgaXRlbS5pbmRleCAtPSAxO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgICBcbiAgcmV0dXJuIHsgcHJvamVjdEFycmF5LCBhc3NpZ25Qcm9qZWN0RWRpdEJ0bnMsIGFzc2lnblByb2plY3RUb0RvRWRpdEJ0bnMsIHByb2plY3RTdG9yYWdlTG9hZCB9XG4gICAgXG59KSgpOyIsImV4cG9ydCB7IHN0cmlrZVRocm91Z2ggfTtcblxuY29uc3Qgc3RyaWtlVGhyb3VnaCA9IGZ1bmN0aW9uKGNvbnRhaW5lcnMgPSBbXSkge1xuICBjb250YWluZXJzLmZvckVhY2goZnVuY3Rpb24oY29udGFpbmVyKSB7XG4gICAgaWYgKGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3N0cmlrZS10aHJvdWdoJykpIHtcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdzdHJpa2UtdGhyb3VnaCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3RyaWtlLXRocm91Z2gnKTtcbiAgICB9XG4gIH0pO1xufSAiLCJleHBvcnQgeyBzaG93VG9Eb3MsIHJlbW92ZU5vblByb2plY3RUb0RvIH1cbmltcG9ydCB7IHRvRG8gYXMgdG9Eb0ZpbGUgfSBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgeyBlZGl0VG9Eb0Zvcm0gfSBmcm9tIFwiLi90b2RvLWVkaXQtZm9ybVwiO1xuaW1wb3J0IHsgZm9ybVRvZ2dsZSB9IGZyb20gXCIuLi9mb3JtLXRvZ2dsZVwiO1xuaW1wb3J0IHsgc3RyaWtlVGhyb3VnaCB9IGZyb20gXCIuLi9zdHJpa2UtdGhyb3VnaFwiO1xuXG5jb25zdCB0b0RvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tbGlzdCcpO1xuXG5mdW5jdGlvbiBzaG93VG9Eb3MoYXJyYXkpIHtcbiAgcmVzZXRUb0RvcygpO1xuICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICBjb25zdCB0b0RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9Eb0Rpdi5pZCA9ICd0b2RvLWl0ZW0nICsgYCR7aXRlbS5pbmRleH1gO1xuICAgIHRvRG9EaXYuY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtJyk7XG4gICAgdG9Eb0Rpdi5kYXRhc2V0LmluZGV4ID0gaXRlbS5pbmRleDtcblxuICAgIGNvbnN0IHRvRG9Db250ZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvRG9Db250ZW50cy5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbnRlbnQnKTtcblxuICAgIGNvbnN0IHRvRG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0b0RvVGl0bGUudGV4dENvbnRlbnQgPSBgJHtpdGVtLnRpdGxlfWA7XG4gICAgdG9Eb1RpdGxlLmNsYXNzTGlzdC5hZGQoYHByaW9yaXR5LSR7aXRlbS5wcmlvcml0eX1gKTtcblxuICAgIGNvbnN0IHRvRG9EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRvRG9EZXNjLnRleHRDb250ZW50ID0gYCR7aXRlbS5kZXNjcmlwdGlvbn1gO1xuXG4gICAgY29uc3QgdG9Eb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdG9Eb0RhdGUudGV4dENvbnRlbnQgPSBgRHVlIGJ5OiAke2l0ZW0uZHVlRGF0ZX1gO1xuXG4gICAgY29uc3QgdG9Eb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHByaW9yaXR5Q2FwaXRhbGl6ZWQgPSBpdGVtLnByaW9yaXR5WzBdLnRvVXBwZXJDYXNlKCkgKyBpdGVtLnByaW9yaXR5LnNsaWNlKDEpO1xuICAgIHRvRG9Qcmlvcml0eS50ZXh0Q29udGVudCA9IGBQcmlvcml0eTogJHtwcmlvcml0eUNhcGl0YWxpemVkfWA7XG5cbiAgICBjb25zdCB0b0RvQ2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvRG9DaGVja0JveC5jbGFzc0xpc3QuYWRkKCdjaGVjay1tYXJrJyk7XG4gICAgdG9Eb0NoZWNrQm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuXG4gICAgdG9Eb0NoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHN0cmlrZVRocm91Z2goW3RvRG9UaXRsZSwgdG9Eb0Rlc2MsIHRvRG9EYXRlLCB0b0RvUHJpb3JpdHldKSlcblxuICAgIGNvbnN0IHRvRG9FZGl0Rm9ybSA9IGVkaXRUb0RvRm9ybShpdGVtLCBpdGVtLmluZGV4KTtcblxuICAgIGNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHJlbW92ZUJ0bi5pZCA9ICd0b2RvLXJlbW92ZScgKyBgJHtpdGVtLmluZGV4fWA7XG4gICAgcmVtb3ZlQnRuLmlubmVyVGV4dCA9IFwiWFwiO1xuICAgIHJlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKCdyZW1vdmUtYnV0dG9uJyk7XG5cbiAgICBjb25zdCBzaG93RWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHNob3dFZGl0QnV0dG9uLmlkID0gJ3RvZG8tZWRpdC1zaG93JyArIGAke2l0ZW0uaW5kZXh9YDtcbiAgICBzaG93RWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdFZGl0IFRvIERvJztcbiAgICBzaG93RWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmb3JtLWJ1dHRvbicpO1xuXG4gICAgY29uc3QgaGlkZUVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBoaWRlRWRpdEJ1dHRvbi5pZCA9ICd0b2RvLWVkaXQtaGlkZScgKyBgJHtpdGVtLmluZGV4fWA7XG4gICAgaGlkZUVkaXRCdXR0b24udGV4dENvbnRlbnQgPSAnSGlkZSBGb3JtJztcbiAgICBoaWRlRWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmb3JtLWJ1dHRvbicsICd0b2dnbGUtdmlzaWJpbGl0eScpO1xuXG4gICAgc2hvd0VkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZm9ybVRvZ2dsZS5zaG93Rm9ybShzaG93RWRpdEJ1dHRvbiwgaGlkZUVkaXRCdXR0b24sIHRvRG9FZGl0Rm9ybSwgZSkpO1xuICAgIHNob3dFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHRvRG9GaWxlLmFzc2lnblRvRG9FZGl0QnRucyhpdGVtKSk7XG4gICAgaGlkZUVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZm9ybVRvZ2dsZS5oaWRlRm9ybShzaG93RWRpdEJ1dHRvbiwgaGlkZUVkaXRCdXR0b24sIHRvRG9FZGl0Rm9ybSwgZSkpO1xuXG4gICAgdG9Eb0NvbnRlbnRzLmFwcGVuZCh0b0RvVGl0bGUsIHRvRG9EZXNjLCB0b0RvRGF0ZSwgdG9Eb1ByaW9yaXR5LCB0b0RvQ2hlY2tCb3gsIHRvRG9FZGl0Rm9ybSk7XG4gICAgdG9Eb0Rpdi5hcHBlbmQodG9Eb0NvbnRlbnRzLCByZW1vdmVCdG4sIHNob3dFZGl0QnV0dG9uLCBoaWRlRWRpdEJ1dHRvbik7XG4gICAgdG9Eb0NvbnRhaW5lci5hcHBlbmQodG9Eb0Rpdik7XG4gIH0pXG59XG5cbmZ1bmN0aW9uIHJlbW92ZU5vblByb2plY3RUb0RvKHRvRG9JbmRleCkge1xuICBjb25zdCB0b0RvRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8taXRlbScgKyBgJHt0b0RvSW5kZXh9YCk7XG4gIHRvRG9EaXYucmVtb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0VG9Eb3MoKSB7XG4gIHRvRG9Db250YWluZXIuaW5uZXJUZXh0ID0gJyc7XG59XG4iLCJleHBvcnQgeyBlZGl0VG9Eb0Zvcm0gfTtcblxuICBmdW5jdGlvbiBlZGl0VG9Eb0Zvcm0odG9EbywgdG9kb0luZGV4KSB7XG4gICAgY29uc3QgbmV3Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBuZXdGb3JtLmNsYXNzTGlzdC5hZGQoXCJ0b2dnbGUtdmlzaWJpbGl0eVwiKTtcbiAgICBuZXdGb3JtLmRhdGFzZXQuaW5kZXggPSB0b2RvSW5kZXg7XG4gICAgbmV3Rm9ybS5pZCA9ICd0b2RvLWVkaXQtZm9ybScgKyBgJHt0b2RvSW5kZXh9YDtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUuaWQgPSAndG9kby10aXRsZScgKyBgJHt0b2RvSW5kZXh9YDtcbiAgICB0aXRsZUxhYmVsLmlubmVyVGV4dCA9ICdUaXRsZTogJztcbiAgICB0aXRsZS52YWx1ZSA9IHRvRG8udGl0bGU7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgY29uc3QgZGVzY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY3JpcHRpb24uaWQgPSAndG9kby1kZXNjcmlwdGlvbicgKyBgJHt0b2RvSW5kZXh9YDtcbiAgICBkZXNjTGFiZWwuaW5uZXJUZXh0ID0gJ0Rlc2NyaXB0aW9uOiAnO1xuICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gdG9Eby5kZXNjcmlwdGlvbjtcblxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGR1ZURhdGUuaWQgPSAndG9kby1kdWUtZGF0ZScgKyBgJHt0b2RvSW5kZXh9YDtcbiAgICBkYXRlTGFiZWwuaW5uZXJUZXh0ID0gJ0R1ZSBieTogJztcbiAgICBkdWVEYXRlLnR5cGUgPSAnZGF0ZXRpbWUtbG9jYWwnO1xuXG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJpb3JpdHlMYWJlbC5mb3IgPSAndG9kby1wcmlvcml0eSc7XG4gICAgcHJpb3JpdHlMYWJlbC5pbm5lclRleHQgPSAnUHJpb3JpdHknO1xuXG4gICAgY29uc3QgcHJpb3JpdHlUeXBlcyA9IFsnbm9uZScsICdoaWdoZXN0JywgJ2hpZ2gnLCAnbWlkZGxlJywgJ2xvdyddO1xuICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgcHJpb3JpdHlTZWxlY3QuaWQgPSAndG9kby1wcmlvcml0eScgKyBgJHt0b2RvSW5kZXh9YDtcbiAgICBwcmlvcml0eVNlbGVjdC5uYW1lID0gJ3ByaW9yaXRpZXMnO1xuICAgIHByaW9yaXR5VHlwZXMuZm9yRWFjaChmdW5jdGlvbih0eXBlKSB7XG4gICAgICBjb25zdCBwcmlvcml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgcHJpb3JpdHlPcHRpb24udmFsdWUgPSB0eXBlO1xuICAgICAgcHJpb3JpdHlPcHRpb24udGV4dCA9IHR5cGVbMF0udG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSk7XG4gICAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmQocHJpb3JpdHlPcHRpb24pO1xuICAgIH0pXG4gICAgcHJpb3JpdHlTZWxlY3QudmFsdWUgPSB0b0RvLnByaW9yaXR5O1xuXG4gICAgbmV3Rm9ybS5hcHBlbmQodGl0bGVMYWJlbCwgdGl0bGUsIGRlc2NMYWJlbCwgZGVzY3JpcHRpb24sIGRhdGVMYWJlbCwgZHVlRGF0ZSwgcHJpb3JpdHlMYWJlbCwgcHJpb3JpdHlTZWxlY3QpO1xuXG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBzdWJtaXQudHlwZSA9ICdzdWJtaXQnO1xuICAgIHN1Ym1pdC5uYW1lID0gJ3N1Ym1pdCc7XG4gICAgc3VibWl0LmlkID0gJ3RvZG8tc3VibWl0LWVkaXQnICsgYCR7dG9kb0luZGV4fWA7XG4gICAgc3VibWl0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYnV0dG9uJyk7XG4gICAgbmV3Rm9ybS5hcHBlbmQoc3VibWl0KTtcblxuICAgIHJldHVybiBuZXdGb3JtO1xuICB9IiwiZXhwb3J0IHsgdG9EbyB9O1xuaW1wb3J0IHsgcmVtb3ZlTm9uUHJvamVjdFRvRG8sIHNob3dUb0RvcyB9IGZyb20gXCIuL3RvZG8tZG9tXCI7XG5pbXBvcnQgeyBzYXZlVG9Eb3NUb1N0b3JhZ2UsIHJldHJpZXZlU2F2ZWRUb0RvcyB9IGZyb20gXCIuLi9sb2NhbC1zdG9yYWdlXCI7XG5cbmNvbnN0IHRvRG8gPSAoZnVuY3Rpb24oKSB7XG5cbiAgbGV0IHRvRG9BcnJheSA9IFtdO1xuXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXN1Ym1pdCcpO1xuICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBidWlsZEFuZEFkZFRvRG8pO1xuXG4gIGZ1bmN0aW9uIHRvRG9TdG9yYWdlTG9hZCgpIHtcbiAgICBjb25zdCBzYXZlZFRvRG9PYmplY3QgPSByZXRyaWV2ZVNhdmVkVG9Eb3MoKTtcbiAgICBpZihzYXZlZFRvRG9PYmplY3QpIHtcbiAgICAgIHNhdmVkVG9Eb09iamVjdC5mb3JFYWNoKGZ1bmN0aW9uKHNhdmVkVG9Ebykge1xuICAgICAgICB0b0RvQXJyYXkucHVzaChzYXZlZFRvRG8pO1xuICAgICAgfSk7XG4gICAgICBzaG93VG9Eb3ModG9Eb0FycmF5KTtcbiAgICAgIGFzc2lnblJlbW92ZUJ0bnMoKTtcbiAgICAgIHNhdmVUb0Rvc1RvU3RvcmFnZSh0b0RvQXJyYXkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRvRG9GYWN0b3J5ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGluZGV4LCBwcmlvcml0eSkge1xuICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgaW5kZXgsIHByaW9yaXR5IH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkQW5kQWRkVG9EbyhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRpdGxlVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby10aXRsZScpLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWRlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgY29uc3QgZGF0ZU9wdGlvbnMgPSB7IGRhdGVTdHlsZTogXCJmdWxsXCIsIHRpbWVTdHlsZTogXCJzaG9ydFwifTtcbiAgICBjb25zdCBkdWVWYWx1ZSA9IG5ldyBEYXRlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWR1ZS1kYXRlJykudmFsdWUpLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwgZGF0ZU9wdGlvbnMpO1xuICAgIGNvbnN0IGluZGV4ID0gdG9Eb0FycmF5Lmxlbmd0aDtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXByaW9yaXR5JykudmFsdWU7XG4gICAgY29uc3QgbmV3VG9EbyA9IHRvRG9GYWN0b3J5KHRpdGxlVmFsdWUsIGRlc2NWYWx1ZSwgZHVlVmFsdWUsIGluZGV4LCBwcmlvcml0eSk7XG4gICAgdG9Eb0FycmF5LnB1c2gobmV3VG9Ebyk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZm9ybScpLnJlc2V0KCk7XG4gICAgc2hvd1RvRG9zKHRvRG9BcnJheSk7XG4gICAgYXNzaWduUmVtb3ZlQnRucygpO1xuICAgIHNhdmVUb0Rvc1RvU3RvcmFnZSh0b0RvQXJyYXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlVG9EbyhlLCB0b0RvSW5kZXgpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmVtb3ZlTm9uUHJvamVjdFRvRG8odG9Eb0luZGV4KTtcbiAgICB0b0RvQXJyYXkuc3BsaWNlKHRvRG9JbmRleCwgMSk7XG4gICAgcmVkdWNlSW5kZXgodG9Eb0FycmF5LCB0b0RvSW5kZXgpO1xuICAgIHNob3dUb0Rvcyh0b0RvQXJyYXkpO1xuICAgIGFzc2lnblJlbW92ZUJ0bnMoKTtcbiAgICBzYXZlVG9Eb3NUb1N0b3JhZ2UodG9Eb0FycmF5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVkaXRUb0RvKGUsIHRvZG8pIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGl0bGVWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXRpdGxlJyArIGAke3RvZG8uaW5kZXh9YCkudmFsdWU7XG4gICAgY29uc3QgZGVzY1ZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZGVzY3JpcHRpb24nICsgYCR7dG9kby5pbmRleH1gKS52YWx1ZTtcbiAgICBjb25zdCBkdWVWYWx1ZSA9IG5ldyBEYXRlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWR1ZS1kYXRlJyArIGAke3RvZG8uaW5kZXh9YCkudmFsdWUpO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tcHJpb3JpdHknICsgYCR7dG9kby5pbmRleH1gKS52YWx1ZTtcbiAgICB0b2RvLnRpdGxlID0gdGl0bGVWYWx1ZTtcbiAgICB0b2RvLmRlc2NyaXB0aW9uID0gZGVzY1ZhbHVlO1xuICAgIHRvZG8uZHVlRGF0ZSA9IGR1ZVZhbHVlO1xuICAgIHRvZG8ucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICBzaG93VG9Eb3ModG9Eb0FycmF5KTtcbiAgICBhc3NpZ25SZW1vdmVCdG5zKCk7XG4gICAgc2F2ZVRvRG9zVG9TdG9yYWdlKHRvRG9BcnJheSk7XG4gIH1cblxuICBmdW5jdGlvbiBhc3NpZ25SZW1vdmVCdG5zKCkge1xuICAgIGNvbnN0IHRvRG9QYXJhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvLWl0ZW0nKTtcbiAgICB0b0RvUGFyYXMuZm9yRWFjaChmdW5jdGlvbih0b0RvKSB7XG4gICAgICBjb25zdCByZW1vdmVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1yZW1vdmUnICsgYCR7dG9Eby5kYXRhc2V0LmluZGV4fWApO1xuICAgICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHJlbW92ZVRvRG8oZSwgdG9Eby5kYXRhc2V0LmluZGV4KSk7XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGFzc2lnblRvRG9FZGl0QnRucyh0b2RvKSB7XG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXN1Ym1pdC1lZGl0JyArIGAke3RvZG8uaW5kZXh9YCk7XG4gICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBlZGl0VG9EbyhlLCB0b2RvKSk7XG4gIH1cblxuICBmdW5jdGlvbiByZWR1Y2VJbmRleChhcnJheSwgcmVtb3ZlZEl0ZW1JbmRleCkge1xuICAgIGFycmF5LmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgaWYgKGl0ZW0uaW5kZXggPiByZW1vdmVkSXRlbUluZGV4KSB7XG4gICAgICAgIGl0ZW0uaW5kZXggLT0gMTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gICAgXG4gIHJldHVybiB7IHRvRG9BcnJheSwgdG9Eb0ZhY3RvcnksIGFzc2lnblRvRG9FZGl0QnRucywgdG9Eb1N0b3JhZ2VMb2FkIH1cbiAgICBcbn0pKCk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgdG9EbyB9IGZyb20gJy4vbW9kdWxlcy90b2RvLWl0ZW1zL3RvZG8nO1xuaW1wb3J0IHsgcHJvamVjdCB9IGZyb20gJy4vbW9kdWxlcy9wcm9qZWN0cy9wcm9qZWN0JztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gIHRvRG8udG9Eb1N0b3JhZ2VMb2FkKCk7XG4gIHByb2plY3QucHJvamVjdFN0b3JhZ2VMb2FkKCk7XG59XG5cbiQoXCJhW2hyZWY9JyN0b3AnXVwiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMCB9LCBcInNsb3dcIik7XG4gIHJldHVybiBmYWxzZTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==