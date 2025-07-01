import styled from "@emotion/styled"
import theme from "@/styles/theme"

interface ColumnInfo {
  key?: number
}

const Column = styled.div<ColumnInfo>`
  display: flex;
  flex-direction: column;
  justify-content: ${theme.space.spacing0};
  id: ${(props) => props.key};
  align-items: center;
`
export default Column
