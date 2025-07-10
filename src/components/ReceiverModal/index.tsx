import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import Modal from '@/components/common/Modal';
import * as S from './styles';
import { Input, InputRow, Label, ErrorMessage } from '@/components/SenderForm/styles';
import {
  RECEIVER_NAME_ERROR,
  RECEIVER_PHONE_ERROR,
  PHONE_REGEX_ERROR,
  NAME_LABEL,
  PHONE_LABEL,
  MAX_RECEIVERS,
  QUANTITY_MIN_ERROR,
  QUANTITY_LABEL,
  DUPLICATE_PHONE_ERROR,
  CANCEL_BUTTON_TEXT,
  COMPLETE_BUTTON_SUFFIX,
  MODAL_TITLE,
  MAX_RECEIVERS_HINT_PREFIX,
  MAX_RECEIVERS_HINT_SUFFIX,
  DUPLICATE_PHONE_HINT,
  ADD_BUTTON_TEXT,
  RECEIVER_TITLE_PREFIX,
} from './constants';

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
        setError(`receivers.${index}.phone`, { type: 'manual', message: DUPLICATE_PHONE_ERROR });
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
      <S.CancelButton onClick={onClose}>{CANCEL_BUTTON_TEXT}</S.CancelButton>
      <S.FinishButton onClick={handleSubmit(onSubmit)}>
        {fields.length}{COMPLETE_BUTTON_SUFFIX}
      </S.FinishButton>
    </>
  );

  const modalHeaderContent = (
    <>
      <S.ModalTitle>{MODAL_TITLE}</S.ModalTitle>
      <S.HintText>{MAX_RECEIVERS_HINT_PREFIX}{MAX_RECEIVERS}{MAX_RECEIVERS_HINT_SUFFIX}</S.HintText>
      <S.HintText>{DUPLICATE_PHONE_HINT}</S.HintText>
      <S.AddButton onClick={handleAddReceiver} disabled={fields.length >= MAX_RECEIVERS}>
        {ADD_BUTTON_TEXT}
      </S.AddButton>
    </>
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={modalHeaderContent} footerContent={footerContent}>

      {fields.map((field, index) => (
        <S.ReceiverFormWrapper key={field.id}>
          <S.ReceiverTitle>{RECEIVER_TITLE_PREFIX}{index + 1}</S.ReceiverTitle>
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
