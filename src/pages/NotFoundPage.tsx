import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import HomeButton from "@/components/common/BaseButton";
import NotFoundImage from "@/components/common/NotFoundImage";

const NotFoundPage = () => {
  return (
    <Wrapper>
      <NotFoundImage />
      <Title>페이지를 찾을 수 없습니다</Title>
      <Description>
        요청하신 페이지가 존재하지 않거나, 주소가 잘못되었습니다.
      </Description>
      <Link to="/">
        <HomeButton color="yellow" size="large" label="홈으로 이동" />
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 80px 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.title1Regular.fontSize};
  margin-top: 20px;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.body2Regular.fontSize};
  color: ${({ theme }) => theme.colors.gray600};
  margin-bottom: 24px;
`;

export default NotFoundPage;
