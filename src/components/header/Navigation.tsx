/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const HeaderContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.colors.backgroundDefault};
`;

const Left = styled.div`
  font-size: 30px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textDefault};
`;

const BackLink = styled.a`
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  ${({ theme }) => theme.typography.title1Bold};
  color: ${({ theme }) => theme.colors.textDefault};
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: ${({ theme }) => theme.colors.textDefault};
  cursor: pointer;
`;

const ProfileLink = styled.a`
  display: flex;
  align-items: center;
`;

export const Navigation = () => {
  return (
    <HeaderContainer>
      <Left>
        <BackLink href="/" aria-label="뒤로가기">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </BackLink>
      </Left>

      <Center>선물하기</Center>

      <Right>
        <ProfileLink href="/login?redirect=%2F" aria-label="프로필">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="8" r="5"></circle>
            <path d="M20 21a8 8 0 0 0-16 0"></path>
          </svg>
        </ProfileLink>
      </Right>
    </HeaderContainer>
  );
};
