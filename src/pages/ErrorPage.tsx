import styled from "@emotion/styled";

function ErrorPage() {
  return (
    <ErrorPageWrapper>
      <ErrorImage
        src="https://media.tenor.com/aC4lUND6reYAAAAM/sullimvs-jinrinotes.gif"
        alt="sad dog image"
      />
      <ErrorText>404 Not Found Error</ErrorText>
      <p>페이지가 없습니다.</p>
    </ErrorPageWrapper>
  );
}

const ErrorImage = styled.img`
  border-radius: 10%;
`;

const ErrorText = styled.h1`
  font-weight: bold;
`;

const ErrorPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 80vh;
`;

export default ErrorPage;
