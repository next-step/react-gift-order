import ThemeItem from '@/components/ThemeItem';
import mockTheme from '@/mocks/mockdata.ts';
import { ThemeContainerWrapper, ThemeTitle, Message } from '@/styles/Theme/ThemeContainer.styles';

function ThemeContainer() {
  return (
    <ThemeContainerWrapper>
      <ThemeTitle>선물 테마</ThemeTitle>
      {mockTheme.map((theme) => (
        <ThemeItem key={theme.themeId} theme={theme} />
      ))}
      <Message>응원 메시지!~!</Message>
    </ThemeContainerWrapper>
  );
}

export default ThemeContainer;
