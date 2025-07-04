import { useAuth } from "@/features/auth/hooks/useAuth";

import ForbiddenPage from "@/pages/ForbiddenPage";

/**
 * 인증이 필요한 페이지에 접근하기 전 인증상태를 확인하는 컴포넌트입니다
 * 인증되지 않은 사용자는 ForbiddenPage로 리다이렉트됩니다
 */
export const AuthGuard = ({ children }: React.PropsWithChildren) => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) return <ForbiddenPage />;
    else return children;
};
