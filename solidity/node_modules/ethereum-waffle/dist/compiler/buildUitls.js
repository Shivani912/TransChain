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
exports.__esModule = true;
function buildSourcesObject(files) {
    var result = {};
    files.map(function (file) { return result[file.url] = { content: file.source }; });
    return result;
}
exports.buildSourcesObject = buildSourcesObject;
function buildInputObject(files, overrides) {
    if (overrides === void 0) { overrides = {}; }
    var sources = buildSourcesObject(files);
    return {
        language: 'Solidity',
        sources: sources,
        settings: __assign({ outputSelection: { '*': { '*': ['abi', 'evm.bytecode', 'evm.deployedBytecode'] } } }, overrides)
    };
}
exports.buildInputObject = buildInputObject;
