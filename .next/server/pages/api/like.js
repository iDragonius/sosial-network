"use strict";
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
exports.id = "pages/api/like";
exports.ids = ["pages/api/like"];
exports.modules = {

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "./middleware/mongodb.js":
/*!*******************************!*\
  !*** ./middleware/mongodb.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectDB = (handler)=>async (req, res)=>{\n        if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState)) {\n            // Use current db connection\n            return handler(req, res);\n        }\n        // Use new db connection\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.mongodburl, {\n            useUnifiedTopology: true,\n            useNewUrlParser: true\n        }).then(()=>console.log('Connected')\n        );\n        return handler(req, res);\n    }\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9taWRkbGV3YXJlL21vbmdvZGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBRS9CLEtBQUssQ0FBQ0MsU0FBUyxJQUFHQyxPQUFPLFVBQVdDLEdBQUcsRUFBRUMsR0FBRyxHQUFLLENBQUM7UUFDaEQsRUFBRSxFQUFFSiwyRUFBa0MsRUFBRSxDQUFDO1lBQ3ZDLEVBQTRCO1lBQzVCLE1BQU0sQ0FBQ0UsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUc7UUFDekIsQ0FBQztRQUNELEVBQXdCO1FBQ3hCLEtBQUssQ0FBQ0osdURBQWdCLENBQUNRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFVLEVBQUUsQ0FBQztZQUM5Q0Msa0JBQWtCLEVBQUUsSUFBSTtZQUN4QkMsZUFBZSxFQUFFLElBQUk7UUFDdkIsQ0FBQyxFQUFFQyxJQUFJLEtBQUtDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQVc7O1FBQ25DLE1BQU0sQ0FBQ2IsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUc7SUFDekIsQ0FBQzs7QUFFRCxpRUFBZUgsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbWlkZGxld2FyZS9tb25nb2RiLmpzPzkyYmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IGNvbm5lY3REQiA9IGhhbmRsZXIgPT4gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgaWYgKG1vbmdvb3NlLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGUpIHtcclxuICAgIC8vIFVzZSBjdXJyZW50IGRiIGNvbm5lY3Rpb25cclxuICAgIHJldHVybiBoYW5kbGVyKHJlcSwgcmVzKTtcclxuICB9XHJcbiAgLy8gVXNlIG5ldyBkYiBjb25uZWN0aW9uXHJcbiAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5tb25nb2RidXJsLCB7XHJcbiAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcbiAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWVcclxuICB9KS50aGVuKCgpPT5jb25zb2xlLmxvZygnQ29ubmVjdGVkJykpXHJcbiAgcmV0dXJuIGhhbmRsZXIocmVxLCByZXMpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERCOyJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3REQiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIm1vbmdvZGJ1cmwiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ0aGVuIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./middleware/mongodb.js\n");

/***/ }),

