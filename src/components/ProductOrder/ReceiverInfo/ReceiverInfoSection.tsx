import useOrderForm from '@/hooks/useOrderForm';
import styled from '@emotion/styled';
import { useState } from 'react';
import ReceiverInfoModal from '@/components/ProductOrder/ReceiverInfo/ReceiverInfoModal';
import BaseButton from '@/common/BaseButton';

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
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleAddClick = (): void => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (): void => {
    setIsModalOpen(false);
  };

  return (
    <Section>
      <RecipientHeaderContainer>
        <Title>받는 사람</Title>
        <BaseButton onClick={handleAddClick}>추가</BaseButton>
      </RecipientHeaderContainer>
      <RecipientListContainer>
        받는 사람이 없습니다. <br />
        받는 사람을 추가해주세요.
      </RecipientListContainer>
      <ReceiverInfoModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </Section>
  );
};

export default ReceiverInfoSection;

const Section = styled.div`
  margin-top: 24px;
  width: 100%;
`;

const RecipientHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
`;

const RecipientListContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  border-radius:  ${({ theme }) => theme.spacing.spacing3};
  padding: ${({ theme }) => theme.spacing.spacing7}; 0;
  text-align: center;
  color:${({ theme }) => theme.colors.gray600};
  font-size: 14px;
  line-height: ${({ theme }) => theme.spacing.spacing6};
`;
