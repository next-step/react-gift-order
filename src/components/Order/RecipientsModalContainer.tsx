import { StyledRecipientsModalContainer } from '@styles/Order/OrderContainer/StyledRecipientsModalContainer';
import styled from '@emotion/styled';

const StyledRecipientsModalContainerBasicLabelDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    border: 1px black solid;
  }
`;
const StyledRecipientsAddModalContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 6px 0px 6px 0px;
  margin: 12px 0px 12px 0px;
  border: 1px black solid;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    border: 1px black solid;
  }
`;

const RecipientsModalContainer = () => {
  return (
    <StyledRecipientsModalContainer className='receive-person background-default'>
      <StyledRecipientsModalContainerBasicLabelDiv>
        <div className='padding-6-12'>
          <p className='title2Bold'>받는 사람</p>
          <button>추가</button>
        </div>
      </StyledRecipientsModalContainerBasicLabelDiv>
      <StyledRecipientsAddModalContainer>
        <div className='padding-6-12'>
          <p className='label2Regular'>받는 사람이 없습니다.</p>
          <p className='label2Regular'>받는 사람을 추가해 주세요</p>
        </div>
      </StyledRecipientsAddModalContainer>
    </StyledRecipientsModalContainer>
  );
};

export default RecipientsModalContainer;
