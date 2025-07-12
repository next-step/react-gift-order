import { useModal } from "@/contexts/ModalContext";
import styled from "@emotion/styled";
import DescriptionMessage from "../common/DescriptionMessage";
import { useFormContext, useFieldArray } from "react-hook-form";
import ReceiverForm from "./ReceiverForm";
import { useEffect } from "react";
import type { FormValues } from "@/types/receiver";

const ReceiverModal = () => {
  const { isOpen, closeModal } = useModal();
  const {
    control,
    register,
    trigger,
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext<FormValues>();
  const {
    fields: modalFields,
    append: modalAppend,
    remove: modalRemove,
  } = useFieldArray({
    control,
    name: "modalReceiver",
  });

  useEffect(() => {
    if (isOpen) {
      const currentReceiver = getValues("receiver");
      setValue("modalReceiver", [...currentReceiver]);
    }
  }, [isOpen, getValues, setValue]);

  if (!isOpen) return null;

  const handlePlus = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (modalFields.length < 10) {
      modalAppend({ name: "", phone: "", count: 1 });
    }
  };
  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    closeModal();
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const isValid = await trigger("modalReceiver");
    if (isValid) {
      const modalData = getValues("modalReceiver");
      setValue("receiver", [...modalData]);
      closeModal();
    }
  };

  return (
    <Backdrop>
      <ModalBox>
        <div>
          <Title>받는 사람</Title>
          <DescriptionMessage message="* 최대 10명까지 추가 할 수 있어요." />
          <DescriptionMessage message="* 받는 사람의 전화번호를 중복으로 입력할 수 없어요." />
          <PlusButton onClick={handlePlus} disabled={modalFields.length >= 10}>
            추가하기
          </PlusButton>
        </div>
        <FormDiv>
          {modalFields.length > 0 &&
            modalFields.map((field, index) => (
              <div key={field.id}>
                <ReceiverForm
                  index={index}
                  register={register}
                  errors={errors}
                  remove={modalRemove}
                />
                {index < modalFields.length - 1 && <Divider />}
              </div>
            ))}
        </FormDiv>
        <CloseDiv>
          <CloseButton variant="cancel" onClick={handleCancel}>
            취소
          </CloseButton>
          <CloseButton variant="submit" onClick={handleSubmit}>
            {modalFields.length}명 완료
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

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray.gray200};
    color: ${({ theme }) => theme.colors.gray.gray500};
    cursor: not-allowed;
  }
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

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray.gray400};
  margin: ${({ theme }) =>
    `${theme.spacing.spacing2} 0 ${theme.spacing.spacing4}`};
`;
