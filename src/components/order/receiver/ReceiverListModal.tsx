import { useState, useEffect } from 'react';
import { useForm, useFieldArray, FormProvider } from 'react-hook-form';
import styled from '@emotion/styled';
import { LuX } from 'react-icons/lu';
import { isBlank, isPhone } from '@/utils/validation';

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

const Modal = styled.div`
  background: #fff;
  width: 100%;
  max-width: 600px;
  height: 100%;
  max-height: 590px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 16px 24px;
`;

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1; // 중요!
  overflow: hidden;
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.colors.semantic.textDefault};
  ${({ theme }) => theme.typography.title1Bold};
  margin-bottom: 4px;
`;

const Label = styled.p`
  color: ${({ theme }) => theme.colors.gray[800]};
  ${({ theme }) => theme.typography.label2Regular};
  margin-bottom: 8px;
`;

const AddButton = styled.button<{ disabled?: boolean }>`
  width: auto;
  align-self: start;
  padding: 8px 16px;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray[200] : theme.colors.gray[300]};
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray[600] : theme.colors.semantic.textDefault};
  ${({ theme }) => theme.typography.label2Regular};
  border-radius: 8px;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  margin-bottom: 16px;
`;

// 폼 //
const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Field = styled.div`
  padding-bottom: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[400]};
`;

const LabelTag = styled.div`
  display: flex;
  align-items: center;
`;

const LabelNum = styled.h3`
  ${({ theme }) => theme.typography.label1Bold};
  margin-right: 4px;
`;

const LabelRow = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
  gap: 12px;
`;

const LabelTitle = styled.label`
  width: 75px;
  ${({ theme }) => theme.typography.label1Regular};
`;

const Input = styled.input<{ error?: boolean }>`
  width: 100%;
  height: 37px;
  padding: 8px 12px;
  box-sizing: border-box;
  ${({ theme }) => theme.typography.label1Regular};
  border: 1px solid
    ${({ theme, error }) => (error ? theme.colors.red[600] : theme.colors.gray[400])};
  border-radius: 8px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[600]};
  }
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gray[700]};
  }
`;

const ErrorMessage = styled.p`
  ${({ theme }) => theme.typography.label2Regular};
  color: ${({ theme }) => theme.colors.red[600]};
  margin-left: 80px;
  margin-top: -4px;
  margin-bottom: 8px;
`;

const BottomBtn = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  gap: 12px;
`;

const CancelBtn = styled.button`
  flex: 1 1 0%;
  padding: 12px 24px;
  width: 43px;
  background-color: ${({ theme }) => theme.colors.gray[300]};
  ${({ theme }) => theme.typography.label1Regular};
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

