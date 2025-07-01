import { Wrapper } from "@/components/Common/FilterButton/FilterButton.styles";

interface Props {
  icon?: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export default function FilterButton({ icon, label, isActive, onClick }: Props) {
  return (
    <Wrapper isActive={isActive} onClick={onClick}>
      <div>{icon}</div>
      <p>{label}</p>
    </Wrapper>
  )
}
