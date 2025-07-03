"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var react_1 = require("@emotion/react");
var react_2 = require("@emotion/react");
var GiftObject = function (_a) {
    var gift = _a.gift;
    var theme = (0, react_2.useTheme)();
    return ((0, jsx_runtime_1.jsxs)("div", { css: giftStyle(theme), children: [(0, jsx_runtime_1.jsx)("img", { src: gift.imageURL, css: imageStyle() }), (0, jsx_runtime_1.jsxs)("div", { css: textContainerStyle(), children: [(0, jsx_runtime_1.jsx)("p", { css: brandStyle(theme), children: gift.brandInfo.name }), (0, jsx_runtime_1.jsx)("h3", { css: titleStyle(theme), children: gift.name }), (0, jsx_runtime_1.jsxs)("p", { css: priceStyle(theme), children: [gift.price.basicPrice.toLocaleString(), "\uC6D0"] })] })] }));
};
exports.default = GiftObject;
var giftStyle = function (theme) { return (0, react_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 8px;\n  background: ", ";\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n  cursor: pointer;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 8px;\n  background: ", ";\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n  cursor: pointer;\n"])), theme.colors.semantic.background.fill); };
var imageStyle = function () { return (0, react_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 150px;\n  height: 150px;\n  object-fit: cover;\n  border-radius: 8px;\n"], ["\n  width: 150px;\n  height: 150px;\n  object-fit: cover;\n  border-radius: 8px;\n"]))); };
var textContainerStyle = function () { return (0, react_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))); };
var titleStyle = function (theme) { return (0, react_1.css)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: ", ";\n"], ["\n  font-size: ", ";\n  font-weight: ", ";\n"])), theme.typography.label1Bold.size, theme.typography.subtitle1Bold.weight); };
var priceStyle = function (theme) { return (0, react_1.css)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: ", ";\n  color: ", ";\n"], ["\n  font-size: ", ";\n  font-weight: ", ";\n  color: ", ";\n"])), theme.typography.body1Regular.size, theme.typography.body1Regular.weight, theme.colors.semantic.text.default); };
var brandStyle = function (theme) { return (0, react_1.css)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  font-size: ", ";\n  color: ", ";\n"], ["\n  font-size: ", ";\n  color: ", ";\n"])), theme.typography.body2Regular.size, theme.colors.semantic.text.sub); };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
