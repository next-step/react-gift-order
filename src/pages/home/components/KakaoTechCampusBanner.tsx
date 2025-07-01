import styled from "@emotion/styled";

export const KakaoTechCampusBanner = () => {
  return (
    <Container>
      <SubText>카카오테크 캠퍼스 3기</SubText>
      <MainText>프론트엔드 2단계 과제 화이팅!</MainText>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.brand.kakao.yellow};
  color: ${({ theme }) => theme.colors.colorScale.gray.gray1000};
  padding: 16px;
  margin: 16px;
  border-radius: 12px;
  text-align: left;
`;

const SubText = styled.div`
  color: ${({ theme }) => theme.colors.colorScale.gray.gray800};
  font-size: ${({ theme }) => theme.typography.body2Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.body2Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.body2Regular.lineHeight};
  margin-bottom: 4px;
`;

const MainText = styled.strong`
  display: block;
  font-size: ${({ theme }) => theme.typography.body1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.body1Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.body1Bold.lineHeight};
`;
