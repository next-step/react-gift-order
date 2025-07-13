import styled from "@emotion/styled";

export const ReceiverTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: ${({ theme }) => theme.colors.gray[100]};
  padding: ${({ theme }) => theme.spacing[3]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[3]};
  background-color: ${({ theme }) => theme.colors.background.default};

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};
  }
`;

export const TableCell = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.typography.body.body2Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.body.body2Regular.fontWeight};
  color: ${({ theme }) => theme.colors.text.default};
`;

export const TableHeaderCell = styled(TableCell)`
  font-weight: ${({ theme }) => theme.typography.body.body2Bold.fontWeight};
  font-size: ${({ theme }) => theme.typography.body.body2Bold.fontSize};
  color: ${({ theme }) => theme.colors.text.default};
`;
