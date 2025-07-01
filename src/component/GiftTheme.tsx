import { GiftCategory } from '@/mock/GiftCategory';
import styled from '@emotion/styled';
import React from 'react'

const GiftThemeSection = styled.section`
  padding: 1rem;
`;

const Title = styled.h3`
    padding: 0px 8px 20px;
`;

const ThemeGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px 4px;
`;

const ThemeItem = styled.div`
  width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    cursor: pointer;
`;

const ThemeImage = styled.img`
  max-width: 3.125rem;
    max-height: 3.125rem;
    width: 100%;
    border-radius: 18px;
    object-fit: cover;
    overflow: hidden;
`;

const ThemeLabel = styled.p`
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1rem;
    color: rgb(42, 48, 56);
    margin: 0px;
    text-align: left;
`;

const GiftTheme = () => {
  return (
     <GiftThemeSection>
      <Title>선물 테마</Title>
      <ThemeGrid>
        {GiftCategory.map(({ themeId, name, image }) => (
          <ThemeItem key={themeId}>
            <ThemeImage src={image} alt={name} />
            <ThemeLabel>{name}</ThemeLabel>
          </ThemeItem>
        ))}
      </ThemeGrid>
    </GiftThemeSection>
  )
}

export default GiftTheme