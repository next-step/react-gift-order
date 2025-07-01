import React from 'react'
import Navbar from './../components/navbar/Navbar';
import { PaddingSm } from './../components/padding/Padding';
import { PaddingMd } from '@/components/padding/Padding';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;

  height: calc(-2.75rem + 100vh);
`;
const Loginform = styled.section`
  width: 100%;
  max-width: 26.25rem;
  padding: 16px;
`;    

const Logo = styled.img`
  width: 5.5rem;
`;
const InputWrapper = styled.div`
  width: 100%;
`;
const Input = styled.input`
  width: 100%;
  color: ${({ theme }) => theme.colors.text.default};
  border-width: 0px 0px 1px;
  padding: 8px 0px;
  border-color: ${({ theme }) => theme.colors.text.disabled};
  ${({ theme }) => theme.typography.body1Regular}
`; 

const LoginBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.yellow.yellow600};
  ${({ theme }) => theme.typography.body2Regular}
  width: 100%;
  height: 2.75rem;
`;
const Login = () => {
    const navigate=useNavigate();
  return (
    <div>
      <Navbar />
      <LoginWrapper>
        <Logo src="src/assets/images/카카오로고.svg" alt="" />
        <Loginform>
          <InputWrapper>
            <Input type="email" placeholder="이메일" />
          </InputWrapper>
          <PaddingSm />
          <InputWrapper>
            <Input type="password" placeholder="비밀번호" />
          </InputWrapper>

          <PaddingMd />
          <LoginBtn onClick={()=>{navigate(-1)}}>로그인</LoginBtn>
        </Loginform>
      </LoginWrapper>
    </div>
  );
}

export default Login
