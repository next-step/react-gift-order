import { ROUTE_PATH } from "@/constants";
import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useRouter = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goHomePage = useCallback(() => {
    navigate(ROUTE_PATH.HOME);
  }, [navigate]);

  const goBack = useCallback(() => {
    navigate(ROUTE_PATH.GO_BACK);
  }, [navigate]);

  const goOrderPage = useCallback(
    (id: number) => {
      navigate(ROUTE_PATH.ORDER.replace(":id", id.toString()));
    },
    [navigate],
  );

  const goLoginPage = useCallback(
    ({ redirect }: { redirect?: boolean }) => {
      if (redirect) {
        navigate(
          `${ROUTE_PATH.LOGIN}?redirect=${encodeURIComponent(location.pathname)}`,
        );
      } else {
        navigate(ROUTE_PATH.LOGIN);
      }
    },
    [location.pathname, navigate],
  );
  const goMyPage = useCallback(() => {
    navigate(ROUTE_PATH.MY);
  }, [navigate]);
  return {
    navigate,
    location,
    goHomePage,
    goBack,
    goOrderPage,
    goLoginPage,
    goMyPage,
  };
};
