"use strict";
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = exports.HttpClient = exports.ContentType = void 0;
var axios_1 = __importDefault(require("axios"));
var ContentType;
(function (ContentType) {
    ContentType["Json"] = "application/json";
    ContentType["FormData"] = "multipart/form-data";
    ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
})(ContentType = exports.ContentType || (exports.ContentType = {}));
var HttpClient = /** @class */ (function () {
    function HttpClient(_a) {
        if (_a === void 0) { _a = {}; }
        var _this = this;
        var securityWorker = _a.securityWorker, secure = _a.secure, format = _a.format, axiosConfig = __rest(_a, ["securityWorker", "secure", "format"]);
        this.securityData = null;
        this.setSecurityData = function (data) {
            _this.securityData = data;
        };
        this.request = function (_a) { return __awaiter(_this, void 0, void 0, function () {
            var secureParams, _b, requestParams, responseFormat;
            var secure = _a.secure, path = _a.path, type = _a.type, query = _a.query, format = _a.format, body = _a.body, params = __rest(_a, ["secure", "path", "type", "query", "format", "body"]);
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (typeof secure === "boolean" ? secure : this.secure) &&
                            this.securityWorker;
                        if (!_b) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.securityWorker(this.securityData)];
                    case 1:
                        _b = (_c.sent());
                        _c.label = 2;
                    case 2:
                        secureParams = (_b) ||
                            {};
                        requestParams = this.mergeRequestParams(params, secureParams);
                        responseFormat = (format && this.format) || void 0;
                        if (type === ContentType.FormData &&
                            body &&
                            body !== null &&
                            typeof body === "object") {
                            requestParams.headers.common = { Accept: "*/*" };
                            requestParams.headers.post = {};
                            requestParams.headers.put = {};
                            body = this.createFormData(body);
                        }
                        return [2 /*return*/, this.instance.request(__assign(__assign({}, requestParams), { headers: __assign(__assign({}, (type && type !== ContentType.FormData
                                    ? { "Content-Type": type }
                                    : {})), (requestParams.headers || {})), params: query, responseType: responseFormat, data: body, url: path }))];
                }
            });
        }); };
        this.instance = axios_1.default.create(__assign(__assign({}, axiosConfig), { baseURL: axiosConfig.baseURL || "https://api.medusa-commerce.com/admin" }));
        this.secure = secure;
        this.format = format;
        this.securityWorker = securityWorker;
    }
    HttpClient.prototype.mergeRequestParams = function (params1, params2) {
        return __assign(__assign(__assign(__assign({}, this.instance.defaults), params1), (params2 || {})), { 
            // @ts-ignore
            headers: __assign(__assign(__assign({}, (this.instance.defaults.headers || {})), (params1.headers || {})), ((params2 && params2.headers) || {})) });
    };
    HttpClient.prototype.createFormData = function (input) {
        return Object.keys(input || {}).reduce(function (formData, key) {
            var property = input[key];
            formData.append(key, property instanceof Blob
                ? property
                : typeof property === "object" && property !== null
                    ? JSON.stringify(property)
                    : "".concat(property));
            return formData;
        }, new FormData());
    };
    return HttpClient;
}());
exports.HttpClient = HttpClient;
/**
 * @title Medusa Admin API
 * @version 1.0.0
 * @license MIT
 * @baseUrl https://api.medusa-commerce.com/admin
 */
