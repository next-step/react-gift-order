import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  margin: auto;
  background-color: black;
`;

const Header = styled.div`
  color: white;
  font-size: 10rem;
  font-weight: 500;
`;

const Body = styled.div`
  color: white;
  font-size: 2rem;
  font-weight: 500;
  margin-top: 2rem;
`;

const NotFound = () => {
  return (
    <Container>
      <Header>404</Header>
      <Body>NotFound</Body>
    </Container>
  );
};

export default NotFound;
