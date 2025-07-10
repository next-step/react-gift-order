import styled from '@emotion/styled';

const Divider = styled.div`
  height: ${({ theme }) => theme.spacing.spacing2};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray200};
  margin: ${({ theme }) => theme.spacing.spacing2} 0;
`;

export default Divider;
