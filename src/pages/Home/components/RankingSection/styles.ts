import styled from '@emotion/styled';

export const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.spacing4};
  background-color: white;
`;

export const Title = styled.h3`
  ${({ theme }) => theme.typography.title1Bold}
  color: ${({ theme }) => theme.semantic.text.default};
  margin-bottom: ${({ theme }) => theme.spacing.spacing4};
`;

export const FilterContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.spacing4};
`;

export const GenderFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.spacing3};
`;

export const ActionFilterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: ${({ theme }) => theme.spacing.spacing4};
  background-color: ${({ theme }) => theme.colors.blue[100]};
  border-radius: 10px;
`;

export const BaseButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
`;

export const ActionButton = styled(BaseButton)<{ isSelected: boolean }>`
  margin: 0;
  text-align: left;
  ${({ theme, isSelected }) => isSelected ? theme.typography.label1Bold : theme.typography.label1Regular}
  color: ${({ theme, isSelected }) => isSelected ? theme.colors.blue[700] : theme.colors.gray[700]};
`;

export const GenderButton = styled(BaseButton)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GenderIconContainer = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  margin-bottom: ${({ theme }) => theme.spacing.spacing1};
  ${({ theme }) => theme.typography.label1Bold}
  background-color: ${({ theme, isSelected }) => isSelected ? theme.colors.blue[700] : theme.colors.blue[100]};
  border-radius: 15px;
  color: ${({ theme, isSelected }) => isSelected ? theme.colors.blue[200] : theme.colors.blue[400]};
`;

export const GenderText = styled.p<{ isSelected: boolean }>`
  margin: 0;
  text-align: left;
  ${({ theme, isSelected }) => isSelected ? theme.typography.label1Bold : theme.typography.label1Regular}
  color: ${({ theme, isSelected }) => isSelected ? theme.colors.blue[700] : theme.colors.gray[700]};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: ${({ theme }) => theme.spacing.spacing2};
  row-gap: ${({ theme }) => theme.spacing.spacing7};
  margin-bottom: ${({ theme }) => theme.spacing.spacing4};
`;

export const MoreButton = styled.button`
  width: 70%;
  padding: ${({ theme }) => theme.spacing.spacing3};
  border: 1px solid ${({ theme }) => theme.colors.gray[400]};
  border-radius: 8px;
  background-color: white;
  cursor: pointer;
  ${({ theme }) => theme.typography.body2Regular}
  color: ${({ theme }) => theme.semantic.text.default};
  display: block;
  margin: ${({ theme }) => theme.spacing.spacing10} auto ${({ theme }) => theme.spacing.spacing8};
`; 