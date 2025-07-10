import styled from '@emotion/styled';

const Space = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.spacing.spacing2};
`;

export const Spacing = () => {
  return <Space />;
};
