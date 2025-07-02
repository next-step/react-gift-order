import styled from '@emotion/styled';

const BannerSection = () => {
  return (
    <BannerWrapper>
      <BannerText>
        부산대학교 Front-end 성민기<br />
        <strong>카카오테크캠퍼스 화이팅! 🎉</strong>
      </BannerText>
    </BannerWrapper>
  );
};

export default BannerSection;

const BannerWrapper = styled.div`
  margin: 24px 16px 0;
  padding: 16px 20px;
  border-radius: 24px;
  background-color: #ffe100;
`;

const BannerText = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: #000;
  line-height: 1.5;
`;
