import styled from '@emotion/styled';
import { useState } from 'react';
import { useLoginForm } from '@/hooks/useLoginForm';
import NavigationBar from '@/common/NavigationBar';
import Input from '@/common/Input';
import LoginButton from '@/components/login/LoginButton';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validators: Record<'id' | 'password', (value: string) => string | null> =
  {
    id: (value: string) => {
      if (value.trim() === '') return 'ID를 입력해주세요.';
      if (!emailRegex.test(value)) return '유효한 이메일 형식이 아닙니다.';
      return null;
    },
    password: (value: string) => {
      if (value.trim() === '') return 'PW를 입력해주세요.';
      if (value.length < 8) return 'PW는 최소 8글자 이상이어야 합니다.';
      return null;
    },
  };

type FormErrors = {
  id: string | null;
  password: string | null;
};

const LoginForm = () => {
  const { form, handleChange, handleSubmit } = useLoginForm();

  const [errors, setErrors] = useState<FormErrors>({
    id: null,
    password: null,
  });

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const fieldName = name as keyof FormErrors;
    const validator = validators[fieldName];
    if (!validator) return;
    const errorMessage = validator(value);
    setErrors((prev) => ({ ...prev, [fieldName]: errorMessage }));
  };

  const isFormValid =
    form.id.trim() !== '' &&
    form.password.trim() !== '' &&
    errors.id === null &&
    errors.password === null;

  return (
    <Layout>
      <NavigationBar />
      <Logo>kakao</Logo>
      <FormWrapper onSubmit={handleSubmit}>
        <InputWrapper>
          <Input
            name="id"
            placeholder="이메일"
            value={form.id}
            onChange={handleChange}
            onBlur={handleBlur}
            hasError={!!errors.id}
          />
          {errors.id && <ErrorText>{errors.id}</ErrorText>}
        </InputWrapper>

        <InputWrapper>
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
        </InputWrapper>

        <LoginButton type="submit" disabled={!isFormValid} />
      </FormWrapper>
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

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  max-width: 388px;
  width: 100%;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ErrorText = styled.div`
  color: ${({ theme }) => theme.colors.red700};
  font-size: ${({ theme }) => theme.typography.fontSizes.label2};
  margin-top: 4px;
  padding-left: 4px;
`;
