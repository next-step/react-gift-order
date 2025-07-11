import styled from '@emotion/styled';
import InputField from '@/components/common/InputField';
import {
  ERROR_MESSAGES,
  PHONE_REGEX,
  MIN_QUANTITY,
} from '@/constants/validation';
import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import type { ReceiverFormValues } from '../../hooks/useReceiverForm';

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
  return (
    <Wrapper>
      <InputHeader>
        <h4>받는 사람 {index + 1}</h4>
        <DeleteButton type="button" onClick={onDelete}>
          삭제
        </DeleteButton>
      </InputHeader>

      <InputField
        type="text"
        placeholder="이름을 입력하세요."
        {...register(`receivers.${index}.name`, {
          required: ERROR_MESSAGES.EMPTY_RECEIVER_NAME,
        })}
        error={errors.receivers?.[index]?.name?.message}
      />

      <InputField
        type="tel"
        placeholder="전화번호를 입력하세요."
        {...register(`receivers.${index}.phone`, {
          required: ERROR_MESSAGES.EMPTY_RECEIVER_PHONE,
          pattern: {
            value: PHONE_REGEX,
            message: ERROR_MESSAGES.INVALID_PHONE,
          },
          validate: value =>
            !isDuplicate(value, index) || '전화번호가 중복되었습니다.',
        })}
        error={errors.receivers?.[index]?.phone?.message}
      />

      <InputField
        type="number"
        placeholder="수량"
        {...register(`receivers.${index}.quantity`, {
          valueAsNumber: true,
          min: {
            value: MIN_QUANTITY,
            message: ERROR_MESSAGES.INVALID_QUANTITY,
          },
          required: ERROR_MESSAGES.INVALID_QUANTITY,
        })}
        error={errors.receivers?.[index]?.quantity?.message}
      />
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
  color: ${({ theme }) => theme.color.red[500]};
  cursor: pointer;
  ${({ theme }) => theme.typography.body.body2Regular};
`;
