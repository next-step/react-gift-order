import { useNavigate, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';

const Button = styled.button<{disabled: boolean}>`
    width: 60%;
    height: 2.75rem;
    font-size: 0.875rem;
    font-weight: 400;
    background-color: ${({ theme }) => theme.color.yellow.yellow600};
    border-radius: 4px;
    border: none;
    outline: none;
    cursor: pointer;
    margin-top: 48px;

`

interface LoginButtonProps {
  disabled: boolean;
}

const LoginButton = ({ disabled }: LoginButtonProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleLogin = () => {
    if (!disabled) {
      navigate(from, { replace: true });
    }
  };

  return <Button disabled={disabled} onClick={handleLogin}>로그인</Button>;
};

export default LoginButton;