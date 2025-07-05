import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Navigation } from "@/components/header/Navigation";
import type { RankingList } from "@/mock/rankingList";
import { rankingList } from "@/mock/rankingList";
import styled from "@emotion/styled";

type OrderPageParams = {
  id: string;
};

const OrderPage = () => {
  const { id } = useParams<OrderPageParams>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<RankingList | null>(null);

  useEffect(() => {
    const fetchProduct = () => {
      const found = rankingList.find((item) => item.id === Number(id));
      if (!found) {
        navigate("/not-found", { replace: true });
      } else {
        setProduct(found);
      }
    };

    fetchProduct();
  }, [id, navigate]);

  if (!product) return null;

  return (
    <PageContainer>
      <Navigation />
      <Wrapper>
        <Image src={product.imageURL} alt={product.name} />
        <Info>
          <h2>{product.name}</h2>
          <p>브랜드: {product.brandInfo.name}</p>
          <strong>{product.price.sellingPrice.toLocaleString()}원</strong>
        </Info>
      </Wrapper>
    </PageContainer>
  );
};

export default OrderPage; 

const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > h2 {
    ${({ theme }) => theme.typography.subtitle1Bold};
  }

  & > p {
    ${({ theme }) => theme.typography.body1Regular};
    margin: 1rem 0;
  }

  & > strong {
    ${({ theme }) => theme.typography.subtitle1Bold};
    color: ${({ theme }) => theme.colors.kakaoBrown};
  }
`;
