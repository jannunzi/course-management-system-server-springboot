webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-course-editor></app-course-editor>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_course_course_component__ = __webpack_require__("../../../../../src/app/components/course/course.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_module_list_module_list_component__ = __webpack_require__("../../../../../src/app/components/module-list/module-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_course_editor_course_editor_component__ = __webpack_require__("../../../../../src/app/components/course-editor/course-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_section_list_editor_section_list_editor_component__ = __webpack_require__("../../../../../src/app/components/section-list-editor/section-list-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_subsection_list_editor_subsection_list_editor_component__ = __webpack_require__("../../../../../src/app/components/subsection-list-editor/subsection-list-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng_contenteditable__ = __webpack_require__("../../../../ng-contenteditable/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng_contenteditable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng_contenteditable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular_sortablejs__ = __webpack_require__("../../../../angular-sortablejs/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular_sortablejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular_sortablejs__);
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_course_course_component__["a" /* CourseComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_module_list_module_list_component__["a" /* ModuleListComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_course_editor_course_editor_component__["a" /* CourseEditorComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_section_list_editor_section_list_editor_component__["a" /* SectionListEditorComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_subsection_list_editor_subsection_list_editor_component__["a" /* SubsectionListEditorComponent */],
            __WEBPACK_IMPORTED_MODULE_9_ng_contenteditable__["ContenteditableDirective"]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_10_angular_sortablejs__["SortablejsModule"],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/course-editor/course-editor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/course-editor/course-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<br />\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <app-module-list></app-module-list>\n    </div>\n    <div class=\"col-md-9\">\n      <app-section-list-editor></app-section-list-editor>\n      <br/>\n      <app-subsection-list-editor></app-subsection-list-editor>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/course-editor/course-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CourseEditorComponent = (function () {
    function CourseEditorComponent() {
    }
    CourseEditorComponent.prototype.ngOnInit = function () {
    };
    return CourseEditorComponent;
}());
CourseEditorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-course-editor',
        template: __webpack_require__("../../../../../src/app/components/course-editor/course-editor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/course-editor/course-editor.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CourseEditorComponent);

//# sourceMappingURL=course-editor.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/course/course.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/course/course.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  course works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/course/course.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CourseComponent = (function () {
    function CourseComponent() {
    }
    CourseComponent.prototype.ngOnInit = function () {
    };
    return CourseComponent;
}());
CourseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-course',
        template: __webpack_require__("../../../../../src/app/components/course/course.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/course/course.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CourseComponent);

//# sourceMappingURL=course.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/module-list/module-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/module-list/module-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ul [sortablejs]=\"modules\"\n    [sortablejsOptions]=\"{ animation: 300 }\"\n    class=\"list-group jga-sortable-vertical\">\n  <li (click)=\"selectModule(module)\"\n      [ngClass]=\"{'active': module.selected}\"\n      *ngFor=\"let module of modules\" class=\"list-group-item\">\n    <textarea [hidden]=\"!module.selected\"\n              rows=\"1\"\n           [(ngModel)]=\"module.label\"\n              class=\"jga-padding-0px jga-border-none jga-background-transparent\"></textarea>\n    <i [hidden]=\"!module.selected\"\n       (click)=\"deleteModule(module)\"\n       class=\"float-right jga-font-size-1-point-5em fa fa-times\"></i>\n    <span [hidden]=\"module.selected\">{{module.label}}</span>\n  </li>\n  <li (click)=\"addModule()\" class=\"list-group-item jga-text-align-center jga-border-left-right-none jga-border-bottom-none\">\n    <i class=\"jga-color-red fa fa-2x fa-plus-circle\"></i>\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/components/module-list/module-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__module__ = __webpack_require__("../../../../../src/app/components/module-list/module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModuleListComponent = (function () {
    function ModuleListComponent() {
    }
    ModuleListComponent.prototype.ngOnInit = function () {
        this.modules = [
            { label: 'Module 1', selected: false },
            { label: 'Module 2', selected: false },
            { label: 'Module 3', selected: false },
            { label: 'Module 4', selected: false },
            { label: 'Module 5', selected: false }
        ];
    };
    ModuleListComponent.prototype.selectModule = function (module) {
        this.modules.forEach(function (_module) {
            _module.selected = false;
        });
        module.selected = true;
    };
    ModuleListComponent.prototype.deleteModule = function (module) {
        this.modules.splice(this.modules.indexOf(module), 1);
    };
    ModuleListComponent.prototype.addModule = function () {
        var module = new __WEBPACK_IMPORTED_MODULE_1__module__["a" /* Module */]('New Module', false);
        this.modules.push(module);
        this.selectModule(module);
    };
    return ModuleListComponent;
}());
ModuleListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-module-list',
        template: __webpack_require__("../../../../../src/app/components/module-list/module-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/module-list/module-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ModuleListComponent);

//# sourceMappingURL=module-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/module-list/module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Module; });
var Module = (function () {
    function Module(label, selected) {
        this.label = label;
        this.selected = selected;
    }
    return Module;
}());

//# sourceMappingURL=module.js.map

/***/ }),

