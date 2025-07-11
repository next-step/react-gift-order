import styled from '@emotion/styled';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalBox = styled.div`
  background: white;
  border-radius: 18px;
  width: 90%;
  max-width: 600px;
  min-height: 600px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  max-height: 80vh;
`;
export const ModalHeader = styled.div`
  margin-bottom: 16px;
`;
export const ModalTitle = styled.div`
  ${({ theme }) => `
    font-weight: ${theme.typography.title2Bold.fontWeight};
    font-size: ${theme.typography.title2Bold.fontSize};
  `}
  margin-bottom: 8px;
`;
export const ModalDesc = styled.div`
  ${({ theme }) => `
    font-weight: ${theme.typography.body2Regular.fontWeight};
    font-size: ${theme.typography.body2Regular.fontSize};
    color : ${theme.colors.gray900};
  `}
`;
export const ModalAddBtnRow = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 8px;
`;
export const ModalAddBtn = styled.button`
  ${({ theme }) => `
    background-color: ${theme.colors.gray300};
    font-weight: ${theme.typography.body2Regular.fontWeight};
    font-size: ${theme.typography.body2Regular.fontSize};
  `}
  border-radius: 10px;
  padding: 8px;
  cursor: pointer;
`;
export const ModalListScroll = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 16px;
  max-height: 500px;
  min-height: 60px;
`;
export const ModalInputRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  border-bottom: 1px solid ${({ theme }) => `${theme.colors.gray500}`};
  padding: 16px;
`;
export const ModalInputTitle = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  margin-bottom: 10px;
`;
export const ModalInputDetail = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const ModalInputLabel = styled.label`
  width: 20%;
  ${({ theme }) => `
    font-weight: ${theme.typography.body2Regular.fontWeight};
    font-size: ${theme.typography.body2Regular.fontSize};
  `}
`;
export const ModalInput = styled.input`
  width: 80%;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 6px;
  font-size: 16px;
  margin-bottom: 4px;
`;
export const ModalRemoveBtn = styled.button`
  ${({ theme }) => `
    font-weight: ${theme.typography.title2Bold.fontWeight};
    font-size: ${theme.typography.title2Bold.fontSize};
  `}
  cursor: pointer;
`;
export const ModalBtnRow = styled.div`
  display: flex;
  gap: 12px;
`;
export const ModalActionBtn = styled.button`
  flex: 1;
  ${({ theme }) => `
    background-color : ${theme.colors.gray500};
    font-weight: ${theme.typography.body2Regular.fontWeight};
    font-size: ${theme.typography.body2Regular.fontSize};
  `}
  border-radius: 10px;
  padding: 16px;
  cursor: pointer;
`;
export const ModalCompleteBtn = styled.button`
  ${({ theme }) => `
    background-color : ${theme.colors.kakaoYellow};
    font-weight: ${theme.typography.body2Regular.fontWeight};
    font-size: ${theme.typography.body2Regular.fontSize};
  `}
  flex: 2;
  border-radius: 10px;
  padding: 16px;
  cursor: pointer;
`;
