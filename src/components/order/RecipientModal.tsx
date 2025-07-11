import { useState, useEffect, useCallback } from 'react';
import styled from '@emotion/styled';
import { Modal } from '@/components/common';
import RecipientForm from './RecipientForm';
import {
  createNewRecipient,
  createEmptyRecipientForm,
  validateRecipients,
  checkDuplicatePhone,
} from '@/utils';
import type { Recipient } from '@/types';

interface RecipientModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (recipients: Recipient[]) => void;
  initialRecipients?: Recipient[];
  existingRecipients?: Recipient[];
}

const ModalContent = styled.div`
  max-height: 60vh;
  overflow-y: auto;
  margin-bottom: 20px;
`;

const AddButton = styled.button<{ disabled?: boolean }>`
  background: ${(props) => (props.disabled ? '#f3f4f6' : '#fee500')};
  color: ${(props) => (props.disabled ? '#9ca3af' : '#1f2937')};
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 600;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 16px;
  width: fit-content;

  &:hover:not(:disabled) {
    background: #fde047;
    transform: translateY(-1px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #e5e7eb;
`;

const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  min-width: 80px;

  ${(props) =>
    props.variant === 'primary'
      ? `
    background: #fee500;
    color: #1f2937;
    
    &:hover:not(:disabled) {
      background: #fde047;
    }
    
    &:disabled {
      background: #f3f4f6;
      color: #9ca3af;
      cursor: not-allowed;
    }
  `
      : `
    background: #f8fafc;
    color: #64748b;
    border: 1px solid #e2e8f0;
    
    &:hover {
      background: #f1f5f9;
      color: #475569;
    }
  `}
`;

const ErrorMessage = styled.div`
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 16px;
  color: #dc2626;
  font-size: 14px;
  line-height: 1.4;
`;

const EmptyState = styled.div`
  background: #f9fafb;
  border: 2px dashed #d1d5db;
  border-radius: 12px;
  padding: 32px 16px;
  text-align: center;
  color: #6b7280;
  margin-bottom: 16px;
`;

const EmptyStateTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 4px;
  color: #374151;
`;

const EmptyStateDescription = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

const MaxReachedText = styled.div`
  color: #dc2626;
  font-size: 12px;
  font-weight: 500;
  margin-left: 8px;
`;

const PlusIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
      clipRule="evenodd"
    />
  </svg>
);

const RecipientModal = ({
  isOpen,
  onClose,
  onSave,
  initialRecipients = [],
  existingRecipients = [],
}: RecipientModalProps) => {
  const [tempRecipients, setTempRecipients] = useState<
    Array<{ id: string; data: Omit<Recipient, 'id'> }>
  >([]);
  const [errors, setErrors] = useState<string[]>([]);

  // 모달이 열릴 때 초기 데이터 설정
  useEffect(() => {
    if (isOpen) {
      if (initialRecipients.length > 0) {
        // 편집 모드: 기존 받는사람 데이터로 초기화
        setTempRecipients(
          initialRecipients.map((recipient) => ({
            id: recipient.id,
            data: {
              name: recipient.name,
              phone: recipient.phone,
              quantity: recipient.quantity,
            },
          }))
        );
      } else {
        // 추가 모드: 빈 받는사람 하나로 시작
        const newRecipient = createNewRecipient();
        setTempRecipients([
          {
            id: newRecipient.id,
            data: createEmptyRecipientForm(),
          },
        ]);
      }
      setErrors([]);
    }
  }, [isOpen, initialRecipients]);

  // 새 받는사람 추가
  const handleAddRecipient = () => {
    if (tempRecipients.length >= 10) return;

    const newRecipient = createNewRecipient();
    setTempRecipients((prev) => [
      ...prev,
      {
        id: newRecipient.id,
        data: createEmptyRecipientForm(),
      },
    ]);
  };

  // 받는사람 제거
  const handleRemoveRecipient = useCallback((index: number) => {
    setTempRecipients((prev) => prev.filter((_, i) => i !== index));
  }, []);

  // 받는사람 데이터 변경
  const handleDataChange = useCallback(
    (index: number, data: Omit<Recipient, 'id'>) => {
      setTempRecipients((prev) =>
        prev.map((item, i) => (i === index ? { ...item, data } : item))
      );
    },
    []
  );

  // 저장 처리
  const handleSave = () => {
    // 받는사람 목록 생성
    const recipients: Recipient[] = tempRecipients.map((item) => ({
      id: item.id,
      ...item.data,
    }));

    // 유효성 검사
    const validation = validateRecipients(recipients);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    // 기존 받는사람과의 중복 검사
    const allRecipients = [...existingRecipients, ...recipients];
    const duplicatePhones = checkDuplicatePhone(allRecipients);
    if (duplicatePhones.length > 0) {
      setErrors([`중복된 전화번호가 있습니다: ${duplicatePhones.join(', ')}`]);
      return;
    }

    // 성공
    setErrors([]);
    onSave(recipients);
  };

  // 취소 처리
  const handleCancel = () => {
    setErrors([]);
    onClose();
  };

  const canAddMore = tempRecipients.length < 10;
  const hasValidData =
    tempRecipients.length > 0 &&
    tempRecipients.some(
      (item) => item.data.name.trim() || item.data.phone.trim()
    );

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleCancel}
      title="받는 사람"
      size="large"
    >
      <div>
        <AddButton onClick={handleAddRecipient} disabled={!canAddMore}>
          <PlusIcon />
          추가하기
          {!canAddMore && <MaxReachedText>(최대 10명)</MaxReachedText>}
        </AddButton>

        {errors.length > 0 && (
          <ErrorMessage>
            {errors.map((error, index) => (
              <div key={index}>{error}</div>
            ))}
          </ErrorMessage>
        )}

        <ModalContent>
          {tempRecipients.length === 0 ? (
            <EmptyState>
              <EmptyStateTitle>받는사람을 추가해주세요</EmptyStateTitle>
              <EmptyStateDescription>
                "추가하기" 버튼을 눌러서 받는사람을 등록하세요.
              </EmptyStateDescription>
            </EmptyState>
          ) : (
            tempRecipients.map((item, index) => (
              <RecipientForm
                key={item.id}
                index={index}
                initialData={item.data}
                onDataChange={handleDataChange}
                onRemove={handleRemoveRecipient}
                existingRecipients={existingRecipients}
              />
            ))
          )}
        </ModalContent>

        <ButtonContainer>
          <Button variant="secondary" onClick={handleCancel}>
            취소
          </Button>
          <Button
            variant="primary"
            onClick={handleSave}
            disabled={!hasValidData}
          >
            {tempRecipients.length}명 완료
          </Button>
        </ButtonContainer>
      </div>
    </Modal>
  );
};

export default RecipientModal;
