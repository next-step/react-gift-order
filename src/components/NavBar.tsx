import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { useUser } from '@/hooks/useUser';

const NavBarWrapper = styled.div`
  width: auto;
  height: ${({ theme }) => theme.spacing.spacing11};
  background-color: ${({ theme }) => theme.colors.gray.gray00};

  display: flex;
  justify-content: center;
  align-items: center;

  position: sticky;
  top: 0px;
`;

const NavBarBackBtn = styled.button`
  width: ${({ theme }) => theme.spacing.spacing11};
  height: ${({ theme }) => theme.spacing.spacing11};
  background-color: ${({ theme }) => theme.colors.gray.gray00};
  border: none;
  cursor: pointer;

  position: absolute;
  top: ${({ theme }) => theme.spacing.spacing0};
  left: ${({ theme }) => theme.spacing.spacing0};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavBarTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.title.title1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title.title1Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.title.title1Bold.lineHeight};
  cursor: pointer;
`;

const NavBarLoginBtn = styled.button`
  width: ${({ theme }) => theme.spacing.spacing11};
  height: ${({ theme }) => theme.spacing.spacing11};
  background-color: ${({ theme }) => theme.colors.gray.gray00};
  border: none;
  cursor: pointer;

  position: absolute;
  top: ${({ theme }) => theme.spacing.spacing0};
  right: ${({ theme }) => theme.spacing.spacing0};

  display: flex;
  justify-content: center;
  align-items: center;
`;

function NavBar() {
  // TODO: 좀 손 봐야할듯
  const navigate = useNavigate();
  const userId = useUser(); // session storage에 있는 로그인 정보

  // window history에 따라 뒤로가기 버튼 구현
  function handleBackNavigation() {
    if(window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  }

  // session storage에 있는 로그인 정보로 로그인이 되어있으면 my page로 아니면 login페이지로 유도
  function handleLoginClick() {
    if (userId !== '') {
      navigate('/my');
    } else {
      navigate('/login');
    }
  }

  return (
    <NavBarWrapper>
      <NavBarBackBtn onClick={handleBackNavigation}>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-left" aria-hidden="true">
          <path d="m15 18-6-6 6-6"></path>
        </svg>
      </NavBarBackBtn>
      <NavBarTitle>선물하기</NavBarTitle>
      <NavBarLoginBtn onClick={handleLoginClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-round" aria-hidden="true">
          <circle cx="12" cy="8" r="5"></circle>
          <path d="M20 21a8 8 0 0 0-16 0"></path>
        </svg>
      </NavBarLoginBtn>
    </NavBarWrapper>
  );
}

export default NavBar;
