import { LoginForm } from "@/components/login/LoginForm";
import { LoginLayout } from "@/components/login/LoginLayout";
import { LoginLogo } from "@/components/login/LoginLogo";

export const LoginPage = () => {
  return (
    <>
      <LoginLayout>
        <LoginLogo />
        <LoginForm />
      </LoginLayout>
    </>
  );
};
