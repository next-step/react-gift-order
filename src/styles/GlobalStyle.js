"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalStyle = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var react_1 = require("@emotion/react");
var GlobalStyle = function () { return ((0, jsx_runtime_1.jsx)(react_1.Global, { styles: (0, react_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n      }\n    "], ["\n      * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n      }\n    "]))) })); };
exports.GlobalStyle = GlobalStyle;
exports.default = exports.GlobalStyle;
var templateObject_1;
