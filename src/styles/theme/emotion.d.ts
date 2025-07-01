import '@emotion/react';
import type theme from './theme';

type AppTheme = typeof theme;

declare module '@emotion/react' {
    export interface Theme extends AppTheme { }
}
