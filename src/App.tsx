import { BrowserRouter } from 'react-router-dom'
import { Global } from '@emotion/react'
import { globalStyle } from '@/styles/GlobalStyle'
import AppRouter from '@/routes/Router'

const App = () => {
  return (
    <>
      <Global styles={globalStyle} />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  )
}

export default App
