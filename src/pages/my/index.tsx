import { useAuth } from "@/hooks/useAuth";

export default function MyPage() {
  const { user, logout } = useAuth();
  if (!user) return null;

  return (
    <div>
      <h1>마이페이지</h1>
      <p>{user.name} - 사용자 아이디</p>
      <p>{user.email} - 이메일 주소</p>
      <button onClick={logout}>로그아웃</button>
    </div>
  );
}
