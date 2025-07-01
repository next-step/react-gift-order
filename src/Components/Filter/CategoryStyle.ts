import styled from '@emotion/styled';

export const TabGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 150px;
  padding: 8px 0;
  border-radius: 10px;
  background-color:  ${({theme}) =>theme.color.blue.blue100};
  border: 1px solid ${({ theme }) => theme.color.blue.blue200};
`;

export const Tab = styled.button<{ active: boolean }>`
  border: none;
  background: none;
  font-size: 14px;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  color: ${({ active, theme }) =>
    active ? theme.color.blue.blue700 : theme.color.blue.blue500};

  cursor: pointer;
  transition: all 0.2s ease;
`;