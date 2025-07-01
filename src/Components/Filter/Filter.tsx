import Layout from '@/Components/Layout/Layout';
import Gender from './Gender';
import Category from './Category';
import styled from '@emotion/styled';
import { useSearchParams } from 'react-router-dom';

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.semantic.text.default};
  margin-bottom: 16px;
`;

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedGender = searchParams.get('gender') || '전체';
  const selectedCategory = searchParams.get('category') || '받고 싶어한';

  const handleGenderChange = (value: string) => {
    searchParams.set('gender', value);
    setSearchParams(searchParams);
  };

  const handleCategoryChange = (value: string) => {
    searchParams.set('category', value);
    setSearchParams(searchParams);
  };

  return (
    <Layout>
      <Title>실시간 급상승 선물랭킹</Title>
      <Gender selectedGender={selectedGender} onChange={handleGenderChange} />
      <Category selectedCategory={selectedCategory} onChange={handleCategoryChange} />
    </Layout>
  );
};

export default Filter;
