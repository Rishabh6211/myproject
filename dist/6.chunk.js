webpackJsonp([6],{

/***/ "../../../../../src/app/auth/registeration/registeration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/registeration/registeration.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"slider-section-2 slider-section-2-bg\">\n\t\t\t<div class=\"bannar-image\">\n\t\t\t\t<img src=\"assets/images/bannar-img.jpg\" alt=\"bannar\">\n\t\t\t</div><!-- /.bannar-image -->\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"slide\">\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"site-page-header clear-fix\">\n\t\t\t\t\t\t\t<div class=\"site-title\">\n\t\t\t\t\t\t\t\t<h2>Registration</h2>\n\t\t\t\t\t\t\t</div><!-- /.site-title -->\n\n\t\t\t\t\t\t\t<div class=\"breadcrumb\">\n\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t<li class=\"breadcrumb-item\"><a [routerLink]=\"['/']\">Home</a></li>\n\t\t\t\t\t\t\t\t\t<li class=\"breadcrumb-item active\"><a [routerLink]=\"['/registeration']\">Registration</a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div><!-- /.breadcrumb -->\n\t\t\t\t\t\t</div><!-- /.site-page-header -->\n\t\t\t\t\t</div><!-- /.slide -->\n\t\t\t\t</div>\n\t\t\t</div><!-- /.container -->\t\n\t\t</section>\n\n\t\t<!--\n\t\t\t\tregistration form start \t  =\n\t\t======================================= -->\n\t\t<section id=\"registration-page\">\n\t\t\t<div class=\"section-padding\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-7 left-col\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t<div class=\"do-main v2\" id=\"what-we-do\">\n\t\t\t\t\t<ul id=\"da-thumbs\" class=\" da-thumbs do-box\">\n\t\t\t\t\t\t<li><a href=\"#\">\n\t\t\t\t\t\t\t<span  class=\"icon flaticon-massage-3\"></span>\n\t\t\t\t\t\t\t<span class=\"text\">Accupressure</span>\n\t\t\t\t\t\t\t<div class=\"direction-overlay\">\n\t\t\t\t\t\t\t\t<span  class=\"icon flaticon-massage-3\"></span>\n\t\t\t\t\t\t\t\t<span class=\"text\">Accupressure</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a></li>\n\n\t\t\t\t\t\t<li><a href=\"#\">\n\t\t\t\t\t\t\t<span  class=\"icon flaticon-massage-2\"></span>\n\t\t\t\t\t\t\t<span class=\"text\">Marm therapy</span>\n\t\t\t\t\t\t\t<div class=\"direction-overlay\">\n\t\t\t\t\t\t\t\t<span  class=\"icon flaticon-massage-2\"></span>\n\t\t\t\t\t\t\t\t<span class=\"text\">Marm therapy</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a></li>\n\n\t\t\t\t\t\t<li><a href=\"#\">\n\t\t\t\t\t\t\t<span  class=\"icon flaticon-foot-massage\"></span>\n\t\t\t\t\t\t\t<span class=\"text\">Foot Accupressure</span>\n\t\t\t\t\t\t\t<div class=\"direction-overlay\">\n\t\t\t\t\t\t\t\t<span  class=\"icon flaticon-foot-massage\"></span>\n\t\t\t\t\t\t\t\t<span class=\"text\">Foot Accupressure</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a></li>\n\n\t\t\t\t\t\t<li><a href=\"#\">\n\t\t\t\t\t\t\t<span  class=\"icon flaticon-rehabilitation\"></span>\n\t\t\t\t\t\t\t<span class=\"text\">Water therapy</span>\n\t\t\t\t\t\t\t<div class=\"direction-overlay\">\n\t\t\t\t\t\t\t\t<span  class=\"icon flaticon-rehabilitation\"></span>\n\t\t\t\t\t\t\t\t<span class=\"text\">Water therapy</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a></li>\n\n\t\t\t\t\t\t<li><a href=\"#\">\n\t\t\t\t\t\t\t<span  class=\"icon flaticon-acupuncture\"></span>\n\t\t\t\t\t\t\t<span class=\"text\">Accupenture</span>\n\t\t\t\t\t\t\t<div class=\"direction-overlay\">\n\t\t\t\t\t\t\t\t<span  class=\"icon flaticon-acupuncture\"></span>\n\t\t\t\t\t\t\t\t<span class=\"text\">Accupenture</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a></li>\n\n\t\t\t\t\t\t<li><a href=\"#\">\n\t\t\t\t\t\t\t<span  class=\"icon flaticon-massage-1\"></span>\n\t\t\t\t\t\t\t<span class=\"text\">Relaxation</span>\n\t\t\t\t\t\t\t<div class=\"direction-overlay\">\n\t\t\t\t\t\t\t\t<span  class=\"icon fflaticon-massage-1\"></span>\n\t\t\t\t\t\t\t\t<span class=\"text\">Relaxation</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">\n\t\t\t\t\t\t\t<span  class=\"icon flaticon-person-on-meditation-posture-on-a-desk\"></span>\n\t\t\t\t\t\t\t<span class=\"text\">spa therapy</span>\n\t\t\t\t\t\t\t<div class=\"direction-overlay\">\n\t\t\t\t\t\t\t\t<span  class=\"icon flaticon-person-on-meditation-posture-on-a-desk\"></span>\n\t\t\t\t\t\t\t\t<span class=\"text\">spa therapy</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">\n\t\t\t\t\t\t\t<span  class=\"icon flaticon-woman-with-open-legs-posture\"></span>\n\t\t\t\t\t\t\t<span class=\"text\">Yoga</span>\n\t\t\t\t\t\t\t<div class=\"direction-overlay\">\n\t\t\t\t\t\t\t\t<span  class=\"icon flaticon-woman-with-open-legs-posture\"></span>\n\t\t\t\t\t\t\t\t<span class=\"text\">Yoga</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">\n\t\t\t\t\t\t\t<span  class=\"icon flaticon-exercise\"></span>\n\t\t\t\t\t\t\t<span class=\"text\">Marm Therapy</span>\n\t\t\t\t\t\t\t<div class=\"direction-overlay\">\n\t\t\t\t\t\t\t\t<span  class=\"icon flaticon-exercise\"></span>\n\t\t\t\t\t\t\t\t<span class=\"text\">Marm Therapy</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">\n\t\t\t\t\t\t\t<span  class=\"icon flaticon-stretching-exercises\"></span>\n\t\t\t\t\t\t\t<span class=\"text\">yoga Exercise</span>\n\t\t\t\t\t\t\t<div class=\"direction-overlay\">\n\t\t\t\t\t\t\t\t<span  class=\"icon flaticon-stretching-exercises\"></span>\n\t\t\t\t\t\t\t\t<span class=\"text\">yoga Exercise</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">\n\t\t\t\t\t\t\t<span  class=\"icon flaticon-hinduist-yoga-position\"></span>\n\t\t\t\t\t\t\t<span class=\"text\">Control Body</span>\n\t\t\t\t\t\t\t<div class=\"direction-overlay\">\n\t\t\t\t\t\t\t\t<span  class=\"icon flaticon-hinduist-yoga-position\"></span>\n\t\t\t\t\t\t\t\t<span class=\"text\">Control Body</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">\n\t\t\t\t\t\t\t<span  class=\"icon flaticon-yoga\"></span>\n\t\t\t\t\t\t\t<span class=\"text\">Balance Body</span>\n\t\t\t\t\t\t\t<div class=\"direction-overlay\">\n\t\t\t\t\t\t\t\t<span  class=\"icon flaticon-yoga\"></span>\n\t\t\t\t\t\t\t\t<span class=\"text\">Balance Body</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">\n\t\t\t\t\t\t\t<span  class=\"icon flaticon-flower-therapy\"></span>\n\t\t\t\t\t\t\t<span class=\"text\">Ayurvedic Therapy</span>\n\t\t\t\t\t\t\t<div class=\"direction-overlay\">\n\t\t\t\t\t\t\t\t<span  class=\"icon flaticon-flower-therapy\"></span>\n\t\t\t\t\t\t\t\t<span class=\"text\">Ayurvedic Therapy</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">\n\t\t\t\t\t\t\t<span  class=\"icon flaticon-physiotherapy\"></span>\n\t\t\t\t\t\t\t<span class=\"text\">Foot Therapy</span>\n\t\t\t\t\t\t\t<div class=\"direction-overlay\">\n\t\t\t\t\t\t\t\t<span  class=\"icon flaticon-physiotherapy\"></span>\n\t\t\t\t\t\t\t\t<span class=\"text\">Foot Therapy</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">\n\t\t\t\t\t\t\t<span  class=\"icon flaticon-therapy\"></span>\n\t\t\t\t\t\t\t<span class=\"text\">Marm Therapy</span>\n\t\t\t\t\t\t\t<div class=\"direction-overlay\">\n\t\t\t\t\t\t\t\t<span  class=\"icon flaticon-therapy\"></span>\n\t\t\t\t\t\t\t\t<span class=\"text\">Marm Therapy</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a></li>\n\t\t\t\t\t</ul>\n\n\t\t\t\t\t\n\t\t\t\t</div><!-- /.do-main -->\n\n\t\t\t</div><!-- /.row -->\n\t\t\t\t\t\t</div><!-- /.col-md-6 -->\n\n\t\t\t\t\t\t<div class=\"col-md-5 right-col\">\n\t\t\t\t\t\t\t<div class=\"registration comment-area\">\n\t\t\t\t\t\t\t\t<h3>Register Now</h3>\n\n\t\t\t\t\t\t\t\t<form role=\"form\" #registeration=\"ngForm\" (ngSubmit)=\"register()\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"form-group required\">\n\t\t\t\t\t\t\t\t\t<p class=\"control-label\">User name</p>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"username\" id=\"username\" #username=\"ngModel\" [(ngModel)]=\"user.username\" required>\n\t\t\t\t\t\t\t\t\t <div class=\"error-block\"> <small *ngIf=\"username.errors?.required && username.touched\" class=\"text-danger\"> Username is required </small> </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"form-group required\">\n\t\t\t\t\t\t\t\t\t<p class=\"control-label\">E-mail</p>\n\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" name=\"email\" id=\"email\" #email=\"ngModel\" [(ngModel)]=\"user.email\" email required>\n\t\t\t\t\t\t\t\t\t<div class=\"error-block\">\n\t\t\t\t\t\t\t\t\t <small *ngIf=\"email.errors?.required && email.touched\" class=\"text-danger\"> Email is required</small>\n\t\t\t\t\t\t\t\t\t <small *ngIf=\"email.errors?.email && email.dirty\" class=\"text-danger\">Email is not valid</small>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group required\">\n\t\t\t\t\t\t\t\t\t<p class=\"control-label\">Password</p>\n\t\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" name=\"password\" id=\"password\" #password=\"ngModel\" maxlength=\"20\" minlength=\"8\" [(ngModel)]=\"user.password\" required>\n\t\t\t\t\t\t\t\t\t<div class=\"error-block\">\n\t\t\t                            <small *ngIf=\"password.errors?.required && password.touched\" class=\"text-danger\">\n\t\t\t                              password is required\n\t\t\t                            </small>\n\t\t\t                            <small *ngIf=\" password.errors?.minlength && password.touched\" class=\"text-danger\">\n\t\t\t                                password is too small\n\t\t\t                            </small>\n\t\t\t                            <small *ngIf=\" password.errors?.maxlength && password.touched\" class=\"text-danger\">\n\t\t\t                                password is too large\n\t\t\t                            </small>\n\t\t\t                        </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group required\">\n\t\t\t\t\t\t\t\t\t<p class=\"control-label\">Confirm Password</p>\n\t\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" name=\"confirmpassword\" id=\"confirmpassword\" #confirmpassword=\"ngModel\" [(ngModel)]=\"user.confirmpassword\" [equalTo]=\"password\" required>\n\t\t\t\t\t\t\t\t\t<div class=\"error-block\">\n\t\t\t\t\t\t\t\t\t\t<small *ngIf=\"confirmpassword.errors?.required && confirmpassword.touched\" class=\"text-danger\"> confirm password is required </small>\n\t\t\t\t\t\t\t\t\t\t<small *ngIf=\"(confirmpassword.errors?.equalTo && confirmpassword.touched)\" class=\"text-danger\"> password mismatch </small> \n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group required\">\n\t\t\t\t\t\t\t\t\t<p class=\"control-label\">Phone</p>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" maxlength=\"10\" (keypress)=\"_keyPress($event)\" name=\"phone\" id=\"phone\" #phone=\"ngModel\" [(ngModel)]=\"user.phone\" minlength=\"10\" required>\n\t\t\t\t\t\t\t\t\t<div class=\"error-block\"> \n\t\t\t\t\t\t\t\t\t\t<small *ngIf=\"phone.errors?.required && phone.touched\" class=\"text-danger\"> Mobile number is required </small> \n\t\t\t\t\t\t\t\t\t\t<small *ngIf=\"phone.errors?.minlength && phone.touched\" class=\"text-danger\"> Enter valid mobile number</small> \n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t\t<div class=\"form-group required\">\n\t\t\t\t\t\t\t\t\t<p class=\"control-label\">State</p>\n\t\t\t\t\t\t\t\t\t<select select=\"state\" class=\"form-control\" name=\"state\" id=\"state\" placeholder=\"\" #state=\"ngModel\" [(ngModel)]=\"user.state\" required>\n\t\t\t\t\t\t\t\t\t  <option value=\"\">Select state</option>\n\t\t\t\t\t\t\t\t\t  <option value=\"delhi\">Delhi</option>\n\t\t\t\t\t\t\t\t\t  <option value=\"up\">UP</option>\n\t\t\t\t\t\t\t\t\t  <option value=\"uk\">Uk</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t<div class=\"error-block\"> \n\t\t\t\t\t\t\t\t\t\t<small *ngIf=\"state.errors?.required && state.touched\" class=\"text-danger\"> State is required </small> \n\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group required\">\n\t\t\t\t\t\t\t\t\t<p class=\"control-label\">District</p>\n\t\t\t\t\t\t\t\t\t<select select=\"district\" class=\"form-control\" name=\"district\" id=\"district\" #district=\"ngModel\" [(ngModel)]=\"user.district\" placeholder=\"\" required>\n\t\t\t\t\t\t\t\t\t  <option value=\"\">Select District</option>\n\t\t\t\t\t\t\t\t\t  <option value=\"delhi\">Delhi</option>\n\t\t\t\t\t\t\t\t\t  <option value=\"old\">Old Delhi</option>\n\t\t\t\t\t\t\t\t\t  <option value=\"south\">South Delhi</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t<div class=\"error-block\"> \n\t\t\t\t\t\t\t\t\t\t<small *ngIf=\"district.errors?.required && district.touched\" class=\"text-danger\"> District is required </small> \n\t\t\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group required\">\n\t\t\t\t\t\t\t\t\t<p class=\"control-label\">City</p>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" maxlength=\"50\" name=\"city\" id=\"city\" #city=\"ngModel\" [(ngModel)]=\"user.city\" required>\n\t\t\t\t\t\t\t\t\t<div class=\"error-block\"> \n\t\t\t\t\t\t\t\t\t\t<small *ngIf=\"city.errors?.required && city.touched\" class=\"text-danger\"> City is required </small> \n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group required\">\n\t\t\t\t\t\t\t\t\t<p class=\"control-label\">Address</p>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" maxlength=\"100\" name=\"address\" id=\"address\" #address=\"ngModel\" [(ngModel)]=\"user.address\" required>\n\t\t\t\t\t\t\t\t\t<div class=\"error-block\"> \n\t\t\t\t\t\t\t\t\t\t<small *ngIf=\"address.errors?.required && address.touched\" class=\"text-danger\"> Address is required </small> \n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group required\">\n\t\t\t\t\t\t\t\t\t<p class=\"control-label\">PinCode</p>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"  name=\"pincode\" maxlength=\"6\" (keypress)=\"_keyPress($event)\" id=\"pincode\" #pincode=\"ngModel\" [(ngModel)]=\"user.pincode\" required>\n\t\t\t\t\t\t\t\t\t<div class=\"error-block\"> \n\t\t\t\t\t\t\t\t\t\t<small *ngIf=\"pincode.errors?.required && pincode.touched\" class=\"text-danger\"> Pincode is required </small> \n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"check-box-area\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"check-box\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"check-box-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"vehicle\" value=\"Bike\" class=\"checkbox1\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"check-box-cont\">I Agree to the terms and conditions.</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"check-box\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"check-box-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"vehicle\" value=\"Bike\" class=\"checkbox1\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"check-box-cont\">I would like to subscribe to the newsletter.</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-lg\" [disabled]=\"(!registeration.valid)\">Sign Up</button>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div><!-- /.registration comment-area -->\n\t\t\t\t\t\t</div><!-- /.col-md-6 -->\n\t\t\t\t\t</div><!-- /.row -->\n\t\t\t\t</div><!-- /.container -->\n\t\t\t</div><!-- /.section-padding -->\n\t\t</section>\n\n"

/***/ }),

