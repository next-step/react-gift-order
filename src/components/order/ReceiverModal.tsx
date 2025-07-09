/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { FormProvider } from "react-hook-form";
import { useReceiverForm } from "@/hooks/useReceiverForm";
import ReceiverList from "./ReceiverList";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (data: any) => void;
};

const ReceiverModal = ({ isOpen, onClose, onComplete }: Props) => {
  const {
    methods,
    handleSubmit,
    isValid,
    reset,
  } = useReceiverForm();

  if (!isOpen) return null;

  const handleComplete = handleSubmit((data) => {
    onComplete(data.receivers);
    reset(); // 입력 초기화
    onClose();
  });

  return (
    <Backdrop>
      <ModalContainer>
        <Header>
          <Title>받는 사람 입력</Title>
          <CloseButton onClick={onClose}>✕</CloseButton>
        </Header>

        <FormProvider {...methods}>
          <Form onSubmit={handleComplete}>
            <ReceiverList />

            <Footer>
              <CancelButton type="button" onClick={onClose}>
                취소
              </CancelButton>
              <SubmitButton type="submit" disabled={!isValid}>
                완료
              </SubmitButton>
            </Footer>
          </Form>
        </FormProvider>
      </ModalContainer>
    </Backdrop>
  );
};

export default ReceiverModal;
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContainer = styled.div`
  width: 100%;
  max-width: 480px;
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-sizing: border-box;
  max-height: 90vh;
  overflow-y: auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
`;

const CloseButton = styled.button`
  border: none;
  background: none;
  font-size: 20px;
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;

const CancelButton = styled.button`
  padding: 10px 16px;
  background-color: ${({ theme }) => theme.colors.gray300};
  border: none;
  border-radius: 6px;
  font-weight: bold;
`;

const SubmitButton = styled.button<{ disabled: boolean }>`
  padding: 10px 16px;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray400 : theme.colors.yellow500};
  color: black;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;
