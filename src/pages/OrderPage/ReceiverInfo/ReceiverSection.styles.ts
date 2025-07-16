import styled from '@emotion/styled';

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const EmptyText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.color.text.sub};
`;

export const ReceiverBox = styled.div`
  position: relative;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.color.border.default};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.background.fill};
`;

export const ReceiverTitle = styled.p`
  font-weight: bold;
  color: ${({ theme }) => theme.color.text.default};
  margin-bottom: 8px;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: ${({ theme }) => theme.color.text.default};
  margin-bottom: 4px;
`;

export const Input = styled.input`
  padding: 8px 12px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.color.border.default};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.background.default};
  color: ${({ theme }) => theme.color.text.default};

  &::placeholder {
    color: ${({ theme }) => theme.color.text.placeholder};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.gray600};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.color.background.disabled};
    color: ${({ theme }) => theme.color.text.disabled};
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: ${({ theme }) => theme.color.gray700};

  &:hover {
    color: ${({ theme }) => theme.color.red600};
  }
`;

export const AddButton = styled.button`
  align-self: flex-start;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.kakaoYellow};
  color: ${({ theme }) => theme.color.kakaoBrown};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.color.kakaoYellowHover};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.kakaoYellowPressed};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.color.background.disabled};
    color: ${({ theme }) => theme.color.text.disabled};
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
