import { useAuth } from '@/contexts/AuthContext';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function OrderPage() {
  const { user } = useAuth();
  const { productId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!user) {
      navigate(`/login?from=${encodeURIComponent(location.pathname)}`);
    }
  }, [user, navigate, location.pathname]);

  if (!user) return null;

  return (
    <div>
      주문하기 페이지입니다. (상품 ID: {productId}){/* 주문 폼 등 추가 */}
    </div>
  );
}

export default OrderPage;
