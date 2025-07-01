import styled from "@emotion/styled";
import { useNavigate } from "react-router";
import TheHeader from "@/components/layout/TheHeader";
import Wrong from "@/components/UI/Wrong";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <>
      <TheHeader />
      <Main>
        <Wrong size={"150px"} />
        <Title>잘못된 접근입니다.</Title>
        <Context>찾으시는 페이지가 존재하지 않습니다.</Context>
        <Button onClick={handleGoHome}>홈으로</Button>
      </Main>
    </>
  );
};

export default NotFoundPage;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 44px);
  padding: ${({ theme }) =>
    `${theme.spacing.spacing16} ${theme.spacing.spacing5}`};
  background-color: ${({ theme }) => theme.colors.gray.gray200};
`;

const Title = styled.h3`
  margin-top: ${({ theme }) => theme.spacing.spacing7};
  color: ${({ theme }) => theme.colors.semantic.text.default};
  font-size: ${({ theme }) => theme.typography.title1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title1Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.title1Bold.lineHeight};
`;

const Context = styled.p`
  margin-top: ${({ theme }) => theme.spacing.spacing2};
  color: ${({ theme }) => theme.colors.gray.gray700};
  font-size: ${({ theme }) => theme.typography.subtitle1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle1Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.subtitle1Regular.lineHeight};
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 48px;
  margin-top: ${({ theme }) => theme.spacing.spacing12};
  color: ${({ theme }) => theme.colors.semantic.text.default};
  background-color: ${({ theme }) => theme.colors.semantic.kakaoYellow};
  font-size: ${({ theme }) => theme.typography.subtitle1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle1Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.subtitle1Regular.lineHeight};
`;
