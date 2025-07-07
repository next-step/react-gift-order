import { useNavigate } from 'react-router-dom';
import { HeaderContainer, BackButton, Title, LoginIcon } from '@/styles/Header.styles';

type HeaderProps = {
  onBackClick: () => void;
  onLoginClick: () => void;
};

function Header({ onBackClick, onLoginClick }: HeaderProps) {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <BackButton onClick={onBackClick}>뒤로가기</BackButton>
      <Title onClick={() => navigate('/')}>선물하기</Title>
      <LoginIcon onClick={onLoginClick}>로그인 아이콘</LoginIcon>
    </HeaderContainer>
  );
}

export default Header;
