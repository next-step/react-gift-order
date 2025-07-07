import { useParams } from 'react-router-dom';

const OrderPage = () => {
  const { id } = useParams();
  return (
    <main>
      <h1>주문하기 페이지</h1>
      <p>상품 ID: {id}</p>
    </main>
  );
};

export default OrderPage;
