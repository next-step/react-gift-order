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
  index: number;
  totalCount: number;
  handleRemoveReceiver: (receiverId: string) => void;
  updateReceiver: (
    receiverId: string,
    field: keyof Receiver,
    value: string
  ) => void;
}

function ReceiverForm({
  receiver,
  index,
  totalCount,
  handleRemoveReceiver,
  updateReceiver,
}: ReceiverFormProps) {
  const handleNameChange = (value: string) => {
    updateReceiver(receiver.id, "name", value);
  };

  const handlePhoneChange = (value: string) => {
    updateReceiver(receiver.id, "phone", value);
  };

  const handleQuantityChange = (value: string) => {
    updateReceiver(receiver.id, "quantity", value);
  };

  return (
    <ReceiverInputContainer>
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
            onChange={(e) => handleNameChange(e.target.value)}
            errorMessage={receiver.errors.name}
          />
        </FormField>
        <FormField>
          <FieldLabel>{RECEIVER_SECTION_CONSTANTS.PHONE_LABEL}</FieldLabel>
          <Input
            type="tel"
            placeholder={RECEIVER_SECTION_CONSTANTS.PHONE_PLACEHOLDER}
            value={receiver.phone}
            onChange={(e) => handlePhoneChange(e.target.value)}
            errorMessage={receiver.errors.phone}
          />
        </FormField>
        <FormField>
          <FieldLabel>{RECEIVER_SECTION_CONSTANTS.QUANTITY_LABEL}</FieldLabel>
          <Input
            type="number"
            min="1"
            placeholder={RECEIVER_SECTION_CONSTANTS.QUANTITY_PLACEHOLDER}
            value={receiver.quantity}
            onChange={(e) => handleQuantityChange(e.target.value)}
            errorMessage={receiver.errors.quantity}
          />
        </FormField>
      </FormContainer>
      {index !== totalCount - 1 && <Divider />}
    </ReceiverInputContainer>
  );
}

export default ReceiverForm;
