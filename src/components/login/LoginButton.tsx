import Text from '@/common/Text';
import styled from '@emotion/styled';

type LoginButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

const LoginButton = ({
  type = 'button',
  disabled = false,
}: LoginButtonProps) => {
  return (
    <StyledButton type={type} disabled={disabled}>
      <Text size="label1" weight="regular">
        로그인
      </Text>
    </StyledButton>
  );
};

export default LoginButton;

const StyledButton = styled.button`
  margin-top: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.kakaoYellow};
  width: 100%;
  height: 44px;
  border: none;
  cursor: pointer;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.kakaoYellow};
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
