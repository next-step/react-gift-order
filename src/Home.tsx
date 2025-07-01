import NaviBar from "@/components/NaviBar"
import { Outlet, useNavigate } from "react-router-dom"
import Button from "@/components/Button"
import backarrow from "@/assets/back-arrow.svg"
import person from "@/assets/person.png"
import Layout from "./components/Layout"
import Title from "./components/Title"
import Screen from "./components/Screen"
import Box from "./components/Box"

const Home = () => {
  const navigate = useNavigate()

  const handleGoBack = (): void => {
    navigate(-1)
  }

  return (
    <Screen>
      <Layout>
        <NaviBar>
          <Box direction="left">
            <Button
              src={backarrow}
              onClick={handleGoBack}
              width="40px"
              height="40px"
            />
          </Box>
          <Box direction="center">
            <Title>선물하기</Title>
          </Box>
          <Box direction="right">
            <Button
              src={person}
              onClick={() => navigate(`/Login`)}
              width="40px"
              height="40px"
            />
          </Box>
        </NaviBar>
        <main style={{ paddingTop: "44px" }}>
          <Outlet />
        </main>
      </Layout>
    </Screen>
  )
}

export default Home
