import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import type {
  UseFormSetError,
  UseFormClearErrors,
  FieldErrors,
} from 'react-hook-form';
import type { Receiver } from '@/types/receiver';
import styled from 'styled-components';

const DEFAULT_RECEIVERS: Receiver[] = [{ name: '', phone: '', quantity: 1 }];

type FormValues = {
  receivers: Receiver[];
};

interface ReceiverModalProps {
  receivers: Receiver[];
  setReceivers: (receivers: Receiver[]) => void;
  onClose: () => void;
}

// Styled Components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalForm = styled.form`
  background: #fff;
  border-radius: 16px;
  width: 500px;
  height: 700px;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
`;

const ModalHeader = styled.div`
  padding: 32px 32px 0 32px;
  background: transparent;
  flex-shrink: 0;
`;

const ModalTitle = styled.div`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 8px;
`;

const ModalDescription = styled.div`
  color: #535353;
  font-size: 12px;
  margin-bottom: 12px;
`;

const AddButton = styled.button`
  margin-bottom: 16px;
  border-radius: 8px;
  padding: 8px 20px;
  font-weight: 500;
  font-size: 13px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  background: #eee;
  border: none;
`;

const ModalContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 32px;
  min-height: 0;
`;

const ReceiverCard = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const DeleteButton = styled.button`
  margin-left: 8px;
  background: transparent;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 20px;
  cursor: pointer;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const FormLabel = styled.label`
  min-width: 60px;
  margin-right: 8px;
`;

const FormInput = styled.input<{ hasError?: boolean }>`
  width: 100%;
  height: 36px;
  border: ${(props) =>
    props.hasError ? '2px solid #f44336' : '1px solid #ccc'};
  border-radius: 8px;
  padding: 0 12px;
`;

const QuantityInput = styled.input<{ hasError?: boolean }>`
  width: 100px;
  height: 36px;
  border: ${(props) =>
    props.hasError ? '2px solid #f44336' : '1px solid #ccc'};
  border-radius: 8px;
  padding: 0 12px;
`;

const ErrorMessage = styled.div`
  color: #f44336;
  font-size: 13px;
  margin-top: 4px;
`;

const ModalFooter = styled.div`
  width: 100%;
  background: #fff;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  display: flex;
  justify-content: space-between;
  padding: 24px 32px;
  box-sizing: border-box;
  border-top: 1px solid #eee;
  flex-shrink: 0;
`;

const CancelButton = styled.button`
  background: #eee;
  width: 120px;
  padding: 10px 30px;
  border-radius: 8px;
  font-size: 15px;
  border: none;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  background: #ffe812;
  width: 300px;
  padding: 10px 30px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 15px;
  border: none;
  cursor: pointer;
`;

function checkDuplicatePhone(
  receivers: Receiver[],
  setError: UseFormSetError<FormValues>,
  clearErrors: UseFormClearErrors<FormValues>,
  errors: FieldErrors<FormValues>,
) {
  const phoneCount: Record<string, number> = {};
  receivers.forEach((r: Receiver) => {
    if (r.phone) phoneCount[r.phone] = (phoneCount[r.phone] || 0) + 1;
  });
  receivers.forEach((r: Receiver, idx: number) => {
    if (r.phone && phoneCount[r.phone] > 1) {
      setError(`receivers.${idx}.phone`, {
        type: 'duplicate',
        message: '중복된 전화번호가 있습니다.',
      });
    } else if (errors.receivers?.[idx]?.phone?.type === 'duplicate') {
      clearErrors(`receivers.${idx}.phone`);
    }
  });
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
    getValues,
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
    <ModalOverlay>
      <ModalForm onSubmit={handleSubmit(onSubmit)}>
        <ModalHeader>
          <ModalTitle>받는 사람</ModalTitle>
          <ModalDescription>
            * 최대 10명까지 추가할 수 있어요.
            <br />* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.
          </ModalDescription>
          <AddButton
            type="button"
            onClick={() => append({ name: '', phone: '', quantity: 1 })}
            disabled={fields.length >= 10}
          >
            추가하기
          </AddButton>
        </ModalHeader>
        <ModalContent>
          {fields.map((field, idx) => (
            <ReceiverCard key={field.id}>
              <CardHeader>
                <b>받는 사람 {idx + 1}</b>
                <DeleteButton
                  type="button"
                  onClick={() => remove(idx)}
                  aria-label="삭제"
                >
                  ✕
                </DeleteButton>
              </CardHeader>
              <FormRow>
                <FormLabel>이름</FormLabel>
                <div style={{ flex: 1 }}>
                  <FormInput
                    {...register(`receivers.${idx}.name`, {
                      required: '이름을 입력해 주세요.',
                    })}
                    hasError={!!errors.receivers?.[idx]?.name}
                    placeholder="이름을 입력하세요."
                  />
                  {errors.receivers?.[idx]?.name && (
                    <ErrorMessage>
                      {errors.receivers[idx].name.message}
                    </ErrorMessage>
                  )}
                </div>
              </FormRow>
              <FormRow>
                <FormLabel>전화번호</FormLabel>
                <div style={{ flex: 1 }}>
                  <FormInput
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
                    hasError={!!errors.receivers?.[idx]?.phone}
                    placeholder="전화번호를 입력하세요."
                    onChange={(e) => {
                      checkDuplicatePhone(
                        getValues('receivers'),
                        setError,
                        clearErrors,
                        errors,
                      );
                    }}
                  />
                  {errors.receivers?.[idx]?.phone && (
                    <ErrorMessage>
                      {errors.receivers[idx].phone.message}
                    </ErrorMessage>
                  )}
                </div>
              </FormRow>
              <FormRow>
                <FormLabel>수량</FormLabel>
                <QuantityInput
                  type="number"
                  {...register(`receivers.${idx}.quantity`, {
                    valueAsNumber: true,
                    required: true,
                    min: {
                      value: 1,
                      message: '구매 수량은 1개 이상이어야 해요.',
                    },
                  })}
                  hasError={!!errors.receivers?.[idx]?.quantity}
                />
                {errors.receivers?.[idx]?.quantity && (
                  <ErrorMessage>
                    {errors.receivers[idx].quantity.message}
                  </ErrorMessage>
                )}
              </FormRow>
            </ReceiverCard>
          ))}
        </ModalContent>
        <ModalFooter>
          <CancelButton type="button" onClick={onClose}>
            취소
          </CancelButton>
          <SubmitButton type="submit">{fields.length}명 완료</SubmitButton>
        </ModalFooter>
      </ModalForm>
    </ModalOverlay>
  );
};

export default ReceiverModal;
