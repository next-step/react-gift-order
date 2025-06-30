import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { css, Global, ThemeProvider } from '@emotion/react'
import { resetStyles } from '@/styles/reset'
import { fontStyles } from '@/styles/font'
import { theme } from '@/styles/theme'
import { baseStyles } from './styles/base.ts'
import 'material-icons/iconfont/material-icons.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* emotion 테마 적용 */}
    <ThemeProvider theme={theme}>
      {/* Global 스타일 적용 */}
      <Global
        styles={css`
          ${resetStyles}
          ${fontStyles}
          ${baseStyles}
        `}
      />
      {/* App 컴포넌트 렌더링 */}
      <App />
    </ThemeProvider>
  </StrictMode>,
)
