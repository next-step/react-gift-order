import styled from '@emotion/styled';

const Divider = styled.hr`
  border: none;
  height: 8px;
  background-color: ${({ theme }) => theme.color.gray100};
  margin: 24px 0;
  border-radius: 4px;
`;

const SectionDivider = () => {
  return <Divider />;
};

export default SectionDivider;
