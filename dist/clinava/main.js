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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_directives/alert.component.html":
/*!**************************************************!*\
  !*** ./src/app/_directives/alert.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>"

/***/ }),

/***/ "./src/app/_directives/alert.component.ts":
/*!************************************************!*\
  !*** ./src/app/_directives/alert.component.ts ***!
  \************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/_directives/alert.component.html")
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/_directives/index.ts":
/*!**************************************!*\
  !*** ./src/app/_directives/index.ts ***!
  \**************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component */ "./src/app/_directives/alert.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });




/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_guards/index.ts":
/*!**********************************!*\
  !*** ./src/app/_guards/index.ts ***!
  \**********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "./src/app/_helpers/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authenticationService.logout();
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/_helpers/index.ts":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: ErrorInterceptor, JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_0__["ErrorInterceptor"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__["JwtInterceptor"]; });





/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        if (localStorage.getItem("currentUser")) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + JSON.parse(localStorage.getItem("currentUser")).accessToken,
                    "Content-Type": "application/json"
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/_models/address.ts":
/*!************************************!*\
  !*** ./src/app/_models/address.ts ***!
  \************************************/
/*! exports provided: Address */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
var Address = /** @class */ (function () {
    function Address() {
    }
    return Address;
}());



/***/ }),

/***/ "./src/app/_models/config.ts":
/*!***********************************!*\
  !*** ./src/app/_models/config.ts ***!
  \***********************************/
/*! exports provided: Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
var Config = /** @class */ (function () {
    function Config() {
    }
    return Config;
}());



/***/ }),

/***/ "./src/app/_models/contact.ts":
/*!************************************!*\
  !*** ./src/app/_models/contact.ts ***!
  \************************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
var Contact = /** @class */ (function () {
    function Contact() {
    }
    return Contact;
}());



/***/ }),

/***/ "./src/app/_models/event.ts":
/*!**********************************!*\
  !*** ./src/app/_models/event.ts ***!
  \**********************************/
/*! exports provided: Event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
var Event = /** @class */ (function () {
    function Event() {
    }
    return Event;
}());



/***/ }),

/***/ "./src/app/_models/index.ts":
/*!**********************************!*\
  !*** ./src/app/_models/index.ts ***!
  \**********************************/
/*! exports provided: Event, User, Config, Patient, Address, Role, Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./src/app/_models/user.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _user__WEBPACK_IMPORTED_MODULE_0__["User"]; });

/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/app/_models/config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return _config__WEBPACK_IMPORTED_MODULE_1__["Config"]; });

/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event */ "./src/app/_models/event.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return _event__WEBPACK_IMPORTED_MODULE_2__["Event"]; });

/* harmony import */ var _patient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patient */ "./src/app/_models/patient.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Patient", function() { return _patient__WEBPACK_IMPORTED_MODULE_3__["Patient"]; });

/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./address */ "./src/app/_models/address.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return _address__WEBPACK_IMPORTED_MODULE_4__["Address"]; });

/* harmony import */ var _roles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./roles */ "./src/app/_models/roles.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return _roles__WEBPACK_IMPORTED_MODULE_5__["Role"]; });

/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact */ "./src/app/_models/contact.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return _contact__WEBPACK_IMPORTED_MODULE_6__["Contact"]; });










/***/ }),

/***/ "./src/app/_models/patient.ts":
/*!************************************!*\
  !*** ./src/app/_models/patient.ts ***!
  \************************************/
/*! exports provided: Patient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Patient", function() { return Patient; });
var Patient = /** @class */ (function () {
    function Patient() {
    }
    return Patient;
}());



/***/ }),

/***/ "./src/app/_models/roles.ts":
/*!**********************************!*\
  !*** ./src/app/_models/roles.ts ***!
  \**********************************/
/*! exports provided: Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
var Role = /** @class */ (function () {
    function Role() {
    }
    return Role;
}());



/***/ }),

/***/ "./src/app/_models/user.ts":
/*!*********************************!*\
  !*** ./src/app/_models/user.ts ***!
  \*********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/_services/alert.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, dimissAfter, keepAfterNavigationChange) {
        var _this = this;
        if (dimissAfter === void 0) { dimissAfter = 0; }
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
        if (dimissAfter > 0) {
            setTimeout(function () { _this.subject.next(); }, dimissAfter);
        }
    };
    AlertService.prototype.error = function (message, dimissAfter, keepAfterNavigationChange) {
        var _this = this;
        if (dimissAfter === void 0) { dimissAfter = 0; }
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
        if (dimissAfter > 0) {
            setTimeout(function () { _this.subject.next(); }, dimissAfter);
        }
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (username, password) {
        return this.http.post("https://clinava.herokuapp.com/api/auth/signin", { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            // login successful if there's a jwt token in the response
            if (response && response.accessToken) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(response));
            }
            return response;
        }));
    };
    AuthenticationService.prototype.signin = function (user) {
        return this.http.post("https://clinava.herokuapp.com/api/auth/signup", user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            alert(response);
            return response;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/_services/config.service.ts":
/*!*********************************************!*\
  !*** ./src/app/_services/config.service.ts ***!
  \*********************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfigService = /** @class */ (function () {
    function ConfigService(http) {
        this.http = http;
    }
    ConfigService.prototype.getConfig = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/configurations");
    };
    ConfigService.prototype.getById = function (id) {
        //return this.http.get(`${environment.apiUrl}/users/` + id);
    };
    ConfigService.prototype.register = function (config) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/configurations", config);
    };
    ConfigService.prototype.update = function (config) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/configurations/" + config.id, config);
    };
    ConfigService.prototype.delete = function (id) {
        //return this.http.delete(`${environment.apiUrl}/users/` + id);
    };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/_services/event.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/event.service.ts ***!
  \********************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventService = /** @class */ (function () {
    function EventService(http) {
        this.http = http;
    }
    EventService.prototype.getAll = function (date) {
        if (date) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/events?startDate=" + date.toISOString());
        }
        else {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/events");
        }
    };
    EventService.prototype.getByTime = function (date, endDate, id) {
        //this should search in a range
        //return new Array().filter(e => e.user.id == id && e.date.getTime() >= date.getTime() && e.date.getTime() < endDate.getTime());
        //
        //return this.http.get<Event[]>(`${environment.apiUrl}/events?startDate=2018-12-11T08:00&endDate=2018-12-11T10:00&userId=11`);
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/events?userId=" + id + '&startDate=' + date.toISOString() + '&endDate=' + endDate.toISOString());
    };
    EventService.prototype.getById = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/events/" + id);
    };
    EventService.prototype.register = function (event) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/events", event).map(function (resp) { return resp; });
    };
    EventService.prototype.update = function (event) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/events/" + event.id, event).map(function (resp) { return resp; });
    };
    EventService.prototype.delete = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/events/" + id).map(function (resp) { return resp; });
    };
    EventService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EventService);
    return EventService;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: AlertService, AuthenticationService, UserService, EventService, ConfigService, PatientService, RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.service */ "./src/app/_services/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]; });

/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/_services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]; });

/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event.service */ "./src/app/_services/event.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return _event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"]; });

/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config.service */ "./src/app/_services/config.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return _config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]; });

/* harmony import */ var _patient_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./patient.service */ "./src/app/_services/patient.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PatientService", function() { return _patient_service__WEBPACK_IMPORTED_MODULE_5__["PatientService"]; });

/* harmony import */ var _roles_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./roles.service */ "./src/app/_services/roles.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return _roles_service__WEBPACK_IMPORTED_MODULE_6__["RoleService"]; });










/***/ }),

/***/ "./src/app/_services/patient.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/patient.service.ts ***!
  \**********************************************/
/*! exports provided: PatientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientService", function() { return PatientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PatientService = /** @class */ (function () {
    function PatientService(http) {
        this.http = http;
    }
    PatientService.prototype.getAll = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/patients");
    };
    PatientService.prototype.getByName = function (name) {
        if (!name || name == "") {
            return;
        }
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/patients?name=" + name); //.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
    };
    PatientService.prototype.getById = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/patients/" + id);
    };
    PatientService.prototype.register = function (patient) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/patients/", patient, { observe: 'response' });
    };
    PatientService.prototype.update = function (patient) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/patients/" + patient.id, patient).map(function (resp) { return resp; });
    };
    PatientService.prototype.delete = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/patients/" + id).map(function (resp) { return resp; });
    };
    PatientService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PatientService);
    return PatientService;
}());



/***/ }),

/***/ "./src/app/_services/roles.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/roles.service.ts ***!
  \********************************************/
/*! exports provided: RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return RoleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoleService = /** @class */ (function () {
    function RoleService(http) {
        this.http = http;
        this.roles = new Array();
    }
    RoleService.prototype.getAll = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/roles");
    };
    RoleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RoleService);
    return RoleService;
}());



