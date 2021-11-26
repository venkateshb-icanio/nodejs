/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./.app/environment.js":
/*!*****************************!*\
  !*** ./.app/environment.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isDevelopment\": () => (/* binding */ isDevelopment),\n/* harmony export */   \"isStaging\": () => (/* binding */ isStaging),\n/* harmony export */   \"isProduction\": () => (/* binding */ isProduction)\n/* harmony export */ });\nvar isDevelopment =  true && \"development\" === \"development\";\nvar isStaging =  true && \"development\" === \"staging\";\nvar isProduction =  true && \"development\" === \"production\";\n\n//# sourceURL=webpack://nodejs-server/./.app/environment.js?");

/***/ }),

/***/ "./api/documents/graphql/mutations.js":
/*!********************************************!*\
  !*** ./api/documents/graphql/mutations.js ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ \"./api/documents/index.js\");\n/* harmony import */ var _lib_generateId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/generateId */ \"./lib/generateId.js\");\n/* harmony import */ var _lib_isDocumentOwner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../lib/isDocumentOwner */ \"./lib/isDocumentOwner.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index__WEBPACK_IMPORTED_MODULE_3__, _lib_isDocumentOwner__WEBPACK_IMPORTED_MODULE_5__]);\n([_index__WEBPACK_IMPORTED_MODULE_3__, _lib_isDocumentOwner__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  createDocument: function () {\n    var _createDocument = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(parent, args, context) {\n      var _id;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _id = (0,_lib_generateId__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n              _context.next = 3;\n              return _index__WEBPACK_IMPORTED_MODULE_3__[\"default\"].insertOne(_objectSpread(_objectSpread({\n                _id: _id,\n                userId: context.user._id\n              }, args.document), {}, {\n                createdAt: new Date().toISOString(),\n                updatedAt: new Date().toISOString()\n              }));\n\n            case 3:\n              return _context.abrupt(\"return\", {\n                _id: _id\n              });\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    function createDocument(_x, _x2, _x3) {\n      return _createDocument.apply(this, arguments);\n    }\n\n    return createDocument;\n  }(),\n  updateDocument: function () {\n    var _updateDocument = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(parent, args, context) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return (0,_lib_isDocumentOwner__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(args.documentId, context.user._id);\n\n            case 2:\n              _context2.next = 4;\n              return _index__WEBPACK_IMPORTED_MODULE_3__[\"default\"].updateOne({\n                _id: args.documentId\n              }, {\n                $set: _objectSpread(_objectSpread({}, args.document), {}, {\n                  updatedAt: new Date().toISOString()\n                })\n              });\n\n            case 4:\n              return _context2.abrupt(\"return\", {\n                _id: args.documentId\n              });\n\n            case 5:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    function updateDocument(_x4, _x5, _x6) {\n      return _updateDocument.apply(this, arguments);\n    }\n\n    return updateDocument;\n  }(),\n  deleteDocument: function () {\n    var _deleteDocument = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(parent, args, context) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.next = 2;\n              return (0,_lib_isDocumentOwner__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(args.documentId, context.user._id);\n\n            case 2:\n              _context3.next = 4;\n              return _index__WEBPACK_IMPORTED_MODULE_3__[\"default\"].deleteOne({\n                _id: args.documentId\n              });\n\n            case 4:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    function deleteDocument(_x7, _x8, _x9) {\n      return _deleteDocument.apply(this, arguments);\n    }\n\n    return deleteDocument;\n  }()\n});\n});\n\n//# sourceURL=webpack://nodejs-server/./api/documents/graphql/mutations.js?");

/***/ }),

/***/ "./api/documents/graphql/queries.js":
/*!******************************************!*\
  !*** ./api/documents/graphql/queries.js ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_isDocumentOwner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/isDocumentOwner */ \"./lib/isDocumentOwner.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ \"./api/documents/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index__WEBPACK_IMPORTED_MODULE_3__, _lib_isDocumentOwner__WEBPACK_IMPORTED_MODULE_2__]);\n([_index__WEBPACK_IMPORTED_MODULE_3__, _lib_isDocumentOwner__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  documents: function () {\n    var _documents = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(parent, args, context) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              return _context.abrupt(\"return\", _index__WEBPACK_IMPORTED_MODULE_3__[\"default\"].find({\n                userId: context.user._id\n              }).toArray());\n\n            case 1:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    function documents(_x, _x2, _x3) {\n      return _documents.apply(this, arguments);\n    }\n\n    return documents;\n  }(),\n  document: function () {\n    var _document = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(parent, args, context) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return (0,_lib_isDocumentOwner__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(args.documentId, context.user._id);\n\n            case 2:\n              return _context2.abrupt(\"return\", _index__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n                _id: args.documentId,\n                userId: context.user._id\n              }));\n\n            case 3:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    function document(_x4, _x5, _x6) {\n      return _document.apply(this, arguments);\n    }\n\n    return document;\n  }()\n});\n});\n\n//# sourceURL=webpack://nodejs-server/./api/documents/graphql/queries.js?");

/***/ }),

/***/ "./api/documents/graphql/types.js":
/*!****************************************!*\
  !*** ./api/documents/graphql/types.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar DocumentFields = \"\\n  title: String\\n  status: DocumentStatus\\n  createdAt: String\\n  updatedAt: String\\n  content: String\\n\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"\\n  type Document {\\n    _id: ID\\n    userId: ID\\n    \".concat(DocumentFields, \"\\n  }\\n\\n  enum DocumentStatus {\\n    draft\\n    published\\n  }\\n\\n  input DocumentInput {\\n    \").concat(DocumentFields, \"\\n  }\\n\"));\n\n//# sourceURL=webpack://nodejs-server/./api/documents/graphql/types.js?");

/***/ }),

/***/ "./api/documents/index.js":
/*!********************************!*\
  !*** ./api/documents/index.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/mongodb */ \"./lib/mongodb.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__]);\n_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Collection(\"documents\"));\n});\n\n//# sourceURL=webpack://nodejs-server/./api/documents/index.js?");

/***/ }),

/***/ "./api/fixtures/index.js":
/*!*******************************!*\
  !*** ./api/fixtures/index.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users */ \"./api/fixtures/users.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_users__WEBPACK_IMPORTED_MODULE_0__]);\n_users__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n(0,_users__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n});\n\n//# sourceURL=webpack://nodejs-server/./api/fixtures/index.js?");

/***/ }),

/***/ "./api/fixtures/users.js":
/*!*******************************!*\
  !*** ./api/fixtures/users.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users */ \"./api/users/index.js\");\n/* harmony import */ var _users_signup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users/signup */ \"./api/users/signup.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_users_signup__WEBPACK_IMPORTED_MODULE_3__, _users__WEBPACK_IMPORTED_MODULE_2__]);\n([_users_signup__WEBPACK_IMPORTED_MODULE_3__, _users__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n\n\nvar users = [{\n  emailAddress: \"admin@admin.com\",\n  password: \"password\",\n  name: {\n    first: \"Thomas\",\n    last: \"Sowell\"\n  }\n}];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n  var i, userToInsert, existingUser;\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          i = 0;\n\n        case 1:\n          if (!(i < users.length)) {\n            _context.next = 12;\n            break;\n          }\n\n          userToInsert = users[i];\n          _context.next = 5;\n          return _users__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n            emailAddress: userToInsert.emailAddress\n          });\n\n        case 5:\n          existingUser = _context.sent;\n\n          if (existingUser) {\n            _context.next = 9;\n            break;\n          }\n\n          _context.next = 9;\n          return (0,_users_signup__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(userToInsert);\n\n        case 9:\n          i += 1;\n          _context.next = 1;\n          break;\n\n        case 12:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n})));\n});\n\n//# sourceURL=webpack://nodejs-server/./api/fixtures/users.js?");

/***/ }),

/***/ "./api/graphql/schema.js":
/*!*******************************!*\
  !*** ./api/graphql/schema.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"@babel/runtime/helpers/taggedTemplateLiteral\");\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _graphql_tools_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @graphql-tools/schema */ \"@graphql-tools/schema\");\n/* harmony import */ var _graphql_tools_schema__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_graphql_tools_schema__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _documents_graphql_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../documents/graphql/types */ \"./api/documents/graphql/types.js\");\n/* harmony import */ var _documents_graphql_queries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../documents/graphql/queries */ \"./api/documents/graphql/queries.js\");\n/* harmony import */ var _documents_graphql_mutations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../documents/graphql/mutations */ \"./api/documents/graphql/mutations.js\");\n/* harmony import */ var _users_graphql_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../users/graphql/types */ \"./api/users/graphql/types.js\");\n/* harmony import */ var _users_graphql_queries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../users/graphql/queries */ \"./api/users/graphql/queries.js\");\n/* harmony import */ var _users_graphql_mutations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../users/graphql/mutations */ \"./api/users/graphql/mutations.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_users_graphql_mutations__WEBPACK_IMPORTED_MODULE_9__, _documents_graphql_mutations__WEBPACK_IMPORTED_MODULE_6__, _documents_graphql_queries__WEBPACK_IMPORTED_MODULE_5__]);\n([_users_graphql_mutations__WEBPACK_IMPORTED_MODULE_9__, _documents_graphql_mutations__WEBPACK_IMPORTED_MODULE_6__, _documents_graphql_queries__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n\nvar _templateObject;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\nvar schema = {\n  typeDefs: graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()([\"\\n    \", \"\\n    \", \"\\n\\n    type Query {\\n      document(documentId: ID!): Document\\n      documents: [Document]\\n      user: User\\n    }\\n\\n    type Mutation {\\n      createDocument(document: DocumentInput!): Document\\n      deleteDocument(documentId: ID!): Document\\n      login(emailAddress: String!, password: String!): User\\n      loginWithToken: User\\n      logout: Boolean\\n      recoverPassword(emailAddress: String!): Boolean\\n      resetPassword(\\n        token: String!\\n        newPassword: String!\\n        repeatNewPassword: String!\\n      ): Boolean\\n      signup(user: UserInput): User\\n      updateDocument(documentId: ID!, document: DocumentInput!): Document\\n    }\\n  \"])), _documents_graphql_types__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _users_graphql_types__WEBPACK_IMPORTED_MODULE_7__[\"default\"]),\n  resolvers: {\n    Query: _objectSpread(_objectSpread({}, _documents_graphql_queries__WEBPACK_IMPORTED_MODULE_5__[\"default\"]), _users_graphql_queries__WEBPACK_IMPORTED_MODULE_8__[\"default\"]),\n    Mutation: _objectSpread(_objectSpread({}, _documents_graphql_mutations__WEBPACK_IMPORTED_MODULE_6__[\"default\"]), _users_graphql_mutations__WEBPACK_IMPORTED_MODULE_9__[\"default\"])\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_graphql_tools_schema__WEBPACK_IMPORTED_MODULE_3__.makeExecutableSchema)(schema));\n});\n\n//# sourceURL=webpack://nodejs-server/./api/graphql/schema.js?");

/***/ }),

