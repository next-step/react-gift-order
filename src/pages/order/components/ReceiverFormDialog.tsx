import {
  type FieldErrors,
  type UseFormRegister,
  type Control,
  type UseFieldArrayAppend,
  type UseFieldArrayRemove,
  type FieldArrayWithId,
  type UseFormWatch,
} from "react-hook-form";
import styled from "@emotion/styled";
import { type Receiver } from "./ReceiverListSection";
import {
  createPhoneValidator,
  validateReceiverName,
  validateQuantity,
} from "@/utils/validators";
import { ERROR_MESSAGES } from "@/constants/messages";

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
  fields,
  append,
  remove,
  watch,
}: ReceiverFormDialogProps) {
  if (!open) return null;

  const phoneValidator = createPhoneValidator(() => watch("receivers"));

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
            onClick={() => {
              if (fields.length >= 10) return;
              append({ name: "", phone: "", quantity: 1 });
            }}
          >
            추가하기
          </AddButton>

          <ScrollArea>
            {fields.map((field, index) => (
              <FieldRow key={field.id}>
                <FieldHeader>
                  <Label>받는 사람 {index + 1}</Label>
                  <RemoveButton type="button" onClick={() => remove(index)}>
                    삭제
                  </RemoveButton>
                </FieldHeader>

                <LabelInputWrapper>
                  <InputLabel>이름</InputLabel>
                  <div style={{ flex: 1 }}>
                    <StyledInput
                      {...register(`receivers.${index}.name`, {
                        required: ERROR_MESSAGES.VALIDATE.NAME,
                        validate: validateReceiverName,
                      })}
                      placeholder="이름을 입력하세요."
                    />
                    {errors.receivers?.[index]?.name && (
                      <ErrorMessage>
                        {errors.receivers[index].name?.message}
                      </ErrorMessage>
                    )}
                  </div>
                </LabelInputWrapper>

                <LabelInputWrapper>
                  <InputLabel>전화번호</InputLabel>
                  <div style={{ flex: 1 }}>
                    <StyledInput
                      {...register(`receivers.${index}.phone`, {
                        required: ERROR_MESSAGES.VALIDATE.PHONE,
                        validate: phoneValidator,
                      })}
                      placeholder="01012341234"
                    />
                    {errors.receivers?.[index]?.phone && (
                      <ErrorMessage>
                        {errors.receivers[index].phone?.message}
                      </ErrorMessage>
                    )}
                  </div>
                </LabelInputWrapper>

                <LabelInputWrapper>
                  <InputLabel>수량</InputLabel>
                  <div style={{ flex: 1 }}>
                    <StyledInput
                      type="number"
                      min={1}
                      {...register(`receivers.${index}.quantity`, {
                        required: true,
                        valueAsNumber: true,
                        validate: validateQuantity,
                      })}
                      placeholder="1"
                    />
                    {errors.receivers?.[index]?.quantity && (
                      <ErrorMessage>
                        {errors.receivers[index].quantity?.message}
                      </ErrorMessage>
                    )}
                  </div>
                </LabelInputWrapper>
              </FieldRow>
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

const FieldRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.spacing2};
  margin-bottom: ${({ theme }) => theme.spacing.spacing5};
  border-bottom: 1px solid
    ${({ theme }) => theme.colors.semantic.border.default};
  padding-bottom: ${({ theme }) => theme.spacing.spacing4};
`;

const FieldHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.h3`
  ${({ theme }) => theme.typography.subtitle1Bold};
  color: ${({ theme }) => theme.colors.semantic.text.default};
`;

const LabelInputWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.spacing2};
`;

const InputLabel = styled.label`
  min-width: 60px;
  ${({ theme }) => theme.typography.body1Bold};
  color: ${({ theme }) => theme.colors.semantic.text.sub};
`;

const StyledInput = styled.input`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.spacing3};
  border: 1px solid ${({ theme }) => theme.colors.semantic.border.default};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.semantic.background.default};
  ${({ theme }) => theme.typography.body1Regular};
  color: ${({ theme }) => theme.colors.semantic.text.default};

  &::placeholder {
    color: ${({ theme }) => theme.colors.semantic.text.placeholder};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.colorScale.gray.gray600};
  }
`;

const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.colorScale.red.red700};
  ${({ theme }) => theme.typography.body1Bold};
  margin-top: 4px;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.colorScale.red.red700};
  ${({ theme }) => theme.typography.body2Bold};
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
