import { PaddingMd } from "../common/Padding";
import styled from "@emotion/styled";
import RankingItem from "./RankingItem";
import { PaddingLg } from "../common/Padding";
import PersonCategory from "./PersonCategory";
import BehaviorCategory from "./BehaviorCategory";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  BEHAVIOR_FILTER_LABELS,
  PERSON_FILTER_LABELS,
  type BehaviorFilterLabels,
  type PersonFilterLabels,
} from "./types";
import { ROUTE_PATH } from "@/routes/Router";
import { useAuth } from "@/contexts/AuthContext";
import { allProducts } from "@/mocks/product";

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
  gap: ${({ theme }) => theme.spacing.spacing6} ${({ theme }) => theme.spacing.spacing2};
`;
const ShowMoreBtn = styled.button`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray.gray400};
  padding: ${({ theme }) => theme.spacing.spacing4};
`;

const Ranking = () => {
  const navigator = useNavigate();
  const { user } = useAuth();
  const [showAll, setShowAll] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const Q_Person = searchParams.get("targetType");
  const Q_Behavior = searchParams.get("rankType");
  //쿼리 파라미터로 받은 값이 정의된 labels 타입에 있는지(유효성 체크)
  const isValidPersonLabel = (val: string): val is PersonFilterLabels =>
    PERSON_FILTER_LABELS.includes(val as PersonFilterLabels);
  const isValidBehaviorLabel = (val: string): val is BehaviorFilterLabels =>
    BEHAVIOR_FILTER_LABELS.includes(val as BehaviorFilterLabels);

  const selectedPerson: PersonFilterLabels =
    typeof Q_Person === "string" && isValidPersonLabel(Q_Person)
      ? Q_Person
      : "전체";
  const selectedBehavior: BehaviorFilterLabels =
    typeof Q_Behavior === "string" && isValidBehaviorLabel(Q_Behavior)
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
  const handleProductClick = (id: number) => {
    if (!user.isLoggedIn) navigator(ROUTE_PATH.LOGIN);
    else {
      navigator(ROUTE_PATH.ORDER.replace(":productId", String(id)));
    }
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
          <RankingItem
            onClick={() => handleProductClick(product.id)}
            key={product.id}
            {...product}
          ></RankingItem>
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
