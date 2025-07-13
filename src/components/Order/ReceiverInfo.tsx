import styled from '@emotion/styled';
import { useState } from 'react';
import ReceiverModal from '@/components/Order/ReceiverModal';

export interface Receiver {
  name: string;
  phone: string;
  quantity: number;
}

interface ReceiverInfoProps {
  receivers: Receiver[];
  onUpdate: (newList: Receiver[]) => void;
}

const ReceiverBox = styled.div`
  border: 1px solid ${({ theme }) => theme.color.semantic.border.default};
  border-radius: 8px;
  padding: 20px;
  font-size: 14px;
  color: ${({ theme }) => theme.color.semantic.text.placeholder};
`;

const ReceiverTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  th,
  td {
    padding: 8px;
    border-bottom: 1px solid ${({ theme }) => theme.color.semantic.border.default};
    text-align: left;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const AddButton = styled.button`
  margin-bottom: 10px;
  padding: 6px 12px;
  background-color: ${({ theme }) => theme.color.gray.gray400};
  border-radius: 6px;
  border: none;
  font-weight: 600;
  cursor: pointer;
`;

const ReceiverInfo = ({ receivers, onUpdate }: ReceiverInfoProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleSave = (newReceivers: Receiver[]) => {
    onUpdate(newReceivers);
    setShowModal(false);
  };

  return (
    <div>
      <ButtonWrapper>
        <AddButton type= "button" onClick={() => setShowModal(true)}>
          {receivers.length > 0 ? '수정' : '추가'}
        </AddButton>
      </ButtonWrapper>

      {receivers.length === 0 ? (
        <ReceiverBox>
          받는 사람이 없습니다. <br />
          받는 사람을 추가해주세요.
        </ReceiverBox>
      ) : (
        <ReceiverTable>
          <thead>
            <tr>
              <th>이름</th>
              <th>전화번호</th>
              <th>수량</th>
            </tr>
          </thead>
          <tbody>
            {receivers.map((r, idx) => (
              <tr key={idx}>
                <td>{r.name}</td>
                <td>{r.phone}</td>
                <td>{r.quantity}</td>
              </tr>
            ))}
          </tbody>
        </ReceiverTable>
      )}

      {showModal && (
        <ReceiverModal
          receivers={receivers}
          onSave={handleSave}
          onCancel={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default ReceiverInfo;
