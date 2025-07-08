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
  const [receivers, setReceivers] = useState<Receiver[]>(
    initialReceivers.length > 0 ? initialReceivers : [{ name: '', phone: '', quantity: 1 }]
  );

  const [errors, setErrors] = useState<
    { name: string; phone: string; quantity: string }[]
  >(
    initialReceivers.length > 0
      ? initialReceivers.map(() => ({ name: '', phone: '', quantity: '' }))
      : [{ name: '', phone: '', quantity: '' }]
  );

  const isValidPhoneNumber = (phone: string) => /^010\d{8}$/.test(phone);

  const isDuplicatePhone = (phone: string, index: number) => {
    return receivers.some((receiver, i) => i !== index && receiver.phone === phone);
  };

  const addReceiver = () => {
    if (receivers.length >= 10) return;
    setReceivers((prev) => [...prev, { name: '', phone: '', quantity: 1 }]);
    setErrors((prev) => [...prev, { name: '', phone: '', quantity: '' }]);
  };

  const removeReceiver = (index: number) => {
    setReceivers((prev) => prev.filter((_, i) => i !== index));
    setErrors((prev) => prev.filter((_, i) => i !== index));
  };

  const updateReceiver = (
    index: number,
    field: keyof Receiver,
    value: string
  ) => {
    const updatedReceivers = [...receivers];
    if (field === 'quantity') {
      updatedReceivers[index][field] = Number(value);
    } else {
      updatedReceivers[index][field] = value;
    }
    setReceivers(updatedReceivers);

    const updatedErrors = [...errors];

    if (field === 'name') {
      updatedErrors[index].name = value.trim() ? '' : '이름을 입력해주세요.';
    }
    if (field === 'phone') {
      if (!value.trim()) {
        updatedErrors[index].phone = '전화번호를 입력해주세요.';
      } else if (!isValidPhoneNumber(value)) {
        updatedErrors[index].phone = '올바른 전화번호 형식이 아닙니다.';
      } else if (isDuplicatePhone(value, index)) {
        updatedErrors[index].phone = '중복된 전화번호입니다.';
      } else {
        updatedErrors[index].phone = '';
      }
    }
    if (field === 'quantity') {
      updatedErrors[index].quantity = Number(value) < 1 ? '수량은 1개 이상이어야 합니다.' : '';
    }

    setErrors(updatedErrors);
  };

  // 완료 버튼 클릭 시 전체 검증 후 완료
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

    if (hasError) return;

    onComplete(receivers);
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
          backgroundColor: 'white',
          padding: '24px',
          borderRadius: '8px',
          width: '550px',
          maxHeight: '80vh',
          overflowY: 'auto',
          boxShadow: '0 0 10px rgba(0,0,0,0.3)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 css={{ marginTop: 0 }}>받는 사람 추가</h3>
        <p css={receiverAddGuideStyle(theme)}>* 최대 10명까지 추가 할 수 있어요.</p>
        <p css={receiverAddGuideStyle(theme)}>* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.</p>

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

        {receivers.map((receiver, index) => (
          <div key={index} css={{ marginTop: '20px' }}>
            <h4
              css={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '8px',
              }}
            >
              받는 사람 {index + 1}
              <button
                type="button"
                onClick={() => removeReceiver(index)}
                css={{
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '18px',
                  lineHeight: 1,
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

        <button
          type="button"
          onClick={handleComplete}
          css={{
            marginTop: '16px',
            padding: '8px 16px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            cursor: 'pointer',
            backgroundColor: 'white',
          }}
        >
          완료
        </button>

        <button
          type="button"
          onClick={onClose}
          css={{
            marginTop: '8px',
            padding: '8px 16px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            cursor: 'pointer',
            backgroundColor: 'white',
          }}
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default AddReceiverModal;
