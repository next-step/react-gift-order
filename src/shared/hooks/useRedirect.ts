import { useLocation, useNavigate } from "react-router-dom";

const REDIRECT_QUERY_KEY = "redirect";

/**
 * @returns navigateWithRedirect, returnToRedirect
 *
 * `navigateWithRedirect()`
 * - 현재 경로를 redirect 쿼리 파라미터로 추가하고 주어진 경로로 이동
 * - `payload` 객체를 추가로 전달할 수 있으며, 이 객체의 키-값 쌍이 쿼리 파라미터로 추가됨
 *
 * `returnToRedirect()`
 * - redirect 쿼리 파라미터가 있는 경우 해당 경로로 이동하고, 없으면 기본 경로로 이동
 * - `fallbackPath`를 지정할 수 있으며, 기본값은 `/`
 *
 * @example 특정 페이지에서 로그인 페이지 후, 로그인 완료시 이전에 방문했던 페이지로 리다이렉트
 * const { navigateWithRedirect } = useRedirect();
 * navigateWithRedirect("/home", { payload: "value" });
 * // 다음 경로로 이동: /auth/signin?redirect=/home&payload=value
 *
 * const { returnToRedirect } = useRedirect();
 * returnToRedirect();
 * // 현재 URL에 redirect 쿼리 파라미터가 있다면 해당 경로로 이동, 없으면 기본 경로(/)로 이동
 */
export const useRedirect = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const currentPath = location.pathname + location.search;

    const navigateWithRedirect = (to: string, payload?: Record<string, Primitive>) => {
        const params = new URLSearchParams({ redirect: currentPath });

        if (payload) {
            for (const [key, value] of Object.entries(payload)) {
                params.set(key, String(value));
            }
        }

        navigate(`${to}?${params.toString()}`);
    };

    const returnToRedirect = (fallbackPath: string = "/") => {
        const params = new URLSearchParams(location.search);
        const redirectPath = params.get(REDIRECT_QUERY_KEY);
        navigate(redirectPath || fallbackPath, { replace: true });
    };

    return { navigateWithRedirect, returnToRedirect };
};
