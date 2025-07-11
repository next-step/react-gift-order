import styled from '@emotion/styled';
import { useState } from 'react';

export interface Receiver {
  name: string;
  phone: string;
  quantity: number;
}

interface Props {
  receivers: Receiver[];
  onSave: (newList: Receiver[]) => void;
  onCancel: () => void;
}

const Modal = styled.div`
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border-radius: 12px;
  padding: 24px;
  width: 500px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
`;

const AddBtn = styled.button`
  margin: 12px 0;
  padding: 6px 12px;
  background-color: ${({ theme }) => theme.color.gray.gray300};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0px 10px;
  margin-bottom: 10px;
  margin-top: 8px;
  font-size: 14px;
`;

const QuantityInput = styled.input`
  width: 90%;
  margin-left: 8px;
`;

const Error = styled.p`
  color: ${({ theme }) => theme.color.semantic.status.critical};
  font-size: 12px;
  margin: 4px 0;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 16px;
`;



const ReceiverModal = ({ receivers, onSave, onCancel }: Props) => {
  const [formList, setFormList] = useState<Receiver[]>(
    receivers.length ? receivers : [{ name: '', phone: '', quantity: 1 }]
  );
  const [errors, setErrors] = useState<string[]>([]);

  const handleChange = (index: number, field: keyof Receiver, value: string | number) => {
    const updated = [...formList];
    updated[index] = {
      ...updated[index],
      [field]: field === 'quantity' ? Number(value) : value,
    };
    setFormList(updated);
  };

  const addReceiver = () => {
    if (formList.length >= 10) {
      alert('최대 10명까지 추가할 수 있습니다.');
      return;
    }
    setFormList([...formList, { name: '', phone: '', quantity: 1 }]);
  };

  const removeReceiver = (index: number) => {
    setFormList(formList.filter((_, i) => i !== index));
  };

  const validate = () => {
    const errorList: string[] = [];
    const phoneSet = new Set<string>();

    formList.forEach((r, i) => {
      if (!r.name.trim()) {
        errorList.push(`${i + 1}번 이름을 입력해주세요.`);
      }
      if (!/^010\d{8}$/.test(r.phone)) {
        errorList.push(`${i + 1}번 전화번호는 01012345678 형식이어야 합니다.`);
      }
      if (phoneSet.has(r.phone)) {
        errorList.push(`${i + 1}번 전화번호가 중복됩니다.`);
      }
      phoneSet.add(r.phone);
      if (r.quantity < 1) {
        errorList.push(`${i + 1}번 수량은 1 이상이어야 합니다.`);
      }
    });

    setErrors(errorList);
    return errorList.length === 0;
  };

  const handleComplete = () => {
    if (validate()) {
      onSave(formList);
    }
  };

  return (
    <Modal>
      <h3>받는 사람</h3>
      <p>* 최대 10명까지 추가할 수 있어요.</p>
      <p>* 전화번호는 중복될 수 없어요.</p>

      <AddBtn onClick={addReceiver}>+ 받는 사람 추가</AddBtn>

      {formList.map((r, idx) => (
        <div key={idx} style={{ marginBottom: '16px' }}>
          <h4>
            받는 사람 {idx + 1}
            {formList.length > 1 && (
              <button
                style={{ marginLeft: '8px', cursor: 'pointer' }}
                onClick={() => removeReceiver(idx)}
              >
                x
              </button>
            )}
          </h4>
          <Input
            type="text"
            placeholder="이름"
            value={r.name}
            onChange={(e) => handleChange(idx, 'name', e.target.value)}
            autoComplete="off"
          />
          <Input
            type="tel"
            placeholder="전화번호"
            value={r.phone}
            maxLength={11}
            onChange={(e) => handleChange(idx, 'phone', e.target.value)}
            autoComplete="off"
          />
          <label>
            수량
            <QuantityInput
              type="number"
              min={1}
              value={r.quantity}
              onChange={(e) => handleChange(idx, 'quantity', e.target.value)}
            />
          </label>
        </div>
      ))}

      {errors.length > 0 && (
        <div>
          {errors.map((err, i) => (
            <Error key={i}>{err}</Error>
          ))}
        </div>
      )}

      <ButtonRow>
        <button onClick={onCancel}>취소</button>
        <button onClick={handleComplete}>{formList.length}명 완료</button>
      </ButtonRow>
    </Modal>
  );
};

export default ReceiverModal;
