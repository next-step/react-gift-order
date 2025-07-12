import { css } from '@emotion/react';
import theme from '@src/styles/tokens/index';
import OrderFormInput from '@src/components/OrderFormInput';
import RecipientList from '@src/components/RecipientList';
import { useFormContext } from 'react-hook-form';
import type { OrderSchema } from '@src/hooks/useOrderForm';
import type { SenderSchema } from '@src/hooks/useOrderFormComplete';

const coverStyle = css`
  width: 100%;
  padding: 0px 1rem;
  box-sizing: border-box;
`;

const noticeP = css`
  font-size: ${theme.typography.label2Regular.fontSize};
  font-weight: ${theme.typography.label2Regular.fontWeight};
  line-height: ${theme.typography.label2Regular.lineHeight};
  color: ${theme.colors.textSub};
  margin: 0px;
  text-align: left;
`;

const pTitle = css`
  font-size: ${theme.typography.title2Bold.fontSize};
  font-weight: ${theme.typography.title2Bold.fontWeight};
  line-height: ${theme.typography.title2Bold.lineHeight};
  color: ${theme.colors.textDefault};
  margin: 0;
  text-align: left;
`;

const recipientTitleStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

const recipientButtonStyle = css`
  font-size: ${theme.typography.label1Regular.fontSize};
  font-weight: ${theme.typography.label1Regular.fontWeight};
  line-height: ${theme.typography.label1Regular.lineHeight};
  padding: 8px 16px;
  border-radius: 8px;
  background-color: ${theme.colors.borderDisabled};
  border: none;
  cursor: pointer;
  transition:
    background-color 200ms,
    opacity 200ms;
`;

const recipientInfoDiv = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  border: 1px solid ${theme.colors.borderDisabled};
  border-radius: 8px;
`;

const recipientInfoP = css`
  font-size: ${theme.typography.label1Regular.fontSize};
  font-weight: ${theme.typography.label1Regular.fontWeight};
  line-height: ${theme.typography.label1Regular.lineHeight};
  color: ${theme.colors.textSub};
  text-align: center;
  margin: 0px;
`;

const space12 = css`
  height: ${theme.spacing.spacing3};
`;

const space24 = css`
  height: ${theme.spacing.spacing6};
`;

const colorspace8 = css`
  height: ${theme.spacing.spacing2};
  background-color: ${theme.colors.backgroundDisabled};
`;

interface Props {
  onOpenRecipientModal: () => void;
  recipients?: OrderSchema[];
}

const OrderForm = ({ onOpenRecipientModal, recipients = [] }: Props) => {
  const {
    register: registerSender,
    formState: { errors: errorsSender },
  } = useFormContext<SenderSchema>();

  return (
    <>
      <div css={coverStyle}>
        <div css={space12} />
        <p css={pTitle}>보내는 사람</p>
        <div css={space12} />
        <OrderFormInput
          {...registerSender('senderName')}
          placeholder="이름을 입력하세요."
          error={errorsSender.senderName?.message}
        />
        {!errorsSender.senderName && (
          <p css={noticeP}>
            * 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.
          </p>
        )}
        <div css={space24} />
      </div>

      <div css={colorspace8} />

      <div css={coverStyle}>
        <div css={space12} />
        <div css={recipientTitleStyle}>
          <p css={pTitle}>받는 사람</p>
          <button
            css={recipientButtonStyle}
            onClick={onOpenRecipientModal}
            type="button"
          >
            {recipients.length > 0 ? '수정' : '추가'}
          </button>
        </div>

        <div css={space12} />

        {recipients.length > 0 ? (
          <RecipientList recipients={recipients} />
        ) : (
          <div css={recipientInfoDiv}>
            <p css={recipientInfoP}>
              받는 사람이 없습니다.
              <br />
              받는 사람을 추가해 주세요.
            </p>
          </div>
        )}
        <div css={space24} />
      </div>

      <div css={colorspace8} />
    </>
  );
};

export default OrderForm;
