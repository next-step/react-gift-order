import { PaddingMd } from "../padding/Padding";
import styled from "@emotion/styled";
import RankingItem from "./RankingItem";
import { PaddingLg } from "./../padding/Padding";
import PersonCategory from "./PersonCategory";
import BehaviorCategory from "./BehaviorCategory";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  BEHAVIOR_FILTER_LABELS,
  PERSON_FILTER_LABELS,
  type BehaviorFilterLabels,
  type PersonFilterLabels,
} from "./types";

//필터 옵션
const personFilterOptions: { label: PersonFilterLabels; emoji: string }[] = [
  { label: "전체", emoji: "All" },
  { label: "남자가", emoji: "👨🏻" },
  { label: "여자가", emoji: "👩🏻" },
  { label: "청소년이", emoji: "👦🏻" },
] as const;

const behaviorOptions: BehaviorFilterLabels[] = [
  "받고 싶어한",
  "많이 선물한",
  "위시로 받은",
] as const;

//mockdata
const mockRankingProducts = {
  id: 123,
  name: "BBQ 양념치킨+크림치즈볼+콜라1.25L",
  imageURL:
    "https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg",
  price: {
    basicPrice: 29_000,
    discountRate: 0,
    sellingPrice: 29_000,
  },
  brandInfo: {
    id: 2088,
    name: "BBQ",
    imageURL:
      "https://st.kakaocdn.net/product/gift/gift_brand/20220216170226_38ba26d8eedf450683200d6730757204.png",
  },
};
const allProducts = Array.from({ length: 21 }, (_, i) => ({
  ...mockRankingProducts,
  id: i + 1,
}));
//스타일링
const RankingWrapper = styled.section`
  align-items: left;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.spacing4} ${({ theme }) => theme.spacing.spacing3};
`;
const RankingTitle = styled.h3`
  ${({ theme }) => theme.typography.title1Bold};

  color: ${({ theme }) => theme.colors.gray.gray900};
`;

const RankingProducts = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.spacing6}   ${({ theme }) => theme.spacing.spacing2};
`;
const ShowMoreBtn = styled.button`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray.gray400};
  padding: ${({ theme }) => theme.spacing.spacing4};
`;

const Ranking = () => {
  const [showAll, setShowAll] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const Q_Person = searchParams.get("targetType");
  const Q_Behavior = searchParams.get("rankType");
//쿼리 파라미터로 받은 값이 정의된 labels 타입에 있는지(유효성 체크)
  const isValidPersonLabel = (val: string): val is PersonFilterLabels =>
    PERSON_FILTER_LABELS.includes(val as PersonFilterLabels);
  const isValidBehaviorLabel = (val: string): val is BehaviorFilterLabels =>
    BEHAVIOR_FILTER_LABELS.includes(val as BehaviorFilterLabels);

  const selectedPerson: PersonFilterLabels = typeof Q_Person ==="string" && isValidPersonLabel(Q_Person)
    ? Q_Person
    : "전체";
  const selectedBehavior: BehaviorFilterLabels = typeof Q_Behavior==="string" && isValidBehaviorLabel(
    Q_Behavior
  )
    ? Q_Behavior
    : "받고 싶어한";

  //핸들러
  const handlerPersonSelect = (label: PersonFilterLabels) => {
    searchParams.set("targetType", label);
    setSearchParams(searchParams);
  };
  const handlerBehaviorSelect = (label: BehaviorFilterLabels) => {
    searchParams.set("rankType", label);
    setSearchParams(searchParams);
  };

  const visible = showAll ? allProducts : allProducts.slice(0, 6);

  return (
    <RankingWrapper>
      <RankingTitle>실시간 급상승 선물랭킹</RankingTitle>
      <PaddingMd />
      <PersonCategory
        options={personFilterOptions}
        selected={selectedPerson}
        onSelect={handlerPersonSelect}
      />
      <PaddingMd />
      <BehaviorCategory
        options={behaviorOptions}
        selected={selectedBehavior}
        onSelect={handlerBehaviorSelect}
      />
      <PaddingMd />
      <RankingProducts>
        {visible.map((product) => (
          <RankingItem key={product.id} {...product}></RankingItem>
        ))}
      </RankingProducts>

      <PaddingLg />
      <ShowMoreBtn
        onClick={() => {
          setShowAll(!showAll);
        }}
      >
        {showAll ? "접기" : "더보기"}
      </ShowMoreBtn>

      <PaddingLg />
    </RankingWrapper>
  );
};

export default Ranking;
