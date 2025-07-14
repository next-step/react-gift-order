import styled from '@emotion/styled';
import type { Theme } from '@emotion/react';
import { theme } from '@/styles/theme';

type Props = {
  size: SpacingKeys;
  color?: ColorKeys;
} & React.HTMLAttributes<HTMLDivElement>;

export const HorizontalSpacing = ({ size, color = 'transparent', ...rest }: Props) => {
  return <StyledDiv spacingKey={size} colorKey={color} {...rest} />;
};

const StyledDiv = styled.div<{
  spacingKey: SpacingKeys;
  colorKey: ColorKeys;
}>(({ spacingKey, colorKey, theme }) => ({
  width: '100%',
  height: theme.spacing[spacingKey],
  backgroundColor: getColor(colorKey, theme),
}));

type ScaleColorKeys = keyof typeof theme.colors.scale;
type BrandColorKeys = keyof typeof theme.colors.semantic.brand;
type TextColorKeys = keyof typeof theme.colors.semantic.text;
type CriticalInfoColorKeys = 'critical' | 'info';
type TransparentColorKey = 'transparent';

type ColorKeys =
  | ScaleColorKeys
  | BrandColorKeys
  | TextColorKeys
  | CriticalInfoColorKeys
  | TransparentColorKey;
type SpacingKeys = keyof typeof theme.spacing;

const getColor = (colorKey: ColorKeys, theme: Theme) => {
  if (colorKey === 'transparent') {
    return 'transparent';
  }

  if (colorKey in theme.colors.scale) {
    return theme.colors.scale[colorKey as keyof typeof theme.colors.scale];
  }

  if (colorKey in theme.colors.semantic.brand) {
    return theme.colors.semantic.brand[colorKey as keyof typeof theme.colors.semantic.brand];
  }

  if (colorKey in theme.colors.semantic.text) {
    return theme.colors.semantic.text[colorKey as keyof typeof theme.colors.semantic.text];
  }

  if (colorKey === 'critical') {
    return theme.colors.semantic.critical.default;
  }

  if (colorKey === 'info') {
    return theme.colors.semantic.info.default;
  }

  return 'transparent';
};
