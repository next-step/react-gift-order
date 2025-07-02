import {useState, useEffect} from 'react';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const useLoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setemailError] = useState('');
    const [passwordError, setpasswordError] = useState('');
    const [isValid, setIsValid] = useState(false);

    const handleEmailBlur = () => {
        if (!email) {
            setemailError('이메일을 입력해주세요.');
        } else if (!emailRegex.test(email)) {
            setemailError('올바른 이메일 형식이 아닙니다.');
        } else {
            setemailError('');
        }
    };

    const handlePasswordBlur = () => {
        if (!password) {
            setpasswordError('비밀번호를 입력해주세요.');
        } else if (password.length < 8) {
            setpasswordError('비밀번호는 8자 이상이어야 합니다.');
        } else {
            setpasswordError('');
        }
    };

    useEffect(() => {
        setIsValid(
            !emailError &&
            !passwordError &&
            Boolean(email) &&
            password.length >= 8
        );
    }, [email, password, emailError, passwordError]);

    return {
        email,
        setEmail,
        password,
        setPassword,
        emailError,
        passwordError,
        isValid,
        handleEmailBlur,
        handlePasswordBlur
    };


}