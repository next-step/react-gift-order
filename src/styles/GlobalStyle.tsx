import { Global } from '@emotion/react';
import reset from './reset';
import theme from './theme';

const GlobalStyle = () => <Global styles={reset(theme)} />;
export default GlobalStyle;
