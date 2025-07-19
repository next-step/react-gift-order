import { useForm, useFieldArray, type SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import * as S from '@/styles/OrderPage.styles';
import type { OrderFormValues } from '@/lib/schemas';

type ManagerFormValues = {
  recipients: OrderFormValues['recipients'];
};

const recipientFormSchema = z.object({
  recipients: z.array(z.object({
    name: z.string().min(1, '이름을 입력해주세요.'),
    phone: z.string().regex(/^010\d{8}$/, '올바른 전화번호 형식이 아닙니다.'),
    quantity: z.number().min(1, '수량은 1개 이상이어야 합니다.'),
  })).max(10, '최대 10명까지 추가할 수 있습니다.')
}).refine((data) => {
  const phoneNumbers = data.recipients.map(r => r.phone);
  return new Set(phoneNumbers).size === phoneNumbers.length;
}, {
  message: '중복된 전화번호는 입력할 수 없습니다.',
  path: ['recipients'],
});

interface Props {
  initialRecipients: OrderFormValues['recipients'];
  onComplete: (recipients: OrderFormValues['recipients']) => void;
  onClose: () => void;
}

export const AddRecipientModal = ({ initialRecipients, onComplete, onClose }: Props) => {
  const { control, register, handleSubmit, formState: { errors } } = useForm<ManagerFormValues>({
    resolver: zodResolver(recipientFormSchema),
    defaultValues: { recipients: initialRecipients },
    mode: 'onChange',
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'recipients',
  });

  const onValid: SubmitHandler<ManagerFormValues> = (data) => {
    onComplete(data.recipients);
  };

  const handleAddField = () => {
    if (fields.length >= 10) {
      alert('최대 10명까지만 추가할 수 있습니다.');
      return;
    }
    append({ name: '', phone: '', quantity: 1 });
  };

  return (
    <div css={S.overlay} onClick={onClose}>
      <div css={S.modalContent} onClick={(e) => e.stopPropagation()}>
        <button css={S.closeButton} onClick={onClose}>&times;</button>
        <div css={S.formSection}>
          <h3>받는 사람</h3>
          <p css={S.guideText}>* 최대 10명까지 추가할 수 있어요.</p>
          <p css={S.guideText}>* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.</p>
          <button type="button" onClick={handleAddField} css={S.cancelButton}>추가하기</button>
        </div>
        <main css={S.modalBody}>
          <form id="recipient-manager-form" onSubmit={handleSubmit(onValid)}>
            {fields.map((field, index) => (
              <div key={field.id} css={S.recipientFormItem}>
                <div css={S.recipientFormHeader}>
                  <h4>받는 사람 {index + 1}</h4>
                  <button type="button" onClick={() => remove(index)}>삭제</button>
                </div>
                <div css={S.formGroup}>
                  <label>이름</label>
                  <input
                    css={errors.recipients?.[index]?.name && S.inputError}
                    {...register(`recipients.${index}.name`)}
                    placeholder="이름을 입력하세요"
                  />
                  {errors.recipients?.[index]?.name && <p css={S.errorCss}>{errors.recipients?.[index]?.name?.message}</p>}
                </div>
                <div css={S.formGroup}>
                  <label>전화번호</label>
                  <input
                    css={errors.recipients?.[index]?.phone && S.inputError}
                    {...register(`recipients.${index}.phone`)}
                    placeholder="전화번호를 입력하세요"
                  />
                  {errors.recipients?.[index]?.phone && <p css={S.errorCss}>{errors.recipients?.[index]?.phone?.message}</p>}
                </div>
                <div css={S.formGroup}>
                  <label>수량</label>
                  <input
                    css={errors.recipients?.[index]?.quantity && S.inputError}
                    type="number"
                    {...register(`recipients.${index}.quantity`, { valueAsNumber: true })}
                    min="1"
                  />
                </div>
              </div>
            ))}
            {errors.recipients && <p css={S.errorCss}>{errors.recipients.message || errors.recipients.root?.message}</p>}

          </form>

        </main>

        <footer css={S.modalFooter}>
          <button type="button" onClick={onClose} css={S.cancelButton}>취소</button>
          <button type="submit" form="recipient-manager-form" css={S.submitButton}>
            {fields.length}명 완료
          </button>
        </footer>
      </div>
    </div>
  );
};
