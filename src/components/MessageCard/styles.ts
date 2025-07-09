import styled from "@emotion/styled";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.semantic.backgroundDefault};
`;
export const CardContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 10px;
  padding: ${({ theme }) => theme.spacing.spacing1};
`;

export const Card = styled.div`
  width: 82px;
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.colors.semantic.borderDisabled};
  border-radius: ${({ theme }) => theme.spacing.spacing2};
  overflow: hidden;
  flex-shrink: 0;
  &.selected {
    border-color: ${({ theme }) => theme.colors.semantic.textDefault};
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
`;

export const EnlargedImageContainer = styled.div`
  margin: ${({ theme }) => theme.spacing.spacing3};
  text-align: center;
`;

export const EnlargedImage = styled.img`
  max-width: 360px;
  height: auto;
  border-radius: ${({ theme }) => theme.spacing.spacing2};
`;

export const MessageTextarea = styled.textarea`
  width: 100%;
  height: 64.5px;
  margin-top: ${({ theme }) => theme.spacing.spacing8};
  margin-bottom: ${({ theme }) => theme.spacing.spacing8};
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.semantic.borderDisabled};
  border-radius: ${({ theme }) => theme.spacing.spacing2};
  &:focus {
    border-color: ${({ theme }) => theme.colors.semantic.textDefault};
    outline: none;
  }
`;
