import styled from '@emotion/styled';

const Input = styled.input`
  ${({ theme }) => theme.typography.body.body1Regular};
  width: 100%;
  max-width: 320px;
  padding: 12px;
  margin-bottom: ${({ theme }) => theme.spacing.spacing3};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.semantic.borderDefault};

  &::placeholder {
    color: ${({ theme }) => theme.color.gray.gray700};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.gray.gray700};
  }
`;

export default Input;
