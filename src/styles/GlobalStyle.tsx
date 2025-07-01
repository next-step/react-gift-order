import { Global, css, useTheme } from '@emotion/react';
import { resetStyle } from '@/styles/resetStyle';
import { baseStyle } from '@/styles/baseStyle';

const GlobalStyle = () => {
  const theme = useTheme();

  return <Global styles={css([resetStyle, baseStyle(theme)])} />;
};

export default GlobalStyle;
