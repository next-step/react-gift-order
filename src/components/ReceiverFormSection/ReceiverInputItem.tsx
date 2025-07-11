import styled from '@emotion/styled';
import InputField from '@/components/common/InputField';
import {
  ERROR_MESSAGES,
  PHONE_REGEX,
  MIN_QUANTITY,
} from '@/constants/validation';
import { PLACEHOLDERS, LABELS } from '@/constants/receiverLabels';
import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import type { ReceiverFormValues } from '@/hooks/useReceiverForm';

interface Props {
  index: number;
  onDelete: () => void;
  register: UseFormRegister<ReceiverFormValues>;
  errors: FieldErrors<ReceiverFormValues>;
  isDuplicate: (phone: string, index: number) => boolean;
}

const ReceiverInputItem = ({
  index,
  onDelete,
  register,
  errors,
  isDuplicate,
}: Props) => {
  const fields = [
    {
      key: 'name',
      type: 'text',
      placeholder: PLACEHOLDERS.NAME,
      rules: {
        required: ERROR_MESSAGES.EMPTY_RECEIVER_NAME,
      },
      error: errors.receivers?.[index]?.name?.message,
    },
    {
      key: 'phone',
      type: 'tel',
      placeholder: PLACEHOLDERS.PHONE,
      rules: {
        required: ERROR_MESSAGES.EMPTY_RECEIVER_PHONE,
        pattern: {
          value: PHONE_REGEX,
          message: ERROR_MESSAGES.INVALID_PHONE,
        },
        validate: (value: string | number) =>
          typeof value === 'string'
            ? !isDuplicate(value, index) || ERROR_MESSAGES.DUPLICATE_PHONE
            : true,
      },
      error: errors.receivers?.[index]?.phone?.message,
    },
    {
      key: 'quantity',
      type: 'number',
      placeholder: PLACEHOLDERS.QUANTITY,
      rules: {
        valueAsNumber: true,
        required: ERROR_MESSAGES.INVALID_QUANTITY,
        min: {
          value: MIN_QUANTITY,
          message: ERROR_MESSAGES.INVALID_QUANTITY,
        },
      },
      error: errors.receivers?.[index]?.quantity?.message,
    },
  ] as const;

  return (
    <Wrapper>
      <InputHeader>
        <h4>{LABELS.getReceiverTitle(index)}</h4>
        <DeleteButton type="button" onClick={onDelete}>
          {LABELS.DELETE}
        </DeleteButton>
      </InputHeader>

      {fields.map(({ key, type, placeholder, rules, error }) => (
        <InputField
          key={key}
          type={type}
          placeholder={placeholder}
          {...register(`receivers.${index}.${key}` as const, rules)}
          error={error}
        />
      ))}
    </Wrapper>
  );
};

export default ReceiverInputItem;

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.color.gray[300]};
  border-radius: 8px;
`;

const InputHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.color.gray[500]};
  cursor: pointer;
  ${({ theme }) => theme.typography.body.body2Regular};
`;
