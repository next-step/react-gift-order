import { css } from "@emotion/react";
import OrderForm from "@/components/order/OrderForm";
import type { FormData } from "@/components/order/OrderForm";
import type { Theme } from "@emotion/react";

const ReceiverModal = ({
  onClose,
  onSave,
  savedReceiverInfo,
}: {
  onClose: () => void;
  onSave: (formData: FormData) => void;
  savedReceiverInfo: {
    receiverName: string;
    phoneNumber: string;
    quantity: number;
  }[];
}) => {
  return (
    <>
      <div css={OverlayStyle} />
      <div css={ModalStyle}>
        <h2>받는 사람</h2>
        <p css={InfoTextStyle}>* 최대 10명까지 추가 할 수 있어요.</p>
        <p css={InfoTextStyle}>
          * 받는 사람의 전화번호를 중복으로 입력할 수 없어요.
        </p>
        <OrderForm
          onSubmitCallback={onSave}
          savedReceiverInfo={savedReceiverInfo}
          onClose={onClose}
        />
      </div>
    </>
  );
};

const ModalStyle = (theme: Theme) => css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${theme.colors.semantic.background.default};
  padding: ${theme.spacing.spacing8};
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  width: 600px;
  min-height: 600px;
  max-height: 100vh;
  overflow-y: auto;
  z-index: 20;
`;

const OverlayStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 10;
`;

const InfoTextStyle = (theme: Theme) => css`
  font-size: ${theme.typography.body2Regular.size};
  color: ${theme.colors.semantic.text.sub};
  margin: ${theme.spacing.spacing1} 0;
`;

export default ReceiverModal;
