import { useState, useEffect } from "react";
import { ImgBox } from "../common/ImgBox";
import { RankingProductList } from "./RankingProductList";
import {
  getRankingProducts,
  type TargetType,
  type RankType,
  type Product,
} from "../../api/product";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/useAuth";

const filterOptions: { id: TargetType; label: string; img: string }[] = [
  { id: "ALL", label: "전체", img: "ALL" },
  { id: "FEMALE", label: "여성이", img: "👩🏻" },
  { id: "MALE", label: "남성이", img: "👱🏻‍♂️" },
  { id: "TEEN", label: "청소년이", img: "🧑🏻‍🎓" },
];

const sortOptions: { id: RankType; label: string }[] = [
  { id: "MANY_WISH", label: "받고 싶어한" },
  { id: "MANY_RECEIVE", label: "많이 선물한" },
  { id: "MANY_WISH_RECEIVE", label: "위시로 받은" },
];

export const SortOptionSection = () => {
  const [activeFilter, setActiveFilter] = useState<TargetType>("ALL");
  const [activeSort, setActiveSort] = useState<RankType>("MANY_WISH");
  const [rankingProducts, setRankingProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    const fetchRanking = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getRankingProducts(activeFilter, activeSort);
        setRankingProducts(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("상품 랭킹을 불러오는 중 알 수 없는 오류가 발생했습니다.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchRanking();
  }, [activeFilter, activeSort]);

  const handleProductClick = (productId: number) => {
    if (isLoggedIn) {
      navigate(`/order/${productId}`);
    } else {
      alert("로그인이 필요합니다.");
      navigate("/login");
    }
  };

  return (
    <div className="w-full bg-white py-4 px-6">
      <div className="flex justify-around items-start mb-6">
        {filterOptions.map((option) => (
          <div key={option.id}>
            <ImgBox
              category={option.label}
              img={option.img}
              isActive={activeFilter === option.id}
              onClick={() => setActiveFilter(option.id)}
            />
          </div>
        ))}
      </div>

      <div className="bg-gray-100 rounded-lg p-3 flex justify-around items-center">
        {sortOptions.map((option) => (
          <button
            key={option.id}
            className={`
              flex-1 py-2 text-sm font-medium rounded-md
              transition duration-200 ease-in-out
              ${
                activeSort === option.id
                  ? "bg-blue-500 text-white"
                  : "text-gray-500 hover:bg-gray-200"
              }
            `}
            onClick={() => setActiveSort(option.id)}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-bold mb-4">현재 랭킹</h3>
        <RankingProductList
          products={rankingProducts}
          loading={loading}
          error={error}
          onProductClick={handleProductClick}
          isNumVisibleOption={true}
        />
      </div>
    </div>
  );
};
