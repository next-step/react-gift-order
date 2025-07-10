import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import Modal from '@/components/common/Modal';
import * as S from './styles';
import { Input, InputRow, Label, ErrorMessage } from '@/components/OrderForm/styles';
const RECEIVER_NAME_ERROR = '받는 사람 이름을 입력해주세요.';
const RECEIVER_PHONE_ERROR = '받는 사람 연락처를 입력해주세요.';
const PHONE_REGEX_ERROR = '01012341234 형식으로 입력해주세요.';

const NAME_LABEL = '이름';
const PHONE_LABEL = '전화번호';

interface ReceiverFormInput {
  name: string;
  phone: string;
  quantity: number;
}

interface ReceiverModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (receivers: ReceiverFormInput[]) => void;
  initialReceivers?: ReceiverFormInput[];
}

const MAX_RECEIVERS = 10;
const QUANTITY_MIN_ERROR = '수량은 1개 이상이어야 합니다.';
const QUANTITY_LABEL = '수량';

const ReceiverModal: React.FC<ReceiverModalProps> = ({
  isOpen,
  onClose,
  onComplete,
  initialReceivers = [],
}) => {
  const { control, register, handleSubmit, formState: { errors }, watch, setError, clearErrors } = useForm<{
    receivers: ReceiverFormInput[];
  }>({
    defaultValues: {
      receivers: initialReceivers.length > 0 ? initialReceivers : [{ name: '', phone: '', quantity: 1 }],
    },
    mode: 'onChange',
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'receivers',
  });


  const handleAddReceiver = () => {
    if (fields.length < MAX_RECEIVERS) {
      append({ name: '', phone: '', quantity: 1 });
    }
  };

  const handleRemoveReceiver = (index: number) => {
    if (fields.length > 1) {
      remove(index);
    }
  };

  const onSubmit = (data: { receivers: ReceiverFormInput[] }) => {
    let hasDuplicatePhone = false;
    const phoneNumbers = new Set<string>();

    data.receivers.forEach((receiver, index) => {
      if (phoneNumbers.has(receiver.phone)) {
        setError(`receivers.${index}.phone`, { type: 'manual', message: '중복된 전화번호입니다.' });
        hasDuplicatePhone = true;
      } else {
        phoneNumbers.add(receiver.phone);
        clearErrors(`receivers.${index}.phone`);
      }
    });

    if (hasDuplicatePhone) {
      return;
    }

    onComplete(data.receivers);
    onClose();
  };

  const footerContent = (
    <>
      <S.CancelButton onClick={onClose}>취소</S.CancelButton>
      <S.FinishButton onClick={handleSubmit(onSubmit)}>
        {fields.length}명 완료
      </S.FinishButton>
    </>
  );

  const modalHeaderContent = (
    <>
      <S.ModalTitle>받는사람</S.ModalTitle>
      <S.HintText>최대 {MAX_RECEIVERS}명까지 추가 할 수 있어요.</S.HintText>
      <S.HintText>받는사람의 전화번호를 중복으로 입력할 수 없어요.</S.HintText>
      <S.AddButton onClick={handleAddReceiver} disabled={fields.length >= MAX_RECEIVERS}>
        추가하기
      </S.AddButton>
    </>
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={modalHeaderContent} footerContent={footerContent}>

      {fields.map((field, index) => (
        <S.ReceiverFormWrapper key={field.id}>
          <S.ReceiverTitle>받는사람 {index + 1}</S.ReceiverTitle>
          {fields.length > 1 && (
            <S.RemoveButton onClick={() => handleRemoveReceiver(index)}>
              &times;
            </S.RemoveButton>
          )}
          <InputRow>
            <Label>{NAME_LABEL}</Label>
            <Input
              {...register(`receivers.${index}.name` as const, {
                required: RECEIVER_NAME_ERROR,
              })}
            />
          </InputRow>
          {errors.receivers?.[index]?.name && (
            <ErrorMessage>{errors.receivers[index]?.name?.message}</ErrorMessage>
          )}
          <InputRow>
            <Label>{PHONE_LABEL}</Label>
            <Input
              {...register(`receivers.${index}.phone` as const, {
                required: RECEIVER_PHONE_ERROR,
                pattern: {
                  value: /^010\d{8}$/,
                  message: PHONE_REGEX_ERROR,
                },
              })}
            />
          </InputRow>
          {errors.receivers?.[index]?.phone && (
            <ErrorMessage>{errors.receivers[index]?.phone?.message}</ErrorMessage>
          )}
          <InputRow>
            <Label>{QUANTITY_LABEL}</Label>
            <Input
              type='number'
              {...register(`receivers.${index}.quantity` as const, {
                required: true,
                min: {
                  value: 1,
                  message: QUANTITY_MIN_ERROR,
                },
                valueAsNumber: true,
              })}
            />
          </InputRow>
          {errors.receivers?.[index]?.quantity && (
            <ErrorMessage>{errors.receivers[index]?.quantity?.message}</ErrorMessage>
          )}
        </S.ReceiverFormWrapper>
      ))}
    </Modal>
  );
};

export default ReceiverModal;
