(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-slider-code></app-slider-code>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'SliderCheck';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _slider_code_slider_code_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slider-code/slider-code.component */ "./src/app/slider-code/slider-code.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_9___default.a);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _slider_code_slider_code_component__WEBPACK_IMPORTED_MODULE_3__["SliderCodeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"]
            ],
            providers: [{ provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["zh_CN"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/slider-code/slider-code.component.css":
/*!*******************************************************!*\
  !*** ./src/app/slider-code/slider-code.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div{\n  margin-top: 15px;\n  margin-left: 15px;\n  width: 300px;\n}\n.sliderContainer {\n  margin-top: 15px;\n}\n.slider-canvas {\n  z-index: 1;\n}\n.block {\n  z-index: 2;\n  /*filter: saturate(500%);*/\n}\n.slider{\n  text-align: center;\n  margin-left: 0;\n  padding-top: 10px;\n  z-index: 1;\n  background-color: antiquewhite;\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);\n  height: 40px;\n}\n.sliderSquare{\n  position: absolute;\n  cursor: pointer;\n  transition: background .2s linear;\n  margin-left: 0;\n  margin-top: -40px;\n  padding-top: 10px;\n  text-align: center;\n  z-index: 2;\n  background: #fff;\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);\n  width: 40px;\n  height: 40px;\n}\n.sliderCheckSuccess {\n  background-color: aquamarine;\n}\n.sliderSquare:hover{\n  background-color: #1991FA;\n}\n.slider_Fail {\n  background-color: chocolate;\n}\n"

/***/ }),

/***/ "./src/app/slider-code/slider-code.component.html":
/*!********************************************************!*\
  !*** ./src/app/slider-code/slider-code.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sliderContainer\">\n    <canvas #canvas width={{imgWidth}} height={{imgHeight}} class=\"slider-canvas\"></canvas>\n    <canvas #slider width={{imgWidth}} height={{imgHeight}} [style.margin-left]=\"blockMarginLeft\" class=\"block\" id=\"block\"></canvas>\n</div>\n<div>\n  <div #sliderContainer class=\"slider\">\n    <span #text style=\"user-select: none\" >滑动进行验证>></span>\n  </div>\n  <div #square class=\"sliderSquare\" [style.margin-left]=\"squareMarginLeft\" (mousedown)=\"sliderMouseDown($event)\" (mousemove)=\"sliderMouseMove($event)\" (mouseup)=\"sliderMouseUp($event)\">\n    <span style=\"user-select: none\" >→</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/slider-code/slider-code.component.ts":
/*!******************************************************!*\
  !*** ./src/app/slider-code/slider-code.component.ts ***!
  \******************************************************/
