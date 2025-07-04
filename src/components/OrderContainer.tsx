const OrderContainer = () => {
  return (
    <div>
      <div className='order-template-card'>
        <div></div>
        <textarea></textarea>
      </div>
      <div className='send-person'>
        <p>보내는 사람</p>
        <div>
          <p>이름</p>
          <input type='text' className='send-person-name' placeholder='이름을 입력하세요' />
          <p>* 실제 선물 발송시 발신자이름으로 반영되는 정보입니다.</p>
        </div>
      </div>
      <div className='receive-person'>
        <p>받는 사람</p>
        <div>
          <p>이름</p>
          <input type='text' className='send-person-name' placeholder='이름을 입력하세요' />
        </div>
        <div>
          <p>전화번호</p>
          <input type='text' className='send-person-name' placeholder='전화번호를 입력하세요' />
        </div>
        <div>
          <p>수량</p>
          <input type='number' className='send-person-name' placeholder='수량을 입력하세요' />
        </div>
      </div>
      <div className='item-info'>
        <p>상품 정보</p>
        <div></div>
      </div>
    </div>
  );
};
export default OrderContainer;
