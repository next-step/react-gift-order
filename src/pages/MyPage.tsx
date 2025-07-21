// src/pages/MyPage.tsx
import { useEffect } from "react";
import { useAuth } from "../contexts/useAuth"; // useAuth 훅 임포트
import { useNavigate } from "react-router-dom"; // 리다이렉션을 위해

export const MyPage = () => {
  const { user, logout, isLoggedIn } = useAuth(); // useAuth 훅에서 user, logout, isLoggedIn 가져오기
  const navigate = useNavigate();

  // 로그인 상태가 아니라면 로그인 페이지로 리다이렉트
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  // 이메일에서 @kakao.com 전의 닉네임 추출
  const nickname = user?.email ? user.email.split("@")[0] : "사용자";

  // 로그아웃 버튼 클릭 핸들러
  const handleLogout = () => {
    logout(); // AuthContext의 logout 함수 호출
    navigate("/login"); // 로그아웃 후 로그인 페이지로 리다이렉트
  };

  // 로그인되지 않은 상태이거나 user 정보가 아직 로드되지 않았다면 아무것도 렌더링하지 않음 (또는 로딩 스피너)
  if (!isLoggedIn || !user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-600">로그인 정보 로딩 중...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <h1 className="text-3xl font-bold mb-8">마이 페이지</h1>
      <div className="bg-gray-100 p-8 rounded-lg shadow-md w-96 text-center">
        <p className="text-2xl font-semibold mb-4">{nickname}님 안녕하세요!</p>

        <p className="text-lg text-gray-700 mb-6">
          이메일 주소는 {user.email}입니다.
        </p>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 w-full text-lg"
        >
          로그아웃
        </button>
      </div>
    </div>
  );
};

export default MyPage;