/***/ "./models/post.js":
/*!************************!*\
  !*** ./models/post.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Schema = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema);\nconst post = new Schema({\n    user: {\n        type: Schema.Types.ObjectId,\n        ref: \"User\"\n    },\n    nickname: {\n        type: String,\n        required: true\n    },\n    createdId: {\n        type: Date,\n        required: true\n    },\n    content: {\n        type: String,\n        required: true\n    },\n    createdAt: {\n        type: String,\n        required: true\n    },\n    comments: [\n        {\n            user: {\n                type: Schema.Types.ObjectId,\n                ref: \"User\"\n            },\n            nickname: {\n                type: String,\n                required: true\n            },\n            comment: {\n                type: String,\n                required: true\n            },\n            createdId: {\n                type: Date,\n                required: true\n            },\n            createdAt: {\n                type: String,\n                required: true\n            }\n        }\n    ],\n    commentNumber: {\n        type: Number,\n        default: 0\n    },\n    likes: {\n        likes: {\n            type: Number,\n            default: 0\n        },\n        user: [\n            {\n                type: Schema.Types.ObjectId,\n                ref: \"User\"\n            }\n        ]\n    }\n});\n(mongoose__WEBPACK_IMPORTED_MODULE_0___default().models) = {\n};\nvar Post = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Post', post);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2RlbHMvcG9zdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsR0FBRyxDQUFDQyxNQUFNLEdBQUdELHdEQUFlO0FBRTVCLEtBQUssQ0FBQ0UsSUFBSSxHQUFHLEdBQUcsQ0FBQ0QsTUFBTSxDQUFDLENBQUM7SUFDckJFLElBQUksRUFBQyxDQUFDQztRQUFBQSxJQUFJLEVBQUNILE1BQU0sQ0FBQ0ksS0FBSyxDQUFDQyxRQUFRO1FBQUVDLEdBQUcsRUFBQyxDQUFNO0lBQUEsQ0FBQztJQUM3Q0MsUUFBUSxFQUFDLENBQUNKO1FBQUFBLElBQUksRUFBQ0ssTUFBTTtRQUFFQyxRQUFRLEVBQUMsSUFBSTtJQUFBLENBQUM7SUFDckNDLFNBQVMsRUFBQyxDQUFDUDtRQUFBQSxJQUFJLEVBQUNRLElBQUk7UUFBRUYsUUFBUSxFQUFDLElBQUk7SUFBQSxDQUFDO0lBQ3BDRyxPQUFPLEVBQUMsQ0FBQ1Q7UUFBQUEsSUFBSSxFQUFDSyxNQUFNO1FBQUVDLFFBQVEsRUFBQyxJQUFJO0lBQUEsQ0FBQztJQUNwQ0ksU0FBUyxFQUFDLENBQUNWO1FBQUFBLElBQUksRUFBQ0ssTUFBTTtRQUFFQyxRQUFRLEVBQUMsSUFBSTtJQUFBLENBQUM7SUFDdENLLFFBQVEsRUFBQyxDQUFDO1FBQUEsQ0FBQztZQUNQWixJQUFJLEVBQUMsQ0FBQ0M7Z0JBQUFBLElBQUksRUFBQ0gsTUFBTSxDQUFDSSxLQUFLLENBQUNDLFFBQVE7Z0JBQUVDLEdBQUcsRUFBQyxDQUFNO1lBQUEsQ0FBQztZQUM3Q0MsUUFBUSxFQUFDLENBQUNKO2dCQUFBQSxJQUFJLEVBQUNLLE1BQU07Z0JBQUVDLFFBQVEsRUFBQyxJQUFJO1lBQUEsQ0FBQztZQUNyQ00sT0FBTyxFQUFDLENBQUNaO2dCQUFBQSxJQUFJLEVBQUNLLE1BQU07Z0JBQUVDLFFBQVEsRUFBQyxJQUFJO1lBQUEsQ0FBQztZQUNwQ0MsU0FBUyxFQUFDLENBQUNQO2dCQUFBQSxJQUFJLEVBQUNRLElBQUk7Z0JBQUVGLFFBQVEsRUFBQyxJQUFJO1lBQUEsQ0FBQztZQUNwQ0ksU0FBUyxFQUFDLENBQUNWO2dCQUFBQSxJQUFJLEVBQUNLLE1BQU07Z0JBQUVDLFFBQVEsRUFBQyxJQUFJO1lBQUEsQ0FBQztRQUMxQyxDQUFDO0lBQUEsQ0FBQztJQUNGTyxhQUFhLEVBQUMsQ0FBQ2I7UUFBQUEsSUFBSSxFQUFDYyxNQUFNO1FBQUVDLE9BQU8sRUFBQyxDQUFDO0lBQUEsQ0FBQztJQUN0Q0MsS0FBSyxFQUFDLENBQUM7UUFDSEEsS0FBSyxFQUFDLENBQUNoQjtZQUFBQSxJQUFJLEVBQUNjLE1BQU07WUFBRUMsT0FBTyxFQUFDLENBQUM7UUFBQSxDQUFDO1FBQzlCaEIsSUFBSSxFQUFDLENBQUM7WUFBQSxDQUFDQztnQkFBQUEsSUFBSSxFQUFDSCxNQUFNLENBQUNJLEtBQUssQ0FBQ0MsUUFBUTtnQkFBRUMsR0FBRyxFQUFDLENBQU07WUFBQSxDQUFDO1FBQUEsQ0FBQztJQUNuRCxDQUFDO0FBQ0wsQ0FBQztBQUVEUCx3REFBZSxHQUFHLENBQUM7QUFBQSxDQUFDO0FBRXBCLEdBQUcsQ0FBQ3NCLElBQUksR0FBR3RCLHFEQUFjLENBQUMsQ0FBTSxPQUFFRSxJQUFJO0FBRXRDLGlFQUFlb0IsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbW9kZWxzL3Bvc3QuanM/MGM0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgIGZyb20gJ21vbmdvb3NlJ1xyXG5cclxudmFyIFNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYTtcclxuXHJcbmNvbnN0IHBvc3QgPSBuZXcgU2NoZW1hKHtcclxuICAgIHVzZXI6e3R5cGU6U2NoZW1hLlR5cGVzLk9iamVjdElkLCByZWY6XCJVc2VyXCJ9LFxyXG4gICAgbmlja25hbWU6e3R5cGU6U3RyaW5nLCByZXF1aXJlZDp0cnVlfSxcclxuICAgIGNyZWF0ZWRJZDp7dHlwZTpEYXRlLCByZXF1aXJlZDp0cnVlfSxcclxuICAgIGNvbnRlbnQ6e3R5cGU6U3RyaW5nLCByZXF1aXJlZDp0cnVlfSxcclxuICAgIGNyZWF0ZWRBdDp7dHlwZTpTdHJpbmcsIHJlcXVpcmVkOnRydWV9LFxyXG4gICAgY29tbWVudHM6W3tcclxuICAgICAgICB1c2VyOnt0eXBlOlNjaGVtYS5UeXBlcy5PYmplY3RJZCwgcmVmOlwiVXNlclwifSxcclxuICAgICAgICBuaWNrbmFtZTp7dHlwZTpTdHJpbmcsIHJlcXVpcmVkOnRydWV9LFxyXG4gICAgICAgIGNvbW1lbnQ6e3R5cGU6U3RyaW5nLCByZXF1aXJlZDp0cnVlfSxcclxuICAgICAgICBjcmVhdGVkSWQ6e3R5cGU6RGF0ZSwgcmVxdWlyZWQ6dHJ1ZX0sXHJcbiAgICAgICAgY3JlYXRlZEF0Ont0eXBlOlN0cmluZywgcmVxdWlyZWQ6dHJ1ZX0sXHJcbiAgICB9XSxcclxuICAgIGNvbW1lbnROdW1iZXI6e3R5cGU6TnVtYmVyLCBkZWZhdWx0OjB9LFxyXG4gICAgbGlrZXM6e1xyXG4gICAgICAgIGxpa2VzOnt0eXBlOk51bWJlciwgZGVmYXVsdDowfSxcclxuICAgICAgICB1c2VyOlt7dHlwZTpTY2hlbWEuVHlwZXMuT2JqZWN0SWQsIHJlZjpcIlVzZXJcIn1dXHJcbiAgICB9XHJcbn0pO1xyXG5cclxubW9uZ29vc2UubW9kZWxzID0ge307XHJcblxyXG52YXIgUG9zdCA9IG1vbmdvb3NlLm1vZGVsKCdQb3N0JywgcG9zdCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0OyJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlNjaGVtYSIsInBvc3QiLCJ1c2VyIiwidHlwZSIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJuaWNrbmFtZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiY3JlYXRlZElkIiwiRGF0ZSIsImNvbnRlbnQiLCJjcmVhdGVkQXQiLCJjb21tZW50cyIsImNvbW1lbnQiLCJjb21tZW50TnVtYmVyIiwiTnVtYmVyIiwiZGVmYXVsdCIsImxpa2VzIiwibW9kZWxzIiwiUG9zdCIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./models/post.js\n");

/***/ }),

