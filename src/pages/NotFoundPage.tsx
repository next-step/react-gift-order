import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

export function NotFoundPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Container>
      <Title>404</Title>
      <Message>페이지를 찾을 수 없습니다.</Message>
      <HomeButton onClick={handleGoHome}>홈으로 돌아가기</HomeButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: ${({ theme }) => theme.semanticColors.text.default};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.title.title1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title.title1Bold.fontWeight};
  margin-bottom: ${({ theme }) => theme.spacing.spacing5};
`;

const Message = styled.p`
  font-size: ${({ theme }) => theme.typography.title.title1Regular.fontSize};
  margin-bottom: ${({ theme }) => theme.spacing.spacing8};
`;

const HomeButton = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.semanticColors.brand.kakaoYellow};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.semanticColors.brand.kakaoYellowHover};
  }
`;