/***/ "../../../../../src/app/components/section-list-editor/section-list-editor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/section-list-editor/section-list-editor.component.html":
/***/ (function(module, exports) {

module.exports = "\n<ul [sortablejs]=\"sections\"\n    [sortablejsOptions]=\"{ animation: 150 }\"\n    class=\"nav nav-tabs jga-sortable-horizontal\">\n  <li *ngFor=\"let section of sections\"\n      ngInit=\"section.selected = false\"\n      (click)=\"selectSection(section)\"\n      class=\"nav-item\"\n      title=\"Active pills can be removed and label can be edited\">\n    <a class=\"jga nav-link\"\n       [hidden]=\"!section.selected\"\n       [ngClass]=\"{'active': section.selected}\"\n       href=\"#\">\n      <input class=\"jga-padding-0px jga-background-transparent jga-border-none\"\n             [(ngModel)]=\"section.label\"/>\n      &nbsp;\n      <i class=\"fa fa-times\"></i>\n    </a>\n    <a class=\"jga nav-link\"\n       [hidden]=\"section.selected\"\n       href=\"#\">\n      {{section.label}}\n    </a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" href=\"#\">\n      <i class=\"jga-color-red jga-font-size-1-point-3em fa fa-plus-circle\"></i>\n    </a>\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/components/section-list-editor/section-list-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionListEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SectionListEditorComponent = (function () {
    function SectionListEditorComponent() {
    }
    SectionListEditorComponent.prototype.sectionLabelChanged = function (section) {
        console.log(section);
        // section.label = section.label.replace(/\n/, '');
        // section.label = section.label.replace(/\r/, '');
    };
    SectionListEditorComponent.prototype.selectSection = function (section) {
        this.sections.forEach(function (_section) {
            _section.selected = false;
        });
        section.selected = !section.selected;
    };
    SectionListEditorComponent.prototype.ngOnInit = function () {
        this.sections = [
            { label: 'section a', selected: false },
            { label: 'section b', selected: false },
            { label: 'section c', selected: false }
        ];
    };
    return SectionListEditorComponent;
}());
SectionListEditorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-section-list-editor',
        template: __webpack_require__("../../../../../src/app/components/section-list-editor/section-list-editor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/section-list-editor/section-list-editor.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SectionListEditorComponent);

//# sourceMappingURL=section-list-editor.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/subsection-list-editor/subsection-list-editor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/subsection-list-editor/subsection-list-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-pills jga-sortable\"\n    [sortablejs]=\"subsections\"\n    [sortablejsOptions]=\"{ animation: 150 }\">\n  <li *ngFor=\"let subsection of subsections\"\n      ngInit=\"subsection.selected = false\"\n      (click)=\"selectSubsection(subsection)\"\n      class=\"nav-item\"\n      title=\"Active pills can be removed and label can be edited\">\n    <a class=\"jga nav-link\"\n       [hidden]=\"!subsection.selected\"\n       [ngClass]=\"{'active': subsection.selected}\"\n       href=\"#\">\n      <input class=\"jga-padding-0px jga-background-transparent jga-border-none\"\n             [(ngModel)]=\"subsection.label\"/>\n      &nbsp;\n      <i class=\"fa fa-times\"></i>\n    </a>\n    <a class=\"jga nav-link\"\n       [hidden]=\"subsection.selected\"\n       href=\"#\">\n      {{subsection.label}}\n    </a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" href=\"#\">\n      <i class=\"jga-color-red jga-font-size-1-point-5em fa fa-plus-circle\"></i>\n    </a>\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/components/subsection-list-editor/subsection-list-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubsectionListEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SubsectionListEditorComponent = (function () {
    function SubsectionListEditorComponent() {
    }
    SubsectionListEditorComponent.prototype.selectSubsection = function (subsection) {
        this.subsections.forEach(function (_subsection) {
            _subsection.selected = false;
        });
        subsection.selected = !subsection.selected;
    };
    SubsectionListEditorComponent.prototype.ngOnInit = function () {
        this.subsections = [
            { label: 'Subsection 1', selected: false },
            { label: 'Subsection 2', selected: false },
            { label: 'Subsection 3', selected: false },
            { label: 'Subsection 4', selected: false },
            { label: 'Subsection 5', selected: false }
        ];
    };
    return SubsectionListEditorComponent;
}());
SubsectionListEditorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-subsection-list-editor',
        template: __webpack_require__("../../../../../src/app/components/subsection-list-editor/subsection-list-editor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/subsection-list-editor/subsection-list-editor.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SubsectionListEditorComponent);

//# sourceMappingURL=subsection-list-editor.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map