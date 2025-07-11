import { css } from '@emotion/react';
import OrderFormInput from './OrderFormInput';
import type { OrderValues } from '@src/hooks/useOrderForm';
import theme from '@/styles/tokens';
import close from '@/assets/icons/close.svg';

const cover = css`
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
`;
const hrStyle = css`
  width: 100%;
  height: 1px;
  background-color: ${theme.colors.gray400};
  margin: 8px 0px 16px;
  box-sizing: border-box;
  border: 0;
`;
const recipientFormDiv = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 8px 0px;
`;

const recipientSideP = css`
  font-size: ${theme.typography.body1Regular.fontSize};
  font-weight: ${theme.typography.body1Regular.fontWeight};
  line-height: ${theme.typography.body1Regular.lineHeight};
  color: ${theme.colors.textDefault};
  margin: 0px;
  text-align: left;
  min-width: 3.75rem;
`;

const recipientRightInputDiv = css`
  width: 100%;
  box-sizing: border-box;
`;

const headStyle = css`
  display: flex;
  align-items: center;
`;

const headTitleP = css`
  font-size: ${theme.typography.subtitle2Bold.fontSize};
  font-weight: ${theme.typography.subtitle2Bold.fontWeight};
  line-height: ${theme.typography.subtitle2Bold.lineHeight};
  color: ${theme.colors.textDefault};
  margin: 0px;
  text-align: left;
`;

const closeImgStyle = css`
  margin-left: 0.25rem;
`;

const space8 = css`
  height: ${theme.spacing.spacing2};
`;

interface Props {
  values: OrderValues;
  errors: Partial<OrderValues>;
  onChange: (name: keyof OrderValues, value: string) => void;
  onRemove?: () => void;
  index?: number;
  onBlur?: (name: keyof OrderValues) => void;
}

const RecipientForm = ({
  values,
  errors,
  onChange,
  onRemove,
  index,
  onBlur,
}: Props) => {
  return (
    <div css={cover}>
      {index !== undefined && index > 0 && <hr css={hrStyle} />}

      <div css={headStyle}>
        <p css={headTitleP}>받는 사람 {index !== undefined ? index + 1 : 1}</p>
        {onRemove && (
          <img
            css={closeImgStyle}
            src={close}
            alt="삭제 버튼"
            onClick={onRemove}
            style={{ cursor: 'pointer' }}
          />
        )}
      </div>

      <div css={recipientFormDiv}>
        <p css={recipientSideP}>이름</p>
        <div css={recipientRightInputDiv}>
          <OrderFormInput
            name="recipientName"
            value={values.recipientName}
            placeholder="이름을 입력하세요."
            error={errors.recipientName}
            onChange={(e) => onChange('recipientName', e.target.value)}
            onBlur={onBlur ? () => onBlur('recipientName') : undefined}
          />
        </div>
      </div>

      <div css={space8} />

      <div css={recipientFormDiv}>
        <p css={recipientSideP}>전화번호</p>
        <div css={recipientRightInputDiv}>
          <OrderFormInput
            name="recipientPhone"
            value={values.recipientPhone}
            placeholder="전화번호를 입력하세요."
            error={errors.recipientPhone}
            onChange={(e) => onChange('recipientPhone', e.target.value)}
            onBlur={onBlur ? () => onBlur('recipientPhone') : undefined}
          />
        </div>
      </div>

      <div css={space8} />

      <div css={recipientFormDiv}>
        <p css={recipientSideP}>수량</p>
        <div css={recipientRightInputDiv}>
          <OrderFormInput
            name="quantity"
            type="number"
            min={1}
            value={values.quantity}
            placeholder="수량을 입력하세요."
            error={errors.quantity}
            onChange={(e) => onChange('quantity', e.target.value)}
            onBlur={onBlur ? () => onBlur('quantity') : undefined}
          />
        </div>
      </div>
    </div>
  );
};

export default RecipientForm;
