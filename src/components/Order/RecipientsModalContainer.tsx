import { StyledReceivePersonContainer } from '@/styles/Order/OrderContainer/StyledReceivePersonContainer';

const RecipientsModalContainer = () => {
  return (
    <StyledReceivePersonContainer className='receive-person background-default'>
      <div>
        <div>
          <p className='title2Bold'>받는 사람</p>
        </div>
        <div>
          <p className='basic-label'>이름</p>
        </div>
      </div>
    </StyledReceivePersonContainer>
  );
};

export default RecipientsModalContainer;
{
  /* <StyledReceivePersonContainer className='receive-person background-default'>
          <div>
            <p className='title2Bold'>받는 사람</p>
          </div>
          <div>
            <p className='basic-label'>이름</p>
            <SyltedOrderInput
              type='text'
              name='receiveName'
              className='send-person-name body2Regular'
              placeholder='이름을 입력하세요'
              value={receiveName}
              onChange={handleCommonChange}
              hasError={!!commonErrorMsgs[1]}
            />
          </div>
          {commonErrorMsgs[1] && <ErrorMsg>{commonErrorMsgs[1]}</ErrorMsg>}
          <div>
            <p className='basic-label'>전화번호</p>
            <SyltedOrderInput
              type='text'
              name='receiveTel'
              className='send-person-name body2Regular'
              placeholder='전화번호를 입력하세요'
              value={receiveTel}
              onChange={(e) => handleCommonChange(e)}
              hasError={!!commonErrorMsgs[2]}
            />
          </div>
          {commonErrorMsgs[2] && <ErrorMsg>{commonErrorMsgs[2]}</ErrorMsg>}
          <div>
            <p className='basic-label'>수량</p>
            <SyltedOrderInput
              type='number'
              name='count'
              className='send-person-name body2Regular'
              placeholder='수량을 입력하세요'
              min='1'
              value={count}
              onChange={handleCommonChange}
              hasError={!!commonErrorMsgs[3]}
            />
          </div>
          {commonErrorMsgs[3] && <ErrorMsg>{commonErrorMsgs[3]}</ErrorMsg>}
        </StyledReceivePersonContainer> */
}
