import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { type RecipientData } from '../../schemas/orderSchema';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 12px;
  padding: 0;
  max-width: 600px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #f0f0f0;
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #333;
`;

const ModalBody = styled.div`
  padding: 20px;
`;

const RecipientSection = styled.div`
  margin-bottom: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  background-color: #fafafa;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const SectionTitle = styled.h4`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: #333;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #ff4444;
  cursor: pointer;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 4px;

  &:hover {
    background-color: #fff0f0;
  }
`;

const FormRow = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
`;

const FormGroup = styled.div`
  flex: 1;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  color: #333;
  font-size: 14px;
`;

const FormInput = styled.input<{ hasError?: boolean }>`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid ${(props) => (props.hasError ? '#ff4444' : '#ddd')};
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #4a90e2;
  }
`;

const QuantityGroup = styled.div`
  width: 100px;
`;

const QuantityInput = styled(FormInput)`
  text-align: center;
`;

const ErrorMessage = styled.div`
  color: #ff4444;
  font-size: 12px;
  margin-top: 4px;
`;

const AddRecipientButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #f0f0f0;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background-color: #e0e0e0;
  }

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
    color: #999;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  padding: 20px;
  border-top: 1px solid #f0f0f0;
`;

const CancelButton = styled.button`
  flex: 1;
  padding: 16px;
  background-color: #f0f0f0;
  color: #666;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const CompleteButton = styled.button`
  flex: 1;
  padding: 16px;
  background-color: #ffd700;
  color: #333;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #ffc107;
  }
`;

interface RecipientModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (recipients: RecipientData[]) => void;
  initialRecipients?: RecipientData[];
  maxCount?: number;
}

export function RecipientModal({
  isOpen,
  onClose,
  onSave,
  initialRecipients = [],
  maxCount = 10,
}: RecipientModalProps) {
  const [recipients, setRecipients] = useState<RecipientData[]>([]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [hasValidated, setHasValidated] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setRecipients(
        initialRecipients.length > 0 ? initialRecipients : [{ name: '', phone: '', quantity: 1 }],
      );
      setErrors({});
      setHasValidated(false);
    }
  }, [isOpen, initialRecipients]);

  const addRecipient = () => {
    if (recipients.length < maxCount) {
      setRecipients([...recipients, { name: '', phone: '', quantity: 1 }]);
    }
  };

  const removeRecipient = (index: number) => {
    if (recipients.length > 1) {
      const newRecipients = recipients.filter((_, i) => i !== index);
      setRecipients(newRecipients);
      // 해당 인덱스의 에러 제거
      const newErrors = { ...errors };
      delete newErrors[`name_${index}`];
      delete newErrors[`phone_${index}`];
      delete newErrors[`quantity_${index}`];
      setErrors(newErrors);
    }
  };

  const updateRecipient = (index: number, field: keyof RecipientData, value: string | number) => {
    const newRecipients = [...recipients];
    newRecipients[index] = { ...newRecipients[index], [field]: value };
    setRecipients(newRecipients);

    // 실시간 에러 제거 (타이핑 시)
    if (hasValidated) {
      const errorKey = `${field}_${index}`;
      if (errors[errorKey]) {
        const newErrors = { ...errors };
        delete newErrors[errorKey];
        setErrors(newErrors);
      }
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    let isValid = true;

    recipients.forEach((recipient, index) => {
      // 이름 검증
      if (!recipient.name.trim()) {
        newErrors[`name_${index}`] = '이름을 입력하세요.';
        isValid = false;
      }

      // 전화번호 검증
      if (!recipient.phone.trim()) {
        newErrors[`phone_${index}`] = '전화번호를 입력하세요.';
        isValid = false;
      } else if (!/^010\d{8}$/.test(recipient.phone)) {
        newErrors[`phone_${index}`] = '전화번호를 입력하세요.';
        isValid = false;
      }

      // 수량 검증
      if (!recipient.quantity || recipient.quantity < 1) {
        newErrors[`quantity_${index}`] = '수량은 1개 이상이어야 합니다.';
        isValid = false;
      }
    });

    // 전화번호 중복 검사
    const phones = recipients.map((r) => r.phone).filter((phone) => phone.length > 0);
    const uniquePhones = new Set(phones);
    if (phones.length !== uniquePhones.size) {
      recipients.forEach((recipient, index) => {
        if (recipient.phone && phones.filter((p) => p === recipient.phone).length > 1) {
          newErrors[`phone_${index}`] = '전화번호가 중복되었습니다.';
          isValid = false;
        }
      });
    }

    setErrors(newErrors);
    setHasValidated(true);
    return isValid;
  };

  const handleComplete = () => {
    if (validateForm()) {
      onSave(recipients);
      onClose();
    }
  };

  const handleCancel = () => {
    setRecipients([]);
    setErrors({});
    setHasValidated(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>받는 사람</ModalTitle>
        </ModalHeader>

        <ModalBody>
          {recipients.map((recipient, index) => (
            <RecipientSection key={index}>
              <SectionHeader>
                <SectionTitle>받는 사람 {index + 1}</SectionTitle>
                {recipients.length > 1 && (
                  <RemoveButton onClick={() => removeRecipient(index)}>×</RemoveButton>
                )}
              </SectionHeader>

              <FormGroup>
                <FormLabel>이름</FormLabel>
                <FormInput
                  type="text"
                  value={recipient.name}
                  onChange={(e) => updateRecipient(index, 'name', e.target.value)}
                  placeholder="이름을 입력하세요."
                  hasError={!!errors[`name_${index}`]}
                />
                {errors[`name_${index}`] && <ErrorMessage>{errors[`name_${index}`]}</ErrorMessage>}
              </FormGroup>

              <FormRow>
                <FormGroup>
                  <FormLabel>전화번호</FormLabel>
                  <FormInput
                    type="tel"
                    value={recipient.phone}
                    onChange={(e) => updateRecipient(index, 'phone', e.target.value)}
                    placeholder="전화번호를 입력하세요."
                    maxLength={11}
                    hasError={!!errors[`phone_${index}`]}
                  />
                  {errors[`phone_${index}`] && (
                    <ErrorMessage>{errors[`phone_${index}`]}</ErrorMessage>
                  )}
                </FormGroup>

                <QuantityGroup>
                  <FormLabel>수량</FormLabel>
                  <QuantityInput
                    type="number"
                    value={recipient.quantity}
                    onChange={(e) =>
                      updateRecipient(index, 'quantity', parseInt(e.target.value) || 1)
                    }
                    min="1"
                    hasError={!!errors[`quantity_${index}`]}
                  />
                  {errors[`quantity_${index}`] && (
                    <ErrorMessage>{errors[`quantity_${index}`]}</ErrorMessage>
                  )}
                </QuantityGroup>
              </FormRow>
            </RecipientSection>
          ))}

          <AddRecipientButton onClick={addRecipient} disabled={recipients.length >= maxCount}>
            + 받는 사람 추가 ({recipients.length}/{maxCount})
          </AddRecipientButton>
        </ModalBody>

        <ButtonGroup>
          <CancelButton onClick={handleCancel}>취소</CancelButton>
          <CompleteButton onClick={handleComplete}>완료</CompleteButton>
        </ButtonGroup>
      </ModalContent>
    </ModalOverlay>
  );
}
