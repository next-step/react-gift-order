import styled from '@emotion/styled';
import type { ReactNode, ElementType } from 'react';
import type { Theme } from '@emotion/react';
import { theme } from '@/styles/theme';

type Props = {
  children: ReactNode;
  variant?: VariantKeys;
  color?: ColorKeys;
  as?: HTMLTags;
  width?: string;
  textAlign?: 'left' | 'center' | 'right';
} & React.HTMLAttributes<HTMLElement>;

export const Typography = ({
  children,
  variant = 'body1Regular',
  color = 'default',
  as = 'p',
  width,
  textAlign,
  ...rest
}: Props) => {
  return (
    <StyledTypography
      as={as as ElementType}
      variant={variant}
      colorKey={color}
      width={width}
      textAlign={textAlign}
      {...rest}
    >
      {children}
    </StyledTypography>
  );
};

const StyledTypography = styled.p<{
  variant: VariantKeys;
  colorKey: ColorKeys;
  width?: Props['width'];
  textAlign?: Props['textAlign'];
}>(({ variant, colorKey, theme, width, textAlign = 'left' }) => ({
  ...theme.typography[variant],
  color: getColor(colorKey, theme),
  margin: 0,
  width,
  textAlign,
}));

type ScaleColorKeys = keyof typeof theme.colors.scale;
type BrandColorKeys = keyof typeof theme.colors.semantic.brand;
type TextColorKeys = keyof typeof theme.colors.semantic.text;
type CriticalInfoColorKeys = 'critical' | 'info';

type ColorKeys = ScaleColorKeys | BrandColorKeys | TextColorKeys | CriticalInfoColorKeys;
type VariantKeys = keyof typeof theme.typography;
type HTMLTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'label';

const getColor = (colorKey: ColorKeys, theme: Theme) => {
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

  return theme.colors.semantic.text.default;
};
