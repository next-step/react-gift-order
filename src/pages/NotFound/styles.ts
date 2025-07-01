import styled from '@emotion/styled';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 60px);
  background-color: ${({ theme }) => theme.colors.gray[200]};
`;

export const NotFoundImage = styled.img`
  width: 130px;
  height: auto;
`;

export const Spacer1 = styled.div`
  height: ${({ theme }) => theme.spacing.spacing4};
`;

export const Title = styled.h3`
  ${({ theme }) => theme.typography.title1Bold}
  color: ${({ theme }) => theme.semantic.text.default};
  text-align: center;
`;

export const Spacer2 = styled.div`
  height: ${({ theme }) => theme.spacing.spacing2};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  text-align: center;
`;

export const Spacer3 = styled.div`
  height: ${({ theme }) => theme.spacing.spacing8};
`;

export const HomeButton = styled.button`
  padding: ${({ theme }) => theme.spacing.spacing4};
  background-color: ${({ theme }) => theme.semantic.brand.kakaoYellow};
  border: none;
  color: ${({ theme }) => theme.semantic.text.default};
  cursor: pointer;
  min-width: 200px;
  
  &:hover {
    background-color: ${({ theme }) => theme.semantic.brand.kakaoYellowHover};
  }
  
  &:active {
    background-color: ${({ theme }) => theme.semantic.brand.kakaoYellowActive};
  }
`; 