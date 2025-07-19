import { css } from '@emotion/react';
import { palette, spacing } from '@/styles/theme';

export const pageWrapper = css`
  padding: ${spacing.spacing4} 0 120px 0;
`;
export const cardSelector = css`
  padding: 0 ${spacing.spacing4};
  .scroll-container {
    display: flex;
    gap: ${spacing.spacing3};
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .thumb-btn {
    border: 2px solid transparent;
    border-radius: 8px;
    padding: 0;
    cursor: pointer;
    transition: border-color 0.2s;
    flex-shrink: 0;
    &.active { border-color: ${palette.primary}; }
    img { width: 80px; height: 80px; display: block; }
  }
`;
export const cardPreview = css`
  width: 100%;
  padding: 0 ${spacing.spacing4};
  margin-top: ${spacing.spacing4};
  aspect-ratio: 1.5 / 1;
  img { width: 100%; height: 100%; object-fit: contain; border-radius: 8px; }
`;
export const messageGroup = css`
  padding: 0 ${spacing.spacing4};
  margin-top: ${spacing.spacing2};
  textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid ${palette.gray300};
    border-radius: 8px;
    font-size: 14px;
    resize: vertical;
    min-height: 80px;
  }
`;
export const divider = css`
  height: 8px;
  background-color: ${palette.gray100};
  margin: ${spacing.spacing4} 0;
  border: none;
`;
export const formSection = css`
  padding: 0 ${spacing.spacing4};
  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: ${spacing.spacing4};
  }
`;
export const formGroup = css`
  display: flex;
  align-items: center;
  margin-bottom: ${spacing.spacing4};
  label {
    flex-basis: 70px;
    flex-shrink: 0;
    font-weight: bold;
    font-size: 14px;
    color: ${palette.gray800};
  }
  input {
    flex: 1;
    width: 100%;
    padding: 12px;
    border: 1px solid ${palette.gray300};
    border-radius: 8px;
    font-size: 14px;
  }
`;
export const helperTextCss = css`
  font-size: 12px;
  color: ${palette.gray600};
  margin-top: ${spacing.spacing2};
`;
export const errorCss = css`
  font-size: 12px;
  color: ${palette.red600};
  margin-top: 4px;
`;
export const productInfo = css`
  display: flex;
  gap: ${spacing.spacing3};
  padding: ${spacing.spacing3};
  border: 1px solid ${palette.gray200};
  border-radius: 8px;
  img {
    width: 80px;
    height: 80px;
    border-radius: 8px;
    flex-shrink: 0;
  }
  .details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${spacing.spacing1};
    .brand { font-size: 12px; color: ${palette.gray700}; }
    .name { font-weight: bold; color: ${palette.gray800}; }
    .price { font-weight: bold; font-size: 16px; }
  }
`;

export const footer = css`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 720px;
  margin: 0 auto;
  padding: ${spacing.spacing3} ${spacing.spacing4} ${spacing.spacing5};
  background: ${palette.gray00};
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
`;

export const submitButton = css`
  width: 100%;
  padding: 14px 0;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  color: ${palette.black};
  background: ${palette.primary};
`;

export const modalsubmitButton = css`
  width: 85%;
  padding: 14px 0;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  color: ${palette.black};
  background: ${palette.primary};
`;

export const overlay = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center; 
`;

export const modalContent = css`
  background: white;
  padding: ${spacing.spacing5};
  border-radius: 12px; 
  width: 80%;
  height: 80vh; 
  max-width: 720px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`;

export const modalHeader = css`
  padding-bottom: ${spacing.spacing4};
  border-bottom: 1px solid ${palette.gray200};
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 { font-size: 18px; font-weight: bold; }
  button { font-size: 24px; color: ${palette.gray700}; }
`;

export const modalBody = css`
  flex: 1;
  overflow-y: auto; /* 내용이 길어지면 스크롤 */
  padding: ${spacing.spacing4} 0;
`;

export const modalFooter = css`
  padding-top: ${spacing.spacing3};
  display: flex;
  gap: 8px;
`;


export const closeButton = css`
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${palette.gray700};
`;

export const cancelButton = css`
  flex: 1;
  padding: 14px 0;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  color: ${palette.gray800};
  background: ${palette.gray200};
`;

export const addButton = css`
  margin-top: ${spacing.spacing3};
  border: 1px dashed ${palette.gray500};
  color: ${palette.gray700};
  width: 100%;
  padding: 12px 0;
  border-radius: 8px;
`;


export const emptyRecipient = css`
  padding: 40px 20px;
  text-align: center;
  color: ${palette.gray700};
  font-size: 14px;
  line-height: 1.5;
  background-color: ${palette.gray100};
  border-radius: 8px;
`;

export const recipientItem = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${spacing.spacing3};
  border: 1px solid ${palette.gray200};
  border-radius: 8px;
  margin-bottom: ${spacing.spacing2};

  span {
    font-size: 14px;
  }
  
  button {
    color: ${palette.gray600};
    font-size: 20px;
  }
`;

export const fullScreenModalOverlay = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: flex-end; /* 하단 정렬 */
`;

export const bottomSheetContent = css`
  width: 100%;
  max-width: 720px; /* Layout과 동일한 너비 */
  height: 90vh; /* 화면 높이의 90% */
  background: white;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  display: flex;
  flex-direction: column;
`;

export const bottomSheetHeader = css`
  padding: ${spacing.spacing4}; border-bottom: 1px solid ${palette.gray200}; display: flex; justify-content: space-between; align-items: center;
  h3 { font-size: 18px; font-weight: bold; }
  button { font-size: 24px; color: ${palette.gray700}; }
`;

export const bottomSheetBody = css`
  flex: 1;
  overflow-y: auto;
  padding: ${spacing.spacing4};
`;

export const bottomSheetFooter = css`
  padding: ${spacing.spacing3} ${spacing.spacing4} ${spacing.spacing5}; box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
  display: flex; gap: 8px;
`;

export const guideText = css`
  font-size: 14px;
  color: ${palette.gray700};
`;

export const recipientFormItem = css`
  border: 1px solid ${palette.gray200};
  border-radius: 8px;
  padding: ${spacing.spacing4};
  margin-top: ${spacing.spacing4};
`;

export const recipientFormHeader = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${spacing.spacing3};
  h4 { font-size: 16px; font-weight: bold; }
  button { color: ${palette.gray600}; }
`;

export const inputError = css`
  border-color: ${palette.red600} !important;
`;
