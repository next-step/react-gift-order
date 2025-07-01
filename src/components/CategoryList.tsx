import styled from '@emotion/styled';
import { categories } from '@/data/categories';

const Box = styled.div`
  background-color: white;
  height: 350px;
`;

const List = styled.ul`
  display: flex;
  gap: 17px;

  flex-direction: row; // 가로로 배치
  flex-wrap: wrap;
  justify-content: space-between; // 항목들이 균등하게 배치
`;

const Title = styled.h1`
  display: flex;
  align-items: center;

  font-weight: bold;
  font-size: 20px;

  margin: 20px 10px;
  padding: 10px 0px 0px 10px;
`;

const Item = styled.li`
  width: calc(16% - 17px); // 화면이 좁아져도 5개씩 배치되도록 설정
  text-align: center;

  cursor: pointer;

  margin: 5px;
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
`;

const Name = styled.div`
  font-size: 12px;
`;

function CategoryList() {
  return (
    <Box>
      <Title>선물 테마</Title>
      <List>
        {categories.map((cat) => (
          <Item key={cat.themeId}>
            <Img src={cat.image} alt={cat.name} />
            <Name>{cat.name}</Name>
          </Item>
        ))}
      </List>
    </Box>
  );
}

export default CategoryList;
