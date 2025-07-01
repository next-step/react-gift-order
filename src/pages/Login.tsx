import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginForm } from '../hooks/useLoginForm';
import NavigationBar from '@/common/NavigationBar';
import Input from '@/common/Input';
import LoginButton from '@/components/login/LoginButton';

const LoginForm = () => {
  const { form, handleChange } = useLoginForm();
  const navigate = useNavigate();

  const [errors, setErrors] = useState<{ [key: string]: string | null }>({});

  const loginRedirect = () => {
    navigate('/');
  };

  const validators: Record<string, (value: string) => string | null> = {
    id: (value: string) => {
      if (value.trim() === '') return 'ID를 입력해주세요.';
      if (!value.includes('@') || !value.includes('.'))
        return 'ID는 이메일 형식으로 입력해주세요.';
      return null;
    },
    password: (value: string) => {
      if (value.trim() === '') return 'PW를 입력해주세요.';
      if (value.length < 8) return 'PW는 최소 8글자 이상이어야 합니다.';
      return null;
    },
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const validator = validators[name];
    if (!validator) return;
    const errorMessage = validator(value);
    setErrors((prev) => ({ ...prev, [name]: errorMessage }));
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
          onBlur={handleBlur}
          hasError={!!errors.id}
        />
        {errors.id && <ErrorText>{errors.id}</ErrorText>}
      </FormWrapper>

      <FormWrapper>
        <Input
          name="password"
          type="password"
          placeholder="비밀번호"
          value={form.password}
          onChange={handleChange}
          onBlur={handleBlur}
          hasError={!!errors.password}
        />
        {errors.password && <ErrorText>{errors.password}</ErrorText>}
      </FormWrapper>

      <LoginButton onClick={loginRedirect} />
    </Layout>
  );
};

export default LoginForm;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  gap: ${({ theme }) => theme.spacing.spacing2};
`;

const Logo = styled.div`
  font-size: 40px;
  margin-bottom: 40px;
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
