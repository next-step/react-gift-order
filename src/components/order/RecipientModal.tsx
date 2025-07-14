import { useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import styled from '@emotion/styled';
import { Modal } from '@/components/common';
import RecipientForm from './RecipientForm';
import {
  createNewRecipient,
  createEmptyRecipientForm,
  validateRecipients,
  checkDuplicatePhone,
  normalizePhoneNumber,
} from '@/utils';
import type { Recipient } from '@/types';

interface RecipientModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (recipients: Recipient[]) => void;
  initialRecipients?: Recipient[];
  existingRecipients?: Recipient[];
}

interface RecipientFormData {
  recipients: Omit<Recipient, 'id'>[];
}

const EMPTY_RECIPIENTS: Recipient[] = [];

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
  onSubmit,
  initialRecipients = EMPTY_RECIPIENTS,
  existingRecipients = EMPTY_RECIPIENTS,
}: RecipientModalProps) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
    setError,
    clearErrors,
  } = useForm<RecipientFormData>({
    defaultValues: {
      recipients:
        initialRecipients.length > 0
          ? initialRecipients.map(({ id, ...rest }) => rest)
          : [createEmptyRecipientForm()],
    },
    mode: 'onChange',
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'recipients',
  });

  // 모달이 열릴 때 폼 초기화
  useEffect(() => {
    if (isOpen) {
      const initialData =
        initialRecipients.length > 0
          ? initialRecipients.map(({ id, ...rest }) => rest)
          : [createEmptyRecipientForm()];

      reset({ recipients: initialData });
      clearErrors();
    }
  }, [isOpen, initialRecipients, reset, clearErrors]);

  // 새 받는사람 추가
  const handleAddRecipient = () => {
    if (fields.length >= 10) return;
    append(createEmptyRecipientForm());
  };

  // 받는사람 제거
  const handleRemoveRecipient = (index: number) => {
    remove(index);
  };

  // 폼 제출 처리
  const handleFormSubmit = handleSubmit((data) => {
    // 받는사람 목록 생성 (id 추가)
    const recipients: Recipient[] = data.recipients.map((recipientData) => ({
      id: createNewRecipient().id,
      ...recipientData,
      phone: normalizePhoneNumber(recipientData.phone), // 전화번호 정규화
    }));

    // 유효성 검사
    const validation = validateRecipients(recipients);
    if (!validation.isValid) {
      setError('root', { message: validation.errors.join('\n') });
      return;
    }

    // 기존 받는사람과의 중복 검사
    const normalizedExistingPhones = existingRecipients.map((r) =>
      normalizePhoneNumber(r.phone)
    );
    const normalizedNewPhones = recipients.map((r) =>
      normalizePhoneNumber(r.phone)
    );

    const duplicatesWithExisting = normalizedNewPhones.filter(
      (phone) => phone && normalizedExistingPhones.includes(phone)
    );

    if (duplicatesWithExisting.length > 0) {
      setError('root', { message: '이미 등록된 전화번호가 있습니다.' });
      return;
    }

    // 새 받는사람들 간의 중복 검사
    const allRecipients = [...existingRecipients, ...recipients];
    const duplicatePhones = checkDuplicatePhone(allRecipients);
    if (duplicatePhones.length > 0) {
      setError('root', { message: '중복된 전화번호가 있습니다.' });
      return;
    }

    // 성공 - 상위 컴포넌트로 데이터 전달
    clearErrors();
    onSubmit(recipients);
  });

  // 취소 처리
  const handleCancel = () => {
    clearErrors();
    onClose();
  };

  const canAddMore = fields.length < 10;
  const hasValidData = fields.length > 0 && isValid;

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleCancel}
      title="받는 사람"
      size="large"
    >
      <form onSubmit={handleFormSubmit}>
        <AddButton
          type="button"
          onClick={handleAddRecipient}
          disabled={!canAddMore}
        >
          <PlusIcon />
          추가하기
          {!canAddMore && <MaxReachedText>(최대 10명)</MaxReachedText>}
        </AddButton>

        {errors.root && (
          <ErrorMessage>
            <div>{errors.root.message}</div>
          </ErrorMessage>
        )}

        <ModalContent>
          {fields.length === 0 ? (
            <EmptyState>
              <EmptyStateTitle>받는사람을 추가해주세요</EmptyStateTitle>
              <EmptyStateDescription>
                "추가하기" 버튼을 눌러서 받는사람을 등록하세요.
              </EmptyStateDescription>
            </EmptyState>
          ) : (
            fields.map((field, index) => (
              <RecipientForm
                key={field.id}
                control={control}
                index={index}
                onRemove={handleRemoveRecipient}
                existingRecipients={existingRecipients}
              />
            ))
          )}
        </ModalContent>

        <ButtonContainer>
          <Button type="button" variant="secondary" onClick={handleCancel}>
            취소
          </Button>
          <Button type="submit" variant="primary" disabled={!hasValidData}>
            {fields.length}명 완료
          </Button>
        </ButtonContainer>
      </form>
    </Modal>
  );
};

export default RecipientModal;
