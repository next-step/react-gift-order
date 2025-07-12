type Props = {
    totalPrice: number;
    theme: any;
  };
  
  const PriceSummary = ({ totalPrice, theme }: Props) => {
    return (
      <>
        <div style={{ marginTop: 16 }}>
          <strong>총 금액: {totalPrice.toLocaleString()}원</strong>
        </div>
  
        <button
          type="submit"
          style={{
            width: '100%',
            marginTop: 12,
            padding: 12,
            backgroundColor: theme.colors.semantic.kakaoYellow,
            fontWeight: 'bold',
            borderRadius: 8,
            border: 'none',
            cursor: 'pointer',
          }}
        >
          {totalPrice.toLocaleString()}원 주문하기
        </button>
      </>
    );
  };
  
  export default PriceSummary;
  