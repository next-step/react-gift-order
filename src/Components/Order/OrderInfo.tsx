import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ReceiverInfo from '@/components/Order/ReceiverInfo';
import { GiftList } from '@/mock-data/GiftList';

import type { Receiver } from '@/types/receiver';
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

interface GiftFormValues {
  sender: string;
  message: string;
}

interface GiftSenderProps {
  templateMessage: string;
}

const GiftForm = ({ templateMessage }: GiftSenderProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const giftId = location.state?.id;
  const selectedGift = GiftList.find((gift) => gift.id === giftId);

  const [receiverList, setReceiverList] = useState<Receiver[]>([]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<GiftFormValues>({
    defaultValues: {
      sender: '',
      message: templateMessage ?? '',
    },
  });

  useEffect(() => {
    setValue('message', templateMessage);
  }, [templateMessage, setValue]);

  const validateReceivers = () => {
    if (receiverList.length === 0) {
      alert('최소 1명의 받는 사람을 등록해주세요.');
      return false;
    }

    const phoneSet = new Set<string>();
    for (let i = 0; i < receiverList.length; i++) {
      const r = receiverList[i];

      if (!r.name.trim()) {
        alert(`${i + 1}번 받는 사람 이름을 입력해주세요.`);
        return false;
      }

      if (!/^010\d{8}$/.test(r.phone)) {
        alert(`${i + 1}번 전화번호는 01012345678 형식이어야 합니다.`);
        return false;
      }

      if (phoneSet.has(r.phone)) {
        alert(`${i + 1}번 전화번호가 중복됩니다.`);
        return false;
      }

      phoneSet.add(r.phone);

      if (r.quantity < 1) {
        alert(`${i + 1}번 수량은 1 이상이어야 합니다.`);
        return false;
      }
    }

    return true;
  };

  const onSubmit = (data: GiftFormValues) => {
    if (!validateReceivers()) return;

    alert(
      `주문이 완료되었습니다.
      상품명: ${selectedGift?.name}
      받는 사람 수: ${receiverList.length}
      발신자 이름: ${data.sender}
      메시지: ${data.message}`
    );

    navigate('/');
  };

  if (!selectedGift) return <div>선택한 상품이 없습니다.</div>;

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Section>
          <Label>메시지</Label>
          <InputBox>
            <StyledTextarea
              placeholder="메시지를 입력하세요"
              {...register('message', {
                required: '메시지는 반드시 입력 되어야 해요.',
              })}
              error={!!errors.message}
            />
            {errors.message && <ErrorMsg>{errors.message.message}</ErrorMsg>}
          </InputBox>
        </Section>

        <Section>
          <Label>보내는 사람</Label>
          <InputBox>
            <StyledInput
              type="text"
              placeholder="이름을 입력하세요."
              {...register('sender', {
                required: '보내는 사람 이름이 반드시 입력 되어야 해요.',
              })}
              error={!!errors.sender}
            />
            {errors.sender && <ErrorMsg>{errors.sender.message}</ErrorMsg>}
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

        <OrderButton type="submit">
          {selectedGift.price.sellingPrice.toLocaleString()}원 주문하기
        </OrderButton>
      </form>
    </Wrapper>
  );
};

export default GiftForm;
