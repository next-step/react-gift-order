import styled from '@emotion/styled';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  max-width: 720px;
  width: 100%;
  height: 2.75rem;
  background-color: ${({ theme }) => theme.colors.semantic.background.default};
  z-index: 1000;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 ${({ theme }) => theme.spacing.spacing2};
`;

export const LogoLink = styled.a`
  display: flex;
  height: 100%;
`;

export const LogoImage = styled.img`
  height: 100%;
`;

export const BackButton = styled.button`
  display: flex;

  svg {
    width: 28px;
    height: 28px;
    stroke-width: 1.8;
  }
`;

export const UserIconLink = styled.a`
  display: flex;

  svg {
    width: 24px;
    height: 24px;
    stroke-width: 2;
  }
`;
