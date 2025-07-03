import { useState } from 'react';
import { EMAIL_REGEX, VALIDATION_MESSAGES, PASSWORD_MIN } from '@/constants/validation';

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
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [emailError, setEmailError] = useState('');
    const [pwError, setPwError] = useState('');

    const validateEmail = (value: string) => {
        if (!value) return VALIDATION_MESSAGES.email.required;
        if (!EMAIL_REGEX.test(value)) return VALIDATION_MESSAGES.email.invalid;
        return '';
    };

    const validatePw = (value: string) => {
        if (!value) return VALIDATION_MESSAGES.password.required;
        if (value.length < PASSWORD_MIN) return VALIDATION_MESSAGES.password.minLength;
        return '';
    };

    const handleEmailBlur = () => setEmailError(validateEmail(email));
    const handlePwBlur = () => setPwError(validatePw(pw));

    const isValid = !validateEmail(email) && !validatePw(pw);

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
