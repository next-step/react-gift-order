import styled from '@emotion/styled';
export const NotFoundWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  font-weight: bold;
`;

function NotFound() {
  return <NotFoundWrapper>404: Not Found 페이지를 찾을 수 없습니다</NotFoundWrapper>;
}

export default NotFound;
