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
  handleReceiverNameChange: (value: string) => void;
  handleReceiverPhoneChange: (value: string) => void;
  handleQuantityChange: (value: string) => void;
  validateReceiverName: (value: string) => void;
  validateReceiverPhone: (value: string) => void;
  validateQuantity: (value: string) => void;
  receiverNameErrorMessage: string;
  receiverPhoneErrorMessage: string;
  quantityErrorMessage: string;
}

function ReceiverSectionComponent({
  receiverName,
  receiverPhone,
  quantity,
  handleReceiverNameChange,
  handleReceiverPhoneChange,
  handleQuantityChange,
  validateReceiverName,
  validateReceiverPhone,
  validateQuantity,
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
              handleReceiverNameChange(e.target.value);
              validateReceiverName(e.target.value);
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
              handleReceiverPhoneChange(e.target.value);
              validateReceiverPhone(e.target.value);
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
              handleQuantityChange(e.target.value);
              validateQuantity(e.target.value);
            }}
            errorMessage={quantityErrorMessage}
          />
        </FormField>
      </FormContainer>
    </ReceiverSection>
  );
}

export default ReceiverSectionComponent;
