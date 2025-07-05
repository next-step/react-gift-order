import { useNavigate } from "react-router-dom";

import { useAuth } from "@/features/auth/hooks/useAuth";

export default function MyPage() {
    const navigate = useNavigate();
    const { nickname, email, signOut } = useAuth();

    const onSignOut = () => {
        // TODO: 로그아웃 처리 후 forbidden 잠깐 보이고 홈으로 리다이렉트 되는데 왜이러지..
        signOut();
        navigate("/");
    };

    return (
        <div>
            <h1>마이페이지</h1>
            <p>{nickname} 님 안녕하세요!</p>
            <p>이메일 주소는 {email} 입니다.</p>

            <button onClick={() => onSignOut()}>로그아웃</button>
        </div>
    );
}
