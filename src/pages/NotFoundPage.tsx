import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navigation />
      <Wrapper>
        <Image
          src="https://gift-s.kakaocdn.net/dn/gift/webapp/images/m640/img_not_found.png"
          alt="not found"
        />
        <Spacer />
        <Title>잘못된 접근입니다.</Title>
        <Spacer />
        <Message>찾으시는 페이지가 존재하지 않습니다.</Message>
        <Spacer />
        <HomeButton onClick={() => navigate('/')}>홈으로</HomeButton>
      </Wrapper>
    </>
  );
};

export default NotFoundPage;

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.color.gray[300]};
  padding: ${({ theme }) => theme.spacing[8]};
  min-height: 100vh;
`;

const Image = styled.img`
  width: 150px;
  height: auto;
`;

const Spacer = styled.div`
  height: ${({ theme }) => theme.spacing[4]};
`;

const Title = styled.h3`
  ${({ theme }) => theme.typography.title.title2Bold};
  color: ${({ theme }) => theme.color.semantic.text.default};
`;

const Message = styled.p`
  ${({ theme }) => theme.typography.body.body2Regular};
  color: ${({ theme }) => theme.color.gray[700]};
`;

const HomeButton = styled.button`
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[6]};
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.semantic.kakaoYellow};
  color: ${({ theme }) => theme.color.gray[900]};
  font-weight: 600;
  cursor: pointer;
`;
