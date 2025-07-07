import { GiftCategory } from '@/mock/GiftCategory';
import { GiftThemeSection, ThemeGrid, ThemeImage, ThemeItem, ThemeLabel, Title } from './GiftTheme.styled';


const GiftTheme = () => {


  return (
    <GiftThemeSection>
      <Title>선물 테마</Title>
      <ThemeGrid>
        {GiftCategory.map(({ themeId, name, image }) => (
          <ThemeItem key={themeId} >
            <ThemeImage src={image} alt={name} />
            <ThemeLabel>{name}</ThemeLabel>
          </ThemeItem>
        ))}
      </ThemeGrid>
    </GiftThemeSection>
  );
};

export default GiftTheme;
