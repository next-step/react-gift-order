import {
  type FieldErrors,
  type UseFormRegister,
  type Control,
  type UseFieldArrayAppend,
  type UseFieldArrayRemove,
  type FieldArrayWithId,
  type UseFormWatch,
  useWatch,
} from "react-hook-form";
import styled from "@emotion/styled";
import { type Receiver } from "@/pages/order/components/ReceiverListSection";
import { createPhoneValidator } from "@/utils/validators";
import ReceiverFieldItem from "@/pages/order/components/ReceiverFieldItem";
import {
  INITIAL_PRODUCT_QUANTITY,
  MAX_RECEIVER_COUNT,
} from "@/constants/validation";
import { useMemo } from "react";

interface FormValues {
  receivers: Receiver[];
}

interface ReceiverFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
  errors: FieldErrors<FormValues>;
  register: UseFormRegister<FormValues>;
  control: Control<FormValues>;
  fields: FieldArrayWithId<FormValues, "receivers", "id">[];
  append: UseFieldArrayAppend<FormValues, "receivers">;
  remove: UseFieldArrayRemove;
  watch: UseFormWatch<FormValues>;
}

export default function ReceiverFormDialog({
  open,
  onClose,
  onSubmit,
  errors,
  register,
  control,
  fields,
  append,
  remove,
  watch,
}: ReceiverFormDialogProps) {
  const receivers = useWatch({ control, name: "receivers" });
  const phoneValidator = useMemo(
    () => createPhoneValidator(() => receivers),
    [receivers],
  );

  if (!open) return null;

  return (
    <Overlay>
      <DialogBox>
        <form onSubmit={onSubmit}>
          <Title>받는 사람</Title>
          <Description>
            * 최대 10명까지 추가할 수 있어요.
            <br />* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.
          </Description>

          <AddButton
            type="button"
            disabled={fields.length >= MAX_RECEIVER_COUNT}
            onClick={() => {
              append({
                name: "",
                phone: "",
                quantity: INITIAL_PRODUCT_QUANTITY,
              });
            }}
          >
            추가하기
          </AddButton>

          <ScrollArea>
            {fields.map((field, index) => (
              <ReceiverFieldItem
                key={field.id}
                index={index}
                fieldId={field.id}
                register={register}
                errors={errors}
                onRemove={() => remove(index)}
                phoneValidator={phoneValidator}
              />
            ))}
          </ScrollArea>

          <Footer>
            <CancelButton type="button" onClick={onClose}>
              취소
            </CancelButton>
            <ConfirmButton type="submit">{fields.length}명 완료</ConfirmButton>
          </Footer>
        </form>
      </DialogBox>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1100;
`;

const DialogBox = styled.div`
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  background: ${({ theme }) => theme.colors.semantic.background.default};
  border-radius: 16px;
  padding: ${({ theme }) => theme.spacing.spacing5};
`;

const Title = styled.h2`
  ${({ theme }) => theme.typography.title2Bold};
  color: ${({ theme }) => theme.colors.semantic.text.default};
  margin-bottom: ${({ theme }) => theme.spacing.spacing2};
`;

const Description = styled.p`
  ${({ theme }) => theme.typography.body2Regular};
  color: ${({ theme }) => theme.colors.semantic.text.sub};
  margin-bottom: ${({ theme }) => theme.spacing.spacing4};
`;

const AddButton = styled.button`
  padding: ${({ theme }) => theme.spacing.spacing2}
    ${({ theme }) => theme.spacing.spacing4};
  background-color: ${({ theme }) => theme.colors.colorScale.gray.gray200};
  color: ${({ theme }) => theme.colors.semantic.text.default};
  border: none;
  border-radius: 12px;
  ${({ theme }) => theme.typography.body2Regular};
  margin-bottom: ${({ theme }) => theme.spacing.spacing4};
`;

const ScrollArea = styled.div`
  max-height: 400px;
  overflow-y: auto;
  padding-right: ${({ theme }) => theme.spacing.spacing2};
`;

const Footer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.spacing3};
  margin-top: ${({ theme }) => theme.spacing.spacing5};
`;

const CancelButton = styled.button`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.colorScale.gray.gray200};
  color: ${({ theme }) => theme.colors.semantic.text.default};
  border: none;
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.spacing3};
  ${({ theme }) => theme.typography.subtitle1Bold};
`;

const ConfirmButton = styled.button`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.brand.kakao.yellow};
  color: #000;
  border: none;
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.spacing3};
  ${({ theme }) => theme.typography.subtitle1Bold};
`;
