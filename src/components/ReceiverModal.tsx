/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import styled from '@emotion/styled';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`;

const Modal = styled.div`
  background: white;
  margin: 50px auto;
  padding: 24px;
  max-width: 600px;
  border-radius: 12px;
  max-height: 80vh;
  overflow-y: auto;
`;

const Title = styled.h2`
  margin-bottom: 4px;
`;

const SubText = styled.p`
  font-size: 14px;
  color: #666;
`;

const AddButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;
`;

const ReceiverCard = styled.div`
  background: #fafafa;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RemoveBtn = styled.button`
  font-size: 18px;
  border: none;
  background: none;
  cursor: pointer;
`;

const Label = styled.label`
  margin-top: 8px;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 4px;
  border: 1px solid #ddd;
  border-radius: 6px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;

const Cancel = styled.button`
  background: #f1f1f1;
  padding: 12px 20px;
  border-radius: 8px;
  border: none;
`;

const Confirm = styled.button`
  background: #ffeb00;
  padding: 12px 20px;
  border-radius: 8px;
  border: none;
  font-weight: bold;
`;

export interface Receiver {
  id: number;
  name: string;
  phone: string;
  quantity: number;
}

interface ReceiverModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (receivers: Receiver[]) => void;
}

const ReceiverModal = ({
  isOpen,
  onClose,
  onComplete,
}: ReceiverModalProps) => {
  const [receivers, setReceivers] = useState<Receiver[]>([]);

  if (!isOpen) return null;

  const handleAdd = () => {
    if (receivers.length >= 10) {
      alert('받는 사람은 최대 10명까지 가능합니다!');
      return;
    }
    const newReceiver: Receiver = {
      id: Date.now(),
      name: '',
      phone: '',
      quantity: 1,
    };
    setReceivers(prev => [...prev, newReceiver]);
  };

  const handleChange = (
    id: number,
    field: keyof Receiver,
    value: string | number
  ) => {
    setReceivers(prev =>
      prev.map(r => (r.id === id ? { ...r, [field]: value } : r))
    );
  };

  const handleRemove = (id: number) => {
    setReceivers(prev => prev.filter(r => r.id !== id));
  };

  const handleComplete = () => {
    onComplete(receivers);
    onClose();
  };

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={e => e.stopPropagation()}>
        <Title>받는 사람</Title>
        <SubText>
          * 최대 10명까지 추가할 수 있어요.
          <br />* 전화번호 중복 불가
        </SubText>

        <AddButtonWrapper>
          <button onClick={handleAdd}>추가하기</button>
        </AddButtonWrapper>

        {receivers.map((r, idx) => (
          <ReceiverCard key={r.id}>
            <Header>
              <strong>받는 사람 {idx + 1}</strong>
              <RemoveBtn onClick={() => handleRemove(r.id)}>
                ×
              </RemoveBtn>
            </Header>
            <Label>이름</Label>
            <Input
              value={r.name}
              onChange={e =>
                handleChange(r.id, 'name', e.target.value)
              }
              placeholder="이름 입력"
            />
            <Label>전화번호</Label>
            <Input
              value={r.phone}
              onChange={e =>
                handleChange(r.id, 'phone', e.target.value)
              }
              placeholder="전화번호 입력"
            />
            <Label>수량</Label>
            <Input
              type="number"
              value={r.quantity}
              onChange={e =>
                handleChange(r.id, 'quantity', Number(e.target.value))
              }
            />
          </ReceiverCard>
        ))}

        <Bottom>
          <Cancel onClick={onClose}>취소</Cancel>
          <Confirm onClick={handleComplete}>
            {receivers.length}명 완료
          </Confirm>
        </Bottom>
      </Modal>
    </Overlay>
  );
};

export default ReceiverModal;
