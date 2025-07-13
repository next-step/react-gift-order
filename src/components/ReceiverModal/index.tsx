import React from 'react';
import Modal from '@/components/common/Modal';
import * as S from './styles';
import { Input, InputRow, Label, ErrorMessage } from '@/components/SenderForm/styles';
import {
  NAME_LABEL,
  PHONE_LABEL,
  MAX_RECEIVERS,
  QUANTITY_LABEL,
  CANCEL_BUTTON_TEXT,
  COMPLETE_BUTTON_SUFFIX,
  MODAL_TITLE,
  MAX_RECEIVERS_HINT_PREFIX,
  MAX_RECEIVERS_HINT_SUFFIX,
  DUPLICATE_PHONE_HINT,
  ADD_BUTTON_TEXT,
  RECEIVER_TITLE_PREFIX,
} from './constants';
import { useReceiverForm } from './useReceiverForm';
import type { Receivers } from './schema';

interface ReceiverModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (receivers: Receivers) => void;
  initialReceivers?: Receivers;
}

const ReceiverModal: React.FC<ReceiverModalProps> = ({
  isOpen,
  onClose,
  onComplete,
  initialReceivers = [],
}) => {
  const {
    register,
    handleSubmit,
    errors,
    fields,
    handleAddReceiver,
    handleRemoveReceiver,
    onSubmit,
  } = useReceiverForm({
    initialReceivers,
    onComplete,
    onClose,
  });

  const footerContent = (
    <>
      <S.CancelButton onClick={onClose}>{CANCEL_BUTTON_TEXT}</S.CancelButton>
      <S.FinishButton onClick={handleSubmit(onSubmit)}>
        {fields.length}
        {COMPLETE_BUTTON_SUFFIX}
      </S.FinishButton>
    </>
  );

  const modalHeaderContent = (
    <>
      <S.ModalTitle>{MODAL_TITLE}</S.ModalTitle>
      <S.HintText>
        {MAX_RECEIVERS_HINT_PREFIX}
        {MAX_RECEIVERS}
        {MAX_RECEIVERS_HINT_SUFFIX}
      </S.HintText>
      <S.HintText>{DUPLICATE_PHONE_HINT}</S.HintText>
      <S.AddButton
        onClick={handleAddReceiver}
        disabled={fields.length >= MAX_RECEIVERS}
      >
        {ADD_BUTTON_TEXT}
      </S.AddButton>
    </>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={modalHeaderContent}
      footerContent={footerContent}
    >
      {fields.map((field, index) => (
        <S.ReceiverFormWrapper key={field.id}>
          <S.ReceiverTitle>
            {RECEIVER_TITLE_PREFIX}
            {index + 1}
          </S.ReceiverTitle>
          {fields.length > 1 && (
            <S.RemoveButton onClick={() => handleRemoveReceiver(index)}>
              &times;
            </S.RemoveButton>
          )}
          <InputRow>
            <Label>{NAME_LABEL}</Label>
            <Input {...register(`receivers.${index}.name`)} />
          </InputRow>
          {errors.receivers?.[index]?.name && (
            <ErrorMessage>
              {errors.receivers[index]?.name?.message}
            </ErrorMessage>
          )}
          <InputRow>
            <Label>{PHONE_LABEL}</Label>
            <Input {...register(`receivers.${index}.phone`)} />
          </InputRow>
          {errors.receivers?.[index]?.phone && (
            <ErrorMessage>
              {errors.receivers[index]?.phone?.message}
            </ErrorMessage>
          )}
          <InputRow>
            <Label>{QUANTITY_LABEL}</Label>
            <Input
              type="number"
              {...register(`receivers.${index}.quantity`, {
                valueAsNumber: true,
              })}
            />
          </InputRow>
          {errors.receivers?.[index]?.quantity && (
            <ErrorMessage>
              {errors.receivers[index]?.quantity?.message}
            </ErrorMessage>
          )}
        </S.ReceiverFormWrapper>
      ))}
    </Modal>
  );
};

export default ReceiverModal;
