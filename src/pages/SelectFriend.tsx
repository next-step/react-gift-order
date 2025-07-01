import { FriendContainer, InnerContainer, PlusIcon, FriendText } from '@/styles/Friend.styles';

function SelectFriend() {
  return (
    <FriendContainer>
      <InnerContainer>
        <PlusIcon>+</PlusIcon>
        <FriendText>선물할 친구를 선택해 주세요.</FriendText>
      </InnerContainer>
    </FriendContainer>
  );
}

export default SelectFriend;
