import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 20px 0;
  border-radius: 8px;
`;

export const Section = styled.div`
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 8px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledInput = styled.input<{ error?: boolean }>`
  width: 100%;
  height: 44px;
  padding: 0 12px;
  font-size: 14px;
  border: 1px solid ${({ error, theme }) => (error ? 'red' : theme.color.semantic.border.default)};
  border-radius: 8px;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.color.semantic.text.placeholder};
  }
`;

export const StyledTextarea = styled.textarea<{ error?: boolean }>`
  width: 100%;
  height: 80px;
  padding: 12px;
  font-size: 14px;
  resize: none;
  border: 1px solid ${({ error, theme }) => (error ? 'red' : theme.color.semantic.border.default)};
  border-radius: 8px;

  &::placeholder {
    color: ${({ theme }) => theme.color.semantic.text.placeholder};
  }
`;

export const ErrorMsg = styled.p`
  color: ${({ theme }) => theme.color.semantic.status.critical};
  font-size: 12px;
  margin: 0;
`;

export const HelperText = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.color.semantic.text.placeholder};
`;

export const ProductInfo = styled.div`
  padding: 20px 16px;
  border-radius: 8px;
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const ProductImage = styled.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 4px;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  & > strong {
    font-size: 14px;
  }

  & > span {
    font-size: 12px;
    color: ${({ theme }) => theme.color.semantic.text.placeholder};
  }

  & > b {
    font-weight: bold;
  }
`;

export const OrderButton = styled.button`
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.color.semantic.brand.kakaoYellow};
  border: none;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
`;
