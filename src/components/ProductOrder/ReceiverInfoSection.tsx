import InputOrder from '@/common/InputOrder';
import useOrderForm from '@/hooks/useOrderForm';
import styled from '@emotion/styled';

type OrderFormField = Pick<
  ReturnType<typeof useOrderForm>,
  'value' | 'onChange' | 'error'
>;

type ReceiverInfoSectionProps = {
  receiverName: OrderFormField;
  receiverPhone: OrderFormField;
  quantity: OrderFormField;
};

const ReceiverInfoSection = ({
  receiverName,
  receiverPhone,
  quantity,
}: ReceiverInfoSectionProps) => {
  return (
    <Section>
      <Title>받는 사람</Title>
      <InputOrder
        label="이름"
        placeholder="이름을 입력하세요."
        value={receiverName.value}
        onChange={receiverName.onChange}
        error={receiverName.error}
      />
      <InputOrder
        label="전화번호"
        placeholder="전화번호를 입력하세요."
        value={receiverPhone.value}
        onChange={receiverPhone.onChange}
        error={receiverPhone.error}
      />
      <InputOrder
        label="수량"
        type="number"
        value={quantity.value}
        onChange={quantity.onChange}
        error={quantity.error}
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
