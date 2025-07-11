import { useFormContext } from 'react-hook-form';
import { useState } from 'react';
import ReceiverInfoModal from './ReceiverInfoModal';
import BaseButton from '@/common/BaseButton';
import styled from '@emotion/styled';

const ReceiverInfoSection = () => {
  const {} = useFormContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Section>
      <RecipientHeaderContainer>
        <Title>받는 사람</Title>
        <BaseButton onClick={() => setIsModalOpen(true)}>추가</BaseButton>
      </RecipientHeaderContainer>
      <RecipientListContainer>
        받는 사람이 없습니다. <br />
        받는 사람을 추가해주세요.
      </RecipientListContainer>

      <ReceiverInfoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </Section>
  );
};

export default ReceiverInfoSection;

const Section = styled.section`
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
  line-height: ${({ theme }) => theme.spacing.spacing6};`;
