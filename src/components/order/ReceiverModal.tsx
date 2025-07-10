import { useModal } from "@/contexts/ModalContext";
import styled from "@emotion/styled";
import DescriptionMessage from "../common/DescriptionMessage";

const ReceiverModal = () => {
  const { isOpen, closeModal } = useModal();

  if (!isOpen) return null;

  return (
    <Backdrop>
      <ModalBox>
        <div>
          <Title>받는 사람</Title>
          <DescriptionMessage message="* 최대 10명까지 추가 할 수 있어요." />
          <DescriptionMessage message="* 받는 사람의 전화번호를 중복으로 입력할 수 없어요." />
          <PlusButton>추가하기</PlusButton>
        </div>
        <FormDiv></FormDiv>
        <CloseDiv>
          <CloseButton variant="cancel" onClick={closeModal}>
            취소
          </CloseButton>
          <CloseButton variant="submit" onClick={closeModal}>
            0명 완료
          </CloseButton>
        </CloseDiv>
      </ModalBox>
    </Backdrop>
  );
};

export default ReceiverModal;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
  padding: ${({ theme }) => theme.spacing.spacing4};
`;

const ModalBox = styled.div`
  width: 100%;
  max-width: 37.5rem;
  height: 100%;
  max-height: calc(-7.5rem + 100vh);
  background-color: white;
  padding: ${({ theme }) =>
    `${theme.spacing.spacing4} ${theme.spacing.spacing6}`};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.spacing4};
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.semantic.text.default};
  font-size: ${({ theme }) => theme.typography.title1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title1Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.title1Bold.lineHeight};
`;

const PlusButton = styled.button`
  margin-top: ${({ theme }) => theme.spacing.spacing2};
  padding: ${({ theme }) =>
    `${theme.spacing.spacing2} ${theme.spacing.spacing4}`};
  border-radius: 8px;
  font-size: ${({ theme }) => theme.typography.label2Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.label2Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.label2Regular.lineHeight};
  background-color: ${({ theme }) => theme.colors.gray.gray300};
  color: ${({ theme }) => theme.colors.semantic.text.default};
  cursor: pointer;
`;

const FormDiv = styled.div`
  flex: 1 1 0%;
  overflow: auto;
`;

const CloseDiv = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.spacing3};
`;

const CloseButton = styled.button<{ variant: "cancel" | "submit" }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: ${({ variant }) => (variant === "cancel" ? 1 : 3)} 1 0%;
  padding: ${({ theme }) =>
    `${theme.spacing.spacing3} ${theme.spacing.spacing6}`};
  background-color: ${({ theme, variant }) =>
    variant === "cancel"
      ? theme.colors.gray.gray300
      : theme.colors.semantic.kakaoYellow};
  color: ${({ theme }) => theme.colors.semantic.text.default};
  border-radius: 8px;
  font-size: ${({ theme }) => theme.typography.subtitle2Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle2Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.subtitle2Regular.lineHeight};
  cursor: pointer;
`;
