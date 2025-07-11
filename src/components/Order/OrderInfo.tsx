import { useOrderForm } from '@/hooks/useOrderForm';
import { validateReceivers } from '@/hooks/validateReceivers';

import { GiftList } from '@/mock-data/GiftList';
import ReceiverInfo from '@/components/Order/ReceiverInfo';

import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { Receiver } from '@/components/Order/ReceiverModal';
import {
  Wrapper,
  Section,
  Label,
  InputBox,
  StyledInput,
  StyledTextarea,
  ErrorMsg,
  HelperText,
  ProductInfo,
  ProductImage,
  ProductDetails,
  OrderButton,
} from '@/components/Order/Order.style';

interface GiftSenderProps {
  templateMessage: string;
}

const GiftForm = ({ templateMessage }: GiftSenderProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const giftId = location.state?.id;

  const selectedGift = GiftList.find((gift) => gift.id === giftId);

  const { values, errors, handleChange, validate } = useOrderForm({
    sender: '',
    receiver: '',
    phone: '',
    quantity: 1,
    message: templateMessage ?? '',
  });

  const [receiverList, setReceiverList] = useState<Receiver[]>([]);

  useEffect(() => {
    handleChange('message', templateMessage);
  }, [templateMessage, handleChange]);

  if (!selectedGift) return <div>선택한 상품이 없습니다.</div>;

  const handleSubmit = () => {
    if (!validate()) return;

    if (receiverList.length === 0) {
      alert('최소 1명의 받는 사람을 등록해주세요.');
      return;
    }

    if (!validateReceivers(receiverList)) {
      return; 
    }

    alert(
      `주문이 완료되었습니다.
      상품명: ${selectedGift.name}
      받는 사람 수: ${receiverList.length}
      발신자 이름: ${values.sender}
      메시지: ${values.message}`
    );

    navigate('/');
  };

  return (
    <Wrapper>
      <Section>
        <Label>메시지</Label>
        <InputBox>
          <StyledTextarea
            placeholder="메시지를 입력하세요"
            value={values.message}
            onChange={(e) => handleChange('message', e.target.value)}
            error={!!errors.message}
          />
          {errors.message && <ErrorMsg>{errors.message}</ErrorMsg>}
        </InputBox>
      </Section>

      <Section>
        <Label>보내는 사람</Label>
        <InputBox>
          <StyledInput
            type="text"
            placeholder="이름을 입력하세요."
            value={values.sender}
            onChange={(e) => handleChange('sender', e.target.value)}
            error={!!errors.sender}
          />
          {errors.sender && <ErrorMsg>{errors.sender}</ErrorMsg>}
          <HelperText>* 실제 선물 발송 시 발신자 이름으로 반영됩니다.</HelperText>
        </InputBox>
      </Section>

      <Section>
        <Label>받는 사람</Label>
        <ReceiverInfo receivers={receiverList} onUpdate={setReceiverList} />
      </Section>

      <Section>
        <Label>상품 정보</Label>
        <ProductInfo>
          <ProductImage src={selectedGift.imageURL} alt={selectedGift.name} />
          <ProductDetails>
            <strong>{selectedGift.name}</strong>
            <span>{selectedGift.brandInfo.name}</span>
            <b>상품가 {selectedGift.price.sellingPrice.toLocaleString()}원</b>
          </ProductDetails>
        </ProductInfo>
      </Section>

      <OrderButton onClick={handleSubmit}>
        {selectedGift.price.sellingPrice.toLocaleString()}원 주문하기
      </OrderButton>
    </Wrapper>
  );
};

export default GiftForm;
