import styled from '@emotion/styled'

const Spacing = styled.div<{ height?: string }>`
  width: 100%;
  height: ${({ height }) => height || '16px'};
  background-color: transparent;
`

export default Spacing;
