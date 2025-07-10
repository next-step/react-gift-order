export const SENDER_NAME_ERROR = '보내는 사람 이름을 입력해주세요.';

export const ORDER_SUCCESS_MESSAGE = (
  productName: string,
  quantity: number,
  senderName: string,
  message: string,
) =>
  `주문이 완료되었습니다.
상품명: ${productName}
구매 수량: ${quantity}
발신자 이름: ${senderName}
메시지: ${message}`;

export const SENDER_TITLE = '보내는 사람';
export const SENDER_HINT = '* 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.';

export const formatOrderButtonText = (price: number) =>
  `${new Intl.NumberFormat('ko-KR').format(price)}원 주문하기`;
