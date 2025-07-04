import Header from '@/components/Header/Header.tsx';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path.ts';
import { Content, LogoutBtn, Title } from '@/pages/My/My.style.ts';

export default function My() {
  const navigate = useNavigate();
  const id = sessionStorage.getItem('splitedId');
  const email = sessionStorage.getItem('email');

  const handleLogout = () => {
    sessionStorage.clear();
    navigate(PATH.LOGIN)
  }

    return (
      <>
        <Header />
        <Title>마이 페이지</Title>
        <Content>
          <p>{id}님 안녕하세요!</p>
          <p>이메일 주소는 {email}입니다.</p>
        </Content>
        <LogoutBtn onClick={handleLogout}>로그아웃</LogoutBtn>
      </>
    )
}