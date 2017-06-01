webpackJsonp([1,4],{

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  text-align: center;\r\n}\r\n\r\n#input {\r\n  text-align: center;\r\n  max-width: 35rem;\r\n}\r\n\r\n.input-area {\r\n  min-height: 9rem;\r\n  min-width: 34.8rem;\r\n  max-width: 34.8rem;\r\n}\r\n\r\n#control {\r\n  text-align: right;\r\n  max-width: 35rem;\r\n  margin-top: -0.7rem;\r\n}\r\n\r\n.copy-success {\r\n  background-color: #00BCD4;\r\n  color: #fff;\r\n}\r\n\r\n#result {\r\n  background: #fff;\r\n  border: 2px solid #1976D2;\r\n  border-radius: 4px;\r\n  box-shadow: 0 2px 2px rgba(0,0,0,0.24),0 0 2px rgba(0,0,0,0.12);\r\n  margin-bottom: 24px;\r\n  word-wrap: break-word;\r\n  min-height: 9rem;\r\n  max-width: 35rem;\r\n  font-family: monospace;\r\n  font-size: 1rem;\r\n  font-weight: bold;\r\n}\r\n\r\n#control-copy {\r\n  text-align: right;\r\n  max-width: 35rem;\r\n  margin-top: -1.2rem;\r\n}\r\n\r\n#logic {\r\n  text-align: left;\r\n  max-width: 35rem;\r\n}\r\n\r\n.to-binary {\r\n  padding-right: 1rem;\r\n\r\n}\r\n\r\n.to-text {\r\n\r\n}\r\n\r\n.text-title {\r\n  font-family: Verdana, Geneva, sans-serif;\r\n  font-size: 1.8rem;\r\n  min-height: 5rem;\r\n  max-height: 5rem;\r\n  color: #999999;\r\n}\r\n\r\n.binary-title {\r\n  font-family: \"Courier New\", Courier, monospace;\r\n  min-height: 5rem;\r\n  max-height: 5rem;\r\n  color: #999999;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

module.exports = "<h1 id=\"header\" [ngClass]=\"text2bin === true ? 'wrap text-title' : 'wrap binary-title'\">{{pageTitle}}</h1>\r\n\r\n<div id=\"logic\" class=\"wrap\">\r\n  <md-radio-group [(ngModel)]=\"text2bin\">\r\n    <md-radio-button *ngFor=\"let selection of selections\" [value]=\"selection.val\"\r\n      [ngClass]=\"selection.class\" (change)=\"changeLogic()\">\r\n      {{selection.title}} </md-radio-button>\r\n  </md-radio-group>\r\n</div>\r\n\r\n<div id=\"input\" class=\"wrap\"> \r\n  <textarea #input [(ngModel)]=\"inputText\" (keyup)=\"onKeyup()\" class=\"input-area\" \r\n    mdInput [placeholder]=\"placeholderText\"></textarea>\r\n</div>\r\n\r\n<div id=\"control\" class=\"wrap\">\r\n  <button md-raised-button color=\"primary\" mdTooltip={{clearTooltip}} (click)=\"onClear()\">Clear</button>\r\n</div>\r\n\r\n<div id=\"result\" class=\"wrap\">\r\n  {{result}}\r\n</div>\r\n\r\n<div id=\"control-copy\" class=\"wrap\">\r\n  <button md-raised-button color=\"primary\" [class.copy-success]= \"isCopied\"\r\n    ngxClipboard cbContent={{result}} (cbOnSuccess)=\"isCopied=true\"\r\n    (click)=\"onCopyClick()\" (mouseleave)=\"onMouseLeave()\"\r\n    mdTooltip={{copyTooltip}} mdTooltipPosition=\"below\"> {{copyButtonText}}\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(85);


/***/ }),

/***/ 84:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 84;


/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(95);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.copyText = "Copy";
        this.copiedText = "Copied!";
        this.pageTitle = 'Text to Binary';
        this.text2bin = true;
        this.isCopied = false;
        this.copyButtonText = this.copyText;
        this.inputText = "";
        this.result = '';
        this.copyTooltip = "Copy to Clipboard";
        this.clearTooltip = "Clear Entered Text";
        this.placeholderText = "Enter text ...";
        this.selections = [
            { title: 'Text to Binary', val: true, class: 'to-binary' },
            { title: 'Binary to Text', val: false, class: 'to-text' }
        ];
    }
    AppComponent.prototype.onCopyClick = function () {
        this.isCopied = true;
        this.copyButtonText = this.copiedText;
    };
    AppComponent.prototype.onKeyup = function () {
        this.convertIt();
    };
    AppComponent.prototype.onMouseLeave = function () {
        this.isCopied = false;
        this.copyButtonText = this.copyText;
    };
    AppComponent.prototype.onClear = function () {
        this.inputText = "";
        this.result = "";
    };
    AppComponent.prototype.toBinary = function (input) {
        return input
            .split('')
            .map(function (char) {
            var res = char.charCodeAt(0).toString(2);
            while (res.length < (8)) {
                res = "0" + res;
            }
            return res;
        })
            .join(' ');
    };
    AppComponent.prototype.toText = function (input) {
        return input
            .split(/\s/)
            .map(function (val) { return String.fromCharCode(parseInt(val, 2)); })
            .join("");
    };
    AppComponent.prototype.convertIt = function () {
        this.result = this.text2bin === true ? this.toBinary(this.inputText) : this.toText(this.inputText);
    };
    AppComponent.prototype.changeLogic = function () {
        this.text2bin = this.text2bin === true ? false : true;
        if (this.text2bin === true) {
            this.placeholderText = "Enter text ...";
            this.pageTitle = "Text to Binary";
        }
        else {
            this.placeholderText = "Enter binary ...";
            this.pageTitle = "Binary to Text";
        }
        console.log(this.text2bin);
        this.convertIt();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(155),
        styles: [__webpack_require__(150)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_clipboard__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_hammerjs__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_hammerjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_clipboard__["a" /* ClipboardModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MdRadioModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MdTooltipModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.bundle.js.map