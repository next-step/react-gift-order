import ErrorMessage from "./ErrorMessage";

type Props = {
  error?: { message?: string };
};

export default function ErrorField({ error }: Props) {
  if (!error?.message) return null;
  return <ErrorMessage>{error.message}</ErrorMessage>;
}