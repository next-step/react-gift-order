import React from 'react';
import type { RefObject } from 'react';
import styled from '@emotion/styled';
import { theme } from '@/styles/theme';
import RecipientFormItem from './RecipientFormItem';
import { useForm, useFieldArray } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import type { Recipient, RecipientsForm } from '@/types';
import { recipientArraySchema } from '@/schemas/giftOrderSchemas';

interface RecipientModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRecipients: Recipient[];
  onSave: (recipients: Recipient[]) => void;
  modalBodyRef: RefObject<HTMLDivElement | null>;
  maxRecipients?: number;
}

const RecipientModal: React.FC<RecipientModalProps> = ({
  isOpen,
  onClose,
  initialRecipients,
  onSave,
  modalBodyRef,
  maxRecipients = 10,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm<RecipientsForm>({
    resolver: zodResolver(z.object({ recipients: recipientArraySchema })),
    defaultValues: { recipients: initialRecipients },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'recipients',
  });

  const getDuplicateError = (): string | undefined => {
    if (
      typeof errors.recipients?.message === 'string' &&
      errors.recipients?.message
    ) {
      return errors.recipients.message;
    }

    if (
      typeof errors.recipients?.root?.message === 'string' &&
      errors.recipients?.root?.message
    ) {
      return errors.recipients.root.message;
    }

    return undefined;
  };

  const duplicateError = getDuplicateError();

  const handleAdd = () => {
    append({ name: '', phone: '', quantity: 1 });
  };

  const handleSave = handleSubmit(data => {
    onSave(data.recipients);
  });

  // 모달이 열릴 때마다 초기값으로 리셋
  React.useEffect(() => {
    if (isOpen) {
      reset({ recipients: initialRecipients });
    }
  }, [isOpen, initialRecipients, reset]);

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>받는 사람</ModalTitle>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>
        <ModalBody ref={modalBodyRef}>
          <AddRecipientButtonWrapper>
            <ModalDescription>
              * 최대 {maxRecipients}명까지 추가 할 수 있어요.
            </ModalDescription>
            <ModalDescription>
              * 받는 사람의 전화번호를 중복으로 입력 할 수 없어요.
            </ModalDescription>
            <AddRecipientButton
              onClick={handleAdd}
              disabled={fields.length >= maxRecipients}
            >
              추가하기
            </AddRecipientButton>
          </AddRecipientButtonWrapper>
          {duplicateError && (
            <div style={{ color: 'red', marginBottom: 8 }}>
              {duplicateError}
            </div>
          )}
          {fields.map((field, index) => (
            <RecipientFormItem
              key={field.id}
              index={index}
              field={field}
              errors={errors?.recipients?.[index]}
              register={register}
              remove={remove}
            />
          ))}
        </ModalBody>
        <ModalFooter>
          <ModalCancelButton onClick={onClose}>취소</ModalCancelButton>
          <ModalSaveButton
            style={{ backgroundColor: theme.colors.kakaoYellow }}
            onClick={handleSave}
          >
            {fields.length}명 완료
          </ModalSaveButton>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
};

export default RecipientModal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 12px;
  width: 95%;
  max-width: 600px;
  height: 90vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 95%;
    max-width: none;
    height: 90vh;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing.spacing4};
  padding-bottom: 0;
`;

const ModalTitle = styled.h3`
  font-size: ${theme.typography.title2Bold.fontSize};
  font-weight: ${theme.typography.title2Bold.fontWeight};
  color: ${theme.colors.textDefault};
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${theme.colors.textSub};

  &:hover {
    color: ${theme.colors.textDefault};
  }
`;

const ModalBody = styled.div`
  padding: ${theme.spacing.spacing4};
  padding-top: 0;
  flex: 1 1 auto;
  overflow-y: auto;
  min-height: 0;
`;

const ModalFooter = styled.div`
  display: flex;
  gap: ${theme.spacing.spacing2};
  padding: ${theme.spacing.spacing4};
  margin-top: auto;
`;

const ModalCancelButton = styled.button`
  flex: 3;
  padding: ${theme.spacing.spacing3};
  background: ${theme.colors.gray200};
  border: none;
  border-radius: 8px;
  font-size: ${theme.typography.body1Regular.fontSize};
  color: ${theme.colors.textDefault};
  cursor: pointer;

  &:hover {
    background: ${theme.colors.gray300};
  }
`;

const ModalSaveButton = styled.button`
  flex: 7;
  padding: ${theme.spacing.spacing3};
  background: ${theme.colors.blue700};
  border: none;
  border-radius: 8px;
  font-size: ${theme.typography.body1Regular.fontSize};
  color: black;
  cursor: pointer;

  &:hover {
    background: ${theme.colors.blue800};
  }
`;

const ModalDescription = styled.div`
  font-size: ${theme.typography.body2Regular.fontSize};
  color: ${theme.colors.textDefault};
`;
const AddRecipientButtonWrapper = styled.div`
  position: sticky;
  top: 0;
  background: ${theme.colors.default};
  z-index: 2;
  padding-bottom: 8px;
`;

const AddRecipientButton = styled.button`
  padding: ${theme.spacing.spacing3} ${theme.spacing.spacing4};
  background: ${theme.colors.gray300};
  border: none;
  border-radius: 8px;
  font-size: ${theme.typography.body2Regular.fontSize};
  color: ${theme.colors.textDefault};
  cursor: pointer;
  margin-top: ${theme.spacing.spacing3};
  width: auto;

  &:hover {
    background: ${theme.colors.gray400};
  }
`;
