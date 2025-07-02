import useNavigateBackOrHome from '@/hooks/useNavigateBackOrHome';
import { BackButton, Container, LogoImage, LogoLink, Nav, UserIconLink } from './styles';

const BackIcon = () => (
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
    <path d="M15 18L9 12L15 6" />
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
    <path d="M20 21a8 8 0 0 0-16 0" />
  </svg>
);

const Navigation = () => {
  const navigateBackOrHome = useNavigateBackOrHome();

  return (
    <Container>
      <Nav>
        <BackButton onClick={navigateBackOrHome}>
          <BackIcon />
        </BackButton>

        <LogoLink href="/" data-discover="true">
          <LogoImage src="/선물하기.webp" alt="카카오 선물하기 로고" />
        </LogoLink>

        <UserIconLink href="/login">
          <UserIcon />
        </UserIconLink>
      </Nav>
    </Container>
  );
};

export default Navigation;
