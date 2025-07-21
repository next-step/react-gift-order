import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getThemeInfo,
  getThemeProducts,
  type ThemeDetail,
  type ThemeProduct,
} from "../api/theme";
import ProductCard from "../components/common/ProductCard";

export const ThemeProductsPage = () => {
  const { themeId } = useParams<{ themeId: string }>();
  const navigate = useNavigate();

  const [themeDetail, setThemeDetail] = useState<ThemeDetail | null>(null);
  const [products, setProducts] = useState<ThemeProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [cursor, setCursor] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const isNumVisible = false;

  useEffect(() => {
    if (!themeId) {
      setError("테마 ID가 제공되지 않았습니다.");
      setLoading(false);
      return;
    }

    const fetchThemeData = async () => {
      try {
        setLoading(true);
        setError(null);

        const id = parseInt(themeId, 10);

        const [detail, productResponse] = await Promise.all([
          getThemeInfo(id),
          getThemeProducts(id, 0, 10),
        ]);

        setThemeDetail(detail);
        setProducts(productResponse.list);
        setCursor(productResponse.cursor);
        setHasMore(productResponse.hasMoreList);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("테마 정보를 불러오는 중 알 수 없는 오류가 발생했습니다.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchThemeData();
  }, [themeId]);

  const loadMoreProducts = async () => {
    if (!themeId || !hasMore || loading) return;

    try {
      setLoading(true);
      const id = parseInt(themeId, 10);
      const productResponse = await getThemeProducts(id, cursor, 10);

      setProducts((prevProducts) => [...prevProducts, ...productResponse.list]);
      setCursor(productResponse.cursor);
      setHasMore(productResponse.hasMoreList);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("추가 상품을 불러오는 중 오류가 발생했습니다.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleProductClick = (productId: number) => {
    navigate(`/order/${productId}`);
  };

  if (loading && products.length === 0) {
    return (
      <div className="text-center p-10">테마 및 상품 정보를 불러오는 중...</div>
    );
  }

  if (error) {
    return <div className="text-center p-10 text-red-500">오류: {error}</div>;
  }

  if (!themeDetail) {
    return (
      <div className="text-center p-10">테마 정보를 찾을 수 없습니다.</div>
    );
  }

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <div
        className="text-white p-6 rounded-lg mb-6 shadow-md"
        style={{ backgroundColor: themeDetail.backgroundColor || "#60A5FA" }}
      >
        <h1 className="text-3xl font-bold mb-2">
          {themeDetail.title || themeDetail.name}
        </h1>
        <p className="text-lg">{themeDetail.description}</p>
      </div>

      <h2 className="text-2xl font-bold mb-4">
        "{themeDetail.name}" 테마 상품
      </h2>
      {products.length === 0 && !loading && (
        <p className="text-center text-gray-600">
          이 테마에는 현재 상품이 없습니다.
        </p>
      )}
      <div className="grid grid-cols-3  gap-4 justify-items-center">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            ranking={0}
            onClick={() => handleProductClick(product.id)}
            isNumVisible={isNumVisible}
          />
        ))}
      </div>

      {hasMore && (
        <div className="text-center mt-6">
          <button
            onClick={loadMoreProducts}
            disabled={loading}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 disabled:opacity-50"
          >
            {loading ? "로딩 중..." : "더 많은 상품 보기"}
          </button>
        </div>
      )}
    </div>
  );
};
