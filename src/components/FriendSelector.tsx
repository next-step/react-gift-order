import styled from '@emotion/styled';

import  useUser from '@/hooks/useUser';

const FriendSelectorWrapper = styled.div`
  width: auto;
  height: auto;
  padding: ${({ theme }) => theme.spacing.spacing4} ${({ theme }) => theme.spacing.spacing3};
  background-color: ${({ theme }) => theme.colors.gray.gray200};
`;

const FriendSelectorBox = styled.div`
  width: auto;
  height: auto;
  padding: ${({ theme }) => theme.spacing.spacing4} ${({ theme }) => theme.spacing.spacing4};
  background-color: ${({ theme }) => theme.colors.gray.gray00};
  border-radius: 16px;
  cursor: pointer;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const FriendSelectorBtn = styled.div`
  width: ${({ theme }) => theme.spacing.spacing10};
  height: ${({ theme }) => theme.spacing.spacing10};
  background-color: ${({ theme }) => theme.colors.brand.kakaoYellow};
  border-radius: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const FriendSelectorTxt = styled.p`
  font-size: ${({ theme }) => theme.typography.body.body1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.body.body1Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.body.body1Bold.lineHeight};
  margin-left: ${({ theme }) => theme.spacing.spacing3};
`;

function FriendSelector() {
  const {getId} = useUser(); // session storage에 있는 로그인 정보
  const userName = getId();
  
  return (
    <FriendSelectorWrapper>
      <FriendSelectorBox>
        <FriendSelectorBtn>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2a3038" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-plus" aria-hidden="true">
            <path d="M5 12h14"></path>
            <path d="M12 5v14"></path>
          </svg>
        </FriendSelectorBtn>
        <FriendSelectorTxt>
          {userName && userName + '님! '}선물할 친구를 선택해 주세요.
        </FriendSelectorTxt>
      </FriendSelectorBox>
    </FriendSelectorWrapper>
  );
}

export default FriendSelector;
