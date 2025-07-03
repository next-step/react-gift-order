"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var react_1 = require("@emotion/react");
var react_2 = require("@emotion/react");
var Cheering = function () {
    var theme = (0, react_2.useTheme)();
    return ((0, jsx_runtime_1.jsx)("div", { css: containerStyle(theme), children: (0, jsx_runtime_1.jsx)("span", { css: textStyle(theme), children: "\uD654\uC774\uD305\uD83C\uDF89" }) }));
};
exports.default = Cheering;
var containerStyle = function (theme) { return (0, react_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  min-height: 80px;\n  background-color: ", ";\n  border-radius: 16px;\n"], ["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  min-height: 80px;\n  background-color: ", ";\n  border-radius: 16px;\n"])), theme.colors.semantic.kakaoYellow); };
var textStyle = function (theme) { return (0, react_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: ", ";\n  color: ", ";\n  padding-left: 16px;\n  border-radius: 16px;\n"], ["\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: ", ";\n  color: ", ";\n  padding-left: 16px;\n  border-radius: 16px;\n"])), theme.typography.body1Bold.size, theme.typography.body1Bold.weight, theme.typography.body1Bold.lineHeight, theme.colors.semantic.text.default); };
var templateObject_1, templateObject_2;