/***/ "./api/graphql/server.js":
/*!*******************************!*\
  !*** ./api/graphql/server.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\n/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schema */ \"./api/graphql/schema.js\");\n/* harmony import */ var _app_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../.app/environment */ \"./.app/environment.js\");\n/* harmony import */ var _users_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../users/token */ \"./api/users/token.js\");\n/* harmony import */ var _middleware_cors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../middleware/cors */ \"./middleware/cors.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_users_token__WEBPACK_IMPORTED_MODULE_5__, _schema__WEBPACK_IMPORTED_MODULE_3__]);\n([_users_token__WEBPACK_IMPORTED_MODULE_5__, _schema__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(app) {\n    var server;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            server = new apollo_server_express__WEBPACK_IMPORTED_MODULE_2__.ApolloServer({\n              schema: _schema__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n              introspection: _app_environment__WEBPACK_IMPORTED_MODULE_4__.isDevelopment,\n              playground: _app_environment__WEBPACK_IMPORTED_MODULE_4__.isDevelopment,\n              context: function () {\n                var _context = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(_ref2) {\n                  var req, res, token, context, user;\n                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context2) {\n                    while (1) {\n                      switch (_context2.prev = _context2.next) {\n                        case 0:\n                          req = _ref2.req, res = _ref2.res;\n                          token = req === null || req === void 0 ? void 0 : req.cookies[\"app_login_token\"];\n                          context = {\n                            req: req,\n                            res: res,\n                            user: {}\n                          };\n\n                          if (!token) {\n                            _context2.next = 9;\n                            break;\n                          }\n\n                          _context2.next = 6;\n                          return (0,_users_token__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n                            token: token\n                          });\n\n                        case 6:\n                          _context2.t0 = _context2.sent;\n                          _context2.next = 10;\n                          break;\n\n                        case 9:\n                          _context2.t0 = null;\n\n                        case 10:\n                          user = _context2.t0;\n\n                          if (!(user !== null && user !== void 0 && user.error)) {\n                            context.user = user;\n                          }\n\n                          return _context2.abrupt(\"return\", context);\n\n                        case 13:\n                        case \"end\":\n                          return _context2.stop();\n                      }\n                    }\n                  }, _callee);\n                }));\n\n                function context(_x2) {\n                  return _context.apply(this, arguments);\n                }\n\n                return context;\n              }()\n            });\n            _context3.next = 3;\n            return server.start();\n\n          case 3:\n            server.applyMiddleware({\n              cors: _middleware_cors__WEBPACK_IMPORTED_MODULE_6__.configuration,\n              app: app,\n              path: \"/api/graphql\"\n            });\n\n          case 4:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n})());\n});\n\n//# sourceURL=webpack://nodejs-server/./api/graphql/server.js?");

/***/ }),

/***/ "./api/index.js":
/*!**********************!*\
  !*** ./api/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _graphql_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graphql/server */ \"./api/graphql/server.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_graphql_server__WEBPACK_IMPORTED_MODULE_0__]);\n_graphql_server__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (app) {\n  (0,_graphql_server__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(app);\n});\n});\n\n//# sourceURL=webpack://nodejs-server/./api/index.js?");

/***/ }),

/***/ "./api/users/decryptLoginToken.js":
/*!****************************************!*\
  !*** ./api/users/decryptLoginToken.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_formatErrorString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/formatErrorString */ \"./lib/formatErrorString.js\");\n/* harmony import */ var _lib_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/settings */ \"./lib/settings.js\");\n/* eslint-disable consistent-return */\n\n\n\n\nvar validateOptions = function validateOptions(options) {\n  try {\n    if (!options) throw new Error(\"options object is required.\");\n    if (!options.token) throw new Error(\"options.token is required.\");\n  } catch (error) {\n    throw new Error((0,_lib_formatErrorString__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"decryptLoginToken.validateOptions\", error));\n  }\n};\n\nvar decryptLoginToken = function decryptLoginToken(options, _ref) {\n  var resolve = _ref.resolve,\n      reject = _ref.reject;\n\n  try {\n    validateOptions(options);\n    var decryptedLoginToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(options.token, _lib_settings__WEBPACK_IMPORTED_MODULE_2__[\"default\"].authentication.token);\n    resolve(decryptedLoginToken);\n  } catch (error) {\n    reject((0,_lib_formatErrorString__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"decryptLoginToken\", error));\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (options) {\n  return new Promise(function (resolve, reject) {\n    decryptLoginToken(options, {\n      resolve: resolve,\n      reject: reject\n    });\n  });\n});\n\n//# sourceURL=webpack://nodejs-server/./api/users/decryptLoginToken.js?");

/***/ }),

/***/ "./api/users/encryptLoginToken.js":
/*!****************************************!*\
  !*** ./api/users/encryptLoginToken.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ \"dayjs\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_formatErrorString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/formatErrorString */ \"./lib/formatErrorString.js\");\n/* harmony import */ var _lib_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/settings */ \"./lib/settings.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/* eslint-disable consistent-return */\n\n\n\n\n\nvar validateOptions = function validateOptions(options) {\n  try {\n    if (!options) throw new Error(\"options object is required.\");\n    if (!options.userId) throw new Error(\"options.userId is required.\");\n    if (!options.emailAddress) throw new Error(\"options.emailAddress is required.\");\n    if (!options.password) throw new Error(\"options.password is required.\");\n  } catch (error) {\n    throw new Error((0,_lib_formatErrorString__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"encryptLoginToken.validateOptions\", error));\n  }\n};\n\nvar encryptLoginToken = function encryptLoginToken(options, _ref) {\n  var resolve = _ref.resolve,\n      reject = _ref.reject;\n\n  try {\n    validateOptions(options);\n    var token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign(_objectSpread({}, options), _lib_settings__WEBPACK_IMPORTED_MODULE_4__[\"default\"].authentication.token, {\n      expiresIn: \"30 days\"\n    });\n    resolve({\n      token: token,\n      tokenExpiresAt: dayjs__WEBPACK_IMPORTED_MODULE_2___default()().add(30, \"days\").format()\n    });\n  } catch (error) {\n    reject((0,_lib_formatErrorString__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"encryptLoginToken\", error));\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (options) {\n  return new Promise(function (resolve, reject) {\n    encryptLoginToken(options, {\n      resolve: resolve,\n      reject: reject\n    });\n  });\n});\n\n//# sourceURL=webpack://nodejs-server/./api/users/encryptLoginToken.js?");

/***/ }),

/***/ "./api/users/generateResetToken.js":
/*!*****************************************!*\
  !*** ./api/users/generateResetToken.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var crypto_extra__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto-extra */ \"crypto-extra\");\n/* harmony import */ var crypto_extra__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_extra__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ \"./api/users/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index__WEBPACK_IMPORTED_MODULE_3__]);\n_index__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\n/* eslint-disable consistent-return */\n\n\n\nvar setTokenOnUser = function setTokenOnUser() {\n  var emailAddress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n  var token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"\";\n\n  try {\n    return _index__WEBPACK_IMPORTED_MODULE_3__[\"default\"].updateOne({\n      emailAddress: emailAddress\n    }, {\n      $addToSet: {\n        passwordResetTokens: {\n          token: token,\n          requestedAt: new Date().toISOString()\n        }\n      }\n    });\n  } catch (exception) {\n    throw new Error(\"[generatePasswordResetToken.setTokenOnUser] \".concat(exception.message));\n  }\n};\n\nvar validateOptions = function validateOptions(options) {\n  try {\n    if (!options) throw new Error(\"options object is required.\");\n    if (!options.emailAddress) throw new Error(\"options.emailAddress is required.\");\n  } catch (exception) {\n    throw new Error(\"[generatePasswordResetToken.validateOptions] \".concat(exception.message));\n  }\n};\n\nvar generatePasswordResetToken = /*#__PURE__*/function () {\n  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(options, _ref) {\n    var resolve, reject, token;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            resolve = _ref.resolve, reject = _ref.reject;\n            _context.prev = 1;\n            validateOptions(options);\n            token = crypto_extra__WEBPACK_IMPORTED_MODULE_2___default().randomString(32);\n            _context.next = 6;\n            return setTokenOnUser(options.emailAddress, token);\n\n          case 6:\n            resolve(token);\n            _context.next = 12;\n            break;\n\n          case 9:\n            _context.prev = 9;\n            _context.t0 = _context[\"catch\"](1);\n            reject(\"[generatePasswordResetToken] \".concat(_context.t0.message));\n\n          case 12:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[1, 9]]);\n  }));\n\n  return function generatePasswordResetToken(_x, _x2) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (options) {\n  return new Promise(function (resolve, reject) {\n    generatePasswordResetToken(options, {\n      resolve: resolve,\n      reject: reject\n    });\n  });\n});\n});\n\n//# sourceURL=webpack://nodejs-server/./api/users/generateResetToken.js?");

/***/ }),

/***/ "./api/users/getBaseAuthenticationCookie.js":
/*!**************************************************!*\
  !*** ./api/users/getBaseAuthenticationCookie.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ \"dayjs\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  var tokenExpiresAt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n  return {\n    secure: \"development\" !== \"development\",\n    httpOnly: true,\n    expires: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(tokenExpiresAt).toDate()\n  };\n});\n\n//# sourceURL=webpack://nodejs-server/./api/users/getBaseAuthenticationCookie.js?");

/***/ }),

/***/ "./api/users/getExistingUserByEmail.js":
/*!*********************************************!*\
  !*** ./api/users/getExistingUserByEmail.js ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ \"./api/users/index.js\");\n/* harmony import */ var _lib_formatErrorString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/formatErrorString */ \"./lib/formatErrorString.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index__WEBPACK_IMPORTED_MODULE_2__]);\n_index__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\n/* eslint-disable consistent-return */\n\n\n\nvar getUser = function getUser() {\n  var emailAddress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n\n  try {\n    return _index__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n      emailAddress: emailAddress\n    });\n  } catch (error) {\n    throw new Error((0,_lib_formatErrorString__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"getExistingUserByEmail.getUser\", error));\n  }\n};\n\nvar validateOptions = function validateOptions(options) {\n  try {\n    if (!options) throw new Error(\"options object is required.\");\n    if (!options.emailAddress) throw new Error(\"options.emailAddress is required.\");\n  } catch (error) {\n    throw new Error((0,_lib_formatErrorString__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"getExistingUserByEmail.validateOptions\", error));\n  }\n};\n\nvar getExistingUserByEmail = /*#__PURE__*/function () {\n  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(options, _ref) {\n    var resolve, reject, user;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            resolve = _ref.resolve, reject = _ref.reject;\n            _context.prev = 1;\n            validateOptions(options);\n            _context.next = 5;\n            return getUser(options.emailAddress);\n\n          case 5:\n            user = _context.sent;\n            resolve(user);\n            _context.next = 12;\n            break;\n\n          case 9:\n            _context.prev = 9;\n            _context.t0 = _context[\"catch\"](1);\n            throw new Error((0,_lib_formatErrorString__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"getExistingUserByEmail\", _context.t0));\n\n          case 12:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[1, 9]]);\n  }));\n\n  return function getExistingUserByEmail(_x, _x2) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (options) {\n  return new Promise(function (resolve, reject) {\n    getExistingUserByEmail(options, {\n      resolve: resolve,\n      reject: reject\n    });\n  });\n});\n});\n\n//# sourceURL=webpack://nodejs-server/./api/users/getExistingUserByEmail.js?");

/***/ }),

