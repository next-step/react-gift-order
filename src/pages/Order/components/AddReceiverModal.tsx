/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { useState } from 'react';
import {
  horizontalFormStyle,
  receiverLabelStyle,
  receiverAddGuideStyle,
  errorInputStyle,
  errorMessageStyle,
} from '../OrderPage.style';

type Receiver = {
  name: string;
  phone: string;
  quantity: number;
};

type Props = {
  onClose: () => void;
  onComplete: (receivers: Receiver[]) => void;
  initialReceivers: Receiver[];
};

const AddReceiverModal = ({ onClose, onComplete, initialReceivers }: Props) => {
  const theme = useTheme();
  const [receivers, setReceivers] = useState<Receiver[]>(initialReceivers);
  const [errors, setErrors] = useState<{ name: string; phone: string; quantity: string }[]>(
    initialReceivers.map(() => ({ name: '', phone: '', quantity: '' }))
  );

  const isValidPhoneNumber = (phone: string) => /^010\d{8}$/.test(phone);
  const isDuplicatePhone = (phone: string, index: number) =>
    receivers.some((r, i) => i !== index && r.phone === phone);

  const addReceiver = () => {
    if (receivers.length >= 10) return;
    setReceivers((prev) => [...prev, { name: '', phone: '', quantity: 1 }]);
    setErrors((prev) => [...prev, { name: '', phone: '', quantity: '' }]);
  };

  const removeReceiver = (index: number) => {
    setReceivers((prev) => prev.filter((_, i) => i !== index));
    setErrors((prev) => prev.filter((_, i) => i !== index));
  };

  const updateReceiver = (index: number, field: keyof Receiver, value: string) => {
    const updated = [...receivers];

    if (field === 'quantity') {
      updated[index].quantity = Number(value);
    } else if (field === 'name') {
      updated[index].name = value;
    } else if (field === 'phone') {
      updated[index].phone = value;
    }

    setReceivers(updated);

    const newErrors = [...errors];
    if (field === 'name') {
      newErrors[index].name = value.trim() ? '' : '이름을 입력해주세요.';
    }
    if (field === 'phone') {
      if (!value.trim()) {
        newErrors[index].phone = '전화번호를 입력해주세요.';
      } else if (!isValidPhoneNumber(value)) {
        newErrors[index].phone = '올바른 전화번호 형식이 아닙니다.';
      } else if (isDuplicatePhone(value, index)) {
        newErrors[index].phone = '중복된 전화번호입니다.';
      } else {
        newErrors[index].phone = '';
      }
    }
    if (field === 'quantity') {
      newErrors[index].quantity = Number(value) < 1 ? '수량은 1개 이상이어야 합니다.' : '';
    }
    setErrors(newErrors);
  };

  const handleComplete = () => {
    let hasError = false;
    const newErrors = receivers.map((r, i) => {
      const err = { name: '', phone: '', quantity: '' };
      if (!r.name.trim()) {
        err.name = '이름을 입력해주세요.';
        hasError = true;
      }
      if (!r.phone.trim()) {
        err.phone = '전화번호를 입력해주세요.';
        hasError = true;
      } else if (!isValidPhoneNumber(r.phone)) {
        err.phone = '올바른 전화번호 형식이 아닙니다.';
        hasError = true;
      } else if (isDuplicatePhone(r.phone, i)) {
        err.phone = '중복된 전화번호입니다.';
        hasError = true;
      }
      if (r.quantity < 1) {
        err.quantity = '수량은 1개 이상이어야 합니다.';
        hasError = true;
      }
      return err;
    });
    setErrors(newErrors);

    if (!hasError) onComplete(receivers);
  };

  return (
    <div
      css={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        css={{
          backgroundColor: '#fff',
          width: '550px',
          height: '600px',
          borderRadius: '12px',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div css={{ padding: '24px', flexShrink: 0, borderBottom: '1px solid #eee' }}>
          <h3 css={{ margin: 0 }}>받는 사람</h3>
          <p css={receiverAddGuideStyle(theme)}>* 최대 10명까지 추가 할 수 있어요.</p>
          <p css={receiverAddGuideStyle(theme)}>
            * 받는 사람의 전화번호를 중복으로 입력할 수 없어요.
          </p>
          <button
            type="button"
            onClick={addReceiver}
            disabled={receivers.length >= 10}
            css={{
              backgroundColor:
                receivers.length >= 10 ? theme.color.gray.gray100 : theme.color.gray.gray300,
              color: theme.color.gray.gray1000,
              padding: '8px 16px',
              border: 'none',
              borderRadius: '6px',
              cursor: receivers.length >= 10 ? 'not-allowed' : 'pointer',
              marginTop: '12px',
            }}
          >
            추가하기
          </button>
        </div>

        <div css={{ flex: 1, overflowY: 'auto', padding: '0 24px' }}>
          {receivers.map((receiver, index) => (
            <div key={index} css={{ marginTop: '20px' }}>
              <h4 css={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                받는 사람 {index + 1}
                <button
                  type="button"
                  onClick={() => removeReceiver(index)}
                  css={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '18px',
                    padding: 0,
                  }}
                  aria-label={`받는 사람 ${index + 1} 삭제`}
                >
                  X
                </button>
              </h4>

              <div css={horizontalFormStyle(theme)}>
                <label css={receiverLabelStyle(theme)}>이름</label>
                <div style={{ flex: 1 }}>
                  <input
                    type="text"
                    placeholder="이름을 입력하세요."
                    value={receiver.name}
                    onChange={(e) => updateReceiver(index, 'name', e.target.value)}
                    css={errors[index].name ? errorInputStyle : undefined}
                  />
                  {errors[index].name && <p css={errorMessageStyle}>{errors[index].name}</p>}
                </div>
              </div>

              <div css={horizontalFormStyle(theme)}>
                <label css={receiverLabelStyle(theme)}>전화번호</label>
                <div style={{ flex: 1 }}>
                  <input
                    type="text"
                    placeholder="전화번호를 입력하세요"
                    value={receiver.phone}
                    onChange={(e) => updateReceiver(index, 'phone', e.target.value)}
                    css={errors[index].phone ? errorInputStyle : undefined}
                  />
                  {errors[index].phone && <p css={errorMessageStyle}>{errors[index].phone}</p>}
                </div>
              </div>

              <div css={horizontalFormStyle(theme)}>
                <label css={receiverLabelStyle(theme)}>수량</label>
                <div style={{ flex: 1 }}>
                  <input
                    type="number"
                    min={1}
                    value={receiver.quantity}
                    onChange={(e) => updateReceiver(index, 'quantity', e.target.value)}
                    css={errors[index].quantity ? errorInputStyle : undefined}
                  />
                  {errors[index].quantity && (
                    <p css={errorMessageStyle}>{errors[index].quantity}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          css={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '16px 24px',
            borderTop: '1px solid #eee',
            backgroundColor: '#fff',
            flexShrink: 0,
          }}
        >
          <button
            type="button"
            onClick={onClose}
            css={{
              padding: '12px 24px',
              borderRadius: '8px',
              backgroundColor: theme.color.gray.gray200,
              color: '#000',
              border: 'none',
              cursor: 'pointer',
              flex: 1,
              marginRight: 8,
            }}
          >
            취소
          </button>
          <button
            type="button"
            onClick={handleComplete}
            css={{
              padding: '12px 24px',
              borderRadius: '8px',
              backgroundColor: '#f9e000',
              color: '#000',
              border: 'none',
              cursor: 'pointer',
              flex: 2,
            }}
          >
            {receivers.length}명 완료
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddReceiverModal;
