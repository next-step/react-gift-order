import styled from '@emotion/styled';

const Wrapper = styled.div`
  width: 100%;
  padding: 0px 1rem;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 360px;
  height: 240px;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 39px 20px -30px;
`;

const SelectedCardImg = styled.img`
  width: 100%;
  height: 100%;
`;

type CardImgProps = {
  selectedImgUrl: string;
};

export const CardImg = ({ selectedImgUrl }: CardImgProps) => {
  return (
    <Wrapper>
      <Container>
        <SelectedCardImg src={selectedImgUrl} />
      </Container>
    </Wrapper>
  );
};
