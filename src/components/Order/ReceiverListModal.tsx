import { useEffect } from 'react';
import styled from '@emotion/styled';

interface ReceiverListModalProps {
  open: boolean;
  onClose: () => void;
}

const ReceiverListModal = ({ open, onClose }: ReceiverListModalProps) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>받는 사람</ModalTitle>
          <ModalCaption>
            * 최대 10명까지 추가 할 수 있어요.
            <br />* 받는 사람의 전화번호를 중복으로 입력할 수 있어요.
          </ModalCaption>

          <AddReceiverButton>추가하기</AddReceiverButton>
        </ModalHeader>
        <ModalContent></ModalContent>
        <ModalButtonWrapper>
          <ModalCancleButton>취소</ModalCancleButton>
          <ModalCompleteButton>명 완료</ModalCompleteButton>
        </ModalButtonWrapper>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ReceiverListModal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;
const ModalContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundDefault};
  border-radius: 8px;
  max-width: 600px;
  max-height: calc(100vh - 100px);
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacing.spacing3}
    ${({ theme }) => theme.spacing.spacing4};
  flex-direction: column;
  position: relative;
  display: flex;
`;

const ModalHeader = styled.div`
  flex-direction: column;
`;

const ModalTitle = styled.div`
  ${({ theme }) => `
    font-size: ${theme.font.title1Bold.size};
    font-weight: ${theme.font.title1Bold.weight};
    line-height: ${theme.font.title1Bold.lineHeight};
  `}
  margin-bottom: ${({ theme }) => theme.spacing.spacing2};
`;

const ModalCaption = styled.div`
  ${({ theme }) => `
    font-size: ${theme.font.label2Regular.size};
    font-weight: ${theme.font.label2Regular.weight};
    line-height: ${theme.font.label2Regular.lineHeight};
  `}
  margin-bottom: ${({ theme }) => theme.spacing.spacing2};
`;

const AddReceiverButton = styled.button`
  background-color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => `
    font-size: ${theme.font.label2Regular.size};
    font-weight: bold;
    line-height: ${theme.font.label2Regular.lineHeight};
  `}
  border: none;
  &:hover {
    outline: none;
    background-color: ${({ theme }) => theme.colors.gray500};
  }
  &:focus {
    outline: none;
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex: 1;
`;
const ModalButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 8px;
`;
const ModalCancleButton = styled.button`
  background-color: ${({ theme }) => theme.colors.gray300};
  flex: 0.3;
  border: none;
  &:hover {
    outline: none;
    background-color: ${({ theme }) => theme.colors.gray500};
  }
  &:focus {
    outline: none;
  }
`;

const ModalCompleteButton = styled.button`
  background-color: ${({ theme }) => theme.colors.kakaoYellow};
  flex: 0.7;
  border: none;
  &:hover {
    outline: none;
    background-color: ${({ theme }) => theme.colors.kakaoYellowHover};
  }
  &:focus {
    outline: none;
  }
`;
