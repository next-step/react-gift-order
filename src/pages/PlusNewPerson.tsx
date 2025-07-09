import plusicon from "@/assets/Plus_icon.png"
import PlusButton from "@/components/PlusButton"
import PresentWhoBackGround from "@/components/PresentWhoBackGround"
import Text from "@/components/Text"
import PresentWho from "@/components/PresentWho"
import { useAuth } from "@/context/AuthContext"
import { Cookie } from "@/utils/cookie"

const PlusNewPerson = () => {
  const { isLoggedIn } = useAuth()

  if (!isLoggedIn) {
    return (
      <PresentWhoBackGround>
        <PresentWho
          color="gray00"
          padding="spacing4"
          margin="spacing0"
          border="spacing18"
        >
          <PlusButton
            src={plusicon}
            backGroundColor="kakaoYellow"
            borderRadius="spacing4"
            padding="spacing2"
          ></PlusButton>
          <Text
            variant="subtitle1Bold"
            margin="spacing2"
            padding="spacing2"
            marginTop="spacing1"
          >
            선물할 친구를 선택해 주세요
          </Text>
        </PresentWho>
      </PresentWhoBackGround>
    )
  }
  return (
    <PresentWhoBackGround>
      <PresentWho
        color="gray00"
        padding="spacing4"
        margin="spacing0"
        border="spacing18"
      >
        <PlusButton
          src={plusicon}
          backGroundColor="kakaoYellow"
          borderRadius="spacing4"
          padding="spacing2"
        ></PlusButton>
        <Text
          variant="subtitle1Bold"
          margin="spacing2"
          padding="spacing2"
          marginTop="spacing1"
        >
          {Cookie.getUsernameFromCookie()}님! 선물할 친구를 선택해 주세요.
        </Text>
      </PresentWho>
    </PresentWhoBackGround>
  )
}
export default PlusNewPerson
