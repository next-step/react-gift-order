import styled from '@emotion/styled';

const Wrapper = styled.div`
  width: 100%;
  padding: 0px 1rem;
`;

const Container = styled.div`
  width: 100%;
`;

const TextArea = styled.textarea(({ theme }) => ({
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
  borderColor: theme.semanticColors.border.default,
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
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export const Message = ({ value, onChange }: MessageProps) => {
  return (
    <Wrapper>
      <Container>
        <TextArea value={value} onChange={onChange} placeholder="메세지를 입력해주세요." />
      </Container>
    </Wrapper>
  );
};
