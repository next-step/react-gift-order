import styled from "@emotion/styled"

interface TabButtonStyle {
  isActive: boolean
}

const TabButton = styled.button<TabButtonStyle>`
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 16px;

  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.blue700 : theme.colors.blue100};
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.blue100 : theme.colors.blue300};

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition:
    background-color 0.2s,
    color 0.2s;
  margin-bottom: ${({ theme }) => theme.space.spacing1};
`
export default TabButton
