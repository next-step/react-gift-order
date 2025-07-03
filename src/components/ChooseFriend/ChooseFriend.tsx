import { Message, PlusButton, Wrapper } from '@/components/ChooseFriend/ChooseFriend.styes';

export default function ChooseFriend() {
  const id = sessionStorage.getItem('splitedId');

  return (
    <Wrapper>
      <PlusButton>+</PlusButton>
      <Message>{id && `${id}님!`} 선물한 친구를 선택해 주세요.</Message>
    </Wrapper>
  );
}
