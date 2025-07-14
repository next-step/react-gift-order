import styled from '@emotion/styled';
import { FaChevronLeft, FaUser } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import { useUser } from '@/contexts/UserContext';
import { ROUTE } from '@/constants/routes';
import { zIndex } from '@/constants/zIndex';

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${({ theme }) => theme.spacing.spacing14};
  padding: 0 ${({ theme }) => theme.spacing.spacing14};
  background-color: ${({ theme }) => theme.colors.semantic.backgroundDefault};
  border-bottom: 1px solid ${({ theme }) => theme.colors.semantic.borderDefault};
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 720px;
  z-index: ${zIndex.header};
`;

const Title = styled.h1`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: ${({ theme }) => theme.typography.title2Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title2Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.title2Bold.lineHeight};
  color: ${({ theme }) => theme.colors.semantic.textDefault};
`;

const IconButton = styled.button<{ disabled?: boolean }>`
  font-size: ${({ theme }) => theme.typography.title2Bold.fontSize};
  color: ${({ theme }) => theme.colors.gray.gray800};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
`;

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useUser();

  const isLoginPage = location.pathname === ROUTE.LOGIN;

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoLoginOrMyPage = () => {
    if (user) {
      navigate(ROUTE.MY);
    } else if (!isLoginPage) {
      navigate(ROUTE.LOGIN);
    }
  };

  return (
    <HeaderWrapper>
      <IconButton onClick={handleGoBack}>
        <FaChevronLeft />
      </IconButton>
      <Title>선물하기</Title>
      <IconButton onClick={handleGoLoginOrMyPage} disabled={isLoginPage}>
        <FaUser />
      </IconButton>
    </HeaderWrapper>
  );
};

export default Header;
