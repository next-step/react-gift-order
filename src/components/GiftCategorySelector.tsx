import styled from '@emotion/styled';
import categories from '../mocks/category.mock';
import PromoBanner from './PromoBanner';

const GiftCategorySelectorWrapper = styled.div`
  width: auto;
  height: auto;
  padding: ${({ theme }) => theme.spacing.spacing8} ${({ theme }) => theme.spacing.spacing4};
`;

const GiftCategorySelectorTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.title.title1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title.title1Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.title.title1Bold.lineHeight};
`;

const GiftCategorySelectorItemBoxStyle = styled.div`
  width: auto;
  height: auto;
  margin-top: ${({ theme }) => theme.spacing.spacing5};
  margin-bottom: ${({ theme }) => theme.spacing.spacing10};
  
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: ${({ theme }) => theme.spacing.spacing5};
  column-gap: ${({ theme }) => theme.spacing.spacing7};
`;

const GiftCategorySelectorItemWrapper = styled.div`
  width: auto;
  height: auto;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GiftCategorySelectorItemImg = styled.img`
  width: ${({ theme }) => theme.spacing.spacing13};
  height: ${({ theme }) => theme.spacing.spacing13};
`;

const GiftCategorySelectorItemText = styled.p`
  font-size: 12px;
  font-weight: 300;
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.spacing1};
`;

function GiftCategorySelectorItemBox() {
  
  return (
    <GiftCategorySelectorItemBoxStyle>
      {categories.map((item) => (
        <GiftCategorySelectorItemWrapper key={item.themeId}>
          <GiftCategorySelectorItemImg
            src={item.image}
            alt={item.name}
          ></GiftCategorySelectorItemImg>
          <GiftCategorySelectorItemText>
            {item.name}
          </GiftCategorySelectorItemText>
        </GiftCategorySelectorItemWrapper>
      ))}
    </GiftCategorySelectorItemBoxStyle>
  );
}

function GiftCategorySelector() {

  return (
    <GiftCategorySelectorWrapper>
      <GiftCategorySelectorTitle>선물 테마</GiftCategorySelectorTitle>
      <GiftCategorySelectorItemBox></GiftCategorySelectorItemBox>
      <PromoBanner></PromoBanner>
    </GiftCategorySelectorWrapper>
  );
}

export default GiftCategorySelector;
