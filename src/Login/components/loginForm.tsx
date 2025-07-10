import {
  Container,
  FormContainer,
  KakaoTitle,
  InputForm,
  ErrorMessage,
} from './LoginForm.styles';
import { useNavigate, useLocation } from 'react-router-dom';
import KakaoLogo from '@/assets/Kakao_logo.png';
import MyButton from '@/components/button/button';
import { useLoginForm } from '../hooks/useLoginForm';

const LoginForm: React.FC = () => {
  const {
    values,
    errors,
    handleChange,
    handleBlur,
    validateForm,
    isLoginValid,
  } = useLoginForm();

  const navigate = useNavigate();
  const location = useLocation();
  const hasPreviousPage = location.key !== 'default';

  const handleLoginClick = async () => {
    const valid = validateForm();
    if (!valid) return;

    try {
      console.log('로그인 요청:', values);
      if (hasPreviousPage) {
        navigate(-1);
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error('로그인 실패', error);
    }
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
