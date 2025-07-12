import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import Modal from '@/components/common/Modal';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import * as S from './styles';
import { Input, InputRow, Label, ErrorMessage } from '@/components/SenderForm/styles';
import {
  RECEIVER_NAME_ERROR,
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

const ReceiverSchema = z.object({
  name: z.string().nonempty(RECEIVER_NAME_ERROR),
  phone: z.string().regex(/^010\d{8}$/, PHONE_REGEX_ERROR),
  quantity: z.number().min(1, QUANTITY_MIN_ERROR),
});
type Receiver = z.infer<typeof ReceiverSchema>;

const FormSchema = z.object({
  receivers: z
    .array(ReceiverSchema)
    .min(1)
    .max(MAX_RECEIVERS, `${MAX_RECEIVERS_HINT_PREFIX}${MAX_RECEIVERS}${MAX_RECEIVERS_HINT_SUFFIX}`)
    .superRefine((receivers: Receiver[], ctx: z.RefinementCtx) => {
      const seen = new Set<string>();
      receivers.forEach((r: Receiver, i: number) => {
        if (seen.has(r.phone)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: DUPLICATE_PHONE_ERROR,
            path: ['receivers', i, 'phone'],
          });
        } else {
          seen.add(r.phone);
        }
      });
    }),
});

type FormValues = z.infer<typeof FormSchema>;
type Receivers = FormValues['receivers'];

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
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      receivers:
        initialReceivers.length > 0
          ? initialReceivers
          : [{ name: '', phone: '', quantity: 1 }],
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

  const onSubmit = (data: FormValues) => {
    onComplete(data.receivers);
    onClose();
  };

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
