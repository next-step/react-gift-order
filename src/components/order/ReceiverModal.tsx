/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { FormProvider } from "react-hook-form";
import { useReceiverForm } from "@/hooks/useReceiverForm";
import ReceiverList from "./ReceiverList";
import type { ReceiverFormValues } from "@/validations/receiverSchema";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (data: ReceiverFormValues["receivers"]) => void;
};

const ReceiverModal = ({ isOpen, onClose, onComplete }: Props) => {
  const {
    methods,
    fields,
    append,
    remove,
    handleSubmit,
    isValid,
  } = useReceiverForm();

  if (!isOpen) return null;

  const handleComplete = handleSubmit((data) => {
    onComplete(data.receivers);
    onClose();
  });

  const handleAdd = () => {
    if (fields.length < 10) {
      append({ name: "", phone: "", quantity: 1 });
    }
  };

  return (
    <Backdrop>
      <Container>
        <FormProvider {...methods}>
          <Form onSubmit={handleComplete}>
            <Header>
              <Title>받는 사람</Title>
              <Guide>* 최대 10명까지 추가할 수 있어요.</Guide>
              <Guide>* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.</Guide>
              <AddButton
                type="button"
                onClick={handleAdd}
                disabled={fields.length >= 10}
              >
                추가하기
              </AddButton>
            </Header>

            <ScrollableArea>
              <ReceiverList fields={fields} remove={remove} />
            </ScrollableArea>

            <Footer>
              <Cancel type="button" onClick={onClose}>
                취소
              </Cancel>
              <Submit type="submit" disabled={fields.length < 1 || !isValid}>
                {fields.length}명 완료
              </Submit>
            </Footer>
          </Form>
        </FormProvider>
      </Container>
    </Backdrop>
  );
};

export default ReceiverModal;

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

const Container = styled.div`
  width: 100%;
  max-width: 640px;
  height: 700px; 
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`;

const Header = styled.div`
  flex-shrink: 0;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 6px;
  color: #000;
`;

const Guide = styled.p`
  font-size: 13px;
  color: #000;
  margin: 2px 0;
`;

const AddButton = styled.button`
  margin-top: 12px;
  padding: 8px 16px;
  font-size: 14px;
  background: ${({ theme }) => theme.colors.gray100};
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  color: #000;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ScrollableArea = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-top: 16px;
  padding-right: 4px;
  &::-webkit-scrollbar {
    display: none; 
  }
`;

const Footer = styled.div`
  flex-shrink: 0;
  display: flex;
  gap: 12px;
  margin-top: 24px;
`;

const Cancel = styled.button`
  flex: 1;
  padding: 12px 0;
  font-size: 15px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray200};
  color: #000;
`;

const Submit = styled.button<{ disabled: boolean }>`
  flex: 2;
  padding: 12px 0;
  font-size: 15px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray300 : theme.colors.yellow500};
  color: #000;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;
