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

const Title = styled.p(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 700,
  lineHeight: '1.5rem',
  color: theme.semanticColors.text.default,
  margin: '0px',
  textAlign: 'left',
}));

const InputBoxContainer = styled.div`
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

const InputBoxTitle = styled.p(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 400,
  lineHeight: '1.375rem',
  color: theme.semanticColors.text.default,
  margin: '0px',
  textAlign: 'left',
  minWidth: '3.75rem',
}));

const InputBoxStyle = styled.div`
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

type RecipientProps = {
  name: string;
  onChangeName: (newName: string) => void;
  phone: string;
  onChangePhone: (newPhne: string) => void;
  errorName?: boolean;
  errorPhone?: boolean;
  quantity: number;
  onChangeQuantity: (newQty: number) => void;
  errorQuantity?: boolean;
};

export const Recipinet = ({
  name,
  onChangeName,
  phone,
  onChangePhone,
  errorName,
  errorPhone,
  quantity,
  onChangeQuantity,
  errorQuantity,
}: RecipientProps) => {
  return (
    <Wrapper>
      <Margin height="12px" />
      <Title>받는 사람</Title>
      <Margin height="12px" />
      <InputBoxContainer>
        <InputBoxTitle>이름</InputBoxTitle>
        <InputBoxStyle>
          <InputBox
            type="text"
            value={name}
            onChange={(e) => onChangeName(e.target.value)}
            hasError={errorName}
            placeholder="이름을 입력하세요."
          />
          {errorName && <ErrorMessage>이름을 입력해주세요.</ErrorMessage>}
        </InputBoxStyle>
      </InputBoxContainer>
      <Margin height="8px" />
      <InputBoxContainer>
        <InputBoxTitle>전화번호</InputBoxTitle>
        <InputBoxStyle>
          <InputBox
            type="tel"
            value={phone}
            onChange={(e) => onChangePhone(e.target.value)}
            hasError={errorPhone}
            placeholder="전화번호를 입력하세요."
          />
          {errorPhone && <ErrorMessage>전화번호를 입력해주세요.</ErrorMessage>}
        </InputBoxStyle>
      </InputBoxContainer>
      <Margin height="8px" />
      <InputBoxContainer>
        <InputBoxTitle>수량</InputBoxTitle>
        <InputBoxStyle>
          <InputBox
            type="number"
            value={quantity}
            onChange={(e) => onChangeQuantity(Number(e.target.value))}
            hasError={errorQuantity}
            placeholder="수량을 입력하세요."
          />
          {errorQuantity && <ErrorMessage>구매 수량은 1개 이상이어야 합니다.</ErrorMessage>}
        </InputBoxStyle>
      </InputBoxContainer>
      <Margin height="24px" />
    </Wrapper>
  );
};
