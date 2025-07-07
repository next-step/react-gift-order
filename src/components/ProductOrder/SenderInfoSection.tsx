import InputOrder from '@/common/InputOrder';
import useOrderForm from '@/hooks/useOrderForm';
import styled from '@emotion/styled';

const SenderInfoSection = () => {
  const senderName = useOrderForm('');

  return (
    <Section>
      <Title>보내는 사람</Title>
      <InputOrder
        label="이름"
        placeholder="이름을 입력하세요."
        value={senderName.value}
        onChange={senderName.onChange}
      />
      <Hint>* 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.</Hint>
    </Section>
  );
};

export default SenderInfoSection;

const Section = styled.div`
  margin-top: 24px;
  width: 100%;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 12px;
`;

const Hint = styled.p`
  font-size: 12px;
  color: #888;
  margin-top: 8px;
`;
