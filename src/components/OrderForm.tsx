import { css } from '@emotion/react';
import theme from '@src/styles/tokens/index';

const coverStyle = css`
  width: 100%;
  padding: 0px 1rem;
  box-sizing: border-box;
`;

const inputStyle = css`
  width: 100%;
  box-sizing: border-box;
  color: ${theme.colors.textDefault};
  transition: border-color 200ms;
  border-style: solid;
  min-height: 2.75rem;
  font-size: ${theme.typography.body1Regular.fontSize};
  font-weight: ${theme.typography.body1Regular.fontWeight};
  line-height: ${theme.typography.body1Regular.lineHeight};
  padding: 8px 12px;
  border-width: 1px;
  border-radius: 8px;
  border-color: ${theme.colors.borderDefault};
`;

const inputErrorStyle = css`
  border-color: red;
`;

const noticeP = css`
  font-size: ${theme.typography.label2Regular.fontSize};
  font-weight: ${theme.typography.label2Regular.fontWeight};
  line-height: ${theme.typography.label2Regular.lineHeight};
  color: ${theme.colors.textSub};
  margin: 0px;
  text-align: left;
`;

const errorText = css`
  font-weight: ${theme.typography.label2Regular.fontWeight};
  font-size: ${theme.typography.label2Regular.fontSize};
  color: red;
  margin-top: 4px;
  margin-bottom: 0;
  text-align: left;
`;

const recipientFormDiv = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  width: 100%;
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

const recipientRightInput = css`
  width: 100%;
  box-sizing: border-box;
  color: ${theme.colors.textDefault};
  transition: border-color 200ms;
  border-style: solid;
  min-height: 2.75rem;
  font-size: ${theme.typography.body1Regular.fontSize};
  font-weight: ${theme.typography.body1Regular.fontWeight};
  line-height: ${theme.typography.body1Regular.lineHeight};
  padding: 8px 12px;
  border-width: 1px;
  border-radius: 8px;
  border-color: ${theme.colors.borderDefault};
`;
const pTitle = css`
  font-size: ${theme.typography.title2Bold.fontSize};
  font-weight: ${theme.typography.title2Bold.fontWeight};
  line-height: ${theme.typography.title2Bold.lineHeight};
  color: ${theme.colors.textDefault};
  margin: 0;
  text-align: left;
`;

const space12 = css`
  height: ${theme.spacing.spacing3};
`;

const space24 = css`
  height: ${theme.spacing.spacing6};
`;

const space8 = css`
  height: ${theme.spacing.spacing2};
`;

const colorspace8 = css`
  height: ${theme.spacing.spacing2};
  background-color: ${theme.colors.backgroundDisabled};
`;

interface FormValues {
  message: string;
  senderName: string;
  recipientName: string;
  recipientPhone: string;
  quantity: string;
}

interface Props {
  values: FormValues;
  errors: Partial<FormValues>;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const OrderForm = ({ values, errors, onChange }: Props) => {
  return (
    <>
      <div css={coverStyle}>
        <div css={space12} />
        <p css={pTitle}>보내는 사람</p>
        <div css={space12} />
        <div>
          <input
            css={[inputStyle, errors.senderName && inputErrorStyle]}
            type="text"
            placeholder="이름을 입력하세요."
            name="senderName"
            value={values.senderName}
            onChange={onChange}
          />
          {errors.senderName ? (
            <p css={errorText}>{errors.senderName}</p>
          ) : (
            <p css={noticeP}>
              * 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.
            </p>
          )}
        </div>
        <div css={space24} />
      </div>

      <div css={colorspace8} />

      <div css={coverStyle}>
        <div css={space12} />
        <p css={pTitle}>받는 사람</p>
        <div css={space12} />

        <div css={recipientFormDiv}>
          <p css={recipientSideP}>이름</p>
          <div css={recipientRightInputDiv}>
            <input
              css={[
                recipientRightInput,
                errors.recipientName && inputErrorStyle,
              ]}
              type="text"
              placeholder="이름을 입력하세요."
              name="recipientName"
              value={values.recipientName}
              onChange={onChange}
            />
            {errors.recipientName && (
              <p css={errorText}>{errors.recipientName}</p>
            )}
          </div>
        </div>

        <div css={space8} />

        <div css={recipientFormDiv}>
          <p css={recipientSideP}>전화번호</p>
          <div css={recipientRightInputDiv}>
            <input
              css={[
                recipientRightInput,
                errors.recipientPhone && inputErrorStyle,
              ]}
              type="text"
              placeholder="전화번호를 입력하세요."
              name="recipientPhone"
              value={values.recipientPhone}
              onChange={onChange}
            />
            {errors.recipientPhone && (
              <p css={errorText}>{errors.recipientPhone}</p>
            )}
          </div>
        </div>

        <div css={space8} />

        <div css={recipientFormDiv}>
          <p css={recipientSideP}>수량</p>
          <div css={recipientRightInputDiv}>
            <input
              css={[recipientRightInput, errors.quantity && inputErrorStyle]}
              type="number"
              min={1}
              placeholder="수량을 입력하세요."
              name="quantity"
              value={values.quantity}
              onChange={onChange}
            />
            {errors.quantity && <p css={errorText}>{errors.quantity}</p>}
          </div>
        </div>

        <div css={space24} />
      </div>

      <div css={colorspace8} />
    </>
  );
};

export default OrderForm;
