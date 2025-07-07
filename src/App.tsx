import { BrowserRouter } from 'react-router-dom'
import { Global } from '@emotion/react'
import { globalStyle } from '@/styles/GlobalStyle'
import AppRouter from '@/routes/Router'
import { UserProvider } from '@/contexts/UserContext'

const App = () => {
  return (
    <>
      <Global styles={globalStyle} />
      <BrowserRouter>
        <UserProvider>
          <AppRouter />
        </UserProvider>
      </BrowserRouter>
    </>
  )
}

export default App