/***/ "./api/users/getExistingUserByEmailPassword.js":
/*!*****************************************************!*\
  !*** ./api/users/getExistingUserByEmailPassword.js ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ \"./api/users/index.js\");\n/* harmony import */ var _lib_formatErrorString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/formatErrorString */ \"./lib/formatErrorString.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index__WEBPACK_IMPORTED_MODULE_2__]);\n_index__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\n/* eslint-disable consistent-return */\n\n\n\nvar getUser = function getUser() {\n  var emailAddress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n  var password = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"\";\n\n  try {\n    return _index__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n      emailAddress: emailAddress,\n      password: password\n    });\n  } catch (error) {\n    throw new Error((0,_lib_formatErrorString__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"getExistingUserByEmailPassword.getUser\", error));\n  }\n};\n\nvar validateOptions = function validateOptions(options) {\n  try {\n    if (!options) throw new Error(\"options object is required.\");\n    if (!options.emailAddress) throw new Error(\"options.emailAddress is required.\");\n    if (!options.password) throw new Error(\"options.password is required.\");\n  } catch (error) {\n    throw new Error((0,_lib_formatErrorString__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"getExistingUserByEmailPassword.validateOptions\", error));\n  }\n};\n\nvar getExistingUserByEmailPassword = /*#__PURE__*/function () {\n  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(options, _ref) {\n    var resolve, reject, user;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            resolve = _ref.resolve, reject = _ref.reject;\n            _context.prev = 1;\n            validateOptions(options);\n            _context.next = 5;\n            return getUser(options.emailAddress, options.password);\n\n          case 5:\n            user = _context.sent;\n            resolve(user);\n            _context.next = 12;\n            break;\n\n          case 9:\n            _context.prev = 9;\n            _context.t0 = _context[\"catch\"](1);\n            throw new Error((0,_lib_formatErrorString__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"getExistingUserByEmailPassword\", _context.t0));\n\n          case 12:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[1, 9]]);\n  }));\n\n  return function getExistingUserByEmailPassword(_x, _x2) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (options) {\n  return new Promise(function (resolve, reject) {\n    getExistingUserByEmailPassword(options, {\n      resolve: resolve,\n      reject: reject\n    });\n  });\n});\n});\n\n//# sourceURL=webpack://nodejs-server/./api/users/getExistingUserByEmailPassword.js?");

/***/ }),

/***/ "./api/users/graphql/mutations.js":
/*!****************************************!*\
  !*** ./api/users/graphql/mutations.js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _signup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../signup */ \"./api/users/signup.js\");\n/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login */ \"./api/users/login.js\");\n/* harmony import */ var _setAuthenticationCookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../setAuthenticationCookie */ \"./api/users/setAuthenticationCookie.js\");\n/* harmony import */ var _unsetAuthenticationCookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../unsetAuthenticationCookie */ \"./api/users/unsetAuthenticationCookie.js\");\n/* harmony import */ var _generateResetToken__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../generateResetToken */ \"./api/users/generateResetToken.js\");\n/* harmony import */ var _resetPassword__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../resetPassword */ \"./api/users/resetPassword.js\");\n/* harmony import */ var _lib_email_send__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../lib/email/send */ \"./lib/email/send.js\");\n/* harmony import */ var _lib_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../lib/settings */ \"./lib/settings.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_resetPassword__WEBPACK_IMPORTED_MODULE_8__, _generateResetToken__WEBPACK_IMPORTED_MODULE_7__, _login__WEBPACK_IMPORTED_MODULE_4__, _signup__WEBPACK_IMPORTED_MODULE_3__]);\n([_resetPassword__WEBPACK_IMPORTED_MODULE_8__, _generateResetToken__WEBPACK_IMPORTED_MODULE_7__, _login__WEBPACK_IMPORTED_MODULE_4__, _signup__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  signup: function signup(parent, args, context) {\n    return (0,_signup__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_objectSpread({}, args.user)).then( /*#__PURE__*/function () {\n      var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(response) {\n        var user, token, tokenExpiresAt;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                user = response.user, token = response.token, tokenExpiresAt = response.tokenExpiresAt;\n                (0,_setAuthenticationCookie__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(context.res, {\n                  token: token,\n                  tokenExpiresAt: tokenExpiresAt\n                });\n                return _context.abrupt(\"return\", user);\n\n              case 3:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref.apply(this, arguments);\n      };\n    }());\n  },\n  login: function login(parent, args, context) {\n    return (0,_login__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_objectSpread({}, args)).then(function (response) {\n      var user = response.user,\n          token = response.token,\n          tokenExpiresAt = response.tokenExpiresAt;\n      (0,_setAuthenticationCookie__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(context.res, {\n        token: token,\n        tokenExpiresAt: tokenExpiresAt\n      });\n      return user;\n    });\n  },\n  loginWithToken: function loginWithToken(parent, args, context) {\n    // NOTE: loginWithToken() is called automatically in the context callback\n    // of ApolloServer which will set a user on context if the token is valid.\n    if (!context.user) {\n      throw new Error(\"Invalid token. Please login again.\");\n    }\n\n    return context.user;\n  },\n  recoverPassword: function () {\n    var _recoverPassword = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(parent, args, context) {\n      var _settings$urls, _settings$support;\n\n      var resetToken, resetLink;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return (0,_generateResetToken__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n                emailAddress: args.emailAddress\n              });\n\n            case 2:\n              resetToken = _context2.sent;\n              resetLink = \"\".concat(_lib_settings__WEBPACK_IMPORTED_MODULE_10__[\"default\"] === null || _lib_settings__WEBPACK_IMPORTED_MODULE_10__[\"default\"] === void 0 ? void 0 : (_settings$urls = _lib_settings__WEBPACK_IMPORTED_MODULE_10__[\"default\"].urls) === null || _settings$urls === void 0 ? void 0 : _settings$urls.app, \"/reset-password/\").concat(resetToken);\n\n              if (true) {\n                console.log({\n                  resetLink: resetLink\n                });\n              }\n\n              _context2.next = 7;\n              return (0,_lib_email_send__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({\n                to: args.emailAddress,\n                from: _lib_settings__WEBPACK_IMPORTED_MODULE_10__[\"default\"] === null || _lib_settings__WEBPACK_IMPORTED_MODULE_10__[\"default\"] === void 0 ? void 0 : (_settings$support = _lib_settings__WEBPACK_IMPORTED_MODULE_10__[\"default\"].support) === null || _settings$support === void 0 ? void 0 : _settings$support.email,\n                subject: \"Reset Your Password\",\n                template: \"reset-password\",\n                templateVars: {\n                  emailAddress: args.emailAddress,\n                  resetLink: resetLink\n                }\n              });\n\n            case 7:\n              return _context2.abrupt(\"return\", true);\n\n            case 8:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    function recoverPassword(_x2, _x3, _x4) {\n      return _recoverPassword.apply(this, arguments);\n    }\n\n    return recoverPassword;\n  }(),\n  resetPassword: function resetPassword(parent, args, context) {\n    return (0,_resetPassword__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_objectSpread({}, args)).then(function (response) {\n      var user = response.user,\n          token = response.token,\n          tokenExpiresAt = response.tokenExpiresAt;\n      (0,_setAuthenticationCookie__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(context.res, {\n        token: token,\n        tokenExpiresAt: tokenExpiresAt\n      });\n      return true;\n    });\n  },\n  logout: function logout(parent, args, context) {\n    return (0,_unsetAuthenticationCookie__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(context.res);\n  }\n});\n});\n\n//# sourceURL=webpack://nodejs-server/./api/users/graphql/mutations.js?");

/***/ }),

/***/ "./api/users/graphql/queries.js":
/*!**************************************!*\
  !*** ./api/users/graphql/queries.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  user: function user(parent, args, context) {\n    return context.user;\n  }\n});\n\n//# sourceURL=webpack://nodejs-server/./api/users/graphql/queries.js?");

/***/ }),

/***/ "./api/users/graphql/types.js":
/*!************************************!*\
  !*** ./api/users/graphql/types.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar UserFields = \"\\n  _id: ID\\n  emailAddress: String\\n\";\nvar NameFields = \"\\n  first: String\\n  last: String\\n\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"\\n  type User {\\n    \".concat(UserFields, \"\\n    name: Name\\n  }\\n\\n  type Name {\\n    \").concat(NameFields, \"\\n  }\\n\\n  input UserInput {\\n    \").concat(UserFields, \"\\n    password: String\\n    name: NameInput\\n  }\\n\\n  input NameInput {\\n    \").concat(NameFields, \"  \\n  }\\n\"));\n\n//# sourceURL=webpack://nodejs-server/./api/users/graphql/types.js?");

/***/ }),

/***/ "./api/users/hashString.js":
/*!*********************************!*\
  !*** ./api/users/hashString.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (string) {\n  return bcrypt__WEBPACK_IMPORTED_MODULE_0___default().hash(string, 10);\n});\n\n//# sourceURL=webpack://nodejs-server/./api/users/hashString.js?");

/***/ }),

/***/ "./api/users/index.js":
/*!****************************!*\
  !*** ./api/users/index.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/mongodb */ \"./lib/mongodb.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__]);\n_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Collection(\"users\"));\n});\n\n//# sourceURL=webpack://nodejs-server/./api/users/index.js?");

/***/ }),

