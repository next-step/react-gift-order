import React, { useState } from 'react';

interface Receiver {
  name: string;
  phone: string;
  quantity: number;
}

interface Props {
  receivers: Receiver[];
  setReceivers: React.Dispatch<React.SetStateAction<Receiver[]>>;
  onClose: () => void;
}

const ReceiverModal: React.FC<Props> = ({
  receivers,
  setReceivers,
  onClose,
}) => {
  const [localReceivers, setLocalReceivers] = useState<Receiver[]>(receivers);

  // 추가
  const handleAdd = () => {
    if (localReceivers.length < 10) {
      setLocalReceivers([
        ...localReceivers,
        { name: '', phone: '', quantity: 1 },
      ]);
    }
  };

  // 삭제
  const handleDelete = (idx: number) => {
    setLocalReceivers(localReceivers.filter((_, i) => i !== idx));
  };

  // 변경
  const handleChange = (
    idx: number,
    field: keyof Receiver,
    value: string | number,
  ) => {
    setLocalReceivers(
      localReceivers.map((r, i) => (i === idx ? { ...r, [field]: value } : r)),
    );
  };

  // 완료
  const handleComplete = () => {
    setReceivers(localReceivers);
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0,0,0,0.3)',
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          background: '#fff',
          borderRadius: 16,
          padding: 32,
          width: 500,
          maxWidth: '90vw',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
      >
        <h2>받는 사람</h2>
        <div style={{ color: '#888', fontSize: 14, marginBottom: 12 }}>
          * 최대 10명까지 추가할 수 있어요.
          <br />* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.
        </div>
        <button onClick={handleAdd} style={{ marginBottom: 16 }}>
          추가하기
        </button>
        {localReceivers.length === 0 && (
          <div
            style={{
              border: '1px solid #eee',
              borderRadius: 8,
              padding: 32,
              color: '#bbb',
              textAlign: 'center',
              marginBottom: 16,
            }}
          >
            받는 사람이 없습니다.
            <br />
            받는 사람을 추가해주세요.
          </div>
        )}
        {localReceivers.map((receiver, idx) => (
          <div
            key={idx}
            style={{
              border: '1px solid #eee',
              borderRadius: 8,
              padding: 16,
              marginBottom: 12,
            }}
          >
            <div>
              <input
                placeholder="이름"
                value={receiver.name}
                onChange={(e) => handleChange(idx, 'name', e.target.value)}
                style={{ marginRight: 8 }}
              />
              <input
                placeholder="전화번호"
                value={receiver.phone}
                onChange={(e) => handleChange(idx, 'phone', e.target.value)}
                style={{ marginRight: 8 }}
              />
              <input
                type="number"
                min={1}
                value={receiver.quantity}
                onChange={(e) =>
                  handleChange(
                    idx,
                    'quantity',
                    Math.max(1, Number(e.target.value)),
                  )
                }
                style={{ width: 60, marginRight: 8 }}
              />
              <button onClick={() => handleDelete(idx)}>삭제</button>
            </div>
          </div>
        ))}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 24,
          }}
        >
          <button
            onClick={onClose}
            style={{
              background: '#eee',
              padding: '10px 30px',
              borderRadius: 8,
            }}
          >
            취소
          </button>
          <button
            onClick={handleComplete}
            style={{
              background: '#ffe812',
              padding: '10px 30px',
              borderRadius: 8,
              fontWeight: 'bold',
            }}
          >
            {localReceivers.length}명 완료
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReceiverModal;
