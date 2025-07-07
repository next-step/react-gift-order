import {
  MypageContainer,
  MypageTitle,
  MypageContent,
  MypageLogoutBtn,
} from '@/styles/Mypage.styles';
import { LoginInfoContext } from '@/contexts/LoginInfoContext';
import { useContext, useEffect, useState } from 'react';

type MyPageProps = {
  onLogin: () => void;
};

function Mypage({ onLogin }: MyPageProps) {
  const { loginInfo, setLoginInfo } = useContext(LoginInfoContext);
  const [name, setName] = useState<string>('');
  function logout() {
    setLoginInfo('');
    localStorage.setItem('id', '');
    localStorage.setItem('name', '');
    onLogin();
  }
  useEffect(() => {
    setName(localStorage.getItem('name') || '');
  }, []);
  return (
    <MypageContainer>
      <MypageTitle>마이페이지</MypageTitle>
      <MypageContent>{name}님 안녕하세요!</MypageContent>
      <MypageContent>이메일 주소는 {loginInfo}입니다.</MypageContent>
      <MypageLogoutBtn onClick={logout}>로그아웃</MypageLogoutBtn>
    </MypageContainer>
  );
}

export default Mypage;
