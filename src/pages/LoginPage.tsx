import styled from '@emotion/styled';
import { useNavigate, useLocation } from 'react-router-dom';
import { emailValidator, passwordValidator } from '@/utils/validator';
import { useUser } from '@/contexts/UserContext';
import ErrorMessage from '@/components/ErrorMessage';
import { ROUTE } from '@/constants/routes';
import { useForm } from 'react-hook-form';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.spacing6};
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.semantic.backgroundDefault};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.title1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title1Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.title1Bold.lineHeight};
  color: ${({ theme }) => theme.colors.semantic.textDefault};
  margin-bottom: ${({ theme }) => theme.spacing.spacing6};
`;

const Input = styled.input`
  width: 100%;
  max-width: 320px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.gray300};
  padding: ${({ theme }) => theme.spacing.spacing2} 0;
  margin-bottom: ${({ theme }) => theme.spacing.spacing4};
  font-size: ${({ theme }) => theme.typography.body1Regular.fontSize};
  color: ${({ theme }) => theme.colors.semantic.textDefault};
  background-color: ${({ theme }) => theme.colors.semantic.backgroundDefault};
  caret-color: ${({ theme }) => theme.colors.semantic.textDefault};
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.semantic.textPlaceholder};
  }
`;

const Button = styled.button`
  width: 100%;
  max-width: 320px;
  padding: ${({ theme }) => theme.spacing.spacing3};
  background-color: ${({ theme }) => theme.colors.semantic.kakaoYellow};
  border-radius: ${({ theme }) => theme.spacing.spacing1};
  border: none;
  font-weight: ${({ theme }) => theme.typography.body1Bold.fontWeight};
  font-size: ${({ theme }) => theme.typography.body1Bold.fontSize};
  line-height: ${({ theme }) => theme.typography.body1Bold.lineHeight};
  color: ${({ theme }) => theme.colors.gray.gray1000};
  text-align: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

const Form = styled.form`
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const onSubmit = ({ email }: FormValues) => {
    login({ email });

    const from = location.state?.from?.pathname || ROUTE.MAIN;
    navigate(from, { replace: true });
  };

  return (
    <Wrapper>
      <Title>kakao</Title>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          placeholder="이메일"
          {...register('email', { validate: emailValidator })}
        />
        <ErrorMessage message={errors.email?.message} />

        <Input
          type="password"
          placeholder="비밀번호"
          {...register('password', { validate: passwordValidator })}
        />
        <ErrorMessage message={errors.password?.message} />

        <Button type="submit" disabled={!isValid}>
          로그인
        </Button>
      </Form>
    </Wrapper>
  );
};

export default LoginPage;
