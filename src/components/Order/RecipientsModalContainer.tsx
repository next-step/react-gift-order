import { StyledRecipientsModalContainer } from '@styles/Order/OrderContainer/StyledRecipientsModalContainer';
import styled from '@emotion/styled';

const StyledRecipientsModalContainerBasicLabelDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  div {
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 20px;
  }

  p {
    margin-top: 6px;
    width: 90%;
  }
`;
const StyledRecipientsAddModalContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px black solid;
  margin-bottom: 20px;

  div {
    width: 90%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border: 1px black solid;
  }
`;

const RecipientsModalContainer = () => {
  return (
    <StyledRecipientsModalContainer className='receive-person background-default'>
      <StyledRecipientsModalContainerBasicLabelDiv>
        <div>
          <p className='title2Bold'>받는 사람</p>
          <button>추가</button>
        </div>
      </StyledRecipientsModalContainerBasicLabelDiv>
      <StyledRecipientsAddModalContainer>
        <div>
          <p className='label2Regular'>받는 사람이 없습니다.</p>
          <p className='label2Regular'>받는 사람을 추가해 주세요</p>
        </div>
      </StyledRecipientsAddModalContainer>
    </StyledRecipientsModalContainer>
  );
};

export default RecipientsModalContainer;
