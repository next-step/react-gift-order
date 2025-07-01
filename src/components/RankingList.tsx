import { rankingItemMock } from "@/assets/rankingItemMock";
import styled from "@emotion/styled";
import Divider from "@/components/Divider";
import { useState } from "react";
import type { ThemeType } from "@/types/ThemeType";
import { useTheme } from "@emotion/react";

const RANKING_LIST_ITEM_VIEW_COUNT = 6;

const RankingList = () => {
  const [viewCount, setViewCount] = useState(RANKING_LIST_ITEM_VIEW_COUNT);
  const theme = useTheme();
  const isClosed = () => {
    return viewCount === RANKING_LIST_ITEM_VIEW_COUNT;
  };
  return (
    <Container>
      <Content>
        {rankingItemMock.slice(0, viewCount).map((item, index) => (
          <Item key={item.id}>
            <ItemRank ranking={index + 1} theme={theme}>
              {index + 1}
            </ItemRank>
            <ItemContent>
              <ItemContentImg src={item.imageURL} />
              <ItemContentBrand>{item.brandInfo.name}</ItemContentBrand>
              <ItemContentTitle>{item.name}</ItemContentTitle>
              <ItemContentPrice>
                {item.price.sellingPrice}
                <span>원</span>
              </ItemContentPrice>
            </ItemContent>
          </Item>
        ))}
      </Content>
      <Divider />
      <ItemContent>
        <MoreBtn
          onClick={() => {
            const rankingListItemViewMaxCount = isClosed() ? rankingItemMock.length : RANKING_LIST_ITEM_VIEW_COUNT;
            setViewCount(rankingListItemViewMaxCount);
          }}
        >
          {isClosed() ? "더보기" : "접기"}
        </MoreBtn>
      </ItemContent>
      <Divider />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;
const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.spacing6} ${({ theme }) => theme.spacing.spacing2};
`;
const Item = styled.div`
  width: 100%;
  position: relative;
`;
type RankingAndTheme = {
  ranking: number;
  theme: ThemeType;
};
const ItemRank = styled.span<RankingAndTheme>`
  position: absolute;
  z-index: 2;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0.25rem;
  left: 0.25rem;
  font: ${({ theme }) => theme.typography.label1Bold};
  color: ${({ theme }) => theme.color.gray00};
  background-color: ${(props) => (props.ranking <= 3 ? props.theme.color.red500 : props.theme.color.gray700)};
`;
const ItemContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ItemContentImg = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center center;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.spacing.spacing3};
`;
const ItemContentBrand = styled.p`
  font: ${({ theme }) => theme.typography.subtitle2Regular};
  color: ${({ theme }) => theme.color.textColor.sub};
  margin-right: auto;
`;
const ItemContentTitle = styled.h6`
  font: ${({ theme }) => theme.typography.subtitle2Bold};
  color: ${({ theme }) => theme.color.textColor.default};
  margin-right: auto;
  margin-bottom: ${({ theme }) => theme.spacing.spacing1};
`;
const ItemContentPrice = styled.p`
  font: ${({ theme }) => theme.typography.title2Bold};
  color: ${({ theme }) => theme.color.textColor.default};
  margin-right: auto;
  word-break: break-word;
`;
const MoreBtn = styled.button`
  max-width: 30rem;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.spacing3};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.gray400};
  background-color: ${({ theme }) => theme.color.gray00};
  cursor: pointer;
`;

export default RankingList;
