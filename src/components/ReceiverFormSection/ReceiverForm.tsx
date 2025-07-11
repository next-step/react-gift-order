import { useState } from 'react';
import styled from '@emotion/styled';
import ReceiverModal from './ReceiverModal';
import ReceiverTable from './ReceiverTable';
import type { Receiver } from './ReceiverTable';

interface Props {
  receiverList: Receiver[];
  setReceiverList: React.Dispatch<React.SetStateAction<Receiver[]>>;
}

const ReceiverForm = ({ receiverList, setReceiverList }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(receiverList.length > 0);

  const handleConfirm = (receivers: Receiver[]) => {
    setReceiverList(receivers);
    setIsConfirmed(true);
  };

  return (
    <Wrapper>
      <Header>
        <Title>받는 사람</Title>
        <AddButton
          type="button"
          onClick={() => setIsModalOpen(true)}
          disabled={receiverList.length >= 10}
        >
          {isConfirmed ? '수정' : '추가'}
        </AddButton>
      </Header>

      {receiverList.length === 0 ? (
        <EmptyNotice>
          받는 사람이 없습니다.
          <br />
          받는 사람을 추가해주세요.
        </EmptyNotice>
      ) : (
        <ReceiverTable receiverList={receiverList} />
      )}

      {isModalOpen && (
        <ReceiverModal
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
  color: ${({ theme, disabled }) =>
    disabled ? theme.color.gray[400] : theme.color.blue[500]};
  background: none;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

const EmptyNotice = styled.p`
  text-align: center;
  ${({ theme }) => theme.typography.body.body2Regular};
  color: ${({ theme }) => theme.color.semantic.text.default};
  white-space: pre-line;
`;
