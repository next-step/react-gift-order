import styled from '@emotion/styled';

export const HintText = styled.p`
  font-size: ${({ theme }) => theme.spacing.spacing3};
  color: ${({ theme }) => theme.colors.semantic.textSub};
  margin-top: 6px;
`;

export const AddButton = styled.button`
  background-color: ${({ theme }) => theme.colors.semantic.kakaoYellow};
  color: ${({ theme }) => theme.colors.semantic.textDefault};
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  width: 80px;
  cursor: pointer;
  font: ${({ theme }) => theme.typography.label2Bold};
  margin-top: 10px;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.semantic.backgroundDisabled};
    color: ${({ theme }) => theme.colors.semantic.textDisabled};
    cursor: not-allowed;
  }
`;

export const ReceiverFormWrapper = styled.div`
  border: 1px solid #eee;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 10px;
  position: relative;
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.semantic.textDefault};
  font-size: 20px;
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.semantic.critical};
  font-size: ${({ theme }) => theme.spacing.spacing3};
  margin-top: ${({ theme }) => theme.spacing.spacing3};
`;



export const ModalTitle = styled.h2`
  margin-top: 8px;
  font-size: 20px;
  font-weight: bold;
`;

export const ReceiverTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const CancelButton = styled.button`
  background-color: ${({ theme }) => theme.colors.semantic.backgroundDisabled};
  width: 30%;
  height: 40px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font: ${({ theme }) => theme.typography.label2Bold};
  margin-top: 10px;
`;

export const FinishButton = styled.button`
  background-color: ${({ theme }) => theme.colors.semantic.kakaoYellow};
  width: 70%;
  height: 40px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font: ${({ theme }) => theme.typography.label2Bold};
  margin-top: 10px;
`;
