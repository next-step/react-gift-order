import { ErrorMessage } from '@components/common/ErrorMessage';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  width: 100%;
  padding: 0px 1rem;
`;

const Margin = styled.div<{ height: string }>`
  width: 100%;
  height: ${({ height }) => height};
  background-color: transparent;
`;

const Text = styled.p(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 700,
  lineHeight: '1.5rem',
  color: theme.semanticColors.text.default,
  margin: '0px',
  textAlign: 'left',
}));

const Container = styled.div`
  width: 100%;
`;

const InputBox = styled.input<{ hasError?: boolean }>(({ theme, hasError }) => ({
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

const InputBoxNotice = styled.p(({ theme }) => ({
  marginLeft: '0.5rem',
  fontSize: '0.75rem',
  fontWeight: '400',
  lineHeight: '1rem',
  color: theme.colorScale.gray600,
  margin: '0px',
  textAlign: 'left',
}));

interface SenderProps {
  value: string;
  onChange: (newSender: string) => void;
  error?: string;
}

export const Sender = ({ value, onChange, error }: SenderProps) => {
  const hasError = Boolean(error);

  return (
    <Wrapper>
      <Margin height={'12px'} />
      <Text>보내는 사람</Text>
      <Margin height={'12px'} />
      <Container>
        <InputBox
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          hasError={hasError}
          placeholder="이름을 입력하세요."
        />
        {hasError ? (
          <ErrorMessage>{error}</ErrorMessage>
        ) : (
          <>
            <Margin height={'4px'} />
            <InputBoxNotice>* 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.</InputBoxNotice>
          </>
        )}
      </Container>
      <Margin height={'24px'} />
    </Wrapper>
  );
};
