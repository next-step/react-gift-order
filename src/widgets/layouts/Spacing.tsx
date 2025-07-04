import * as Styles from "./Spacing.styled";

export interface BaseSpacingProps {
    size?: `${number}px` | `${number}rem` | `${number}em`;
    backgroundColor?: string;
}

export const Spacing = {
    Vertical: ({ backgroundColor, size }: BaseSpacingProps) => {
        return <Styles.VerticalSpacing size={size} backgroundColor={backgroundColor} />;
    },
};
