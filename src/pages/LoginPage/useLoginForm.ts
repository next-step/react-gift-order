import { useMemo, useState } from 'react';

export const useLoginForm = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleEmailChange = (value: string) => {
        setEmail(value);
        setEmailError('');
    };

    const handlePasswordChange = (value: string) => {
        setPassword(value);
        setPasswordError('');
    };

    const validateEmail = () => {
        if (!email.trim()) {
            setEmailError('ID를 입력해주세요.');
            return false;
        }
        if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            setEmailError('ID는 이메일 형식으로 입력해주세요.');
            return false;
        }
        return true;
    };

    const validatePassword = () => {
        if (!password.trim()) {
            setPasswordError('PW를 입력해주세요.');
            return false;
        }
        if (password.length < 8) {
            setPasswordError('PW는 최소 8글자 이상이어야 합니다.');
            return false;
        }
        return true;
    };

    const isValid = useMemo(() => {
        return (
            email.trim().length > 0 &&
            /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email) &&
            password.trim().length >= 8
        );
    }, [email, password]);
    return {
        email,
        password,
        emailError,
        passwordError,
        handleEmailChange,
        handlePasswordChange,
        validateEmail,
        validatePassword,
        isValid,
    };
};
