import { useState, useEffect, useCallback } from 'react';
import {
  createInitialModalState,
  openModal,
  closeModal,
  createEscapeHandler,
  type ModalState,
} from '@/utils';
import type { Recipient } from '@/types';

interface UseRecipientModalProps {
  onSave?: (recipients: Recipient[]) => void;
  onCancel?: () => void;
  initialRecipients?: Recipient[];
}

export const useRecipientModal = ({
  onSave,
  onCancel,
  initialRecipients = [],
}: UseRecipientModalProps = {}) => {
  const [modalState, setModalState] = useState<ModalState>(
    createInitialModalState()
  );
  const [tempRecipients, setTempRecipients] =
    useState<Recipient[]>(initialRecipients);

  // 모달 열기
  const openRecipientModal = useCallback(
    (recipients?: Recipient[]) => {
      setTempRecipients(recipients || initialRecipients);
      setModalState(openModal({ recipients: recipients || initialRecipients }));
    },
    [initialRecipients]
  );

  // 모달 닫기
  const closeRecipientModal = useCallback(() => {
    setModalState(closeModal());
    setTempRecipients(initialRecipients);
    onCancel?.();
  }, [initialRecipients, onCancel]);

  // 받는사람 목록 저장
  const saveRecipients = useCallback(() => {
    onSave?.(tempRecipients);
    setModalState(closeModal());
  }, [tempRecipients, onSave]);

  // 임시 받는사람 목록 업데이트
  const updateTempRecipients = useCallback((recipients: Recipient[]) => {
    setTempRecipients(recipients);
  }, []);

  // ESC 키 핸들러 설정
  useEffect(() => {
    if (!modalState.isOpen) return;

    const handleEscape = createEscapeHandler(closeRecipientModal);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [modalState.isOpen, closeRecipientModal]);

  // 모달이 열릴 때 body 스크롤 방지
  useEffect(() => {
    if (modalState.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [modalState.isOpen]);

  return {
    // 상태
    isOpen: modalState.isOpen,
    tempRecipients,

    // 액션
    openModal: openRecipientModal,
    closeModal: closeRecipientModal,
    saveRecipients,
    updateTempRecipients,

    // 편의 프로퍼티
    hasChanges:
      JSON.stringify(tempRecipients) !== JSON.stringify(initialRecipients),
    recipientCount: tempRecipients.length,
  };
};
