
import styled from '@emotion/styled';
import { useFormContext } from 'react-hook-form';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import type { ReceiversModelType } from '@/models/OrderFormModel';

interface ReceiverFieldSetProps {
  index: number;
  onRemove: (index: number) => void;
}

export function ReceiverFieldSet({ index, onRemove }: ReceiverFieldSetProps) {
  const { register, formState: { errors } } = useFormContext<ReceiversModelType>();

  return (
    <FieldSet>
      <Input
        placeholder="이름을 입력하세요."
        {...register(`receivers.${index}.receiverName`)}
        error={errors.receivers?.[index]?.receiverName?.message}
      />
      <Input
        placeholder="전화번호를 입력하세요."
        {...register(`receivers.${index}.phoneNumber`)}
        error={errors.receivers?.[index]?.phoneNumber?.message}
      />
      <Input
        type="number"
        defaultValue={1}
        {...register(`receivers.${index}.quantity`, { valueAsNumber: true })}
        error={errors.receivers?.[index]?.quantity?.message}
      />
      <Button type="button" onClick={() => onRemove(index)} variant="secondary">
        삭제
      </Button>
    </FieldSet>
  );
}

const FieldSet = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
