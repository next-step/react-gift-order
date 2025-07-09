import Input from "@/components/common/Input/Input";
import RECEIVER_SECTION_CONSTANTS from "../../constants/receiverSection";
import {
  Divider,
  ReceiverInputContainer,
  ReceiverInputHeader,
  RemoveButton,
} from "./ReceiverModal.styles";
import {
  FieldLabel,
  FormContainer,
  FormField,
  SectionTitle,
} from "./ReceiverSection.styles";
import type { Receiver } from "./ReceiverModal";

interface ReceiverFormProps {
  receiver: Receiver;
  receivers: Receiver[];
  index: number;
  handleRemoveReceiver: (receiverId: string) => void;
}

function ReceiverForm({
  receiver,
  index,
  handleRemoveReceiver,
  receivers,
}: ReceiverFormProps) {
  return (
    <ReceiverInputContainer key={receiver.id}>
      <ReceiverInputHeader>
        <SectionTitle>
          {RECEIVER_SECTION_CONSTANTS.TITLE} {index + 1}
        </SectionTitle>
        <RemoveButton onClick={() => handleRemoveReceiver(receiver.id)}>
          X
        </RemoveButton>
      </ReceiverInputHeader>
      <FormContainer>
        <FormField>
          <FieldLabel>{RECEIVER_SECTION_CONSTANTS.NAME_LABEL}</FieldLabel>
          <Input
            type="text"
            placeholder={RECEIVER_SECTION_CONSTANTS.NAME_PLACEHOLDER}
            value={receiver.name}
            onChange={() => {}}
            errorMessage=""
          />
        </FormField>
        <FormField>
          <FieldLabel>{RECEIVER_SECTION_CONSTANTS.PHONE_LABEL}</FieldLabel>
          <Input
            type="tel"
            placeholder={RECEIVER_SECTION_CONSTANTS.PHONE_PLACEHOLDER}
            value={receiver.phone}
            onChange={() => {}}
            errorMessage=""
          />
        </FormField>
        <FormField>
          <FieldLabel>{RECEIVER_SECTION_CONSTANTS.QUANTITY_LABEL}</FieldLabel>
          <Input
            type="number"
            min="1"
            placeholder={RECEIVER_SECTION_CONSTANTS.QUANTITY_PLACEHOLDER}
            value={receiver.quantity}
            onChange={() => {}}
            errorMessage=""
          />
        </FormField>
      </FormContainer>
      {index !== receivers.length - 1 && <Divider />}
    </ReceiverInputContainer>
  );
}

export default ReceiverForm;
