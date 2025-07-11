import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  padding: 0px 1rem;
`;

const ButtonArea = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  gap: 12px;
  width: 100%;
`;
const P = styled.p`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5rem;
  color: rgb(42, 48, 56);
  margin: 0px;
  text-align: left;
`;

const Button = styled.button`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5rem;
  color: rgb(42, 48, 56);
  margin: 0px;
  text-align: left;
`;

const MainArea = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  padding: 24px;
  border: 1px solid rgb(238, 239, 241);
  border-radius: 8px;

  p {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.1875rem;
    color: rgb(176, 179, 186);
    margin: 0px;
  }
`;

interface ReceiverFieldProps {
  onClick: () => void; // 인자 없고, 반환값 없음
}

const ReceiverField = ({ onClick }: ReceiverFieldProps) => {
  return (
    <>
      <Container>
        <ButtonArea>
          <P>받는사람</P>
          <Button onClick={onClick}>추가</Button>
        </ButtonArea>
        <MainArea>
          <p>
            받는 사람이 없습니다.
            <br />
            받을 사람을 추가해주세요.
          </p>
        </MainArea>
      </Container>
    </>
  );
};
export default ReceiverField;
