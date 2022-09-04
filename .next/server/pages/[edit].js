/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/[edit]";
exports.ids = ["pages/[edit]"];
exports.modules = {

/***/ "./Components/addTodo.module.scss":
/*!****************************************!*\
  !*** ./Components/addTodo.module.scss ***!
  \****************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"form\": \"addTodo_form__GHl9p\",\n\t\"input\": \"addTodo_input__9tKZX\",\n\t\"button\": \"addTodo_button__n9WLF\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL2FkZFRvZG8ubW9kdWxlLnNjc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dHV0b25lLy4vQ29tcG9uZW50cy9hZGRUb2RvLm1vZHVsZS5zY3NzP2YzZDYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZm9ybVwiOiBcImFkZFRvZG9fZm9ybV9fR0hsOXBcIixcblx0XCJpbnB1dFwiOiBcImFkZFRvZG9faW5wdXRfXzl0S1pYXCIsXG5cdFwiYnV0dG9uXCI6IFwiYWRkVG9kb19idXR0b25fX245V0xGXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/addTodo.module.scss\n");

/***/ }),

/***/ "./pages/[edit].js":
/*!*************************!*\
  !*** ./pages/[edit].js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Components_addTodo_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/addTodo.module.scss */ \"./Components/addTodo.module.scss\");\n/* harmony import */ var _Components_addTodo_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Components_addTodo_module_scss__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_3__]);\nreact_hook_form__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nconst Edit = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { edit  } = router.query;\n    const baseUrl = `http://localhost:8000/todos/${edit}/`;\n    const { 0: todo , 1: setTodo  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        content: \"\",\n        complete: false\n    });\n    const { 0: url , 1: setUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(baseUrl);\n    const { register , handleSubmit , reset  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({\n        defaultValues: todo\n    });\n    const submitForm = async (data)=>{\n        console.log(data);\n        await axios__WEBPACK_IMPORTED_MODULE_4___default().put(url, data).then((res)=>{\n            console.log(res.data);\n            router.push(\"/\");\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4___default().get(url).then((res)=>{\n            setTodo(res.data);\n            reset(res.data);\n        });\n    }, [\n        reset\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: (_Components_addTodo_module_scss__WEBPACK_IMPORTED_MODULE_5___default().form),\n        onSubmit: handleSubmit(submitForm),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: (_Components_addTodo_module_scss__WEBPACK_IMPORTED_MODULE_5___default().input),\n                type: \"text\",\n                name: \"content\",\n                placeholder: \"type here\",\n                ...register(\"content\")\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\RemixTut\\\\todo_app\\\\frontend\\\\pages\\\\[edit].js\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\",\n                name: \"complete\",\n                ...register(\"complete\")\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\RemixTut\\\\todo_app\\\\frontend\\\\pages\\\\[edit].js\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"submit\",\n                value: \"Update\",\n                name: \"submit\",\n                className: (_Components_addTodo_module_scss__WEBPACK_IMPORTED_MODULE_5___default().button)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\RemixTut\\\\todo_app\\\\frontend\\\\pages\\\\[edit].js\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\RemixTut\\\\todo_app\\\\frontend\\\\pages\\\\[edit].js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bZWRpdF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBa0Q7QUFDWDtBQUNBO0FBQ2Q7QUFDOEI7QUFFdkQsTUFBTU8sSUFBSSxHQUFHLElBQU07SUFDZixNQUFNQyxNQUFNLEdBQUdMLHNEQUFTLEVBQUU7SUFFMUIsTUFBTSxFQUFDTSxJQUFJLEdBQUMsR0FBR0QsTUFBTSxDQUFDRSxLQUFLO0lBQzNCLE1BQU1DLE9BQU8sR0FBRyxDQUFDLDRCQUE0QixFQUFFRixJQUFJLENBQUMsQ0FBQyxDQUFDO0lBRXRELE1BQU0sS0FBQ0csSUFBSSxNQUFFQyxPQUFPLE1BQUlaLCtDQUFRLENBQUM7UUFDL0JhLE9BQU8sRUFBQyxFQUFFO1FBQ1ZDLFFBQVEsRUFBRSxLQUFLO0tBQ2hCLENBQUM7SUFFRixNQUFNLEtBQUNDLEdBQUcsTUFBRUMsTUFBTSxNQUFJaEIsK0NBQVEsQ0FBQ1UsT0FBTyxDQUFDO0lBRXZDLE1BQU0sRUFBQ08sUUFBUSxHQUFFQyxZQUFZLEdBQUVDLEtBQUssR0FBQyxHQUFHaEIsd0RBQU8sQ0FBQztRQUFDaUIsYUFBYSxFQUFDVCxJQUFJO0tBQUMsQ0FBQztJQUVyRSxNQUFNVSxVQUFVLEdBQUcsT0FBTUMsSUFBSSxHQUFLO1FBQ2hDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDO1FBQ2hCLE1BQU1sQixnREFBUyxDQUFDVyxHQUFHLEVBQUVPLElBQUksQ0FBQyxDQUFDSSxJQUFJLENBQUNDLENBQUFBLEdBQUcsR0FBRztZQUNyQ0osT0FBTyxDQUFDQyxHQUFHLENBQUNHLEdBQUcsQ0FBQ0wsSUFBSSxDQUFDO1lBQ3JCZixNQUFNLENBQUNxQixJQUFJLENBQUMsR0FBRyxDQUFDO1NBQ2hCLENBQUM7S0FFSjtJQUdEM0IsZ0RBQVMsQ0FBQyxJQUFJO1FBQ1pHLGdEQUFTLENBQUNXLEdBQUcsQ0FBQyxDQUFDVyxJQUFJLENBQUNDLENBQUFBLEdBQUcsR0FBRztZQUN4QmYsT0FBTyxDQUFDZSxHQUFHLENBQUNMLElBQUksQ0FBQztZQUNqQkgsS0FBSyxDQUFDUSxHQUFHLENBQUNMLElBQUksQ0FBQztTQUNoQixDQUFDO0tBQ0gsRUFBRTtRQUFDSCxLQUFLO0tBQUMsQ0FBQztJQUViLHFCQUNFLDhEQUFDVyxNQUFJO1FBQUNDLFNBQVMsRUFBRTFCLDZFQUFXO1FBQUcyQixRQUFRLEVBQUVkLFlBQVksQ0FBQ0csVUFBVSxDQUFDOzswQkFDN0QsOERBQUNZLE9BQUs7Z0JBQUNGLFNBQVMsRUFBRTFCLDhFQUFZO2dCQUFFNkIsSUFBSSxFQUFDLE1BQU07Z0JBQUNDLElBQUksRUFBQyxTQUFTO2dCQUFDQyxXQUFXLEVBQUMsV0FBVztnQkFBRSxHQUFHbkIsUUFBUSxDQUFDLFNBQVMsQ0FBQzs7Ozs7eUJBQUk7MEJBQzlHLDhEQUFDZ0IsT0FBSztnQkFBQ0MsSUFBSSxFQUFDLFVBQVU7Z0JBQUNDLElBQUksRUFBQyxVQUFVO2dCQUFFLEdBQUdsQixRQUFRLENBQUMsVUFBVSxDQUFDOzs7Ozt5QkFBRzswQkFDbEUsOERBQUNnQixPQUFLO2dCQUFDQyxJQUFJLEVBQUMsUUFBUTtnQkFBQ0csS0FBSyxFQUFDLFFBQVE7Z0JBQUNGLElBQUksRUFBQyxRQUFRO2dCQUFDSixTQUFTLEVBQUUxQiwrRUFBYTs7Ozs7eUJBQUc7Ozs7OztpQkFDM0UsQ0FDUDtDQUNGO0FBRUQsaUVBQWVDLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0dXRvbmUvLi9wYWdlcy9bZWRpdF0uanM/YTA5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHt1c2VGb3JtfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9Db21wb25lbnRzL2FkZFRvZG8ubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgRWRpdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgY29uc3Qge2VkaXR9ID0gcm91dGVyLnF1ZXJ5IFxyXG4gICAgY29uc3QgYmFzZVVybCA9IGBodHRwOi8vbG9jYWxob3N0OjgwMDAvdG9kb3MvJHtlZGl0fS9gXHJcblxyXG4gICAgY29uc3QgW3RvZG8sIHNldFRvZG9dID0gdXNlU3RhdGUoe1xyXG4gICAgICBjb250ZW50OlwiXCIsXHJcbiAgICAgIGNvbXBsZXRlOiBmYWxzZVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBbdXJsLCBzZXRVcmxdID0gdXNlU3RhdGUoYmFzZVVybClcclxuXHJcbiAgICBjb25zdCB7cmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgcmVzZXR9ID0gdXNlRm9ybSh7ZGVmYXVsdFZhbHVlczp0b2RvfSlcclxuXHJcbiAgICBjb25zdCBzdWJtaXRGb3JtID0gYXN5bmMoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgYXdhaXQgYXhpb3MucHV0KHVybCwgZGF0YSkudGhlbihyZXMgPT57XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXHJcbiAgICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgfSlcclxuXHJcbiAgICB9IFxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgYXhpb3MuZ2V0KHVybCkudGhlbihyZXMgPT57XHJcbiAgICAgICAgc2V0VG9kbyhyZXMuZGF0YSlcclxuICAgICAgICByZXNldChyZXMuZGF0YSlcclxuICAgICAgfSlcclxuICAgIH0sIFtyZXNldF0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfSAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChzdWJtaXRGb3JtKX0+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fSB0eXBlPVwidGV4dFwiIG5hbWU9J2NvbnRlbnQnIHBsYWNlaG9sZGVyPSd0eXBlIGhlcmUnIHsuLi5yZWdpc3RlcignY29udGVudCcpfSAvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiY29tcGxldGVcIiB7Li4ucmVnaXN0ZXIoJ2NvbXBsZXRlJyl9Lz5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiVXBkYXRlXCIgbmFtZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0vPlxyXG4gICA8L2Zvcm0+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJ1c2VGb3JtIiwiYXhpb3MiLCJzdHlsZXMiLCJFZGl0Iiwicm91dGVyIiwiZWRpdCIsInF1ZXJ5IiwiYmFzZVVybCIsInRvZG8iLCJzZXRUb2RvIiwiY29udGVudCIsImNvbXBsZXRlIiwidXJsIiwic2V0VXJsIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJyZXNldCIsImRlZmF1bHRWYWx1ZXMiLCJzdWJtaXRGb3JtIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJwdXQiLCJ0aGVuIiwicmVzIiwicHVzaCIsImdldCIsImZvcm0iLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[edit].js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[edit].js"));
module.exports = __webpack_exports__;

})();