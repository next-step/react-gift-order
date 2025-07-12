import type {
  UseFormRegister,
  FieldErrors,
  UseFieldArrayRemove,
  UseFieldArrayAppend,
  FieldArrayWithId,
} from 'react-hook-form';
import type { OrderFormData } from '@/schemas/orderSchema';
import { useEffect, useRef } from 'react';

type Props = {
  register: UseFormRegister<OrderFormData>;
  errors?: FieldErrors<OrderFormData>;
  fields: FieldArrayWithId<OrderFormData, 'recipients', 'id'>[];
  remove: UseFieldArrayRemove;
  append: UseFieldArrayAppend<OrderFormData, 'recipients'>;
  setModalOpen: (open: boolean) => void;
  theme: any;
};

const RecipientModal = ({
  register,
  errors,
  fields,
  remove,
  append,
  setModalOpen,
  theme,
}: Props) => {
  const recipientErrors = errors?.recipients ?? [];

  const appendedOnOpen = useRef(false);

  useEffect(() => {
    if (!appendedOnOpen.current && fields.length < 10) {
      append({ name: '', phone: '', quantity: 1 });
      appendedOnOpen.current = true;
    }
  }, [append, fields.length]);

  const handleCancel = () => {
    if (appendedOnOpen.current) {
      remove(fields.length - 1);
      appendedOnOpen.current = false;
    }
    setModalOpen(false);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: theme.colors.semantic.backgroundDefault,
        padding: 24,
        boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
        borderRadius: 16,
        width: '100%',
        maxWidth: 480,
        maxHeight: '90vh',
        overflowY: 'auto',
        zIndex: 1000,
      }}
    >
      <h2 style={{ fontWeight: 700, marginBottom: 8 }}>받는 사람</h2>
      <p
        style={{
          fontSize: 13,
          color: theme.colors.semantic.textDefault,
          marginBottom: 16,
        }}
      >
        * 최대 10명까지 추가할 수 있어요.
        <br />* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.
      </p>

      <button
        type="button"
        onClick={() => {
          if (fields.length < 10) {
            append({ name: '', phone: '', quantity: 1 });
          }
        }}
        style={{
          marginBottom: 16,
          padding: '6px 12px',
          backgroundColor: theme.colors.semantic.backgroundFill,
          borderRadius: 6,
          border: `1px solid ${theme.colors.semantic.borderDefault}`,
          cursor: fields.length < 10 ? 'pointer' : 'not-allowed',
        }}
        disabled={fields.length >= 10}
      >
        추가하기
      </button>

      {fields.map((field, index) => (
        <div
          key={field.id}
          style={{
            borderTop: `1px solid ${theme.colors.semantic.borderDefault}`,
            paddingTop: 16,
            marginBottom: 16,
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <strong>받는 사람 {index + 1}</strong>
            <button
              type="button"
              onClick={() => remove(index)}
              style={{
                color: 'black',
                background: 'white',
                border: `1px solid ${theme.colors.semantic.textDefault}`,
                fontSize: 16,
                cursor: 'pointer',
                padding: '3px',
              }}
            >
              삭제
            </button>
          </div>

          <div style={{ marginTop: 8 }}>
            <input
              {...register(`recipients.${index}.name` as const)}
              placeholder="이름을 입력하세요."
              style={{
                width: '100%',
                padding: '8px 12px',
                border: `1px solid ${theme.colors.semantic.borderDefault}`,
                borderRadius: 8,
                marginBottom: 4,
                backgroundColor: theme.colors.semantic.backgroundDefault,
                color: theme.colors.semantic.textDefault,
              }}
            />
            {recipientErrors?.[index]?.name && (
              <p
                style={{
                  color: theme.colors.semantic.statusCritical,
                  marginTop: 0,
                  marginBottom: 8,
                  fontSize: 12,
                }}
              >
                {recipientErrors[index]?.name?.message}
              </p>
            )}

            <input
              {...register(`recipients.${index}.phone` as const)}
              placeholder="전화번호를 입력하세요."
              style={{
                width: '100%',
                padding: '8px 12px',
                border: `1px solid ${theme.colors.semantic.borderDefault}`,
                borderRadius: 8,
                marginBottom: 4,
                backgroundColor: theme.colors.semantic.backgroundDefault,
                color: theme.colors.semantic.textDefault,
              }}
            />
            {recipientErrors?.[index]?.phone && (
              <p
                style={{
                  color: theme.colors.semantic.statusCritical,
                  marginTop: 0,
                  marginBottom: 8,
                  fontSize: 12,
                }}
              >
                {recipientErrors[index]?.phone?.message}
              </p>
            )}

            <input
              type="number"
              min={1}
              {...register(`recipients.${index}.quantity` as const)}
              placeholder="수량"
              style={{
                width: '100%',
                padding: '8px 12px',
                border: `1px solid ${theme.colors.semantic.borderDefault}`,
                borderRadius: 8,
                backgroundColor: theme.colors.semantic.backgroundDefault,
                color: theme.colors.semantic.textDefault,
              }}
            />
            {recipientErrors?.[index]?.quantity && (
              <p
                style={{
                  color: theme.colors.semantic.statusCritical,
                  marginTop: 0,
                  marginBottom: 8,
                  fontSize: 12,
                }}
              >
                {recipientErrors[index]?.quantity?.message}
              </p>
            )}
          </div>
        </div>
      ))}

      <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
        <button
          type="button"
          onClick={handleCancel}
          style={{
            flex: 1,
            padding: 12,
            borderRadius: 8,
            border: `1px solid ${theme.colors.semantic.borderDefault}`,
            background: theme.colors.semantic.backgroundDefault,
          }}
        >
          취소
        </button>
        <button
          type="button"
          onClick={() => {
            appendedOnOpen.current = false;
            setModalOpen(false);
          }}
          style={{
            flex: 1,
            padding: 12,
            borderRadius: 8,
            border: 'none',
            backgroundColor: theme.colors.semantic.kakaoYellow,
            fontWeight: 'bold',
          }}
        >
          {fields.length}명 완료
        </button>
      </div>
    </div>
  );
};

export default RecipientModal;
