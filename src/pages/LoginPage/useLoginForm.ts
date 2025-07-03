import { useState } from 'react';
import { EMAIL_REGEX, VALIDATION_MESSAGES, PASSWORD_MIN } from '@/constants/validation';

export interface LoginFormState {
    email: string;
    pw: string;
    emailError: string;
    pwError: string;
    isValid: boolean;
    emailTouched: boolean;
    pwTouched: boolean;
    setEmail: (value: string) => void;
    setPw: (value: string) => void;
    handleEmailChange: (value: string) => void;
    handlePwChange: (value: string) => void;
}

export const useLoginForm = (): LoginFormState => {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [emailError, setEmailError] = useState('');
    const [pwError, setPwError] = useState('');
    const [emailTouched, setEmailTouched] = useState(false);
    const [pwTouched, setPwTouched] = useState(false);

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

    const handleEmailChange = (value: string) => {
        setEmail(value);
        setEmailTouched(true);
        setEmailError(validateEmail(value));
    };
    const handlePwChange = (value: string) => {
        setPw(value);
        setPwTouched(true);
        setPwError(validatePw(value));
    };

    const isValid = emailError === '' && pwError === '';

    return {
        email,
        pw,
        emailError,
        pwError,
        emailTouched,
        pwTouched,
        isValid,
        handleEmailChange,
        handlePwChange,
    };
};
