webpackJsonp([10],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./aboutus/aboutus.module": [
		"../../../../../src/app/aboutus/aboutus.module.ts",
		8,
		0
	],
	"./auth/login/login.module": [
		"../../../../../src/app/auth/login/login.module.ts",
		7,
		0
	],
	"./auth/registeration/registeration.module": [
		"../../../../../src/app/auth/registeration/registeration.module.ts",
		6,
		0
	],
	"./category/category.module": [
		"../../../../../src/app/category/category.module.ts",
		5,
		0
	],
	"./contact/contact.module": [
		"../../../../../src/app/contact/contact.module.ts",
		4,
		0
	],
	"./gallery/gallery.module": [
		"../../../../../src/app/gallery/gallery.module.ts",
		3,
		0
	],
	"./home/home.module": [
		"../../../../../src/app/home/home.module.ts",
		0,
		1
	],
	"./trainor/trainor.module": [
		"../../../../../src/app/trainor/trainor.module.ts",
		2,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: '<router-outlet></router-outlet>'
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__layout_layout_component__ = __webpack_require__("../../../../../src/app/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_validation__);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__layout_layout_component__["a" /* LayoutComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_8_ng2_validation__["CustomFormsModule"],
        ],
        providers: [{
                provide: __WEBPACK_IMPORTED_MODULE_2__angular_common__["LocationStrategy"],
                useClass: __WEBPACK_IMPORTED_MODULE_2__angular_common__["HashLocationStrategy"]
            }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_layout_component__ = __webpack_require__("../../../../../src/app/layout/layout.component.ts");
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__layout_layout_component__["a" /* LayoutComponent */],
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'home',
                loadChildren: './home/home.module#HomeModule'
            },
            {
                path: 'aboutus',
                loadChildren: './aboutus/aboutus.module#AboutusModule'
            },
            {
                path: 'trainors',
                loadChildren: './trainor/trainor.module#TrainorModule'
            },
            {
                path: 'login',
                loadChildren: './auth/login/login.module#LoginModule'
            },
            {
                path: 'registeration',
                loadChildren: './auth/registeration/registeration.module#RegisterationModule'
            },
            {
                path: 'gallery',
                loadChildren: './gallery/gallery.module#GalleryModule'
            },
            {
                path: 'contact',
                loadChildren: './contact/contact.module#ContactModule'
            },
            {
                path: 'category',
                loadChildren: './category/category.module#CategoryModule'
            },
        ]
    }
    /*{
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'login',
      component: LoginComponent,
   
    },
     {
      path: 'registration',
      component: RegistrationComponent,
   
    }*/
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"header\">\n\n\t<nav class=\"navbar\">\n\t\t\t\t\t<div class=\"logo-area\">\n\t\t\t\t\t<a [routerLink]=\"['/']\" class=\"logo\"><img src=\"assets/images/logo.png\"  alt=\"logo\"></a><br/>\n\t\t\t\t\t\n\t\t\t\t</div><!-- /.logo-area -->\n\t\t<!-- /.social-media-list -->\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"menu-left\">\n\t\t\t\t\t<ul class=\"nav navbar-nav pull-right\">\n\t\t\t\t\t\t<li class=\"menu\">\n\t\t\t\t\t\t\t<a [routerLink]=\"['/']\">Home</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li><a [routerLink]=\"['/aboutus']\">About</a></li>\n\t\t\t\t\t\t<li class=\"menu\">\n\t\t\t\t\t\t\t<a [routerLink]=\"['/trainors']\">Trainers</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<!-- <li class=\"dropdown\">\n\t\t\t\t\t\t\t<a href=\"class-detail.html\">Class</a>\n\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t<li><a href=\"class-detail.html\">Class Details</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"class-grid.html\">Class Grid</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"class-list.html\">Class List</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"class-schedule.html\">Class Schedule</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li> -->\n\t\t\t\t\t</ul>\n\t\t\t\t</div><!-- /.menu-left -->\n\n\n\n\t\t\t\t<div class=\"menu-right\">\n\t\t\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\t<!-- <li class=\"dropdown\">\n\t\t\t\t\t\t\t<a href=\"blog-single-default.html\">Blog</a>\n\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t<li><a href=\"blog-single-default.html\">Blog</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"blog-single-layout2.html\">Blog Single Layout</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li> -->\n\t\t\t\t\t\t<!-- <li class=\"dropdown\">\n\t\t\t\t\t\t\t<a href=\"#\">Category</a>\n\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['/login']\">Accupressure</a></li>\n\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['/login']\">Accupenture</a></li>\n\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['/registeration']\">Naturopathy</a></li>\n\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['/registeration']\">Marm Chikitsa</a></li>\n\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['/registeration']\">Aurvedic therapy</a></li>\n\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['/registeration']\">Relaxation</a></li>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li> -->\n\t\t\t\t\t\t<li class=\"menu\">\n\t\t\t\t\t\t\t<a  [routerLink]=\"['/category']\">Services</a>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"menu\">\n\t\t\t\t\t\t\t<a  [routerLink]=\"['/gallery']\">Gallery</a>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t\t\t<a href=\"#\">Account</a>\n\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['/login']\">Login</a></li>\n\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['/registeration']\">Registration</a></li>\n\t\t\t\t\t\t\t\t<!-- <li><a href=\"event-single.html\">Event Single</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"shop-index.html\">Shop</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"shop-product.html\">Shop Product</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"shopping-cart.html\">Product Cart</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"registration-form.html\">Registration Form</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"error.html\">Error</a></li> -->\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"menu\">\n\t\t\t\t\t\t\t<a  [routerLink]=\"['/contact']\">Contact</a>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div><!-- /.menu-right -->\n\t\t\t</div><!-- /.row -->\n\t\t</div><!-- /.container -->\n\n\n\n\n\t\t<div class=\"search-icon\" data-toggle=\"collapse\" data-target=\".search-field\"></div><!-- /.search-icon -->\n\t\t<div class=\"search-field collapse\">\n\t\t\t<input type=\"text\" placeholder=\"Search Here ...\">\n\t\t</div><!-- /.search-field -->\n\t</nav><!-- /navbar -->\n\n\t<div class=\"mobile-menu\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"m-menu\">\n\n\t\t\t\t\t<div class=\"navbar-header\">\n\t\t\t\t\t<!-- <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#bottomnav\" aria-controls=\"bottomnav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n      </button> -->\n\t\t\t\t\t\t<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n\t\t\t\t\t\t\t<span class=\"sr-only\">Toggle navigation</span>\n\t\t\t\t\t\t\t<span><i class=\"fa fa-bars\"></i></span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<a class=\"small-logo\" href=\"index.html\"><img src=\"assets/images/small-logo.png\" alt=\"Logo\"></a>\n\n\t\t\t\t\t\t<div class=\"search-icon\" data-toggle=\"collapse\" data-target=\".search-field\"></div><!-- /.search-icon -->\n\t\t\t\t\t\t<div class=\"search-field collapse\">\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Search Here ...\">\n\t\t\t\t\t\t</div><!-- /.search-field -->\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n\t\t\t\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t\t\t\t<li class=\"active-menu\">\n\t\t\t\t\t\t\t\t<a [routerLink]=\"['/']\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Home</a>\n\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t<li><a  [routerLink]=\"['/aboutus']\" >About</a></li>\n\n\t\t\t\t\t\t\t<li class=\"menu\">\n\t\t\t\t\t\t\t\t<a [routerLink]=\"['/trainors']\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Trainers</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Account</a>\n\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t<li><a  [routerLink]=\"['/login']\">Login</a></li>\n\t\t\t\t\t\t\t\t\t<li><a  [routerLink]=\"['/registeration']\">Registration</a></li>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"menu\">\n\t\t\t\t\t\t\t\t<a href=\"gallery-popup.html\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Gallery</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<li><a href=\"contact.html\" class=\"contact\">Contact</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div><!-- /.navbar-collapse -->\n\t\t\t\t\t<!-- Collect the nav links, forms, and other content for toggling -->\n\t\t\t\t\t<!-- /.navbar-collapse -->\n\n\t\t\t\t</div><!-- /.menu -->\n\t\t\t</div><!-- /.row -->\n\t\t</div><!-- /.container -->\n\t</div><!-- /.main-menu -->\n</header>\n<router-outlet></router-outlet>\n<footer id=\"main-footer\">\n\n\t<!-- footer top  -->\n\t<div class=\"footer-top\">\n\t\t<div class=\"section-padding\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"widget\">\n\t\t\t\t\t\t\t<h4 class=\"widget-title\">About Fitness24</h4>\n\t\t\t\t\t\t\t<p class=\"widget-des\">Uniquely actualize superior value and resource maximizing collaboration idea sharing. </p>\n\n\t\t\t\t\t\t\t<ul class=\"address\">\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-map-marker\"></i>\n\t\t\t\t\t\t\t\t\t<span>Delhi Ncr</span>\n\t\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-phone\"></i>\n\t\t\t\t\t\t\t\t\t<span>+918707025813</span>\n\t\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div><!-- /.widget -->\n\t\t\t\t\t</div><!-- /.col-md-3 -->\n\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"widget\">\n\t\t\t\t\t\t\t<h4 class=\"widget-title\">Useful links</h4>\n\n\t\t\t\t\t\t\t<ul class=\"links\">\n\t\t\t\t\t\t\t\t<li><a href=\"#\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-circle\"></i>\n\t\t\t\t\t\t\t\t\tMy Accounts\n\t\t\t\t\t\t\t\t</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-circle\"></i>\n\t\t\t\t\t\t\t\t\tSitemap\n\t\t\t\t\t\t\t\t</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-circle\"></i>\n\t\t\t\t\t\t\t\t\tTerms and Conditions\n\t\t\t\t\t\t\t\t</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-circle\"></i>\n\t\t\t\t\t\t\t\t\tAbout\n\t\t\t\t\t\t\t\t</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-circle\"></i>\n\t\t\t\t\t\t\t\t\tServices\n\t\t\t\t\t\t\t\t</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-circle\"></i>\n\t\t\t\t\t\t\t\t\tContact US\n\t\t\t\t\t\t\t\t</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div><!-- /.widget -->\n\t\t\t\t\t</div><!-- /.col-md-3 -->\n\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t<div class=\"widget\">\n\t\t\t\t\t\t\t<h4 class=\"widget-title\">Subscribe to our Newsletter</h4>\n\t\t\t\t\t\t\t<div class=\"newsletter-box\">\n\t\t\t\t\t\t\t\t<h5>Subscribe to our Newsletter</h5>\n\t\t\t\t\t\t\t\t<p>Seamlessly foster effective value with client-focused metrics. Holisticly redefine sticky systems with B2C process improvements.</p>\n\n\t\t\t\t\t\t\t\t<form class=\"subscribe-form\" action=\"#\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-envelope\"></i>\n\t\t\t\t\t\t\t\t\t<input class=\"email\" type=\"text\" name=\"email\" placeholder=\"Enter Your E-mail Address\">\n\t\t\t\t\t\t\t\t\t<input class=\"custom-btn subscribe\" type=\"submit\" value=\"Subscribe\">\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t<p class=\"privecy-policy\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-lock\"></i>\n\t\t\t\t\t\t\t\t\tYour e-mail address safe from 100% spam (<a href=\"#\">privecy policy</a>)\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div><!-- /.newsletter-box -->\t\n\t\t\t\t\t\t</div><!-- /.widget -->\n\t\t\t\t\t</div><!-- /.col-md-6 -->\n\n\t\t\t\t</div><!-- /.row -->\n\t\t\t</div><!-- /.container -->\n\t\t</div><!-- /.section-padding -->\n\t</div><!-- /.footer-top -->\n\n\t<!-- footer bottom  -->\n\t<div class=\"footer-bottom\">\n\t\t<p>&copy; Copyright 2018 <a href=\"#\"> Fitness24 </a>, All Right Researved.</p>\n\t</div><!-- /.footer-bottom -->\n</footer>"

/***/ }),

/***/ "../../../../../src/app/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    return LayoutComponent;
}());
LayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-layout',
        template: __webpack_require__("../../../../../src/app/layout/layout.component.html")
    }),
    __metadata("design:paramtypes", [])
], LayoutComponent);

//# sourceMappingURL=layout.component.js.map

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map