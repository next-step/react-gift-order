import styled from '@emotion/styled';
import PlusIcon from '@/assets/add.svg?react';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 6.5rem;
  margin-top: 2.8rem;
`;

const AddFriendButton = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 97%;
  height: 4.6rem;
  border-radius: 1.25rem;
  background-color: white;
`;

const PlusBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 2.6rem;
  aspect-ratio: 1 / 1;
  background-color: ${({ theme }) => theme.colors.yellow600};
  border-radius: 1rem;
  margin-left: ${({ theme }) => theme.spacing.spacing4};
`;

const Text = styled.div`
  ${({ theme }) => theme.typography.title2Bold};
  color: black;
  margin-left: ${({ theme }) => theme.spacing.spacing3};
`;

export const SelectFriend = () => {
  return (
    <Container>
      <AddFriendButton>
        <PlusBtn>
          <PlusIcon fill="black" />
        </PlusBtn>
        <Text>선물할 친구를 선택해 주세요.</Text>
      </AddFriendButton>
    </Container>
  );
};
