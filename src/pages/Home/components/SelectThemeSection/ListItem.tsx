import { Typography } from '@/components/common/Typography';
import styled from '@emotion/styled';

type Props = {
  image: string;
  label: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
};

export const SelectThemeSectionListItem = ({ image, label, onClick }: Props) => {
  return (
    <Wrapper onClick={onClick}>
      <Image src={image} alt={label} />
      <Typography as='p' variant='label2Regular' color='default'>
        {label}
      </Typography>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  cursor: pointer;
`;

const Image = styled.img`
  max-width: 3.125rem;
  max-height: 3.125rem;
  width: 100%;
  border-radius: 18px;
  object-fit: cover;
  overflow: hidden;
`;
