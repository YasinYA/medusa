"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customInstance = exports.AXIOS_INSTANCE = void 0;
var axios_1 = __importDefault(require("axios"));
var qs = __importStar(require("qs"));
exports.AXIOS_INSTANCE = axios_1.default.create({
    baseURL: "http://localhost:9000/admin",
    paramsSerializer: function (params) { return qs.stringify(params, { arrayFormat: "comma" }); },
}); // use your own URL here or environment variable
var TOKEN = "a07179bc-7c10-4997-a5da-3f56ae9bef48";
var customInstance = function (config) {
    config = __assign(__assign({}, config), { headers: __assign(__assign({}, config.headers), { Authorization: "Bearer ".concat(TOKEN) }) });
    var promise = (0, exports.AXIOS_INSTANCE)(__assign({}, config)).then(function (_a) {
        var data = _a.data;
        return data;
    });
    return promise;
};
exports.customInstance = customInstance;
//# sourceMappingURL=custom-instance.js.map