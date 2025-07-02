import styled from "@emotion/styled"
import type { ComponentStyle } from "@/interfaces/ComponentStyle"
import Text from "@/components/Text"
import { useState } from "react"

const InputStyle = styled.input<ComponentStyle & { hasError?: boolean }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: none;
  border-bottom: 1px solid ${({ hasError }) => (hasError ? "red" : "#ccc")};
`

interface InputBlankProps extends React.InputHTMLAttributes<HTMLInputElement> {
  height?: string
  width?: string
  message?: string
}

const InputBlank = (props: InputBlankProps) => {
  const [touched, setTouched] = useState(false)
  const hasError = touched && !!props.message

  return (
    <div>
      <InputStyle
        width={props.width}
        height={props.height}
        hasError={hasError}
        {...props}
        onBlur={(e) => {
          setTouched(true)
          props.onBlur && props.onBlur(e)
        }}
      />
      {hasError && (
        <Text
          variant="label2Regular"
          margin="spacing0"
          padding="spacing0"
          color="red700"
        >
          {props.message}
        </Text>
      )}
    </div>
  )
}
export default InputBlank
