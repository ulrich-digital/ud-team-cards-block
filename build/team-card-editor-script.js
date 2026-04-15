/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/team-card/edit.js"
/*!**************************************!*\
  !*** ./src/blocks/team-card/edit.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/link-off.mjs");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/link.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);






function Edit({
  attributes,
  setAttributes
}) {
  const {
    name,
    role,
    email,
    phone,
    imageUrl,
    imageId,
    imageAlt,
    buttonText,
    buttonUrl
  } = attributes;
  const [isLinkPickerOpen, setIsLinkPickerOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const linkTriggerRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: "ud-team-card"
  });
  const onSelectImage = media => {
    setAttributes({
      imageId: media?.id || 0,
      imageUrl: media?.url || "",
      imageAlt: media?.alt || ""
    });
  };
  const removeImage = event => {
    event.preventDefault();
    event.stopPropagation();
    setAttributes({
      imageId: 0,
      imageUrl: "",
      imageAlt: ""
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    ...blockProps,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "ud-team-card__image",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
          onSelect: onSelectImage,
          allowedTypes: ["image"],
          value: imageId,
          render: ({
            open
          }) => imageUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
            type: "button",
            className: "ud-team-card__image-button",
            onClick: open,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
              src: imageUrl,
              alt: imageAlt || "",
              className: "ud-team-card__image-img"
            })
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "ud-team-card__image-control",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
              variant: "secondary",
              onClick: open,
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true,
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bild auswählen", "team-cards-block-ud")
            })
          })
        })
      }), imageUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        className: "ud-team-card__image-remove",
        variant: "secondary",
        onClick: removeImage,
        __next40pxDefaultSize: true,
        __nextHasNoMarginBottom: true,
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bild entfernen", "team-cards-block-ud")
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "ud-team-card__content",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
        tagName: "h3",
        className: "ud-team-card__name",
        value: name,
        onChange: value => setAttributes({
          name: value
        }),
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Name", "team-cards-block-ud"),
        allowedFormats: []
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
        tagName: "p",
        className: "ud-team-card__role",
        value: role,
        onChange: value => setAttributes({
          role: value
        }),
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Funktion", "team-cards-block-ud"),
        allowedFormats: []
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "ud-team-card__contact-fields",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
          value: email,
          onChange: value => setAttributes({
            email: value
          }),
          placeholder: "name@beispiel.ch",
          type: "email",
          __next40pxDefaultSize: true,
          __nextHasNoMarginBottom: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
          value: phone,
          onChange: value => setAttributes({
            phone: value
          }),
          placeholder: "+41 41 123 45 67",
          __next40pxDefaultSize: true,
          __nextHasNoMarginBottom: true
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "ud-team-card__actions",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "ud-team-card__button-wrap",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "wp-block-buttons",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "wp-block-button",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: `ud-team-card__button-editable${buttonUrl ? " has-link" : ""}`,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
                  tagName: "span",
                  className: "wp-block-button__link wp-element-button",
                  value: buttonText,
                  onChange: value => setAttributes({
                    buttonText: value
                  }),
                  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mehr erfahren", "team-cards-block-ud"),
                  allowedFormats: []
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                  ref: linkTriggerRef,
                  type: "button",
                  className: `ud-team-card__link-trigger${buttonUrl ? " is-linked" : " is-empty"}`,
                  "aria-label": buttonUrl ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Link bearbeiten", "team-cards-block-ud") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Link setzen", "team-cards-block-ud"),
                  onClick: event => {
                    event.preventDefault();
                    event.stopPropagation();
                    setIsLinkPickerOpen(state => !state);
                  },
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                    icon: buttonUrl ? _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"] : _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"]
                  })
                }), isLinkPickerOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Popover, {
                  anchor: linkTriggerRef.current,
                  placement: "bottom-start",
                  onClose: () => setIsLinkPickerOpen(false),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                    className: "ud-team-card__link-popover",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.LinkControl, {
                      value: buttonUrl ? {
                        url: buttonUrl
                      } : {},
                      settings: [],
                      onChange: nextValue => {
                        setAttributes({
                          buttonUrl: nextValue?.url || ""
                        });
                      }
                    }), buttonUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
                      variant: "tertiary",
                      onClick: () => {
                        setAttributes({
                          buttonUrl: ""
                        });
                        setIsLinkPickerOpen(false);
                      },
                      __next40pxDefaultSize: true,
                      __nextHasNoMarginBottom: true,
                      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Link entfernen", "team-cards-block-ud")
                    })]
                  })
                })]
              })
            })
          })
        })
      })]
    })]
  });
}

/***/ },

