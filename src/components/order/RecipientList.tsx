import { useFieldArray, type Control, type UseFieldArrayRemove } from 'react-hook-form';
import type { OrderFormValues } from '@/lib/schemas';
import * as S from '@/styles/OrderPage.styles';

interface Props {
  control: Control<OrderFormValues>;
  remove: UseFieldArrayRemove;
}

export const RecipientList = ({ control, remove }: Props) => {
  const { fields } = useFieldArray({
    control,
    name: 'recipients',
  });

  if (fields.length === 0) {
    return <div css={S.emptyRecipient}>받는 사람이 없습니다.
      <br /> 받는 사람을 추가해주세요.</div>;
  }

  return (
    <div>
      {fields.map((field, index) => (
        <div key={field.id} css={S.recipientItem}>
          <span>{field.name} ({field.phone}) - {field.quantity}개</span>
          <button type="button" onClick={() => remove(index)}>&times;</button>
        </div>
      ))}
    </div>
  );
};
