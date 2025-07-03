"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var react_1 = require("@emotion/react");
var io5_1 = require("react-icons/io5");
var react_2 = require("@emotion/react");
var SelectFriend = function () {
    var theme = (0, react_2.useTheme)();
    return ((0, jsx_runtime_1.jsx)("div", { css: containerStyle(theme), children: (0, jsx_runtime_1.jsxs)("div", { css: contentsStyle(theme), children: [(0, jsx_runtime_1.jsx)(io5_1.IoAdd, { css: buttonStyle(theme) }), (0, jsx_runtime_1.jsx)("span", { css: textStyle(theme), children: "\uC120\uBB3C\uD560 \uCE5C\uAD6C\uB97C \uC120\uD0DD\uD558\uC138\uC694" })] }) }));
};
var containerStyle = function (theme) { return (0, react_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  width: 100%;\n  min-height: 80px;\n  background-color: ", ";\n  cursor: pointer;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  width: 100%;\n  min-height: 80px;\n  background-color: ", ";\n  cursor: pointer;\n"])), theme.colors.gray.gray100); };
var buttonStyle = function (theme) { return (0, react_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  background-color: ", ";\n  font-size: 32px;\n  margin-right: 8px;\n  border-radius: 10px;\n  margin-left: 0px;\n  width: 36px;\n  height: 36px;\n"], ["\n  color: ", ";\n  background-color: ", ";\n  font-size: 32px;\n  margin-right: 8px;\n  border-radius: 10px;\n  margin-left: 0px;\n  width: 36px;\n  height: 36px;\n"])), theme.colors.semantic.kakaoBrown, theme.colors.semantic.kakaoYellow); };
var contentsStyle = function (theme) { return (0, react_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: 95%;\n  height: 50px;\n  background-color: ", ";\n  color: ", ";\n  padding-left: 16px;\n  padding-right: 16px;\n  border: 1px none;\n  border-radius: 16px;\n"], ["\n  display: flex;\n  align-items: center;\n  width: 95%;\n  height: 50px;\n  background-color: ", ";\n  color: ", ";\n  padding-left: 16px;\n  padding-right: 16px;\n  border: 1px none;\n  border-radius: 16px;\n"])), theme.colors.semantic.background.default, theme.colors.semantic.text.default); };
var textStyle = function (theme) { return (0, react_1.css)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: ", ";\n  color: ", ";\n  border-radius: 16px;\n"], ["\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: ", ";\n  color: ", ";\n  border-radius: 16px;\n"])), theme.typography.subtitle1Bold.size, theme.typography.subtitle1Bold.weight, theme.typography.subtitle1Bold.lineHeight, theme.colors.semantic.text.default); };
exports.default = SelectFriend;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
