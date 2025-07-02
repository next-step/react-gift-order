import { Button } from "@/components/common";
import styled from "@emotion/styled";

const StyledLoginButton = styled.div(({ theme }) => ({
  marginTop: `${theme.spacing11}`,
}));

interface LoginButtonProps {
  isDisabled: boolean;
  onClick: () => void;
}

export const LoginButton = ({ isDisabled, onClick }: LoginButtonProps) => {
  return (
    <StyledLoginButton>
      <Button
        variant="primary"
        size="large"
        width="390px"
        onClick={onClick}
        disabled={isDisabled}
      >
        로그인
      </Button>
    </StyledLoginButton>
  );
};
