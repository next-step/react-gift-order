import styled from '@emotion/styled';
import type { ReactNode } from 'react';

type Props = {
  center: ReactNode;
  left?: ReactNode;
  right?: ReactNode;
};

export const BaseNavigation = ({ center, left, right }: Props) => {
  return (
    <NavContainer>
      <LeftSection>{left}</LeftSection>
      <CenterSection>{center}</CenterSection>
      <RightSection>{right}</RightSection>
    </NavContainer>
  );
};

const NavContainer = styled.nav(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: '2.75rem',
  paddingLeft: theme.spacing.spacing2,
  paddingRight: theme.spacing.spacing2,
  backgroundColor: theme.colors.semantic.background.default,
  gap: theme.spacing.spacing1,
}));

const LeftSection = styled.div({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
});

const CenterSection = styled.div({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const RightSection = styled.div({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
});
