import { useNavigate } from "react-router-dom";

import { Button } from "@/shared/ui";

export default function ForbiddenPage() {
    const navigate = useNavigate();

    // TODO: 마이페이지 접속했을때 권한이 없습니다 vs 로그인이 필요한 페이지입니다
    return (
        <div>
            <h1>권한이 없습니다</h1>
            <Button variant="primary" width="200px" height="44px" onClick={() => navigate(-1)}>
                이전 페이지로
            </Button>
        </div>
    );
}
