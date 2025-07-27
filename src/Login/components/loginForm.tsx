import {
  Container,
  FormContainer,
  KakaoTitle,
  InputForm,
  ErrorMessage,
} from './LoginForm.styles';
import { useNavigate } from 'react-router-dom';
import KakaoLogo from '@/assets/Kakao_logo.png';
import MyButton from '@/components/button/button';
import { useLoginForm } from '../hooks/useLoginForm';
import { useUserContext } from '@/contexts/UserContext';

interface LoginFormProps {
  redirectPath: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ redirectPath }) => {
  const {
    values,
    errors,
    handleChange,
    handleBlur,
    validateForm,
    isLoginValid,
  } = useLoginForm();

  const { login } = useUserContext();
  const navigate = useNavigate();

  const handleLoginClick = async () => {
    const valid = validateForm();
    if (!valid) return;

    const email = values.email;
    const nickname = email.split('@')[0];
    login({ email, nickname });

    navigate(redirectPath, { replace: true });
  };

  return (
    <Container>
      <FormContainer>
        <KakaoTitle>
          <img
            src={KakaoLogo}
            alt="Kakao Logo"
            style={{ width: '100%', height: '40%' }}
          />
        </KakaoTitle>

        <InputForm
          placeholder="이메일"
          type="email"
          value={values.email}
          onChange={(e) => handleChange('email', e.target.value)}
          onBlur={() => handleBlur('email')}
          isError={!!errors.email}
        />
        <ErrorMessage isActive={!!errors.email}>{errors.email}</ErrorMessage>

        <InputForm
          placeholder="비밀번호"
          type="password"
          value={values.password}
          onChange={(e) => handleChange('password', e.target.value)}
          onBlur={() => handleBlur('password')}
          isError={!!errors.password}
        />
        <ErrorMessage isActive={!!errors.password}>
          {errors.password}
        </ErrorMessage>

        <MyButton
          onClick={handleLoginClick}
          disabled={!isLoginValid()}
          fullWidth
          variant="primary"
          size="large"
        >
          로그인
        </MyButton>
      </FormContainer>
    </Container>
  );
};

export default LoginForm;
