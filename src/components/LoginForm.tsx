import styled from "@emotion/styled"
import theme from "@/styles/theme"

const LoginForm = styled.form`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0 ${theme.space.spacing4};
`

export default LoginForm
