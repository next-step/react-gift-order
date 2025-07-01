import styled from '@emotion/styled';
import CategoryBtn from '@/components/giftHome/GiftThemes/CategoryBtn';
import { categoryData } from '@/data/CATEGORY_DATA';
import Text from '@/common/Text';

const GiftCategoryList = () => {
  return (
    <Layout>
      <Text size="title1" weight="bold">
        선물 테마
      </Text>
      <CategoryItem>
        {categoryData.map((category) => (
          <CategoryBtn
            key={category.themeId}
            name={category.name}
            image={category.image}
          />
        ))}
      </CategoryItem>
    </Layout>
  );
};

export default GiftCategoryList;

const Layout = styled.div`
  padding: ${({ theme }) => theme.spacing.spacing6};
`;

const CategoryItem = styled.div`
  margin-top: ${({ theme }) => theme.spacing.spacing7};
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing.spacing3};
`;
