import LoginFormSection from '@/components/LoginFormSection';
import Navigation from '@/components/Navigation';

const LoginPage = () => {
  return (
    <>
      <Navigation showLoginButton={false} />
      <LoginFormSection />
    </>
  );
};

export default LoginPage;