/***/ "./models/token.js":
/*!*************************!*\
  !*** ./models/token.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Schema = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema);\nconst token = new Schema({\n    user: {\n        type: Schema.Types.ObjectId,\n        ref: 'User'\n    },\n    refreshToken: {\n        type: String,\n        required: true\n    }\n});\n(mongoose__WEBPACK_IMPORTED_MODULE_0___default().models) = {\n};\nvar Token = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Token', token);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Token);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2RlbHMvdG9rZW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLEdBQUcsQ0FBQ0MsTUFBTSxHQUFHRCx3REFBZTtBQUU1QixLQUFLLENBQUNFLEtBQUssR0FBRyxHQUFHLENBQUNELE1BQU0sQ0FBQyxDQUFDO0lBQ3hCRSxJQUFJLEVBQUUsQ0FBQ0M7UUFBQUEsSUFBSSxFQUFFSCxNQUFNLENBQUNJLEtBQUssQ0FBQ0MsUUFBUTtRQUFDQyxHQUFHLEVBQUMsQ0FBTTtJQUFBLENBQUM7SUFDOUNDLFlBQVksRUFBRSxDQUFDSjtRQUFBQSxJQUFJLEVBQUVLLE1BQU07UUFBQ0MsUUFBUSxFQUFFLElBQUk7SUFBQSxDQUFDO0FBQzdDLENBQUM7QUFFRFYsd0RBQWUsR0FBRyxDQUFDO0FBQUEsQ0FBQztBQUVwQixHQUFHLENBQUNZLEtBQUssR0FBR1oscURBQWMsQ0FBQyxDQUFPLFFBQUVFLEtBQUs7QUFFekMsaUVBQWVVLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL21vZGVscy90b2tlbi5qcz8yMjYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSAgZnJvbSAnbW9uZ29vc2UnXHJcblxyXG52YXIgU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hO1xyXG5cclxuY29uc3QgdG9rZW4gPSBuZXcgU2NoZW1hKHtcclxuICB1c2VyOiB7dHlwZTogU2NoZW1hLlR5cGVzLk9iamVjdElkLHJlZjonVXNlcid9LFxyXG4gIHJlZnJlc2hUb2tlbjoge3R5cGU6IFN0cmluZyxyZXF1aXJlZDogdHJ1ZX0sXHJcbn0pO1xyXG5cclxubW9uZ29vc2UubW9kZWxzID0ge307XHJcblxyXG52YXIgVG9rZW4gPSBtb25nb29zZS5tb2RlbCgnVG9rZW4nLCB0b2tlbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2tlbjsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJTY2hlbWEiLCJ0b2tlbiIsInVzZXIiLCJ0eXBlIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsInJlZnJlc2hUb2tlbiIsIlN0cmluZyIsInJlcXVpcmVkIiwibW9kZWxzIiwiVG9rZW4iLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./models/token.js\n");

/***/ }),

