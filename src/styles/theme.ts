import color from './color';
import typography from './typography';

const spacing = {
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  14: '56px',
};

const theme = {
  color,
  typography,
  spacing,
};

export type ThemeType = typeof theme;
export default theme;
