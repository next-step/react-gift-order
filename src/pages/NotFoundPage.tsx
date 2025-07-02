import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Section } from '@/components/layout';
import { Button } from '@/components/common';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${(props) => props.theme.spacing.spacing8}
    ${(props) => props.theme.spacing.spacing4};
  min-height: 60vh;
  justify-content: center;
  text-align: center;
`;

const ErrorCode = styled.div`
  font-size: 72px;
  font-weight: ${(props) => props.theme.typography.title1Bold.fontWeight};
  color: ${(props) => props.theme.semanticColors.kakaoYellow};
  margin-bottom: ${(props) => props.theme.spacing.spacing4};
  line-height: 1;
`;

const ErrorTitle = styled.h1`
  font-size: ${(props) => props.theme.typography.title2Bold.fontSize};
  font-weight: ${(props) => props.theme.typography.title2Bold.fontWeight};
  color: ${(props) => props.theme.semanticColors.text.default};
  margin-bottom: ${(props) => props.theme.spacing.spacing3};
  margin: 0 0 ${(props) => props.theme.spacing.spacing3} 0;
`;

const ErrorMessage = styled.p`
  font-size: ${(props) => props.theme.typography.body1Regular.fontSize};
  color: ${(props) => props.theme.semanticColors.text.sub};
  margin-bottom: ${(props) => props.theme.spacing.spacing8};
  margin: 0 0 ${(props) => props.theme.spacing.spacing8} 0;
  line-height: 1.5;
`;

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/', { replace: true });
  };

  return (
    <Section>
      <NotFoundContainer>
        <ErrorCode>404</ErrorCode>
        <ErrorTitle>페이지를 찾을 수 없습니다</ErrorTitle>
        <ErrorMessage>
          요청하신 페이지가 존재하지 않거나
          <br />
          일시적으로 사용할 수 없습니다.
        </ErrorMessage>
        <Button variant="primary" size="lg" onClick={handleGoHome}>
          홈으로 돌아가기
        </Button>
      </NotFoundContainer>
    </Section>
  );
};

export default NotFoundPage;
