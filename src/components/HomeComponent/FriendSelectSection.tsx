import TextBox from "../common/TextBox";
import { useUserGreeting } from "../../hooks/useUserGreeting";

const FriendSelectSection = () => {
  const handleFreindSelectButtonClick = () => {
    console.log("친구 선택 버튼 클릭!");
  };

  const { isLoggedIn, nickname } = useUserGreeting();

  const primaryTextContent = isLoggedIn
    ? `${nickname}님! 선물할 친구를 선택해 주세요!`
    : "선물할 친구를 선택해주세요";

  const secondaryTextContent = "";

  return (
    <div className="bg-gray-50">
      <div className="w-full p-5">
        <TextBox
          smallButtonType="GIFT_FRIENDS"
          primaryText={primaryTextContent}
          secondaryText={secondaryTextContent}
          onSmallButtonClick={handleFreindSelectButtonClick}
          smallButtonChildren=""
        />
      </div>
    </div>
  );
};
export default FriendSelectSection;
