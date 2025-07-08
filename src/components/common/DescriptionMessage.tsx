import styled from "@emotion/styled";

type DescriptionMessageProps = {
  message: string;
};

const DescriptionMessage = ({ message }: DescriptionMessageProps) => {
  return (
    <>
      <Description>{message}</Description>
    </>
  );
};

export default DescriptionMessage;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.gray.gray700};
  font-size: ${({ theme }) => theme.typography.label2Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.label2Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.label2Regular.lineHeight};
  margin-top: ${({ theme }) => theme.spacing.spacing1};
`;
