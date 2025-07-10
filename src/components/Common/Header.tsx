import styled from '@emotion/styled';
import { FiUser } from 'react-icons/fi';
import { FaChevronLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '@/contexts/useAuthContext';

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuthContext();

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <FaChevronLeftIcon size={16} onClick={() => navigate('/')} />
        <Title>{title}</Title>
        <FiUserIcon size={24} onClick={() => navigate(isLoggedIn ? '/my' : '/login')} />
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  height: 56px;
  position: sticky;
  top: 0;
  width: 100%;
  max-width: 720px;
  background-color: ${({ theme }) => theme.colors.backgroundDefault};
`;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing.spacing2};`};
`;

const Title = styled.div`
  ${({ theme }) => `
    font-size: ${theme.font.title1Bold.size};
    font-weight: ${theme.font.title1Bold.weight};
    line-height: ${theme.font.title1Bold.lineHeight};
  `}
`;

const FaChevronLeftIcon = styled(FaChevronLeft)`
  cursor: pointer;
`;

const FiUserIcon = styled(FiUser)`
  cursor: pointer;
`;
