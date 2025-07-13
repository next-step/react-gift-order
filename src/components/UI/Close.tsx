import styled from "@emotion/styled";

type CloseProps = {
  size: string;
};

const Close = ({ size }: CloseProps) => {
  return (
    <CloseSvg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M18 6 6 18"></path>
      <path d="m6 6 12 12"></path>
    </CloseSvg>
  );
};

export default Close;

const CloseSvg = styled.svg`
  cursor: pointer;
`;
