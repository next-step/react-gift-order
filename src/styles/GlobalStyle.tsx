import { Global, css, useTheme } from '@emotion/react';
import { resetStyle } from '@/styles/ResetStyle';
import { baseStyle } from '@/styles/BaseStyle';

const GlobalStyle = () => {
  const theme = useTheme();

  return <Global styles={css([resetStyle, baseStyle(theme)])} />;
};

export default GlobalStyle;
