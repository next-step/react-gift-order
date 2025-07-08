import styled from '@emotion/styled';

const Modal = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 16px;
  width: 280px;
  text-align: center;
`;

const ModalTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
`;

const ModalButton = styled.button<{ variant?: 'primary' | 'secondary' }>`
  width: 100%;
  padding: 12px;
  background-color: ${(props) => (props.variant === 'secondary' ? '#f5f5f5' : '#4A90E2')};
  color: ${(props) => (props.variant === 'secondary' ? '#333' : 'white')};
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: ${(props) => (props.variant === 'secondary' ? '0' : '10px')};

  &:hover {
    background-color: ${(props) => (props.variant === 'secondary' ? '#e0e0e0' : '#3A7BC8')};
  }
`;

const SuccessModalTitle = styled(ModalTitle)`
  color: #4a90e2;
`;

const SuccessMessage = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
`;

export const SuccessModal = ({
  showSuccessModal,
  onClose,
}: {
  showSuccessModal: boolean;
  onClose: () => void;
}) => {
  return (
    <Modal show={showSuccessModal}>
      <ModalContent>
        <SuccessModalTitle>주문이 완료되었습니다! 🎉</SuccessModalTitle>
        <SuccessMessage>선물이 성공적으로 주문되었습니다.</SuccessMessage>
        <ModalButton onClick={onClose}>확인</ModalButton>
      </ModalContent>
    </Modal>
  );
};
