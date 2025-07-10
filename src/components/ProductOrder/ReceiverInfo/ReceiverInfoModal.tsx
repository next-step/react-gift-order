import styled from '@emotion/styled';
import React from 'react';
import BaseButton from '@/common/BaseButton';

type ReceiverInfoModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ReceiverInfoModal = ({ isOpen, onClose }: ReceiverInfoModalProps) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContent>
        <ModalTitle>받는 사람</ModalTitle>
        <Hint>* 최대 10명까지 추가 할 수 있어요.</Hint>
        <Hint>* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.</Hint>
        <BaseButton width="90px">추가하기</BaseButton>
        <ModalBody>
          <p>받는 사람 정보를 입력해주세요.</p>
        </ModalBody>
        <ModalFooter>
          <BaseButton width="30%">취소</BaseButton>
          <BaseButton width="68%" backgroundColor="#FEE500">
            완료
          </BaseButton>
        </ModalFooter>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default ReceiverInfoModal;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  width: 552px;
  height: 750px;
  background-color: white;
  border-radius: ${({ theme }) => theme.spacing.spacing3};
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing.spacing6}
    ${({ theme }) => theme.spacing.spacing4}
    ${({ theme }) => theme.spacing.spacing6}
    ${({ theme }) => theme.spacing.spacing4};
`;

const ModalTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Hint = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray800};
  margin-bottom: 10px;
`;

const ModalBody = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.spacing6};
  overflow-y: auto;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
