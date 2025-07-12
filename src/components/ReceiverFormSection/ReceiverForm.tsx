import { useState } from 'react';
import styled from '@emotion/styled';
import { useFormContext, useFieldArray } from 'react-hook-form';
import ReceiverModal from '@/components/ReceiverFormSection/ReceiverModal';
import ReceiverTable from '@/components/ReceiverFormSection/ReceiverTable';
import { LABELS } from '@/constants/receiverLabels';
import type { Receiver } from '@/types/receiver';

const ReceiverForm = () => {
  const { control, watch } = useFormContext<{ receivers: Receiver[] }>();
  const { replace } = useFieldArray({ name: 'receivers', control });

  const receiverList = watch('receivers');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(receiverList.length > 0);

  const handleConfirm = (receivers: Receiver[]) => {
    replace(receivers);
    setIsConfirmed(true);
    setIsModalOpen(false);
  };

  return (
    <Wrapper>
      <Header>
        <Title>{LABELS.RECEIVER_FORM_TITLE}</Title>
        <AddButton
          type="button"
          onClick={() => setIsModalOpen(true)}
          disabled={receiverList.length >= 10}
        >
          {LABELS.getAddOrEditText(isConfirmed)}
        </AddButton>
      </Header>

      {receiverList.length === 0 ? (
        <EmptyNotice>{LABELS.EMPTY_RECEIVER_NOTICE}</EmptyNotice>
      ) : (
        <ReceiverTable />
      )}

      {isModalOpen && (
        <ReceiverModal
          initialValues={receiverList}
          onConfirmList={handleConfirm}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </Wrapper>
  );
};

export default ReceiverForm;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.p`
  ${({ theme }) => theme.typography.title.title2Bold};
  color: ${({ theme }) => theme.color.semantic.text.default};
`;

const AddButton = styled.button<{ disabled?: boolean }>`
  ${({ theme }) => theme.typography.body.body2Regular};
  background-color: ${({ theme }) => theme.color.gray[200]};
  color: ${({ theme }) => theme.color.semantic.text.default};
  border: none;
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  border-radius: 8px;
  cursor: pointer;
`;

const EmptyNotice = styled.p`
  text-align: center;
  ${({ theme }) => theme.typography.body.body2Regular};
  color: ${({ theme }) => theme.color.semantic.text.default};
  white-space: pre-line;
`;
