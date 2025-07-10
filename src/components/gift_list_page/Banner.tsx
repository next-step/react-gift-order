import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
  background-color: white;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: calc(100% - ${({ theme }) => theme.spacing.spacing8});
  height: calc(100% - ${({ theme }) => theme.spacing.spacing3});
  margin-top: ${({ theme }) => theme.spacing.spacing3};
  margin-left: ${({ theme }) => theme.spacing.spacing4};
  margin-right: ${({ theme }) => theme.spacing.spacing4};
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.yellow600};
`;

const Text1 = styled.div`
  ${({ theme }) => theme.typography.label2Regular};
  color: ${({ theme }) => theme.colors.gray700};
  margin-left: ${({ theme }) => theme.spacing.spacing4};
`;

const Text2 = styled.div`
  ${({ theme }) => theme.typography.label1Bold};
  color: black;
  margin-left: ${({ theme }) => theme.spacing.spacing4};
`;

export const Banner = () => {
  return (
    <Container>
      <Body>
        <Text1>카카오테크 캠퍼스 3기여러분</Text1>
        <Text2>프론트엔드 2단계 과제 화이팅! 🎉</Text2>
      </Body>
    </Container>
  );
};
