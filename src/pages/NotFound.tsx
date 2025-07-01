import Navbar from '@/components/navbar/Navbar';
import styled from '@emotion/styled'
import { PaddingSm, PaddingMd, PaddingLg } from "@/components/padding/Padding";
const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: calc(-2.75rem + 100vh);
  padding: 5rem 1.25rem;
  background-color: ${({ theme }) => theme.colors.background.disabled};
`;
const WarningImg = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
`;
const WarnigText = styled.h3`
  ${({ theme }) => theme.typography.title1Bold}
  color:${({theme})=>theme.colors.gray.gray900}
`;
const WarningSubText = styled.p`
  ${({ theme }) => theme.typography.body1Regular}
  color:${({ theme }) => theme.colors.gray.gray700}
`;
const HomeBtn = styled.button`
  width: 160px;
  height: 48px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.yellow.yellow600};
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.typography.body1Regular}
`;
const NotFound = () => {
  return (
    <>
      <Navbar />
      <MainSection>
        <WarningImg src="src/assets/images/notFound/img_not_found.png" alt="" />
        <PaddingMd />
        <WarnigText>잘못된 접근입니다.</WarnigText>
        <PaddingSm />
        <WarningSubText>찾으시는 페이지가 존재하지 않습니다.</WarningSubText>
        <PaddingLg />
        <HomeBtn>홈으로</HomeBtn>
      </MainSection>
    </>
  );
}

export default NotFound
