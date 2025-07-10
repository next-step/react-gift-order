import { useForm, FormProvider, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import styled from "@emotion/styled";
import { receiverArraySchema } from "../../utils/validator";
import ReceiverFormItem from "./ReceiverFormItem";
import type { ReceiverArrayFormValues } from "../../utils/validator";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: ReceiverArrayFormValues) => void;
};

const ReceiverModal = ({ isOpen, onClose, onSubmit }: Props) => {
  const methods = useForm<ReceiverArrayFormValues>({
    resolver: zodResolver(receiverArraySchema),
    defaultValues: {
      receivers: [{ name: "", phone: "", quantity: 1 }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: methods.control,
    name: "receivers",
  });

  if (!isOpen) return null;

  return (
    <>
      <Backdrop />
      <ModalContainer>
        <div>
          <h2>받는 사람</h2>
          <Notice>
            * 최대 10명까지 추가 할 수 있어요.
            <br />* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.
          </Notice>
          <AddButton
            type="button"
            onClick={() => append({ name: "", phone: "", quantity: 1 })}
            disabled={fields.length >= 10}
          >
            추가하기
          </AddButton>
        </div>
        <FormProvider {...methods}>
          <ModalContentWrapper>
            <div>
              <FormWrapper>
                {fields.map((field, index) => (
                  <ReceiverFormItem
                    key={field.id}
                    field={field}
                    index={index}
                    onRemove={() => remove(index)}
                  />
                ))}
              </FormWrapper>
              <FixedButtonWrapper>
                <button
                  type="button"
                  onClick={methods.handleSubmit(
                    (data) => {
                      onSubmit(data);
                      onClose();
                    },
                    (errors) => {
                      console.log("유효성 검사 실패", errors);
                    }
                  )}
                >
                  완료
                </button>
                <button type="button" onClick={onClose}>
                  취소
                </button>
              </FixedButtonWrapper>
            </div>
          </ModalContentWrapper>
        </FormProvider>
      </ModalContainer>
    </>
  );
};

export default ReceiverModal;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 560px;
  height: 80%;
  background-color: white;
  z-index: 1000;
  overflow-y: auto;
  padding: 1rem;
  border-radius: 8px;
`;

const Notice = styled.p`
  font-size: 0.875rem;
  color: #666;
  margin-top: 0.25rem;
  margin-bottom: 1rem;
`;

const AddButton = styled.button`
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  background-color: #f5f5f5;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;

  &:disabled {
    background-color: #e0e0e0;
    cursor: not-allowed;
  }
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const FormWrapper = styled.div`
  padding-bottom: 4rem; // space for fixed buttons
`;

const FixedButtonWrapper = styled.div`
  position: sticky;
  bottom: 0;
  background-color: white;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  border-top: 1px solid #ddd;
`;

const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
