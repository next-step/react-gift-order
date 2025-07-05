import styled from '@emotion/styled';
import { IoIosArrowBack } from 'react-icons/io';
import { GoPerson } from 'react-icons/go';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

const Nav = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 44px;
  gap: 4px;
  padding: 0 ${({ theme }) => theme.spacing.spacing2};
  background: #ffffff;
`;

const Title = styled.header`
  ${({ theme }) => theme.typography.title1Bold};
  cursor: pointer;
`;

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const handleProfile = () => {
    if (user) navigate('/my');
    else navigate('/login', { state: { from: location.pathname } });
  };

  return (
    <Nav>
      <IoIosArrowBack size={24} css={{ cursor: 'pointer' }} onClick={() => navigate(-1)} />
      <Title onClick={() => navigate('/')}>선물하기</Title>
      <GoPerson size={24} css={{ cursor: 'pointer' }} onClick={handleProfile} />
    </Nav>
  );
}
