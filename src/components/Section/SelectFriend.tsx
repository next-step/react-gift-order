import styled from '@emotion/styled';

const Wrapper = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.color.semantic.background.default};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 20px;
  padding: 30px;
  background-color: ${({ theme }) => theme.color.yellow.yellow600};
`;

const Text = styled.div`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.1875rem;
  color: rgb(42, 48, 56);
  margin: 0;
  text-align: left;
`;

const Banner = () => {
  return (
    <Wrapper>
      <Container>
        <Text>프론트엔드 2단계 과제 화이팅!</Text>
      </Container>
    </Wrapper>
  );
};

export default Banner;
