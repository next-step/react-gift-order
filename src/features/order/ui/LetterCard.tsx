import * as Styles from "./LetterCard.styled";

export interface LetterCardProps {
    isSelected: boolean;
    imgSrc: string;
    onClick?: () => void;
}

export const LetterCard = ({ isSelected, imgSrc, onClick }: LetterCardProps) => {
    return (
        <Styles.Container isSelected={isSelected} onClick={onClick}>
            <Styles.Image src={imgSrc}></Styles.Image>
        </Styles.Container>
    );
};
