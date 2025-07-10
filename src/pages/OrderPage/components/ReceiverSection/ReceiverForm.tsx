import { Controller, type Control, type FieldErrors } from "react-hook-form";
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

interface FormData {
  receivers: {
    name: string;
    phone: string;
    quantity: string;
  }[];
}

interface ReceiverFormProps {
  index: number;
  totalCount: number;
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
  onRemove: () => void;
}

function ReceiverForm({
  index,
  totalCount,
  control,
  errors,
  onRemove,
}: ReceiverFormProps) {
  return (
    <ReceiverInputContainer>
      <ReceiverInputHeader>
        <SectionTitle>
          {RECEIVER_SECTION_CONSTANTS.TITLE} {index + 1}
        </SectionTitle>
        <RemoveButton onClick={onRemove}>X</RemoveButton>
      </ReceiverInputHeader>
      <FormContainer>
        <FormField>
          <FieldLabel>{RECEIVER_SECTION_CONSTANTS.NAME_LABEL}</FieldLabel>
          <Controller
            name={`receivers.${index}.name`}
            control={control}
            // rules={{
            //   required: VALIDATE_LABELS.NAME_EMPTY,
            // }}
            render={({ field }) => (
              <Input
                type="text"
                placeholder={RECEIVER_SECTION_CONSTANTS.NAME_PLACEHOLDER}
                value={field.value}
                onChange={field.onChange}
                errorMessage={errors.receivers?.[index]?.name?.message}
              />
            )}
          />
        </FormField>
        <FormField>
          <FieldLabel>{RECEIVER_SECTION_CONSTANTS.PHONE_LABEL}</FieldLabel>
          <Controller
            name={`receivers.${index}.phone`}
            control={control}
            // rules={{
            //   required: VALIDATE_LABELS.PHONE_EMPTY,
            //   validate: {
            //     format: (value) =>
            //       validatePhoneNumber(value) || VALIDATE_LABELS.PHONE_INVALID,
            //     unique: (value) => {
            //       if (!value) return true;
            //       const hasDuplicate = watchedReceivers.some(
            //         (receiver, receiverIndex) =>
            //           receiverIndex !== index && receiver.phone === value
            //       );
            //       return !hasDuplicate || VALIDATE_LABELS.PHONE_DUPLICATE;
            //     },
            //   },
            // }}
            render={({ field }) => (
              <Input
                type="tel"
                placeholder={RECEIVER_SECTION_CONSTANTS.PHONE_PLACEHOLDER}
                value={field.value}
                onChange={field.onChange}
                errorMessage={errors.receivers?.[index]?.phone?.message}
              />
            )}
          />
        </FormField>
        <FormField>
          <FieldLabel>{RECEIVER_SECTION_CONSTANTS.QUANTITY_LABEL}</FieldLabel>
          <Controller
            name={`receivers.${index}.quantity`}
            control={control}
            // rules={{
            //   required: VALIDATE_LABELS.QUANTITY_EMPTY,
            //   validate: (value) =>
            //     validateQuantity(value) || VALIDATE_LABELS.QUANTITY_INVALID,
            // }}
            render={({ field }) => (
              <Input
                type="number"
                min="1"
                placeholder={RECEIVER_SECTION_CONSTANTS.QUANTITY_PLACEHOLDER}
                value={field.value}
                onChange={field.onChange}
                errorMessage={errors.receivers?.[index]?.quantity?.message}
              />
            )}
          />
        </FormField>
      </FormContainer>
      {index !== totalCount - 1 && <Divider />}
    </ReceiverInputContainer>
  );
}

export default ReceiverForm;