/***/ "./api/users/login.js":
/*!****************************!*\
  !*** ./api/users/login.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ \"@babel/runtime/helpers/objectWithoutProperties\");\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index */ \"./api/users/index.js\");\n/* harmony import */ var _encryptLoginToken__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./encryptLoginToken */ \"./api/users/encryptLoginToken.js\");\n/* harmony import */ var _getExistingUserByEmail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getExistingUserByEmail */ \"./api/users/getExistingUserByEmail.js\");\n/* harmony import */ var _lib_formatErrorString__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/formatErrorString */ \"./lib/formatErrorString.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_getExistingUserByEmail__WEBPACK_IMPORTED_MODULE_7__, _index__WEBPACK_IMPORTED_MODULE_5__]);\n([_getExistingUserByEmail__WEBPACK_IMPORTED_MODULE_7__, _index__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n\nvar _excluded = [\"password\", \"sessions\"];\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/* eslint-disable consistent-return */\n\n\n\n\n\n\nvar addSessionToUser = function addSessionToUser() {\n  var userId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n  var session = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n\n  try {\n    return _index__WEBPACK_IMPORTED_MODULE_5__[\"default\"].updateOne({\n      _id: userId\n    }, {\n      $addToSet: {\n        sessions: session\n      }\n    });\n  } catch (error) {\n    throw new Error((0,_lib_formatErrorString__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"login.addSessionToUser\", error));\n  }\n};\n\nvar checkIfValidPassword = function checkIfValidPassword() {\n  var passwordFromLogin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n  var passwordHashFromUser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n\n  try {\n    if (!passwordFromLogin || !passwordHashFromUser) return false;\n    return bcrypt__WEBPACK_IMPORTED_MODULE_4___default().compare(passwordFromLogin, passwordHashFromUser);\n  } catch (error) {\n    throw new Error((0,_lib_formatErrorString__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"login.checkIfValidPassword\", error));\n  }\n};\n\nvar validateOptions = function validateOptions(options) {\n  try {\n    if (!options) throw new Error(\"options object is required.\");\n    if (!options.emailAddress) throw new Error(\"options.emailAddress is required.\");\n    if (!options.password) throw new Error(\"options.password is required.\");\n  } catch (error) {\n    throw new Error((0,_lib_formatErrorString__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"login.validateOptions\", error));\n  }\n};\n\nvar login = /*#__PURE__*/function () {\n  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(options, _ref) {\n    var resolve, reject, existingUser, isValidPassword, _login, password, sessions, restOfExistingUser;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            resolve = _ref.resolve, reject = _ref.reject;\n            _context.prev = 1;\n            validateOptions(options);\n            _context.next = 5;\n            return (0,_getExistingUserByEmail__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n              emailAddress: options.emailAddress\n            });\n\n          case 5:\n            existingUser = _context.sent;\n\n            if (existingUser) {\n              _context.next = 8;\n              break;\n            }\n\n            return _context.abrupt(\"return\", reject(\"A user with the email address \".concat(options.emailAddress, \" could not be found.\")));\n\n          case 8:\n            _context.next = 10;\n            return checkIfValidPassword(options.password, existingUser.password);\n\n          case 10:\n            isValidPassword = _context.sent;\n\n            if (isValidPassword) {\n              _context.next = 13;\n              break;\n            }\n\n            return _context.abrupt(\"return\", reject(\"Incorrect password.\"));\n\n          case 13:\n            _context.next = 15;\n            return (0,_encryptLoginToken__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n              userId: existingUser._id,\n              emailAddress: options.emailAddress,\n              password: existingUser.password\n            });\n\n          case 15:\n            _login = _context.sent;\n            _context.next = 18;\n            return addSessionToUser(existingUser._id, _login);\n\n          case 18:\n            password = existingUser.password, sessions = existingUser.sessions, restOfExistingUser = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(existingUser, _excluded);\n            return _context.abrupt(\"return\", resolve(_objectSpread(_objectSpread({}, _login), {}, {\n              user: _objectSpread({}, restOfExistingUser)\n            })));\n\n          case 22:\n            _context.prev = 22;\n            _context.t0 = _context[\"catch\"](1);\n            reject((0,_lib_formatErrorString__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"login\", _context.t0));\n\n          case 25:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[1, 22]]);\n  }));\n\n  return function login(_x, _x2) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (options) {\n  return new Promise(function (resolve, reject) {\n    login(options, {\n      resolve: resolve,\n      reject: reject\n    });\n  });\n});\n});\n\n//# sourceURL=webpack://nodejs-server/./api/users/login.js?");

/***/ }),

/***/ "./api/users/resetPassword.js":
/*!************************************!*\
  !*** ./api/users/resetPassword.js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ \"./api/users/index.js\");\n/* harmony import */ var _hashString__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hashString */ \"./api/users/hashString.js\");\n/* harmony import */ var _encryptLoginToken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./encryptLoginToken */ \"./api/users/encryptLoginToken.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index__WEBPACK_IMPORTED_MODULE_3__]);\n_index__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n/* eslint-disable consistent-return */\n\n\n\n\nvar addSessionToUser = function addSessionToUser() {\n  var userId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n  var session = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n\n  try {\n    return _index__WEBPACK_IMPORTED_MODULE_3__[\"default\"].updateOne({\n      _id: userId\n    }, {\n      $addToSet: {\n        sessions: session\n      }\n    });\n  } catch (error) {\n    throw new Error(formatErrorString(\"resetPassword.addSessionToUser\", error));\n  }\n};\n\nvar setNewPasswordOnUser = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n    var userId,\n        password,\n        hashedPassword,\n        _args = arguments;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            userId = _args.length > 0 && _args[0] !== undefined ? _args[0] : \"\";\n            password = _args.length > 1 && _args[1] !== undefined ? _args[1] : \"\";\n            _context.prev = 2;\n            _context.next = 5;\n            return (0,_hashString__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(password);\n\n          case 5:\n            hashedPassword = _context.sent;\n            _context.next = 8;\n            return _index__WEBPACK_IMPORTED_MODULE_3__[\"default\"].updateOne({\n              _id: userId\n            }, {\n              $set: {\n                password: hashedPassword\n              }\n            });\n\n          case 8:\n            return _context.abrupt(\"return\", hashedPassword);\n\n          case 11:\n            _context.prev = 11;\n            _context.t0 = _context[\"catch\"](2);\n            throw new Error(\"[actionName.setNewPasswordOnUser] \".concat(_context.t0.message));\n\n          case 14:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[2, 11]]);\n  }));\n\n  return function setNewPasswordOnUser() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar getUserWithToken = function getUserWithToken() {\n  var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n\n  try {\n    return _index__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n      \"passwordResetTokens.token\": token\n    });\n  } catch (exception) {\n    throw new Error(\"[resetPassword.getUserWithToken] \".concat(exception.message));\n  }\n};\n\nvar validateOptions = function validateOptions(options) {\n  try {\n    if (!options) throw new Error(\"options object is required.\");\n    if (!options.token) throw new Error(\"options.token is required.\");\n    if (!options.newPassword) throw new Error(\"options.newPassword is required.\");\n    if (!options.repeatNewPassword) throw new Error(\"options.repeatNewPassword is required.\");\n  } catch (exception) {\n    throw new Error(\"[resetPassword.validateOptions] \".concat(exception.message));\n  }\n};\n\nvar resetPassword = /*#__PURE__*/function () {\n  var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(options, _ref2) {\n    var resolve, reject, user, hashedNewPassword, login;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            resolve = _ref2.resolve, reject = _ref2.reject;\n            _context2.prev = 1;\n            validateOptions(options);\n            _context2.next = 5;\n            return getUserWithToken(options.token);\n\n          case 5:\n            user = _context2.sent;\n\n            if (user) {\n              _context2.next = 8;\n              break;\n            }\n\n            throw new Error(\"Sorry, that token is invalid. Please try again.\");\n\n          case 8:\n            if (!(options.newPassword !== options.repeatNewPassword)) {\n              _context2.next = 10;\n              break;\n            }\n\n            throw new Error(\"Passwords must match. Please double-check your passwords match and try again.\");\n\n          case 10:\n            _context2.next = 12;\n            return setNewPasswordOnUser(user === null || user === void 0 ? void 0 : user._id, options.newPassword);\n\n          case 12:\n            hashedNewPassword = _context2.sent;\n            _context2.next = 15;\n            return (0,_encryptLoginToken__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n              userId: user === null || user === void 0 ? void 0 : user._id,\n              emailAddress: user === null || user === void 0 ? void 0 : user.emailAddress,\n              password: hashedNewPassword\n            });\n\n          case 15:\n            login = _context2.sent;\n            _context2.next = 18;\n            return addSessionToUser(user === null || user === void 0 ? void 0 : user._id, login);\n\n          case 18:\n            resolve(_objectSpread({\n              user: user\n            }, login));\n            _context2.next = 24;\n            break;\n\n          case 21:\n            _context2.prev = 21;\n            _context2.t0 = _context2[\"catch\"](1);\n            reject(\"[resetPassword] \".concat(_context2.t0.message));\n\n          case 24:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[1, 21]]);\n  }));\n\n  return function resetPassword(_x, _x2) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (options) {\n  return new Promise(function (resolve, reject) {\n    resetPassword(options, {\n      resolve: resolve,\n      reject: reject\n    });\n  });\n});\n});\n\n//# sourceURL=webpack://nodejs-server/./api/users/resetPassword.js?");

/***/ }),

/***/ "./api/users/setAuthenticationCookie.js":
/*!**********************************************!*\
  !*** ./api/users/setAuthenticationCookie.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getBaseAuthenticationCookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBaseAuthenticationCookie */ \"./api/users/getBaseAuthenticationCookie.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n  var authentication = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n  if (!res || !authentication) return null;\n  res.cookie(\"app_login_token\", authentication.token, (0,_getBaseAuthenticationCookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(authentication.tokenExpiresAt));\n  res.cookie(\"app_login_tokenExpiresAt\", authentication.tokenExpiresAt, (0,_getBaseAuthenticationCookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(authentication.tokenExpiresAt));\n  return res;\n});\n\n//# sourceURL=webpack://nodejs-server/./api/users/setAuthenticationCookie.js?");

/***/ }),

/***/ "./api/users/signup.js":
/*!*****************************!*\
  !*** ./api/users/signup.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ \"./api/users/index.js\");\n/* harmony import */ var _hashString__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hashString */ \"./api/users/hashString.js\");\n/* harmony import */ var _encryptLoginToken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./encryptLoginToken */ \"./api/users/encryptLoginToken.js\");\n/* harmony import */ var _lib_generateId__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/generateId */ \"./lib/generateId.js\");\n/* harmony import */ var _lib_formatErrorString__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/formatErrorString */ \"./lib/formatErrorString.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index__WEBPACK_IMPORTED_MODULE_3__]);\n_index__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/* eslint-disable consistent-return */\n\n\n\n\n\n\nvar addSessionToUser = function addSessionToUser() {\n  var userId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n  var session = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n\n  try {\n    return _index__WEBPACK_IMPORTED_MODULE_3__[\"default\"].updateOne({\n      _id: userId\n    }, {\n      $addToSet: {\n        sessions: session\n      }\n    });\n  } catch (error) {\n    throw new Error((0,_lib_formatErrorString__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"signup.addSessionToUser\", error));\n  }\n};\n\nvar getUserByUserId = function getUserByUserId() {\n  var userId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n\n  try {\n    return _index__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n      _id: userId\n    });\n  } catch (exception) {\n    throw new Error((0,_lib_formatErrorString__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"signup.getUserByUserId\", exception));\n  }\n};\n\nvar insertUserInDatabase = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n    var user,\n        userId,\n        _args = arguments;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            user = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};\n            _context.prev = 1;\n            userId = (0,_lib_generateId__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n            _context.next = 5;\n            return _index__WEBPACK_IMPORTED_MODULE_3__[\"default\"].insertOne(_objectSpread({\n              _id: userId\n            }, user));\n\n          case 5:\n            return _context.abrupt(\"return\", userId);\n\n          case 8:\n            _context.prev = 8;\n            _context.t0 = _context[\"catch\"](1);\n            throw new Error((0,_lib_formatErrorString__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"signup.insertUserInDatabase\", _context.t0));\n\n          case 11:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[1, 8]]);\n  }));\n\n  return function insertUserInDatabase() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar getUserToCreate = /*#__PURE__*/function () {\n  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {\n    var options,\n        _args2 = arguments;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            options = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};\n            _context2.prev = 1;\n            _context2.t0 = _objectSpread;\n            _context2.t1 = _objectSpread({}, options);\n            _context2.t2 = {};\n            _context2.next = 7;\n            return (0,_hashString__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(options.password);\n\n          case 7:\n            _context2.t3 = _context2.sent;\n            _context2.t4 = {\n              password: _context2.t3\n            };\n            return _context2.abrupt(\"return\", (0, _context2.t0)(_context2.t1, _context2.t2, _context2.t4));\n\n          case 12:\n            _context2.prev = 12;\n            _context2.t5 = _context2[\"catch\"](1);\n            throw new Error((0,_lib_formatErrorString__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"signup.getUserToCreate\", _context2.t5));\n\n          case 15:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[1, 12]]);\n  }));\n\n  return function getUserToCreate() {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nvar getExistingUser = function getExistingUser() {\n  var emailAddress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n\n  try {\n    return _index__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n      emailAddress: emailAddress\n    });\n  } catch (exception) {\n    throw new Error((0,_lib_formatErrorString__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"signup.getExistingUser\", exception));\n  }\n};\n\nvar validateOptions = function validateOptions(options) {\n  try {\n    if (!options) throw new Error(\"options object is required.\");\n    if (!options.emailAddress) throw new Error(\"options.emailAddress is required.\");\n    if (!options.password) throw new Error(\"options.password is required.\");\n  } catch (exception) {\n    throw new Error((0,_lib_formatErrorString__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"signup.validateOptions\", exception));\n  }\n};\n\nvar signup = /*#__PURE__*/function () {\n  var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(options, _ref3) {\n    var resolve, reject, existingUser, userToCreate, userId, user, login;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            resolve = _ref3.resolve, reject = _ref3.reject;\n            _context3.prev = 1;\n            validateOptions(options);\n            _context3.next = 5;\n            return getExistingUser(options.emailAddress);\n\n          case 5:\n            existingUser = _context3.sent;\n\n            if (!existingUser) {\n              _context3.next = 8;\n              break;\n            }\n\n            throw new Error(\"A user with the email address \".concat(options.emailAddress, \" already exists.\"));\n\n          case 8:\n            _context3.next = 10;\n            return getUserToCreate(options);\n\n          case 10:\n            userToCreate = _context3.sent;\n            _context3.next = 13;\n            return insertUserInDatabase(userToCreate);\n\n          case 13:\n            userId = _context3.sent;\n            _context3.next = 16;\n            return getUserByUserId(userId);\n\n          case 16:\n            user = _context3.sent;\n            _context3.next = 19;\n            return (0,_encryptLoginToken__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n              userId: userId,\n              emailAddress: user.emailAddress,\n              password: user.password\n            });\n\n          case 19:\n            login = _context3.sent;\n            _context3.next = 22;\n            return addSessionToUser(user._id, login);\n\n          case 22:\n            return _context3.abrupt(\"return\", resolve(_objectSpread(_objectSpread({}, login), {}, {\n              userId: userId,\n              user: user\n            })));\n\n          case 25:\n            _context3.prev = 25;\n            _context3.t0 = _context3[\"catch\"](1);\n            reject((0,_lib_formatErrorString__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"signup\", _context3.t0));\n\n          case 28:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3, null, [[1, 25]]);\n  }));\n\n  return function signup(_x, _x2) {\n    return _ref4.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (options) {\n  return new Promise(function (resolve, reject) {\n    signup(options, {\n      resolve: resolve,\n      reject: reject\n    });\n  });\n});\n});\n\n//# sourceURL=webpack://nodejs-server/./api/users/signup.js?");

