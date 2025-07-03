import { Button } from "@/components/common";
import styled from "@emotion/styled";

//TODO : 디자인은 비슷한데 마진이나 패딩이 조금씩 다른 버튼이 생긴다면 어떻게 처리할지
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
