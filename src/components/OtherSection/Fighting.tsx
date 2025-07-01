/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

export default function Fighting() {
  return (
    <Wrapper>
      <Card>
        <AudienceText>카카오테크 캠퍼스 3기여러분</AudienceText>
        <MotivationText>프론트엔드 2단계 과제 화이팅! 🎉</MotivationText>
      </Card>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.default};
  padding: 12px 12px;
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.kakaoYellow};
  border-radius: 20px;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
`;

const AudienceText = styled.p`
  font-size: 13px;
  font-weight: ${({ theme }) => theme.typography.subtitle1Regular.fontWeight};
  color: ${({ theme }) => theme.colors.gray600};
  line-height: 1.3;
  margin: 10px;
`;

const MotivationText = styled.p`
  font-size: ${({ theme }) => theme.typography.subtitle1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle1Regular.fontWeight};
  color: ${({ theme }) => theme.colors.textDefault};
  line-height: 1.3;
  margin: 10px;
`;
