import { useNavigate } from "react-router";
import styled from "@emotion/styled";
import NotFoundImage from "@/assets/img_not_found.png";
import PageContainer from "@/components/PageContainer";

const NotFound = styled.img`
  width: 150px;
  height: 150px;
  margin-top: ${({ theme }) => theme.spacing.spacing10};
  margin-bottom: ${({ theme }) => theme.spacing.spacing6};
`;

const Error = styled.h1`
  ${({ theme }) => theme.typography.title.title1Bold};
  margin-bottom: ${({ theme }) => theme.spacing.spacing0};
`;

const Message = styled.p`
  ${({ theme }) => theme.typography.body.body1Regular};
  color: ${({ theme }) => theme.color.gray.gray600};
  margin-bottom: ${({ theme }) => theme.spacing.spacing10};
`;

const HomeButton = styled.button`
  ${({ theme }) => theme.typography.title.title2Regular};
  padding: 10px 60px;
  background-color: ${({ theme }) => theme.color.semantic.kakaoYellow};
  color: ${({ theme }) => theme.color.semantic.textDefault};
  border: none;
  cursor: pointer;

  &:active {
    background-color: ${({ theme }) => theme.color.semantic.kakaoYellowPressed};
  }
`;

export default function NotFoundPage() {
    const navigate = useNavigate();
    return (
        <PageContainer>
            <NotFound src={NotFoundImage} alt="not found image" />
            <Error>잘못된 접근입니다.</Error>
            <Message>찾으시는 페이지가 존재하지 않습니다.</Message>
            <HomeButton onClick={() => navigate("/")}>홈으로</HomeButton>
        </PageContainer>
    );
}