/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAll = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users")
            .map(function (res) { return res; });
    };
    UserService.prototype.getAttendants = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users?role=ROLE_ADMIN").map(function (res) { return res; });
        //return this.users.filter(u => u.role == "attendant");
    };
    UserService.prototype.getUsers = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users").map(function (res) { return res; });
        //return this.users.filter(u => u.role == "user");
        //return this.http.get<User[]>(`${environment.apiUrl}/users`);
    };
    UserService.prototype.getById = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users/" + id).map(function (res) { return res; });
        //return this.users.find(u => u.id == id);
        //return this.http.get(`${environment.apiUrl}/users/` + id);
    };
    UserService.prototype.register = function (user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users/", user);
    };
    UserService.prototype.update = function (user) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users", user);
    };
    UserService.prototype.delete = function (id) {
        //this.users = this.users.filter(e => e.id !== id);
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users/" + id);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/admin-module/admin-module-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin-module/admin-module-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AdminModuleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModuleRoutingModule", function() { return AdminModuleRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AdminModuleRoutingModule = /** @class */ (function () {
    function AdminModuleRoutingModule() {
    }
    AdminModuleRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AdminModuleRoutingModule);
    return AdminModuleRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin-module/admin-module.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin-module/admin-module.module.ts ***!
  \*****************************************************/
/*! exports provided: AdminModuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModuleModule", function() { return AdminModuleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_module_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-module-routing.module */ "./src/app/admin-module/admin-module-routing.module.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/user.component */ "./src/app/admin-module/user/user.component.ts");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin-module/admin.component.ts");
/* harmony import */ var _configuration_configuration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./configuration/configuration.component */ "./src/app/admin-module/configuration/configuration.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AdminModuleModule = /** @class */ (function () {
    function AdminModuleModule() {
    }
    AdminModuleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _admin_module_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminModuleRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            declarations: [_user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"], _admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"], _configuration_configuration_component__WEBPACK_IMPORTED_MODULE_5__["ConfigurationComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_3__["RepeatPipe"]],
            providers: [
                _services__WEBPACK_IMPORTED_MODULE_7__["AlertService"],
                _services__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"],
                _services__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            ]
        })
    ], AdminModuleModule);
    return AdminModuleModule;
}());



/***/ }),

