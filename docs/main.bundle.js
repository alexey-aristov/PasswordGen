webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_component__ = __webpack_require__("./src/app/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_clipboard__ = __webpack_require__("./node_modules/ngx-clipboard/dist/ngx-clipboard.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__main_component__["a" /* MainComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ngx_clipboard__["a" /* ClipboardModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__main_component__["a" /* MainComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/main.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Password Gen</h1>\n  <div>\n    <table class=\"table table-sm table-hover table-bordered\">\n      <thead>\n        <tr>\n          <th scope=\"col\">Time</th>\n          <th scope=\"col\">Login</th>\n          <th scope=\"col\">Password</th>\n          <th scope=\"col\"></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr scope=\"row\" *ngFor=\"let loginPassword of PrevioslyGenerated;index as i\">\n          <td style=\"width: 30%\">{{loginPassword.Time.toLocaleString()}}</td>\n          <td style=\"width: 30%\">{{loginPassword.Login}}</td>\n          <td style=\"width: 30%\">{{loginPassword.Password}}</td>\n          <td style=\"width: 10%\"><button (click)=\"Delete(i)\">Delete</button></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div>\n    <input type=\"text\" [(ngModel)]=\"Current.Login\" />\n    <button (click)=\"Generate()\">Gen</button>\n    <input type=\"text\" readonly [(ngModel)]=\"Current.Password\" />\n    <button ngxClipboard [cbContent]=\"Current.Password\" #copyPopover=\"ngbPopover\" (cbOnSuccess)=\"OnCopied()\" ngbPopover=\"Copied.\"\n      triggers=\"manual\">Copy</button>\n    <button (click)=\"SwitchToNew()\">New</button>\n  </div>\n  <div>\n    <input type=\"number\" [(ngModel)]=\"CharsCount\">\n    <label *ngFor=\"let ruleWrap of AvailableRules; let index = index;\">\n      <input type=\"checkbox\" value=\"{{ruleWrap.Rule}}\" [(ngModel)]=\"AvailableRules[index].Checked\">{{ruleWrap.Name}}\n    </label>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainComponent = /** @class */ (function () {
    function MainComponent() {
        this.PrevKey = "PrevValues";
        this.CurrentKey = "CurrentValue";
        this.CharsCount = 6;
        this.AvailableRules = [
            new RuleWrap(new LowerCaseCharsRule(), "Lower case", true),
            new RuleWrap(new UpperCaseCharsRule(), "Upper case", true),
            new RuleWrap(new NumberCaseCharsRule(), "Numbers", true),
            new RuleWrap(new SpecialCaseCharsRule(), "Special characters", true)
        ];
        var prevValues = window.localStorage.getItem(this.PrevKey);
        if (prevValues) {
            this.PrevioslyGenerated = JSON.parse(prevValues);
        }
        else {
            this.PrevioslyGenerated = [];
        }
        var currValue = window.localStorage.getItem(this.CurrentKey);
        if (currValue) {
            this.PrevioslyGenerated.push(JSON.parse(currValue));
            this.SavePreviousValuesToLocalStorage();
            window.localStorage.removeItem(this.CurrentKey);
        }
        this.Current = new LoginPassword();
    }
    MainComponent.prototype.Generate = function () {
        this.Current.Password = this.GenerateWithRules(this.AvailableRules
            .filter(function (ruleview) { return ruleview.Checked == true; })
            .map(function (ruleview) { return ruleview.Rule; }), this.CharsCount);
        this.Current.Time = new Date();
        window.localStorage.setItem(this.CurrentKey, JSON.stringify(this.Current));
    };
    MainComponent.prototype.GenerateWithRules = function (rules, length) {
        var out = "";
        if (length < rules.length) {
            throw "length of password should be more or equal to rules count.values:length '" + length + "', rules count:'" + rules.length + "'.";
        }
        if (rules.length <= 0) {
            throw "rules count should be more then zero.";
        }
        while (out.length < length) {
            for (var _i = 0, rules_1 = rules; _i < rules_1.length; _i++) {
                var rule = rules_1[_i];
                if (out.length < length) {
                    var charPosInRule = Math.floor(Math.random() * rule.Chars.length);
                    var newChar = rule.Chars.substring(charPosInRule, charPosInRule + 1);
                    out += newChar;
                }
                else {
                    break;
                }
            }
        }
        return out;
    };
    MainComponent.prototype.SwitchToNew = function () {
        if (!this.Current.Login && !this.Current.Password) {
            return;
        }
        if (!this.Current.Time) {
            this.Current.Time = new Date();
        }
        this.PrevioslyGenerated.push(this.Current);
        this.Current = new LoginPassword();
        window.localStorage.removeItem(this.CurrentKey);
        this.SavePreviousValuesToLocalStorage();
    };
    MainComponent.prototype.Delete = function (index) {
        this.PrevioslyGenerated.splice(index, 1);
        this.SavePreviousValuesToLocalStorage();
    };
    MainComponent.prototype.SavePreviousValuesToLocalStorage = function () {
        window.localStorage.setItem(this.PrevKey, JSON.stringify(this.PrevioslyGenerated));
    };
    MainComponent.prototype.OnCopied = function () {
        var _this = this;
        this.copyPopover.open();
        setTimeout(function () { return _this.copyPopover.close(); }, 5000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewChild */])('copyPopover'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbPopover */])
    ], MainComponent.prototype, "copyPopover", void 0);
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/main.component.html"),
            styles: [__webpack_require__("./src/app/main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());

var RuleWrap = /** @class */ (function () {
    function RuleWrap(rule, name, checked) {
        this.Rule = rule;
        this.Name = name;
        this.Checked = checked;
    }
    return RuleWrap;
}());
var LoginPassword = /** @class */ (function () {
    function LoginPassword() {
    }
    return LoginPassword;
}());
var LowerCaseCharsRule = /** @class */ (function () {
    function LowerCaseCharsRule() {
        this.Chars = "abcdefghijklmnopqrstuvwxyz";
    }
    return LowerCaseCharsRule;
}());
var UpperCaseCharsRule = /** @class */ (function () {
    function UpperCaseCharsRule() {
        this.Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    return UpperCaseCharsRule;
}());
var NumberCaseCharsRule = /** @class */ (function () {
    function NumberCaseCharsRule() {
        this.Chars = "0123456789";
    }
    return NumberCaseCharsRule;
}());
var SpecialCaseCharsRule = /** @class */ (function () {
    function SpecialCaseCharsRule() {
        this.Chars = "!\"#$%&'()*+,-./:;<=>?@[]^_`{}~";
    }
    return SpecialCaseCharsRule;
}());


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map