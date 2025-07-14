import styled from '@emotion/styled';
import type { PropsWithChildren } from 'react';
import { HorizontalSpacing } from '../common/Spacing/HorizontalSpacing';
import { Typography } from '../common/Typography';

export type BaseProductListItemProps = PropsWithChildren<{
  imageSrc: string;
  title: string;
  subtitle: string;
  amount: number;
}>;

export const BaseProductListItem = ({
  imageSrc,
  title,
  subtitle,
  amount,
  ...props
}: BaseProductListItemProps) => {
  return (
    <Wrapper {...props}>
      <Image src={imageSrc} alt={title} />
      <HorizontalSpacing size='spacing3' />
      <Typography
        as='p'
        variant='label1Regular'
        color='gray600'
        style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
      >
        {subtitle}
      </Typography>
      <Title
        as='h6'
        variant='label1Regular'
        color='gray900'
        style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
      >
        {subtitle}
      </Title>
      <HorizontalSpacing size='spacing1' />
      <Amount as='p' variant='title2Bold' color='gray900'>
        {amount} <span>원</span>
      </Amount>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 4px;
  aspect-ratio: '1/1';
  overflow: hidden;
`;

const Title = styled(Typography)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Amount = styled(Typography)`
  word-break: break-word;

  & > span {
    font-weight: 400;
  }
`;
