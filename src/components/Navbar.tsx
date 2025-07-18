import styled from '@emotion/styled';
import { FiChevronLeft, FiUser } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '@/stores/authStore';

export function Navbar() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleIconClick = () => {
    if (isAuthenticated) {
      navigate('/my');
    } else {
      navigate('/login');
    }
  };

  return (
    <NavWrapper>
      <LeftIcon onClick={handleGoBack}>
        <FiChevronLeft size={24} />
      </LeftIcon>
      <Title>선물하기</Title>
      <RightIcon onClick={handleIconClick}>
        <FiUser size={24} />
      </RightIcon>
    </NavWrapper>
  );
}

const NavWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  background-color: white;
  position: relative;
`;

const LeftIcon = styled.div`
  position: absolute;
  left: 16px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.semanticColors.text.default};
  cursor: pointer;
`;

const RightIcon = styled.div`
  position: absolute;
  right: 16px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.semanticColors.text.default};
  cursor: pointer;
`;

const Title = styled.h1`
  margin: 0 auto;
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.semanticColors.text.default};
`;
