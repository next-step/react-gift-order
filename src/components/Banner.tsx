import styled from '@emotion/styled';

export default function Banner() {
  return (
    <Wrapper>
      <BannerBox>
        <TopText>카카오테크 캠퍼스 3기 여러분</TopText>
        <BottomText>프론트엔드 2단계 과제 화이팅! 🎉</BottomText>
      </BannerBox>
    </Wrapper>
  );
}

const spacing = "16px";

const Wrapper = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.default};
  padding: ${spacing} 0;
  margin: 0 auto;
  padding: 0 ${spacing};
  box-sizing: border-box;
`;


const BannerBox = styled.div`
  background-color: ${({ theme }) => theme.colors.kakao.yellow.default};
  border-radius: ${spacing};
  padding: ${spacing};
`;

const TopText = styled.p`
  ${({ theme }) => theme.typography.label2Regular};
  color: ${({ theme }) => theme.colors.text.placeholder};
`;

const BottomText = styled.p`
  ${({ theme }) => theme.typography.subtitle2Bold};
  color: ${({ theme }) => theme.colors.text.default};
`;
