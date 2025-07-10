import { useForm, useFieldArray } from "react-hook-form";
import {
  ModalHeader,
  ModalOverlay,
  ModalContent,
  ModalTitle,
  ModalBody,
  InfoText,
  AddSection,
  AddSectionButton,
  ModalFooter,
  CancelButton,
  CompleteButton,
  InfoTextContainer,
  ReceiverList,
} from "./ReceiverModal.styles";
import ReceiverForm from "./ReceiverForm";
import RECEIVER_SECTION_CONSTANTS, {
  MAX_RECEIVERS,
  RECEIVER_MODAL_CONSTANTS,
  DEFAULT_RECEIVER,
} from "../../constants/receiverSection";
import type { Receiver } from "../../OrderPage";
import { z } from "zod";
import { validatePhoneNumber } from "../../utils/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { VALIDATE_LABELS } from "../../constants/validateLabels";

interface ReceiverModalProps {
  handleCloseModal: () => void;
  receivers: Receiver[];
  setReceivers: (receivers: Receiver[]) => void;
}

interface FormData {
  receivers: Receiver[];
}

const receiverItemSchema = z.object({
  name: z.string().nonempty(RECEIVER_SECTION_CONSTANTS.NAME_ERROR),
  phone: z
    .string()
    .nonempty(RECEIVER_SECTION_CONSTANTS.PHONE_ERROR)
    .refine(
      (value) => validatePhoneNumber(value),
      VALIDATE_LABELS.PHONE_INVALID
    ),
  quantity: z.string().nonempty(RECEIVER_SECTION_CONSTANTS.QUANTITY_ERROR),
});

// check 함수 사용 시 타입 에러 발생:
// 1. check 함수의 data 파라미터가 ParsePayload 타입으로 추론되어 배열 메소드 접근 불가
// 2. 반환값이 boolean이지만 MaybeAsync<void> 타입 기대로 인한 타입 불일치
// 3. 런타임에서 "Cannot read properties of undefined (reading 'onattach')" 에러 발생
// superRefine 사용하여 해결
const receiversSchema = z.object({
  receivers: z.array(receiverItemSchema).superRefine((receivers, ctx) => {
    const phoneNumberSet = new Set<string>();

    receivers.forEach((receiver, index) => {
      if (receiver.phone && phoneNumberSet.has(receiver.phone)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATE_LABELS.PHONE_DUPLICATE,
          path: [index, "phone"],
        });

        return;
      }

      phoneNumberSet.add(receiver.phone);
    });
  }),
});

function ReceiverModal({
  handleCloseModal,
  receivers,
  setReceivers,
}: ReceiverModalProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      receivers: receivers,
    },
    resolver: zodResolver(receiversSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "receivers",
  });

  const handleAddReceiver = () => {
    if (fields.length < MAX_RECEIVERS) {
      append(DEFAULT_RECEIVER);
    }
  };

  const onSubmit = (data: FormData) => {
    if (data.receivers.length === 0) {
      handleCloseModal();
      return;
    }

    handleCloseModal();
    setReceivers(data.receivers);
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>{RECEIVER_MODAL_CONSTANTS.MODAL_TITLE}</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <InfoTextContainer>
            <InfoText>
              {RECEIVER_MODAL_CONSTANTS.INFO_TEXT_MAX_COUNT(MAX_RECEIVERS)}
            </InfoText>
            <InfoText>{RECEIVER_MODAL_CONSTANTS.INFO_TEXT_DUPLICATE}</InfoText>
          </InfoTextContainer>

          <AddSection>
            <AddSectionButton
              type="button"
              onClick={handleAddReceiver}
              disabled={fields.length >= MAX_RECEIVERS}
            >
              {RECEIVER_MODAL_CONSTANTS.ADD_BUTTON}
            </AddSectionButton>
          </AddSection>

          <ReceiverList>
            {fields.map((field, index) => (
              <ReceiverForm
                key={field.id}
                index={index}
                totalCount={fields.length}
                control={control}
                errors={errors}
                onRemove={() => remove(index)}
              />
            ))}
          </ReceiverList>
        </ModalBody>
        <ModalFooter>
          <CancelButton type="button" onClick={handleCloseModal}>
            {RECEIVER_MODAL_CONSTANTS.CANCEL_BUTTON}
          </CancelButton>
          <CompleteButton type="button" onClick={handleSubmit(onSubmit)}>
            {RECEIVER_MODAL_CONSTANTS.COMPLETE_BUTTON(fields.length)}
          </CompleteButton>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
}

export default ReceiverModal;
