import { Typography } from '@/components/common/Typography';
import { theme } from '@/styles/theme';
import styled from '@emotion/styled';
import { Plus } from 'lucide-react';

export const SelectFriendSection = () => {
  return (
    <Section>
      <Button>
        <IconWrapper>
          <Plus size={24} color={theme.colors.semantic.text.default} />
        </IconWrapper>
        <Typography as='p' variant='body1Bold' color='default' width='100%'>
          선물할 친구를 선택해 주세요.
        </Typography>
      </Button>
    </Section>
  );
};

const Section = styled.section(({ theme }) => ({
  width: '100%',
  padding: `${theme.spacing.spacing4} ${theme.spacing.spacing3} `,
  backgroundColor: theme.colors.scale.gray200,
}));

const Button = styled.button(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.colors.semantic.background.default,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: theme.spacing.spacing3,
  padding: theme.spacing.spacing4,
  borderRadius: '18px',
  cursor: 'pointer',
}));

const IconWrapper = styled.div(({ theme }) => ({
  width: '2.625rem',
  height: '2.625rem',
  borderRadius: '16px',
  backgroundColor: theme.colors.semantic.brand.kakaoYellow,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
}));
