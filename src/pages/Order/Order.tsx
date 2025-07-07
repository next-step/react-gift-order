import { useParams } from 'react-router-dom';

function Order() {
  const { orderId } = useParams();
  return (
    <div>
      <div>
        카드컨테이너
        <div>카드썸네일</div>
        <div>카드 이미지</div>
        <div>텍스트 입력</div>
      </div>
      <div>
        보내는 사람
        <div>이름 입력</div>
        <div>* 설명</div>
      </div>
      <div>
        받는 사람
        <div>
          <div>이름</div>
          <div>인풋</div>
        </div>
        <div>
          <div>전화번호</div>
          <div>input</div>
        </div>
        <div>
          <div>수량</div>
          <div>input</div>
        </div>
      </div>
      <div>
        상품정보
        <div>
          회색 보더
          <div>image</div>
          <div>
            <div>이름</div>
            <div>회사</div>
            <div>상품가</div>
          </div>
        </div>
      </div>
      {orderId}
    </div>
  );
}

export default Order;
