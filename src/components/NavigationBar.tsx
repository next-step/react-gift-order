import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const NavBar = styled.header(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '48px',
  padding: `0 ${theme.spacing.spacing4}`,
  backgroundColor: theme.colors.semantic.backgroundDefault,
  borderBottom: `1px solid ${theme.colors.semantic.borderDefault}`,
}));

const Title = styled.h1(({ theme }) => ({
  fontSize: theme.typography.subtitle2Bold.fontSize,
  fontWeight: theme.typography.subtitle2Bold.fontWeight,
  lineHeight: theme.typography.subtitle2Bold.lineHeight,
  color: theme.colors.semantic.textDefault,
}));

const IconButton = styled.button(({ theme }) => ({
  background: 'none',
  border: 'none',
  padding: theme.spacing.spacing1,
  cursor: 'pointer',
  color: theme.colors.semantic.textDefault,
}));

const NavigationBar = () => {
  const navigate = useNavigate();

  return (
    <NavBar>
      <div>
        <IconButton onClick={() => navigate('/')}>&lt;</IconButton>
      </div>
      <Title>선물하기</Title>
      <div>
        <IconButton onClick={() => navigate('/login')}>&</IconButton>
      </div>
    </NavBar>
  );
};

export default NavigationBar;
