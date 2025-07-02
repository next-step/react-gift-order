import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import IconButton from '@/components/common/IconButton';

const Navigation = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); 
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <S.Nav>
      <IconButton onClick={handleBack}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6"/>
        </svg>
      </IconButton>
      
      <S.Logo onClick={handleLogoClick}
        src="/카카오톡 선물하기.webp" 
        alt="카카오톡 선물하기" 
      />
      
      <IconButton onClick={handleLoginClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="5"/>
          <path d="M20 21a8 8 0 0 0-16 0"/>
        </svg>
      </IconButton>
    </S.Nav>
  );
};

export default Navigation; 