import { useNavigate } from 'react-router';
import styled from '@emotion/styled';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 720px;
  height: 44px;
  padding: 0 10px;
  background-color: ${({ theme }) => theme.color.semantic.backgroundDefault};
`;

const IconButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const TitleLink = styled.a`
  font-size: 20px;
  font-weight: 800;
  text-decoration: none;
  color: inherit;
`;

const LeftIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <path d="m15 18 -6 -6 6 -6" />
    </svg>
);

const UserIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <circle cx="12" cy="8" r="5" />
        <path d="M20 21a8 8 0 0 0 -16 0" />
    </svg>
);

export default function Header() {
    const navigate = useNavigate();

    return (
        <HeaderContainer>
            <IconButton aria-label="뒤로가기" onClick={() => navigate(-1)}>
                <LeftIcon />
            </IconButton>

            <TitleLink href="/" aria-label="홈으로 이동">
                선물하기
            </TitleLink>

            <IconButton aria-label="로그인" onClick={() => navigate("/login")}>
                <UserIcon />
            </IconButton>
        </HeaderContainer>
    );
}
