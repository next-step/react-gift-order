"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
require("@/App.css");
require("@/components/Main");
var theme_1 = require("@/styles/theme");
var react_1 = require("@emotion/react");
var react_router_dom_1 = require("react-router-dom");
var Login_1 = require("@/components/Login");
var Main_1 = require("@/components/Main");
var NavigationBar_1 = require("@/components/NavigationBar");
var NotFound_1 = require("@/components/NotFound");
var Layout_1 = require("@/styles/Layout");
function App() {
    return ((0, jsx_runtime_1.jsx)(react_1.ThemeProvider, { theme: theme_1.theme, children: (0, jsx_runtime_1.jsx)(Layout_1.default, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/login", element: (0, jsx_runtime_1.jsx)(Login_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(NavigationBar_1.default, {}), (0, jsx_runtime_1.jsx)(Main_1.default, {})] }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "*", element: (0, jsx_runtime_1.jsx)(NotFound_1.default, {}) })] }) }) }));
}
exports.default = App;
