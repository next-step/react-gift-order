const ORDER_COMPLETE_TITLE = "주문이 완료되었습니다.";

export const ORDER_MESSAGES = {
  ORDER_COMPLETE_TITLE,
  ORDER_COMPLETE_TEMPLATE: (data: {
    productName: string;
    totalQuantity: number;
    senderName: string;
    cardMessage: string;
  }) => `${ORDER_COMPLETE_TITLE}
상품명: ${data.productName}
구매 수량: ${data.totalQuantity}
발신자 이름: ${data.senderName}
메시지: ${data.cardMessage}`,
} as const;
