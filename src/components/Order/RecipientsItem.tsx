const RecipientsItem = () => {
  return (
    <div>
      <p>받는 사람</p>
      <button>취소</button>
      <div>
        <p>이름</p>
        <input type='text' placeholder='이름을 입력하세요' />
      </div>
      <div>
        <p>전화번호</p>
        <input type='text' placeholder='전화번호를 입력하세요' />
      </div>
      <div>
        <p>수량</p>
        <input type='number' min='1' placeholder='수량을 입력하세요' />
      </div>
    </div>
  );
};

export default RecipientsItem;
