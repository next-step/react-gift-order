import styled from "@emotion/styled";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.kakaoYellow};
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 16px;
  border-radius: 20px;
`;
export const Line1 = styled.span`
  color: ${({ theme }) => theme.colors.gray700};
`;
