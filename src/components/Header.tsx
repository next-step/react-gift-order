import styled from '@emotion/styled';
import { IoArrowBackOutline, IoPersonOutline } from 'react-icons/io5';
import { colors, spaces, fontSizes } from '@/tokens/designTokens';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const Wrap = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${spaces.sm} ${spaces.md};
  background: ${colors.bg};
  border-bottom: 1px solid #e0e0e0;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Title = styled.h1`
  margin: 0;
  font-size: ${fontSizes.h2};
  font-weight: 600;
  color: ${colors.text};
`;

const IconButton = styled.button`
  all: unset;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  color: ${colors.text};
`;

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleLoginClick = () => {
    if (user) {
      navigate('/my');
    } else {
      navigate('/login', { state: { from: location.pathname } });
    }
  };

  return (
    <Wrap>
      {/* 뒤로가기 아이콘 */}
      <IconButton aria-label="뒤로가기" onClick={handleBackClick}>
        <IoArrowBackOutline />
      </IconButton>

      {/* 중앙 타이틀 */}
      <Title>선물하기</Title>

      {/* 우측 더보기(또는 닫기) 아이콘 */}
      <IconButton aria-label="로그인" onClick={handleLoginClick}>
        <IoPersonOutline />
      </IconButton>
    </Wrap>
  );
}
