import {
  ButtonWrapper,
  Button,
  Emoji,
  Label,
} from "@/components/AgeSelectionButton/AgeSelectionButton.style";

export interface AgeSelectButtonProps {
  ageType: string;
  label: string;
  emoji: string;
  selected?: boolean;
  onClick: (ageType: string) => void;
}

export default function AgeSelectButton({
  ageType,
  label,
  emoji,
  selected,
  onClick,
}: AgeSelectButtonProps) {
  return (
    <ButtonWrapper>
      <Button selected={selected} onClick={() => onClick(ageType)}>
        <Emoji>{emoji}</Emoji>
      </Button>
      <Label selected={selected}>{label}</Label>
    </ButtonWrapper>
  );
}
