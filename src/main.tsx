import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Root from './Root'
import './index.css'

import { ThemeProvider, Global } from '@emotion/react'
import { theme } from './styles/theme'
import { globalReset } from './styles/reset'

const rootElement = document.getElementById('root')
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Global styles={globalReset} />
        <BrowserRouter>
          <Root />
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  )
}
