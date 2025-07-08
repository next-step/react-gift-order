import styled from "@emotion/styled";
import notFound from "@/assets/not-found-image.png";
import { Button } from "@/components/common";
import { useCallback } from "react";
import { useRouter } from "@/hooks/common/useRouter";

const NotFoundSectionContainer = styled.section(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: `${theme.color.gray[200]}`,
  width: "100%",
  height: "100vh",
}));

const NotFoundStyledImage = styled.img(({ theme }) => ({
  display: "flex",
  width: "150px",
  height: "150px",
  objectFit: "contain",
  padding: `${theme.spacing2}`,
}));

const NotFoundTitle = styled.p(({ theme }) => ({
  fontSize: `${theme.typography.title1Bold.fontSize}`,
  fontWeight: `${theme.typography.title1Bold.fontWeight}`,
  lineHeight: `${theme.typography.title1Bold.lineHeight}`,
  color: `${theme.color.gray[900]}`,
  textAlign: "center",
  padding: `${theme.spacing2}`,
}));

const NotFoundDescription = styled.p(({ theme }) => ({
  fontSize: `${theme.typography.title2Regular.fontSize}`,
  fontWeight: `${theme.typography.title2Regular.fontWeight}`,
  lineHeight: `${theme.typography.title2Regular.lineHeight}`,
  color: `${theme.color.gray[700]}`,
  padding: `${theme.spacing2}`,
}));

export const NotFound = () => {
  const { goHomePage } = useRouter();

  const handleNavigateToHome = useCallback(() => {
    goHomePage();
  }, [goHomePage]);

  return (
    <NotFoundSectionContainer>
      <NotFoundStyledImage src={notFound} alt="페이지를 찾을 수 없습니다" />
      <NotFoundTitle>잘못된 접근입니다.</NotFoundTitle>
      <NotFoundDescription>
        찾으시는 페이지가 존재하지 않습니다.
      </NotFoundDescription>
      <Button
        variant="primary"
        size="large"
        width="160px"
        onClick={handleNavigateToHome}
      >
        홈으로
      </Button>
    </NotFoundSectionContainer>
  );
};
