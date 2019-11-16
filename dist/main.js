/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /home/iryna/build-project/src/index.js: Unexpected token (6:11)\\n\\n\\u001b[0m \\u001b[90m 4 | \\u001b[39m\\u001b[36mclass\\u001b[39m \\u001b[33mApp\\u001b[39m \\u001b[36mextends\\u001b[39m \\u001b[33mReact\\u001b[39m\\u001b[33m.\\u001b[39m\\u001b[33mComponent\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m 5 | \\u001b[39m  render() {\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 6 | \\u001b[39m    \\u001b[36mreturn\\u001b[39m \\u001b[33m<\\u001b[39m\\u001b[33mh1\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33mHello\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mh1\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m   | \\u001b[39m           \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 7 | \\u001b[39m  }\\u001b[0m\\n\\u001b[0m \\u001b[90m 8 | \\u001b[39m}\\u001b[0m\\n\\u001b[0m \\u001b[90m 9 | \\u001b[39m\\u001b[33mReactDOM\\u001b[39m\\u001b[33m.\\u001b[39mrender(\\u001b[0m\\n    at Parser.raise (/home/iryna/build-project/node_modules/@babel/parser/lib/index.js:6930:17)\\n    at Parser.unexpected (/home/iryna/build-project/node_modules/@babel/parser/lib/index.js:8323:16)\\n    at Parser.parseExprAtom (/home/iryna/build-project/node_modules/@babel/parser/lib/index.js:9582:20)\\n    at Parser.parseExprSubscripts (/home/iryna/build-project/node_modules/@babel/parser/lib/index.js:9165:23)\\n    at Parser.parseMaybeUnary (/home/iryna/build-project/node_modules/@babel/parser/lib/index.js:9145:21)\\n    at Parser.parseExprOps (/home/iryna/build-project/node_modules/@babel/parser/lib/index.js:9011:23)\\n    at Parser.parseMaybeConditional (/home/iryna/build-project/node_modules/@babel/parser/lib/index.js:8984:23)\\n    at Parser.parseMaybeAssign (/home/iryna/build-project/node_modules/@babel/parser/lib/index.js:8930:21)\\n    at Parser.parseExpression (/home/iryna/build-project/node_modules/@babel/parser/lib/index.js:8880:23)\\n    at Parser.parseReturnStatement (/home/iryna/build-project/node_modules/@babel/parser/lib/index.js:10980:28)\\n    at Parser.parseStatementContent (/home/iryna/build-project/node_modules/@babel/parser/lib/index.js:10659:21)\\n    at Parser.parseStatement (/home/iryna/build-project/node_modules/@babel/parser/lib/index.js:10611:17)\\n    at Parser.parseBlockOrModuleBlockBody (/home/iryna/build-project/node_modules/@babel/parser/lib/index.js:11187:25)\\n    at Parser.parseBlockBody (/home/iryna/build-project/node_modules/@babel/parser/lib/index.js:11174:10)\\n    at Parser.parseBlock (/home/iryna/build-project/node_modules/@babel/parser/lib/index.js:11158:10)\\n    at Parser.parseFunctionBody (/home/iryna/build-project/node_modules/@babel/parser/lib/index.js:10177:24)\\n    at Parser.parseFunctionBodyAndFinish (/home/iryna/build-project/node_modules/@babel/parser/lib/index.js:10147:10)\\n    at Parser.parseMethod (/home/iryna/build-project/node_modules/@babel/parser/lib/index.js:10101:10)\\n    at Parser.pushClassMethod (/home/iryna/build-project/node_modules/@babel/parser/lib/index.js:11591:30)\\n    at Parser.parseClassMemberWithIsStatic (/home/iryna/build-project/node_modules/@babel/parser/lib/index.js:11511:12)\\n    at Parser.parseClassMember (/home/iryna/build-project/node_modules/@babel/parser/lib/index.js:11453:10)\\n    at withTopicForbiddingContext (/home/iryna/build-project/node_modules/@babel/parser/lib/index.js:11408:14)\\n    at Parser.withTopicForbiddingContext (/home/iryna/build-project/node_modules/@babel/parser/lib/index.js:10486:14)\\n    at Parser.parseClassBody (/home/iryna/build-project/node_modules/@babel/parser/lib/index.js:11385:10)\\n    at Parser.parseClass (/home/iryna/build-project/node_modules/@babel/parser/lib/index.js:11359:22)\\n    at Parser.parseStatementContent (/home/iryna/build-project/node_modules/@babel/parser/lib/index.js:10653:21)\\n    at Parser.parseStatement (/home/iryna/build-project/node_modules/@babel/parser/lib/index.js:10611:17)\\n    at Parser.parseBlockOrModuleBlockBody (/home/iryna/build-project/node_modules/@babel/parser/lib/index.js:11187:25)\\n    at Parser.parseBlockBody (/home/iryna/build-project/node_modules/@babel/parser/lib/index.js:11174:10)\\n    at Parser.parseTopLevel (/home/iryna/build-project/node_modules/@babel/parser/lib/index.js:10542:10)\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });