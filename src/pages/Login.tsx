import LoginForm from "@/components/LoginForm"
import InputBlank from "@/components/InputBlank"
import MoreButton from "@/components/MoreButton"
import { useNavigate } from "react-router-dom"
import Blank from "@/components/Blank"
import Icon from "@/assets/Icon.svg?react"
import { useInput } from "../hooks/useInput"
import { useValid } from "@/hooks/useValid"
import type { FormEvent } from "react"
import type { ValueType } from "@/interfaces/ValueType"

const Login = () => {
  const form: ValueType = {
    email: "",
    password: "",
  }

  const [data, onChange] = useInput(form)
  const [validText, isValid] = useValid(data)

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("email: ", data.email)
    console.log("password: ", data.password)
  }

  const navigate = useNavigate()

  const handleGoBackRevise = (): void => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1)
    } else {
      navigate("/", { replace: true })
    }
  }
  return (
    <LoginForm action="#" onSubmit={submitHandler}>
      <Icon width="88px" height="88px"></Icon>
      <div>
        <InputBlank
          width="388px"
          height="44px"
          placeholder="이메일"
          name="email"
          value={data.email}
          onChange={onChange}
          message={validText.emailMessage}
        ></InputBlank>

        <Blank height="16px"></Blank>
        <InputBlank
          width="388px"
          height="44px"
          placeholder="비밀번호"
          name="password"
          value={data.password}
          onChange={onChange}
          message={validText.passwordMessage}
        ></InputBlank>
        <MoreButton
          background="kakaoYellow"
          onClick={handleGoBackRevise}
          disabled={!isValid.isEmail || !isValid.isPassword}
        >
          로그인
        </MoreButton>
      </div>
    </LoginForm>
  )
}

export default Login
