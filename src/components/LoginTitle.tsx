import styled from "@emotion/styled"

interface LoginTitleImg {
  width: string
  height: string
}

const LoginTitle = styled.img<LoginTitleImg>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`
export default LoginTitle
