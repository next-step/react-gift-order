import styled from '@emotion/styled';

export const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

export const FilterItem = styled.button<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 60px;

  width: 2.75rem;
  height: 2.75rem;
  border-radius: 1rem;
  border: none;

  background-color: ${({ active, theme }) =>
    active ? theme.color.blue.blue700 : theme.color.blue.blue200};

  color: ${({ active, theme }) => (active ? theme.color.blue.blue00 : theme.color.blue.blue800)};

  font-size: 20px;
  cursor: pointer;
  transition: 0.2s;
`;

export const Label = styled.div<{ active: boolean }>`
  margin-top: 6px;
  font-size: 13px;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  color: ${({ active, theme }) => (active ? theme.color.blue.blue700 : theme.color.gray.gray700)};
  text-align: center;
`;
