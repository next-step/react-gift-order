import styled from '@emotion/styled';

const StyledSelectFriendOuterContainer = styled.div`
  width: 720px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledSelectFriendBtn = styled.div`
  background-color: ${({ theme }) => theme.sementicPalette.backgroundDefault};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  width: 100%;
  height: 100%;
  margin: ${({ theme }) => theme.spacing.spacing4};
`;
const StyledSelectFriendBtnPlus = styled.div`
  background-color: ${({ theme }) => theme.sementicPalette.kakaoYellow};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 50px;
  border-radius: 15px;
  margin: ${({ theme }) => theme.spacing.spacing3};
  ${({ theme }) => theme.typography.title1Bold};
`;

const StyledSelectFriendP = styled.p`
  width: 100%;
  ${({ theme }) => theme.typography.title2Bold}
`;

const SelectFriendContainer = () => {
  const makeSelectFrinedMessage = () => {
    let msg = '선물할 친구를 선택해 주세요';
    const username = sessionStorage.getItem('username');
    if (username) {
      msg = username + '님! ' + msg;
      return msg;
    } else {
      return msg;
    }
  };

  return (
    <StyledSelectFriendOuterContainer>
      <StyledSelectFriendBtn>
        <StyledSelectFriendBtnPlus>+</StyledSelectFriendBtnPlus>
        <StyledSelectFriendP>{makeSelectFrinedMessage()}</StyledSelectFriendP>
      </StyledSelectFriendBtn>
    </StyledSelectFriendOuterContainer>
  );
};

export default SelectFriendContainer;
