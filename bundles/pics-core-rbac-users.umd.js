(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/forms'), require('primeng/multiselect'), require('@angular/router'), require('rxjs/add/operator/map'), require('@angular/common'), require('primeng/card'), require('primeng/dropdown'), require('primeng/accordion'), require('primeng/checkbox'), require('primeng/inputtext'), require('primeng/api'), require('primeng/tooltip'), require('@ng-bootstrap/ng-bootstrap'), require('primeng/avatar'), require('primeng/badge'), require('primeng/button'), require('primeng/calendar'), require('primeng/confirmdialog'), require('primeng/confirmpopup'), require('primeng/contextmenu'), require('primeng/dialog'), require('primeng/editor'), require('primeng/fieldset'), require('primeng/fileupload'), require('primeng/inputmask'), require('primeng/inputswitch'), require('primeng/inputtextarea'), require('primeng/knob'), require('primeng/message'), require('primeng/orderlist'), require('primeng/password'), require('primeng/progressspinner'), require('primeng/radiobutton'), require('primeng/ripple'), require('primeng/sidebar'), require('primeng/speeddial'), require('primeng/steps'), require('primeng/table'), require('primeng/tabmenu'), require('primeng/tabview'), require('primeng/toast'), require('primeng/treeselect'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('@pics-core/rbac-users', ['exports', '@angular/core', 'rxjs', '@angular/forms', 'primeng/multiselect', '@angular/router', 'rxjs/add/operator/map', '@angular/common', 'primeng/card', 'primeng/dropdown', 'primeng/accordion', 'primeng/checkbox', 'primeng/inputtext', 'primeng/api', 'primeng/tooltip', '@ng-bootstrap/ng-bootstrap', 'primeng/avatar', 'primeng/badge', 'primeng/button', 'primeng/calendar', 'primeng/confirmdialog', 'primeng/confirmpopup', 'primeng/contextmenu', 'primeng/dialog', 'primeng/editor', 'primeng/fieldset', 'primeng/fileupload', 'primeng/inputmask', 'primeng/inputswitch', 'primeng/inputtextarea', 'primeng/knob', 'primeng/message', 'primeng/orderlist', 'primeng/password', 'primeng/progressspinner', 'primeng/radiobutton', 'primeng/ripple', 'primeng/sidebar', 'primeng/speeddial', 'primeng/steps', 'primeng/table', 'primeng/tabmenu', 'primeng/tabview', 'primeng/toast', 'primeng/treeselect', '@angular/common/http'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global["pics-core"] = global["pics-core"] || {}, global["pics-core"]["rbac-users"] = {}), global.ng.core, global.rxjs, global.ng.forms, global.i9, global.ng.router, global.rxjs["add/operator/map"], global.ng.common, global.i6, global.i7, global.i8, global.i10, global.i12, global.i14, global.i15, global.ngBootstrap, global.avatar, global.badge, global.button, global.calendar, global.confirmdialog, global.confirmpopup, global.contextmenu, global.dialog, global.editor, global.fieldset, global.fileupload, global.inputmask, global.inputswitch, global.inputtextarea, global.knob, global.message, global.orderlist, global.password, global.progressspinner, global.radiobutton, global.ripple, global.sidebar, global.speeddial, global.steps, global.table, global.tabmenu, global.tabview, global.toast, global.treeselect, global.ng.common.http));
})(this, (function (exports, i0, rxjs, i2, i9, i1, map, i13, i6, i7, i8, i10, i12, i14, i15, ngBootstrap, avatar, badge, button, calendar, confirmdialog, confirmpopup, contextmenu, dialog, editor, fieldset, fileupload, inputmask, inputswitch, inputtextarea, knob, message, orderlist, password, progressspinner, radiobutton, ripple, sidebar, speeddial, steps, table, tabmenu, tabview, toast, treeselect, http) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i9__namespace = /*#__PURE__*/_interopNamespace(i9);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i13__namespace = /*#__PURE__*/_interopNamespace(i13);
    var i6__namespace = /*#__PURE__*/_interopNamespace(i6);
    var i7__namespace = /*#__PURE__*/_interopNamespace(i7);
    var i8__namespace = /*#__PURE__*/_interopNamespace(i8);
    var i10__namespace = /*#__PURE__*/_interopNamespace(i10);
    var i12__namespace = /*#__PURE__*/_interopNamespace(i12);
    var i14__namespace = /*#__PURE__*/_interopNamespace(i14);
    var i15__namespace = /*#__PURE__*/_interopNamespace(i15);

    var RbacUsersService = /** @class */ (function () {
        function RbacUsersService() {
        }
        return RbacUsersService;
    }());
    RbacUsersService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacUsersService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    RbacUsersService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacUsersService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacUsersService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var RoleConfig = /** @class */ (function () {
        function RoleConfig() {
        }
        return RoleConfig;
    }());
    RoleConfig.EndPoint = {
        role: {
            getAllUserRole: '/access-control/role',
            createRole: '/access-control/role/create',
            getLandingPage: '/platform/menu/application',
            addPolicyGroup: '/access-control/role',
            getAllOrgRole: '/access-control/role/organization/{orgid}',
            dossier: '/dossier'
        }
    };
    var UserConfig = /** @class */ (function () {
        function UserConfig() {
        }
        return UserConfig;
    }());
    UserConfig.EndPoint = {
        User: {
            getAllUserList: '/org/user',
            getAllUserActiveInactive: '/org/user?includeInactiveUsers=true',
            getUserConfig: '/org/user/getUserPreference/USER_THEME_PREFERENCES/{id}',
            activateUser: '/org/user/activate',
            createUser: '/org/user/create',
            userRole: '/org/user/role',
            managementgroup: '/org/team/managementgroup',
            getAllUserOrgList: '/org/user/organization/',
            saveUserConfig: '/org/user/saveUserPreference'
        },
        Provider: {
            getProviderList: '/ref/provider',
            searchProviderList: '/ref/provider/search',
            addProviderUser: '/ref/provider/create/account'
        }
    };
    var AttachmentConfig = /** @class */ (function () {
        function AttachmentConfig() {
        }
        return AttachmentConfig;
    }());
    AttachmentConfig.EndPoint = {
        Attachments: {
            GetAttachmentReferral: '/ref/attachment/referral',
            GetCategoryLookup: '/platform/master/lookup/lookupbycategoryname',
            UploadKey: '/common/files/upload-key',
            DownloadKey: '/common/files/download-key',
            PostAttachment: '/ref/attachment/create',
            PutAttachment: '/ref/attachment'
        }
    };
    var PolicyGroupConfig = /** @class */ (function () {
        function PolicyGroupConfig() {
        }
        return PolicyGroupConfig;
    }());
    PolicyGroupConfig.EndPoint = {
        policyGroup: {
            getOrgPolicyGroups: '/platform/page-designer/policyGroup/organization/{organizationid}'
        }
    };
    var RBACINFO = /** @class */ (function () {
        function RBACINFO() {
            this.apiHost = '';
            this.tokenKey = '';
        }
        return RBACINFO;
    }());
    var Environment = /** @class */ (function () {
        function Environment() {
        }
        return Environment;
    }());

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise, SuppressedError, Symbol */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
        function accept(f) { if (f !== void 0 && typeof f !== "function")
            throw new TypeError("Function expected"); return f; }
        var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
        var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
        var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
        var _, done = false;
        for (var i = decorators.length - 1; i >= 0; i--) {
            var context = {};
            for (var p in contextIn)
                context[p] = p === "access" ? {} : contextIn[p];
            for (var p in contextIn.access)
                context.access[p] = contextIn.access[p];
            context.addInitializer = function (f) { if (done)
                throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
            var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
            if (kind === "accessor") {
                if (result === void 0)
                    continue;
                if (result === null || typeof result !== "object")
                    throw new TypeError("Object expected");
                if (_ = accept(result.get))
                    descriptor.get = _;
                if (_ = accept(result.set))
                    descriptor.set = _;
                if (_ = accept(result.init))
                    initializers.unshift(_);
            }
            else if (_ = accept(result)) {
                if (kind === "field")
                    initializers.unshift(_);
                else
                    descriptor[key] = _;
            }
        }
        if (target)
            Object.defineProperty(target, contextIn.name, descriptor);
        done = true;
    }
    ;
    function __runInitializers(thisArg, initializers, value) {
        var useValue = arguments.length > 2;
        for (var i = 0; i < initializers.length; i++) {
            value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
        }
        return useValue ? value : void 0;
    }
    ;
    function __propKey(x) {
        return typeof x === "symbol" ? x : "".concat(x);
    }
    ;
    function __setFunctionName(f, name, prefix) {
        if (typeof name === "symbol")
            name = name.description ? "[".concat(name.description, "]") : "";
        return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
    }
    ;
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (g && (g = 0, op[0] && (_ = 0)), _)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
            desc = { enumerable: true, get: function () { return m[k]; } };
        }
        Object.defineProperty(o, k2, desc);
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }
    function __classPrivateFieldIn(state, receiver) {
        if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function"))
            throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
    }
    function __addDisposableResource(env, value, async) {
        if (value !== null && value !== void 0) {
            if (typeof value !== "object" && typeof value !== "function")
                throw new TypeError("Object expected.");
            var dispose;
            if (async) {
                if (!Symbol.asyncDispose)
                    throw new TypeError("Symbol.asyncDispose is not defined.");
                dispose = value[Symbol.asyncDispose];
            }
            if (dispose === void 0) {
                if (!Symbol.dispose)
                    throw new TypeError("Symbol.dispose is not defined.");
                dispose = value[Symbol.dispose];
            }
            if (typeof dispose !== "function")
                throw new TypeError("Object not disposable.");
            env.stack.push({ value: value, dispose: dispose, async: async });
        }
        else if (async) {
            env.stack.push({ async: true });
        }
        return value;
    }
    var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    function __disposeResources(env) {
        function fail(e) {
            env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        function next() {
            while (env.stack.length) {
                var rec = env.stack.pop();
                try {
                    var result = rec.dispose && rec.dispose.call(rec.value);
                    if (rec.async)
                        return Promise.resolve(result).then(next, function (e) { fail(e); return next(); });
                }
                catch (e) {
                    fail(e);
                }
            }
            if (env.hasError)
                throw env.error;
        }
        return next();
    }
    var tslib_es6 = {
        __extends: __extends,
        __assign: __assign,
        __rest: __rest,
        __decorate: __decorate,
        __param: __param,
        __metadata: __metadata,
        __awaiter: __awaiter,
        __generator: __generator,
        __createBinding: __createBinding,
        __exportStar: __exportStar,
        __values: __values,
        __read: __read,
        __spread: __spread,
        __spreadArrays: __spreadArrays,
        __spreadArray: __spreadArray,
        __await: __await,
        __asyncGenerator: __asyncGenerator,
        __asyncDelegator: __asyncDelegator,
        __asyncValues: __asyncValues,
        __makeTemplateObject: __makeTemplateObject,
        __importStar: __importStar,
        __importDefault: __importDefault,
        __classPrivateFieldGet: __classPrivateFieldGet,
        __classPrivateFieldSet: __classPrivateFieldSet,
        __classPrivateFieldIn: __classPrivateFieldIn,
        __addDisposableResource: __addDisposableResource,
        __disposeResources: __disposeResources,
    };

    var Store = /** @class */ (function () {
        function Store(initialState) {
            this._state$ = new rxjs.BehaviorSubject(initialState);
            this.state$ = this._state$.asObservable();
        }
        Object.defineProperty(Store.prototype, "state", {
            get: function () {
                return this._state$.getValue();
            },
            enumerable: false,
            configurable: true
        });
        Store.prototype.setState = function (nextState) {
            this._state$.next(nextState);
        };
        return Store;
    }());

    var PermissionStore = /** @class */ (function (_super) {
        __extends(PermissionStore, _super);
        function PermissionStore() {
            return _super.call(this, {}) || this;
        }
        PermissionStore.prototype.setStore = function (data) {
            if (data) {
                this.setState(Object.assign(Object.assign({}, this.state), data));
            }
        };
        PermissionStore.prototype.getStore = function (type) {
            if (type === void 0) { type = 'P'; }
            if (type === 'P')
                return rxjs.of(this.state);
            else
                return rxjs.of(this.state);
        };
        PermissionStore.prototype.flat = function (array) {
            var _this = this;
            var result = [];
            if (array) {
                array.forEach(function (item) {
                    result.push(item);
                    if (item && Array.isArray(item)) {
                        result = result.concat(_this.flat(item));
                    }
                });
            }
            return result;
        };
        return PermissionStore;
    }(Store));
    PermissionStore.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PermissionStore, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    PermissionStore.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PermissionStore });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PermissionStore, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return []; } });

    var DataStoreService = /** @class */ (function () {
        function DataStoreService() {
            this.currentStoreSubject = new rxjs.BehaviorSubject({});
            this.currentStore = this.currentStoreSubject.asObservable();
            // test code
        }
        DataStoreService.prototype.setData = function (key, value) {
            var currentStore = this.getCurrentStore();
            currentStore[key] = value;
            this.currentStoreSubject.next(currentStore);
        };
        DataStoreService.prototype.setObject = function (value) {
            this.currentStoreSubject.next(value);
        };
        DataStoreService.prototype.getData = function (key) {
            var currentStore = this.getCurrentStore();
            return currentStore[key];
        };
        DataStoreService.prototype.clearStore = function () {
            var currentStore = this.getCurrentStore();
            Object.keys(currentStore).forEach(function (key) {
                delete currentStore[key];
            });
            this.currentStoreSubject.next(currentStore);
        };
        DataStoreService.prototype.getCurrentStore = function () {
            return this.currentStoreSubject.value;
        };
        return DataStoreService;
    }());
    DataStoreService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DataStoreService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    DataStoreService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DataStoreService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DataStoreService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return []; } });

    var AppConstants = /** @class */ (function () {
        function AppConstants() {
        }
        return AppConstants;
    }());
    AppConstants.errorMessage = 'Something went wrong!';
    AppConstants.regexEmail = '^[a-zA-Z0-9_]+(?:[.+][a-zA-Z0-9_]+)*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$';
    AppConstants.regexUsername = '^[a-zA-ZÀ-ÖØ-öø-ÿ][a-zA-ZÀ-ÖØ-öø-ÿ \\-]*$';

    var UserOrgService = /** @class */ (function () {
        function UserOrgService(_storeservice) {
            var _this = this;
            this._storeservice = _storeservice;
            this._storeservice.currentStore.subscribe(function (res) {
                if (res) {
                    _this.httpService = res['HTTPSERVICE'];
                }
            });
        }
        UserOrgService.prototype.getAllUserList = function (key) {
            return this.httpService.get(UserConfig.EndPoint.User.getAllUserList + "/" + key);
        };
        UserOrgService.prototype.getAllUserOrgList = function (orgid) {
            return this.httpService.get(UserConfig.EndPoint.User.getAllUserOrgList + orgid);
        };
        UserOrgService.prototype.saveUser = function (data) {
            return this.httpService.post(UserConfig.EndPoint.User.createUser, data);
        };
        UserOrgService.prototype.updateUser = function (data, userid) {
            return this.httpService.put(UserConfig.EndPoint.User.getAllUserList + "/" + userid, data);
        };
        UserOrgService.prototype.deleteUser = function (id) {
            return this.httpService.delete(UserConfig.EndPoint.User.getAllUserList + "/" + id);
        };
        UserOrgService.prototype.activateUser = function (data) {
            return this.httpService.post(UserConfig.EndPoint.User.activateUser, data);
        };
        UserOrgService.prototype.addProviderUser = function (data) {
            return this.httpService.post(UserConfig.EndPoint.Provider.addProviderUser, data);
        };
        UserOrgService.prototype.addUserRole = function (data) {
            return this.httpService.post(UserConfig.EndPoint.User.userRole, data);
        };
        UserOrgService.prototype.uploadKey = function (objparams) {
            return this.httpService.post(AttachmentConfig.EndPoint.Attachments.UploadKey, objparams);
        };
        UserOrgService.prototype.getOrgPolicyGroupList = function (orgid) {
            return this.httpService.get(PolicyGroupConfig.EndPoint.policyGroup.getOrgPolicyGroups.replace('{organizationid}', String(orgid)));
        };
        UserOrgService.prototype.getAllUserRole = function (id) {
            return this.httpService.get(RoleConfig.EndPoint.role.getAllOrgRole.replace('{orgid}', String(id)));
        };
        UserOrgService.prototype.getRoleById = function (roleid) {
            return this.httpService.get(RoleConfig.EndPoint.role.getAllUserRole + "/" + roleid);
        };
        return UserOrgService;
    }());
    UserOrgService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UserOrgService, deps: [{ token: DataStoreService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    UserOrgService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UserOrgService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UserOrgService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: DataStoreService }]; } });

    var AlertService = /** @class */ (function () {
        function AlertService(router) {
            var _this = this;
            this.router = router;
            this.subject = new rxjs.Subject();
            this.keepAfterRouteChange = false;
            // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
            router.events.subscribe(function (event) {
                if (event instanceof i1.NavigationStart) {
                    if (_this.keepAfterRouteChange) {
                        // only keep for a single route change
                        _this.keepAfterRouteChange = false;
                    }
                    else {
                        // clear alert messages
                        _this.clear();
                    }
                }
            });
        }
        AlertService.prototype.getAlert = function () {
            return this.subject.asObservable();
        };
        AlertService.prototype.success = function (message, keepAfterRouteChange) {
            if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
            this.alert(AlertType.Success, message, keepAfterRouteChange);
        };
        AlertService.prototype.error = function (message, keepAfterRouteChange) {
            if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
            this.alert(AlertType.Error, message, keepAfterRouteChange);
        };
        AlertService.prototype.info = function (message, keepAfterRouteChange) {
            if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
            this.alert(AlertType.Info, message, keepAfterRouteChange);
        };
        AlertService.prototype.warn = function (message, keepAfterRouteChange) {
            if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
            this.alert(AlertType.Warning, message, keepAfterRouteChange);
        };
        AlertService.prototype.alert = function (type, message, keepAfterRouteChange) {
            if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
            this.keepAfterRouteChange = keepAfterRouteChange;
            this.subject.next({ type: type, message: message });
        };
        AlertService.prototype.clear = function () {
            // clear alerts
            this.subject.next({});
        };
        return AlertService;
    }());
    AlertService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertService, deps: [{ token: i1__namespace.Router }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AlertService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return [{ type: i1__namespace.Router }]; } });
    var AlertType;
    (function (AlertType) {
        AlertType[AlertType["Success"] = 0] = "Success";
        AlertType[AlertType["Error"] = 1] = "Error";
        AlertType[AlertType["Info"] = 2] = "Info";
        AlertType[AlertType["Warning"] = 3] = "Warning";
    })(AlertType || (AlertType = {}));
    var Alert = /** @class */ (function () {
        function Alert() {
        }
        return Alert;
    }());
    var UserGroupDto = /** @class */ (function () {
        function UserGroupDto(data) {
            Object.assign(this, data);
        }
        return UserGroupDto;
    }());
    var UserRolePageDto = /** @class */ (function () {
        function UserRolePageDto(data) {
            Object.assign(this, data);
        }
        return UserRolePageDto;
    }());
    var UserRoleDto = /** @class */ (function () {
        function UserRoleDto(data) {
            Object.assign(this, data);
        }
        return UserRoleDto;
    }());
    var UserDto = /** @class */ (function () {
        function UserDto(data) {
            Object.assign(this, data);
        }
        return UserDto;
    }());
    var AccessManagementConfig = /** @class */ (function () {
        function AccessManagementConfig() {
        }
        return AccessManagementConfig;
    }());
    AccessManagementConfig.EndPoint = {
        Organization: {
            getOrganizationList: '/org/organization/all',
            getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true'
        }
    };

    var DISPLAY_IN_SECONDS = 8;
    var AlertComponent = /** @class */ (function () {
        function AlertComponent(alertService) {
            this.alertService = alertService;
            this.alerts = [];
        }
        AlertComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.alertService.getAlert().subscribe(function (alert) {
                if (!alert) {
                    // clear alerts when an empty alert is received
                    _this.alerts = [];
                    return;
                }
                // add alert to array
                _this.alerts.push(alert);
                // remove alert after 5 seconds
                setTimeout(function () { return _this.removeAlert(alert); }, DISPLAY_IN_SECONDS * 1000);
            });
        };
        AlertComponent.prototype.removeAlert = function (alert) {
            this.alerts = this.alerts.filter(function (x) { return x !== alert; });
        };
        AlertComponent.prototype.cssClass = function (alert) {
            if (!alert) {
                return;
            }
            // return css class based on alert type
            switch (alert.type) {
                case AlertType.Success:
                    return 'alert alert-success';
                case AlertType.Error:
                    return 'alert alert-danger';
                case AlertType.Info:
                    return 'alert alert-info';
                case AlertType.Warning:
                    return 'alert alert-warning';
            }
        };
        return AlertComponent;
    }());
    AlertComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertComponent, deps: [{ token: AlertService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    AlertComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: AlertComponent, selector: "app-alert", ngImport: i0__namespace, template: "<div *ngFor=\"let alert of alerts\" class=\"alert-animate {{ cssClass(alert) }} alert-dismissable\">\r\n  {{ alert.message }}\r\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>\r\n", styles: [".alert-animate{position:fixed;top:10px;left:auto;right:10px;z-index:999999;min-width:400px;text-transform:capitalize;margin:0 auto;animation-name:slideInDown;animation-duration:1s;animation-fill-mode:both}.alert-animate .close{padding:3px;border-radius:2px;color:#fff;opacity:1;text-align:center;line-height:17px;font-size:24px}@keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible}to{transform:translateY(0)}}.alert-animate.alert-success{background:#04844b;color:#fff;border-color:#04844b}.alert-danger{background:#b92b28;border-color:#b92b28;color:#fff}.alert-info{color:#fff;background:#0f3164;border-color:#0f3164}\n"], directives: [{ type: i13__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertComponent, decorators: [{
                type: i0.Component,
                args: [{
                        // moduleId: module.id,
                        selector: 'app-alert',
                        templateUrl: 'alert.component.html',
                        styleUrls: ['./alert.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: AlertService }]; } });

    var PermissionDirective = /** @class */ (function () {
        function PermissionDirective(renderer, elementRef, dataStore) {
            this.renderer = renderer;
            this.elementRef = elementRef;
            this.dataStore = dataStore;
        }
        PermissionDirective.prototype.ngAfterViewInit = function () {
            var _this = this;
            var permissions = this.dataStore.state;
            if (permissions) {
                if (!permissions[this.fieldKey]) {
                    var template = this.elementRef.nativeElement;
                    if (template.tagName === 'A') {
                        if (template) {
                            var r = document.createElement(this.elementRef.nativeElement.tagName.toLowerCase());
                            r.innerHTML = template.innerHTML;
                            r.href = 'javascript:void(0);';
                            r['disabled'] = true;
                            r.className = template.className;
                            this.elementRef.nativeElement.parentNode.replaceChild(r, template);
                        }
                    }
                    else if (template.tagName === 'P-MULTISELECT' ||
                        template.tagName === 'P-DROPDOWN' ||
                        template.tagName === 'P-CHECKBOX' ||
                        template.tagName === 'P-TREESELECT' ||
                        template.tagName === 'P-RADIOBUTTON' ||
                        template.tagName === 'P-CALENDAR') {
                        if (template) {
                            var r = document.createElement(this.elementRef.nativeElement.tagName.toLowerCase());
                            r.innerHTML = template.innerHTML;
                            r.className = template.className;
                            r.className += ' p-disabled';
                            this.elementRef.nativeElement.parentNode.replaceChild(r, template);
                        }
                    }
                    else {
                        this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', 'true');
                        var childInputNodes = this.elementRef.nativeElement.querySelectorAll('input, select, textarea, button, a, ng-select, div, lable');
                        childInputNodes.forEach(function (elem) {
                            _this.renderer.setAttribute(elem, 'disabled', 'true');
                        });
                    }
                }
            }
        };
        return PermissionDirective;
    }());
    PermissionDirective.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PermissionDirective, deps: [{ token: i0__namespace.Renderer2 }, { token: i0__namespace.ElementRef }, { token: PermissionStore }], target: i0__namespace.ɵɵFactoryTarget.Directive });
    PermissionDirective.ɵdir = i0__namespace.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.17", type: PermissionDirective, selector: "[fieldKey]", inputs: { fieldKey: "fieldKey" }, ngImport: i0__namespace });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PermissionDirective, decorators: [{
                type: i0.Directive,
                args: [{
                        selector: '[fieldKey]'
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Renderer2 }, { type: i0__namespace.ElementRef }, { type: PermissionStore }]; }, propDecorators: { fieldKey: [{
                    type: i0.Input
                }] } });

    var UsersComponent = /** @class */ (function () {
        function UsersComponent(userService, fb, alertService, _storeservice) {
            this.userService = userService;
            this.fb = fb;
            this.alertService = alertService;
            this._storeservice = _storeservice;
            this.RBACORG = new RBACINFO();
            this.userList = [];
            this.providerList = [];
            this.filteredUserList = [];
            this.selectedRoles = [];
            this.selectedTeams = [];
            this.userSearch$ = new rxjs.Subject();
            this.currentDate = new Date();
            this.rolePolicyGroups = [];
            this.userPolicyGroups = [];
            this.validationErrors = {};
            this.originalPolicyGroupList = [];
            this.previousSelectedPolicyGroups = [];
            this.filteredItems = [];
            this.formSubmit = false;
            this.providerAccount = false;
            this.checked = true;
            this.sendCredentials = true;
            this.imageInformation = '';
            this.initializeForm();
        }
        UsersComponent.prototype.ngOnInit = function () {
            var _this = this;
            this._storeservice.currentStore.subscribe(function (res) {
                if (res) {
                    _this.inputValidationMethod = res['INPUTVALIDATIONMETHOD'];
                    _this.httpService = res['HTTPSERVICE'];
                }
            });
            if (this.RBACORG['orgID']) {
                this.orgId = parseInt(this.RBACORG['orgID']);
                if (this.orgId) {
                    this.getUserList();
                    this.getRolesList();
                    this.getPolicyGroupList();
                }
            }
            this.userForm.valueChanges.subscribe(function () {
                _this.enableButton = _this.isAnyFormControlWithValue();
            });
        };
        UsersComponent.prototype.isAnyFormControlWithValue = function () {
            var formValue = this.userForm.value;
            var avoidProperties = ['emailtocurrentuser', 'isenabled', 'providerAccount', 'islocked'];
            for (var key in formValue) {
                if (formValue.hasOwnProperty(key) && !avoidProperties.includes(key) && formValue[key]) {
                    return true;
                }
            }
            return false;
        };
        UsersComponent.prototype.initializeForm = function () {
            this.userForm = this.fb.group({
                firstname: ['', [i2.Validators.required, i2.Validators.pattern(AppConstants.regexUsername)]],
                middlename: [''],
                lastname: ['', [i2.Validators.required, i2.Validators.pattern(AppConstants.regexUsername)]],
                username: [''],
                // dob: [''],
                email: ['', [i2.Validators.required, i2.Validators.pattern(AppConstants.regexEmail)]],
                userroles: ['', i2.Validators.required],
                userteams: [''],
                userpolicygroups: [''],
                organizationid: [''],
                emailtocurrentuser: false,
                isenabled: [true],
                providerId: [''],
                providerAccount: false,
                thumbnail: [''],
                islocked: [false]
            });
        };
        Object.defineProperty(UsersComponent.prototype, "formValidate", {
            get: function () {
                return this.userForm.controls;
            },
            enumerable: false,
            configurable: true
        });
        UsersComponent.prototype.onInput = function (event, fieldtype, label, required) {
            var error = this.inputValidationMethod(event, fieldtype, label, required);
            if (error && typeof error === 'string') {
                this.validationErrors[label] = error;
            }
            else {
                delete this.validationErrors[label];
            }
        };
        UsersComponent.prototype.getUserList = function (_key) {
            var _this = this;
            this.userService.getAllUserOrgList(this.orgId).subscribe(function (res) {
                _this.filteredUserList = [];
                _this.userList = res.data;
                _this.filteredUserList = _this.userList;
            }, function (_error) { return _this.alertService.error(AppConstants.errorMessage); });
        };
        UsersComponent.prototype.getRolesList = function () {
            var _this = this;
            this.userService.getAllUserRole(this.orgId).subscribe(function (res) {
                _this.userRoles = res['data'];
            }, function (_error) { return _this.alertService.error(AppConstants.errorMessage); });
        };
        UsersComponent.prototype.clearSearch = function (event) {
            var inputElement = document.querySelector('.form-control');
            if (inputElement) {
                inputElement.value = '';
                this.filteredUserList = this.userList;
            }
        };
        UsersComponent.prototype.getPolicyGroupList = function (_managementGroupId) {
            var _this = this;
            this.userService.getOrgPolicyGroupList(this.orgId).subscribe(function (res) {
                _this.policyGroupList = res['data'].sort(function (a, b) { return a.name.localeCompare(b.name); });
            }, function (err) { return console.log(err); });
        };
        UsersComponent.prototype.addUser = function () {
            var userData = this.userForm.getRawValue();
            delete userData.thumbnail;
            this.formSubmit = true;
            if (this.userForm.valid) {
                var rolePolicyGroupsIds = new Set(this.rolePolicyGroups.map(function (item) { return item.id; }));
                var userPolicyGroupsIds = new Set(this.userPolicyGroups.map(function (item) { return item.id; }));
                var combinedPolicyGroupsIds_1 = new Set(__spreadArray(__spreadArray([], __read(rolePolicyGroupsIds)), __read(userPolicyGroupsIds)));
                var userDataPolicyGroupsIds_1 = new Set(userData.userpolicygroups.map(function (item) { return item.id; }));
                var finalPolicyGroups = __spreadArray(__spreadArray([], __read(userData.userpolicygroups.filter(function (item) { return !combinedPolicyGroupsIds_1.has(item.id); }))), __read(this.userPolicyGroups)).filter(function (item) { return userDataPolicyGroupsIds_1.has(item.id); });
                userData.organizationid = this.orgId;
                userData.id = this.userid || 1;
                userData.userteams = userData.userteams || [];
                userData.userroles = [userData.userroles] || [];
                userData.userpolicygroups = finalPolicyGroups;
                userData.emailtocurrentuser = userData.emailtocurrentuser || false;
                userData.username = userData.username || "";
                // userData.dob = new DatePipe('en-US').transform(userData.dob, 'YYYY-MM-dd');
                if (!this.userid) {
                    this.userWithOutId(userData);
                }
                else {
                    this.userWithID(userData);
                }
            }
        };
        UsersComponent.prototype.userWithOutId = function (userData) {
            var _this = this;
            this.userService.saveUser(userData).subscribe(function (res) {
                if (_this.providerAccount && _this.userForm.controls['providerId'].valid) {
                    _this.addProviderUser(userData.providerId, res['data']);
                }
                _this.cancel(true);
                _this.getUserList();
                _this.alertService.success('User created successfully');
            }, function (error) {
                if (error.error.message) {
                    _this.alertService.error(error.error.message);
                }
                else {
                    _this.alertService.error('Failed to create user');
                }
            });
        };
        UsersComponent.prototype.userWithID = function (userData) {
            var _this = this;
            if (this.uploadedFile) {
                userData.additionalinfo = {
                    photo: this.imageData,
                    thumbnail: this.imageData
                };
            }
            this.userService.updateUser(userData, this.userid).subscribe(function () {
                _this.cancel(false);
                _this.getUserList();
                _this.getUserInfo(userData);
                _this.userForm.controls['username'].disable();
                _this.userForm.controls['email'].disable();
                _this.alertService.success('User updated successfully');
            }, function (err) {
                if (err.error.message) {
                    _this.alertService.error(err.error.message);
                }
                else {
                    _this.alertService.error('Failed to create user');
                }
            });
        };
        UsersComponent.prototype.mapUserToRole = function (userId, roleId) {
            var request = {
                userId: userId,
                roleId: roleId
            };
            this.userService.addUserRole(request).subscribe(function () { return console.log('User mapped to role Successfully'); });
        };
        UsersComponent.prototype.onClickAddUser = function () {
            var _this = this;
            this.userForm.reset();
            this.userForm.controls['email'].enable();
            this.initializeForm();
            this.userForm.valueChanges.subscribe(function () {
                _this.enableButton = _this.isAnyFormControlWithValue();
            });
            this.formSubmit = false;
            this.sendCredentials = true;
            this.userid = '';
            this.userPolicyGroups = [];
            this.rolePolicyGroups = [];
            this.previousSelectedPolicyGroups = [];
            this.policyGroupList.map(function (p) { return p.disabled = false; });
            this.validationErrors = {};
            this.userForm.get('userpolicygroups').setValue([]);
            this.policyGroupsLength = this.userForm.value.userpolicygroups.length;
            this.enableButton = false;
        };
        UsersComponent.prototype.cancel = function (changeFlag) {
            if (!this.userid) {
                this.userForm.reset();
                this.userForm.patchValue({
                    isenabled: true,
                    islocked: false
                });
                this.validationErrors = {};
                this.policyGroupsLength = 0;
            }
            this.providerAccount = false;
            this.formSubmit = false;
            this.userForm.controls['email'].enable();
            this.userForm.controls['username'].enable();
            if (changeFlag) {
                this.policyGroupList.map(function (p) { return p.disabled = false; });
            }
            this.userPolicyGroups = [];
            this.rolePolicyGroups = [];
            this.previousSelectedPolicyGroups = [];
            this.validationErrors = {};
        };
        UsersComponent.prototype.searchUser = function (event) {
            var value = event.target.value.toLowerCase();
            this.filteredUserList = this.userList.filter(function (a) { var _a; return (_a = a === null || a === void 0 ? void 0 : a.firstname) === null || _a === void 0 ? void 0 : _a.toLowerCase().startsWith(value); });
        };
        UsersComponent.prototype.getUserInfo = function (user) {
            var _this = this;
            this.userPolicyGroups = [];
            this.previousSelectedPolicyGroups = [];
            this.validationErrors = {};
            this.formSubmit = false;
            this.sendCredentials = false;
            this.userid = user.id;
            this.userService.getAllUserList(this.userid).subscribe(function (res) {
                var _a, _b, _c, _d, _e, _f;
                _this.imageInformation = '';
                // this.imageInformation = res.data.additionalinfo?.thumbnail?.fileName?.split('/')[2] || '';
                _this.userForm.patchValue({
                    firstname: res.data.firstname,
                    middlename: res.data.middlename,
                    lastname: res.data.lastname,
                    username: res.data.username,
                    // dob: new Date(res.data.dob),
                    email: res.data.email,
                    organizationid: res.data.organizationid,
                    thumbnail: ((_b = (_a = res.data.additionalinfo) === null || _a === void 0 ? void 0 : _a.thumbnail) === null || _b === void 0 ? void 0 : _b.url) || '',
                    isenabled: (_c = res === null || res === void 0 ? void 0 : res.data) === null || _c === void 0 ? void 0 : _c.isenabled,
                    islocked: (_d = res === null || res === void 0 ? void 0 : res.data) === null || _d === void 0 ? void 0 : _d.islocked,
                    userroles: ((_f = (_e = res === null || res === void 0 ? void 0 : res.data) === null || _e === void 0 ? void 0 : _e.userroles[0]) === null || _f === void 0 ? void 0 : _f.id) || 0,
                    userteams: res.data.userteams
                        ? res.data.userteams
                            .filter(function (item) { return item; })
                            .map(function (item) {
                            return item['id'];
                        })
                        : [],
                });
                var list = _this.policyGroupList;
                var UPGs = res.data.policygroups;
                UPGs.forEach(function (upg) {
                    var existingPolicy = list.find(function (f) { return f.id === upg.id; });
                    if (existingPolicy)
                        _this.userPolicyGroups.push(existingPolicy);
                });
                _this.getRolePolicyGroups(_this.userForm.value.userroles);
                _this.userForm.controls['email'].disable();
                _this.userForm.controls['username'].disable();
                // });
            });
        };
        UsersComponent.prototype.removeValue = function (e, item) {
            e.stopPropagation();
            var selectedPGs = this.userForm.value.userpolicygroups;
            var filteredPgs = selectedPGs.filter(function (s) { return s.id !== Number(item.id); });
            this.previousSelectedPolicyGroups = filteredPgs;
            this.userForm.patchValue({
                userpolicygroups: filteredPgs
            });
            this.policyGroupsLength = this.userForm.value.userpolicygroups.length;
        };
        UsersComponent.prototype.getRolePolicyGroups = function (roleId) {
            var _this = this;
            this.policyGroupList.forEach(function (pg) { return pg['disabled'] = false; });
            if (!roleId) {
                this.rolePolicyGroups = [];
                this.userForm.patchValue({
                    userpolicygroups: [],
                });
                this.policyGroupsLength = 0;
                return;
            }
            this.userService.getRoleById(roleId).subscribe(function (res) {
                if (res) {
                    _this.rolePolicyGroups = res['data'].policyGroups.sort(function (a, b) { return a.policygroupname.localeCompare(b.policygroupname); });
                    var PGS = res['data'].policyGroups
                        .filter(function (item) { return item; })
                        .map(function (item) {
                        return item;
                    }) || [];
                    var arr_1 = [];
                    var list_1 = _this.policyGroupList;
                    PGS.map(function (pg) {
                        var pgExists = list_1.filter(function (f) { return f.id === pg.id; });
                        if (pgExists.length) {
                            arr_1.push(pgExists[0]);
                        }
                    });
                    _this.userForm.patchValue({
                        userpolicygroups: arr_1
                    });
                    var rolePGs_1 = _this.userForm.value.userpolicygroups.map(function (r) { return r.id; });
                    var includedIndexes_1 = [];
                    var excludedIndexes_1 = [];
                    _this.policyGroupList.forEach(function (pg, index) {
                        if (rolePGs_1.includes(pg.id)) {
                            includedIndexes_1.push(index);
                        }
                        else {
                            excludedIndexes_1.push(index);
                        }
                    });
                    var reorderedList = includedIndexes_1.map(function (index) { return _this.policyGroupList[index]; }).concat(excludedIndexes_1.map(function (index) { return _this.policyGroupList[index]; }));
                    console.log(reorderedList, "reorder");
                    reorderedList.forEach(function (pg) {
                        if (rolePGs_1.includes(pg.id)) {
                            pg['disabled'] = true;
                        }
                    });
                    _this.policyGroupList = reorderedList;
                    _this.userPolicyGroups = _this.userPolicyGroups.sort(function (a, b) { return a.policygroupname.localeCompare(b.policygroupname); });
                    var allPolicyGroups = _this.userForm.value.userpolicygroups.concat(_this.userPolicyGroups);
                    var uniquePolicyGroups = Array.from(new Set(allPolicyGroups));
                    _this.previousSelectedPolicyGroups = uniquePolicyGroups;
                    _this.userForm.patchValue({ userpolicygroups: uniquePolicyGroups });
                    _this.policyGroupsLength = _this.userForm.value.userpolicygroups.length;
                }
            }, function (_err) { return _this.alertService.error('Failed to Fetch Policy Groups'); });
        };
        UsersComponent.prototype.delete = function (event, id) {
            event.stopPropagation();
            this.deletedId = id;
            $('#Deleteuser').modal('show');
        };
        UsersComponent.prototype.deleteUser = function () {
            var _this = this;
            this.userService.deleteUser(this.deletedId).subscribe(function () {
                _this.cancel(true);
                _this.alertService.success('User deleted successfully');
                $('#Deleteuser').modal('hide');
                _this.getUserList();
            }, function (_err) { return _this.alertService.error('Failed to delete User'); });
        };
        UsersComponent.prototype.cancelUser = function () {
            this.sendCredentials = true;
            this.formSubmit = false;
            this.userForm.reset();
            this.userForm.patchValue({
                isenabled: true,
                islocked: false
            });
            this.userForm.controls['email'].enable();
            this.userForm.controls['username'].enable();
            this.userid = '';
            this.policyGroupList.map(function (p) { return p.disabled = false; });
            this.userPolicyGroups = [];
            this.rolePolicyGroups = [];
            this.validationErrors = {};
            this.previousSelectedPolicyGroups = [];
            this.policyGroupsLength = 0;
        };
        UsersComponent.prototype.activateUser = function () {
            var _this = this;
            var userData = this.userForm.getRawValue();
            var body = {
                email: userData.email,
                code: userData.otp
            };
            this.userService.activateUser(body).subscribe(function (_res) {
                _this.alertService.success('User Activated Successfully');
            }, function (_err) {
                _this.alertService.error('User Activation Failed');
            });
        };
        UsersComponent.prototype.selectProvider = function (selected) {
            this.providerAccount = selected;
        };
        UsersComponent.prototype.addProviderUser = function (providerId, userid) {
            var data = {
                providerId: providerId,
                accountId: userid.toString()
            };
            this.userService.addProviderUser(data).subscribe(function () {
                console.log('Provider User added Successfully');
            }, function (_err) { return console.log('failed to add Provider user'); });
        };
        UsersComponent.prototype.handleFileInput = function (fileValue) {
            var _this = this;
            var target = fileValue.target;
            var file = target.files[0];
            this.uploadedFile = fileValue.target.files[0].name;
            this.imageData = {
                contentType: fileValue.target.files[0].type,
                fileName: "user-profileimage/" + this.userid + "/" + this.uploadedFile.replaceAll(' ', '')
            };
            this.imageInformation = '';
            if (this.validateImage(fileValue.target.files)) {
                this.userService.uploadKey(this.imageData).subscribe(function (res) {
                    _this.urlPath = res.data;
                    var uploadAttachment = document.getElementById('file');
                    var uploadAttachmentDetails = uploadAttachment.files[0];
                    _this.httpService.putUpload(_this.urlPath, uploadAttachmentDetails, uploadAttachmentDetails.type).subscribe(function (_resp) {
                        _this.alertService.success('Profile Image uploaded successfully');
                        var reader = new FileReader();
                        reader.onload = function () {
                            _this.userForm.patchValue({ thumbnail: reader.result });
                        };
                        reader.readAsDataURL(file);
                        _this.attachType = fileValue.target.files[0].type;
                    }, function (error) {
                        if (error.status == 0) {
                            _this.alertService.error(AppConstants.errorMessage);
                            _this.uploadedFile = '';
                            _this.urlPath = '';
                        }
                    });
                }, function (_error) {
                    _this.alertService.error(AppConstants.errorMessage);
                });
            }
        };
        UsersComponent.prototype.onClickRemoveProfile = function () {
            $('#DeleteProfile').modal('show');
        };
        UsersComponent.prototype.removeThumbnail = function () {
            this.cancel(true);
            this.alertService.success('Profile image deleted successfully.');
            $('#DeleteProfile').modal('hide');
            this.userForm.controls['thumbnail'].reset();
            this.imageInformation = '';
            this.imageData = '';
            this.uploadedFile = '';
            this.userForm.controls['username'].disable();
            this.userForm.controls['email'].disable();
        };
        UsersComponent.prototype.validateImage = function (file) {
            var fileSize = Number(file[0].size) / 1024;
            var filetype = file[0].type.replace('image/', '');
            if (filetype === 'jpg' || filetype === 'jpeg' || filetype === 'png' || filetype === 'gif') {
                if (fileSize < 100) {
                    return true;
                }
                else {
                    this.imageInformation = 'Image size exceeds 100 KB';
                    this.alertService.warn('File is bigger than 100 KB');
                    return false;
                }
            }
            else {
                this.imageInformation = '';
                this.alertService.warn(filetype + " format is not supported");
                return false;
            }
        };
        UsersComponent.prototype.stopPropagation = function (event) {
            event.stopPropagation();
        };
        UsersComponent.prototype.selectPolicyGroup = function (event) {
            var currentSelections = event.value;
            var previouslySelected = this.previousSelectedPolicyGroups;
            // if-condition signifies select-all or de-select multiple values at a time
            if (!(event.hasOwnProperty('itemValue') && event.itemValue)) {
                // select-all or de-select all action 
                var deSelectAllPolicyGroups = false;
                var selectAllPolicyGroups = false;
                //Edge Case 1: select-all policygroups action criteria with no filters applied -> All PGs in the dropdown is selected
                if (currentSelections.length === this.policyGroupList.length) {
                    selectAllPolicyGroups = true;
                }
                //Edge Case 2: de-select-all policygroups with no filters applied -> All PGs in dropdown is de-selected and only role-based PGs remain
                if (currentSelections.length === this.rolePolicyGroups.length &&
                    this.rolePolicyGroups.every(function (rolePolicy) { return currentSelections.some(function (selection) { return selection.id === rolePolicy.id; }); })) {
                    deSelectAllPolicyGroups = true;
                }
                //If Edge Case 1 or Edge Case 2 happen, this.filterText should be set to ''
                if (selectAllPolicyGroups || deSelectAllPolicyGroups) {
                    this.filterText = '';
                }
                //Edge Case 3: filters have been applied and select-all or de-select-all PGs in filtered view 
                if (this.filterText && this.filterText !== '') {
                    var filteredItemIds_1 = this.filteredItems.map(function (item) { return item.id; });
                    if (currentSelections.length === 0) {
                        //Edge Case 3.1 : Deselect-all in filtered view
                        this.previousSelectedPolicyGroups = previouslySelected.filter(function (item) { return !filteredItemIds_1.includes(item.id); });
                        currentSelections = this.previousSelectedPolicyGroups;
                    }
                    else {
                        //Edge Case 3.2 :Select-all in filtered view
                        var newSelections = this.filteredItems.filter(function (item) { return !previouslySelected.some(function (prevItem) { return prevItem.id === item.id; }); });
                        this.previousSelectedPolicyGroups = __spreadArray(__spreadArray([], __read(previouslySelected)), __read(newSelections));
                        currentSelections = this.previousSelectedPolicyGroups;
                    }
                }
            }
            this.updateSelections(this.userForm.value.userroles, currentSelections);
            this.policyGroupsLength = currentSelections.length;
        };
        UsersComponent.prototype.updateSelections = function (roleId, currentSelections) {
            var _this = this;
            this.policyGroupList.forEach(function (pg) { return pg['disabled'] = false; });
            if (!roleId) {
                this.rolePolicyGroups = [];
                this.userForm.patchValue({
                    userpolicygroups: [],
                });
                return;
            }
            this.userService.getRoleById(roleId).subscribe(function (res) {
                if (res) {
                    _this.rolePolicyGroups = res['data'].policyGroups.sort(function (a, b) { return a.policygroupname.localeCompare(b.policygroupname); });
                    var PGS = res['data'].policyGroups
                        .filter(function (item) { return item; })
                        .map(function (item) {
                        return item;
                    }) || [];
                    var arr_2 = [];
                    var list_2 = _this.policyGroupList;
                    PGS.map(function (pg) {
                        var pgExists = list_2.filter(function (f) { return f.id === pg.id; });
                        if (pgExists.length) {
                            arr_2.push(pgExists[0]);
                        }
                    });
                    console.log(arr_2);
                    _this.userForm.patchValue({
                        userpolicygroups: arr_2
                    });
                    var rolePGs_2 = _this.userForm.value.userpolicygroups.map(function (r) { return r.id; });
                    var includedIndexes_2 = [];
                    var excludedIndexes_2 = [];
                    _this.policyGroupList.forEach(function (pg, index) {
                        if (rolePGs_2.includes(pg.id)) {
                            includedIndexes_2.push(index);
                        }
                        else {
                            excludedIndexes_2.push(index);
                        }
                    });
                    var reorderedList = includedIndexes_2.map(function (index) { return _this.policyGroupList[index]; }).concat(excludedIndexes_2.map(function (index) { return _this.policyGroupList[index]; }));
                    console.log(reorderedList, "reorder");
                    reorderedList.forEach(function (pg) {
                        if (rolePGs_2.includes(pg.id)) {
                            pg['disabled'] = true;
                        }
                    });
                    _this.policyGroupList = reorderedList;
                    var allPolicyGroups = _this.userForm.value.userpolicygroups.concat(currentSelections);
                    var uniquePolicyGroups = Array.from(new Set(allPolicyGroups));
                    _this.userForm.patchValue({ userpolicygroups: uniquePolicyGroups });
                    _this.previousSelectedPolicyGroups = uniquePolicyGroups;
                    _this.policyGroupsLength = _this.userForm.value.userpolicygroups.length;
                }
            }, function (_err) { return _this.alertService.error('Failed to Fetch Policy Groups'); });
        };
        UsersComponent.prototype.onPageNameInput = function (event, name) {
            var input = event.target;
            var startPosition = input.selectionStart;
            var endPosition = input.selectionEnd;
            var pagenameControl = this.userForm.get(name);
            if (pagenameControl.value) {
                var newValue = pagenameControl.value
                    .split(' ')
                    .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); })
                    .join(' ');
                pagenameControl.patchValue(newValue, { emitEvent: false });
                // Restore cursor position
                input.setSelectionRange(startPosition, endPosition);
            }
        };
        UsersComponent.prototype.onFilterPolicyGroup = function (event) {
            var _this = this;
            this.filterText = event.filter;
            this.filteredItems = this.policyGroupList.filter(function (item) { return item.policygroupname.toLowerCase().includes(_this.filterText.toLowerCase()); });
        };
        return UsersComponent;
    }());
    UsersComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UsersComponent, deps: [{ token: UserOrgService }, { token: i2__namespace.FormBuilder }, { token: AlertService }, { token: DataStoreService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    UsersComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: UsersComponent, selector: "users", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION" }, viewQueries: [{ propertyName: "ms", first: true, predicate: i9.MultiSelect, descendants: true }], ngImport: i0__namespace, template: "<app-alert></app-alert>\r\n<div class=\"permission\">\r\n  <div class=\"row\" [formGroup]=\"userForm\">\r\n    <div class=\"col-lg-4 col-md-6 col-12\">\r\n      <div class=\"clearfix\"></div>\r\n      <div class=\"tab-content py-2 px-0 px-sm-0\">\r\n        <div class=\"tab-pane fade show active\">\r\n          <div class=\"form-group bgiconsearch d-flex align-items-center\">\r\n            <span class=\"p-input-icon-right w-100\">\r\n              <i class=\"pi pi-times-circle\" (click)=\"clearSearch($event)\"></i>\r\n              <input class=\"form-control\" fieldKey=\"SETTINGS_USR_SEARCH_BY_NAME\" placeholder=\"Search by User name\"\r\n                type=\"text\" (keyup)=\"searchUser($event)\" pInputText />\r\n            </span>\r\n            <button type=\"button\" class=\"btn btn-primary btncommon ml-2\" (click)=\"onClickAddUser()\">Add</button>\r\n            <!-- Modified line -->\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n          <div class=\"useracess\">\r\n            <div class=\"d-flex align-items-center justify-content-center h-100 w-100 ng-star-inserted\"\r\n              *ngIf=\"!filteredUserList.length\">\r\n              <p>No Record Found</p>\r\n            </div>\r\n            <ng-container *ngFor=\"let item of filteredUserList\">\r\n              <div class=\"row userdata align-items-center\" (click)=\"getUserInfo(item)\"\r\n                [ngClass]=\"{ active: item.id === userid }\">\r\n                <div class=\"col-12\">\r\n                  <img *ngIf=\"!item?.additionalinfo?.thumbnail?.url\" src=\"assets/images/user-empty.png\" alt=\"user\"\r\n                    class=\"userempty mr-2\" />\r\n                  <img *ngIf=\"item?.additionalinfo?.thumbnail?.url\" [src]=\"item?.additionalinfo?.thumbnail?.url\"\r\n                    alt=\"user\" class=\"userempty mr-2\" />\r\n\r\n                  <div class=\"overflow_txt userInforight\">\r\n                    <span class=\"nameuser\">{{ item.firstname + ' ' + item.lastname }}</span>\r\n                    <br />\r\n                    <span class=\"emailuser\">{{ item.email }}</span> <br />\r\n                  </div>\r\n\r\n                  <div class=\"lock-icon\">\r\n                    <span class=\"right-icons\" *ngIf=\"item?.islocked\">\r\n                      <em class=\"fa fa-lock mr-2\" aria-hidden=\"true\" (click)=\"stopPropagation($event)\"></em>\r\n                    </span>\r\n                    <span class=\"right-icons\">\r\n                      <em class=\"fa fa-trash\" (click)=\"delete($event, item.id)\" aria-hidden=\"true\"\r\n                        *showField=\"'SETTINGS_USR_DELETE_USER'\"></em>\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-8 col-md-6 col-12 user-right setting-tab mt-2\">\r\n      <p-card class=\"rbac-card h-100\" [style]=\"{ width: '100%' }\">\r\n        <div class=\"strip_head toggleleft\">\r\n          <span class=\"report_head font-weight-bold\">Personal Details</span>\r\n        </div>\r\n        <div class=\"p-fluid p-formgrid row\">\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n            <label for=\"fname\" class=\"referral-form-labels\">First Name\r\n              <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <input id=\"fname\" type=\"text\" placeholder=\"Enter First Name\" formControlName=\"firstname\"\r\n              fieldKey=\"SETTINGS_USR_FIRST_NAME\" aria-describedby=\"fname\" pInputText\r\n              (keyup)=\"onPageNameInput($event, 'firstname')\"\r\n              (input)=\"onInput($event, 'username', 'First Name', true)\" />\r\n            <div *ngIf=\"validationErrors['First Name']\" class=\"p-error block mt-1\">{{validationErrors['First Name']}}\r\n            </div>\r\n            <div *ngIf=\"!validationErrors['First Name'] && formValidate['firstname'].errors && formSubmit\">\r\n              <div *ngIf=\"formValidate['firstname'].invalid\" class=\"p-error block mt-1\">First Name is required </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n            <label for=\"mname\" class=\"referral-form-labels\">Middle Name </label>\r\n            <input id=\"mname\" type=\"text\" placeholder=\"Enter Middle Name\" formControlName=\"middlename\"\r\n              fieldKey=\"SETTINGS_USR_MIDDLE_NAME\" aria-describedby=\"mname\" pInputText\r\n              (keyup)=\"onPageNameInput($event, 'middlename')\"\r\n              (input)=\"onInput($event, 'username', 'Middle Name', false)\" />\r\n            <div *ngIf=\"validationErrors['Middle Name']\" class=\"p-error block mt-1\">{{validationErrors['Middle Name']}}\r\n            </div>\r\n          </div>\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n            <label for=\"lName\" class=\"referral-form-labels\">Last Name\r\n              <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <input id=\"lName\" type=\"text\" formControlName=\"lastname\" placeholder=\"Enter Last Name\"\r\n              fieldKey=\"SETTINGS_USR_LAST_NAME\" pInputText (keyup)=\"onPageNameInput($event, 'lastname')\"\r\n              aria-describedby=\"lName\" (input)=\"onInput($event, 'username', 'Last Name', true)\" />\r\n            <div *ngIf=\"validationErrors['Last Name']\" class=\"p-error block mt-1\">{{validationErrors['Last Name']}}\r\n            </div>\r\n            <div *ngIf=\"!validationErrors['Last Name'] && formValidate['lastname'].errors && formSubmit\">\r\n              <div *ngIf=\"formValidate['lastname'].invalid\" class=\"p-error block mt-1\">Last Name is required </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"p-fluid p-formgrid row\">\r\n          <!-- <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n            <label for=\"userName\" class=\"referral-form-labels\">User Name\r\n              <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <input id=\"userName\" type=\"text\" formControlName=\"username\" placeholder=\"Enter User Name\"\r\n              aria-describedby=\"userName\" fieldKey=\"SETTINGS_USR_USERNAME\" pInputText />\r\n            <div *ngIf=\"formValidate['username'].errors && formSubmit\">\r\n              <small *ngIf=\"formValidate['username'].invalid\" class=\"p-error block\">User Name is required </small>\r\n            </div>\r\n          </div> -->\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n            <label for=\"usersEmailid\" class=\"referral-form-labels\">Email ID\r\n              <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <input id=\"usersEmailid\" fieldKey=\"SETTINGS_USR_EMAIL\" formControlName=\"email\" placeholder=\"Enter Email ID\"\r\n              type=\"text\" (input)=\"onInput($event, 'email', 'Email ID', true)\" pInputText />\r\n            <div *ngIf=\"validationErrors['Email ID']\" class=\"p-error block mt-1\">{{validationErrors['Email ID']}}</div>\r\n            <div *ngIf=\"!validationErrors['Email ID'] && formValidate['email'].errors && formSubmit\">\r\n              <div *ngIf=\"formValidate['email'].errors['required']\" class=\"p-error block mt-1\">Email ID is required\r\n              </div>\r\n            </div>\r\n            <!-- <div *ngIf=\"formValidate['email'].errors && formSubmit\">\r\n              <small *ngIf=\"formValidate['email'].errors['pattern']\" class=\"p-error block\">Valid email is required\r\n              </small>\r\n            </div> -->\r\n          </div>\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n            <label aria-labelledby=\"role\" for=\"role\" class=\"referral-form-labels\">Role\r\n              <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <p-dropdown inputId=\"role\" [options]=\"userRoles\" placeholder=\"Select a Role\" formControlName=\"userroles\"\r\n              styleClass=\"w-100\" optionLabel=\"name\" [resetFilterOnHide]=\"true\" [filter]=\"true\" [showClear]=\"true\"\r\n              optionValue=\"id\" ariaFilterLabel=\"null\" fieldKey=\"SETTINGS_USR_ROLE\"\r\n              (onChange)=\"getRolePolicyGroups($event.value)\">\r\n              <ng-template let-item pTemplate=\"selectedItem\">\r\n                <div pTooltip=\"{{item?.name}}\" tooltipPosition=\"top\" class=\"text-truncate\"> {{ item?.name }}</div>\r\n              </ng-template>\r\n              <ng-template let-object pTemplate=\"item\">\r\n                {{ object.name }}\r\n              </ng-template>\r\n            </p-dropdown>\r\n            <div *ngIf=\"formValidate['userroles'].errors && formSubmit\">\r\n              <div *ngIf=\"formValidate['userroles'].invalid\" class=\"p-error block mt-1\">Role is required </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"p-field col-md-12 col-12\">\r\n            <p-accordion class=\"w-full policygroup-accordion\" iconPos=\"endVal\">\r\n              <p-accordionTab>\r\n                <ng-template pTemplate=\"header\">\r\n                  <span class=\"flex align-items-center head-text gap-2 w-full\">\r\n                    <span class=\"font-bold\"><label for=\"pGroup\" class=\"referral-form-labels mb-0\">Additional Policy\r\n                        Groups</label> <span *ngIf=\"policyGroupsLength > 0\"\r\n                        class=\"pg-count ml-2\">{{policyGroupsLength}}</span> </span>\r\n                  </span>\r\n                </ng-template>\r\n                <p-multiSelect [options]=\"policyGroupList\" formControlName=\"userpolicygroups\" [resetFilterOnHide]=\"true\"\r\n                  defaultLabel=\"Select Policy Groups\" optionLabel=\"policygroupname\" inputId=\"pGroup\"\r\n                  ariaFilterLabel=\"null\" fieldKey=\"SETTINGS_USR_POLICY_GROUP\" (onChange)=\"selectPolicyGroup($event)\" \r\n                  (onFilter)=\"onFilterPolicyGroup($event)\" display=\"chip\" styleClass=\"policygroup-v2\">\r\n                  <ng-template let-value pTemplate=\"selectedItems\">\r\n                    <div *ngFor=\"let option of value\">\r\n                      <ng-container>\r\n                        <div #selectedpg class=\"p-multiselect-token\" [ngClass]=\"option.disabled ? 'disabled' : '' \"\r\n                          id=\"{{option.id}}\">\r\n                          <span class=\"policygroupname\">\r\n                            {{ option.policygroupname }}\r\n                          </span>\r\n                          <span class=\"rolepg ml-2 badge badge-primary\" *ngIf=\"option.disabled\">\r\n                            Role\r\n                          </span>\r\n                          <em class=\"pi pi-times-circle ml-2 clear-icon right-sec\" *ngIf=\"!option.disabled\"\r\n                            role=\"button\" (click)=\"removeValue($event, selectedpg)\"></em>\r\n                        </div>\r\n                      </ng-container>\r\n                    </div>\r\n                    <div *ngIf=\"!value || value.length === 0\">Select Policy Groups\r\n                    </div>\r\n                  </ng-template>\r\n                  <ng-template let-pg pTemplate=\"item\">\r\n                    <div class=\"d-flex align-items-center flex-row justify-content-between gap-2 disabled-list w-100\">\r\n                      <div>{{ pg.name }}</div>\r\n                      <span class=\"rolepg ml-2 badge badge-primary\" *ngIf=\"pg.disabled\">Role</span>\r\n                    </div>\r\n                  </ng-template>\r\n                </p-multiSelect>\r\n              </p-accordionTab>\r\n            </p-accordion>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"p-fluid p-formgrid row\">\r\n          <div class=\"p-field col-md-12 col-12 mb-1 d-flex align-items-center\" *ngIf=\"!sendCredentials\">\r\n            <label for=\"file\" class=\"btn btn-primary mt-2 mb-2 profile d-flex align-items-center\">\r\n              <span class=\"material-icon material-symbols-outlined action-btn upload mr-2\">cloud_upload</span>Add\r\n              Image</label>\r\n            <span class=\"material-icon material-symbols-outlined text-muted action-btn mx-2\"\r\n              pTooltip=\"Supported file formats are JPG, PNG, JPEG and GIF\" style=\"cursor: pointer;\">\r\n              Info\r\n            </span>\r\n            <input type=\"file\" (change)=\"handleFileInput($event)\" id=\"file\" aria-hidden=\"true\"\r\n              style=\"visibility: hidden; display: none\" />\r\n            <img *ngIf=\"userForm.controls['thumbnail'].value\" [src]=\"userForm.controls['thumbnail'].value\" alt=\"user\"\r\n              class=\"userempty mr-0\" />\r\n            <label class=\"warning ml-2 mb-md-0\"\r\n              [ngStyle]=\"{ color: imageInformation === 'Image size exceeds 100 KB' ? '#fc0303' : '#007cc3'}\">{{\r\n              imageInformation }}</label> <em class=\"pi pi-trash ml-2\" pTooltip=\"Remove Image\"\r\n              *ngIf=\"userForm.controls['thumbnail'].value && imageInformation !== 'Image size exceeds 100 KB'\"\r\n              (click)=\"onClickRemoveProfile()\" style=\"cursor: pointer;\"></em>\r\n          </div>\r\n        </div>\r\n        <!-- <div class=\"p-fluid p-formgrid row\">\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n            <div class=\"p-field-checkbox send-credentials\" *ngIf=\"sendCredentials\">\r\n              <p-checkbox class=\"p-m-1 p-m-lg-2\" inputId=\"binary\" [binary]=\"true\"\r\n                fieldKey=\"SETTINGS_USR_EMAIL_TO_CURRENT_USER\" formControlName=\"emailtocurrentuser\">\r\n              </p-checkbox>\r\n              <label for=\"binary\">Send Credentials to Current Logged in User</label>\r\n            </div>\r\n          </div>\r\n        </div> -->\r\n        <div class=\"p-fluid p-formgrid row\">\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n            <div class=\"p-field-checkbox send-credentials\" *ngIf=\"!sendCredentials\">\r\n              <p-checkbox class=\"p-m-1 p-m-lg-2\" inputId=\"isenabled\" [binary]=\"true\" formControlName=\"isenabled\">\r\n              </p-checkbox>\r\n              <label for=\"isenabled\">Active</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n            <div class=\"p-field-checkbox send-credentials\" *ngIf=\"!sendCredentials\">\r\n              <p-checkbox class=\"p-m-1 p-m-lg-2\" inputId=\"islocked\" [binary]=\"true\" formControlName=\"islocked\">\r\n              </p-checkbox>\r\n              <label for=\"islocked\">Locked</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"p-fluid p-formgrid row\">\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\"></div>\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\"></div>\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12 mb-0\">\r\n            <button fieldKey=\"SETTINGS_USR_ADD_UPDATE\" class=\"pull-right mr-2 mb-2 btn btn-primary btncommon\"\r\n              (click)=\"addUser()\">\r\n              {{ userid ? 'Update User' : 'Add User' }}\r\n            </button>\r\n            <button fieldKey=\"SETTINGS_USR_CANCEL\" class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\"\r\n              (click)=\"cancelUser()\" [disabled]=\"!enableButton\">\r\n              Clear\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </p-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal\" id=\"Deleteuser\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body\">\r\n        <p>Are you sure want to Delete User?</p>\r\n        <div class=\"clearfix\"></div>\r\n        <div class=\"mt-2\">\r\n          <button class=\"pull-right mb-2 btn btn-primary btncommon delete\" data-dismiss=\"modal\" (click)=\"deleteUser()\">\r\n            Delete\r\n          </button>\r\n          <button class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\" data-dismiss=\"modal\">Cancel</button>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal\" id=\"DeleteProfile\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body\">\r\n        <p>Are you sure you want to delete the Profile Image?</p>\r\n        <div class=\"clearfix\"></div>\r\n        <div class=\"mt-2\">\r\n          <button class=\"pull-right mb-2 btn btn-primary btncommon delete\" data-dismiss=\"modal\"\r\n            (click)=\"removeThumbnail()\">\r\n            Delete\r\n          </button>\r\n          <button class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\" data-dismiss=\"modal\">Cancel</button>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".head-div{padding-top:9px;padding-left:7px}.bgiconsearch{margin-bottom:5px;padding-bottom:0;font-size:var(--font-13)}.useracess{border-radius:2px;padding:5px 0;overflow-y:auto}.pi-trash{color:red;font-size:var(--font-16)}.action-btn.upload{font-size:var(--font-19)}.userempty{max-width:none;border-radius:50%;height:40px;width:40px;display:inline-block;margin-right:15px}.row.userdata{margin:0;border-bottom:solid 1px var(--table-border);padding:5px 0;cursor:pointer}.overflow_txt{overflow:hidden;text-overflow:ellipsis}.overflow_txt.userInforight{display:inline-block;vertical-align:middle;width:calc(100% - 50px)}.lock-icon{position:absolute;right:15px;top:50%;margin-top:-13px}span.nameuser{font-size:var(--font-16);color:var(--label-text);font-weight:400}.userid,span.emailuser{font-size:var(--font-15);color:#767676}.activate{position:absolute;margin-top:-46px;margin-left:44rem}.toggleleft{font-size:var(--font-14);font-weight:600;display:block;margin-top:-12px;padding-bottom:13px}.report_button{margin-left:12px}.rbac-card .profile{color:#fff}.right-icons .fa{margin-top:3px;display:inline-block;z-index:9}.right-icons .fa-lock{font-size:var(--font-18)}.right-icons .fa-trash{font-size:var(--font-18)}@media screen and (max-width: 767px){.useracess{max-height:400px}}@media screen and (min-width: 768px){.useracess{height:calc(100vh - 188px)}}@media screen and (min-width: 990px) and (max-width: 1024px){.useracess .userempty{height:100%;width:100%}}:host ::ng-deep .clear-icon{font-size:13px}:host ::ng-deep .policygroup-accordion .policygroup-v2.p-multiselect .p-multiselect-panel{top:auto!important}\n"], components: [{ type: AlertComponent, selector: "app-alert" }, { type: i6__namespace.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }, { type: i7__namespace.Dropdown, selector: "p-dropdown", inputs: ["scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "selectId", "dataKey", "filterBy", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "virtualScroll", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "autofocusFilter", "disabled", "options", "filterValue"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear"] }, { type: i8__namespace.Accordion, selector: "p-accordion", inputs: ["multiple", "style", "styleClass", "expandIcon", "collapseIcon", "activeIndex"], outputs: ["onClose", "onOpen", "activeIndexChange"] }, { type: i8__namespace.AccordionTab, selector: "p-accordionTab", inputs: ["header", "disabled", "cache", "transitionOptions", "selected"], outputs: ["selectedChange"] }, { type: i9__namespace.MultiSelect, selector: "p-multiSelect", inputs: ["style", "styleClass", "panelStyle", "panelStyleClass", "inputId", "disabled", "readonly", "group", "filter", "filterPlaceHolder", "filterLocale", "overlayVisible", "tabindex", "appendTo", "dataKey", "name", "label", "ariaLabelledBy", "displaySelectedLabel", "maxSelectedLabels", "selectionLimit", "selectedItemsLabel", "showToggleAll", "emptyFilterMessage", "emptyMessage", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "showHeader", "autoZIndex", "baseZIndex", "filterBy", "virtualScroll", "itemSize", "showTransitionOptions", "hideTransitionOptions", "ariaFilterLabel", "filterMatchMode", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "autofocusFilter", "display", "autocomplete", "showClear", "scrollHeight", "defaultLabel", "placeholder", "options", "filterValue"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onClear", "onPanelShow", "onPanelHide"] }, { type: i10__namespace.Checkbox, selector: "p-checkbox", inputs: ["value", "name", "disabled", "binary", "label", "ariaLabelledBy", "ariaLabel", "tabindex", "inputId", "style", "styleClass", "labelStyleClass", "formControl", "checkboxIcon", "readonly", "required", "trueValue", "falseValue"], outputs: ["onChange"] }], directives: [{ type: i2__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: PermissionDirective, selector: "[fieldKey]", inputs: ["fieldKey"] }, { type: i12__namespace.InputText, selector: "[pInputText]" }, { type: i13__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i13__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i13__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i2__namespace.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i14__namespace.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { type: i15__namespace.Tooltip, selector: "[pTooltip]", inputs: ["tooltipPosition", "tooltipEvent", "appendTo", "positionStyle", "tooltipStyleClass", "tooltipZIndex", "escape", "showDelay", "hideDelay", "life", "positionTop", "positionLeft", "pTooltip", "tooltipDisabled", "tooltipOptions"] }, { type: i13__namespace.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UsersComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'users',
                        templateUrl: './users.component.html',
                        styleUrls: ['./users.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: UserOrgService }, { type: i2__namespace.FormBuilder }, { type: AlertService }, { type: DataStoreService }]; }, propDecorators: { RBACORG: [{
                    type: i0.Input
                }], PERMISSION: [{
                    type: i0.Input
                }], ms: [{
                    type: i0.ViewChild,
                    args: [i9.MultiSelect]
                }] } });

    var RbacUsersComponent = /** @class */ (function () {
        function RbacUsersComponent(permissionStore, _storeservice) {
            this.permissionStore = permissionStore;
            this._storeservice = _storeservice;
            this.RBACORG = new RBACINFO();
        }
        RbacUsersComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.COMMONSERVICE.subscribe(function (val) {
                if (val) {
                    _this._storeservice.setData('HTTPSERVICE', val.httpService);
                }
            });
            this._storeservice.setData('RBACORG', this.RBACORG);
            this.permissionStore.setStore(this.PERMISSION);
            this._storeservice.setData('INPUTVALIDATIONMETHOD', this.INPUTVALIDATIONMETHOD);
        };
        return RbacUsersComponent;
    }());
    RbacUsersComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacUsersComponent, deps: [{ token: PermissionStore }, { token: DataStoreService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    RbacUsersComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: RbacUsersComponent, selector: "rbac-users", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", COMMONSERVICE: "COMMONSERVICE", INPUTVALIDATIONMETHOD: "INPUTVALIDATIONMETHOD" }, ngImport: i0__namespace, template: "\n    <users [RBACORG]=\"RBACORG\" [PERMISSION]=\"PERMISSION\"></users>\n  ", isInline: true, components: [{ type: UsersComponent, selector: "users", inputs: ["RBACORG", "PERMISSION"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacUsersComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'rbac-users',
                        template: "\n    <users [RBACORG]=\"RBACORG\" [PERMISSION]=\"PERMISSION\"></users>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return [{ type: PermissionStore }, { type: DataStoreService }]; }, propDecorators: { RBACORG: [{
                    type: i0.Input
                }], PERMISSION: [{
                    type: i0.Input
                }], COMMONSERVICE: [{
                    type: i0.Input
                }], INPUTVALIDATIONMETHOD: [{
                    type: i0.Input
                }] } });

    var DirectivesModule = /** @class */ (function () {
        function DirectivesModule() {
        }
        return DirectivesModule;
    }());
    DirectivesModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DirectivesModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DirectivesModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DirectivesModule, declarations: [PermissionDirective], imports: [i13.CommonModule], exports: [PermissionDirective] });
    DirectivesModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DirectivesModule, imports: [[i13.CommonModule]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DirectivesModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [PermissionDirective],
                        imports: [i13.CommonModule],
                        exports: [PermissionDirective]
                    }]
            }] });

    var AlertModule = /** @class */ (function () {
        function AlertModule() {
        }
        return AlertModule;
    }());
    AlertModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    AlertModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertModule, declarations: [AlertComponent], imports: [i13.CommonModule], exports: [AlertComponent] });
    AlertModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertModule, imports: [[i13.CommonModule]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i13.CommonModule],
                        declarations: [AlertComponent],
                        exports: [AlertComponent]
                    }]
            }] });

    var CapitalizePipe = /** @class */ (function () {
        function CapitalizePipe() {
        }
        CapitalizePipe.prototype.transform = function (value) {
            if (!value)
                return value;
            return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        };
        return CapitalizePipe;
    }());
    CapitalizePipe.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CapitalizePipe, deps: [], target: i0__namespace.ɵɵFactoryTarget.Pipe });
    CapitalizePipe.ɵpipe = i0__namespace.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CapitalizePipe, name: "capitalize" });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CapitalizePipe, decorators: [{
                type: i0.Pipe,
                args: [{
                        name: 'capitalize'
                    }]
            }] });

    var SharedPipesModule = /** @class */ (function () {
        function SharedPipesModule() {
        }
        return SharedPipesModule;
    }());
    SharedPipesModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SharedPipesModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    SharedPipesModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SharedPipesModule, declarations: [CapitalizePipe], imports: [i13.CommonModule], exports: [CapitalizePipe] });
    SharedPipesModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SharedPipesModule, providers: [CapitalizePipe], imports: [[i13.CommonModule]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SharedPipesModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i13.CommonModule],
                        declarations: [CapitalizePipe],
                        exports: [CapitalizePipe],
                        providers: [CapitalizePipe]
                    }]
            }] });

    var PicsRbacUsersModule = /** @class */ (function () {
        function PicsRbacUsersModule() {
        }
        return PicsRbacUsersModule;
    }());
    PicsRbacUsersModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicsRbacUsersModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    PicsRbacUsersModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicsRbacUsersModule, declarations: [UsersComponent], imports: [i13.CommonModule,
            i2.FormsModule,
            i2.ReactiveFormsModule,
            ngBootstrap.NgbModule,
            tabmenu.TabMenuModule,
            tabview.TabViewModule,
            treeselect.TreeSelectModule,
            i10.CheckboxModule,
            i7.DropdownModule,
            i6.CardModule,
            confirmdialog.ConfirmDialogModule,
            i8.AccordionModule,
            message.MessageModule,
            table.TableModule,
            i12.InputTextModule,
            calendar.CalendarModule,
            editor.EditorModule,
            fieldset.FieldsetModule,
            button.ButtonModule,
            radiobutton.RadioButtonModule,
            inputtextarea.InputTextareaModule,
            inputmask.InputMaskModule,
            steps.StepsModule,
            toast.ToastModule,
            ripple.RippleModule,
            avatar.AvatarModule,
            badge.BadgeModule,
            i9.MultiSelectModule,
            inputswitch.InputSwitchModule,
            progressspinner.ProgressSpinnerModule,
            speeddial.SpeedDialModule,
            orderlist.OrderListModule,
            fileupload.FileUploadModule,
            dialog.DialogModule,
            password.PasswordModule,
            knob.KnobModule,
            sidebar.SidebarModule,
            contextmenu.ContextMenuModule,
            confirmpopup.ConfirmPopupModule,
            DirectivesModule,
            AlertModule,
            SharedPipesModule], exports: [UsersComponent] });
    PicsRbacUsersModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicsRbacUsersModule, imports: [[
                i13.CommonModule,
                i2.FormsModule,
                i2.ReactiveFormsModule,
                ngBootstrap.NgbModule,
                tabmenu.TabMenuModule,
                tabview.TabViewModule,
                treeselect.TreeSelectModule,
                i10.CheckboxModule,
                i7.DropdownModule,
                i6.CardModule,
                confirmdialog.ConfirmDialogModule,
                i8.AccordionModule,
                message.MessageModule,
                table.TableModule,
                i12.InputTextModule,
                calendar.CalendarModule,
                editor.EditorModule,
                fieldset.FieldsetModule,
                button.ButtonModule,
                radiobutton.RadioButtonModule,
                inputtextarea.InputTextareaModule,
                inputmask.InputMaskModule,
                steps.StepsModule,
                toast.ToastModule,
                ripple.RippleModule,
                avatar.AvatarModule,
                badge.BadgeModule,
                i9.MultiSelectModule,
                inputswitch.InputSwitchModule,
                progressspinner.ProgressSpinnerModule,
                speeddial.SpeedDialModule,
                orderlist.OrderListModule,
                fileupload.FileUploadModule,
                dialog.DialogModule,
                password.PasswordModule,
                knob.KnobModule,
                sidebar.SidebarModule,
                contextmenu.ContextMenuModule,
                confirmpopup.ConfirmPopupModule,
                DirectivesModule,
                AlertModule,
                SharedPipesModule,
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicsRbacUsersModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            UsersComponent
                        ],
                        imports: [
                            i13.CommonModule,
                            i2.FormsModule,
                            i2.ReactiveFormsModule,
                            ngBootstrap.NgbModule,
                            tabmenu.TabMenuModule,
                            tabview.TabViewModule,
                            treeselect.TreeSelectModule,
                            i10.CheckboxModule,
                            i7.DropdownModule,
                            i6.CardModule,
                            confirmdialog.ConfirmDialogModule,
                            i8.AccordionModule,
                            message.MessageModule,
                            table.TableModule,
                            i12.InputTextModule,
                            calendar.CalendarModule,
                            editor.EditorModule,
                            fieldset.FieldsetModule,
                            button.ButtonModule,
                            radiobutton.RadioButtonModule,
                            inputtextarea.InputTextareaModule,
                            inputmask.InputMaskModule,
                            steps.StepsModule,
                            toast.ToastModule,
                            ripple.RippleModule,
                            avatar.AvatarModule,
                            badge.BadgeModule,
                            i9.MultiSelectModule,
                            inputswitch.InputSwitchModule,
                            progressspinner.ProgressSpinnerModule,
                            speeddial.SpeedDialModule,
                            orderlist.OrderListModule,
                            fileupload.FileUploadModule,
                            dialog.DialogModule,
                            password.PasswordModule,
                            knob.KnobModule,
                            sidebar.SidebarModule,
                            contextmenu.ContextMenuModule,
                            confirmpopup.ConfirmPopupModule,
                            DirectivesModule,
                            AlertModule,
                            SharedPipesModule,
                        ],
                        exports: [
                            UsersComponent
                        ],
                        schemas: [i0.NO_ERRORS_SCHEMA, i0.CUSTOM_ELEMENTS_SCHEMA]
                    }]
            }] });

    var RbacUsersModule = /** @class */ (function () {
        function RbacUsersModule() {
        }
        return RbacUsersModule;
    }());
    RbacUsersModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacUsersModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    RbacUsersModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacUsersModule, declarations: [RbacUsersComponent], imports: [PicsRbacUsersModule], exports: [RbacUsersComponent] });
    RbacUsersModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacUsersModule, providers: [UserOrgService, http.HttpClient, AlertService, i14.ConfirmationService, PermissionStore, DataStoreService], imports: [[
                PicsRbacUsersModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacUsersModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            RbacUsersComponent
                        ],
                        imports: [
                            PicsRbacUsersModule
                        ],
                        exports: [
                            RbacUsersComponent
                        ],
                        providers: [UserOrgService, http.HttpClient, AlertService, i14.ConfirmationService, PermissionStore, DataStoreService]
                    }]
            }] });

    /*
     * Public API Surface of rbac-users
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.RbacUsersComponent = RbacUsersComponent;
    exports.RbacUsersModule = RbacUsersModule;
    exports.RbacUsersService = RbacUsersService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=pics-core-rbac-users.umd.js.map
