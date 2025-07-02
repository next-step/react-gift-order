import * as Styles from "./TitledSetion.styled";

export interface TitledSectionProps extends React.PropsWithChildren {
    title?: string;
}

export const TitledSection = ({ title, children }: TitledSectionProps) => {
    return (
        <Styles.Wrapper>
            <Styles.Title>{title}</Styles.Title>

            <Styles.Container>{children}</Styles.Container>
        </Styles.Wrapper>
    );
};
