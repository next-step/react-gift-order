import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.spacing4};
`;
export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.semantic.backgroundDefault};
  padding: ${({ theme }) => theme.spacing.spacing4};
`;
export const Title = styled.h1`
  font: ${({ theme }) => theme.typography.title2Bold};
`;
export const Input = styled.input`
  padding: ${({ theme }) => theme.spacing.spacing3};
  margin-top: ${({ theme }) => theme.spacing.spacing2};
  border: 1px solid ${({ theme }) => theme.colors.semantic.borderDefault};
  border-radius: ${({ theme }) => theme.spacing.spacing2};
  color: ${({ theme }) => theme.colors.semantic.textDefault};
  width: 100%;
  vertical-align: baseline;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.semantic.textDefault};
  }
`;
export const Padding = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.spacing.spacing2};
`;
export const Hint = styled.p`
  font: ${({ theme }) => theme.typography.label2Regular};
  color: ${({ theme }) => theme.colors.semantic.textPlaceholder};
  margin: ${({ theme }) => theme.spacing.spacing1};
`;
export const InputRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.spacing3};
  width: 100%;
`;
export const Label = styled.p`
  font: ${({ theme }) => theme.typography.title2Regular};

  flex: 0 0 60px;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #ffc107;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
`;
