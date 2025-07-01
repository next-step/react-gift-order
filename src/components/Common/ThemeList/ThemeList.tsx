import { ThemeCard } from '@/components/Common/ThemeList/ThemeList.styles';

interface Props {
  image: string;
  name: string;
}

export default function ThemeList({ image, name }: Props) {
  return (
      <ThemeCard>
        <img src={image} alt={name} />
        <p>{name}</p>
      </ThemeCard>
    )
}