/***/ "./models/userInfo.js":
/*!****************************!*\
  !*** ./models/userInfo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Schema = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema);\nconst userInfo = new Schema({\n    user: {\n        type: Schema.Types.ObjectId,\n        ref: 'User'\n    },\n    nickname: {\n        type: String,\n        unique: true\n    },\n    name: {\n        type: String\n    },\n    surname: {\n        type: String\n    },\n    birthday: {\n        type: String\n    },\n    gender: {\n        type: String,\n        default: 'Unknown'\n    },\n    img: {\n        type: String\n    },\n    lastChange: {\n        type: String\n    },\n    friends: [\n        {\n            friend: {\n                type: Schema.Types.ObjectId,\n                ref: 'User'\n            },\n            nickname: {\n                type: String,\n                required: true\n            },\n            friendFrom: {\n                type: String,\n                required: true\n            },\n            accepted: {\n                type: Boolean,\n                required: true\n            }\n        }\n    ],\n    requested: [\n        {\n            friend: {\n                type: Schema.Types.ObjectId,\n                ref: 'User'\n            },\n            nickname: {\n                type: String,\n                required: true\n            }\n        }\n    ],\n    friendsNumber: {\n        type: Number,\n        default: 0\n    },\n    requestsNumber: {\n        type: Number,\n        default: 0\n    }\n});\n(mongoose__WEBPACK_IMPORTED_MODULE_0___default().models) = {\n};\nvar UserInfo = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('UserInfo', userInfo);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserInfo);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2RlbHMvdXNlckluZm8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLEdBQUcsQ0FBQ0MsTUFBTSxHQUFHRCx3REFBZTtBQUU1QixLQUFLLENBQUNFLFFBQVEsR0FBRyxHQUFHLENBQUNELE1BQU0sQ0FBQyxDQUFDO0lBQzNCRSxJQUFJLEVBQUMsQ0FBQ0M7UUFBQUEsSUFBSSxFQUFDSCxNQUFNLENBQUNJLEtBQUssQ0FBQ0MsUUFBUTtRQUFFQyxHQUFHLEVBQUMsQ0FBTTtJQUFBLENBQUM7SUFDN0NDLFFBQVEsRUFBRSxDQUFDSjtRQUFBQSxJQUFJLEVBQUVLLE1BQU07UUFBRUMsTUFBTSxFQUFDLElBQUk7SUFBQSxDQUFDO0lBQ3JDQyxJQUFJLEVBQUUsQ0FBQ1A7UUFBQUEsSUFBSSxFQUFFSyxNQUFNO0lBQUEsQ0FBQztJQUNwQkcsT0FBTyxFQUFDLENBQUNSO1FBQUFBLElBQUksRUFBQ0ssTUFBTTtJQUFBLENBQUM7SUFDckJJLFFBQVEsRUFBQyxDQUFDVDtRQUFBQSxJQUFJLEVBQUNLLE1BQU07SUFBQSxDQUFDO0lBQ3RCSyxNQUFNLEVBQUMsQ0FBQ1Y7UUFBQUEsSUFBSSxFQUFDSyxNQUFNO1FBQUVNLE9BQU8sRUFBQyxDQUFTO0lBQUEsQ0FBQztJQUN2Q0MsR0FBRyxFQUFFLENBQUNaO1FBQUFBLElBQUksRUFBQ0ssTUFBTTtJQUFBLENBQUM7SUFDbEJRLFVBQVUsRUFBQyxDQUFDYjtRQUFBQSxJQUFJLEVBQUNLLE1BQU07SUFBQSxDQUFDO0lBQ3hCUyxPQUFPLEVBQUMsQ0FBQztRQUFBLENBQUM7WUFDUkMsTUFBTSxFQUFDLENBQUNmO2dCQUFBQSxJQUFJLEVBQUNILE1BQU0sQ0FBQ0ksS0FBSyxDQUFDQyxRQUFRO2dCQUFFQyxHQUFHLEVBQUMsQ0FBTTtZQUFBLENBQUM7WUFDL0NDLFFBQVEsRUFBQyxDQUFDSjtnQkFBQUEsSUFBSSxFQUFDSyxNQUFNO2dCQUFFVyxRQUFRLEVBQUMsSUFBSTtZQUFBLENBQUM7WUFDckNDLFVBQVUsRUFBQyxDQUFDakI7Z0JBQUFBLElBQUksRUFBQ0ssTUFBTTtnQkFBQ1csUUFBUSxFQUFDLElBQUk7WUFBQSxDQUFDO1lBQ3RDRSxRQUFRLEVBQUMsQ0FBQ2xCO2dCQUFBQSxJQUFJLEVBQUNtQixPQUFPO2dCQUFDSCxRQUFRLEVBQUMsSUFBSTtZQUFBLENBQUM7UUFDdkMsQ0FBQztJQUFBLENBQUM7SUFDRkksU0FBUyxFQUFDLENBQUM7UUFBQSxDQUFDO1lBQ1ZMLE1BQU0sRUFBQyxDQUFDZjtnQkFBQUEsSUFBSSxFQUFDSCxNQUFNLENBQUNJLEtBQUssQ0FBQ0MsUUFBUTtnQkFBRUMsR0FBRyxFQUFDLENBQU07WUFBQSxDQUFDO1lBQy9DQyxRQUFRLEVBQUMsQ0FBQ0o7Z0JBQUFBLElBQUksRUFBQ0ssTUFBTTtnQkFBRVcsUUFBUSxFQUFDLElBQUk7WUFBQSxDQUFDO1FBQ3ZDLENBQUM7SUFBQSxDQUFDO0lBQ0ZLLGFBQWEsRUFBQyxDQUFDckI7UUFBQUEsSUFBSSxFQUFDc0IsTUFBTTtRQUFFWCxPQUFPLEVBQUMsQ0FBQztJQUFBLENBQUM7SUFDdENZLGNBQWMsRUFBQyxDQUFDdkI7UUFBQUEsSUFBSSxFQUFDc0IsTUFBTTtRQUFDWCxPQUFPLEVBQUMsQ0FBQztJQUFBLENBQUM7QUFDeEMsQ0FBQztBQUVEZix3REFBZSxHQUFHLENBQUM7QUFBQSxDQUFDO0FBRXBCLEdBQUcsQ0FBQzZCLFFBQVEsR0FBRzdCLHFEQUFjLENBQUMsQ0FBVSxXQUFFRSxRQUFRO0FBRWxELGlFQUFlMkIsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbW9kZWxzL3VzZXJJbmZvLmpzPzMyOTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlICBmcm9tICdtb25nb29zZSdcclxuXHJcbnZhciBTY2hlbWEgPSBtb25nb29zZS5TY2hlbWE7XHJcblxyXG5jb25zdCB1c2VySW5mbyA9IG5ldyBTY2hlbWEoe1xyXG4gIHVzZXI6e3R5cGU6U2NoZW1hLlR5cGVzLk9iamVjdElkLCByZWY6J1VzZXInfSxcclxuICBuaWNrbmFtZToge3R5cGU6IFN0cmluZywgdW5pcXVlOnRydWV9LFxyXG4gIG5hbWU6IHt0eXBlOiBTdHJpbmd9LFxyXG4gIHN1cm5hbWU6e3R5cGU6U3RyaW5nfSxcclxuICBiaXJ0aGRheTp7dHlwZTpTdHJpbmd9LFxyXG4gIGdlbmRlcjp7dHlwZTpTdHJpbmcsIGRlZmF1bHQ6J1Vua25vd24nfSxcclxuICBpbWc6IHt0eXBlOlN0cmluZ30sXHJcbiAgbGFzdENoYW5nZTp7dHlwZTpTdHJpbmd9LFxyXG4gIGZyaWVuZHM6W3tcclxuICAgIGZyaWVuZDp7dHlwZTpTY2hlbWEuVHlwZXMuT2JqZWN0SWQsIHJlZjonVXNlcid9LFxyXG4gICAgbmlja25hbWU6e3R5cGU6U3RyaW5nLCByZXF1aXJlZDp0cnVlfSxcclxuICAgIGZyaWVuZEZyb206e3R5cGU6U3RyaW5nLHJlcXVpcmVkOnRydWV9LFxyXG4gICAgYWNjZXB0ZWQ6e3R5cGU6Qm9vbGVhbixyZXF1aXJlZDp0cnVlfVxyXG4gIH1dLFxyXG4gIHJlcXVlc3RlZDpbe1xyXG4gICAgZnJpZW5kOnt0eXBlOlNjaGVtYS5UeXBlcy5PYmplY3RJZCwgcmVmOidVc2VyJ30sXHJcbiAgICBuaWNrbmFtZTp7dHlwZTpTdHJpbmcsIHJlcXVpcmVkOnRydWV9XHJcbiAgfV0sXHJcbiAgZnJpZW5kc051bWJlcjp7dHlwZTpOdW1iZXIsIGRlZmF1bHQ6MH0sXHJcbiAgcmVxdWVzdHNOdW1iZXI6e3R5cGU6TnVtYmVyLGRlZmF1bHQ6MH1cclxufSk7XHJcblxyXG5tb25nb29zZS5tb2RlbHMgPSB7fTtcclxuXHJcbnZhciBVc2VySW5mbyA9IG1vbmdvb3NlLm1vZGVsKCdVc2VySW5mbycsIHVzZXJJbmZvKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJJbmZvOyJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlNjaGVtYSIsInVzZXJJbmZvIiwidXNlciIsInR5cGUiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwibmlja25hbWUiLCJTdHJpbmciLCJ1bmlxdWUiLCJuYW1lIiwic3VybmFtZSIsImJpcnRoZGF5IiwiZ2VuZGVyIiwiZGVmYXVsdCIsImltZyIsImxhc3RDaGFuZ2UiLCJmcmllbmRzIiwiZnJpZW5kIiwicmVxdWlyZWQiLCJmcmllbmRGcm9tIiwiYWNjZXB0ZWQiLCJCb29sZWFuIiwicmVxdWVzdGVkIiwiZnJpZW5kc051bWJlciIsIk51bWJlciIsInJlcXVlc3RzTnVtYmVyIiwibW9kZWxzIiwiVXNlckluZm8iLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./models/userInfo.js\n");

/***/ }),

