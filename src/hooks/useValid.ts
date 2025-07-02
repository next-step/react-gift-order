import { useEffect, useState } from "react"
import type { ValueType } from "@/interfaces/ValueType"

type ValidText = {
  emailMessage: string
  passwordMessage: string
}

type IsValid = {
  isEmail: boolean
  isPassword: boolean
}

export const useValid = <T extends ValueType>(
  changeValue: T
): [ValidText, IsValid] => {
  const [validText, setValidText] = useState<ValidText>({
    emailMessage: "",
    passwordMessage: "",
  })

  const [isValid, setIsValid] = useState<IsValid>({
    isEmail: false,
    isPassword: false,
  })

  useEffect(() => {
    const emailRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*@[A-Za-z0-9]+[A-Za-z0-9]*\.[A-Za-z]{1,3}$/
    if (changeValue.email.length === 0) {
      setValidText((prev) => ({ ...prev, emailMessage: "ID를 입력해주세요." }))
      setIsValid((prev) => ({ ...prev, isEmail: false }))
    } else if (!emailRegExp.test(changeValue.email)) {
      setValidText((prev) => ({
        ...prev,
        emailMessage: "ID는 이메일 형식으로 입력해주세요.",
      }))
      setIsValid((prev) => ({ ...prev, isEmail: false }))
    } else {
      setValidText((prev) => ({ ...prev, emailMessage: "" }))
      setIsValid((prev) => ({ ...prev, isEmail: true }))
    }
  }, [changeValue.email])

  useEffect(() => {
    if (changeValue.password.length === 0) {
      setValidText((prev) => ({
        ...prev,
        passwordMessage: "PW를 입력해주세요.",
      }))
      setIsValid((prev) => ({ ...prev, isPassword: false }))
    } else if (changeValue.password.length < 8) {
      setValidText((prev) => ({
        ...prev,
        passwordMessage: "PW는 최소 8글자 이상이어야 합니다.",
      }))
      setIsValid((prev) => ({ ...prev, isPassword: false }))
    } else {
      setValidText((prev) => ({ ...prev, passwordMessage: "" }))
      setIsValid((prev) => ({ ...prev, isPassword: true }))
    }
  }, [changeValue.password])
  return [validText, isValid]
}
