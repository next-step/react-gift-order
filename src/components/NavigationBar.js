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
var react_router_1 = require("react-router");
var NavigationBar = function () {
    var theme = (0, react_2.useTheme)();
    var navigate = (0, react_router_1.useNavigate)();
    return ((0, jsx_runtime_1.jsxs)("div", { css: navigationBarStyles(theme), children: [(0, jsx_runtime_1.jsx)("button", { onClick: function () {
                    if (window.history.length) {
                        navigate(-1);
                    }
                    else {
                        navigate("/");
                    }
                }, css: iconButtonStyles(theme), "aria-label": "\uB4A4\uB85C\uAC00\uAE30", children: (0, jsx_runtime_1.jsx)(io5_1.IoArrowBackOutline, {}) }), (0, jsx_runtime_1.jsx)("h1", { css: titleStyles(theme), children: "\uC120\uBB3C\uD558\uAE30" }), (0, jsx_runtime_1.jsx)("button", { onClick: function () {
                    navigate("/login");
                }, css: iconButtonStyles(theme), "aria-label": "\uD504\uB85C\uD544", children: (0, jsx_runtime_1.jsx)(io5_1.IoPersonOutline, {}) })] }));
};
var navigationBarStyles = function (theme) { return (0, react_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: ", " ", ";\n  background: ", ";\n  border-bottom: 1px solid ", ";\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: ", " ", ";\n  background: ", ";\n  border-bottom: 1px solid ", ";\n"])), theme.spacing.spacing3, theme.spacing.spacing4, theme.colors.semantic.background.default, theme.colors.semantic.border.default); };
var titleStyles = function (theme) { return (0, react_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 0;\n  font-size: ", ";\n  font-weight: ", ";\n  color: ", ";\n"], ["\n  margin: 0;\n  font-size: ", ";\n  font-weight: ", ";\n  color: ", ";\n"])), theme.typography.title2Bold.size, theme.typography.title2Bold.weight, theme.colors.semantic.text.default); };
var iconButtonStyles = function (theme) { return (0, react_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  all: unset;\n  font-size: 1.5rem;\n  display: flex;\n  color: ", ";\n  cursor: pointer;\n"], ["\n  all: unset;\n  font-size: 1.5rem;\n  display: flex;\n  color: ", ";\n  cursor: pointer;\n"])), theme.colors.semantic.text.default); };
exports.default = NavigationBar;
var templateObject_1, templateObject_2, templateObject_3;
