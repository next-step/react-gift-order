import type { TargetButtonType } from '@/types/button';
import styled from '@emotion/styled';

const Button = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 3.1rem;
  height: 100%;
`;

const Icon = styled.div<{ isClicked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.8rem;
  aspect-ratio: 1 / 1;
  color: ${({ isClicked }) => (isClicked ? '#FFF' : '#aacefd')};
  background-color: ${({ theme, isClicked }) =>
    isClicked ? theme.colors.blue700 : theme.colors.blue100};
  border-radius: 1rem;
  font-size: 14;
  font-weight: 600;
  transition: background-color 0.3s;
`;

const Text = styled.div<{ isClicked: boolean }>`
  ${({ theme, isClicked }) =>
    isClicked ? theme.typography.label1Bold : theme.typography.label1Regular}
  color: ${({ theme, isClicked }) => (isClicked ? theme.colors.blue700 : theme.colors.gray700)};
  margin-top: ${({ theme }) => theme.spacing.spacing1};
  transition: color 0.3s;
`;

export const TargetButton = ({ type, isClicked, setCurrentTarget }: TargetButtonType) => {
  let icon = '?';
  let text = '?';
  const icons = ['ALL', '👩🏻', '👨🏻', '👦🏻'];
  const texts = ['전체', '여성이', '남성이', '청소년이'];

  if (type === 'All') {
    icon = icons[0];
    text = texts[0];
  } else if (type === 'Female') {
    icon = icons[1];
    text = texts[1];
  } else if (type === 'Male') {
    icon = icons[2];
    text = texts[2];
  } else if (type === 'Youth') {
    icon = icons[3];
    text = texts[3];
  }

  return (
    <Button
      onClick={() => {
        setCurrentTarget(type);
      }}
    >
      <Icon isClicked={isClicked}>{icon}</Icon>
      <Text isClicked={isClicked}>{text}</Text>
    </Button>
  );
};
