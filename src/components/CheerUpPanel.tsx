import styled from "@emotion/styled";
import theme from "@src/styles/kakaoTheme";

function CheerUpPanel() {
  return (
    <RecipientSelectorWrapper>
      <InnerBox>
        <MiniMessageBox>카카오테크 캠퍼스 3기여러분</MiniMessageBox>
        <MessageBox>프론트엔드 2단계 과제 화이팅! 🎉</MessageBox>
      </InnerBox>
    </RecipientSelectorWrapper>
  );
}

const MiniMessageBox = styled.p`
  font-size: 14px;
  color: gray;
  margin: 0;
`;

const MessageBox = styled.p`
  margin: 0;
`;

const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 10px;
  padding: 20px;
  width: 100%;
  background-color: ${theme.colors.yellow.yellow600};
  border-radius: 20px;
`;

const RecipientSelectorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: white;
`;

export default CheerUpPanel;