/***/ "../../../../../src/app/auth/registeration/registeration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterationComponent = (function () {
    function RegisterationComponent() {
        this.user = {
            username: "",
            email: "",
            password: "",
            confirmpassword: "",
            phone: "",
            city: "",
            state: "",
            district: "",
            address: "",
            pincode: ""
        };
    }
    RegisterationComponent.prototype.ngOnInit = function () {
    };
    RegisterationComponent.prototype.register = function () {
    };
    RegisterationComponent.prototype._keyPress = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            // invalid character, prevent input
            event.preventDefault();
        }
    };
    return RegisterationComponent;
}());
RegisterationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-registeration',
        template: __webpack_require__("../../../../../src/app/auth/registeration/registeration.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/registeration/registeration.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RegisterationComponent);

//# sourceMappingURL=registeration.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/registeration/registeration.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registeration_component__ = __webpack_require__("../../../../../src/app/auth/registeration/registeration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_validation__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterationModule", function() { return RegisterationModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__registeration_component__["a" /* RegisterationComponent */],
        data: {
            title: 'Registeration',
        }
    }
];
var RegisterationModule = (function () {
    function RegisterationModule() {
    }
    return RegisterationModule;
}());
RegisterationModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild(routes),
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5_ng2_validation__["CustomFormsModule"]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__registeration_component__["a" /* RegisterationComponent */]]
    })
], RegisterationModule);

//# sourceMappingURL=registeration.module.js.map

/***/ })

});
//# sourceMappingURL=6.chunk.js.map