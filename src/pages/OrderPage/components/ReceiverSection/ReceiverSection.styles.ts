import styled from "@emotion/styled";

export const ReceiverSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background.default};
  padding: ${({ theme }) => theme.spacing[4]};
  gap: 1rem;
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.title.title2Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title.title2Bold.fontWeight};
  color: ${({ theme }) => theme.colors.text.default};
  margin: 0;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const FieldLabel = styled.label`
  font-size: ${({ theme }) => theme.typography.label.label1Regular.fontSize};
  font-weight: ${({ theme }) =>
    theme.typography.label.label1Regular.fontWeight};
  color: ${({ theme }) => theme.colors.text.default};
  min-width: 4rem;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const ReceiverSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ShowModalButton = styled.button`
  cursor: pointer;
  border: 0;
  background-color: transparent;
  background-color: ${({ theme }) => theme.colors.gray[300]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.colors.text.default};
  font-size: ${({ theme }) => theme.typography.label.label1Regular.fontSize};
  font-weight: ${({ theme }) =>
    theme.typography.label.label1Regular.fontWeight};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`;
