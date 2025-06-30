import LoginForm from '@/pages/LoginPage/LoginForm';
import Layout from '@/components/Layout';
import NavigationBar from '@/components/NavigationBar/NavigationBar';

const LoginPage = () => {
  return (
    <Layout>
      <NavigationBar />
      <LoginForm />
    </Layout>
  );
};

export default LoginPage;
