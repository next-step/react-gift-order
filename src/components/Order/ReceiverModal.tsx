import styled from '@emotion/styled';
import { useForm, useFieldArray } from 'react-hook-form';
import type { Receiver } from '@/types/receiver';

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
  const {
    control,
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<{ receivers: Receiver[] }>({
    defaultValues: {
      receivers: receivers.length > 0 ? receivers : [{ name: '', phone: '', quantity: 1 }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'receivers',
  });

  const onSubmit = (data: { receivers: Receiver[] }) => {
    const phoneSet = new Set<string>();

    for (let i = 0; i < data.receivers.length; i++) {
      const phone = data.receivers[i].phone;
      if (phoneSet.has(phone)) {
        setError(`receivers.${i}.phone`, {
          type: 'duplicate',
          message: '전화번호가 중복됩니다.',
        });
        return;
      }
      phoneSet.add(phone);
    }

    onSave(data.receivers);
  };

  return (
    <Modal>
      <h3>받는 사람</h3>
      <p>* 최대 10명까지 추가할 수 있어요.</p>
      <p>* 전화번호는 중복될 수 없어요.</p>

      <AddBtn
        type="button"
        onClick={() => {
          if (fields.length >= 10) {
            alert('최대 10명까지 추가할 수 있습니다.');
            return;
          }
          append({ name: '', phone: '', quantity: 1 });
        }}
      >
        + 받는 사람 추가
      </AddBtn>

      <div>
        {fields.map((field, index) => (
          <div key={field.id} style={{ marginBottom: '16px' }}>
            <h4>
              받는 사람 {index + 1}
              {fields.length > 1 && (
                <button type="button" onClick={() => remove(index)}>
                  x
                </button>
              )}
            </h4>
            <Input
              placeholder="이름"
              {...register(`receivers.${index}.name`, {
                required: '이름을 입력해주세요.',
              })}
            />
            {errors.receivers?.[index]?.name && (
              <Error>{errors.receivers[index]?.name?.message}</Error>
            )}

            <Input
              placeholder="전화번호 (01012345678)"
              maxLength={11}
              {...register(`receivers.${index}.phone`, {
                required: '전화번호를 입력해주세요.',
                pattern: {
                  value: /^010\d{8}$/,
                  message: '전화번호 형식이 올바르지 않습니다.',
                },
              })}
            />
            {errors.receivers?.[index]?.phone && (
              <Error>{errors.receivers[index]?.phone?.message}</Error>
            )}

            <label>
              수량
              <QuantityInput
                type="number"
                min={1}
                {...register(`receivers.${index}.quantity`, {
                  valueAsNumber: true,
                  min: {
                    value: 1,
                    message: '수량은 최소 1개 이상이어야 해요.',
                  },
                })}
              />
            </label>
            {errors.receivers?.[index]?.quantity && (
              <Error>{errors.receivers[index]?.quantity?.message}</Error>
            )}
          </div>
        ))}

        <ButtonRow>
          <button type="button" onClick={onCancel}>
            취소
          </button>
          
          <button type="button" onClick={handleSubmit(onSubmit)}>
            {fields.length}명 완료
          </button>
        </ButtonRow>
      </div>
    </Modal>
  );
};

export default ReceiverModal;
