import Input from "@/components/common/Input/Input";
import RECEIVER_SECTION_CONSTANTS from "@/pages/OrderPage/constants/receiverSection";
import {
  FieldLabel,
  FormContainer,
  FormField,
  ReceiverSection,
  SectionTitle,
} from "./ReceiverSection.styles";

interface ReceiverSectionProps {
  receiverName: string;
  receiverPhone: string;
  quantity: string;
  onReceiverNameChange: (value: string) => void;
  onReceiverPhoneChange: (value: string) => void;
  onQuantityChange: (value: string) => void;
  onValidateReceiverName: (value: string) => void;
  onValidateReceiverPhone: (value: string) => void;
  onValidateQuantity: (value: string) => void;
  receiverNameErrorMessage: string;
  receiverPhoneErrorMessage: string;
  quantityErrorMessage: string;
}

function ReceiverSectionComponent({
  receiverName,
  receiverPhone,
  quantity,
  onReceiverNameChange,
  onReceiverPhoneChange,
  onQuantityChange,
  onValidateReceiverName,
  onValidateReceiverPhone,
  onValidateQuantity,
  receiverNameErrorMessage,
  receiverPhoneErrorMessage,
  quantityErrorMessage,
}: ReceiverSectionProps) {
  return (
    <ReceiverSection>
      <SectionTitle>{RECEIVER_SECTION_CONSTANTS.TITLE}</SectionTitle>
      <FormContainer>
        <FormField>
          <FieldLabel>{RECEIVER_SECTION_CONSTANTS.NAME_LABEL}</FieldLabel>
          <Input
            type="text"
            placeholder={RECEIVER_SECTION_CONSTANTS.NAME_PLACEHOLDER}
            value={receiverName}
            onChange={(e) => {
              onReceiverNameChange(e.target.value);
              onValidateReceiverName(e.target.value);
            }}
            errorMessage={receiverNameErrorMessage}
          />
        </FormField>
        <FormField>
          <FieldLabel>{RECEIVER_SECTION_CONSTANTS.PHONE_LABEL}</FieldLabel>
          <Input
            type="tel"
            placeholder={RECEIVER_SECTION_CONSTANTS.PHONE_PLACEHOLDER}
            value={receiverPhone}
            onChange={(e) => {
              onReceiverPhoneChange(e.target.value);
              onValidateReceiverPhone(e.target.value);
            }}
            errorMessage={receiverPhoneErrorMessage}
          />
        </FormField>
        <FormField>
          <FieldLabel>{RECEIVER_SECTION_CONSTANTS.QUANTITY_LABEL}</FieldLabel>
          <Input
            type="number"
            min="1"
            placeholder={RECEIVER_SECTION_CONSTANTS.QUANTITY_PLACEHOLDER}
            value={quantity}
            onChange={(e) => {
              onQuantityChange(e.target.value);
              onValidateQuantity(e.target.value);
            }}
            errorMessage={quantityErrorMessage}
          />
        </FormField>
      </FormContainer>
    </ReceiverSection>
  );
}

export default ReceiverSectionComponent;
