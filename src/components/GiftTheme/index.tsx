import { giftThemes } from './mockData';
import {
  Section, 
  Title, 
  Grid, 
  Item, 
  Image, 
  Label
} from './styles';
const GiftThemeSection = () => {
  return (
    <Section>
      <Title>선물 테마</Title>
      <Grid>
        {giftThemes.map((theme) => (
          <Item key={theme.themeId}>
            <Image src={theme.image} alt={theme.name} />
            <Label>{theme.name}</Label>
          </Item>
        ))}
      </Grid>
    </Section>
  );
};

export default GiftThemeSection;
