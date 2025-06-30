import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import TargetSelectionPanel from "./subcomponents/TargetSelectionPanel";
import RankSelectionPanel from "./subcomponents/RankSelectionPanel";
import Card from "./subcomponents/Card";
import { simulatePagenation, type Product } from "@src/mock/productMockData";
import theme from "@src/styles/kakaoTheme";

function RealTimeRankPanel() {
  const [productList, setCardList] = useState<Product[]>([]);
  const [productRenderList, setProductRenderList] = useState<Product[]>([]);
  const [expand, setExpand] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(0);

  //try load next page
  const nextPage = (): void => {
    const nextPage = currentPage + 1;
    const mockList = simulatePagenation(nextPage);
    if (mockList.length) {
      setCurrentPage((prev) => prev + 1);
      setCardList((prev) => [...prev, ...(mockList ?? [])]);
    }
  };

  useEffect(() => {
    nextPage();
  }, []);

  useEffect(() => {
    setProductRenderList(expand ? productList : productList.slice(0, 6));
  }, [expand, productList]);

  return (
    <RealTimeRankPanelWrapper>
      <TitleP>실시간 급상승 선물랭킹</TitleP>
      <TargetSelectionPanel />
      <RankSelectionPanel />
      <CardPlaceHolder>
        {productRenderList.map((p, i) => {
          return <Card key={p.uuid} no={i + 1} prod={p} />;
        })}
      </CardPlaceHolder>
      {expand && (
        <MoreButton
          onClick={() => {
            nextPage();
          }}
        >
          항목 더보기
        </MoreButton>
      )}
      {productList.length > 6 && (
        <ExpandButton
          onClick={() => {
            setExpand(!expand);
          }}
        >
          {expand ? "접기" : "더보기"}
        </ExpandButton>
      )}
    </RealTimeRankPanelWrapper>
  );
}

const TitleP = styled.p`
  width: 95%;
  font-size: 20px;
  font-weight: bold;
`;

const MoreButton = styled.button`
  border: 2px solid ${theme.colors.gray.gray300};
  background-color: transparent;
  border-radius: 10px;
  width: 95%;
  height: 100px;
`;

const ExpandButton = styled.button`
  border: 2px solid ${theme.colors.gray.gray300};
  background-color: transparent;
  border-radius: 10px;
  width: 95%;
  height: 100px;
  margin-bottom: 100px;
`;

const CardPlaceHolder = styled.div`
  padding: 20px;
  gap: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const RealTimeRankPanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: white;
`;

export default RealTimeRankPanel;
