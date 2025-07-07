import styled from '@emotion/styled';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.semantic.background.fill};
`;

export const FirstSection = styled.div`
  background-color: ${({ theme }) => theme.semantic.background.default};
  border: 1px solid ${({ theme }) => theme.semantic.background.fill};
  padding: ${({ theme }) => theme.spacing.spacing4};
`;

export const Spacer = styled.div`
  height: ${({ theme }) => theme.spacing.spacing2};
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.spacing5} 0;
`;

export const PreviewImageContainer = styled.div`
  width: 360px;
  height: 240px;
  overflow: hidden;
  background: ${({ theme }) => theme.semantic.background.default};
`;

export const FixedBottomButton = styled.button`
  position: fixed;
  bottom: 0;
  width: 720px;
  height: 60px;
  background-color: ${({ theme }) => theme.semantic.brand.kakaoYellow};
  color: ${({ theme }) => theme.colors.gray[900]};
  border: none;
  ${({ theme }) => theme.typography.body1Bold};
  cursor: pointer;
  z-index: 1000;
  
  &:hover {
    background-color: ${({ theme }) => theme.semantic.brand.kakaoYellowHover};
  }
  
  &:active {
    background-color: ${({ theme }) => theme.semantic.brand.kakaoYellowActive};
  }
`;

export const ContentWrapper = styled.div`
  padding-bottom: 70px;
`;
