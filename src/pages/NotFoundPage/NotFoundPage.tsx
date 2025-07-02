import styled from "@emotion/styled";

const Container = styled.div`
  text-align: center;
  margin-top: 100px;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.title1Bold.fontSize};
  margin-bottom: ${({ theme }) => theme.spacing.spacing4};
`;

const Message = styled.p`
  font-size: ${({ theme }) => theme.typography.body1Regular.fontSize};
  color: ${({ theme }) => theme.colors.gray500};
`;

export default function NotFoundPage() {
  return (
    <Container>
      <Title>404 Not Found</Title>
      <Message>페이지를 찾을 수 없습니다</Message>
    </Container>
  );
}
