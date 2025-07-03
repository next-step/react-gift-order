"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var react_1 = require("@emotion/react");
var layoutStyle = (0, react_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  max-width: 720px;\n  margin: 0 auto;\n  padding: 0 16px;\n"], ["\n  max-width: 720px;\n  margin: 0 auto;\n  padding: 0 16px;\n"])));
var Layout = function (props) {
    return (0, jsx_runtime_1.jsx)("div", { css: layoutStyle, children: props.children });
};
exports.default = Layout;
var templateObject_1;
