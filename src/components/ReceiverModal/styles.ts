import styled from '@emotion/styled';

export const HintText = styled.p`
  font-size: 14px;
  color: #888;
  margin-bottom: 10px;
`;

export const AddButton = styled.button`
  background-color: ${({ theme }) => theme.colors.semantic.kakaoYellow};
  color: ${({ theme }) => theme.colors.semantic.textDefault};
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 10px;

  &:disabled {
    background-color: #ccc;
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
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: #999;
  font-size: 20px;
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

export const HeaderTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalTitle = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
`;