/***/ }),

/***/ "./api/users/token.js":
/*!****************************!*\
  !*** ./api/users/token.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _validateLoginToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validateLoginToken */ \"./api/users/validateLoginToken.js\");\n/* harmony import */ var _decryptLoginToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./decryptLoginToken */ \"./api/users/decryptLoginToken.js\");\n/* harmony import */ var _getExistingUserByEmailPassword__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getExistingUserByEmailPassword */ \"./api/users/getExistingUserByEmailPassword.js\");\n/* harmony import */ var _lib_formatErrorString__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/formatErrorString */ \"./lib/formatErrorString.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_getExistingUserByEmailPassword__WEBPACK_IMPORTED_MODULE_4__, _validateLoginToken__WEBPACK_IMPORTED_MODULE_2__]);\n([_getExistingUserByEmailPassword__WEBPACK_IMPORTED_MODULE_4__, _validateLoginToken__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n\n/* eslint-disable consistent-return */\n\n\n\n\n\nvar validateOptions = function validateOptions(options) {\n  try {\n    if (!options) throw new Error(\"options object is required.\");\n    if (!options.token) throw new Error(\"options.token is required.\");\n  } catch (error) {\n    throw new Error((0,_lib_formatErrorString__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"token.validateOptions\", error));\n  }\n};\n\nvar token = /*#__PURE__*/function () {\n  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(options, _ref) {\n    var resolve, reject, decryptedLoginToken, user;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            resolve = _ref.resolve, reject = _ref.reject;\n            _context.prev = 1;\n            validateOptions(options);\n            _context.next = 5;\n            return (0,_validateLoginToken__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n              token: options.token\n            });\n\n          case 5:\n            _context.next = 7;\n            return (0,_decryptLoginToken__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n              token: options.token\n            });\n\n          case 7:\n            decryptedLoginToken = _context.sent;\n            _context.next = 10;\n            return (0,_getExistingUserByEmailPassword__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n              emailAddress: decryptedLoginToken.emailAddress,\n              password: decryptedLoginToken.password\n            });\n\n          case 10:\n            user = _context.sent;\n            resolve(user);\n            _context.next = 17;\n            break;\n\n          case 14:\n            _context.prev = 14;\n            _context.t0 = _context[\"catch\"](1);\n            // NOTE: Special usage of resolve. We don't want to reject because Apollo Server\n            // can't take in an error string, so we resolve with an object containing an error\n            // which is anticipated in /api/graphql/server.\n            resolve({\n              error: (0,_lib_formatErrorString__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"token\", _context.t0)\n            });\n\n          case 17:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[1, 14]]);\n  }));\n\n  return function token(_x, _x2) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (options) {\n  return new Promise(function (resolve, reject) {\n    token(options, {\n      resolve: resolve,\n      reject: reject\n    });\n  });\n});\n});\n\n//# sourceURL=webpack://nodejs-server/./api/users/token.js?");

/***/ }),

/***/ "./api/users/unsetAuthenticationCookie.js":
/*!************************************************!*\
  !*** ./api/users/unsetAuthenticationCookie.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ \"dayjs\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n  if (!res) return null;\n  res.cookie(\"app_login_token\", null, {\n    secure: \"development\" !== \"development\",\n    httpOnly: true,\n    expires: dayjs__WEBPACK_IMPORTED_MODULE_0___default()().toDate()\n  });\n  res.cookie(\"app_login_tokenExpiresAt\", null, {\n    secure: \"development\" !== \"development\",\n    httpOnly: true,\n    expires: dayjs__WEBPACK_IMPORTED_MODULE_0___default()().toDate()\n  });\n  return res;\n});\n\n//# sourceURL=webpack://nodejs-server/./api/users/unsetAuthenticationCookie.js?");

/***/ }),

