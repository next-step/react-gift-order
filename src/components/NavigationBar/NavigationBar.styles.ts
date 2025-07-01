import styled from "@emotion/styled";

export const NavigationSection = styled.section`
  max-width: ${({ theme }) => theme.layout.width.container};
  width: 100%;
  height: ${({ theme }) => theme.components.navigationBar.height};
  position: fixed;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 ${({ theme }) => theme.spacing[2]};
  box-sizing: border-box;
  z-index: ${({ theme }) => theme.zIndex.navigation};
  background-color: ${({ theme }) => theme.colors.background.default};
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.title.title1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title.title1Bold.fontWeight};
`;

export const UnstyledButton = styled.button`
  cursor: pointer;
  border: 0;
  background-color: transparent;
`;

export const LeftIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const ProfileIcon = styled.img`
  width: 20px;
  height: 20px;
`;
