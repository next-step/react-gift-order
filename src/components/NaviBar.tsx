import styled from "@emotion/styled"
import theme from "@/styles/theme"

const NaviBar = styled.div`
  height: 44px;
  background-color: ${theme.colors.default};
  display: flex;
  flex-direction: row;
  font-width: ${theme.Typography.title1Regular};
  align-items: center;

  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 100;
  max-width: 720px;
  width: 100%;
`

export default NaviBar
