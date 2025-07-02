import styled from "@emotion/styled"
import type { ComponentStyle } from "@/interfaces/ComponentStyle"
import Text from "@/components/Text"
import { useState } from "react"

const InputStyle = styled.input<ComponentStyle>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: none;
  border-bottom: 1px solid #ccc;
  message?: ${({ message }) => message};
`

interface InputBlankProps extends React.InputHTMLAttributes<HTMLInputElement> {
  message?: string
  width?: string
  height?: string
}

const InputBlank = (props: InputBlankProps) => {
  const [touched, setTouched] = useState(false)
  return (
    <div>
      <InputStyle
        {...props}
        onBlur={(e) => {
          setTouched(true)
          props.onBlur && props.onBlur(e)
        }}
      />
      {touched && props.message && (
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
