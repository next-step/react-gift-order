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
var react_router_dom_1 = require("react-router-dom");
var react_3 = require("react");
var GiftRankingHeader = function () {
    var _a = (0, react_3.useState)("ALL"), target = _a[0], setTarget = _a[1];
    var _b = (0, react_3.useState)("MANY_WISH"), rankType = _b[0], setRank = _b[1];
    var navigate = (0, react_router_dom_1.useNavigate)();
    var theme = (0, react_2.useTheme)();
    var location = (0, react_router_dom_1.useLocation)();
    ("");
    (0, react_3.useEffect)(function () {
        var searchParams = new URLSearchParams(location.search);
        var initTarget = searchParams.get("target") || "ALL";
        var initRank = searchParams.get("rankType") || "MANY_WISH";
        setTarget(initTarget);
        setRank(initRank);
    }, []);
    var handleTargetClick = function (newTarget) {
        setTarget(newTarget);
        var params = new URLSearchParams(location.search);
        params.set("target", newTarget);
        params.set("rankType", rankType);
        navigate("".concat(location.pathname, "?").concat(params.toString()));
    };
    var handleRankClick = function (newRank) {
        setRank(newRank);
        var params = new URLSearchParams(location.search);
        params.set("target", target);
        params.set("rankType", newRank);
        navigate("".concat(location.pathname, "?").concat(params.toString()));
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { css: textStyle(theme), children: "\uC2E4\uC2DC\uAC04 \uAE09\uC0C1\uC2B9 \uC120\uBB3C\uB7AD\uD0B9" }), (0, jsx_runtime_1.jsxs)("div", { css: containerStyle, children: [(0, jsx_runtime_1.jsx)(io5_1.IoWomanOutline, { onClick: function () { return handleTargetClick("WOMAN"); }, css: [iconStyle, target == "WOMAN" && selectedTargetStyle(theme)] }), (0, jsx_runtime_1.jsx)(io5_1.IoManOutline, { onClick: function () { return handleTargetClick("MAN"); }, css: [iconStyle, target == "MAN" && selectedTargetStyle(theme)] }), (0, jsx_runtime_1.jsx)(io5_1.IoAppsOutline, { onClick: function () { return handleTargetClick("ALL"); }, css: [
                            iconStyle(theme),
                            target == "ALL" && selectedTargetStyle(theme),
                        ] })] }), (0, jsx_runtime_1.jsxs)("div", { css: tabContainerStyle(theme), children: [(0, jsx_runtime_1.jsx)("div", { onClick: function () { return handleRankClick("MANY-WANT"); }, css: [
                            tabItemStyle(theme),
                            rankType == "MANY-WANT" && selectedRankStyle(theme),
                        ], children: "\uBC1B\uACE0 \uC2F6\uC5B4\uD55C" }), (0, jsx_runtime_1.jsx)("div", { onClick: function () { return handleRankClick("MANY-GIVE"); }, css: [
                            tabItemStyle(theme),
                            rankType == "MANY-GIVE" && selectedRankStyle(theme),
                        ], children: "\uB9CE\uC774 \uC120\uBB3C\uD55C" }), (0, jsx_runtime_1.jsx)("div", { onClick: function () { return handleRankClick("MANY-WISH"); }, css: [
                            tabItemStyle(theme),
                            rankType == "MANY-WISH" && selectedRankStyle(theme),
                        ], children: "\uC704\uC2DC\uB85C \uBC1B\uC740" })] })] }));
};
exports.default = GiftRankingHeader;
var textStyle = function (theme) { return (0, react_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 16px;\n  font-size: 1.25rem;\n  font-weight: ", ";\n  line-height: ", ";\n  color: ", ";\n  height: 30px;\n  text-align: left;\n"], ["\n  padding: 16px;\n  font-size: 1.25rem;\n  font-weight: ", ";\n  line-height: ", ";\n  color: ", ";\n  height: 30px;\n  text-align: left;\n"])), theme.typography.subtitle1Bold.weight, theme.typography.subtitle1Bold.lineHeight, theme.colors.semantic.text.default); };
var containerStyle = (0, react_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  gap: 200px;\n  width: 100%;\n  min-height: 80px;\n  border-radius: 16px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  gap: 200px;\n  width: 100%;\n  min-height: 80px;\n  border-radius: 16px;\n"])));
var iconStyle = function (theme) { return (0, react_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 24px;\n  cursor: pointer;\n  border-radius: 20%;\n  width: 36px;\n  height: 36px;\n"], ["\n  font-size: 24px;\n  cursor: pointer;\n  border-radius: 20%;\n  width: 36px;\n  height: 36px;\n"]))); };
var tabContainerStyle = function (theme) { return (0, react_1.css)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  border-radius: 8px;\n  padding: 10px;\n  width: 100%;\n  border: 1px solid ", ";\n  background-color: ", ";\n"], ["\n  display: flex;\n  justify-content: space-between;\n  border-radius: 8px;\n  padding: 10px;\n  width: 100%;\n  border: 1px solid ", ";\n  background-color: ", ";\n"])), theme.colors.semantic.border.default, theme.colors.blue.blue100); };
var tabItemStyle = function (theme) { return (0, react_1.css)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  flex: 1;\n  padding: 12px 16px;\n  text-align: center;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n"], ["\n  flex: 1;\n  padding: 12px 16px;\n  text-align: center;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n"]))); };
var selectedTargetStyle = function (theme) { return (0, react_1.css)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), theme.colors.blue.blue500); };
var selectedRankStyle = function (theme) { return (0, react_1.css)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  color: ", ";\n  font-weight: 600;\n"], ["\n  color: ", ";\n  font-weight: 600;\n"])), theme.colors.blue.blue500); };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
