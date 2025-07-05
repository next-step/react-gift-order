import { GOODS_DATA } from '@assets/goodsData';
import type { Goods } from '@assets/goodsData';
import { URLS } from '@assets/urls';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const BASIC_RANKING_COMPONENT_NUMBER = 6;
const MANY_RANKING_COMPONENT_NUMBER = 18;

const StyledPresentRankingItemDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledPresentRankingItemImage = styled.img`
  position: relative;
  width: 100%;
`;
const StyledPresentRankingItemBrandName = styled.p`
  color: ${({ theme }) => theme.sementicPalette.textDisabled};
  padding: ${({ theme }) => theme.spacing.spacing1};
`;
const StyledPresentRankingItemPresentItem = styled.p`
  color: ${({ theme }) => theme.typography.body2Regular};
  padding-left: ${({ theme }) => theme.spacing.spacing1};
`;
const StyledPresentRankingItemPrasentPrice = styled.p`
  color: ${({ theme }) => theme.typography.body2Bold};
  padding-left: ${({ theme }) => theme.spacing.spacing1};
  padding-top: ${({ theme }) => theme.spacing.spacing2};
`;

const StyledPresentRankingNumContainer = styled.div<{ index: number }>`
  position: absolute;
  background-color: ${({ index, theme }) => (index <= 3 ? theme.palette.red600 : theme.palette.gray600)};
  width: 20px;
  height: 20px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4px;
  border-radius: 2px;
  color: ${({ theme }) => theme.palette.blue00};
  ${({ theme }) => theme.typography.label2Bold}
`;

const PresentItem = ({ isVisible }: { isVisible: boolean }) => {
  const repeatCnt = isVisible ? MANY_RANKING_COMPONENT_NUMBER : BASIC_RANKING_COMPONENT_NUMBER;
  const repeatItems = Array.from({ length: repeatCnt }, (_, i) => GOODS_DATA[i % GOODS_DATA.length]);
  const navigate = useNavigate();

  const handleItemClick = (item: Goods) => {
    navigate(`${URLS.order}?productId=${item.id}`);
  };

  return (
    <>
      {repeatItems.map((item: Goods, index: number) => (
        <div key={index} onClick={() => handleItemClick(item)} style={{ cursor: 'pointer' }}>
          <StyledPresentRankingItemDiv>
            <StyledPresentRankingNumContainer index={index + 1}>{index + 1}</StyledPresentRankingNumContainer>
            <StyledPresentRankingItemImage src={item.imageURL} alt='제품 이미지' />
            <StyledPresentRankingItemBrandName className='brand_name'>{item.brandInfo.name}</StyledPresentRankingItemBrandName>
            <StyledPresentRankingItemPresentItem className='goods_name'>{item.name}</StyledPresentRankingItemPresentItem>
            <StyledPresentRankingItemPrasentPrice className='goods_price'>
              {item.price.sellingPrice.toLocaleString()} 원
            </StyledPresentRankingItemPrasentPrice>
          </StyledPresentRankingItemDiv>
        </div>
      ))}
    </>
  );
};

export default PresentItem;
