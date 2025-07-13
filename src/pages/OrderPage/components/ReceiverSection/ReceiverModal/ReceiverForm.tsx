import {
  Controller,
  type Control,
  type FieldErrors,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";
import { RECEIVER_SECTION_CONSTANTS } from "../../../constants/receiverSection";
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
} from "../ReceiverSection.styles";
import Input from "@/components/common/Input/Input";

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

interface LabeledInputFieldProps<T extends FieldValues> {
  fieldLabel: string;
  name: FieldPath<T>;
  control: Control<T>;
  type?: string;
  placeholder?: string;
  errorMessage?: string;
}

function LabeledInputField<T extends FieldValues>({
  fieldLabel,
  name,
  control,
  type = "text",
  placeholder,
  errorMessage,
}: LabeledInputFieldProps<T>) {
  return (
    <FormField>
      <FieldLabel>{fieldLabel}</FieldLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            placeholder={placeholder}
            type={type}
            errorMessage={errorMessage}
          />
        )}
      />
    </FormField>
  );
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
          {RECEIVER_SECTION_CONSTANTS.INDEX_TITLE(index + 1)}
        </SectionTitle>
        <RemoveButton onClick={onRemove}>X</RemoveButton>
      </ReceiverInputHeader>
      <FormContainer>
        <LabeledInputField
          fieldLabel={RECEIVER_SECTION_CONSTANTS.NAME_LABEL}
          name={`receivers.${index}.name`}
          control={control}
          type="text"
          placeholder={RECEIVER_SECTION_CONSTANTS.NAME_PLACEHOLDER}
          errorMessage={errors.receivers?.[index]?.name?.message}
        />
        <LabeledInputField
          fieldLabel={RECEIVER_SECTION_CONSTANTS.PHONE_LABEL}
          name={`receivers.${index}.phone`}
          control={control}
          type="tel"
          placeholder={RECEIVER_SECTION_CONSTANTS.PHONE_PLACEHOLDER}
          errorMessage={errors.receivers?.[index]?.phone?.message}
        />
        <LabeledInputField
          fieldLabel={RECEIVER_SECTION_CONSTANTS.QUANTITY_LABEL}
          name={`receivers.${index}.quantity`}
          control={control}
          type="number"
          placeholder={RECEIVER_SECTION_CONSTANTS.QUANTITY_PLACEHOLDER}
          errorMessage={errors.receivers?.[index]?.quantity?.message}
        />
      </FormContainer>
      <Divider isLast={index === totalCount - 1} />
    </ReceiverInputContainer>
  );
}

export default ReceiverForm;
