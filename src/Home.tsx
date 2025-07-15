import NaviBar from "@/components/NaviBar"
import { Outlet, useNavigate } from "react-router-dom"
import ButtonWithImg from "@/components/ButtonWithImg"
import backarrow from "@/assets/back-arrow.svg"
import person from "@/assets/person.png"
import Layout from "@/components/Layout"
import Screen from "@/components/Screen"
import Box from "@/components/Box"
import TitleIcon from "@/assets/Title_icon.webp"
import { useAuth } from "@/context/AuthContext"

const Home = () => {
  const navigate = useNavigate()
  const { isLoggedIn } = useAuth()

  const handleGoBack = (): void => {
    navigate(-1)
  }
  const handleMypage = (): void => {
    if (!isLoggedIn) {
      navigate(`/login`)
    } else {
      navigate(`/my`)
    }
  }
  return (
    <Screen>
      <Layout>
        <NaviBar>
          <Box direction="left">
            <ButtonWithImg
              src={backarrow}
              onClick={handleGoBack}
              width="40px"
              height="40px"
            />
          </Box>
          <Box direction="center">
            <ButtonWithImg
              src={TitleIcon}
              onClick={() => navigate(`/`)}
              width="auto"
              height="40px"
            />
          </Box>
          <Box direction="right">
            <ButtonWithImg
              src={person}
              onClick={handleMypage}
              width="40px"
              height="40px"
            />
          </Box>
        </NaviBar>
        <main
          style={{
            paddingTop: "44px",
            boxSizing: "border-box",
          }}
        >
          <Outlet />
        </main>
      </Layout>
    </Screen>
  )
}

export default Home
