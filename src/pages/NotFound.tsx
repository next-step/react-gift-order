import Container from "@/components/common/Container";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "@/components/routes/Routes";
import Button from "@/components/common/Button";

const NOT_FOUND_IMG_URL = "https://gift-s.kakaocdn.net/dn/gift/webapp/images/m640/img_not_found.png";

const NotFound = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate(ROUTE_PATH.HOME);
  };
  return (
    <Container>
      <Content>
        <Img alt={"Not Found"} src={NOT_FOUND_IMG_URL} />
        <Wrapper>
          <Title>잘못된 접근입니다.</Title>
          <Msg>찾으시는 페이지가 존재하지 않습니다.</Msg>
        </Wrapper>
        <Button onClick={goHome}>홈으로</Button>
      </Content>
    </Container>
  );
};

const Content = styled.div`
  background-color: ${({ theme }) => theme.color.backgroundColor.disabled};
  width: 100%;
  height: calc(100vh - 45px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.spacing14};
`;
const Img = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.spacing3};
`;
const Title = styled.h3`
  font: ${({ theme }) => theme.typography.title1Bold};
`;
const Msg = styled.p`
  font: ${({ theme }) => theme.typography.body1Regular};
  color: ${({ theme }) => theme.color.gray700};
`;

export default NotFound;
