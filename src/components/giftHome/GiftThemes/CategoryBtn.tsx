import styled from '@emotion/styled';
import Text from '@/common/Text';

interface CategoryBtnProps {
  name: string;
  image: string;
}

const CategoryBtn = ({ name, image }: CategoryBtnProps) => {
  return (
    <Content>
      <Image src={image} alt={name} />
      <Text size="label2" weight="regular">
        {name}
      </Text>
    </Content>
  );
};

export default CategoryBtn;

const Content = styled.div`
  width: calc((100% - ${({ theme }) => theme.spacing.spacing3} * 4) / 5);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.spacing3};
`;

const Image = styled.img`
  width: 56px;
  height: 56px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: ${({ theme }) => theme.spacing.spacing1};
`;
