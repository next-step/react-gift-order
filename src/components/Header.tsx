import styled from '@emotion/styled';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiChevronLeft, FiUser } from 'react-icons/fi';
import { ROUTE_PATH } from '@/constants/routes';

const HeaderBar = styled.header`
  position: fixed; // 화면에 고정
  top: 0; // 맨 위
  left: 50%; // 중앙 기준
  transform: translateX(-50%); // 정확히 중앙 정렬
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center; // 중앙 정렬
  height: 43px;
  background-color: white;

  width: 100vw;
  max-width: 720px;
  z-index: 100;
  border-bottom: 1px solid #eee;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;

  margin: 0; // margin 제거
  flex: 1;
  text-align: center; // 가운데 정렬
  pointer-events: none; // 버튼 클릭 방해 방지
`;

const IconButton = styled.button`
  background: none;
  border: none;
  padding: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLoginClick = () => {
    if (location.pathname !== ROUTE_PATH.LOGIN) {
      navigate(
        `${ROUTE_PATH.LOGIN}?from=${encodeURIComponent(location.pathname)}`,
      );
    }
  };

  return (
    <HeaderBar>
      <IconButton
        onClick={() => navigate(-1)}
        aria-label="이전 페이지"
        style={{ width: 32, justifyContent: 'flex-start' }}
      >
        <FiChevronLeft size={28} />
      </IconButton>
      <Title>선물하기</Title>
      <IconButton
        onClick={handleLoginClick}
        aria-label="로그인"
        style={{ width: 32, justifyContent: 'flex-end' }}
      >
        <FiUser size={24} />
      </IconButton>
    </HeaderBar>
  );
}

export default Header;
