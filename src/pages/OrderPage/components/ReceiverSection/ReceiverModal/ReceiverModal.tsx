import { useForm, useFieldArray } from "react-hook-form";
import ReceiverForm from "./ReceiverForm";
import {
  MAX_RECEIVERS,
  RECEIVER_MODAL_CONSTANTS,
  DEFAULT_RECEIVER,
} from "../../../constants/receiverSection";
import type { Receiver } from "../../../hooks/useOrderForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { FORM_FIELD } from "../../../constants/formField";
import { receiversSchema } from "../../../schemas";
import {
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalTitle,
  ModalBody,
  InfoTextContainer,
  InfoText,
  AddSection,
  AddSectionButton,
  ModalFooter,
  CancelButton,
  CompleteButton,
  ReceiverList,
} from "./ReceiverModal.styles";

interface FormData {
  receivers: Receiver[];
}

interface ReceiverModalProps {
  handleCloseModal: () => void;
  receivers: Receiver[];
  setReceivers: (receivers: Receiver[]) => void;
}

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
    name: FORM_FIELD.RECEIVERS,
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
          <CompleteButton type="submit" onClick={handleSubmit(onSubmit)}>
            {RECEIVER_MODAL_CONSTANTS.COMPLETE_BUTTON(fields.length)}
          </CompleteButton>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
}

export default ReceiverModal;
