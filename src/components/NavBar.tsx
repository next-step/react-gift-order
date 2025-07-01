import styled from '@emotion/styled';
import { IoIosArrowBack } from 'react-icons/io';
import { GoPerson } from 'react-icons/go';
import { useNavigate, useLocation } from 'react-router-dom';

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
`;

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Nav>
      <IoIosArrowBack size={24} css={{ cursor: 'pointer' }} onClick={() => navigate(-1)} />
      <Title>선물하기</Title>
      <GoPerson
        size={24}
        css={{ cursor: 'pointer' }}
        onClick={() => navigate('/login', { state: { from: location.pathname } })}
      />
    </Nav>
  );
}