/***/ "./src/app/admin-module/admin.component.css":
/*!**************************************************!*\
  !*** ./src/app/admin-module/admin.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-size: .875rem;\r\n  }\r\n  \r\n  .feather {\r\n    width: 16px;\r\n    height: 16px;\r\n    vertical-align: text-bottom;\r\n  }\r\n  \r\n  /*\r\n   * Sidebar\r\n   */\r\n  \r\n  .sidebar {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 100; /* Behind the navbar */\r\n    padding: 48px 0 0; /* Height of navbar */\r\n    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\r\n  }\r\n  \r\n  .sidebar-sticky {\r\n    position: relative;\r\n    top: 0;\r\n    height: calc(100vh - 48px);\r\n    padding-top: .5rem;\r\n    overflow-x: hidden;\r\n    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\r\n  }\r\n  \r\n  @supports ((position: -webkit-sticky) or (position: sticky)) {\r\n    .sidebar-sticky {\r\n      position: -webkit-sticky;\r\n      position: sticky;\r\n    }\r\n  }\r\n  \r\n  .sidebar .nav-link {\r\n    font-weight: 500;\r\n    color: #333;\r\n  }\r\n  \r\n  .sidebar .nav-link .feather {\r\n    margin-right: 4px;\r\n    color: #999;\r\n  }\r\n  \r\n  .sidebar .nav-link.active {\r\n    color: #007bff;\r\n  }\r\n  \r\n  .sidebar .nav-link:hover .feather,\r\n  .sidebar .nav-link.active .feather {\r\n    color: inherit;\r\n  }\r\n  \r\n  .sidebar-heading {\r\n    font-size: .75rem;\r\n    text-transform: uppercase;\r\n  }\r\n  \r\n  /*\r\n   * Content\r\n   */\r\n  \r\n  [role=\"main\"] {\r\n    padding-top: 48px; /* Space for fixed navbar */\r\n  }\r\n  \r\n  /*\r\n   * Navbar\r\n   */\r\n  \r\n  .navbar-brand {\r\n    padding-top: .75rem;\r\n    padding-bottom: .75rem;\r\n    font-size: 1rem;\r\n    background-color: rgba(0, 0, 0, .25);\r\n    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);\r\n  }\r\n  \r\n  .navbar .form-control {\r\n    padding: .75rem 1rem;\r\n    border-width: 0;\r\n    border-radius: 0;\r\n  }\r\n  \r\n  .form-control-dark {\r\n    color: #fff;\r\n    background-color: rgba(255, 255, 255, .1);\r\n    border-color: rgba(255, 255, 255, .1);\r\n  }\r\n  \r\n  .form-control-dark:focus {\r\n    border-color: transparent;\r\n    box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/admin-module/admin.component.html":
/*!***************************************************!*\
  !*** ./src/app/admin-module/admin.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">\r\n  <h1 class=\"h2\">Administração</h1>\r\n  <div class=\"btn-toolbar mb-2 mb-md-0\">\r\n\r\n    <div class=\"btn-group mr-2\">\r\n      <button class=\"btn btn-sm btn-outline-secondary\" routerLink=\"/admin/user\">Usuários</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/admin-module/admin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/admin-module/admin.component.ts ***!
  \*************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = /** @class */ (function () {
    function AdminComponent(userService) {
        this.userService = userService;
    }
    AdminComponent.prototype.ngOnInit = function () {
        //this.loadAllUsers();
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin-module/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin-module/admin.component.css")],
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin-module/configuration/Configuration.component.css":
/*!************************************************************************!*\
  !*** ./src/app/admin-module/configuration/Configuration.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-module/configuration/Configuration.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/admin-module/configuration/Configuration.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Configurações</h4>\r\n<br>\r\n<div id=\"new\">\r\n  <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\r\n      <input type=\"number\" formControlName=\"id\" class=\"d-none\"/>\r\n    <div class=\"form-group\">\r\n      <label for=\"hourInit\">Abertura de Horário de Atendimento</label>\r\n      <input type=\"number\" formControlName=\"hourInit\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.hourInit.errors }\" />\r\n      <div *ngIf=\"submitted && f.hourInit.errors\" class=\"invalid-feedback\">\r\n        <div *ngIf=\"f.hourInit.errors.required\">Obrigatório</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"hourEnd\">Fechamento de Horário de Atendimento</label>\r\n      <input type=\"number\" formControlName=\"hourEnd\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.hourEnd.errors }\" />\r\n      <div *ngIf=\"submitted && f.hourEnd.errors\" class=\"invalid-feedback\">\r\n        <div *ngIf=\"f.hourEnd.errors.required\">Obrigatório</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"interval\">Intervalo de Atendimentos (Minutos)</label>\r\n      <input type=\"number\" formControlName=\"interval\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.interval.errors }\" />\r\n      <div *ngIf=\"submitted && f.interval.errors\" class=\"invalid-feedback\">\r\n        <div *ngIf=\"f.interval.errors.required\">Obrigatório</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"workingDays\">Dias de trabalhados (Selecione dias diferentes usando a tecla CTRL)</label>\r\n      <select multiple class=\"form-control\" id=\"workingDays\" size=\"7\" formControlName=\"workingDays\">\r\n        <option value=\"Domingo\">Domingo</option>\r\n        <option value=\"Segunda\">Segunda</option>\r\n        <option value=\"Terça\">Terça</option>\r\n        <option value=\"Quarta\">Quarta</option>\r\n        <option value=\"Quinta\">Quinta</option>\r\n        <option value=\"Sexta\">Sexta</option>\r\n        <option value=\"Sabado\">Sabado</option>\r\n      </select>\r\n      <div *ngIf=\"submitted && f.workingDays.errors\" class=\"invalid-feedback\">\r\n        <div *ngIf=\"f.workingDays.errors.required\">Obrigatório</div>\r\n      </div>\r\n    </div>\r\n    \r\n    <div class=\"form-group\">\r\n      <button [disabled]=\"loading\" class=\"btn btn-primary\">Salvar</button>\r\n      <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/admin-module/configuration/configuration.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/admin-module/configuration/configuration.component.ts ***!
  \***********************************************************************/
/*! exports provided: ConfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationComponent", function() { return ConfigurationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfigurationComponent = /** @class */ (function () {
    function ConfigurationComponent(formBuilder, alertService, configService) {
        this.formBuilder = formBuilder;
        this.alertService = alertService;
        this.configService = configService;
        this.loading = false;
        this.submitted = false;
    }
    ConfigurationComponent.prototype.cleanForm = function () {
        var _this = this;
        var config;
        this.configService.getConfig().subscribe(function (resp) {
            config = resp[0];
            _this.registerForm = _this.formBuilder.group({
                id: [config.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                hourInit: [config.hourInit, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                hourEnd: [config.hourEnd, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                interval: [config.interval, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                workingDays: [config.workingDays, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
        });
    };
    Object.defineProperty(ConfigurationComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    ConfigurationComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            id: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            hourInit: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            hourEnd: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            interval: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            workingDays: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.cleanForm();
    };
    ConfigurationComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        var configuration = this.registerForm.value;
        this.configService.update(configuration).subscribe(function (resp) {
            _this.cleanForm();
            _this.alertService.success("Configurações salvas com sucesso.", 5000);
            _this.submitted = false;
        });
    };
    ConfigurationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-Configuration',
            template: __webpack_require__(/*! ./Configuration.component.html */ "./src/app/admin-module/configuration/Configuration.component.html"),
            styles: [__webpack_require__(/*! ./Configuration.component.css */ "./src/app/admin-module/configuration/Configuration.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services__WEBPACK_IMPORTED_MODULE_1__["AlertService"],
            _services__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]])
    ], ConfigurationComponent);
    return ConfigurationComponent;
}());



/***/ }),

/***/ "./src/app/admin-module/user/user.component.css":
/*!******************************************************!*\
  !*** ./src/app/admin-module/user/user.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-module/user/user.component.html":
/*!*******************************************************!*\
  !*** ./src/app/admin-module/user/user.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Usuários</h4>\r\n<button class=\"btn btn-primary btn-sm float-right mb-4\" (click)=\"toggle()\">{{title}}</button>\r\n<br>\r\n<div id=\"new\" [@popOverState]=\"stateList\">\r\n  <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"form-group\">\r\n      <label for=\"name\">Nome Completo</label>\r\n      <input type=\"text\" formControlName=\"name\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" />\r\n      <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\r\n        <div *ngIf=\"f.name.errors.required\">Obrigatório</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"username\">Usuário</label>\r\n      <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\r\n      <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n        <div *ngIf=\"f.username.errors.required\">Obrigatório</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"email\">Email</label>\r\n      <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\r\n      <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n        <div *ngIf=\"f.email.errors.required\">Obrigatório</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"role\">Acesso</label>\r\n      <select formControlName=\"role\" class=\"form-control\"  [ngClass]=\"{ 'is-invalid': submitted && f.role.errors }\">\r\n        <option *ngFor=\"let role of roles\" [value]=\"role.id\">{{role.name}}</option>\r\n      </select>\r\n      <div *ngIf=\"submitted && f.role.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"f.role.errors.required\">Obrigatório</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"password\">Password</label>\r\n      <input type=\"password\" formControlName=\"password\" [readonly]=\"editing\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\r\n      <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n        <div *ngIf=\"f.password.errors.required\">Obrigatório</div>\r\n        <div *ngIf=\"f.password.errors.minlength\">A senha tem que ter no mínimo 6 caracteres</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <button [disabled]=\"loading\" class=\"btn btn-primary\">Salvar</button>\r\n      <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<div id=\"list\">\r\n  <table class=\"table table-striped table-sm\">\r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\">#</th>\r\n        <th scope=\"col\">Nome</th>\r\n        <th scope=\"col\">Email</th>\r\n        <th scope=\"col\">Acesso</th>\r\n        <th scope=\"col\"></th>\r\n        <th scope=\"col\"></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let user of users\">\r\n        <th scope=\"row\">{{ user.id }}</th>\r\n        <td>{{ user.name }}</td>\r\n        <td>{{ user.email }}</td>\r\n        <td>{{ user.roles | role }}</td>\r\n        <td>\r\n          <a class=\"btn btn-info btn-sm\" (click)=\"edit(user.id)\">\r\n            <i class=\"far fa-edit\"></i></a></td>\r\n        <td>\r\n          <a class=\"btn btn-danger btn-sm\" (click)=\"delete(user.id)\">\r\n            <i class=\"far fa-trash-alt\"></i></a></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin-module/user/user.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin-module/user/user.component.ts ***!
  \*****************************************************/
/*! exports provided: UserComponent, RepeatPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepeatPipe", function() { return RepeatPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_models */ "./src/app/_models/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserComponent = /** @class */ (function () {
    function UserComponent(formBuilder, alertService, userService, rolesService) {
        this.formBuilder = formBuilder;
        this.alertService = alertService;
        this.userService = userService;
        this.rolesService = rolesService;
        this.loading = false;
        this.submitted = false;
        this.show = false;
        this.editing = false;
    }
    Object.defineProperty(UserComponent.prototype, "stateList", {
        get: function () {
            return this.show ? 'block' : 'none';
        },
        enumerable: true,
        configurable: true
    });
    UserComponent.prototype.cleanForm = function () {
        this.registerForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['']
        });
    };
    UserComponent.prototype.toggle = function () {
        this.submitted = false;
        this.show = !this.show;
        if (this.editing && !this.show) {
            this.cleanForm();
        }
        if (this.editing) {
            this.editing = false;
        }
        this.title = this.show ? 'Cancelar' : 'Cadastrar';
    };
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (res) {
            _this.users = res;
        });
        this.rolesService.getAll().subscribe(function (res) {
            _this.roles = res;
        });
        this.registerForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['']
        });
        this.title = this.show ? 'Cancelar' : 'Cadastrar';
    };
    Object.defineProperty(UserComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    UserComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        var user = new _models__WEBPACK_IMPORTED_MODULE_1__["User"]();
        var u = this.registerForm.value;
        user.id = u.id;
        user.address = null;
        user.contacts = new Array();
        user.email = u.email;
        user.name = u.name;
        user.password = u.password;
        user.roles = new Array();
        var role = new _models__WEBPACK_IMPORTED_MODULE_1__["Role"]();
        role.id = this.registerForm.value.role;
        user.roles.push(role);
        user.username = u.username;
        if (this.editing) {
            user.id = this.currentUser.id;
            this.userService.update(user).subscribe(function (resp) {
                _this.userService.getAll().subscribe(function (res) {
                    _this.users = res;
                    _this.toggle();
                    _this.cleanForm();
                    _this.alertService.success("Salvo com sucesso.", 5000);
                });
            });
            this.editing = false;
        }
        else {
            this.userService.register(user).subscribe(function (resp) {
                _this.userService.getAll().subscribe(function (res) {
                    _this.users = res;
                    _this.toggle();
                    _this.cleanForm();
                    _this.alertService.success("Salvo com sucesso.", 5000);
                });
            });
            ;
        }
    };
    UserComponent.prototype.edit = function (id) {
        var _this = this;
        var user;
        this.userService.getById(id).subscribe(function (res) {
            user = res;
            _this.registerForm = _this.formBuilder.group({
                name: [user.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                username: [user.username, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                email: [user.email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                role: [user.roles[0].id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                password: [user.password]
            });
            _this.currentUser = user;
            _this.toggle();
            _this.editing = true;
        });
    };
    UserComponent.prototype.delete = function (id) {
        var _this = this;
        this.userService.delete(id).subscribe(function (resp) {
            _this.userService.getAll().subscribe(function (res) {
                _this.users = res;
            });
        });
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/admin-module/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/admin-module/user/user.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('popOverState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('none', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        display: 'none',
                        opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('block', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        display: 'block',
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('block => none', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('300ms ease-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('none => block', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('300ms ease-in'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services__WEBPACK_IMPORTED_MODULE_2__["AlertService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["RoleService"]])
    ], UserComponent);
    return UserComponent;
}());


var RepeatPipe = /** @class */ (function () {
    function RepeatPipe() {
    }
    RepeatPipe.prototype.transform = function (value) {
        if (value[0].name == "ROLE_ADMIN") {
            return "Atendente";
        }
        return "Usuário";
    };
    RepeatPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'role' })
    ], RepeatPipe);
    return RepeatPipe;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>"

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
    }
    AppComponent.prototype.ngOnInit = function () {
        if (location.protocol != "https" && location.hostname != "localhost") {
            location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_directives */ "./src/app/_directives/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_guards */ "./src/app/_guards/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register */ "./src/app/register/index.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _home_home_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _admin_module_admin_module_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin-module/admin-module.module */ "./src/app/admin-module/admin-module.module.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














 //<-- import
 //<-- import
 //<-- import

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_6__["routing"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_15__["HomeModule"], _admin_module_admin_module_module__WEBPACK_IMPORTED_MODULE_16__["AdminModuleModule"],
                _home_home_routing_module__WEBPACK_IMPORTED_MODULE_14__["HomeRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_17__["NgxMaskModule"].forRoot()
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _directives__WEBPACK_IMPORTED_MODULE_7__["AlertComponent"],
                _login__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _register__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"], _index_index_component__WEBPACK_IMPORTED_MODULE_13__["IndexComponent"]
            ],
            providers: [
                _guards__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"],
                _services__WEBPACK_IMPORTED_MODULE_10__["AlertService"],
                _services__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"],
                _services__WEBPACK_IMPORTED_MODULE_10__["UserService"],
                _services__WEBPACK_IMPORTED_MODULE_10__["EventService"],
                _services__WEBPACK_IMPORTED_MODULE_10__["ConfigService"], _services__WEBPACK_IMPORTED_MODULE_10__["PatientService"], _services__WEBPACK_IMPORTED_MODULE_10__["RoleService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_9__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_9__["ErrorInterceptor"], multi: true },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register */ "./src/app/register/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_guards */ "./src/app/_guards/index.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_consult_consult_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/consult/consult.component */ "./src/app/home/consult/consult.component.ts");
/* harmony import */ var _home_agenda_agenda_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/agenda/agenda.component */ "./src/app/home/agenda/agenda.component.ts");
/* harmony import */ var _home_patient_patient_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/patient/patient.component */ "./src/app/home/patient/patient.component.ts");
/* harmony import */ var _admin_module_user_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin-module/user/user.component */ "./src/app/admin-module/user/user.component.ts");
/* harmony import */ var _admin_module_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin-module/configuration/configuration.component */ "./src/app/admin-module/configuration/configuration.component.ts");
/* harmony import */ var _admin_module_admin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin-module/admin.component */ "./src/app/admin-module/admin.component.ts");












var appRoutes = [
    {
        path: 'home', component: _index_index_component__WEBPACK_IMPORTED_MODULE_1__["IndexComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [
            { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                children: [
                    { path: '', component: _home_agenda_agenda_component__WEBPACK_IMPORTED_MODULE_7__["AgendaComponent"] },
                    { path: 'agenda', component: _home_agenda_agenda_component__WEBPACK_IMPORTED_MODULE_7__["AgendaComponent"] },
                    { path: 'agenda/:id', component: _home_agenda_agenda_component__WEBPACK_IMPORTED_MODULE_7__["AgendaComponent"] },
                    { path: 'consult', component: _home_consult_consult_component__WEBPACK_IMPORTED_MODULE_6__["ConsultComponent"] },
                    { path: 'patient', component: _home_patient_patient_component__WEBPACK_IMPORTED_MODULE_8__["PatientComponent"] }
                ] }
        ]
    }, {
        path: 'admin', component: _index_index_component__WEBPACK_IMPORTED_MODULE_1__["IndexComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [
            { path: '', component: _admin_module_admin_component__WEBPACK_IMPORTED_MODULE_11__["AdminComponent"],
                children: [
                    { path: 'user', component: _admin_module_user_user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"] },
                    { path: 'configuration', component: _admin_module_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_10__["ConfigurationComponent"] }
                ] }
        ]
    },
    { path: 'login', component: _login__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _register__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/home/agenda/agenda.component.css":
/*!**************************************************!*\
  !*** ./src/app/home/agenda/agenda.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/agenda/agenda.component.html":
/*!***************************************************!*\
  !*** ./src/app/home/agenda/agenda.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>{{docName}}</h4>\r\n<h6 *ngIf=\"docName != 'Selecione um atendente'\">{{initDay}}-{{endDay}} {{month}}</h6>\r\n<nav aria-label=\"Page navigation example\">\r\n    <ul class=\"pagination justify-content-center\">\r\n        <li class=\"page-item\">\r\n            <a class=\"page-link\" (click)=\"sub()\">Anterior</a>\r\n        </li>\r\n        <li class=\"page-item\">\r\n            <a class=\"page-link\" (click)=\"reset()\">Hoje</a>\r\n        </li>\r\n        <li class=\"page-item\">\r\n            <a class=\"page-link\" (click)=\"add()\">Próxima</a>\r\n        </li>\r\n    </ul>\r\n</nav>\r\n\r\n<div class=\"container\">\r\n    <div class=\"row no-gutters\">\r\n        <div *ngFor=\"let day of days\" class=\"col mr-1\">\r\n            <ul class=\"list-group\">\r\n                <li class=\"list-group-item active d-flex justify-content-between align-items-center\">\r\n                    {{day.header}}\r\n                </li>\r\n                <!-- <li *ngFor=\"let consult of day.events\" [ngClass]=\"{'list-group-item-success': consult.user == null, 'list-group-item-danger': consult.user != null}\"\r\n                    class=\"list-group-item  d-flex justify-content-between align-items-center\">\r\n                    <span class=\"badge badge-pill\">{{consult.date | date: \"HH:mm\"}}</span>\r\n                    <span *ngIf=\"consult.user != null\">{{consult.user.name}}</span>\r\n                    <span *ngIf=\"consult.user == null\">Vago</span>\r\n                </li> -->\r\n                <a *ngFor=\"let consult of day.events\" (click)=\"show(consult)\" [ngClass]=\"{'list-group-item-success': consult.user == null, 'list-group-item-danger': consult.user != null}\"\r\n                    class=\"list-group-item list-group-item-action flex-column align-items-start\">\r\n                    <div class=\"d-flex w-100 justify-content-between\">\r\n                        <span class=\"badge badge-pill\">{{consult.date | date: \"HH:mm\"}}</span>\r\n                        <h6 class=\"mb-1\" *ngIf=\"consult.user == null\">Vago</h6>\r\n                        <h6 class=\"mb-1\" *ngIf=\"consult.user != null\">Consulta</h6>\r\n                    </div>\r\n                    <p class=\"mb-1\" *ngIf=\"consult.patient != null\">{{consult.patient.name}}</p>\r\n                    <p class=\"mb-1\" *ngIf=\"consult.patient == null\">Horário vago</p>\r\n                </a>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<app-event-register [date]=\"eventDate\" [user]=\"id\" [visible]=\"visible\" (close)=\"onClose()\"></app-event-register>"

/***/ }),

/***/ "./src/app/home/agenda/agenda.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/agenda/agenda.component.ts ***!
  \*************************************************/
/*! exports provided: AgendaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendaComponent", function() { return AgendaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_models/event */ "./src/app/_models/event.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AgendaComponent = /** @class */ (function () {
    function AgendaComponent(userService, configService, eventService, route) {
        var _this = this;
        this.userService = userService;
        this.configService = configService;
        this.eventService = eventService;
        this.route = route;
        this.monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
            "Julho", "Agosto", "Setembro", "Outrubro", "Novembro", "Dezembro"];
        this.days = [];
        this.eventDate = new Date();
        this.visible = false;
        this.docName = "Selecione um atendente";
        this.route.params.subscribe(function (params) {
            _this.id = params["id"];
            _this.ngOnInit();
            // your code continues here
        });
        if (!this.id) {
            var users_1;
            this.userService.getAttendants().subscribe(function (resp) {
                users_1 = resp;
                _this.attendants = users_1;
                _this.id = users_1.length > 0 ? users_1[0].id : null;
            });
        }
        route.params.subscribe(function (val) {
        });
    }
    AgendaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.weekIndex = 0;
        this.configService.getConfig().subscribe(function (resp) {
            _this.config = resp[0];
            _this.initDates("ngOnInit");
        });
    };
    AgendaComponent.prototype.initDates = function (source) {
        var _this = this;
        if (!this.id) {
            return;
        }
        this.userService.getById(this.id).subscribe(function (u) { return _this.docName = "Dr. " + u.name; });
        this.days = new Array();
        this.today = new Date();
        var weekInMilliseconds = 7 * 24 * 60 * 60 * 1000 * this.weekIndex;
        this.today.setTime(this.today.getTime() + weekInMilliseconds);
        var day = this.today.getDay() || 7; // Get current day number, converting Sun. to 7
        if (day !== 1) {
            this.today.setHours(-24 * (day - 1)); // Set the hours to day number minus 1
        }
        this.initDay = this.today.getDate();
        this.endDay = this.today.getDate() + this.config.workingDays.length - 1;
        this.month = this.monthNames[this.today.getMonth()];
        var spots = (60 / this.config.interval) * (this.config.hourEnd - this.config.hourInit);
        if (!this.id) {
            return;
        }
        var endDate = new Date(this.today.getTime());
        endDate.setDate(this.endDay);
        endDate.setHours(this.config.hourEnd);
        endDate.setMinutes(this.config.interval);
        this.eventService.getByTime(this.today, endDate, this.id).subscribe(function (resp) {
            _this.days = new Array();
            var _loop_1 = function (d) {
                var day_1 = new Day();
                day_1.events = new Array();
                day_1.header = _this.today.getDate() + d + "/" + (_this.today.getMonth() + 1) + " - " + _this.config.workingDays[d];
                var events = resp;
                var _loop_2 = function (index) {
                    var event_1 = new _models_event__WEBPACK_IMPORTED_MODULE_1__["Event"]();
                    event_1.date = new Date(_this.today);
                    event_1.date.setFullYear(_this.today.getFullYear());
                    event_1.date.setMonth(_this.today.getMonth());
                    event_1.date.setDate(_this.today.getDate() + d);
                    event_1.date.setHours(_this.config.hourInit);
                    event_1.date.setMinutes(0);
                    event_1.date.setSeconds(0);
                    event_1.date.setMilliseconds(0);
                    event_1.date.setTime(event_1.date.getTime() + _this.config.interval * index * 60000);
                    var endDate_1 = new Date(event_1.date.getTime() + _this.config.interval * 60000);
                    var e = events.filter(function (e) { return new Date(e.date).getTime() >= event_1.date.getTime() && new Date(e.date).getTime() < endDate_1.getTime(); });
                    ;
                    if (e.length != 0) {
                        e.forEach(function (element) {
                            event_1 = element;
                            day_1.events.push(event_1);
                        });
                        return "continue";
                    }
                    day_1.events.push(event_1);
                };
                for (var index = 0; index <= spots; index++) {
                    _loop_2(index);
                }
                _this.days.push(day_1);
            };
            for (var d = 0; d < _this.config.workingDays.length; d++) {
                _loop_1(d);
            }
        });
    };
    AgendaComponent.prototype.add = function () {
        this.weekIndex = this.weekIndex + 1;
        this.initDates("add");
    };
    AgendaComponent.prototype.reset = function () {
        this.weekIndex = 0;
        this.initDates("reset");
    };
    AgendaComponent.prototype.sub = function () {
        this.weekIndex = this.weekIndex - 1;
        this.initDates("sub");
    };
    AgendaComponent.prototype.onClose = function () {
        this.visible = false;
        this.initDates("onClose");
    };
    AgendaComponent.prototype.show = function (event) {
        if (!event.id) {
            this.eventDate = event.date;
            this.visible = true;
        }
    };
    AgendaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-agenda',
            template: __webpack_require__(/*! ./agenda.component.html */ "./src/app/home/agenda/agenda.component.html"),
            styles: [__webpack_require__(/*! ./agenda.component.css */ "./src/app/home/agenda/agenda.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], _services__WEBPACK_IMPORTED_MODULE_2__["EventService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AgendaComponent);
    return AgendaComponent;
}());

