interface OrderButtonProps {
  quantity: string;
  totalPrice: number;
  productName: string;
  sender: string;
  message: string;
}

const OrderButton = ({
  quantity,
  totalPrice,
  productName,
  sender,
  message,
}: OrderButtonProps) => {
  const numericQuantity = parseInt(quantity, 10);

  const isButtonDisabled = numericQuantity <= 0 || isNaN(numericQuantity);

  const handleOrderClick = () => {
    if (isButtonDisabled) {
      return;
    }
    alert(
      `주문이 완료 되었습니다. \n 상품명: ${productName} \n 구매 수량: ${quantity}\n 발신자 이름 ${sender}\n 메시지:${message}`
    );
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center bg-white p-4 shadow-top">
      <button
        className={`
          bg-yellow-400 text-black rounded-lg shadow-md w-full max-w-lg px-8 py-3 text-lg font-bold
          ${
            isButtonDisabled
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-yellow-500"
          }
        `}
        onClick={handleOrderClick}
        disabled={isButtonDisabled}
      >
        {`${totalPrice.toLocaleString()}원 구매하기 (${quantity}개)`}
      </button>
    </div>
  );
};

export default OrderButton;