/***/ "./api/users/validateLoginToken.js":
/*!*****************************************!*\
  !*** ./api/users/validateLoginToken.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ \"dayjs\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ \"./api/users/index.js\");\n/* harmony import */ var _lib_formatErrorString__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/formatErrorString */ \"./lib/formatErrorString.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index__WEBPACK_IMPORTED_MODULE_3__]);\n_index__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\n/* eslint-disable consistent-return */\n\n\n\n\nvar checkIfTokenExpiresInFuture = function checkIfTokenExpiresInFuture() {\n  var tokenExpiresAt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n\n  try {\n    return dayjs__WEBPACK_IMPORTED_MODULE_2___default()().format() < tokenExpiresAt;\n  } catch (error) {\n    throw new Error((0,_lib_formatErrorString__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"validateLoginToken.checkIfTokenExpiresInFuture\", error));\n  }\n};\n\nvar getMatchingSessionFromUser = function getMatchingSessionFromUser() {\n  var user = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n  var token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"\";\n\n  try {\n    return user && user.sessions && user.sessions.find(function (loginSession) {\n      return loginSession.token === token;\n    });\n  } catch (error) {\n    throw new Error((0,_lib_formatErrorString__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"validateLoginToken.getMatchingSessionFromUser\", error));\n  }\n};\n\nvar getUserWithSessionToken = function getUserWithSessionToken() {\n  var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n\n  try {\n    return _index__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n      \"sessions.token\": token\n    });\n  } catch (error) {\n    throw new Error((0,_lib_formatErrorString__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"validateLoginToken.getUserWithSessionToken\", error));\n  }\n};\n\nvar validateOptions = function validateOptions(options) {\n  try {\n    if (!options) throw new Error(\"options object is required.\");\n    if (!options.token) throw new Error(\"options.token is required.\");\n  } catch (error) {\n    throw new Error((0,_lib_formatErrorString__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"validateLoginToken.validateOptions\", error));\n  }\n};\n\nvar validateLoginToken = /*#__PURE__*/function () {\n  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(options, _ref) {\n    var resolve, reject, user, session, expiresInFuture;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            resolve = _ref.resolve, reject = _ref.reject;\n            _context.prev = 1;\n            validateOptions(options);\n            _context.next = 5;\n            return getUserWithSessionToken(options.token);\n\n          case 5:\n            user = _context.sent;\n            session = getMatchingSessionFromUser(user, options.token);\n\n            if (!(!session || !(session !== null && session !== void 0 && session.tokenExpiresAt))) {\n              _context.next = 9;\n              break;\n            }\n\n            return _context.abrupt(\"return\", reject(\"Invalid token. Please try again.\"));\n\n          case 9:\n            expiresInFuture = checkIfTokenExpiresInFuture(session.tokenExpiresAt);\n\n            if (expiresInFuture) {\n              _context.next = 12;\n              break;\n            }\n\n            return _context.abrupt(\"return\", reject(\"Expired token. Please log in again.\"));\n\n          case 12:\n            resolve();\n            _context.next = 18;\n            break;\n\n          case 15:\n            _context.prev = 15;\n            _context.t0 = _context[\"catch\"](1);\n            reject((0,_lib_formatErrorString__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"validateLoginToken\", error));\n\n          case 18:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[1, 15]]);\n  }));\n\n  return function validateLoginToken(_x, _x2) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (options) {\n  return new Promise(function (resolve, reject) {\n    validateLoginToken(options, {\n      resolve: resolve,\n      reject: reject\n    });\n  });\n});\n});\n\n//# sourceURL=webpack://nodejs-server/./api/users/validateLoginToken.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_startup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/startup */ \"./lib/startup.js\");\n/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/index */ \"./api/index.js\");\n/* harmony import */ var _middleware_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./middleware/index */ \"./middleware/index.js\");\n/* harmony import */ var _lib_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/logger */ \"./lib/logger.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_index__WEBPACK_IMPORTED_MODULE_2__, _lib_startup__WEBPACK_IMPORTED_MODULE_1__]);\n([_api_index__WEBPACK_IMPORTED_MODULE_2__, _lib_startup__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n\n\n\n(0,_lib_startup__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().then(function () {\n  var app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n  var port = {\"NVM_INC\":\"/Users/rglover/.nvm/versions/node/v16.6.2/include/node\",\"TERM_PROGRAM\":\"iTerm.app\",\"NODE\":\"/Users/rglover/.nvm/versions/node/v16.6.2/bin/node\",\"INIT_CWD\":\"/Users/rglover/projects/cheatcode/boilerplates/nodejs-server\",\"NVM_CD_FLAGS\":\"\",\"SHELL\":\"/bin/bash\",\"TERM\":\"xterm-256color\",\"npm_config_maxsockets\":\"3\",\"npm_config_metrics_registry\":\"https://registry.npmjs.org/\",\"TMPDIR\":\"/var/folders/h6/yb3357hj72312ldvcbs13v880000gn/T/\",\"Apple_PubSub_Socket_Render\":\"/private/tmp/com.apple.launchd.T2pn81ZTrl/Render\",\"TERM_PROGRAM_VERSION\":\"3.4.5beta2\",\"NODE_OPTIONS\":\"--max-http-header-size=80000\",\"FIG_ENV_VAR\":\"1\",\"COLOR\":\"1\",\"TERM_SESSION_ID\":\"w0t0p0:10362E7A-936C-42C6-BD88-ED87C52BBE57\",\"npm_config_noproxy\":\"\",\"USER\":\"rglover\",\"NVM_DIR\":\"/Users/rglover/.nvm\",\"npm_config_globalconfig\":\"/Users/rglover/.nvm/versions/node/v16.6.2/etc/npmrc\",\"SSH_AUTH_SOCK\":\"/private/tmp/com.apple.launchd.TDLEPKzjBc/Listeners\",\"__CF_USER_TEXT_ENCODING\":\"0x1F5:0x0:0x0\",\"npm_execpath\":\"/Users/rglover/.nvm/versions/node/v16.6.2/lib/node_modules/npm/bin/npm-cli.js\",\"PATH\":\"/Users/rglover/projects/cheatcode/boilerplates/nodejs-server/node_modules/.bin:/Users/rglover/projects/cheatcode/boilerplates/node_modules/.bin:/Users/rglover/projects/cheatcode/node_modules/.bin:/Users/rglover/projects/node_modules/.bin:/Users/rglover/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/Users/rglover/.nvm/versions/node/v16.6.2/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Users/rglover/google-cloud-sdk/bin:./bin:~/elements/bin:/Users/rglover/.rbenv/shims:/Users/rglover/.rbenv/shims:/opt/local/bin:/opt/local/sbin:/Library/Frameworks/Python.framework/Versions/3.6/bin:/Users/rglover/.yarn/bin:/Users/rglover/.nvm/versions/node/v16.6.2/bin:/Users/rglover/projects/cleverbeagle/go/bin:/Users/rglover/.nvm/versions/node/v16.6.2/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/go/bin:/Users/rglover/projects/themeteorchef/:/Users/rglover./usr/bin/mongo:/Users/rglover/node_modules/.bin:/Users/rglover/.deno/bin:/Users/rglover/.fig/bin\",\"npm_package_json\":\"/Users/rglover/projects/cheatcode/boilerplates/nodejs-server/package.json\",\"_\":\"/Users/rglover/projects/cheatcode/boilerplates/nodejs-server/node_modules/.bin/cross-env\",\"npm_config_userconfig\":\"/Users/rglover/.npmrc\",\"npm_config_init_module\":\"/Users/rglover/.npm-init.js\",\"npm_command\":\"run-script\",\"PWD\":\"/Users/rglover/projects/cheatcode/boilerplates/nodejs-server\",\"TTY\":\"/dev/ttys001\",\"npm_lifecycle_event\":\"dev\",\"EDITOR\":\"vi\",\"npm_package_name\":\"nodejs-server\",\"LANG\":\"en_US.UTF-8\",\"ITERM_PROFILE\":\"Default\",\"XPC_FLAGS\":\"0x0\",\"METEOR_PACKAGE_DIRS\":\"/Users/rglover/projects/themeteorchef/packages:/Users/rglover/projects/cleverbeagle/packages:/Users/rglover/projects/themeteorchef\",\"npm_config_node_gyp\":\"/Users/rglover/.nvm/versions/node/v16.6.2/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js\",\"RBENV_SHELL\":\"bash\",\"XPC_SERVICE_NAME\":\"0\",\"COLORFGBG\":\"15;0\",\"HOME\":\"/Users/rglover\",\"SHLVL\":\"2\",\"GOROOT\":\"/usr/local/go\",\"LC_TERMINAL_VERSION\":\"3.4.5beta2\",\"ITERM_SESSION_ID\":\"w0t0p0:10362E7A-936C-42C6-BD88-ED87C52BBE57\",\"npm_config_cache\":\"/Users/rglover/.npm\",\"LOGNAME\":\"rglover\",\"npm_lifecycle_script\":\"cross-env NODE_ENV=development node -r @babel/register ./.app/development.js\",\"NVM_BIN\":\"/Users/rglover/.nvm/versions/node/v16.6.2/bin\",\"GOPATH\":\"/Users/rglover/projects/cleverbeagle/go\",\"npm_config_user_agent\":\"npm/7.20.3 node/v16.6.2 darwin x64 workspaces/false\",\"PROMPT_COMMAND\":\"(fig bg:prompt $$ $TTY &); \",\"LC_TERMINAL\":\"iTerm2\",\"FIG_INTEGRATION_VERSION\":\"2\",\"npm_node_execpath\":\"/Users/rglover/.nvm/versions/node/v16.6.2/bin/node\",\"npm_config_prefix\":\"/Users/rglover/.nvm/versions/node/v16.6.2\",\"COLORTERM\":\"truecolor\",\"NODE_ENV\":\"development\",\"APP_SETTINGS\":\"{\\n  \\\"authentication\\\": {\\n    \\\"token\\\": \\\"abcdefghijklmnopqrstuvwxyz1234567890\\\"\\n  },\\n  \\\"databases\\\": {\\n    \\\"mongodb\\\": {\\n      \\\"uri\\\": \\\"mongodb://127.0.0.1/app\\\"\\n    }\\n  },\\n  \\\"smtp\\\": {\\n    \\\"host\\\": \\\"\\\",\\n    \\\"port\\\": 587,\\n    \\\"username\\\": \\\"\\\",\\n    \\\"password\\\": \\\"\\\"\\n  },\\n  \\\"support\\\": {\\n    \\\"email\\\": \\\"business@cheatcode.co\\\",\\n    \\\"name\\\": \\\"CheatCode\\\"\\n  },\\n  \\\"urls\\\": {\\n    \\\"api\\\": \\\"http://localhost:5001\\\",\\n    \\\"app\\\": \\\"http://localhost:5000\\\"\\n  }\\n}\"}.PORT || 5001;\n  (0,_middleware_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(app);\n  (0,_api_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(app);\n  app.listen(port, function () {\n    if (process.send) {\n      process.send(\"Server running at http://localhost:\".concat(port, \"\\n\\n\"));\n    }\n  });\n  process.on(\"message\", function (message) {\n    console.log(message);\n  });\n})[\"catch\"](function (error) {\n  _lib_logger__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(error);\n});\n});\n\n//# sourceURL=webpack://nodejs-server/./index.js?");

/***/ }),

/***/ "./lib/email/send.js":
/*!***************************!*\
  !*** ./lib/email/send.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ \"@babel/runtime/helpers/objectWithoutProperties\");\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var ejs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ejs */ \"ejs\");\n/* harmony import */ var ejs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ejs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var html_to_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! html-to-text */ \"html-to-text\");\n/* harmony import */ var html_to_text__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(html_to_text__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var juice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! juice */ \"juice\");\n/* harmony import */ var juice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(juice__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../settings */ \"./lib/settings.js\");\n\n\nvar _excluded = [\"template\", \"templateVars\"];\n\nvar _settings$smtp, _settings$smtp2, _settings$smtp3, _settings$smtp4;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar smtp = nodemailer__WEBPACK_IMPORTED_MODULE_2___default().createTransport({\n  host: _settings__WEBPACK_IMPORTED_MODULE_7__[\"default\"] === null || _settings__WEBPACK_IMPORTED_MODULE_7__[\"default\"] === void 0 ? void 0 : (_settings$smtp = _settings__WEBPACK_IMPORTED_MODULE_7__[\"default\"].smtp) === null || _settings$smtp === void 0 ? void 0 : _settings$smtp.host,\n  port: _settings__WEBPACK_IMPORTED_MODULE_7__[\"default\"] === null || _settings__WEBPACK_IMPORTED_MODULE_7__[\"default\"] === void 0 ? void 0 : (_settings$smtp2 = _settings__WEBPACK_IMPORTED_MODULE_7__[\"default\"].smtp) === null || _settings$smtp2 === void 0 ? void 0 : _settings$smtp2.port,\n  secure: \"development\" !== \"development\",\n  auth: {\n    user: _settings__WEBPACK_IMPORTED_MODULE_7__[\"default\"] === null || _settings__WEBPACK_IMPORTED_MODULE_7__[\"default\"] === void 0 ? void 0 : (_settings$smtp3 = _settings__WEBPACK_IMPORTED_MODULE_7__[\"default\"].smtp) === null || _settings$smtp3 === void 0 ? void 0 : _settings$smtp3.username,\n    pass: _settings__WEBPACK_IMPORTED_MODULE_7__[\"default\"] === null || _settings__WEBPACK_IMPORTED_MODULE_7__[\"default\"] === void 0 ? void 0 : (_settings$smtp4 = _settings__WEBPACK_IMPORTED_MODULE_7__[\"default\"].smtp) === null || _settings$smtp4 === void 0 ? void 0 : _settings$smtp4.password\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {\n  var templateName = _ref.template,\n      templateVars = _ref.templateVars,\n      restOfOptions = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, _excluded);\n\n  var templatePath = \"lib/email/templates/\".concat(templateName, \".html\");\n\n  var options = _objectSpread({}, restOfOptions);\n\n  if (templateName && fs__WEBPACK_IMPORTED_MODULE_3___default().existsSync(templatePath)) {\n    var template = fs__WEBPACK_IMPORTED_MODULE_3___default().readFileSync(templatePath, \"utf-8\");\n    var html = ejs__WEBPACK_IMPORTED_MODULE_4___default().render(template, templateVars);\n    var text = (0,html_to_text__WEBPACK_IMPORTED_MODULE_5__.htmlToText)(html);\n    var htmlWithStylesInlined = juice__WEBPACK_IMPORTED_MODULE_6___default()(html);\n    options.html = htmlWithStylesInlined;\n    options.text = text;\n  }\n\n  return smtp.sendMail(options);\n});\n\n//# sourceURL=webpack://nodejs-server/./lib/email/send.js?");

/***/ }),

/***/ "./lib/formatErrorString.js":
/*!**********************************!*\
  !*** ./lib/formatErrorString.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ \"@babel/runtime/helpers/typeof\");\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar formatErrorString = function formatErrorString() {\n  var location = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"server\";\n  var error = arguments.length > 1 ? arguments[1] : undefined;\n  var message = _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(error) === \"object\" ? error.reason || error.message || error : error;\n  return \"\".concat( true ? \"[\".concat(location, \"] \") : 0).concat(message);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatErrorString);\n\n//# sourceURL=webpack://nodejs-server/./lib/formatErrorString.js?");

/***/ }),

/***/ "./lib/generateId.js":
/*!***************************!*\
  !*** ./lib/generateId.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var crypto_extra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-extra */ \"crypto-extra\");\n/* harmony import */ var crypto_extra__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_extra__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 16;\n  return crypto_extra__WEBPACK_IMPORTED_MODULE_0___default().randomString(length);\n});\n\n//# sourceURL=webpack://nodejs-server/./lib/generateId.js?");

/***/ }),