var Day = /** @class */ (function () {
    function Day() {
    }
    return Day;
}());


/***/ }),

/***/ "./src/app/home/consult/consult.component.css":
/*!****************************************************!*\
  !*** ./src/app/home/consult/consult.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/consult/consult.component.html":
/*!*****************************************************!*\
  !*** ./src/app/home/consult/consult.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Consulta</h4>\r\n<button class=\"btn btn-primary btn-sm float-right mb-4\" (click)=\"toggle()\">{{title}}</button>\r\n<br>\r\n<div id=\"new\" [@popOverState]=\"stateList\">\r\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"date\">Data</label>\r\n                <input type=\"date\" formControlName=\"date\" class=\"form-control\" [ngModel]=\"date\" [ngClass]=\"{ 'is-invalid': submitted && f.date.errors }\" />\r\n                <div *ngIf=\"submitted && f.date.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.date.errors.required\">Obrigatório</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"time\">Hora</label>\r\n                <div class=\"input-group mb-2\">\r\n                    <div class=\"input-group-prepend\">\r\n                        <button class=\"input-\r\n                        group-text\" (click)=\"subMinutes()\">-</button>\r\n                    </div>\r\n                    <input type=\"time\" formControlName=\"time\" [ngModel]=\"time\" [ngClass]=\"{ 'is-invalid': submitted && f.time.errors }\"\r\n                        class=\"form-control\" id=\"time\">\r\n                    <div class=\"input-group-prepend\">\r\n                        <button class=\"input-group-text\" (click)=\"addMinutes()\">+</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"user\">Patiente</label>\r\n            <select formControlName=\"patient\" class=\"form-control\"  [ngClass]=\"{ 'is-invalid': submitted && f.patient.errors }\">\r\n                <option [value]=\"patient.id\" *ngFor=\"let patient of patients\">{{patient.name}}</option>\r\n            </select>\r\n            <div *ngIf=\"submitted && f.patient.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.patient.errors.required\">Obrigatório</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"duration\">Duração</label>\r\n            <input type=\"number\" formControlName=\"duration\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.duration.errors }\" />\r\n            <div *ngIf=\"submitted && f.duration.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.duration.errors.required\">Duração tem que ser preenchida</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"obs\">Observação</label>\r\n            <input type=\"text\" formControlName=\"obs\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.obs.errors }\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"user\">Atendente</label>\r\n            <select formControlName=\"user\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.user.errors }\">\r\n                <option selected>Selecionar</option>\r\n                <option [value]=\"user.id\" *ngFor=\"let user of attendants\">{{user.name}}</option>\r\n            </select>\r\n            <div *ngIf=\"submitted && f.user.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.user.errors.required\">Obrigatório</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button [disabled]=\"loading\" class=\"btn btn-primary  btn-sm\">Salvar</button>\r\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n        </div>\r\n    </form>\r\n</div>\r\n<div id=\"list\">\r\n    <table class=\"table table-striped table-sm\">\r\n        <thead>\r\n            <tr>\r\n                <th scope=\"col\">Data</th>\r\n                <th scope=\"col\">Patiente</th>\r\n                <th scope=\"col\">Observação</th>\r\n                <th scope=\"col\">Atendente</th>\r\n                <th scope=\"col\"></th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let event of events\">\r\n                <td>{{ event.date | date:'dd/MM/yy - HH:mm' }}</td>\r\n                <td>{{ event.patient.name }}</td>\r\n                <td>{{ event.obs }}</td>\r\n                <td>{{ event.user.name }}</td>\r\n                <td>\r\n                    <a class=\"btn btn-info btn-sm\" (click)=\"edit(event.id)\">\r\n                        <i class=\"far fa-edit\"></i></a>\r\n                    <a class=\"btn btn-danger btn-sm ml-1\" (click)=\"delete(event.id)\">\r\n                        <i class=\"far fa-trash-alt\"></i></a></td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "./src/app/home/consult/consult.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/consult/consult.component.ts ***!
  \***************************************************/
