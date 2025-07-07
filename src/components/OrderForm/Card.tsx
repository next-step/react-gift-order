import styled from '@emotion/styled';

const Wrapper = styled.div`
  width: 100%;
`;
const Margin1 = styled.div`
  width: 100%;
  height: 12px;
  background-color: transparent;
`;

const Margin2 = styled.div`
  width: 100%;
  height: 40px;
  background-color: transparent;
`;

const Margin3 = styled.div`
  width: 100%;
  height: 32px;
  background-color: transparent;
`;

const CardSelector = styled.div`
  width: 100%;
  position: relative;
`;

const CardImg = styled.div`
  width: 100%;
  padding: 0px 1rem;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
`;

const CardMent = styled.div`
  width: 100%;
  padding: 0px 1rem;
`;

const Card = () => {
  return (
    <Wrapper>
      <Margin1 />
      <CardSelector></CardSelector>
      <Margin1 />
      <CardImg></CardImg>
      <Margin2 />
      <CardMent />
      <Margin3 />
    </Wrapper>
  );
};

export default Card;
