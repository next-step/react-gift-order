import { css } from '@emotion/react';
import { useState } from 'react';
import theme from '@src/styles/tokens/index';
import PresentCard from '@/components/PresentCard';
import OrderForm from '@/components/OrderForm';
import ItemInfo from '@/components/ItemInfo';
import templates from '@src/assets/mock/order_card_template';

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
  const unitPrice = 29000;

  const [values, setValues] = useState({
    message: templates[0].defaultTextMessage,
    senderName: '',
    recipientName: '',
    recipientPhone: '',
    quantity: '1',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!values.message.trim()) newErrors.message = '메시지를 입력해주세요.';
    if (!values.senderName.trim())
      newErrors.senderName = '이름을 입력해주세요.';
    if (!values.recipientName.trim())
      newErrors.recipientName = '이름을 입력해주세요';
    if (!values.recipientPhone.trim()) {
      newErrors.recipientPhone = '전화번호를 입력해주세요.';
    } else if (!/^010\d{7,8}$/.test(values.recipientPhone)) {
      newErrors.recipientPhone = '올바른 전화번호 형식이 아닙니다.';
    }
    if (!values.quantity || Number(values.quantity) < 1)
      newErrors.quantity = '구매수량은 1개 이상이어야 합니다.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleOrderClick = () => {
    if (validate()) {
      // mock 데이터가 완전해지면 수정 예정
      alert(
        `주문이 완료되었습니다.\n` +
          `상품명: BBQ 양념치킨+크림치즈볼+콜라1.25L\n` +
          `구매수량: ${values.quantity}\n` +
          `발신자이름: ${values.senderName}\n` +
          `메시지: ${values.message}`
      );
      window.history.back();
    }
  };

  const totalPrice =
    Number(values.quantity) >= 1 ? unitPrice * Number(values.quantity) : 0;

  return (
    <section css={sectionStyle}>
      <PresentCard
        message={values.message}
        onMessageChange={handleChange}
        errorMessage={errors.message}
      />
      <OrderForm values={values} errors={errors} onChange={handleChange} />
      <ItemInfo />
      <div css={space24} />
      <button css={buttonStyle} onClick={handleOrderClick}>
        {totalPrice.toLocaleString()}원 주문하기
      </button>
    </section>
  );
};

export default Order;
