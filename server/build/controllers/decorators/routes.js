"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
function routeBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata('path', path, target, key);
            Reflect.defineMetadata('method', method, target, key);
        };
    };
}
exports.get = routeBinder('get');
exports.put = routeBinder('put');
exports.post = routeBinder('post');
exports.del = routeBinder('get');
exports.patch = routeBinder('patch');
