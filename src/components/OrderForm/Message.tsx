import { ErrorMessage } from '@components/common/ErrorMessage';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  width: 100%;
  padding: 0px 1rem;
`;

const Container = styled.div`
  width: 100%;
`;

const TextArea = styled.textarea<{ hasError: boolean }>(({ theme, hasError }) => ({
  width: '100%',
  boxSizing: 'border-box',
  color: theme.semanticColors.text.default,
  transition: 'border-color 200ms',
  borderStyle: 'solid',
  minHeight: '2.75rem',
  fontSize: '1rem',
  fontWeight: 400,
  lineHeight: '1.375rem',
  padding: '8px 12px',
  borderWidth: '1px',
  borderRadius: '8px',
  borderColor: hasError ? theme.semanticColors.state.critical : theme.semanticColors.border.default,
  '&:focus': {
    outline: 'none',
    borderColor: theme.colorScale.gray700,
  },
  '&::placeholder': {
    color: theme.semanticColors.text.placeholder,
  },
}));

type MessageProps = {
  value: string;
  onChange: (newMsg: string) => void;
  error?: string;
};

export const Message = ({ value, onChange, error }: MessageProps) => {
  const hasError = Boolean(error);

  return (
    <Wrapper>
      <Container>
        <TextArea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="메세지를 입력해주세요."
          hasError={hasError}
        />
        {hasError && <ErrorMessage>{error}</ErrorMessage>}
      </Container>
    </Wrapper>
  );
};
