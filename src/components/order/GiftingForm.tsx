import * as S from '@/styles/OrderPage.styles';

interface Props {
  formValues: {
    senderName: string;
    recipientName: string;
    recipientPhone: string;
    quantity: number;
  };
  errors: Record<string, string>;
  onFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const GiftingForm = ({ formValues, errors, onFormChange }: Props) => (
  <>
    <div css={S.formSection}>
      <h3>보내는 사람</h3>
      <div css={S.formGroup}>
        <input type="text" name="senderName" placeholder="이름을 입력하세요" value={formValues.senderName} onChange={onFormChange} />
      </div>
      <p css={S.helperTextCss}>* 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.</p>
      {errors.senderName && <div css={S.errorCss}>{errors.senderName}</div>}
    </div>

    <hr css={S.divider} />

    <div css={S.formSection}>
      <h3>받는 사람</h3>
      <div css={S.formGroup}>
        <label>이름</label>
        <input type="text" name="recipientName" placeholder="이름을 입력하세요" value={formValues.recipientName} onChange={onFormChange} />
      </div>
      {errors.recipientName && <div css={[S.errorCss, {paddingLeft: '70px'}]}>{errors.recipientName}</div>}

      <div css={S.formGroup}>
        <label>전화번호</label>
        <input type="tel" name="recipientPhone" placeholder="전화번호를 입력하세요" value={formValues.recipientPhone} onChange={onFormChange} />
      </div>
      {errors.recipientPhone && <div css={[S.errorCss, {paddingLeft: '70px'}]}>{errors.recipientPhone}</div>}

      <div css={S.formGroup}>
        <label>수량</label>
        <input type="number" name="quantity" value={formValues.quantity} onChange={onFormChange} min="1" />
      </div>
      {errors.quantity && <div css={[S.errorCss, {paddingLeft: '70px'}]}>{errors.quantity}</div>}
    </div>
  </>
);
