import styled from "@emotion/styled";
import type { Theme } from "@emotion/react";
import type theme from "@/styles/theme";

type Props = {
  size: SpacingKeys;
  color?: ColorKeys;
} & React.HTMLAttributes<HTMLDivElement>;

export const HorizontalSpacing = ({
  size,
  color = "transparent",
  ...rest
}: Props) => {
  return <StyledDiv spacingKey={size} colorKey={color} {...rest} />;
};

const StyledDiv = styled.div<{
  spacingKey: SpacingKeys;
  colorKey: ColorKeys;
}>(({ spacingKey, colorKey, theme }) => ({
  width: "100%",
  height: theme.spacing[spacingKey],
  backgroundColor: getColor(colorKey, theme),
}));

type TransparentColorKey = "transparent";

type ColorKeys = TransparentColorKey;
type SpacingKeys = keyof typeof theme.spacing;

const getColor = (colorKey: ColorKeys, theme: Theme) => {
  if (colorKey === "transparent") {
    return "transparent";
  }
};
