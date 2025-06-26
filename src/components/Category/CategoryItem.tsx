import * as S from './CategorySection.styles';

interface Props {
  name: string;
  image: string;
}

const CategoryItem = ({ name, image }: Props) => {
  return (
    <S.Item>
      <S.Image src={image} alt={name} />
      <S.Name>{name}</S.Name>
    </S.Item>
  );
};

export default CategoryItem;
