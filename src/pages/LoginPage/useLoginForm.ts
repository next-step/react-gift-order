import { useState } from 'react';

export interface LoginFormState {
    email: string;
    pw: string;
    emailError: string;
    pwError: string;
    isValid: boolean;
    setEmail: (value: string) => void;
    setPw: (value: string) => void;
    handleEmailBlur: () => void;
    handlePwBlur: () => void;
}

export const useLoginForm = (): LoginFormState => {
    const [email, setEmail] = useState<string>('');
    const [pw, setPw] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');
    const [pwError, setPwError] = useState<string>('');

    const validateEmail = (value: string): string => {
        if (!value) return 'ID를 입력해주세요.';
        const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'ID는 이메일 형식으로 입력해주세요.';
        return '';
    };

    const validatePw = (value: string): string => {
        if (!value) return 'PW를 입력해주세요.';
        if (value.length < 8) return 'PW는 최소 8글자 이상이어야 합니다.';
        return '';
    };

    const handleEmailBlur = (): void => setEmailError(validateEmail(email));
    const handlePwBlur = (): void => setPwError(validatePw(pw));

    const isValid: boolean = !validateEmail(email) && !validatePw(pw);

    return {
        email,
        pw,
        emailError,
        pwError,
        isValid,
        setEmail,
        setPw,
        handleEmailBlur,
        handlePwBlur,
    };
};
