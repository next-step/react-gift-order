import styled from "@emotion/styled";

const Plus = ({ size }: { size: string }) => {
  return (
    <PlusSvg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#2a3038"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14"></path>
      <path d="M12 5v14"></path>
    </PlusSvg>
  );
};

export default Plus;

const PlusSvg = styled.svg`
  cursor: pointer;
`;
