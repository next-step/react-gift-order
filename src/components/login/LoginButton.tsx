import { Button } from "@/components/common";
import styled from "@emotion/styled";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const StyledLoginButton = styled.div(({ theme }) => ({
  marginTop: `${theme.spacing11}`,
}));

export const LoginButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const handleLoginSuccess = () => {
    const previousPage = location.state?.from;
    const redirectPath = previousPage || searchParams.get("redirect") || "/";
    navigate(redirectPath);
  };

  return (
    <StyledLoginButton>
      <Button
        variant="primary"
        size="large"
        width="390px"
        onClick={handleLoginSuccess}
      >
        로그인
      </Button>
    </StyledLoginButton>
  );
};
