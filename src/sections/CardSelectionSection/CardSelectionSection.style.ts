import styled from "@emotion/styled";

export const ImageListWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  margin: ${({ theme }) => theme.spacing.spacing3};
  gap: ${({ theme }) => theme.spacing.spacing3};
  padding: 12px 0;
  &::-webkit-scrollbar {
    height: 8px;
    background: ${({ theme }) => theme.colors.gray200};
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gray500};
    border-radius: 16px;
  }
`;

export const Thumbnail = styled.img<{ selected: boolean }>`
  width: 90px;
  height: 64px;
  border-radius: 12px;
  border: 2px solid ${({ selected }) => (selected ? "#222222" : "none")};
  cursor: pointer;
`;

export const MainImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.spacing4};
  border-radius: 20px;
  background: transparent;
`;

export const MainImage = styled.img`
  width: 360px;
  height: 240px;
  border-radius: 20px;
  object-fit: cover;
  box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.2);
`;

export const MessageInput = styled.textarea`
  width: 640px;
  min-width: 480px;
  min-height: 48px;
  border: 1.5px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 12px;
  padding: 14px 16px;
  margin: ${({ theme }) => theme.spacing.spacing4};
  font-size: ${({ theme }) => theme.typography.body1Regular.fontSize};
  box-sizing: border-box;
  outline: none;
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.gray700};
  }
`;

export const SectionDescription = styled.p`
  font-size: 12px;
  color: #6c757d;
  margin: 4px 0 0 4px;
`;
