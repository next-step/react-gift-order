import { css } from '@emotion/react';
import theme from '@src/styles/tokens/index';
import PresentCard from '@/components/PresentCard';
import OrderForm from '@/components/OrderForm';
import ItemInfo from '@/components/ItemInfo';
import product from '@/assets/mock/itemList_mock';
import RecipientFormList from '@/components/RecipientFormList';
import { useState } from 'react';
import type { OrderSchema } from '@src/hooks/useOrderForm';
import { FormProvider } from 'react-hook-form';
import useOrderFormComplete, {
  type SenderSchema,
} from '@/hooks/useOrderFormComplete';

const RECEIVER_REQUIRED_MESSAGE = '받는 사람을 추가해 주세요!';

const sectionStyle = css`
  width: 100%;
  padding-bottom: 3.125rem;
  background-color: ${theme.colors.gray00};
`;

const buttonStyle = css`
  width: 100%;
  max-width: 720px;
  height: 3.125rem;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: 0px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(254, 229, 0);
  color: rgb(42, 48, 56);
  transition:
    background-color 200ms,
    color 200ms;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5rem;
  border: 0;
  cursor: pointer;
`;

const space24 = css`
  height: 24px;
`;
const Order = () => {
  const [recipientModalOpen, setRecipientModalOpen] = useState(false);
  const [recipients, setRecipients] = useState<OrderSchema[]>([]);

  const unitPrice = Number(product.price?.sellingPrice) || 0;

  const methods = useOrderFormComplete();
  const { handleSubmit } = methods;

  const totalRecipientQuantity = recipients.reduce(
    (sum, r) => sum + (Number(r.quantity) || 0),
    0
  );

  const totalOrderPrice = unitPrice * totalRecipientQuantity;

  const onSubmit = (data: SenderSchema) => {
    if (totalRecipientQuantity === 0) {
      alert(RECEIVER_REQUIRED_MESSAGE);
      return;
    }

    alert(
      `주문이 완료되었습니다.\n` +
        `상품명: ${product.name}\n` +
        `구매수량: ${totalRecipientQuantity}\n` +
        `발신자이름: ${data.senderName}\n` +
        `메시지: ${data.letter}`
    );
    window.history.back();
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <section css={sectionStyle}>
            <PresentCard />
            <OrderForm
              onOpenRecipientModal={() => setRecipientModalOpen(true)}
              recipients={recipients}
            />
            <ItemInfo />
            <div css={space24} />
            <button type="submit" css={buttonStyle}>
              {totalOrderPrice.toLocaleString()}원 주문하기
            </button>
          </section>
        </form>
      </FormProvider>

      <RecipientFormList
        open={recipientModalOpen}
        onClose={() => setRecipientModalOpen(false)}
        recipients={recipients}
        setRecipients={setRecipients}
      />
    </>
  );
};

export default Order;
