"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCustomerGroupsGroup = exports.postCustomerGroupsGroup = exports.deleteCustomerGroupsCustomerGroup = exports.postCustomerGroups = void 0;
var custom_instance_1 = require("../../../src/custom-instance");
/**
* Creates a CustomerGroup.
* @summary Create a CustomerGroup
*/
var postCustomerGroups = function (postCustomerGroupsBody) {
    return (0, custom_instance_1.getClient)({ url: "/admin//customer-groups", method: 'post',
        headers: { 'Content-Type': 'application/json' },
        data: postCustomerGroupsBody });
};
exports.postCustomerGroups = postCustomerGroups;
/**
* Deletes a CustomerGroup.
* @summary Delete a CustomerGroup
*/
var deleteCustomerGroupsCustomerGroup = function (id) {
    return (0, custom_instance_1.getClient)({ url: "/admin//customer-groups/".concat(id), method: 'delete' });
};
exports.deleteCustomerGroupsCustomerGroup = deleteCustomerGroupsCustomerGroup;
/**
* Update a CustomerGroup.
* @summary Update a CustomerGroup
*/
var postCustomerGroupsGroup = function (id, postCustomerGroupsGroupBody) {
    return (0, custom_instance_1.getClient)({ url: "/admin//customer-groups/".concat(id), method: 'post',
        headers: { 'Content-Type': 'application/json' },
        data: postCustomerGroupsGroupBody });
};
exports.postCustomerGroupsGroup = postCustomerGroupsGroup;
/**
* Retrieves a Customer Group.
* @summary Retrieve a CustomerGroup
*/
var getCustomerGroupsGroup = function (id) {
    return (0, custom_instance_1.getClient)({ url: "/admin//customer-group/".concat(id), method: 'get' });
};
exports.getCustomerGroupsGroup = getCustomerGroupsGroup;
//# sourceMappingURL=customer-group.js.map