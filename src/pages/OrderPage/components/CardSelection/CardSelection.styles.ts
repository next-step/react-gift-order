import styled from "@emotion/styled";

export const CardSelectorContainer = styled.div`
  padding-left: ${({ theme }) => theme.spacing[3]};
  padding-right: ${({ theme }) => theme.spacing[3]};
  padding-top: ${({ theme }) => theme.spacing[3]};
  padding-bottom: ${({ theme }) => theme.spacing[1]};

  background-color: ${({ theme }) => theme.colors.background.default};
  overflow-x: scroll;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: block;
    height: 9px;
    background: #eee;
  }
  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }
`;

export const ThumbnailList = styled.ul`
  display: flex;
  gap: 4px;
`;

export const ThumbnailItem = styled.li<{ isSelected: boolean }>`
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  overflow: hidden;
  border: 3px solid
    ${({ isSelected }) => (isSelected ? "black" : "transparent")};
  flex-shrink: 0;
`;

export const ThumbnailImage = styled.img`
  width: 75px;
  height: 50px;
  display: block;
  object-fit: cover;
`;

export const CardPreviewContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[10]};
  background-color: ${({ theme }) => theme.colors.background.default};

  padding-top: ${({ theme }) => theme.spacing[4]};

  padding-bottom: 2.5rem;
`;

export const MainCardImage = styled.img`
  width: 100%;
  max-width: 360px;
  height: 230px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: 0px 12px 12px 0px hsla(0, 0%, 0%, 0.1);
`;

export const MessageTextArea = styled.textarea<{ hasError: boolean }>`
  min-width: 92%;
  height: 40px;
  padding: ${({ theme }) => theme.spacing[3]};

  border: 1px solid
    ${({ hasError, theme }) =>
      hasError ? theme.colors.status.critical : theme.colors.gray[400]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  resize: none;
  font-size: ${({ theme }) => theme.typography.body.body1Regular.fontSize};
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${({ hasError, theme }) =>
      hasError
        ? theme.colors.status.critical
        : theme.components.form.focusBorderColor};
  }
`;

export const MessageTextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${({ theme }) => theme.spacing[1]};
  justify-content: center;
  align-items: center;
`;

export const ErrorMessageWrapper = styled.div`
  width: 95%;
  display: flex;
  justify-content: flex-start;
`;
