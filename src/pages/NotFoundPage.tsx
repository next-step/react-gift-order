import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Image src="\NotFound.png" alt="404" />
      <Title>잘못된 접근입니다.</Title>
      <Message>찾으시는 페이지가 존재하지 않습니다.</Message>
      <HomeButton onClick={() => navigate('/')}>홈으로</HomeButton>
    </Container>
  );
};

export default NotFoundPage;

// 스타일 정의
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacing.spacing12};
  background-color: ${({ theme }) => theme.colors.gray100};
  height: 100vh;
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: ${({ theme }) => theme.spacing.spacing6};
`;

const Title = styled.h2`
  font: ${({ theme }) => theme.typography.title2Bold};
  color: ${({ theme }) => theme.textColors.default};
  margin-bottom: ${({ theme }) => theme.spacing.spacing2};
`;

const Message = styled.p`
  font: ${({ theme }) => theme.typography.body2Regular};
  color: ${({ theme }) => theme.textColors.sub};
  margin-bottom: ${({ theme }) => theme.spacing.spacing8};
`;

const HomeButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing.spacing3} ${theme.spacing.spacing6}`};
  background-color: ${({ theme }) => theme.sementicColors.kakaoYellow};
  color: #000000;
  font: ${({ theme }) => theme.typography.body2Bold};
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.sementicColors.kakaoYellowHover};
  }

  &:active {
    background-color: ${({ theme }) => theme.sementicColors.kakaoYellowActive};
  }
`;
