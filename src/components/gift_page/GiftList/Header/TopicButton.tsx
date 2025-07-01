import type { TopicButtonType } from '@/types/button';
import styled from '@emotion/styled';

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.blue100};
`;

const Text = styled.button<{ isClicked: boolean }>`
  all: unset;
  cursor: pointer;
  ${({ theme }) => theme.typography.label1Bold}
  color: ${({ theme, isClicked }) => (isClicked ? theme.colors.blue700 : theme.colors.blue400)};
  transition: color 0.3s;
`;

export const TopicButton = ({ type, isClicked, setCurrentTopic }: TopicButtonType) => {
  let text = '?';
  const texts = ['받고 싶어한', '많이 선물한', '위시로 받은'];

  if (type === 'Wanted') {
    text = texts[0];
  } else if (type === 'MostGifted') {
    text = texts[1];
  } else if (type === 'Wishlisted') {
    text = texts[2];
  }
  return (
    <Button
      onClick={() => {
        setCurrentTopic(type);
      }}
    >
      <Text isClicked={isClicked}>{text}</Text>
    </Button>
  );
};
