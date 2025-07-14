import styled from '@emotion/styled';

interface Props {
  price: number;
}

const FixedContainer = styled.div(({ theme }) => ({
  position: 'fixed',
  maxWidth: '720px',
  bottom: '0',
  width: '100%',
  background: theme.colors.semantic.backgroundDefault,
  display: 'flex',
  justifyContent: 'center',
  zIndex: '999',
}));

const InnerButton = styled.button(({ theme }) => ({
  width: '100%',
  maxWidth: '720px',
  height: '56px',
  padding: theme.spacing.spacing3,
  border: 'none',
  backgroundColor: theme.colors.semantic.kakaoYellow,
  color: theme.colors.semantic.textDefault,
  ...theme.typography.body1Bold,
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: theme.colors.semantic.kakaoYellowHover,
  },

  '&:active': {
    backgroundColor: theme.colors.semantic.kakaoYellowActive,
  },
}));

const OrderButton = ({ price }: Props) => {
  return (
    <FixedContainer>
      <InnerButton type="submit">
        {price.toLocaleString()}원 주문하기
      </InnerButton>
    </FixedContainer>
  );
};

export default OrderButton;
