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
                            //@ts-ignore
                            requestParams.headers.common = { Accept: "*/*" };
                            //@ts-ignore
                            requestParams.headers.post = {};
                            //@ts-ignore
                            requestParams.headers.put = {};
                            body = this.createFormData(body);
                        }
                        return [2 /*return*/, this.instance.request(__assign(__assign({}, requestParams), { headers: __assign(__assign({}, (type && type !== ContentType.FormData
                                    ? { "Content-Type": type }
                                    : {})), (requestParams.headers || {})), params: query, responseType: responseFormat, data: body, url: path }))];
                }
            });
        }); };
        this.instance = axios_1.default.create(__assign(__assign({}, axiosConfig), { baseURL: axiosConfig.baseURL || "https://api.medusa-commerce.com/store" }));
        this.secure = secure;
        this.format = format;
        this.securityWorker = securityWorker;
    }
    HttpClient.prototype.mergeRequestParams = function (params1, params2) {
        return __assign(__assign(__assign(__assign({}, this.instance.defaults), params1), (params2 || {})), { headers: __assign(__assign(__assign({}, (this.instance.defaults.headers || {})), (params1.headers || {})), ((params2 && params2.headers) || {})) });
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
 * @title Medusa Storefront API
 * @version 1.0.0
 * @license MIT
 * @baseUrl https://api.medusa-commerce.com/store
 */
var Api = /** @class */ (function (_super) {
    __extends(Api, _super);
    function Api() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.auth = {
            /**
             * @description Logs a Customer in and authorizes them to view their details. Successful authentication will set a session cookie in the Customer's browser.
             *
             * @tags Auth
             * @name PostAuth
             * @summary Authenticate Customer
             * @request POST:/auth
             */
            postAuth: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/auth", method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Destroys a Customer's authenticated session.
             *
             * @tags Auth
             * @name DeleteAuth
             * @summary Log out
             * @request DELETE:/auth
             */
            deleteAuth: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/auth", method: "DELETE" }, params));
            },
            /**
             * @description Gets the currently logged in Customer.
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
            /**
             * @description Checks if a Customer with the given email has signed up.
             *
             * @tags Auth
             * @name GetAuthEmail
             * @summary Check if email has account
             * @request GET:/auth/{email}
             */
            getAuthEmail: function (email, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/auth/".concat(email), method: "GET", format: "json" }, params));
            },
        };
        _this.collections = {
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
        };
        _this.customers = {
            /**
             * @description Adds a Shipping Address to a Customer's saved addresses.
             *
             * @tags Customer
             * @name PostCustomersCustomerAddresses
             * @summary Add a Shipping Address
             * @request POST:/customers/me/addresses
             */
            postCustomersCustomerAddresses: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/customers/me/addresses", method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Creates a Customer account.
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
             * @description Removes an Address from the Customer's saved addresse.
             *
             * @tags Customer
             * @name DeleteCustomersCustomerAddressesAddress
             * @summary Delete an Address
             * @request DELETE:/customers/me/addresses/{address_id}
             */
            deleteCustomersCustomerAddressesAddress: function (addressId, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/customers/me/addresses/".concat(addressId), method: "DELETE", format: "json" }, params));
            },
            /**
             * @description Updates a Customer's saved Shipping Address.
             *
             * @tags Customer
             * @name PostCustomersCustomerAddressesAddress
             * @summary Update a Shipping Address
             * @request POST:/customers/me/addresses/{address_id}
             */
            postCustomersCustomerAddressesAddress: function (addressId, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/customers/me/addresses/".concat(addressId), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Retrieves a Customer - the Customer must be logged in to retrieve their details.
             *
             * @tags Customer
             * @name GetCustomersCustomer
             * @summary Retrieves a Customer
             * @request GET:/customers/me
             */
            getCustomersCustomer: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/customers/me", method: "GET", format: "json" }, params));
            },
            /**
             * @description Updates a Customer's saved details.
             *
             * @tags Customer
             * @name PostCustomersCustomer
             * @summary Update Customer details
             * @request POST:/customers/me
             */
            postCustomersCustomer: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/customers/me", method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Retrieves a list of a Customer's saved payment methods. Payment methods are saved with Payment Providers and it is their responsibility to fetch saved methods.
             *
             * @tags Customer
             * @name GetCustomersCustomerPaymentMethods
             * @summary Retrieve saved payment methods
             * @request GET:/customers/me/payment-methods
             */
            getCustomersCustomerPaymentMethods: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/customers/me/payment-methods", method: "GET", format: "json" }, params));
            },
            /**
             * @description Retrieves a list of a Customer's Orders.
             *
             * @tags Customer
             * @name GetCustomersCustomerOrders
             * @summary Retrieve Customer Orders
             * @request GET:/customers/me/orders
             */
            getCustomersCustomerOrders: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/customers/me/orders", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * @description Creates a reset password token to be used in a subsequent /reset-password request. The password token should be sent out of band e.g. via email and will not be returned.
             *
             * @tags Customer
             * @name PostCustomersCustomerPasswordToken
             * @summary Creates a reset password token
             * @request POST:/customers/password-token
             */
            postCustomersCustomerPasswordToken: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/customers/password-token", method: "POST", body: data, type: ContentType.Json }, params));
            },
            /**
             * @description Resets a Customer's password using a password token created by a previous /password-token request.
             *
             * @tags Customer
             * @name PostCustomersResetPassword
             * @summary Resets Customer password
             * @request POST:/customers/reset-password
             */
            postCustomersResetPassword: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/customers/reset-password", method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
        };
        _this.giftCards = {
            /**
             * @description Retrieves a Gift Card by its associated unqiue code.
             *
             * @tags Gift Card
             * @name GetGiftCardsCode
             * @summary Retrieve Gift Card by Code
             * @request GET:/gift-cards/{code}
             */
            getGiftCardsCode: function (code, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/gift-cards/".concat(code), method: "GET", format: "json" }, params));
            },
        };
        _this.carts = {
            /**
             * @description Adds a Shipping Method to the Cart.
             *
             * @tags Cart
             * @name PostCartsCartShippingMethod
             * @summary Add a Shipping Method
             * @request POST:/carts/{id}/shipping-methods
             */
            postCartsCartShippingMethod: function (id, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/carts/".concat(id, "/shipping-methods"), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Calculates taxes for a cart. Depending on the cart's region this may involve making 3rd party API calls to a Tax Provider service.
             *
             * @tags Cart
             * @name PostCartsCartTaxes
             * @summary Calculate Cart Taxes
             * @request POST:/carts/{id}/taxes
             */
            postCartsCartTaxes: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/carts/".concat(id, "/taxes"), method: "POST", format: "json" }, params));
            },
            /**
             * @description Completes a cart. The following steps will be performed. Payment authorization is attempted and if more work is required, we simply return the cart for further updates. If payment is authorized and order is not yet created, we make sure to do so. The completion of a cart can be performed idempotently with a provided header `Idempotency-Key`. If not provided, we will generate one for the request.
             *
             * @tags Cart
             * @name PostCartsCartComplete
             * @summary Complete a Cart
             * @request POST:/carts/{id}/complete
             */
            postCartsCartComplete: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/carts/".concat(id, "/complete"), method: "POST", format: "json" }, params));
            },
            /**
             * @description Creates a Cart within the given region and with the initial items. If no `region_id` is provided the cart will be associated with the first Region available. If no items are provided the cart will be empty after creation. If a user is logged in the cart's customer id and email will be set.
             *
             * @tags Cart
             * @name PostCart
             * @summary Create a Cart
             * @request POST:/carts
             */
            postCart: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/carts", method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Generates a Line Item with a given Product Variant and adds it to the Cart
             *
             * @tags Cart
             * @name PostCartsCartLineItems
             * @summary Add a Line Item
             * @request POST:/carts/{id}/line-items
             */
            postCartsCartLineItems: function (id, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/carts/".concat(id, "/line-items"), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Creates Payment Sessions for each of the available Payment Providers in the Cart's Region.
             *
             * @tags Cart
             * @name PostCartsCartPaymentSessions
             * @summary Initialize Payment Sessions
             * @request POST:/carts/{id}/payment-sessions
             */
            postCartsCartPaymentSessions: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/carts/".concat(id, "/payment-sessions"), method: "POST", format: "json" }, params));
            },
            /**
             * @description Removes a Discount from a Cart.
             *
             * @tags Cart
             * @name DeleteCartsCartDiscountsDiscount
             * @summary Remove Discount from Cart
             * @request DELETE:/carts/{id}/discounts/{code}
             */
            deleteCartsCartDiscountsDiscount: function (id, code, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/carts/".concat(id, "/discounts/").concat(code), method: "DELETE", format: "json" }, params));
            },
            /**
             * @description Removes a Line Item from a Cart.
             *
             * @tags Cart
             * @name DeleteCartsCartLineItemsItem
             * @summary Delete a Line Item
             * @request DELETE:/carts/{id}/line-items/{line_id}
             */
            deleteCartsCartLineItemsItem: function (id, lineId, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/carts/".concat(id, "/line-items/").concat(lineId), method: "DELETE", format: "json" }, params));
            },
            /**
             * @description Updates a Line Item if the desired quantity can be fulfilled.
             *
             * @tags Cart
             * @name PostCartsCartLineItemsItem
             * @summary Update a Line Item
             * @request POST:/carts/{id}/line-items/{line_id}
             */
            postCartsCartLineItemsItem: function (id, lineId, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/carts/".concat(id, "/line-items/").concat(lineId), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Deletes a Payment Session on a Cart. May be useful if a payment has failed.
             *
             * @tags Cart
             * @name DeleteCartsCartPaymentSessionsSession
             * @summary Delete a Payment Session
             * @request DELETE:/carts/{id}/payment-sessions/{provider_id}
             */
            deleteCartsCartPaymentSessionsSession: function (id, providerId, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/carts/".concat(id, "/payment-sessions/").concat(providerId), method: "DELETE", format: "json" }, params));
            },
            /**
             * @description Updates a Payment Session with additional data.
             *
             * @tags Cart
             * @name PostCartsCartPaymentSessionUpdate
             * @summary Update a Payment Session
             * @request POST:/carts/{id}/payment-sessions/{provider_id}
             */
            postCartsCartPaymentSessionUpdate: function (id, providerId, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/carts/".concat(id, "/payment-sessions/").concat(providerId), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Retrieves a Cart.
             *
             * @tags Cart
             * @name GetCartsCart
             * @summary Retrieve a Cart
             * @request GET:/carts/{id}
             */
            getCartsCart: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/carts/".concat(id), method: "GET", format: "json" }, params));
            },
            /**
             * @description Refreshes a Payment Session to ensure that it is in sync with the Cart - this is usually not necessary.
             *
             * @tags Cart
             * @name PostCartsCartPaymentSessionsSession
             * @summary Refresh a Payment Session
             * @request POST:/carts/{id}/payment-sessions/{provider_id}/refresh
             */
            postCartsCartPaymentSessionsSession: function (id, providerId, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/carts/".concat(id, "/payment-sessions/").concat(providerId, "/refresh"), method: "POST", format: "json" }, params));
            },
            /**
             * @description Selects a Payment Session as the session intended to be used towards the completion of the Cart.
             *
             * @tags Cart
             * @name PostCartsCartPaymentSession
             * @summary Select a Payment Session
             * @request POST:/carts/{id}/payment-session
             */
            postCartsCartPaymentSession: function (id, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/carts/".concat(id, "/payment-session"), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
        };
        _this.store = {
            /**
             * @description Updates a Cart.
             *
             * @tags Cart
             * @name PostCartsCartPaymentMethodUpdate
             * @summary Update a Cart"
             * @request POST:/store/carts/{id}
             */
            postCartsCartPaymentMethodUpdate: function (id, data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/store/carts/".concat(id), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
        };
        _this.orders = {
            /**
             * @description Retrieves an Order by the id of the Cart that was used to create the Order.
             *
             * @tags Order
             * @name GetOrdersOrderCartId
             * @summary Retrieves Order by Cart id
             * @request GET:/orders/cart/{cart_id}
             */
            getOrdersOrderCartId: function (cartId, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/orders/cart/".concat(cartId), method: "GET", format: "json" }, params));
            },
            /**
             * @description Retrieves an Order
             *
             * @tags Order
             * @name GetOrdersOrder
             * @summary Retrieves an Order
             * @request GET:/orders/{id}
             */
            getOrdersOrder: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/orders/".concat(id), method: "GET", format: "json" }, params));
            },
            /**
             * @description Looks for an Order with a given `display_id`, `email` pair. The `display_id`, `email` pair must match in order for the Order to be returned.
             *
             * @tags Order
             * @name GetOrders
             * @summary Look Up an Order
             * @request GET:/orders
             */
            getOrders: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/orders", method: "GET", query: query, format: "json" }, params));
            },
        };
        _this.products = {
            /**
             * @description Retrieves a Product.
             *
             * @tags Product
             * @name GetProductsProduct
             * @summary Retrieves a Product
             * @request GET:/products/{id}
             */
            getProductsProduct: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/products/".concat(id), method: "GET", format: "json" }, params));
            },
            /**
             * @description Retrieves a list of Products.
             *
             * @tags Product
             * @name GetProducts
             * @summary List Products
             * @request GET:/products
             */
            getProducts: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/products", method: "GET", query: query, format: "json" }, params));
            },
        };
        _this.regions = {
            /**
             * @description Retrieves a Region.
             *
             * @tags Region
             * @name GetRegionsRegion
             * @summary Retrieves a Region
             * @request GET:/regions/{id}
             */
            getRegionsRegion: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/regions/".concat(id), method: "GET", format: "json" }, params));
            },
            /**
             * @description Retrieves a list of Regions.
             *
             * @tags Region
             * @name GetRegions
             * @summary List Regions
             * @request GET:/regions
             */
            getRegions: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/regions", method: "GET", format: "json" }, params));
            },
        };
        _this.returnReasons = {
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
        };
        _this.returns = {
            /**
             * @description Creates a Return for an Order.
             *
             * @tags Return
             * @name PostReturns
             * @summary Create Return
             * @request POST:/returns
             */
            postReturns: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/returns", method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
        };
        _this.shippingOptions = {
            /**
             * @description Retrieves a list of Shipping Options.
             *
             * @tags Shipping Option
             * @name GetShippingOptions
             * @summary Retrieve Shipping Options
             * @request GET:/shipping-options
             */
            getShippingOptions: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/shipping-options", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * @description Retrieves a list of Shipping Options available to a cart.
             *
             * @tags Shipping Option
             * @name GetShippingOptionsCartId
             * @summary Retrieve Shipping Options for Cart
             * @request GET:/shipping-options/{cart_id}
             */
            getShippingOptionsCartId: function (cartId, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/shipping-options/".concat(cartId), method: "GET", format: "json" }, params));
            },
        };
        _this.swaps = {
            /**
             * @description Creates a Swap on an Order by providing some items to return along with some items to send back
             *
             * @tags Swap
             * @name PostSwaps
             * @summary Create a Swap
             * @request POST:/swaps
             */
            postSwaps: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/swaps", method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Retrieves a Swap by the id of the Cart used to confirm the Swap.
             *
             * @tags Swap
             * @name GetSwapsSwapCartId
             * @summary Retrieve Swap by Cart id
             * @request GET:/swaps/{cart_id}
             */
            getSwapsSwapCartId: function (cartId, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/swaps/".concat(cartId), method: "GET", format: "json" }, params));
            },
        };
        _this.variants = {
            /**
             * @description Retrieves a Product Variant by id
             *
             * @tags Product Variant
             * @name GetVariantsVariant
             * @summary Retrieve a Product Variant
             * @request GET:/variants/{variant_id}
             */
            getVariantsVariant: function (variantId, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/variants/".concat(variantId), method: "GET", format: "json" }, params));
            },
            /**
             * @description Retrieves a list of Product Variants
             *
             * @tags Product Variant
             * @name GetVariants
             * @summary Retrieve Product Variants
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
//# sourceMappingURL=store.js.map