const SaveBtn = styled.button`
  flex: 3 1 0%;
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.colors.semantic.kakaoYellow};
  ${({ theme }) => theme.typography.label1Regular};
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

interface Receiver {
  name: string;
  phone: string;
  qty: number;
}

interface FormValues {
  receivers: Receiver[];
}

interface Props {
  onClose: () => void;
}

export default function ReceiverListModal({ onClose }: Props) {
  const methods = useForm<FormValues>({
    defaultValues: {
      receivers: [],
    },
    mode: 'onChange',
  });

  const {
    control,
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = methods;

  const [duplicateIndexes, setDuplicateIndexes] = useState<number[]>([]);
  const watchReceivers = watch('receivers');

  useEffect(() => {
    const phoneMap: Record<string, number[]> = {};

    watchReceivers.forEach((receiver, idx) => {
      const phone = receiver.phone;
      if (!phone) return;
      if (!phoneMap[phone]) phoneMap[phone] = [];
      phoneMap[phone].push(idx);
    });

    const duplicates = Object.values(phoneMap)
      .filter((arr) => arr.length > 1)
      .flat();

    setDuplicateIndexes(duplicates);
  }, [watchReceivers]);

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'receivers',
  });

  const onSubmit = () => {
    const values = getValues('receivers');
    const phones = values.map((v) => v.phone);

    const duplicates = phones.reduce<Record<string, number[]>>((acc, phone, i) => {
      if (!acc[phone]) acc[phone] = [];
      acc[phone].push(i);
      return acc;
    }, {});

    const duplicatesList = Object.values(duplicates)
      .filter((arr) => arr.length > 1)
      .flat();

    setDuplicateIndexes(duplicatesList);

    if (duplicatesList.length > 0) {
      return;
    }

    onClose();
  };

  return (
    <FormProvider {...methods}>
      <Overlay>
        <Modal>
          <FormStyle onSubmit={handleSubmit(onSubmit)}>
            <Title>받는 사람</Title>
            <Label>
              <p>* 최대 10명까지 추가 할 수 있어요.</p>
              <p>* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.</p>
            </Label>

            <AddButton
              type="button"
              onClick={() => append({ name: '', phone: '', qty: 1 })}
              disabled={fields.length >= 10}
            >
              추가하기
            </AddButton>

            <Content>
              {fields.map((field, index) => (
                <Field key={field.id}>
                  <LabelTag>
                    <LabelNum>받는 사람 {index + 1}</LabelNum>
                    <LuX size={20} css={{ cursor: 'pointer' }} onClick={() => remove(index)} />
                  </LabelTag>

                  <LabelRow>
                    <LabelTitle htmlFor={`name-${index}`}>이름</LabelTitle>
                    <Input
                      id={`name-${index}`}
                      placeholder="이름을 입력하세요."
                      {...register(`receivers.${index}.name`, {
                        validate: (v) => !isBlank(v) || '이름을 입력해주세요.',
                      })}
                      error={!!errors.receivers?.[index]?.name}
                    />
                  </LabelRow>
                  {errors.receivers?.[index]?.name && (
                    <ErrorMessage>{errors.receivers[index].name?.message}</ErrorMessage>
                  )}

                  <LabelRow>
                    <LabelTitle htmlFor={`phone-${index}`}>전화번호</LabelTitle>
                    <Input
                      id={`phone-${index}`}
                      placeholder="전화번호를 입력하세요."
                      {...register(`receivers.${index}.phone`, {
                        validate: (v) => {
                          if (isBlank(v)) return '전화번호를 입력해주세요.';
                          if (!isPhone(v)) return '올바른 전화번호 형식이 아닙니다.';

                          const phones = getValues('receivers').map((r) => r.phone);
                          const isDuplicate = phones.filter((p) => p === v).length > 1;
                          if (isDuplicate) return '중복된 전화번호가 있습니다.';

                          return true;
                        },
                      })}
                      error={!!errors.receivers?.[index]?.phone || duplicateIndexes.includes(index)}
                    />
                  </LabelRow>
                  {errors.receivers?.[index]?.phone && (
                    <ErrorMessage>{errors.receivers[index].phone?.message}</ErrorMessage>
                  )}
                  {duplicateIndexes.includes(index) && (
                    <ErrorMessage>중복된 전화번호가 있습니다.</ErrorMessage>
                  )}

                  <LabelRow>
                    <LabelTitle htmlFor={`qty-${index}`}>수량</LabelTitle>
                    <Input
                      id={`qty-${index}`}
                      type="number"
                      min={1}
                      {...register(`receivers.${index}.qty`, {
                        valueAsNumber: true,
                        validate: (v) => v >= 1 || '수량은 1개 이상이어야 합니다.',
                      })}
                      error={!!errors.receivers?.[index]?.qty}
                    />
                  </LabelRow>
                  {errors.receivers?.[index]?.qty && (
                    <ErrorMessage>{errors.receivers[index].qty?.message}</ErrorMessage>
                  )}
                </Field>
              ))}
            </Content>

            <BottomBtn>
              <CancelBtn type="button" onClick={onClose}>
                취소
              </CancelBtn>
              <SaveBtn type="submit">{fields.length}명 완료</SaveBtn>
            </BottomBtn>
          </FormStyle>
        </Modal>
      </Overlay>
    </FormProvider>
  );
}
