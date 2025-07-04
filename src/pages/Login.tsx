import LoginForm from "@/components/LoginForm"
import InputBlank from "@/components/InputBlank"
import MoreButton from "@/components/MoreButton"
import { useNavigate, useNavigationType } from "react-router-dom"
import Blank from "@/components/Blank"
import Icon from "@/assets/Icon.svg?react"
import { useInput } from "@/hooks/useInput"
import { useState } from "react"
import type { FormEvent, FocusEventHandler } from "react"
import type { ValueType } from "@/interfaces/ValueType"
import { useValid, validateEmail, validatePassword } from "@/hooks/useValid"

const Login = () => {
  const form: ValueType = {
    email: "",
    password: "",
  }

  const [data, onChange] = useInput(form)
  const { isEmailValid, isPasswordValid } = useValid(data)
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  )

  const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target as HTMLInputElement & {
      name: keyof ValueType
    }
    setErrors((prev) => ({
      ...prev,
      email: name === "email" ? validateEmail(value) : prev.email,
      password: name === "password" ? validatePassword(value) : prev.password,
    }))
  }

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange(e)

    const { name, value } = e.target as HTMLInputElement & {
      name: keyof ValueType
    }

    if (name === "email" && errors.email !== undefined) {
      setErrors((prev) => ({ ...prev, email: validateEmail(value) }))
    }
    if (name === "password" && errors.password !== undefined) {
      setErrors((prev) => ({ ...prev, password: validatePassword(value) }))
    }
  }

  const navigate = useNavigate()
  const navigationType = useNavigationType()

  const handleGoBack = () => {
    if (navigationType === "PUSH") {
      navigate(-1)
    } else {
      navigate("/", { replace: true })
    }
  }
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <LoginForm action="#" onSubmit={submitHandler}>
      <Icon width="88px" height="88px"></Icon>
      <div>
        <InputBlank<ValueType>
          width="388px"
          height="44px"
          placeholder="이메일"
          name="email"
          value={data.email}
          onChange={handleChange}
          onBlur={handleBlur}
          message={errors.email ?? ""}
        ></InputBlank>

        <Blank height="16px"></Blank>
        <InputBlank<ValueType>
          width="388px"
          height="44px"
          placeholder="비밀번호"
          name="password"
          value={data.password}
          onChange={handleChange}
          onBlur={handleBlur}
          message={errors.password ?? ""}
        ></InputBlank>
        <MoreButton
          background="kakaoYellow"
          onClick={handleGoBack}
          disabled={!isEmailValid || !isPasswordValid}
        >
          로그인
        </MoreButton>
      </div>
    </LoginForm>
  )
}

export default Login
