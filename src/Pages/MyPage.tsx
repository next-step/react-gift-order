import { parseNickname } from '@/utils/parseNickName';
import { useAuthContext } from '@/contexts/useAuthContext';
import Header from '@/components/Common/Header';
import { SectionContainer } from '@/components/Common/SectionLayout';
import styled from '@emotion/styled';

const MyPage = () => {
  const { user } = useAuthContext();
  if (!user) {
    return <div>로그인 된 사용자가 아닙니다.</div>;
  }
  const nickname = parseNickname(user.email);
  const email = user.email;
  return (
    <>
      <Header title="마이페이지" />
      <MyPageContainer>
        <SectionContainer>
          <p>마이페이지</p>
          <p>{nickname}님 안녕하세요!</p>
          <p>이메일 주소는{email}입니다.</p>
          <LogoutButton>로그아웃</LogoutButton>
        </SectionContainer>
      </MyPageContainer>
    </>
  );
};

export default MyPage;

const MyPageContainer = styled.main`
  display: flex;
  background-color: ${({ theme }) => theme.colors.backgroundDefault};
  height: calc(100vh - 56px);
  flex-direction: column;
`;
const LogoutButton = styled.button`
  padding: ${({ theme }) => theme.spacing.spacing2};
  background-color: ${({ theme }) => theme.colors.kakaoYellow};
  border: none;
  border-radius: 8px;
  &:focus {
    outline: none;
  }
`;
