import styled from '@emotion/styled';

export const Frame = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.semantic.backgroundDefault};
  margin-top: ${({ theme }) => theme.spacing.spacing3};
  padding: ${({ theme }) => theme.spacing.spacing4} ${({ theme }) => theme.spacing.spacing3};
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const Box = styled.button`
  align-items: center;
  gap: ${({ theme }) => theme.spacing.spacing2};
  width: 80px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.semantic.backgroundDisabled};

  border-radius: ${({ theme }) => theme.spacing.spacing3};
`;

export const Title = styled.h1`
  font: ${({ theme }) => theme.typography.title2Bold};
`;
export const Text = styled.p`
    font: ${({ theme }) => theme.typography.label1Regular};
    color: ${({ theme }) => theme.colors.semantic.textDeafult};
`;

export const RecipientInfoBox = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  margin-top: 16px;
`;

export const RecipientHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid #eee;


  & > p {
    margin: 0;
    flex: 1;
    text-align: left;
  }
`;

export const EmptyText = styled.p`
  color: #888;
  text-align: center;
  white-space: pre-wrap;
`;

export const RecipientInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding-top: 8px;
  padding-bottom: 16px;
  &:last-child {
    border-bottom: none;
    padding-bottom: 8px;
  }

  & > p {
    margin: 0;
    flex: 1;
    text-align: left;
  }
`;
