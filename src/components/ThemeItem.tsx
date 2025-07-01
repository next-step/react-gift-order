import { ThemeImage, ThemeItemWrapper, ThemeItemText } from '@/styles/Theme/ThemeItem.styles';

type ThemeProps = {
  themeId: number;
  name: string;
  image: string;
};

function ThemeItem({ theme }: { theme: ThemeProps }) {
  return (
    <ThemeItemWrapper>
      <ThemeImage src={theme.image} alt={theme.name} />
      <ThemeItemText>{theme.name}</ThemeItemText>
    </ThemeItemWrapper>
  );
}

export default ThemeItem;
