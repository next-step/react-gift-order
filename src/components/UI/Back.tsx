import styled from "@emotion/styled";

type BackProps = {
  size: string;
};

const Back = ({ size }: BackProps) => {
  return (
    <BackSvg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="m15 18-6-6 6-6"></path>
    </BackSvg>
  );
};

export default Back;

const BackSvg = styled.svg`
  cursor: pointer;
`;
