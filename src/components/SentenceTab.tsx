import styled from "@emotion/styled"

const SentenceTab = styled.button<{ active: boolean }>`
  width: 100%;
  height: 40px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.blue100 : theme.colors.blue100};
  transition: background-color 0.2s;
`
export default SentenceTab
