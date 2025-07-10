import styled from "@emotion/styled";
import Divider from "@/components/common/Divider";
import RecipientFieldInputForm from "./RecipientFieldInputForm";

const RecipientFieldModal = () => {
  return (
    <Container>
      <Content>
        <div>
          <Title>받는 사람</Title>
          <Divider spacing="0.25rem" />
          <HelpMsg>* 최대 10명까지 추가할 수 있어요.</HelpMsg>
          <HelpMsg>* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.</HelpMsg>
          <Divider spacing="0.5rem" />
          <AddBtn type="button">추가하기</AddBtn>
        </div>
        <FieldWrapper>
          <RecipientFieldInputForm />
        </FieldWrapper>
        <BtnWrapper>
          <CancelBtn type="button">취소</CancelBtn>
          <ConfirmBtn type="button">확인</ConfirmBtn>
        </BtnWrapper>
      </Content>
    </Container>
  );
};

export default RecipientFieldModal;

const Container = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  z-index: 1000;
  visibility: visible;
  inset: 0;
  padding: ${({ theme }) => theme.spacing.spacing14} ${({ theme }) => theme.spacing.spacing4};
`;
const Content = styled.div`
  max-width: 37.5rem;
  background-color: ${({ theme }) => theme.color.backgroundColor.default};
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  padding: ${({ theme }) => theme.spacing.spacing4} ${({ theme }) => theme.spacing.spacing6};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.spacing4};
`;
const Title = styled.h3`
  width: 100%;
  font: ${({ theme }) => theme.typography.title1Bold};
`;
const HelpMsg = styled.p`
  width: 100%;
  font: ${({ theme }) => theme.typography.label2Regular};
  color: ${({ theme }) => theme.color.gray800};
`;
const AddBtn = styled.button`
  ${({ theme }) => {
    return `
      background-color: ${theme.color.backgroundColor.fill}
      font: ${theme.typography.label1Regular};
      padding: ${theme.spacing.spacing2} ${theme.spacing.spacing4};
    `;
  }}
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
`;
const FieldWrapper = styled.div`
  flex: 1 1 0%;
  overflow: auto;
`;
const BtnWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.spacing3};
`;
const CancelBtn = styled.button`
  font: ${({ theme }) => theme.typography.body2Regular};
  border: none;
  border-radius: 0.5rem;
  padding: ${({ theme }) => theme.spacing.spacing3} ${({ theme }) => theme.spacing.spacing6};
  flex: 1 1 0%;
  cursor: pointer;
`;
const ConfirmBtn = styled.button`
  background-color: ${({ theme }) => theme.color.kakaoYellow};
  font: ${({ theme }) => theme.typography.body2Regular};
  border: none;
  border-radius: 0.5rem;
  padding: ${({ theme }) => theme.spacing.spacing3} ${({ theme }) => theme.spacing.spacing6};
  flex: 3 1 0%;
  cursor: pointer;
`;
