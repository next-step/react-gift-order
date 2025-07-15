import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.spacing3};
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
export const FixedButton = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.navigationBar};
`;
export const Button = styled.button`
  padding: ${({ theme }) => theme.spacing.spacing3};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.semantic.kakaoYellow};
  font: ${({ theme }) => theme.typography.title2Bold};
  color: ${({ theme }) => theme.colors.semantic.textDefault};
  border: none;
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
`;
