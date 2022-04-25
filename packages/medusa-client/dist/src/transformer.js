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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
module.exports = function (inputSchema) { return (__assign(__assign({}, inputSchema), { paths: Object.entries(inputSchema.paths).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), path = _c[0], pathItem = _c[1];
        return (__assign(__assign({}, acc), (_b = {}, _b["/admin".concat(path)] = pathItem, _b)));
    }, {}) })); };
//# sourceMappingURL=transformer.js.map