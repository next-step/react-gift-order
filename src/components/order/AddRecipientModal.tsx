import { useForm, type SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import * as S from '@/styles/OrderPage.styles';

const recipientFormSchema = z.object({
  name: z.string().min(1, '이름을 입력해주세요.'),
  phone: z.string().regex(/^010\d{8}$/, '올바른 전화번호 형식이 아닙니다.'),
  quantity: z.number().min(1, '1개 이상 입력해주세요.'),
});

type RecipientFormValues = z.infer<typeof recipientFormSchema>;

interface Props {
  onAdd: (data: RecipientFormValues) => void;
  onClose: () => void;
  initialRecipients: RecipientFormValues[];
  existingPhones: string[];
}

export const AddRecipientModal = ({ onAdd, onClose, initialRecipients, existingPhones }: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<RecipientFormValues>({
    resolver: zodResolver(recipientFormSchema),
    defaultValues: { quantity: 1 },
  });

  const onSubmit: SubmitHandler<RecipientFormValues> = (data) => {
    if (initialRecipients.some(r => r.phone === data.phone)) {
      alert('이미 추가된 전화번호입니다.');
      return;
    }
    onAdd(data);
  };

  return (
    <div css={S.overlay} onClick={onClose}>
      <div css={S.modalContent} onClick={(e) => e.stopPropagation()}>
        <button css={S.closeButton} onClick={onClose}>&times;</button>
        <div css={S.formSection}>
          <h3>받는 사람</h3>
          <p css={S.guideText}>* 최대 10명까지 추가할 수 있어요.</p>
          <p css={S.guideText}>* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.</p>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <div css={S.formGroup}>
            <label>이름</label>
            <input {...register('name')} placeholder="이름을 입력하세요." />
            {errors.name && <p css={S.errorCss}>{errors.name.message}</p>}
          </div>
          
          <div css={S.formGroup}>
            <label>전화번호</label>
            <input {...register('phone')} placeholder="전화번호를 입력하세요." />
            {errors.phone && <p css={S.errorCss}>{errors.phone.message}</p>}
          </div>
          
          <div css={S.formGroup}>
            <label>수량</label>
            <input type="number" {...register('quantity', { valueAsNumber: true })} />
            {errors.quantity && <p css={S.errorCss}>{errors.quantity.message}</p>}
          </div>
          
          <div css={{ display: 'flex', gap: '8px', marginTop: '400px' }}>
            <button type="button" onClick={onClose} css={S.cancelButton}>취소</button>
            <button type="submit" css={S.modalsubmitButton}>1명 추가</button>
          </div>
        </form>
      </div>
    </div>
  );
};
