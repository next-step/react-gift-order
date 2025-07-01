/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { FiArrowLeft, FiUser } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';


const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid
    ${({ theme }) => theme.colors.borderDefault};
  background-color: ${({ theme }) => theme.colors.backgroundDefault};
`;

const Title = styled.h1`
  ${({ theme }) => theme.typography.title2Bold};
`;

export const Header = () => {
  const navigate = useNavigate();


  return (
    <HeaderContainer>
      <FiArrowLeft size={20} />
      <Title>선물하기</Title>
      <FiUser size={20} onClick={() => navigate('/login')} />

    </HeaderContainer>
  );
};
