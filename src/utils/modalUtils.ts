import type React from 'react';

/**
 * 모달 상태 관리를 위한 유틸리티 함수들
 */

export interface ModalState {
  isOpen: boolean;
  data?: any;
}

/**
 * 초기 모달 상태
 */
export const createInitialModalState = (): ModalState => ({
  isOpen: false,
  data: null,
});

/**
 * 모달 열기
 */
export const openModal = (data?: any): ModalState => ({
  isOpen: true,
  data,
});

/**
 * 모달 닫기
 */
export const closeModal = (): ModalState => ({
  isOpen: false,
  data: null,
});

/**
 * 모달 데이터 업데이트
 */
export const updateModalData = (
  currentState: ModalState,
  newData: any
): ModalState => ({
  ...currentState,
  data: newData,
});

/**
 * ESC 키 이벤트 핸들러
 */
export const createEscapeHandler = (onClose: () => void) => {
  return (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };
};

/**
 * 모달 외부 클릭 핸들러
 */
export const createOutsideClickHandler = (onClose: () => void) => {
  return (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
};
