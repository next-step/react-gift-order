import LoginForm from "@/components/LoginForm"
import InputBlank from "@/components/InputBlank"
import MoreButton from "@/components/MoreButton"
import { useNavigate } from "react-router-dom"
import Blank from "@/components/Blank"
import Icon from "@/assets/Icon.svg?react"

const Login = () => {
  const navigate = useNavigate()

  const handleGoBackRevise = (): void => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1)
    } else {
      navigate("/", { replace: true })
    }
  }
  return (
    <LoginForm>
      <Icon width="88px" height="88px"></Icon>
      <div>
        <InputBlank
          width="388px"
          height="44px"
          placeholder="이메일"
        ></InputBlank>
        <Blank height="16px"></Blank>
        <InputBlank
          width="388px"
          height="44px"
          placeholder="비밀번호"
        ></InputBlank>
        <MoreButton background="kakaoYellow" onClick={handleGoBackRevise}>
          로그인
        </MoreButton>
      </div>
    </LoginForm>
  )
}

export default Login
