import { useLocation } from 'react-router-dom'
import LoginForm from '@/features/Login/components/LoginForm'

const LoginPage = () => {
  const location = useLocation()
  const from = location.state?.from || { pathname: '/' }
  const redirectPath = from.pathname + (from.search || '')

  return <LoginForm redirectPath={redirectPath} />
}

export default LoginPage