/***/ "./lib/isDocumentOwner.js":
/*!********************************!*\
  !*** ./lib/isDocumentOwner.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_documents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/documents */ \"./api/documents/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_documents__WEBPACK_IMPORTED_MODULE_2__]);\n_api_documents__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n  var documentId,\n      currentUserId,\n      document,\n      _args = arguments;\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          documentId = _args.length > 0 && _args[0] !== undefined ? _args[0] : null;\n          currentUserId = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;\n\n          if (!(!documentId || !currentUserId)) {\n            _context.next = 4;\n            break;\n          }\n\n          return _context.abrupt(\"return\", null);\n\n        case 4:\n          _context.next = 6;\n          return _api_documents__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n            _id: documentId\n          }, {\n            projection: {\n              userId: 1\n            }\n          });\n\n        case 6:\n          document = _context.sent;\n\n          if (!((document === null || document === void 0 ? void 0 : document.userId) !== currentUserId)) {\n            _context.next = 9;\n            break;\n          }\n\n          throw new Error(\"Sorry, you need to be the owner of this document to do this.\");\n\n        case 9:\n          return _context.abrupt(\"return\", true);\n\n        case 10:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n})));\n});\n\n//# sourceURL=webpack://nodejs-server/./lib/isDocumentOwner.js?");

/***/ }),

/***/ "./lib/logger.js":
/*!***********************!*\
  !*** ./lib/logger.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chalk */ \"chalk\");\n/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chalk__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar Logger = /*#__PURE__*/function () {\n  function Logger() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Logger);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Logger, [{\n    key: \"isErrorObject\",\n    value: function isErrorObject(value) {\n      return value && value instanceof Error;\n    }\n  }, {\n    key: \"getErrorMessage\",\n    value: function getErrorMessage(value) {\n      var isErrorObject = this.isErrorObject(value);\n\n      if (isErrorObject) {\n        return (value === null || value === void 0 ? void 0 : value.message) || (value === null || value === void 0 ? void 0 : value.reason) || value;\n      }\n\n      return value;\n    }\n  }, {\n    key: \"log\",\n    value: function log() {\n      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n\n      if (message) {\n        console.log(\"\".concat(message));\n      }\n    }\n  }, {\n    key: \"info\",\n    value: function info(message) {\n      this.log(chalk__WEBPACK_IMPORTED_MODULE_2___default().blue(this.getErrorMessage(message)));\n      this.externalHandler(message);\n    }\n  }, {\n    key: \"success\",\n    value: function success(message) {\n      this.log(chalk__WEBPACK_IMPORTED_MODULE_2___default().green(this.getErrorMessage(message)));\n      this.externalHandler(message);\n    }\n  }, {\n    key: \"warn\",\n    value: function warn(message) {\n      this.log(chalk__WEBPACK_IMPORTED_MODULE_2___default().yellow(this.getErrorMessage(message)));\n      this.externalHandler(message);\n    }\n  }, {\n    key: \"error\",\n    value: function error(_error) {\n      this.log(chalk__WEBPACK_IMPORTED_MODULE_2___default().red(this.getErrorMessage(_error)));\n      this.externalHandler(_error);\n    }\n  }, {\n    key: \"externalHandler\",\n    value: function externalHandler(message) {// NOTE: Implement calls to third-party logging services here.\n    }\n  }]);\n\n  return Logger;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Logger());\n\n//# sourceURL=webpack://nodejs-server/./lib/logger.js?");

/***/ }),

/***/ "./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chalk */ \"chalk\");\n/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(chalk__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var mongo_uri_tool__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mongo-uri-tool */ \"mongo-uri-tool\");\n/* harmony import */ var mongo_uri_tool__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mongo_uri_tool__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var ps_node__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ps-node */ \"ps-node\");\n/* harmony import */ var ps_node__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ps_node__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settings */ \"./lib/settings.js\");\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar cleanupMongoDBProcess = function cleanupMongoDBProcess() {\n  if (process.isReset && process.mongoProcessId) {\n    ps_node__WEBPACK_IMPORTED_MODULE_6___default().kill(process.mongoProcessId);\n  }\n};\n\nvar getConnectionOptions = function getConnectionOptions() {\n  try {\n    var _settings$databases;\n\n    var mongodbSettings = _settings__WEBPACK_IMPORTED_MODULE_7__[\"default\"] === null || _settings__WEBPACK_IMPORTED_MODULE_7__[\"default\"] === void 0 ? void 0 : (_settings$databases = _settings__WEBPACK_IMPORTED_MODULE_7__[\"default\"].databases) === null || _settings$databases === void 0 ? void 0 : _settings$databases.mongodb;\n    var uri = mongodbSettings === null || mongodbSettings === void 0 ? void 0 : mongodbSettings.uri;\n\n    if (!mongodbSettings || mongodbSettings && !uri) {\n      throw new Error(chalk__WEBPACK_IMPORTED_MODULE_4___default().redBright(\"Must have a valid databases.mongodb.uri value in your settings-<env>.json file to connect to MongoDB.\"));\n    }\n\n    return {\n      uri: uri,\n      parsedUri: mongo_uri_tool__WEBPACK_IMPORTED_MODULE_5___default().parseUri(uri),\n      options: Object.assign({}, mongodbSettings.options)\n    };\n  } catch (exception) {\n    cleanupMongoDBProcess();\n    console.log(exception);\n  }\n};\n\nvar connectToMongoDB = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n    var connectionOptions, mongodb, db;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            connectionOptions = getConnectionOptions();\n\n            if (!(!process.mongodb && connectionOptions)) {\n              _context.next = 7;\n              break;\n            }\n\n            _context.next = 4;\n            return mongodb__WEBPACK_IMPORTED_MODULE_3__.MongoClient.connect(connectionOptions.uri, _objectSpread({\n              useNewUrlParser: true,\n              useUnifiedTopology: true,\n              ssl: \"development\" === \"production\"\n            }, connectionOptions.options));\n\n          case 4:\n            mongodb = _context.sent;\n            db = mongodb.db(connectionOptions.parsedUri.db);\n            return _context.abrupt(\"return\", {\n              db: db,\n              Collection: db.collection.bind(db),\n              connection: mongodb\n            });\n\n          case 7:\n            return _context.abrupt(\"return\", null);\n\n          case 8:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function connectToMongoDB() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (await connectToMongoDB());\n__webpack_handle_async_dependencies__();\n}, 1);\n\n//# sourceURL=webpack://nodejs-server/./lib/mongodb.js?");

/***/ }),

/***/ "./lib/settings.js":
/*!*************************!*\
  !*** ./lib/settings.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JSON.parse({\"NVM_INC\":\"/Users/rglover/.nvm/versions/node/v16.6.2/include/node\",\"TERM_PROGRAM\":\"iTerm.app\",\"NODE\":\"/Users/rglover/.nvm/versions/node/v16.6.2/bin/node\",\"INIT_CWD\":\"/Users/rglover/projects/cheatcode/boilerplates/nodejs-server\",\"NVM_CD_FLAGS\":\"\",\"SHELL\":\"/bin/bash\",\"TERM\":\"xterm-256color\",\"npm_config_maxsockets\":\"3\",\"npm_config_metrics_registry\":\"https://registry.npmjs.org/\",\"TMPDIR\":\"/var/folders/h6/yb3357hj72312ldvcbs13v880000gn/T/\",\"Apple_PubSub_Socket_Render\":\"/private/tmp/com.apple.launchd.T2pn81ZTrl/Render\",\"TERM_PROGRAM_VERSION\":\"3.4.5beta2\",\"NODE_OPTIONS\":\"--max-http-header-size=80000\",\"FIG_ENV_VAR\":\"1\",\"COLOR\":\"1\",\"TERM_SESSION_ID\":\"w0t0p0:10362E7A-936C-42C6-BD88-ED87C52BBE57\",\"npm_config_noproxy\":\"\",\"USER\":\"rglover\",\"NVM_DIR\":\"/Users/rglover/.nvm\",\"npm_config_globalconfig\":\"/Users/rglover/.nvm/versions/node/v16.6.2/etc/npmrc\",\"SSH_AUTH_SOCK\":\"/private/tmp/com.apple.launchd.TDLEPKzjBc/Listeners\",\"__CF_USER_TEXT_ENCODING\":\"0x1F5:0x0:0x0\",\"npm_execpath\":\"/Users/rglover/.nvm/versions/node/v16.6.2/lib/node_modules/npm/bin/npm-cli.js\",\"PATH\":\"/Users/rglover/projects/cheatcode/boilerplates/nodejs-server/node_modules/.bin:/Users/rglover/projects/cheatcode/boilerplates/node_modules/.bin:/Users/rglover/projects/cheatcode/node_modules/.bin:/Users/rglover/projects/node_modules/.bin:/Users/rglover/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/Users/rglover/.nvm/versions/node/v16.6.2/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Users/rglover/google-cloud-sdk/bin:./bin:~/elements/bin:/Users/rglover/.rbenv/shims:/Users/rglover/.rbenv/shims:/opt/local/bin:/opt/local/sbin:/Library/Frameworks/Python.framework/Versions/3.6/bin:/Users/rglover/.yarn/bin:/Users/rglover/.nvm/versions/node/v16.6.2/bin:/Users/rglover/projects/cleverbeagle/go/bin:/Users/rglover/.nvm/versions/node/v16.6.2/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/go/bin:/Users/rglover/projects/themeteorchef/:/Users/rglover./usr/bin/mongo:/Users/rglover/node_modules/.bin:/Users/rglover/.deno/bin:/Users/rglover/.fig/bin\",\"npm_package_json\":\"/Users/rglover/projects/cheatcode/boilerplates/nodejs-server/package.json\",\"_\":\"/Users/rglover/projects/cheatcode/boilerplates/nodejs-server/node_modules/.bin/cross-env\",\"npm_config_userconfig\":\"/Users/rglover/.npmrc\",\"npm_config_init_module\":\"/Users/rglover/.npm-init.js\",\"npm_command\":\"run-script\",\"PWD\":\"/Users/rglover/projects/cheatcode/boilerplates/nodejs-server\",\"TTY\":\"/dev/ttys001\",\"npm_lifecycle_event\":\"dev\",\"EDITOR\":\"vi\",\"npm_package_name\":\"nodejs-server\",\"LANG\":\"en_US.UTF-8\",\"ITERM_PROFILE\":\"Default\",\"XPC_FLAGS\":\"0x0\",\"METEOR_PACKAGE_DIRS\":\"/Users/rglover/projects/themeteorchef/packages:/Users/rglover/projects/cleverbeagle/packages:/Users/rglover/projects/themeteorchef\",\"npm_config_node_gyp\":\"/Users/rglover/.nvm/versions/node/v16.6.2/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js\",\"RBENV_SHELL\":\"bash\",\"XPC_SERVICE_NAME\":\"0\",\"COLORFGBG\":\"15;0\",\"HOME\":\"/Users/rglover\",\"SHLVL\":\"2\",\"GOROOT\":\"/usr/local/go\",\"LC_TERMINAL_VERSION\":\"3.4.5beta2\",\"ITERM_SESSION_ID\":\"w0t0p0:10362E7A-936C-42C6-BD88-ED87C52BBE57\",\"npm_config_cache\":\"/Users/rglover/.npm\",\"LOGNAME\":\"rglover\",\"npm_lifecycle_script\":\"cross-env NODE_ENV=development node -r @babel/register ./.app/development.js\",\"NVM_BIN\":\"/Users/rglover/.nvm/versions/node/v16.6.2/bin\",\"GOPATH\":\"/Users/rglover/projects/cleverbeagle/go\",\"npm_config_user_agent\":\"npm/7.20.3 node/v16.6.2 darwin x64 workspaces/false\",\"PROMPT_COMMAND\":\"(fig bg:prompt $$ $TTY &); \",\"LC_TERMINAL\":\"iTerm2\",\"FIG_INTEGRATION_VERSION\":\"2\",\"npm_node_execpath\":\"/Users/rglover/.nvm/versions/node/v16.6.2/bin/node\",\"npm_config_prefix\":\"/Users/rglover/.nvm/versions/node/v16.6.2\",\"COLORTERM\":\"truecolor\",\"NODE_ENV\":\"development\",\"APP_SETTINGS\":\"{\\n  \\\"authentication\\\": {\\n    \\\"token\\\": \\\"abcdefghijklmnopqrstuvwxyz1234567890\\\"\\n  },\\n  \\\"databases\\\": {\\n    \\\"mongodb\\\": {\\n      \\\"uri\\\": \\\"mongodb://127.0.0.1/app\\\"\\n    }\\n  },\\n  \\\"smtp\\\": {\\n    \\\"host\\\": \\\"\\\",\\n    \\\"port\\\": 587,\\n    \\\"username\\\": \\\"\\\",\\n    \\\"password\\\": \\\"\\\"\\n  },\\n  \\\"support\\\": {\\n    \\\"email\\\": \\\"business@cheatcode.co\\\",\\n    \\\"name\\\": \\\"CheatCode\\\"\\n  },\\n  \\\"urls\\\": {\\n    \\\"api\\\": \\\"http://localhost:5001\\\",\\n    \\\"app\\\": \\\"http://localhost:5000\\\"\\n  }\\n}\"}.APP_SETTINGS || fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(\"settings-\".concat(\"development\", \".json\"), \"utf-8\") || \"{}\"));\n\n//# sourceURL=webpack://nodejs-server/./lib/settings.js?");

/***/ }),

