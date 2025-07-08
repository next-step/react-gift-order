import * as S from './styles';

interface ImageProps {
  src: string;
  alt: string;
  variant?: 'card' | 'preview';
}

const Image = ({ src, alt, variant = 'card' }: ImageProps) => {
  return (
    <S.Image variant={variant} src={src} alt={alt} />
  );
};

export default Image;
