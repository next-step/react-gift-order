import { HorizontalSpacing } from '@/components/common/Spacing/HorizontalSpacing';
import { Typography } from '@/components/common/Typography';
import styled from '@emotion/styled';

type Props = {
  invalid?: boolean;
  message?: string;
  size?: 'small';
} & React.InputHTMLAttributes<HTMLInputElement>;

export const UnderlineInputField = ({ invalid, disabled, message, ...props }: Props) => {
  return (
    <div>
      <Input invalid={invalid} disabled={disabled} {...props} />
      {message && (
        <>
          <HorizontalSpacing size='spacing1' />
          <Typography variant='label2Regular' color={invalid ? 'critical' : 'gray600'}>
            {message}
          </Typography>
        </>
      )}
    </div>
  );
};

const Input = styled.input<Pick<Props, 'invalid' | 'disabled'>>(({ theme, invalid }) => ({
  width: '100%',
  boxSizing: 'border-box',
  color: theme.colors.semantic.text.default,
  transition: 'border-color 200ms',
  borderStyle: 'solid',

  '&:focus': {
    outline: 'none',
    borderColor: theme.colors.scale.gray700,
  },

  '&:disabled': {
    color: theme.colors.scale.gray600,
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: theme.colors.scale.gray600,
  },

  minHeight: '2.75rem',
  ...theme.typography.body1Regular,
  padding: `${theme.spacing.spacing2} 0`,
  borderWidth: '0 0 1px',

  borderColor: invalid ? theme.colors.semantic.critical.default : theme.colors.scale.gray400,
}));
