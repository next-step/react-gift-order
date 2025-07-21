import { useState, useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useAuth } from "../contexts/useAuth";
import { useNavigate } from "react-router-dom";

interface LoginFormInputs {
  email: string;
  password: string;
}

const LoginPage = () => {
  const { login, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<LoginFormInputs>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [loginError, setLoginError] = useState<string | null>(null);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    setLoginError(null);

    try {
      await login(data.email, data.password);
      navigate("/");
    } catch (err) {
      if (err instanceof Error) {
        setLoginError(err.message);
      } else {
        setLoginError("로그인 중 알 수 없는 오류가 발생했습니다.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-5xl font-sans font-bold text-black mb-16 select-none cursor-default">
        kakao
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="w-80">
        <div className="mb-4">
          <input
            type="email"
            placeholder="이메일"
            className={`
              w-full p-3 border rounded-lg text-lg
              ${errors.email ? "border-red-500" : "border-gray-300"}
              focus:outline-none focus:ring-2 focus:ring-yellow-400
            `}
            {...register("email", {
              required: "이메일을 입력해주세요.",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@kakao\.com$/,
                message: "@kakao.com 형식의 이메일만 입력 가능합니다.",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-6">
          <input
            type="password"
            placeholder="비밀번호"
            className={`
              w-full p-3 border rounded-lg text-lg
              ${errors.password ? "border-red-500" : "border-gray-300"}
              focus:outline-none focus:ring-2 focus:ring-yellow-400
            `}
            {...register("password", {
              required: "비밀번호를 입력해주세요.",
              minLength: {
                value: 8,
                message: "비밀번호는 8자 이상이어야 합니다.",
              },
            })}
          />

          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {loginError && (
          <p className="text-red-500 text-sm mb-4 text-center">{loginError}</p>
        )}

        <button
          type="submit"
          className={`
            w-full py-3 rounded-lg text-white font-bold text-lg
            transition duration-300
            ${
              isValid && !isSubmitting
                ? "bg-yellow-400 hover:bg-yellow-500"
                : "bg-gray-300 cursor-not-allowed"
            }
          `}
          disabled={!isValid || isSubmitting}
        >
          {isSubmitting ? "로그인 중..." : "로그인"}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
