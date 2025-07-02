import * as Styles from "./Spacing.styled";

export interface BaseSpacingProps {
    size?: `${number}px` | `${number}rem` | `${number}em`;
}

export const Spacing = {
    Vertical: ({ size }: BaseSpacingProps) => {
        return <Styles.VerticalSpacing size={size} />;
    },
};
