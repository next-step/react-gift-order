import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { theme as emotionTheme } from '@/styles/Theme'
import GlobalStyle from '@/styles/GlobalStyle'
import Home from '@/pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import MyPage from "./pages/MyPage";
import ProtectedRoute from "./Components/ProtectedRoute";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { LoginProvider } from "./contexts/LoginContext"
import Order from './pages/Order'


const muiTheme = createTheme()

function App() {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <LoginProvider>
        <EmotionThemeProvider theme={{ ...muiTheme, ...emotionTheme }}>
          <BrowserRouter>
            <GlobalStyle />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/my" element={
                <ProtectedRoute>
                  <MyPage />
                </ProtectedRoute>
              } />
              <Route path="/order/:id" element={<Order />} />
              <Route path="/order" element={<Navigate to="/" replace />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </EmotionThemeProvider>
      </LoginProvider>
    </MuiThemeProvider>
  )
}

export default App