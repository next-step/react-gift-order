import Banner from '@/components/common/Banner';
import styled from '@emotion/styled';

const BannerSection = () => {
  return (
    <Banner>
      <TopText>카카오테크 캠퍼스 3기 여러분</TopText>
      <BottomText>프론트엔드 2단계 과제 화이팅! 🎉</BottomText>
    </Banner>
  );
};

export default BannerSection;

const TopText = styled.p`
  ${({ theme }) => theme.typography.label.label2Regular};
  color: ${({ theme }) => theme.color.gray[700]};
`;

const BottomText = styled.p`
  ${({ theme }) => theme.typography.label.label1Bold};
  color: ${({ theme }) => theme.color.semantic.text.default};
`;
