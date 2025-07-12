import React from 'react';
import styled from '@emotion/styled';
import { theme } from '@/styles/theme';
import { FormField } from '@/components/shared/ui';
import type { UseFormRegister } from 'react-hook-form';
import type { RecipientsForm } from '@/types';

interface RecipientFormItemProps {
  index: number;
  field: { id: string };
  errors?: {
    name?: { message?: string };
    phone?: { message?: string };
    quantity?: { message?: string };
  };
  register: UseFormRegister<RecipientsForm>;
  remove: (index: number) => void;
}

const RecipientFormItem: React.FC<RecipientFormItemProps> = ({
  index,
  field,
  errors = {},
  register,
  remove,
}) => (
  <RecipientFormContainer key={field.id}>
    <RecipientTitleContainer>
      <RecipientTitle>받는 사람 {index + 1}</RecipientTitle>
      <RemoveButton onClick={() => remove(index)}>×</RemoveButton>
    </RecipientTitleContainer>
    <FormField label="이름" error={errors.name?.message} direction="row">
      <HorizontalInput
        {...register(`recipients.${index}.name` as const)}
        placeholder="이름을 입력하세요."
        hasError={!!errors.name?.message}
      />
    </FormField>
    <FormField label="전화번호" error={errors.phone?.message} direction="row">
      <HorizontalInput
        {...register(`recipients.${index}.phone` as const)}
        placeholder="전화번호를 입력하세요."
        hasError={!!errors.phone?.message}
        onKeyDown={e => {
          const allowedKeys = [
            'Backspace',
            'Delete',
            'ArrowLeft',
            'ArrowRight',
            'ArrowUp',
            'ArrowDown',
            'Tab',
            'Enter',
          ];

          if (e.key >= '0' && e.key <= '9') {
            return;
          }

          if (!allowedKeys.includes(e.key)) {
            e.preventDefault();
          }
        }}
      />
    </FormField>
    <FormField label="수량" error={errors.quantity?.message} direction="row">
      <HorizontalInput
        type="number"
        min="0"
        {...register(`recipients.${index}.quantity` as const, {
          valueAsNumber: true,
        })}
        hasError={!!errors.quantity?.message}
      />
    </FormField>
  </RecipientFormContainer>
);

export default RecipientFormItem;

const RecipientFormContainer = styled.div`
  border-bottom: 1px solid ${theme.colors.borderDefault};
  padding: ${theme.spacing.spacing4};
  margin-top: ${theme.spacing.spacing4};
`;

const RecipientTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing.spacing3};
`;

const RecipientTitle = styled.h4`
  font-size: ${theme.typography.body1Bold.fontSize};
  font-weight: ${theme.typography.body1Bold.fontWeight};
  color: ${theme.colors.textDefault};
  margin: 0;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: ${theme.colors.textSub};
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${theme.colors.critical};
  }
`;

const HorizontalInput = styled.input<{ hasError?: boolean }>`
  flex: 1;
  padding: ${theme.spacing.spacing2};
  border: 1px solid
    ${props =>
      props.hasError ? theme.colors.critical : theme.colors.borderDefault};
  border-radius: 7px;
  font-size: ${theme.typography.body2Regular.fontSize};
  background: ${theme.colors.default};

  &:focus {
    outline: none;
    border-color: ${props =>
      props.hasError ? theme.colors.critical : theme.colors.gray700};
  }

  &::placeholder {
    color: ${theme.colors.textPlaceholder};
  }
`;