/***/ "./lib/startup.js":
/*!************************!*\
  !*** ./lib/startup.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logger */ \"./lib/logger.js\");\n/* harmony import */ var _api_fixtures__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/fixtures */ \"./api/fixtures/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_fixtures__WEBPACK_IMPORTED_MODULE_3__]);\n_api_fixtures__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\n/* eslint-disable consistent-return */\n\n\n\nvar handleProcessEvents = function handleProcessEvents() {\n  try {\n    process.on(\"exit\", /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (process.mongodb && process.mongodb.connection && process.mongodb.connection.isConnected()) {\n                process.mongodb.connection.close();\n              }\n\n            case 1:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    })));\n    process.on(\"uncaughtException\", function (error) {\n      _logger__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(error);\n      console.warn(error);\n    });\n    process.on(\"uncaughtException\", /*#__PURE__*/function () {\n      var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(error) {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _logger__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(error);\n                console.warn(error);\n\n              case 2:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function (_x) {\n        return _ref2.apply(this, arguments);\n      };\n    }());\n    process.on(\"unhandledRejection\", /*#__PURE__*/function () {\n      var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(error) {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                _logger__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(error);\n                console.warn(error);\n\n              case 2:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }));\n\n      return function (_x2) {\n        return _ref3.apply(this, arguments);\n      };\n    }());\n  } catch (exception) {\n    throw new Error(\"[startup.handleProcessEvents] \".concat(exception.message || exception));\n  }\n};\n\nvar startup = /*#__PURE__*/function () {\n  var _ref5 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(options, _ref4) {\n    var resolve, reject;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            resolve = _ref4.resolve, reject = _ref4.reject;\n\n            try {\n              handleProcessEvents();\n              resolve();\n            } catch (exception) {\n              reject(\"[startup] \".concat(exception.message));\n            }\n\n          case 2:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4);\n  }));\n\n  return function startup(_x3, _x4) {\n    return _ref5.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (options) {\n  return new Promise(function (resolve, reject) {\n    startup(options, {\n      resolve: resolve,\n      reject: reject\n    });\n  });\n});\n});\n\n//# sourceURL=webpack://nodejs-server/./lib/startup.js?");

/***/ }),

/***/ "./middleware/bodyParser.js":
/*!**********************************!*\
  !*** ./middleware/bodyParser.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (req, res, next) {\n  var contentType = req.headers[\"content-type\"];\n\n  if (contentType && contentType === \"application/x-www-form-urlencoded\") {\n    return body_parser__WEBPACK_IMPORTED_MODULE_0___default().urlencoded({\n      extended: true\n    })(req, res, next);\n  }\n\n  return body_parser__WEBPACK_IMPORTED_MODULE_0___default().json()(req, res, next);\n});\n\n//# sourceURL=webpack://nodejs-server/./middleware/bodyParser.js?");

/***/ }),

/***/ "./middleware/cors.js":
/*!****************************!*\
  !*** ./middleware/cors.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"configuration\": () => (/* binding */ configuration),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/settings */ \"./lib/settings.js\");\n\n\n\nvar urlsAllowedToAccess = Object.entries(_lib_settings__WEBPACK_IMPORTED_MODULE_2__[\"default\"].urls || {}).map(function (_ref) {\n  var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),\n      key = _ref2[0],\n      value = _ref2[1];\n\n  return value;\n}) || [];\nvar configuration = {\n  credentials: true,\n  origin: function origin(_origin, callback) {\n    if (!_origin || urlsAllowedToAccess.includes(_origin)) {\n      callback(null, true);\n    } else {\n      callback(new Error(\"\".concat(_origin, \" not permitted by CORS policy.\")));\n    }\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (req, res, next) {\n  return cors__WEBPACK_IMPORTED_MODULE_1___default()(configuration)(req, res, next);\n});\n\n//# sourceURL=webpack://nodejs-server/./middleware/cors.js?");

/***/ }),

/***/ "./middleware/index.js":
/*!*****************************!*\
  !*** ./middleware/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var serve_favicon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! serve-favicon */ \"serve-favicon\");\n/* harmony import */ var serve_favicon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(serve_favicon__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _requestMethods__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./requestMethods */ \"./middleware/requestMethods.js\");\n/* harmony import */ var _cors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cors */ \"./middleware/cors.js\");\n/* harmony import */ var _bodyParser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bodyParser */ \"./middleware/bodyParser.js\");\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (app) {\n  app.use(_requestMethods__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n  app.use(compression__WEBPACK_IMPORTED_MODULE_1___default()());\n  app.use(serve_favicon__WEBPACK_IMPORTED_MODULE_3___default()(\"public/favicon.ico\"));\n  app.use(express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"](\"public\"));\n  app.use(_cors__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n  app.use(_bodyParser__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n  app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_2___default()());\n});\n\n//# sourceURL=webpack://nodejs-server/./middleware/index.js?");

/***/ }),

/***/ "./middleware/requestMethods.js":
/*!**************************************!*\
  !*** ./middleware/requestMethods.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (req, res, next) {\n  // NOTE: Exclude TRACE and TRACK methods to avoid XST attacks.\n  var allowedMethods = [\"OPTIONS\", \"HEAD\", \"CONNECT\", \"GET\", \"POST\", \"PUT\", \"DELETE\", \"PATCH\"];\n\n  if (!allowedMethods.includes(req.method)) {\n    res.status(405).send(\"\".concat(req.method, \" not allowed.\"));\n  }\n\n  next();\n});\n\n//# sourceURL=webpack://nodejs-server/./middleware/requestMethods.js?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime/helpers/objectWithoutProperties":
/*!*****************************************************************!*\
  !*** external "@babel/runtime/helpers/objectWithoutProperties" ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),

/***/ "@babel/runtime/helpers/slicedToArray":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/slicedToArray" ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),

/***/ "@babel/runtime/helpers/taggedTemplateLiteral":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/taggedTemplateLiteral" ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/taggedTemplateLiteral");

/***/ }),

/***/ "@babel/runtime/helpers/typeof":
/*!************************************************!*\
  !*** external "@babel/runtime/helpers/typeof" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@graphql-tools/schema":
/*!****************************************!*\
  !*** external "@graphql-tools/schema" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@graphql-tools/schema");

/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("apollo-server-express");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");

/***/ }),

/***/ "chalk":
/*!************************!*\
  !*** external "chalk" ***!
  \************************/
/***/ ((module) => {

module.exports = require("chalk");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("compression");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cookie-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "crypto-extra":
/*!*******************************!*\
  !*** external "crypto-extra" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("crypto-extra");

/***/ }),

/***/ "dayjs":
/*!************************!*\
  !*** external "dayjs" ***!
  \************************/
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ "ejs":
/*!**********************!*\
  !*** external "ejs" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("ejs");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("graphql-tag");

/***/ }),

/***/ "html-to-text":
/*!*******************************!*\
  !*** external "html-to-text" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("html-to-text");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "juice":
/*!************************!*\
  !*** external "juice" ***!
  \************************/
/***/ ((module) => {

module.exports = require("juice");

/***/ }),

/***/ "mongo-uri-tool":
/*!*********************************!*\
  !*** external "mongo-uri-tool" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("mongo-uri-tool");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "ps-node":
/*!**************************!*\
  !*** external "ps-node" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("ps-node");

/***/ }),

/***/ "serve-favicon":
/*!********************************!*\
  !*** external "serve-favicon" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("serve-favicon");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackThen = typeof Symbol === "function" ? Symbol("webpack then") : "__webpack_then__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var completeQueue = (queue) => {
/******/ 			if(queue) {
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var completeFunction = (fn) => (!--fn.r && fn());
/******/ 		var queueFunction = (queue, fn) => (queue ? queue.push(fn) : completeFunction(fn));
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackThen]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						completeQueue(queue);
/******/ 						queue = 0;
/******/ 					});
/******/ 					var obj = {};
/******/ 												obj[webpackThen] = (fn, reject) => (queueFunction(queue, fn), dep.catch(reject));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 								ret[webpackThen] = (fn) => (completeFunction(fn));
/******/ 								ret[webpackExports] = dep;
/******/ 								return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue = hasAwait && [];
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var isEvaluating = true;
/******/ 			var nested = false;
/******/ 			var whenAll = (deps, onResolve, onReject) => {
/******/ 				if (nested) return;
/******/ 				nested = true;
/******/ 				onResolve.r += deps.length;
/******/ 				deps.map((dep, i) => (dep[webpackThen](onResolve, onReject)));
/******/ 				nested = false;
/******/ 			};
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = () => (resolve(exports), completeQueue(queue), queue = 0);
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackThen] = (fn, rejectFn) => {
/******/ 				if (isEvaluating) { return completeFunction(fn); }
/******/ 				if (currentDeps) whenAll(currentDeps, fn, rejectFn);
/******/ 				queueFunction(queue, fn);
/******/ 				promise.catch(rejectFn);
/******/ 			};
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				if(!deps) return outerResolve();
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn, result;
/******/ 				var promise = new Promise((resolve, reject) => {
/******/ 					fn = () => (resolve(result = currentDeps.map((d) => (d[webpackExports]))));
/******/ 					fn.r = 0;
/******/ 					whenAll(currentDeps, fn, reject);
/******/ 				});
/******/ 				return fn.r ? promise : result;
/******/ 			}).then(outerResolve, reject);
/******/ 			isEvaluating = false;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;