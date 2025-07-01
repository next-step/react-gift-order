/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const Wrapper = styled.section`
  padding: 0 16px;
`;

const Message = styled.div`
  width: 100%;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.kakaoYellow};
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  margin: 0;
  text-align: left;
  color: ${({ theme }) => theme.colors.textSub};
  ${({ theme }) => theme.typography.label2Regular};
`;

const Subtitle = styled.p`
  margin: 0;
  text-align: left;
  color: ${({ theme }) => theme.colors.textDefault};
  ${({ theme }) => theme.typography.body2Bold};
`;

export const MessageBanner = () => {
  return (
    <Wrapper>
      <Message>
        <Title>카카오테크 캠퍼스 3기 여러분</Title>
        <Subtitle>프론트엔드 2단계 과제 화이팅! 🎉</Subtitle>
      </Message>
    </Wrapper>
  );
};
