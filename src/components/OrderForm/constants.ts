export const SENDER_NAME_ERROR = '보내는 사람 이름을 입력해주세요.';
export const RECEIVER_NAME_ERROR = '받는 사람 이름을 입력해주세요.';
export const RECEIVER_PHONE_ERROR = '받는 사람 연락처를 입력해주세요.';
export const PHONE_REGEX_ERROR = '01012341234 형식으로 입력해주세요.';
export const QUANTITY_ERROR = '수량을 입력해주세요.';
export const QUANTITY_MIN_ERROR = '수량은 1개 이상이어야 합니다.';

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
export const RECEIVER_TITLE = '받는 사람';
export const NAME_LABEL = '이름';
export const PHONE_LABEL = '전화번호';
export const QUANTITY_LABEL = '수량';

export const formatOrderButtonText = (price: number) =>
  `${new Intl.NumberFormat('ko-KR').format(price)}원 주문하기`;