var Api = /** @class */ (function (_super) {
    __extends(Api, _super);
    function Api() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * @description Uploads an array of files to the specific fileservice that is installed in medusa.
         *
         * @tags Uploads
         * @name PostUploads
         * @summary Uploads an array of files
         * @request POST:/
         */
        _this.postUploads = function (data, params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/", method: "POST", body: data, type: ContentType.FormData, format: "json" }, params));
        };
        _this.apps = {
            /**
             * @description Generates a token for an application.
             *
             * @tags Apps
             * @name PostApps
             * @summary Generates a token for an application.
             * @request POST:/apps
             */
            postApps: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/apps", method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Retrieve a list of applications.
             *
             * @tags Apps
             * @name GetApps
             * @summary List applications
             * @request GET:/apps
             */
            getApps: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/apps", method: "GET", format: "json" }, params));
            },
        };
        _this.auth = {
            /**
             * @description Logs a User in and authorizes them to manage Store settings.
             *
             * @tags Auth
             * @name PostAuth
             * @summary Authenticate a User
             * @request POST:/auth
             */
            postAuth: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/auth", method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Gets the currently logged in User.
             *
             * @tags Auth
             * @name GetAuth
             * @summary Get Session
             * @request GET:/auth
             */
            getAuth: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/auth", method: "GET", format: "json" }, params));
            },
        };
        _this.collections = {
            /**
             * @description Updates products associated with a Product Collection
             *
             * @tags Collection
             * @name PostProductsToCollection
             * @summary Updates products associated with a Product Collection
             * @request POST:/collections/{id}/products/batch
             */
            postProductsToCollection: function (id, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/collections/".concat(id, "/products/batch"), method: "POST", body: data, type: ContentType.Json }, params));
            },
            /**
             * @description Removes products associated with a Product Collection
             *
             * @tags Collection
             * @name DeleteProductsFromCollection
             * @summary Removes products associated with a Product Collection
             * @request DELETE:/collections/{id}/products/batch
             */
            deleteProductsFromCollection: function (id, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/collections/".concat(id, "/products/batch"), method: "DELETE", body: data, type: ContentType.Json }, params));
            },
            /**
             * @description Creates a Product Collection.
             *
             * @tags Collection
             * @name PostCollections
             * @summary Create a Product Collection
             * @request POST:/collections
             */
            postCollections: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/collections", method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Retrieve a list of Product Collection.
             *
             * @tags Collection
             * @name GetCollections
             * @summary List Product Collections
             * @request GET:/collections
             */
            getCollections: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/collections", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * @description Deletes a Product Collection.
             *
             * @tags Collection
             * @name DeleteCollectionsCollection
             * @summary Delete a Product Collection
             * @request DELETE:/collections/{id}
             */
            deleteCollectionsCollection: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/collections/".concat(id), method: "DELETE", format: "json" }, params));
            },
            /**
             * @description Retrieves a Product Collection.
             *
             * @tags Collection
             * @name GetCollectionsCollection
             * @summary Retrieve a Product Collection
             * @request GET:/collections/{id}
             */
            getCollectionsCollection: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/collections/".concat(id), method: "GET", format: "json" }, params));
            },
            /**
             * @description Updates a Product Collection.
             *
             * @tags Collection
             * @name PostCollectionsCollection
             * @summary Update a Product Collection
             * @request POST:/collections/{id}
             */
            postCollectionsCollection: function (id, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/collections/".concat(id), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
        };
        _this.customers = {
            /**
             * @description Creates a Customer.
             *
             * @tags Customer
             * @name PostCustomers
             * @summary Create a Customer
             * @request POST:/customers
             */
            postCustomers: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/customers", method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Retrieves a list of Customers.
             *
             * @tags Customer
             * @name GetCustomers
             * @summary List Customers
             * @request GET:/customers
             */
            getCustomers: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/customers", method: "GET", format: "json" }, params));
            },
            /**
             * @description Retrieves a Customer.
             *
             * @tags Customer
             * @name GetCustomersCustomer
             * @summary Retrieve a Customer
             * @request GET:/customers/{id}
             */
            getCustomersCustomer: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/customers/".concat(id), method: "GET", format: "json" }, params));
            },
            /**
             * @description Updates a Customer.
             *
             * @tags Customer
             * @name PostCustomersCustomer
             * @summary Update a Customer
             * @request POST:/customers/{id}
             */
            postCustomersCustomer: function (id, data, query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/customers/".concat(id), method: "POST", query: query, body: data, type: ContentType.Json, format: "json" }, params));
            },
        };
        _this.customerGroups = {
            /**
             * @description Creates a CustomerGroup.
             *
             * @tags CustomerGroup
             * @name PostCustomerGroups
             * @summary Create a CustomerGroup
             * @request POST:/customer-groups
             */
            postCustomerGroups: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/customer-groups", method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Deletes a CustomerGroup.
             *
             * @tags CustomerGroup
             * @name DeleteCustomerGroupsCustomerGroup
             * @summary Delete a CustomerGroup
             * @request DELETE:/customer-groups/{id}
             */
            deleteCustomerGroupsCustomerGroup: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/customer-groups/".concat(id), method: "DELETE", format: "json" }, params));
            },
            /**
             * @description Update a CustomerGroup.
             *
             * @tags CustomerGroup
             * @name PostCustomerGroupsGroup
             * @summary Update a CustomerGroup
             * @request POST:/customer-groups/{id}
             */
            postCustomerGroupsGroup: function (id, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/customer-groups/".concat(id), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
        };
        _this.customerGroup = {
            /**
             * @description Retrieves a Customer Group.
             *
             * @tags CustomerGroup
             * @name GetCustomerGroupsGroup
             * @summary Retrieve a CustomerGroup
             * @request GET:/customer-group/{id}
             */
            getCustomerGroupsGroup: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/customer-group/".concat(id), method: "GET", format: "json" }, params));
            },
        };
        _this.discounts = {
            /**
             * @description Adds a Region to the list of Regions that a Discount can be used in.
             *
             * @tags Discount
             * @name PostDiscountsDiscountRegionsRegion
             * @summary Adds Region availability
             * @request POST:/discounts/{id}/regions/{region_id}
             */
            postDiscountsDiscountRegionsRegion: function (id, regionId, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/discounts/".concat(id, "/regions/").concat(regionId), method: "POST", format: "json" }, params));
            },
            /**
             * @description Removes a Region from the list of Regions that a Discount can be used in.
             *
             * @tags Discount
             * @name DeleteDiscountsDiscountRegionsRegion
             * @summary Remove Region availability
             * @request DELETE:/discounts/{id}/regions/{region_id}
             */
            deleteDiscountsDiscountRegionsRegion: function (id, regionId, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/discounts/".concat(id, "/regions/").concat(regionId), method: "DELETE", format: "json" }, params));
            },
            /**
             * @description Adds a Product to the list of Products that a Discount can be used for.
             *
             * @tags Discount
             * @name PostDiscountsDiscountProductsProduct
             * @summary Adds Product availability
             * @request POST:/discounts/{id}/products/{product_id}
             */
            postDiscountsDiscountProductsProduct: function (id, productId, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/discounts/".concat(id, "/products/").concat(productId), method: "POST", format: "json" }, params));
            },
            /**
             * @description Removes a Product from the list of Products that a Discount can be used for.
             *
             * @tags Discount
             * @name DeleteDiscountsDiscountProductsProduct
             * @summary Remove Product availability
             * @request DELETE:/discounts/{id}/products/{product_id}
             */
            deleteDiscountsDiscountProductsProduct: function (id, productId, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/discounts/".concat(id, "/products/").concat(productId), method: "DELETE", format: "json" }, params));
            },
            /**
             * @description Creates a Discount with a given set of rules that define how the Discount behaves.
             *
             * @tags Discount
             * @name PostDiscounts
             * @summary Creates a Discount
             * @request POST:/discounts
             */
            postDiscounts: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/discounts", method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Retrieves a list of Discounts
             *
             * @tags Discount
             * @name GetDiscounts
             * @summary List Discounts
             * @request GET:/discounts
             */
            getDiscounts: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/discounts", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * @description Creates a unique code that can map to a parent Discount. This is useful if you want to automatically generate codes with the same behaviour.
             *
             * @tags Discount
             * @name PostDiscountsDiscountDynamicCodes
             * @summary Create a dynamic Discount code
             * @request POST:/discounts/{id}/dynamic-codes
             */
            postDiscountsDiscountDynamicCodes: function (id, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/discounts/".concat(id, "/dynamic-codes"), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Deletes a Discount.
             *
             * @tags Discount
             * @name DeleteDiscountsDiscount
             * @summary Delete a Discount
             * @request DELETE:/discounts/{id}
             */
            deleteDiscountsDiscount: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/discounts/".concat(id), method: "DELETE", format: "json" }, params));
            },
            /**
             * @description Retrieves a Discount
             *
             * @tags Discount
             * @name GetDiscountsDiscount
             * @summary Retrieve a Discount
             * @request GET:/discounts/{id}
             */
            getDiscountsDiscount: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/discounts/".concat(id), method: "GET", format: "json" }, params));
            },
            /**
             * @description Updates a Discount with a given set of rules that define how the Discount behaves.
             *
             * @tags Discount
             * @name PostDiscountsDiscount
             * @summary Update a Discount
             * @request POST:/discounts/{id}
             */
            postDiscountsDiscount: function (id, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/discounts/".concat(id), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Deletes a dynamic code from a Discount.
             *
             * @tags Discount
             * @name DeleteDiscountsDiscountDynamicCodesCode
             * @summary Delete a dynamic code
             * @request DELETE:/discounts/{id}/dynamic-codes/{code}
             */
            deleteDiscountsDiscountDynamicCodesCode: function (id, code, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/discounts/".concat(id, "/dynamic-codes/").concat(code), method: "DELETE", format: "json" }, params));
            },
            /**
             * @description Retrieves a Discount by its discount code
             *
             * @tags Discount
             * @name GetDiscountsDiscountCode
             * @summary Retrieve a Discount by code
             * @request GET:/discounts/code/{code}
             */
            getDiscountsDiscountCode: function (code, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/discounts/code/".concat(code), method: "GET", format: "json" }, params));
            },
        };
        _this.draftOrders = {
            /**
             * @description Creates a Draft Order
             *
             * @tags Draft Order
             * @name PostDraftOrders
             * @summary Create a Draft Order
             * @request POST:/draft-orders
             */
            postDraftOrders: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/draft-orders", method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Retrieves an list of Draft Orders
             *
             * @tags Draft Order
             * @name GetDraftOrders
             * @summary List Draft Orders
             * @request GET:/draft-orders
             */
            getDraftOrders: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/draft-orders", method: "GET", format: "json" }, params));
            },
            /**
             * @description Creates a Line Item for the Draft Order
             *
             * @tags Draft Order
             * @name PostDraftOrdersDraftOrderLineItems
             * @summary Create a Line Item for Draft Order
             * @request POST:/draft-orders/{id}/line-items
             */
            postDraftOrdersDraftOrderLineItems: function (id, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/draft-orders/".concat(id, "/line-items"), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Deletes a Draft Order
             *
             * @tags Draft Order
             * @name DeleteDraftOrdersDraftOrder
             * @summary Delete a Draft Order
             * @request DELETE:/draft-orders/{id}
             */
            deleteDraftOrdersDraftOrder: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/draft-orders/".concat(id), method: "DELETE", format: "json" }, params));
            },
            /**
             * @description Retrieves a Draft Order.
             *
             * @tags Draft Order
             * @name GetDraftOrdersDraftOrder
             * @summary Retrieve a Draft Order
             * @request GET:/draft-orders/{id}
             */
            getDraftOrdersDraftOrder: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/draft-orders/".concat(id), method: "GET", format: "json" }, params));
            },
            /**
             * @description Removes a Line Item from a Draft Order.
             *
             * @tags Draft Order
             * @name DeleteDraftOrdersDraftOrderLineItemsItem
             * @summary Delete a Line Item
             * @request DELETE:/draft-orders/{id}/line-items/{line_id}
             */
            deleteDraftOrdersDraftOrderLineItemsItem: function (id, lineId, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/draft-orders/".concat(id, "/line-items/").concat(lineId), method: "DELETE", format: "json" }, params));
            },
            /**
             * @description Updates a Line Item for a Draft Order
             *
             * @tags Draft Order
             * @name PostDraftOrdersDraftOrderLineItemsItem
             * @summary Update a Line Item for a Draft Order
             * @request POST:/draft-orders/{id}/line-items/{line_id}
             */
            postDraftOrdersDraftOrderLineItemsItem: function (id, lineId, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/draft-orders/".concat(id, "/line-items/").concat(lineId), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Registers a payment for a Draft Order.
             *
             * @tags Draft Order
             * @name PostDraftOrdersDraftOrderRegisterPayment
             * @summary Registers a payment for a Draft Order
             * @request POST:/draft-orders/{id}/register-payment
             */
            postDraftOrdersDraftOrderRegisterPayment: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/draft-orders/".concat(id, "/register-payment"), method: "POST", format: "json" }, params));
            },
        };
        _this.admin = {
            /**
             * @description Updates a Draft Order.
             *
             * @tags Draft Order
             * @name PostDraftOrdersDraftOrder
             * @summary Update a Draft Order"
             * @request POST:/admin/draft-orders/{id}
             */
            postDraftOrdersDraftOrder: function (id, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/admin/draft-orders/".concat(id), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
        };
        _this.giftCards = {
            /**
             * @description Creates a Gift Card that can redeemed by its unique code. The Gift Card is only valid within 1 region.
             *
             * @tags Gift Card
             * @name PostGiftCards
             * @summary Create a Gift Card
             * @request POST:/gift-cards
             */
            postGiftCards: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/gift-cards", method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Retrieves a list of Gift Cards.
             *
             * @tags Gift Card
             * @name GetGiftCards
             * @summary List Gift Cards
             * @request GET:/gift-cards
             */
            getGiftCards: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/gift-cards", method: "GET", format: "json" }, params));
            },
            /**
             * @description Deletes a Gift Card
             *
             * @tags Gift Card
             * @name DeleteGiftCardsGiftCard
             * @summary Delete a Gift Card
             * @request DELETE:/gift-cards/{id}
             */
            deleteGiftCardsGiftCard: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/gift-cards/".concat(id), method: "DELETE", format: "json" }, params));
            },
            /**
             * @description Retrieves a Gift Card.
             *
             * @tags Gift Card
             * @name GetGiftCardsGiftCard
             * @summary Retrieve a Gift Card
             * @request GET:/gift-cards/{id}
             */
            getGiftCardsGiftCard: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/gift-cards/".concat(id), method: "GET", format: "json" }, params));
            },
            /**
             * @description Creates a Gift Card that can redeemed by its unique code. The Gift Card is only valid within 1 region.
             *
             * @tags Gift Card
             * @name PostGiftCardsGiftCard
             * @summary Create a Gift Card
             * @request POST:/gift-cards/{id}
             */
            postGiftCardsGiftCard: function (id, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/gift-cards/".concat(id), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
        };
        _this.invites = {
            /**
             * @description Accepts an Invite and creates a corresponding user
             *
             * @tags Invites
             * @name PostInvitesInviteAccept
             * @summary Accept an Invite
             * @request POST:/invites/accept
             */
            postInvitesInviteAccept: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/invites/accept", method: "POST", body: data, type: ContentType.Json }, params));
            },
            /**
             * @description Creates an Invite and triggers an 'invite' created event
             *
             * @tags Invites
             * @name PostInvites
             * @summary Create an Invite
             * @request POST:/invites
             */
            postInvites: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/invites", method: "POST", body: data, type: ContentType.Json }, params));
            },
            /**
             * @description Lists all Invites
             *
             * @tags Invites
             * @name GetInvites
             * @summary Lists all Invites
             * @request GET:/invites
             */
            getInvites: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/invites", method: "GET", format: "json" }, params));
            },
            /**
             * @description Creates an Invite and triggers an 'invite' created event
             *
             * @tags Invites
             * @name DeleteInvitesInvite
             * @summary Create an Invite
             * @request DELETE:/invites/{invite_id}
             */
            deleteInvitesInvite: function (inviteId, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/invites/".concat(inviteId), method: "DELETE" }, params));
            },
            /**
             * @description Resends an Invite by triggering the 'invite' created event again
             *
             * @tags Invites
             * @name PostInvitesInviteResend
             * @summary Resend an Invite
             * @request POST:/invites/{invite_id}/resend
             */
            postInvitesInviteResend: function (inviteId, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/invites/".concat(inviteId, "/resend"), method: "POST" }, params));
            },
        };
        _this.notes = {
            /**
             * @description Creates a Note which can be associated with any resource as required.
             *
             * @tags Note
             * @name PostNotes
             * @summary Creates a Note
             * @request POST:/notes
             */
            postNotes: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/notes", method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Retrieves a list of notes
             *
             * @tags Note
             * @name GetNotes
             * @summary List Notes
             * @request GET:/notes
             */
            getNotes: function (limit, offset, resourceId, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/notes", method: "GET", format: "json" }, params));
            },
            /**
             * @description Deletes a Note.
             *
             * @tags Note
             * @name DeleteNotesNote
             * @summary Deletes a Note
             * @request DELETE:/notes/{id}
             */
            deleteNotesNote: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/notes/".concat(id), method: "DELETE", format: "json" }, params));
            },
            /**
             * @description Retrieves a single note using its id
             *
             * @tags Note
             * @name GetNotesNote
             * @summary Get Note
             * @request GET:/notes/{id}
             */
            getNotesNote: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/notes/".concat(id), method: "GET", format: "json" }, params));
            },
            /**
             * @description Updates a Note associated with some resource
             *
             * @tags Note
             * @name PostNotesNote
             * @summary Updates a Note
             * @request POST:/notes/{id}
             */
            postNotesNote: function (id, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/notes/".concat(id), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
        };
        _this.notifications = {
            /**
             * @description Retrieves a list of Notifications.
             *
             * @tags Notification
             * @name GetNotifications
             * @summary List Notifications
             * @request GET:/notifications
             */
            getNotifications: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/notifications", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * @description Resends a previously sent notifications, with the same data but optionally to a different address
             *
             * @tags Notification
             * @name PostNotificationsNotificationResend
             * @summary Resend Notification
             * @request POST:/notifications/{id}/resend
             */
            postNotificationsNotificationResend: function (id, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/notifications/".concat(id, "/resend"), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
        };
        _this.orders = {
            /**
             * @description Adds a Shipping Method to an Order. If another Shipping Method exists with the same Shipping Profile, the previous Shipping Method will be replaced.
             *
             * @tags Order
             * @name PostOrdersOrderShippingMethods
             * @summary Add a Shipping Method
             * @request POST:/orders/{id}/shipping-methods
             */
            postOrdersOrderShippingMethods: function (id, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/orders/".concat(id, "/shipping-methods"), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Archives the order with the given id.
             *
             * @tags Order
             * @name PostOrdersOrderArchive
             * @summary Archive order
             * @request POST:/orders/{id}/archive
             */
            postOrdersOrderArchive: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/orders/".concat(id, "/archive"), method: "POST", format: "json" }, params));
            },
            /**
             * @description Cancels a Claim
             *
             * @tags Claim
             * @name PostOrdersClaimCancel
             * @summary Cancels a Claim
             * @request POST:/orders/{id}/claims/{claim_id}/cancel
             */
            postOrdersClaimCancel: function (id, claimId, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/orders/".concat(id, "/claims/").concat(claimId, "/cancel"), method: "POST", format: "json" }, params));
            },
            /**
             * @description Registers a Fulfillment as canceled.
             *
             * @tags Fulfillment
             * @name PostOrdersClaimFulfillmentsCancel
             * @summary Cancels a fulfilmment related to a Claim
             * @request POST:/orders/{id}/claims/{claim_id}/fulfillments/{fulfillment_id}/cancel
             */
            postOrdersClaimFulfillmentsCancel: function (id, claimId, fulfillmentId, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/orders/".concat(id, "/claims/").concat(claimId, "/fulfillments/").concat(fulfillmentId, "/cancel"), method: "POST", format: "json" }, params));
            },
            /**
             * @description Registers a Fulfillment as canceled.
             *
             * @tags Fulfillment
             * @name PostOrdersSwapFulfillmentsCancel
             * @summary Cancels a fulfilmment related to a Swap
             * @request POST:/orders/{id}/swaps/{swap_id}/fulfillments/{fulfillment_id}/cancel
             */
            postOrdersSwapFulfillmentsCancel: function (id, swapId, fulfillmentId, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/orders/".concat(id, "/swaps/").concat(swapId, "/fulfillments/").concat(fulfillmentId, "/cancel"), method: "POST", format: "json" }, params));
            },
            /**
             * @description Registers a Fulfillment as canceled.
             *
             * @tags Fulfillment
             * @name PostOrdersOrderFulfillmentsCancel
             * @summary Cancels a fulfilmment
             * @request POST:/orders/{id}/fulfillments/{fulfillment_id}/cancel
             */
            postOrdersOrderFulfillmentsCancel: function (id, fulfillmentId, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/orders/".concat(id, "/fulfillments/").concat(fulfillmentId, "/cancel"), method: "POST", format: "json" }, params));
            },
            /**
             * @description Registers an Order as canceled. This triggers a flow that will cancel any created Fulfillments and Payments, may fail if the Payment or Fulfillment Provider is unable to cancel the Payment/Fulfillment.
             *
             * @tags Order
             * @name PostOrdersOrderCancel
             * @summary Cancel an Order
             * @request POST:/orders/{id}/cancel
             */
            postOrdersOrderCancel: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/orders/".concat(id, "/cancel"), method: "POST", format: "json" }, params));
            },
            /**
             * @description Cancels a Swap
             *
             * @tags Swap
             * @name PostOrdersSwapCancel
             * @summary Cancels a Swap
             * @request POST:/orders/{id}/swaps/{swap_id}/cancel
             */
            postOrdersSwapCancel: function (id, swapId, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/orders/".concat(id, "/swaps/").concat(swapId, "/cancel"), method: "POST", format: "json" }, params));
            },
            /**
             * @description Captures all the Payments associated with an Order.
             *
             * @tags Order
             * @name PostOrdersOrderCapture
             * @summary Capture an Order
             * @request POST:/orders/{id}/capture
             */
            postOrdersOrderCapture: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/orders/".concat(id, "/capture"), method: "POST", format: "json" }, params));
            },
            /**
             * @description Completes an Order
             *
             * @tags Order
             * @name PostOrdersOrderComplete
             * @summary Complete an Order
             * @request POST:/orders/{id}/complete
             */
            postOrdersOrderComplete: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/orders/".concat(id, "/complete"), method: "POST", format: "json" }, params));
            },
            /**
             * @description Registers a Claim Fulfillment as shipped.
             *
             * @tags Order
             * @name PostOrdersOrderClaimsClaimShipments
             * @summary Create Claim Shipment
             * @request POST:/orders/{id}/claims/{claim_id}/shipments
             */
            postOrdersOrderClaimsClaimShipments: function (id, claimId, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/orders/".concat(id, "/claims/").concat(claimId, "/shipments"), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Creates a Fulfillment of an Order - will notify Fulfillment Providers to prepare a shipment.
             *
             * @tags Order
             * @name PostOrdersOrderFulfillments
             * @summary Create a Fulfillment
             * @request POST:/orders/{id}/fulfillments
             */
            postOrdersOrderFulfillments: function (id, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/orders/".concat(id, "/fulfillments"), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Creates and order
             *
             * @tags Order
             * @name PostOrders
             * @summary Create an order
             * @request POST:/orders
             */
            postOrders: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/orders", method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Retrieves a list of Orders
             *
             * @tags Order
             * @name GetOrders
             * @summary List Orders
             * @request GET:/orders
             */
            getOrders: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/orders", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * @description Registers a Fulfillment as shipped.
             *
             * @tags Order
             * @name PostOrdersOrderShipment
             * @summary Create a Shipment
             * @request POST:/orders/{id}/shipment
             */
            postOrdersOrderShipment: function (id, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/orders/".concat(id, "/shipment"), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Registers a Swap Fulfillment as shipped.
             *
             * @tags Order
             * @name PostOrdersOrderSwapsSwapShipments
             * @summary Create Swap Shipment
             * @request POST:/orders/{id}/swaps/{swap_id}/shipments
             */
            postOrdersOrderSwapsSwapShipments: function (id, swapId, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/orders/".concat(id, "/swaps/").concat(swapId, "/shipments"), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Creates a Fulfillment for a Claim.
             *
             * @tags Order
             * @name PostOrdersOrderClaimsClaimFulfillments
             * @summary Create a Claim Fulfillment
             * @request POST:/orders/{id}/claims/{claim_id}/fulfillments
             */
            postOrdersOrderClaimsClaimFulfillments: function (id, claimId, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/orders/".concat(id, "/claims/").concat(claimId, "/fulfillments"), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Creates a Fulfillment for a Swap.
             *
             * @tags Order
             * @name PostOrdersOrderSwapsSwapFulfillments
             * @summary Create a Swap Fulfillment
             * @request POST:/orders/{id}/swaps/{swap_id}/fulfillments
             */
            postOrdersOrderSwapsSwapFulfillments: function (id, swapId, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/orders/".concat(id, "/swaps/").concat(swapId, "/fulfillments"), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Retrieves an Order
             *
             * @tags Order
             * @name GetOrdersOrder
             * @summary Retrieve an Order
             * @request GET:/orders/{id}
             */
            getOrdersOrder: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/orders/".concat(id), method: "GET", format: "json" }, params));
            },
            /**
             * @description Updates and order
             *
             * @tags Order
             * @name PostOrdersOrder
             * @summary Update an order
             * @request POST:/orders/{id}
             */
            postOrdersOrder: function (id, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/orders/".concat(id), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description When there are differences between the returned and shipped Products in a Swap, the difference must be processed. Either a Refund will be issued or a Payment will be captured.
             *
             * @tags Order
             * @name PostOrdersOrderSwapsSwapProcessPayment
             * @summary Process a Swap difference
             * @request POST:/orders/{id}/swaps/{swap_id}/process-payment
             */
            postOrdersOrderSwapsSwapProcessPayment: function (id, swapId, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/orders/".concat(id, "/swaps/").concat(swapId, "/process-payment"), method: "POST", format: "json" }, params));
            },
            /**
             * @description Issues a Refund.
             *
             * @tags Order
             * @name PostOrdersOrderRefunds
             * @summary Create a Refund
             * @request POST:/orders/{id}/refunds
             */
            postOrdersOrderRefunds: function (id, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/orders/".concat(id, "/refunds"), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Requests a Return. If applicable a return label will be created and other plugins notified.
             *
             * @tags Order
             * @name PostOrdersOrderReturns
             * @summary Request a Return
             * @request POST:/orders/{id}/returns
             */
            postOrdersOrderReturns: function (id, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/orders/".concat(id, "/returns"), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
        };
        _this.order = {
            /**
             * @description Creates a Claim.
             *
             * @tags Order
             * @name PostOrdersOrderClaims
             * @summary Create a Claim
             * @request POST:/order/{id}/claims
             */
            postOrdersOrderClaims: function (id, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/order/".concat(id, "/claims"), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Creates a Swap. Swaps are used to handle Return of previously purchased goods and Fulfillment of replacements simultaneously.
             *
             * @tags Order
             * @name PostOrdersOrderSwaps
             * @summary Create a Swap
             * @request POST:/order/{id}/swaps
             */
            postOrdersOrderSwaps: function (id, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/order/".concat(id, "/swaps"), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Deletes a metadata key.
             *
             * @tags Order
             * @name DeleteOrdersOrderMetadataKey
             * @summary Delete Metadata
             * @request DELETE:/order/{id}/metadata/{key}
             */
            deleteOrdersOrderMetadataKey: function (id, key, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/order/".concat(id, "/metadata/").concat(key), method: "DELETE", format: "json" }, params));
            },
            /**
             * @description Updates a Claim.
             *
             * @tags Order
             * @name PostOrdersOrderClaimsClaim
             * @summary Update a Claim
             * @request POST:/order/{id}/claims/{claim_id}
             */
            postOrdersOrderClaimsClaim: function (id, claimId, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/order/".concat(id, "/claims/").concat(claimId), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
        };
        _this.productTags = {
            /**
             * @description Retrieve a list of Product Tags.
             *
             * @tags Product Tag
             * @name GetProductTags
             * @summary List Product Tags
             * @request GET:/product-tags
             */
            getProductTags: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/product-tags", method: "GET", query: query, format: "json" }, params));
            },
        };
        _this.productTypes = {
            /**
             * @description Retrieve a list of Product Types.
             *
             * @tags Product Tag
             * @name GetProductTypes
             * @summary List Product Types
             * @request GET:/product-types
             */
            getProductTypes: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/product-types", method: "GET", query: query, format: "json" }, params));
            },
        };
        _this.products = {
            /**
             * @description Adds a Product Option to a Product
             *
             * @tags Product
             * @name PostProductsProductOptions
             * @summary Add an Option
             * @request POST:/products/{id}/options
             */
            postProductsProductOptions: function (id, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/products/".concat(id, "/options"), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Creates a Product
             *
             * @tags Product
             * @name PostProducts
             * @summary Create a Product
             * @request POST:/products
             */
            postProducts: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/products", method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Retrieves a list of Product
             *
             * @tags Product
             * @name GetProducts
             * @summary List Product
             * @request GET:/products
             */
            getProducts: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/products", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * @description Creates a Product Variant. Each Product Variant must have a unique combination of Product Option Values.
             *
             * @tags Product
             * @name PostProductsProductVariants
             * @summary Create a Product Variant
             * @request POST:/products/{id}/variants
             */
            postProductsProductVariants: function (id, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/products/".concat(id, "/variants"), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Retrieves a list of the Product Variants associated with a Product.
             *
             * @tags Product
             * @name GetProductsProductVariants
             * @summary List a Product's Product Variants
             * @request GET:/products/{id}/variants
             */
            getProductsProductVariants: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/products/".concat(id, "/variants"), method: "GET", format: "json" }, params));
            },
            /**
             * @description Deletes a Product Option. Before a Product Option can be deleted all Option Values for the Product Option must be the same. You may, for example, have to delete some of your variants prior to deleting the Product Option
             *
             * @tags Product
             * @name DeleteProductsProductOptionsOption
             * @summary Delete a Product Option
             * @request DELETE:/products/{id}/options/{option_id}
             */
            deleteProductsProductOptionsOption: function (id, optionId, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/products/".concat(id, "/options/").concat(optionId), method: "DELETE", format: "json" }, params));
            },
            /**
             * @description Updates a Product Option
             *
             * @tags Product
             * @name PostProductsProductOptionsOption
             * @summary Update a Product Option.
             * @request POST:/products/{id}/options/{option_id}
             */
            postProductsProductOptionsOption: function (id, optionId, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/products/".concat(id, "/options/").concat(optionId), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Deletes a Product and it's associated Product Variants.
             *
             * @tags Product
             * @name DeleteProductsProduct
             * @summary Delete a Product
             * @request DELETE:/products/{id}
             */
            deleteProductsProduct: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/products/".concat(id), method: "DELETE", format: "json" }, params));
            },
            /**
             * @description Retrieves a Product.
             *
             * @tags Product
             * @name GetProductsProduct
             * @summary Retrieve a Product
             * @request GET:/products/{id}
             */
            getProductsProduct: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/products/".concat(id), method: "GET", format: "json" }, params));
            },
            /**
             * @description Updates a Product
             *
             * @tags Product
             * @name PostProductsProduct
             * @summary Update a Product
             * @request POST:/products/{id}
             */
            postProductsProduct: function (id, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/products/".concat(id), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Deletes a Product Variant.
             *
             * @tags Product
             * @name DeleteProductsProductVariantsVariant
             * @summary Delete a Product Variant
             * @request DELETE:/products/{id}/variants/{variant_id}
             */
            deleteProductsProductVariantsVariant: function (id, variantId, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/products/".concat(id, "/variants/").concat(variantId), method: "DELETE", format: "json" }, params));
            },
            /**
             * @description Update a Product Variant.
             *
             * @tags Product
             * @name PostProductsProductVariantsVariant
             * @summary Update a Product Variant
             * @request POST:/products/{id}/variants/{variant_id}
             */
            postProductsProductVariantsVariant: function (id, variantId, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/products/".concat(id, "/variants/").concat(variantId), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Retrieves a list of Product Types.
             *
             * @tags Product
             * @name GetProductsTypes
             * @summary List Product Types
             * @request GET:/products/types
             */
            getProductsTypes: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/products/types", method: "GET", format: "json" }, params));
            },
            /**
             * @description Set metadata key/value pair for Product
             *
             * @tags Product
             * @name PostProductsProductMetadata
             * @summary Set Product metadata
             * @request POST:/products/{id}/metadata
             */
            postProductsProductMetadata: function (id, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/products/".concat(id, "/metadata"), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
        };
        _this.regions = {
            /**
             * @description Adds a Country to the list of Countries in a Region
             *
             * @tags Region
             * @name PostRegionsRegionCountries
             * @summary Add Country
             * @request POST:/regions/{id}/countries
             */
            postRegionsRegionCountries: function (id, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/regions/".concat(id, "/countries"), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Adds a Fulfillment Provider to a Region
             *
             * @tags Region
             * @name PostRegionsRegionFulfillmentProviders
             * @summary Add Fulfillment Provider
             * @request POST:/regions/{id}/fulfillment-providers
             */
            postRegionsRegionFulfillmentProviders: function (id, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/regions/".concat(id, "/fulfillment-providers"), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Adds a Payment Provider to a Region
             *
             * @tags Region
             * @name PostRegionsRegionPaymentProviders
             * @summary Add Payment Provider
             * @request POST:/regions/{id}/payment-providers
             */
            postRegionsRegionPaymentProviders: function (id, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/regions/".concat(id, "/payment-providers"), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Creates a Region
             *
             * @tags Region
             * @name PostRegions
             * @summary Create a Region
             * @request POST:/regions
             */
            postRegions: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/regions", method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Retrieves a list of Regions.
             *
             * @tags Region
             * @name GetRegions
             * @summary List Regions
             * @request GET:/regions
             */
            getRegions: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/regions", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * @description Deletes a metadata key.
             *
             * @tags Region
             * @name DeleteRegionsRegionMetadataKey
             * @summary Delete Metadata
             * @request DELETE:/regions/{id}/metadata/{key}
             */
            deleteRegionsRegionMetadataKey: function (id, key, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/regions/".concat(id, "/metadata/").concat(key), method: "DELETE", format: "json" }, params));
            },
            /**
             * @description Deletes a Region.
             *
             * @tags Region
             * @name DeleteRegionsRegion
             * @summary Delete a Region
             * @request DELETE:/regions/{id}
             */
            deleteRegionsRegion: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/regions/".concat(id), method: "DELETE", format: "json" }, params));
            },
            /**
             * @description Retrieves a Region.
             *
             * @tags Region
             * @name GetRegionsRegion
             * @summary Retrieve a Region
             * @request GET:/regions/{id}
             */
            getRegionsRegion: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/regions/".concat(id), method: "GET", format: "json" }, params));
            },
            /**
             * @description Updates a Region
             *
             * @tags Region
             * @name PostRegionsRegion
             * @summary Update a Region
             * @request POST:/regions/{id}
             */
            postRegionsRegion: function (id, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/regions/".concat(id), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Gathers all the fulfillment options available to in the Region.
             *
             * @tags Region
             * @name GetRegionsRegionFulfillmentOptions
             * @summary List Fulfillment Options available in the Region
             * @request GET:/regions/{id}/fulfillment-options
             */
            getRegionsRegionFulfillmentOptions: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/regions/".concat(id, "/fulfillment-options"), method: "GET", format: "json" }, params));
            },
            /**
             * @description Removes a Country from the list of Countries in a Region
             *
             * @tags Region
             * @name PostRegionsRegionCountriesCountry
             * @summary Remove Country
             * @request DELETE:/regions/{id}/countries/{country_code}
             */
            postRegionsRegionCountriesCountry: function (id, countryCode, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/regions/".concat(id, "/countries/").concat(countryCode), method: "DELETE", format: "json" }, params));
            },
            /**
             * @description Removes a Fulfillment Provider.
             *
             * @tags Region
             * @name PostRegionsRegionFulfillmentProvidersProvider
             * @summary Remove Fulfillment Provider
             * @request DELETE:/regions/{id}/fulfillment-providers/{provider_id}
             */
            postRegionsRegionFulfillmentProvidersProvider: function (id, providerId, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/regions/".concat(id, "/fulfillment-providers/").concat(providerId), method: "DELETE", format: "json" }, params));
            },
            /**
             * @description Removes a Payment Provider.
             *
             * @tags Region
             * @name PostRegionsRegionPaymentProvidersProvider
             * @summary Remove Payment Provider
             * @request DELETE:/regions/{id}/payment-providers/{provider_id}
             */
            postRegionsRegionPaymentProvidersProvider: function (regionId, providerId, id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/regions/".concat(id, "/payment-providers/").concat(providerId), method: "DELETE", format: "json" }, params));
            },
            /**
             * @description Sets the metadata of a Region
             *
             * @tags Region
             * @name PostRegionsRegionMetadata
             * @summary Set the metadata of a Region
             * @request POST:/regions/{id}/metadata
             */
            postRegionsRegionMetadata: function (id, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/regions/".concat(id, "/metadata"), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
        };
        _this.returnReasons = {
            /**
             * @description Creates a Return Reason
             *
             * @tags Return Reason
             * @name PostReturnReasons
             * @summary Create a Return Reason
             * @request POST:/return-reasons
             */
            postReturnReasons: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/return-reasons", method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Retrieves a list of Return Reasons.
             *
             * @tags Return Reason
             * @name GetReturnReasons
             * @summary List Return Reasons
             * @request GET:/return-reasons
             */
            getReturnReasons: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/return-reasons", method: "GET", format: "json" }, params));
            },
            /**
             * @description Deletes a return reason.
             *
             * @tags Return Reason
             * @name DeleteReturnReason
             * @summary Delete a return reason
             * @request DELETE:/return-reasons/{id}
             */
            deleteReturnReason: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/return-reasons/".concat(id), method: "DELETE", format: "json" }, params));
            },
            /**
             * @description Retrieves a Return Reason.
             *
             * @tags Return Reason
             * @name GetReturnReasonsReason
             * @summary Retrieve a Return Reason
             * @request GET:/return-reasons/{id}
             */
            getReturnReasonsReason: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/return-reasons/".concat(id), method: "GET", format: "json" }, params));
            },
            /**
             * @description Updates a Return Reason
             *
             * @tags Return Reason
             * @name PostReturnReasonsReason
             * @summary Update a Return Reason
             * @request POST:/return-reasons/{id}
             */
            postReturnReasonsReason: function (id, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/return-reasons/".concat(id), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
        };
        _this.returns = {
            /**
             * @description Registers a Return as canceled.
             *
             * @tags Return
             * @name PostReturnsReturnCancel
             * @summary Cancel a Return
             * @request POST:/returns/{id}/cancel
             */
            postReturnsReturnCancel: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/returns/".concat(id, "/cancel"), method: "POST", format: "json" }, params));
            },
            /**
             * @description Retrieves a list of Returns
             *
             * @tags Return
             * @name GetReturns
             * @summary List Returns
             * @request GET:/returns
             */
            getReturns: function (limit, offset, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/returns", method: "GET", format: "json" }, params));
            },
            /**
             * @description Registers a Return as received. Updates statuses on Orders and Swaps accordingly.
             *
             * @tags Return
             * @name PostReturnsReturnReceive
             * @summary Receive a Return
             * @request POST:/returns/{id}/receive
             */
            postReturnsReturnReceive: function (id, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/returns/".concat(id, "/receive"), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
        };
        _this.shippingOptions = {
            /**
             * @description Creates a Shipping Option
             *
             * @tags Shipping Option
             * @name PostShippingOptions
             * @summary Create Shipping Option
             * @request POST:/shipping-options
             */
            postShippingOptions: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/shipping-options", method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Retrieves a list of Shipping Options.
             *
             * @tags Shipping Option
             * @name GetShippingOptions
             * @summary List Shipping Options
             * @request GET:/shipping-options
             */
            getShippingOptions: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/shipping-options", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * @description Deletes a Shipping Option.
             *
             * @tags Shipping Option
             * @name DeleteShippingOptionsOption
             * @summary Delete a Shipping Option
             * @request DELETE:/shipping-options/{id}
             */
            deleteShippingOptionsOption: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/shipping-options/".concat(id), method: "DELETE", format: "json" }, params));
            },
            /**
             * @description Retrieves a Shipping Option.
             *
             * @tags Shipping Option
             * @name GetShippingOptionsOption
             * @summary Retrieve a Shipping Option
             * @request GET:/shipping-options/{id}
             */
            getShippingOptionsOption: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/shipping-options/".concat(id), method: "GET", format: "json" }, params));
            },
            /**
             * @description Updates a Shipping Option
             *
             * @tags Shipping Option
             * @name PostShippingOptionsOption
             * @summary Update Shipping Option
             * @request POST:/shipping-options/{id}
             */
            postShippingOptionsOption: function (id, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/shipping-options/".concat(id), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
        };
        _this.shippingProfiles = {
            /**
             * @description Creates a Shipping Profile
             *
             * @tags Shipping Profile
             * @name PostShippingProfiles
             * @summary Create a Shipping Profile
             * @request POST:/shipping-profiles
             */
            postShippingProfiles: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/shipping-profiles", method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Retrieves a list of Shipping Profile.
             *
             * @tags Shipping Profile
             * @name GetShippingProfiles
             * @summary List Shipping Profiles
             * @request GET:/shipping-profiles
             */
            getShippingProfiles: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/shipping-profiles", method: "GET", format: "json" }, params));
            },
            /**
             * @description Deletes a Shipping Profile.
             *
             * @tags Shipping Profile
             * @name DeleteShippingProfilesProfile
             * @summary Delete a Shipping Profile
             * @request DELETE:/shipping-profiles/{id}
             */
            deleteShippingProfilesProfile: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/shipping-profiles/".concat(id), method: "DELETE", format: "json" }, params));
            },
            /**
             * @description Retrieves a Shipping Profile.
             *
             * @tags Shipping Profile
             * @name GetShippingProfilesProfile
             * @summary Retrieve a Shipping Profile
             * @request GET:/shipping-profiles/{id}
             */
            getShippingProfilesProfile: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/shipping-profiles/".concat(id), method: "GET", format: "json" }, params));
            },
            /**
             * @description Updates a Shipping Profile
             *
             * @tags Shipping Profile
             * @name PostShippingProfilesProfile
             * @summary Update a Shipping Profiles
             * @request POST:/shipping-profiles/{id}
             */
            postShippingProfilesProfile: function (id, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/shipping-profiles/".concat(id), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
        };
        _this.store = {
            /**
             * @description Adds a Currency Code to the available currencies.
             *
             * @tags Store
             * @name PostStoreCurrenciesCode
             * @summary Add a Currency Code
             * @request POST:/store/currencies/{code}
             */
            postStoreCurrenciesCode: function (code, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/store/currencies/".concat(code), method: "POST", format: "json" }, params));
            },
            /**
             * @description Removes a Currency Code from the available currencies.
             *
             * @tags Store
             * @name DeleteStoreCurrenciesCode
             * @summary Remove a Currency Code
             * @request DELETE:/store/currencies/{code}
             */
            deleteStoreCurrenciesCode: function (code, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/store/currencies/".concat(code), method: "DELETE", format: "json" }, params));
            },
            /**
             * @description Retrieves the Store details
             *
             * @tags Store
             * @name GetStore
             * @summary Retrieve Store details.
             * @request GET:/store
             */
            getStore: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/store", method: "GET", format: "json" }, params));
            },
            /**
             * @description Updates the Store details
             *
             * @tags Store
             * @name PostStore
             * @summary Update Store details.
             * @request POST:/store
             */
            postStore: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/store", method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Retrieves the configured Payment Providers
             *
             * @tags Store
             * @name GetStorePaymentProviders
             * @summary Retrieve configured Payment Providers
             * @request GET:/store/payment-providers
             */
            getStorePaymentProviders: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/store/payment-providers", method: "GET", format: "json" }, params));
            },
            /**
             * @description Retrieves the configured Tax Providers
             *
             * @tags Store
             * @name GetStoreTaxProviders
             * @summary Retrieve configured Tax Providers
             * @request GET:/store/tax-providers
             */
            getStoreTaxProviders: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/store/tax-providers", method: "GET", format: "json" }, params));
            },
        };
        _this.swaps = {
            /**
             * @description Retrieves a Swap.
             *
             * @tags Swap
             * @name GetSwapsSwap
             * @summary Retrieve a Swap
             * @request GET:/swaps/{id}
             */
            getSwapsSwap: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/swaps/".concat(id), method: "GET", format: "json" }, params));
            },
            /**
             * @description Retrieves a list of Swaps.
             *
             * @tags Swap
             * @name GetSwaps
             * @summary List Swaps
             * @request GET:/swaps
             */
            getSwaps: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/swaps", method: "GET", format: "json" }, params));
            },
        };
        _this.taxRates = {
            /**
             * @description Associates a Tax Rate with a list of Product Types
             *
             * @tags Tax Rates
             * @name PostTaxRatesTaxRateProductTypes
             * @summary Add Tax Rate to Product Types
             * @request POST:/tax-rates/:id/product-types/batch
             */
            postTaxRatesTaxRateProductTypes: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/tax-rates/".concat(id, "/product-types/batch"), method: "POST", format: "json" }, params));
            },
            /**
             * @description Removes a Tax Rate from a list of Product Types
             *
             * @tags Tax Rates
             * @name DeleteTaxRatesTaxRateProductTypes
             * @summary Remove Tax Rate from Product Types
             * @request DELETE:/tax-rates/:id/product-types/batch
             */
            deleteTaxRatesTaxRateProductTypes: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/tax-rates/".concat(id, "/product-types/batch"), method: "DELETE", format: "json" }, params));
            },
            /**
             * @description Associates a Tax Rate with a list of Products
             *
             * @tags Tax Rates
             * @name PostTaxRatesTaxRateProducts
             * @summary Add Tax Rate to Products
             * @request POST:/tax-rates/:id/products/batch
             */
            postTaxRatesTaxRateProducts: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/tax-rates/".concat(id, "/products/batch"), method: "POST", format: "json" }, params));
            },
            /**
             * @description Removes a Tax Rate from a list of Products
             *
             * @tags Tax Rates
             * @name DeleteTaxRatesTaxRateProducts
             * @summary Removes Tax Rate from Products
             * @request DELETE:/tax-rates/:id/products/batch
             */
            deleteTaxRatesTaxRateProducts: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/tax-rates/".concat(id, "/products/batch"), method: "DELETE", format: "json" }, params));
            },
            /**
             * @description Associates a Tax Rate with a list of Product Types
             *
             * @tags Tax Rates
             * @name PostTaxRatesTaxRateShippingOptions
             * @summary Add Tax Rate to Product Types
             * @request POST:/tax-rates/:id/shipping-options/batch
             */
            postTaxRatesTaxRateShippingOptions: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/tax-rates/".concat(id, "/shipping-options/batch"), method: "POST", format: "json" }, params));
            },
            /**
             * @description Removes a Tax Rate from a list of Product Types
             *
             * @tags Tax Rates
             * @name DeleteTaxRatesTaxRateShippingOptions
             * @summary Removes a Tax Rate from Product Types
             * @request DELETE:/tax-rates/:id/shipping-options/batch
             */
            deleteTaxRatesTaxRateShippingOptions: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/tax-rates/".concat(id, "/shipping-options/batch"), method: "DELETE", format: "json" }, params));
            },
            /**
             * @description Creates a Tax Rate
             *
             * @tags Tax Rates
             * @name PostTaxRates
             * @summary Create a Tax Rate
             * @request POST:/tax-rates
             */
            postTaxRates: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/tax-rates", method: "POST", format: "json" }, params));
            },
            /**
             * @description Retrieves a list of TaxRates
             *
             * @tags Order
             * @name GetTaxRates
             * @summary List Tax Rates
             * @request GET:/tax-rates
             */
            getTaxRates: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/tax-rates", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * @description Deletes a Tax Rate
             *
             * @tags Tax Rates
             * @name DeleteTaxRatesTaxRate
             * @summary Delete a Tax Rate
             * @request DELETE:/tax-rates/{id}
             */
            deleteTaxRatesTaxRate: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/tax-rates/".concat(id), method: "DELETE", format: "json" }, params));
            },
            /**
             * @description Retrieves a TaxRate
             *
             * @tags Tax Rates
             * @name GetTaxRatesTaxRate
             * @summary Get Tax Rate
             * @request GET:/tax-rates/:id
             */
            getTaxRatesTaxRate: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/tax-rates/".concat(id), method: "GET", format: "json" }, params));
            },
            /**
             * @description Updates a Tax Rate
             *
             * @tags Tax Rates
             * @name PostTaxRatesTaxRate
             * @summary Update a Tax Rate
             * @request POST:/tax-rates/:id
             */
            postTaxRatesTaxRate: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/tax-rates/".concat(id), method: "POST", format: "json" }, params));
            },
        };
        _this.users = {
            /**
             * @description Creates a User
             *
             * @tags Users
             * @name PostUsers
             * @summary Create a User
             * @request POST:/users
             */
            postUsers: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/users", method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Retrieves all users.
             *
             * @tags Users
             * @name GetUsers
             * @summary Retrieve all users
             * @request GET:/users
             */
            getUsers: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/users", method: "GET", format: "json" }, params));
            },
            /**
             * @description Deletes a User
             *
             * @tags Users
             * @name DeleteUsersUser
             * @summary Delete a User
             * @request DELETE:/users/{user_id}
             */
            deleteUsersUser: function (userId, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/users/".concat(userId), method: "DELETE", format: "json" }, params));
            },
            /**
             * @description Updates a User
             *
             * @tags Users
             * @name PostUsersUser
             * @summary Update a User
             * @request POST:/users/{user_id}
             */
            postUsersUser: function (userId, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/users/".concat(userId), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Retrieves a User.
             *
             * @tags Users
             * @name GetUsersUser
             * @summary Retrieve a User
             * @request GET:/users/{id}
             */
            getUsersUser: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/users/".concat(id), method: "GET", format: "json" }, params));
            },
            /**
             * @description Sets the password for a User given the correct token.
             *
             * @tags Users
             * @name PostUsersUserPassword
             * @summary Set the password for a User.
             * @request POST:/users/password-token
             */
            postUsersUserPassword: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/users/password-token", method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
        };
        _this.variants = {
            /**
             * @description Retrieves a list of Product Variants
             *
             * @tags Product Variant
             * @name GetVariants
             * @summary List Product Variants.
             * @request GET:/variants
             */
            getVariants: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/variants", method: "GET", query: query, format: "json" }, params));
            },
        };
        return _this;
    }
    return Api;
}(HttpClient));
exports.Api = Api;
//# sourceMappingURL=admin.js.map