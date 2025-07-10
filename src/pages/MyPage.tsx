import styled from '@emotion/styled';
import { TopNavBar } from '@/components/TopNavBar';
import AccountCircle from '@/assets/account_circle.svg?react';
import useUserInfo from '@/hooks/useUserInfo';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: auto;
  min-height: 100vh;
  max-width: 720px;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.gray200};
`;

const Body = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 2.8rem;
  background-color: white;
`;

const Block = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 22rem;
  height: 14rem;
  border-radius: 1.8rem;
  border-width: 4px;
  border-color: black;
  border-style: solid;
  padding: ${({ theme }) => theme.spacing.spacing4};
  margin-top: ${({ theme }) => theme.spacing.spacing16};
`;

const UserInfoHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 5rem;
  border-radius: 1rem;
  border-width: 4px;
  border-color: black;
  border-style: solid;
  box-sizing: border-box;
`;

const GreetingText = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 0.8rem;
`;

const Text = styled.div`
  color: black;
  font-size: 1.25rem;
  font-weight: 500;
  margin-top: 3px;
  margin-bottom: 3px;
`;

const Border = styled.div`
  width: 100%;
  border-bottom-width: 4px;
  border-color: black;
  border-style: solid;
  margin-top: ${({ theme }) => theme.spacing.spacing4};
  margin-bottom: ${({ theme }) => theme.spacing.spacing2};
`;

const UserInfo = styled.div`
  color: black;
  font-size: 1rem;
  font-weight: 500;
  margin-top: ${({ theme }) => theme.spacing.spacing2};
`;

const LogoutButton = styled.button`
  all: unset;
  cursor: pointer;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 2rem;
  background-color: ${({ theme }) => theme.colors.yellow600};
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 400;
  border-width: 1px;
  border-color: black;
  border-style: solid;
  right: ${({ theme }) => theme.spacing.spacing4};
  bottom: ${({ theme }) => theme.spacing.spacing4};
`;

const svgSize = 60;

const MyPage = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUserInfo();
  const emailId = user.id.split('@')[0];

  return (
    <Container>
      <TopNavBar title="선물하기" mainPath="/" />
      <Body>
        <Block>
          <UserInfoHeader>
            <AccountCircle
              fill="black"
              width={svgSize}
              height={svgSize}
              style={{ marginLeft: '0.8rem' }}
            />
            <GreetingText>
              <Text>안녕하세요,</Text>
              <Text style={{ fontSize: '1.5rem' }}>{emailId}님!</Text>
            </GreetingText>
          </UserInfoHeader>
          <Border />
          <UserInfo>회원 정보</UserInfo>
          <UserInfo>
            이메일 {'>'} {user.id}
          </UserInfo>
          <LogoutButton
            onClick={() => {
              setUser({ id: '', password: '' });
              navigate('/login');
            }}
          >
            로그아웃
          </LogoutButton>
        </Block>
      </Body>
    </Container>
  );
};

export default MyPage;
