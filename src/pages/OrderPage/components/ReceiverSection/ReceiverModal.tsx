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
import {
  MAX_RECEIVERS,
  RECEIVER_MODAL_CONSTANTS,
  DEFAULT_RECEIVER,
} from "../../constants/receiverSection";

interface ReceiverModalProps {
  handleCloseModal: () => void;
}

interface FormData {
  receivers: {
    name: string;
    phone: string;
    quantity: string;
  }[];
}

function ReceiverModal({ handleCloseModal }: ReceiverModalProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    defaultValues: {
      receivers: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "receivers",
  });

  const watchedReceivers = watch("receivers");

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
  };

  const onInvalid = () => {
    // 검증 실패 시
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
            <AddSectionButton type="button" onClick={handleAddReceiver}>
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
                watchedReceivers={watchedReceivers}
                onRemove={() => remove(index)}
              />
            ))}
          </ReceiverList>
        </ModalBody>
        <ModalFooter>
          <CancelButton type="button" onClick={handleCloseModal}>
            {RECEIVER_MODAL_CONSTANTS.CANCEL_BUTTON}
          </CancelButton>
          <CompleteButton
            type="button"
            onClick={handleSubmit(onSubmit, onInvalid)}
          >
            {RECEIVER_MODAL_CONSTANTS.COMPLETE_BUTTON(fields.length)}
          </CompleteButton>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
}

export default ReceiverModal;
