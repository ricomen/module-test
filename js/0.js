webpackJsonp([0],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
    console.log('а тут загрузился модуль платежного поручения');
};

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

});