import styled from '@emotion/styled';
import { useLoginForm } from '../hooks/useLoginForm';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '@/common/NavigationBar';
import Input from '@/common/Input';
import LoginButton from '@/components/login/LoginButton';
import { useState } from 'react';

const LoginForm = () => {
  const { form, handleChange } = useLoginForm();
  const [emailError, setEmailError] = useState<string | null>(null);
  const navigate = useNavigate();

  const loginRedirect = () => {
    navigate('/');
  };

  const isValidEmail = (email: string): boolean => {
    return email.includes('@') && email.includes('.');
  };

  const handleEmailBlur = () => {
    if (form.id.trim() === '') setEmailError('ID를 입력해주세요.');
    else if (!isValidEmail(form.id))
      setEmailError('ID는 이메일 형식으로 입력해주세요.');
    else setEmailError(null);
  };

  return (
    <Layout>
      <NavigationBar />
      <Logo>kakao</Logo>
      <FormWrapper>
        <Input
          name="id"
          placeholder="이메일"
          value={form.id}
          onChange={handleChange}
          onBlur={handleEmailBlur}
          hasError={!!emailError}
        />
        {emailError && <ErrorText>{emailError}</ErrorText>}
      </FormWrapper>
      <Input
        name="password"
        type="password"
        placeholder="비밀번호"
        value={form.password}
        onChange={handleChange}
      />
      <LoginButton onClick={loginRedirect} />
    </Layout>
  );
};

export default LoginForm;

const Logo = styled.div`
  font-size: 40px;
  margin-bottom: 40px;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  gap: ${({ theme }) => theme.spacing.spacing2};
`;
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 388px;
  width: 100%;
`;
const ErrorText = styled.div`
  color: ${({ theme }) => theme.colors.red700};
  font-size: ${({ theme }) => theme.typography.fontSizes.label2};
  margin-top: -12px;
  margin-bottom: 12px;
`;