/*! exports provided: ConsultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultComponent", function() { return ConsultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConsultComponent = /** @class */ (function () {
    function ConsultComponent(formBuilder, userService, configService, alertService, eventService, patientService) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.configService = configService;
        this.alertService = alertService;
        this.eventService = eventService;
        this.patientService = patientService;
        this.loading = false;
        this.submitted = false;
        this.show = false;
        this.editing = false;
    }
    ConsultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.registerForm = this.formBuilder.group({
            user: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            patient: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            duration: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            obs: [],
            time: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.configService.getConfig().subscribe(function (resp) {
            _this.config = resp[0];
            _this.userService.getAttendants().subscribe(function (resp) { return _this.attendants = resp; });
            _this.patientService.getAll().subscribe(function (resp) { return _this.patients = resp; });
            _this.getAll();
            _this.indexDate = new Date();
            if ((_this.indexDate.getHours()) < _this.config.hourInit) {
                _this.indexDate.setTime(_this.indexDate.getTime() + (60 * 60 * 1000 * (_this.config.hourInit - _this.indexDate.getHours())));
                _this.indexDate.setMinutes(0);
            }
            else if ((_this.indexDate.getHours() + 1) > _this.config.hourEnd) {
                _this.indexDate.setTime(_this.indexDate.getTime() + (60 * 60 * 1000 * (24 - _this.indexDate.getHours())));
                _this.indexDate.setTime(_this.indexDate.getTime() + (60 * 60 * 1000 * (_this.config.hourInit - _this.indexDate.getHours())));
                _this.indexDate.setMinutes(0);
            }
            else if (_this.indexDate.getMinutes() > _this.config.interval) {
                _this.indexDate.setTime(60 * 60 * 1000 + _this.indexDate.getTime());
                _this.indexDate.setMinutes(0);
            }
            else {
                _this.indexDate.setMinutes(30);
            }
            _this.resetDate();
            _this.cleanForm();
            _this.title = _this.show ? 'Cancelar' : 'Cadastrar';
        });
    };
    ConsultComponent.prototype.getAll = function () {
        var _this = this;
        var dateNow = new Date();
        dateNow.setHours(0);
        dateNow.setMinutes(0);
        this.eventService.getAll(dateNow).subscribe(function (resp) { return _this.events = resp; });
    };
    Object.defineProperty(ConsultComponent.prototype, "stateList", {
        get: function () {
            return this.show ? 'block' : 'none';
        },
        enumerable: true,
        configurable: true
    });
    ConsultComponent.prototype.toggle = function () {
        var _this = this;
        this.submitted = false;
        this.show = !this.show;
        if (this.editing && !this.show) {
            this.cleanForm();
        }
        this.title = this.show ? 'Cancelar' : 'Cadastrar';
        this.userService.getAttendants().subscribe(function (resp) { return _this.attendants = resp; });
    };
    ConsultComponent.prototype.cleanForm = function () {
        this.registerForm = this.formBuilder.group({
            user: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            patient: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            duration: [this.config.interval, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            date: [this.date, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            obs: [],
            time: [this.time, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    ConsultComponent.prototype.edit = function (id) {
        var _this = this;
        this.eventService.getById(id).subscribe(function (resp) {
            var event = resp;
            console.log(event);
            var sHour = new Date(event.date).getHours().toLocaleString();
            var sMinute = new Date(event.date).getMinutes().toLocaleString();
            var time = (sHour.length == 1 ? ("0" + sHour) : sHour) + ":" + (sMinute.length == 1 ? ("0" + sMinute) : sMinute);
            _this.registerForm = _this.formBuilder.group({
                user: [event.user.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                patient: [event.patient.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                duration: [event.duration, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                date: [event.date.toString().split('T')[0], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                obs: [event.obs],
                time: [time, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
            _this.editing = true;
            _this.currentEvent = id;
            _this.toggle();
        });
    };
    ConsultComponent.prototype.delete = function (id) {
        var _this = this;
        this.eventService.delete(id).subscribe(function (resp) {
            _this.getAll();
        });
        ;
    };
    ConsultComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        var event = this.registerForm.value;
        event.date = new Date(this.registerForm.value.date);
        event.date.setHours(this.registerForm.value.time.split(':')[0]);
        event.date.setMinutes(this.registerForm.value.time.split(':')[1]);
        this.userService.getById(this.registerForm.value.user).subscribe(function (user) {
            event.user = user;
            _this.patientService.getById(_this.registerForm.value.patient).subscribe(function (resp) {
                event.patient = resp;
                if (_this.editing) {
                    event.id = _this.currentEvent;
                    _this.eventService.update(event).subscribe(function (resp) {
                        _this.getAll();
                    });
                    _this.editing = false;
                }
                else {
                    _this.eventService.register(event).subscribe(function (resp) {
                        _this.getAll();
                    });
                }
                _this.toggle();
                _this.cleanForm();
                _this.alertService.success("Salvo com sucesso.", 5000);
                _this.indexDate = new Date();
            });
        });
    };
    Object.defineProperty(ConsultComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    ConsultComponent.prototype.addMinutes = function () {
        this.indexDate.setTime(this.indexDate.getTime() + (this.config.interval * 60 * 1000));
        this.resetDate();
    };
    ConsultComponent.prototype.subMinutes = function () {
        this.indexDate.setTime(this.indexDate.getTime() - (this.config.interval * 60 * 1000));
        this.resetDate();
    };
    ConsultComponent.prototype.resetDate = function () {
        if ((this.indexDate.getHours()) < this.config.hourInit) {
            this.indexDate.setTime(this.indexDate.getTime() - (60 * 60 * 1000 * ((24 - this.config.hourEnd) + this.config.hourInit)));
            this.indexDate.setMinutes(this.config.interval);
        }
        if ((this.indexDate.getHours() + 1) > this.config.hourEnd) {
            this.indexDate.setTime(this.indexDate.getTime() + (60 * 60 * 1000 * ((24 - this.config.hourEnd) + this.config.hourInit)));
            this.indexDate.setMinutes(0);
        }
        var sHour = this.indexDate.getHours().toLocaleString();
        var sMinute = this.indexDate.getMinutes().toLocaleString();
        this.time = (sHour.length == 1 ? ("0" + sHour) : sHour) + ":" + (sMinute.length == 1 ? ("0" + sMinute) : sMinute);
        this.date = this.indexDate.toISOString().split('T')[0];
    };
    ConsultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consult',
            template: __webpack_require__(/*! ./consult.component.html */ "./src/app/home/consult/consult.component.html"),
            styles: [__webpack_require__(/*! ./consult.component.css */ "./src/app/home/consult/consult.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('popOverState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('none', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        display: 'none',
                        opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('block', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        display: 'block',
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('block => none', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('300ms ease-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('none => block', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('300ms ease-in'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services__WEBPACK_IMPORTED_MODULE_1__["UserService"], _services__WEBPACK_IMPORTED_MODULE_1__["ConfigService"], _services__WEBPACK_IMPORTED_MODULE_1__["AlertService"],
            _services__WEBPACK_IMPORTED_MODULE_1__["EventService"], _services__WEBPACK_IMPORTED_MODULE_1__["PatientService"]])
    ], ConsultComponent);
    return ConsultComponent;
}());



/***/ }),

/***/ "./src/app/home/event-register/event-register.component.css":
/*!******************************************************************!*\
  !*** ./src/app/home/event-register/event-register.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-custom {\r\n/* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 10; /* Sit on top */\r\n    padding-top: 15%; /* Location of the box */\r\n    padding-left: 45%;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n\r\n.auto-complete {\r\n    position: absolute; \r\n    width: 91%;\r\n}"

/***/ }),

/***/ "./src/app/home/event-register/event-register.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/home/event-register/event-register.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-custom\" [hidden]=\"!visible\" (click)=\"hide($event)\" id=\"customModal\">\r\n<div class=\"card w-50\">\r\n  <h5 class=\"card-header\">Consulta Rápida</h5>\r\n  <div class=\"card-body\">\r\n    <div class=\"form-group\" id=\"patientDiv\">\r\n      <label for=\"patient\">Patiente</label>\r\n      <input type=\"text\" (keyup)=\"onKey($event)\" [(ngModel)]=\"patientName\" id=\"patient\" name=\"patient\" class=\"form-control\"\r\n        autocomplete=\"off\" />\r\n      <div class=\"w-100\">\r\n        <div class=\"list-group auto-complete\" *ngIf=\"!selected\">\r\n          <a *ngFor=\"let user of patients\" class=\"list-group-item list-group-item-action\" (click)=\"select(user)\">{{user.name}}\r\n            <small class=\"float-right\">{{user.birthday | date:'dd/MM/yyyy'}}</small></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"phone\">Telefone</label>\r\n      <input type=\"text\" id=\"phone\" name=\"phone\" mask=\"(00)0 0000-0000\" [(ngModel)]=\"patientPhone\" class=\"form-control\" autocomplete=\"off\" />\r\n    </div>\r\n  </div>\r\n  <div class=\"card-footer text-right\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" id=\"close\" (click)=\"hide($event)\">Cancelar</button>\r\n    <button type=\"button\" class=\"btn btn-primary ml-3\" (click)=\"onSubmit()\">Marcar</button>\r\n  </div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/event-register/event-register.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home/event-register/event-register.component.ts ***!
  \*****************************************************************/
/*! exports provided: EventRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventRegisterComponent", function() { return EventRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services */ "./src/app/_services/index.ts");
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_models */ "./src/app/_models/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventRegisterComponent = /** @class */ (function () {
    function EventRegisterComponent(patientService, configService, eventService, userService, alertService) {
        this.patientService = patientService;
        this.configService = configService;
        this.eventService = eventService;
        this.userService = userService;
        this.alertService = alertService;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.visible = false;
        this.patients = [];
        this.patient = new src_app_models__WEBPACK_IMPORTED_MODULE_2__["Patient"]();
        this.selected = false;
        this.patientName = "";
        this.patientPhone = "";
    }
    EventRegisterComponent.prototype.ngOnInit = function () {
    };
    EventRegisterComponent.prototype.hide = function (event) {
        var elementId = event.target.id;
        if (elementId == "customModal" || elementId == "close") {
            this.visible = false;
            this.closeModal();
        }
    };
    EventRegisterComponent.prototype.closeModal = function () {
        this.close.emit();
    };
    EventRegisterComponent.prototype.onKey = function (event) {
        var _this = this;
        this.selected = false;
        this.patient = new src_app_models__WEBPACK_IMPORTED_MODULE_2__["Patient"]();
        if (this.patientName) {
            this.patientService.getByName(event.target.value).subscribe(function (resp) { return _this.patients = resp; });
        }
        else {
            this.patients = new Array();
            this.patient = new src_app_models__WEBPACK_IMPORTED_MODULE_2__["Patient"]();
        }
    };
    EventRegisterComponent.prototype.select = function (patient) {
        this.patientName = "";
        this.selected = true;
        this.patient = patient;
        this.patientName = patient.name;
        this.patientPhone = patient.phone;
    };
    EventRegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.selected) {
            this.configService.getConfig().subscribe(function (resp) {
                var config = resp[0];
                var event = new src_app_models__WEBPACK_IMPORTED_MODULE_2__["Event"]();
                event.patient = _this.patient;
                event.date = _this.date;
                event.duration = config.interval;
                _this.userService.getById(_this.user).subscribe(function (user) {
                    event.user = user;
                    _this.eventService.register(event).subscribe(function (resp) {
                        _this.closeAndClean();
                        _this.alertService.success("Salvo com sucesso.", 5000);
                    });
                });
            });
        }
        else if ((typeof this.patientName != 'undefined' && this.patientName) && (typeof this.patientPhone != 'undefined' && this.patientPhone)) {
            this.configService.getConfig().subscribe(function (resp) {
                var config = resp[0];
                var event = new src_app_models__WEBPACK_IMPORTED_MODULE_2__["Event"]();
                var patient = new src_app_models__WEBPACK_IMPORTED_MODULE_2__["Patient"]();
                patient.name = _this.patientName;
                patient.phone = _this.patientPhone;
                _this.patientService.register(patient).subscribe(function (resp) {
                    event.patient = resp.body;
                    event.date = _this.date;
                    event.duration = config.interval;
                    _this.userService.getById(_this.user).subscribe(function (user) {
                        event.user = user;
                        _this.eventService.register(event).subscribe(function (resp) {
                            _this.closeAndClean();
                            _this.alertService.success("Salvo com sucesso.", 5000);
                        });
                    });
                });
            });
        }
    };
    EventRegisterComponent.prototype.closeAndClean = function () {
        this.patient = new src_app_models__WEBPACK_IMPORTED_MODULE_2__["Patient"]();
        this.patients = new Array();
        this.selected = false;
        this.patientName = "";
        this.patientPhone = "";
        this.closeModal();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EventRegisterComponent.prototype, "close", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Date)
    ], EventRegisterComponent.prototype, "date", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EventRegisterComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EventRegisterComponent.prototype, "visible", void 0);
    EventRegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-register',
            template: __webpack_require__(/*! ./event-register.component.html */ "./src/app/home/event-register/event-register.component.html"),
            styles: [__webpack_require__(/*! ./event-register.component.css */ "./src/app/home/event-register/event-register.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["PatientService"],
            _services__WEBPACK_IMPORTED_MODULE_1__["ConfigService"],
            _services__WEBPACK_IMPORTED_MODULE_1__["EventService"],
            _services__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], EventRegisterComponent);
    return EventRegisterComponent;
}());



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-size: .875rem;\r\n  }\r\n  \r\n  .feather {\r\n    width: 16px;\r\n    height: 16px;\r\n    vertical-align: text-bottom;\r\n  }\r\n  \r\n  /*\r\n   * Sidebar\r\n   */\r\n  \r\n  .sidebar {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 100; /* Behind the navbar */\r\n    padding: 48px 0 0; /* Height of navbar */\r\n    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\r\n  }\r\n  \r\n  .sidebar-sticky {\r\n    position: relative;\r\n    top: 0;\r\n    height: calc(100vh - 48px);\r\n    padding-top: .5rem;\r\n    overflow-x: hidden;\r\n    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\r\n  }\r\n  \r\n  @supports ((position: -webkit-sticky) or (position: sticky)) {\r\n    .sidebar-sticky {\r\n      position: -webkit-sticky;\r\n      position: sticky;\r\n    }\r\n  }\r\n  \r\n  .sidebar .nav-link {\r\n    font-weight: 500;\r\n    color: #333;\r\n  }\r\n  \r\n  .sidebar .nav-link .feather {\r\n    margin-right: 4px;\r\n    color: #999;\r\n  }\r\n  \r\n  .sidebar .nav-link.active {\r\n    color: #007bff;\r\n  }\r\n  \r\n  .sidebar .nav-link:hover .feather,\r\n  .sidebar .nav-link.active .feather {\r\n    color: inherit;\r\n  }\r\n  \r\n  .sidebar-heading {\r\n    font-size: .75rem;\r\n    text-transform: uppercase;\r\n  }\r\n  \r\n  /*\r\n   * Content\r\n   */\r\n  \r\n  [role=\"main\"] {\r\n    padding-top: 48px; /* Space for fixed navbar */\r\n  }\r\n  \r\n  /*\r\n   * Navbar\r\n   */\r\n  \r\n  .navbar-brand {\r\n    padding-top: .75rem;\r\n    padding-bottom: .75rem;\r\n    font-size: 1rem;\r\n    background-color: rgba(0, 0, 0, .25);\r\n    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);\r\n  }\r\n  \r\n  .navbar .form-control {\r\n    padding: .75rem 1rem;\r\n    border-width: 0;\r\n    border-radius: 0;\r\n  }\r\n  \r\n  .form-control-dark {\r\n    color: #fff;\r\n    background-color: rgba(255, 255, 255, .1);\r\n    border-color: rgba(255, 255, 255, .1);\r\n  }\r\n  \r\n  .form-control-dark:focus {\r\n    border-color: transparent;\r\n    box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">\r\n    <h1 class=\"h2\">Recepção</h1>\r\n    <div class=\"btn-toolbar mb-2 mb-md-0\">\r\n  \r\n      <div class=\"btn-group mr-2\">\r\n        <button class=\"btn btn-sm btn-outline-secondary\" routerLink=\"/home/consult\">Nova Consulta</button>\r\n        <button class=\"btn btn-sm btn-outline-primary\" routerLink=\"/home/patient\">Cadastro Cliente</button>\r\n      </div>\r\n      <div class=\"dropdown dropleft\">\r\n        <button class=\"btn btn-secondary btn-outline-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\"\r\n          data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          Atalho Agenda\r\n        </button>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n          <a *ngFor=\"let user of attendants\" class=\"dropdown-item\" [routerLink]=\"['/home/agenda', user.id]\">{{user.name}}</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(userService) {
        this.userService = userService;
        this.users = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getAttendants().subscribe(function (u) { return _this.attendants = u; });
        //this.loadAllUsers();
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")],
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _event_register_event_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-register/event-register.component */ "./src/app/home/event-register/event-register.component.ts");
/* harmony import */ var _agenda_agenda_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./agenda/agenda.component */ "./src/app/home/agenda/agenda.component.ts");
/* harmony import */ var _consult_consult_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./consult/consult.component */ "./src/app/home/consult/consult.component.ts");
/* harmony import */ var _patient_patient_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./patient/patient.component */ "./src/app/home/patient/patient.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_completer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-completer */ "./node_modules/ng2-completer/esm5/ng2-completer.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_11__["NgxMaskModule"].forChild(),
                _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], ng2_completer__WEBPACK_IMPORTED_MODULE_10__["Ng2CompleterModule"]
            ],
            declarations: [
                _agenda_agenda_component__WEBPACK_IMPORTED_MODULE_5__["AgendaComponent"], _patient_patient_component__WEBPACK_IMPORTED_MODULE_7__["PatientComponent"],
                _consult_consult_component__WEBPACK_IMPORTED_MODULE_6__["ConsultComponent"], _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _event_register_event_register_component__WEBPACK_IMPORTED_MODULE_4__["EventRegisterComponent"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/home/patient/patient.component.css":
/*!****************************************************!*\
  !*** ./src/app/home/patient/patient.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/patient/patient.component.html":
/*!*****************************************************!*\
  !*** ./src/app/home/patient/patient.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Patientes</h4>\r\n<div id=\"new\" [@popOverState]=\"stateList\">\r\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"name\">Nome Completo</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" formControlName=\"name\" placeholder=\"Nome Completo\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\">\r\n                <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.name.errors.required\">Obrigatório</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group col-md-3\">\r\n                <label for=\"cpf\">CPF</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"cpf\" name=\"cpf\" formControlName=\"cpf\" placeholder=\"CPF\">\r\n            </div>\r\n            <div class=\"form-group col-md-3\">\r\n                <label for=\"birthday\">Data de Nascimento</label>\r\n                <input id=\"birthday\" name=\"birthday\" placeholder=\"DD/MM/AAAA\" formControlName=\"birthday\" class=\"form-control\"\r\n                    type=\"date\">\r\n            </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"phone\">Telefone</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"phone\" name=\"phone\" formControlName=\"phone\" placeholder=\"Telefone\" [ngClass]=\"{ 'is-invalid': submitted && f.phone.errors }\">\r\n                <div *ngIf=\"submitted && f.phone.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.phone.errors.required\">Obrigatório</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"email\">Email</label>\r\n                <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" formControlName=\"email\" placeholder=\"Email\">\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div>\r\n                <h6>Endereço</h6>\r\n            </div>\r\n            <input type=\"text\" class=\"d-none\" id=\"id\" name=\"cpf\" formControlName=\"addressId\" placeholder=\"CPF\">\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-3\">\r\n                    <label for=\"street\">Rua</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"street\" name=\"street\" formControlName=\"street\">\r\n                </div>\r\n                <div class=\"form-group col-md-1\">\r\n                    <label for=\"number\">Número</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"number\" name=\"number\" formControlName=\"number\">\r\n                </div>\r\n                <div class=\"form-group col-md-2\">\r\n                    <label for=\"complement\">Complemento</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"complement\" name=\"complement\" formControlName=\"complement\">\r\n                </div>\r\n                <div class=\"form-group col-md-2\">\r\n                    <label for=\"city\">Cidade</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"city\" name=\"city\" formControlName=\"city\">\r\n                </div>\r\n                <div class=\"form-group col-md-2\">\r\n                    <label for=\"state\">Estado</label>\r\n                    <select id=\"state\" class=\"form-control\" name=\"state\" formControlName=\"state\">\r\n                        <option selected value=\"1\">Rio de Janeiro</option>\r\n                        <option value=\"2\">São Paulo</option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"form-group col-md-2\">\r\n                    <label for=\"zip\">CEP</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"zip\" name=\"zip\" formControlName=\"zip\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button [disabled]=\"loading\" class=\"btn btn-success btn-sm\">Salvar</button>\r\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n        </div>\r\n    </form>\r\n</div>\r\n<button class=\"btn btn-primary btn-sm mb-3 float-right\" (click)=\"toggle()\">{{title}}</button>\r\n<div id=\"list\">\r\n    <table class=\"table table-striped table-sm\">\r\n        <thead>\r\n            <tr>\r\n                <th scope=\"col\">Nome</th>\r\n                <th scope=\"col\">CPF</th>\r\n                <th scope=\"col\">Email</th>\r\n                <th scope=\"col\"></th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let patient of patients\">\r\n                <td>{{ patient.name }} </td>\r\n                <td>{{ patient.cpf }}</td>\r\n                <td>{{ patient.email }}</td>\r\n                <td>\r\n                    <a class=\"btn btn-info btn-sm\" (click)=\"edit(patient.id)\">\r\n                        <i class=\"far fa-edit\"></i></a>\r\n                    <a class=\"btn btn-danger btn-sm ml-1\" (click)=\"delete(patient.id)\">\r\n                        <i class=\"far fa-trash-alt\"></i></a></td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "./src/app/home/patient/patient.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/patient/patient.component.ts ***!
  \***************************************************/
/*! exports provided: PatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientComponent", function() { return PatientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_models */ "./src/app/_models/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PatientComponent = /** @class */ (function () {
    function PatientComponent(formBuilder, patientService, alertService) {
        this.formBuilder = formBuilder;
        this.patientService = patientService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        this.show = false;
        this.editing = false;
    }
    PatientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.patientService.getAll().subscribe(function (resp) { return _this.patients = resp; });
        this.cleanForm();
        this.title = this.show ? 'Cancelar' : 'Cadastrar';
    };
    Object.defineProperty(PatientComponent.prototype, "stateList", {
        get: function () {
            return this.show ? 'block' : 'none';
        },
        enumerable: true,
        configurable: true
    });
    PatientComponent.prototype.toggle = function () {
        this.submitted = false;
        this.show = !this.show;
        if (this.editing && !this.show) {
            this.cleanForm();
        }
        if (this.editing) {
            this.editing = false;
        }
        this.title = this.show ? 'Cancelar' : 'Cadastrar';
    };
    PatientComponent.prototype.cleanForm = function () {
        this.registerForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            cpf: [''],
            birthday: [''],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: [''],
            addressId: [''],
            street: [],
            number: [],
            complement: [],
            city: [],
            state: ['1'],
            zip: []
        });
    };
    Object.defineProperty(PatientComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    PatientComponent.prototype.edit = function (id) {
        var _this = this;
        var patient = new _models__WEBPACK_IMPORTED_MODULE_1__["Patient"]();
        this.patientService.getById(id).subscribe(function (resp) {
            patient = resp;
            _this.registerForm = _this.formBuilder.group({
                name: [patient.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                cpf: [patient.cpf],
                birthday: [patient.birthday ? patient.birthday.toString().split('T')[0] : ''],
                phone: [patient.phone, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                email: [patient.email],
                addressId: [patient.address ? patient.address.id : ''],
                street: [patient.address ? patient.address.street : ''],
                number: [patient.address ? patient.address.number : ''],
                complement: [patient.address ? patient.address.complement : ''],
                city: [patient.address ? patient.address.city : ''],
                state: [patient.address ? patient.address.state : ''],
                zip: [patient.address ? patient.address.zip : '']
            });
            _this.currentPatient = id;
            _this.toggle();
            _this.editing = true;
        });
    };
    PatientComponent.prototype.delete = function (id) {
        var _this = this;
        this.patientService.delete(id).subscribe(function (resp) {
            _this.patientService.getAll().subscribe(function (resp) { return _this.patients = resp; });
        });
    };
    PatientComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        var patient = new _models__WEBPACK_IMPORTED_MODULE_1__["Patient"]();
        var form = this.registerForm.value;
        patient.name = form.name;
        patient.email = form.email;
        patient.phone = form.phone;
        patient.cpf = form.cpf;
        patient.birthday = form.birthday;
        var address = new _models__WEBPACK_IMPORTED_MODULE_1__["Address"]();
        address.id = form.addressId;
        address.city = form.city;
        address.complement = form.complement;
        address.number = form.number;
        address.state = form.state;
        address.street = form.street;
        address.zip = form.zip;
        patient.address = address;
        if (this.editing) {
            patient.id = this.currentPatient;
            this.patientService.update(patient).subscribe(function (r) {
                _this.patientService.getAll().subscribe(function (resp) { return _this.patients = resp; });
                _this.alertService.success("Salvo com sucesso.", 5000);
            });
            this.editing = false;
        }
        else {
            this.patientService.register(patient).subscribe(function (r) {
                _this.patientService.getAll().subscribe(function (resp) { return _this.patients = resp; });
                _this.alertService.success("Salvo com sucesso.", 5000);
            });
        }
        this.toggle();
        this.cleanForm();
    };
    PatientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-patient',
            template: __webpack_require__(/*! ./patient.component.html */ "./src/app/home/patient/patient.component.html"),
            styles: [__webpack_require__(/*! ./patient.component.css */ "./src/app/home/patient/patient.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('popOverState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('none', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        display: 'none',
                        opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('block', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        display: 'block',
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('block => none', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('300ms ease-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('none => block', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('300ms ease-in'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _services__WEBPACK_IMPORTED_MODULE_2__["PatientService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
    ], PatientComponent);
    return PatientComponent;
}());



/***/ }),

/***/ "./src/app/index/index.component.css":
/*!*******************************************!*\
  !*** ./src/app/index/index.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-size: .875rem;\r\n  }\r\n  \r\n  .feather {\r\n    width: 16px;\r\n    height: 16px;\r\n    vertical-align: text-bottom;\r\n  }\r\n  \r\n  /*\r\n   * Sidebar\r\n   */\r\n  \r\n  .sidebar {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 100; /* Behind the navbar */\r\n    padding: 48px 0 0; /* Height of navbar */\r\n    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\r\n  }\r\n  \r\n  .sidebar-sticky {\r\n    position: relative;\r\n    top: 0;\r\n    height: calc(100vh - 48px);\r\n    padding-top: .5rem;\r\n    overflow-x: hidden;\r\n    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\r\n  }\r\n  \r\n  @supports ((position: -webkit-sticky) or (position: sticky)) {\r\n    .sidebar-sticky {\r\n      position: -webkit-sticky;\r\n      position: sticky;\r\n    }\r\n  }\r\n  \r\n  .sidebar .nav-link {\r\n    font-weight: 500;\r\n    color: #333;\r\n  }\r\n  \r\n  .sidebar .nav-link .feather {\r\n    margin-right: 4px;\r\n    color: #999;\r\n  }\r\n  \r\n  .sidebar .nav-link.active {\r\n    color: #007bff;\r\n  }\r\n  \r\n  .sidebar .nav-link:hover .feather,\r\n  .sidebar .nav-link.active .feather {\r\n    color: inherit;\r\n  }\r\n  \r\n  .sidebar-heading {\r\n    font-size: .75rem;\r\n    text-transform: uppercase;\r\n  }\r\n  \r\n  /*\r\n   * Content\r\n   */\r\n  \r\n  [role=\"main\"] {\r\n    padding-top: 48px; /* Space for fixed navbar */\r\n  }\r\n  \r\n  /*\r\n   * Navbar\r\n   */\r\n  \r\n  .navbar-brand {\r\n    padding-top: .75rem;\r\n    padding-bottom: .75rem;\r\n    font-size: 1rem;\r\n    background-color: rgba(0, 0, 0, .25);\r\n    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);\r\n  }\r\n  \r\n  .navbar .form-control {\r\n    padding: .75rem 1rem;\r\n    border-width: 0;\r\n    border-radius: 0;\r\n  }\r\n  \r\n  .form-control-dark {\r\n    color: #fff;\r\n    background-color: rgba(255, 255, 255, .1);\r\n    border-color: rgba(255, 255, 255, .1);\r\n  }\r\n  \r\n  .form-control-dark:focus {\r\n    border-color: transparent;\r\n    box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/index/index.component.html":
/*!********************************************!*\
  !*** ./src/app/index/index.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow\">\r\n    <a class=\"navbar-brand col-sm-3 col-md-2 mr-0\" href=\"#\">Clinava</a>\r\n    <ul class=\"navbar-nav px-3\">\r\n      <li class=\"nav-item text-nowrap\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/login']\">Sair</a>\r\n      </li>\r\n    </ul>\r\n</nav>\r\n\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <nav class=\"col-md-2 d-none d-md-block bg-light sidebar\">\r\n        <div class=\"sidebar-sticky\">\r\n          <ul class=\"nav flex-column\">\r\n            \r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"#recepcao\" >Recepção</a>\r\n              <div id=\"recepcao\" routerLinkActive=\"show\">\r\n                <ul class=\"nav flex-column ml-3\">\r\n                  <li class=\"nav-item\">\r\n                    <a class=\"nav-link\"  routerLink=\"/home/agenda\" routerLinkActive=\"active\">Agenda</a>\r\n                  </li>\r\n                  <li class=\"nav-item\" >\r\n                    <a class=\"nav-link\" routerLink=\"/home/consult\" routerLinkActive=\"active\">Consulta</a>\r\n                  </li>\r\n                  <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" routerLink=\"/home/patient\" routerLinkActive=\"active\">Patiente</a>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"#admin\">Administrativo</a>\r\n              <div id=\"admin\"  routerLinkActive=\"show\">\r\n                <ul class=\"nav flex-column ml-3\">\r\n                  <li class=\"nav-item\">\r\n                    <a class=\"nav-link\"  routerLink=\"/admin/user\" routerLinkActive=\"active\">Usuários</a>\r\n                  </li>\r\n                  <li class=\"nav-item\">\r\n                    <a class=\"nav-link\"  routerLink=\"/admin/configuration\" routerLinkActive=\"active\">Configurações</a>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </nav>\r\n\r\n      <main role=\"main\" class=\"col-md-10 ml-sm-auto col-lg-10 px-4\">\r\n          <alert></alert>\r\n          <router-outlet></router-outlet>\r\n          \r\n      </main>\r\n    </div>\r\n  </div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
        //this.loadAllUsers();
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/index/index.component.css")],
        })
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/login/index.ts":
/*!********************************!*\
  !*** ./src/app/login/index.ts ***!
  \********************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });




/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color: #F4F2F4;height: 100%;\">\r\n<div class=\"container py-5\" >\r\n    <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Login\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n                    \r\n                <div class=\"form-group\">\r\n                    <label for=\"username\">Email</label>\r\n                    <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\r\n                    <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.username.errors.required\">Email é obrigatório</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"password\">Senha</label>\r\n                    <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\r\n                    <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.password.errors.required\">Senha obrigatória</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\r\n                    <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n                    <!--<a [routerLink]=\"['/register']\" class=\"btn btn-link\">Registrar</a>-->\r\n                </div>\r\n            </form>\r\n        </div>\r\n      </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, authenticationService, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['mauriliommachado@gmail.com', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['admin123', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            console.log(error);
            _this.alertService.error("Usuário ou senha incorretos");
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"), styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")] }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/register/index.ts":
/*!***********************************!*\
  !*** ./src/app/register/index.ts ***!
  \***********************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component */ "./src/app/register/register.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return _register_component__WEBPACK_IMPORTED_MODULE_0__["RegisterComponent"]; });




/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Register</h2>\r\n<form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"form-group\">\r\n        <label for=\"firstName\">Nome Completo</label>\r\n        <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\r\n        <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"username\">Email</label>\r\n        <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\r\n        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.username.errors.required\">Username is required</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"password\">Password</label>\r\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\r\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n            <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\r\n        <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n        <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, router, userService, alertService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        /* this.userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                }); */
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html") }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], RegisterComponent);
    return RegisterComponent;
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
    production: false,
    apiUrl: 'https://clinava.herokuapp.com/api'
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

module.exports = __webpack_require__(/*! C:\Users\Maurílio\IdeaProjects\clinava-front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map