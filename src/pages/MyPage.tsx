import Layout from "@/components/Layout"
import { useAuth } from "@/context/AuthContext"
import Text from "@/components/Text"
import { useNavigate } from "react-router-dom"
import Blank from "@/components/Blank"
import ButtonWithStyle from "@/components/ButtonWithStyle"
import { Cookie } from "@/utils/cookie"

const MyPage = () => {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate(`/login`)
  }
  return (
    <Layout paddingLeft="spacing4" paddingRight="spacing4">
      <Blank height="32px" />
      <Text variant="subtitle1Bold" margin="spacing0" padding="spacing0">
        마이페이지
      </Text>
      <Blank height="8px" />
      <Text variant="body1Regular" margin="spacing0" padding="spacing0">
        {Cookie.getUsernameFromCookie()}님 안녕하세요!
      </Text>
      <Text variant="body1Regular" margin="spacing0" padding="spacing0">
        이메일 주소는 {Cookie.getUserEmailFromCookie()}입니다.
      </Text>
      <Blank height="24px" />
      <ButtonWithStyle
        height="44px"
        padding="spacing0"
        margin="spacing6"
        color="gray300"
        onClick={handleLogout}
      >
        <Text variant="subtitle2Regular" padding="spacing3" margin="spacing0">
          로그아웃
        </Text>
      </ButtonWithStyle>
    </Layout>
  )
}

export default MyPage
