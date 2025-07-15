import styled from "@emotion/styled";

export const SectionTitle = styled.p`
  margin: ${({ theme }) => theme.spacing.spacing2};
  font-size: ${({ theme }) => theme.typography.title1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title2Bold.fontWeight};
`;
export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 10000;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.gray00};
  border-radius: 16px;
  padding: ${({ theme }) => theme.spacing.spacing3};
  width: 560px;
  height: 720px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
`;

export const Text = styled.p`
  line-height: 1.2;
  margin: ${({ theme }) => theme.spacing.spacing2};
  font-size: ${({ theme }) => theme.typography.label1Regular.fontSize};
  color: ${({ theme }) => theme.colors.gray800};
`;

export const AddGetterButton = styled.button`
  width: 80px;
  height: 40px;
  min-height: 40px;
  border: none;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.typography.body2Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title2Regular.fontWeight};
  margin: ${({ theme }) => theme.spacing.spacing2};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.gray400};
  }
`;
export const CancelButton = styled.button`
  flex: 0 0 100px;
  height: 48px;
  background: ${({ theme }) => theme.colors.gray300};
  border: none;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.typography.body1Regular.fontSize};
  cursor: pointer;
`;

export const ConfirmButton = styled.button`
  flex: 1;
  height: 48px;
  background: ${({ theme }) => theme.colors.kakaoYellow};
  border: none;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.typography.body1Regular.fontSize};
  cursor: pointer;
`;
export const ButtonRow = styled.div`
  display: flex;
  gap: 8px;
  margin-top: auto;
`;
export const GetterList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;
`;
