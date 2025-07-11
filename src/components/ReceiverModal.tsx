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

  const [errors, setErrors] = useState<{ name: string; phone: string }[]>([]);

  const validate = () => {
    const newErrors = localReceivers.map((receiver) => {
      let nameError = '';
      let phoneError = '';
      if (!receiver.name.trim()) {
        nameError = '이름을 입력해 주세요.';
      }
      // 전화번호: 010으로 시작, 11자리
      const phoneRegex = /^010\d{8}$/;
      if (!receiver.phone.trim()) {
        phoneError = '전화번호를 입력해 주세요.';
      } else if (!phoneRegex.test(receiver.phone)) {
        phoneError = '올바른 전화번호 형식이 아닙니다.';
      }
      return { name: nameError, phone: phoneError };
    });
    setErrors(newErrors);

    // 에러가 하나라도 있으면 false
    return newErrors.every((e) => !e.name && !e.phone);
  };

  const handleComplete = () => {
    if (!validate()) return;
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
          width: 500,
          height: 700,
          maxWidth: '90vw',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            padding: '32px 32px 0 32px',
            background: '#fff',
            flexShrink: 0,
          }}
        >
          <h2 style={{ marginBottom: 8 }}>받는 사람</h2>
          <div style={{ color: '#888', fontSize: 14, marginBottom: 12 }}>
            * 최대 10명까지 추가할 수 있어요.
            <br />* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.
          </div>
          <button
            onClick={handleAdd}
            disabled={localReceivers.length >= 10}
            style={{
              marginBottom: 16,
              color: localReceivers.length >= 10 ? '#bbb' : '#222',
              cursor: localReceivers.length >= 10 ? 'not-allowed' : 'pointer',
              fontSize: 13,
              background: '#eee',
              padding: '10px 30px',
              borderRadius: 8,
              border: 'none',
            }}
          >
            추가하기
          </button>
        </div>
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '0 32px',
            minHeight: 0,
          }}
        >
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
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: 8,
                }}
              >
                <b style={{ padding: 'auto auto auto 10' }}>
                  받는 사람 {idx + 1}
                </b>
                <button
                  onClick={() => handleDelete(idx)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    borderRadius: '50%',
                    width: 32,
                    height: 32,
                    fontSize: 18,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 0,
                    margin: 0,
                  }}
                  aria-label="삭제"
                >
                  ✕
                </button>
              </div>
              {/* 이름 */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: 8,
                }}
              >
                <label style={{ minWidth: 60, marginRight: 8 }}>이름</label>
                <div style={{ flex: 1 }}>
                  <input
                    placeholder="이름을 입력하세요."
                    value={receiver.name}
                    onChange={(e) => {
                      handleChange(idx, 'name', e.target.value);
                      // 입력 시 에러 초기화
                      if (errors[idx]?.name) {
                        const newErrors = [...errors];
                        newErrors[idx] = { ...newErrors[idx], name: '' };
                        setErrors(newErrors);
                      }
                    }}
                    style={{
                      width: '100%',
                      height: 36,
                      border: errors[idx]?.phone
                        ? '2px solid #f44336'
                        : '1px solid #ccc',
                      borderRadius: 8,
                      padding: '0 12px',
                      outline: 'none',
                      boxSizing: 'border-box',
                      marginBottom: 0,
                    }}
                  />
                  {errors[idx]?.name && (
                    <div
                      style={{ color: '#f44336', fontSize: 13, marginTop: 2 }}
                    >
                      {errors[idx].name}
                    </div>
                  )}
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: 8,
                }}
              >
                <label style={{ minWidth: 60, marginRight: 8 }}>전화번호</label>
                <div style={{ flex: 1 }}>
                  <input
                    placeholder="전화번호를 입력하세요."
                    value={receiver.phone}
                    onChange={(e) => {
                      handleChange(idx, 'phone', e.target.value);
                      if (errors[idx]?.phone) {
                        const newErrors = [...errors];
                        newErrors[idx] = { ...newErrors[idx], phone: '' };
                        setErrors(newErrors);
                      }
                    }}
                    style={{
                      width: '100%',
                      height: 36,
                      border: errors[idx]?.phone
                        ? '2px solid #f44336'
                        : '1px solid #ccc',
                      borderRadius: 8,
                      padding: '0 12px',
                      outline: 'none',
                      boxSizing: 'border-box',
                      marginBottom: 0,
                    }}
                  />
                  {errors[idx]?.phone && (
                    <div
                      style={{ color: '#f44336', fontSize: 13, marginTop: 2 }}
                    >
                      {errors[idx].phone}
                    </div>
                  )}
                </div>
              </div>
              {/* 수량 */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: 8,
                }}
              >
                <label style={{ minWidth: 60, marginRight: 8 }}>수량</label>
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
                  style={{
                    width: '100%',
                    height: 36,
                    border: '1px solid #ccc',
                    borderRadius: 8,
                    padding: '0 12px',
                    outline: 'none',
                    boxSizing: 'border-box',
                    marginBottom: 0,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            width: '100%',
            background: '#fff',
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
            display: 'flex',
            justifyContent: 'space-between',
            padding: '24px 32px',
            boxSizing: 'border-box',
            borderTop: '1px solid #eee',
          }}
        >
          <button
            onClick={onClose}
            style={{
              background: '#eee',
              padding: '10px 30px',
              borderRadius: 8,
              fontSize: 15,
              border: 'none',
              cursor: 'pointer',
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
              fontSize: 15,
              border: 'none',
              cursor: 'pointer',
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
