import styled from '@emotion/styled';

export const FieldSet = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0;
`;

export const Legend = styled.legend`
  display: block;
  padding: 12px 0px;
  font-size: ${({ theme }) => theme.typography.subtitle.subtitle1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle.subtitle1Bold.fontWeight};
`;
