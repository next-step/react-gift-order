import { Button } from "@/components/ShowMoreButton/ShowMoreButton.style";

export interface ShowMoreButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export default function ShowMoreButton({
  children,
  onClick,
}: ShowMoreButtonProps) {
  return <Button onClick={onClick}>{children}</Button>;
}
