import { REGEX_EMAIL } from "@/features/auth/constants/regex";

import { useInput } from "@/shared/hooks/useInput";

export const useSignIn = () => {
    const [emailRef, email, emailError, setEmailError] = useInput({
        onBlur(value) {
            if (!value) setEmailError("ID를 입력해주세요.");
        },
        onChange(value) {
            if (!REGEX_EMAIL.test(value)) setEmailError("ID는 이메일 형식으로 입력해주세요.");
            else setEmailError("");
        },
    });

    const [passwordRef, password, passwordError, setPasswordError] = useInput({
        onBlur(value) {
            if (!value) setPasswordError("PW를 입력해주세요.");
        },
        onChange(value) {
            if (value.length < 8) setPasswordError("PW는 최소 8글자 이상이어야 합니다.");
            else setPasswordError("");
        },
    });

    const isLoginButtonActive = email && password && !emailError && !passwordError;

    return {
        emailRef,
        email,
        emailError,

        passwordRef,
        password,
        passwordError,

        isLoginButtonActive,
    };
};
