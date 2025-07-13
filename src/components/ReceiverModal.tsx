import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import type { Receiver } from '@/types/receiver';

const DEFAULT_RECEIVERS: Receiver[] = [{ name: '', phone: '', quantity: 1 }];

type FormValues = {
  receivers: Receiver[];
};

interface ReceiverModalProps {
  receivers: Receiver[];
  setReceivers: (receivers: Receiver[]) => void;
  onClose: () => void;
}

const ReceiverModal: React.FC<ReceiverModalProps> = ({
  receivers: initialReceivers,
  setReceivers,
  onClose,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
    clearErrors,
    register,
  } = useForm<FormValues>({
    defaultValues: {
      receivers:
        initialReceivers && initialReceivers.length > 0
          ? initialReceivers
          : DEFAULT_RECEIVERS,
    },
    mode: 'onChange',
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'receivers',
  });

  const receivers = watch('receivers');
  React.useEffect(() => {
    const phoneCount: Record<string, number> = {};
    receivers.forEach((r) => {
      if (r.phone) {
        phoneCount[r.phone] = (phoneCount[r.phone] || 0) + 1;
      }
    });
    receivers.forEach((r, idx) => {
      if (r.phone && phoneCount[r.phone] > 1) {
        setError(`receivers.${idx}.phone`, {
          type: 'duplicate',
          message: '중복된 전화번호가 있습니다.',
        });
      } else if (errors.receivers?.[idx]?.phone?.type === 'duplicate') {
        clearErrors(`receivers.${idx}.phone`);
      }
    });
  }, [receivers, setError, clearErrors, errors.receivers]);

  const onSubmit = (data: FormValues) => {
    setReceivers(data.receivers);
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
      <form
        onSubmit={handleSubmit(onSubmit)}
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
            background: 'transport',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              fontWeight: 700,
              fontSize: 18,
              marginBottom: 8,
            }}
          >
            받는 사람
          </div>
          <div
            style={{
              color: '#535353',
              fontSize: 12,
              marginBottom: 12,
            }}
          >
            * 최대 10명까지 추가할 수 있어요.
            <br />* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.
          </div>
          <button
            type="button"
            onClick={() => append({ name: '', phone: '', quantity: 1 })}
            disabled={fields.length >= 10}
            style={{
              marginBottom: 16,
              borderRadius: 8,
              padding: '8px 20px',
              fontWeight: 500,
              fontSize: 13,
              cursor: fields.length >= 10 ? 'not-allowed' : 'pointer',
              background: '#eee',
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
          {fields.map((field, idx) => (
            <div
              key={field.id}
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
                <b>받는 사람 {idx + 1}</b>
                <button
                  type="button"
                  onClick={() => remove(idx)}
                  style={{
                    marginLeft: 8,
                    background: 'transparent',
                    border: 'none',
                    borderRadius: '50%',
                    width: 32,
                    height: 32,
                    fontSize: 20,
                    cursor: 'pointer',
                  }}
                  aria-label="삭제"
                >
                  ✕
                </button>
              </div>
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
                    {...register(`receivers.${idx}.name`, {
                      required: '이름을 입력해 주세요.',
                    })}
                    style={{
                      width: '100%',
                      height: 36,
                      border: errors.receivers?.[idx]?.name
                        ? '2px solid #f44336'
                        : '1px solid #ccc',
                      borderRadius: 8,
                      padding: '0 12px',
                    }}
                    placeholder="이름을 입력하세요."
                  />
                  {errors.receivers?.[idx]?.name && (
                    <div
                      style={{
                        color: '#f44336',
                        fontSize: 13,
                        marginTop: 4,
                      }}
                    >
                      {errors.receivers[idx].name.message}
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
                    {...register(`receivers.${idx}.phone`, {
                      required: '전화번호를 입력해 주세요.',
                      pattern: {
                        value: /^010\d{8}$/,
                        message: '올바른 전화번호 형식이 아닙니다.',
                      },
                      validate: (value) => {
                        if (
                          value &&
                          watch('receivers').filter(
                            (r, i) => r.phone === value && i !== idx,
                          ).length > 0
                        ) {
                          return '중복된 전화번호가 있습니다.';
                        }
                        return true;
                      },
                    })}
                    style={{
                      width: '100%',
                      height: 36,
                      border: errors.receivers?.[idx]?.phone
                        ? '2px solid #f44336'
                        : '1px solid #ccc',
                      borderRadius: 8,
                      padding: '0 12px',
                    }}
                    placeholder="전화번호를 입력하세요."
                  />
                  {errors.receivers?.[idx]?.phone && (
                    <div
                      style={{
                        color: '#f44336',
                        fontSize: 13,
                        marginTop: 4,
                      }}
                    >
                      {errors.receivers[idx].phone.message}
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
                <label style={{ minWidth: 60, marginRight: 8 }}>수량</label>
                <input
                  type="number"
                  {...register(`receivers.${idx}.quantity`, {
                    valueAsNumber: true,
                    required: true,
                    min: {
                      value: 1,
                      message: '구매 수량은 1개 이상이어야 해요.',
                    },
                  })}
                  style={{
                    width: 100,
                    height: 36,
                    border: errors.receivers?.[idx]?.quantity
                      ? '2px solid #f44336'
                      : '1px solid #ccc',
                    borderRadius: 8,
                    padding: '0 12px',
                  }}
                />
                {errors.receivers?.[idx]?.quantity && (
                  <div
                    style={{
                      color: '#f44336',
                      fontSize: 13,
                      marginTop: 4,
                    }}
                  >
                    {errors.receivers[idx].quantity.message}
                  </div>
                )}
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
            flexShrink: 0,
          }}
        >
          <button
            type="button"
            onClick={onClose}
            style={{
              background: '#eee',
              width: '120px',
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
            type="submit"
            style={{
              background: '#ffe812',
              width: '300px',
              padding: '10px 30px',
              borderRadius: 8,
              fontWeight: 'bold',
              fontSize: 15,
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {fields.length}명 완료
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReceiverModal;
