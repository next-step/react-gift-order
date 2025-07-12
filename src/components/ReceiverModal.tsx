/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { useForm, useFieldArray, Controller } from 'react-hook-form';

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

const Input = styled.input<{ isInvalid?: boolean }>`
  width: 100%;
  padding: 8px;
  margin-top: 4px;
  border: 1px solid
    ${({ theme, isInvalid }) =>
      isInvalid ? 'red' : theme.colors.gray400};
  border-radius: 6px;

  &:focus {
    outline: none;
    border-color: ${({ theme, isInvalid }) =>
      isInvalid ? 'red' : theme.colors.gray700};
  }
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

const Confirm = styled.button<{ disabled: boolean }>`
  background: #ffeb00;
  padding: 12px 20px;
  border-radius: 8px;
  border: none;
  font-weight: bold;
`;

const ErrorText = styled.div`
  color: red;
  font-size: 12px;
  margin-left: 1px;
  margin-top: 5px;
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

interface ReceiverFormValues {
  receivers: {
    name: string;
    phone: string;
    quantity: number;
  }[];
}

const ReceiverModal = ({
  isOpen,
  onClose,
  onComplete,
}: ReceiverModalProps) => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<ReceiverFormValues>({
    mode: 'onChange',
    defaultValues: { receivers: [] },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'receivers',
  });

  const receivers = watch('receivers');

  if (!isOpen) return null;

  const handleAdd = () => {
    if (fields.length >= 10) {
      alert('받는 사람은 최대 10명까지 가능합니다!');
      return;
    }
    append({ name: '', phone: '', quantity: 1 });
  };

  const onSubmit = (data: ReceiverFormValues) => {
    onComplete(data.receivers.map((r, i) => ({ ...r, id: i })));
    onClose();
  };

  const isPhoneDuplicate = (value: string, index: number) => {
    return (
      receivers.filter((r, i) => i !== index && r.phone === value)
        .length === 0 || '중복된 전화번호입니다.'
    );
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
          <button type="button" onClick={handleAdd}>
            추가하기
          </button>
        </AddButtonWrapper>

        <form onSubmit={handleSubmit(onSubmit)}>
          {fields.map((field, idx) => (
            <ReceiverCard key={field.id}>
              <Header>
                <strong>받는 사람 {idx + 1}</strong>
                <RemoveBtn type="button" onClick={() => remove(idx)}>
                  ×
                </RemoveBtn>
              </Header>

              <Label>이름</Label>
              <Controller
                control={control}
                name={`receivers.${idx}.name`}
                rules={{ required: '이름을 입력해주세요.' }}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="이름을 입력하세요"
                    isInvalid={!!errors?.receivers?.[idx]?.name}
                  />
                )}
              />
              {errors?.receivers?.[idx]?.name && (
                <ErrorText>
                  {errors.receivers[idx]?.name?.message}
                </ErrorText>
              )}

              <Label>전화번호</Label>
              <Controller
                control={control}
                name={`receivers.${idx}.phone`}
                rules={{
                  required: '전화번호를 입력해주세요.',
                  pattern: {
                    value: /^010\d{8}$/,
                    message: '올바른 전화번호 형식이 아니에요.',
                  },
                  validate: value => isPhoneDuplicate(value, idx),
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="전화번호를 입력하세요."
                    isInvalid={!!errors?.receivers?.[idx]?.phone}
                  />
                )}
              />
              {errors?.receivers?.[idx]?.phone && (
                <ErrorText>
                  {errors.receivers[idx]?.phone?.message}
                </ErrorText>
              )}

              <Label>수량</Label>
              <Controller
                control={control}
                name={`receivers.${idx}.quantity`}
                rules={{
                  required: '수량을 입력해주세요.',
                  min: {
                    value: 1,
                    message: '구매 수량은 1개 이상이어야 해요.',
                  },
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="number"
                    min={1}
                    isInvalid={!!errors?.receivers?.[idx]?.quantity}
                  />
                )}
              />
              {errors?.receivers?.[idx]?.quantity && (
                <ErrorText>
                  {errors.receivers[idx]?.quantity?.message}
                </ErrorText>
              )}
            </ReceiverCard>
          ))}

          <Bottom>
            <Cancel type="button" onClick={onClose}>
              취소
            </Cancel>
            <Confirm type="submit" disabled={!isValid}>
              {fields.length}명 완료
            </Confirm>
          </Bottom>
        </form>
      </Modal>
    </Overlay>
  );
};

export default ReceiverModal;
