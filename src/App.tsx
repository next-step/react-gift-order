import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { theme as emotionTheme } from '@/styles/Theme'
import GlobalStyle from '@/styles/GlobalStyle'
import Home from '@/pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const muiTheme = createTheme()

function App() {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <EmotionThemeProvider theme={emotionTheme}>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </EmotionThemeProvider>
    </MuiThemeProvider>
  )
}

export default App