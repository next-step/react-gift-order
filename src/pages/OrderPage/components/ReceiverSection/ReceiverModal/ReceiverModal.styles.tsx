import styled from "@emotion/styled";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.components.modal.backgroundColor};

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ theme }) => theme.zIndex.modal};
`;

export const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.colors.background.default};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  width: 90%;
  max-width: 550px;
  min-height: 80vh;

  display: flex;
  flex-direction: column;

  padding: ${({ theme }) => theme.spacing[6]};
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

export const ModalTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.title.title1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title.title1Bold.fontWeight};
  color: ${({ theme }) => theme.colors.text.default};
`;

export const ModalBody = styled.div`
  flex: 1;
`;

export const InfoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const InfoText = styled.p`
  font-size: ${({ theme }) => theme.typography.label.label2Regular.fontSize};
  font-weight: ${({ theme }) =>
    theme.typography.label.label2Regular.fontWeight};
  color: ${({ theme }) => theme.colors.gray[800]};
`;

export const AddSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing[3]};
  margin-bottom: ${({ theme }) => theme.spacing[5]};
`;

export const AddSectionButton = styled.button<{ disabled: boolean }>`
  font-size: ${({ theme }) => theme.typography.label.label1Regular.fontSize};
  font-weight: ${({ theme }) =>
    theme.typography.label.label1Regular.fontWeight};
  color: ${({ theme }) => theme.colors.text.default};
  background-color: ${({ theme }) => theme.colors.gray[300]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: 0;
  cursor: pointer;

  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export const ModalFooter = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};
  margin-top: ${({ theme }) => theme.spacing[4]};
`;

export const CancelButton = styled.button`
  flex: 0.3;
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background-color: ${({ theme }) => theme.colors.gray[300]};
  color: ${({ theme }) => theme.colors.text.default};
  font-size: ${({ theme }) => theme.typography.label.label1Regular.fontSize};
  font-weight: ${({ theme }) =>
    theme.typography.label.label1Regular.fontWeight};
  cursor: pointer;
`;

export const CompleteButton = styled.button`
  flex: 0.7;
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background-color: ${({ theme }) => theme.colors.brand.kakaoYellow};
  color: ${({ theme }) => theme.colors.text.default};
  font-size: ${({ theme }) => theme.typography.label.label1Regular.fontSize};
  font-weight: ${({ theme }) =>
    theme.typography.label.label1Regular.fontWeight};
  cursor: pointer;
`;

export const ReceiverList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
  max-height: 520px;
  overflow-y: auto;
`;

export const ReceiverInputContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing[2]};
`;

export const RemoveButton = styled.button`
  font-size: ${({ theme }) => theme.typography.label.label1Regular.fontSize};
  font-weight: ${({ theme }) =>
    theme.typography.label.label1Regular.fontWeight};
  color: ${({ theme }) => theme.colors.gray[800]};
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const ReceiverInputHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

export const Divider = styled.div<{ isLast: boolean }>`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray[300]};
  margin-top: ${({ theme }) => theme.spacing[4]};
  opacity: ${({ isLast }) => (isLast ? 0 : 1)};
`;
