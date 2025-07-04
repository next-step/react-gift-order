import Input from "@/components/common/Input/Input";
import styled from "@emotion/styled";
import RECEIVER_SECTION_CONSTANTS from "@/pages/OrderPage/constants/receiverSection";

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
  receiverNameErrorMessage: string | null;
  receiverPhoneErrorMessage: string | null;
  quantityErrorMessage: string | null;
  hasReceiverNameError: boolean;
  hasReceiverPhoneError: boolean;
  hasQuantityError: boolean;
}

const ReceiverSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.background.default};
  padding: ${({ theme }) => theme.spacing[4]};
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.title.title2Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title.title2Bold.fontWeight};
  color: ${({ theme }) => theme.colors.text.default};
  margin: 0;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const FieldLabel = styled.label`
  font-size: ${({ theme }) => theme.typography.body.body1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.body.body1Regular.fontWeight};
  color: ${({ theme }) => theme.colors.text.default};
  min-width: 4rem;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`;

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
  hasReceiverNameError,
  hasReceiverPhoneError,
  hasQuantityError,
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
            hasError={hasReceiverNameError}
            errorMessage={
              receiverNameErrorMessage || RECEIVER_SECTION_CONSTANTS.NAME_ERROR
            }
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
            hasError={hasReceiverPhoneError}
            errorMessage={
              receiverPhoneErrorMessage ||
              RECEIVER_SECTION_CONSTANTS.PHONE_ERROR
            }
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
            hasError={hasQuantityError}
            errorMessage={
              quantityErrorMessage || RECEIVER_SECTION_CONSTANTS.QUANTITY_ERROR
            }
          />
        </FormField>
      </FormContainer>
    </ReceiverSection>
  );
}

export default ReceiverSectionComponent;
