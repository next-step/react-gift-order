import { Span } from '@/components/Common/SortOption/SortOption.styles.ts';

interface Props {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export default function SortOption({ label, isActive, onClick }: Props) {
  return (
    <Span isActive={isActive} onClick={onClick}>
      {label}
    </Span>
  )
}
