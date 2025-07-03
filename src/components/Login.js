"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var react_1 = require("@emotion/react");
var react_2 = require("@emotion/react");
var react_3 = require("react");
var react_router_1 = require("react-router");
var Login = function () {
    var theme = (0, react_1.useTheme)();
    var navigate = (0, react_router_1.useNavigate)();
    var ref = (0, react_3.useRef)(null);
    var passwordValidator = {
        test: function (pw) {
            return pw.length >= 8;
        },
    };
    var exp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    function useValidate(validator) {
        var _a = (0, react_3.useState)(""), string = _a[0], setString = _a[1];
        var _b = (0, react_3.useState)(false), isValid = _b[0], setIsValid = _b[1];
        var _c = (0, react_3.useState)(""), message = _c[0], setMessage = _c[1];
        var onChange = function (e) {
            setString(e.target.value);
            if (validator.test(string)) {
                setIsValid(true);
            }
            else {
                setIsValid(false);
            }
        };
        var onBlur = function () {
            if (string == "") {
                setMessage("값을 입력해주세요");
            }
            else if (!isValid) {
                setMessage("입력값에 맞게 작성해주세요.");
            }
            else if (isValid) {
                setIsValid(true);
                setMessage("");
            }
        };
        return { string: string, isValid: isValid, message: message, onChange: onChange, onBlur: onBlur };
    }
    var email = useValidate(exp);
    var password = useValidate(passwordValidator);
    var isFormValid = email.isValid && password.isValid;
    return ((0, jsx_runtime_1.jsxs)("div", { css: containerStyle(theme), children: [(0, jsx_runtime_1.jsx)("h1", { css: textSytle(theme), children: "\uB85C\uADF8\uC778" }), (0, jsx_runtime_1.jsxs)("div", { css: inputContainerSytle(theme), children: [(0, jsx_runtime_1.jsx)("input", { onChange: email.onChange, onBlur: email.onBlur, css: inputSytle(theme), type: "text", placeholder: "\uC774\uBA54\uC77C" }), (0, jsx_runtime_1.jsx)("p", { style: { color: "red", fontSize: "12px", marginTop: "4px" }, children: email.message }), (0, jsx_runtime_1.jsx)("input", { onChange: password.onChange, onBlur: password.onBlur, css: inputSytle(theme), type: "password", placeholder: "\uBE44\uBC00\uBC88\uD638" }), (0, jsx_runtime_1.jsx)("p", { style: { color: "red", fontSize: "12px", marginTop: "4px" }, children: password.message })] }), (0, jsx_runtime_1.jsx)("button", { onClick: function () {
                    if (window.history.length) {
                        navigate(-1);
                    }
                    else {
                        navigate("/");
                    }
                }, ref: ref, css: buttonSytle(theme, isFormValid), disabled: !isFormValid, children: "\uB85C\uADF8\uC778" })] }));
};
exports.default = Login;
var buttonSytle = function (theme, enabled) { return (0, react_2.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  border: 1px solid\n    ", ";\n  color: ", ";\n  align-items: center;\n  width: 80%;\n  height: 48px;\n  cursor: ", ";\n  transition: background-color 0.3s ease;\n"], ["\n  background-color: ", ";\n  border: 1px solid\n    ", ";\n  color: ", ";\n  align-items: center;\n  width: 80%;\n  height: 48px;\n  cursor: ", ";\n  transition: background-color 0.3s ease;\n"])), enabled
    ? theme.colors.semantic.kakaoYellow
    : "rgba(255, 230, 0, 0.5)", enabled ? theme.colors.semantic.kakaoYellow : "rgba(255, 230, 0, 0.5)", enabled ? "inherit" : theme.colors.gray.gray500, enabled ? "pointer" : "not-allowed"); };
var textSytle = function (theme) { return (0, react_2.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: ", ";\n  text-align: center;\n  margin-bottom: 20px;\n"], ["\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: ", ";\n  text-align: center;\n  margin-bottom: 20px;\n"])), theme.typography.title1Regular.size, theme.typography.title1Regular.weight, theme.typography.title1Regular.lineHeight); };
var inputContainerSytle = function (theme) { return (0, react_2.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  gap: 16px;\n  padding: 20px;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  gap: 16px;\n  padding: 20px;\n  }\n"]))); };
var inputSytle = function (theme) { return (0, react_2.css)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 60%;\n  gap: 16px;\n  padding: 20px;\n  border : none;\n  border-bottom: 1px solid ", ";\n  }\n"], ["\n  width: 60%;\n  gap: 16px;\n  padding: 20px;\n  border : none;\n  border-bottom: 1px solid ", ";\n  }\n"])), theme.colors.gray.gray500); };
var containerStyle = function (theme) { return (0, react_2.css)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n"]))); };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
