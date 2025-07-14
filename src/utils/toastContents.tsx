export function renderOrderSuccessToast(
  itemName: string,
  count: number,
  sender: string,
  message: string,
) {
  return (
    <div>
      <div>주문이 완료되었습니다.</div>
      <div>상품명: {itemName}</div>
      <div>구매 수량: {count}</div>
      <div>발신자 이름: {sender}</div>
      <div>메시지: {message}</div>
    </div>
  )
}
