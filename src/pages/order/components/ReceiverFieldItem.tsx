import { type FieldErrors, type UseFormRegister } from "react-hook-form";
import styled from "@emotion/styled";
import { validateReceiverName, validateQuantity } from "@/utils/validators";
import { ERROR_MESSAGES } from "@/constants/messages";
import { type Receiver } from "@/pages/order/components/ReceiverListSection";

interface ReceiverFieldItemProps {
  index: number;
  fieldId: string;
  register: UseFormRegister<{ receivers: Receiver[] }>;
  errors: FieldErrors<{ receivers: Receiver[] }>;
  onRemove: () => void;
  phoneValidator: (value: string) => string | true;
}

export default function ReceiverFieldItem({
  index,
  fieldId,
  register,
  errors,
  onRemove,
  phoneValidator,
}: ReceiverFieldItemProps) {
  return (
    <FieldRow key={fieldId}>
      <FieldHeader>
        <Label>받는 사람 {index + 1}</Label>
        <RemoveButton type="button" onClick={onRemove}>
          삭제
        </RemoveButton>
      </FieldHeader>

      {/* 이름 */}
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
            <ErrorMessage>{errors.receivers[index].name?.message}</ErrorMessage>
          )}
        </div>
      </LabelInputWrapper>

      {/* 전화번호 */}
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

      {/* 수량 */}
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
  );
}

export const FieldRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.spacing2};
  margin-bottom: ${({ theme }) => theme.spacing.spacing5};
  border-bottom: 1px solid
    ${({ theme }) => theme.colors.semantic.border.default};
  padding-bottom: ${({ theme }) => theme.spacing.spacing4};
`;

export const FieldHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.h3`
  ${({ theme }) => theme.typography.subtitle1Bold};
  color: ${({ theme }) => theme.colors.semantic.text.default};
`;

export const LabelInputWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.spacing2};
`;

export const InputLabel = styled.label`
  min-width: 60px;
  ${({ theme }) => theme.typography.body1Bold};
  color: ${({ theme }) => theme.colors.semantic.text.sub};
`;

export const StyledInput = styled.input`
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

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.colorScale.red.red700};
  ${({ theme }) => theme.typography.body1Bold};
  margin-top: 4px;
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.colorScale.red.red700};
  ${({ theme }) => theme.typography.body2Bold};
`;
