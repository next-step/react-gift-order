import { GOODS_DATA } from '@/assets/goodsData';
import type { Goods } from '@/assets/goodsData';
import styled from '@emotion/styled';
const basicRankingComponentNumber = 6;
const ManyRankingComponentNumber = 18;

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
  const repeatCnt = isVisible ? ManyRankingComponentNumber : basicRankingComponentNumber;
  const repeatItems = Array.from({ length: repeatCnt }, (_, i) => GOODS_DATA[i % GOODS_DATA.length]);
  return (
    <>
      {repeatItems.map((item: Goods, index: number) => (
        <div key={index}>
          <StyledPresentRankingItemDiv>
            <StyledPresentRankingNumContainer index={index + 1}>{index + 1}</StyledPresentRankingNumContainer>
            <StyledPresentRankingItemImage src={item.imageURL} alt='' />
            <StyledPresentRankingItemBrandName className='brand_name'>
              {item.brandInfo.name}
            </StyledPresentRankingItemBrandName>
            <StyledPresentRankingItemPresentItem className='goods_name'>
              {item.name}
            </StyledPresentRankingItemPresentItem>
            <StyledPresentRankingItemPrasentPrice className='goods_price'>
              {item.price.sellingPrice.toLocaleString()} 원
            </StyledPresentRankingItemPrasentPrice>
          </StyledPresentRankingItemDiv>
        </div>
      ))}
    </>
  );
};
//toLocaleString() 메서드는 숫자나 날짜 객체를 문자열로 변환할 때 사용
export default PresentItem;
