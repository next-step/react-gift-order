import styled from '@emotion/styled';
import { useFormContext, useWatch } from 'react-hook-form';
import InputField from '@/components/common/InputField';
import {
  ERROR_MESSAGES,
  PHONE_REGEX,
  MIN_QUANTITY,
} from '@/constants/validation';
import { PLACEHOLDERS, LABELS } from '@/constants/receiverLabels';
import type { Receiver } from '@/types/receiver';

interface Props {
  index: number;
  onDelete: () => void;
}

const ReceiverInputItem = ({ index, onDelete }: Props) => {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext<{ receivers: Receiver[] }>();

  const receivers = useWatch({ name: 'receivers', control });
  const fields = getReceiverFields(index, receivers, errors);

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

const getReceiverFields = (
  index: number,
  receivers: Receiver[],
  errors: any
) => {
  const isDuplicate = (phone: string) =>
    receivers.filter((r, i) => r?.phone === phone && i !== index).length > 0;

  return [
    {
      key: 'name',
      type: 'text',
      placeholder: PLACEHOLDERS.NAME,
      rules: {
        required: ERROR_MESSAGES.EMPTY_RECEIVER_NAME,
      },
      error:
        typeof errors.receivers?.[index]?.name?.message === 'string'
          ? errors.receivers[index].name.message
          : undefined,
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
            ? !isDuplicate(value) || ERROR_MESSAGES.DUPLICATE_PHONE
            : true,
      },
      error:
        typeof errors.receivers?.[index]?.phone?.message === 'string'
          ? errors.receivers[index].phone.message
          : undefined,
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
      error:
        typeof errors.receivers?.[index]?.quantity?.message === 'string'
          ? errors.receivers[index].quantity.message
          : undefined,
    },
  ] as const;
};

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