/***/ "./src/blocks/team-card/save.js"
/*!**************************************!*\
  !*** ./src/blocks/team-card/save.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function save({
  attributes
}) {
  const {
    name,
    role,
    email,
    phone,
    imageUrl,
    imageAlt,
    buttonText,
    buttonUrl
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
    className: "ud-team-card"
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    ...blockProps,
    children: [imageUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "ud-team-card__image",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
        src: imageUrl,
        alt: imageAlt || "",
        className: "ud-team-card__image-img"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "ud-team-card__content",
      children: [name && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
        tagName: "h3",
        className: "ud-team-card__name",
        value: name
      }), role && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
        tagName: "p",
        className: "ud-team-card__role",
        value: role
      }), email && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        className: "ud-team-card__email",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
          href: `mailto:${email}`,
          children: email
        })
      }), phone && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        className: "ud-team-card__phone",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
          href: `tel:${phone}`,
          children: phone
        })
      }), buttonUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "ud-team-card__actions",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "wp-block-buttons",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "wp-block-button",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
              className: "wp-block-button__link wp-element-button",
              href: buttonUrl,
              children: buttonText
            })
          })
        })
      })]
    })]
  });
}

/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

module.exports = window["ReactJSXRuntime"];

/***/ },

/***/ "@wordpress/block-editor"
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
(module) {

module.exports = window["wp"]["blockEditor"];

/***/ },

/***/ "@wordpress/blocks"
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
(module) {

module.exports = window["wp"]["blocks"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["components"];

/***/ },

/***/ "@wordpress/element"
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["element"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

/***/ },

/***/ "@wordpress/primitives"
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["primitives"];

/***/ },

/***/ "./node_modules/@wordpress/icons/build-module/library/link-off.mjs"
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/link-off.mjs ***!
  \*************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ link_off_default)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
// packages/icons/src/library/link-off.tsx


var link_off_default = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, { d: "M17.031 4.703 15.576 4l-1.56 3H14v.03l-2.324 4.47H9.5V13h1.396l-1.502 2.889h-.95a3.694 3.694 0 0 1 0-7.389H10V7H8.444a5.194 5.194 0 1 0 0 10.389h.17L7.5 19.53l1.416.719L15.049 8.5h.507a3.694 3.694 0 0 1 0 7.39H14v1.5h1.556a5.194 5.194 0 0 0 .273-10.383l1.202-2.304Z" }) });

//# sourceMappingURL=link-off.mjs.map


/***/ },

/***/ "./node_modules/@wordpress/icons/build-module/library/link.mjs"
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/link.mjs ***!
  \*********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ link_default)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
// packages/icons/src/library/link.tsx


var link_default = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, { d: "M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z" }) });

//# sourceMappingURL=link.mjs.map


/***/ },

/***/ "./src/blocks/team-card/block.json"
/*!*****************************************!*\
  !*** ./src/blocks/team-card/block.json ***!
  \*****************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":3,"name":"ud/team-card","title":"UD Block: Team Card","category":"design","icon":"screenoptions","description":"Einzelne Team-Person mit Bild, Funktion und optionalen Kontaktdaten.","attributes":{"name":{"type":"string","default":""},"role":{"type":"string","default":""},"email":{"type":"string","default":""},"phone":{"type":"string","default":""},"showContact":{"type":"boolean","default":false},"imageUrl":{"type":"string","default":""},"imageId":{"type":"number"},"imageAlt":{"type":"string","default":""},"buttonText":{"type":"string","source":"html","selector":".wp-block-button__link"},"buttonUrl":{"type":"string","source":"attribute","selector":".wp-block-button__link","attribute":"href"}},"supports":{"html":false,"anchor":true},"textdomain":"team-cards-block-ud","editorScript":"file:../../../build/team-card-editor-script.js","editorStyle":"file:../../../build/team-card-editor-style.css","script":"file:../../../build/team-card-frontend-script.js","style":"file:../../../build/team-card-frontend-style.css"}');

/***/ }

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***************************************!*\
  !*** ./src/blocks/team-card/index.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/team-card/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/team-card/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/team-card/save.js");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__.name, {
  ..._block_json__WEBPACK_IMPORTED_MODULE_1__,
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=team-card-editor-script.js.map