"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var GlobalStyle_1 = require("@/styles/GlobalStyle");
var Category_1 = require("@/components/Category");
var SelectFriend_1 = require("@/components/SelectFriend");
var Cheering_1 = require("@/components/Cheering");
var GiftRankingBox_1 = require("@/components/GiftRankingBox");
var GiftRankingHeader_1 = require("@/components/GiftRankingHeader");
var Main = function () {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(GlobalStyle_1.default, {}), (0, jsx_runtime_1.jsx)(SelectFriend_1.default, {}), (0, jsx_runtime_1.jsx)(Category_1.default, {}), (0, jsx_runtime_1.jsx)(Cheering_1.default, {}), (0, jsx_runtime_1.jsx)(GiftRankingHeader_1.default, {}), (0, jsx_runtime_1.jsx)(GiftRankingBox_1.default, {})] }));
};
exports.default = Main;
