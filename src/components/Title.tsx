import styled from "@emotion/styled"

const Title = styled.p`
  ${({ theme }) => {
    const [fontSize, fontWeight, lineHeight] =
      theme.Typography.title1Bold.split(/\s+/)

    return `
      font-size: ${fontSize};
      font-weight: ${fontWeight};
      line-height: ${lineHeight};
    `
  }}
`
export default Title
