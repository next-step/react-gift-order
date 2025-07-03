import NavigationBar from '@/components/NavigationBar';
import styled from '@emotion/styled';
import { useLoginForm } from '@/hooks/useLoginForm';
import { useNavigate } from 'react-router-dom';

const StyledLoginComponentContainerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLoginComponentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vh;
`;

const StyledKakoLogo = styled.div`
  ${({ theme }) => theme.typography.title2Bold}
  margin: ${({ theme }) => theme.spacing.spacing11};
  font-size: 30px;
`;

const StyledInput = styled.input`
  border: none;
  border-style: solid;
  border-color: ${({ theme }) => theme.palette.gray400};
  border-width: 0px 0px 1px;
  padding: ${({ theme }) => theme.spacing.spacing4};
  width: 52%;
  min-height: 20px;
`;

const StyledButton = styled.button`
  margin-top: ${({ theme }) => theme.spacing.spacing12};
  background-color: ${({ theme }) => theme.sementicPalette.kakaoYellow};
  border: 1px solid ${({ theme }) => theme.sementicPalette.kakaoYellow};
  border-radius: 4px;
  width: 52%;
  height: 40px;
  a {
    text-decoration: none;
  }
`;

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handelBackOrHome = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  const { id, idError, handleIdBlur, handleIdChange } = useLoginForm();
  return (
    <>
      <NavigationBar />
      <StyledLoginComponentContainerDiv>
        <StyledLoginComponentDiv>
          <StyledKakoLogo>kakao</StyledKakoLogo>
          <StyledInput
            type='text'
            value={id}
            onChange={handleIdChange}
            onBlur={handleIdBlur}
            id='loginid'
            placeholder='이메일'
          ></StyledInput>
          {idError && <p>{idError}</p>}
          <StyledInput type='password' id='passwd' placeholder='비밀번호'></StyledInput>
          <StyledButton onClick={handelBackOrHome}>로그인</StyledButton>
        </StyledLoginComponentDiv>
      </StyledLoginComponentContainerDiv>
    </>
  );
};

export default Login;
