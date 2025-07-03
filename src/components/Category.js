"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var categoryData_1 = require("@/data/categoryData");
var react_1 = require("@emotion/react");
var react_2 = require("@emotion/react");
var Category = function () {
    var theme = (0, react_2.useTheme)();
    return ((0, jsx_runtime_1.jsx)("div", { css: categoryStyle(theme), children: categoryData_1.default.map(function (category) { return ((0, jsx_runtime_1.jsxs)("div", { css: categoryItemStyle(theme), className: "category-item", children: [(0, jsx_runtime_1.jsx)("img", { src: category.image, alt: category.name, className: "category-image", css: imageStyle }), (0, jsx_runtime_1.jsx)("h3", { className: "category-name", children: category.name })] }, category.themeId)); }) }));
};
var categoryStyle = function (theme) { return (0, react_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 16px;\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: ", ";\n  text-align: center;\n  padding: ", " ", ";\n  background: ", ";\n  border-bottom: 1px solid ", ";\n"], ["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 16px;\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: ", ";\n  text-align: center;\n  padding: ", " ", ";\n  background: ", ";\n  border-bottom: 1px solid ", ";\n"])), theme.typography.label2Bold.size, theme.typography.label2Bold.weight, theme.typography.label2Bold.lineHeight, theme.spacing.spacing3, theme.spacing.spacing4, theme.colors.semantic.background.default, theme.colors.semantic.border.default); };
var categoryItemStyle = function (theme) { return (0, react_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: ", ";\n"])), theme.colors.semantic.text.default); };
var imageStyle = function () { return (0, react_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 50%;\n  max-width: 50px;\n  aspect-ratio: 1 / 1;\n  object-fit: cover;\n  display: block;\n  border-radius: 8px;\n  cursor: pointer;\n"], ["\n  width: 50%;\n  max-width: 50px;\n  aspect-ratio: 1 / 1;\n  object-fit: cover;\n  display: block;\n  border-radius: 8px;\n  cursor: pointer;\n"]))); };
exports.default = Category;
var templateObject_1, templateObject_2, templateObject_3;
