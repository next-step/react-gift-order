import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "@emotion/styled";
import LoginButton from "../components/common/BaseButton";
import KakaoLogo from "../components/common/KakaoLogo";
import { useForm } from "../hooks/useForm";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";
import { validateEmail, validatePassword } from "../utils/validator";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/my";

  const { values, setValues, errors, setErrors, validateAll } = useForm(
    {
      email: "",
      password: "",
    },
    {
      email: (value) => {
        if (!value.trim()) return "이메일을 입력해주세요.";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value))
          return "이메일은 이메일 형식으로 입력해주세요.";
        return null;
      },
      password: (value) => {
        if (!value.trim()) return "비밀번호를 입력해주세요.";
        if (value.length < 8) return "비밀번호는 최소 8자 이상이어야 합니다.";
        return null;
      },
    }
  );

  const [touched, setTouched] = useState({ email: false, password: false });

  const handleBlur = (key: "email" | "password") => {
    setTouched((prev) => ({ ...prev, [key]: true }));
    const error =
      key === "email"
        ? validateEmail(values.email)
        : validatePassword(values.password);
    setErrors((prev) => ({ ...prev, [key]: error ?? undefined }));
  };

  const handleChange = (key: "email" | "password", value: string) => {
    setValues({ ...values, [key]: value });
    if (touched[key]) {
      const error =
        key === "email" ? validateEmail(value) : validatePassword(value);
      setErrors((prev) => ({ ...prev, [key]: error ?? undefined }));
    }
  };

  return (
    <Wrapper>
      <Logo>
        <KakaoLogo />
      </Logo>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          const isValid = validateAll();
          if (isValid) {
            login(values.email);
            navigate(redirectTo);
          }
        }}
      >
        <Input
          type="email"
          name="email"
          placeholder="이메일"
          value={values.email}
          onChange={(e) => handleChange("email", e.target.value)}
          onBlur={() => handleBlur("email")}
        />
        {errors.email && <ErrorText>{errors.email}</ErrorText>}
        <Input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={values.password}
          onChange={(e) => handleChange("password", e.target.value)}
          onBlur={() => handleBlur("password")}
        />
        {errors.password && <ErrorText>{errors.password}</ErrorText>}
        <LoginButton
          color="yellow"
          type="submit"
          label="로그인"
          size="large"
          disabled={
            !!errors.email ||
            !!errors.password ||
            values.email.trim() === "" ||
            values.password.trim() === ""
          }
        />
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 400px;
  margin: 80px auto 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: ${({ theme }) => theme.colors.default};
  border-radius: 16px;
`;

const Logo = styled.div`
  margin-bottom: 20px;

  svg {
    width: 100px;
    height: 100px;
    display: flex;
    margin: 0 auto 12px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray600};
  padding: 12px 8px;
  font-size: ${({ theme }) => theme.typography.subtitle1Regular.fontSize};
  outline: none;
  background: transparent;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray600};
  }
`;

const ErrorText = styled.div`
  color: red;
  font-size: ${({ theme }) => theme.typography.body2Regular.fontSize};
  margin-top: -10px;
  margin-bottom: 10px;
`;

export default LoginPage;