/***/ "./pages/api/like.js":
/*!***************************!*\
  !*** ./pages/api/like.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _middleware_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../middleware/mongodb */ \"./middleware/mongodb.js\");\n/* harmony import */ var _models_userInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/userInfo */ \"./models/userInfo.js\");\n/* harmony import */ var _models_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/token */ \"./models/token.js\");\n/* harmony import */ var _models_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/post */ \"./models/post.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst addFriend = async (req, res)=>{\n    if (req.method === \"POST\") {\n        const { refreshToken  } = req.cookies;\n        if (!refreshToken) {\n            return res.status(400).json({\n                message: '1'\n            });\n        }\n        const tokenFromDb = await _models_token__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n            refreshToken: refreshToken\n        });\n        if (!tokenFromDb) {\n            return res.status(400).json({\n                message: '2'\n            });\n        }\n        const validateToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default().verify(refreshToken, process.env.JWT_REFRESH_SECRET);\n        if (!validateToken) {\n            return res.status(400).json({\n                message: '3'\n            });\n        }\n        const { post  } = req.body;\n        const commentedPost = await _models_post__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n            _id: post\n        });\n        if (!commentedPost) {\n            return res.status(400).json({\n                message: '4'\n            });\n        }\n        const userLike = commentedPost.likes.user.indexOf(tokenFromDb.user);\n        if (userLike > -1) {\n            commentedPost.likes.likes = commentedPost.likes.likes - 1;\n            commentedPost.likes.user.splice(userLike, 1);\n            await commentedPost.save();\n            res.json({\n                message: 'succesfully'\n            });\n        } else {\n            commentedPost.likes.likes = commentedPost.likes.likes + 1;\n            commentedPost.likes.user.push(tokenFromDb.user);\n            await commentedPost.save();\n            res.json({\n                message: 'succesfully'\n            });\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_middleware_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(addFriend));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztBQUdELGlFQUFlYiwrREFBUyxDQUFDSyxTQUFTLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbGlrZS5qcz83YTRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25uZWN0REIgZnJvbSBcIi4uLy4uL21pZGRsZXdhcmUvbW9uZ29kYlwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uLy4uL21vZGVscy91c2VySW5mb1wiO1xyXG5pbXBvcnQgVG9rZW4gZnJvbSBcIi4uLy4uL21vZGVscy90b2tlblwiO1xyXG5pbXBvcnQgUG9zdCBmcm9tIFwiLi4vLi4vbW9kZWxzL3Bvc3RcIjtcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcblxyXG5jb25zdCBhZGRGcmllbmQgPSBhc3luYyAocmVxLHJlcykgPT57XHJcbiAgICBpZihyZXEubWV0aG9kID09PVwiUE9TVFwiKXtcclxuICAgICAgICBjb25zdCB7cmVmcmVzaFRva2VufSA9IHJlcS5jb29raWVzXHJcbiAgICAgICAgaWYgKCFyZWZyZXNoVG9rZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHttZXNzYWdlOicxJ30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRva2VuRnJvbURiID0gYXdhaXQgVG9rZW4uZmluZE9uZSh7cmVmcmVzaFRva2VuOnJlZnJlc2hUb2tlbn0pXHJcbiAgICAgICAgaWYoIXRva2VuRnJvbURiKXtcclxuICAgICAgICAgICAgcmV0dXJuICByZXMuc3RhdHVzKDQwMCkuanNvbih7bWVzc2FnZTonMid9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB2YWxpZGF0ZVRva2VuID0gand0LnZlcmlmeShyZWZyZXNoVG9rZW4sIHByb2Nlc3MuZW52LkpXVF9SRUZSRVNIX1NFQ1JFVClcclxuICAgICAgICBpZighdmFsaWRhdGVUb2tlbil7XHJcbiAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHttZXNzYWdlOiczJ30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0e3Bvc3QgfSA9IHJlcS5ib2R5XHJcbiAgICAgICAgY29uc3QgY29tbWVudGVkUG9zdCA9IGF3YWl0IFBvc3QuZmluZE9uZSh7X2lkOnBvc3R9KVxyXG4gICAgICAgIGlmKCFjb21tZW50ZWRQb3N0KXtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHttZXNzYWdlOic0J30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHVzZXJMaWtlID0gY29tbWVudGVkUG9zdC5saWtlcy51c2VyLmluZGV4T2YodG9rZW5Gcm9tRGIudXNlcilcclxuICAgICAgICBpZih1c2VyTGlrZSA+IC0xKXtcclxuICAgICAgICAgICAgY29tbWVudGVkUG9zdC5saWtlcy5saWtlcyA9IGNvbW1lbnRlZFBvc3QubGlrZXMubGlrZXMgLTFcclxuICAgICAgICAgICAgY29tbWVudGVkUG9zdC5saWtlcy51c2VyLnNwbGljZSh1c2VyTGlrZSwgMSlcclxuICAgICAgICAgICAgYXdhaXQgY29tbWVudGVkUG9zdC5zYXZlKClcclxuICAgICAgICAgICAgcmVzLmpzb24oe21lc3NhZ2U6J3N1Y2Nlc2Z1bGx5J30pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29tbWVudGVkUG9zdC5saWtlcy5saWtlcyA9IGNvbW1lbnRlZFBvc3QubGlrZXMubGlrZXMgKyAxXHJcbiAgICAgICAgICAgIGNvbW1lbnRlZFBvc3QubGlrZXMudXNlci5wdXNoKHRva2VuRnJvbURiLnVzZXIpXHJcbiAgICAgICAgICAgIGF3YWl0IGNvbW1lbnRlZFBvc3Quc2F2ZSgpXHJcbiAgICAgICAgICAgIHJlcy5qc29uKHttZXNzYWdlOidzdWNjZXNmdWxseSd9KVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgfSBcclxufSAgIFxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REQihhZGRGcmllbmQpIl0sIm5hbWVzIjpbImNvbm5lY3REQiIsIlVzZXJJbmZvIiwiVG9rZW4iLCJQb3N0Iiwiand0IiwiYWRkRnJpZW5kIiwicmVxIiwicmVzIiwibWV0aG9kIiwicmVmcmVzaFRva2VuIiwiY29va2llcyIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwidG9rZW5Gcm9tRGIiLCJmaW5kT25lIiwidmFsaWRhdGVUb2tlbiIsInZlcmlmeSIsInByb2Nlc3MiLCJlbnYiLCJKV1RfUkVGUkVTSF9TRUNSRVQiLCJwb3N0IiwiYm9keSIsImNvbW1lbnRlZFBvc3QiLCJfaWQiLCJ1c2VyTGlrZSIsImxpa2VzIiwidXNlciIsImluZGV4T2YiLCJzcGxpY2UiLCJzYXZlIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/like.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/like.js"));
module.exports = __webpack_exports__;

})();