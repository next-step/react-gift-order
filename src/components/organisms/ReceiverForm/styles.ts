import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.semantic.background.default};
  padding: ${({ theme }) => theme.spacing.spacing2};
  border: 1px solid ${({ theme }) => theme.semantic.background.fill};
`;

export const FormContent = styled.div`
  width: 100%;
`;

export const FormSpacer = styled.div`
  height: ${({ theme }) => theme.spacing.spacing2};
`;

export const ReceiverCard = styled.div`
  background-color: ${({ theme }) => theme.semantic.background.default};
  border: 1px solid ${({ theme }) => theme.semantic.background.fill};
  border-radius: ${({ theme }) => theme.spacing.spacing2};
  padding: ${({ theme }) => theme.spacing.spacing3};
  margin-bottom: ${({ theme }) => theme.spacing.spacing2};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const ReceiverHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.spacing2};
`;

export const ReceiverTitle = styled.div`
  ${({ theme }) => theme.typography.subtitle2Bold};
  color: ${({ theme }) => theme.semantic.text.default};
`;

export const ReceiverContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => `calc(${theme.spacing.spacing2} * 0.75)`};
`;