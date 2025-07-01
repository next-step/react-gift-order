import theme from '@/styles/theme';
import styled from '@emotion/styled';

const BannerSection = styled.section`
  padding: 0px 16px;
`;

const BannerTextWrapper = styled.div`
  width: 100%;
  border-radius: 1rem;
  background-color: ${theme.colors.yellow600};
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

const BannerSub = styled.p`
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1rem;
    color: ${theme.colors.text_sub};
    margin: 0px;
    text-align: left;
`;
const BannerMain = styled.p`
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.1875rem;
    color: ${theme.colors.text_default};
    margin: 0px;
    text-align: left;
`;
const Banner = () => {
  return (
    <BannerSection>
      <BannerTextWrapper>
        <BannerSub>카카오테크 캠퍼스 3기여러분</BannerSub>
        <BannerMain>프론트엔드 2단계 과제 화이팅! 🎉</BannerMain>
      </BannerTextWrapper>
    </BannerSection>
  );
};

export default Banner