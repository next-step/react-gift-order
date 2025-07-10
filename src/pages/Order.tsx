import { css } from '@emotion/react';
import theme from '@src/styles/tokens/index';
import PresentCard from '@/components/PresentCard';
import OrderForm from '@/components/OrderForm';
import ItemInfo from '@/components/ItemInfo';
import useOrderForm from '@/hooks/useOrderForm';
import product from '@/assets/mock/itemList_mock';
import RecipientFormList from '@/components/RecipientFormList';
import { useState } from 'react';
import type { OrderValues } from '@src/hooks/useOrderForm';

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
  const [recipients, setRecipients] = useState<OrderValues[]>([]);

  const unitPrice = Number(product.price?.sellingPrice) || 0;

  const { values, errors, handleChange, validate } = useOrderForm();

  const totalRecipientQuantity = recipients.reduce(
    (sum, r) => sum + (Number(r.quantity) || 0),
    0
  );

  const totalOrderPrice = unitPrice * totalRecipientQuantity;

  const handleOrderClick = () => {
    if (totalRecipientQuantity === 0) {
      alert('받는 사람을 추가해 주세요!');
      return;
    }
    if (validate()) {
      alert(
        `주문이 완료되었습니다.\n` +
          `상품명: ${product.name}\n` +
          `구매수량: ${totalRecipientQuantity}\n` +
          `발신자이름: ${values.senderName}\n` +
          `메시지: ${values.message}`
      );
      window.history.back();
    }
  };

  console.log('product:', product);
  console.log('product.price:', product.price);

  return (
    <>
      <section css={sectionStyle}>
        <PresentCard
          message={values.message}
          onMessageChange={handleChange}
          errorMessage={errors.message}
        />
        <OrderForm
          values={values}
          errors={errors}
          onChange={handleChange}
          onOpenRecipientModal={() => setRecipientModalOpen(true)}
          recipients={recipients}
        />
        <ItemInfo />
        <div css={space24} />
        <button css={buttonStyle} onClick={handleOrderClick}>
          {totalOrderPrice.toLocaleString()}원 주문하기
        </button>
      </section>
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
