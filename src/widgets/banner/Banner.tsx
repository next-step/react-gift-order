import * as Styles from "./Banner.styled";

export interface BannerProps {
    title: string;
    subTitle: string;
}

export const Banner = ({ title, subTitle }: BannerProps) => {
    return (
        <Styles.Wrapper>
            <Styles.Container>
                <Styles.SubTitle>{subTitle}</Styles.SubTitle>
                <Styles.Title>{title}</Styles.Title>
            </Styles.Container>
        </Styles.Wrapper>
    );
};
