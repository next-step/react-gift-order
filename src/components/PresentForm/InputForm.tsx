import styled from "@emotion/styled"
import type { ComponentStyle } from "@/interfaces/ComponentStyle"
import Text from "@/components/Text"
import theme from "@/styles/theme"

const InputStyle = styled.input<ComponentStyle & { hasError?: boolean }>`
  width: ${({ width }) => width};
  border: 1px solid;
  border-radius: ${theme.space.spacing2};
  ${({ hasError }) => (hasError ? theme.colors.red700 : theme.colors.gray700)};
  box-sizing: border-box;

  width: 100%;
  height: ${({ height }) => height ?? "42px"};
`

export type InputFormProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "name"
> &
  ComponentStyle & {
    name: string
    message?: string
    description?: string
    onBlur?: React.FocusEventHandler<HTMLInputElement>
  }

function InputForm({
  width,
  height,
  name,
  message,
  description,
  onBlur,
  ...props
}: InputFormProps) {
  const hasError = Boolean(message)

  return (
    <div>
      <InputStyle
        width={width}
        height={height}
        hasError={hasError}
        name={String(name)}
        onBlur={onBlur}
        {...props}
      />
      {hasError && (
        <Text
          variant="label2Regular"
          margin="spacing0"
          padding="spacing0"
          marginTop="spacing1"
          color="red700"
        >
          {message}
        </Text>
      )}
      {!hasError && description && (
        <Text
          variant="label2Regular"
          margin="spacing0"
          padding="spacing0"
          marginTop="spacing2"
          color="gray500"
        >
          {description}
        </Text>
      )}
    </div>
  )
}

export default InputForm
