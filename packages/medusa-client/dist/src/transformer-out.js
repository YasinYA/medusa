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
var fixtures = require("./data").fixtures;
var pluralize = require("pluralize");
var snakeCase = require("snake-case").snakeCase;
function transformer(options, other) {
    var data;
    var _a = __read(options.tags, 1), tag = _a[0];
    if (options.verb === "get" ||
        options.verb === "post" ||
        options.verb === "put") {
        var singular = pluralize.singular(tag);
        var resource = snakeCase(singular);
        data = fixtures.get(resource);
    }
    var newOptions = __assign(__assign({}, options), { override: {
            mock: {
                properties: function () { return data; },
            },
        } });
    return newOptions;
}
module.exports = transformer;
//# sourceMappingURL=transformer-out.js.map