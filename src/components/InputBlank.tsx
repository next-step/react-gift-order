import styled from "@emotion/styled"
import type { ComponentStyle } from "@/interfaces/ComponentStyle"

const InputBlank = styled.input<ComponentStyle>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: none;
  border-bottom: 1px solid #ccc;
`
export default InputBlank
