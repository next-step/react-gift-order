import { ChevronLeft, UserRound } from 'lucide-react';
import * as S from './NavigationBar.styles';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <S.Wrapper>
      <ChevronLeft size={28} onClick={handleBack} style={{ cursor: 'pointer' }} />
      <S.Title>선물하기</S.Title>
      <UserRound size={25} onClick={goToLogin} style={{ cursor: 'pointer' }} />
    </S.Wrapper>
  );
};

export default NavigationBar;
