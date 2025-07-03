"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var react_1 = require("@emotion/react");
var GiftObject_1 = require("./GiftObject");
var react_2 = require("@emotion/react");
var giftData_1 = require("@/data/giftData");
var GiftRanking = function () {
    var theme = (0, react_2.useTheme)();
    return ((0, jsx_runtime_1.jsx)("div", { css: giftRankingStyle(theme), children: giftData_1.default.map(function (gift) { return ((0, jsx_runtime_1.jsx)(GiftObject_1.default, { gift: gift }, gift.id)); }) }));
};
exports.default = GiftRanking;
var giftRankingStyle = function (theme) { return (0, react_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  padding: 16px;\n  background: ", ";\n"], ["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  padding: 16px;\n  background: ", ";\n"])), theme.colors.semantic.background.fill); };
var templateObject_1;
