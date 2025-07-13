import Input from "@/components/common/Input/Input";
import styled from "@emotion/styled";
import SENDER_SECTION_CONSTANTS from "@/pages/OrderPage/constants/senderSection";
import { Controller, type Control, type FieldErrors } from "react-hook-form";
import { FORM_FIELD } from "../../constants/formField";
import type { SenderFormData } from "../../schemas";

interface SenderProps {
  control: Control<SenderFormData>;
  errors: FieldErrors<SenderFormData>;
}

const SendSection = styled.section`
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
`;

const SendForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`;

function SenderSectionComponent({ control, errors }: SenderProps) {
  return (
    <SendSection>
      <SectionTitle>{SENDER_SECTION_CONSTANTS.TITLE}</SectionTitle>
      <SendForm>
        <Controller
          control={control}
          name={FORM_FIELD.SENDER_NAME}
          render={({ field }) => (
            <Input
              {...field}
              errorMessage={errors.senderName?.message}
              type="text"
              placeholder={SENDER_SECTION_CONSTANTS.NAME_PLACEHOLDER}
            />
          )}
        />
      </SendForm>
    </SendSection>
  );
}

export default SenderSectionComponent;
