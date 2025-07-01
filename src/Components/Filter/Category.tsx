import styled from '@emotion/styled';

const categoryOptions = ['받고 싶어한', '많이 선물한', '위시로 받은'];

const TabGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 150px;
  padding: 8px 0;
  border-radius: 10px;
  background-color:  ${({theme}) =>theme.color.blue.blue100};
  border: 1px solid ${({ theme }) => theme.color.blue.blue200};
`;

const Tab = styled.button<{ active: boolean }>`
  border: none;
  background: none;
  font-size: 14px;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  color: ${({ active, theme }) =>
    active ? theme.color.blue.blue700 : theme.color.blue.blue500};

  cursor: pointer;
  transition: all 0.2s ease;
`;

interface CategoryProps {
  selectedCategory: string;
  onChange: (value: string) => void;
}

const Category = ({ selectedCategory, onChange }: CategoryProps) => {
  return (
    <TabGroup>
      {categoryOptions.map((option) => (
        <Tab
          key={option}
          active={selectedCategory === option}
          onClick={() => onChange(option)}
        >
          {option}
        </Tab>
      ))}
    </TabGroup>
  );
};

export default Category;
