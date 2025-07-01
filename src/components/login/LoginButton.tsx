import { Button } from "@/components/common";
import styled from "@emotion/styled";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const StyledLoginButton = styled.div(({ theme }) => ({
  marginTop: `${theme.spacing11}`,
}));

interface LoginButtonProps {
  isDisabled: boolean;
}

export const LoginButton = ({ isDisabled }: LoginButtonProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const handleLoginSuccess = () => {
    if (isDisabled) return;

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
        disabled={isDisabled}
      >
        로그인
      </Button>
    </StyledLoginButton>
  );
};
