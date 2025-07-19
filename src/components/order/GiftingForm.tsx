import * as S from '@/styles/OrderPage.styles';
import { type UseFormRegister, type FieldErrors } from 'react-hook-form';
import type { OrderFormValues } from '@/lib/schemas';

interface Props {
  register: UseFormRegister<OrderFormValues>;
  errors: FieldErrors<OrderFormValues>;
}

export const GiftingForm = ({ register }: Props) => (
  <>
    <div css={S.formSection}>
      <h3>보내는 사람</h3>
      <div css={S.formGroup}>
        <input {...register('senderName')} placeholder="이름을 입력하세요" />
      </div>
    </div>
  </>
);
