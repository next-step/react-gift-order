import styled from "@emotion/styled"
interface Props {
  direction: "left" | "center" | "right"
}
const Box = styled.div<Props>`
  flex: 1;
  text-align: ${(props) => props.direction};
`
export default Box
