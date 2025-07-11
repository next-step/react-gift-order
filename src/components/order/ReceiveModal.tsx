import { css } from "@emotion/react";
import OrderForm from "@/components/order/OrderForm";
import type { FormData } from "@/components/order/OrderForm";

const ReceiverModal = ({
  onClose,
  onSave,
}: {
  onClose: () => void;
  onSave: (formData: FormData) => void;
}) => {
  return (
    <>
      <div css={ModalStyle}>
        <h2>받는 사람 추가</h2>
        <OrderForm
          onSubmitCallback={(formData) => {
            onSave(formData);
          }}
        />
        <button onClick={onClose}>취소</button>
      </div>
    </>
  );
};

const ModalStyle = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  width: 400px;
  max-height: 80vh;
  overflow-y: auto;
`;

export default ReceiverModal;
