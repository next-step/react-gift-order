import styled from "@emotion/styled"
import theme from "@/styles/theme"
import Layout from "./Layout"

interface OrderMessageStyle {
  margin: keyof typeof theme.space
}

const OrderMessageStyle = styled.textarea<OrderMessageStyle>`
  width: 100%;
  max-width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: ${theme.space.spacing3};
  border: 1px solid ${theme.colors.gray300};
  border-radius: ${theme.space.spacing2};
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: ${theme.colors.gray900};
  }

  &::placeholder {
    color: ${theme.colors.gray900};
  }
`

interface OrderMessageProps {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
}

export const OrderMessage = ({
  placeholder,
  value,
  onChange,
}: OrderMessageProps) => {
  return (
    <Layout paddingLeft="spacing4" paddingRight="spacing4" height="64px">
      <OrderMessageStyle
        margin="spacing2"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </Layout>
  )
}
