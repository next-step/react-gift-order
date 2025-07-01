import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <NotFoundContainer>
      <NotFoundtitle>404 Error</NotFoundtitle>
      <div>페이지를 찾을 수 없습니다.</div>
      <div>잘못된 경로입니다.</div>
      <div>다시 시도해주세요.</div>
      <GotoHomeButton onClick={() => navigate('/')}>홈으로 이동</GotoHomeButton>
    </NotFoundContainer>
  );
};

export default NotFound;

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundDefault};
  height: 100vh;
  gap: ${({ theme }) => theme.spacing.spacing2};
`;

const NotFoundtitle = styled.h1`
  ${({ theme }) => `
      font-size: ${theme.font.title1Bold.size};
        font-weight: ${theme.font.title1Bold.weight};
        line-height: ${theme.font.title1Bold.lineHeight};
    `}
  margin-bottom: ${({ theme }) => theme.spacing.spacing2};
`;

const GotoHomeButton = styled.button`
  padding: ${({ theme }) => theme.spacing.spacing2};
  background-color: ${({ theme }) => theme.colors.kakaoYellow};
  border: none;
  border-radius: 8px;
  &:focus {
    outline: none;
  }
`;
