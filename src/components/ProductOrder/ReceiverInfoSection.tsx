import InputOrder from '@/common/InputOrder';
import useOrderForm from '@/hooks/useOrderForm';
import styled from '@emotion/styled';

const ReceiverInfoSection = () => {
  const receiverName = useOrderForm('');
  const receiverPhone = useOrderForm('');
  const quantity = useOrderForm(1);

  return (
    <Section>
      <Title>받는 사람</Title>
      <InputOrder
        label="이름"
        placeholder="이름을 입력하세요."
        value={receiverName.value}
        onChange={receiverName.onChange}
      />
      <InputOrder
        label="전화번호"
        placeholder="전화번호를 입력하세요."
        value={receiverPhone.value}
        onChange={receiverPhone.onChange}
      />
      <InputOrder
        label="수량"
        type="number"
        value={quantity.value}
        onChange={quantity.onChange}
      />
    </Section>
  );
};

export default ReceiverInfoSection;

const Section = styled.div`
  margin-top: 24px;
  width: 100%;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 12px;
`;
