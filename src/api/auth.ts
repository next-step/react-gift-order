interface LoginResponseData {
  email: string;
  name: string;
  authToken: string;
}

interface LoginErrorData {
  status: string;
  statusCode: number;
  message: string;
}

// 로그인 요청 함수
export const loginApi = async (
  email: string,
  password: string
): Promise<LoginResponseData> => {
  try {
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    // HTTP 상태 코드가 2xx가 아니면 에러 처리
    if (!response.ok) {
      const errorData: { data: LoginErrorData } = await response.json();
      throw new Error(errorData.data.message || "로그인에 실패했습니다.");
    }

    const result: { data: LoginResponseData } = await response.json();
    return result.data;
  } catch (error) {
    console.error("Login API Error:", error);
    if (error instanceof Error) {
      throw error; // 이미 Error 객체인 경우 그대로 던지기
    }
    throw new Error("네트워크 오류 또는 알 수 없는 오류가 발생했습니다.");
  }
};
