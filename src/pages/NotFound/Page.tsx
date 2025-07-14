import { HorizontalSpacing } from '@/components/common/Spacing/HorizontalSpacing';
import { Typography } from '@/components/common/Typography';
import styled from '@emotion/styled';
import { Link } from 'react-router';
import { ROUTE_PATH } from '../Routes';

const NotFoundPage = () => {
  return (
    <Wrapper>
      <Image
        src='https://gift-s.kakaocdn.net/dn/gift/webapp/images/m640/img_not_found.png'
        alt='not found'
      />
      <HorizontalSpacing size='spacing7' />
      <Typography as='h3' variant='title1Bold'>
        잘못된 접근입니다.
      </Typography>
      <HorizontalSpacing size='spacing2' />
      <Typography as='p' variant='body1Regular' color='gray700'>
        찾으시는 페이지가 존재하지 않습니다.
      </Typography>
      <HorizontalSpacing size='spacing12' />
      <Link to={ROUTE_PATH.HOME}>
        <Button>홈으로</Button>
      </Link>
    </Wrapper>
  );
};

export default NotFoundPage;

const Wrapper = styled.main(({ theme }) => ({
  width: '100%',
  height: 'calc(100vh - 2.75rem)',
  backgroundColor: theme.colors.scale.gray200,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '5rem 1.25rem',
}));

const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
`;

const Button = styled.button(({ theme }) => ({
  width: '160px',
  height: '48px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.colors.semantic.brand.kakaoYellow,
  color: theme.colors.semantic.text.default,
  ...theme.typography.body1Regular,

  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.colors.semantic.brand.kakaoYellowHover,
  },
  '&:active': {
    backgroundColor: theme.colors.semantic.brand.kakaoYellowActive,
  },
}));
