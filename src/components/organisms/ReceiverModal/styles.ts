import styled from '@emotion/styled';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
`;

export const ModalContent = styled.div`
  background: ${({ theme }) => theme.semantic.background.default};
  border-radius: ${({ theme }) => theme.spacing.spacing2};
  max-height: calc(100vh - 7.5rem);
  max-width: 37.5rem;
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacing.spacing4};
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.spacing.spacing4};
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentArea = styled.div`
  overflow-y: auto;
  border: none;
`;

export const Title = styled.p`
  ${({ theme }) => theme.typography.title1Bold};
`;

export const Description = styled.p`
  ${({ theme }) => theme.typography.label2Regular};
  color: ${({ theme }) => theme.semantic.text.default};
  padding: ${({ theme }) => theme.spacing.spacing3} 0;
`;

export const AddButton = styled.button`
  ${({ theme }) => theme.typography.label2Regular};
  border : none;
  border-radius: ${({ theme }) => theme.spacing.spacing2};
  padding: ${({ theme }) => theme.spacing.spacing2} ${({ theme }) => theme.spacing.spacing3};
  cursor: pointer;
  align-self: flex-start;

  &:disabled {
    background-color: ${({ theme }) => theme.semantic.background.disabled};
    color: ${({ theme }) => theme.semantic.text.disabled};
    cursor: not-allowed;
  }
`;

export const ButtonArea = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.spacing2};
  margin-top: auto;
`;

export const CancelButton = styled.button`
  ${({ theme }) => theme.typography.label1Regular};
  border: none;
  border-radius: ${({ theme }) => theme.spacing.spacing2};
  padding: ${({ theme }) => theme.spacing.spacing3} ${({ theme }) => theme.spacing.spacing6};
  cursor: pointer;
  flex: 1;
`;

export const CompleteButton = styled.button`
  ${({ theme }) => theme.typography.label1Regular};
  background-color: ${({ theme }) => theme.semantic.brand.kakaoYellow};
  border: none;
  border-radius: ${({ theme }) => theme.spacing.spacing2};
  padding: ${({ theme }) => theme.spacing.spacing3} ${({ theme }) => theme.spacing.spacing6};
  cursor: pointer;
  flex: 3;
`;
