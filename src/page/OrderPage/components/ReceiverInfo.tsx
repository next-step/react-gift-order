import useInput from '@/hooks/useInput';
import styled from '@emotion/styled';

const ReceiverInfoContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.semantic.background.default};
  padding: ${({ theme }) => theme.spacing.spacing4} ${({ theme }) => theme.spacing.spacing3};
  margin-bottom: ${({ theme }) => theme.spacing.spacing4};

  div {
    display: flex;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.spacing.spacing2};

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  p {
    min-width: 3.75rem;
    font-size: ${({ theme }) => theme.typography.body1Regular.fontSize};
    font-weight: ${({ theme }) => theme.typography.body1Regular.fontWeight};
    line-height: ${({ theme }) => theme.typography.body1Regular.lineHeight};
    color: ${({ theme }) => theme.colors.semantic.text.default};
  }

  input {
    width: 100%;
    padding: ${({ theme }) => theme.spacing.spacing2};
    border: 1px solid ${({ theme }) => theme.colors.colorScale.gray[200]};
    border-radius: 8px;
    font-size: ${({ theme }) => theme.typography.body1Regular.fontSize};
    line-height: ${({ theme }) => theme.typography.body1Regular.lineHeight};
    color: ${({ theme }) => theme.colors.semantic.text.default};

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.semantic.brand.kakaoYellow};
    }
  }
`;

const ReceiverInfo = () => {
  const nameInput = useInput('text');
  const phoneInput = useInput('number');

  return (
    <ReceiverInfoContainer>
      <h3>받는 사람</h3>
      <div>
        <p>이름</p>
        <input placeholder="이름을 입력하세요." />
        {nameInput.error && <p>{nameInput.error}</p>}
      </div>
      <div>
        <p>전화번호</p>
        <input placeholder="전화번호를 입력하세요." />
        {phoneInput.error && <p>{phoneInput.error}</p>}
      </div>
      <div>
        <p>수량</p>
        <input placeholder="수량을 입력하세요." type="number" defaultValue="1" />
      </div>
    </ReceiverInfoContainer>
  );
};

export default ReceiverInfo;
