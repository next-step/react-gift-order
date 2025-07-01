import styled from "@emotion/styled";

type UserProps = {
  size: string;
};

const User = ({ size }: UserProps) => {
  return (
    <UserSvg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="5"></circle>
      <path d="M20 21a8 8 0 0 0-16 0"></path>
    </UserSvg>
  );
};

export default User;

const UserSvg = styled.svg`
  cursor: pointer;
`;
