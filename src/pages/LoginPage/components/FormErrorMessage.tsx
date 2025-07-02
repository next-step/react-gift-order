import { ErrorMessage } from "../LoginPage.styles";

function FormErrorMessage({ errorMessage }: { errorMessage: string | null }) {
  if (!errorMessage) {
    return null;
  }

  return <ErrorMessage>{errorMessage}</ErrorMessage>;
}

export default FormErrorMessage;
