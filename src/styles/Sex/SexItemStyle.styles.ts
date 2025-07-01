import styled from '@emotion/styled';

export const SexContainerWrapperItem = styled.li<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  text-align: center;
  width: 70px;
  height: 50px;
  font-size: 16px;
  color: ${({ selected }) => (selected ? '#fff' : '#333')};
  background: ${({ selected }) => (selected ? '#007bff' : '#f0f0f0')};
  cursor: pointer;
  border-radius: 4px;
`;
