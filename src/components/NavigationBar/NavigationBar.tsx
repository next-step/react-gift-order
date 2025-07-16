import { ChevronLeft, UserRound } from 'lucide-react';
import * as S from './NavigationBar.styles';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const NavigationBar = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const goToBack = () => {
    navigate(-1);
  };

  const goToLogin = () => {
    if (user) {
      navigate('/my'); // 로그인됨
    } else {
      navigate('/login'); // 로그인안됨
    }
  };

  return (
    <S.Wrapper>
      <ChevronLeft size={28} onClick={goToBack} style={{ cursor: 'pointer' }} />
      <S.Title>선물하기</S.Title>
      <UserRound size={25} onClick={goToLogin} style={{ cursor: 'pointer' }} />
    </S.Wrapper>
  );
};

export default NavigationBar;
