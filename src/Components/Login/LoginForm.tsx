import styled from '@emotion/styled';
import LogoImg from '@/Assets/icons/logo.png';
import LoginButton from '@/Components/Login/LoginButton';


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

const LoginForm = () => {
    return (
        <Container>
            <Logo src={LogoImg} alt="로고" />
            <EmailInput type="email" placeholder="이메일" />
            <PwInput type="password" placeholder="비밀번호" />
            <LoginButton />
        </Container>
    )
}
export default LoginForm;