import { ErrorMessage } from "../LoginPage.styles";

function FormErrorMessage({ errorMessage }: { errorMessage: string }) {
  return <ErrorMessage>{errorMessage}</ErrorMessage>;
}

export default FormErrorMessage;
