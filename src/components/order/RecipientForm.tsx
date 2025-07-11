import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import {
  validateRecipientForm,
  createEmptyRecipientForm,
  isPhoneNumberDuplicate,
} from '@/utils';
import type { Recipient } from '@/types';

interface RecipientFormProps {
  index: number;
  initialData?: Omit<Recipient, 'id'>;
  onDataChange: (index: number, data: Omit<Recipient, 'id'>) => void;
  onRemove: (index: number) => void;
  existingRecipients?: Recipient[];
  disabled?: boolean;
}

const FormContainer = styled.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
  position: relative;
`;

const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const FormTitle = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #1e293b;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #94a3b8;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;

  &:hover {
    background: #fee2e2;
    color: #dc2626;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 80px;
  gap: 12px;
  align-items: start;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: 500;
  color: #64748b;
  margin-bottom: 4px;
`;

const Input = styled.input<{ hasError?: boolean }>`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid ${(props) => (props.hasError ? '#ef4444' : '#d1d5db')};
  border-radius: 6px;
  font-size: 14px;
  background: white;
  transition: border-color 0.2s ease;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${(props) => (props.hasError ? '#ef4444' : '#3b82f6')};
    box-shadow: 0 0 0 3px
      ${(props) =>
        props.hasError ? 'rgba(239, 68, 68, 0.1)' : 'rgba(59, 130, 246, 0.1)'};
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const ErrorText = styled.div`
  color: #ef4444;
  font-size: 11px;
  margin-top: 2px;
  min-height: 14px;
`;

const CloseIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const RecipientForm = ({
  index,
  initialData,
  onDataChange,
  onRemove,
  existingRecipients = [],
  disabled = false,
}: RecipientFormProps) => {
  const [formData, setFormData] = useState(
    () => initialData || createEmptyRecipientForm()
  );
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // 폼 데이터 유효성 검사 및 상위 컴포넌트로 전달
  useEffect(() => {
    const validation = validateRecipientForm(formData);
    let newErrors = { ...validation.errors };

    // 전화번호 중복 검사 (기존 받는사람 목록과 비교)
    if (
      formData.phone &&
      isPhoneNumberDuplicate(formData.phone, existingRecipients)
    ) {
      newErrors.phone = '이미 등록된 전화번호입니다.';
    }

    setErrors(newErrors);
    onDataChange(index, formData);
  }, [formData, index, onDataChange, existingRecipients]);

  const handleInputChange = (
    field: keyof typeof formData,
    value: string | number
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleRemove = () => {
    onRemove(index);
  };

  return (
    <FormContainer>
      <FormHeader>
        <FormTitle>받는사람 {index + 1}</FormTitle>
        <RemoveButton
          onClick={handleRemove}
          disabled={disabled}
          title="받는사람 삭제"
        >
          <CloseIcon />
        </RemoveButton>
      </FormHeader>

      <FormGrid>
        <FormField>
          <Label htmlFor={`name-${index}`}>이름</Label>
          <Input
            id={`name-${index}`}
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            placeholder="이름을 입력하세요"
            hasError={!!errors.name}
            disabled={disabled}
          />
          <ErrorText>{errors.name || ''}</ErrorText>
        </FormField>

        <FormField>
          <Label htmlFor={`phone-${index}`}>전화번호</Label>
          <Input
            id={`phone-${index}`}
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            placeholder="01012341234"
            maxLength={11}
            hasError={!!errors.phone}
            disabled={disabled}
          />
          <ErrorText>{errors.phone || ''}</ErrorText>
        </FormField>

        <FormField>
          <Label htmlFor={`quantity-${index}`}>수량</Label>
          <Input
            id={`quantity-${index}`}
            type="number"
            min={1}
            value={formData.quantity}
            onChange={(e) =>
              handleInputChange('quantity', parseInt(e.target.value) || 1)
            }
            hasError={!!errors.quantity}
            disabled={disabled}
          />
          <ErrorText>{errors.quantity || ''}</ErrorText>
        </FormField>
      </FormGrid>
    </FormContainer>
  );
};

export default RecipientForm;
