import { Global, ThemeProvider } from '@emotion/react'
import { globalReset } from '@/styles/reset'
import { theme } from '@/styles/theme'
import { Layout } from '@/components/Layout'
import { Navbar } from '@/components/Navbar'
import styled from '@emotion/styled'
import GiftFriendSelector from '@/components/GiftFriendSelector'
import { HomeContentCard } from '@/components/HomeContentCard'
import { RankingSection } from '@/components/RankingSection/RankingSection'
import { MotivationBanner } from '@/components/MotivationBanner'
import { CategorySection } from '@/components/CategorySection/CategorySection'
const AppWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[100]};
  display: flex;
  justify-content: center;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalReset} />
      <AppWrapper>
        <Layout>
          <main>
            <GiftFriendSelector />
            <HomeContentCard>
              <CategorySection />
              <MotivationBanner />
              <RankingSection />
            </HomeContentCard>
          </main>
        </Layout>
      </AppWrapper>
    </ThemeProvider>
  )
}

export default App