/*! exports provided: SliderCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderCodeComponent", function() { return SliderCodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SliderCodeComponent = /** @class */ (function () {
    function SliderCodeComponent() {
        this.mouseDown = false;
        this.originX = 0;
        this.originY = 0;
        this.trail = [];
        this.r = 12;
        this.w = 50;
        this.blockMarginLeft = '-300px';
        this.squareMarginLeft = '0';
    }
    SliderCodeComponent.prototype.ngOnInit = function () {
        this.initData();
    };
    SliderCodeComponent.prototype.initData = function () {
        this.imgHeight = 200;
        this.imgWidth = 300;
        this.blockLocation();
    };
    SliderCodeComponent.prototype.ngAfterViewInit = function () {
        this.drawBlock();
    };
    SliderCodeComponent.prototype.getRandomImg = function () {
        return 'https://picsum.photos/300/150/?image=' + this.getRandomNumberByRange(0, 400);
    };
    SliderCodeComponent.prototype.getRandomNumberByRange = function (start, end) {
        return Math.round(Math.random() * (end - start) + start);
    };
    SliderCodeComponent.prototype.drawBlock = function () {
        this.src = this.getRandomImg();
        var width = this.imgWidth;
        var height = this.imgHeight;
        var block = this.canvasSlider.nativeElement;
        var slider_x = this.x;
        var slider_y = this.y;
        var slider_w = this.w;
        var slider_r = this.r;
        var img = this.imgFromPath(this.src);
        var canvasContext = this.canvasImage.nativeElement.getContext('2d');
        var blockContext = this.canvasSlider.nativeElement.getContext('2d');
        block.width = width;
        img.onload = function () {
            canvasContext.drawImage(img, 0, 0, width, height);
            blockContext.drawImage(img, 0, 0, width, height);
            var blockWidth = 80;
            var _y = slider_y - slider_r * 2 + 2; // 滑块实际的y坐标
            var ImageData = blockContext.getImageData(slider_x, _y, blockWidth, blockWidth);
            block.width = slider_w + slider_r * 2;
            blockContext.putImageData(ImageData, 0, _y);
        };
        this.draw(canvasContext, 'fill');
        this.draw(blockContext, 'clip');
    };
    SliderCodeComponent.prototype.imgFromPath = function (path) {
        var img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = path;
        return img;
    };
    SliderCodeComponent.prototype.blockLocation = function () {
        this.x = Math.random() * 150 + 80;
        this.y = Math.random() * 120 + 20;
    };
    SliderCodeComponent.prototype.draw = function (ctx, type) {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.w / 2 - 6.62, this.y);
        ctx.arc(this.x + this.w / 2, this.y - this.r + 2, this.r, 0.68 * Math.PI, 2.32 * Math.PI);
        ctx.lineTo(this.x + this.w / 2 + 6.62, this.y);
        ctx.lineTo(this.x + this.w, this.y);
        ctx.lineTo(this.x + this.w, this.y + this.w / 2 - 6.62);
        ctx.arc(this.x + this.w + this.r - 2, this.y + this.w / 2, this.r, 1.18 * Math.PI, 2.86 * Math.PI);
        ctx.lineTo(this.x + this.w, this.y + this.w / 2 + 6.62);
        ctx.lineTo(this.x + this.w, this.y + this.w);
        ctx.lineTo(this.x, this.y + this.w);
        ctx.lineTo(this.x, this.y + this.w - this.r / 2);
        ctx.arc(this.x, this.y + this.w / 2, this.r, 0.5 * Math.PI, -0.5 * Math.PI, true);
        ctx.lineTo(this.x, this.y + this.r / 2);
        ctx.lineTo(this.x, this.y);
        ctx.lineWidth = 2;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.strokeStyle = 'rgba(100, 100, 100, 0.7)';
        ctx.stroke();
        if (type === 'clip') {
            ctx.clip();
            ctx.globalCompositeOperation = 'overlay';
        }
        if (type === 'fill') {
            ctx.fill();
            ctx.globalCompositeOperation = 'overlay';
        }
    };
    SliderCodeComponent.prototype.sliderMouseDown = function (e) {
        this.originX = e.x;
        this.originY = e.y;
        this.mouseDown = true;
    };
    SliderCodeComponent.prototype.sliderMouseMove = function (e) {
        if (!this.mouseDown) {
            return;
        }
        /*鼠标移动的事件*/
        var movex = e.x - this.originX;
        var moveY = e.y - this.originY;
        if (movex < 0 || movex + 38 >= this.imgWidth) {
            return false;
        }
        this.squareMarginLeft = movex + 'px';
        var blockLeft = -300 + movex / 260 * 224;
        this.blockMarginLeft = blockLeft + 'px';
        this.trail.push(moveY);
    };
    SliderCodeComponent.prototype.sliderMouseUp = function (e) {
        var _this = this;
        this.mouseDown = false;
        if (e.x === this.originX) {
            return;
        }
        var _a = this.verify(), spliced = _a.spliced, TuringTest = _a.TuringTest;
        if (spliced) {
            if (TuringTest) {
                // this.sliderContainer.nativeElement.addClass('');
                console.log('验证成功');
                setTimeout(function () {
                    _this.reset();
                }, 1000);
            }
            else {
                // this.sliderContainer.nativeElement.addClass('');
                console.log('验证失败');
                // this.text.nativeElement.innerHTML = '再试一次';
            }
        }
        else {
            // this.sliderContainer.nativeElement.addClass('slider_Fail');
            console.log(' 校验验证失败');
            setTimeout(function () {
                _this.reset();
            }, 1000);
        }
    };
    SliderCodeComponent.prototype.verify = function () {
        var arr = this.trail;
        var average = arr.reduce(this.sum) / arr.length;
        var deviations = arr.map(function (x) { return x - average; });
        var stddev = Math.sqrt(deviations.map(this.doubleSquare).reduce(this.sum)) / arr.length;
        var left = parseInt(this.blockMarginLeft, 0) + 300;
        return {
            spliced: Math.abs(left - this.x) < 10,
            TuringTest: average !== stddev,
        };
    };
    SliderCodeComponent.prototype.sum = function (x, y) {
        return x + y;
    };
    SliderCodeComponent.prototype.doubleSquare = function (x) {
        return x * x;
    };
    SliderCodeComponent.prototype.reset = function () {
        var imgCtx = this.canvasImage.nativeElement.getContext('2d');
        var blockCtx = this.canvasSlider.nativeElement.getContext('2d');
        imgCtx.clearRect(0, 0, this.imgWidth, this.imgHeight);
        blockCtx.clearRect(0, 0, this.imgWidth, this.imgHeight);
        this.blockLocation();
        this.drawBlock();
        this.blockMarginLeft = -300 + 'px';
        this.squareMarginLeft = 0 + 'px';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('canvas'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SliderCodeComponent.prototype, "canvasImage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('slider'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SliderCodeComponent.prototype, "canvasSlider", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('square'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SliderCodeComponent.prototype, "square", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('#sliderContainer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SliderCodeComponent.prototype, "sliderContainer", void 0);
    SliderCodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-slider-code',
            template: __webpack_require__(/*! ./slider-code.component.html */ "./src/app/slider-code/slider-code.component.html"),
            styles: [__webpack_require__(/*! ./slider-code.component.css */ "./src/app/slider-code/slider-code.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], SliderCodeComponent);
    return SliderCodeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/cirelir/Desktop/SliderCheck/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map