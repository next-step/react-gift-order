import styled from '@emotion/styled';

const Line = styled.div(({ theme }) => ({
  width: '100%',
  height: theme.spacing.spacing2,
  backgroundColor: theme.colors.semantic.backgroundDisabled,
  margin: `${theme.spacing.spacing3} auto`,
}));

const Divider = () => {
  return <Line />;
};

export default Divider;
