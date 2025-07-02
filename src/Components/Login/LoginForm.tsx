import styled from '@emotion/styled';
import LogoImg from '@/Assets/icons/logo.png';
import LoginButton from '@/Components/Login/LoginButton';
import { useLoginForm } from '@/Hooks/useLoginForm';

const Container = styled.div`
    width: 100%;
    height: calc(-2.75rem + 100vh);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Logo = styled.img`
    width: 5.5rem;
    color: rgb(42, 48, 56);

`

const EmailInput = styled.input`
    width:60%;
    height: 2.5rem;
    border: none; 
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.color.semantic.border.default};
    font-size: 1rem;
    margin-bottom: 1rem;
`

const PwInput = styled.input`
    width:60%;
    height: 2.5rem;
    border: none; 
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.color.semantic.border.default};
    font-size: 1rem;
`
const ErrorMessage = styled.div`
    color:red;
    font-size: 0.875rem;
    margin-top: 0.5rem;
`;

const LoginForm = () => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        emailError,
        passwordError,
        isValid,
        handleEmailBlur,
        handlePasswordBlur
    } = useLoginForm();

    return (
        <Container>
            <Logo src={LogoImg} alt="로고" />
            <EmailInput
                type="email"
                placeholder="이메일"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onBlur={handleEmailBlur}
            />
            {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
            <PwInput
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={e => setPassword(e.target.value)}
                onBlur={handlePasswordBlur}
            />
            {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
            <LoginButton/>
        </Container>
    )
}
export default LoginForm;