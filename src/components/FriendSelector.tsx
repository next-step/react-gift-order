import styled from '@emotion/styled';

const FriendSelectorWrapper = styled.div`
  width: auto;
  height: 65px;
  padding: 14px;
  background-color: ${({ theme }) => theme.colors.gray[200]};
`;

const FriendSelectorBox = styled.div`
  width: auto;
  height: auto;
  padding: 13px;
  background-color: ${({ theme }) => theme.colors.gray[0]};
  border-radius: 15px;
  cursor: pointer;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const FriendSelectorBoxBtn = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.semantic.kakaoYellow};
  border-radius: 15px;

  display: flex;
  justify-content: center;

  &::before {
    content: '+';
    font-size: 34px;
    font-weight: 100;
    color: ${({ theme }) => theme.colors.gray[1000]};
  }
`;

const FriendSelectorBoxText = styled.p`
  font-size: ${({ theme }) => theme.typography.subtitle1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle1Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.subtitle1Bold.lineHeight};
  margin-left: 12px;
`;

function FriendSelector() {
  return (
    <FriendSelectorWrapper>
      <FriendSelectorBox>
        <FriendSelectorBoxBtn></FriendSelectorBoxBtn>
        <FriendSelectorBoxText>
          선물할 친구를 선택해 주세요.
        </FriendSelectorBoxText>
      </FriendSelectorBox>
    </FriendSelectorWrapper>
  );
}

export default FriendSelector;
