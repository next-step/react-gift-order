import { HorizontalSpacing } from '@/components/common/Spacing/HorizontalSpacing';
import { Typography } from '@/components/common/Typography';
import styled from '@emotion/styled';

type Props = {
  invalid?: boolean;
  message?: string;
  fieldSize?: 'xsmall' | 'small';
} & React.InputHTMLAttributes<HTMLInputElement>;

export const OutlineInputField = ({ invalid, disabled, message, fieldSize, ...props }: Props) => {
  return (
    <div style={{ width: '100%' }}>
      <Input invalid={invalid} disabled={disabled} fieldSize={fieldSize} {...props} />
      {message && (
        <>
          <HorizontalSpacing size='spacing1' />
          <Typography
            variant='label2Regular'
            color={invalid ? 'critical' : 'gray600'}
            style={{ marginLeft: '0.5rem' }}
          >
            {message}
          </Typography>
        </>
      )}
    </div>
  );
};

const Input = styled.input<Pick<Props, 'invalid' | 'disabled' | 'fieldSize'>>(
  ({ theme, invalid }) => ({
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

    borderWidth: '1px',
    borderRadius: '8px',

    borderColor: invalid ? theme.colors.semantic.critical.default : theme.colors.scale.gray400,
  }),
  ({ fieldSize, theme }) => {
    if (fieldSize === 'xsmall') {
      return {
        padding: `${theme.spacing.spacing2} ${theme.spacing.spacing3}`,
        ...theme.typography.body2Regular,
      };
    }

    return {
      padding: `${theme.spacing.spacing2} ${theme.spacing.spacing3}`,
      ...theme.typography.body1Regular,
    };
  },
);
