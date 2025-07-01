/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { giftThemes, type GiftTheme } from '../data/mock';

const Title = styled.h3`
  font-size: ${({ theme }) => theme.typography.title1Bold};
  font-weight: ${({ theme }) => theme.typography.title1Bold};
  text-align: left;
  width: 100%;
  padding: 24px 20px 20px;
  height: 24px;
`;
const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, auot);
  gap: ${({ theme }) => theme.typography.spacing.spacing3};
  padding: ${({ theme }) => theme.typography.spacing.spacing4};
  background-color: ${({ theme }) => theme.colors.backgroundDefault};
`;

const ThemeItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  text-align: center;
`;

const Icon = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
`;

const Label = styled.span`
  ${({ theme }) => theme.typography.label2Regular};
  color: ${({ theme }) => theme.colors.textDefault};
`;

export const GiftThemeGrid = () => {
  return (
    <>
      <Title>선물 테마</Title>
      <GridWrapper>
        {giftThemes.map((theme: GiftTheme) => (
          <ThemeItem key={theme.themeId}>
            <Icon src={theme.image} alt={theme.name} />
            <Label>{theme.name}</Label>
          </ThemeItem>
        ))}
      </GridWrapper>
    </>
  );
};
