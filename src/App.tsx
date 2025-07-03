import { ThemeProvider } from '@emotion/react'
import GlobalStyles from './styles/GlobalStyles'
import { theme } from './styles/theme'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import { AuthProvider } from './contexts/AuthContext'

const App = () => {
  return (
    <BrowserRouter>
      {/* emotion 테마 적용 */}
      <ThemeProvider theme={theme}>
        {/* 인증 컨텍스트 적용 */}
        <AuthProvider>
          {/* Global 스타일 적용 */}
          <GlobalStyles />
          {/* 라우터 적용 */}
          <Router />
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
