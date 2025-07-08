import {
  Container,
  FormContainer,
  KakaoTitle,
  InputForm,
} from './loginForm.styles';
import { useNavigate, useLocation } from 'react-router-dom';
import KakaoLogo from '@/assets/Kakao_logo.png';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const hasPreviousPage = location.key !== 'default';

  const handleLoginClick = () => {
    if (hasPreviousPage) {
      navigate(-1);
    } else {
      navigate('/');
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
        <InputForm placeholder="이메일" type="email" />
        <InputForm placeholder="비밀번호" type="password" />
        <button onClick={handleLoginClick}>로그인</button>
      </FormContainer>
    </Container>
  );
};

export default LoginForm;
