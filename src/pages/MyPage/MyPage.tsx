// import { useContext } from 'react';
// import { AuthContext } from '../../context/AuthContext';
// import { useNavigate } from 'react-router-dom';

// export default function MyPage() {
//   const auth = useContext(AuthContext)!;
//   const nav = useNavigate();

//   const onLogout = () => {
//     auth.logout();
//     nav('/login');
//   };

//   return (
//     <div className="p-4">
//       <h2>마이페이지</h2>
//       <p>환영합니다, {auth.user?.name}님</p>
//       <button onClick={onLogout}>로그아웃</button>
//     </div>
//   );
// }
// src/pages/MyPage/MyPage.tsx
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { AuthContext } from '@/context/AuthContext';
import { Typography } from '@/components/common/Typography';

export default function MyPage() {
  const { user, logout } = useContext(AuthContext);
  const nav = useNavigate();

  const handleLogout = () => {
    logout();
    // 로그아웃 후 로그인 페이지로
    nav('/login');
  };

  return (
    <Container>
      <Typography as="h1" variant="title1Bold" color="default">
        마이페이지
      </Typography>
      {/* ...마이페이지 본문... */}
        <Typography as="h1" color="default">
        {user?.name}님, 안녕하세요!<br />
        이메일주소는 {user?.id} 입니다.
      </Typography>
      <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
    </Container>
  );
}

const Container = styled.div`
  padding: 2rem;
`;

const LogoutButton = styled.button(({ theme }) => ({
  marginTop: theme.spacing.spacing6,
  padding: theme.spacing.spacing3,
  color: theme.colors.scale.gray00,
  border: 'none',
  
  borderRadius: '4px',
  cursor: 'pointer',
}));
