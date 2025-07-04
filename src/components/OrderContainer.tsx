import StyledTopestDiv from '@/styles/StyledTopesDiv';
import styled from '@emotion/styled';

const StyledOrderCardContainer = styled.div`
  width: 100%;
  height: 300px;
  border: 1px black solid;
`;
const StyledSendPersonContainer = styled.div`
  width: 100%;
  border: 1px black solid;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px 0px;

  input {
    padding: 3px 8px;
    margin: 5px 10px;
    height: 30px;
    ${({ theme }) => theme.typography.body1Regular}
  }
  p {
    margin: 5px 10px;
  }
  .margin-left-20 {
    margin-left: 20px;
  }
`;
const StyledReceivePersonContainer = styled.div`
  width: 100%;
  border: 1px black solid;
  margin-top: 10px;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 5px 10px;
    gap: 14px;
  }
  p {
    width: 80px;
  }
`;

const SyltedOrderInput = styled.input`
  padding: 8px 12px;
  width: 100%;
`;

const StyledItemInfoContainer = styled.div`
  width: 100%;
  height: 150px;
  border: 1px black solid;
  margin-top: 10px;
`;

const OrderContainer = () => {
  return (
    <StyledTopestDiv>
      <StyledOrderCardContainer className='order-template-card'>
        <div></div>
        <textarea></textarea>
      </StyledOrderCardContainer>
      <StyledSendPersonContainer className='send-person'>
        <p className='body2subtitle'>보내는 사람</p>
        <input
          type='text'
          className='send-person-name'
          placeholder='이름을 입력하세요'
        />
        <p className='margin-left-20'>
          * 실제 선물 발송시 발신자이름으로 반영되는 정보입니다.
        </p>
      </StyledSendPersonContainer>
      <StyledReceivePersonContainer className='receive-person'>
        <div>
          <p>받는 사람</p>
        </div>
        <div>
          <p>이름</p>
          <SyltedOrderInput
            type='text'
            className='send-person-name'
            placeholder='이름을 입력하세요'
          />
        </div>
        <div>
          <p>전화번호</p>
          <SyltedOrderInput
            type='text'
            className='send-person-name'
            placeholder='전화번호를 입력하세요'
          />
        </div>
        <div>
          <p>수량</p>
          <SyltedOrderInput
            type='number'
            className='send-person-name'
            placeholder='수량을 입력하세요'
            min='1'
          />
        </div>
      </StyledReceivePersonContainer>
      <StyledItemInfoContainer className='item-info'>
        <p>상품 정보</p>
        <div></div>
      </StyledItemInfoContainer>
    </StyledTopestDiv>
  );
};
export default OrderContainer;
