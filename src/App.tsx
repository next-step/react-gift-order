import { useEffect, useState } from 'react'

import GlobalStyle from './styles/GlobalStyle'
import { ThemeProvider } from '@emotion/react'
import theme from './styles/theme'
import styled from '@emotion/styled'

import Layout from './components/Layout'

import categories from './mocks/category.mock'

import NavBar from './components/NavBar';
import FriendSelector from './components/FriendSelector'
import GiftCategorySelector from './components/GiftCategorySelector'
import PromoBanner from './components/PromoBanner'
import RealtimeGiftRank from './components/RealtimeGiftRank'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <NavBar />
        <FriendSelector />
        <GiftCategorySelector />
        <PromoBanner />
        <RealtimeGiftRank />
      </Layout>
    </ThemeProvider>
  )
}

export default App
