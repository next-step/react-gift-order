import styled from '@emotion/styled';

export const StyledSendPersonContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px 0px;

  input {
    padding: 3px 8px;
    margin: 5px 10px;
    height: 30px;
  }
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
  }
  textarea {
    width: 95%;
    padding: 4px 12px;
    border-radius: 5px;
    &:focus {
      outline: none;
    }
  }
  p {
    margin-top: 6px;
    width: 95%;
  }
`;
