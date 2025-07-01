import { DataCategory } from '@/Components/Category/DataCategory';
import { Grid, Item, ImageStyle } from '@/Components/Category/GiftCategoryGrid';
import { Wrapper, Title } from '@/Components/Category/GiftCategoryStyle';

const GiftCategoryList = () => {

  return (
    <Wrapper>
      <Title>선물 테마</Title>
      <Grid>
        {DataCategory.map((itemData) => (
          <Item key={itemData.themeId}>
            <ImageStyle src={itemData.image} alt={itemData.name} />
            <span>{itemData.name}</span>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default GiftCategoryList;