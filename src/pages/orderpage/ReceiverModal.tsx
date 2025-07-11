import { useForm, FormProvider, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import styled from "@emotion/styled";
import { receiverArraySchema } from "@/utils/validator";
import ReceiverFormItem from "./ReceiverFormItem";
import type { ReceiverArrayFormValues } from "@/utils/validator";
import { useEffect } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: ReceiverArrayFormValues) => void;
  initialReceivers: ReceiverArrayFormValues["receivers"];
};

const ReceiverModal = ({
  isOpen,
  onClose,
  onSubmit,
  initialReceivers,
}: Props) => {
  const methods = useForm<ReceiverArrayFormValues>({
    resolver: zodResolver(receiverArraySchema),
    defaultValues: {
      receivers: [],
    },
  });

  useEffect(() => {
    methods.reset({
      receivers:
        initialReceivers.length > 0
          ? initialReceivers
          : [{ name: "", phone: "", quantity: 1 }],
    });
  }, [initialReceivers]);

  const { fields, append, remove } = useFieldArray({
    control: methods.control,
    name: "receivers",
  });

  if (!isOpen) return null;

  return (
    <>
      <Backdrop />
      <ModalContainer>
        <FormProvider {...methods}>
          <ModalHeader>
            <Title>받는 사람</Title>
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
          </ModalHeader>
          <ModalBody>
            <ModalContentWrapper>
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
            </ModalContentWrapper>
          </ModalBody>
          <ModalFooter>
            <CompleteButton
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
            </CompleteButton>
            <CancelButton type="button" onClick={onClose}>
              취소
            </CancelButton>
          </ModalFooter>
        </FormProvider>
      </ModalContainer>
    </>
  );
};

export default ReceiverModal;

const ModalHeader = styled.div`
  flex-shrink: 0;
`;

const ModalBody = styled.div`
  flex: 1;
  overflow-y: auto;
`;

const ModalFooter = styled.div`
  flex-shrink: 0;
  background-color: white;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  border-top: 1px solid #ddd;
`;

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
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 16px;
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.typography.title1Regular.fontSize};
  color: ${({ theme }) => theme.colors.gray1000};
  margin-top: 0.25rem;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const Notice = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray800};
  margin-top: 0.25rem;
  margin-bottom: 1rem;
`;

const AddButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.gray300};
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 1rem;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray100};
    color: ${({ theme }) => theme.colors.gray300};
    cursor: not-allowed;
  }
`;

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const FormWrapper = styled.div`
  padding-bottom: 4rem;
`;

const CompleteButton = styled.button`
  background-color: ${({ theme }) => theme.colors.kakaoYellow};
  border: none;
  border-radius: 1rem;
  padding: 1rem;
  width: 70%;
  font-size: ${({ theme }) => theme.typography.subtitle1Regular.fontSize};
`;

const CancelButton = styled.button`
  background-color: ${({ theme }) => theme.colors.gray300};
  border: none;
  border-radius: 1rem;
  padding: 1rem;
  width: 30%;
  font-size: ${({ theme }) => theme.typography.subtitle1Regular.fontSize};
`;

const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
