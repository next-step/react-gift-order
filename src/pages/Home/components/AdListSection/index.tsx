import { Typography } from '@/components/common/Typography';
import styled from '@emotion/styled';

export const AdListSection = () => {
  return (
    <Section>
      <Wrapper>
        <Typography as='p' variant='label2Regular' color='gray700'>
          카카오테크 캠퍼스 3기여러분
        </Typography>
        <Typography as='p' variant='label1Bold' color='gray900'>
          프론트엔드 2단계 과제 화이팅! 🎉
        </Typography>
      </Wrapper>
    </Section>
  );
};

const Section = styled.section(({ theme }) => ({
  padding: `0 ${theme.spacing.spacing4}`,
}));

const Wrapper = styled.div(({ theme }) => ({
  width: '100%',
  borderRadius: '1rem',
  backgroundColor: theme.colors.semantic.brand.kakaoYellow,
  padding: theme.spacing.spacing4,
  display: 'flex',
  flexDirection: 'column',
}));
