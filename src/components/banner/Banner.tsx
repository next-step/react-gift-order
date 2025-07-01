import styled from "@emotion/styled";

const BannerWrapper = styled.section`
  padding: 0 ${({ theme }) => theme.spacing.spacing2};
`;
const BannerBox = styled.div`
  width: 100%;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.yellow.yellow600};
  padding: ${({ theme }) => theme.spacing.spacing4};
  display: flex;
  flex-direction: column;
`;
const BannerText = styled.p`
  ${({ theme }) => theme.typography.subtitle2Bold};
`;
const BannerSubText = styled.p`
  ${({ theme }) => theme.typography.label2Regular}
  color: ${({ theme }) => theme.colors.gray.gray700};
`;

const Banner = () => {
  return (
    <BannerWrapper>
      <BannerBox>
        <BannerSubText>카카오테크 캠퍼스 3기 여러분</BannerSubText>
        <BannerText>프론트엔드 2단계 화이팅!🎉</BannerText>
      </BannerBox>
    </BannerWrapper>
  );
};

export default Banner;
